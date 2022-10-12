/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [3784],
  {
    5194: (e, r, t) => {
      var i = t(33019);
      t(40110);
      i.Message;
    },
    10767: (e, r, t) => {
      t.d(r, { HU: () => d, d6: () => C });
      var i = t(33019),
        n = t(40110);
      t(5194), t(21205);
      const s = i.Message;
      class a extends s {
        constructor(e = null) {
          super(),
            a.prototype.transactionid || n.aR(a.M()),
            s.initialize(this, e, 0, -1, [18], null);
        }
        static M() {
          return (
            a.sm_m ||
              (a.sm_m = {
                proto: a,
                fields: {
                  transactionid: {
                    n: 1,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  packageid: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  purchase_status: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  result_detail: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  transaction_time: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  payment_method: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  base_price: {
                    n: 7,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  total_discount: {
                    n: 8,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  tax: {
                    n: 9,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  shipping: {
                    n: 10,
                    br: n.FE.readUint64String,
                    bw: n.Xc.writeUint64String,
                  },
                  currency_code: {
                    n: 11,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  country_code: {
                    n: 12,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  error_headline: {
                    n: 13,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  error_string: {
                    n: 14,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  error_link_text: {
                    n: 15,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  error_link_url: {
                    n: 16,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  error_appid: {
                    n: 17,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  line_items: { n: 18, c: o, r: !0, q: !0 },
                },
              }),
            a.sm_m
          );
        }
        static MBF() {
          return a.sm_mbf || (a.sm_mbf = n.Bh(a.M())), a.sm_mbf;
        }
        toObject(e = !1) {
          return a.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(a.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(a.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new a();
          return a.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(a.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(a.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_PurchaseReceiptInfo";
        }
      }
      class o extends s {
        constructor(e = null) {
          super(),
            o.prototype.packageid || n.aR(o.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  packageid: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  appid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  line_item_description: {
                    n: 3,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
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
          return "CStore_PurchaseReceiptInfo_LineItem";
        }
      }
      class l extends s {
        constructor(e = null) {
          super(),
            l.prototype.purchase_result_details || n.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  purchase_result_details: {
                    n: 1,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  purchase_receipt_info: { n: 2, c: a },
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
          return "CStore_RegisterCDKey_Response";
        }
      }
      class c extends s {
        constructor(e = null) {
          super(),
            c.prototype.tags || n.aR(c.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: { tags: { n: 1, c: u, r: !0, q: !0 } },
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
          return "CStore_GetMostPopularTags_Response";
        }
      }
      class u extends s {
        constructor(e = null) {
          super(),
            u.prototype.tagid || n.aR(u.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  tagid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  name: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
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
          return "CStore_GetMostPopularTags_Response_Tag";
        }
      }
      class d extends s {
        constructor(e = null) {
          super(),
            d.prototype.language || n.aR(d.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  language: { n: 1, br: n.FE.readString, bw: n.Xc.writeString },
                  tagids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
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
          return "CStore_GetLocalizedNameForTags_Request";
        }
      }
      class m extends s {
        constructor(e = null) {
          super(),
            m.prototype.tags || n.aR(m.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: { tags: { n: 1, c: B, r: !0, q: !0 } },
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
          return "CStore_GetLocalizedNameForTags_Response";
        }
      }
      class B extends s {
        constructor(e = null) {
          super(),
            B.prototype.tagid || n.aR(B.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  tagid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  english_name: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  name: { n: 3, br: n.FE.readString, bw: n.Xc.writeString },
                  normalized_name: {
                    n: 4,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(B.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetLocalizedNameForTags_Response_Tag";
        }
      }
      class p extends s {
        constructor(e = null) {
          super(),
            p.prototype.os_win || n.aR(p.M()),
            s.initialize(this, e, 0, -1, [10, 16], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  os_win: { n: 4, br: n.FE.readBool, bw: n.Xc.writeBool },
                  os_mac: { n: 5, br: n.FE.readBool, bw: n.Xc.writeBool },
                  os_linux: { n: 6, br: n.FE.readBool, bw: n.Xc.writeBool },
                  full_controller_support: {
                    n: 7,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  native_steam_controller: {
                    n: 8,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  include_coming_soon: {
                    n: 9,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  excluded_tagids: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                  exclude_early_access: {
                    n: 11,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  exclude_videos: {
                    n: 12,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  exclude_software: {
                    n: 13,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  exclude_dlc: { n: 14, br: n.FE.readBool, bw: n.Xc.writeBool },
                  exclude_soundtracks: {
                    n: 15,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  featured_tagids: {
                    n: 16,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(p.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreDiscoveryQueueSettings";
        }
      }
      class b extends s {
        constructor(e = null) {
          super(),
            b.prototype.appids || n.aR(b.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                  country_code: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  settings: { n: 3, c: p },
                  skipped: { n: 4, br: n.FE.readInt32, bw: n.Xc.writeInt32 },
                  exhausted: { n: 5, br: n.FE.readBool, bw: n.Xc.writeBool },
                  experimental_cohort: {
                    n: 6,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  debug_solr_query: {
                    n: 7,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
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
          return "CStore_GetDiscoveryQueue_Response";
        }
      }
      class g extends s {
        constructor(e = null) {
          super(),
            g.prototype.country_code || n.aR(g.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  country_code: {
                    n: 1,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  settings: { n: 2, c: p },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = n.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(g.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSettings_Response";
        }
      }
      class _ extends s {
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new _();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SkipDiscoveryQueueItem_Response";
        }
      }
      class w extends s {
        constructor(e = null) {
          super(),
            w.prototype.owned || n.aR(w.M()),
            s.initialize(this, e, 0, -1, [5, 6, 7, 8, 10], null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  owned: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                  wishlist: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                  ignored: { n: 3, br: n.FE.readBool, bw: n.Xc.writeBool },
                  following: { n: 4, br: n.FE.readBool, bw: n.Xc.writeBool },
                  in_queues: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: n.FE.readEnum,
                    pbr: n.FE.readPackedEnum,
                    bw: n.Xc.writeRepeatedEnum,
                  },
                  queues_with_skip: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: n.FE.readEnum,
                    pbr: n.FE.readPackedEnum,
                    bw: n.Xc.writeRepeatedEnum,
                  },
                  queue_items_remaining: {
                    n: 7,
                    r: !0,
                    q: !0,
                    br: n.FE.readInt32,
                    pbr: n.FE.readPackedInt32,
                    bw: n.Xc.writeRepeatedInt32,
                  },
                  queue_items_next_appid: {
                    n: 8,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                  temporarily_owned: {
                    n: 9,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  queues: { n: 10, c: y, r: !0, q: !0 },
                  ignored_reason: {
                    n: 11,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  beta_status: { n: 12, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(w.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserGameInterestState_Response";
        }
      }
      class y extends s {
        constructor(e = null) {
          super(),
            y.prototype.type || n.aR(y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  type: { n: 1, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  skipped: { n: 2, br: n.FE.readBool, bw: n.Xc.writeBool },
                  items_remaining: {
                    n: 3,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  next_appid: {
                    n: 4,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  experimental_cohort: {
                    n: 5,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = n.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(y.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserGameInterestState_Response_InQueue";
        }
      }
      class h extends s {
        constructor(e = null) {
          super(),
            h.prototype.primary_language || n.aR(h.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  primary_language: {
                    n: 1,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  secondary_languages: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  platform_windows: {
                    n: 3,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  platform_mac: { n: 4, br: n.FE.readBool, bw: n.Xc.writeBool },
                  platform_linux: {
                    n: 5,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  hide_adult_content_violence: {
                    n: 6,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  hide_adult_content_sex: {
                    n: 7,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  timestamp_updated: {
                    n: 8,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  hide_store_broadcast: {
                    n: 9,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  review_score_preference: {
                    n: 10,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  timestamp_content_descriptor_preferences_updated: {
                    n: 11,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  provide_deck_feedback: {
                    n: 12,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                  additional_languages: {
                    n: 13,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = n.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(h.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserPreferences";
        }
      }
      class f extends s {
        constructor(e = null) {
          super(),
            f.prototype.tags_to_exclude || n.aR(f.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { tags_to_exclude: { n: 1, c: M, r: !0, q: !0 } },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = n.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(f.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserTagPreferences";
        }
      }
      class M extends s {
        constructor(e = null) {
          super(),
            M.prototype.tagid || n.aR(M.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  tagid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  name: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
                  timestamp_added: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = n.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(M.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserTagPreferences_Tag";
        }
      }
      class z extends s {
        constructor(e = null) {
          super(),
            z.prototype.content_descriptors_to_exclude || n.aR(z.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  content_descriptors_to_exclude: { n: 1, c: F, r: !0, q: !0 },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = n.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(z.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserContentDescriptorPreferences";
        }
      }
      class F extends s {
        constructor(e = null) {
          super(),
            F.prototype.content_descriptorid || n.aR(F.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  content_descriptorid: {
                    n: 1,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  timestamp_added: {
                    n: 2,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = n.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(F.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserContentDescriptorPreferences_ContentDescriptor";
        }
      }
      class R extends s {
        constructor(e = null) {
          super(),
            R.prototype.preferences || n.aR(R.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  preferences: { n: 1, c: h },
                  tag_preferences: { n: 2, c: f },
                  content_descriptor_preferences: { n: 3, c: z },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = n.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(R.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetStorePreferences_Response";
        }
      }
      class S extends s {
        constructor(e = null) {
          super(),
            S.prototype.trending_apps || n.aR(S.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: { trending_apps: { n: 1, c: v, r: !0, q: !0 } },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = n.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(S.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTrendingAppsAmongFriends_Response";
        }
      }
      class v extends s {
        constructor(e = null) {
          super(),
            v.prototype.appid || n.aR(v.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  appid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  steamids_top_friends: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint64String,
                    pbr: n.FE.readPackedUint64String,
                    bw: n.Xc.writeRepeatedUint64String,
                  },
                  total_friends: {
                    n: 3,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = n.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(v.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTrendingAppsAmongFriends_Response_TrendingAppData";
        }
      }
      class E extends s {
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new E();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_SetFeedback_Response";
        }
      }
      class W extends s {
        constructor(e = null) {
          super(),
            W.prototype.prompt || n.aR(W.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  prompt: { n: 1, br: n.FE.readBool, bw: n.Xc.writeBool },
                  feedback_eligible: {
                    n: 2,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  existing_feedback: {
                    n: 3,
                    br: n.FE.readEnum,
                    bw: n.Xc.writeEnum,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = n.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(W.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_ShouldPrompt_Response";
        }
      }
      class T extends s {
        constructor(e = null) {
          super(),
            T.prototype.appids || n.aR(T.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.FE.readUint32,
                    pbr: n.FE.readPackedUint32,
                    bw: n.Xc.writeRepeatedUint32,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = n.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(T.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSkippedApps_Response";
        }
      }
      class O extends s {
        constructor(e = null) {
          super(),
            O.prototype.preferences || n.aR(O.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  preferences: { n: 1, c: h },
                  tag_preferences: { n: 2, c: f },
                  content_descriptor_preferences: { n: 3, c: z },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = n.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(O.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_StorePreferencesChanged_Notification";
        }
      }
      var C, j;
      !(function (e) {
        (e.RegisterCDKey = function (e, r) {
          return e.SendMsg("Store.RegisterCDKey#1", r, l, { ePrivilege: 1 });
        }),
          (e.GetMostPopularTags = function (e, r) {
            return e.SendMsg("Store.GetMostPopularTags#1", r, c, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetLocalizedNameForTags = function (e, r) {
            return e.SendMsg("Store.GetLocalizedNameForTags#1", r, m, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetDiscoveryQueue = function (e, r) {
            return e.SendMsg("Store.GetDiscoveryQueue#1", r, b, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetDiscoveryQueueSettings = function (e, r) {
            return e.SendMsg("Store.GetDiscoveryQueueSettings#1", r, g, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SkipDiscoveryQueueItem = function (e, r) {
            return e.SendMsg("Store.SkipDiscoveryQueueItem#1", r, _, {
              ePrivilege: 1,
            });
          }),
          (e.GetUserGameInterestState = function (e, r) {
            return e.SendMsg("Store.GetUserGameInterestState#1", r, w, {
              ePrivilege: 1,
            });
          }),
          (e.GetDiscoveryQueueSkippedApps = function (e, r) {
            return e.SendMsg("Store.GetDiscoveryQueueSkippedApps#1", r, T, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetStorePreferences = function (e, r) {
            return e.SendMsg("Store.GetStorePreferences#1", r, R, {
              ePrivilege: 1,
            });
          }),
          (e.GetTrendingAppsAmongFriends = function (e, r) {
            return e.SendMsg("Store.GetTrendingAppsAmongFriends#1", r, S, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SetCompatibilityFeedback = function (e, r) {
            return e.SendMsg("Store.SetCompatibilityFeedback#1", r, E, {
              ePrivilege: 1,
            });
          }),
          (e.ShouldPromptForCompatibilityFeedback = function (e, r) {
            return e.SendMsg(
              "Store.ShouldPromptForCompatibilityFeedback#1",
              r,
              W,
              { ePrivilege: 1 }
            );
          });
      })(C || (C = {})),
        (function (e) {
          e.NotifyStorePreferencesChangedHandler = {
            name: "StoreClient.NotifyStorePreferencesChanged#1",
            request: O,
          };
        })(j || (j = {}));
    },
    59650: (e, r, t) => {
      t.d(r, { e1: () => l.e1, x1: () => b, BR: () => _, AM: () => g });
      var i = t(70655),
        n = t(67294),
        s = t(73935),
        a = t(53157),
        o = t(10847),
        l = t(56525),
        c = t(95598),
        u = t(64839);
      class d extends n.Component {
        constructor(e) {
          super(e), (this.state = { maximized: this.BIsMaximized() });
        }
        BIsMaximized() {
          let e =
              this.props.popup.screen.availWidth - this.props.popup.innerWidth,
            r =
              this.props.popup.screen.availHeight -
              this.props.popup.innerHeight;
          return 0 === e && 0 === r;
        }
        componentDidMount() {
          this.props.popup.addEventListener("resize", this.UpdateMaximizeState);
        }
        componentWillUnmount() {
          this.props.popup.removeEventListener(
            "resize",
            this.UpdateMaximizeState
          );
        }
        UpdateMaximizeState() {
          let e = this.BIsMaximized();
          e != this.state.maximized && this.setState({ maximized: e });
        }
        render() {
          let e = this.props.popup,
            r = "title-area-icon";
          this.state.maximized
            ? (r += " restoreButton")
            : (r += " maximizeButton");
          let t = "TitleBar title-area";
          return (
            this.props.className && (t = t + " " + this.props.className),
            n.createElement(
              "div",
              { className: t, style: this.props.style },
              n.createElement("div", { className: "title-area-highlight" }),
              n.createElement(
                "div",
                { className: "title-area-children" },
                this.props.children
              ),
              !this.props.hideActions &&
                n.createElement(
                  "div",
                  { className: "title-bar-actions" },
                  n.createElement(
                    "div",
                    {
                      className: "title-area-icon closeButton",
                      onClick: () => {
                        e && e.close();
                      },
                    },
                    n.createElement(c.pVO, null)
                  ),
                  !this.props.hideMinMax &&
                    n.createElement(
                      "div",
                      {
                        className: r,
                        onClick: () => {
                          e.SteamClient.Window.ToggleMaximize();
                        },
                      },
                      this.state.maximized && n.createElement(c.r6F, null),
                      !this.state.maximized && n.createElement(c.YqJ, null)
                    ),
                  !this.props.hideMinMax &&
                    n.createElement(
                      "div",
                      {
                        className: "title-area-icon minimizeButton",
                        onClick: () => {
                          e.SteamClient.Window.Minimize();
                        },
                      },
                      n.createElement(c.gR, null)
                    )
                )
            )
          );
        }
      }
      (0, i.gn)([u.ak], d.prototype, "UpdateMaximizeState", null);
      var m = t(77520),
        B = t(41311),
        p = t(90666);
      function b(e, r, t) {
        return (0, i.mG)(this, void 0, void 0, function* () {
          const n = !0 === (null == t ? void 0 : t.bNeverPopOut),
            a = !n && w(null, r),
            o =
              (null == t ? void 0 : t.bForcePopOut) &&
              (null == t ? void 0 : t.popupWidth) &&
              (null == t ? void 0 : t.popupHeight),
            l =
              a &&
              !o &&
              (yield (function (e, r, t) {
                return (0, i.mG)(this, void 0, void 0, function* () {
                  const i = r.document.createElement("div");
                  (i.style.position = "absolute"),
                    (i.style.visibility = "hidden"),
                    r.document.body.appendChild(i),
                    s.render(e, i),
                    yield t;
                  let n = document;
                  p.De.IN_LIBRARY && n.fonts && (yield n.fonts.ready);
                  const a = i.getBoundingClientRect(),
                    o = Math.ceil(a.height),
                    l = Math.ceil(a.width);
                  return (
                    s.unmountComponentAtNode(i),
                    r.document.body.removeChild(i),
                    { height: o, width: l }
                  );
                });
              })(e, r, null == t ? void 0 : t.promiseRenderComplete)),
            c =
              l &&
              l.height / r.innerHeight < 0.9 &&
              l.width / r.innerWidth < 0.8;
          if (n || (!(null == t ? void 0 : t.bForcePopOut) && c))
            return _(e, r);
          const u = {
              strTitle:
                (null == t ? void 0 : t.strTitle) ||
                (0, B.Xx)("#Dialog_DefaultWindowTitle"),
              fnOnClose: null == t ? void 0 : t.fnOnClose,
              popupWidth:
                (null == t ? void 0 : t.popupWidth) ||
                (null == l ? void 0 : l.width),
              popupHeight:
                (null == t ? void 0 : t.popupHeight) ||
                (null == l ? void 0 : l.height),
              bHideMainWindowForPopouts:
                null == t ? void 0 : t.bHideMainWindowForPopouts,
            },
            d = { bHideActions: null == t ? void 0 : t.bHideActionIcons };
          return _(
            e,
            r,
            u.strTitle,
            u,
            null == t ? void 0 : t.browserContext,
            d
          );
        });
      }
      function g(e, r, t) {
        return (0, i.mG)(this, void 0, void 0, function* () {
          return b(e, r, Object.assign({ bHideMainWindowForPopouts: !0 }, t));
        });
      }
      function _(e, r, t, i, s, a, o) {
        let c, u;
        const d = e.props.closeModal,
          m = () => {
            u && u.Close(),
              d && d(),
              (null == i ? void 0 : i.fnOnClose) && i.fnOnClose();
          },
          B = () => {
            c && c.Close(), m();
          },
          p = n.cloneElement(e, { closeModal: B });
        if (w((o = o || (0, l.BL)(r)), r) && i && t) {
          if (i.bHideMainWindowForPopouts) {
            const e = n.createElement(
              l.e1,
              {
                className: "Hidden",
                onEscKeypress: !p.props.bDisableBackgroundDismiss && B,
              },
              n.createElement("div", null)
            );
            u = o.ShowModal(e);
          }
          const e = Object.assign(Object.assign({}, i), { fnOnClose: m }),
            d = new y(r, t, e, p, s, a);
          d.Show(), (c = d);
        } else c = o.ShowModal(p);
        return c;
      }
      function w(e, r) {
        return (
          (e = e || (0, l.BL)(r || window)), p.De.USE_POPUPS && e.BUsePopups()
        );
      }
      class y extends a.K3 {
        constructor(e, r, t, i, n, s) {
          super(r, {
            title: t.strTitle,
            html_class: "client_chat_frame fullheight ModalDialogPopup",
            body_class: "fullheight ModalDialogBody",
            owner_window: void 0,
            replace_existing_popup: !0,
            target_browser: n,
            availscreenwidth: e.screen.availWidth,
            availscreenheight: e.screen.availHeight,
          }),
            (this.m_windowOpener = e),
            (this.m_modalProps = t),
            (this.m_modalElement = i),
            (this.m_options = s);
        }
        Update(e) {
          (0, m.X)(!1, "NYI");
        }
        UpdateParamsBeforeShow(e) {
          var r, t, i;
          let n,
            s,
            a,
            o = this.m_modalProps.popupWidth || 500,
            l = this.m_modalProps.popupHeight || 400;
          if (
            p.De.IN_CLIENT &&
            (null ===
              (i =
                null ===
                  (t =
                    null === (r = this.m_windowOpener) || void 0 === r
                      ? void 0
                      : r.SteamClient) || void 0 === t
                  ? void 0
                  : t.Window) || void 0 === i
              ? void 0
              : i.GetBrowserID)
          )
            a = this.m_windowOpener.SteamClient.Window.GetBrowserID();
          else {
            let e = this.m_windowOpener.screen;
            (n = (e.availWidth - o) / 2), (s = (e.availHeight - l) / 2);
            let r = e;
            void 0 !== r.availLeft &&
              void 0 !== r.availTop &&
              ((n += r.availLeft), (s += r.availTop));
          }
          return Object.assign(Object.assign({}, e), {
            dimensions: { width: o, height: l, left: n, top: s },
            window_opener_id: a,
          });
        }
        OnLoad() {}
        OnResize() {}
        OnClose() {
          this.m_modalProps.fnOnClose && this.m_modalProps.fnOnClose(),
            s.unmountComponentAtNode(this.m_element);
        }
        Render(e, r) {
          if (
            (r.setAttribute("class", "fullheight popup_chat_frame"),
            this.m_modalElement)
          ) {
            const t = this.m_options ? this.m_options.bHideActions : void 0,
              i =
                this.m_options &&
                "number" == typeof this.m_options.nDragAreaHeight
                  ? { height: this.m_options.nDragAreaHeight }
                  : void 0;
            s.render(
              n.createElement(
                "div",
                { className: "PopupFullWindow", onContextMenu: o.T },
                n.createElement(d, {
                  hideMinMax: !0,
                  popup: e,
                  hideActions: t,
                  style: i,
                }),
                n.createElement(l.t9, { ModalManager: (0, l.BL)(e) }),
                this.m_modalElement
              ),
              r
            );
          }
        }
      }
    },
    13596: (e, r, t) => {
      t.d(r, { V: () => o });
      var i = t(67294),
        n = t(95598),
        s = t(50732),
        a = t.n(s);
      class o extends i.PureComponent {
        constructor(e) {
          super(e);
        }
        AddSizeClass(e) {
          "small" == this.props.size
            ? e.push(a().throbber_small)
            : "medium" == this.props.size
            ? e.push(a().throbber_medium)
            : "xlarge" == this.props.size
            ? e.push(a().throbber_xlarge)
            : "xxlarge" == this.props.size
            ? e.push(a().throbber_xxlarge)
            : e.push(a().throbber_large);
        }
        render() {
          let e = [a().LoadingWrapper, "SteamLogoThrobber"];
          this.AddSizeClass(e),
            void 0 === this.props.string && e.push(a().noString),
            this.props.className && e.push(this.props.className),
            this.props.static && e.push(a().Static);
          let r = i.createElement(
            "div",
            { className: e.join(" ") },
            i.createElement(
              "div",
              { className: a().Throbber },
              i.createElement(n.wUs, { className: a().base }),
              i.createElement(n.wUs, { className: a().blur })
            )
          );
          return i.createElement(
            "div",
            {
              className:
                "center" == this.props.position
                  ? a().throbber_center_wrapper
                  : "",
            },
            r,
            Boolean(this.props.string) &&
              i.createElement(
                "div",
                { className: a().ThrobberText },
                this.props.string
              )
          );
        }
      }
    },
    82946: (e, r, t) => {
      t(26149);
    },
    93976: (e, r, t) => {
      t.d(r, { l: () => a });
      t(26149);
      var i = t(9669),
        n = t.n(i),
        s = t(58114);
      function a(e) {
        if (n().isCancel(e))
          return { strErrorMsg: "Action Cancelled:" + e, errorCode: 52 };
        if (
          void 0 !== e.response &&
          e.response.data &&
          "object" == typeof e.response.data
        ) {
          if ("msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.msg,
              errorCode: e.response.data.success,
            };
          if ("err_msg" in e.response.data)
            return {
              strErrorMsg: e.response.data.err_msg,
              errorCode: e.response.data.success,
            };
          if ("message" in e.response.data)
            return {
              strErrorMsg: e.response.data.message,
              errorCode: e.response.data.success,
            };
        } else if ("object" == typeof e.data) {
          if ("msg" in e.data)
            return { strErrorMsg: e.data.msg, errorCode: e.data.success };
          if ("err_msg" in e.data)
            return { strErrorMsg: e.data.err_msg, errorCode: e.data.success };
          if ("message" in e.response.data)
            return { strErrorMsg: e.data.message, errorCode: e.data.success };
        } else {
          if (void 0 !== e.success && void 0 !== e.msg)
            return { strErrorMsg: e.msg, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.message)
            return { strErrorMsg: e.message, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.err_msg)
            return { strErrorMsg: e.err_msg, errorCode: e.success };
          if ("string" == typeof e && e.length > 1024)
            console.groupCollapsed(
              "GetMsgAndErrorCodeFromResponse cannot parse: "
            ),
              console.error(e),
              console.groupEnd();
          else {
            if ("object" == typeof e && e instanceof s.gA)
              return {
                strErrorMsg: "" + e.GetEResult(),
                errorCode: e.GetEResult(),
              };
            console.error("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
          }
        }
        return "object" == typeof e && "status" in e
          ? {
              strErrorMsg: "Unknown Error: " + e + "\nStatus Code:" + e.status,
              errorCode: 2,
            }
          : { strErrorMsg: "Unknown Error: " + e, errorCode: 2 };
      }
    },
    73604: (e, r, t) => {
      function i(e, r) {
        return e < r ? -1 : e > r ? 1 : 0;
      }
      function n(e, r) {
        return i(e.toLocaleLowerCase(), r.toLocaleLowerCase());
      }
      function s(e) {
        if (!e) return "";
        if (DOMParser) {
          return new DOMParser().parseFromString(e, "text/html").documentElement
            .textContent;
        }
        return e;
      }
      function a(e, r = "") {
        return e.replace(/\bhttps?:\/\/\S+/gi, r);
      }
      function o(e, r, t = !0) {
        let i = e.trim();
        if (((i = i.replace(t ? /\s+/g : /[ \t]+/g, " ")), i.length > r)) {
          i = i.substring(0, r);
          let e = i.replace(/^(.*([.!?])) .*$/, "$1"),
            n = e.length;
          (n < 0.6 * r || n == r) && (e = i.replace(/ [^ ]*$/, "...")),
            (i = t ? e.replace(/(\r\n|\n|\r)/gm, "") : e);
        }
        return i;
      }
      function l(e) {
        let r,
          t,
          i = 0;
        if (0 === e.length) return i;
        for (r = 0; r < e.length; r++)
          (t = e.charCodeAt(r)), (i = (i << 5) - i + t), (i |= 0);
        return i;
      }
      t.d(r, {
        HA: () => s,
        JD: () => l,
        W5: () => a,
        eT: () => i,
        oU: () => o,
        tN: () => n,
      });
    },
  },
]);
