/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7334],
  {
    17110: (e) => {
      e.exports = {
        DashboardPage: "discountdashboard_DashboardPage_353rn",
        DashTitleBar: "discountdashboard_DashTitleBar_2m-_V",
        DashTitle: "discountdashboard_DashTitle_1FK58",
        ConfidentialBanner: "discountdashboard_ConfidentialBanner_2H9Kz",
        Throbber: "discountdashboard_Throbber_21Esx",
        ErrorMessage: "discountdashboard_ErrorMessage_190ux",
        ButtonGroup: "discountdashboard_ButtonGroup_2peTi",
      };
    },
    93125: (e) => {
      e.exports = {
        EventDetails: "discountgridheaders_EventDetails_3LMXj",
        Active: "discountgridheaders_Active_2BLec",
        RestrictedEligibility:
          "discountgridheaders_RestrictedEligibility_2lxTi",
        CollisionFreeDiscountEvent:
          "discountgridheaders_CollisionFreeDiscountEvent_15fBc",
        EventName: "discountgridheaders_EventName_2bJFF",
        EditEventLink: "discountgridheaders_EditEventLink_1XHd3",
        EventDates: "discountgridheaders_EventDates_2kY09",
        EventDateRange: "discountgridheaders_EventDateRange_312ig",
        EventNumDays: "discountgridheaders_EventNumDays_OAAVW",
        EventLink: "discountgridheaders_EventLink_VZ3pV",
        EventParticipationCtn:
          "discountgridheaders_EventParticipationCtn_2iuUu",
        ParticipationDetails: "discountgridheaders_ParticipationDetails_2tr5X",
        Title: "discountgridheaders_Title_3mO71",
        Count: "discountgridheaders_Count_1pDZ1",
        Selected: "discountgridheaders_Selected_36G76",
        ParticipationToolTip: "discountgridheaders_ParticipationToolTip_36hxa",
        AppLink: "discountgridheaders_AppLink_3RF-6",
        DiscountGridDataColumn:
          "discountgridheaders_DiscountGridDataColumn_1yW70",
        RelatedDiscount: "discountgridheaders_RelatedDiscount_12zwK",
        BasePrice: "discountgridheaders_BasePrice_1a_Lw",
        GridRowLoadingThrobber:
          "discountgridheaders_GridRowLoadingThrobber_r2FLR",
        CurrencyPicker: "discountgridheaders_CurrencyPicker_2Z65K",
        RelatedInfoPicker: "discountgridheaders_RelatedInfoPicker_O-95g",
        RelatedInfoPickerCtn: "discountgridheaders_RelatedInfoPickerCtn_2nnB1",
        CurrencyDropDown: "discountgridheaders_CurrencyDropDown_2gGuz",
        RelatedInfoDropDown: "discountgridheaders_RelatedInfoDropDown_1jj2u",
        CurrencyDropDownItem: "discountgridheaders_CurrencyDropDownItem_3wPHx",
        RelatedInfoDropDownItem:
          "discountgridheaders_RelatedInfoDropDownItem_1ORam",
      };
    },
    70138: (e) => {
      e.exports = {
        UnknownValue: "gridcomponents_UnknownValue_3ovtf",
        PackageName: "gridcomponents_PackageName_t8fSj",
        PackageType: "gridcomponents_PackageType_3LZvj",
        LastRow: "gridcomponents_LastRow_18dUc",
        AppCount: "gridcomponents_AppCount_2J3kN",
        PackageID: "gridcomponents_PackageID_1E3TV",
      };
    },
    64222: (e, t, i) => {
      "use strict";
      i.d(t, {
        Rg: () => l,
        XB: () => h,
        XD: () => D,
        ik: () => u,
        pA: () => b,
        rf: () => I,
        u2: () => w,
        vc: () => _,
        xQ: () => a,
      });
      var n = i(45878),
        r = i(19320);
      const s = n.Message;
      class a extends s {
        constructor(e = null) {
          super(),
            a.prototype.opt_in_name || r.aR(a.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            a.sm_m ||
              (a.sm_m = {
                proto: a,
                fields: {
                  opt_in_name: {
                    n: 1,
                    br: r.FE.readString,
                    bw: r.Xc.writeString,
                  },
                  targeting_flag: {
                    n: 2,
                    br: r.FE.readFixed64String,
                    bw: r.Xc.writeFixed64String,
                  },
                  settings_flag: {
                    n: 3,
                    br: r.FE.readFixed64String,
                    bw: r.Xc.writeFixed64String,
                  },
                  email_templates: {
                    n: 4,
                    br: r.FE.readString,
                    bw: r.Xc.writeString,
                  },
                  start_rtime: {
                    n: 5,
                    d: 0,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  end_rtime: {
                    n: 6,
                    d: 0,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                },
              }),
            a.sm_m
          );
        }
        static MBF() {
          return a.sm_mbf || (a.sm_mbf = r.Bh(a.M())), a.sm_mbf;
        }
        toObject(e = !1) {
          return a.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(a.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(a.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            i = new a();
          return a.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(a.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(a.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_CreatePartnerAppOptInEmail_Request";
        }
      }
      class o extends s {
        constructor(e = null) {
          super(),
            o.prototype.email_def_id || r.aR(o.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: r.FE.readFixed64String,
                    bw: r.Xc.writeFixed64String,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = r.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(o.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            i = new o();
          return o.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_CreatePartnerAppOptInEmail_Response";
        }
      }
      class l extends s {
        constructor(e = null) {
          super(),
            l.prototype.email_def_id || r.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: r.FE.readFixed64String,
                    bw: r.Xc.writeFixed64String,
                  },
                  targeting_flag: {
                    n: 2,
                    br: r.FE.readFixed64String,
                    bw: r.Xc.writeFixed64String,
                  },
                  settings_flag: {
                    n: 3,
                    br: r.FE.readFixed64String,
                    bw: r.Xc.writeFixed64String,
                  },
                  email_templates: {
                    n: 4,
                    br: r.FE.readString,
                    bw: r.Xc.writeString,
                  },
                  start_rtime: {
                    n: 5,
                    d: 0,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  end_rtime: {
                    n: 6,
                    d: 0,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  reviewed: {
                    n: 7,
                    d: !1,
                    br: r.FE.readBool,
                    bw: r.Xc.writeBool,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = r.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(l.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            i = new l();
          return l.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_UpdatePartnerAppOptInEmail_Request";
        }
      }
      class c extends s {
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new c();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            i = new c();
          return c.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_UpdatePartnerAppOptInEmail_Response";
        }
      }
      class d extends s {
        constructor(e = null) {
          super(),
            d.prototype.accounts_examined || r.aR(d.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  accounts_examined: {
                    n: 1,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  accounts_emailed: {
                    n: 2,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  accounts_not_emailed_opted_out: {
                    n: 3,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  accounts_email_failed: {
                    n: 4,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  completed: { n: 5, br: r.FE.readBool, bw: r.Xc.writeBool },
                  rt_last_updated: {
                    n: 6,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = r.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(d.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            i = new d();
          return d.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerAppOptInEmailStats";
        }
      }
      class u extends s {
        constructor(e = null) {
          super(),
            u.prototype.email_def_id || r.aR(u.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: r.FE.readFixed64String,
                    bw: r.Xc.writeFixed64String,
                  },
                  force_resend: { n: 2, br: r.FE.readBool, bw: r.Xc.writeBool },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = r.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(u.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            i = new u();
          return u.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_SendPartnerAppOptInEmailAndWait_Request";
        }
      }
      class m extends s {
        constructor(e = null) {
          super(),
            m.prototype.results || r.aR(m.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = { proto: m, fields: { results: { n: 1, c: d } } }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = r.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(m.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            i = new m();
          return m.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_SendPartnerAppOptInEmailAndWait_Response";
        }
      }
      class p extends s {
        constructor(e = null) {
          super(),
            p.prototype.opt_in_name || r.aR(p.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  opt_in_name: {
                    n: 1,
                    br: r.FE.readString,
                    bw: r.Xc.writeString,
                  },
                  targeting_flag: {
                    n: 2,
                    br: r.FE.readFixed64String,
                    bw: r.Xc.writeFixed64String,
                  },
                  settings_flag: {
                    n: 3,
                    br: r.FE.readFixed64String,
                    bw: r.Xc.writeFixed64String,
                  },
                  email_templates: {
                    n: 4,
                    br: r.FE.readString,
                    bw: r.Xc.writeString,
                  },
                  start_rtime: {
                    n: 5,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  end_rtime: {
                    n: 6,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  stats: { n: 7, c: d },
                  creator_accountid: {
                    n: 8,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  create_time: {
                    n: 9,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  last_update_time: {
                    n: 10,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  email_def_id: {
                    n: 11,
                    br: r.FE.readFixed64String,
                    bw: r.Xc.writeFixed64String,
                  },
                  completed: { n: 12, br: r.FE.readBool, bw: r.Xc.writeBool },
                  aborted: { n: 13, br: r.FE.readBool, bw: r.Xc.writeBool },
                  deleted: { n: 14, br: r.FE.readBool, bw: r.Xc.writeBool },
                  reviewed: { n: 15, br: r.FE.readBool, bw: r.Xc.writeBool },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = r.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(p.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            i = new p();
          return p.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerAppOptInEmailDef";
        }
      }
      class _ extends s {
        constructor(e = null) {
          super(),
            _.prototype.opt_in_name || r.aR(_.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  opt_in_name: {
                    n: 1,
                    br: r.FE.readString,
                    bw: r.Xc.writeString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = r.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(_.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            i = new _();
          return _.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetPartnerAppOptInEmailDefAndStats_Request";
        }
      }
      class g extends s {
        constructor(e = null) {
          super(),
            g.prototype.defs || r.aR(g.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: { defs: { n: 1, c: p, r: !0, q: !0 } },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = r.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(g.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            i = new g();
          return g.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetPartnerAppOptInEmailDefAndStats_Response";
        }
      }
      class h extends s {
        constructor(e = null) {
          super(),
            h.prototype.email_def_id || r.aR(h.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: r.FE.readFixed64String,
                    bw: r.Xc.writeFixed64String,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = r.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(h.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            i = new h();
          return h.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetEstimatePartnerAppOptInEmail_Request";
        }
      }
      class v extends s {
        constructor(e = null) {
          super(),
            v.prototype.stats || r.aR(v.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = { proto: v, fields: { stats: { n: 1, c: d } } }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = r.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(v.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            i = new v();
          return v.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetEstimatePartnerAppOptInEmail_Response";
        }
      }
      class D extends s {
        constructor(e = null) {
          super(),
            D.prototype.email_def_id || r.aR(D.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: r.FE.readFixed64String,
                    bw: r.Xc.writeFixed64String,
                  },
                  appid: { n: 2, br: r.FE.readUint32, bw: r.Xc.writeUint32 },
                  partnerid: {
                    n: 3,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = r.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(D.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            i = new D();
          return D.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_TestFirePartnerAppOptInEmail_Request";
        }
      }
      class y extends s {
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new y();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            i = new y();
          return y.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_TestFirePartnerAppOptInEmail_Response";
        }
      }
      class S extends s {
        constructor(e = null) {
          super(),
            S.prototype.accountid || r.aR(S.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  accountid: {
                    n: 1,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  appid: { n: 2, br: r.FE.readUint32, bw: r.Xc.writeUint32 },
                  partnerid: {
                    n: 3,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  rtime_notified: {
                    n: 4,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  ignored_unverified_email: {
                    n: 5,
                    br: r.FE.readBool,
                    bw: r.Xc.writeBool,
                  },
                  ignored_email_optout: {
                    n: 6,
                    br: r.FE.readBool,
                    bw: r.Xc.writeBool,
                  },
                  status: { n: 7, br: r.FE.readUint32, bw: r.Xc.writeUint32 },
                  send_rtime: {
                    n: 8,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = r.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(S.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            i = new S();
          return S.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerOptInEmailTracking";
        }
      }
      class b extends s {
        constructor(e = null) {
          super(),
            b.prototype.email_def_id || r.aR(b.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: r.FE.readFixed64String,
                    bw: r.Xc.writeFixed64String,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = r.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(b.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            i = new b();
          return b.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetOptInEmailTracking_Request";
        }
      }
      class f extends s {
        constructor(e = null) {
          super(),
            f.prototype.email_def_id || r.aR(f.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  email_def_id: {
                    n: 1,
                    br: r.FE.readFixed64String,
                    bw: r.Xc.writeFixed64String,
                  },
                  results: { n: 2, c: S, r: !0, q: !0 },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = r.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(f.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            i = new f();
          return f.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetOptInEmailTracking_Response";
        }
      }
      class E extends s {
        constructor(e = null) {
          super(),
            E.prototype.appid || r.aR(E.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  appid: { n: 1, br: r.FE.readUint32, bw: r.Xc.writeUint32 },
                  opt_in: { n: 2, br: r.FE.readBool, bw: r.Xc.writeBool },
                  opt_in_name: {
                    n: 3,
                    br: r.FE.readString,
                    bw: r.Xc.writeString,
                  },
                  jsondata: { n: 4, br: r.FE.readString, bw: r.Xc.writeString },
                  type: { n: 5, br: r.FE.readEnum, bw: r.Xc.writeEnum },
                  accountid_add: {
                    n: 6,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  time_opted_in: {
                    n: 7,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  time_updated: {
                    n: 8,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  accountid_lastmod: {
                    n: 9,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  invited: { n: 10, br: r.FE.readBool, bw: r.Xc.writeBool },
                  accountid_remove: {
                    n: 11,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  time_opted_out: {
                    n: 12,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  pruned: { n: 13, br: r.FE.readBool, bw: r.Xc.writeBool },
                  accountid_prune: {
                    n: 14,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  time_pruned: {
                    n: 15,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  additional_featuring: {
                    n: 16,
                    br: r.FE.readBool,
                    bw: r.Xc.writeBool,
                  },
                  feature_day: {
                    n: 17,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  accountid_invited: {
                    n: 18,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  no_planned_discount: {
                    n: 19,
                    br: r.FE.readBool,
                    bw: r.Xc.writeBool,
                  },
                  pending_review: {
                    n: 20,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  appeal_state: {
                    n: 21,
                    br: r.FE.readEnum,
                    bw: r.Xc.writeEnum,
                  },
                  accountid_appeal: {
                    n: 22,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = r.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(E.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            i = new E();
          return E.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerAppOptInData";
        }
      }
      class k extends s {
        constructor(e = null) {
          super(),
            k.prototype.data || r.aR(k.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: { data: { n: 1, c: E, r: !0, q: !0 } },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = r.Bh(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(k.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            i = new k();
          return k.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_GetSinglePartnerAppOptIns_Response";
        }
      }
      class I extends s {
        constructor(e = null) {
          super(),
            I.prototype.appids || r.aR(I.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: r.FE.readUint32,
                    pbr: r.FE.readPackedUint32,
                    bw: r.Xc.writeRepeatedUint32,
                  },
                  additional_featuring: {
                    n: 2,
                    d: !0,
                    br: r.FE.readBool,
                    bw: r.Xc.writeBool,
                  },
                  opt_in_name: {
                    n: 3,
                    br: r.FE.readString,
                    bw: r.Xc.writeString,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = r.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(I.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            i = new I();
          return I.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_SetFeaturingOnPartnerAppOptIn_Request";
        }
      }
      class G extends s {
        constructor(e = null) {
          super(),
            G.prototype.appids || r.aR(G.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: r.FE.readUint32,
                    pbr: r.FE.readPackedUint32,
                    bw: r.Xc.writeRepeatedUint32,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = r.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(G.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            i = new G();
          return G.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPublishing_SetFeaturingOnPartnerAppOptIn_Response";
        }
      }
      class P extends s {
        constructor(e = null) {
          super(),
            P.prototype.inviteid || r.aR(P.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  inviteid: {
                    n: 1,
                    br: r.FE.readUint64String,
                    bw: r.Xc.writeUint64String,
                  },
                  accountid_sender: {
                    n: 2,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  email: { n: 3, br: r.FE.readString, bw: r.Xc.writeString },
                  real_name: {
                    n: 4,
                    br: r.FE.readString,
                    bw: r.Xc.writeString,
                  },
                  note: { n: 5, br: r.FE.readString, bw: r.Xc.writeString },
                  time_sent: {
                    n: 6,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  current_state: {
                    n: 7,
                    br: r.FE.readEnum,
                    bw: r.Xc.writeEnum,
                  },
                  pub_rights: {
                    n: 8,
                    br: r.FE.readUint64String,
                    bw: r.Xc.writeUint64String,
                  },
                  app_rights: {
                    n: 9,
                    br: r.FE.readUint64String,
                    bw: r.Xc.writeUint64String,
                  },
                  time_receiver_responded: {
                    n: 10,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  accountid: {
                    n: 11,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  time_partner_responded: {
                    n: 12,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  accountid_partner: {
                    n: 13,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  partnerid: {
                    n: 14,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  time_last_updated: {
                    n: 15,
                    br: r.FE.readUint32,
                    bw: r.Xc.writeUint32,
                  },
                  sender_ip: {
                    n: 16,
                    br: r.FE.readString,
                    bw: r.Xc.writeString,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = r.Bh(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(P.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            i = new P();
          return P.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "MembershipInvite";
        }
      }
      class B extends s {
        constructor(e = null) {
          super(),
            B.prototype.invites || r.aR(B.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: { invites: { n: 1, c: P, r: !0, q: !0 } },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = r.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return r.TA(B.M(), e, t);
        }
        static fromObject(e) {
          return r.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            i = new B();
          return B.deserializeBinaryFromReader(i, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return r.F(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          r.l2(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerMembershipInvite_GetInvites_Response";
        }
      }
      var w, R;
      !(function (e) {
        (e.GetSinglePartnerAppOptIn = function (e, t) {
          return e.SendMsg("Publishing.GetSinglePartnerAppOptIn#1", t, k, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
          (e.SetFeaturingOnPartnerAppOptIn = function (e, t) {
            return e.SendMsg(
              "Publishing.SetFeaturingOnPartnerAppOptIn#1",
              t,
              G,
              { ePrivilege: 1 }
            );
          }),
          (e.CreatePartnerAppOptInEmails = function (e, t) {
            return e.SendMsg("Publishing.CreatePartnerAppOptInEmails#1", t, o, {
              ePrivilege: 1,
            });
          }),
          (e.UpdatePartnerAppOptInEmails = function (e, t) {
            return e.SendMsg("Publishing.UpdatePartnerAppOptInEmails#1", t, c, {
              ePrivilege: 1,
            });
          }),
          (e.SendPartnerOptInEmailAndWait = function (e, t) {
            return e.SendMsg(
              "Publishing.SendPartnerOptInEmailAndWait#1",
              t,
              m,
              { ePrivilege: 1 }
            );
          }),
          (e.GetPartnerAppOptInEmailDefAndStats = function (e, t) {
            return e.SendMsg(
              "Publishing.GetPartnerAppOptInEmailDefAndStats#1",
              t,
              g,
              { ePrivilege: 1 }
            );
          }),
          (e.GetEstimatePartnerAppOptInEmail = function (e, t) {
            return e.SendMsg(
              "Publishing.GetEstimatePartnerAppOptInEmail#1",
              t,
              v,
              { ePrivilege: 1 }
            );
          }),
          (e.TestFirePartnerAppOptInEmail = function (e, t) {
            return e.SendMsg(
              "Publishing.TestFirePartnerAppOptInEmail#1",
              t,
              y,
              { ePrivilege: 1 }
            );
          }),
          (e.GetOptInEmailTracking = function (e, t) {
            return e.SendMsg("Publishing.GetOptInEmailTracking#1", t, f, {
              ePrivilege: 1,
            });
          });
      })(w || (w = {})),
        (function (e) {
          e.GetInvites = function (e, t) {
            return e.SendMsg("PartnerMembershipInvite.GetInvites#1", t, B, {
              bConstMethod: !0,
              ePrivilege: 11,
            });
          };
        })(R || (R = {}));
    },
    93523: (e, t, i) => {
      "use strict";
      i.d(t, { U: () => _, _: () => p });
      var n = i(33940),
        r = i(52868),
        s = i.n(r),
        a = i(50265),
        o = (i(6960), i(38800), i(93982), i(67237), i(47330)),
        l = i(59821),
        c = i(23213),
        d = i(5545),
        u = (i(78011), i(95895)),
        m = i(50210);
      i(36764);
      class p {
        constructor(e, t) {
          (this.m_filesToUpload = a.LO.array()),
            (this.m_strUploadPath = null),
            (this.m_fnUploadSuccessCallback = null),
            (this.m_strUploadPath = e),
            (this.m_fnUploadSuccessCallback = t);
        }
        GetUploadImages() {
          return this.m_filesToUpload;
        }
        ClearImages() {
          this.m_filesToUpload = a.LO.array();
        }
        DeleteUploadImage(e) {
          const t = this.m_filesToUpload.findIndex(
            (t) => e.file == t.file && e.uploadTime == t.uploadTime
          );
          t >= 0 &&
            (this.m_filesToUpload.splice(t, 1),
            (this.m_filesToUpload = [...this.m_filesToUpload]));
        }
        AddImageForLanguage(e, t, i, r) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let n = !1;
            return (
              yield new Promise((s) => {
                const a = new FileReader();
                (a.onload = () => {
                  const o = new Image();
                  (o.onload = () => {
                    const a = new u.M(e, t, o, i, r);
                    (this.m_filesToUpload = [...this.m_filesToUpload, a]),
                      (n = !0),
                      s();
                  }),
                    (o.onerror = (e) => {
                      console.error(
                        "CCloudImageUploader failed to load the image, details",
                        e
                      ),
                        (n = !1),
                        s();
                    }),
                    (o.src = a.result.toString());
                }),
                  a.readAsDataURL(e);
              }),
              n
            );
          });
        }
        UploadAllImages(e, t, i, r, s) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const n = {};
            for (const e of this.m_filesToUpload)
              if ("pending" === e.status) {
                const t = e.IsValidImage(i, r, s);
                if (!t.error && !t.needsCrop) {
                  e.status = "uploading";
                  n[`${e.uploadTime}/${e.file.name}`] = this.UploadFile(
                    e.file,
                    e.file.name,
                    e.language
                  );
                }
              }
            const a = yield (0, c.bX)(n);
            return (
              Object.keys(a).forEach((i) => {
                const n = a[i],
                  r = this.m_filesToUpload.find(
                    (e) => `${e.uploadTime}/${e.file.name}` === i
                  );
                if (r)
                  if (1 !== n.success)
                    (r.status = "failed"), (r.message = n.message);
                  else {
                    r.status = "success";
                    const i = (0, m.C)(n.language, t, e);
                    this.m_fnUploadSuccessCallback(
                      n.image_hash,
                      n.file_name,
                      i,
                      (function (e) {
                        switch (e) {
                          case 2:
                            return "image/gif";
                          case 1:
                            return "image/jpeg";
                          case 3:
                            return "image/png";
                          case 4:
                            return "video/mp4";
                          case 5:
                            return "video/webm";
                        }
                        return null;
                      })(n.file_type)
                    );
                  }
              }),
              a
            );
          });
        }
        UploadFile(e, t, i, r, a) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let n = null;
            const r = new FormData();
            r.append("assetfile", e, t),
              r.append("sessionid", d.De.SESSIONID),
              r.append("elangauge", "" + i);
            const a = (function (e) {
              const t = e.toLowerCase();
              if (t.endsWith(".jpg")) return "image/jpeg";
              if (t.endsWith(".png")) return "image/png";
              if (t.endsWith(".gif")) return "image/gif";
              if (t.endsWith(".mp4")) return "video/mp4";
              if (t.endsWith(".webm")) return "video/webm";
              return null;
            })(t);
            if (!a)
              return {
                success: 8,
                message: "Invalid file extension, cannot determine mimetype",
              };
            r.append("mimetype", a);
            try {
              n = yield s().post(this.m_strUploadPath, r, {
                withCredentials: !0,
                headers: { "Content-Type": "multipart/form-data" },
              });
            } catch (e) {
              const t = (0, o.l)(e);
              console.log("CCloudImageUploader.UploadFile failed ", t, e);
            }
            return null == n ? void 0 : n.data;
          });
        }
      }
      function _(e) {
        switch (e) {
          case "image/jpeg":
            return ".jpg";
          case "image/png":
            return ".png";
          case "image/gif":
            return ".gif";
          case "video/mp4":
            return ".mp4";
          case "video/webm":
            return ".webm";
        }
        return (
          console.error("ConvertMimeTypeToExtension:Unexepected mime type ", e),
          ".jpg"
        );
      }
      (0, n.gn)([a.LO], p.prototype, "m_filesToUpload", void 0),
        (0, n.gn)([l.a], p.prototype, "GetUploadImages", null),
        (0, n.gn)([l.a], p.prototype, "ClearImages", null),
        (0, n.gn)([l.a], p.prototype, "DeleteUploadImage", null),
        (0, n.gn)([l.a], p.prototype, "AddImageForLanguage", null),
        (0, n.gn)([l.a], p.prototype, "UploadAllImages", null);
    },
    94082: (e, t, i) => {
      "use strict";
      i.d(t, { NX: () => m, aD: () => u, nf: () => p });
      var n = i(33940),
        r = i(87656),
        s = i(89526),
        a = i(70657),
        o = i(63154),
        l = i(66715),
        c = i(32338),
        d = i(70983);
      function u(e = !1) {
        return (0, n.mG)(this, void 0, void 0, function* () {
          if (e && o.Z.BIsInitialized()) return;
          const t = (0, d.kQ)(
            "partnerbrowse_webapi_token",
            "application_config"
          );
          (0, c.X)(Boolean(t), "require partnerbrowse_webapi_token");
          const i = new a.J(d.De.WEBAPI_BASE_URL, t);
          return (
            ("dev" != d.De.WEB_UNIVERSE && "beta" != d.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: Initializing CStoreItemCache with access token",
                t
              ),
            p(t),
            o.Z.Initialize(i, d.L7.is_partner_member)
          );
        });
      }
      function m() {
        const e = (0, l.T)("usePartnerStoreBrowseAPI"),
          [t, i] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            u().then(() => {
              var t;
              (null === (t = null == e ? void 0 : e.token) || void 0 === t
                ? void 0
                : t.reason) || i(!0);
            });
          }, []),
          t
        );
      }
      function p(e) {
        r.OT.BIsInitialized() ||
          r.OT.Initialize(new a.J(d.De.WEBAPI_BASE_URL, e));
      }
    },
    5052: (e, t, i) => {
      "use strict";
      i.d(t, { K: () => s });
      var n = i(54905),
        r = i.n(n);
      class s {
        static ParseCSVFile(e) {
          return new Promise((t, i) => {
            const n = {
              header: !0,
              skipEmptyLines: "greedy",
              complete: t,
              error: (e) => i({ errors: [e] }),
            };
            r().parse(e, n);
          });
        }
        static ReadFile(e) {
          return new Promise((t, i) => {
            const n = new FileReader();
            (n.onload = (e) => t(n.result)), n.readAsText(e);
          });
        }
        static WriteFile(e, t) {
          let i = document.createElement("a");
          if (navigator.msSaveBlob) navigator.msSaveBlob(e, t);
          else {
            const t = window.URL.createObjectURL(e);
            i.href = t;
          }
          i.setAttribute("download", t), i.click();
          try {
            document.removeChild(i);
          } catch (e) {}
        }
        static WriteCSVToFile(e, t) {
          const i = r().unparse(e, { header: !0 });
          s.WriteFile(new Blob([i], { type: "text/csv:charset=utf-8;" }), t);
        }
        static WriteXMLToFile(e, t) {
          const i = () =>
            this.m_DummyValueForQuestionHack ? "never returned" : "?";
          let n =
            "<" + i() + 'xml version="1.0" encoding="UTF-8" ' + i() + ">\n";
          (n += new XMLSerializer().serializeToString(e)),
            s.WriteFile(
              new Blob([n], { type: "application/xml:charset=utf-8;" }),
              t
            );
        }
      }
      s.m_DummyValueForQuestionHack = 0;
    },
    75746: (e, t, i) => {
      "use strict";
      i.d(t, {
        B7: () => a,
        JA: () => c,
        MH: () => d,
        Sc: () => n,
        Xj: () => o,
        pM: () => l,
      });
      var n,
        r,
        s = i(6960);
      i(38800), i(93523), i(5390), i(52790);
      function a(e, t) {
        var i, n, r, s, a;
        if (e) {
          const o =
            e.collect_trailer_permissions ||
            e.collect_demo_permissions ||
            e.collect_game_profile_intent;
          return Boolean(
            (null === (i = e.categories) || void 0 === i
              ? void 0
              : i.enabled) ||
              (null === (n = e.artist_statement) || void 0 === n
                ? void 0
                : n.enabled) ||
              (null === (r = e.primary_country) || void 0 === r
                ? void 0
                : r.enabled) ||
              (null === (s = e.press_contact) || void 0 === s
                ? void 0
                : s.enabled) ||
              (null === (a = e.dynamic_sections) || void 0 === a
                ? void 0
                : a.length) > 0 ||
              (e.additional_featuring_section_enabled &&
                o &&
                (!t || t.additional_featuring))
          );
        }
        return !1;
      }
      function o(e, t, i = "") {
        if (e) {
          const n = (0, s.j_)(t);
          return e[n] ? e[n] : e.english ? e.english : i;
        }
        return i;
      }
      function l(e, t, i = "") {
        if (e) {
          const n = (0, s.j_)(t);
          return e[n] ? e[n] : i;
        }
        return i;
      }
      function c(e, t) {
        var i;
        const n = (0, s.j_)(t);
        return (
          (null === (i = null == e ? void 0 : e[n]) || void 0 === i
            ? void 0
            : i.length) > 0
        );
      }
      function d(e) {
        var t;
        null === (t = e.dynamic_sections) ||
          void 0 === t ||
          t.forEach((e) => {
            var t;
            null === (t = e.lists) ||
              void 0 === t ||
              t.forEach((e) => {
                var t;
                null === (t = e.options) ||
                  void 0 === t ||
                  t.forEach((e, t) => {
                    u(e.text), u(e.tooltip);
                  });
              });
          });
      }
      function u(e) {
        if (e)
          for (let t = 0; t < 30; ++t) {
            const i = (0, s.j_)(t);
            null == e[i] ||
              null == e[i] ||
              Number.isNaN(e[i]) ||
              (e[i] = "" + e[i]);
          }
      }
      !(function (e) {
        (e[(e[""] = 0)] = ""),
          (e[(e["Steam Game Festival"] = 1)] = "Steam Game Festival"),
          (e[(e["Tabletop Festival"] = 2)] = "Tabletop Festival");
      })(n || (n = {})),
        (function (e) {
          (e[(e.k_Optional = 0)] = "k_Optional"),
            (e[(e.k_Suggested = 1)] = "k_Suggested"),
            (e[(e.k_Required = 2)] = "k_Required");
        })(r || (r = {}));
    },
    5390: (e, t, i) => {
      "use strict";
      i.d(t, {
        I_: () => b,
        S4: () => S,
        UT: () => D,
        Ys: () => p,
        Zu: () => _,
        mj: () => h,
        n: () => y,
        rN: () => g,
        rg: () => v,
        up: () => u,
      });
      var n = i(33940),
        r = i(75746),
        s = i(89511),
        a = i(50265),
        o = i(6960),
        l = (i(38800), i(64222), i(69728)),
        c = i(32338),
        d = i(31621);
      const u = "email_",
        m = "email_section_";
      var p;
      !(function (e) {
        (e[(e.k_RegistrationConfirmation = 0)] = "k_RegistrationConfirmation"),
          (e[(e.k_Reminder = 1)] = "k_Reminder"),
          (e[(e.k_Invite = 2)] = "k_Invite"),
          (e[(e.k_Followup = 3)] = "k_Followup"),
          (e[(e.k_Starting = 4)] = "k_Starting"),
          (e[(e.k_InviteReminder = 5)] = "k_InviteReminder"),
          (e[(e.k_Update = 6)] = "k_Update"),
          (e[(e.k_PermissionRequest = 7)] = "k_PermissionRequest");
      })(p || (p = {}));
      const _ = [
        p.k_Invite,
        p.k_InviteReminder,
        p.k_RegistrationConfirmation,
        p.k_Update,
        p.k_Reminder,
        p.k_Starting,
        p.k_Followup,
        p.k_PermissionRequest,
      ];
      function g(e) {
        switch (e) {
          case p.k_Invite:
            return "Invitation Email";
          case p.k_InviteReminder:
            return "Invitation Reminder Email";
          case p.k_RegistrationConfirmation:
            return "Registration Success Email";
          case p.k_Update:
            return "General Update";
          case p.k_Reminder:
            return "Reminder Email - Just Days Until It Starts";
          case p.k_Starting:
            return "Event Starts Today Email";
          case p.k_Followup:
            return "Follow-up Email";
          case p.k_PermissionRequest:
            return "Media Permission Request";
        }
        return "unknown";
      }
      function h(e) {
        switch (e) {
          case p.k_Invite:
          case p.k_InviteReminder:
            return "Here's what you need to know and how to get registered:";
          case p.k_RegistrationConfirmation:
          case p.k_Update:
            return "Below are some general things to keep in mind and make use of while you prepare for your participation.";
          case p.k_Reminder:
            return "We're here to help connect you with everything you need to have a successful event.";
          case p.k_Starting:
          case p.k_Followup:
          case p.k_PermissionRequest:
            return null;
        }
        return "unknown";
      }
      var v;
      !(function (e) {
        (e[(e.k_Custom = 0)] = "k_Custom"),
          (e[(e.k_AssetKit = 1)] = "k_AssetKit"),
          (e[(e.k_DemoPressPreview = 2)] = "k_DemoPressPreview"),
          (e[(e.k_ScheduleLiveStream = 3)] = "k_ScheduleLiveStream"),
          (e[(e.k_CancelSection = 4)] = "k_CancelSection"),
          (e[(e.k_DemoNotReady = 5)] = "k_DemoNotReady"),
          (e[(e.k_ReviewCategorization = 6)] = "k_ReviewCategorization"),
          (e[(e.k_DemoReview = 7)] = "k_DemoReview"),
          (e[(e.k_PressPreviewDetails = 8)] = "k_PressPreviewDetails"),
          (e[(e.k_StatsSummary = 9)] = "k_StatsSummary"),
          (e[(e.k_SurveyButton = 10)] = "k_SurveyButton"),
          (e[(e.k_DemoLaunch = 11)] = "k_DemoLaunch"),
          (e[(e.k_CallForRegistration = 12)] = "k_CallForRegistration"),
          (e[(e.k_EnterDiscount = 13)] = "k_EnterDiscount"),
          (e[(e.k_EnterDiscountReminder = 14)] = "k_EnterDiscountReminder"),
          (e[(e.k_LearnMore = 15)] = "k_LearnMore"),
          (e[(e.k_MediaUsePermission = 16)] = "k_MediaUsePermission"),
          (e[(e.k_MeasureResults = 17)] = "k_MeasureResults"),
          (e[(e.k_TrailerOrDemoPermissions = 18)] =
            "k_TrailerOrDemoPermissions"),
          (e[(e.k_NextFestQASession = 19)] = "k_NextFestQASession"),
          (e[(e.k_NextFestReturns = 20)] = "k_NextFestReturns"),
          (e[(e.k_NextFestWhatNext = 21)] = "k_NextFestWhatNext"),
          (e[(e.k_NextFestTips = 22)] = "k_NextFestTips"),
          (e[(e.k_NextFestStartsNow = 23)] = "k_NextFestStartsNow"),
          (e[(e.k_MeasureResultsFree = 24)] = "k_MeasureResultsFree"),
          (e[(e.k_NextFestThankYou = 25)] = "k_NextFestThankYou"),
          (e[(e.k_MediaPermissionReminder = 26)] = "k_MediaPermissionReminder"),
          (e[(e.k_SaleThankYou = 27)] = "k_SaleThankYou");
      })(v || (v = {}));
      const D = [
        v.k_Custom,
        v.k_CallForRegistration,
        v.k_AssetKit,
        v.k_DemoPressPreview,
        v.k_PressPreviewDetails,
        v.k_DemoReview,
        v.k_DemoLaunch,
        v.k_EnterDiscount,
        v.k_EnterDiscountReminder,
        v.k_ScheduleLiveStream,
        v.k_ReviewCategorization,
        v.k_DemoNotReady,
        v.k_LearnMore,
        v.k_CancelSection,
        v.k_StatsSummary,
        v.k_SurveyButton,
        v.k_MediaUsePermission,
        v.k_TrailerOrDemoPermissions,
        v.k_MeasureResults,
        v.k_MeasureResultsFree,
        v.k_NextFestQASession,
        v.k_NextFestReturns,
        v.k_NextFestWhatNext,
        v.k_NextFestTips,
        v.k_NextFestStartsNow,
        v.k_NextFestThankYou,
        v.k_MediaPermissionReminder,
        v.k_SaleThankYou,
      ];
      function y(e) {
        switch (e) {
          case v.k_Custom:
            return "Custom text section";
          case v.k_CallForRegistration:
            return "Register now by dateX";
          case v.k_AssetKit:
            return "Asset kit section";
          case v.k_ScheduleLiveStream:
            return "You can schedule a live stream + see schedule";
          case v.k_CancelSection:
            return "Cancel any time";
          case v.k_DemoNotReady:
            return "Cancel by this date, please";
          case v.k_ReviewCategorization:
            return "Review your game's categorization";
          case v.k_DemoReview:
            return "Demo Reminder: Get your demo reviewed";
          case v.k_DemoLaunch:
            return "Demo Reminder: Launch your demo";
          case v.k_DemoPressPreview:
            return "Press Preview Reminder: Register Now";
          case v.k_PressPreviewDetails:
            return "Press Preview details";
          case v.k_EnterDiscount:
            return "Discount, Enter Now";
          case v.k_EnterDiscountReminder:
            return "Discount, Reminder";
          case v.k_SurveyButton:
            return "Survey button";
          case v.k_MeasureResults:
            return "Measuring Your Results (sales, wishlists, demos)";
          case v.k_MeasureResultsFree:
            return "Measuring Your Results (wishlists, demos, livestreams)";
          case v.k_StatsSummary:
            return "Game Stats; demos, wishlists, views, etc.";
          case v.k_LearnMore:
            return "Learn More Link";
          case v.k_MediaUsePermission:
            return "Permission Request: Media Usage";
          case v.k_TrailerOrDemoPermissions:
            return "Permission Request: Trailer and/or Demo";
          case v.k_MediaPermissionReminder:
            return "Permission Reminder: Trailer and/or Demo";
          case v.k_NextFestReturns:
            return "Next Fest:  Returns on _date_";
          case v.k_NextFestQASession:
            return "Next Fest: Join Us For A Live Q&A Session";
          case v.k_NextFestWhatNext:
            return "Next Fest: What's Next";
          case v.k_NextFestTips:
            return "Next Fest: Tips & Best Practices";
          case v.k_NextFestStartsNow:
            return "Next Fest: Starts Today!";
          case v.k_NextFestThankYou:
            return "Next Fest: Concludes. Thank You";
          case v.k_SaleThankYou:
            return "Sale Over: Thank You";
        }
        return "unknown";
      }
      class S {
        constructor(e, t) {
          (this.m_bReadOnly = !1),
            (this.m_strOptInName = e),
            (this.m_email = t),
            (this.m_sections = this.m_email.sections.map((e) => new b(e))),
            (this.m_email.custom_app_list = (
              this.m_email.custom_app_list || []
            ).map((e) => ("string" == typeof e ? Number.parseInt(e) : e)));
        }
        GetOwningOptInName() {
          return this.m_strOptInName;
        }
        SetReadOnly(e) {
          this.m_bReadOnly != e &&
            ((this.m_bReadOnly = e),
            this.m_sections.forEach((t) => t.SetReadOnly(e)));
        }
        BIsReadOnly() {
          return this.m_bReadOnly;
        }
        BHasLanguageData(e) {
          var t, i, n;
          const r = (0, o.j_)(e);
          return (
            (null ===
              (i =
                null === (t = this.m_email.subject) || void 0 === t
                  ? void 0
                  : t[r]) || void 0 === i
              ? void 0
              : i.length) > 0 ||
            (null === (n = this.m_sections) || void 0 === n
              ? void 0
              : n.some((t) => t.BHasLangData(e)))
          );
        }
        BIsDraftEmail() {
          return (
            null === this.m_email.email_def_id ||
            void 0 === this.m_email.email_def_id
          );
        }
        BHasSectionType(e) {
          return this.m_sections.some((t) => t.GetType() == e);
        }
        GetModel() {
          return this.m_email;
        }
        GetUniqueID() {
          return this.m_email.unique_id;
        }
        GetType() {
          return this.m_email.type;
        }
        GetNumberSections() {
          return this.m_sections.length;
        }
        GetEmailTargeting() {
          return this.m_email.targeting || 1;
        }
        GetServerEmailDefID() {
          return this.m_email.email_def_id
            ? "" + this.m_email.email_def_id
            : this.m_email.email_def_id;
        }
        GetInternalName() {
          return this.m_email.internal_name;
        }
        GetAssetKitURL() {
          return this.m_email.asset_kit_url;
        }
        GetWikiDocURL() {
          return this.m_email.wiki_doc_url;
        }
        GetSurveyLinkURL() {
          return this.m_email.survey_link_url;
        }
        GetSalePreviewPage() {
          return this.m_email.sale_preview_page;
        }
        GetScheduleMaxItems() {
          return this.m_email.schedule_max_items || 2;
        }
        GetDemoPressPreviewDate() {
          return this.m_email.demo_press_preview_date;
        }
        GetNextEditionDate() {
          return this.m_email.next_edition_date;
        }
        GetCancelDate() {
          return this.m_email.cancel_date;
        }
        GetPreviewDate() {
          return this.m_email.preview_date;
        }
        GetPermissionDate() {
          return this.m_email.permission_date;
        }
        GetPressPreviewVisibleDate() {
          return this.m_email.press_preview_visible_date;
        }
        GetQASessionDate() {
          return this.m_email.qasession_date;
        }
        GetQASessionLink() {
          return this.m_email.qasession_link;
        }
        GetRecordedQASessionLink() {
          return this.m_email.recorded_qa_session_link;
        }
        GetCustomAppTargetList() {
          return this.m_email.custom_app_list || [];
        }
        GetTrailerDemoDeadlineDate() {
          return this.m_email.trailer_demo_deadline_date;
        }
        GetDemoTrailerRegLink() {
          return this.m_email.trailer_demo_reg_link;
        }
        GetSubject(e) {
          var t;
          return null !== (t = (0, r.pM)(this.m_email.subject, e, "")) &&
            void 0 !== t
            ? t
            : "";
        }
        GetSubjectWithFallback(e) {
          var t;
          return null !==
            (t = (0, r.Xj)(
              this.m_email.subject,
              l.U.Get().GetCurEditLanguage(),
              e
            )) && void 0 !== t
            ? t
            : "";
        }
        GetSections() {
          return this.m_sections;
        }
        GetSection(e) {
          return this.m_sections[e];
        }
        GetSectionByID(e) {
          for (let t = 0; t < this.m_sections.length; ++t)
            if (this.m_sections[t].GetUniqueID() == e)
              return this.m_sections[t];
          return null;
        }
        AddSection(e) {
          if (this.m_bReadOnly) return;
          let t = Math.floor(1 + 1e5 * Math.random());
          for (; this.GetSectionByID(m + t); )
            t = Math.floor(1 + 1e5 * Math.random());
          const i = { unique_id: m + t, type: e };
          this.m_email.sections || (this.m_email.sections = []),
            this.m_email.sections.push(i);
          const n = new b(
            this.m_email.sections[this.m_email.sections.length - 1]
          );
          this.m_sections.push(n), s.On.Get().SetDirty(!0);
        }
        SetServerEmailDefID(e) {
          this.m_email.email_def_id == e ||
            this.m_bReadOnly ||
            ((0, c.X)(
              null == this.m_email.email_def_id ||
                null == this.m_email.email_def_id,
              "Error: Reseting emailed def id from " +
                this.m_email.email_def_id +
                " to " +
                e
            ),
            (this.m_email.email_def_id = "" + e),
            s.On.Get().SetDirty(!0));
        }
        SetType(e) {
          this.m_email.type == e ||
            this.m_bReadOnly ||
            ((this.m_email.type = e), s.On.Get().SetDirty(!0));
        }
        SetEmailTargeting(e) {
          this.m_email.targeting == e ||
            this.m_bReadOnly ||
            ((this.m_email.targeting = e), s.On.Get().SetDirty(!0));
        }
        SetInternalName(e) {
          this.m_email.internal_name == e ||
            this.m_bReadOnly ||
            ((this.m_email.internal_name = e), s.On.Get().SetDirty(!0));
        }
        SetAssetKitURL(e) {
          this.m_email.asset_kit_url == e ||
            this.m_bReadOnly ||
            ((this.m_email.asset_kit_url = e), s.On.Get().SetDirty(!0));
        }
        SetWikiDocURL(e) {
          this.m_email.wiki_doc_url == e ||
            this.m_bReadOnly ||
            ((this.m_email.wiki_doc_url = e), s.On.Get().SetDirty(!0));
        }
        SetSurveyLinkURL(e) {
          this.m_email.survey_link_url == e ||
            this.m_bReadOnly ||
            ((this.m_email.survey_link_url = e), s.On.Get().SetDirty(!0));
        }
        SetSalePreviewURL(e) {
          this.m_email.sale_preview_page == e ||
            this.m_bReadOnly ||
            ((this.m_email.sale_preview_page = e), s.On.Get().SetDirty(!0));
        }
        SetDemoPreviewDate(e) {
          this.m_email.demo_press_preview_date == e ||
            this.m_bReadOnly ||
            ((this.m_email.demo_press_preview_date = e),
            s.On.Get().SetDirty(!0));
        }
        SetCancelDate(e) {
          this.m_email.cancel_date == e ||
            this.m_bReadOnly ||
            ((this.m_email.cancel_date = e), s.On.Get().SetDirty(!0));
        }
        SetPreviewDate(e) {
          this.m_email.preview_date != e &&
            ((this.m_email.preview_date = e), s.On.Get().SetDirty(!0));
        }
        SetPermissionDate(e) {
          this.m_email.permission_date != e &&
            ((this.m_email.permission_date = e), s.On.Get().SetDirty(!0));
        }
        SetPressPreviewVisibleDate(e) {
          this.m_email.press_preview_visible_date != e &&
            ((this.m_email.press_preview_visible_date = e),
            s.On.Get().SetDirty(!0));
        }
        SetScheduleMaxItems(e) {
          this.m_email.schedule_max_items == e ||
            this.m_bReadOnly ||
            ((this.m_email.schedule_max_items = e), s.On.Get().SetDirty(!0));
        }
        SetNextEditionDate(e) {
          this.m_email.next_edition_date == e ||
            this.m_bReadOnly ||
            ((this.m_email.next_edition_date = e), s.On.Get().SetDirty(!0));
        }
        SetQASessionDate(e) {
          this.m_email.qasession_date == e ||
            this.m_bReadOnly ||
            ((this.m_email.qasession_date = e), s.On.Get().SetDirty(!0));
        }
        SetTrailerDemoDeadlineDate(e) {
          this.m_email.trailer_demo_deadline_date == e ||
            this.m_bReadOnly ||
            ((this.m_email.trailer_demo_deadline_date = e),
            s.On.Get().SetDirty(!0));
        }
        SetQASessionLink(e) {
          this.m_email.qasession_link == e ||
            this.m_bReadOnly ||
            ((this.m_email.qasession_link = e), s.On.Get().SetDirty(!0));
        }
        SetDemoTrailerRegLink(e) {
          this.m_email.trailer_demo_reg_link == e ||
            this.m_bReadOnly ||
            ((this.m_email.trailer_demo_reg_link = e), s.On.Get().SetDirty(!0));
        }
        SetRecordedQASessionLink(e) {
          this.m_email.recorded_qa_session_link == e ||
            this.m_bReadOnly ||
            ((this.m_email.recorded_qa_session_link = e),
            s.On.Get().SetDirty(!0));
        }
        SetSubject(e, t) {
          if (
            (0, r.pM)(this.m_email.subject, t, void 0) != e &&
            !this.m_bReadOnly
          ) {
            const i = (0, o.j_)(t, "english");
            this.m_email.subject || (this.m_email.subject = {}),
              (this.m_email.subject[i] = e),
              s.On.Get().SetDirty(!0);
          }
        }
        AddAppToCustomList(e) {
          this.m_email.custom_app_list || (this.m_email.custom_app_list = []),
            this.m_email.custom_app_list.includes(e) ||
              (this.m_email.custom_app_list.push(e), s.On.Get().SetDirty(!0));
        }
        RemoveAppToCustomList(e) {
          if (this.m_email.custom_app_list) {
            const t = this.m_email.custom_app_list.findIndex((t) => e == t);
            if (t >= 0)
              return (
                this.m_email.custom_app_list.splice(t, 1),
                s.On.Get().SetDirty(!0),
                !0
              );
          }
          return !1;
        }
      }
      (0, n.gn)([a.LO], S.prototype, "m_email", void 0),
        (0, n.gn)([a.LO], S.prototype, "m_sections", void 0),
        (0, n.gn)([d.ak], S.prototype, "BHasLanguageData", null),
        (0, n.gn)([d.ak], S.prototype, "GetSubject", null),
        (0, n.gn)([a.aD.bound], S.prototype, "AddSection", null),
        (0, n.gn)([a.aD.bound], S.prototype, "SetServerEmailDefID", null),
        (0, n.gn)([a.aD.bound], S.prototype, "SetType", null),
        (0, n.gn)([a.aD.bound], S.prototype, "SetEmailTargeting", null),
        (0, n.gn)([a.aD.bound], S.prototype, "SetInternalName", null),
        (0, n.gn)([a.aD.bound], S.prototype, "SetAssetKitURL", null),
        (0, n.gn)([a.aD.bound], S.prototype, "SetWikiDocURL", null),
        (0, n.gn)([a.aD.bound], S.prototype, "SetSurveyLinkURL", null),
        (0, n.gn)([a.aD.bound], S.prototype, "SetSalePreviewURL", null),
        (0, n.gn)([a.aD.bound], S.prototype, "SetDemoPreviewDate", null),
        (0, n.gn)([a.aD.bound], S.prototype, "SetCancelDate", null),
        (0, n.gn)([a.aD.bound], S.prototype, "SetPreviewDate", null),
        (0, n.gn)([a.aD.bound], S.prototype, "SetPermissionDate", null),
        (0, n.gn)(
          [a.aD.bound],
          S.prototype,
          "SetPressPreviewVisibleDate",
          null
        ),
        (0, n.gn)([a.aD.bound], S.prototype, "SetScheduleMaxItems", null),
        (0, n.gn)([a.aD.bound], S.prototype, "SetNextEditionDate", null),
        (0, n.gn)([a.aD.bound], S.prototype, "SetQASessionDate", null),
        (0, n.gn)(
          [a.aD.bound],
          S.prototype,
          "SetTrailerDemoDeadlineDate",
          null
        ),
        (0, n.gn)([a.aD.bound], S.prototype, "SetQASessionLink", null),
        (0, n.gn)([a.aD.bound], S.prototype, "SetDemoTrailerRegLink", null),
        (0, n.gn)([a.aD.bound], S.prototype, "SetRecordedQASessionLink", null),
        (0, n.gn)([a.aD.bound], S.prototype, "SetSubject", null),
        (0, n.gn)([a.aD.bound], S.prototype, "AddAppToCustomList", null),
        (0, n.gn)([a.aD.bound], S.prototype, "RemoveAppToCustomList", null);
      class b {
        constructor(e) {
          (this.m_bReadOnly = !1), (this.m_section = e);
        }
        SetReadOnly(e) {
          this.m_bReadOnly = e;
        }
        BIsReadOnly() {
          return this.m_bReadOnly;
        }
        GetUniqueID() {
          return this.m_section.unique_id;
        }
        GetType() {
          return this.m_section.type;
        }
        GetModel() {
          return this.m_section;
        }
        BHasLangData(e) {
          return (
            (0, r.JA)(this.m_section.title, e) ||
            (0, r.JA)(this.m_section.description, e)
          );
        }
        GetTitle(e) {
          var t;
          return null !== (t = (0, r.pM)(this.m_section.title, e, "")) &&
            void 0 !== t
            ? t
            : "";
        }
        GetTitleWithFallback(e) {
          var t;
          return null !==
            (t = (0, r.Xj)(
              this.m_section.title,
              l.U.Get().GetCurEditLanguage(),
              e
            )) && void 0 !== t
            ? t
            : "";
        }
        GetDescription(e) {
          var t;
          return null !== (t = (0, r.pM)(this.m_section.description, e, "")) &&
            void 0 !== t
            ? t
            : "";
        }
        GetDescriptionWithFallback(e) {
          var t;
          return null !==
            (t = (0, r.Xj)(
              this.m_section.description,
              l.U.Get().GetCurEditLanguage(),
              e
            )) && void 0 !== t
            ? t
            : "";
        }
        SetType(e) {
          this.m_section.type == e ||
            this.m_bReadOnly ||
            (this.m_section.type == v.k_Custom &&
              e != v.k_Custom &&
              ((this.m_section.title = {}), (this.m_section.description = {})),
            (this.m_section.type = e),
            s.On.Get().SetDirty(!0));
        }
        SetTitle(e, t) {
          if (
            (0, r.pM)(this.m_section.title, t, void 0) != e &&
            !this.m_bReadOnly
          ) {
            const i = (0, o.j_)(t, "english");
            this.m_section.title || (this.m_section.title = {}),
              (this.m_section.title[i] = e),
              s.On.Get().SetDirty(!0);
          }
        }
        SetDescription(e, t) {
          if (
            (0, r.pM)(this.m_section.description, t, void 0) != e &&
            !this.m_bReadOnly
          ) {
            const i = (0, o.j_)(t, "english");
            this.m_section.description || (this.m_section.description = {}),
              (this.m_section.description[i] = e),
              s.On.Get().SetDirty(!0);
          }
        }
      }
      (0, n.gn)([a.LO], b.prototype, "m_section", void 0),
        (0, n.gn)([d.ak], b.prototype, "GetTitle", null),
        (0, n.gn)([d.ak], b.prototype, "GetDescription", null),
        (0, n.gn)([a.aD.bound], b.prototype, "SetType", null),
        (0, n.gn)([a.aD.bound], b.prototype, "SetTitle", null),
        (0, n.gn)([a.aD.bound], b.prototype, "SetDescription", null);
    },
    52790: (e, t, i) => {
      "use strict";
      i(38800), i(64222);
    },
    53144: (e, t, i) => {
      "use strict";
      i(20614), i(38800), i(34275), i(75746);
    },
    78457: (e, t, i) => {
      "use strict";
      i.d(t, {
        J7: () => D,
        Lr: () => f,
        fH: () => y,
        i4: () => v,
        o: () => h,
        vc: () => S,
        z8: () => b,
      });
      var n = i(33940),
        r = i(52868),
        s = i.n(r),
        a = i(89526),
        o = (i(6960), i(73265)),
        l = (i(96158), i(47330)),
        c = i(59821),
        d = i(23213),
        u = i(31621),
        m = i(70983);
      const p = "SaleEvent_DurationDiscount_Tooltip",
        _ = "discount";
      class g {
        constructor() {
          (this.m_mapDiscountEvents = new Map()),
            (this.m_discountEventsListCallback = new d.pB()),
            (this.m_bLoadedViaInitOrFullLoad = !1),
            (this.m_bLoadEventsRequestInFlight = !1),
            (this.m_mapInflightDiscountLoadRequest = new Map()),
            "dev" == m.De.WEB_UNIVERSE && (window.g_DiscountEventStore = this);
        }
        GetFutureDiscountEvents() {
          const e = (0, o.kl)();
          return Array.from(g.Get().m_mapDiscountEvents.values()).filter(
            (t) => t.end_date > e
          );
        }
        GetFutureDiscountEventListCallback() {
          return this.m_discountEventsListCallback;
        }
        BLoadedViaInitOrFullLoad() {
          return this.m_bLoadedViaInitOrFullLoad;
        }
        static Get() {
          return (
            g.s_Singleton || ((g.s_Singleton = new g()), g.s_Singleton.Init()),
            g.s_Singleton
          );
        }
        Init() {
          const e = (0, m.kQ)("discount_events", "application_config");
          if (
            (("dev" != m.De.WEB_UNIVERSE && "beta" != m.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CDiscountEventStore loading payload: ",
                e
              ),
            this.BIsConfigValid(e))
          ) {
            for (const t of e) this.m_mapDiscountEvents.set(t.id, t);
            this.m_bLoadedViaInitOrFullLoad = !0;
          } else
            "dev" == m.De.WEB_UNIVERSE &&
              e &&
              console.error("CDiscountEventStore Invalid payload");
        }
        BIsConfigValid(e) {
          const t = e;
          return !(!t || !Array.isArray(t));
        }
        GetDiscountEvent(e) {
          return this.m_mapDiscountEvents.get(e);
        }
        LoadAllDiscountEvents(e, t) {
          var i, r, a, o;
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (this.m_bLoadEventsRequestInFlight) return 29;
            const n =
                m.De.PARTNER_BASE_URL +
                "promotion/discounts/ajaxgetalldiscountevents/" +
                e,
              c = {};
            let d = null;
            try {
              this.m_bLoadEventsRequestInFlight = !0;
              const e = yield s().get(n, {
                params: c,
                cancelToken: null == t ? void 0 : t.token,
              });
              if (
                ((this.m_bLoadEventsRequestInFlight = !1),
                200 == (null == e ? void 0 : e.status) &&
                  1 ==
                    (null === (i = e.data) || void 0 === i
                      ? void 0
                      : i.success) &&
                  e.data.events)
              ) {
                for (const t of e.data.events)
                  this.m_mapDiscountEvents.set(t.id, t);
                return (
                  (this.m_bLoadedViaInitOrFullLoad = !0),
                  this.m_discountEventsListCallback.Dispatch(
                    this.GetFutureDiscountEvents()
                  ),
                  1
                );
              }
              d = { response: e };
            } catch (e) {
              d = e;
            }
            const u = (0, l.l)(d);
            return (
              console.error("Could not load Discount Events", u.strErrorMsg, u),
              null !==
                (o =
                  null ===
                    (a =
                      null === (r = null == d ? void 0 : d.response) ||
                      void 0 === r
                        ? void 0
                        : r.data) || void 0 === a
                    ? void 0
                    : a.success) && void 0 !== o
                ? o
                : 2
            );
          });
        }
        CreateDiscountEvent(e, t, i, r, a, o, c, d) {
          var u;
          return (0, n.mG)(this, void 0, void 0, function* () {
            const n =
                m.De.PARTNER_BASE_URL +
                "promotion/discounts/ajaxupdatediscountevent",
              g = new FormData();
            g.append("sessionid", m.De.SESSIONID),
              g.append("name", i),
              g.append("start_time", e.toString()),
              g.append("end_time", t.toString()),
              g.append("allowed_appids", c.join(",")),
              g.append("allowed_publisherids", o.join(",")),
              g.append("description", a),
              g.append("collision_type", "proximity"),
              g.append("event", "1"),
              g.append("header", r),
              g.append("tooltip", p),
              g.append("type", _),
              g.append("prevent_weeklong", "");
            let h = null;
            try {
              const l = yield s().post(n, g, {
                withCredentials: !0,
                cancelToken: null == d ? void 0 : d.token,
              });
              if (
                200 == (null == l ? void 0 : l.status) &&
                1 ==
                  (null === (u = l.data) || void 0 === u
                    ? void 0
                    : u.success) &&
                l.data.eventid
              ) {
                const n = {
                  id: l.data.eventid,
                  name: i,
                  start_date: e,
                  end_date: t,
                  appids: c,
                  publisherids: o,
                  description: a,
                  collision_type: "proximity",
                  event: "1",
                  header: r,
                  tooltip: p,
                  type: _,
                  prevent_weeklong: "",
                };
                return (
                  this.m_mapDiscountEvents.set(n.id, n),
                  this.m_discountEventsListCallback.Dispatch(
                    this.GetFutureDiscountEvents()
                  ),
                  n
                );
              }
              h = { response: l };
            } catch (e) {
              h = e;
            }
            const v = (0, l.l)(h);
            return (
              console.error(
                "CDiscountEventStore.CreateDiscountEvent: failed",
                v.strErrorMsg,
                v
              ),
              null
            );
          });
        }
        UpdateDiscountEventPublisherAndAppList(e, t, i, r) {
          var a;
          return (0, n.mG)(this, void 0, void 0, function* () {
            const n = this.m_mapDiscountEvents.get(e);
            if (!n)
              return (
                console.error(
                  "UpdateDiscountEventPublisherAndAppList: updating discount event that we have not loaded",
                  e
                ),
                null
              );
            const o =
                m.De.PARTNER_BASE_URL +
                "promotion/discounts/ajaxupdatediscountevent",
              c = new FormData();
            c.append("sessionid", m.De.SESSIONID),
              c.append("eventid", e),
              c.append("name", n.name),
              c.append("start_time", n.start_date.toString()),
              c.append("end_time", n.end_date.toString()),
              c.append("allowed_appids", i.join(",")),
              c.append("allowed_publisherids", t.join(",")),
              c.append("description", n.description),
              c.append("collision_type", n.collision_type),
              c.append("event", n.event),
              c.append("header", n.header),
              c.append("tooltip", n.tooltip),
              c.append("type", n.type),
              c.append("prevent_weeklong", n.prevent_weeklong);
            let d = null;
            try {
              const e = yield s().post(o, c, {
                withCredentials: !0,
                cancelToken: null == r ? void 0 : r.token,
              });
              if (
                200 == (null == e ? void 0 : e.status) &&
                1 ==
                  (null === (a = e.data) || void 0 === a
                    ? void 0
                    : a.success) &&
                e.data.eventid
              ) {
                const e = Object.assign(Object.assign({}, n), {
                  appids: i,
                  publisherids: t,
                });
                return (
                  this.m_mapDiscountEvents.set(e.id, e),
                  this.m_discountEventsListCallback.Dispatch(
                    this.GetFutureDiscountEvents()
                  ),
                  e
                );
              }
              d = { response: e };
            } catch (e) {
              d = e;
            }
            const u = (0, l.l)(d);
            return (
              console.error(
                "CDiscountEventStore.UpdateDiscountEventPublisherAndAppList: failed",
                u.strErrorMsg,
                u
              ),
              null
            );
          });
        }
        LoadSingleDiscountEvent(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            return this.m_mapDiscountEvents.has(e)
              ? this.m_mapDiscountEvents.get(e)
              : (this.m_mapInflightDiscountLoadRequest.has(e) ||
                  this.m_mapInflightDiscountLoadRequest.set(
                    e,
                    this.InternalLoadSingleDiscountEvent(e)
                  ),
                this.m_mapInflightDiscountLoadRequest.get(e));
          });
        }
        InternalLoadSingleDiscountEvent(e) {
          var t, i;
          return (0, n.mG)(this, void 0, void 0, function* () {
            let n = null;
            if (!e || 0 == e.length) return null;
            try {
              const r =
                  m.De.PARTNER_BASE_URL +
                  "promotion/discounts/ajaxgetdiscounteventbyid",
                a = { sessionid: m.De.SESSIONID, discountid: e },
                o = yield s().get(r, { params: a, withCredentials: !0 });
              if (
                200 == (null == o ? void 0 : o.status) &&
                1 ==
                  (null === (t = null == o ? void 0 : o.data) || void 0 === t
                    ? void 0
                    : t.success) &&
                (null === (i = null == o ? void 0 : o.data) || void 0 === i
                  ? void 0
                  : i.discount_event)
              )
                return (
                  this.m_mapDiscountEvents.set(e, o.data.discount_event),
                  o.data.discount_event
                );
              n = (0, l.l)(o);
            } catch (e) {
              n = (0, l.l)(e);
            }
            return (
              console.error(
                "CPromotionInviteStore.InternalLoadSingleDiscountEvent failed: " +
                  (null == n ? void 0 : n.strErrorMsg),
                n
              ),
              null
            );
          });
        }
      }
      function h() {
        return g.Get().GetFutureDiscountEvents();
      }
      function v() {
        return g.Get().GetFutureDiscountEventListCallback();
      }
      function D(e) {
        const t = g.Get().BLoadedViaInitOrFullLoad(),
          [i, n] = a.useState(t ? g.Get().GetFutureDiscountEvents() : null),
          [r, s] = a.useState(null),
          o =
            e ||
            Number.parseInt((0, m.kQ)("publisherid", "application_config"));
        (0, u.Qg)(g.Get().GetFutureDiscountEventListCallback(), n),
          a.useEffect(() => {
            g.Get().BLoadedViaInitOrFullLoad() ||
              g.Get().LoadAllDiscountEvents(o).then(s);
          }, [i, o]);
        const l = null != r ? r : (null == i ? void 0 : i.length) ? 1 : null;
        return a.useMemo(() => ({ rgDiscountEvents: i, eResult: l }), [i, l]);
      }
      function y(e) {
        return g.Get().GetDiscountEvent(e);
      }
      function S(e) {
        const [t, i] = a.useState(g.Get().GetDiscountEvent(e));
        return (
          a.useEffect(() => {
            ((!t && e) || (null == t ? void 0 : t.id) != e) &&
              g
                .Get()
                .LoadSingleDiscountEvent(e)
                .then((e) => {
                  e && i(e);
                });
          }, [e, t]),
          t
        );
      }
      function b() {
        return { fnCreateDiscountEvent: g.Get().CreateDiscountEvent };
      }
      function f() {
        return {
          fnUpdateDiscountEventAppAndPublisherList:
            g.Get().UpdateDiscountEventPublisherAndAppList,
        };
      }
      (0, n.gn)([c.a], g.prototype, "GetDiscountEvent", null),
        (0, n.gn)([c.a], g.prototype, "CreateDiscountEvent", null),
        (0, n.gn)(
          [c.a],
          g.prototype,
          "UpdateDiscountEventPublisherAndAppList",
          null
        );
    },
    34275: (e, t, i) => {
      "use strict";
      i.d(t, { o: () => l });
      var n = i(33940),
        r = i(52868),
        s = i.n(r),
        a = (i(73797), i(50265), i(5615)),
        o = (i(38800), i(96158), i(47330), i(70983));
      function l(e, t, i) {
        const { isLoading: r, data: l } = (0, a.useQuery)(
          ["useOptedInAppWithDiscounts", e, t, i],
          () =>
            (function (e) {
              return (0, n.mG)(this, void 0, void 0, function* () {
                const t =
                    o.De.PARTNER_BASE_URL + "discounts/ajaxgetdiscountbyapp",
                  i = new Map();
                if (!e || 0 == e.length) return i;
                const n = [...e],
                  r = (n.length, []);
                for (; n.length > 0; ) {
                  const e = n.splice(0, 250),
                    i = new FormData();
                  i.append("sessionid", o.De.SESSIONID),
                    i.append("rgAppIDs", e.join(",")),
                    i.append("bExcludeExpired", "1"),
                    r.push(s().post(t, i, { withCredentials: !0 }));
                }
                return (
                  (yield Promise.all(r)).forEach((e) => {
                    var t, n, r;
                    if (
                      200 == (null == e ? void 0 : e.status) &&
                      1 ==
                        (null === (t = null == e ? void 0 : e.data) ||
                        void 0 === t
                          ? void 0
                          : t.success) &&
                      (null === (n = null == e ? void 0 : e.data) ||
                      void 0 === n
                        ? void 0
                        : n.map)
                    )
                      for (let t in e.data.map) {
                        const n = Number.parseInt(t);
                        n && i.set(n, e.data.map[n]);
                      }
                    else
                      console.log(
                        "Error: Failed on FetchDiscountByApp request " +
                          (null == e ? void 0 : e.status) +
                          " " +
                          (null == e ? void 0 : e.statusText) +
                          " " +
                          (null === (r = null == e ? void 0 : e.data) ||
                          void 0 === r
                            ? void 0
                            : r.success)
                      );
                  }),
                  i
                );
              });
            })(t)
        );
        return r ? null : l;
      }
    },
    89511: (e, t, i) => {
      "use strict";
      i.d(t, { Hf: () => S, On: () => b, cf: () => y, tb: () => E });
      var n = i(33940),
        r = i(52868),
        s = i.n(r),
        a = i(75746),
        o = i(5390),
        l = (i(53144), i(50265)),
        c = i(89526),
        d = i(38800),
        u = (i(93523), i(69728)),
        m = (i(77449), i(96158), i(99096)),
        p = i(47330),
        _ = i(23213),
        g = i(31621),
        h = i(70983),
        v = i(15596);
      const D = "section_",
        y = "list_",
        S = "option_";
      class b {
        constructor() {
          (this.m_bDirty = !1),
            (this.m_mapDynamicSection = new Map()),
            (this.m_mapEmails = new Map()),
            (this.m_activeStatsChange = new _.pB()),
            (this.rgOptionalSuggestedRequired = []),
            (this.rgEventTypes = []),
            (this.rgGameTokens = []);
        }
        static Get() {
          return (
            b.s_Editor ||
              ((b.s_Editor = new b()),
              ("dev" != h.De.WEB_UNIVERSE && "beta" != h.De.WEB_UNIVERSE) ||
                (window.g_OptInAdminEditModel = b.s_Editor)),
            b.s_Editor
          );
        }
        GetActiveStatsChangeCallaback() {
          return this.m_activeStatsChange;
        }
        GetOptInPageID() {
          return this.m_model.pageid;
        }
        GetDynamicOptionByID(e) {
          let t = null;
          return (
            this.GetDynamicSections().forEach((i) => {
              i.unique_id == e.section_id &&
                i.lists.forEach((i) => {
                  i.unique_id == e.list_id &&
                    i.options.forEach((i) => {
                      i.unique_id == e.option_id && (t = i);
                    });
                });
            }),
            t
          );
        }
        BContainDyanmicOptionByIDs(e) {
          return null != this.GetDynamicOptionByID(e);
        }
        GetOptionNameByID(e, t = 0) {
          const i = this.GetDynamicOptionByID(e);
          return i ? this.GetKVLang(i.text, t) : "";
        }
        AddDemoPackage(e) {
          this.m_model.demo_packages || (this.m_model.demo_packages = []),
            this.m_model.demo_packages.push(e),
            this.SetDirty(!0);
        }
        GetDemoPackages() {
          return this.m_model.demo_packages;
        }
        GetName() {
          return this.m_model && this.m_model.pageid
            ? -1 != this.m_model.pageid.indexOf("sale_", 0)
              ? this.m_model.pageid.substring(5)
              : this.m_model.pageid
            : "";
        }
        GetFullName() {
          return this.m_model && this.m_model.pageid ? this.m_model.pageid : "";
        }
        BHasSpecialEventType() {
          var e;
          return Boolean(
            null === (e = this.m_model) || void 0 === e
              ? void 0
              : e.special_event_type
          );
        }
        GetSpecialEventType() {
          return this.m_model.special_event_type;
        }
        SetSpecialEventType(e) {
          e !== this.m_model.special_event_type &&
            ((this.m_model.special_event_type = e), this.SetDirty(!0));
        }
        GetCurSpecialEventName() {
          return this.GetSpecialEventName(u.U.Get().GetCurEditLanguage());
        }
        GetSpecialEventName(e) {
          var t;
          return null !==
            (t = this.GetKVLang(this.m_model.special_event_name, e)) &&
            void 0 !== t
            ? t
            : "";
        }
        SetCurSpecialEventName(e) {
          this.SetSpecialEventName(u.U.Get().GetCurEditLanguage(), e);
        }
        SetSpecialEventName(e, t) {
          this.SetKVLang(this.m_model.special_event_name, e, t);
        }
        GetCurSpecialEventDescription() {
          return this.GetSpecialEventDescription(
            u.U.Get().GetCurEditLanguage()
          );
        }
        GetSpecialEventDescription(e) {
          var t;
          return null !==
            (t = this.GetKVLang(this.m_model.special_event_description, e)) &&
            void 0 !== t
            ? t
            : "";
        }
        SetCurSpecialEventDescription(e) {
          this.SetSpecialEventDescription(u.U.Get().GetCurEditLanguage(), e);
        }
        SetSpecialEventDescription(e, t) {
          this.SetKVLang(this.m_model.special_event_description, e, t);
        }
        GetSpecialEventDocLink() {
          return this.m_model.special_event_doc_link;
        }
        SetSpecialEventDocLink(e) {
          e != this.m_model.special_event_doc_link &&
            ((this.m_model.special_event_doc_link = e), this.SetDirty(!0));
        }
        GetSpecialEventTypeMax() {
          return this.m_model.special_event_type_max || 0;
        }
        SetSpecialEventTypeMax(e) {
          e != this.m_model.special_event_type_max &&
            ((this.m_model.special_event_type_max = e), this.SetDirty(!0));
        }
        GetSpecialEventStartTime() {
          return this.m_model.special_event_rt_start || 0;
        }
        SetSpecialEventStartTime(e) {
          e != this.m_model.special_event_rt_start &&
            ((this.m_model.special_event_rt_start = e), this.SetDirty(!0));
        }
        GetSpecialEventEndTime() {
          return this.m_model.special_event_rt_end || 0;
        }
        SetSpecialEventEndTime(e) {
          e != this.m_model.special_event_rt_end &&
            ((this.m_model.special_event_rt_end = e), this.SetDirty(!0));
        }
        BHasSpecialEventTimeSet() {
          return (
            Boolean(this.m_model.special_event_rt_start) ||
            Boolean(this.m_model.special_event_rt_end)
          );
        }
        NCountSpecialEventBlocks() {
          var e;
          return (
            (null === (e = this.m_model.special_event_time_blocks) ||
            void 0 === e
              ? void 0
              : e.length) || 0
          );
        }
        AddSpecialEventBlock() {
          this.m_model.special_event_time_blocks ||
            (this.m_model.special_event_time_blocks = []),
            this.m_model.special_event_time_blocks.push({ block_reason: {} }),
            this.SetDirty(!0);
        }
        RemoveSpecialEventBlock(e) {
          var t;
          return (
            e <
              (null === (t = this.m_model.special_event_time_blocks) ||
              void 0 === t
                ? void 0
                : t.length) &&
            (this.m_model.special_event_time_blocks.splice(e),
            this.SetDirty(!0),
            !0)
          );
        }
        SetSpecialEventBlock(e, t) {
          var i;
          return (
            e <
              (null === (i = this.m_model.special_event_time_blocks) ||
              void 0 === i
                ? void 0
                : i.length) &&
            ((this.m_model.special_event_time_blocks[e] = t),
            this.SetDirty(!0),
            !0)
          );
        }
        GetAllSpecialEventBlocks() {
          return this.m_model.special_event_time_blocks || [];
        }
        MoveSpecialEventblock(e, t) {
          var i, n;
          return (
            e <
              (null === (i = this.m_model.special_event_time_blocks) ||
              void 0 === i
                ? void 0
                : i.length) &&
            t <
              (null === (n = this.m_model.special_event_time_blocks) ||
              void 0 === n
                ? void 0
                : n.length) &&
            e != t &&
            ((0, m.hV)(this.m_model.special_event_time_blocks, e, t),
            this.SetDirty(!0),
            !0)
          );
        }
        BIsInSpecialEventBlockedTime(e) {
          var t, i;
          return Boolean(
            e &&
              (null ===
                (i =
                  null === (t = this.m_model.special_event_time_blocks) ||
                  void 0 === t
                    ? void 0
                    : t.filter(
                        (t) => e >= t.block_rt_start && e < t.block_rt_end
                      )) || void 0 === i
                ? void 0
                : i.length) > 0
          );
        }
        BRequiresRemotePlayTogether() {
          return this.m_model.required_app_features.remote_play_together || !1;
        }
        SetRequiresRemotePlayTogether(e) {
          e !==
            (this.m_model.required_app_features.remote_play_together || !1) &&
            ((this.m_model.required_app_features.remote_play_together = e),
            this.SetDirty(!0));
        }
        BRequiresVR() {
          return this.m_model.required_app_features.vr || !1;
        }
        SetRequiresVR(e) {
          e !== (this.m_model.required_app_features.vr || !1) &&
            ((this.m_model.required_app_features.vr = e), this.SetDirty(!0));
        }
        BOptInRegistationOnlyShowSaveButton() {
          return this.m_model.opt_in_registration_only_show_save;
        }
        SetOptInRegistationOnlyShowSaveButton(e) {
          e != this.m_model.opt_in_registration_only_show_save &&
            ((this.m_model.opt_in_registration_only_show_save = e),
            this.SetDirty(!0));
        }
        BIsAdditionalFeaturingSectionEnabled() {
          return this.m_model.additional_featuring_section_enabled;
        }
        SetAdditionalFeaturingSectionEnabled(e) {
          e != this.m_model.additional_featuring_section_enabled &&
            ((this.m_model.additional_featuring_section_enabled = e),
            this.SetDirty(!0));
        }
        BIsCollectTrailerPermissions() {
          return this.m_model.collect_trailer_permissions;
        }
        SetCollectTrailerPermissions(e) {
          e != this.m_model.collect_trailer_permissions &&
            ((this.m_model.collect_trailer_permissions = e), this.SetDirty(!0));
        }
        BIsCollectDemoPermissions() {
          return this.m_model.collect_demo_permissions;
        }
        SetCollectDemoPermissions(e) {
          e != this.m_model.collect_demo_permissions &&
            ((this.m_model.collect_demo_permissions = e), this.SetDirty(!0));
        }
        BIsCollectGameProfileIntent() {
          return this.m_model.collect_game_profile_intent;
        }
        SetCollectGameProfileIntent(e) {
          e != this.m_model.collect_game_profile_intent &&
            ((this.m_model.collect_game_profile_intent = e), this.SetDirty(!0));
        }
        BHasCollectDemoDeadlineDate() {
          return Boolean(this.m_model.collect_demo_deadline);
        }
        GetCollectDemoDeadlineDate() {
          return this.m_model.collect_demo_deadline;
        }
        SetCollectDemoDeadlineDate(e) {
          e != this.m_model.collect_demo_deadline &&
            ((this.m_model.collect_demo_deadline = e), this.SetDirty(!0));
        }
        GetCurEventTitle() {
          var e;
          return null !==
            (e = this.GetEventTitle(u.U.Get().GetCurEditLanguage())) &&
            void 0 !== e
            ? e
            : "";
        }
        GetEventTitle(e) {
          var t;
          return null !== (t = this.GetKVLang(this.m_model.event_title, e)) &&
            void 0 !== t
            ? t
            : "";
        }
        SetCurEventTitle(e) {
          this.SetEventTitle(u.U.Get().GetCurEditLanguage(), e);
        }
        SetEventTitle(e, t) {
          this.SetKVLang(this.m_model.event_title, e, t);
        }
        GetCurOptInRegistrationTitle() {
          var e;
          return null !==
            (e = this.GetOptInRegistrationTitle(
              u.U.Get().GetCurEditLanguage()
            )) && void 0 !== e
            ? e
            : "";
        }
        GetOptInRegistrationTitle(e) {
          var t;
          return null !==
            (t = this.GetKVLang(this.m_model.opt_in_registration_title, e)) &&
            void 0 !== t
            ? t
            : "";
        }
        SetCurOptInRegistrationTitle(e) {
          this.SetOptInRegistrationTitle(u.U.Get().GetCurEditLanguage(), e);
        }
        SetOptInRegistrationTitle(e, t) {
          this.m_model.opt_in_registration_title ||
            (this.m_model.opt_in_registration_title = {}),
            this.SetKVLang(this.m_model.opt_in_registration_title, e, t);
        }
        GetCurOptInRegistrationCheckbox() {
          var e;
          return null !==
            (e = this.GetOptInRegistrationCheckbox(
              u.U.Get().GetCurEditLanguage()
            )) && void 0 !== e
            ? e
            : "";
        }
        GetOptInRegistrationCheckbox(e) {
          var t;
          return null !==
            (t = this.GetKVLang(
              this.m_model.opt_in_registration_checkbox,
              e
            )) && void 0 !== t
            ? t
            : "";
        }
        SetCurOptInRegistrationCheckbox(e) {
          this.SetOptInRegistrationCheckbox(u.U.Get().GetCurEditLanguage(), e);
        }
        SetOptInRegistrationCheckbox(e, t) {
          this.m_model.opt_in_registration_checkbox ||
            (this.m_model.opt_in_registration_checkbox = {}),
            this.SetKVLang(this.m_model.opt_in_registration_checkbox, e, t);
        }
        BHasOptInRegistrationTitleOrCheckbox() {
          return (
            Boolean(this.m_model.opt_in_registration_title) ||
            Boolean(this.m_model.opt_in_registration_checkbox)
          );
        }
        BIsOptInEnabled() {
          return this.m_model.sale_optin_enabled;
        }
        SetOptInEnabled(e) {
          e !== this.m_model.sale_optin_enabled &&
            ((this.m_model.sale_optin_enabled = e), this.SetDirty(!0));
        }
        GetPublicEventURL() {
          return this.m_model.public_event_url;
        }
        SetPublicEventURL(e) {
          e != this.m_model.public_event_url &&
            ((this.m_model.public_event_url = e), this.SetDirty(!0));
        }
        GetPublicDocumentationWikiURL() {
          return this.m_model.public_doc_wiki_url;
        }
        SetPublicDocumentationWikiURL(e) {
          e != this.m_model.public_doc_wiki_url &&
            ((this.m_model.public_doc_wiki_url = e), this.SetDirty(!0));
        }
        GetPublicEventID() {
          return this.m_model.public_event_id;
        }
        SetPublicEventID(e) {
          e != this.m_model.public_event_id &&
            ((this.m_model.public_event_id = e), this.SetDirty(!0));
        }
        GetEventStartTime() {
          return this.m_model.event_start_date;
        }
        SetEventStartTime(e) {
          e !== this.m_model.event_start_date &&
            ((this.m_model.event_start_date = e), this.SetDirty(!0));
        }
        GetEventEndTime() {
          return this.m_model.event_end_date;
        }
        SetEventEndTime(e) {
          e !== this.m_model.event_end_date &&
            ((this.m_model.event_end_date = e), this.SetDirty(!0));
        }
        GetOptInDeadlineTime() {
          return this.m_model.optin_deadline_date;
        }
        SetOptInDeadlineTime(e) {
          e !== this.m_model.optin_deadline_date &&
            ((this.m_model.optin_deadline_date = e), this.SetDirty(!0));
        }
        BIsInvitationOnly() {
          return this.m_model.invitation_only;
        }
        SetInvititationOnly(e) {
          e !== this.m_model.invitation_only &&
            ((this.m_model.invitation_only = e), this.SetDirty(!0));
        }
        BIsReleaseGamesEligible() {
          return this.m_model.release_date_eligibility.include_released_games;
        }
        SetReleaseGameEligible(e) {
          e !== this.m_model.release_date_eligibility.include_released_games &&
            ((this.m_model.release_date_eligibility.include_released_games = e),
            this.SetDirty(!0));
        }
        BIsUnreleaseGamesEligible() {
          return this.m_model.release_date_eligibility.include_unreleased_games;
        }
        SetUnreleaseGameEligible(e) {
          e !==
            this.m_model.release_date_eligibility.include_unreleased_games &&
            ((this.m_model.release_date_eligibility.include_unreleased_games =
              e),
            this.SetDirty(!0));
        }
        GetEligibleReleaseBeforeDate() {
          return this.m_model.release_date_eligibility.release_before_date;
        }
        SetEligibleReleaseBeforeDate(e) {
          e !== this.m_model.release_date_eligibility.release_before_date &&
            ((this.m_model.release_date_eligibility.release_before_date = e),
            this.SetDirty(!0));
        }
        GetEligibleReleaseAfterDate() {
          return this.m_model.release_date_eligibility.release_after_date;
        }
        SetEligibleReleaseAfterDate(e) {
          e !== this.m_model.release_date_eligibility.release_after_date &&
            ((this.m_model.release_date_eligibility.release_after_date = e),
            this.SetDirty(!0));
        }
        GetCooldownGroupType() {
          return this.m_model.cooldown_group.group_id || 0;
        }
        SetCooldownGroupType(e) {
          (this.m_model.cooldown_group &&
            e === this.m_model.cooldown_group.group_id) ||
            (this.m_model.cooldown_group || (this.m_model.cooldown_group = {}),
            (this.m_model.cooldown_group.group_id = e),
            this.SetDirty(!0));
        }
        GetCooldownRequired() {
          return this.m_model.cooldown_group.cooldown_required || !1;
        }
        SetCooldownRequired(e) {
          (this.m_model.cooldown_group &&
            e === this.m_model.cooldown_group.cooldown_required) ||
            (this.m_model.cooldown_group || (this.m_model.cooldown_group = {}),
            (this.m_model.cooldown_group.cooldown_required = e),
            this.SetDirty(!0));
        }
        GetCooldownDays() {
          return this.m_model.cooldown_group.cooldown_time || 0;
        }
        SetCooldownDays(e) {
          e !== this.m_model.cooldown_group.cooldown_time &&
            ((this.m_model.cooldown_group.cooldown_time = e),
            this.SetDirty(!0));
        }
        GetRequiredTags() {
          let e = [];
          if (this.m_model && this.m_model.required_tags) {
            let t = v.v.Get().GetGameTags();
            Object.keys(this.m_model.required_tags).forEach((i) => {
              const n = t.find((e) => e.value == i);
              n && e.push({ label: n.label, value: n.value });
            });
          }
          return e;
        }
        OnChangeRequiredTags(e) {
          (this.m_model.required_tags = {}),
            e &&
              e.forEach((e) => {
                let t = parseInt(e.value);
                this.m_model.required_tags[t] = !0;
              }),
            this.SetDirty(!0);
        }
        GetAppOfficialWeightedTagRankToInclude() {
          return this.m_model.app_official_weighted_tag_rank_to_include || 20;
        }
        SetAppOfficialWeightedTagRankToInclude(e) {
          e !== this.m_model.app_official_weighted_tag_rank_to_include &&
            ((this.m_model.app_official_weighted_tag_rank_to_include = e),
            this.SetDirty(!0));
        }
        GetModel() {
          return this.m_model;
        }
        GetDynamicSections() {
          return this.m_model.dynamic_sections || [];
        }
        GetEditableDynamicSections() {
          return this.m_dynamicSections || [];
        }
        GetDynamicSectionByID(e) {
          return this.m_mapDynamicSection.get(e);
        }
        GetEmailDefinitionByID(e) {
          return this.m_mapEmails.get(e);
        }
        GetFirstEmail() {
          var e;
          return (null === (e = this.m_EmailDefinitions) || void 0 === e
            ? void 0
            : e.length) > 0
            ? this.m_EmailDefinitions[0]
            : void 0;
        }
        GetEmailDefinitions() {
          return this.m_EmailDefinitions;
        }
        GetCurDescription() {
          return this.GetDescription(u.U.Get().GetCurEditLanguage());
        }
        GetDescription(e) {
          var t;
          return null !== (t = this.GetKVLang(this.m_model.description, e)) &&
            void 0 !== t
            ? t
            : "";
        }
        SetCurDescription(e) {
          this.SetDescription(u.U.Get().GetCurEditLanguage(), e);
        }
        SetDescription(e, t) {
          this.SetKVLang(this.m_model.description, e, t);
        }
        GetCurHelpText() {
          return this.GetHelpText(u.U.Get().GetCurEditLanguage());
        }
        GetHelpText(e) {
          var t;
          return null !== (t = this.GetKVLang(this.m_model.help_text, e)) &&
            void 0 !== t
            ? t
            : "";
        }
        SetCurHelpText(e) {
          this.SetHelpText(u.U.Get().GetCurEditLanguage(), e);
        }
        SetHelpText(e, t) {
          this.SetKVLang(this.m_model.help_text, e, t);
        }
        GetCurAppealsText() {
          return this.GetAppealsText(u.U.Get().GetCurEditLanguage());
        }
        GetAppealsText(e) {
          var t;
          return null !== (t = this.GetKVLang(this.m_model.appeals_text, e)) &&
            void 0 !== t
            ? t
            : "";
        }
        SetCurAppealsText(e) {
          this.SetAppealsText(u.U.Get().GetCurEditLanguage(), e);
        }
        SetAppealsText(e, t) {
          this.SetKVLang(this.m_model.appeals_text, e, t);
        }
        GetAllLocalizedOptInBanner() {
          var e;
          return null !== (e = this.m_model.localized_optin_banner) &&
            void 0 !== e
            ? e
            : {};
        }
        GetLocalizedOptInBanner(e) {
          var t, i;
          return null !==
            (i =
              null === (t = this.m_model.localized_optin_banner) || void 0 === t
                ? void 0
                : t[(0, d.j_)(e)]) && void 0 !== i
            ? i
            : "";
        }
        SetLocalizedOptInBanner(e, t) {
          this.m_model.localized_optin_banner ||
            (this.m_model.localized_optin_banner = {});
          const i = (0, d.j_)(e);
          this.m_model.localized_optin_banner[i] != t &&
            ((this.m_model.localized_optin_banner[i] = t), this.SetDirty(!0));
        }
        DeleteLocalizedOptInBanner(e) {
          var t;
          const i = (0, d.j_)(e);
          (null === (t = this.m_model.localized_optin_banner) || void 0 === t
            ? void 0
            : t[i]) &&
            (delete this.m_model.localized_optin_banner[i], this.SetDirty(!0));
        }
        BIsCategoriesEnabled() {
          return this.m_model.categories.enabled;
        }
        SetCategoriesEnabled(e) {
          e != this.m_model.categories.enabled &&
            ((this.m_model.categories.enabled = e), this.SetDirty(!0));
        }
        GetCategoriesRequired() {
          return this.m_model.categories.required || 0;
        }
        SetCategoriesRequired(e) {
          e != this.m_model.categories.required &&
            ((this.m_model.categories.required = e), this.SetDirty(!0));
        }
        GetCategoryTags() {
          let e = [];
          if (this.m_model && this.m_model.categories.tags) {
            let t = v.v.Get().GetGameTags();
            Object.keys(this.m_model.categories.tags).forEach((i) => {
              const n = t.find((e) => e.value == i);
              e.push({ label: n.label, value: n.value });
            });
          }
          return e;
        }
        OnChangeCategoryTags(e) {
          (this.m_model.categories.tags = {}),
            e &&
              e.forEach((e) => {
                let t = parseInt(e.value);
                this.m_model.categories.tags[t] = !0;
              }),
            this.SetDirty(!0);
        }
        BIsArtistStatementEnabled() {
          return this.m_model.artist_statement.enabled || !1;
        }
        SetArtistStatementEnabled(e) {
          e !== this.m_model.artist_statement.enabled &&
            ((this.m_model.artist_statement.enabled = e), this.SetDirty(!0));
        }
        GetArtistStatementRequired() {
          return this.m_model.artist_statement.required || 0;
        }
        SetArtistStatementRequired(e) {
          e !== this.m_model.artist_statement.required &&
            ((this.m_model.artist_statement.required = e), this.SetDirty(!0));
        }
        BIsPrimaryCountryEnabled() {
          return this.m_model.primary_country.enabled || !1;
        }
        SetPrimaryCountryEnabled(e) {
          e !== this.m_model.primary_country.enabled &&
            ((this.m_model.primary_country.enabled = e), this.SetDirty(!0));
        }
        GetPrimaryCountryRequired() {
          return this.m_model.primary_country.required || 0;
        }
        SetPrimaryCountryRequired(e) {
          e !== this.m_model.primary_country.required &&
            ((this.m_model.primary_country.required = e), this.SetDirty(!0));
        }
        BIsPressContactEnabled() {
          return this.m_model.press_contact.enabled || !1;
        }
        SetPressContactEnabled(e) {
          var t;
          e !==
            (null === (t = this.m_model) || void 0 === t
              ? void 0
              : t.press_contact.enabled) &&
            ((this.m_model.press_contact.enabled = e), this.SetDirty(!0));
        }
        GetPressContactRequired() {
          return this.m_model.press_contact.required || 0;
        }
        SetPressContactRequired(e) {
          var t;
          e !==
            (null === (t = this.m_model) || void 0 === t
              ? void 0
              : t.press_contact.required) &&
            ((this.m_model.press_contact.required = e), this.SetDirty(!0));
        }
        BIsBeforeYouOptInEnabled() {
          return this.m_model.before_you_opt_in || !1;
        }
        SetBeforeYouOptInEnabled(e) {
          e !== this.m_model.before_you_opt_in &&
            ((this.m_model.before_you_opt_in = e), this.SetDirty(!0));
        }
        BIsBuildYourStorePageEnabled() {
          return this.m_model.build_store_page.enabled || !1;
        }
        SetBuildYourStorePageEnabled(e) {
          e !== this.m_model.build_store_page.enabled &&
            ((this.m_model.build_store_page.enabled = e), this.SetDirty(!0));
        }
        GetBuildYourStorePageRequired() {
          return this.m_model.build_store_page.required || 0;
        }
        SetBuildYourStorePageRequired(e) {
          e !== this.m_model.build_store_page.required &&
            ((this.m_model.build_store_page.required = e), this.SetDirty(!0));
        }
        GetStorePageText() {
          var e;
          return null !==
            (e = this.GetKVLang(
              this.m_model.build_store_page.description,
              u.U.Get().GetCurEditLanguage()
            )) && void 0 !== e
            ? e
            : "";
        }
        SetStorePageText(e) {
          this.m_model.build_store_page || (this.m_model.build_store_page = {}),
            this.m_model.build_store_page.description ||
              (this.m_model.build_store_page.description = {}),
            this.SetKVLang(
              this.m_model.build_store_page.description,
              u.U.Get().GetCurEditLanguage(),
              e
            );
        }
        BIsTaggingWizardEnabled() {
          return this.m_model.tagging_wizard || !1;
        }
        SetTaggingWizardEnabled(e) {
          e !== this.m_model.tagging_wizard &&
            ((this.m_model.tagging_wizard = e), this.SetDirty(!0));
        }
        BIsLaunchYourDemoEnabled() {
          return this.m_model.launch_demo.enabled || !1;
        }
        SetLaunchYourDemoEnabled(e) {
          e !== this.m_model.launch_demo.enabled &&
            ((this.m_model.launch_demo.enabled = e), this.SetDirty(!0));
        }
        GetLaunchYourDemoRequired() {
          return this.m_model.launch_demo.required || 0;
        }
        SetLaunchYourDemoRequired(e) {
          e !== this.m_model.launch_demo.required &&
            ((this.m_model.launch_demo.required = e), this.SetDirty(!0));
        }
        GetLaunchYourDemoDueDate() {
          return this.m_model.launch_demo.due_date || 0;
        }
        SetLaunchYourDemoDueDate(e) {
          e !== this.m_model.launch_demo.due_date &&
            ((this.m_model.launch_demo.due_date = e), this.SetDirty(!0));
        }
        BIsDoAnytimeEnabled() {
          return this.m_model.do_anytime.enabled || !1;
        }
        SetDoAnytimeEnabled(e) {
          e !== this.m_model.do_anytime.enabled &&
            ((this.m_model.do_anytime.enabled = e), this.SetDirty(!0));
        }
        BIsLivestreamEnabled() {
          return this.m_model.do_anytime.livestream || !1;
        }
        SetLivestreamEnabled(e) {
          e !== this.m_model.do_anytime.livestream &&
            ((this.m_model.do_anytime.livestream = e), this.SetDirty(!0));
        }
        BIsChatSessionEnabled() {
          return this.m_model.do_anytime.chat_session || !1;
        }
        SetChatSessionEnabled(e) {
          e !== this.m_model.do_anytime.chat_session &&
            ((this.m_model.do_anytime.chat_session = e), this.SetDirty(!0));
        }
        BIsAnytimeTaggingWizardEnabled() {
          return this.m_model.do_anytime.tagging_wizard || !1;
        }
        SetAnytimeTaggingWizardEnabled(e) {
          e !== this.m_model.do_anytime.tagging_wizard &&
            ((this.m_model.do_anytime.tagging_wizard = e), this.SetDirty(!0));
        }
        BIsEnterDiscountsEnabled() {
          return this.m_model.do_anytime.enter_discounts || !1;
        }
        SetEnterDiscountsEnabled(e) {
          e !== this.m_model.do_anytime.enter_discounts &&
            ((this.m_model.do_anytime.enter_discounts = e), this.SetDirty(!0));
        }
        GetDiscountEventID() {
          return this.m_model.do_anytime.discount_event_id || "";
        }
        SetDiscountEventID(e) {
          e !== this.m_model.do_anytime.discount_event_id &&
            ((this.m_model.do_anytime.discount_event_id = e),
            this.SetDirty(!0));
        }
        GetExternalAppReviewers() {
          return this.m_model.external_app_reviewer || [];
        }
        SetExternalAppReviewers(e) {
          JSON.stringify(e) !==
            JSON.stringify(this.m_model.external_app_reviewer) &&
            ((this.m_model.external_app_reviewer = e), this.SetDirty(!0));
        }
        RemoveExternalAppReviewAt(e) {
          var t;
          e <
            (null === (t = this.m_model.external_app_reviewer) || void 0 === t
              ? void 0
              : t.length) &&
            (this.m_model.external_app_reviewer.splice(e, 1),
            this.SetDirty(!0));
        }
        BAddExternalAppReviewAt(e) {
          this.m_model.external_app_reviewer ||
            (this.m_model.external_app_reviewer = []);
          return (
            -1 == this.m_model.external_app_reviewer.findIndex((t) => t == e) &&
            (this.m_model.external_app_reviewer.push(e), this.SetDirty(!0), !0)
          );
        }
        GetKVLang(e, t) {
          const i = (0, d.j_)(t);
          return e ? e[i] : "";
        }
        SetKVLang(e, t, i) {
          const n = (0, d.j_)(t);
          e[n] != i && ((e[n] = i), this.SetDirty(!0));
        }
        AddDynamicSection() {
          this.m_model.dynamic_sections || (this.m_model.dynamic_sections = []),
            this.m_model.dynamic_sections.push(b.CreateDefaultDynamicSection());
          const e = new f(
            this.m_model.dynamic_sections[
              this.m_model.dynamic_sections.length - 1
            ]
          );
          this.m_mapDynamicSection.set(e.GetUniqueID(), e),
            this.m_dynamicSections.push(e),
            this.SetDirty(!0);
        }
        static CreateDefaultDynamicSection() {
          return {
            unique_id: b.Get().GenerateUniqueIDForOptInSection(),
            input_style: "radio",
            columns: 1,
            lists: [
              {
                options: [],
                unique_id: b.GenerateUniqueIDForOptionListSection(),
              },
            ],
          };
        }
        DeleteDynamicSection(e) {
          const t = this.GetDynamicSectionByID(e);
          if (!t) return console.log("Could not find section with ID " + e), !1;
          this.m_mapDynamicSection.delete(t.GetUniqueID());
          let i = this.m_dynamicSections.findIndex((t) => t.GetUniqueID() == e);
          if (-1 === i) throw `dynamic section unique id ${e} missing: editing`;
          if (
            (this.m_dynamicSections.splice(i, 1),
            (i = this.m_model.dynamic_sections.findIndex(
              (t) => t.unique_id === e
            )),
            -1 === i)
          )
            throw `dynamic section unique id ${e} missing: source model`;
          return (
            this.m_model.dynamic_sections.splice(i, 1), this.SetDirty(!0), !0
          );
        }
        GenerateUniqueIDForOptInSection() {
          let e = Math.floor(1 + 1e5 * Math.random());
          for (; this.GetDynamicSectionByID(D + e); )
            e = Math.floor(1 + 1e5 * Math.random());
          return D + e;
        }
        static GenerateUniqueIDForOptionListSection(e) {
          let t = Math.floor(1 + 1e5 * Math.random());
          for (; e && e.some((e) => e.unique_id === y + t); )
            t = Math.floor(1 + 1e5 * Math.random());
          return y + t;
        }
        static GenerateUniqueIDForListItem(e) {
          let t = Math.floor(1 + 1e5 * Math.random());
          for (; e && e.some((e) => e.unique_id === S + t); )
            t = Math.floor(1 + 1e5 * Math.random());
          return S + t;
        }
        BIsDirty() {
          return this.m_bDirty;
        }
        SetDirty(e) {
          this.m_bDirty != e &&
            ((this.m_bDirty = e),
            v.v.Get().SetUnpublishedChanges(this.GetFullName()));
        }
        Save(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            let t = h.De.PARTNER_BASE_URL + "optin/ajaxadminupdate";
            const i = new FormData();
            i.append("sessionid", h.De.SESSIONID),
              i.append("pageid", this.m_model.pageid),
              i.append("jsondata", JSON.stringify(this.m_model));
            try {
              let n = yield s().post(t, i, {
                withCredentials: !0,
                cancelToken: e,
              });
              if (e.reason)
                return (
                  console.log(
                    "COptInAdminEditModel.Save Cancelled: " + e.reason
                  ),
                  null
                );
              if (200 != n.status || !n.data || 1 != n.data.success) {
                let e =
                  "Save Error: (" +
                  (n.data
                    ? "erseult: " + n.data.success
                    : "status: " + n.status) +
                  ")";
                return (
                  n.data &&
                    n.data.err_msg &&
                    (e += " Error Message: " + n.data.err_msg),
                  console.error("COptInAdminEditModel.Save: " + e),
                  e
                );
              }
              v.v.Get().SetOptInDefinition(this.m_model), this.SetDirty(!1);
            } catch (e) {
              let t = (0, p.l)(e);
              return (
                console.error(
                  "COptInAdminEditModel save error: " + t.strErrorMsg,
                  t
                ),
                "Save Error: " + e.strErrorMsg
              );
            }
            return null;
          });
        }
        BInitialized() {
          return Boolean(this.m_model);
        }
        BHasLanguageData(e) {
          const t = (0, d.j_)(e);
          return (
            (this.m_model.description &&
              this.m_model.description[t] &&
              this.m_model.description[t].length > 0) ||
            (this.m_model.help_text &&
              this.m_model.help_text[t] &&
              this.m_model.help_text[t].length > 0) ||
            (this.m_model.appeals_text &&
              this.m_model.appeals_text[t] &&
              this.m_model.appeals_text[t].length > 0) ||
            (this.m_model.special_event_name &&
              this.m_model.special_event_name[t] &&
              this.m_model.special_event_name[t].length > 0) ||
            (this.m_model.special_event_description &&
              this.m_model.special_event_description[t] &&
              this.m_model.special_event_description[t].length > 0) ||
            (this.m_model.build_store_page &&
              this.m_model.build_store_page.description &&
              this.m_model.build_store_page.description[t] &&
              this.m_model.build_store_page.description[t].length > 0) ||
            (this.m_model.artist_statement &&
              this.m_model.artist_statement.description &&
              this.m_model.artist_statement.description[t] &&
              this.m_model.artist_statement.description[t].length > 0)
          );
        }
        Reset(e, t) {
          var i, n;
          if (
            ((this.m_model = e ? JSON.parse(JSON.stringify(e)) : null),
            (this.m_bDirty = !1),
            u.U.Get().SetCurEditLanguage(0),
            this.SetActiveStats(t),
            this.m_model &&
              ((this.m_model.required_tags &&
                !Array.isArray(this.m_model.required_tags)) ||
                (this.m_model.required_tags = {}),
              (this.m_model.categories &&
                !Array.isArray(this.m_model.categories)) ||
                (this.m_model.categories = {}),
              (this.m_model.categories.tags &&
                !Array.isArray(this.m_model.categories.tags)) ||
                (this.m_model.categories.tags = {}),
              (this.m_model.artist_statement &&
                !Array.isArray(this.m_model.artist_statement)) ||
                (this.m_model.artist_statement = {}),
              (this.m_model.primary_country &&
                !Array.isArray(this.m_model.primary_country)) ||
                (this.m_model.primary_country = {}),
              (this.m_model.press_contact &&
                !Array.isArray(this.m_model.press_contact)) ||
                (this.m_model.press_contact = {}),
              (this.m_model.build_store_page &&
                !Array.isArray(this.m_model.build_store_page)) ||
                (this.m_model.build_store_page = {}),
              (this.m_model.launch_demo &&
                !Array.isArray(this.m_model.launch_demo)) ||
                (this.m_model.launch_demo = {}),
              (this.m_model.do_anytime &&
                !Array.isArray(this.m_model.do_anytime)) ||
                (this.m_model.do_anytime = {}),
              (this.m_model.release_date_eligibility &&
                !Array.isArray(this.m_model.release_date_eligibility)) ||
                (this.m_model.release_date_eligibility = {}),
              (this.m_model.cooldown_group &&
                !Array.isArray(this.m_model.cooldown_group)) ||
                (this.m_model.cooldown_group = {}),
              (this.m_model.description &&
                !Array.isArray(this.m_model.description)) ||
                (this.m_model.description = {}),
              (this.m_model.help_text &&
                !Array.isArray(this.m_model.help_text)) ||
                (this.m_model.help_text = {}),
              (this.m_model.appeals_text &&
                !Array.isArray(this.m_model.appeals_text)) ||
                (this.m_model.appeals_text = {}),
              (this.m_model.special_event_description &&
                !Array.isArray(this.m_model.special_event_description)) ||
                (this.m_model.special_event_description = {}),
              (this.m_model.special_event_name &&
                !Array.isArray(this.m_model.special_event_name)) ||
                (this.m_model.special_event_name = {}),
              (this.m_model.event_title &&
                !Array.isArray(this.m_model.event_title)) ||
                (this.m_model.event_title = {}),
              (this.m_model.required_app_features &&
                !Array.isArray(this.m_model.required_app_features)) ||
                (this.m_model.required_app_features = {})),
            this.m_model && !this.m_model.event_start_date)
          ) {
            let e = new Date();
            e.setHours(10),
              e.setMinutes(0),
              e.setSeconds(0),
              (this.m_model.event_start_date = Math.floor(e.getTime() / 1e3));
          }
          if (this.m_model && !this.m_model.event_end_date) {
            let e = new Date();
            e.setDate(e.getDate() + 1),
              e.setHours(10),
              e.setMinutes(0),
              e.setSeconds(0),
              (this.m_model.event_end_date = Math.floor(e.getTime() / 1e3));
          }
          (this.m_dynamicSections = []),
            (this.m_mapDynamicSection = new Map()),
            this.m_model &&
              this.m_model.dynamic_sections &&
              this.m_model.dynamic_sections.forEach((e) => {
                let t = new f(e);
                this.m_dynamicSections.push(t),
                  this.m_mapDynamicSection.set(t.GetUniqueID(), t);
              }),
            (this.m_EmailDefinitions = []),
            (this.m_mapEmails = new Map()),
            (null ===
              (n =
                null === (i = this.m_model) || void 0 === i
                  ? void 0
                  : i.emails) || void 0 === n
              ? void 0
              : n.length) > 0 &&
              this.m_model.emails.forEach((e) => {
                const t = new o.S4(this.GetFullName(), e);
                this.m_EmailDefinitions.push(t),
                  this.m_mapEmails.set(t.GetUniqueID(), t);
              }),
            this.LoadActiveStatsDetails();
        }
        AddEmailDraft(e) {
          this.m_model.emails || (this.m_model.emails = []),
            this.m_model.emails.push(e);
          const t = new o.S4(
            this.GetFullName(),
            this.m_model.emails[this.m_model.emails.length - 1]
          );
          return (
            this.m_EmailDefinitions.push(t),
            this.m_mapEmails.set(t.GetUniqueID(), t),
            this.SetDirty(!0),
            t
          );
        }
        SetActiveStats(e) {
          (this.rgActiveStats = e),
            this.GetActiveStatsChangeCallaback().Dispatch(e);
        }
        GetActiveStats() {
          return this.rgActiveStats;
        }
        LoadActiveStatsDetails() {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (!this.m_model) return null;
            let e = h.De.PARTNER_BASE_URL + "optin/ajaxgetoptinstats";
            e +=
              "?active=true&pageids=" + encodeURIComponent(this.m_model.pageid);
            try {
              let t = yield s().get(e, { withCredentials: !0, timeout: 2e4 });
              if (200 != t.status || !t.data || 1 != t.data.success) {
                return (
                  "LoadActiveStatsDetails error: (" +
                  (t.data
                    ? "result: " + t.data.success
                    : "status: " + t.status) +
                  ")"
                );
              }
              if (t.data.msg) {
                const e = t.data.msg
                  ? JSON.parse(JSON.stringify(t.data.msg))
                  : null;
                this.SetActiveStats(e ? e[0] : null);
              }
            } catch (e) {
              return "Loading active stats returned " + e.strErrorMsg;
            }
            return null;
          });
        }
        RefreshActiveStats(e) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (!this.m_model) return null;
            let t = h.De.PARTNER_BASE_URL + "optin/ajaxrefreshoptinstats";
            const i = new FormData();
            i.append("sessionid", h.De.SESSIONID),
              i.append("pageids", this.m_model.pageid);
            try {
              let n = yield s().post(t, i, {
                withCredentials: !0,
                cancelToken: e || void 0,
                timeout: 12e4,
              });
              if (e && e.reason)
                return (
                  console.log("RefreshingActiveStats Cancelled: " + e.reason),
                  null
                );
              if (200 != n.status || !n.data || 1 != n.data.success) {
                let e =
                  "Refresh optin stats error: (" +
                  (n.data
                    ? "result: " + n.data.success
                    : "status: " + n.status) +
                  ")";
                return (
                  console.log("COptInAdminEditModel.RefresActiveStats: " + e), e
                );
              }
              if (n.data.msg) {
                let e = n.data.msg
                  ? JSON.parse(JSON.stringify(n.data.msg))
                  : null;
                this.SetActiveStats(e ? e[0] : null);
              }
            } catch (e) {
              let t = (0, p.l)(e);
              return (
                console.error(
                  "COptInAdminEditModel.RefreshActiveStats error: " +
                    t.strErrorMsg,
                  t
                ),
                "Save Error: " + e.strErrorMsg
              );
            }
            return null;
          });
        }
        GetRequiredOptions() {
          return (
            this.rgOptionalSuggestedRequired.length ||
              (this.rgOptionalSuggestedRequired.push({
                label: "Optional",
                data: 0,
              }),
              this.rgOptionalSuggestedRequired.push({
                label: "Suggested",
                data: 1,
              }),
              this.rgOptionalSuggestedRequired.push({
                label: "Required",
                data: 2,
              })),
            this.rgOptionalSuggestedRequired
          );
        }
        GetCooldownGroupOptions() {
          if (!this.rgEventTypes.length)
            for (let e = 0; null != a.Sc[e]; e++)
              this.rgEventTypes.push({ label: a.Sc[e], data: e });
          return this.rgEventTypes;
        }
        GetGameTagOptions() {
          if (!this.rgGameTokens.length) {
            v.v
              .Get()
              .GetGameTags()
              .forEach((e) => {
                this.rgGameTokens.push({ label: e.label, value: e.value });
              });
          }
          return this.rgGameTokens;
        }
      }
      (0, n.gn)([l.LO], b.prototype, "m_model", void 0),
        (0, n.gn)([l.LO], b.prototype, "m_bDirty", void 0),
        (0, n.gn)([l.LO], b.prototype, "rgActiveStats", void 0),
        (0, n.gn)([l.LO], b.prototype, "m_dynamicSections", void 0),
        (0, n.gn)([l.LO], b.prototype, "m_EmailDefinitions", void 0),
        (0, n.gn)([g.ak], b.prototype, "GetSpecialEventType", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetSpecialEventType", null),
        (0, n.gn)([g.ak], b.prototype, "GetCurSpecialEventName", null),
        (0, n.gn)([g.ak], b.prototype, "GetSpecialEventName", null),
        (0, n.gn)([g.ak], b.prototype, "SetCurSpecialEventName", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetSpecialEventName", null),
        (0, n.gn)([g.ak], b.prototype, "GetCurSpecialEventDescription", null),
        (0, n.gn)([g.ak], b.prototype, "GetSpecialEventDescription", null),
        (0, n.gn)([g.ak], b.prototype, "SetCurSpecialEventDescription", null),
        (0, n.gn)(
          [l.aD.bound],
          b.prototype,
          "SetSpecialEventDescription",
          null
        ),
        (0, n.gn)([g.ak], b.prototype, "GetSpecialEventDocLink", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetSpecialEventDocLink", null),
        (0, n.gn)([g.ak], b.prototype, "GetSpecialEventTypeMax", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetSpecialEventTypeMax", null),
        (0, n.gn)([g.ak], b.prototype, "GetSpecialEventStartTime", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetSpecialEventStartTime", null),
        (0, n.gn)([g.ak], b.prototype, "GetSpecialEventEndTime", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetSpecialEventEndTime", null),
        (0, n.gn)([g.ak], b.prototype, "BHasSpecialEventTimeSet", null),
        (0, n.gn)([g.ak], b.prototype, "NCountSpecialEventBlocks", null),
        (0, n.gn)([l.aD.bound], b.prototype, "AddSpecialEventBlock", null),
        (0, n.gn)([l.aD.bound], b.prototype, "RemoveSpecialEventBlock", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetSpecialEventBlock", null),
        (0, n.gn)([g.ak], b.prototype, "GetAllSpecialEventBlocks", null),
        (0, n.gn)([l.aD.bound], b.prototype, "MoveSpecialEventblock", null),
        (0, n.gn)([g.ak], b.prototype, "BIsInSpecialEventBlockedTime", null),
        (0, n.gn)([g.ak], b.prototype, "BRequiresRemotePlayTogether", null),
        (0, n.gn)(
          [l.aD.bound],
          b.prototype,
          "SetRequiresRemotePlayTogether",
          null
        ),
        (0, n.gn)([g.ak], b.prototype, "BRequiresVR", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetRequiresVR", null),
        (0, n.gn)(
          [g.ak],
          b.prototype,
          "BOptInRegistationOnlyShowSaveButton",
          null
        ),
        (0, n.gn)(
          [l.aD.bound],
          b.prototype,
          "SetOptInRegistationOnlyShowSaveButton",
          null
        ),
        (0, n.gn)(
          [g.ak],
          b.prototype,
          "BIsAdditionalFeaturingSectionEnabled",
          null
        ),
        (0, n.gn)(
          [l.aD.bound],
          b.prototype,
          "SetAdditionalFeaturingSectionEnabled",
          null
        ),
        (0, n.gn)([g.ak], b.prototype, "BIsCollectTrailerPermissions", null),
        (0, n.gn)(
          [l.aD.bound],
          b.prototype,
          "SetCollectTrailerPermissions",
          null
        ),
        (0, n.gn)([g.ak], b.prototype, "BIsCollectDemoPermissions", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetCollectDemoPermissions", null),
        (0, n.gn)([g.ak], b.prototype, "BIsCollectGameProfileIntent", null),
        (0, n.gn)(
          [l.aD.bound],
          b.prototype,
          "SetCollectGameProfileIntent",
          null
        ),
        (0, n.gn)([g.ak], b.prototype, "BHasCollectDemoDeadlineDate", null),
        (0, n.gn)([g.ak], b.prototype, "GetCollectDemoDeadlineDate", null),
        (0, n.gn)(
          [l.aD.bound],
          b.prototype,
          "SetCollectDemoDeadlineDate",
          null
        ),
        (0, n.gn)([g.ak], b.prototype, "GetCurEventTitle", null),
        (0, n.gn)([g.ak], b.prototype, "GetEventTitle", null),
        (0, n.gn)([g.ak], b.prototype, "SetCurEventTitle", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetEventTitle", null),
        (0, n.gn)([g.ak], b.prototype, "GetCurOptInRegistrationTitle", null),
        (0, n.gn)([g.ak], b.prototype, "GetOptInRegistrationTitle", null),
        (0, n.gn)([g.ak], b.prototype, "SetCurOptInRegistrationTitle", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetOptInRegistrationTitle", null),
        (0, n.gn)([g.ak], b.prototype, "GetCurOptInRegistrationCheckbox", null),
        (0, n.gn)([g.ak], b.prototype, "GetOptInRegistrationCheckbox", null),
        (0, n.gn)([g.ak], b.prototype, "SetCurOptInRegistrationCheckbox", null),
        (0, n.gn)(
          [l.aD.bound],
          b.prototype,
          "SetOptInRegistrationCheckbox",
          null
        ),
        (0, n.gn)(
          [g.ak],
          b.prototype,
          "BHasOptInRegistrationTitleOrCheckbox",
          null
        ),
        (0, n.gn)([g.ak], b.prototype, "BIsOptInEnabled", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetOptInEnabled", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetPublicEventURL", null),
        (0, n.gn)(
          [l.aD.bound],
          b.prototype,
          "SetPublicDocumentationWikiURL",
          null
        ),
        (0, n.gn)([l.aD.bound], b.prototype, "SetPublicEventID", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetEventStartTime", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetEventEndTime", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetOptInDeadlineTime", null),
        (0, n.gn)([g.ak], b.prototype, "BIsInvitationOnly", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetInvititationOnly", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetReleaseGameEligible", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetUnreleaseGameEligible", null),
        (0, n.gn)(
          [l.aD.bound],
          b.prototype,
          "SetEligibleReleaseBeforeDate",
          null
        ),
        (0, n.gn)(
          [l.aD.bound],
          b.prototype,
          "SetEligibleReleaseAfterDate",
          null
        ),
        (0, n.gn)([l.aD.bound], b.prototype, "SetCooldownGroupType", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetCooldownRequired", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetCooldownDays", null),
        (0, n.gn)([g.ak], b.prototype, "OnChangeRequiredTags", null),
        (0, n.gn)(
          [g.ak],
          b.prototype,
          "GetAppOfficialWeightedTagRankToInclude",
          null
        ),
        (0, n.gn)(
          [l.aD.bound],
          b.prototype,
          "SetAppOfficialWeightedTagRankToInclude",
          null
        ),
        (0, n.gn)([g.ak], b.prototype, "GetCurDescription", null),
        (0, n.gn)([g.ak], b.prototype, "GetDescription", null),
        (0, n.gn)([g.ak], b.prototype, "SetCurDescription", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetDescription", null),
        (0, n.gn)([g.ak], b.prototype, "GetCurHelpText", null),
        (0, n.gn)([g.ak], b.prototype, "GetHelpText", null),
        (0, n.gn)([g.ak], b.prototype, "SetCurHelpText", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetHelpText", null),
        (0, n.gn)([g.ak], b.prototype, "GetCurAppealsText", null),
        (0, n.gn)([g.ak], b.prototype, "GetAppealsText", null),
        (0, n.gn)([g.ak], b.prototype, "SetCurAppealsText", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetAppealsText", null),
        (0, n.gn)([g.ak], b.prototype, "GetLocalizedOptInBanner", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetLocalizedOptInBanner", null),
        (0, n.gn)([g.ak], b.prototype, "DeleteLocalizedOptInBanner", null),
        (0, n.gn)([g.ak], b.prototype, "BIsCategoriesEnabled", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetCategoriesEnabled", null),
        (0, n.gn)([g.ak], b.prototype, "GetCategoriesRequired", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetCategoriesRequired", null),
        (0, n.gn)([g.ak], b.prototype, "OnChangeCategoryTags", null),
        (0, n.gn)([g.ak], b.prototype, "BIsArtistStatementEnabled", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetArtistStatementEnabled", null),
        (0, n.gn)([g.ak], b.prototype, "GetArtistStatementRequired", null),
        (0, n.gn)(
          [l.aD.bound],
          b.prototype,
          "SetArtistStatementRequired",
          null
        ),
        (0, n.gn)([g.ak], b.prototype, "BIsPrimaryCountryEnabled", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetPrimaryCountryEnabled", null),
        (0, n.gn)([g.ak], b.prototype, "GetPrimaryCountryRequired", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetPrimaryCountryRequired", null),
        (0, n.gn)([g.ak], b.prototype, "BIsPressContactEnabled", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetPressContactEnabled", null),
        (0, n.gn)([g.ak], b.prototype, "GetPressContactRequired", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetPressContactRequired", null),
        (0, n.gn)([g.ak], b.prototype, "BIsBeforeYouOptInEnabled", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetBeforeYouOptInEnabled", null),
        (0, n.gn)([g.ak], b.prototype, "BIsBuildYourStorePageEnabled", null),
        (0, n.gn)(
          [l.aD.bound],
          b.prototype,
          "SetBuildYourStorePageEnabled",
          null
        ),
        (0, n.gn)([g.ak], b.prototype, "GetBuildYourStorePageRequired", null),
        (0, n.gn)(
          [l.aD.bound],
          b.prototype,
          "SetBuildYourStorePageRequired",
          null
        ),
        (0, n.gn)([g.ak], b.prototype, "GetStorePageText", null),
        (0, n.gn)([g.ak], b.prototype, "SetStorePageText", null),
        (0, n.gn)([g.ak], b.prototype, "BIsTaggingWizardEnabled", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetTaggingWizardEnabled", null),
        (0, n.gn)([g.ak], b.prototype, "BIsLaunchYourDemoEnabled", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetLaunchYourDemoEnabled", null),
        (0, n.gn)([g.ak], b.prototype, "GetLaunchYourDemoRequired", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetLaunchYourDemoRequired", null),
        (0, n.gn)([g.ak], b.prototype, "GetLaunchYourDemoDueDate", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetLaunchYourDemoDueDate", null),
        (0, n.gn)([g.ak], b.prototype, "BIsDoAnytimeEnabled", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetDoAnytimeEnabled", null),
        (0, n.gn)([g.ak], b.prototype, "BIsLivestreamEnabled", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetLivestreamEnabled", null),
        (0, n.gn)([g.ak], b.prototype, "BIsChatSessionEnabled", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetChatSessionEnabled", null),
        (0, n.gn)([g.ak], b.prototype, "BIsAnytimeTaggingWizardEnabled", null),
        (0, n.gn)(
          [l.aD.bound],
          b.prototype,
          "SetAnytimeTaggingWizardEnabled",
          null
        ),
        (0, n.gn)([g.ak], b.prototype, "BIsEnterDiscountsEnabled", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetEnterDiscountsEnabled", null),
        (0, n.gn)([g.ak], b.prototype, "GetDiscountEventID", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetDiscountEventID", null),
        (0, n.gn)([g.ak], b.prototype, "GetExternalAppReviewers", null),
        (0, n.gn)([l.aD.bound], b.prototype, "SetExternalAppReviewers", null),
        (0, n.gn)([l.aD.bound], b.prototype, "RemoveExternalAppReviewAt", null),
        (0, n.gn)([l.aD.bound], b.prototype, "BAddExternalAppReviewAt", null),
        (0, n.gn)([l.aD.bound], b.prototype, "AddDynamicSection", null),
        (0, n.gn)([l.aD.bound], b.prototype, "DeleteDynamicSection", null),
        (0, n.gn)([g.ak], b.prototype, "BHasLanguageData", null),
        (0, n.gn)([l.aD], b.prototype, "Reset", null),
        (0, n.gn)([l.aD.bound], b.prototype, "AddEmailDraft", null),
        (0, n.gn)([g.ak], b.prototype, "GetRequiredOptions", null),
        (0, n.gn)([g.ak], b.prototype, "GetCooldownGroupOptions", null),
        (0, n.gn)([g.ak], b.prototype, "GetGameTagOptions", null);
      class f {
        constructor(e) {
          this.m_section = e;
        }
        GetUniqueID() {
          return this.m_section.unique_id;
        }
        GetName() {
          var e;
          return null !==
            (e = (0, a.Xj)(
              this.m_section.name,
              u.U.Get().GetCurEditLanguage(),
              ""
            )) && void 0 !== e
            ? e
            : "";
        }
        GetNameWithFallback(e) {
          var t;
          return null !==
            (t = (0, a.Xj)(
              this.m_section.name,
              u.U.Get().GetCurEditLanguage(),
              e
            )) && void 0 !== t
            ? t
            : "";
        }
        GetDescription() {
          var e;
          return null !==
            (e = (0, a.Xj)(
              this.m_section.description,
              u.U.Get().GetCurEditLanguage(),
              ""
            )) && void 0 !== e
            ? e
            : "";
        }
        GetInputStyle() {
          return this.m_section.input_style;
        }
        GetColumnCount() {
          return this.m_section.columns;
        }
        GetLists() {
          return this.m_section.lists;
        }
        GetListTitle(e) {
          var t;
          return null !==
            (t = (0, a.Xj)(
              this.m_section.lists[e].option_title,
              u.U.Get().GetCurEditLanguage()
            )) && void 0 !== t
            ? t
            : "";
        }
        GetListByIndex(e) {
          return this.m_section.lists[e];
        }
        GetListByID(e) {
          const t = this.m_section.lists.filter((t) => t.unique_id == e);
          return t.length > 0 ? t[0] : null;
        }
        GetItemAtListAndIndex(e, t) {
          return this.m_section.lists[e].options[t];
        }
        GetModel() {
          return this.m_section;
        }
        GetListCount() {
          return this.m_section.lists ? this.m_section.lists.length : 0;
        }
        BIsValveOnlySection() {
          return this.m_section.valve_only;
        }
        SetName(e, t) {
          if ((0, a.Xj)(this.m_section.name, t) != e) {
            const i = (0, d.j_)(t, "english");
            this.m_section.name || (this.m_section.name = {}),
              (this.m_section.name[i] = e),
              b.Get().SetDirty(!0);
          }
        }
        SetDescription(e, t) {
          if ((0, a.Xj)(this.m_section.description, t) != e) {
            const i = (0, d.j_)(t, "english");
            this.m_section.description || (this.m_section.description = {}),
              (this.m_section.description[i] = e),
              b.Get().SetDirty(!0);
          }
        }
        SetDescriptionWithCurLang(e) {
          this.SetDescription(e, u.U.Get().GetCurEditLanguage());
        }
        SetInputStyle(e) {
          this.m_section.input_style != e &&
            ((this.m_section.input_style = e),
            "text_input" == e &&
              ((this.m_section.lists = this.m_section.lists.splice(
                1,
                this.m_section.lists.length
              )),
              0 == this.m_section.lists.length && this.AddOptionList()),
            b.Get().SetDirty(!0));
        }
        SetColumnCount(e) {
          this.m_section.columns != e &&
            ((this.m_section.columns = e), b.Get().SetDirty(!0));
        }
        SetValveOnly(e) {
          this.m_section.valve_only != e &&
            ((this.m_section.valve_only = e), b.Get().SetDirty(!0));
        }
        AddItemToList(e, t, i, n) {
          let r = this.m_section.lists.findIndex((t) => t.unique_id === e);
          this.AddItemToListByIndex(r, t, i);
        }
        AddItemToListByIndex(e, t, i, n) {
          if (!(e >= 0 && e <= this.m_section.lists.length))
            throw "Adding item to a list that does not exist: " + e;
          {
            const r = (0, d.j_)(i, "english");
            this.m_section.lists[e].options ||
              (this.m_section.lists[e].options = []);
            const s = {
              text: {},
              unique_id: b.GenerateUniqueIDForListItem(
                this.m_section.lists[e].options
              ),
            };
            (s.text[r] = t),
              n && ((s.tooltip = {}), (s.tooltip[r] = n)),
              this.m_section.lists[e].options.push(s),
              b.Get().SetDirty(!0);
          }
        }
        RemoveListItemByID(e, t) {
          let i = this.m_section.lists.findIndex((t) => t.unique_id === e);
          -1 !== i &&
            t < this.m_section.lists[i].options.length &&
            (this.m_section.lists[i].options.splice(t, 1),
            b.Get().SetDirty(!0));
        }
        RemoveListItem(e, t) {
          e < this.m_section.lists.length &&
            t < this.m_section.lists[e].options.length &&
            (this.m_section.lists[e].options.splice(t, 1),
            b.Get().SetDirty(!0));
        }
        MoveListItem(e, t, i) {
          e < this.m_section.lists.length &&
            ((0, m.hV)(this.m_section.lists[e].options, t, i),
            b.Get().SetDirty(!0));
        }
        UpdateListItemText(e, t, i, n) {
          let r = this.m_section.lists.findIndex((t) => t.unique_id === e);
          if (
            -1 !== r &&
            t < this.m_section.lists[r].options.length &&
            (0, a.Xj)(this.m_section.lists[r].options[t].text, n) != i
          ) {
            const e = (0, d.j_)(n, "english");
            (this.m_section.lists[r].options[t].text[e] = i),
              b.Get().SetDirty(!0);
          }
        }
        UpdateListItemTooltip(e, t, i, n) {
          let r = this.m_section.lists.findIndex((t) => t.unique_id === e);
          if (
            -1 !== r &&
            t < this.m_section.lists[r].options.length &&
            (0, a.Xj)(this.m_section.lists[r].options[t].tooltip, n) != i
          ) {
            const e = (0, d.j_)(n, "english");
            this.m_section.lists[r].options[t].tooltip ||
              (this.m_section.lists[r].options[t].tooltip = {}),
              (this.m_section.lists[r].options[t].tooltip[e] = i),
              b.Get().SetDirty(!0);
          }
        }
        UpdateListItemTextByKV(e, t, i, n) {
          if (
            e >= 0 &&
            e < this.m_section.lists.length &&
            t >= 0 &&
            t < this.m_section.lists[e].options.length
          ) {
            let r = this.m_section.lists[e].options[t],
              s = !1;
            for (let e = 0; e < 30; ++e) {
              if ((0, a.Xj)(i, e) != (0, a.Xj)(r.text, e)) {
                const t = (0, d.j_)(e);
                (r.text[t] = i[t]), (s = !0);
              }
              if (
                n &&
                (r.tooltip || (r.tooltip = {}),
                (0, a.Xj)(n, e) != (0, a.Xj)(r.tooltip, e))
              ) {
                const t = (0, d.j_)(e);
                (r.tooltip[t] = n[t]), (s = !0);
              }
            }
            s && b.Get().SetDirty(!0);
          }
        }
        AddOptionList() {
          const e = {
            options: [],
            unique_id: b.GenerateUniqueIDForOptionListSection(
              this.m_section.lists
            ),
          };
          this.m_section.lists.push(e), b.Get().SetDirty(!0);
        }
        DeleteOptionList(e) {
          let t = this.m_section.lists.findIndex((t) => t.unique_id === e);
          t &&
            (this.m_section.lists.splice(t, 1),
            0 == this.m_section.lists.length &&
              (this.m_section.lists = [
                {
                  options: [],
                  unique_id: b.GenerateUniqueIDForOptionListSection(),
                },
              ]),
            b.Get().SetDirty(!0));
        }
        SetListTitle(e, t, i) {
          let n = this.m_section.lists.findIndex((t) => t.unique_id === e);
          this.SetListTitleByListIndex(n, t, i);
        }
        SetListTitleByListIndex(e, t, i) {
          if (
            e >= 0 &&
            e < this.m_section.lists.length &&
            (0, a.Xj)(this.m_section.lists[e].option_title, i) != t
          ) {
            const n = (0, d.j_)(i, "english");
            this.m_section.lists[e].option_title ||
              (this.m_section.lists[e].option_title = {}),
              (this.m_section.lists[e].option_title[n] = t),
              b.Get().SetDirty(!0);
          }
        }
      }
      function E() {
        const [e, t] = (0, c.useState)(b.Get().GetActiveStats());
        return (0, g.Qg)(b.Get().GetActiveStatsChangeCallaback(), t), e;
      }
      (0, n.gn)([g.ak], f.prototype, "GetName", null),
        (0, n.gn)([g.ak], f.prototype, "GetDescription", null),
        (0, n.gn)([l.aD.bound], f.prototype, "SetName", null),
        (0, n.gn)([l.aD.bound], f.prototype, "SetDescription", null),
        (0, n.gn)([l.aD.bound], f.prototype, "SetDescriptionWithCurLang", null),
        (0, n.gn)([l.aD.bound], f.prototype, "SetInputStyle", null),
        (0, n.gn)([l.aD.bound], f.prototype, "SetColumnCount", null),
        (0, n.gn)([l.aD.bound], f.prototype, "SetValveOnly", null),
        (0, n.gn)([l.aD.bound], f.prototype, "AddItemToList", null),
        (0, n.gn)([l.aD.bound], f.prototype, "AddItemToListByIndex", null),
        (0, n.gn)([l.aD], f.prototype, "RemoveListItemByID", null),
        (0, n.gn)([l.aD], f.prototype, "RemoveListItem", null),
        (0, n.gn)([l.aD], f.prototype, "MoveListItem", null),
        (0, n.gn)([l.aD], f.prototype, "UpdateListItemText", null),
        (0, n.gn)([l.aD], f.prototype, "UpdateListItemTooltip", null),
        (0, n.gn)([l.aD], f.prototype, "UpdateListItemTextByKV", null),
        (0, n.gn)([l.aD.bound], f.prototype, "AddOptionList", null),
        (0, n.gn)([l.aD], f.prototype, "DeleteOptionList", null),
        (0, n.gn)([l.aD], f.prototype, "SetListTitle", null),
        (0, n.gn)([l.aD], f.prototype, "SetListTitleByListIndex", null);
    },
    15596: (e, t, i) => {
      "use strict";
      i.d(t, { r: () => u, v: () => d });
      var n = i(33940),
        r = i(52868),
        s = i.n(r),
        a = i(75746),
        o = (i(53144), i(50265)),
        l = (i(6960), i(96158), i(47330)),
        c = i(70983);
      class d {
        constructor() {
          (this.m_optInDef = new Map()),
            (this.m_activeOptInDef = new Array()),
            (this.m_archivedOptInDef = new Array()),
            (this.m_game_tags = []),
            (this.m_optin_stats = {}),
            (this.m_mapHasUnpublishedChanges = new Map());
        }
        GetActiveOptIn() {
          return this.m_activeOptInDef;
        }
        GetArchivedOptIn() {
          return this.m_archivedOptInDef;
        }
        GetGameTags() {
          return this.m_game_tags;
        }
        GetOptInStats() {
          return this.m_optin_stats;
        }
        BHasUnpublishedChagnes(e) {
          return this.m_mapHasUnpublishedChanges.get(e);
        }
        SetUnpublishedChanges(e) {
          this.m_mapHasUnpublishedChanges.set(e, !0);
        }
        GetDefinition(e) {
          return this.m_optInDef.get(e);
        }
        SetOptInDefinition(e) {
          this.m_optInDef.set(e.pageid, e);
          let t = this.m_activeOptInDef.findIndex((t) => t.pageid == e.pageid);
          -1 != t &&
            (this.m_activeOptInDef.splice(t, 1),
            this.m_activeOptInDef.unshift(e)),
            (t = this.m_archivedOptInDef.findIndex(
              (t) => t.pageid == e.pageid
            )),
            -1 != t &&
              (this.m_archivedOptInDef.splice(t, 1),
              this.m_archivedOptInDef.unshift(e));
        }
        GetCreatedPageId() {
          return this.createdPageId;
        }
        GetCreatePageErrMsg() {
          return this.createPageErrMsg;
        }
        CreatePage(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            (this.createdPageId = ""), (this.createPageErrMsg = "");
            let i = c.De.PARTNER_BASE_URL + "/admin/store/pagecreate";
            const n = new FormData();
            n.append("sessionid", c.De.SESSIONID),
              n.append("action", "createsale"),
              n.append("id", e),
              n.append("is_optin", "true");
            try {
              let e = yield s().post(i, n, {
                withCredentials: !0,
                cancelToken: t,
              });
              if (t.reason)
                return (
                  console.log(
                    "COptInAdminStore.CreatePage cancelled: " + t.reason
                  ),
                  null
                );
              if (200 != e.status || !e.data || 1 != e.data.success) {
                let t =
                  "Save Error: (" +
                  (e.data
                    ? "result: " + e.data.success
                    : "status: " + e.status) +
                  ")";
                return (
                  e.data &&
                    e.data.msg &&
                    (t += " Error Message: " + e.data.msg),
                  (this.createPageErrMsg = e.data.msg),
                  t
                );
              }
              this.createdPageId = e.data.msg;
            } catch (e) {
              let t = (0, l.l)(e);
              return (
                console.error(
                  "OptinAdminStore.CreatePage error: " + t.strErrorMsg,
                  t
                ),
                (this.createPageErrMsg = t.strErrorMsg),
                "Page creation error: " + e.strErrorMsg
              );
            }
            return null;
          });
        }
        static Get() {
          return (
            d.s_OptInAdmin ||
              ((d.s_OptInAdmin = new d()),
              ("dev" != c.De.WEB_UNIVERSE && "beta" != c.De.WEB_UNIVERSE) ||
                (window.g_OptInAdminStore = d.s_OptInAdmin),
              d.s_OptInAdmin.Init()),
            d.s_OptInAdmin
          );
        }
        Init() {
          let e = JSON.parse(
            JSON.stringify((0, c.kQ)("optin_game_tags", "application_config"))
          );
          if (e)
            for (let t of Object.keys(e))
              this.m_game_tags.push({ label: e[t], value: t });
          let t = JSON.parse(
            JSON.stringify((0, c.kQ)("optin_page_stats", "application_config"))
          );
          if (t)
            for (let e of Object.keys(t)) {
              let i = t[e].pageid;
              this.m_optin_stats[i] = t[e];
            }
          let i = (0, c.kQ)("optin_admin_pages", "application_config");
          if (this.ValidateStoreDefault(i)) {
            i.forEach((e) => {
              (0, a.MH)(e);
            });
            const e = Math.floor(Date.now() / 1e3);
            i.map((t) => {
              this.m_optInDef.set(t.pageid, t),
                t.event_end_date < e
                  ? this.m_archivedOptInDef.push(t)
                  : this.m_activeOptInDef.push(t);
            }),
              "dev" == c.De.WEB_UNIVERSE &&
                console.log(
                  "Loading OptIn Definitions: " + this.m_optInDef.size,
                  this.m_optInDef
                );
          } else
            "dev" == c.De.WEB_UNIVERSE &&
              console.error("COptInAdmin.Init: Failed to load defintion", i);
          const n = (0, c.kQ)("optin_has_in_progress", "application_config");
          for (let e in n) this.m_mapHasUnpublishedChanges.set(e, n[e]);
        }
        ValidateStoreDefault(e) {
          const t = e;
          return (
            !!(
              t &&
              Array.isArray(t) &&
              t.length > 0 &&
              "object" == typeof t[0]
            ) && "string" == typeof t[0].pageid
          );
        }
      }
      function u(e) {
        return d.Get().GetDefinition(e);
      }
      (0, n.gn)([o.LO], d.prototype, "m_mapHasUnpublishedChanges", void 0),
        (0, n.gn)([o.aD], d.prototype, "Init", null);
    },
    26808: (e, t, i) => {
      "use strict";
      i.d(t, {
        A0: () => v,
        Cy: () => f,
        PV: () => D,
        QQ: () => y,
        Rz: () => I,
        V7: () => b,
        ZW: () => S,
        _l: () => G,
        dS: () => P,
        du: () => B,
        nw: () => E,
        py: () => k,
        qh: () => h,
      });
      var n = i(33940),
        r = i(52868),
        s = i.n(r),
        a = (i(75746), i(52790), i(50265)),
        o = i(89526),
        l = i(5615),
        c = (i(38800), i(64222), i(96158), i(99096)),
        d = i(32338),
        u = i(47330),
        m = i(59821),
        p = i(23213),
        _ = i(31621),
        g = i(70983);
      class h {
        constructor() {
          (this.m_mapRegistrations = new Map()),
            (this.m_mapRequestedAppIDs = new Map()),
            (this.m_mapOptInNameCallback = new Map()),
            (this.m_mapSingleAppRegistrationChange = new Map());
        }
        BHasOptInRegistration(e, t) {
          var i;
          return Boolean(
            null === (i = this.m_mapRegistrations.get(e)) || void 0 === i
              ? void 0
              : i.has(t)
          );
        }
        GetOptInRegistrationPromise(e, t) {
          var i;
          return null === (i = this.m_mapRequestedAppIDs.get(t)) || void 0 === i
            ? void 0
            : i.get(e);
        }
        GetOptInRegistrationAndEligibilityForApp(e) {
          return this.m_mapRegistrations.get(e);
        }
        GetSingleAppRegistrationKey(e, t) {
          return `single_${e}_${t}`;
        }
        GetSingleAppRegistrationChange(e, t) {
          const i = this.GetSingleAppRegistrationKey(e, t);
          return (
            this.m_mapSingleAppRegistrationChange.has(i) ||
              this.m_mapSingleAppRegistrationChange.set(i, new p.pB()),
            this.m_mapSingleAppRegistrationChange.get(i)
          );
        }
        GetExistingOptInRegistartion(e, t) {
          return this.m_mapRegistrations.has(e)
            ? this.m_mapRegistrations.get(e).get(t)
            : null;
        }
        GetOptInRegistrationAndEligibilityForApps(e) {
          if (0 == e.length) return null;
          let t = new Map();
          for (let i of e) {
            let e = this.m_mapRegistrations.get(i);
            if (e)
              for (let i of e.keys()) {
                let e = t.get(i);
                e || (e = 0), t.set(i, e + 1);
              }
          }
          let i = new Map(),
            n = e[0];
          return (
            t.forEach((t, r) => {
              if (t == e.length) {
                let e = this.m_mapRegistrations.get(n).get(r);
                (0, d.X)(e, "Missing OptIn Restration"), i.set(r, e);
              }
            }),
            i.size > 0 ? i : null
          );
        }
        BHasOptionOnRegistration(e, t, i) {
          var n, r;
          const s = this.GetRegistration(e, t);
          return (
            !(!s || !s.opt_in) &&
            (!i ||
              (null ===
                (r =
                  null === (n = null == s ? void 0 : s.jsondata) || void 0 === n
                    ? void 0
                    : n.dynamic_selection) || void 0 === r
                ? void 0
                : r.some((e) => {
                    var t;
                    return (
                      e &&
                      e.section_id == i.section_id &&
                      (null === (t = e.list_selection) || void 0 === t
                        ? void 0
                        : t.some((e) => {
                            var t;
                            return (
                              e &&
                              e.list_id == i.list_id &&
                              (null === (t = e.selected_item_id) || void 0 === t
                                ? void 0
                                : t.includes(i.option_id))
                            );
                          }))
                    );
                  })))
          );
        }
        CreateRegistrationNotSaved(e, t) {
          console.log("CreateOrGetRegistration: Creating new registration");
          return {
            opt_in_name: t,
            opt_in: !1,
            appid: e,
            jsondata: { opt_in_name: t, opt_in: !1 },
          };
        }
        CreateOrGetRegistration(e, t) {
          let i = this.m_mapRegistrations.get(e);
          i || ((i = new Map()), this.m_mapRegistrations.set(e, i));
          let n = i.get(t);
          return (
            n
              ? console.log(
                  "CreateOrGetRegistration: Re-using Previous Registration:",
                  n
                )
              : (n = this.CreateRegistrationNotSaved(e, t)),
            n
          );
        }
        GetOptInRegistrationAndEligibilityForAppOrCreate(e, t) {
          let i = this.m_mapRegistrations.get(e);
          i || ((i = new Map()), this.m_mapRegistrations.set(e, i));
          let n = i.get(t);
          return (
            n
              ? console.log(
                  "CreateOrGetRegistration: Re-using Previous Registration:",
                  n
                )
              : ((n = this.CreateRegistrationNotSaved(e, t)), i.set(t, n)),
            n
          );
        }
        GetRegistration(e, t) {
          return this.m_mapRegistrations.has(e) &&
            this.m_mapRegistrations.get(e).has(t)
            ? this.m_mapRegistrations.get(e).get(t)
            : null;
        }
        GetAllOptInRegistrations(e) {
          const t = this.m_mapRequestedAppIDs.get(e) || new Map();
          return Array.from(t.keys())
            .map((t) => {
              var i;
              return null === (i = this.m_mapRegistrations.get(t)) ||
                void 0 === i
                ? void 0
                : i.get(e);
            })
            .filter(Boolean);
        }
        GetOptInNameRegistrationsCallbackList(e) {
          return e
            ? (this.m_mapOptInNameCallback.has(e) ||
                this.m_mapOptInNameCallback.set(e, new p.pB()),
              this.m_mapOptInNameCallback.get(e))
            : null;
        }
        UpdateRegAndTrackInStore(e, t) {
          const i = t.map((t) =>
            t.jsondata && "" !== t.jsondata
              ? Object.assign(Object.assign({}, t), {
                  jsondata: JSON.parse(t.jsondata),
                })
              : Object.assign(Object.assign({}, t), {
                  jsondata: { opt_in_name: e },
                })
          );
          return (
            i.forEach((t) => {
              this.m_mapRegistrations.has(t.appid) ||
                this.m_mapRegistrations.set(t.appid, new Map()),
                this.m_mapRegistrations.get(t.appid).set(e, t);
            }),
            i
          );
        }
        FetchOptInRegistrationForOptIn(e, t) {
          var i, r;
          return (0, n.mG)(this, void 0, void 0, function* () {
            const n =
                g.De.PARTNER_BASE_URL + "optin/ajaxgetalloptinregistrations",
              a = { sessionid: g.De.SESSIONID, opt_in_name: e, opt_in_only: t },
              o = yield s().get(n, { params: a, withCredentials: !0 });
            return (
              null === (i = null == o ? void 0 : o.data) || void 0 === i
                ? void 0
                : i.data
            )
              ? this.UpdateRegAndTrackInStore(e, o.data.data)
              : null === (r = null == o ? void 0 : o.data) || void 0 === r
              ? void 0
              : r.data;
          });
        }
        FetchPendingReviewOptInRegistrationn(e) {
          var t, i;
          return (0, n.mG)(this, void 0, void 0, function* () {
            const n =
                g.De.PARTNER_BASE_URL +
                "optin/ajaxgetpendingreviewregistrations",
              r = { sessionid: g.De.SESSIONID, opt_in_name: e },
              a = yield s().get(n, { params: r, withCredentials: !0 });
            return (
              null === (t = null == a ? void 0 : a.data) || void 0 === t
                ? void 0
                : t.data
            )
              ? this.UpdateRegAndTrackInStore(e, a.data.data)
              : null === (i = null == a ? void 0 : a.data) || void 0 === i
              ? void 0
              : i.data;
          });
        }
        LoadOptInRegistration(e, t, i) {
          var r, a;
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (this.GetRegistration(t, e)) return !0;
            const n =
              null === (r = this.m_mapRequestedAppIDs.get(e)) || void 0 === r
                ? void 0
                : r.get(t);
            if (n) return n;
            try {
              const n = g.De.PARTNER_BASE_URL + "optin/ajaxgetoptinregistation",
                r = { sessionid: g.De.SESSIONID, appid: t, opt_in_name: e },
                o = yield s().get(n, {
                  params: r,
                  withCredentials: !0,
                  cancelToken: null == i ? void 0 : i.token,
                });
              if (
                1 ==
                  (null === (a = null == o ? void 0 : o.data) || void 0 === a
                    ? void 0
                    : a.success) &&
                o.data.optin_registration
              ) {
                if (
                  ("string" == typeof o.data.optin_registration.jsondata &&
                    (o.data.optin_registration.jsondata = JSON.parse(
                      o.data.optin_registration.jsondata
                    )),
                  this.m_mapRegistrations.has(t))
                )
                  this.m_mapRegistrations
                    .get(t)
                    .set(e, o.data.optin_registration);
                else {
                  const i = new Map();
                  i.set(e, o.data.optin_registration),
                    this.m_mapRegistrations.set(t, i);
                }
                return !0;
              }
              {
                const e = (0, u.l)(o);
                console.error(
                  "LoadOptInRegistration : failed with a response and: " +
                    e.strErrorMsg,
                  e
                );
              }
            } catch (e) {
              const t = (0, u.l)(e);
              console.error(
                "LoadOptInRegistration : failed with " + t.strErrorMsg,
                t
              );
            }
            return !1;
          });
        }
        LoadMultiOptInRegistration(e, t, i) {
          var r, a;
          return (0, n.mG)(this, void 0, void 0, function* () {
            if (0 == t.length || 0 == e.length) return !1;
            let n = null;
            const o = new Promise((e, t) => {
              n = e;
            });
            (e = c.kp(e).sort()),
              (t = c.kp(t).sort()),
              e.forEach((e) => {
                this.m_mapRequestedAppIDs.has(e) ||
                  this.m_mapRequestedAppIDs.set(e, new Map());
              });
            let l = new Array();
            if (
              (t.forEach((t) => {
                e.some(
                  (e) =>
                    !this.BHasOptInRegistration(t, e) &&
                    !this.GetOptInRegistrationPromise(t, e)
                ) &&
                  (l.push(t),
                  e.forEach((e) => this.m_mapRequestedAppIDs.get(e).set(t, o)));
              }),
              0 == l.length)
            )
              return !0;
            const d =
              g.De.PARTNER_BASE_URL + "optin/ajaxbatchgetoptinregistation";
            let m = null;
            try {
              const t = [];
              for (; l.length > 0; ) {
                const n = l.splice(0, 50),
                  r = {
                    rgOptInNames: e.join(","),
                    rgAppIDs: n.join(","),
                    origin: self.origin,
                  };
                t.push(
                  s().get(d, {
                    params: r,
                    withCredentials: !0,
                    cancelToken: null == i ? void 0 : i.token,
                  })
                );
              }
              const n = yield Promise.all(t);
              for (const e of n) {
                if (
                  200 != (null == e ? void 0 : e.status) ||
                  1 !=
                    (null === (r = e.data) || void 0 === r
                      ? void 0
                      : r.success) ||
                  !(null === (a = e.data.optin_registrations) || void 0 === a
                    ? void 0
                    : a.length)
                ) {
                  m = { response: e };
                  break;
                }
                this.InternalAddRegistrations(e.data.optin_registrations);
              }
            } catch (e) {
              m = e;
            }
            if (null == m) n(!0);
            else {
              const i = (0, u.l)(m);
              console.error(
                "Could not load OptIn for Apps",
                t,
                e,
                i.strErrorMsg,
                i
              ),
                n(!1);
            }
            return o;
          });
        }
        RegisterAppForOptIn(e, t) {
          return (0, n.mG)(this, void 0, void 0, function* () {
            const i = {
              opt_in_name: t.startsWith("sale_") ? t : "sale_" + t,
              opt_in: !0,
            };
            return this.UpdateOptInRegistration(e, i);
          });
        }
        UpdateOptInRegistration(e, t) {
          var i;
          return (0, n.mG)(this, void 0, void 0, function* () {
            let n = null;
            try {
              const r = new FormData();
              r.append("sessionid", g.De.SESSIONID),
                Object.keys(t).forEach((e) => r.append(e, t[e]));
              const a =
                  g.De.PARTNER_BASE_URL +
                  "optin/ajaxupdateoptinregistration/" +
                  e,
                o = yield s().post(a, r, { withCredentials: !0 });
              if (
                200 == (null == o ? void 0 : o.status) &&
                1 ==
                  (null === (i = o.data) || void 0 === i ? void 0 : i.success)
              )
                return null;
              n = (0, u.l)(o);
            } catch (e) {
              n = (0, u.l)(e);
            }
            return (
              console.error(
                "COptInRegistrations::UpdateOptInRegistration error " +
                  n.strErrorMsg,
                n
              ),
              n.strErrorMsg
            );
          });
        }
        UpdateOptInRegistrationJson(e, t, i = !1) {
          var r;
          return (0, n.mG)(this, void 0, void 0, function* () {
            let n = null;
            try {
              const a = new FormData();
              a.append("sessionid", g.De.SESSIONID),
                a.append("appid", "" + e),
                a.append("opt_in_name", t.opt_in_name),
                a.append("jsondata", JSON.stringify(t)),
                i && a.append("bCreatePendingInvite", "true");
              const o =
                  g.De.PARTNER_BASE_URL +
                  "optin/ajaxupdateoptinregistrationpayload/" +
                  e,
                l = yield s().post(o, a, { withCredentials: !0 });
              if (
                200 == (null == l ? void 0 : l.status) &&
                1 ==
                  (null === (r = l.data) || void 0 === r ? void 0 : r.success)
              ) {
                const i = this.m_mapRegistrations.get(e).get(t.opt_in_name);
                i.jsondata = t;
                const n = Object.assign({}, i);
                return (
                  this.m_mapRegistrations.get(e).set(t.opt_in_name, n),
                  this.GetSingleAppRegistrationChange(
                    e,
                    t.opt_in_name
                  ).Dispatch(n),
                  null
                );
              }
              n = (0, u.l)(l);
            } catch (e) {
              n = (0, u.l)(e);
            }
            return (
              console.error(
                "COptInRegistrations::UpdateOptInRegistrationJson error " +
                  n.strErrorMsg,
                n
              ),
              n.strErrorMsg
            );
          });
        }
        UpdateAppealState(e, t, i) {
          var r;
          return (0, n.mG)(this, void 0, void 0, function* () {
            let n = null;
            try {
              const a = t.jsondata.opt_in_name,
                o = new FormData();
              o.append("sessionid", g.De.SESSIONID),
                o.append("appid", "" + e),
                o.append("opt_in_name", a),
                o.append("approved", "" + i);
              const l =
                  g.De.PARTNER_BASE_URL + "optin/ajaxsetappealsdecision/" + e,
                c = yield s().post(l, o, { withCredentials: !0 });
              if (
                200 == (null == c ? void 0 : c.status) &&
                1 ==
                  (null === (r = c.data) || void 0 === r ? void 0 : r.success)
              ) {
                const t = Object.assign(
                  {},
                  this.m_mapRegistrations.get(e).get(a)
                );
                return (
                  (t.accountid_appeal = g.L7.accountid),
                  (t.appeal_state = i ? 1 : 2),
                  this.m_mapRegistrations.get(e).set(a, t),
                  this.GetSingleAppRegistrationChange(e, a).Dispatch(t),
                  !0
                );
              }
              n = (0, u.l)(c);
            } catch (e) {
              n = (0, u.l)(e);
            }
            return (
              console.error(
                "COptInRegistrations::UpdateAppealState error " + n.strErrorMsg,
                n
              ),
              !1
            );
          });
        }
        static Get() {
          return (
            h.s_OptInRegs ||
              ((h.s_OptInRegs = new h()),
              (window.COptInRegistrations = h.s_OptInRegs),
              h.s_OptInRegs.Init()),
            h.s_OptInRegs
          );
        }
        InternalAddRegistrations(e) {
          const t = new Set();
          e.forEach((e) => {
            if (!Number.isNaN(e.appid)) {
              let i = this.m_mapRegistrations.get(e.appid);
              if (
                (i ||
                  ((i = new Map()), this.m_mapRegistrations.set(e.appid, i)),
                e.jsondata && "string" == typeof e.jsondata)
              ) {
                const t = e.jsondata;
                0 == t.trim().length
                  ? (e.jsondata = {})
                  : (e.jsondata = JSON.parse(t));
              }
              i.set(e.opt_in_name, e), t.add(e.opt_in_name);
            }
          }),
            Array.from(t).forEach((e) => {
              this.GetOptInNameRegistrationsCallbackList(e).Dispatch(
                this.GetAllOptInRegistrations(e)
              );
            });
        }
        Init() {
          let e = JSON.parse(
            JSON.stringify(
              (0, g.kQ)("optin_registrations", "application_config")
            )
          );
          this.ValidateStoreDefault(e) &&
            (this.InternalAddRegistrations(e),
            "dev" == g.De.WEB_UNIVERSE &&
              console.log("COptInRegistrations: " + e.length, e));
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
            "number" == typeof t[0].appid &&
            "string" == typeof t[0].opt_in_name
          );
        }
      }
      function v(e, t) {
        var i;
        const n =
          null === (i = e.jsondata) || void 0 === i
            ? void 0
            : i.dynamic_selection;
        try {
          if (n) {
            const e = n
              .filter((e) => e.section_id == t.section_id)
              .map((e) => e.list_selection);
            if (e.length > 0 && e[0]) {
              const i = e[0]
                .filter((e) => e.list_id == t.list_id)
                .map((e) => e.selected_item_id);
              if (i.length > 0) return i[0];
            }
          }
        } catch (t) {
          console.log("error: dynamic section", n, e, t);
        }
        return [];
      }
      function D() {
        return o.useMemo(
          () => ({
            fnLoadMultiOptInRegistration: h.Get().LoadMultiOptInRegistration,
          }),
          []
        );
      }
      function y(e, t) {
        const [i, n] = o.useState(null);
        return (
          (0, o.useEffect)(() => {
            const i = t.filter(Boolean);
            i.length > 0
              ? h
                  .Get()
                  .LoadMultiOptInRegistration(
                    i.map(() => e),
                    i
                  )
                  .then(() => {
                    const t = new Map();
                    i.forEach((i) => {
                      const n = h.Get().GetRegistration(i, e);
                      n && t.set(i, n);
                    }),
                      n(t);
                  })
              : n(new Map());
          }, [e, t]),
          i
        );
      }
      function S(e) {
        const [t, i] = o.useState(h.Get().GetAllOptInRegistrations(e));
        return (
          (0, _.Qg)(h.Get().GetOptInNameRegistrationsCallbackList(e), i), t
        );
      }
      function b(e) {
        const t = S(e),
          [i, n] = o.useState({
            nAppOptedIn: 0,
            nAppEligible: 0,
            nAppOptedOut: 0,
            nAppIneligible: 0,
          });
        return (
          o.useEffect(() => {
            if ((null == t ? void 0 : t.length) > 0) {
              const e = {
                nAppOptedIn: 0,
                nAppEligible: 0,
                nAppOptedOut: 0,
                nAppIneligible: 0,
              };
              t.forEach((t) => {
                t.restricted || t.pruned
                  ? (e.nAppIneligible += 1)
                  : t.opt_in
                  ? ((e.nAppOptedIn += 1), (e.nAppEligible += 1))
                  : !t.time_opted_in || t.invited
                  ? (e.nAppEligible += 1)
                  : (e.nAppOptedOut += 1);
              }),
                JSON.stringify(e) != JSON.stringify(i) && n(e);
            }
          }, [t, i]),
          i
        );
      }
      function f(e, t) {
        const i = (0, l.useQuery)(
          ["useAllOptInRegistrationByName", e, Boolean(t)],
          () => h.Get().FetchOptInRegistrationForOptIn(e, t),
          { staleTime: 36e5 }
        );
        return i.isLoading ? null : i.data;
      }
      function E(e) {
        const t = (0, l.useQuery)({
          queryKey: ["useAllPendingReviewOptInRegistrationByName", e],
          queryFn: () => h.Get().FetchPendingReviewOptInRegistrationn(e),
          staleTime: 36e5,
          enabled: (null == e ? void 0 : e.length) > 0,
        });
        return t.isLoading ? null : t.data;
      }
      function k(e, t) {
        const i = f(e, !1),
          [n, r] = (0, o.useState)(
            null == i ? void 0 : i.find((e) => e.appid == t)
          );
        return (0, _.Qg)(h.Get().GetSingleAppRegistrationChange(t, e), r), n;
      }
      function I(e, t) {
        const [i, n] = (0, o.useState)(
          h.Get().GetOptInRegistrationAndEligibilityForAppOrCreate(e, t)
        );
        return (0, _.Qg)(h.Get().GetSingleAppRegistrationChange(e, t), n), i;
      }
      function G(e, t) {
        const [i, n] = (0, o.useState)(
          h.Get().GetExistingOptInRegistartion(e, t)
        );
        return (0, _.Qg)(h.Get().GetSingleAppRegistrationChange(e, t), n), i;
      }
      function P() {
        return {
          fnUpdateOptInRegistrationJson: h.Get().UpdateOptInRegistrationJson,
        };
      }
      function B() {
        return { fnUpdateAppealState: h.Get().UpdateAppealState };
      }
      (0, n.gn)(
        [m.a],
        h.prototype,
        "GetOptInRegistrationAndEligibilityForApp",
        null
      ),
        (0, n.gn)(
          [m.a],
          h.prototype,
          "GetOptInRegistrationAndEligibilityForApps",
          null
        ),
        (0, n.gn)([m.a], h.prototype, "LoadMultiOptInRegistration", null),
        (0, n.gn)([m.a], h.prototype, "UpdateOptInRegistrationJson", null),
        (0, n.gn)([m.a], h.prototype, "UpdateAppealState", null),
        (0, n.gn)([a.aD], h.prototype, "Init", null);
    },
    73797: (e, t, i) => {
      "use strict";
      i.d(t, {
        EV: () => w,
        Fi: () => k,
        ID: () => E,
        LT: () => v,
        Qy: () => B,
        Su: () => S,
        XM: () => y,
        Xj: () => R,
        _J: () => h,
        b2: () => I,
        co: () => D,
        hd: () => P,
        k1: () => G,
        kk: () => g,
        v6: () => b,
        yI: () => f,
      });
      var n = i(33940),
        r = i(52868),
        s = i.n(r),
        a = i(89526),
        o = (i(38800), i(73265)),
        l = (i(96158), i(47330)),
        c = i(23213),
        d = i(31621),
        u = i(32448),
        m = i(70983);
      class p {
        constructor() {
          (this.m_mapPackageDiscountsById = new Map()),
            (this.m_mapDiscountCallbackList = new Map()),
            (this.m_mapPackageDiscountsByPackageId = new Map()),
            (this.m_mapPackageCallbackList = new Map()),
            (this.m_mapPackageDiscountsByDiscountEventId = new Map()),
            (this.m_mapDiscountEventCallbackList = new Map()),
            (this.m_allDiscountCallbackList = new c.pB()),
            (this.m_mapMaxDiscountPercentageByPackageId = new Map()),
            "dev" == m.De.WEB_UNIVERSE &&
              (window.g_PackageDiscountStore = this);
        }
        static Get() {
          return (
            p.s_Singleton || ((p.s_Singleton = new p()), p.s_Singleton.Init()),
            p.s_Singleton
          );
        }
        Init() {
          const e = (0, m.kQ)("package_discounts", "application_config");
          ("dev" != m.De.WEB_UNIVERSE && "beta" != m.De.WEB_UNIVERSE) ||
            console.log(
              "DEV_DEBUG: CPackageDiscountStore loading discount payload: ",
              e
            ),
            this.BIsDiscountPayloadValid(e)
              ? this.InternalAddDiscounts(e)
              : "dev" == m.De.WEB_UNIVERSE &&
                e &&
                console.error("Invalid discount payload");
          const t = (0, m.kQ)("max_discount_percentages", "application_config");
          if (
            (("dev" != m.De.WEB_UNIVERSE && "beta" != m.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CDiscountGridStore loading max-discount-% payload: ",
                t
              ),
            this.BIsMaxDiscountPayloadValid(t))
          )
            for (let e in t)
              this.m_mapMaxDiscountPercentageByPackageId.set(Number(e), t[e]);
          else
            "dev" == m.De.WEB_UNIVERSE &&
              t &&
              console.error("Invalid max-discount-% payload");
        }
        InternalAddDiscounts(e, t) {
          var i;
          const n = new Set(),
            r = new Set();
          for (const t of e)
            (null === (i = t.discountEventID) || void 0 === i
              ? void 0
              : i.length) || (t.discountEventID = _(t)),
              this.m_mapPackageDiscountsById.set(t.nDiscountID, t),
              this.GetCallbackListForDiscount(t.nDiscountID).Dispatch(t),
              this.m_mapPackageDiscountsByPackageId.has(t.packageID) ||
                this.m_mapPackageDiscountsByPackageId.set(
                  t.packageID,
                  new Map()
                ),
              this.m_mapPackageDiscountsByPackageId
                .get(t.packageID)
                .set(t.nDiscountID, t),
              n.add(t.packageID),
              this.m_mapPackageDiscountsByDiscountEventId.has(
                t.discountEventID
              ) ||
                this.m_mapPackageDiscountsByDiscountEventId.set(
                  t.discountEventID,
                  new Map()
                ),
              this.m_mapPackageDiscountsByDiscountEventId
                .get(t.discountEventID)
                .set(t.nDiscountID, t),
              r.add(t.discountEventID);
          for (const e of null != t ? t : [])
            this.m_mapPackageDiscountsByPackageId.has(e) ||
              this.m_mapPackageDiscountsByPackageId.set(e, new Map()),
              n.add(e);
          n.forEach((e) =>
            this.GetCallbackListForPackage(e).Dispatch(
              this.GetAllDiscountsForPackage(e)
            )
          ),
            r.forEach((e) =>
              this.GetCallbackListForDiscountEvent(e).Dispatch(
                this.GetAllDiscountsForDiscountEvent(e)
              )
            ),
            this.GetGlobalCallbackList().Dispatch(
              this.GetAllDiscountsForAllPackages()
            );
        }
        InternalDeleteDiscount(e, t, i) {
          var n, r;
          this.m_mapPackageDiscountsById.delete(e),
            null === (n = this.m_mapPackageDiscountsByPackageId.get(t)) ||
              void 0 === n ||
              n.delete(e),
            null === (r = this.m_mapPackageDiscountsByDiscountEventId.get(i)) ||
              void 0 === r ||
              r.delete(e),
            this.GetCallbackListForDiscount(e).Dispatch(null),
            this.GetCallbackListForPackage(t).Dispatch(
              this.GetAllDiscountsForPackage(t)
            ),
            this.GetCallbackListForDiscountEvent(i).Dispatch(
              this.GetAllDiscountsForDiscountEvent(i)
            ),
            this.GetGlobalCallbackList().Dispatch(
              this.GetAllDiscountsForAllPackages()
            );
        }
        BIsDiscountPayloadValid(e) {
          const t = e;
          if (t && Array.isArray(t)) {
            if (0 == t.length) return !0;
            const e = t[0];
            if (
              e.nDiscountID &&
              "number" == typeof e.nDiscountID &&
              e.packageID &&
              "number" == typeof e.packageID
            )
              return !0;
          }
          return !1;
        }
        BIsMaxDiscountPayloadValid(e) {
          const t = e;
          if (t && "object" == typeof t) {
            for (let e in t)
              if (
                isNaN(parseInt(e)) ||
                (null !== t[e] && "number" != typeof t[e])
              )
                return !1;
            return !0;
          }
          return !1;
        }
        LoadPackageDiscounts(e, t, i = 0) {
          var r, a, o, c;
          return (0, n.mG)(this, void 0, void 0, function* () {
            let n = null;
            const d = new Promise((e, t) => {
                n = e;
              }),
              u = new Set();
            for (const t of e)
              this.m_mapPackageDiscountsByPackageId.has(t) || u.add(t);
            const p = Array.from(u).sort();
            if (0 == p.length) return 1;
            const _ = (0, m.kQ)("publisherid", "application_config"),
              g =
                m.De.PARTNER_BASE_URL +
                "promotion/discounts/ajaxgetpackagediscounts/" +
                _;
            let h = null,
              v = null;
            try {
              const e = [],
                n = new Array();
              for (; p.length > 0; ) {
                const r = p.splice(0, 50);
                n.push(r);
                const a = { packageids: r.join(","), origin: self.origin };
                e.push(
                  s().get(g, {
                    params: a,
                    withCredentials: !0,
                    cancelToken: null == t ? void 0 : t.token,
                    timeout: i,
                  })
                );
              }
              const a = yield Promise.all(e),
                o = [];
              for (const e of a) {
                if (
                  ((v = n.unshift()),
                  200 != (null == e ? void 0 : e.status) ||
                    1 !=
                      (null === (r = e.data) || void 0 === r
                        ? void 0
                        : r.success) ||
                    !e.data.discounts)
                ) {
                  h = { response: e };
                  break;
                }
                e.data.discounts.forEach((e) => o.push(e));
              }
              null == h && this.InternalAddDiscounts(o, Array.from(u));
            } catch (e) {
              h = e;
            }
            if (null == h) n(1);
            else {
              const e = (0, l.l)(h);
              console.error(
                "Could not load Discounts for packages",
                v,
                e.strErrorMsg,
                e
              ),
                n(
                  null !==
                    (c =
                      null ===
                        (o =
                          null === (a = null == h ? void 0 : h.response) ||
                          void 0 === a
                            ? void 0
                            : a.data) || void 0 === o
                        ? void 0
                        : o.success) && void 0 !== c
                    ? c
                    : 2
                );
            }
            return d;
          });
        }
        SaveDiscountToServer(e, t) {
          var i, r, a, o;
          return (0, n.mG)(this, void 0, void 0, function* () {
            const n =
                m.De.PARTNER_BASE_URL +
                "packages/createoreditdiscount/" +
                e.packageID,
              c = new FormData();
            c.append("sessionid", m.De.SESSIONID),
              e.nDiscountID && c.append("id", e.nDiscountID.toString()),
              c.append("name", e.strDiscountName),
              c.append("description", e.strDiscountDescription),
              e.discountEventID &&
                !g(e.discountEventID) &&
                c.append("type", e.discountEventID),
              c.append("percent", e.nDiscountPct.toString()),
              c.append(
                "start_date",
                new Date(1e3 * e.rtStartDate).toISOString()
              ),
              c.append("end_date", new Date(1e3 * e.rtEndDate).toISOString());
            let d = null;
            try {
              const a = yield s().post(n, c, {
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
              if (
                ((a.data.msg =
                  null !== (i = a.data.msg) && void 0 !== i
                    ? i
                    : a.data.message),
                200 == (null == a ? void 0 : a.status) &&
                  1 ==
                    (null === (r = a.data) || void 0 === r
                      ? void 0
                      : r.success) &&
                  a.data.discountid)
              )
                return (
                  (e.bChangedLocally = !1),
                  (e.nDiscountID = a.data.discountid),
                  (e.nDiscountPct = a.data.percentage),
                  this.InternalAddDiscounts([e]),
                  a.data
                );
              d = { response: a };
            } catch (e) {
              d = e;
            }
            const u = (0, l.l)(d);
            return (
              console.error(
                "CPackageDiscountStore.SaveDiscountToServer: failed",
                u.strErrorMsg,
                u
              ),
              null !==
                (o =
                  null === (a = null == d ? void 0 : d.response) || void 0 === a
                    ? void 0
                    : a.data) && void 0 !== o
                ? o
                : { success: 2 }
            );
          });
        }
        DeleteDiscountOnServer(e, t, i, r) {
          var a, o, c;
          return (0, n.mG)(this, void 0, void 0, function* () {
            const n =
                m.De.PARTNER_BASE_URL + "packages/removepackagediscount/" + t,
              d = new FormData();
            d.append("sessionid", m.De.SESSIONID),
              d.append("discountid", e.toString());
            let u = null;
            try {
              const o = yield s().post(n, d, {
                withCredentials: !0,
                cancelToken: null == r ? void 0 : r.token,
              });
              if (
                200 == (null == o ? void 0 : o.status) &&
                1 ==
                  (null === (a = o.data) || void 0 === a ? void 0 : a.success)
              )
                return this.InternalDeleteDiscount(e, t, i), o.data;
              u = { response: o };
            } catch (e) {
              u = e;
            }
            const p = (0, l.l)(u);
            return (
              console.error(
                "CPackageDiscountStore.DeleteDiscountOnServer: failed",
                p.strErrorMsg,
                p
              ),
              null !==
                (c =
                  null === (o = null == u ? void 0 : u.response) || void 0 === o
                    ? void 0
                    : o.data) && void 0 !== c
                ? c
                : { success: 2 }
            );
          });
        }
        GetCallbackListForDiscount(e) {
          return (
            this.m_mapDiscountCallbackList.has(e) ||
              this.m_mapDiscountCallbackList.set(e, new c.pB()),
            this.m_mapDiscountCallbackList.get(e)
          );
        }
        GetCallbackListForPackage(e) {
          return (
            this.m_mapPackageCallbackList.has(e) ||
              this.m_mapPackageCallbackList.set(e, new c.pB()),
            this.m_mapPackageCallbackList.get(e)
          );
        }
        GetCallbackListForDiscountEvent(e) {
          return (
            this.m_mapDiscountEventCallbackList.has(e) ||
              this.m_mapDiscountEventCallbackList.set(e, new c.pB()),
            this.m_mapDiscountEventCallbackList.get(e)
          );
        }
        GetGlobalCallbackList() {
          return this.m_allDiscountCallbackList;
        }
        GetDiscountByID(e) {
          return this.m_mapPackageDiscountsById.get(e);
        }
        GetAllDiscountsForPackage(e) {
          var t, i;
          return this.m_mapPackageDiscountsByPackageId.has(e)
            ? Array.from(
                null !==
                  (i =
                    null ===
                      (t = this.m_mapPackageDiscountsByPackageId.get(e)) ||
                    void 0 === t
                      ? void 0
                      : t.values()) && void 0 !== i
                  ? i
                  : []
              )
            : null;
        }
        GetAllDiscountsForAllPackages() {
          return Array.from(this.m_mapPackageDiscountsById.values());
        }
        GetAllDiscountsForDiscountEvent(e) {
          var t, i;
          return Array.from(
            null !==
              (i =
                null ===
                  (t = this.m_mapPackageDiscountsByDiscountEventId.get(e)) ||
                void 0 === t
                  ? void 0
                  : t.values()) && void 0 !== i
              ? i
              : []
          );
        }
        GetMaxDiscountPercentage(e) {
          var t;
          return null !==
            (t = this.m_mapMaxDiscountPercentageByPackageId.get(e)) &&
            void 0 !== t
            ? t
            : 90;
        }
        GetMaxDiscountPercentageForGroup(e) {
          const t = e.map((e) => this.GetMaxDiscountPercentage(e));
          return Math.min(...t);
        }
      }
      function _(e) {
        return `custom-event-${e.rtStartDate}-${e.rtEndDate}-${(0, u.JD)(
          e.strDiscountName
        )}`;
      }
      function g(e) {
        return e.startsWith("custom-event-");
      }
      function h(e) {
        return p.Get().GetDiscountByID(e);
      }
      function v(e) {
        return p.Get().GetAllDiscountsForDiscountEvent(e);
      }
      function D(e) {
        return p.Get().GetAllDiscountsForPackage(e);
      }
      function y(e) {
        return p.Get().GetCallbackListForPackage(e);
      }
      function S() {
        return p.Get().GetAllDiscountsForAllPackages();
      }
      function b() {
        return p.Get().GetGlobalCallbackList();
      }
      function f() {
        return a.useCallback(
          (e, t, i) => p.Get().LoadPackageDiscounts(e, t, i),
          []
        );
      }
      function E() {
        const e = (e) => p.Get().SaveDiscountToServer(e),
          t = (e, t, i) => p.Get().DeleteDiscountOnServer(e, t, i);
        return a.useMemo(
          () => ({ fnSaveDiscount: e, fnDeleteDiscount: t }),
          []
        );
      }
      function k(e) {
        return new Map(
          Array.from(e.map((e) => [e, p.Get().GetDiscountByID(e)]))
        );
      }
      function I(e) {
        const t = (0, o.zD)(),
          [i, n] = a.useState(p.Get().GetAllDiscountsForPackage(e));
        return (
          (0, d.Qg)(p.Get().GetCallbackListForPackage(e), n),
          a.useMemo(() => {
            let e = null;
            if (null == i) return { deepestDiscount: e, bLoading: !0 };
            if ((null == i ? void 0 : i.length) > 0)
              for (const n of i)
                n.rtEndDate > t ||
                  n.nDiscountPct <= 0 ||
                  ((null == e ||
                    n.nDiscountPct > e.nDiscountPct ||
                    (n.nDiscountPct == e.nDiscountPct &&
                      n.rtEndDate > e.rtEndDate)) &&
                    (e = n));
            return { deepestDiscount: e, bLoading: !1 };
          }, [e, t, i])
        );
      }
      function G(e) {
        const t = (0, o.zD)(),
          [i, n] = a.useState(p.Get().GetAllDiscountsForAllPackages());
        return (
          (0, d.Qg)(p.Get().GetGlobalCallbackList(), n),
          a.useMemo(() => {
            var n;
            let r = null;
            if (null == i) return { mostRecentDiscount: r, bLoading: !0 };
            for (const i of e) {
              const e =
                null !== (n = p.Get().GetAllDiscountsForPackage(i)) &&
                void 0 !== n
                  ? n
                  : [];
              for (const i of e)
                i.rtEndDate < t && (!r || r.rtEndDate < i.rtEndDate) && (r = i);
            }
            return { mostRecentDiscount: r, bLoading: !1 };
          }, [t, e, i])
        );
      }
      function P(e) {
        const [t, i] = a.useState(p.Get().GetAllDiscountsForDiscountEvent(e));
        return (0, d.Qg)(p.Get().GetCallbackListForDiscountEvent(e), i), t;
      }
      function B(e) {
        return p.Get().GetMaxDiscountPercentage(e);
      }
      function w(e) {
        return e.some(
          (e) => e.nDiscountPct > p.Get().GetMaxDiscountPercentage(e.packageID)
        );
      }
      function R(e) {
        return p.Get().GetMaxDiscountPercentageForGroup(e);
      }
    },
    64422: (e, t, i) => {
      "use strict";
      i.d(t, {
        $D: () => g,
        AM: () => _,
        Gd: () => p,
        MQ: () => c,
        NR: () => u,
        ew: () => o,
        vB: () => m,
        z: () => d,
      });
      var n = i(89526),
        r = (i(38800), i(23213)),
        s = i(31621),
        a = i(70983);
      const o = "pn";
      class l {
        constructor() {
          (this.m_rgVisiblePackageIDs = []),
            (this.m_visiblePackageIDsCallbackList = new r.pB()),
            "dev" == a.De.WEB_UNIVERSE && (window.g_PackageGridStore = this);
        }
        static Get() {
          return (
            l.s_Singleton || ((l.s_Singleton = new l()), l.s_Singleton.Init()),
            l.s_Singleton
          );
        }
        Init() {
          let e = (0, a.kQ)("package_data", "application_config");
          e
            ? ((this.m_rgPackageIDs = e.map((e) => e.packageid)),
              (this.m_rgPackageData = e),
              (this.m_mapPackageData = new Map(e.map((e) => [e.packageid, e]))))
            : ((this.m_rgPackageIDs = (0, a.kQ)(
                "package_ids",
                "application_config"
              )),
              (this.m_mapPackageData = new Map())),
            ("dev" != a.De.WEB_UNIVERSE && "beta" != a.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackageGridStore loading payload: ",
                this.m_rgPackageIDs
              ),
            "dev" != a.De.WEB_UNIVERSE ||
              Array.isArray(this.m_rgPackageIDs) ||
              console.error("CPackageGridStore Invalid payload");
        }
        UpdatePackageNameSearchState(e) {
          const t = e.getHeaderFilterValue("packageName"),
            i = new URL(window.location.href);
          t != decodeURIComponent(i.searchParams.get(o)) &&
            (t
              ? i.searchParams.set(o, encodeURIComponent(t))
              : i.searchParams.delete(o),
            window.history.replaceState({}, "", i.toString()));
        }
        UpdateVisiblePackageList(e) {
          const t = e.getGroups("visible").filter((e) => e.isVisible());
          (this.m_rgVisiblePackageIDs = []),
            t.forEach((e) =>
              e
                .getRows()
                .forEach((e) =>
                  this.m_rgVisiblePackageIDs.push(e.getData().packageID)
                )
            ),
            this.m_visiblePackageIDsCallbackList.Dispatch(
              this.m_rgVisiblePackageIDs
            ),
            this.UpdatePackageNameSearchState(e);
        }
      }
      function c() {
        return l.Get().m_rgPackageIDs;
      }
      function d() {
        return l.Get().m_rgPackageIDs;
      }
      function u() {
        return l.Get().m_rgPackageData;
      }
      function m(e) {
        let t = l.Get().m_mapPackageData.get(e);
        return t ? t.package_name : e.toString();
      }
      function p() {
        return n.useCallback((e) => l.Get().UpdateVisiblePackageList(e), []);
      }
      function _() {
        const [e, t] = n.useState(l.Get().m_rgVisiblePackageIDs);
        return (0, s.Qg)(l.Get().m_visiblePackageIDsCallbackList, t), e;
      }
      function g() {
        return n.useMemo(
          () => (0, a.kQ)("publisherid", "application_config"),
          []
        );
      }
    },
    65929: (e, t, i) => {
      "use strict";
      i.d(t, {
        $w: () => O,
        AN: () => V,
        Dt: () => L,
        FR: () => b,
        HV: () => D,
        HX: () => N,
        OB: () => U,
        OG: () => z,
        Ol: () => I,
        PP: () => E,
        Rs: () => T,
        Tj: () => f,
        We: () => W,
        X1: () => B,
        _w: () => v,
        bS: () => M,
        dU: () => G,
        df: () => x,
        j_: () => q,
        ju: () => R,
        np: () => K,
        on: () => A,
        ps: () => w,
        rX: () => P,
        s7: () => C,
        sN: () => X,
        uT: () => j,
        yh: () => F,
      });
      var n = i(33940),
        r = i(52868),
        s = i.n(r),
        a = i(89526),
        o = i(50265),
        l = (i(38800), i(96158), i(47330)),
        c = i(23213),
        d = i(31621),
        u = i(32448),
        m = i(70983),
        p = i(64422),
        _ = i(25125);
      class g {
        constructor() {
          (this.m_mapPackagePrice = new Map()),
            (this.m_setRecurringSubscriptions = new Set()),
            (this.m_mapPriceProposals = new Map()),
            (this.m_mapLocalPackagePriceOverrides = new Map()),
            (this.m_mapPriceGridCellCallbackList = new Map()),
            (this.m_allPriceOverridesCallbackList = new c.pB()),
            (this.m_mapOverridesPerPriceKey = new Map()),
            (this.m_mapCurrencyData = new Map()),
            (this.m_mapPriceKeyDescriptions = new Map()),
            (this.m_mapPriceGuidelines = new Map()),
            (this.m_rgPriceLevels = []),
            (this.m_mapMinPrices = new Map()),
            (this.m_mapMinDiscountedPrices = new Map()),
            (this.m_strDisplayPriceKey = "USD"),
            (this.m_displayPriceKeyCallbackList = new c.pB()),
            "dev" == m.De.WEB_UNIVERSE && (window.g_PackagePricingStore = this);
        }
        static Get() {
          return (
            g.s_Singleton || ((g.s_Singleton = new g()), g.s_Singleton.Init()),
            g.s_Singleton
          );
        }
        Init() {
          var e, t, i, n, r, s, a, o, l, c;
          const d = new Set(),
            p = (0, m.kQ)("base_prices", "application_config");
          if (
            (("dev" != m.De.WEB_UNIVERSE && "beta" != m.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading base price payload: ",
                p
              ),
            p)
          )
            if (this.BIsPricePayloadValid(p))
              for (let e in p) {
                const t = p[e],
                  i = parseInt(e),
                  n = new Map();
                this.m_mapPackagePrice.set(i, n);
                for (let e in t) d.add(e.toUpperCase()), n.set(e, t[e]);
              }
            else
              "dev" == m.De.WEB_UNIVERSE &&
                console.error("Invalid base price payload");
          const _ = (0, m.kQ)("recurring_subs", "application_config");
          if (
            (("dev" != m.De.WEB_UNIVERSE && "beta" != m.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading recurring subscriptions payload: ",
                _
              ),
            _)
          )
            if (Array.isArray(_))
              for (const e of _) this.m_setRecurringSubscriptions.add(e);
            else
              "dev" == m.De.WEB_UNIVERSE &&
                console.error("Invalid recurring subscriptions payload");
          const g = (0, m.kQ)("pending_proposals", "application_config");
          if (
            (("dev" != m.De.WEB_UNIVERSE && "beta" != m.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading pending price proposal payload: ",
                g
              ),
            g)
          )
            if (this.BIsPendingPricePayloadValid(g))
              for (let e in g) {
                const t = g[e],
                  i = parseInt(e);
                this.m_mapPriceProposals.set(i, t);
              }
            else
              "dev" == m.De.WEB_UNIVERSE &&
                console.error("Invalid pending price proposal payload");
          const h = (0, m.kQ)("pricing_guidelines", "application_config");
          if (
            (("dev" != m.De.WEB_UNIVERSE && "beta" != m.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading pricing guidelines payload: ",
                h
              ),
            h)
          )
            if (this.BIsGuidelinesPayloadValid(h)) {
              for (let e in h) {
                const t = h[e],
                  i = new Map(),
                  n = 100 * parseInt(e.substring(3));
                this.m_rgPriceLevels.push(n),
                  this.m_mapPriceGuidelines.set(n, i);
                for (let e in t)
                  d.add(e.toUpperCase()),
                    i.set(e.toUpperCase(), parseInt(t[e]));
              }
              this.m_rgPriceLevels.sort((e, t) => e - t);
            } else
              "dev" == m.De.WEB_UNIVERSE &&
                console.error("Invalid pricing guidelines payload");
          this.m_rgKnownPriceKeys = Array.from(d).sort((e, t) =>
            (0, u.eT)(S(e), S(t))
          );
          for (const d of this.m_rgKnownPriceKeys) {
            const u =
                null !==
                  (t =
                    null === (e = this.m_mapPriceGuidelines.get(100)) ||
                    void 0 === e
                      ? void 0
                      : e.get(d)) && void 0 !== t
                  ? t
                  : 0,
              m =
                null !==
                  (n =
                    null === (i = this.m_mapPriceGuidelines.get(200)) ||
                    void 0 === i
                      ? void 0
                      : i.get(d)) && void 0 !== n
                  ? n
                  : 0,
              p =
                null !==
                  (s =
                    null === (r = this.m_mapPriceGuidelines.get(300)) ||
                    void 0 === r
                      ? void 0
                      : r.get(d)) && void 0 !== s
                  ? s
                  : 0,
              _ =
                null !==
                  (o =
                    null === (a = this.m_mapPriceGuidelines.get(400)) ||
                    void 0 === a
                      ? void 0
                      : a.get(d)) && void 0 !== o
                  ? o
                  : 0,
              g =
                null !==
                  (c =
                    null === (l = this.m_mapPriceGuidelines.get(500)) ||
                    void 0 === l
                      ? void 0
                      : l.get(d)) && void 0 !== c
                  ? c
                  : 0;
            this.m_mapMinPrices.set(d, Math.ceil(0.9 * u));
            const h = Math.floor(Math.min(u / 2, m / 4, p / 6, _ / 8, g / 10));
            this.m_mapMinDiscountedPrices.set(d, h);
          }
          const v = (0, m.kQ)("currency_data", "application_config");
          if (
            (("dev" != m.De.WEB_UNIVERSE && "beta" != m.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading currency payload: ",
                v
              ),
            v)
          )
            if (this.BIsCurrencyPayloadValid(v))
              for (let e in v) {
                const t = v[e];
                this.m_mapCurrencyData.set(e, t);
              }
            else
              "dev" == m.De.WEB_UNIVERSE &&
                console.error("Invalid currency payload");
          const D = (0, m.kQ)("currency_descriptions", "application_config");
          if (
            (("dev" != m.De.WEB_UNIVERSE && "beta" != m.De.WEB_UNIVERSE) ||
              console.log(
                "DEV_DEBUG: CPackagePricingStore loading currency descriptions: ",
                v
              ),
            D)
          )
            if (this.BIsCurrencyDescriptionPayloadValid(D))
              for (let e in D) {
                const t = D[e];
                this.m_mapPriceKeyDescriptions.set(e, t);
              }
            else
              "dev" == m.De.WEB_UNIVERSE &&
                console.error("Invalid currency description payload");
        }
        BIsPricePayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            if (isNaN(parseInt(e))) return !1;
            const i = t[e];
            if (!i || "object" != typeof i) return !1;
            for (let e in i)
              if ("string" != typeof e || "number" != typeof i[e]) return !1;
          }
          return !0;
        }
        BIsPendingPricePayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            if (isNaN(parseInt(e))) return !1;
            const i = t[e];
            if (
              !i ||
              "object" != typeof i ||
              i.packageID !== parseInt(e) ||
              "object" != typeof i.prices
            )
              return !1;
          }
          return !0;
        }
        BIsGuidelinesPayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            const i = t[e];
            if (!i || "object" != typeof i) return !1;
            for (let e in i)
              if ("string" != typeof e || isNaN(parseInt(i[e]))) return !1;
          }
          return !0;
        }
        BIsCurrencyPayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            const i = t[e];
            if (!i || "object" != typeof i || i.strCode != e) return !1;
          }
          return !0;
        }
        BIsCurrencyDescriptionPayloadValid(e) {
          const t = e;
          if (!t || "object" != typeof t) return !1;
          for (let e in t) {
            const i = t[e];
            if (!i || "string" != typeof i) return !1;
          }
          return !0;
        }
        GetPublishedPrice(e, t) {
          var i;
          return null === (i = this.m_mapPackagePrice.get(e)) || void 0 === i
            ? void 0
            : i.get(t);
        }
        GetProposedPrice(e, t) {
          var i;
          return null === (i = this.m_mapPriceProposals.get(e)) || void 0 === i
            ? void 0
            : i.prices[t];
        }
        GetSavedPrice(e, t) {
          var i;
          return null !== (i = this.GetProposedPrice(e, t)) && void 0 !== i
            ? i
            : this.GetPublishedPrice(e, t);
        }
        GetPrice(e, t) {
          var i, n;
          return null !==
            (n =
              null === (i = this.m_mapLocalPackagePriceOverrides.get(e)) ||
              void 0 === i
                ? void 0
                : i.get(t)) && void 0 !== n
            ? n
            : this.GetSavedPrice(e, t);
        }
        GetPriceGridCellCallbackList(e, t) {
          if (!e || !t) return null;
          this.m_mapPriceGridCellCallbackList.has(e) ||
            this.m_mapPriceGridCellCallbackList.set(e, new Map());
          const i = this.m_mapPriceGridCellCallbackList.get(e);
          return i.has(t) || i.set(t, new c.pB()), i.get(t);
        }
        OverridePrice(e, t, i) {
          i != this.GetPrice(e, t) &&
            (this.m_mapLocalPackagePriceOverrides.has(e) ||
              this.m_mapLocalPackagePriceOverrides.set(e, new Map()),
            i == this.GetSavedPrice(e, t)
              ? this.m_mapLocalPackagePriceOverrides.get(e).delete(t)
              : this.m_mapLocalPackagePriceOverrides.get(e).set(t, i),
            this.GetPriceGridCellCallbackList(e, t).Dispatch(i),
            this.DispatchPriceOverridesCallbacks());
        }
        DispatchPriceOverridesCallbacks() {
          this.m_allPriceOverridesCallbackList.Dispatch(
            this.GetAllLocalPriceOverrides()
          ),
            this.UpdateOverridesPerPriceKey();
        }
        BHasLocalPriceOverrides(e) {
          var t;
          return (
            (null === (t = this.m_mapLocalPackagePriceOverrides.get(e)) ||
            void 0 === t
              ? void 0
              : t.size) > 0
          );
        }
        GetAllLocalPriceOverrides() {
          const e = [];
          return (
            this.m_mapLocalPackagePriceOverrides.forEach((t, i) =>
              t.forEach((t, n) => {
                const r = this.GetSavedPrice(i, n);
                e.push({
                  packageID: i,
                  strPriceKey: n,
                  nPriceInCents: t,
                  nOldPriceInCents: r,
                });
              })
            ),
            e.sort(h),
            e
          );
        }
        UpdateOverridesPerPriceKey() {
          this.m_mapOverridesPerPriceKey.clear(),
            this.m_mapLocalPackagePriceOverrides.forEach((e, t) => {
              e.forEach((e, t) => {
                let i = this.m_mapOverridesPerPriceKey.get(t);
                i || (i = 0), i++, this.m_mapOverridesPerPriceKey.set(t, i);
              });
            });
        }
        DiscardAllLocalPriceOverrides() {
          const e = this.GetAllLocalPriceOverrides();
          this.m_mapLocalPackagePriceOverrides.clear();
          for (const t of e) {
            const { packageID: e, strPriceKey: i } = t;
            this.GetPriceGridCellCallbackList(e, i).Dispatch(
              this.GetPrice(e, i)
            );
          }
          this.DispatchPriceOverridesCallbacks();
        }
        DiscardAllLocalPriceOverridesForKey(e) {
          let t = !1;
          this.m_mapLocalPackagePriceOverrides.forEach((i, n) => {
            this.m_mapPriceKeyDescriptions.has(e) &&
              ((t = !0),
              this.m_mapLocalPackagePriceOverrides.get(n).delete(e),
              this.GetPriceGridCellCallbackList(n, e).Dispatch(
                this.GetPrice(n, e)
              ));
          }),
            t && this.DispatchPriceOverridesCallbacks();
        }
        DiscardLocalPriceOverridesForPackage(e) {
          var t;
          null === (t = this.m_mapLocalPackagePriceOverrides.get(e)) ||
            void 0 === t ||
            t.forEach((t, i) => {
              this.GetPriceGridCellCallbackList(e, i).Dispatch(
                this.GetSavedPrice(e, i)
              );
            }),
            this.m_mapLocalPackagePriceOverrides.delete(e),
            this.DispatchPriceOverridesCallbacks();
        }
        BuildNewPricingProposal(e, t) {
          const i = {
            packageID: e,
            rtSubmitted: Math.floor(Date.now() / 1e3),
            submitterID: m.L7.accountid,
            prices: {},
            eState: 1,
            bPartnerWillPublish: t,
          };
          for (const t of this.m_rgKnownPriceKeys)
            i.prices[t] = this.GetPrice(e, t);
          return i;
        }
        SubmitProposalToServer(e, t, i) {
          var r, a, o;
          return (0, n.mG)(this, void 0, void 0, function* () {
            const n = this.BuildNewPricingProposal(e, t),
              c = JSON.stringify(n.prices),
              d = (0, m.kQ)("publisherid", "application_config"),
              u =
                m.De.PARTNER_BASE_URL +
                "pricing/ajaxsubmitproposal/" +
                d +
                "/" +
                e,
              p = new FormData();
            p.append("sessionid", m.De.SESSIONID),
              p.append("partner_will_publish", t ? "1" : "0"),
              p.append("prices", c);
            let _ = null;
            try {
              const t = yield s().post(u, p, {
                withCredentials: !0,
                cancelToken: null == i ? void 0 : i.token,
              });
              if (
                200 == (null == t ? void 0 : t.status) &&
                1 ==
                  (null === (r = t.data) || void 0 === r
                    ? void 0
                    : r.success) &&
                0 != t.data.eState
              ) {
                if (3 == t.data.eState) {
                  this.m_mapPriceProposals.delete(e);
                  for (const t of this.m_rgKnownPriceKeys)
                    this.m_mapPackagePrice.get(e).set(t, n.prices[t]);
                } else
                  (n.eState = t.data.eState),
                    (n.proposalKey = t.data.proposalKey),
                    this.m_mapPriceProposals.set(e, n);
                return this.DiscardLocalPriceOverridesForPackage(e), t.data;
              }
            } catch (e) {
              _ = e;
            }
            const g = (0, l.l)(_);
            return (
              console.error(
                "CPackagePricingStore.SubmitProposalToServer: failed",
                g.strErrorMsg,
                g
              ),
              null !==
                (o =
                  null === (a = null == _ ? void 0 : _.response) || void 0 === a
                    ? void 0
                    : a.data) && void 0 !== o
                ? o
                : { success: 2 }
            );
          });
        }
        PublishApprovedProposal(e, t, i = 0) {
          var r, a, o;
          return (0, n.mG)(this, void 0, void 0, function* () {
            const n = this.m_mapPriceProposals.get(e);
            if (
              4 != (null == n ? void 0 : n.eState) ||
              !(null == n ? void 0 : n.proposalKey)
            )
              return { success: 8 };
            const c = (0, m.kQ)("publisherid", "application_config"),
              d =
                m.De.PARTNER_BASE_URL +
                "pricing/ajaxpublishproposal/" +
                c +
                "/" +
                e,
              u = new FormData();
            u.append("sessionid", m.De.SESSIONID),
              u.append("proposal_key", n.proposalKey);
            let p = null;
            try {
              const a = yield s().post(d, u, {
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
                timeout: i,
              });
              if (
                200 == (null == a ? void 0 : a.status) &&
                1 ==
                  (null === (r = a.data) || void 0 === r ? void 0 : r.success)
              ) {
                this.m_mapPriceProposals.delete(e);
                for (const t of this.m_rgKnownPriceKeys)
                  this.m_mapPackagePrice.get(e).set(t, n.prices[t]),
                    this.GetPriceGridCellCallbackList(e, t).Dispatch(
                      this.GetSavedPrice(e, t)
                    );
                return this.DispatchPriceOverridesCallbacks(), a.data;
              }
            } catch (e) {
              p = e;
            }
            const _ = (0, l.l)(p);
            return (
              console.error(
                "CPackagePricingStore.PublishApprovedProposal: failed",
                _.strErrorMsg,
                _
              ),
              null !==
                (o =
                  null === (a = null == p ? void 0 : p.response) || void 0 === a
                    ? void 0
                    : a.data) && void 0 !== o
                ? o
                : { success: 2 }
            );
          });
        }
        CancelProposal(e, t) {
          var i, r, a;
          return (0, n.mG)(this, void 0, void 0, function* () {
            const n = this.m_mapPriceProposals.get(e);
            if (!(null == n ? void 0 : n.proposalKey)) return { success: 8 };
            const o = (0, m.kQ)("publisherid", "application_config"),
              c =
                m.De.PARTNER_BASE_URL +
                "pricing/ajaxcancelproposal/" +
                o +
                "/" +
                e,
              d = new FormData();
            d.append("sessionid", m.De.SESSIONID),
              d.append("proposal_key", n.proposalKey);
            let u = null;
            try {
              const n = yield s().post(c, d, {
                withCredentials: !0,
                cancelToken: null == t ? void 0 : t.token,
              });
              if (
                200 == (null == n ? void 0 : n.status) &&
                1 ==
                  (null === (i = n.data) || void 0 === i ? void 0 : i.success)
              ) {
                this.m_mapPriceProposals.delete(e);
                for (const t of this.m_rgKnownPriceKeys)
                  this.GetPriceGridCellCallbackList(e, t).Dispatch(
                    this.GetSavedPrice(e, t)
                  );
                return this.DispatchPriceOverridesCallbacks(), n.data;
              }
            } catch (e) {
              u = e;
            }
            const p = (0, l.l)(u);
            return (
              console.error(
                "CPackagePricingStore.CancelProposal: failed",
                p.strErrorMsg,
                p
              ),
              null !==
                (a =
                  null === (r = null == u ? void 0 : u.response) || void 0 === r
                    ? void 0
                    : r.data) && void 0 !== a
                ? a
                : { success: 2 }
            );
          });
        }
        GetLocalOverrideCountForPriceKey(e) {
          var t;
          return null !== (t = this.m_mapOverridesPerPriceKey.get(e)) &&
            void 0 !== t
            ? t
            : 0;
        }
      }
      function h(e, t) {
        if (e.strPriceKey == t.strPriceKey) {
          const i = (0, p.vB)(e.packageID),
            n = (0, p.vB)(t.packageID);
          return (0, u.eT)(i, n);
        }
        return (0, u.eT)(S(e.strPriceKey), S(t.strPriceKey));
      }
      function v(e) {
        const t = e.split("_")[0];
        return g.Get().m_mapCurrencyData.get(t);
      }
      function D(e, t) {
        var i;
        if (void 0 === t) return ["", "", ""];
        const n = null !== (i = v(t)) && void 0 !== i ? i : v("USD");
        let r = "";
        if ("number" == typeof e) {
          let t = e.toString();
          t.length < 3 && (t = (1 == t.length ? "0" : "") + "0" + t);
          const i = t.length - 2;
          for (let e = 0; e < i; e++) {
            const s = t.charAt(e);
            (r += s),
              e < i - 1 &&
                (i - e - 1) % 3 == 0 &&
                "-" != s &&
                (r += n.strThousandsSeparator);
          }
          n.bWholeUnitsOnly ||
            ((r += n.strDecimalSymbol), (r += t.substr(t.length - 2)));
        }
        return n.bSymbolIsPrefix
          ? [n.strSymbol + n.strSymbolAndNumberSeparator, r, ""]
          : ["", r, n.strSymbolAndNumberSeparator + n.strSymbol];
      }
      (0, n.gn)([o.LO], g.prototype, "m_mapOverridesPerPriceKey", void 0),
        (0, n.gn)([o.aD], g.prototype, "UpdateOverridesPerPriceKey", null);
      const y = new Map([
        ["USD", "@1"],
        ["CNY", "@2"],
        ["EUR", "@3"],
        ["GBP", "@4"],
        ["CAD", "@5"],
        ["AUD", "@6"],
        ["JPY", "@7"],
        ["KRW", "@8"],
        ["RUB", "@9"],
      ]);
      function S(e) {
        return y.has(e) ? y.get(e) : e.indexOf("_") > 0 ? "ZZZ" + e : e;
      }
      function b(e, t) {
        return g.Get().GetPrice(e, t);
      }
      function f(e) {
        const t = g.Get().m_strDisplayPriceKey;
        return D(g.Get().GetPrice(e, t), t).join("");
      }
      function E(e) {
        const [t, i] = a.useState(g.Get().m_strDisplayPriceKey);
        return (
          (0, d.Qg)(g.Get().m_displayPriceKeyCallbackList, i),
          (function (e, t) {
            const [i, n] = a.useState(g.Get().GetPrice(e, t));
            return (
              (0, d.Qg)(g.Get().GetPriceGridCellCallbackList(e, t), n),
              a.useEffect(() => n(g.Get().GetPrice(e, t)), [e, t]),
              D(i, t).join("")
            );
          })(e, t)
        );
      }
      function k(e, t) {
        const i = g.Get().GetPrice(e, "USD");
        let n = null;
        for (let e of g.Get().m_rgPriceLevels)
          if (e > i) {
            n = e;
            break;
          }
        if ("USD" == t || !n)
          return { nSuggestedPriceInCents: null, nGuidelinesLevel: null };
        let r = g.Get().m_mapPriceGuidelines.get(n).get(t);
        const s = g.Get().m_mapPriceGuidelines.get(n).get("USD");
        if (s != i) {
          const e = i / s;
          (n *= e), (r = Math.ceil(r * e));
        }
        return { nSuggestedPriceInCents: r, nGuidelinesLevel: n };
      }
      function I() {
        const e = (0, p.AM)();
        return a.useCallback(
          () =>
            (function (e) {
              for (const t of e)
                for (const e of g.Get().m_rgKnownPriceKeys) {
                  if ("USD" == e) continue;
                  const { nSuggestedPriceInCents: i, nGuidelinesLevel: n } = k(
                    t,
                    e
                  );
                  g.Get().OverridePrice(t, e, i);
                }
            })(e),
          [e]
        );
      }
      function G(e, t) {
        var i;
        const n = (0, d.NW)();
        (0, d.Qg)(g.Get().GetPriceGridCellCallbackList(e, t), n);
        const r = g.Get().GetPrice(e, t);
        (0, d.Qg)(g.Get().GetPriceGridCellCallbackList(e, "USD"), n);
        const { nSuggestedPriceInCents: s, nGuidelinesLevel: o } = k(e, t),
          l = a.useCallback((i) => g.Get().OverridePrice(e, t, i), [e, t]),
          c = g.Get().GetPublishedPrice(e, t),
          u = g.Get().GetProposedPrice(e, t),
          { nMinPriceInCents: m, nMaxPriceInCents: p } = P(e, t),
          _ =
            null !== (i = g.Get().m_mapMinDiscountedPrices.get(t)) &&
            void 0 !== i
              ? i
              : 0,
          h = r ? Math.floor((100 * (r - _)) / r) : 90,
          v = h < Math.min(90, Math.floor((100 * (o - 50)) / o)) ? h : null;
        return a.useMemo(
          () => ({
            nPriceInCents: r,
            nProposedPriceInCents: u,
            nPublishedPriceInCents: c,
            nMinPriceInCents: m,
            nMaxPriceInCents: p,
            nMaxDiscountPercentage: v,
            nSuggestedPriceInCents: s,
            fnSetPrice: l,
          }),
          [r, u, c, m, p, v, s, l]
        );
      }
      function P(e, t) {
        var i;
        return {
          nMinPriceInCents:
            null !== (i = g.Get().m_mapMinPrices.get(t)) && void 0 !== i
              ? i
              : 0,
          nMaxPriceInCents: g.Get().m_setRecurringSubscriptions.has(e)
            ? g.Get().GetPublishedPrice(e, t)
            : null,
        };
      }
      function B() {
        return a.useCallback((e, t, i) => {
          const n = g.Get().GetPrice(e, t);
          return (
            g.Get().OverridePrice(e, t, i),
            n == i
              ? null
              : {
                  packageID: e,
                  strPriceKey: t,
                  nPriceInCents: i,
                  nOldPriceInCents: n,
                }
          );
        }, []);
      }
      function w(e) {
        return g.Get().m_mapPriceProposals.get(e);
      }
      function R(e) {
        return g.Get().m_mapPriceProposals.get(e);
      }
      function C(e) {
        let t = !1;
        for (const i of g.Get().m_rgKnownPriceKeys) {
          let n = g.Get().GetPublishedPrice(e, i);
          t = t || (0 != n && void 0 !== n);
        }
        return t;
      }
      function O(e) {
        const t = w(e),
          i = [];
        for (const n of g.Get().m_rgKnownPriceKeys) {
          const r = t.prices[n],
            s = g.Get().GetPublishedPrice(e, n);
          r != s &&
            i.push({
              packageID: e,
              strPriceKey: n,
              nPriceInCents: r,
              nOldPriceInCents: s,
            });
        }
        return i;
      }
      function A() {
        return g.Get().m_rgKnownPriceKeys;
      }
      function L(e) {
        return g.Get().m_mapPriceKeyDescriptions.get(e);
      }
      function F(e) {
        return a.useCallback(() => {
          g.Get().DiscardAllLocalPriceOverridesForKey(e);
        }, [e]);
      }
      function M(e) {
        return a.useCallback(() => {
          g.Get().DiscardLocalPriceOverridesForPackage(e);
        }, [e]);
      }
      function T(e) {
        return a.useCallback(() => {
          g.Get().CancelProposal(e);
        }, [e]);
      }
      function U() {
        const [e, t] = a.useState(g.Get().m_strDisplayPriceKey),
          i = g.Get().m_rgKnownPriceKeys,
          n = a.useCallback((e) => {
            t(e),
              (g.Get().m_strDisplayPriceKey = e),
              g.Get().m_displayPriceKeyCallbackList.Dispatch(e);
          }, []);
        return { strPriceKey: e, rgSupportedPriceKeys: i, fnSetPriceKey: n };
      }
      function x(e) {
        const t = (0, d.NW)();
        return (
          (0, d.Qg)(g.Get().m_allPriceOverridesCallbackList, t),
          g.Get().BHasLocalPriceOverrides(e)
        );
      }
      function N(e) {
        return g.Get().BHasLocalPriceOverrides(e);
      }
      function z() {
        const [e, t] = a.useState(() => g.Get().GetAllLocalPriceOverrides());
        return (0, d.Qg)(g.Get().m_allPriceOverridesCallbackList, t), e;
      }
      function j(e) {
        return (0, _.SZ)(() => g.Get().GetLocalOverrideCountForPriceKey(e));
      }
      function W() {
        return a.useCallback(() => {
          var e;
          return (
            (null === (e = g.Get().GetAllLocalPriceOverrides()) || void 0 === e
              ? void 0
              : e.length) > 0
          );
        }, []);
      }
      function q() {
        return a.useCallback(() => g.Get().DiscardAllLocalPriceOverrides(), []);
      }
      function V() {
        const e = [],
          t = a.useRef(new Map());
        g.Get().m_mapPriceGuidelines.forEach((i, n) => {
          const r = i.get("USD");
          e.push(r), t.current.set(r, n);
        }),
          e.sort((e, t) => e - t);
        const i = a.useCallback((e, i) => {
          const n = t.current.get(i);
          g.Get()
            .m_mapPriceGuidelines.get(n)
            .forEach((t, i) => g.Get().OverridePrice(e, i, t));
        }, []);
        return { rgUSDPricesInCents: e, fnApplyGuidelines: i };
      }
      function X() {
        return a.useCallback(
          (e, t, i) => g.Get().SubmitProposalToServer(e, t, i),
          []
        );
      }
      function K() {
        return a.useCallback(
          (e, t) => g.Get().PublishApprovedProposal(e, t, 6e4),
          []
        );
      }
    },
    86371: (e, t, i) => {
      "use strict";
      i.d(t, {
        B6: () => R,
        E5: () => U,
        E_: () => M,
        Eh: () => S,
        HU: () => L,
        JW: () => T,
        LX: () => b,
        TB: () => A,
        _9: () => C,
        dy: () => N,
        hr: () => B,
        k: () => z,
        pl: () => w,
        s$: () => O,
        yn: () => F,
        z$: () => j,
      });
      i(52790);
      var n = i(78457),
        r = i(26808),
        s = i(73797),
        a = i(64422),
        o = i(84935),
        l = i(85797),
        c = i(89526),
        d = (i(38800), i(73265)),
        u = (i(84413), i(63154)),
        m = (i(86701), i(23213)),
        p = i(31621),
        _ = i(32448),
        g = i(93958),
        h = i(70983),
        v = i(95486);
      function D(e, t) {
        var i, n;
        return (
          !!e == !!t &&
          (null == e ? void 0 : e.packageID) ==
            (null == t ? void 0 : t.packageID) &&
          (null == e ? void 0 : e.discountEventID) ==
            (null == t ? void 0 : t.discountEventID) &&
          (null == e ? void 0 : e.eState) == (null == t ? void 0 : t.eState) &&
          (null === (i = null == e ? void 0 : e.rgConflictDetails) ||
          void 0 === i
            ? void 0
            : i.length) ==
            (null === (n = null == t ? void 0 : t.rgConflictDetails) ||
            void 0 === n
              ? void 0
              : n.length) &&
          (null == e ? void 0 : e.optInReg) ==
            (null == t ? void 0 : t.optInReg) &&
          y(null == e ? void 0 : e.discount, null == t ? void 0 : t.discount) &&
          (null == e ? void 0 : e.nBaseAppID) ==
            (null == t ? void 0 : t.nBaseAppID) &&
          (null == e ? void 0 : e.bChangedLocally) ==
            (null == t ? void 0 : t.bChangedLocally)
        );
      }
      function y(e, t) {
        var i;
        return (
          (!t &&
            0 ==
              (null !== (i = null == e ? void 0 : e.nDiscountPct) &&
              void 0 !== i
                ? i
                : 0)) ||
          (!!t && t.nDiscountPct == (null == e ? void 0 : e.nDiscountPct))
        );
      }
      const S = 30,
        b = S * g._H.PerDay - 1.5 * g._H.PerHour,
        f = 10 * g._H.PerMinute;
      class E {
        constructor() {
          (this.m_mapPackageStateForDiscountEvents = new Map()),
            (this.m_mapLocalPackageDiscountOverrides = new Map()),
            (this.m_mapDiscountGridCellCallbackList = new Map()),
            (this.m_mapDiscountEventColumnCallbackList = new Map()),
            (this.m_localPackageDiscountOverrideCallbackList = new m.pB()),
            "dev" == h.De.WEB_UNIVERSE &&
              (window.g_DiscountGridEditStore = this);
        }
        static Get() {
          return (
            E.s_Singleton || ((E.s_Singleton = new E()), E.s_Singleton.Init()),
            E.s_Singleton
          );
        }
        static IsInitialized() {
          return !!E.s_Singleton;
        }
        Init() {
          for (const e of (0, a.MQ)())
            E.Get().ComputePackageState(e),
              (0, s.XM)(e).Register(() => {
                E.Get().ComputePackageState(e);
              });
          (0, v.ix)().Register(() => {
            for (const e of (0, a.MQ)()) E.Get().ComputePackageState(e, !0);
          }),
            E.s_initializationCallbackList.Dispatch(!0);
        }
        OverridePackageDiscountPct(e, t, i) {
          var n;
          const r =
            null === (n = E.Get().m_mapPackageStateForDiscountEvents.get(e)) ||
            void 0 === n
              ? void 0
              : n.get(t);
          if (1 != (null == r ? void 0 : r.eState))
            return (
              console.error(
                "Cannot change discount in current state:",
                r.eState
              ),
              null
            );
          const s = r.discount,
            a = (0, v.f0)(t),
            o = {
              nDiscountID: null == s ? void 0 : s.nDiscountID,
              packageID: e,
              nDiscountPct: i,
              strDiscountName: a.name,
              strDiscountDescription: a.description,
              rtStartDate: a.start_date,
              rtEndDate: a.end_date,
              discountEventID: a.id,
              bChangedLocally: !0,
            };
          return y(o, s)
            ? null
            : (this.m_mapLocalPackageDiscountOverrides.has(e) ||
                this.m_mapLocalPackageDiscountOverrides.set(e, new Map()),
              this.m_mapLocalPackageDiscountOverrides.get(e).set(t, o),
              this.ComputePackageState(e),
              this.GetLocalPackageDiscountOverrideCallbackList().Dispatch(
                this.GetLocalPackageDiscountOverrides()
              ),
              o);
        }
        GetLocalPackageDiscountOverrides() {
          const e = [];
          return (
            this.m_mapLocalPackageDiscountOverrides.forEach((t) =>
              t.forEach((t) => {
                y(t, t.nDiscountID && (0, s._J)(t.nDiscountID)) || e.push(t);
              })
            ),
            e.sort(P),
            e
          );
        }
        DiscardAllLocalPackageDiscountOverrides(e) {
          this.m_mapLocalPackageDiscountOverrides.clear();
          for (const t of e) this.ComputePackageState(t);
          this.GetLocalPackageDiscountOverrideCallbackList().Dispatch([]);
        }
        DiscardLocalPackageDiscountOverride(e, t) {
          var i;
          null === (i = this.m_mapLocalPackageDiscountOverrides.get(e)) ||
            void 0 === i ||
            i.delete(t),
            this.ComputePackageState(e),
            this.GetLocalPackageDiscountOverrideCallbackList().Dispatch(
              this.GetLocalPackageDiscountOverrides()
            );
        }
        OptInRegistrationUpdatedForApp(e, t) {
          const i = Array.from(this.m_mapPackageStateForDiscountEvents.values())
            .map((e) => e.get(t))
            .filter((t) => (null == t ? void 0 : t.nBaseAppID) == e)
            .map((e) => e.packageID);
          null == i || i.forEach((e) => this.ComputePackageState(e));
        }
        GetPackageDiscountsIncludingOverrides(e) {
          var t;
          const i = (0, d.kl)() - b,
            n = (0, s.co)(e);
          if (!n) return null;
          const r = new Map(
            n.filter((e) => e.rtEndDate > i).map((e) => [e.discountEventID, e])
          );
          return (
            null === (t = this.m_mapLocalPackageDiscountOverrides.get(e)) ||
              void 0 === t ||
              t.forEach((e, t) => {
                y(e, r.get(t)) || r.set(t, e);
              }),
            r
          );
        }
        GetDiscountGridCellCallbackList(e, t) {
          if (!e || !t) return null;
          this.m_mapDiscountGridCellCallbackList.has(e) ||
            this.m_mapDiscountGridCellCallbackList.set(e, new Map());
          const i = this.m_mapDiscountGridCellCallbackList.get(e);
          return i.has(t) || i.set(t, new m.pB()), i.get(t);
        }
        GetDiscountEventColumnCallbackList(e) {
          return e
            ? (this.m_mapDiscountEventColumnCallbackList.has(e) ||
                this.m_mapDiscountEventColumnCallbackList.set(e, new m.pB()),
              this.m_mapDiscountEventColumnCallbackList.get(e))
            : null;
        }
        GetLocalPackageDiscountOverrideCallbackList() {
          return this.m_localPackageDiscountOverrideCallbackList;
        }
        GetAllPackageStatesForDiscountEvent(e) {
          const t = [];
          return (
            E.Get().m_mapPackageStateForDiscountEvents.forEach((i, n) =>
              t.push(i.get(e))
            ),
            t
          );
        }
        ComputePackageState(e, t) {
          var i, s;
          const a = u.Z.Get().GetPackage(e);
          if (!a) return;
          const l = (0, v.wQ)(),
            c = (0, o.R1)(a),
            d = c.nBaseAppID;
          let m = d && r.qh.Get().GetOptInRegistrationAndEligibilityForApp(d);
          d ||
            m ||
            (m = r.qh
              .Get()
              .GetOptInRegistrationAndEligibilityForApps(
                a.GetIncludedAppIDs()
              ));
          const p = this.GetPackageDiscountsIncludingOverrides(e),
            _ = !p,
            g = _
              ? null
              : Array.from(p.values()).sort(
                  (e, t) => e.rtStartDate - t.rtStartDate
                );
          this.m_mapPackageStateForDiscountEvents.has(e) ||
            this.m_mapPackageStateForDiscountEvents.set(e, new Map());
          const h = this.m_mapPackageStateForDiscountEvents.get(e);
          for (const r of l) {
            if (t && h.has(r.id)) continue;
            const o = { packageID: e, discountEventID: r.id, nBaseAppID: d };
            if (
              ((o.discount = null == p ? void 0 : p.get(r.id)),
              (o.bChangedLocally = !!(null === (i = o.discount) || void 0 === i
                ? void 0
                : i.bChangedLocally)),
              _)
            )
              o.eState = 0;
            else if (
              (null === (s = o.discount) || void 0 === s
                ? void 0
                : s.nDiscountPct) > 0
            ) {
              o.eState = 1;
              const e =
                r.opt_in_name && (null == m ? void 0 : m.get(r.opt_in_name));
              e && (o.optInReg = e);
            } else {
              if (((o.eState = 1), G(r, a))) o.eState = 10;
              else if (r.opt_in_name) {
                const { ePackageDiscountState: e, optInRegistration: t } = I(
                  r.opt_in_name,
                  m,
                  a,
                  c,
                  r
                );
                (o.eState = e), (o.optInReg = t);
              }
              if (10 != o.eState && 4 != o.eState && 5 != o.eState) {
                const t = k(e, r, g);
                1 != t.ePackageDiscountState &&
                  ((o.eState = t.ePackageDiscountState),
                  (o.rgConflictDetails = t.rgConflictingDiscounts.map((e) => {
                    var t, i;
                    return null !==
                      (i =
                        null === (t = (0, n.fH)(e.discountEventID)) ||
                        void 0 === t
                          ? void 0
                          : t.name) && void 0 !== i
                      ? i
                      : e.strDiscountName;
                  })));
              }
            }
            D(o, h.get(r.id)) ||
              (h.set(r.id, o),
              this.GetDiscountGridCellCallbackList(e, r.id).Dispatch(o),
              this.GetDiscountEventColumnCallbackList(r.id).Dispatch(
                this.GetAllPackageStatesForDiscountEvent(r.id)
              ));
          }
        }
        GetAvailableDiscountEventsInRange(e, t, i) {
          const n = this.m_mapPackageStateForDiscountEvents.get(e),
            r = new Set([1, 11, 2, 3]);
          return (0, v.wQ)()
            .filter(
              (e) =>
                t <= e.start_date &&
                e.end_date <= i &&
                r.has(n.get(e.id).eState)
            )
            .map((e) => e.id);
        }
        GetFutureDiscountRanges(e) {
          const t = u.Z.Get().GetPackage(e),
            i = this.GetPackageDiscountsIncludingOverrides(e);
          if (!t || !i) return [];
          const r = Array.from(i.values()).sort(
              (e, t) => e.rtStartDate - t.rtStartDate
            ),
            s = (0, d.kl)(),
            a = Math.max(s, t.GetReleaseDateRTime() + b, (0, v.QM)(e) + b),
            o = [],
            c = new Set();
          let m = a;
          for (let t = 0; t < r.length; t++) {
            const i = r[t];
            if (0 == i.nDiscountPct) continue;
            const s = (0, n.fH)(i.discountEventID);
            let a = i.rtStartDate - b;
            const d = "unique" == (null == s ? void 0 : s.collision_type);
            if (d && ((a = i.rtStartDate + f), t + 1 < r.length)) {
              const e = r[t + 1],
                i = (0, v.f0)(e.discountEventID);
              "unique" != (null == i ? void 0 : i.collision_type) &&
                (a = Math.min(a, e.rtStartDate - b));
            }
            if (m + g._H.PerDay < a) {
              const t = {
                bIsAvailable: !0,
                rtStartDate: m,
                rtEndDate: a,
                rgDiscountEventIDs: this.GetAvailableDiscountEventsInRange(
                  e,
                  m,
                  a
                ),
              };
              o.push(t), t.rgDiscountEventIDs.forEach((e) => c.add(e));
            }
            const u = {
              bIsAvailable: !1,
              rtStartDate: i.rtStartDate,
              rtEndDate: i.rtEndDate,
              discount: i,
              rgDiscountEventIDs: [i.discountEventID],
            };
            if (
              (o.push(u),
              c.add(i.discountEventID),
              (m = i.rtEndDate + b),
              d && ((m = i.rtEndDate - f), t - 1 >= 0))
            ) {
              const e = r[t - 1],
                i = (0, v.f0)(e.discountEventID);
              "unique" != (null == i ? void 0 : i.collision_type) &&
                (m = Math.max(m, e.rtEndDate + b));
            }
            const p = (0, l._)(m);
            p - m <= 2 * g._H.PerHour && (m = p);
          }
          const p = (0, l._)(s + g._H.PerYear / 2);
          if (m + g._H.PerDay < p) {
            const t = {
              bIsAvailable: !0,
              rtStartDate: m,
              rtEndDate: p,
              rgDiscountEventIDs: this.GetAvailableDiscountEventsInRange(
                e,
                m,
                p
              ),
            };
            o.push(t), t.rgDiscountEventIDs.forEach((e) => c.add(e));
          }
          const _ = (0, v.wQ)().filter(
            (t) =>
              "unique" == t.collision_type &&
              !c.has(t.id) &&
              1 ==
                this.m_mapPackageStateForDiscountEvents.get(e).get(t.id).eState
          );
          for (const e of _)
            for (let t = 0; t < o.length; t++)
              if (
                o[t].rtStartDate <= e.start_date &&
                (t == o.length - 1 || e.start_date < o[t + 1].rtStartDate)
              ) {
                const i = {
                  bIsAvailable: !0,
                  bMajorSaleOnly: !0,
                  rtStartDate: e.start_date,
                  rtEndDate: e.end_date,
                  rgDiscountEventIDs: [e.id],
                };
                o.splice(t + 1, 0, i);
                break;
              }
          return o;
        }
      }
      function k(e, t, i) {
        let r = 1;
        const s = [];
        let a = !1;
        const o = u.Z.Get().GetPackage(e);
        if ((null == o ? void 0 : o.GetReleaseDateRTime()) > t.start_date - b)
          return (
            (r = 6),
            {
              ePackageDiscountState: r,
              rgConflictingDiscounts: s,
              bChangedLocally: a,
            }
          );
        if ((0, v.QM)(e) > t.start_date - b)
          return (
            (r = 7),
            {
              ePackageDiscountState: r,
              rgConflictingDiscounts: s,
              bChangedLocally: a,
            }
          );
        for (const e of i) {
          if (t.id == e.discountEventID) continue;
          const i = (0, n.fH)(e.discountEventID),
            o =
              "unique" == t.collision_type ||
              "unique" == (null == i ? void 0 : i.collision_type),
            l = o ? t.start_date + f : t.start_date - b,
            c = o ? t.end_date - f : t.end_date + b;
          if (e.rtEndDate > l && c > e.rtStartDate) {
            if (((a = a || e.bChangedLocally), 0 == e.nDiscountPct)) continue;
            s.push(e), (r = o ? 9 : 8);
          }
        }
        return {
          ePackageDiscountState: r,
          rgConflictingDiscounts: s,
          bChangedLocally: a,
        };
      }
      function I(e, t, i, n, s) {
        let a,
          o = 5;
        if (t)
          (a = t.get(e)),
            !a || a.restricted || a.pruned
              ? ((o = 4), (a = { restricted: !0 }))
              : (o = a.opt_in ? 1 : a.invited || !a.time_opted_in ? 2 : 3);
        else if (!n.nBaseAppID) {
          const e = i
            .GetIncludedAppIDs()
            .map((e) => {
              var t;
              return null ===
                (t = r.qh.Get().GetOptInRegistrationAndEligibilityForApp(e)) ||
                void 0 === t
                ? void 0
                : t.get(s.opt_in_name);
            })
            .filter(Boolean);
          e.some((e) => e.opt_in)
            ? (o = 1)
            : e.some((e) => !e.restricted && !e.pruned) && (o = 11);
        }
        return { ePackageDiscountState: o, optInRegistration: a };
      }
      function G(e, t) {
        var i, n, r;
        if ((null === (i = e.appids) || void 0 === i ? void 0 : i.length) > 0) {
          if (
            null === (n = null == t ? void 0 : t.GetIncludedAppIDs()) ||
            void 0 === n
              ? void 0
              : n.length
          ) {
            const i = new Set(e.appids);
            for (const e of t.GetIncludedAppIDs()) {
              if (i.has(e)) return !1;
              const t =
                null === (r = u.Z.Get().GetApp(e)) || void 0 === r
                  ? void 0
                  : r.GetParentAppID();
              if (t && i.has(t)) return !1;
            }
          }
          return !0;
        }
        return !1;
      }
      function P(e, t) {
        var i, n;
        if (e.packageID != t.packageID) {
          const r =
              null === (i = u.Z.Get().GetPackage(e.packageID)) || void 0 === i
                ? void 0
                : i.GetName(),
            s =
              null === (n = u.Z.Get().GetPackage(t.packageID)) || void 0 === n
                ? void 0
                : n.GetName();
          return (0, _.eT)(r, s);
        }
        {
          const i = 0 == e.nDiscountPct;
          return i != (0 == t.nDiscountPct)
            ? i
              ? -1
              : 1
            : e.rtStartDate - t.rtStartDate;
        }
      }
      function B() {
        return c.useCallback(() => {
          E.Get();
        }, []);
      }
      function w() {
        const [e, t] = c.useState(E.Get().GetLocalPackageDiscountOverrides());
        return (
          (0, p.Qg)(E.Get().GetLocalPackageDiscountOverrideCallbackList(), t), e
        );
      }
      function R() {
        return c.useCallback(() => {
          var e;
          return (
            (null === (e = E.Get().GetLocalPackageDiscountOverrides()) ||
            void 0 === e
              ? void 0
              : e.length) > 0
          );
        }, []);
      }
      function C() {
        return c.useCallback(
          (e) => E.Get().DiscardAllLocalPackageDiscountOverrides(e),
          []
        );
      }
      function O() {
        return c.useCallback(
          (e, t) => E.Get().OptInRegistrationUpdatedForApp(e, t),
          []
        );
      }
      function A() {
        return c.useCallback(
          (e, t) => E.Get().DiscardLocalPackageDiscountOverride(e, t),
          []
        );
      }
      function L(e, t) {
        var i, n, r;
        const s =
          null === (i = E.Get().m_mapPackageStateForDiscountEvents.get(e)) ||
          void 0 === i
            ? void 0
            : i.get(t);
        return 1 == (null == s ? void 0 : s.eState)
          ? null !==
              (r =
                null === (n = null == s ? void 0 : s.discount) || void 0 === n
                  ? void 0
                  : n.nDiscountPct) && void 0 !== r
            ? r
            : 0
          : null;
      }
      function F(e, t) {
        const [i, n] = c.useState(() => {
          var i;
          return null ===
            (i = E.Get().m_mapPackageStateForDiscountEvents.get(e)) ||
            void 0 === i
            ? void 0
            : i.get(t);
        });
        (0, p.Qg)(E.Get().GetDiscountGridCellCallbackList(e, t), n);
        return {
          packageState: i,
          fnSetDiscountPct: c.useCallback(
            (i) => {
              E.Get().OverridePackageDiscountPct(e, t, i);
            },
            [e, t]
          ),
        };
      }
      function M() {
        return c.useCallback((e, t, i) => {
          const n = [];
          for (const r of i) {
            const i = E.Get().OverridePackageDiscountPct(r, t, e);
            i && n.push(i);
          }
          return n;
        }, []);
      }
      function T(e) {
        const t = U(e);
        return c.useMemo(
          () => ({
            nAlreadySet: t.alreadySet.size,
            nAvailable: t.available.size,
            nConflicts: t.conflicts.size,
            nNeedRegistration: t.needRegistration.size,
            nIneligibile: t.ineligibile.size,
          }),
          [t]
        );
      }
      function U(e) {
        const [t, i] = c.useState(() => x(e)),
          n = c.useCallback(() => {
            i(x(e));
          }, [e]);
        return (
          c.useEffect(n, [e, n]),
          (0, p.Qg)(E.Get().GetDiscountEventColumnCallbackList(e), n),
          t
        );
      }
      function x(e) {
        var t, i;
        const n = E.Get().GetAllPackageStatesForDiscountEvent(e),
          r = {
            alreadySet: new Set(),
            available: new Set(),
            conflicts: new Set(),
            needRegistration: new Set(),
            ineligibile: new Set(),
          };
        for (const e of n)
          switch (null == e ? void 0 : e.eState) {
            case 0:
              break;
            case 1:
              (null !==
                (i =
                  null === (t = e.discount) || void 0 === t
                    ? void 0
                    : t.nDiscountPct) && void 0 !== i
                ? i
                : 0) > 0
                ? r.alreadySet.add(e.packageID)
                : r.available.add(e.packageID);
              break;
            case 6:
            case 7:
            case 8:
            case 9:
              r.conflicts.add(e.packageID);
              break;
            case 2:
            case 3:
              r.needRegistration.add(e.packageID);
              break;
            case 4:
            case 5:
            case 10:
              r.ineligibile.add(e.packageID);
          }
        return r;
      }
      function N(e) {
        return (
          !!(0, s.LT)(e).some((e) => e.nDiscountPct > 0) ||
          !(
            !E.IsInitialized() ||
            !E.Get()
              .GetAllPackageStatesForDiscountEvent(e)
              .some((e) => {
                var t, i;
                return (
                  (null !==
                    (i =
                      null === (t = e.discount) || void 0 === t
                        ? void 0
                        : t.nDiscountPct) && void 0 !== i
                    ? i
                    : 0) > 0
                );
              })
          )
        );
      }
      function z(e) {
        if ((0, s.kk)(e)) return !0;
        const t = (0, n.fH)(e);
        if (!(null == t ? void 0 : t.opt_in_name)) return !0;
        const i = r.qh.Get().GetAllOptInRegistrations(t.opt_in_name);
        return (
          !!(null == i ? void 0 : i.length) &&
          i.some((e) => !e.restricted && !e.pruned)
        );
      }
      function j(e) {
        const t = (function () {
            const [e, t] = c.useState(E.IsInitialized());
            return (0, p.Qg)(E.s_initializationCallbackList, t), e;
          })(),
          [i, n] = c.useState(t ? E.Get().GetFutureDiscountRanges(e) : []),
          r = c.useCallback(
            () => n(t ? E.Get().GetFutureDiscountRanges(e) : []),
            [e, t]
          );
        return (
          (0, p.Qg)(
            t && E.Get().GetLocalPackageDiscountOverrideCallbackList(),
            r
          ),
          (0, p.Qg)(t && (0, s.XM)(e), r),
          c.useEffect(r, [e, t, r]),
          i
        );
      }
      E.s_initializationCallbackList = new m.pB();
    },
    95486: (e, t, i) => {
      "use strict";
      i.d(t, {
        $f: () => y,
        D_: () => E,
        P6: () => f,
        QM: () => p,
        Zq: () => S,
        f0: () => g,
        im: () => v,
        ix: () => h,
        wQ: () => _,
        x9: () => D,
        y4: () => b,
      });
      var n = i(89526),
        r = (i(38800), i(73265)),
        s = i(23213),
        a = i(31621),
        o = i(70983),
        l = i(78457),
        c = i(73797),
        d = i(86371);
      const u = "related-discount-view";
      class m {
        constructor() {
          (this.m_mapDiscountEventsByID = new Map()),
            (this.m_discountEventsCallbackList = new s.pB()),
            (this.m_mapLastTimeRaisedPrices = new Map()),
            (this.m_strSelectedDiscountEventID = null),
            (this.m_bIncludeWeeklongEvents = !1),
            (this.m_bIncludeCustomEvents = !0),
            (this.m_bIncludeIneligibleEvents = !1),
            (this.m_bIncludeConflictsInSingleEventView = !0),
            (this.m_eRelatedDiscountView = "deepest-past"),
            (this.m_RelatedDiscountViewCallbackList = new s.pB()),
            (this.m_gridEventSelectionParametersCallbackList = new s.pB()),
            (this.m_setVisibleDiscountEventIDs = new Set()),
            (this.m_visibleDiscountEventIDsCallbackList = new s.pB()),
            "dev" == o.De.WEB_UNIVERSE && (window.g_DiscountGridStore = this);
        }
        static Get() {
          return (
            m.s_Singleton || ((m.s_Singleton = new m()), m.s_Singleton.Init()),
            m.s_Singleton
          );
        }
        Init() {
          var e;
          const t = (0, o.kQ)("price_increase_times", "application_config");
          if (
            (("dev" != o.De.WEB_UNIVERSE && "beta" != o.De.WEB_UNIVERSE) ||
              console.log("DEV_DEBUG: CDiscountGridStore loading payload: ", t),
            this.BIsPriceIncreasePayloadValid(t))
          )
            for (let e in t)
              this.m_mapLastTimeRaisedPrices.set(Number(e), t[e]);
          else
            "dev" == o.De.WEB_UNIVERSE &&
              console.error("CDiscountGridStore Invalid payload");
          (this.m_eRelatedDiscountView =
            null !== (e = window.localStorage.getItem(u)) && void 0 !== e
              ? e
              : "deepest-past"),
            this.UpdateDiscountEventsForGrid(),
            (0, l.i4)().Register(() => this.UpdateDiscountEventsForGrid()),
            (0, c.v6)().Register(() => this.UpdateDiscountEventsForGrid()),
            this.SetEventSelectionParametersFromURL(),
            this.UpdateVisibleDiscountEventIDs();
        }
        UpdateDiscountEventsForGrid() {
          const e = (0, l.o)(),
            t = (0, c.Su)(),
            i = new Set(e.map((e) => e.id)),
            n = [],
            s = (0, r.kl)();
          for (const e of t)
            e.rtEndDate > s &&
              (i.has(e.discountEventID) ||
                (n.push({
                  id: e.discountEventID,
                  name: e.strDiscountName,
                  start_date: e.rtStartDate,
                  end_date: e.rtEndDate,
                  description: e.strDiscountDescription,
                }),
                i.add(e.discountEventID)));
          (this.m_rgDiscountEvents &&
            i.size == this.m_rgDiscountEvents.length &&
            !this.m_rgDiscountEvents.some((e) => !i.has(e.id))) ||
            ((this.m_rgDiscountEvents = n.concat(e)),
            this.m_rgDiscountEvents.sort((e, t) =>
              e.start_date == t.start_date
                ? e.end_date - t.end_date
                : e.start_date - t.start_date
            ),
            (this.m_mapDiscountEventsByID = new Map(
              this.m_rgDiscountEvents.map((e) => [e.id, e])
            )),
            this.UpdateVisibleDiscountEventIDs(),
            this.m_discountEventsCallbackList.Dispatch(
              this.m_rgDiscountEvents
            ));
        }
        UpdateVisibleDiscountEventIDs() {
          this.SetEventSelectionParametersFromURL(),
            (this.m_setVisibleDiscountEventIDs = new Set());
          for (const e of this.m_rgDiscountEvents) {
            let t = null == this.m_strSelectedDiscountEventID;
            t && !this.m_bIncludeCustomEvents && (0, c.kk)(e.id) && (t = !1),
              t &&
                !this.m_bIncludeWeeklongEvents &&
                e.id.startsWith("weeklongdeal_") &&
                !(0, d.dy)(e.id) &&
                (t = !1),
              !t ||
                this.m_bIncludeIneligibleEvents ||
                (0, d.k)(e.id) ||
                (t = !1),
              this.m_strSelectedDiscountEventID == e.id && (t = !0),
              t && this.m_setVisibleDiscountEventIDs.add(e.id);
          }
          this.m_visibleDiscountEventIDsCallbackList.Dispatch(
            this.m_setVisibleDiscountEventIDs
          );
        }
        BIsPriceIncreasePayloadValid(e) {
          const t = e;
          if (t && "object" == typeof t) {
            for (let e in t)
              if (isNaN(parseInt(e)) || "number" != typeof t[e]) return !1;
            return !0;
          }
          return !1;
        }
        SetEventSelectionParametersFromURL() {
          const e = new URLSearchParams(window.location.search);
          if (e.has("de")) {
            const t = decodeURIComponent(e.get("de"));
            this.m_mapDiscountEventsByID.has(t) &&
              (this.m_strSelectedDiscountEventID = t);
          }
          if (e.has("wd")) {
            const t = e.get("wd");
            this.m_bIncludeWeeklongEvents = "0" != t;
          }
          if (e.has("cd")) {
            const t = e.get("cd");
            this.m_bIncludeCustomEvents = "0" != t;
          }
          if (e.has("cf")) {
            const t = e.get("cf");
            this.m_bIncludeConflictsInSingleEventView = "0" != t;
          }
        }
        HandleEventSelectionChangeAndNotifyListeners() {
          const e = new URL(window.location.href);
          this.m_strSelectedDiscountEventID
            ? e.searchParams.set(
                "de",
                encodeURIComponent(this.m_strSelectedDiscountEventID)
              )
            : e.searchParams.delete("de"),
            this.m_bIncludeWeeklongEvents
              ? e.searchParams.set("wd", "1")
              : e.searchParams.delete("wd"),
            this.m_bIncludeCustomEvents
              ? e.searchParams.delete("cd")
              : e.searchParams.set("cd", "0"),
            this.m_bIncludeConflictsInSingleEventView
              ? e.searchParams.delete("cf")
              : e.searchParams.set("cf", "0"),
            window.history.replaceState({}, "", e.toString()),
            this.UpdateVisibleDiscountEventIDs(),
            this.m_gridEventSelectionParametersCallbackList.Dispatch(
              this.GetEventSelectionParameters()
            );
        }
        GetEventSelectionParameters() {
          return {
            bSingleDiscountEventView: null != this.m_strSelectedDiscountEventID,
            strSelectedEvent: this.m_strSelectedDiscountEventID,
            fnSelectEvent: (e) => {
              (this.m_strSelectedDiscountEventID = e),
                this.HandleEventSelectionChangeAndNotifyListeners();
            },
            bIncludeWeeklongEvents: this.m_bIncludeWeeklongEvents,
            fnSetIncludeWeeklongEvents: (e) => {
              (this.m_bIncludeWeeklongEvents = e),
                this.HandleEventSelectionChangeAndNotifyListeners();
            },
            bIncludeCustomEvents: this.m_bIncludeCustomEvents,
            fnSetIncludeCustomEvents: (e) => {
              (this.m_bIncludeCustomEvents = e),
                this.HandleEventSelectionChangeAndNotifyListeners();
            },
            bIncludeConflictsInSingleEventView:
              this.m_bIncludeConflictsInSingleEventView,
            fnSetIncludeConflictsInSingleEventView: (e) => {
              (this.m_bIncludeConflictsInSingleEventView = e),
                this.HandleEventSelectionChangeAndNotifyListeners();
            },
          };
        }
      }
      function p(e) {
        var t;
        return null !== (t = m.Get().m_mapLastTimeRaisedPrices.get(e)) &&
          void 0 !== t
          ? t
          : 0;
      }
      function _() {
        return m.Get().m_rgDiscountEvents;
      }
      function g(e) {
        return m.Get().m_mapDiscountEventsByID.get(e);
      }
      function h() {
        return m.Get().m_discountEventsCallbackList;
      }
      function v() {
        const [e, t] = n.useState(m.Get().m_rgDiscountEvents);
        return (0, a.Qg)(m.Get().m_discountEventsCallbackList, t), e;
      }
      function D() {
        const [e, t] = n.useState(m.Get().m_setVisibleDiscountEventIDs);
        return (0, a.Qg)(m.Get().m_visibleDiscountEventIDsCallbackList, t), e;
      }
      function y(e = !0) {
        return m.Get().m_setVisibleDiscountEventIDs;
      }
      function S(e) {
        const [t, i] = n.useState(m.Get().m_mapDiscountEventsByID.get(e)),
          r = n.useCallback(
            () => i(m.Get().m_mapDiscountEventsByID.get(e)),
            [e]
          );
        return (
          (0, a.Qg)(m.Get().m_discountEventsCallbackList, r),
          n.useEffect(r, [e, r]),
          t
        );
      }
      function b(e = !0) {
        const [t, i] = n.useState(m.Get().GetEventSelectionParameters()),
          r = e ? m.Get().m_gridEventSelectionParametersCallbackList : null;
        return (0, a.Qg)(r, i), t;
      }
      function f() {
        const [e, t] = n.useState(m.Get().m_eRelatedDiscountView);
        (0, a.Qg)(m.Get().m_RelatedDiscountViewCallbackList, t);
        return [
          e,
          n.useCallback((e) => {
            (m.Get().m_eRelatedDiscountView = e),
              window.localStorage.setItem(u, e),
              m.Get().m_RelatedDiscountViewCallbackList.Dispatch(e);
          }, []),
        ];
      }
      function E() {
        return n.useCallback(() => {
          m.Get().UpdateVisibleDiscountEventIDs();
        }, []);
      }
    },
    58340: (e, t, i) => {
      "use strict";
      i.d(t, {
        A$: () => h,
        Eg: () => S,
        Ii: () => D,
        JP: () => y,
        O7: () => g,
        UA: () => p,
        zQ: () => m,
        zV: () => _,
      });
      var n = i(89526),
        r = i(40108),
        s = i(70983),
        a = i(31587),
        o = i(70138),
        l = i.n(o),
        c = i(20614),
        d = i(47008);
      i(5615);
      function u(e) {
        var t;
        const { fnBLocalChangesExist: i, fnWarnUser: r, cell: o } = e,
          c = o.getRow().getData().packageID,
          d =
            null !== (t = o.getValue()) && void 0 !== t
              ? t
              : n.createElement(
                  "span",
                  { className: l().UnknownValue },
                  (0, a.Xx)("#PackageGrid_PackageID", c)
                );
        return n.createElement(
          S,
          {
            fnBLocalChangesExist: i,
            fnWarnUser: r,
            href: `${s.De.PARTNER_BASE_URL}store/packagelanding/${c}`,
            strToolTip: (0, a.Xx)("#PackageGrid_VisitPackagePricing_Tooltip"),
          },
          d
        );
      }
      function m(e) {
        return n.useMemo(
          () => ({
            visible: !1,
            title: (0, a.Xx)("#PackageGrid_Column_PackageID"),
            field: "packageID",
            headerSort: !1,
            formatter: (0, c.reactFormatter)(
              n.createElement(u, Object.assign({}, e))
            ),
            cssClass: l().PackageID,
            hozAlign: "right",
            frozen: !0,
            headerTooltip: (0, a.Xx)("#PackageGrid_Column_PackageID_ttip"),
          }),
          [e]
        );
      }
      function p(e) {
        return n.useMemo(
          () => ({
            title: (0, a.Xx)("#PackageGrid_Column_PackageName"),
            field: "packageName",
            headerSort: !1,
            formatter: (0, c.reactFormatter)(
              n.createElement(u, Object.assign({}, e))
            ),
            cssClass: l().PackageName,
            width: 300,
            frozen: !0,
            variableHeight: !0,
            headerTooltip: (0, a.Xx)("#PackageGrid_Column_PackageName_ttip"),
            headerFilter: "input",
            headerFilterPlaceholder: (0, a.Xx)(
              "#PackageGrid_PackageNameFilterInputPrompt"
            ),
          }),
          [e]
        );
      }
      function _(e) {
        return n.useMemo(
          () => ({
            visible: !1,
            title: "App IDs - hidden column",
            field: "appids",
            headerSort: !1,
            frozen: !0,
          }),
          []
        );
      }
      function g(e) {
        return n.useMemo(
          () => ({
            visible: !1,
            title: (0, a.Xx)("#PackageGrid_Column_PackageType"),
            field: "packageType",
            headerSort: !1,
            cssClass: l().PackageType,
            headerTooltip: (0, a.Xx)("#PackageGrid_Column_PackageType_ttip"),
            frozen: !0,
          }),
          []
        );
      }
      function h(e) {
        const t = e.getCell("packageType"),
          i = t && "function" == typeof t.getValue && t.getValue();
        i && e.getElement().classList.add(i),
          e.getNextRow() || e.getElement().classList.add(l().LastRow);
      }
      function v(e) {
        var t;
        const { fnBLocalChangesExist: i, fnWarnUser: r, cell: o } = e,
          l = o.getRow().getData().appids,
          c =
            null !== (t = null == l ? void 0 : l.length) && void 0 !== t
              ? t
              : 0,
          d = o.getRow().getData().packageID;
        return n.createElement(
          S,
          {
            fnBLocalChangesExist: i,
            fnWarnUser: r,
            href: `${s.De.PARTNER_BASE_URL}store/packagelanding/${d}`,
            strToolTip: (0, a.Xx)("#PackageGrid_VisitPackagePricing_Tooltip"),
          },
          1 == c ? "1 appid" : c + " appids"
        );
      }
      function D(e) {
        return n.useMemo(
          () => ({
            title: (0, a.Xx)("#PackageGrid_Column_AppName"),
            field: "appName",
            sorter: d.yh,
            headerSort: !1,
            formatter: (0, c.reactFormatter)(
              n.createElement(v, Object.assign({}, e))
            ),
            cssClass: l().AppCount,
            width: 80,
            frozen: !0,
            headerTooltip: (0, a.Xx)("#PackageGrid_Column_AppName_ttip"),
          }),
          [e]
        );
      }
      function y(e, t, i, n) {
        return e == (0, a.Xx)("#PackageGrid_NoBaseGameFoundForPackage")
          ? `<div title='${(0, a.Xx)(
              "#PackageGrid_NoBaseGameExplanation"
            )}' >${e} (?) <span>(${(0, a.kb)(
              "#PackageGrid_PackageCount",
              t
            )})</span></div>`
          : `<div>${e} <span>(${(0, a.kb)(
              "#PackageGrid_PackageCount",
              t
            )})</span></div>`;
      }
      function S(e) {
        const {
          fnBLocalChangesExist: t,
          fnWarnUser: i,
          href: s,
          children: a,
          strToolTip: o,
          strClassName: l,
        } = e;
        return n.createElement(
          r.HP,
          { toolTipContent: o, className: l },
          n.createElement(
            "a",
            {
              onClick: (e) => {
                t() && (e.preventDefault(), i(e, s));
              },
              href: s,
            },
            a
          )
        );
      }
    },
    81898: (e, t, i) => {
      "use strict";
      i.d(t, { j: () => s });
      var n = i(89526),
        r = i(31587);
      function s(e) {
        const t = n.useCallback(
          (t) => {
            if (e())
              return (
                t.preventDefault(),
                (t.returnValue = (0, r.Xx)(
                  "#PackageGrid_NavigationWarning_Title"
                )),
                t.returnValue
              );
          },
          [e]
        );
        n.useEffect(
          () => (
            window.addEventListener("beforeunload", t),
            () => window.removeEventListener("beforeunload", t)
          ),
          [t]
        );
      }
    },
    47008: (e, t, i) => {
      "use strict";
      i.d(t, { $k: () => m, yh: () => s });
      var n = i(81052),
        r = i(31587);
      function s(e, t, i, n) {
        const s = (0, r.Xx)("#PackageGrid_MultipleBaseGamesFoundForPackage"),
          a = (0, r.Xx)("#PackageGrid_NoBaseGameFoundForPackage"),
          o = e == s,
          l = e == a,
          c = !o && !l,
          d = t == s,
          u = t == a,
          m = !d && !u;
        if (c && m) return e.localeCompare(t);
        if (c || m) return c ? -1 : 1;
        if (o == d && l == u) {
          const e = i.getData().packageName,
            t = n.getData().packageName;
          return e && t
            ? e.localeCompare(t)
            : e || t
            ? e
              ? -1
              : 1
            : i.getData().packageID - n.getData().packageID;
        }
        return o ? -1 : 1;
      }
      const a = (e) => e.nextElementSibling,
        o = (e) => e.previousElementSibling,
        l = (e, t) => {
          const i = e.getAttribute("tabulator-field"),
            n = e.parentElement;
          let r = n && t(n);
          for (; i && r; ) {
            for (const e of Array.from(r.children))
              if (i == e.getAttribute("tabulator-field")) return e;
            r = t(r);
          }
          return null;
        },
        c = new Map([
          [38, (e) => l(e, o)],
          [39, a],
          [40, (e) => l(e, a)],
          [37, o],
          [9, (e) => l(e, a)],
          [13, (e) => l(e, a)],
        ]);
      function d(e) {
        return (0, n.Jk)(e, (e) => e.classList.contains("tabulator-cell"));
      }
      function u(e) {
        const t = Array.prototype.slice.call(e.children).reverse();
        for (; t.length > 0; ) {
          const e = t.pop();
          if ("input" === e.tagName.toLowerCase()) return e;
          t.push(...Array.prototype.slice.call(e.children).reverse());
        }
        return null;
      }
      function m(e, t) {
        var i;
        const n = c.get(e.keyCode);
        if (!n) return;
        let r = n(d(e.currentTarget));
        for (; r; ) {
          if (
            "none" !=
              (null === (i = r.style) || void 0 === i ? void 0 : i.display) &&
            !r.classList.contains("tabulator-frozen")
          ) {
            const i = u(r);
            if (i) {
              return p(t, d(i)), i.focus(), void e.preventDefault();
            }
          }
          r = n(r);
        }
      }
      function p(e, t) {
        const i = e.columnManager.scrollLeft,
          n = t.offsetWidth,
          r = t.offsetLeft,
          s = r + n,
          a = e.columnManager.element.clientWidth,
          o = e.columnManager.headersElement.clientWidth,
          l = i + a;
        if (r >= l - o && s <= l) return;
        const c = (r + s) / 2 - (a - o / 2),
          d = (o - n) / 4,
          u = c + (c > i ? d : -1 * d);
        e.columnManager.scrollHorizontal(u), e.rowManager.scrollHorizontal(u);
      }
    },
    84935: (e, t, i) => {
      "use strict";
      i.d(t, { R1: () => l, Sx: () => a, xs: () => d });
      var n = i(33940),
        r = (i(52868), i(38800), i(82702), i(84413), i(63154)),
        s = i(31587);
      const a = new Set([0, 2, 6, 13]),
        o = new Set([4, 7, 11]);
      function l(e) {
        var t, i;
        let n,
          l = !1,
          c = !1;
        const d = new Set();
        for (const i of null !==
          (t = null == e ? void 0 : e.GetIncludedAppIDs()) && void 0 !== t
          ? t
          : []) {
          const e = r.Z.Get().GetApp(i);
          if (e && a.has(e.GetAppType())) (l = !0), d.add(e.GetID());
          else if (e && o.has(e.GetAppType())) {
            c = !0;
            const t = e.GetParentAppID();
            t && d.add(t);
          }
        }
        let u = null;
        1 == d.size
          ? ((n = Array.from(d)[0]),
            (u =
              null === (i = r.Z.Get().GetApp(n)) || void 0 === i
                ? void 0
                : i.GetName()))
          : d.size > 1 &&
            (u = (0, s.Xx)("#PackageGrid_MultipleBaseGamesFoundForPackage")),
          u || (u = (0, s.Xx)("#PackageGrid_NoBaseGameFoundForPackage"));
        return {
          baseAppName: u,
          contents: l && c ? "BOTH" : l ? "GAME" : c ? "DLC" : null,
          nBaseAppID: n,
        };
      }
      const c = { include_release: !0 };
      function d(e, t) {
        return (0, n.mG)(this, void 0, void 0, function* () {
          if (
            1 != (yield r.Z.Get().HintLoadStorePackages(e, c)) ||
            t.token.reason
          )
            return null;
          const i = [];
          e.map((e) => r.Z.Get().GetPackage(e))
            .filter((e) => !!e)
            .forEach((e) => i.push(...e.GetIncludedAppIDs()));
          const n = Array.from(new Set(i));
          if (1 != (yield r.Z.Get().HintLoadStoreApps(n, c)) || t.token.reason)
            return null;
          const s = n
              .map((e) => r.Z.Get().GetApp(e))
              .filter((e) => !!(null == e ? void 0 : e.GetParentAppID()))
              .map((e) => e.GetParentAppID()),
            a = Array.from(new Set(s));
          if (1 != (yield r.Z.Get().HintLoadStoreApps(a, c)) || t.token.reason)
            return null;
          return Array.from(new Set(n.concat(a)));
        });
      }
    },
    85797: (e, t, i) => {
      "use strict";
      i.d(t, { $: () => n, _: () => r });
      const n = "America/Los_Angeles";
      function r(e) {
        const t = i(47812).unix(e).tz(n);
        return (
          t.seconds(0),
          t.minutes(0),
          t.hours(10),
          t.unix() < e && t.hours(34),
          t.unix()
        );
      }
    },
  },
]);
