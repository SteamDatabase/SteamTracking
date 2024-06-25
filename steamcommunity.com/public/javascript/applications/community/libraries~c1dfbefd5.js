/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [3801],
  {
    38079: (e, r, t) => {
      t.d(r, { AY: () => l, KQ: () => c, _v: () => n, q8: () => o });
      var i = t(10059),
        a = t(39087);
      const s = i.Message;
      class n extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            n.prototype.sale_filter || a.aR(n.M()),
            s.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            n.sm_m ||
              (n.sm_m = {
                proto: n,
                fields: {
                  sale_filter: { n: 1, c },
                  content_hub_filter: { n: 2, c: l },
                  store_filters: { n: 3, c: m, r: !0, q: !0 },
                },
              }),
            n.sm_m
          );
        }
        static MBF() {
          return n.sm_mbf || (n.sm_mbf = a.Bh(n.M())), n.sm_mbf;
        }
        toObject(e = !1) {
          return n.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(n.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(n.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new n();
          return n.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(n.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(n.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return n.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter";
        }
      }
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.sale_tagid || a.aR(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  sale_tagid: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = a.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(c.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_SalePageFilter";
        }
      }
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.hub_type || a.aR(l.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  hub_type: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  hub_category: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  hub_tagid: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  discount_filter: {
                    n: 4,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  optin: { n: 5, c: o },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = a.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(l.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_ContentHubFilter";
        }
      }
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.name || a.aR(o.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  name: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  optin_tagid: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  prune_tagid: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  optin_only: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = a.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(o.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(o.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(o.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_ContentHubFilter_OptInInfo";
        }
      }
      class m extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.filter_json || a.aR(m.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  filter_json: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  cache_key: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = a.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(m.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_StoreFilter";
        }
      }
    },
    23309: (e, r, t) => {
      t.d(r, { n7: () => B, z4: () => l });
      var i = t(10059),
        a = t(39087),
        s = t(79545),
        n = t(80002);
      const c = i.Message;
      class l extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.request || a.aR(l.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  request: { n: 1, c: n.eK },
                  include_unpublished: {
                    n: 2,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = a.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(l.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerStoreBrowse_GetItems_Request";
        }
      }
      class o extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.ids || a.aR(o.M()),
            c.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: { ids: { n: 1, c: n.oY, r: !0, q: !0 } },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = a.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(o.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(o.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(o.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerStoreBrowse_GetCountryRestrictions_Request";
        }
      }
      class m extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.results || a.aR(m.M()),
            c.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  results: { n: 1, c: u, r: !0, q: !0 },
                  no_info: { n: 2, c: n.oY, r: !0, q: !0 },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = a.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(m.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerStoreBrowse_GetCountryRestrictions_Response";
        }
      }
      class u extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.id || a.aR(u.M()),
            c.initialize(this, e, 0, -1, [3, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  id: { n: 1, c: n.oY },
                  no_restrictions: {
                    n: 2,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  allowed_countries: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: a.FE.readString,
                    bw: a.Xc.writeRepeatedString,
                  },
                  restricted_countries: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: a.FE.readString,
                    bw: a.Xc.writeRepeatedString,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = a.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(u.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerStoreBrowse_GetCountryRestrictions_Response_CCountryRestrictions";
        }
      }
      var B;
      !(function (e) {
        (e.GetItems = function (e, r) {
          return e.SendMsg(
            "PartnerStoreBrowse.GetItems#1",
            (0, s.MD)(l, r),
            n.cR,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.GetCountryRestrictions = function (e, r) {
            return e.SendMsg(
              "PartnerStoreBrowse.GetCountryRestrictions#1",
              (0, s.MD)(o, r),
              m,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          });
      })(B || (B = {}));
    },
    80002: (e, r, t) => {
      t.d(r, {
        Qn: () => j,
        VJ: () => V,
        VL: () => o,
        WJ: () => X,
        _A: () => G,
        cR: () => U,
        eK: () => C,
        lj: () => K,
        oY: () => v,
      });
      var i = t(10059),
        a = t(39087),
        s = t(79545),
        n = t(38079);
      const c = i.Message;
      class l extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.type || a.aR(l.M()),
            c.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  type: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  rating: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                  descriptors: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: a.FE.readString,
                    bw: a.Xc.writeRepeatedString,
                  },
                  interactive_elements: {
                    n: 4,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  required_age: {
                    n: 10,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  use_age_gate: {
                    n: 11,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  image_url: {
                    n: 20,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  image_target: {
                    n: 21,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = a.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(l.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreGameRating";
        }
      }
      class o extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.item_type || a.aR(o.M()),
            c.initialize(
              this,
              e,
              0,
              -1,
              [11, 12, 20, 21, 25, 41, 42, 52],
              null,
            );
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  item_type: { n: 1, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  id: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  success: { n: 3, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  visible: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                  unvailable_for_country_restriction: {
                    n: 5,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  name: { n: 6, br: a.FE.readString, bw: a.Xc.writeString },
                  store_url_path: {
                    n: 7,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  appid: { n: 9, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  type: { n: 10, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  included_types: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                  included_appids: {
                    n: 12,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  is_free: { n: 13, br: a.FE.readBool, bw: a.Xc.writeBool },
                  is_early_access: {
                    n: 14,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  related_items: { n: 15, c: m },
                  included_items: { n: 16, c: u },
                  content_descriptorids: {
                    n: 20,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                  tagids: {
                    n: 21,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  categories: { n: 22, c: B },
                  reviews: { n: 23, c: d },
                  basic_info: { n: 24, c: _ },
                  tags: { n: 25, c: y, r: !0, q: !0 },
                  assets: { n: 30, c: f },
                  release: { n: 31, c: g },
                  platforms: { n: 32, c: F },
                  game_rating: { n: 33, c: l },
                  best_purchase_option: { n: 40, c: z },
                  purchase_options: { n: 41, c: z, r: !0, q: !0 },
                  accessories: { n: 42, c: z, r: !0, q: !0 },
                  self_purchase_option: { n: 43, c: z },
                  screenshots: { n: 50, c: S },
                  trailers: { n: 51, c: W },
                  supported_languages: { n: 52, c: I, r: !0, q: !0 },
                  store_url_path_override: {
                    n: 53,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  free_weekend: { n: 54, c: O },
                  unlisted: { n: 55, br: a.FE.readBool, bw: a.Xc.writeBool },
                  game_count: {
                    n: 56,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  internal_name: {
                    n: 57,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  full_description: {
                    n: 58,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  is_free_temporarily: {
                    n: 59,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  assets_without_overrides: { n: 60, c: f },
                  user_filter_failure: { n: 70, c: J },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = a.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(o.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(o.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(o.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem";
        }
      }
      class m extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.parent_appid || a.aR(m.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  parent_appid: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = a.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(m.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_RelatedItems";
        }
      }
      class u extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.included_apps || a.aR(u.M()),
            c.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  included_apps: { n: 1, c: o, r: !0, q: !0 },
                  included_packages: { n: 2, c: o, r: !0, q: !0 },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = a.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(u.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_IncludedItems";
        }
      }
      class B extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.supported_player_categoryids || a.aR(B.M()),
            c.initialize(this, e, 0, -1, [2, 3, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  supported_player_categoryids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  feature_categoryids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  controller_categoryids: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = a.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(B.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Categories";
        }
      }
      class d extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.summary_filtered || a.aR(d.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  summary_filtered: { n: 1, c: b },
                  summary_unfiltered: { n: 2, c: b },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = a.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(d.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Reviews";
        }
      }
      class b extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.review_count || a.aR(b.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  review_count: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  percent_positive: {
                    n: 2,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  review_score: { n: 3, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  review_score_label: {
                    n: 4,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = a.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(b.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Reviews_StoreReviewSummary";
        }
      }
      class _ extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.short_description || a.aR(_.M()),
            c.initialize(this, e, 0, -1, [2, 3, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  short_description: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  publishers: { n: 2, c: w, r: !0, q: !0 },
                  developers: { n: 3, c: w, r: !0, q: !0 },
                  franchises: { n: 4, c: w, r: !0, q: !0 },
                  capsule_headline: {
                    n: 5,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = a.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(_.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_BasicInfo";
        }
      }
      class w extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.name || a.aR(w.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  name: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  creator_clan_account_id: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = a.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(w.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_BasicInfo_CreatorHomeLink";
        }
      }
      class y extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.tagid || a.aR(y.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  tagid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  weight: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = a.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(y.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Tag";
        }
      }
      class f extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.asset_url_format || a.aR(f.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  asset_url_format: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  main_capsule: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  small_capsule: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  header: { n: 4, br: a.FE.readString, bw: a.Xc.writeString },
                  package_header: {
                    n: 5,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  page_background: {
                    n: 6,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  hero_capsule: {
                    n: 7,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  hero_capsule_2x: {
                    n: 8,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  library_capsule: {
                    n: 9,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  library_capsule_2x: {
                    n: 10,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  library_hero: {
                    n: 11,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  library_hero_2x: {
                    n: 12,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  community_icon: {
                    n: 13,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  clan_avatar: {
                    n: 14,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = a.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(f.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Assets";
        }
      }
      class g extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.steam_release_date || a.aR(g.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  steam_release_date: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  original_release_date: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  original_steam_release_date: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  is_coming_soon: {
                    n: 4,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  is_preload: { n: 5, br: a.FE.readBool, bw: a.Xc.writeBool },
                  custom_release_date_message: {
                    n: 6,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  is_abridged_release_date: {
                    n: 7,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  coming_soon_display: {
                    n: 8,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  is_early_access: {
                    n: 10,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  mac_release_date: {
                    n: 20,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  linux_release_date: {
                    n: 21,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = a.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(g.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_ReleaseInfo";
        }
      }
      class F extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.windows || a.aR(F.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  windows: { n: 1, br: a.FE.readBool, bw: a.Xc.writeBool },
                  mac: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                  steamos_linux: {
                    n: 3,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  vr_support: { n: 10, c: p },
                  steam_deck_compat_category: {
                    n: 11,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = a.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(F.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Platforms";
        }
      }
      class p extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.vrhmd || a.aR(p.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  vrhmd: { n: 1, br: a.FE.readBool, bw: a.Xc.writeBool },
                  vrhmd_only: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                  htc_vive: { n: 40, br: a.FE.readBool, bw: a.Xc.writeBool },
                  oculus_rift: { n: 41, br: a.FE.readBool, bw: a.Xc.writeBool },
                  windows_mr: { n: 42, br: a.FE.readBool, bw: a.Xc.writeBool },
                  valve_index: { n: 43, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = a.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(p.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Platforms_VRSupport";
        }
      }
      class z extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.packageid || a.aR(z.M()),
            c.initialize(this, e, 0, -1, [20, 21, 22], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  packageid: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  bundleid: { n: 2, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  purchase_option_name: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  final_price_in_cents: {
                    n: 5,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  original_price_in_cents: {
                    n: 6,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  user_final_price_in_cents: {
                    n: 7,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  formatted_final_price: {
                    n: 8,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  formatted_original_price: {
                    n: 9,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  discount_pct: {
                    n: 10,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  user_discount_pct: {
                    n: 11,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  bundle_discount_pct: {
                    n: 12,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  active_discounts: { n: 20, c: M, r: !0, q: !0 },
                  user_active_discounts: { n: 21, c: M, r: !0, q: !0 },
                  inactive_discounts: { n: 22, c: M, r: !0, q: !0 },
                  user_can_purchase: {
                    n: 30,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  user_can_purchase_as_gift: {
                    n: 31,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  is_commercial_license: {
                    n: 40,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  should_suppress_discount_pct: {
                    n: 41,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  hide_discount_pct_for_compliance: {
                    n: 42,
                    d: !1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  included_game_count: {
                    n: 43,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  lowest_recent_price_in_cents: {
                    n: 44,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  requires_shipping: {
                    n: 45,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  recurrence_info: { n: 46, c: R },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = a.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(z.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_PurchaseOption";
        }
      }
      class M extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.discount_amount || a.aR(M.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  discount_amount: {
                    n: 1,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  discount_description: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  discount_end_date: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = a.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(M.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_PurchaseOption_Discount";
        }
      }
      class R extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.packageid || a.aR(R.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  packageid: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  billing_agreement_type: {
                    n: 2,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  renewal_time_unit: {
                    n: 3,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  renewal_time_period: {
                    n: 4,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = a.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(R.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_PurchaseOption_RecurrenceInfo";
        }
      }
      class S extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.all_ages_screenshots || a.aR(S.M()),
            c.initialize(this, e, 0, -1, [2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  all_ages_screenshots: { n: 2, c: h, r: !0, q: !0 },
                  mature_content_screenshots: { n: 3, c: h, r: !0, q: !0 },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = a.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(S.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Screenshots";
        }
      }
      class h extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.filename || a.aR(h.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  filename: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  ordinal: { n: 2, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = a.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(h.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Screenshots_Screenshot";
        }
      }
      class W extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.highlights || a.aR(W.M()),
            c.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  highlights: { n: 1, c: T, r: !0, q: !0 },
                  other_trailers: { n: 2, c: T, r: !0, q: !0 },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = a.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(W.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Trailers";
        }
      }
      class E extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.filename || a.aR(E.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  filename: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  type: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = a.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(E.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(E.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(E.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Trailers_VideoSource";
        }
      }
      class T extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.trailer_name || a.aR(T.M()),
            c.initialize(this, e, 0, -1, [3, 4, 5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  trailer_name: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  trailer_url_format: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  trailer_480p: { n: 3, c: E, r: !0, q: !0 },
                  trailer_max: { n: 4, c: E, r: !0, q: !0 },
                  microtrailer: { n: 5, c: E, r: !0, q: !0 },
                  screenshot_medium: {
                    n: 10,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  screenshot_full: {
                    n: 11,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  trailer_base_id: {
                    n: 12,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = a.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(T.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Trailers_Trailer";
        }
      }
      class I extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.elanguage || a.aR(I.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  elanguage: {
                    n: 1,
                    d: -1,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  eadditionallanguage: {
                    n: 5,
                    d: -1,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  supported: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                  full_audio: { n: 3, br: a.FE.readBool, bw: a.Xc.writeBool },
                  subtitles: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = a.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(I.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(I.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(I.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_SupportedLanguage";
        }
      }
      class O extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.start_time || a.aR(O.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  start_time: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  end_time: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  text: { n: 3, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = a.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(O.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_FreeWeekend";
        }
      }
      class j extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.include_assets || a.aR(j.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  include_assets: {
                    n: 1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  include_release: {
                    n: 2,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  include_platforms: {
                    n: 3,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  include_all_purchase_options: {
                    n: 4,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  include_screenshots: {
                    n: 5,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  include_trailers: {
                    n: 6,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  include_ratings: {
                    n: 7,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  include_tag_count: {
                    n: 8,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  include_reviews: {
                    n: 9,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  include_basic_info: {
                    n: 10,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  include_supported_languages: {
                    n: 11,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  include_full_description: {
                    n: 12,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  include_included_items: {
                    n: 13,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  included_item_data_request: { n: 14, c: j },
                  include_assets_without_overrides: {
                    n: 15,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  apply_user_filters: {
                    n: 16,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = a.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(j.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreBrowseItemDataRequest";
        }
      }
      class X extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.language || a.aR(X.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  language: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  elanguage: { n: 2, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  country_code: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  steam_realm: {
                    n: 4,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = a.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(X.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new X();
          return X.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(X.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(X.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreBrowseContext";
        }
      }
      class v extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.appid || a.aR(v.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  packageid: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  bundleid: { n: 3, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  tagid: { n: 4, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  creatorid: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  hubcategoryid: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = a.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(v.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItemID";
        }
      }
      class C extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.ids || a.aR(C.M()),
            c.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  ids: { n: 1, c: v, r: !0, q: !0 },
                  context: { n: 2, c: X },
                  data_request: { n: 3, c: j },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = a.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(C.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetItems_Request";
        }
      }
      class U extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.store_items || a.aR(U.M()),
            c.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: { store_items: { n: 1, c: o, r: !0, q: !0 } },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = a.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(U.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(U.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(U.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetItems_Response";
        }
      }
      class D extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.language || a.aR(D.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  language: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  elanguage: {
                    n: 2,
                    d: -1,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = a.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(D.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new D();
          return D.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(D.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(D.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetStoreCategories_Request";
        }
      }
      class q extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.categories || a.aR(q.M()),
            c.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: { categories: { n: 1, c: x, r: !0, q: !0 } },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = a.Bh(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(q.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetStoreCategories_Response";
        }
      }
      class x extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.categoryid || a.aR(x.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  categoryid: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  type: { n: 2, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  internal_name: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  display_name: {
                    n: 4,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  image_url: {
                    n: 5,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  show_in_search: {
                    n: 6,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  computed: { n: 7, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = a.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(x.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(x.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(x.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetStoreCategories_Response_Category";
        }
      }
      class A extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.context || a.aR(A.M()),
            c.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  context: { n: 1, c: X },
                  store_page_filter: { n: 2, c: n._v },
                  appids: { n: 3, c: v, r: !0, q: !0 },
                  steamid: {
                    n: 4,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = a.Bh(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(A.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(A.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new A();
          return A.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(A.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(A.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForApps_Request";
        }
      }
      class N extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.dlc_data || a.aR(N.M()),
            c.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  dlc_data: { n: 1, c: P, r: !0, q: !0 },
                  playtime: { n: 2, c: k, r: !0, q: !0 },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = a.Bh(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(N.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(N.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new N();
          return N.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(N.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(N.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForApps_Response";
        }
      }
      class P extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.appid || a.aR(P.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  parentappid: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  release_date: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  coming_soon: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                  price: {
                    n: 5,
                    br: a.FE.readInt64String,
                    bw: a.Xc.writeInt64String,
                  },
                  discount: { n: 6, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  free: { n: 7, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = a.Bh(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(P.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(P.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(P.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(P.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForApps_Response_DLCData";
        }
      }
      class k extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.appid || a.aR(k.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  playtime: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  last_played: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = a.Bh(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(k.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new k();
          return k.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(k.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(k.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForApps_Response_PlaytimeForApp";
        }
      }
      class G extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.context || a.aR(G.M()),
            c.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  context: { n: 1, c: X },
                  appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  flavor: { n: 3, br: a.FE.readString, bw: a.Xc.writeString },
                  count: { n: 4, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  store_page_filter: { n: 5, c: n._v },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = a.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(G.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(G.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(G.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForAppsSolr_Request";
        }
      }
      class Q extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.dlc_lists || a.aR(Q.M()),
            c.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: { dlc_lists: { n: 1, c: L, r: !0, q: !0 } },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = a.Bh(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Q.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Q();
          return Q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Q.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForAppsSolr_Response";
        }
      }
      class L extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.parent_appid || a.aR(L.M()),
            c.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  parent_appid: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  dlc_appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = a.Bh(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(L.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(L.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new L();
          return L.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(L.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(L.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForAppsSolr_Response_DLCList";
        }
      }
      class K extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.packageid || a.aR(K.M()),
            c.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  packageid: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  context: { n: 2, c: X },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = a.Bh(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(K.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(K.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new K();
          return K.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(K.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(K.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetHardwareItems_Request";
        }
      }
      class Y extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.packageid || a.aR(Y.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  packageid: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  inventory_available: {
                    n: 3,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  high_pending_orders: {
                    n: 4,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  account_restricted_from_purchasing: {
                    n: 5,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  requires_reservation: {
                    n: 6,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  rtime_estimated_notification: {
                    n: 7,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  notificaton_token: {
                    n: 8,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  reservation_state: {
                    n: 9,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  expired: { n: 10, br: a.FE.readBool, bw: a.Xc.writeBool },
                  time_expires: {
                    n: 11,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  time_reserved: {
                    n: 12,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  allow_quantity_purchase: {
                    n: 13,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  max_quantity_per_purchase: {
                    n: 14,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  allow_purchase_in_country: {
                    n: 15,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  estimated_delivery_soonest_business_days: {
                    n: 17,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  estimated_delivery_latest_business_days: {
                    n: 18,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = a.Bh(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Y.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Y();
          return Y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CHardwarePackageDetails";
        }
      }
      class H extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.details || a.aR(H.M()),
            c.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: { details: { n: 1, c: Y, r: !0, q: !0 } },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = a.Bh(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(H.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(H.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new H();
          return H.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(H.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(H.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetHardwareItems_Response";
        }
      }
      class J extends c {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.filter_failure || a.aR(J.M()),
            c.initialize(this, e, 0, -1, [21, 30], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  filter_failure: {
                    n: 1,
                    d: 0,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  already_owned: {
                    n: 5,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  on_wishlist: { n: 6, br: a.FE.readBool, bw: a.Xc.writeBool },
                  ignored: { n: 7, br: a.FE.readBool, bw: a.Xc.writeBool },
                  not_in_users_language: {
                    n: 10,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  not_on_users_platform: {
                    n: 11,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  demo_for_owned_game: {
                    n: 12,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  dlc_for_unowned_game: {
                    n: 13,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  nonpreferred_product_type: {
                    n: 20,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  excluded_tagids: {
                    n: 21,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                  excluded_content_descriptorids: {
                    n: 30,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = a.Bh(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(J.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(J.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new J();
          return J.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(J.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(J.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreBrowseFilterFailure";
        }
      }
      var V;
      !(function (e) {
        (e.GetItems = function (e, r) {
          return e.SendMsg("StoreBrowse.GetItems#1", (0, s.MD)(C, r), U, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.GetStoreCategories = function (e, r) {
            return e.SendMsg(
              "StoreBrowse.GetStoreCategories#1",
              (0, s.MD)(D, r),
              q,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetDLCForApps = function (e, r) {
            return e.SendMsg(
              "StoreBrowse.GetDLCForApps#1",
              (0, s.MD)(A, r),
              N,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetDLCForAppsSolr = function (e, r) {
            return e.SendMsg(
              "StoreBrowse.GetDLCForAppsSolr#1",
              (0, s.MD)(G, r),
              Q,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetHardwareItems = function (e, r) {
            return e.SendMsg(
              "StoreBrowse.GetHardwareItems#1",
              (0, s.MD)(K, r),
              H,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          });
      })(V || (V = {}));
    },
    44922: (e, r, t) => {
      t.d(r, { $2: () => d, Ax: () => R, JJ: () => F, e8: () => w });
      var i = t(10059),
        a = t(39087),
        s = t(79545),
        n = t(38079),
        c = t(80002);
      const l = i.Message;
      class o extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.released_only || a.aR(o.M()),
            l.initialize(this, e, 0, -1, [10, 11, 15, 16, 45], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  released_only: {
                    n: 1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  coming_soon_only: {
                    n: 2,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  type_filters: { n: 3, c: m },
                  tagids_must_match: { n: 10, c: u, r: !0, q: !0 },
                  tagids_exclude: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: a.FE.readInt32,
                    pbr: a.FE.readPackedInt32,
                    bw: a.Xc.writeRepeatedInt32,
                  },
                  price_filters: { n: 12, c: B },
                  content_descriptors_must_match: {
                    n: 15,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                  content_descriptors_excluded: {
                    n: 16,
                    r: !0,
                    q: !0,
                    br: a.FE.readEnum,
                    pbr: a.FE.readPackedEnum,
                    bw: a.Xc.writeRepeatedEnum,
                  },
                  regional_top_n_sellers: {
                    n: 40,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  global_top_n_sellers: {
                    n: 41,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  regional_long_term_top_n_sellers: {
                    n: 42,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  global_long_term_top_n_sellers: {
                    n: 43,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  store_page_filter: { n: 44, c: n._v },
                  parent_appids: {
                    n: 45,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    pbr: a.FE.readPackedUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = a.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(o.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(o.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(o.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryFilters";
        }
      }
      class m extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.include_apps || a.aR(m.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  include_apps: { n: 1, br: a.FE.readBool, bw: a.Xc.writeBool },
                  include_packages: {
                    n: 2,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  include_bundles: {
                    n: 3,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  include_games: {
                    n: 10,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  include_demos: {
                    n: 11,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  include_mods: {
                    n: 12,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  include_dlc: { n: 13, br: a.FE.readBool, bw: a.Xc.writeBool },
                  include_software: {
                    n: 14,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  include_video: {
                    n: 15,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  include_hardware: {
                    n: 16,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  include_series: {
                    n: 17,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  include_music: {
                    n: 18,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = a.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(m.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryFilters_TypeFilters";
        }
      }
      class u extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.tagids || a.aR(u.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  tagids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.FE.readInt32,
                    pbr: a.FE.readPackedInt32,
                    bw: a.Xc.writeRepeatedInt32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = a.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(u.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryFilters_TagFilter";
        }
      }
      class B extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.only_free_items || a.aR(B.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  only_free_items: {
                    n: 1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  exclude_free_items: {
                    n: 2,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = a.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(B.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryFilters_PriceFilters";
        }
      }
      class d extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.start || a.aR(d.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  start: {
                    n: 1,
                    d: 0,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  count: {
                    n: 2,
                    d: 10,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  sort: { n: 10, d: 0, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  filters: { n: 20, c: o },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = a.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(d.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryParams";
        }
      }
      class b extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.id || a.aR(b.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  id: { n: 1, c: c.oY },
                  score: { n: 2, br: a.FE.readDouble, bw: a.Xc.writeDouble },
                  spellcheck_generated_result: {
                    n: 3,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = a.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(b.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryPerResultMetadata";
        }
      }
      class _ extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.total_matching_records || a.aR(_.M()),
            l.initialize(this, e, 0, -1, [4, 5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  total_matching_records: {
                    n: 1,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  start: { n: 2, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  count: { n: 3, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  per_result_metadata: { n: 4, c: b, r: !0, q: !0 },
                  spellcheck_suggestions: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: a.FE.readString,
                    bw: a.Xc.writeRepeatedString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = a.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(_.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryResultMetadata";
        }
      }
      class w extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.query_name || a.aR(w.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  query_name: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  query: { n: 2, c: d },
                  context: { n: 3, c: c.WJ },
                  data_request: { n: 4, c: c.Qn },
                  override_country_code: {
                    n: 5,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = a.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(w.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_Query_Request";
        }
      }
      class y extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.metadata || a.aR(y.M()),
            l.initialize(this, e, 0, -1, [2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  metadata: { n: 1, c: _ },
                  ids: { n: 2, c: c.oY, r: !0, q: !0 },
                  store_items: { n: 3, c: c.VL, r: !0, q: !0 },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = a.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(y.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_Query_Response";
        }
      }
      class f extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.query_name || a.aR(f.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  query_name: {
                    n: 1,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  context: { n: 2, c: c.WJ },
                  search_term: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  max_results: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  filters: { n: 5, c: o },
                  data_request: { n: 6, c: c.Qn },
                  use_spellcheck: {
                    n: 7,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  search_tags: { n: 8, br: a.FE.readBool, bw: a.Xc.writeBool },
                  search_creators: {
                    n: 9,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  prefilter_creators: {
                    n: 10,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = a.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(f.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_SearchSuggestions_Request";
        }
      }
      class g extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.metadata || a.aR(g.M()),
            l.initialize(this, e, 0, -1, [2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  metadata: { n: 1, c: _ },
                  ids: { n: 2, c: c.oY, r: !0, q: !0 },
                  store_items: { n: 3, c: c.VL, r: !0, q: !0 },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = a.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(g.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_SearchSuggestions_Response";
        }
      }
      class F extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.filters || a.aR(F.M()),
            l.initialize(this, e, 0, -1, [6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  filters: { n: 2, c: n._v },
                  sections: { n: 6, c: p, r: !0, q: !0 },
                  context: { n: 5, c: c.WJ },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = a.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(F.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_GetItemsByUserRecommendedTags_Request";
        }
      }
      class p extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.sort || a.aR(p.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  sort: { n: 1, d: 0, br: a.FE.readEnum, bw: a.Xc.writeEnum },
                  min_items: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  randomize: { n: 3, br: a.FE.readBool, bw: a.Xc.writeBool },
                  include_packages: {
                    n: 4,
                    d: !1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  include_bundles: {
                    n: 5,
                    d: !1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = a.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(p.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_GetItemsByUserRecommendedTags_Request_Section";
        }
      }
      class z extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.sections || a.aR(z.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: { sections: { n: 1, c: M, r: !0, q: !0 } },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = a.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(z.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_GetItemsByUserRecommendedTags_Response";
        }
      }
      class M extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.tagid || a.aR(M.M()),
            l.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  tagid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  store_item_ids: { n: 2, c: c.oY, r: !0, q: !0 },
                  tag_name: { n: 3, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = a.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(M.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_GetItemsByUserRecommendedTags_Response_Section";
        }
      }
      var R;
      !(function (e) {
        (e.Query = function (e, r) {
          return e.SendMsg("StoreQuery.Query#1", (0, s.MD)(w, r), y, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.SearchSuggestions = function (e, r) {
            return e.SendMsg(
              "StoreQuery.SearchSuggestions#1",
              (0, s.MD)(f, r),
              g,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetItemsByUserRecommendedTags = function (e, r) {
            return e.SendMsg(
              "StoreQuery.GetItemsByUserRecommendedTags#1",
              (0, s.MD)(F, r),
              z,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(R || (R = {}));
    },
  },
]);
