/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    WOjH: function (e, r, t) {
      "use strict";
      t.d(r, "b", function () {
        return c;
      }),
        t.d(r, "a", function () {
          return y;
        }),
        t.d(r, "c", function () {
          return g;
        }),
        t.d(r, "d", function () {
          return C;
        });
      var i = t("hRO2"),
        n = t("3dpo");
      t("Nr4G");
      const a = i.Message;
      class s extends a {
        constructor(e = null) {
          super(),
            s.prototype.transactionid || n.a(s.M()),
            a.initialize(this, e, 0, -1, [18], null);
        }
        static M() {
          return (
            s.sm_m ||
              (s.sm_m = {
                proto: s,
                fields: {
                  transactionid: {
                    n: 1,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
                  },
                  packageid: { n: 2, br: n.d.readUint32, bw: n.h.writeUint32 },
                  purchase_status: {
                    n: 3,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  result_detail: {
                    n: 4,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  transaction_time: {
                    n: 5,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  payment_method: {
                    n: 6,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  base_price: {
                    n: 7,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
                  },
                  total_discount: {
                    n: 8,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
                  },
                  tax: {
                    n: 9,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
                  },
                  shipping: {
                    n: 10,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
                  },
                  currency_code: {
                    n: 11,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  country_code: {
                    n: 12,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  error_headline: {
                    n: 13,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  error_string: {
                    n: 14,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  error_link_text: {
                    n: 15,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  error_link_url: {
                    n: 16,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  error_appid: {
                    n: 17,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  line_items: { n: 18, c: o, r: !0, q: !0 },
                },
              }),
            s.sm_m
          );
        }
        static MBF() {
          return s.sm_mbf || (s.sm_mbf = n.e(s.M())), s.sm_mbf;
        }
        toObject(e = !1) {
          return s.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(s.M(), e, r);
        }
        static fromObject(e) {
          return n.c(s.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new s();
          return s.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(s.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(s.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_PurchaseReceiptInfo";
        }
      }
      class o extends a {
        constructor(e = null) {
          super(),
            o.prototype.packageid || n.a(o.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  packageid: { n: 1, br: n.d.readUint32, bw: n.h.writeUint32 },
                  appid: { n: 2, br: n.d.readUint32, bw: n.h.writeUint32 },
                  line_item_description: {
                    n: 3,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.e(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(o.M(), e, r);
        }
        static fromObject(e) {
          return n.c(o.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(o.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(o.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_PurchaseReceiptInfo_LineItem";
        }
      }
      class l extends a {
        constructor(e = null) {
          super(),
            l.prototype.purchase_result_details || n.a(l.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  purchase_result_details: {
                    n: 1,
                    br: n.d.readInt32,
                    bw: n.h.writeInt32,
                  },
                  purchase_receipt_info: { n: 2, c: s },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.e(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(l.M(), e, r);
        }
        static fromObject(e) {
          return n.c(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_RegisterCDKey_Response";
        }
      }
      class u extends a {
        constructor(e = null) {
          super(),
            u.prototype.tags || n.a(u.M()),
            a.initialize(this, e, 0, -1, [1], null);
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
          return u.sm_mbf || (u.sm_mbf = n.e(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(u.M(), e, r);
        }
        static fromObject(e) {
          return n.c(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetMostPopularTags_Response";
        }
      }
      class d extends a {
        constructor(e = null) {
          super(),
            d.prototype.tagid || n.a(d.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  tagid: { n: 1, br: n.d.readUint32, bw: n.h.writeUint32 },
                  name: { n: 2, br: n.d.readString, bw: n.h.writeString },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.e(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(d.M(), e, r);
        }
        static fromObject(e) {
          return n.c(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetMostPopularTags_Response_Tag";
        }
      }
      class c extends a {
        constructor(e = null) {
          super(),
            c.prototype.language || n.a(c.M()),
            a.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  language: { n: 1, br: n.d.readString, bw: n.h.writeString },
                  tagids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.d.readUint32,
                    bw: n.h.writeRepeatedUint32,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.e(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(c.M(), e, r);
        }
        static fromObject(e) {
          return n.c(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetLocalizedNameForTags_Request";
        }
      }
      class m extends a {
        constructor(e = null) {
          super(),
            m.prototype.tags || n.a(m.M()),
            a.initialize(this, e, 0, -1, [1], null);
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
          return m.sm_mbf || (m.sm_mbf = n.e(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(m.M(), e, r);
        }
        static fromObject(e) {
          return n.c(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetLocalizedNameForTags_Response";
        }
      }
      class B extends a {
        constructor(e = null) {
          super(),
            B.prototype.tagid || n.a(B.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  tagid: { n: 1, br: n.d.readUint32, bw: n.h.writeUint32 },
                  english_name: {
                    n: 2,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  name: { n: 3, br: n.d.readString, bw: n.h.writeString },
                  normalized_name: {
                    n: 4,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.e(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(B.M(), e, r);
        }
        static fromObject(e) {
          return n.c(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetLocalizedNameForTags_Response_Tag";
        }
      }
      class b extends a {
        constructor(e = null) {
          super(),
            b.prototype.os_win || n.a(b.M()),
            a.initialize(this, e, 0, -1, [10, 16], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  os_win: { n: 4, br: n.d.readBool, bw: n.h.writeBool },
                  os_mac: { n: 5, br: n.d.readBool, bw: n.h.writeBool },
                  os_linux: { n: 6, br: n.d.readBool, bw: n.h.writeBool },
                  full_controller_support: {
                    n: 7,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                  native_steam_controller: {
                    n: 8,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                  include_coming_soon: {
                    n: 9,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                  excluded_tagids: {
                    n: 10,
                    r: !0,
                    q: !0,
                    br: n.d.readUint32,
                    bw: n.h.writeRepeatedUint32,
                  },
                  exclude_early_access: {
                    n: 11,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                  exclude_videos: {
                    n: 12,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                  exclude_software: {
                    n: 13,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                  exclude_dlc: { n: 14, br: n.d.readBool, bw: n.h.writeBool },
                  exclude_soundtracks: {
                    n: 15,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                  featured_tagids: {
                    n: 16,
                    r: !0,
                    q: !0,
                    br: n.d.readUint32,
                    bw: n.h.writeRepeatedUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.e(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(b.M(), e, r);
        }
        static fromObject(e) {
          return n.c(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreDiscoveryQueueSettings";
        }
      }
      class y extends a {
        constructor(e = null) {
          super(),
            y.prototype.queue_type || n.a(y.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  queue_type: { n: 1, br: n.d.readEnum, bw: n.h.writeEnum },
                  country_code: {
                    n: 2,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  rebuild_queue: { n: 3, br: n.d.readBool, bw: n.h.writeBool },
                  settings_changed: {
                    n: 4,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                  settings: { n: 5, c: b },
                  rebuild_queue_if_stale: {
                    n: 6,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                  ignore_user_preferences: {
                    n: 8,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                  no_experimental_results: {
                    n: 9,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                  experimental_cohort: {
                    n: 10,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  debug_get_solr_query: {
                    n: 11,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = n.e(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(y.M(), e, r);
        }
        static fromObject(e) {
          return n.c(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueue_Request";
        }
      }
      class _ extends a {
        constructor(e = null) {
          super(),
            _.prototype.appids || n.a(_.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.d.readUint32,
                    bw: n.h.writeRepeatedUint32,
                  },
                  country_code: {
                    n: 2,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  settings: { n: 3, c: b },
                  skipped: { n: 4, br: n.d.readInt32, bw: n.h.writeInt32 },
                  exhausted: { n: 5, br: n.d.readBool, bw: n.h.writeBool },
                  experimental_cohort: {
                    n: 6,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  debug_solr_query: {
                    n: 7,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.e(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(_.M(), e, r);
        }
        static fromObject(e) {
          return n.c(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueue_Response";
        }
      }
      class w extends a {
        constructor(e = null) {
          super(),
            w.prototype.country_code || n.a(w.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  country_code: {
                    n: 1,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  settings: { n: 2, c: b },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.e(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(w.M(), e, r);
        }
        static fromObject(e) {
          return n.c(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetDiscoveryQueueSettings_Response";
        }
      }
      class g extends a {
        constructor(e = null) {
          super(),
            g.prototype.queue_type || n.a(g.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  queue_type: { n: 1, br: n.d.readEnum, bw: n.h.writeEnum },
                  appid: { n: 2, br: n.d.readUint32, bw: n.h.writeUint32 },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = n.e(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(g.M(), e, r);
        }
        static fromObject(e) {
          return n.c(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SkipDiscoveryQueueItem_Request";
        }
      }
      class f extends a {
        constructor(e = null) {
          super(), a.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new f();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_SkipDiscoveryQueueItem_Response";
        }
      }
      class p extends a {
        constructor(e = null) {
          super(),
            p.prototype.owned || n.a(p.M()),
            a.initialize(this, e, 0, -1, [5, 6, 7, 8, 10], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  owned: { n: 1, br: n.d.readBool, bw: n.h.writeBool },
                  wishlist: { n: 2, br: n.d.readBool, bw: n.h.writeBool },
                  ignored: { n: 3, br: n.d.readBool, bw: n.h.writeBool },
                  following: { n: 4, br: n.d.readBool, bw: n.h.writeBool },
                  in_queues: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: n.d.readEnum,
                    bw: n.h.writeRepeatedEnum,
                  },
                  queues_with_skip: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: n.d.readEnum,
                    bw: n.h.writeRepeatedEnum,
                  },
                  queue_items_remaining: {
                    n: 7,
                    r: !0,
                    q: !0,
                    br: n.d.readInt32,
                    bw: n.h.writeRepeatedInt32,
                  },
                  queue_items_next_appid: {
                    n: 8,
                    r: !0,
                    q: !0,
                    br: n.d.readUint32,
                    bw: n.h.writeRepeatedUint32,
                  },
                  temporarily_owned: {
                    n: 9,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                  queues: { n: 10, c: z, r: !0, q: !0 },
                  ignored_reason: {
                    n: 11,
                    br: n.d.readInt32,
                    bw: n.h.writeInt32,
                  },
                  beta_status: { n: 12, br: n.d.readEnum, bw: n.h.writeEnum },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.e(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(p.M(), e, r);
        }
        static fromObject(e) {
          return n.c(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserGameInterestState_Response";
        }
      }
      class z extends a {
        constructor(e = null) {
          super(),
            z.prototype.type || n.a(z.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  type: { n: 1, br: n.d.readEnum, bw: n.h.writeEnum },
                  skipped: { n: 2, br: n.d.readBool, bw: n.h.writeBool },
                  items_remaining: {
                    n: 3,
                    br: n.d.readInt32,
                    bw: n.h.writeInt32,
                  },
                  next_appid: { n: 4, br: n.d.readUint32, bw: n.h.writeUint32 },
                  experimental_cohort: {
                    n: 5,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = n.e(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(z.M(), e, r);
        }
        static fromObject(e) {
          return n.c(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetUserGameInterestState_Response_InQueue";
        }
      }
      class h extends a {
        constructor(e = null) {
          super(),
            h.prototype.primary_language || n.a(h.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  primary_language: {
                    n: 1,
                    br: n.d.readInt32,
                    bw: n.h.writeInt32,
                  },
                  secondary_languages: {
                    n: 2,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  platform_windows: {
                    n: 3,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                  platform_mac: { n: 4, br: n.d.readBool, bw: n.h.writeBool },
                  platform_linux: { n: 5, br: n.d.readBool, bw: n.h.writeBool },
                  hide_adult_content_violence: {
                    n: 6,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                  hide_adult_content_sex: {
                    n: 7,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                  timestamp_updated: {
                    n: 8,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  hide_store_broadcast: {
                    n: 9,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                  review_score_preference: {
                    n: 10,
                    br: n.d.readEnum,
                    bw: n.h.writeEnum,
                  },
                  timestamp_content_descriptor_preferences_updated: {
                    n: 11,
                    br: n.d.readInt32,
                    bw: n.h.writeInt32,
                  },
                  provide_deck_feedback: {
                    n: 12,
                    br: n.d.readEnum,
                    bw: n.h.writeEnum,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = n.e(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(h.M(), e, r);
        }
        static fromObject(e) {
          return n.c(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserPreferences";
        }
      }
      class M extends a {
        constructor(e = null) {
          super(),
            M.prototype.tags_to_exclude || n.a(M.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: { tags_to_exclude: { n: 1, c: S, r: !0, q: !0 } },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = n.e(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(M.M(), e, r);
        }
        static fromObject(e) {
          return n.c(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserTagPreferences";
        }
      }
      class S extends a {
        constructor(e = null) {
          super(),
            S.prototype.tagid || n.a(S.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  tagid: { n: 1, br: n.d.readUint32, bw: n.h.writeUint32 },
                  name: { n: 2, br: n.d.readString, bw: n.h.writeString },
                  timestamp_added: {
                    n: 3,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = n.e(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(S.M(), e, r);
        }
        static fromObject(e) {
          return n.c(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserTagPreferences_Tag";
        }
      }
      class R extends a {
        constructor(e = null) {
          super(),
            R.prototype.content_descriptors_to_exclude || n.a(R.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  content_descriptors_to_exclude: { n: 1, c: W, r: !0, q: !0 },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = n.e(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(R.M(), e, r);
        }
        static fromObject(e) {
          return n.c(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserContentDescriptorPreferences";
        }
      }
      class W extends a {
        constructor(e = null) {
          super(),
            W.prototype.content_descriptorid || n.a(W.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  content_descriptorid: {
                    n: 1,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  timestamp_added: {
                    n: 2,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = n.e(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(W.M(), e, r);
        }
        static fromObject(e) {
          return n.c(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_UserContentDescriptorPreferences_ContentDescriptor";
        }
      }
      class F extends a {
        constructor(e = null) {
          super(),
            F.prototype.preferences || n.a(F.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  preferences: { n: 1, c: h },
                  tag_preferences: { n: 2, c: M },
                  content_descriptor_preferences: { n: 3, c: R },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = n.e(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(F.M(), e, r);
        }
        static fromObject(e) {
          return n.c(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetStorePreferences_Response";
        }
      }
      class j extends a {
        constructor(e = null) {
          super(),
            j.prototype.trending_apps || n.a(j.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: { trending_apps: { n: 1, c: O, r: !0, q: !0 } },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = n.e(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(j.M(), e, r);
        }
        static fromObject(e) {
          return n.c(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTrendingAppsAmongFriends_Response";
        }
      }
      class O extends a {
        constructor(e = null) {
          super(),
            O.prototype.appid || n.a(O.M()),
            a.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  appid: { n: 1, br: n.d.readUint32, bw: n.h.writeUint32 },
                  steamids_top_friends: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.d.readUint64String,
                    bw: n.h.writeRepeatedUint64String,
                  },
                  total_friends: {
                    n: 3,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = n.e(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(O.M(), e, r);
        }
        static fromObject(e) {
          return n.c(O.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_GetTrendingAppsAmongFriends_Response_TrendingAppData";
        }
      }
      class v extends a {
        constructor(e = null) {
          super(), a.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new v();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_SetFeedback_Response";
        }
      }
      class T extends a {
        constructor(e = null) {
          super(),
            T.prototype.prompt || n.a(T.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  prompt: { n: 1, br: n.d.readBool, bw: n.h.writeBool },
                  feedback_eligible: {
                    n: 2,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                  existing_feedback: {
                    n: 3,
                    br: n.d.readEnum,
                    bw: n.h.writeEnum,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = n.e(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(T.M(), e, r);
        }
        static fromObject(e) {
          return n.c(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamDeckCompatibility_ShouldPrompt_Response";
        }
      }
      class U extends a {
        constructor(e = null) {
          super(),
            U.prototype.preferences || n.a(U.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  preferences: { n: 1, c: h },
                  tag_preferences: { n: 2, c: M },
                  content_descriptor_preferences: { n: 3, c: R },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = n.e(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(U.M(), e, r);
        }
        static fromObject(e) {
          return n.c(U.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(U.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(U.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStore_StorePreferencesChanged_Notification";
        }
      }
      var C, x;
      !(function (e) {
        (e.RegisterCDKey = function (e, r) {
          return e.SendMsg("Store.RegisterCDKey#1", r, l, { ePrivilege: 1 });
        }),
          (e.GetMostPopularTags = function (e, r) {
            return e.SendMsg("Store.GetMostPopularTags#1", r, u, {
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
            return e.SendMsg("Store.GetDiscoveryQueue#1", r, _, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetDiscoveryQueueSettings = function (e, r) {
            return e.SendMsg("Store.GetDiscoveryQueueSettings#1", r, w, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SkipDiscoveryQueueItem = function (e, r) {
            return e.SendMsg("Store.SkipDiscoveryQueueItem#1", r, f, {
              ePrivilege: 1,
            });
          }),
          (e.GetUserGameInterestState = function (e, r) {
            return e.SendMsg("Store.GetUserGameInterestState#1", r, p, {
              ePrivilege: 1,
            });
          }),
          (e.GetStorePreferences = function (e, r) {
            return e.SendMsg("Store.GetStorePreferences#1", r, F, {
              ePrivilege: 1,
            });
          }),
          (e.GetTrendingAppsAmongFriends = function (e, r) {
            return e.SendMsg("Store.GetTrendingAppsAmongFriends#1", r, j, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SetCompatibilityFeedback = function (e, r) {
            return e.SendMsg("Store.SetCompatibilityFeedback#1", r, v, {
              ePrivilege: 1,
            });
          }),
          (e.ShouldPromptForCompatibilityFeedback = function (e, r) {
            return e.SendMsg(
              "Store.ShouldPromptForCompatibilityFeedback#1",
              r,
              T,
              { ePrivilege: 1 }
            );
          });
      })(C || (C = {})),
        (function (e) {
          e.NotifyStorePreferencesChangedHandler = {
            name: "StoreClient.NotifyStorePreferencesChanged#1",
            request: U,
          };
        })(x || (x = {}));
    },
  },
]);
