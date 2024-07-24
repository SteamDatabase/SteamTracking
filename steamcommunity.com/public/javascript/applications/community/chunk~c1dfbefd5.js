/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8256],
  {
    8114: (e, t, r) => {
      r.d(t, { Q7: () => u, S7: () => n, hw: () => o, rd: () => l });
      var i = r(80613),
        s = r(89068);
      const a = i.Message;
      class n extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            n.prototype.sale_filter || s.Sg(n.M()),
            a.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            n.sm_m ||
              (n.sm_m = {
                proto: n,
                fields: {
                  sale_filter: { n: 1, c: o },
                  content_hub_filter: { n: 2, c: l },
                  store_filters: { n: 3, c, r: !0, q: !0 },
                },
              }),
            n.sm_m
          );
        }
        static MBF() {
          return n.sm_mbf || (n.sm_mbf = s.w0(n.M())), n.sm_mbf;
        }
        toObject(e = !1) {
          return n.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(n.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(n.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new n();
          return n.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(n.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(n.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return n.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter";
        }
      }
      class o extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.sale_tagid || s.Sg(o.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  sale_tagid: {
                    n: 1,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = s.w0(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(o.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_SalePageFilter";
        }
      }
      class l extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.hub_type || s.Sg(l.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  hub_type: { n: 1, br: s.qM.readString, bw: s.gp.writeString },
                  hub_category: {
                    n: 2,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  hub_tagid: {
                    n: 3,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  discount_filter: {
                    n: 4,
                    br: s.qM.readEnum,
                    bw: s.gp.writeEnum,
                  },
                  optin: { n: 5, c: u },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = s.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(l.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_ContentHubFilter";
        }
      }
      class u extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.name || s.Sg(u.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  name: { n: 1, br: s.qM.readString, bw: s.gp.writeString },
                  optin_tagid: {
                    n: 2,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  prune_tagid: {
                    n: 3,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  optin_only: { n: 4, br: s.qM.readBool, bw: s.gp.writeBool },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = s.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_ContentHubFilter_OptInInfo";
        }
      }
      class c extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.filter_json || s.Sg(c.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  filter_json: {
                    n: 1,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  cache_key: {
                    n: 2,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = s.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(c.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStorePageFilter_StoreFilter";
        }
      }
    },
    15161: (e, t, r) => {
      r.d(t, {
        $4: () => X,
        O4: () => k,
        Qv: () => Q,
        TS: () => U,
        eE: () => P,
        eW: () => K,
        gn: () => O,
        md: () => l,
        vB: () => c,
        yE: () => G,
      });
      var i = r(80613),
        s = r(89068),
        a = r(56545),
        n = r(8114);
      const o = i.Message;
      function l(e) {
        return "unknown EStoreItemType ( " + e + " )";
      }
      class u extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.type || s.Sg(u.M()),
            o.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  type: { n: 1, br: s.qM.readString, bw: s.gp.writeString },
                  rating: { n: 2, br: s.qM.readString, bw: s.gp.writeString },
                  descriptors: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: s.qM.readString,
                    bw: s.gp.writeRepeatedString,
                  },
                  interactive_elements: {
                    n: 4,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  required_age: {
                    n: 10,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  use_age_gate: {
                    n: 11,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  image_url: {
                    n: 20,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  image_target: {
                    n: 21,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = s.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreGameRating";
        }
      }
      class c extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.item_type || s.Sg(c.M()),
            o.initialize(
              this,
              e,
              0,
              -1,
              [11, 12, 20, 21, 25, 41, 42, 52, 71],
              null,
            );
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  item_type: { n: 1, br: s.qM.readEnum, bw: s.gp.writeEnum },
                  id: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  success: { n: 3, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  visible: { n: 4, br: s.qM.readBool, bw: s.gp.writeBool },
                  unvailable_for_country_restriction: {
                    n: 5,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  name: { n: 6, br: s.qM.readString, bw: s.gp.writeString },
                  store_url_path: {
                    n: 7,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  appid: { n: 9, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  type: { n: 10, br: s.qM.readEnum, bw: s.gp.writeEnum },
                  included_types: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: s.qM.readEnum,
                    pbr: s.qM.readPackedEnum,
                    bw: s.gp.writeRepeatedEnum,
                  },
                  included_appids: {
                    n: 12,
                    r: !0,
                    q: !0,
                    br: s.qM.readUint32,
                    pbr: s.qM.readPackedUint32,
                    bw: s.gp.writeRepeatedUint32,
                  },
                  is_free: { n: 13, br: s.qM.readBool, bw: s.gp.writeBool },
                  is_early_access: {
                    n: 14,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  related_items: { n: 15, c: m },
                  included_items: { n: 16, c: d },
                  content_descriptorids: {
                    n: 20,
                    r: !0,
                    q: !0,
                    br: s.qM.readEnum,
                    pbr: s.qM.readPackedEnum,
                    bw: s.gp.writeRepeatedEnum,
                  },
                  tagids: {
                    n: 21,
                    r: !0,
                    q: !0,
                    br: s.qM.readUint32,
                    pbr: s.qM.readPackedUint32,
                    bw: s.gp.writeRepeatedUint32,
                  },
                  categories: { n: 22, c: _ },
                  reviews: { n: 23, c: g },
                  basic_info: { n: 24, c: B },
                  tags: { n: 25, c: b, r: !0, q: !0 },
                  assets: { n: 30, c: y },
                  release: { n: 31, c: w },
                  platforms: { n: 32, c: f },
                  game_rating: { n: 33, c: u },
                  best_purchase_option: { n: 40, c: S },
                  purchase_options: { n: 41, c: S, r: !0, q: !0 },
                  accessories: { n: 42, c: S, r: !0, q: !0 },
                  self_purchase_option: { n: 43, c: S },
                  screenshots: { n: 50, c: z },
                  trailers: { n: 51, c: q },
                  supported_languages: { n: 52, c: C, r: !0, q: !0 },
                  store_url_path_override: {
                    n: 53,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  free_weekend: { n: 54, c: F },
                  unlisted: { n: 55, br: s.qM.readBool, bw: s.gp.writeBool },
                  game_count: {
                    n: 56,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  internal_name: {
                    n: 57,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  full_description: {
                    n: 58,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  is_free_temporarily: {
                    n: 59,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  assets_without_overrides: { n: 60, c: y },
                  user_filter_failure: { n: 70, c: Z },
                  links: { n: 71, c: W, r: !0, q: !0 },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = s.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(c.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem";
        }
      }
      class m extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.parent_appid || s.Sg(m.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  parent_appid: {
                    n: 1,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = s.w0(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(m.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_RelatedItems";
        }
      }
      class d extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.included_apps || s.Sg(d.M()),
            o.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  included_apps: { n: 1, c, r: !0, q: !0 },
                  included_packages: { n: 2, c, r: !0, q: !0 },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = s.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_IncludedItems";
        }
      }
      class _ extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.supported_player_categoryids || s.Sg(_.M()),
            o.initialize(this, e, 0, -1, [2, 3, 4], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  supported_player_categoryids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: s.qM.readUint32,
                    pbr: s.qM.readPackedUint32,
                    bw: s.gp.writeRepeatedUint32,
                  },
                  feature_categoryids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: s.qM.readUint32,
                    pbr: s.qM.readPackedUint32,
                    bw: s.gp.writeRepeatedUint32,
                  },
                  controller_categoryids: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: s.qM.readUint32,
                    pbr: s.qM.readPackedUint32,
                    bw: s.gp.writeRepeatedUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = s.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Categories";
        }
      }
      class g extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.summary_filtered || s.Sg(g.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  summary_filtered: { n: 1, c: p },
                  summary_unfiltered: { n: 2, c: p },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = s.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Reviews";
        }
      }
      class p extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.review_count || s.Sg(p.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  review_count: {
                    n: 1,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  percent_positive: {
                    n: 2,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  review_score: { n: 3, br: s.qM.readEnum, bw: s.gp.writeEnum },
                  review_score_label: {
                    n: 4,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = s.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Reviews_StoreReviewSummary";
        }
      }
      class B extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.short_description || s.Sg(B.M()),
            o.initialize(this, e, 0, -1, [2, 3, 4], null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  short_description: {
                    n: 1,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  publishers: { n: 2, c: h, r: !0, q: !0 },
                  developers: { n: 3, c: h, r: !0, q: !0 },
                  franchises: { n: 4, c: h, r: !0, q: !0 },
                  capsule_headline: {
                    n: 5,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = s.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_BasicInfo";
        }
      }
      class h extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.name || s.Sg(h.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  name: { n: 1, br: s.qM.readString, bw: s.gp.writeString },
                  creator_clan_account_id: {
                    n: 2,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = s.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_BasicInfo_CreatorHomeLink";
        }
      }
      class b extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.tagid || s.Sg(b.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  tagid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  weight: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = s.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Tag";
        }
      }
      class y extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.asset_url_format || s.Sg(y.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  asset_url_format: {
                    n: 1,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  main_capsule: {
                    n: 2,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  small_capsule: {
                    n: 3,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  header: { n: 4, br: s.qM.readString, bw: s.gp.writeString },
                  package_header: {
                    n: 5,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  page_background: {
                    n: 6,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  hero_capsule: {
                    n: 7,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  hero_capsule_2x: {
                    n: 8,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  library_capsule: {
                    n: 9,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  library_capsule_2x: {
                    n: 10,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  library_hero: {
                    n: 11,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  library_hero_2x: {
                    n: 12,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  community_icon: {
                    n: 13,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  clan_avatar: {
                    n: 14,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = s.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Assets";
        }
      }
      class w extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.steam_release_date || s.Sg(w.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  steam_release_date: {
                    n: 1,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  original_release_date: {
                    n: 2,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  original_steam_release_date: {
                    n: 3,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  is_coming_soon: {
                    n: 4,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  is_preload: { n: 5, br: s.qM.readBool, bw: s.gp.writeBool },
                  custom_release_date_message: {
                    n: 6,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  is_abridged_release_date: {
                    n: 7,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  coming_soon_display: {
                    n: 8,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  is_early_access: {
                    n: 10,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  mac_release_date: {
                    n: 20,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  linux_release_date: {
                    n: 21,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = s.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_ReleaseInfo";
        }
      }
      class f extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.windows || s.Sg(f.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  windows: { n: 1, br: s.qM.readBool, bw: s.gp.writeBool },
                  mac: { n: 2, br: s.qM.readBool, bw: s.gp.writeBool },
                  steamos_linux: {
                    n: 3,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  vr_support: { n: 10, c: M },
                  steam_deck_compat_category: {
                    n: 11,
                    br: s.qM.readEnum,
                    bw: s.gp.writeEnum,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = s.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Platforms";
        }
      }
      class M extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.vrhmd || s.Sg(M.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  vrhmd: { n: 1, br: s.qM.readBool, bw: s.gp.writeBool },
                  vrhmd_only: { n: 2, br: s.qM.readBool, bw: s.gp.writeBool },
                  htc_vive: { n: 40, br: s.qM.readBool, bw: s.gp.writeBool },
                  oculus_rift: { n: 41, br: s.qM.readBool, bw: s.gp.writeBool },
                  windows_mr: { n: 42, br: s.qM.readBool, bw: s.gp.writeBool },
                  valve_index: { n: 43, br: s.qM.readBool, bw: s.gp.writeBool },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = s.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Platforms_VRSupport";
        }
      }
      class S extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.packageid || s.Sg(S.M()),
            o.initialize(this, e, 0, -1, [20, 21, 22], null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  packageid: { n: 1, br: s.qM.readInt32, bw: s.gp.writeInt32 },
                  bundleid: { n: 2, br: s.qM.readInt32, bw: s.gp.writeInt32 },
                  purchase_option_name: {
                    n: 3,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  final_price_in_cents: {
                    n: 5,
                    br: s.qM.readInt64String,
                    bw: s.gp.writeInt64String,
                  },
                  original_price_in_cents: {
                    n: 6,
                    br: s.qM.readInt64String,
                    bw: s.gp.writeInt64String,
                  },
                  user_final_price_in_cents: {
                    n: 7,
                    br: s.qM.readInt64String,
                    bw: s.gp.writeInt64String,
                  },
                  formatted_final_price: {
                    n: 8,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  formatted_original_price: {
                    n: 9,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  discount_pct: {
                    n: 10,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  user_discount_pct: {
                    n: 11,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  bundle_discount_pct: {
                    n: 12,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  active_discounts: { n: 20, c: R, r: !0, q: !0 },
                  user_active_discounts: { n: 21, c: R, r: !0, q: !0 },
                  inactive_discounts: { n: 22, c: R, r: !0, q: !0 },
                  user_can_purchase: {
                    n: 30,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  user_can_purchase_as_gift: {
                    n: 31,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  is_commercial_license: {
                    n: 40,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  should_suppress_discount_pct: {
                    n: 41,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  hide_discount_pct_for_compliance: {
                    n: 42,
                    d: !1,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  included_game_count: {
                    n: 43,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  lowest_recent_price_in_cents: {
                    n: 44,
                    br: s.qM.readInt64String,
                    bw: s.gp.writeInt64String,
                  },
                  requires_shipping: {
                    n: 45,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  recurrence_info: { n: 46, c: I },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = s.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_PurchaseOption";
        }
      }
      class R extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.discount_amount || s.Sg(R.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  discount_amount: {
                    n: 1,
                    br: s.qM.readInt64String,
                    bw: s.gp.writeInt64String,
                  },
                  discount_description: {
                    n: 2,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  discount_end_date: {
                    n: 3,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = s.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_PurchaseOption_Discount";
        }
      }
      class I extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.packageid || s.Sg(I.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  packageid: { n: 1, br: s.qM.readInt32, bw: s.gp.writeInt32 },
                  billing_agreement_type: {
                    n: 2,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  renewal_time_unit: {
                    n: 3,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  renewal_time_period: {
                    n: 4,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = s.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(I.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_PurchaseOption_RecurrenceInfo";
        }
      }
      class z extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.all_ages_screenshots || s.Sg(z.M()),
            o.initialize(this, e, 0, -1, [2, 3], null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  all_ages_screenshots: { n: 2, c: v, r: !0, q: !0 },
                  mature_content_screenshots: { n: 3, c: v, r: !0, q: !0 },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = s.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Screenshots";
        }
      }
      class v extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.filename || s.Sg(v.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  filename: { n: 1, br: s.qM.readString, bw: s.gp.writeString },
                  ordinal: { n: 2, br: s.qM.readInt32, bw: s.gp.writeInt32 },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = s.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Screenshots_Screenshot";
        }
      }
      class q extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.highlights || s.Sg(q.M()),
            o.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  highlights: { n: 1, c: j, r: !0, q: !0 },
                  other_trailers: { n: 2, c: j, r: !0, q: !0 },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = s.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(q.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Trailers";
        }
      }
      class T extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.filename || s.Sg(T.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  filename: { n: 1, br: s.qM.readString, bw: s.gp.writeString },
                  type: { n: 2, br: s.qM.readString, bw: s.gp.writeString },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = s.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Trailers_VideoSource";
        }
      }
      class j extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.trailer_name || s.Sg(j.M()),
            o.initialize(this, e, 0, -1, [3, 4, 5], null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  trailer_name: {
                    n: 1,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  trailer_url_format: {
                    n: 2,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  trailer_480p: { n: 3, c: T, r: !0, q: !0 },
                  trailer_max: { n: 4, c: T, r: !0, q: !0 },
                  microtrailer: { n: 5, c: T, r: !0, q: !0 },
                  screenshot_medium: {
                    n: 10,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  screenshot_full: {
                    n: 11,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  trailer_base_id: {
                    n: 12,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = s.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(j.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Trailers_Trailer";
        }
      }
      class C extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.elanguage || s.Sg(C.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  elanguage: {
                    n: 1,
                    d: -1,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  eadditionallanguage: {
                    n: 5,
                    d: -1,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  supported: { n: 2, br: s.qM.readBool, bw: s.gp.writeBool },
                  full_audio: { n: 3, br: s.qM.readBool, bw: s.gp.writeBool },
                  subtitles: { n: 4, br: s.qM.readBool, bw: s.gp.writeBool },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = s.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_SupportedLanguage";
        }
      }
      class F extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.start_time || s.Sg(F.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  start_time: {
                    n: 1,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  end_time: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  text: { n: 3, br: s.qM.readString, bw: s.gp.writeString },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = s.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_FreeWeekend";
        }
      }
      class W extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.link_type || s.Sg(W.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  link_type: { n: 1, br: s.qM.readEnum, bw: s.gp.writeEnum },
                  url: { n: 2, br: s.qM.readString, bw: s.gp.writeString },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = s.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Link";
        }
      }
      class O extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.include_assets || s.Sg(O.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  include_assets: {
                    n: 1,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_release: {
                    n: 2,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_platforms: {
                    n: 3,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_all_purchase_options: {
                    n: 4,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_screenshots: {
                    n: 5,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_trailers: {
                    n: 6,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_ratings: {
                    n: 7,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_tag_count: {
                    n: 8,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  include_reviews: {
                    n: 9,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_basic_info: {
                    n: 10,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_supported_languages: {
                    n: 11,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_full_description: {
                    n: 12,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_included_items: {
                    n: 13,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  included_item_data_request: { n: 14, c: O },
                  include_assets_without_overrides: {
                    n: 15,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  apply_user_filters: {
                    n: 16,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_links: {
                    n: 17,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = s.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreBrowseItemDataRequest";
        }
      }
      class U extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.language || s.Sg(U.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  language: { n: 1, br: s.qM.readString, bw: s.gp.writeString },
                  elanguage: { n: 2, br: s.qM.readInt32, bw: s.gp.writeInt32 },
                  country_code: {
                    n: 3,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  steam_realm: {
                    n: 4,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = s.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreBrowseContext";
        }
      }
      class k extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.appid || s.Sg(k.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  packageid: {
                    n: 2,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  bundleid: { n: 3, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  tagid: { n: 4, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  creatorid: {
                    n: 5,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  hubcategoryid: {
                    n: 6,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = s.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItemID";
        }
      }
      class P extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.ids || s.Sg(P.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  ids: { n: 1, c: k, r: !0, q: !0 },
                  context: { n: 2, c: U },
                  data_request: { n: 3, c: O },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = s.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetItems_Request";
        }
      }
      class G extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.store_items || s.Sg(G.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: { store_items: { n: 1, c, r: !0, q: !0 } },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = s.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetItems_Response";
        }
      }
      class A extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.language || s.Sg(A.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  language: { n: 1, br: s.qM.readString, bw: s.gp.writeString },
                  elanguage: {
                    n: 2,
                    d: -1,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = s.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetStoreCategories_Request";
        }
      }
      class D extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.categories || s.Sg(D.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: { categories: { n: 1, c: L, r: !0, q: !0 } },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = s.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetStoreCategories_Response";
        }
      }
      class L extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.categoryid || s.Sg(L.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  categoryid: {
                    n: 1,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  type: { n: 2, br: s.qM.readEnum, bw: s.gp.writeEnum },
                  internal_name: {
                    n: 3,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  display_name: {
                    n: 4,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  image_url: {
                    n: 5,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  show_in_search: {
                    n: 6,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  computed: { n: 7, br: s.qM.readBool, bw: s.gp.writeBool },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = s.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetStoreCategories_Response_Category";
        }
      }
      class E extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.context || s.Sg(E.M()),
            o.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  context: { n: 1, c: U },
                  store_page_filter: { n: 2, c: n.S7 },
                  appids: { n: 3, c: k, r: !0, q: !0 },
                  steamid: {
                    n: 4,
                    br: s.qM.readUint64String,
                    bw: s.gp.writeUint64String,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = s.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForApps_Request";
        }
      }
      class x extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.dlc_data || s.Sg(x.M()),
            o.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  dlc_data: { n: 1, c: H, r: !0, q: !0 },
                  playtime: { n: 2, c: N, r: !0, q: !0 },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = s.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForApps_Response";
        }
      }
      class H extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.appid || s.Sg(H.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  parentappid: {
                    n: 2,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  release_date: {
                    n: 3,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  coming_soon: { n: 4, br: s.qM.readBool, bw: s.gp.writeBool },
                  price: {
                    n: 5,
                    br: s.qM.readInt64String,
                    bw: s.gp.writeInt64String,
                  },
                  discount: { n: 6, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  free: { n: 7, br: s.qM.readBool, bw: s.gp.writeBool },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = s.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForApps_Response_DLCData";
        }
      }
      class N extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.appid || s.Sg(N.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  playtime: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  last_played: {
                    n: 3,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = s.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForApps_Response_PlaytimeForApp";
        }
      }
      class Q extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.context || s.Sg(Q.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  context: { n: 1, c: U },
                  appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: s.qM.readUint32,
                    pbr: s.qM.readPackedUint32,
                    bw: s.gp.writeRepeatedUint32,
                  },
                  flavor: { n: 3, br: s.qM.readString, bw: s.gp.writeString },
                  count: { n: 4, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  store_page_filter: { n: 5, c: n.S7 },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = s.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(Q.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForAppsSolr_Request";
        }
      }
      class V extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.dlc_lists || s.Sg(V.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: { dlc_lists: { n: 1, c: $, r: !0, q: !0 } },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = s.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForAppsSolr_Response";
        }
      }
      class $ extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.parent_appid || s.Sg($.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  parent_appid: {
                    n: 1,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  dlc_appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: s.qM.readUint32,
                    pbr: s.qM.readPackedUint32,
                    bw: s.gp.writeRepeatedUint32,
                  },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = s.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT($.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0($.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForAppsSolr_Response_DLCList";
        }
      }
      class K extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.packageid || s.Sg(K.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
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
                    br: s.qM.readUint32,
                    pbr: s.qM.readPackedUint32,
                    bw: s.gp.writeRepeatedUint32,
                  },
                  context: { n: 2, c: U },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = s.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(K.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetHardwareItems_Request";
        }
      }
      class Y extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.packageid || s.Sg(Y.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  packageid: {
                    n: 1,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  inventory_available: {
                    n: 3,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  high_pending_orders: {
                    n: 4,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  account_restricted_from_purchasing: {
                    n: 5,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  requires_reservation: {
                    n: 6,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  rtime_estimated_notification: {
                    n: 7,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  notificaton_token: {
                    n: 8,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  reservation_state: {
                    n: 9,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  expired: { n: 10, br: s.qM.readBool, bw: s.gp.writeBool },
                  time_expires: {
                    n: 11,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  time_reserved: {
                    n: 12,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  allow_quantity_purchase: {
                    n: 13,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  max_quantity_per_purchase: {
                    n: 14,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  allow_purchase_in_country: {
                    n: 15,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  estimated_delivery_soonest_business_days: {
                    n: 17,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  estimated_delivery_latest_business_days: {
                    n: 18,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = s.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(Y.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CHardwarePackageDetails";
        }
      }
      class J extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.details || s.Sg(J.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: { details: { n: 1, c: Y, r: !0, q: !0 } },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = s.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(J.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetHardwareItems_Response";
        }
      }
      class Z extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.filter_failure || s.Sg(Z.M()),
            o.initialize(this, e, 0, -1, [21, 30], null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  filter_failure: {
                    n: 1,
                    d: 0,
                    br: s.qM.readEnum,
                    bw: s.gp.writeEnum,
                  },
                  already_owned: {
                    n: 5,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  on_wishlist: { n: 6, br: s.qM.readBool, bw: s.gp.writeBool },
                  ignored: { n: 7, br: s.qM.readBool, bw: s.gp.writeBool },
                  not_in_users_language: {
                    n: 10,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  not_on_users_platform: {
                    n: 11,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  demo_for_owned_game: {
                    n: 12,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  dlc_for_unowned_game: {
                    n: 13,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  nonpreferred_product_type: {
                    n: 20,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  excluded_tagids: {
                    n: 21,
                    r: !0,
                    q: !0,
                    br: s.qM.readUint32,
                    pbr: s.qM.readPackedUint32,
                    bw: s.gp.writeRepeatedUint32,
                  },
                  excluded_content_descriptorids: {
                    n: 30,
                    r: !0,
                    q: !0,
                    br: s.qM.readEnum,
                    pbr: s.qM.readPackedEnum,
                    bw: s.gp.writeRepeatedEnum,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = s.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(Z.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreBrowseFilterFailure";
        }
      }
      var X;
      !(function (e) {
        (e.GetItems = function (e, t) {
          return e.SendMsg("StoreBrowse.GetItems#1", (0, a.I8)(P, t), G, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.GetStoreCategories = function (e, t) {
            return e.SendMsg(
              "StoreBrowse.GetStoreCategories#1",
              (0, a.I8)(A, t),
              D,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetDLCForApps = function (e, t) {
            return e.SendMsg(
              "StoreBrowse.GetDLCForApps#1",
              (0, a.I8)(E, t),
              x,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetDLCForAppsSolr = function (e, t) {
            return e.SendMsg(
              "StoreBrowse.GetDLCForAppsSolr#1",
              (0, a.I8)(Q, t),
              V,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetHardwareItems = function (e, t) {
            return e.SendMsg(
              "StoreBrowse.GetHardwareItems#1",
              (0, a.I8)(K, t),
              J,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          });
      })(X || (X = {}));
    },
    94601: (e, t, r) => {
      r.d(t, { Fs: () => R, iU: () => B, nu: () => _, um: () => w });
      var i = r(80613),
        s = r(89068),
        a = r(56545),
        n = r(8114),
        o = r(15161);
      const l = i.Message;
      class u extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.released_only || s.Sg(u.M()),
            l.initialize(this, e, 0, -1, [10, 11, 15, 16, 45], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  released_only: {
                    n: 1,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  coming_soon_only: {
                    n: 2,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  type_filters: { n: 3, c },
                  tagids_must_match: { n: 10, c: m, r: !0, q: !0 },
                  tagids_exclude: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: s.qM.readInt32,
                    pbr: s.qM.readPackedInt32,
                    bw: s.gp.writeRepeatedInt32,
                  },
                  price_filters: { n: 12, c: d },
                  content_descriptors_must_match: {
                    n: 15,
                    r: !0,
                    q: !0,
                    br: s.qM.readEnum,
                    pbr: s.qM.readPackedEnum,
                    bw: s.gp.writeRepeatedEnum,
                  },
                  content_descriptors_excluded: {
                    n: 16,
                    r: !0,
                    q: !0,
                    br: s.qM.readEnum,
                    pbr: s.qM.readPackedEnum,
                    bw: s.gp.writeRepeatedEnum,
                  },
                  regional_top_n_sellers: {
                    n: 40,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  global_top_n_sellers: {
                    n: 41,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  regional_long_term_top_n_sellers: {
                    n: 42,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  global_long_term_top_n_sellers: {
                    n: 43,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  store_page_filter: { n: 44, c: n.S7 },
                  parent_appids: {
                    n: 45,
                    r: !0,
                    q: !0,
                    br: s.qM.readUint32,
                    pbr: s.qM.readPackedUint32,
                    bw: s.gp.writeRepeatedUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = s.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryFilters";
        }
      }
      class c extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.include_apps || s.Sg(c.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  include_apps: { n: 1, br: s.qM.readBool, bw: s.gp.writeBool },
                  include_packages: {
                    n: 2,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_bundles: {
                    n: 3,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_games: {
                    n: 10,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_demos: {
                    n: 11,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_mods: {
                    n: 12,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_dlc: { n: 13, br: s.qM.readBool, bw: s.gp.writeBool },
                  include_software: {
                    n: 14,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_video: {
                    n: 15,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_hardware: {
                    n: 16,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_series: {
                    n: 17,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_music: {
                    n: 18,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = s.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(c.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryFilters_TypeFilters";
        }
      }
      class m extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.tagids || s.Sg(m.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  tagids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: s.qM.readInt32,
                    pbr: s.qM.readPackedInt32,
                    bw: s.gp.writeRepeatedInt32,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = s.w0(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(m.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryFilters_TagFilter";
        }
      }
      class d extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.only_free_items || s.Sg(d.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  only_free_items: {
                    n: 1,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  exclude_free_items: {
                    n: 2,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = s.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryFilters_PriceFilters";
        }
      }
      class _ extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.start || s.Sg(_.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  start: {
                    n: 1,
                    d: 0,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  count: {
                    n: 2,
                    d: 10,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  sort: { n: 10, d: 0, br: s.qM.readEnum, bw: s.gp.writeEnum },
                  filters: { n: 20, c: u },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = s.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryParams";
        }
      }
      class g extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.id || s.Sg(g.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  id: { n: 1, c: o.O4 },
                  score: { n: 2, br: s.qM.readDouble, bw: s.gp.writeDouble },
                  spellcheck_generated_result: {
                    n: 3,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = s.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryPerResultMetadata";
        }
      }
      class p extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.total_matching_records || s.Sg(p.M()),
            l.initialize(this, e, 0, -1, [4, 5], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  total_matching_records: {
                    n: 1,
                    br: s.qM.readInt32,
                    bw: s.gp.writeInt32,
                  },
                  start: { n: 2, br: s.qM.readInt32, bw: s.gp.writeInt32 },
                  count: { n: 3, br: s.qM.readInt32, bw: s.gp.writeInt32 },
                  per_result_metadata: { n: 4, c: g, r: !0, q: !0 },
                  spellcheck_suggestions: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: s.qM.readString,
                    bw: s.gp.writeRepeatedString,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = s.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryResultMetadata";
        }
      }
      class B extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.query_name || s.Sg(B.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  query_name: {
                    n: 1,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  query: { n: 2, c: _ },
                  context: { n: 3, c: o.TS },
                  data_request: { n: 4, c: o.gn },
                  override_country_code: {
                    n: 5,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = s.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_Query_Request";
        }
      }
      class h extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.metadata || s.Sg(h.M()),
            l.initialize(this, e, 0, -1, [2, 3], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  metadata: { n: 1, c: p },
                  ids: { n: 2, c: o.O4, r: !0, q: !0 },
                  store_items: { n: 3, c: o.vB, r: !0, q: !0 },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = s.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_Query_Response";
        }
      }
      class b extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.query_name || s.Sg(b.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  query_name: {
                    n: 1,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  context: { n: 2, c: o.TS },
                  search_term: {
                    n: 3,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  max_results: {
                    n: 4,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  filters: { n: 5, c: u },
                  data_request: { n: 6, c: o.gn },
                  use_spellcheck: {
                    n: 7,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  search_tags: { n: 8, br: s.qM.readBool, bw: s.gp.writeBool },
                  search_creators: {
                    n: 9,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  prefilter_creators: {
                    n: 10,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = s.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_SearchSuggestions_Request";
        }
      }
      class y extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.metadata || s.Sg(y.M()),
            l.initialize(this, e, 0, -1, [2, 3], null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  metadata: { n: 1, c: p },
                  ids: { n: 2, c: o.O4, r: !0, q: !0 },
                  store_items: { n: 3, c: o.vB, r: !0, q: !0 },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = s.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_SearchSuggestions_Response";
        }
      }
      class w extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.filters || s.Sg(w.M()),
            l.initialize(this, e, 0, -1, [6], null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  filters: { n: 2, c: n.S7 },
                  sections: { n: 6, c: f, r: !0, q: !0 },
                  context: { n: 5, c: o.TS },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = s.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_GetItemsByUserRecommendedTags_Request";
        }
      }
      class f extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.sort || s.Sg(f.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  sort: { n: 1, d: 0, br: s.qM.readEnum, bw: s.gp.writeEnum },
                  min_items: {
                    n: 2,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  randomize: { n: 3, br: s.qM.readBool, bw: s.gp.writeBool },
                  include_packages: {
                    n: 4,
                    d: !1,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  include_bundles: {
                    n: 5,
                    d: !1,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = s.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_GetItemsByUserRecommendedTags_Request_Section";
        }
      }
      class M extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.sections || s.Sg(M.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: { sections: { n: 1, c: S, r: !0, q: !0 } },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = s.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_GetItemsByUserRecommendedTags_Response";
        }
      }
      class S extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.tagid || s.Sg(S.M()),
            l.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  tagid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  store_item_ids: { n: 2, c: o.O4, r: !0, q: !0 },
                  tag_name: { n: 3, br: s.qM.readString, bw: s.gp.writeString },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = s.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new i.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_GetItemsByUserRecommendedTags_Response_Section";
        }
      }
      var R;
      !(function (e) {
        (e.Query = function (e, t) {
          return e.SendMsg("StoreQuery.Query#1", (0, a.I8)(B, t), h, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.SearchSuggestions = function (e, t) {
            return e.SendMsg(
              "StoreQuery.SearchSuggestions#1",
              (0, a.I8)(b, t),
              y,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetItemsByUserRecommendedTags = function (e, t) {
            return e.SendMsg(
              "StoreQuery.GetItemsByUserRecommendedTags#1",
              (0, a.I8)(w, t),
              M,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          });
      })(R || (R = {}));
    },
    72839: (e, t, r) => {
      r.d(t, { Bn: () => l, hS: () => o, rV: () => n });
      var i = r(15161),
        s = r(78327),
        a = r(2160);
      r(94601);
      function n(e, t) {
        e.Body().set_context(o(t));
      }
      function o(e) {
        let t = new i.TS();
        return (
          e || t.set_country_code(s.TS.COUNTRY),
          t.set_language(s.TS.LANGUAGE),
          s.TS.EREALM != a.TU.k_ESteamRealmUnknown &&
            t.set_steam_realm(s.TS.EREALM),
          t
        );
      }
      function l(e, t) {
        e.Body().set_data_request(i.gn.fromObject(t));
      }
    },
    23825: (e, t, r) => {
      r.d(t, { A: () => F });
      var i = r(14947),
        s = r(56545),
        a = r(96059),
        n = r(80613),
        o = r(89068),
        l = r(15161);
      const u = n.Message;
      class c extends u {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.request || o.Sg(c.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  request: { n: 1, c: l.eE },
                  include_unpublished: {
                    n: 2,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
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
          let t = new n.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerStoreBrowse_GetItems_Request";
        }
      }
      class m extends u {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.ids || o.Sg(m.M()),
            u.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: { ids: { n: 1, c: l.O4, r: !0, q: !0 } },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = o.w0(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(m.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerStoreBrowse_GetCountryRestrictions_Request";
        }
      }
      class d extends u {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.results || o.Sg(d.M()),
            u.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  results: { n: 1, c: _, r: !0, q: !0 },
                  no_info: { n: 2, c: l.O4, r: !0, q: !0 },
                },
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
          let t = new n.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerStoreBrowse_GetCountryRestrictions_Response";
        }
      }
      class _ extends u {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.id || o.Sg(_.M()),
            u.initialize(this, e, 0, -1, [3, 4], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  id: { n: 1, c: l.O4 },
                  no_restrictions: {
                    n: 2,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                  allowed_countries: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: o.qM.readString,
                    bw: o.gp.writeRepeatedString,
                  },
                  restricted_countries: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: o.qM.readString,
                    bw: o.gp.writeRepeatedString,
                  },
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
          let t = new n.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerStoreBrowse_GetCountryRestrictions_Response_CCountryRestrictions";
        }
      }
      var g;
      !(function (e) {
        (e.GetItems = function (e, t) {
          return e.SendMsg(
            "PartnerStoreBrowse.GetItems#1",
            (0, s.I8)(c, t),
            l.yE,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.GetCountryRestrictions = function (e, t) {
            return e.SendMsg(
              "PartnerStoreBrowse.GetCountryRestrictions#1",
              (0, s.I8)(m, t),
              d,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          });
      })(g || (g = {}));
      var p = r(44332),
        B = r(68797),
        h = r(78327),
        b = r(72839),
        y = r(62792),
        w = r(61859),
        f = r(91675);
      function M(e) {
        return (function (e, t, r) {
          switch (e) {
            case "date_full":
              return (0, w.$z)(t);
            case "date_month":
              return (0, f.sq)(new Date(1e3 * t));
            case "date_quarter":
              return (0, f.u6)(new Date(1e3 * t));
            case "date_year":
              return (0, f.vl)(new Date(1e3 * t));
            case "text_comingsoon":
              return r || (0, w.we)("#Store_ComingSoon_ComingSoon");
            case "text_tba":
              return r || (0, w.we)("#Store_ComingSoon_TBA");
            default:
              return "";
          }
        })(
          e.coming_soon_display,
          e.steam_release_date,
          e.custom_release_date_message,
        );
      }
      class S {
        constructor(e, t) {
          var r, i, s;
          (this.m_bVisible = !1),
            (this.m_rgStoreTags = []),
            (this.m_rgStoreTagIDs = []),
            (this.m_DataRequested = { include_tag_count: 0 }),
            (this.k_regexSalePage =
              /^https?:\/\/[^\/]*(?:valvesoftware|steampowered).com\/(?:(curator|dev|developer|pub|publisher|franchise)\/[0-9a-zA-Z\-_]+\/)?sale\//),
            (this.m_eItemType = e.item_type()),
            (this.m_unID = e.id()),
            (this.m_bVisible = !!e.visible()),
            (this.m_strName = e.name()),
            (this.m_strStoreURLPath = e.store_url_path()),
            (this.m_unAppID = e.appid()),
            (this.m_eAppType = e.type()),
            (this.m_rgIncludedAppTypes = e.included_types()),
            (this.m_rgIncludedAppIDs = e.included_appids()),
            (this.m_bIsFree = e.is_free()),
            (this.m_bIsFreeTemporary = e.is_free_temporarily()),
            (this.m_bIsEarlyAccess = e.is_early_access()),
            (this.m_RelatedItems =
              null === (r = e.related_items()) || void 0 === r
                ? void 0
                : r.toObject()),
            (this.m_ContentDescriptorIDs = e.content_descriptorids()),
            (this.m_StoreCategories = e.categories().toObject()),
            (this.m_BestPurchaseOption =
              null === (i = e.best_purchase_option()) || void 0 === i
                ? void 0
                : i.toObject()),
            (this.m_strStoreURLPathOverride = e.store_url_path_override()),
            (this.m_freeWeekend =
              null === (s = e.free_weekend()) || void 0 === s
                ? void 0
                : s.toObject()),
            (this.m_strInternalName = e.internal_name()),
            (1 != this.m_eItemType && 2 != this.m_eItemType) ||
              (this.m_SelfPurchaseOption = e.self_purchase_option(!1)
                ? e.self_purchase_option().toObject()
                : this.m_BestPurchaseOption),
            this.MergeData(e, t);
        }
        MergeData(e, t) {
          t.include_assets &&
            !this.m_Assets &&
            ((this.m_Assets = new I(e.assets(), e.id())),
            (this.m_DataRequested.include_assets = !0)),
            t.include_assets_without_overrides &&
              !this.m_AssetsWithoutOverrides &&
              ((this.m_AssetsWithoutOverrides = new I(
                e.assets_without_overrides(),
                e.id(),
              )),
              (this.m_DataRequested.include_assets_without_overrides = !0)),
            t.include_release &&
              !this.m_ReleaseInfo &&
              ((this.m_ReleaseInfo = e.release().toObject()),
              (this.m_DataRequested.include_release = !0)),
            t.include_platforms &&
              !this.m_Platforms &&
              ((this.m_Platforms = e.platforms().toObject()),
              (this.m_DataRequested.include_platforms = !0)),
            t.include_all_purchase_options &&
              !this.m_rgPurchaseOptions &&
              ((this.m_rgPurchaseOptions = e
                .purchase_options()
                .map((e) => e.toObject())),
              (this.m_DataRequested.include_all_purchase_options = !0)),
            t.include_screenshots &&
              !this.m_Screenshots &&
              ((this.m_Screenshots = new q(e.screenshots())),
              (this.m_DataRequested.include_screenshots = !0)),
            t.include_trailers &&
              !this.m_Trailers &&
              ((this.m_Trailers = new z(e.trailers())),
              (this.m_DataRequested.include_trailers = !0)),
            t.include_tag_count &&
              t.include_tag_count > this.m_rgStoreTags.length &&
              this.m_DataRequested.include_tag_count < t.include_tag_count &&
              ((this.m_rgStoreTags = e.tags().map((e) => e.toObject())),
              (this.m_rgStoreTagIDs = this.m_rgStoreTags.map((e) => e.tagid)),
              (this.m_DataRequested.include_tag_count = Math.max(
                t.include_tag_count,
                this.m_rgStoreTags.length || 0,
              ))),
            t.include_reviews &&
              !this.m_ReviewInfo &&
              ((this.m_ReviewInfo = e.reviews().toObject()),
              (this.m_DataRequested.include_reviews = !0)),
            t.include_basic_info &&
              !this.m_BasicInfo &&
              ((this.m_BasicInfo = e.basic_info().toObject()),
              (this.m_DataRequested.include_basic_info = !0)),
            t.include_supported_languages &&
              !this.m_rgSupportedLanguages &&
              ((this.m_rgSupportedLanguages = e
                .supported_languages()
                .map((e) => e.toObject())),
              (this.m_DataRequested.include_supported_languages = !0)),
            t.include_links &&
              !this.m_rgLinks &&
              ((this.m_rgLinks = e.links().map((e) => e.toObject())),
              (this.m_DataRequested.include_links = !0));
        }
        static BDataRequestContainsOtherDataRequest(e, t) {
          return Boolean(
            (!t.include_assets || e.include_assets) &&
              (!t.include_release || e.include_release) &&
              (!t.include_platforms || e.include_platforms) &&
              (!t.include_all_purchase_options ||
                e.include_all_purchase_options) &&
              (!t.include_screenshots || e.include_screenshots) &&
              (!t.include_trailers || e.include_trailers) &&
              (!t.include_ratings || e.include_ratings) &&
              (!t.include_tag_count ||
                (e.include_tag_count || 0) >= t.include_tag_count) &&
              (!t.include_reviews || e.include_reviews) &&
              (!t.include_basic_info || e.include_basic_info) &&
              (!t.include_supported_languages ||
                e.include_supported_languages) &&
              (!t.include_links || e.include_links),
          );
        }
        BContainDataRequest(e) {
          return S.BDataRequestContainsOtherDataRequest(
            this.m_DataRequested,
            e,
          );
        }
        BCheckDataRequestIncluded(e) {
          ("dev" != h.TS.WEB_UNIVERSE && "beta" != h.TS.WEB_UNIVERSE) ||
            (0, p.w)(
              this.BContainDataRequest(e),
              `Requested data without for ${(0, y.Rz)(this.m_eItemType)} @ ${this.m_unID}`,
              (0, i.HO)(e),
              (0, i.HO)(this.m_DataRequested),
            );
        }
        GetStoreItemType() {
          return this.m_eItemType;
        }
        GetID() {
          return this.m_unID;
        }
        GetUniqueID() {
          return this.m_eItemType + "_" + this.m_unID;
        }
        BIsVisible() {
          return this.m_bVisible;
        }
        GetName() {
          return this.m_strName;
        }
        GetStorePageURL() {
          return h.TS.STORE_BASE_URL + this.m_strStoreURLPath;
        }
        GetStorePageURLWithOverride() {
          return this.m_strStoreURLPathOverride &&
            this.m_strStoreURLPathOverride.length > 0
            ? this.GetStorePageURLOverride()
            : this.GetStorePageURL();
        }
        GetStorePageURLOverride() {
          return this.m_strStoreURLPathOverride;
        }
        GetCommunityPageURL() {
          return this.GetAppID()
            ? h.TS.COMMUNITY_BASE_URL + "app/" + this.GetAppID()
            : null;
        }
        GetCommunityDiscussionForumsURL() {
          return this.GetAppID()
            ? h.TS.COMMUNITY_BASE_URL +
                "app/" +
                this.GetAppID() +
                "/discussions/"
            : null;
        }
        GetAppID() {
          return this.m_unAppID;
        }
        GetAppIDToRun() {
          const e = this.GetParentAppID();
          return e && 11 != this.m_eAppType ? e : this.GetAppID();
        }
        GetAppType() {
          return this.m_eAppType;
        }
        BIsApplicationOrTool() {
          return 6 == this.GetAppType() || 13 == this.GetAppType();
        }
        BIsSalePage() {
          return (
            0 === this.GetStoreItemType() &&
            this.k_regexSalePage.test(this.GetStorePageURLWithOverride())
          );
        }
        GetSalePageVanityURL() {
          let e = this.GetStorePageURLWithOverride();
          return (
            0 === this.GetStoreItemType() &&
              ((e = this.GetStorePageURLWithOverride().replace(
                this.k_regexSalePage,
                "",
              )),
              e.endsWith("/") && (e = e.replace("/", ""))),
            e
          );
        }
        GetIncludedAppTypes() {
          return this.m_rgIncludedAppTypes;
        }
        GetIncludedAppIDs() {
          return this.m_rgIncludedAppIDs;
        }
        GetIncludedAppIDsOrSelf() {
          return 0 == this.GetStoreItemType()
            ? [this.GetID()]
            : this.GetIncludedAppIDs();
        }
        BIsFree() {
          return this.m_bIsFree;
        }
        BIsFreeTemporary() {
          return this.m_bIsFreeTemporary;
        }
        BIsFreeWeekend() {
          const e = Date.now() / 1e3;
          return (
            Boolean(this.m_freeWeekend) &&
            this.m_freeWeekend.start_time <= e &&
            e <= this.m_freeWeekend.end_time
          );
        }
        GetFreeWeekendEnd() {
          var e;
          return null === (e = this.m_freeWeekend) || void 0 === e
            ? void 0
            : e.end_time;
        }
        GetFreeWeekendPlayTextOverride() {
          var e;
          return null === (e = this.m_freeWeekend) || void 0 === e
            ? void 0
            : e.text;
        }
        BIsEarlyAccess() {
          return this.m_bIsEarlyAccess;
        }
        GetParentAppID() {
          var e;
          return null === (e = this.m_RelatedItems) || void 0 === e
            ? void 0
            : e.parent_appid;
        }
        GetContentDescriptorIDs() {
          return this.m_ContentDescriptorIDs;
        }
        HasContentDescriptorID(e) {
          var t;
          return null === (t = this.m_ContentDescriptorIDs) || void 0 === t
            ? void 0
            : t.includes(e);
        }
        GetStoreCategories_SupportedPlayers() {
          var e;
          return (
            (null === (e = this.m_StoreCategories) || void 0 === e
              ? void 0
              : e.supported_player_categoryids) || []
          );
        }
        GetStoreCategories_Features() {
          var e;
          return (
            (null === (e = this.m_StoreCategories) || void 0 === e
              ? void 0
              : e.feature_categoryids) || []
          );
        }
        GetStoreCategories_Controller() {
          var e;
          return (
            (null === (e = this.m_StoreCategories) || void 0 === e
              ? void 0
              : e.controller_categoryids) || []
          );
        }
        BHasStoreCategory(e) {
          return Boolean(
            this.GetStoreCategories_SupportedPlayers().find((t) => e === t) ||
              this.GetStoreCategories_Features().find((t) => e === t) ||
              this.GetStoreCategories_Controller().find((t) => e === t),
          );
        }
        GetFilteredReviewSummary() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_reviews: !0 }),
            null === (e = this.m_ReviewInfo) || void 0 === e
              ? void 0
              : e.summary_filtered
          );
        }
        GetUnfilteredReviewSummary() {
          var e, t;
          return (
            this.BCheckDataRequestIncluded({ include_reviews: !0 }),
            (null === (e = this.m_ReviewInfo) || void 0 === e
              ? void 0
              : e.summary_unfiltered) ||
              (null === (t = this.m_ReviewInfo) || void 0 === t
                ? void 0
                : t.summary_filtered)
          );
        }
        GetShortDescription() {
          var e, t;
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            null !==
              (t =
                null === (e = this.m_BasicInfo) || void 0 === e
                  ? void 0
                  : e.short_description) && void 0 !== t
              ? t
              : ""
          );
        }
        GetDeveloperNames() {
          var e, t, r, i;
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            null !==
              (i =
                null ===
                  (r =
                    null ===
                      (t =
                        null === (e = this.m_BasicInfo) || void 0 === e
                          ? void 0
                          : e.developers) || void 0 === t
                      ? void 0
                      : t.map((e) => e.name.trim())) || void 0 === r
                  ? void 0
                  : r.filter((e) => (null == e ? void 0 : e.length) > 0)) &&
            void 0 !== i
              ? i
              : []
          );
        }
        GetFranchiseNames() {
          var e, t, r, i;
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            null !==
              (i =
                null ===
                  (r =
                    null ===
                      (t =
                        null === (e = this.m_BasicInfo) || void 0 === e
                          ? void 0
                          : e.franchises) || void 0 === t
                      ? void 0
                      : t.map((e) => e.name.trim())) || void 0 === r
                  ? void 0
                  : r.filter((e) => (null == e ? void 0 : e.length) > 0)) &&
            void 0 !== i
              ? i
              : []
          );
        }
        GetPublisherNames() {
          var e, t, r, i;
          this.BCheckDataRequestIncluded({ include_basic_info: !0 });
          const s =
            null !==
              (i =
                null ===
                  (r =
                    null ===
                      (t =
                        null === (e = this.m_BasicInfo) || void 0 === e
                          ? void 0
                          : e.publishers) || void 0 === t
                      ? void 0
                      : t.map((e) => e.name.trim())) || void 0 === r
                  ? void 0
                  : r.filter((e) => (null == e ? void 0 : e.length) > 0)) &&
            void 0 !== i
              ? i
              : [];
          return (null == s ? void 0 : s.length) > 0
            ? s
            : this.GetDeveloperNames();
        }
        GetAllCreatorClanIDs() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo
              ? R([
                  ...this.m_BasicInfo.developers,
                  ...this.m_BasicInfo.publishers,
                  ...this.m_BasicInfo.franchises,
                ])
              : []
          );
        }
        GetAllPublisherCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? R(this.m_BasicInfo.publishers) : []
          );
        }
        GetAllDeveloperCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? R(this.m_BasicInfo.developers) : []
          );
        }
        GetAllFranchiseCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? R(this.m_BasicInfo.franchises) : []
          );
        }
        GetCapsuleHeadline() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            null === (e = this.m_BasicInfo) || void 0 === e
              ? void 0
              : e.capsule_headline
          );
        }
        GetTags() {
          return (
            this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
            this.m_rgStoreTags
          );
        }
        GetTagIDs() {
          return (
            this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
            this.m_rgStoreTagIDs
          );
        }
        BHasTags() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_tag_count: 1 }),
            (null === (e = this.m_rgStoreTagIDs) || void 0 === e
              ? void 0
              : e.length) > 0
          );
        }
        GetAssets() {
          return (
            this.BCheckDataRequestIncluded({ include_assets: !0 }),
            this.m_Assets
          );
        }
        GetAssetsWithoutOverrides() {
          return (
            this.BCheckDataRequestIncluded({
              include_assets_without_overrides: !0,
            }),
            this.m_AssetsWithoutOverrides
          );
        }
        GetOriginalReleaseDateRTime() {
          var e;
          this.BCheckDataRequestIncluded({ include_release: !0 });
          let t =
            null === (e = this.m_ReleaseInfo) || void 0 === e
              ? void 0
              : e.original_steam_release_date;
          return t || (t = this.GetReleaseDateRTime()), t;
        }
        GetReleaseDateRTime() {
          var e, t, r;
          if (
            (this.BCheckDataRequestIncluded({ include_release: !0 }),
            null === (e = this.m_ReleaseInfo) || void 0 === e
              ? void 0
              : e.is_coming_soon)
          )
            return 0;
          let i =
            null === (t = this.m_ReleaseInfo) || void 0 === t
              ? void 0
              : t.steam_release_date;
          return (
            i ||
              (i =
                null === (r = this.m_ReleaseInfo) || void 0 === r
                  ? void 0
                  : r.original_release_date),
            i
          );
        }
        GetFormattedSteamReleaseDate() {
          var e, t, r, i, s;
          if (
            (this.BCheckDataRequestIncluded({ include_release: !0 }),
            null === (e = this.m_ReleaseInfo) || void 0 === e
              ? void 0
              : e.is_coming_soon)
          ) {
            if (
              null === (t = this.m_ReleaseInfo) || void 0 === t
                ? void 0
                : t.coming_soon_display
            )
              return M(this.m_ReleaseInfo);
            if (
              null === (r = this.m_ReleaseInfo) || void 0 === r
                ? void 0
                : r.custom_release_date_message
            )
              return this.m_ReleaseInfo.custom_release_date_message;
            const e =
              null === (i = this.m_ReleaseInfo) || void 0 === i
                ? void 0
                : i.steam_release_date;
            return e
              ? (
                  null === (s = this.m_ReleaseInfo) || void 0 === s
                    ? void 0
                    : s.is_abridged_release_date
                )
                ? (0, f.sq)(new Date(1e3 * e))
                : (0, w.$z)(e)
              : "";
          }
          const a = this.GetReleaseDateRTime();
          return a ? (0, w.$z)(a) : "";
        }
        BIsComingSoon() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_release: !0 }),
            null === (e = this.m_ReleaseInfo) || void 0 === e
              ? void 0
              : e.is_coming_soon
          );
        }
        BIsCustomComingSoonDisplay() {
          var e, t;
          return (
            !!this.BIsComingSoon() &&
            ((
              null === (e = this.m_ReleaseInfo) || void 0 === e
                ? void 0
                : e.coming_soon_display
            )
              ? ["text_tba", "text_comingsoon"].includes(
                  this.m_ReleaseInfo.coming_soon_display,
                )
              : !!(null === (t = this.m_ReleaseInfo) || void 0 === t
                  ? void 0
                  : t.custom_release_date_message))
          );
        }
        BIsPrePurchase() {
          var e;
          return (
            this.BIsComingSoon() &&
            Boolean(
              null === (e = this.GetBestPurchaseOption()) || void 0 === e
                ? void 0
                : e.packageid,
            )
          );
        }
        BIsReleased() {
          return !this.BIsComingSoon();
        }
        GetPlatforms() {
          return (
            this.BCheckDataRequestIncluded({ include_platforms: !0 }),
            this.m_Platforms
          );
        }
        GetBestPurchaseOption() {
          return this.m_BestPurchaseOption;
        }
        GetBestPurchasePriceInCents() {
          var e;
          if (
            null === (e = this.m_BestPurchaseOption) || void 0 === e
              ? void 0
              : e.final_price_in_cents
          )
            return Number.parseInt(
              this.m_BestPurchaseOption.final_price_in_cents,
            );
        }
        GetBestPurchasePriceFormatted() {
          var e;
          return null === (e = this.m_BestPurchaseOption) || void 0 === e
            ? void 0
            : e.formatted_final_price;
        }
        GetBestPurchaseOriginalPriceInCents() {
          var e;
          return (
            null === (e = this.m_BestPurchaseOption) || void 0 === e
              ? void 0
              : e.original_price_in_cents
          )
            ? Number.parseInt(this.m_BestPurchaseOption.final_price_in_cents)
            : this.GetBestPurchasePriceInCents();
        }
        GetBestPurchaseOriginalPriceFormatted() {
          var e, t, r;
          return null !==
            (t =
              null === (e = this.m_BestPurchaseOption) || void 0 === e
                ? void 0
                : e.formatted_original_price) && void 0 !== t
            ? t
            : null === (r = this.m_BestPurchaseOption) || void 0 === r
              ? void 0
              : r.formatted_final_price;
        }
        GetAllPurchaseOptions() {
          return (
            this.BCheckDataRequestIncluded({
              include_all_purchase_options: !0,
            }),
            this.m_rgPurchaseOptions
          );
        }
        GetSelfPurchaseOption() {
          return this.m_SelfPurchaseOption;
        }
        BHasAgeSafeScreenshots() {
          return this.GetOnlyAllAgesSafeScreenshots().length > 0;
        }
        GetOnlyAllAgesSafeScreenshots() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_screenshots: !0 }),
            (null === (e = this.m_Screenshots) || void 0 === e
              ? void 0
              : e.GetOnlyAllAgesScreenshots()) || []
          );
        }
        GetBothAllAgesSafeAndMatureScreenshots() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_screenshots: !0 }),
            (null === (e = this.m_Screenshots) || void 0 === e
              ? void 0
              : e.GetAllAgesAndMatureScreenshots()) || []
          );
        }
        BHasTrailers() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            null === (e = this.m_Trailers) || void 0 === e
              ? void 0
              : e.BHasTrailers()
          );
        }
        BHasHighlightTrailers() {
          var e, t, r;
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            (null !==
              (r =
                null ===
                  (t =
                    null === (e = this.m_Trailers) || void 0 === e
                      ? void 0
                      : e.GetHighlightTrailers()) || void 0 === t
                  ? void 0
                  : t.length) && void 0 !== r
              ? r
              : 0) > 0
          );
        }
        GetAllTrailers() {
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            this.m_Trailers
          );
        }
        BHasSomeLanguageSupport(e) {
          var t;
          return (
            this.BCheckDataRequestIncluded({ include_supported_languages: !0 }),
            (null === (t = this.m_rgSupportedLanguages) || void 0 === t
              ? void 0
              : t.some(
                  (t) =>
                    t.elanguage == e &&
                    (t.supported || t.subtitles || t.full_audio),
                )) || !1
          );
        }
        GetAllLanguagesWithSomeSupport() {
          var e;
          return (
            this.BCheckDataRequestIncluded({ include_supported_languages: !0 }),
            (null === (e = this.m_rgSupportedLanguages) || void 0 === e
              ? void 0
              : e
                  .filter((e) => e.supported || e.subtitles || e.full_audio)
                  .map((e) => e.elanguage)) || []
          );
        }
        GetDataRequest() {
          return this.m_DataRequested;
        }
        GetMicroTrailer() {
          this.BCheckDataRequestIncluded({ include_trailers: !0 });
          let e = null;
          return (
            this.m_Trailers &&
              (this.m_Trailers.GetHighlightTrailers().forEach((t) => {
                !e && t.GetMicroTrailer() && (e = t.GetMicroTrailer());
              }),
              e ||
                this.m_Trailers.GetOtherTrailers().forEach((t) => {
                  !e && t.GetMicroTrailer() && (e = t.GetMicroTrailer());
                })),
            e
          );
        }
        GetLinks() {
          return (
            this.BCheckDataRequestIncluded({ include_links: !0 }),
            this.m_rgLinks
          );
        }
        ReplaceBestPurchaseOption(e) {
          this.m_BestPurchaseOption = e;
        }
        GetInternalName() {
          return this.m_strInternalName;
        }
      }
      function R(e) {
        if (!(null == e ? void 0 : e.length)) return [];
        const t = e.map((e) => e.creator_clan_account_id).filter((e) => !!e);
        return Array.from(new Set(t));
      }
      class I {
        constructor(e, t) {
          const r = e.asset_url_format();
          r &&
            (e.main_capsule() &&
              (this.m_strMainCapsuleURL = this.ConstructAssetURL(
                r,
                e.main_capsule(),
              )),
            e.small_capsule() &&
              (this.m_strSmallCapsuleURL = this.ConstructAssetURL(
                r,
                e.small_capsule(),
              )),
            e.header() &&
              (this.m_strHeaderURL = this.ConstructAssetURL(r, e.header())),
            e.package_header() &&
              (this.m_strPackageHeaderURL = this.ConstructAssetURL(
                r,
                e.package_header(),
              )),
            e.page_background() &&
              (this.m_strPageBackgroundURL = this.ConstructAssetURL(
                r,
                e.page_background(),
              )),
            e.hero_capsule() &&
              (this.m_strHeroCapsuleURL = this.ConstructAssetURL(
                r,
                e.hero_capsule(),
              )),
            e.hero_capsule_2x() &&
              (this.m_strHeroCapsuleURL_2x = this.ConstructAssetURL(
                r,
                e.hero_capsule_2x(),
              )),
            e.library_capsule() &&
              (this.m_strLibraryCapsuleURL = this.ConstructAssetURL(
                r,
                e.library_capsule(),
              )),
            e.library_capsule_2x() &&
              (this.m_strLibraryCapsuleURL_2x = this.ConstructAssetURL(
                r,
                e.library_capsule_2x(),
              )),
            e.library_hero() &&
              (this.m_strLibraryHeroURL = this.ConstructAssetURL(
                r,
                e.library_hero(),
              )),
            e.library_hero_2x() &&
              (this.m_strLibraryHeroURL_2x = this.ConstructAssetURL(
                r,
                e.library_hero_2x(),
              ))),
            e.community_icon() &&
              (this.m_strCommunityIcon = `${h.TS.MEDIA_CDN_COMMUNITY_URL}images/apps/${t}/${e.community_icon()}.jpg`);
        }
        GetMainCapsuleURL() {
          return this.m_strMainCapsuleURL;
        }
        GetSmallCapsuleURL() {
          return this.m_strSmallCapsuleURL;
        }
        GetHeaderURL() {
          return this.m_strHeaderURL;
        }
        GetPackageHeaderURL() {
          return this.m_strPackageHeaderURL;
        }
        GetPageBackgroundURL() {
          return this.m_strPageBackgroundURL;
        }
        GetHeroCapsuleURL() {
          return this.m_strHeroCapsuleURL;
        }
        GetHeroCapsuleURL_2x() {
          return this.m_strHeroCapsuleURL_2x;
        }
        GetLibraryCapsuleURL() {
          return this.m_strLibraryCapsuleURL;
        }
        GetLibraryCapsuleURL_2x() {
          return this.m_strLibraryCapsuleURL_2x;
        }
        GetLibraryHeroURL() {
          return this.m_strLibraryHeroURL;
        }
        GetLibraryHeroURL_2x() {
          return this.m_strLibraryHeroURL_2x;
        }
        ConstructAssetURL(e, t) {
          return (
            h.TS.BASE_URL_SHARED_CDN +
            "/store_item_assets/" +
            e.replace("${FILENAME}", t)
          );
        }
        GetCommunityIconURL() {
          return this.m_strCommunityIcon;
        }
      }
      class z {
        constructor(e) {
          (this.m_mapTrailer = new Map()),
            (this.m_higherTrailers = new Array()),
            (this.m_otherTrailers = new Array()),
            e.highlights() &&
              e.highlights().forEach((e) => {
                let t = new v(e);
                this.m_mapTrailer.set(t.GetTrailerID(), t),
                  this.m_higherTrailers.push(t);
              }),
            e.other_trailers() &&
              e.other_trailers().forEach((e) => {
                let t = new v(e);
                this.m_mapTrailer.set(t.GetTrailerID(), t),
                  this.m_otherTrailers.push(t);
              });
        }
        BHasTrailers() {
          return (
            this.m_higherTrailers.length > 0 || this.m_otherTrailers.length > 0
          );
        }
        GetHighlightTrailers() {
          return this.m_higherTrailers;
        }
        GetOtherTrailers() {
          return this.m_otherTrailers;
        }
        GetTrailerByID(e) {
          return this.m_mapTrailer.get(e);
        }
      }
      class v {
        constructor(e) {
          (this.m_strTrailerName = e.trailer_name()),
            (this.m_nBaseID = e.trailer_base_id());
          const t = e.trailer_url_format();
          t &&
            (e.trailer_480p() &&
              (this.m_Trailer480p = this.ExtractTrailerFormats(
                t,
                e.trailer_480p(),
              )),
            e.trailer_max() &&
              (this.m_TrailerMax = this.ExtractTrailerFormats(
                t,
                e.trailer_max(),
              )),
            e.microtrailer() &&
              (this.m_MicroTrailer = this.ExtractTrailerFormats(
                t,
                e.microtrailer(),
              )),
            e.screenshot_medium() &&
              (this.m_strScreenshotMedium = this.ConstructAssetURL(
                t,
                e.screenshot_medium(),
              )),
            e.screenshot_full() &&
              (this.m_strScreenshotFull = this.ConstructAssetURL(
                t,
                e.screenshot_full(),
              )));
        }
        GetName() {
          return this.m_strTrailerName;
        }
        GetTrailerID() {
          return this.m_nBaseID;
        }
        GetTrailer480p() {
          return this.m_Trailer480p;
        }
        GetTrailerMax() {
          return this.m_TrailerMax;
        }
        GetMicroTrailer() {
          return this.m_MicroTrailer;
        }
        GetScreenshot() {
          return this.m_strScreenshotFull
            ? this.m_strScreenshotFull
            : this.m_strScreenshotMedium;
        }
        ExtractTrailerFormats(e, t) {
          let r = {};
          return (
            t.forEach((t) => {
              "video/mp4" == t.type()
                ? (r.strMP4URL = this.ConstructAssetURL(e, t.filename()))
                : "video/webm" == t.type() &&
                  (r.strWebMURL = this.ConstructAssetURL(e, t.filename()));
            }),
            r
          );
        }
        ConstructAssetURL(e, t) {
          return (
            h.TS.VIDEO_CDN_URL +
            "/store_trailers/" +
            e.replace("${FILENAME}", t)
          );
        }
      }
      class q {
        constructor(e) {
          (this.m_rgAllScreenshots = new Array()),
            (this.m_rgOnlyAllAgesScreenshots = new Array());
          let t = 0,
            r = 0;
          const i = e.all_ages_screenshots() || [],
            s = e.mature_content_screenshots() || [];
          for (; t < i.length || r < s.length; ) {
            let e = t < i.length;
            if (t < i.length && r < s.length) {
              e = i[t].ordinal() < s[r].ordinal();
            }
            if (e) {
              const e =
                h.TS.BASE_URL_SHARED_CDN +
                "/store_item_assets/" +
                i[t].filename();
              this.m_rgAllScreenshots.push(e),
                this.m_rgOnlyAllAgesScreenshots.push(e),
                (t += 1);
            } else {
              const e =
                h.TS.BASE_URL_SHARED_CDN +
                "/store_item_assets/" +
                s[r].filename();
              this.m_rgAllScreenshots.push(e), (r += 1);
            }
          }
        }
        GetAllAgesAndMatureScreenshots() {
          return this.m_rgAllScreenshots;
        }
        GetOnlyAllAgesScreenshots() {
          return this.m_rgOnlyAllAgesScreenshots;
        }
      }
      function T(e, t) {
        if (!e) return t;
        if (!t) return e;
        return {
          include_assets: e.include_assets || t.include_assets,
          include_release: e.include_release || t.include_release,
          include_platforms: e.include_platforms || t.include_platforms,
          include_all_purchase_options:
            e.include_all_purchase_options || t.include_all_purchase_options,
          include_screenshots: e.include_screenshots || t.include_screenshots,
          include_trailers: e.include_trailers || t.include_trailers,
          include_ratings: e.include_ratings || t.include_ratings,
          include_tag_count:
            Math.max(e.include_tag_count || 0, t.include_tag_count || 0) ||
            void 0,
          include_reviews: e.include_reviews || t.include_reviews,
          include_basic_info: e.include_basic_info || t.include_basic_info,
          include_supported_languages:
            e.include_supported_languages || t.include_supported_languages,
          include_full_description:
            e.include_full_description || t.include_full_description,
          include_included_items:
            e.include_included_items || t.include_included_items,
          include_assets_without_overrides:
            e.include_assets_without_overrides ||
            t.include_assets_without_overrides,
          apply_user_filters: e.apply_user_filters || t.apply_user_filters,
          include_links: e.include_links || t.include_links,
        };
      }
      async function j(e, t) {
        const r = await e,
          i = await t;
        return 1 != r ? r : i;
      }
      class C {
        constructor() {
          (this.k_QueueWaitUntilRequestMS = 5),
            (this.k_nMaxBatchSize = 250),
            (this.m_bReturnUnavailableItems = !1),
            (this.m_mapApps = new Map()),
            (this.m_mapPackages = new Map()),
            (this.m_mapBundles = new Map()),
            (this.m_mapTags = new Map()),
            (this.m_mapCreators = new Map()),
            (this.m_mapHubCategories = new Map()),
            (this.m_setUnavailableApps = new Set()),
            (this.m_setUnavailablePackages = new Set()),
            (this.m_setUnavailableBundles = new Set()),
            (this.m_setUnavailableTags = new Set()),
            (this.m_setUnavailableCreators = new Set()),
            (this.m_setUnavailableHubCategories = new Set()),
            (this.m_setUnavailableDueToCountryRestrictionApps = new Set()),
            (this.m_setUnavailableDueToCountryRestrictionPackages = new Set()),
            (this.m_setUnavailableDueToCountryRestrictionBundles = new Set()),
            (this.m_mapAppsInFlight = new Map()),
            (this.m_mapPackageInFlight = new Map()),
            (this.m_mapBundleInFlight = new Map()),
            (this.m_mapTagsInFlight = new Map()),
            (this.m_mapCreatorsInFlight = new Map()),
            (this.m_mapHubCategoriesInFlight = new Map()),
            (this.m_SteamInterface = null),
            (this.m_bUsePartnerAPI = !1),
            (this.m_bInitialized = !1),
            (this.m_bActivelyResettingCache = !1),
            (this.m_setPendingAppInfo = new Set()),
            (this.m_setPendingBundleInfo = new Set()),
            (this.m_setPendingPackageInfo = new Set()),
            (this.m_setPendingTagInfo = new Set()),
            (this.m_setPendingCreatorInfo = new Set()),
            (this.m_setPendingHubCategoryInfo = new Set()),
            (this.m_setPendingDataRequest = {}),
            (this.m_PendingInfoResolve = void 0),
            (this.m_PendingTimer = void 0),
            (this.k_AlreadyResolvedOK = Promise.resolve(1)),
            (this.k_AlreadyResolvedInvalid = Promise.resolve(8)),
            (this.k_AlreadyResolvedBusy = Promise.resolve(10));
        }
        static Get() {
          return (
            C.sm_instance ||
              ((C.sm_instance = new C()),
              (window.StoreItemCache = C.sm_instance)),
            C.sm_instance
          );
        }
        static async Initialize(e, t) {
          (0, p.w)(
            !C.Get().m_bInitialized,
            "CStoreItemCache was already initialized; initialize it only once.",
          ),
            (C.Get().m_SteamInterface = e),
            (C.Get().m_bUsePartnerAPI = !!t),
            (C.Get().m_bInitialized = !0);
        }
        GetSteamInterface() {
          return this.m_SteamInterface;
        }
        SetSteamInterface(e) {
          this.m_SteamInterface = e;
        }
        SetReturnUnavailableItems(e) {
          this.m_bReturnUnavailableItems = e;
        }
        GetReturnUnavailableItems() {
          return this.m_bReturnUnavailableItems;
        }
        async ResetCache() {
          (this.m_bActivelyResettingCache = !0), this.FlushPendingInfo();
          let e = [];
          this.m_mapAppsInFlight.forEach((t) => {
            e.push(t.promise);
          }),
            this.m_mapBundleInFlight.forEach((t) => {
              e.push(t.promise);
            }),
            this.m_mapPackageInFlight.forEach((t) => {
              e.push(t.promise);
            }),
            this.m_mapTagsInFlight.forEach((t) => {
              e.push(t.promise);
            }),
            this.m_mapCreatorsInFlight.forEach((t) => {
              e.push(t.promise);
            }),
            this.m_mapHubCategoriesInFlight.forEach((t) => {
              e.push(t.promise);
            }),
            await Promise.all(e),
            this.m_mapApps.clear(),
            this.m_mapBundles.clear(),
            this.m_mapPackages.clear(),
            this.m_mapTagsInFlight.clear(),
            this.m_mapCreatorsInFlight.clear(),
            this.m_mapHubCategoriesInFlight.clear(),
            (this.m_bActivelyResettingCache = !1);
        }
        static BIsInitialized() {
          return C.Get().m_bInitialized;
        }
        async QueueAppRequest(e, t) {
          return this.QueueStoreItemRequest(e, 0, t);
        }
        async QueuePackageRequest(e, t) {
          return this.QueueStoreItemRequest(e, 1, t);
        }
        async QueueBundleRequest(e, t) {
          return this.QueueStoreItemRequest(e, 2, t);
        }
        async QueueTagRequest(e, t) {
          return this.QueueStoreItemRequest(e, 4, t);
        }
        async QueueCreatorRequest(e, t) {
          return this.QueueStoreItemRequest(e, 5, t);
        }
        async QueueHubCategoryRequest(e, t) {
          return this.QueueStoreItemRequest(e, 6, t);
        }
        static ValidateDataRequest(e) {
          const t = [
            e.include_assets,
            e.include_release,
            e.include_platforms,
            e.include_all_purchase_options,
            e.include_screenshots,
            e.include_trailers,
            e.include_ratings,
            e.include_reviews,
            e.include_basic_info,
            e.include_supported_languages,
            e.include_links,
          ];
          for (const e of t) if (!0 !== e && void 0 !== e) return !1;
          return !0;
        }
        async QueueMultipleAppRequests(e, t) {
          if (!e || 0 == e.length) return 1;
          const r = (
            await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 0, t)))
          ).filter((e) => 1 != e);
          return r.length > 0 ? r[0] : 1;
        }
        async QueueMultiplePackageRequests(e, t) {
          if (!e || 0 == e.length) return 1;
          const r = (
            await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 1, t)))
          ).filter((e) => 1 != e);
          return r.length > 0 ? r[0] : 1;
        }
        async QueueMultipleBundleRequests(e, t) {
          if (!e || 0 == e.length) return 1;
          const r = (
            await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 2, t)))
          ).filter((e) => 1 != e);
          return r.length > 0 ? r[0] : 1;
        }
        async QueueMultipleTagRequests(e, t) {
          if (!e || 0 == e.length) return 1;
          const r = (
            await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 4, t)))
          ).filter((e) => 1 != e);
          return r.length > 0 ? r[0] : 1;
        }
        async QueueMultipleCreatorRequests(e, t) {
          if (!e || 0 == e.length) return 1;
          const r = (
            await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 5, t)))
          ).filter((e) => 1 != e);
          return r.length > 0 ? r[0] : 1;
        }
        async QueueMultipleHubCategoryRequests(e, t) {
          if (!e || 0 == e.length) return 1;
          const r = (
            await Promise.all(e.map((e) => this.QueueStoreItemRequest(e, 6, t)))
          ).filter((e) => 1 != e);
          return r.length > 0 ? r[0] : 1;
        }
        async QueueMultipleStoreItemRequests(e, t, r) {
          if (!e || 0 == e.length) return 1;
          const i = (
            await Promise.all(
              e.map((e, i) => this.QueueStoreItemRequest(e, t[i], r)),
            )
          ).filter((e) => 1 != e);
          return i.length > 0 ? i[0] : 1;
        }
        async QueueStoreItemRequest(e, t, r) {
          if (
            ((0, p.w)(
              C.ValidateDataRequest(r),
              "Invalid Data Request: " + JSON.stringify(r),
            ),
            "string" == typeof e && (e = parseInt(e)),
            this.m_bActivelyResettingCache)
          )
            return (
              console.log(
                "Rejecting store item request due to currently clearing the cache",
              ),
              this.k_AlreadyResolvedBusy
            );
          if (!e)
            return (
              (0, p.w)(
                !e,
                `unexpected id ${e} of zero or undefined for type ${t}`,
              ),
              this.k_AlreadyResolvedInvalid
            );
          const i = this.GetPreviousSupersetLoadPromise(e, t, r);
          if (i) return i;
          switch (
            (this.m_PendingInfoPromise ||
              ((this.m_PendingInfoPromise = new Promise(
                (e) => (this.m_PendingInfoResolve = e),
              )),
              (this.m_PendingTimer = window.setTimeout(
                () => this.FlushPendingInfo(),
                this.k_QueueWaitUntilRequestMS,
              ))),
            (this.m_setPendingDataRequest = T(this.m_setPendingDataRequest, r)),
            t)
          ) {
            case 0:
              this.m_setPendingAppInfo.add(e);
              break;
            case 2:
              this.m_setPendingBundleInfo.add(e);
              break;
            case 1:
              this.m_setPendingPackageInfo.add(e);
              break;
            case 4:
              this.m_setPendingTagInfo.add(e);
              break;
            case 5:
              this.m_setPendingCreatorInfo.add(e);
              break;
            case 6:
              this.m_setPendingHubCategoryInfo.add(e);
              break;
            default:
              (0, p.w)(!1, `Unexpected Type ${t}`);
          }
          const s = this.m_PendingInfoPromise;
          return (
            this.m_setPendingAppInfo.size +
              this.m_setPendingPackageInfo.size +
              this.m_setPendingBundleInfo.size >=
              this.k_nMaxBatchSize &&
              (this.m_PendingTimer && window.clearTimeout(this.m_PendingTimer),
              this.FlushPendingInfo()),
            s
          );
        }
        async FlushPendingInfo() {
          if (void 0 === this.m_PendingInfoResolve) return;
          const e = this.m_PendingInfoResolve,
            t = Array.from(this.m_setPendingAppInfo),
            r = Array.from(this.m_setPendingPackageInfo),
            i = Array.from(this.m_setPendingBundleInfo),
            s = Array.from(this.m_setPendingTagInfo),
            a = Array.from(this.m_setPendingCreatorInfo),
            n = Array.from(this.m_setPendingHubCategoryInfo),
            o = this.m_setPendingDataRequest;
          (this.m_PendingInfoPromise = void 0),
            (this.m_PendingInfoResolve = void 0),
            this.m_setPendingAppInfo.clear(),
            this.m_setPendingBundleInfo.clear(),
            this.m_setPendingPackageInfo.clear(),
            this.m_setPendingTagInfo.clear(),
            this.m_setPendingCreatorInfo.clear(),
            this.m_setPendingHubCategoryInfo.clear(),
            (this.m_setPendingDataRequest = {}),
            (this.m_PendingTimer = void 0),
            this.HintLoadStoreItems(void 0, t, r, i, s, a, n, o).then((t) =>
              e(t),
            );
        }
        async HintLoadStoreApps(e, t) {
          return this.HintLoadStoreItems(
            null,
            e,
            null,
            null,
            null,
            null,
            null,
            t,
          );
        }
        async HintLoadStorePackages(e, t) {
          return this.HintLoadStoreItems(
            null,
            null,
            e,
            null,
            null,
            null,
            null,
            t,
          );
        }
        async HintLoadStoreBundles(e, t) {
          return this.HintLoadStoreItems(
            null,
            null,
            null,
            e,
            null,
            null,
            null,
            t,
          );
        }
        GetPreviousSupersetLoadPromise(e, t, r) {
          if (this.BHasStoreItem(e, t, r) || this.BIsStoreItemMissing(e, t))
            return this.k_AlreadyResolvedOK;
          let i = null;
          switch (t) {
            case 0:
              i = this.m_mapAppsInFlight.get(e);
              break;
            case 1:
              i = this.m_mapPackageInFlight.get(e);
              break;
            case 2:
              i = this.m_mapBundleInFlight.get(e);
              break;
            case 4:
              i = this.m_mapTagsInFlight.get(e);
              break;
            case 5:
              i = this.m_mapCreatorsInFlight.get(e);
              break;
            case 6:
              i = this.m_mapHubCategoriesInFlight.get(e);
          }
          return i && S.BDataRequestContainsOtherDataRequest(i.dataRequest, r)
            ? i.promise
            : null;
        }
        async HintLoadStoreItems(e, t, r, i, s, a, n, o) {
          let u = null;
          const c = new Promise((e) => (u = e));
          let m = [],
            d = [];
          (t || []).forEach((e) => {
            const t = this.GetPreviousSupersetLoadPromise(e, 0, o);
            if (t) d.push(t);
            else {
              m.push(l.O4.fromObject({ appid: e }));
              let t = T(this.GetStoreItemDataRequest(e, 0), o);
              const r = this.m_mapAppsInFlight.get(e);
              (t = T(null == r ? void 0 : r.dataRequest, t)),
                r && d.push(r.promise),
                this.m_mapAppsInFlight.set(e, {
                  promise: r ? j(r.promise, c) : c,
                  dataRequest: t,
                });
            }
          }),
            (r || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(e, 1, o);
              if (t) d.push(t);
              else {
                m.push(l.O4.fromObject({ packageid: e }));
                let t = T(this.GetStoreItemDataRequest(e, 1), o);
                const r = this.m_mapPackageInFlight.get(e);
                (t = T(null == r ? void 0 : r.dataRequest, t)),
                  r && d.push(r.promise),
                  this.m_mapPackageInFlight.set(e, {
                    promise: r ? j(r.promise, c) : c,
                    dataRequest: t,
                  });
              }
            }),
            (i || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(e, 2, o);
              if (t) d.push(t);
              else {
                m.push(l.O4.fromObject({ bundleid: e }));
                let t = T(this.GetStoreItemDataRequest(e, 2), o);
                const r = this.m_mapBundleInFlight.get(e);
                (t = T(null == r ? void 0 : r.dataRequest, t)),
                  r && d.push(r.promise),
                  this.m_mapBundleInFlight.set(e, {
                    promise: r ? j(r.promise, c) : c,
                    dataRequest: t,
                  });
              }
            }),
            (s || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(e, 4, o);
              if (t) d.push(t);
              else {
                m.push(l.O4.fromObject({ tagid: e }));
                let t = T(this.GetStoreItemDataRequest(e, 4), o);
                const r = this.m_mapTagsInFlight.get(e);
                (t = T(null == r ? void 0 : r.dataRequest, t)),
                  r && d.push(r.promise),
                  this.m_mapTagsInFlight.set(e, {
                    promise: r ? j(r.promise, c) : c,
                    dataRequest: t,
                  });
              }
            }),
            (a || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(e, 5, o);
              if (t) d.push(t);
              else {
                m.push(l.O4.fromObject({ creatorid: e }));
                let t = T(this.GetStoreItemDataRequest(e, 5), o);
                const r = this.m_mapCreatorsInFlight.get(e);
                (t = T(null == r ? void 0 : r.dataRequest, t)),
                  r && d.push(r.promise),
                  this.m_mapCreatorsInFlight.set(e, {
                    promise: r ? j(r.promise, c) : c,
                    dataRequest: t,
                  });
              }
            }),
            (n || []).forEach((e) => {
              const t = this.GetPreviousSupersetLoadPromise(e, 6, o);
              if (t) d.push(t);
              else {
                m.push(l.O4.fromObject({ hubcategoryid: e }));
                let t = T(this.GetStoreItemDataRequest(e, 6), o);
                const r = this.m_mapHubCategoriesInFlight.get(e);
                (t = T(null == r ? void 0 : r.dataRequest, t)),
                  r && d.push(r.promise),
                  this.m_mapHubCategoriesInFlight.set(e, {
                    promise: r ? j(r.promise, c) : c,
                    dataRequest: t,
                  });
              }
            });
          let _ = 1;
          if (
            (m.length > 0 &&
              (_ = await this.InternalHandleLoadStoreItems(e, m, o)),
            u(_),
            d.length > 0)
          ) {
            const e = await Promise.all(d);
            for (const t of e) 1 != t && 1 == _ && (_ = t);
          }
          return (
            (t || []).forEach((e) => this.m_mapAppsInFlight.delete(e)),
            (r || []).forEach((e) => this.m_mapPackageInFlight.delete(e)),
            (i || []).forEach((e) => this.m_mapBundleInFlight.delete(e)),
            (s || []).forEach((e) => this.m_mapTagsInFlight.delete(e)),
            (a || []).forEach((e) => this.m_mapCreatorsInFlight.delete(e)),
            (n || []).forEach((e) => this.m_mapHubCategoriesInFlight.delete(e)),
            _
          );
        }
        MarkStoreItemIDUnavailable(e) {
          (e || []).forEach((e) => {
            e.appid()
              ? (this.m_setUnavailableApps.add(e.appid()),
                this.m_mapApps.delete(e.appid()))
              : e.packageid()
                ? (this.m_setUnavailablePackages.add(e.packageid()),
                  this.m_mapPackages.delete(e.packageid()))
                : e.bundleid()
                  ? (this.m_setUnavailableBundles.add(e.bundleid()),
                    this.m_mapBundles.delete(e.bundleid()))
                  : e.tagid()
                    ? (this.m_setUnavailableTags.add(e.tagid()),
                      this.m_mapTags.delete(e.tagid()))
                    : e.creatorid()
                      ? (this.m_setUnavailableCreators.add(e.creatorid()),
                        this.m_mapCreators.delete(e.creatorid()))
                      : e.hubcategoryid() &&
                        (this.m_setUnavailableHubCategories.add(
                          e.hubcategoryid(),
                        ),
                        this.m_mapHubCategories.delete(e.hubcategoryid()));
          });
        }
        SortStoreItems(e) {
          let t = e.slice();
          return (
            t.sort((e, t) => {
              var r, i, s, a, n, o, l, u, c, m, d, _;
              let g = null !== (r = e.appid()) && void 0 !== r ? r : 0,
                p = null !== (i = t.appid()) && void 0 !== i ? i : 0;
              if (g != p) return g - p;
              let B = null !== (s = e.packageid()) && void 0 !== s ? s : 0,
                h = null !== (a = t.packageid()) && void 0 !== a ? a : 0;
              if (B != h) return B - h;
              let b = null !== (n = e.bundleid()) && void 0 !== n ? n : 0,
                y = null !== (o = t.bundleid()) && void 0 !== o ? o : 0;
              if (b != y) return b - y;
              let w = null !== (l = e.tagid()) && void 0 !== l ? l : 0,
                f = null !== (u = t.tagid()) && void 0 !== u ? u : 0;
              if (w != f) return w - f;
              let M = null !== (c = e.creatorid()) && void 0 !== c ? c : 0,
                S = null !== (m = t.creatorid()) && void 0 !== m ? m : 0;
              if (M != S) return M - S;
              let R = null !== (d = e.hubcategoryid()) && void 0 !== d ? d : 0,
                I = null !== (_ = t.hubcategoryid()) && void 0 !== _ ? _ : 0;
              return R != I ? R - I : 0;
            }),
            t
          );
        }
        async InternalHandleLoadStoreItems(e, t, r) {
          let n = 1;
          e ||
            (this.GetSteamInterface() ||
              this.SetSteamInterface(new a.D(h.TS.WEBAPI_BASE_URL)),
            (e = this.GetSteamInterface())),
            (t = this.SortStoreItems(t)),
            r.include_included_items &&
              (r = {
                ...r,
                included_item_data_request: {
                  ...r,
                  include_included_items: !1,
                },
              });
          const o = new Array();
          try {
            const a = [];
            for (; t.length > 0; ) {
              const i = t.splice(0, this.k_nMaxBatchSize);
              if ((o.push(i), this.m_bUsePartnerAPI)) {
                const t = s.w.Init(c);
                t.Body().set_include_unpublished(!1);
                const n = t.Body().request(!0);
                n.set_context((0, b.hS)(this.m_bUsePartnerAPI)),
                  n.set_data_request(l.gn.fromObject(r)),
                  n.set_ids(i),
                  a.push(g.GetItems(e.GetServiceTransport(), t));
              } else {
                const t = s.w.Init(l.eE);
                (0, b.rV)(t, this.m_bUsePartnerAPI),
                  (0, b.Bn)(t, r),
                  t.Body().set_ids(i),
                  a.push(l.$4.GetItems(e.GetAnonymousServiceTransport(), t));
              }
            }
            (await Promise.all(a)).forEach((e, s) => {
              1 == e.GetEResult()
                ? e
                    .Body()
                    .store_items()
                    .forEach((s) => {
                      const a = s.id(),
                        n = s.item_type();
                      let o =
                          this.m_bReturnUnavailableItems && 15 == s.success(),
                        l = 1 == s.success() && !this.BIsStoreItemMissing(a, n);
                      if (o || l) this.ReadItem(s, r);
                      else {
                        switch (
                          ("dev" == h.TS.WEB_UNIVERSE &&
                            console.warn(
                              `Failed to load ${a} type ${n} with error ${s.success()}`,
                              s,
                            ),
                          n)
                        ) {
                          case 0:
                            this.m_setUnavailableApps.add(a),
                              this.m_mapApps.delete(a);
                            break;
                          case 1:
                            this.m_setUnavailablePackages.add(a),
                              this.m_mapPackages.delete(a);
                            break;
                          case 2:
                            this.m_setUnavailableBundles.add(a),
                              this.m_mapBundles.delete(a);
                            break;
                          case 4:
                            this.m_setUnavailableTags.add(a),
                              this.m_mapTags.delete(a);
                            break;
                          case 5:
                            this.m_setUnavailableCreators.add(a),
                              this.m_mapCreators.delete(a);
                            break;
                          case 6:
                            this.m_setUnavailableHubCategories.add(a),
                              this.m_mapHubCategories.delete(a);
                            break;
                          default:
                            console.error(
                              "CStoreItemCache.InternalHandleLoadStoreItems unexpected item_type in response " +
                                n +
                                " " +
                                a,
                            );
                        }
                        if (s.unvailable_for_country_restriction())
                          switch (n) {
                            case 0:
                              this.m_setUnavailableDueToCountryRestrictionApps.add(
                                a,
                              );
                              break;
                            case 1:
                              this.m_setUnavailableDueToCountryRestrictionPackages.add(
                                a,
                              );
                              break;
                            case 2:
                              this.m_setUnavailableDueToCountryRestrictionBundles.add(
                                a,
                              );
                              break;
                            case 4:
                            case 5:
                            case 6:
                              console.error(
                                "CStoreItemCache::InternalHandleLoadStoreItems - tags, creators or categories don't have country restrictions. eResult: " +
                                  e.GetEResult() +
                                  " message: " +
                                  e.Hdr().error_message(),
                                (0, i.HO)(t),
                              );
                          }
                      }
                    })
                : (console.warn(
                    "CStoreItemCache::InternalHandleLoadStoreItems failed with eResult: " +
                      e.GetEResult() +
                      " message: " +
                      e.Hdr().error_message(),
                    (0, i.HO)(t),
                  ),
                  (1 == e.Hdr().transport_error() || h.TS.FROM_WEB) &&
                    this.MarkStoreItemIDUnavailable(o[s]),
                  1 == n && (n = e.GetEResult()));
            });
          } catch (e) {
            const t = (0, B.H)(e);
            return (
              console.error(
                "CStoreItemCache::InternalHandleLoadStoreItems failed: " +
                  t.strErrorMsg,
                t,
              ),
              o.forEach((e) => this.MarkStoreItemIDUnavailable(e)),
              79
            );
          }
          return n;
        }
        GetMapForType(e) {
          let t;
          switch (e) {
            case 0:
              t = this.m_mapApps;
              break;
            case 2:
              t = this.m_mapBundles;
              break;
            case 1:
              t = this.m_mapPackages;
              break;
            case 4:
              t = this.m_mapTags;
              break;
            case 5:
              t = this.m_mapCreators;
              break;
            case 6:
              t = this.m_mapHubCategories;
              break;
            default:
              console.error("Invalid map type requested", e);
          }
          return t;
        }
        BHasStoreItem(e, t, r) {
          let i = this.GetMapForType(t);
          return Boolean(
            i && i.has(e) && (!r || i.get(e).BContainDataRequest(r)),
          );
        }
        GetStoreItem(e, t) {
          if (-1 == t || 3 == t) return;
          const r = this.GetMapForType(t);
          return null == r ? void 0 : r.get(e);
        }
        GetStoreItemWithLegacyVisibilityCheck(e, t) {
          const r = this.GetStoreItem(e, t);
          return r && (this.m_bReturnUnavailableItems || r.BIsVisible())
            ? r
            : void 0;
        }
        GetStoreItemDataRequest(e, t) {
          var r, i;
          return (
            (null ===
              (i =
                null === (r = this.GetMapForType(t)) || void 0 === r
                  ? void 0
                  : r.get(e)) || void 0 === i
              ? void 0
              : i.GetDataRequest()) || null
          );
        }
        BHasApp(e, t) {
          return this.BHasStoreItem(e, 0, t);
        }
        GetApp(e) {
          return this.GetStoreItem(e, 0);
        }
        BHasPackage(e, t) {
          return this.BHasStoreItem(e, 1, t);
        }
        GetPackage(e) {
          return this.GetStoreItem(e, 1);
        }
        BHasBundle(e, t) {
          return this.BHasStoreItem(e, 2, t);
        }
        GetBundle(e) {
          return this.GetStoreItem(e, 2);
        }
        BHasTag(e, t) {
          return this.BHasStoreItem(e, 4, t);
        }
        GetTag(e) {
          return this.GetStoreItem(e, 4);
        }
        BHasCreator(e, t) {
          return this.BHasStoreItem(e, 5, t);
        }
        GetCreator(e) {
          return this.GetStoreItem(e, 5);
        }
        BHasHubCategory(e, t) {
          return this.BHasStoreItem(e, 6, t);
        }
        GetHubCategory(e) {
          return this.GetStoreItem(e, 6);
        }
        BIsStoreItemMissing(e, t) {
          switch (t) {
            case 0:
              return this.BIsAppMissing(e);
            case 1:
              return this.BIsPackageMissing(e);
            case 2:
              return this.BIsBundleMissing(e);
            case 4:
              return this.BIsTagMissing(e);
            case 5:
              return this.BIsCreatorMissing(e);
            case 6:
              return this.BIsHubCategoryMissing(e);
            default:
              return console.error("BStoreItemMissing invalid type", t), !0;
          }
        }
        BIsAppMissing(e) {
          return this.m_setUnavailableApps.has(e);
        }
        BIsPackageMissing(e) {
          return this.m_setUnavailablePackages.has(e);
        }
        BIsBundleMissing(e) {
          return this.m_setUnavailableBundles.has(e);
        }
        BIsTagMissing(e) {
          return this.m_setUnavailableTags.has(e);
        }
        BIsCreatorMissing(e) {
          return this.m_setUnavailableCreators.has(e);
        }
        BIsHubCategoryMissing(e) {
          return this.m_setUnavailableHubCategories.has(e);
        }
        BIsStoreItemUnavailableDueToCountryRestriction(e, t) {
          switch (t) {
            case 0:
              return this.BIsAppUnavailableDueToCountryRestriction(e);
            case 1:
              return this.BIsPackageUnavailableDueToCountryRestriction(e);
            case 2:
              return this.BIsBundleUnavailableDueToCountryRestriction(e);
            case 4:
            case 5:
            case 6:
              return (
                console.error(
                  "BIsStoreItemUnavailableDueToCountryRestriction - tags, creators or categories don't have country restrictions. type: ",
                  t,
                ),
                !0
              );
            default:
              return console.error("BStoreItemMissing invalid type", t), !0;
          }
        }
        BIsAppUnavailableDueToCountryRestriction(e) {
          return this.m_setUnavailableDueToCountryRestrictionApps.has(e);
        }
        BIsPackageUnavailableDueToCountryRestriction(e) {
          return this.m_setUnavailableDueToCountryRestrictionPackages.has(e);
        }
        BIsBundleUnavailableDueToCountryRestriction(e) {
          return this.m_setUnavailableDueToCountryRestrictionBundles.has(e);
        }
        ReadResults(e, t) {
          let r = [];
          for (const i of e) r.push(this.ReadItem(i, t));
          return r;
        }
        ReadItem(e, t) {
          const r = e.item_type();
          let i = null;
          switch (r) {
            case 0:
              i = this.m_mapApps;
              break;
            case 1:
              i = this.m_mapPackages;
              break;
            case 2:
              i = this.m_mapBundles;
              break;
            case 4:
              i = this.m_mapTags;
              break;
            case 5:
              i = this.m_mapCreators;
              break;
            case 6:
              i = this.m_mapHubCategories;
              break;
            default:
              return console.error(`Invalid item type: ${r}`), null;
          }
          let s = i.get(e.id());
          if (
            (s ? s.MergeData(e, t) : ((s = new S(e, t)), i.set(e.id(), s)),
            t.include_included_items && e.included_items(!1))
          ) {
            for (const r of e.included_items().included_apps())
              this.ReadItem(r, t.included_item_data_request);
            for (const r of e.included_items().included_packages())
              this.ReadItem(r, t.included_item_data_request);
          }
          return s;
        }
      }
      (C.k_DataRequest_CommonOnly = {}),
        (C.k_DataRequest_BasicInfo = { include_basic_info: !0 }),
        (C.k_DataRequest_Assets = { include_assets: !0 }),
        (C.k_DataRequest_IncludeAll = {
          include_assets: !0,
          include_release: !0,
          include_platforms: !0,
          include_all_purchase_options: !0,
          include_screenshots: !0,
          include_trailers: !0,
          include_ratings: !0,
          include_tag_count: 20,
          include_reviews: !0,
          include_basic_info: !0,
          include_supported_languages: !0,
          include_links: !0,
        });
      const F = C;
    },
    62792: (e, t, r) => {
      var i;
      function s(e) {
        return "app" == e ? 0 : "sub" == e ? 1 : 2;
      }
      function a(e) {
        switch (e) {
          case 0:
            return "app";
          case 2:
            return "bundle";
          case 1:
            return "package";
          case 3:
            return "mtx";
        }
        return "invalid";
      }
      function n(e) {
        switch (e) {
          case "sub":
            return 1;
          case "bundle":
            return 2;
          default:
            return 0;
        }
      }
      function o(e, t) {
        switch (e) {
          case 2:
            return "bundle";
          case 1:
            return "sub";
          default:
            switch (t) {
              case 0:
              default:
                return "game";
              case 12:
                return "beta";
              case 4:
                return "dlc";
              case 1:
                return "demo";
              case 6:
                return "software";
              case 7:
              case 3:
                return "video";
              case 10:
                return "hardware";
              case 11:
                return "music";
              case 13:
                return "tool";
              case 2:
                return "mod";
              case 9:
                return "episode";
              case 8:
                return "series";
            }
        }
      }
      function l(e) {
        switch (e) {
          case 2:
            return "bundle";
          case 1:
            return "sub";
          default:
            return "app";
        }
      }
      r.d(t, {
        JK: () => s,
        Rz: () => a,
        SW: () => n,
        TM: () => l,
        _4: () => o,
        by: () => i,
      }),
        (function (e) {
          (e[(e.k_NotRejected = -1)] = "k_NotRejected"),
            (e[(e.k_RejectNoMainCap = 0)] = "k_RejectNoMainCap"),
            (e[(e.k_RejectWrongPlatform = 1)] = "k_RejectWrongPlatform"),
            (e[(e.k_RejectNoComingSoon = 2)] = "k_RejectNoComingSoon"),
            (e[(e.k_RejectNoVR = 3)] = "k_RejectNoVR"),
            (e[(e.k_RejectCreatorClan = 4)] = "k_RejectCreatorClan"),
            (e[(e.k_RejectIgnoredGame = 5)] = "k_RejectIgnoredGame"),
            (e[(e.k_RejectSupportedLanguage = 6)] =
              "k_RejectSupportedLanguage"),
            (e[(e.k_RejectNotLoaded = 7)] = "k_RejectNotLoaded"),
            (e[(e.k_RejectIgnoreGameTags = 8)] = "k_RejectIgnoreGameTags"),
            (e[(e.k_RejectIgnoreContentDescriptors = 9)] =
              "k_RejectIgnoreContentDescriptors"),
            (e[(e.k_RejectEarlyAccess = 10)] = "k_RejectEarlyAccess"),
            (e[(e.k_RejectSoftware = 11)] = "k_RejectSoftware"),
            (e[(e.k_RejectDLC = 12)] = "k_RejectDLC"),
            (e[(e.k_RejectInLibrary = 13)] = "k_RejectInLibrary"),
            (e[(e.k_RejectNotInLibrary = 14)] = "k_RejectNotInLibrary"),
            (e[(e.k_RejectVideo = 15)] = "k_RejectVideo"),
            (e[(e.k_RejectNoDiscount = 16)] = "k_RejectNoDiscount"),
            (e[(e.k_RejectAlreadyDisplayed = 17)] = "k_RejectAlreadyDisplayed");
        })(i || (i = {}));
    },
    55263: (e, t, r) => {
      r.d(t, {
        G6: () => l,
        Gg: () => c,
        mZ: () => m,
        t7: () => u,
        zX: () => _,
      });
      var i = r(41735),
        s = r.n(i),
        a = r(90626),
        n = r(56093),
        o = r(23825);
      function l(e, t, r, i) {
        const l = (0, a.useRef)(),
          u = (0, a.useRef)(void 0),
          c = (0, n.CH)();
        l.current = e;
        const [m, d] = (0, a.useState)(void 0),
          {
            include_assets: _,
            include_release: g,
            include_platforms: p,
            include_all_purchase_options: B,
            include_screenshots: h,
            include_trailers: b,
            include_ratings: y,
            include_tag_count: w,
            include_reviews: f,
            include_basic_info: M,
            include_supported_languages: S,
            include_full_description: R,
            include_included_items: I,
            include_assets_without_overrides: z,
            apply_user_filters: v,
            include_links: q,
          } = r;
        if (
          ((0, a.useEffect)(() => {
            const r = {
              include_assets: _,
              include_release: g,
              include_platforms: p,
              include_all_purchase_options: B,
              include_screenshots: h,
              include_trailers: b,
              include_ratings: y,
              include_tag_count: w,
              include_reviews: f,
              include_basic_info: M,
              include_supported_languages: S,
              include_full_description: R,
              include_included_items: I,
              include_assets_without_overrides: z,
              apply_user_filters: v,
              include_links: q,
            };
            let a = null;
            return (
              !e ||
                o.A.Get().BHasStoreItem(e, t, r) ||
                (void 0 !== m && i && i == u.current) ||
                (i !== u.current && (d(void 0), (u.current = i)),
                (a = s().CancelToken.source()),
                o.A.Get()
                  .QueueStoreItemRequest(e, t, r)
                  .then((t) => {
                    (null == a ? void 0 : a.token.reason) ||
                      l.current !== e ||
                      d(1 == t),
                      c();
                  })),
              () =>
                null == a ? void 0 : a.cancel("useStoreItemCache: unmounting")
            );
          }, [e, t, i, m, _, g, p, B, h, b, y, w, f, M, S, R, I, z, v, q, c]),
          !e)
        )
          return [null, 2];
        if (!1 === m) return [void 0, 2];
        if (o.A.Get().BIsStoreItemMissing(e, t)) return [void 0, 2];
        if (!o.A.Get().BHasStoreItem(e, t, r)) return [void 0, 1];
        const T = o.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t);
        return T ? [T, 3] : [null, 2];
      }
      function u(e, t, r) {
        return l(e, 0, t, r);
      }
      function c(e, t, r) {
        return l(e, 1, t, r);
      }
      function m(e, t, r) {
        var i;
        const [s, a] = l(e, t, r);
        let n;
        1 != (null == s ? void 0 : s.GetStoreItemType()) ||
          (null === (i = s.GetAssets()) || void 0 === i
            ? void 0
            : i.GetHeaderURL()) ||
          1 != (null == s ? void 0 : s.GetIncludedAppIDs().length) ||
          (n = s.GetIncludedAppIDs()[0]);
        const [o, c] = u(n, r);
        return n && (null == o ? void 0 : o.BIsVisible()) ? [o, c] : [s, a];
      }
      function d(e, t, r, i) {
        const l = (0, n.CH)(),
          {
            include_assets: u,
            include_release: c,
            include_platforms: m,
            include_all_purchase_options: d,
            include_screenshots: _,
            include_trailers: g,
            include_ratings: p,
            include_tag_count: B,
            include_reviews: h,
            include_basic_info: b,
            include_supported_languages: y,
            include_full_description: w,
            include_included_items: f,
            include_assets_without_overrides: M,
            apply_user_filters: S,
            include_links: R,
          } = r;
        if (
          ((0, a.useEffect)(() => {
            if (!e || 0 == e.length) return;
            const r = {
                include_assets: u,
                include_release: c,
                include_platforms: m,
                include_all_purchase_options: d,
                include_screenshots: _,
                include_trailers: g,
                include_ratings: p,
                include_tag_count: B,
                include_reviews: h,
                include_basic_info: b,
                include_supported_languages: y,
                include_full_description: w,
                include_included_items: f,
                include_assets_without_overrides: M,
                apply_user_filters: S,
                include_links: R,
              },
              i = e.filter(
                (e) =>
                  !(
                    o.A.Get().BHasStoreItem(e, t, r) ||
                    o.A.Get().BIsStoreItemMissing(e, t)
                  ),
              );
            if (0 == i.length) return;
            const a = s().CancelToken.source(),
              n = i.map((e) => o.A.Get().QueueStoreItemRequest(e, t, r));
            return (
              Promise.all(n).then(() => {
                a.token.reason || l();
              }),
              () => a.cancel("useStoreItemCacheMultiplePackages: unmounting")
            );
          }, [e, t, i, l, u, c, m, d, _, g, p, B, h, b, y, w, f, M, S, R]),
          !e)
        )
          return 2;
        if (
          !e.every(
            (e) =>
              o.A.Get().BHasStoreItem(e, t, r) ||
              o.A.Get().BIsStoreItemMissing(e, t),
          )
        )
          return 1;
        return e.every((e) =>
          o.A.Get().GetStoreItemWithLegacyVisibilityCheck(e, t),
        )
          ? 3
          : 2;
      }
      function _(e, t, r) {
        return d(e, 0, t, r);
      }
    },
    68797: (e, t, r) => {
      r.d(t, { H: () => n });
      var i = r(41735),
        s = r.n(i),
        a = r(56545);
      function n(e) {
        if (s().isCancel(e))
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
          if ("success" in e.response.data)
            return {
              strErrorMsg: "error code: " + e.response.data.success,
              errorCode: e.response.data.success,
            };
        } else if ("object" == typeof e.data) {
          if ("msg" in e.data)
            return { strErrorMsg: e.data.msg, errorCode: e.data.success };
          if ("err_msg" in e.data)
            return { strErrorMsg: e.data.err_msg, errorCode: e.data.success };
          if ("message" in e.data)
            return { strErrorMsg: e.data.message, errorCode: e.data.success };
          if ("success" in e.data)
            return {
              strErrorMsg: "error code: " + e.data.success,
              errorCode: e.data.success,
            };
        } else {
          if (void 0 !== e.success && void 0 !== e.msg)
            return { strErrorMsg: e.msg, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.message)
            return { strErrorMsg: e.message, errorCode: e.success };
          if (void 0 !== e.success && void 0 !== e.err_msg)
            return { strErrorMsg: e.err_msg, errorCode: e.success };
          if ("string" == typeof e && e.length > 1024)
            console.groupCollapsed(
              "GetMsgAndErrorCodeFromResponse cannot parse: ",
            ),
              console.warn(e),
              console.groupEnd();
          else {
            if ("object" == typeof e && e instanceof a.w)
              return {
                strErrorMsg: "" + e.GetErrorMessage(),
                errorCode: e.GetEResult(),
              };
            console.warn("GetMsgAndErrorCodeFromResponse cannot parse: ", e);
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
  },
]);
