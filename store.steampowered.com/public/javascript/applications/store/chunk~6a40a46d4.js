/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7898],
  {
    10767: (e, r, t) => {
      t.d(r, {
        Ew: () => p,
        HU: () => m,
        cJ: () => _,
        d6: () => x,
        iM: () => X,
      });
      var i = t(33019),
        n = t(40110),
        a = t(5194);
      t(21205);
      const s = i.Message;
      class o extends s {
        constructor(e = null) {
          super(),
            o.prototype.transactionid || n.aR(o.M()),
            s.initialize(this, e, 0, -1, [18], null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
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
                  line_items: { n: 18, c: l, r: !0, q: !0 },
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
          return "CStore_PurchaseReceiptInfo";
        }
      }
      class l extends s {
        constructor(e = null) {
          super(),
            l.prototype.packageid || n.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
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
          return "CStore_PurchaseReceiptInfo_LineItem";
        }
      }
      class c extends s {
        constructor(e = null) {
          super(),
            c.prototype.purchase_result_details || n.aR(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  purchase_result_details: {
                    n: 1,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  purchase_receipt_info: { n: 2, c: o },
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
          return "CStore_RegisterCDKey_Response";
        }
      }
      class u extends s {
        constructor(e = null) {
          super(),
            u.prototype.tags || n.aR(u.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: { tags: { n: 1, c: d, r: !0, q: !0 } },
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
          return "CStore_GetMostPopularTags_Response";
        }
      }
      class d extends s {
        constructor(e = null) {
          super(),
            d.prototype.tagid || n.aR(d.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  tagid: { n: 1, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  name: { n: 2, br: n.FE.readString, bw: n.Xc.writeString },
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
          return "CStore_GetMostPopularTags_Response_Tag";
        }
      }
      class m extends s {
        constructor(e = null) {
          super(),
            m.prototype.language || n.aR(m.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
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
          return "CStore_GetLocalizedNameForTags_Request";
        }
      }
      class B extends s {
        constructor(e = null) {
          super(),
            B.prototype.tags || n.aR(B.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: { tags: { n: 1, c: b, r: !0, q: !0 } },
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
          return "CStore_GetLocalizedNameForTags_Response";
        }
      }
      class b extends s {
        constructor(e = null) {
          super(),
            b.prototype.tagid || n.aR(b.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
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
          return "CStore_GetLocalizedNameForTags_Response_Tag";
        }
      }
      class y extends s {
        constructor(e = null) {
          super(),
            y.prototype.os_win || n.aR(y.M()),
            s.initialize(this, e, 0, -1, [10, 16], null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
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
          return "CStoreDiscoveryQueueSettings";
        }
      }
      class _ extends s {
        constructor(e = null) {
          super(),
            _.prototype.queue_type || n.aR(_.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  queue_type: { n: 1, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  country_code: {
                    n: 2,
                    br: n.FE.readString,
                    bw: n.Xc.writeString,
                  },
                  rebuild_queue: {
                    n: 3,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  settings_changed: {
                    n: 4,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  settings: { n: 5, c: y },
                  rebuild_queue_if_stale: {
                    n: 6,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  ignore_user_preferences: {
                    n: 8,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  no_experimental_results: {
                    n: 9,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  experimental_cohort: {
                    n: 10,
                    br: n.FE.readUint32,
                    bw: n.Xc.writeUint32,
                  },
                  debug_get_solr_query: {
                    n: 11,
                    br: n.FE.readBool,
                    bw: n.Xc.writeBool,
                  },
                  store_page_filter: { n: 12, c: a._v },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(_.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueue_Request";
        }
      }
      class w extends s {
        constructor(e = null) {
          super(),
            w.prototype.appids || n.aR(w.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
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
                  settings: { n: 3, c: y },
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
                  settings: { n: 2, c: y },
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
      class p extends s {
        constructor(e = null) {
          super(),
            p.prototype.queue_type || n.aR(p.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  queue_type: { n: 1, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  appid: { n: 2, br: n.FE.readUint32, bw: n.Xc.writeUint32 },
                  store_page_filter: { n: 3, c: a._v },
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
          return "CStore_SkipDiscoveryQueueItem_Request";
        }
      }
      class F extends s {
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new F();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SkipDiscoveryQueueItem_Response";
        }
      }
      class z extends s {
        constructor(e = null) {
          super(),
            z.prototype.owned || n.aR(z.M()),
            s.initialize(this, e, 0, -1, [5, 6, 7, 8, 10], null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
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
                  queues: { n: 10, c: f, r: !0, q: !0 },
                  ignored_reason: {
                    n: 11,
                    br: n.FE.readInt32,
                    bw: n.Xc.writeInt32,
                  },
                  beta_status: { n: 12, br: n.FE.readEnum, bw: n.Xc.writeEnum },
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
          return "CStore_GetUserGameInterestState_Response";
        }
      }
      class f extends s {
        constructor(e = null) {
          super(),
            f.prototype.type || n.aR(f.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
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
          return "CStore_GetUserGameInterestState_Response_InQueue";
        }
      }
      class M extends s {
        constructor(e = null) {
          super(),
            M.prototype.primary_language || n.aR(M.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
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
          return "CStore_UserPreferences";
        }
      }
      class R extends s {
        constructor(e = null) {
          super(),
            R.prototype.tags_to_exclude || n.aR(R.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: { tags_to_exclude: { n: 1, c: S, r: !0, q: !0 } },
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
          return "CStore_UserTagPreferences";
        }
      }
      class S extends s {
        constructor(e = null) {
          super(),
            S.prototype.tagid || n.aR(S.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
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
          return "CStore_UserTagPreferences_Tag";
        }
      }
      class h extends s {
        constructor(e = null) {
          super(),
            h.prototype.content_descriptors_to_exclude || n.aR(h.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  content_descriptors_to_exclude: { n: 1, c: W, r: !0, q: !0 },
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
          return "CStore_UserContentDescriptorPreferences";
        }
      }
      class W extends s {
        constructor(e = null) {
          super(),
            W.prototype.content_descriptorid || n.aR(W.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
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
          return "CStore_UserContentDescriptorPreferences_ContentDescriptor";
        }
      }
      class E extends s {
        constructor(e = null) {
          super(),
            E.prototype.preferences || n.aR(E.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  preferences: { n: 1, c: M },
                  tag_preferences: { n: 2, c: R },
                  content_descriptor_preferences: { n: 3, c: h },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = n.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(E.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(E.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(E.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetStorePreferences_Response";
        }
      }
      class T extends s {
        constructor(e = null) {
          super(),
            T.prototype.trending_apps || n.aR(T.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: { trending_apps: { n: 1, c: j, r: !0, q: !0 } },
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
          return "CStore_GetTrendingAppsAmongFriends_Response";
        }
      }
      class j extends s {
        constructor(e = null) {
          super(),
            j.prototype.appid || n.aR(j.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
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
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = n.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(j.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTrendingAppsAmongFriends_Response_TrendingAppData";
        }
      }
      class O extends s {
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new O();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_SetFeedback_Response";
        }
      }
      class v extends s {
        constructor(e = null) {
          super(),
            v.prototype.prompt || n.aR(v.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
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
          return "CSteamDeckCompatibility_ShouldPrompt_Response";
        }
      }
      class X extends s {
        constructor(e = null) {
          super(),
            X.prototype.steamid || n.aR(X.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.FE.readFixed64String,
                    bw: n.Xc.writeFixed64String,
                  },
                  queue_type: { n: 2, br: n.FE.readEnum, bw: n.Xc.writeEnum },
                  store_page_filter: { n: 3, c: a._v },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = n.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(X.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new X();
          return X.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(X.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(X.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSkippedApps_Request";
        }
      }
      class U extends s {
        constructor(e = null) {
          super(),
            U.prototype.appids || n.aR(U.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
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
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = n.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(U.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(U.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(U.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSkippedApps_Response";
        }
      }
      class C extends s {
        constructor(e = null) {
          super(),
            C.prototype.preferences || n.aR(C.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  preferences: { n: 1, c: M },
                  tag_preferences: { n: 2, c: R },
                  content_descriptor_preferences: { n: 3, c: h },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = n.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return n.TA(C.M(), e, r);
        }
        static fromObject(e) {
          return n.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.F(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.l2(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_StorePreferencesChanged_Notification";
        }
      }
      var x, D;
      !(function (e) {
        (e.RegisterCDKey = function (e, r) {
          return e.SendMsg("Store.RegisterCDKey#1", r, c, { ePrivilege: 1 });
        }),
          (e.GetMostPopularTags = function (e, r) {
            return e.SendMsg("Store.GetMostPopularTags#1", r, u, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetLocalizedNameForTags = function (e, r) {
            return e.SendMsg("Store.GetLocalizedNameForTags#1", r, B, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetDiscoveryQueue = function (e, r) {
            return e.SendMsg("Store.GetDiscoveryQueue#1", r, w, {
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
            return e.SendMsg("Store.SkipDiscoveryQueueItem#1", r, F, {
              ePrivilege: 1,
            });
          }),
          (e.GetUserGameInterestState = function (e, r) {
            return e.SendMsg("Store.GetUserGameInterestState#1", r, z, {
              ePrivilege: 1,
            });
          }),
          (e.GetDiscoveryQueueSkippedApps = function (e, r) {
            return e.SendMsg("Store.GetDiscoveryQueueSkippedApps#1", r, U, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetStorePreferences = function (e, r) {
            return e.SendMsg("Store.GetStorePreferences#1", r, E, {
              ePrivilege: 1,
            });
          }),
          (e.GetTrendingAppsAmongFriends = function (e, r) {
            return e.SendMsg("Store.GetTrendingAppsAmongFriends#1", r, T, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SetCompatibilityFeedback = function (e, r) {
            return e.SendMsg("Store.SetCompatibilityFeedback#1", r, O, {
              ePrivilege: 1,
            });
          }),
          (e.ShouldPromptForCompatibilityFeedback = function (e, r) {
            return e.SendMsg(
              "Store.ShouldPromptForCompatibilityFeedback#1",
              r,
              v,
              { ePrivilege: 1 }
            );
          });
      })(x || (x = {})),
        (function (e) {
          e.NotifyStorePreferencesChangedHandler = {
            name: "StoreClient.NotifyStorePreferencesChanged#1",
            request: C,
          };
        })(D || (D = {}));
    },
  },
]);
