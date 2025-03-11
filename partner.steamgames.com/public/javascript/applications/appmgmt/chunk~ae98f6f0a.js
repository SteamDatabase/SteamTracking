/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [6672],
  {
    45737: (e) => {
      e.exports = {
        AdminPageCtn: "wC3_c2yhq3ppKA9AKQoTy",
        WidePageCtn: "uHgjQHyNygSKukDngfNQO",
        PageTitleFlexCtn: "_3uPTh_ikegl-PIq12cfjJg",
        PageTitle: "_2RxJB5bupbx0mkW8dYJQRE",
        Beta: "_1YBhTKSlOER8bOnp0BU4Wj",
        PageSubTitle: "okuL_y7hLnZUD5P4ACqUN",
        ValveOnlyTitle: "_3skaXOiv1_vtHc_pGOPNsc",
        ValveOnlyBackground: "_2FESGwA28dH3EVAa7uTsUX",
        ColumnCtn: "_1bjwXvgQa-kJBMijOLS8X5",
        LeftCol: "_1AqrivbzwCs57BXiugqpeA",
        ColHeader: "_3m2-TXBKQenlqzPUBuhbaD",
        Blue: "J7iYYml2Jf_PcaACW1hEr",
        ColHeaderImg: "_1VFkxNTzCFO2uCcle_nAJk",
        SectionCtn: "_1eWwNe3G6T8EcVRg0R5Ftj",
        Bright: "_3ZqV0CAeVnd0rruF6TVKQz",
        ActionBar: "ilVbVkb6hkO_s6E_kiiSd",
        SectionIntroRequirements: "_3TKZIwYk2f5dd3MR5909Uz",
        warning: "_2HiNh3o5cgMEbzFKYBUjAy",
        IntroText: "_1WWL_09T_-Jq--HSJRhKtH",
        RightCol: "_3kaQhRnhNh_awrnNX90rui",
        NoSticky: "JQNb8bHftBTAYpCXTx52v",
        SmallText: "_3ltg5fPzb-WsRyzI41vAv_",
        Button: "_3L1DFwM1lpsRwZ-AaMx9ie",
        TitleSmall: "_3DyXNd5UgceEG9fcCKinvw",
        DefaultSectionCtn: "Pupnokb21glaosRjxBjAm",
        Indent: "_7PV326-4cpZdmTCEdgC2l",
        DashLink: "_2NH_FlbsKA0jN2jPG4Rn9A",
        FlexRow: "_3rz6jzCvvOGt8N0XaPIdzg",
        MarginBottom: "_2Bw2oyBgXlb8EZ4HHbE8Ye",
        StatusLineItemCtn: "_2h8s6LCid-ECW3NhDIBaFX",
        StatusIcon: "_3dYtRWTacFdf4BVwqGSgcd",
        StatusIconDone: "_1tiAc3o7NUJsBdgLS6vCl_",
        UploadedImageDisplayCtn: "_1_JRuj6yAJovBDZE8IMSob",
        UploaderLeftCol: "_3KQhw0sa1q_h62e4yaFgbw",
        MarketingMessage: "_2pCvRF734J5gLxMMHW7LIb",
        BannerPreview: "_1x4unTauuLCbMkThgRpsXc",
        UploaderRightCol: "_3jcvvtnLhiQBvAebO2eI4Z",
        LangCountTitle: "_1tPNH9hTWnMUsbdob5i93a",
        LangSelectCtn: "_3tHzJ-eCQIlg-4XjTN0bNU",
        UploaderImgLang: "_1jJThBArHevzcJ93kx4WhR",
        LangSelected: "_1sUrnQsBw06ZqTIbMeE9tT",
        DeleteAll: "rYuknI3K1VFknv90GNUTc",
        EditCtn: "_1g5X3AT4HwD0ya2e2t2WTO",
        StatusBtn: "_1MGZHxsnyQPrLXwl-8Fium",
        HalfWidthBtnCtn: "fGJIpDJEvYkHmhWFP39BX",
        StatReportCtn: "_1J3v1KGOhdSGz77c2rLxWy",
        Stat: "_3OYQbVCq1yBuEx1XcDzG06",
        BigStat: "lYYwDDss378Sm0FKPBxPh",
        IncreaseRateInfo: "_2yY3XT7VPyYBZS3FCEGgRS",
      };
    },
    75487: (e, t, r) => {
      "use strict";
      r.d(t, {
        $J: () => J,
        BL: () => R,
        Gr: () => w,
        J6: () => ae,
        KP: () => ne,
        fe: () => q,
        jd: () => Z,
        ku: () => H,
        nd: () => je,
        pS: () => oe,
      });
      var i = r(80613),
        a = r(89068),
        s = r(56545),
        n = r(8114),
        l = r(15161),
        o = r(36003);
      const m = i.Message;
      class c extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.activation_code || a.Sg(c.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  activation_code: {
                    n: 1,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  purchase_platform: {
                    n: 2,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  is_request_from_client: {
                    n: 3,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = a.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(c.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_RegisterCDKey_Request";
        }
      }
      class u extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.transactionid || a.Sg(u.M()),
            m.initialize(this, e, 0, -1, [18], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  transactionid: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  packageid: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  purchase_status: {
                    n: 3,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  result_detail: {
                    n: 4,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  transaction_time: {
                    n: 5,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  payment_method: {
                    n: 6,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  base_price: {
                    n: 7,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  total_discount: {
                    n: 8,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  tax: {
                    n: 9,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  shipping: {
                    n: 10,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  currency_code: {
                    n: 11,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  country_code: {
                    n: 12,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  error_headline: {
                    n: 13,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  error_string: {
                    n: 14,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  error_link_text: {
                    n: 15,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  error_link_url: {
                    n: 16,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  error_appid: {
                    n: 17,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  line_items: { n: 18, c: B, r: !0, q: !0 },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = a.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_PurchaseReceiptInfo";
        }
      }
      class B extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.packageid || a.Sg(B.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  packageid: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  appid: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  line_item_description: {
                    n: 3,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = a.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_PurchaseReceiptInfo_LineItem";
        }
      }
      class d extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.purchase_result_details || a.Sg(d.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  purchase_result_details: {
                    n: 1,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  purchase_receipt_info: { n: 2, c: u },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = a.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_RegisterCDKey_Response";
        }
      }
      class b extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.language || a.Sg(b.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  language: { n: 1, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = a.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetMostPopularTags_Request";
        }
      }
      class g extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.tags || a.Sg(g.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: { tags: { n: 1, c: _, r: !0, q: !0 } },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = a.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetMostPopularTags_Response";
        }
      }
      class _ extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.tagid || a.Sg(_.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  tagid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  name: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = a.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetMostPopularTags_Response_Tag";
        }
      }
      class y extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.language || a.Sg(y.M()),
            m.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  language: { n: 1, br: a.qM.readString, bw: a.gp.writeString },
                  tagids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.qM.readUint32,
                    pbr: a.qM.readPackedUint32,
                    bw: a.gp.writeRepeatedUint32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = a.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetLocalizedNameForTags_Request";
        }
      }
      class p extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.tags || a.Sg(p.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: { tags: { n: 1, c: M, r: !0, q: !0 } },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = a.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetLocalizedNameForTags_Response";
        }
      }
      class M extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.tagid || a.Sg(M.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  tagid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  english_name: {
                    n: 2,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  name: { n: 3, br: a.qM.readString, bw: a.gp.writeString },
                  normalized_name: {
                    n: 4,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = a.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetLocalizedNameForTags_Response_Tag";
        }
      }
      class w extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.language || a.Sg(w.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  language: { n: 1, br: a.qM.readString, bw: a.gp.writeString },
                  have_version_hash: {
                    n: 2,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = a.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTagList_Request";
        }
      }
      class z extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.version_hash || a.Sg(z.M()),
            m.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  version_hash: {
                    n: 1,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  tags: { n: 2, c: f, r: !0, q: !0 },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = a.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTagList_Response";
        }
      }
      class f extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.tagid || a.Sg(f.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  tagid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  name: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = a.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTagList_Response_Tag";
        }
      }
      class S extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.os_win || a.Sg(S.M()),
            m.initialize(this, e, 0, -1, [10, 16], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  os_win: { n: 4, br: a.qM.readBool, bw: a.gp.writeBool },
                  os_mac: { n: 5, br: a.qM.readBool, bw: a.gp.writeBool },
                  os_linux: { n: 6, br: a.qM.readBool, bw: a.gp.writeBool },
                  full_controller_support: {
                    n: 7,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  native_steam_controller: {
                    n: 8,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  include_coming_soon: {
                    n: 9,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  excluded_tagids: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: a.qM.readUint32,
                    pbr: a.qM.readPackedUint32,
                    bw: a.gp.writeRepeatedUint32,
                  },
                  exclude_early_access: {
                    n: 11,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  exclude_videos: {
                    n: 12,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  exclude_software: {
                    n: 13,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  exclude_dlc: { n: 14, br: a.qM.readBool, bw: a.gp.writeBool },
                  exclude_soundtracks: {
                    n: 15,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  featured_tagids: {
                    n: 16,
                    r: !0,
                    q: !0,
                    br: a.qM.readUint32,
                    pbr: a.qM.readPackedUint32,
                    bw: a.gp.writeRepeatedUint32,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = a.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreDiscoveryQueueSettings";
        }
      }
      class R extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.queue_type || a.Sg(R.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  queue_type: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  country_code: {
                    n: 2,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  rebuild_queue: {
                    n: 3,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  settings_changed: {
                    n: 4,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  settings: { n: 5, c: S },
                  rebuild_queue_if_stale: {
                    n: 6,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  ignore_user_preferences: {
                    n: 8,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  no_experimental_results: {
                    n: 9,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  experimental_cohort: {
                    n: 10,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  debug_get_solr_query: {
                    n: 11,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  store_page_filter: { n: 12, c: n.S7 },
                  context: { n: 13, c: l.TS },
                  data_request: { n: 14, c: l.gn },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = a.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueue_Request";
        }
      }
      class W extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.appids || a.Sg(W.M()),
            m.initialize(this, e, 0, -1, [1, 8], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.qM.readUint32,
                    pbr: a.qM.readPackedUint32,
                    bw: a.gp.writeRepeatedUint32,
                  },
                  country_code: {
                    n: 2,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  settings: { n: 3, c: S },
                  skipped: { n: 4, br: a.qM.readInt32, bw: a.gp.writeInt32 },
                  exhausted: { n: 5, br: a.qM.readBool, bw: a.gp.writeBool },
                  experimental_cohort: {
                    n: 6,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  debug_solr_query: {
                    n: 7,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  store_items: { n: 8, c: l.vB, r: !0, q: !0 },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = a.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueue_Response";
        }
      }
      class j extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.queue_type || a.Sg(j.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  queue_type: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  store_page_filter: { n: 2, c: n.S7 },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = a.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSettings_Request";
        }
      }
      class h extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.country_code || a.Sg(h.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  country_code: {
                    n: 1,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  settings: { n: 2, c: S },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = a.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSettings_Response";
        }
      }
      class q extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.queue_type || a.Sg(q.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  queue_type: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  appid: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  store_page_filter: { n: 3, c: n.S7 },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = a.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SkipDiscoveryQueueItem_Request";
        }
      }
      class T extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), m.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new T();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SkipDiscoveryQueueItem_Response";
        }
      }
      class v extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.appid || a.Sg(v.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  store_appid: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  beta_appid: {
                    n: 3,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = a.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserGameInterestState_Request";
        }
      }
      class F extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.owned || a.Sg(F.M()),
            m.initialize(this, e, 0, -1, [5, 6, 7, 8, 10], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  owned: { n: 1, br: a.qM.readBool, bw: a.gp.writeBool },
                  wishlist: { n: 2, br: a.qM.readBool, bw: a.gp.writeBool },
                  ignored: { n: 3, br: a.qM.readBool, bw: a.gp.writeBool },
                  following: { n: 4, br: a.qM.readBool, bw: a.gp.writeBool },
                  in_queues: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: a.qM.readEnum,
                    pbr: a.qM.readPackedEnum,
                    bw: a.gp.writeRepeatedEnum,
                  },
                  queues_with_skip: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: a.qM.readEnum,
                    pbr: a.qM.readPackedEnum,
                    bw: a.gp.writeRepeatedEnum,
                  },
                  queue_items_remaining: {
                    n: 7,
                    r: !0,
                    q: !0,
                    br: a.qM.readInt32,
                    pbr: a.qM.readPackedInt32,
                    bw: a.gp.writeRepeatedInt32,
                  },
                  queue_items_next_appid: {
                    n: 8,
                    r: !0,
                    q: !0,
                    br: a.qM.readUint32,
                    pbr: a.qM.readPackedUint32,
                    bw: a.gp.writeRepeatedUint32,
                  },
                  temporarily_owned: {
                    n: 9,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  queues: { n: 10, c: O, r: !0, q: !0 },
                  ignored_reason: {
                    n: 11,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  beta_status: { n: 12, br: a.qM.readEnum, bw: a.gp.writeEnum },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = a.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserGameInterestState_Response";
        }
      }
      class O extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.type || a.Sg(O.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  type: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  skipped: { n: 2, br: a.qM.readBool, bw: a.gp.writeBool },
                  items_remaining: {
                    n: 3,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  next_appid: {
                    n: 4,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  experimental_cohort: {
                    n: 5,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = a.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserGameInterestState_Response_InQueue";
        }
      }
      class U extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.appid || a.Sg(U.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  report_type: { n: 2, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  report: { n: 3, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = a.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_ReportApp_Request";
        }
      }
      class I extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), m.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new I();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_ReportApp_Response";
        }
      }
      class C extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.primary_language || a.Sg(C.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  primary_language: {
                    n: 1,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  secondary_languages: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  platform_windows: {
                    n: 3,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  platform_mac: { n: 4, br: a.qM.readBool, bw: a.gp.writeBool },
                  platform_linux: {
                    n: 5,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  timestamp_updated: {
                    n: 8,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  hide_store_broadcast: {
                    n: 9,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  review_score_preference: {
                    n: 10,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  timestamp_content_descriptor_preferences_updated: {
                    n: 11,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  provide_deck_feedback: {
                    n: 12,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  additional_languages: {
                    n: 13,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = a.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserPreferences";
        }
      }
      class P extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.tags_to_exclude || a.Sg(P.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: { tags_to_exclude: { n: 1, c: x, r: !0, q: !0 } },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = a.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserTagPreferences";
        }
      }
      class x extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.tagid || a.Sg(x.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  tagid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  name: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                  timestamp_added: {
                    n: 3,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = a.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserTagPreferences_Tag";
        }
      }
      class N extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), m.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new N();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetStorePreferences_Request";
        }
      }
      class k extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.preferences || a.Sg(k.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  preferences: { n: 1, c: C },
                  tag_preferences: { n: 2, c: P },
                  content_descriptor_preferences: { n: 3, c: o.u2 },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = a.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetStorePreferences_Response";
        }
      }
      class G extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.num_apps || a.Sg(G.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  num_apps: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  num_top_friends: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = a.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTrendingAppsAmongFriends_Request";
        }
      }
      class E extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.trending_apps || a.Sg(E.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: { trending_apps: { n: 1, c: A, r: !0, q: !0 } },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = a.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTrendingAppsAmongFriends_Response";
        }
      }
      class A extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.appid || a.Sg(A.M()),
            m.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  steamids_top_friends: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.qM.readUint64String,
                    pbr: a.qM.readPackedUint64String,
                    bw: a.gp.writeRepeatedUint64String,
                  },
                  total_friends: {
                    n: 3,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = a.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTrendingAppsAmongFriends_Response_TrendingAppData";
        }
      }
      class D extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.packages_to_reserve || a.Sg(D.M()),
            m.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  packages_to_reserve: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.qM.readUint32,
                    pbr: a.qM.readPackedUint32,
                    bw: a.gp.writeRepeatedUint32,
                  },
                  packages_to_unreserve: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.qM.readUint32,
                    pbr: a.qM.readPackedUint32,
                    bw: a.gp.writeRepeatedUint32,
                  },
                  country_code: {
                    n: 3,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = a.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UpdatePackageReservations_Request";
        }
      }
      class Q extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.reservation_status || a.Sg(Q.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: { reservation_status: { n: 1, c: o.ke, r: !0, q: !0 } },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = a.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(Q.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UpdatePackageReservations_Response";
        }
      }
      class L extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.edistributor || a.Sg(L.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  edistributor: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  product_identifier: {
                    n: 2,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  start_queue_position: {
                    n: 3,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  rtime_estimated_notification: {
                    n: 4,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  localization_token: {
                    n: 5,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  accountid: {
                    n: 6,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  rtime_created: {
                    n: 7,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = a.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CReservationPositionMessage";
        }
      }
      class H extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.settings || a.Sg(H.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: { settings: { n: 1, c: L, r: !0, q: !0 } },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = a.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SetReservationPositionMessage_Request";
        }
      }
      class K extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), m.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new K();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SetReservationPositionMessage_Response";
        }
      }
      class J extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.edistributor || a.Sg(J.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  edistributor: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  product_identifier: {
                    n: 2,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  start_queue_position: {
                    n: 3,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = a.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_DeleteReservationPositionMessage_Request";
        }
      }
      class X extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), m.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new X();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_DeleteReservationPositionMessage_Response";
        }
      }
      class Y extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), m.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Y();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetAllReservationPositionMessages_Request";
        }
      }
      class V extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.settings || a.Sg(V.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: { settings: { n: 1, c: L, r: !0, q: !0 } },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = a.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetAllReservationPositionMessages_Response";
        }
      }
      class Z extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), m.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Z();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_ReloadAllReservationPositionMessages_Notification";
        }
      }
      class $ extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.accountid || a.Sg($.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  browserid: {
                    n: 2,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  backfill_source: {
                    n: 3,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = a.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT($.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0($.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_MigratePartnerLinkTracking_Notification";
        }
      }
      class ee extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.appid || a.Sg(ee.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  feedback: { n: 2, br: a.qM.readEnum, bw: a.gp.writeEnum },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = a.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(ee.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_SetFeedback_Request";
        }
      }
      class te extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), m.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new te();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_SetFeedback_Response";
        }
      }
      class re extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.appid || a.Sg(re.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = a.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(re.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_ShouldPrompt_Request";
        }
      }
      class ie extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.prompt || a.Sg(ie.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  prompt: { n: 1, br: a.qM.readBool, bw: a.gp.writeBool },
                  feedback_eligible: {
                    n: 2,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  existing_feedback: {
                    n: 3,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = a.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(ie.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_ShouldPrompt_Response";
        }
      }
      class ae extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.appid || a.Sg(ae.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  demo_appid: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  allow_late_firing: {
                    n: 3,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = a.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(ae.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetWishlistDemoEmailStatus_Request";
        }
      }
      class se extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.can_fire || a.Sg(se.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  can_fire: {
                    n: 1,
                    d: !1,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  time_staged: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  demo_release_date: {
                    n: 3,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = a.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(se.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetWishlistDemoEmailStatus_Response";
        }
      }
      class ne extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.appid || a.Sg(ne.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  demo_appid: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  allow_late_firing: {
                    n: 3,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = a.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(ne.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_QueueWishlistDemoEmailToFire_Request";
        }
      }
      class le extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), m.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new le();
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_QueueWishlistDemoEmailToFire_Response";
        }
      }
      class oe extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.steamid || a.Sg(oe.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                  queue_type: { n: 2, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  store_page_filter: { n: 3, c: n.S7 },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = a.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(oe.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSkippedApps_Request";
        }
      }
      class me extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.appids || a.Sg(me.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.qM.readUint32,
                    pbr: a.qM.readPackedUint32,
                    bw: a.gp.writeRepeatedUint32,
                  },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = a.w0(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(me.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSkippedApps_Response";
        }
      }
      class ce extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.preferences || a.Sg(ce.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  preferences: { n: 1, c: C },
                  tag_preferences: { n: 2, c: P },
                  content_descriptor_preferences: { n: 3, c: o.u2 },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = a.w0(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(ce.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_StorePreferencesChanged_Notification";
        }
      }
      class ue extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.appid || a.Sg(ue.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  steamid: {
                    n: 2,
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = a.w0(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(ue.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_RequestInvite_Request";
        }
      }
      class Be extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.invites_remaining || a.Sg(Be.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  invites_remaining: {
                    n: 1,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  status: { n: 2, br: a.qM.readEnum, bw: a.gp.writeEnum },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = a.w0(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(Be.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_RequestInvite_Response";
        }
      }
      class de extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.invite_ids || a.Sg(de.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  invite_ids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.qM.readUint64String,
                    pbr: a.qM.readPackedUint64String,
                    bw: a.gp.writeRepeatedUint64String,
                  },
                  status: { n: 2, br: a.qM.readEnum, bw: a.gp.writeEnum },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = a.w0(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(de.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_UpdateInvites_Request";
        }
      }
      class be extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.invites_updated || a.Sg(be.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  invites_updated: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = a.w0(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(be.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_UpdateInvites_Response";
        }
      }
      class ge extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.invite_id || a.Sg(ge.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  invite_id: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = a.w0(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(ge.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInvites_Request";
        }
      }
      class _e extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.invites || a.Sg(_e.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: { invites: { n: 1, c: ye, r: !0, q: !0 } },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = a.w0(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(_e.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInvites_Response";
        }
      }
      class ye extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.invite_id || a.Sg(ye.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: {
                  invite_id: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  appid: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  steamid_inviter: {
                    n: 3,
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                  status: { n: 4, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  time_created: {
                    n: 5,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  app_name: { n: 6, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = a.w0(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(ye.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInvites_Response_Invite";
        }
      }
      class pe extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.limit || a.Sg(pe.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: {
                  limit: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  time_before: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = a.w0(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(pe.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInviteHistory_Request";
        }
      }
      class Me extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.invites || a.Sg(Me.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: { invites: { n: 1, c: we, r: !0, q: !0 } },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = a.w0(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(Me.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(Me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Me();
          return Me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(Me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(Me.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInviteHistory_Response";
        }
      }
      class we extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.appid || a.Sg(we.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  steamid_invited: {
                    n: 2,
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                  time_created: {
                    n: 3,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  app_name: { n: 4, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = a.w0(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(we.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(we.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new we();
          return we.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(we.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(we.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInviteHistory_Response_Invite";
        }
      }
      class ze extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.appid || a.Sg(ze.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: {
                  appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = a.w0(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(ze.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetUserStatus_Request";
        }
      }
      class fe extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.results || a.Sg(fe.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: { results: { n: 1, c: Se, r: !0, q: !0 } },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = a.w0(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(fe.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new fe();
          return fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetUserStatus_Response";
        }
      }
      class Se extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.appid || a.Sg(Se.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
                fields: {
                  appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  status: { n: 2, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  invites_remaining: {
                    n: 3,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  time_joined: {
                    n: 4,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  packageid: {
                    n: 5,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  invites_sent: {
                    n: 6,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = a.w0(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(Se.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(Se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Se();
          return Se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(Se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(Se.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetUserStatus_Response_AppStatus";
        }
      }
      class Re extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.appid || a.Sg(Re.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = a.w0(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(Re.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(Re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(Re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(Re.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInviteOptions_Request";
        }
      }
      class We extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.ineligible_friends || a.Sg(We.M()),
            m.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: {
                  ineligible_friends: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.qM.readUint32,
                    pbr: a.qM.readPackedUint32,
                    bw: a.gp.writeRepeatedUint32,
                  },
                },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = a.w0(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(We.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(We.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(We.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(We.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlaytest_GetInviteOptions_Response";
        }
      }
      var je, he, qe;
      !(function (e) {
        (e.RegisterCDKey = function (e, t) {
          return e.SendMsg("Store.RegisterCDKey#1", (0, s.I8)(c, t), d, {
            ePrivilege: 1,
          });
        }),
          (e.GetMostPopularTags = function (e, t) {
            return e.SendMsg("Store.GetMostPopularTags#1", (0, s.I8)(b, t), g, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetLocalizedNameForTags = function (e, t) {
            return e.SendMsg(
              "Store.GetLocalizedNameForTags#1",
              (0, s.I8)(y, t),
              p,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetTagList = function (e, t) {
            return e.SendMsg("Store.GetTagList#1", (0, s.I8)(w, t), z, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetDiscoveryQueue = function (e, t) {
            return e.SendMsg("Store.GetDiscoveryQueue#1", (0, s.I8)(R, t), W, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetDiscoveryQueueSettings = function (e, t) {
            return e.SendMsg(
              "Store.GetDiscoveryQueueSettings#1",
              (0, s.I8)(j, t),
              h,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SkipDiscoveryQueueItem = function (e, t) {
            return e.SendMsg(
              "Store.SkipDiscoveryQueueItem#1",
              (0, s.I8)(q, t),
              T,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserGameInterestState = function (e, t) {
            return e.SendMsg(
              "Store.GetUserGameInterestState#1",
              (0, s.I8)(v, t),
              F,
              { ePrivilege: 1 },
            );
          }),
          (e.GetDiscoveryQueueSkippedApps = function (e, t) {
            return e.SendMsg(
              "Store.GetDiscoveryQueueSkippedApps#1",
              (0, s.I8)(oe, t),
              me,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.ReportApp = function (e, t) {
            return e.SendMsg("Store.ReportApp#1", (0, s.I8)(U, t), I, {
              ePrivilege: 3,
            });
          }),
          (e.GetStorePreferences = function (e, t) {
            return e.SendMsg(
              "Store.GetStorePreferences#1",
              (0, s.I8)(N, t),
              k,
              { ePrivilege: 1 },
            );
          }),
          (e.GetTrendingAppsAmongFriends = function (e, t) {
            return e.SendMsg(
              "Store.GetTrendingAppsAmongFriends#1",
              (0, s.I8)(G, t),
              E,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.MigratePartnerLinkTracking = function (e, t) {
            return e.SendNotification(
              "Store.MigratePartnerLinkTracking#1",
              (0, s.I8)($, t),
              { ePrivilege: 1 },
            );
          }),
          (e.UpdatePackageReservations = function (e, t) {
            return e.SendMsg(
              "Store.UpdatePackageReservations#1",
              (0, s.I8)(D, t),
              Q,
              { ePrivilege: 1 },
            );
          }),
          (e.GetWishlistDemoEmailStatus = function (e, t) {
            return e.SendMsg(
              "Store.GetWishlistDemoEmailStatus#1",
              (0, s.I8)(ae, t),
              se,
              { ePrivilege: 1 },
            );
          }),
          (e.QueueWishlistDemoEmailToFire = function (e, t) {
            return e.SendMsg(
              "Store.QueueWishlistDemoEmailToFire#1",
              (0, s.I8)(ne, t),
              le,
              { ePrivilege: 1 },
            );
          }),
          (e.SetReservationPositionMessage = function (e, t) {
            return e.SendMsg(
              "Store.SetReservationPositionMessage#1",
              (0, s.I8)(H, t),
              K,
              { ePrivilege: 4 },
            );
          }),
          (e.DeleteReservationPositionMessage = function (e, t) {
            return e.SendMsg(
              "Store.DeleteReservationPositionMessage#1",
              (0, s.I8)(J, t),
              X,
              { ePrivilege: 4 },
            );
          }),
          (e.GetAllReservationPositionMessages = function (e, t) {
            return e.SendMsg(
              "Store.GetAllReservationPositionMessages#1",
              (0, s.I8)(Y, t),
              V,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }),
          (e.ReloadAllReservationPositionMessages = function (e, t) {
            return e.SendNotification(
              "Store.ReloadAllReservationPositionMessages#1",
              (0, s.I8)(Z, t),
              { ePrivilege: 4 },
            );
          }),
          (e.SetCompatibilityFeedback = function (e, t) {
            return e.SendMsg(
              "Store.SetCompatibilityFeedback#1",
              (0, s.I8)(ee, t),
              te,
              { ePrivilege: 1 },
            );
          }),
          (e.ShouldPromptForCompatibilityFeedback = function (e, t) {
            return e.SendMsg(
              "Store.ShouldPromptForCompatibilityFeedback#1",
              (0, s.I8)(re, t),
              ie,
              { ePrivilege: 1 },
            );
          });
      })(je || (je = {})),
        (function (e) {
          e.NotifyStorePreferencesChangedHandler = {
            name: "StoreClient.NotifyStorePreferencesChanged#1",
            request: ce,
          };
        })(he || (he = {})),
        (function (e) {
          (e.RequestInvite = function (e, t) {
            return e.SendMsg("Playtest.RequestInvite#1", (0, s.I8)(ue, t), Be, {
              ePrivilege: 1,
            });
          }),
            (e.UpdateInvites = function (e, t) {
              return e.SendMsg(
                "Playtest.UpdateInvites#1",
                (0, s.I8)(de, t),
                be,
                { ePrivilege: 1 },
              );
            }),
            (e.GetInvites = function (e, t) {
              return e.SendMsg("Playtest.GetInvites#1", (0, s.I8)(ge, t), _e, {
                ePrivilege: 1,
              });
            }),
            (e.GetInviteHistory = function (e, t) {
              return e.SendMsg(
                "Playtest.GetInviteHistory#1",
                (0, s.I8)(pe, t),
                Me,
                { ePrivilege: 1 },
              );
            }),
            (e.GetUserStatus = function (e, t) {
              return e.SendMsg(
                "Playtest.GetUserStatus#1",
                (0, s.I8)(ze, t),
                fe,
                { ePrivilege: 1 },
              );
            }),
            (e.GetInviteOptions = function (e, t) {
              return e.SendMsg(
                "Playtest.GetInviteOptions#1",
                (0, s.I8)(Re, t),
                We,
                { ePrivilege: 1 },
              );
            });
        })(qe || (qe = {}));
    },
  },
]);
