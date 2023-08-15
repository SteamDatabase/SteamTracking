/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7404],
  {
    23632: (e, r, t) => {
      t.d(r, { AY: () => l, KQ: () => o, _v: () => n, q8: () => u });
      var i = t(45878),
        s = t(29063);
      const a = i.Message;
      class n extends a {
        constructor(e = null) {
          super(),
            n.prototype.sale_filter || s.aR(n.M()),
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
          return n.sm_mbf || (n.sm_mbf = s.Bh(n.M())), n.sm_mbf;
        }
        toObject(e = !1) {
          return n.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(n.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(n.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new n();
          return n.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(n.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(n.M(), e, r);
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
        constructor(e = null) {
          super(),
            o.prototype.sale_tagid || s.aR(o.M()),
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
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = s.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(o.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(o.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(o.M(), e, r);
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
        constructor(e = null) {
          super(),
            l.prototype.hub_type || s.aR(l.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  hub_type: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                  hub_category: {
                    n: 2,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  hub_tagid: {
                    n: 3,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  discount_filter: {
                    n: 4,
                    br: s.FE.readEnum,
                    bw: s.Xc.writeEnum,
                  },
                  optin: { n: 5, c: u },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = s.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(l.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(l.M(), e, r);
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
        constructor(e = null) {
          super(),
            u.prototype.name || s.aR(u.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  name: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                  optin_tagid: {
                    n: 2,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  prune_tagid: {
                    n: 3,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  optin_only: { n: 4, br: s.FE.readBool, bw: s.Xc.writeBool },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = s.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(u.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(u.M(), e, r);
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
        constructor(e = null) {
          super(),
            c.prototype.filter_json || s.aR(c.M()),
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
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  cache_key: {
                    n: 2,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = s.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(c.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(c.M(), e, r);
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
    53143: (e, r, t) => {
      t.d(r, {
        Qn: () => C,
        VJ: () => N,
        VL: () => u,
        WJ: () => E,
        _A: () => q,
        cR: () => j,
        eK: () => O,
        oY: () => W,
      });
      var i = t(45878),
        s = t(29063),
        a = t(54856),
        n = t(23632);
      const o = i.Message;
      class l extends o {
        constructor(e = null) {
          super(),
            l.prototype.type || s.aR(l.M()),
            o.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  type: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                  rating: { n: 2, br: s.FE.readString, bw: s.Xc.writeString },
                  descriptors: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: s.FE.readString,
                    bw: s.Xc.writeRepeatedString,
                  },
                  interactive_elements: {
                    n: 4,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  required_age: {
                    n: 10,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  use_age_gate: {
                    n: 11,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  image_url: {
                    n: 20,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  image_target: {
                    n: 21,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = s.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(l.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreGameRating";
        }
      }
      class u extends o {
        constructor(e = null) {
          super(),
            u.prototype.item_type || s.aR(u.M()),
            o.initialize(
              this,
              e,
              0,
              -1,
              [11, 12, 20, 21, 25, 41, 42, 52],
              null,
            );
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  item_type: { n: 1, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  id: { n: 2, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  success: { n: 3, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  visible: { n: 4, br: s.FE.readBool, bw: s.Xc.writeBool },
                  unvailable_for_country_restriction: {
                    n: 5,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  name: { n: 6, br: s.FE.readString, bw: s.Xc.writeString },
                  store_url_path: {
                    n: 7,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  appid: { n: 9, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  type: { n: 10, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  included_types: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: s.FE.readEnum,
                    pbr: s.FE.readPackedEnum,
                    bw: s.Xc.writeRepeatedEnum,
                  },
                  included_appids: {
                    n: 12,
                    r: !0,
                    q: !0,
                    br: s.FE.readUint32,
                    pbr: s.FE.readPackedUint32,
                    bw: s.Xc.writeRepeatedUint32,
                  },
                  is_free: { n: 13, br: s.FE.readBool, bw: s.Xc.writeBool },
                  is_early_access: {
                    n: 14,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  related_items: { n: 15, c },
                  content_descriptorids: {
                    n: 20,
                    r: !0,
                    q: !0,
                    br: s.FE.readEnum,
                    pbr: s.FE.readPackedEnum,
                    bw: s.Xc.writeRepeatedEnum,
                  },
                  tagids: {
                    n: 21,
                    r: !0,
                    q: !0,
                    br: s.FE.readUint32,
                    pbr: s.FE.readPackedUint32,
                    bw: s.Xc.writeRepeatedUint32,
                  },
                  categories: { n: 22, c: d },
                  reviews: { n: 23, c: m },
                  basic_info: { n: 24, c: h },
                  tags: { n: 25, c: b, r: !0, q: !0 },
                  assets: { n: 30, c: g },
                  release: { n: 31, c: p },
                  platforms: { n: 32, c: y },
                  game_rating: { n: 33, c: l },
                  best_purchase_option: { n: 40, c: w },
                  purchase_options: { n: 41, c: w, r: !0, q: !0 },
                  accessories: { n: 42, c: w, r: !0, q: !0 },
                  screenshots: { n: 50, c: F },
                  trailers: { n: 51, c: M },
                  supported_languages: { n: 52, c: z, r: !0, q: !0 },
                  store_url_path_override: {
                    n: 53,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  free_weekend: { n: 54, c: T },
                  unlisted: { n: 55, br: s.FE.readBool, bw: s.Xc.writeBool },
                  game_count: {
                    n: 56,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  internal_name: {
                    n: 57,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  full_description: {
                    n: 58,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = s.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(u.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem";
        }
      }
      class c extends o {
        constructor(e = null) {
          super(),
            c.prototype.parent_appid || s.aR(c.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  parent_appid: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = s.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(c.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_RelatedItems";
        }
      }
      class d extends o {
        constructor(e = null) {
          super(),
            d.prototype.supported_player_categoryids || s.aR(d.M()),
            o.initialize(this, e, 0, -1, [2, 3, 4], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  supported_player_categoryids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: s.FE.readUint32,
                    pbr: s.FE.readPackedUint32,
                    bw: s.Xc.writeRepeatedUint32,
                  },
                  feature_categoryids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: s.FE.readUint32,
                    pbr: s.FE.readPackedUint32,
                    bw: s.Xc.writeRepeatedUint32,
                  },
                  controller_categoryids: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: s.FE.readUint32,
                    pbr: s.FE.readPackedUint32,
                    bw: s.Xc.writeRepeatedUint32,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = s.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(d.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Categories";
        }
      }
      class m extends o {
        constructor(e = null) {
          super(),
            m.prototype.summary_filtered || s.aR(m.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  summary_filtered: { n: 1, c: _ },
                  summary_unfiltered: { n: 2, c: _ },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = s.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(m.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Reviews";
        }
      }
      class _ extends o {
        constructor(e = null) {
          super(),
            _.prototype.review_count || s.aR(_.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  review_count: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  percent_positive: {
                    n: 2,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  review_score: { n: 3, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  review_score_label: {
                    n: 4,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = s.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(_.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Reviews_StoreReviewSummary";
        }
      }
      class h extends o {
        constructor(e = null) {
          super(),
            h.prototype.short_description || s.aR(h.M()),
            o.initialize(this, e, 0, -1, [2, 3, 4], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  short_description: {
                    n: 1,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  publishers: { n: 2, c: B, r: !0, q: !0 },
                  developers: { n: 3, c: B, r: !0, q: !0 },
                  franchises: { n: 4, c: B, r: !0, q: !0 },
                  capsule_headline: {
                    n: 5,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = s.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(h.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_BasicInfo";
        }
      }
      class B extends o {
        constructor(e = null) {
          super(),
            B.prototype.name || s.aR(B.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  name: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                  creator_clan_account_id: {
                    n: 2,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = s.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(B.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_BasicInfo_CreatorHomeLink";
        }
      }
      class b extends o {
        constructor(e = null) {
          super(),
            b.prototype.tagid || s.aR(b.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  tagid: { n: 1, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  weight: { n: 2, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = s.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(b.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Tag";
        }
      }
      class g extends o {
        constructor(e = null) {
          super(),
            g.prototype.asset_url_format || s.aR(g.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  asset_url_format: {
                    n: 1,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  main_capsule: {
                    n: 2,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  small_capsule: {
                    n: 3,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  header: { n: 4, br: s.FE.readString, bw: s.Xc.writeString },
                  package_header: {
                    n: 5,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  page_background: {
                    n: 6,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  hero_capsule: {
                    n: 7,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  hero_capsule_2x: {
                    n: 8,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  library_capsule: {
                    n: 9,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  library_capsule_2x: {
                    n: 10,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  library_hero: {
                    n: 11,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  library_hero_2x: {
                    n: 12,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  community_icon: {
                    n: 13,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  clan_avatar: {
                    n: 14,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = s.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(g.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Assets";
        }
      }
      class p extends o {
        constructor(e = null) {
          super(),
            p.prototype.steam_release_date || s.aR(p.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  steam_release_date: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  original_release_date: {
                    n: 2,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  original_steam_release_date: {
                    n: 3,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  is_coming_soon: {
                    n: 4,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  is_preload: { n: 5, br: s.FE.readBool, bw: s.Xc.writeBool },
                  custom_release_date_message: {
                    n: 6,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  is_abridged_release_date: {
                    n: 7,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  coming_soon_display: {
                    n: 8,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  is_early_access: {
                    n: 10,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  mac_release_date: {
                    n: 20,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  linux_release_date: {
                    n: 21,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = s.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(p.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_ReleaseInfo";
        }
      }
      class y extends o {
        constructor(e = null) {
          super(),
            y.prototype.windows || s.aR(y.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  windows: { n: 1, br: s.FE.readBool, bw: s.Xc.writeBool },
                  mac: { n: 2, br: s.FE.readBool, bw: s.Xc.writeBool },
                  steamos_linux: {
                    n: 3,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  vr_support: { n: 10, c: f },
                  steam_deck_compat_category: {
                    n: 11,
                    br: s.FE.readEnum,
                    bw: s.Xc.writeEnum,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = s.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(y.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Platforms";
        }
      }
      class f extends o {
        constructor(e = null) {
          super(),
            f.prototype.vrhmd || s.aR(f.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  vrhmd: { n: 1, br: s.FE.readBool, bw: s.Xc.writeBool },
                  vrhmd_only: { n: 2, br: s.FE.readBool, bw: s.Xc.writeBool },
                  htc_vive: { n: 40, br: s.FE.readBool, bw: s.Xc.writeBool },
                  oculus_rift: { n: 41, br: s.FE.readBool, bw: s.Xc.writeBool },
                  windows_mr: { n: 42, br: s.FE.readBool, bw: s.Xc.writeBool },
                  valve_index: { n: 43, br: s.FE.readBool, bw: s.Xc.writeBool },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = s.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(f.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Platforms_VRSupport";
        }
      }
      class w extends o {
        constructor(e = null) {
          super(),
            w.prototype.packageid || s.aR(w.M()),
            o.initialize(this, e, 0, -1, [20, 21, 22], null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  packageid: { n: 1, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                  bundleid: { n: 2, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                  purchase_option_name: {
                    n: 3,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  final_price_in_cents: {
                    n: 5,
                    br: s.FE.readInt64String,
                    bw: s.Xc.writeInt64String,
                  },
                  original_price_in_cents: {
                    n: 6,
                    br: s.FE.readInt64String,
                    bw: s.Xc.writeInt64String,
                  },
                  user_final_price_in_cents: {
                    n: 7,
                    br: s.FE.readInt64String,
                    bw: s.Xc.writeInt64String,
                  },
                  formatted_final_price: {
                    n: 8,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  formatted_original_price: {
                    n: 9,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  discount_pct: {
                    n: 10,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  user_discount_pct: {
                    n: 11,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  bundle_discount_pct: {
                    n: 12,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  active_discounts: { n: 20, c: R, r: !0, q: !0 },
                  user_active_discounts: { n: 21, c: R, r: !0, q: !0 },
                  inactive_discounts: { n: 22, c: R, r: !0, q: !0 },
                  user_can_purchase: {
                    n: 30,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  user_can_purchase_as_gift: {
                    n: 31,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  is_commercial_license: {
                    n: 40,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  should_suppress_discount_pct: {
                    n: 41,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  hide_discount_pct_for_compliance: {
                    n: 42,
                    d: !1,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  included_game_count: {
                    n: 43,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  lowest_recent_price_in_cents: {
                    n: 44,
                    br: s.FE.readInt64String,
                    bw: s.Xc.writeInt64String,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = s.Bh(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(w.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_PurchaseOption";
        }
      }
      class R extends o {
        constructor(e = null) {
          super(),
            R.prototype.discount_amount || s.aR(R.M()),
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
                    br: s.FE.readInt64String,
                    bw: s.Xc.writeInt64String,
                  },
                  discount_description: {
                    n: 2,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  discount_end_date: {
                    n: 3,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = s.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(R.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_PurchaseOption_Discount";
        }
      }
      class F extends o {
        constructor(e = null) {
          super(),
            F.prototype.all_ages_screenshots || s.aR(F.M()),
            o.initialize(this, e, 0, -1, [2, 3], null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  all_ages_screenshots: { n: 2, c: S, r: !0, q: !0 },
                  mature_content_screenshots: { n: 3, c: S, r: !0, q: !0 },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = s.Bh(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(F.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Screenshots";
        }
      }
      class S extends o {
        constructor(e = null) {
          super(),
            S.prototype.filename || s.aR(S.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  filename: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                  ordinal: { n: 2, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = s.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(S.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Screenshots_Screenshot";
        }
      }
      class M extends o {
        constructor(e = null) {
          super(),
            M.prototype.highlights || s.aR(M.M()),
            o.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  highlights: { n: 1, c: I, r: !0, q: !0 },
                  other_trailers: { n: 2, c: I, r: !0, q: !0 },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = s.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(M.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Trailers";
        }
      }
      class v extends o {
        constructor(e = null) {
          super(),
            v.prototype.filename || s.aR(v.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  filename: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                  type: { n: 2, br: s.FE.readString, bw: s.Xc.writeString },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = s.Bh(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(v.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Trailers_VideoSource";
        }
      }
      class I extends o {
        constructor(e = null) {
          super(),
            I.prototype.trailer_name || s.aR(I.M()),
            o.initialize(this, e, 0, -1, [3, 4, 5], null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  trailer_name: {
                    n: 1,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  trailer_url_format: {
                    n: 2,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  trailer_480p: { n: 3, c: v, r: !0, q: !0 },
                  trailer_max: { n: 4, c: v, r: !0, q: !0 },
                  microtrailer: { n: 5, c: v, r: !0, q: !0 },
                  screenshot_medium: {
                    n: 10,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  screenshot_full: {
                    n: 11,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  trailer_base_id: {
                    n: 12,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = s.Bh(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(I.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(I.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(I.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(I.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_Trailers_Trailer";
        }
      }
      class z extends o {
        constructor(e = null) {
          super(),
            z.prototype.elanguage || s.aR(z.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  elanguage: { n: 1, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                  supported: { n: 2, br: s.FE.readBool, bw: s.Xc.writeBool },
                  full_audio: { n: 3, br: s.FE.readBool, bw: s.Xc.writeBool },
                  subtitles: { n: 4, br: s.FE.readBool, bw: s.Xc.writeBool },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = s.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(z.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_SupportedLanguage";
        }
      }
      class T extends o {
        constructor(e = null) {
          super(),
            T.prototype.start_time || s.aR(T.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  start_time: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  end_time: { n: 2, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  text: { n: 3, br: s.FE.readString, bw: s.Xc.writeString },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = s.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(T.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItem_FreeWeekend";
        }
      }
      class C extends o {
        constructor(e = null) {
          super(),
            C.prototype.include_assets || s.aR(C.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  include_assets: {
                    n: 1,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_release: {
                    n: 2,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_platforms: {
                    n: 3,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_all_purchase_options: {
                    n: 4,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_screenshots: {
                    n: 5,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_trailers: {
                    n: 6,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_ratings: {
                    n: 7,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_tag_count: {
                    n: 8,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  include_reviews: {
                    n: 9,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_basic_info: {
                    n: 10,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_supported_languages: {
                    n: 11,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_full_description: {
                    n: 12,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = s.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(C.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreBrowseItemDataRequest";
        }
      }
      class E extends o {
        constructor(e = null) {
          super(),
            E.prototype.language || s.aR(E.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  language: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                  elanguage: { n: 2, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                  country_code: {
                    n: 3,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  steam_realm: {
                    n: 4,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = s.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(E.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(E.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(E.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreBrowseContext";
        }
      }
      class W extends o {
        constructor(e = null) {
          super(),
            W.prototype.appid || s.aR(W.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  appid: { n: 1, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  packageid: {
                    n: 2,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  bundleid: { n: 3, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  tagid: { n: 4, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  creatorid: {
                    n: 5,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  hubcategoryid: {
                    n: 6,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = s.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(W.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "StoreItemID";
        }
      }
      class O extends o {
        constructor(e = null) {
          super(),
            O.prototype.ids || s.aR(O.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  ids: { n: 1, c: W, r: !0, q: !0 },
                  context: { n: 2, c: E },
                  data_request: { n: 3, c: C },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = s.Bh(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(O.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(O.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetItems_Request";
        }
      }
      class j extends o {
        constructor(e = null) {
          super(),
            j.prototype.store_items || s.aR(j.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: { store_items: { n: 1, c: u, r: !0, q: !0 } },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = s.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(j.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetItems_Response";
        }
      }
      class D extends o {
        constructor(e = null) {
          super(),
            D.prototype.language || s.aR(D.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  language: { n: 1, br: s.FE.readString, bw: s.Xc.writeString },
                  elanguage: {
                    n: 2,
                    d: -1,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = s.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(D.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new D();
          return D.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(D.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(D.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetStoreCategories_Request";
        }
      }
      class A extends o {
        constructor(e = null) {
          super(),
            A.prototype.categories || s.aR(A.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: { categories: { n: 1, c: U, r: !0, q: !0 } },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = s.Bh(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(A.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(A.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new A();
          return A.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(A.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(A.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetStoreCategories_Response";
        }
      }
      class U extends o {
        constructor(e = null) {
          super(),
            U.prototype.categoryid || s.aR(U.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  categoryid: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  type: { n: 2, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  internal_name: {
                    n: 3,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  display_name: {
                    n: 4,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  image_url: {
                    n: 5,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  show_in_search: {
                    n: 6,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = s.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(U.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(U.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(U.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetStoreCategories_Response_Category";
        }
      }
      class P extends o {
        constructor(e = null) {
          super(),
            P.prototype.context || s.aR(P.M()),
            o.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  context: { n: 1, c: E },
                  store_page_filter: { n: 2, c: n._v },
                  appids: { n: 3, c: W, r: !0, q: !0 },
                  steamid: {
                    n: 4,
                    br: s.FE.readUint64String,
                    bw: s.Xc.writeUint64String,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = s.Bh(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(P.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(P.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(P.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(P.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForApps_Request";
        }
      }
      class G extends o {
        constructor(e = null) {
          super(),
            G.prototype.dlc_data || s.aR(G.M()),
            o.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  dlc_data: { n: 1, c: X, r: !0, q: !0 },
                  playtime: { n: 2, c: k, r: !0, q: !0 },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = s.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(G.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(G.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(G.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForApps_Response";
        }
      }
      class X extends o {
        constructor(e = null) {
          super(),
            X.prototype.appid || s.aR(X.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  appid: { n: 1, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  parentappid: {
                    n: 2,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  release_date: {
                    n: 3,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  coming_soon: { n: 4, br: s.FE.readBool, bw: s.Xc.writeBool },
                  price: {
                    n: 5,
                    br: s.FE.readInt64String,
                    bw: s.Xc.writeInt64String,
                  },
                  discount: { n: 6, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  free: { n: 7, br: s.FE.readBool, bw: s.Xc.writeBool },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = s.Bh(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(X.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(X.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new X();
          return X.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(X.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(X.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForApps_Response_DLCData";
        }
      }
      class k extends o {
        constructor(e = null) {
          super(),
            k.prototype.appid || s.aR(k.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  appid: { n: 1, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  playtime: { n: 2, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  last_played: {
                    n: 3,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = s.Bh(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(k.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new k();
          return k.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(k.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(k.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForApps_Response_PlaytimeForApp";
        }
      }
      class q extends o {
        constructor(e = null) {
          super(),
            q.prototype.context || s.aR(q.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  context: { n: 1, c: E },
                  appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: s.FE.readUint32,
                    pbr: s.FE.readPackedUint32,
                    bw: s.Xc.writeRepeatedUint32,
                  },
                  flavor: { n: 3, br: s.FE.readString, bw: s.Xc.writeString },
                  count: { n: 4, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  store_page_filter: { n: 5, c: n._v },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = s.Bh(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(q.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForAppsSolr_Request";
        }
      }
      class L extends o {
        constructor(e = null) {
          super(),
            L.prototype.dlc_lists || s.aR(L.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: { dlc_lists: { n: 1, c: x, r: !0, q: !0 } },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = s.Bh(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(L.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(L.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new L();
          return L.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(L.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(L.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForAppsSolr_Response";
        }
      }
      class x extends o {
        constructor(e = null) {
          super(),
            x.prototype.parent_appid || s.aR(x.M()),
            o.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  parent_appid: {
                    n: 1,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  dlc_appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: s.FE.readUint32,
                    pbr: s.FE.readPackedUint32,
                    bw: s.Xc.writeRepeatedUint32,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = s.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(x.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(x.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(x.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreBrowse_GetDLCForAppsSolr_Response_DLCList";
        }
      }
      var N;
      !(function (e) {
        (e.GetItems = function (e, r) {
          return e.SendMsg("StoreBrowse.GetItems#1", (0, a.MD)(O, r), j, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.GetStoreCategories = function (e, r) {
            return e.SendMsg(
              "StoreBrowse.GetStoreCategories#1",
              (0, a.MD)(D, r),
              A,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetDLCForApps = function (e, r) {
            return e.SendMsg(
              "StoreBrowse.GetDLCForApps#1",
              (0, a.MD)(P, r),
              G,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetDLCForAppsSolr = function (e, r) {
            return e.SendMsg(
              "StoreBrowse.GetDLCForAppsSolr#1",
              (0, a.MD)(q, r),
              L,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          });
      })(N || (N = {}));
    },
    3609: (e, r, t) => {
      t.d(r, { $2: () => m, Ax: () => y, e8: () => B });
      var i = t(45878),
        s = t(29063),
        a = t(54856),
        n = t(23632),
        o = t(53143);
      const l = i.Message;
      class u extends l {
        constructor(e = null) {
          super(),
            u.prototype.released_only || s.aR(u.M()),
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
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  coming_soon_only: {
                    n: 2,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  type_filters: { n: 3, c },
                  tagids_must_match: { n: 10, c: d, r: !0, q: !0 },
                  tagids_exclude: {
                    n: 11,
                    r: !0,
                    q: !0,
                    br: s.FE.readInt32,
                    pbr: s.FE.readPackedInt32,
                    bw: s.Xc.writeRepeatedInt32,
                  },
                  content_descriptors_must_match: {
                    n: 15,
                    r: !0,
                    q: !0,
                    br: s.FE.readEnum,
                    pbr: s.FE.readPackedEnum,
                    bw: s.Xc.writeRepeatedEnum,
                  },
                  content_descriptors_excluded: {
                    n: 16,
                    r: !0,
                    q: !0,
                    br: s.FE.readEnum,
                    pbr: s.FE.readPackedEnum,
                    bw: s.Xc.writeRepeatedEnum,
                  },
                  regional_top_n_sellers: {
                    n: 40,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  global_top_n_sellers: {
                    n: 41,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  regional_long_term_top_n_sellers: {
                    n: 42,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  global_long_term_top_n_sellers: {
                    n: 43,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  store_page_filter: { n: 44, c: n._v },
                  parent_appids: {
                    n: 45,
                    r: !0,
                    q: !0,
                    br: s.FE.readUint32,
                    pbr: s.FE.readPackedUint32,
                    bw: s.Xc.writeRepeatedUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = s.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(u.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(u.M(), e, r);
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
        constructor(e = null) {
          super(),
            c.prototype.include_apps || s.aR(c.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  include_apps: { n: 1, br: s.FE.readBool, bw: s.Xc.writeBool },
                  include_packages: {
                    n: 2,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_bundles: {
                    n: 3,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_games: {
                    n: 10,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_demos: {
                    n: 11,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_mods: {
                    n: 12,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_dlc: { n: 13, br: s.FE.readBool, bw: s.Xc.writeBool },
                  include_software: {
                    n: 14,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_video: {
                    n: 15,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_hardware: {
                    n: 16,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_series: {
                    n: 17,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  include_music: {
                    n: 18,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = s.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(c.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryFilters_TypeFilters";
        }
      }
      class d extends l {
        constructor(e = null) {
          super(),
            d.prototype.tagids || s.aR(d.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  tagids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: s.FE.readInt32,
                    pbr: s.FE.readPackedInt32,
                    bw: s.Xc.writeRepeatedInt32,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = s.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(d.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryFilters_TagFilter";
        }
      }
      class m extends l {
        constructor(e = null) {
          super(),
            m.prototype.start || s.aR(m.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  start: {
                    n: 1,
                    d: 0,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  count: {
                    n: 2,
                    d: 10,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  sort: { n: 10, d: 0, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  filters: { n: 20, c: u },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = s.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(m.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryParams";
        }
      }
      class _ extends l {
        constructor(e = null) {
          super(),
            _.prototype.id || s.aR(_.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  id: { n: 1, c: o.oY },
                  score: { n: 2, br: s.FE.readDouble, bw: s.Xc.writeDouble },
                  spellcheck_generated_result: {
                    n: 3,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = s.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(_.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryPerResultMetadata";
        }
      }
      class h extends l {
        constructor(e = null) {
          super(),
            h.prototype.total_matching_records || s.aR(h.M()),
            l.initialize(this, e, 0, -1, [4, 5], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  total_matching_records: {
                    n: 1,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  start: { n: 2, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                  count: { n: 3, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                  per_result_metadata: { n: 4, c: _, r: !0, q: !0 },
                  spellcheck_suggestions: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: s.FE.readString,
                    bw: s.Xc.writeRepeatedString,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = s.Bh(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(h.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQueryResultMetadata";
        }
      }
      class B extends l {
        constructor(e = null) {
          super(),
            B.prototype.query_name || s.aR(B.M()),
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
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  query: { n: 2, c: m },
                  context: { n: 3, c: o.WJ },
                  data_request: { n: 4, c: o.Qn },
                  override_country_code: {
                    n: 5,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = s.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(B.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_Query_Request";
        }
      }
      class b extends l {
        constructor(e = null) {
          super(),
            b.prototype.metadata || s.aR(b.M()),
            l.initialize(this, e, 0, -1, [2, 3], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  metadata: { n: 1, c: h },
                  ids: { n: 2, c: o.oY, r: !0, q: !0 },
                  store_items: { n: 3, c: o.VL, r: !0, q: !0 },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = s.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(b.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_Query_Response";
        }
      }
      class g extends l {
        constructor(e = null) {
          super(),
            g.prototype.query_name || s.aR(g.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  query_name: {
                    n: 1,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  context: { n: 2, c: o.WJ },
                  search_term: {
                    n: 3,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  max_results: {
                    n: 4,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  filters: { n: 5, c: u },
                  data_request: { n: 6, c: o.Qn },
                  use_spellcheck: {
                    n: 7,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  search_tags: { n: 8, br: s.FE.readBool, bw: s.Xc.writeBool },
                  search_creators: {
                    n: 9,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  prefilter_creators: {
                    n: 10,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = s.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(g.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_SearchSuggestions_Request";
        }
      }
      class p extends l {
        constructor(e = null) {
          super(),
            p.prototype.metadata || s.aR(p.M()),
            l.initialize(this, e, 0, -1, [2, 3], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  metadata: { n: 1, c: h },
                  ids: { n: 2, c: o.oY, r: !0, q: !0 },
                  store_items: { n: 3, c: o.VL, r: !0, q: !0 },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = s.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return s.TA(p.M(), e, r);
        }
        static fromObject(e) {
          return s.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return s.F(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          s.l2(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CStoreQuery_SearchSuggestions_Response";
        }
      }
      var y;
      !(function (e) {
        (e.Query = function (e, r) {
          return e.SendMsg("StoreQuery.Query#1", (0, a.MD)(B, r), b, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.SearchSuggestions = function (e, r) {
            return e.SendMsg(
              "StoreQuery.SearchSuggestions#1",
              (0, a.MD)(g, r),
              p,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          });
      })(y || (y = {}));
    },
    11195: (e, r, t) => {
      t.d(r, { De: () => l, Fq: () => o, pA: () => n });
      var i = t(53143),
        s = t(32765),
        a = t(36611);
      t(3609);
      function n(e, r) {
        e.Body().set_context(o(r));
      }
      function o(e) {
        let r = new i.WJ();
        return (
          e || r.set_country_code(s.De.COUNTRY),
          r.set_language(s.De.LANGUAGE),
          s.De.EREALM != a.IN.k_ESteamRealmUnknown &&
            r.set_steam_realm(s.De.EREALM),
          r
        );
      }
      function l(e, r) {
        e.Body().set_data_request(i.Qn.fromObject(r));
      }
    },
    36704: (e, r, t) => {
      t.d(r, { Z: () => c });
      var i = t(50265),
        s = t(85886),
        a = t(23801),
        n = t(14826),
        o = t(72120),
        l = t(32765);
      function u(e) {
        return (function (e, r, t) {
          switch (e) {
            case "date_full":
              return (0, n.vX)(r);
            case "date_month":
              return (0, o.LO)(new Date(1e3 * r));
            case "date_quarter":
              return (0, o.Kb)(new Date(1e3 * r));
            case "date_year":
              return (0, o.Np)(new Date(1e3 * r));
            case "text_comingsoon":
              return t || (0, n.Xx)("#Store_ComingSoon_ComingSoon");
            case "text_tba":
              return t || (0, n.Xx)("#Store_ComingSoon_TBA");
            default:
              return "";
          }
        })(
          e.coming_soon_display,
          e.steam_release_date,
          e.custom_release_date_message,
        );
      }
      class c {
        constructor(e, r) {
          var t, i, s;
          (this.m_bVisible = !1),
            (this.m_rgStoreTags = []),
            (this.m_rgStoreTagIDs = []),
            (this.m_DataRequested = { include_tag_count: 0 }),
            (this.k_regexSalePage =
              /^https?:\/\/[^\/]*(?:valvesoftware|steampowered).com\/(?:(curator|dev|developer|pub|publisher|franchise)\/[0-9a-zA-Z\-_]+\/)?sale\//),
            (this.m_eItemType = e.item_type()),
            (this.m_unID = e.id()),
            (this.m_bVisible = e.visible()),
            (this.m_strName = e.name()),
            (this.m_strStoreURLPath = e.store_url_path()),
            (this.m_unAppID = e.appid()),
            (this.m_eAppType = e.type()),
            (this.m_rgIncludedAppTypes = e.included_types()),
            (this.m_rgIncludedAppIDs = e.included_appids()),
            (this.m_bIsFree = e.is_free()),
            (this.m_bIsEarlyAccess = e.is_early_access()),
            (this.m_RelatedItems =
              null === (t = e.related_items()) || void 0 === t
                ? void 0
                : t.toObject()),
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
            this.MergeData(e, r);
        }
        MergeData(e, r) {
          r.include_assets &&
            !this.m_Assets &&
            ((this.m_Assets = new m(e.assets(), e.id())),
            (this.m_DataRequested.include_assets = !0)),
            r.include_release &&
              !this.m_ReleaseInfo &&
              ((this.m_ReleaseInfo = e.release().toObject()),
              (this.m_DataRequested.include_release = !0)),
            r.include_platforms &&
              !this.m_Platforms &&
              ((this.m_Platforms = e.platforms().toObject()),
              (this.m_DataRequested.include_platforms = !0)),
            r.include_all_purchase_options &&
              !this.m_rgPurchaseOptions &&
              ((this.m_rgPurchaseOptions = e
                .purchase_options()
                .map((e) => e.toObject())),
              (this.m_DataRequested.include_all_purchase_options = !0)),
            r.include_screenshots &&
              !this.m_Screenshots &&
              ((this.m_Screenshots = new B(e.screenshots())),
              (this.m_DataRequested.include_screenshots = !0)),
            r.include_trailers &&
              !this.m_Trailers &&
              ((this.m_Trailers = new _(e.trailers())),
              (this.m_DataRequested.include_trailers = !0)),
            r.include_tag_count > this.m_rgStoreTags.length &&
              this.m_DataRequested.include_tag_count < r.include_tag_count &&
              ((this.m_rgStoreTags = e.tags().map((e) => e.toObject())),
              (this.m_rgStoreTagIDs = this.m_rgStoreTags.map((e) => e.tagid)),
              (this.m_DataRequested.include_tag_count = Math.max(
                r.include_tag_count,
                this.m_rgStoreTags.length || 0,
              ))),
            r.include_reviews &&
              !this.m_ReviewInfo &&
              ((this.m_ReviewInfo = e.reviews().toObject()),
              (this.m_DataRequested.include_reviews = !0)),
            r.include_basic_info &&
              !this.m_BasicInfo &&
              ((this.m_BasicInfo = e.basic_info().toObject()),
              (this.m_DataRequested.include_basic_info = !0)),
            r.include_supported_languages &&
              !this.m_rgSupportedLanguages &&
              ((this.m_rgSupportedLanguages = e
                .supported_languages()
                .map((e) => e.toObject())),
              (this.m_DataRequested.include_supported_languages = !0));
        }
        static BDataRequestContainsOtherDataRequest(e, r) {
          return Boolean(
            (!r.include_assets || e.include_assets) &&
              (!r.include_release || e.include_release) &&
              (!r.include_platforms || e.include_platforms) &&
              (!r.include_all_purchase_options ||
                e.include_all_purchase_options) &&
              (!r.include_screenshots || e.include_screenshots) &&
              (!r.include_trailers || e.include_trailers) &&
              (!r.include_ratings || e.include_ratings) &&
              (!r.include_tag_count ||
                (e.include_tag_count || 0) >= r.include_tag_count) &&
              (!r.include_reviews || e.include_reviews) &&
              (!r.include_basic_info || e.include_basic_info) &&
              (!r.include_supported_languages || e.include_supported_languages),
          );
        }
        BContainDataRequest(e) {
          return c.BDataRequestContainsOtherDataRequest(
            this.m_DataRequested,
            e,
          );
        }
        BCheckDataRequestIncluded(e) {
          ("dev" != l.De.WEB_UNIVERSE && "beta" != l.De.WEB_UNIVERSE) ||
            (0, a.X)(
              this.BContainDataRequest(e),
              `Requested data without for ${(0, s.qE)(this.m_eItemType)} @ ${
                this.m_unID
              }`,
              (0, i.ZN)(e),
              (0, i.ZN)(this.m_DataRequested),
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
          return l.De.STORE_BASE_URL + this.m_strStoreURLPath;
        }
        GetStorePageURLWithOverride() {
          var e;
          return (null === (e = this.m_strStoreURLPathOverride) || void 0 === e
            ? void 0
            : e.length) > 0
            ? this.GetStorePageURLOverride()
            : this.GetStorePageURL();
        }
        GetStorePageURLOverride() {
          return this.m_strStoreURLPathOverride;
        }
        GetCommunityPageURL() {
          return this.GetAppID()
            ? l.De.COMMUNITY_BASE_URL + "app/" + this.GetAppID()
            : null;
        }
        GetCommunityDiscussionForumsURL() {
          return this.GetAppID()
            ? l.De.COMMUNITY_BASE_URL +
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
          var r;
          return null === (r = this.m_ContentDescriptorIDs) || void 0 === r
            ? void 0
            : r.includes(e);
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
            this.GetStoreCategories_SupportedPlayers().find((r) => e === r) ||
              this.GetStoreCategories_Features().find((r) => e === r) ||
              this.GetStoreCategories_Controller().find((r) => e === r),
          );
        }
        GetFilteredReviewSummary() {
          return (
            this.BCheckDataRequestIncluded({ include_reviews: !0 }),
            this.m_ReviewInfo.summary_filtered
          );
        }
        GetUnfilteredReviewSummary() {
          return (
            this.BCheckDataRequestIncluded({ include_reviews: !0 }),
            this.m_ReviewInfo.summary_unfiltered ||
              this.m_ReviewInfo.summary_filtered
          );
        }
        GetShortDescription() {
          var e, r;
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            null !==
              (r =
                null === (e = this.m_BasicInfo) || void 0 === e
                  ? void 0
                  : e.short_description) && void 0 !== r
              ? r
              : ""
          );
        }
        GetDeveloperNames() {
          var e, r, t, i;
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            null !==
              (i =
                null ===
                  (t =
                    null ===
                      (r =
                        null === (e = this.m_BasicInfo) || void 0 === e
                          ? void 0
                          : e.developers) || void 0 === r
                      ? void 0
                      : r.map((e) => e.name.trim())) || void 0 === t
                  ? void 0
                  : t.filter((e) => (null == e ? void 0 : e.length) > 0)) &&
            void 0 !== i
              ? i
              : []
          );
        }
        GetFranchiseNames() {
          var e, r, t, i;
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            null !==
              (i =
                null ===
                  (t =
                    null ===
                      (r =
                        null === (e = this.m_BasicInfo) || void 0 === e
                          ? void 0
                          : e.franchises) || void 0 === r
                      ? void 0
                      : r.map((e) => e.name.trim())) || void 0 === t
                  ? void 0
                  : t.filter((e) => (null == e ? void 0 : e.length) > 0)) &&
            void 0 !== i
              ? i
              : []
          );
        }
        GetPublisherNames() {
          var e, r, t, i;
          this.BCheckDataRequestIncluded({ include_basic_info: !0 });
          const s =
            null !==
              (i =
                null ===
                  (t =
                    null ===
                      (r =
                        null === (e = this.m_BasicInfo) || void 0 === e
                          ? void 0
                          : e.publishers) || void 0 === r
                      ? void 0
                      : r.map((e) => e.name.trim())) || void 0 === t
                  ? void 0
                  : t.filter((e) => (null == e ? void 0 : e.length) > 0)) &&
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
              ? d([
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
            this.m_BasicInfo ? d(this.m_BasicInfo.publishers) : []
          );
        }
        GetAllDeveloperCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? d(this.m_BasicInfo.developers) : []
          );
        }
        GetAllFranchiseCreatorClans() {
          return (
            this.BCheckDataRequestIncluded({ include_basic_info: !0 }),
            this.m_BasicInfo ? d(this.m_BasicInfo.franchises) : []
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
        GetOriginalReleaseDateRTime() {
          var e;
          this.BCheckDataRequestIncluded({ include_release: !0 });
          let r =
            null === (e = this.m_ReleaseInfo) || void 0 === e
              ? void 0
              : e.original_steam_release_date;
          return r || (r = this.GetReleaseDateRTime()), r;
        }
        GetReleaseDateRTime() {
          var e, r, t;
          if (
            (this.BCheckDataRequestIncluded({ include_release: !0 }),
            null === (e = this.m_ReleaseInfo) || void 0 === e
              ? void 0
              : e.is_coming_soon)
          )
            return 0;
          let i =
            null === (r = this.m_ReleaseInfo) || void 0 === r
              ? void 0
              : r.steam_release_date;
          return (
            i ||
              (i =
                null === (t = this.m_ReleaseInfo) || void 0 === t
                  ? void 0
                  : t.original_release_date),
            i
          );
        }
        GetFormattedSteamReleaseDate() {
          var e, r, t, i, s;
          if (
            (this.BCheckDataRequestIncluded({ include_release: !0 }),
            null === (e = this.m_ReleaseInfo) || void 0 === e
              ? void 0
              : e.is_coming_soon)
          ) {
            if (
              null === (r = this.m_ReleaseInfo) || void 0 === r
                ? void 0
                : r.coming_soon_display
            )
              return u(this.m_ReleaseInfo);
            if (
              null === (t = this.m_ReleaseInfo) || void 0 === t
                ? void 0
                : t.custom_release_date_message
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
                ? (0, o.LO)(new Date(1e3 * e))
                : (0, n.vX)(e)
              : "";
          }
          const a = this.GetReleaseDateRTime();
          return a ? (0, n.vX)(a) : "";
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
          var e;
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
              : !!this.m_ReleaseInfo.custom_release_date_message)
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
          var e, r, t;
          return null !==
            (r =
              null === (e = this.m_BestPurchaseOption) || void 0 === e
                ? void 0
                : e.formatted_original_price) && void 0 !== r
            ? r
            : null === (t = this.m_BestPurchaseOption) || void 0 === t
            ? void 0
            : t.formatted_final_price;
        }
        GetAllPurchaseOptions() {
          return (
            this.BCheckDataRequestIncluded({
              include_all_purchase_options: !0,
            }),
            this.m_rgPurchaseOptions
          );
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
          var e, r;
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            (null ===
              (r =
                null === (e = this.m_Trailers) || void 0 === e
                  ? void 0
                  : e.GetHighlightTrailers()) || void 0 === r
              ? void 0
              : r.length) > 0
          );
        }
        GetAllTrailers() {
          return (
            this.BCheckDataRequestIncluded({ include_trailers: !0 }),
            this.m_Trailers
          );
        }
        BHasSomeLanguageSupport(e) {
          var r;
          return (
            this.BCheckDataRequestIncluded({ include_supported_languages: !0 }),
            (null === (r = this.m_rgSupportedLanguages) || void 0 === r
              ? void 0
              : r.some(
                  (r) =>
                    r.elanguage == e &&
                    (r.supported || r.subtitles || r.full_audio),
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
              (this.m_Trailers.GetHighlightTrailers().forEach((r) => {
                !e && r.GetMicroTrailer() && (e = r.GetMicroTrailer());
              }),
              e ||
                this.m_Trailers.GetOtherTrailers().forEach((r) => {
                  !e && r.GetMicroTrailer() && (e = r.GetMicroTrailer());
                })),
            e
          );
        }
        ReplaceBestPurchaseOption(e) {
          this.m_BestPurchaseOption = e;
        }
        GetInternalName() {
          return this.m_strInternalName;
        }
      }
      function d(e) {
        if (!(null == e ? void 0 : e.length)) return [];
        const r = e.map((e) => e.creator_clan_account_id).filter((e) => !!e);
        return Array.from(new Set(r));
      }
      class m {
        constructor(e, r) {
          const t = e.asset_url_format();
          t &&
            (e.main_capsule() &&
              (this.m_strMainCapsuleURL = this.ConstructAssetURL(
                t,
                e.main_capsule(),
              )),
            e.small_capsule() &&
              (this.m_strSmallCapsuleURL = this.ConstructAssetURL(
                t,
                e.small_capsule(),
              )),
            e.header() &&
              (this.m_strHeaderURL = this.ConstructAssetURL(t, e.header())),
            e.package_header() &&
              (this.m_strPackageHeaderURL = this.ConstructAssetURL(
                t,
                e.package_header(),
              )),
            e.page_background() &&
              (this.m_strPageBackgroundURL = this.ConstructAssetURL(
                t,
                e.page_background(),
              )),
            e.hero_capsule() &&
              (this.m_strHeroCapsuleURL = this.ConstructAssetURL(
                t,
                e.hero_capsule(),
              )),
            e.hero_capsule_2x() &&
              (this.m_strHeroCapsuleURL_2x = this.ConstructAssetURL(
                t,
                e.hero_capsule_2x(),
              )),
            e.library_capsule() &&
              (this.m_strLibraryCapsuleURL = this.ConstructAssetURL(
                t,
                e.library_capsule(),
              )),
            e.library_capsule_2x() &&
              (this.m_strLibraryCapsuleURL_2x = this.ConstructAssetURL(
                t,
                e.library_capsule_2x(),
              )),
            e.library_hero() &&
              (this.m_strLibraryHeroURL = this.ConstructAssetURL(
                t,
                e.library_hero(),
              )),
            e.library_hero_2x() &&
              (this.m_strLibraryHeroURL_2x = this.ConstructAssetURL(
                t,
                e.library_hero_2x(),
              ))),
            e.community_icon() &&
              (this.m_strCommunityIcon = `${
                l.De.MEDIA_CDN_COMMUNITY_URL
              }images/apps/${r}/${e.community_icon()}.jpg`);
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
        ConstructAssetURL(e, r) {
          return l.De.MEDIA_CDN_URL + e.replace("${FILENAME}", r);
        }
        GetCommunityIconURL() {
          return this.m_strCommunityIcon;
        }
      }
      class _ {
        constructor(e) {
          (this.m_mapTrailer = new Map()),
            (this.m_higherTrailers = new Array()),
            (this.m_otherTrailers = new Array()),
            e.highlights() &&
              e.highlights().forEach((e) => {
                let r = new h(e);
                this.m_mapTrailer.set(r.GetTrailerID(), r),
                  this.m_higherTrailers.push(r);
              }),
            e.other_trailers() &&
              e.other_trailers().forEach((e) => {
                let r = new h(e);
                this.m_mapTrailer.set(r.GetTrailerID(), r),
                  this.m_otherTrailers.push(r);
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
      class h {
        constructor(e) {
          (this.m_strTrailerName = e.trailer_name()),
            (this.m_nBaseID = e.trailer_base_id());
          const r = e.trailer_url_format();
          r &&
            (e.trailer_480p() &&
              (this.m_Trailer480p = this.ExtractTrailerFormats(
                r,
                e.trailer_480p(),
              )),
            e.trailer_max() &&
              (this.m_TrailerMax = this.ExtractTrailerFormats(
                r,
                e.trailer_max(),
              )),
            e.microtrailer() &&
              (this.m_MicroTrailer = this.ExtractTrailerFormats(
                r,
                e.microtrailer(),
              )),
            e.screenshot_medium() &&
              (this.m_strScreenshotMedium = this.ConstructAssetURL(
                r,
                e.screenshot_medium(),
              )),
            e.screenshot_full() &&
              (this.m_strScreenshotFull = this.ConstructAssetURL(
                r,
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
        ExtractTrailerFormats(e, r) {
          let t = {};
          return (
            r.forEach((r) => {
              "video/mp4" == r.type()
                ? (t.strMP4URL = this.ConstructAssetURL(e, r.filename()))
                : "video/webm" == r.type() &&
                  (t.strWebMURL = this.ConstructAssetURL(e, r.filename()));
            }),
            t
          );
        }
        ConstructAssetURL(e, r) {
          return l.De.MEDIA_CDN_URL + e.replace("${FILENAME}", r);
        }
      }
      class B {
        constructor(e) {
          (this.m_rgAllScreenshots = new Array()),
            (this.m_rgOnlyAllAgesScreenshots = new Array());
          let r = 0,
            t = 0;
          const i = e.all_ages_screenshots() || [],
            s = e.mature_content_screenshots() || [];
          for (; r < i.length || t < s.length; ) {
            let e = r < i.length;
            if (r < i.length && t < s.length) {
              e = i[r].ordinal() < s[t].ordinal();
            }
            if (e) {
              const e = l.De.MEDIA_CDN_URL + i[r].filename();
              this.m_rgAllScreenshots.push(e),
                this.m_rgOnlyAllAgesScreenshots.push(e),
                (r += 1);
            } else {
              const e = l.De.MEDIA_CDN_URL + s[t].filename();
              this.m_rgAllScreenshots.push(e), (t += 1);
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
    },
    57858: (e, r, t) => {
      t.d(r, { Z: () => w });
      var i = t(33940),
        s = t(50265),
        a = t(54856),
        n = t(19094),
        o = t(45878),
        l = t(29063),
        u = t(53143);
      const c = o.Message;
      class d extends c {
        constructor(e = null) {
          super(),
            d.prototype.request || l.aR(d.M()),
            c.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  request: { n: 1, c: u.eK },
                  include_unpublished: {
                    n: 2,
                    br: l.FE.readBool,
                    bw: l.Xc.writeBool,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = l.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return l.TA(d.M(), e, r);
        }
        static fromObject(e) {
          return l.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new o.BinaryReader(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.F(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.l2(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPartnerStoreBrowse_GetItems_Request";
        }
      }
      var m;
      !(function (e) {
        e.GetItems = function (e, r) {
          return e.SendMsg(
            "PartnerStoreBrowse.GetItems#1",
            (0, a.MD)(d, r),
            u.cR,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        };
      })(m || (m = {}));
      var _ = t(23801),
        h = t(23217),
        B = t(32765),
        b = t(11195),
        g = t(36704);
      function p(e, r) {
        if (!e) return r;
        if (!r) return e;
        return {
          include_assets: e.include_assets || r.include_assets,
          include_release: e.include_release || r.include_release,
          include_platforms: e.include_platforms || r.include_platforms,
          include_all_purchase_options:
            e.include_all_purchase_options || r.include_all_purchase_options,
          include_screenshots: e.include_screenshots || r.include_screenshots,
          include_trailers: e.include_trailers || r.include_trailers,
          include_ratings: e.include_ratings || r.include_ratings,
          include_tag_count:
            Math.max(e.include_tag_count || 0, r.include_tag_count || 0) ||
            void 0,
          include_reviews: e.include_reviews || r.include_reviews,
          include_basic_info: e.include_basic_info || r.include_basic_info,
          include_supported_languages:
            e.include_supported_languages || r.include_supported_languages,
          include_full_description:
            e.include_full_description || r.include_full_description,
        };
      }
      function y(e, r) {
        return (0, i.mG)(this, void 0, void 0, function* () {
          const t = yield e,
            i = yield r;
          return 1 != t ? t : i;
        });
      }
      class f {
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
            f.sm_instance ||
              ((f.sm_instance = new f()),
              (window.StoreItemCache = f.sm_instance)),
            f.sm_instance
          );
        }
        static Initialize(e, r) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            (0, _.X)(
              !f.Get().m_bInitialized,
              "CStoreItemCache was already initialized; initialize it only once.",
            ),
              (f.Get().m_SteamInterface = e),
              (f.Get().m_bUsePartnerAPI = !!r),
              (f.Get().m_bInitialized = !0);
          });
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
        ResetCache() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            (this.m_bActivelyResettingCache = !0), this.FlushPendingInfo();
            let e = [];
            this.m_mapAppsInFlight.forEach((r) => {
              e.push(r.promise);
            }),
              this.m_mapBundleInFlight.forEach((r) => {
                e.push(r.promise);
              }),
              this.m_mapPackageInFlight.forEach((r) => {
                e.push(r.promise);
              }),
              this.m_mapTagsInFlight.forEach((r) => {
                e.push(r.promise);
              }),
              this.m_mapCreatorsInFlight.forEach((r) => {
                e.push(r.promise);
              }),
              this.m_mapHubCategoriesInFlight.forEach((r) => {
                e.push(r.promise);
              }),
              yield Promise.all(e),
              this.m_mapApps.clear(),
              this.m_mapBundles.clear(),
              this.m_mapPackages.clear(),
              this.m_mapTagsInFlight.clear(),
              this.m_mapCreatorsInFlight.clear(),
              this.m_mapHubCategoriesInFlight.clear(),
              (this.m_bActivelyResettingCache = !1);
          });
        }
        static BIsInitialized() {
          return f.Get().m_bInitialized;
        }
        QueueAppRequest(e, r) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(e, 0, r);
          });
        }
        QueuePackageRequest(e, r) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(e, 1, r);
          });
        }
        QueueBundleRequest(e, r) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(e, 2, r);
          });
        }
        QueueTagRequest(e, r) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(e, 4, r);
          });
        }
        QueueCreatorRequest(e, r) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(e, 5, r);
          });
        }
        QueueHubCategoryRequest(e, r) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.QueueStoreItemRequest(e, 6, r);
          });
        }
        static ValidateDataRequest(e) {
          const r = [
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
          ];
          for (const e of r) if (!0 !== e && void 0 !== e) return !1;
          return !0;
        }
        QueueMultipleAppRequests(e, r) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const t = (yield Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, 0, r)),
            )).filter((e) => 1 != e);
            return t.length > 0 ? t[0] : 1;
          });
        }
        QueueMultiplePackageRequests(e, r) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const t = (yield Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, 1, r)),
            )).filter((e) => 1 != e);
            return t.length > 0 ? t[0] : 1;
          });
        }
        QueueMultipleBundleRequests(e, r) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const t = (yield Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, 2, r)),
            )).filter((e) => 1 != e);
            return t.length > 0 ? t[0] : 1;
          });
        }
        QueueMultipleTagRequests(e, r) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const t = (yield Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, 4, r)),
            )).filter((e) => 1 != e);
            return t.length > 0 ? t[0] : 1;
          });
        }
        QueueMultipleCreatorRequests(e, r) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const t = (yield Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, 5, r)),
            )).filter((e) => 1 != e);
            return t.length > 0 ? t[0] : 1;
          });
        }
        QueueMultipleHubCategoryRequests(e, r) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const t = (yield Promise.all(
              e.map((e) => this.QueueStoreItemRequest(e, 6, r)),
            )).filter((e) => 1 != e);
            return t.length > 0 ? t[0] : 1;
          });
        }
        QueueMultipleStoreItemRequests(e, r, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (!e || 0 == e.length) return 1;
            const i = (yield Promise.all(
              e.map((e, i) => this.QueueStoreItemRequest(e, r[i], t)),
            )).filter((e) => 1 != e);
            return i.length > 0 ? i[0] : 1;
          });
        }
        QueueStoreItemRequest(e, r, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (
              ((0, _.X)(
                f.ValidateDataRequest(t),
                "Invalid Data Request: " + JSON.stringify(t),
              ),
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
                (0, _.X)(
                  !e,
                  `unexpected id ${e} of zero or undefined for type ${r}`,
                ),
                this.k_AlreadyResolvedInvalid
              );
            const i = this.GetPreviousSupersetLoadPromise(e, r, t);
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
              (this.m_setPendingDataRequest = p(
                this.m_setPendingDataRequest,
                t,
              )),
              r)
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
                (0, _.X)(!1, `Unexpected Type ${r}`);
            }
            const s = this.m_PendingInfoPromise;
            return (
              this.m_setPendingAppInfo.size +
                this.m_setPendingPackageInfo.size +
                this.m_setPendingBundleInfo.size >=
                this.k_nMaxBatchSize &&
                (this.m_PendingTimer &&
                  window.clearTimeout(this.m_PendingTimer),
                this.FlushPendingInfo()),
              s
            );
          });
        }
        FlushPendingInfo() {
          return (0, i.mG)(this, void 0, void 0, function* () {
            if (void 0 === this.m_PendingInfoResolve) return;
            const e = this.m_PendingInfoResolve,
              r = Array.from(this.m_setPendingAppInfo),
              t = Array.from(this.m_setPendingPackageInfo),
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
              this.HintLoadStoreItems(void 0, r, t, i, s, a, n, o).then((r) =>
                e(r),
              );
          });
        }
        HintLoadStoreApps(e, r) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.HintLoadStoreItems(
              null,
              e,
              null,
              null,
              null,
              null,
              null,
              r,
            );
          });
        }
        HintLoadStorePackages(e, r) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.HintLoadStoreItems(
              null,
              null,
              e,
              null,
              null,
              null,
              null,
              r,
            );
          });
        }
        HintLoadStoreBundles(e, r) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            return this.HintLoadStoreItems(
              null,
              null,
              null,
              e,
              null,
              null,
              null,
              r,
            );
          });
        }
        GetPreviousSupersetLoadPromise(e, r, t) {
          if (this.BHasStoreItem(e, r, t) || this.BIsStoreItemMissing(e, r))
            return this.k_AlreadyResolvedOK;
          let i = null;
          switch (r) {
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
          return i && g.Z.BDataRequestContainsOtherDataRequest(i.dataRequest, t)
            ? i.promise
            : null;
        }
        HintLoadStoreItems(e, r, t, s, a, n, o, l) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = null;
            const c = new Promise((e) => (i = e));
            let d = [],
              m = [];
            (r || []).forEach((e) => {
              const r = this.GetPreviousSupersetLoadPromise(e, 0, l);
              if (r) m.push(r);
              else {
                d.push(u.oY.fromObject({ appid: e }));
                let r = p(this.GetStoreItemDataRequest(e, 0), l);
                const t = this.m_mapAppsInFlight.get(e);
                (r = p(null == t ? void 0 : t.dataRequest, r)),
                  t && m.push(t.promise),
                  this.m_mapAppsInFlight.set(e, {
                    promise: t ? y(t.promise, c) : c,
                    dataRequest: r,
                  });
              }
            }),
              (t || []).forEach((e) => {
                const r = this.GetPreviousSupersetLoadPromise(e, 1, l);
                if (r) m.push(r);
                else {
                  d.push(u.oY.fromObject({ packageid: e }));
                  let r = p(this.GetStoreItemDataRequest(e, 1), l);
                  const t = this.m_mapPackageInFlight.get(e);
                  (r = p(null == t ? void 0 : t.dataRequest, r)),
                    t && m.push(t.promise),
                    this.m_mapPackageInFlight.set(e, {
                      promise: t ? y(t.promise, c) : c,
                      dataRequest: r,
                    });
                }
              }),
              (s || []).forEach((e) => {
                const r = this.GetPreviousSupersetLoadPromise(e, 2, l);
                if (r) m.push(r);
                else {
                  d.push(u.oY.fromObject({ bundleid: e }));
                  let r = p(this.GetStoreItemDataRequest(e, 2), l);
                  const t = this.m_mapBundleInFlight.get(e);
                  (r = p(null == t ? void 0 : t.dataRequest, r)),
                    t && m.push(t.promise),
                    this.m_mapBundleInFlight.set(e, {
                      promise: t ? y(t.promise, c) : c,
                      dataRequest: r,
                    });
                }
              }),
              (a || []).forEach((e) => {
                const r = this.GetPreviousSupersetLoadPromise(e, 4, l);
                if (r) m.push(r);
                else {
                  d.push(u.oY.fromObject({ tagid: e }));
                  let r = p(this.GetStoreItemDataRequest(e, 4), l);
                  const t = this.m_mapTagsInFlight.get(e);
                  (r = p(null == t ? void 0 : t.dataRequest, r)),
                    t && m.push(t.promise),
                    this.m_mapTagsInFlight.set(e, {
                      promise: t ? y(t.promise, c) : c,
                      dataRequest: r,
                    });
                }
              }),
              (n || []).forEach((e) => {
                const r = this.GetPreviousSupersetLoadPromise(e, 5, l);
                if (r) m.push(r);
                else {
                  d.push(u.oY.fromObject({ creatorid: e }));
                  let r = p(this.GetStoreItemDataRequest(e, 5), l);
                  const t = this.m_mapCreatorsInFlight.get(e);
                  (r = p(null == t ? void 0 : t.dataRequest, r)),
                    t && m.push(t.promise),
                    this.m_mapCreatorsInFlight.set(e, {
                      promise: t ? y(t.promise, c) : c,
                      dataRequest: r,
                    });
                }
              }),
              (o || []).forEach((e) => {
                const r = this.GetPreviousSupersetLoadPromise(e, 6, l);
                if (r) m.push(r);
                else {
                  d.push(u.oY.fromObject({ hubcategoryid: e }));
                  let r = p(this.GetStoreItemDataRequest(e, 6), l);
                  const t = this.m_mapHubCategoriesInFlight.get(e);
                  (r = p(null == t ? void 0 : t.dataRequest, r)),
                    t && m.push(t.promise),
                    this.m_mapHubCategoriesInFlight.set(e, {
                      promise: t ? y(t.promise, c) : c,
                      dataRequest: r,
                    });
                }
              });
            let _ = 1;
            if (
              (d.length > 0 &&
                (_ = yield this.InternalHandleLoadStoreItems(e, d, l)),
              i(_),
              m.length > 0)
            ) {
              const e = yield Promise.all(m);
              for (const r of e) 1 != r && 1 == _ && (_ = r);
            }
            return (
              (r || []).forEach((e) => this.m_mapAppsInFlight.delete(e)),
              (t || []).forEach((e) => this.m_mapPackageInFlight.delete(e)),
              (s || []).forEach((e) => this.m_mapBundleInFlight.delete(e)),
              (a || []).forEach((e) => this.m_mapTagsInFlight.delete(e)),
              (n || []).forEach((e) => this.m_mapCreatorsInFlight.delete(e)),
              (o || []).forEach((e) =>
                this.m_mapHubCategoriesInFlight.delete(e),
              ),
              _
            );
          });
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
                (this.m_setUnavailableHubCategories.add(e.hubcategoryid()),
                this.m_mapHubCategories.delete(e.hubcategoryid()));
          });
        }
        SortStoreItems(e) {
          let r = e.slice();
          return (
            r.sort((e, r) => {
              var t, i, s, a, n, o, l, u, c, d, m, _;
              let h = null !== (t = e.appid()) && void 0 !== t ? t : 0,
                B = null !== (i = r.appid()) && void 0 !== i ? i : 0;
              if (h != B) return h - B;
              let b = null !== (s = e.packageid()) && void 0 !== s ? s : 0,
                g = null !== (a = r.packageid()) && void 0 !== a ? a : 0;
              if (b != g) return b - g;
              let p = null !== (n = e.bundleid()) && void 0 !== n ? n : 0,
                y = null !== (o = r.bundleid()) && void 0 !== o ? o : 0;
              if (p != y) return p - y;
              let f = null !== (l = e.tagid()) && void 0 !== l ? l : 0,
                w = null !== (u = r.tagid()) && void 0 !== u ? u : 0;
              if (f != w) return f - w;
              let R = null !== (c = e.creatorid()) && void 0 !== c ? c : 0,
                F = null !== (d = r.creatorid()) && void 0 !== d ? d : 0;
              if (R != F) return R - F;
              let S = null !== (m = e.hubcategoryid()) && void 0 !== m ? m : 0,
                M = null !== (_ = r.hubcategoryid()) && void 0 !== _ ? _ : 0;
              return S != M ? S - M : 0;
            }),
            r
          );
        }
        InternalHandleLoadStoreItems(e, r, t) {
          return (0, i.mG)(this, void 0, void 0, function* () {
            let i = 1;
            e ||
              (this.GetSteamInterface() ||
                this.SetSteamInterface(new n.J(B.De.WEBAPI_BASE_URL)),
              (e = this.GetSteamInterface())),
              (r = this.SortStoreItems(r));
            const o = new Array();
            try {
              const n = [];
              for (; r.length > 0; ) {
                const i = r.splice(0, this.k_nMaxBatchSize);
                if ((o.push(i), this.m_bUsePartnerAPI)) {
                  const r = a.gA.Init(d);
                  r.Body().set_include_unpublished(!1);
                  const s = r.Body().request(!0);
                  s.set_context((0, b.Fq)(this.m_bUsePartnerAPI)),
                    s.set_data_request(u.Qn.fromObject(t)),
                    s.set_ids(i),
                    n.push(m.GetItems(e.GetServiceTransport(), r));
                } else {
                  const r = a.gA.Init(u.eK);
                  (0, b.pA)(r, this.m_bUsePartnerAPI),
                    (0, b.De)(r, t),
                    r.Body().set_ids(i),
                    n.push(u.VJ.GetItems(e.GetAnonymousServiceTransport(), r));
                }
              }
              (yield Promise.all(n)).forEach((e, a) => {
                1 == e.GetEResult()
                  ? e
                      .Body()
                      .store_items()
                      .forEach((i) => {
                        const a = i.id(),
                          n = i.item_type();
                        let o =
                            this.m_bReturnUnavailableItems && 15 == i.success(),
                          l =
                            1 == i.success() && !this.BIsStoreItemMissing(a, n);
                        if (o || l) this.ReadItem(i, t);
                        else {
                          switch (
                            ("dev" == B.De.WEB_UNIVERSE &&
                              console.warn(
                                `Failed to load ${a} type ${n} with error ${i.success()}`,
                                i,
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
                          if (i.unvailable_for_country_restriction())
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
                                  (0, s.ZN)(r),
                                );
                            }
                        }
                      })
                  : (console.warn(
                      "CStoreItemCache::InternalHandleLoadStoreItems failed with eResult: " +
                        e.GetEResult() +
                        " message: " +
                        e.Hdr().error_message(),
                      (0, s.ZN)(r),
                    ),
                    (1 == e.Hdr().transport_error() || B.De.FROM_WEB) &&
                      this.MarkStoreItemIDUnavailable(o[a]),
                    1 == i && (i = e.GetEResult()));
              });
            } catch (e) {
              const r = (0, h.l)(e);
              return (
                console.error(
                  "CStoreItemCache::InternalHandleLoadStoreItems failed: " +
                    r.strErrorMsg,
                  r,
                ),
                o.forEach((e) => this.MarkStoreItemIDUnavailable(e)),
                79
              );
            }
            return i;
          });
        }
        GetMapForType(e) {
          let r;
          switch (e) {
            case 0:
              r = this.m_mapApps;
              break;
            case 2:
              r = this.m_mapBundles;
              break;
            case 1:
              r = this.m_mapPackages;
              break;
            case 4:
              r = this.m_mapTags;
              break;
            case 5:
              r = this.m_mapCreators;
              break;
            case 6:
              r = this.m_mapHubCategories;
              break;
            default:
              console.error("Invalid map type requested", e);
          }
          return r;
        }
        BHasStoreItem(e, r, t) {
          let i = this.GetMapForType(r);
          return Boolean(
            i && i.has(e) && (!t || i.get(e).BContainDataRequest(t)),
          );
        }
        GetStoreItem(e, r) {
          if (-1 == r || 3 == r) return;
          const t = this.GetMapForType(r);
          return null == t ? void 0 : t.get(e);
        }
        GetStoreItemWithLegacyVisibilityCheck(e, r) {
          const t = this.GetStoreItem(e, r);
          return t && (this.m_bReturnUnavailableItems || t.BIsVisible())
            ? t
            : void 0;
        }
        GetStoreItemDataRequest(e, r) {
          var t, i;
          return (
            (null ===
              (i =
                null === (t = this.GetMapForType(r)) || void 0 === t
                  ? void 0
                  : t.get(e)) || void 0 === i
              ? void 0
              : i.GetDataRequest()) || null
          );
        }
        BHasApp(e, r) {
          return this.BHasStoreItem(e, 0, r);
        }
        GetApp(e) {
          return this.GetStoreItem(e, 0);
        }
        BHasPackage(e, r) {
          return this.BHasStoreItem(e, 1, r);
        }
        GetPackage(e) {
          return this.GetStoreItem(e, 1);
        }
        BHasBundle(e, r) {
          return this.BHasStoreItem(e, 2, r);
        }
        GetBundle(e) {
          return this.GetStoreItem(e, 2);
        }
        BHasTag(e, r) {
          return this.BHasStoreItem(e, 4, r);
        }
        GetTag(e) {
          return this.GetStoreItem(e, 4);
        }
        BHasCreator(e, r) {
          return this.BHasStoreItem(e, 5, r);
        }
        GetCreator(e) {
          return this.GetStoreItem(e, 5);
        }
        BHasHubCategory(e, r) {
          return this.BHasStoreItem(e, 6, r);
        }
        GetHubCategory(e) {
          return this.GetStoreItem(e, 6);
        }
        BIsStoreItemMissing(e, r) {
          switch (r) {
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
              return console.error("BStoreItemMissing invalid type", r), !0;
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
        BIsStoreItemUnavailableDueToCountryRestriction(e, r) {
          switch (r) {
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
                  r,
                ),
                !0
              );
            default:
              return console.error("BStoreItemMissing invalid type", r), !0;
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
        ReadResults(e, r) {
          let t = [];
          for (const i of e) t.push(this.ReadItem(i, r));
          return t;
        }
        ReadItem(e, r) {
          const t = e.item_type();
          let i = null;
          switch (t) {
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
              return console.error(`Invalid item type: ${t}`), null;
          }
          let s = i.get(e.id());
          return (
            s ? s.MergeData(e, r) : ((s = new g.Z(e, r)), i.set(e.id(), s)), s
          );
        }
      }
      (f.k_DataRequest_CommonOnly = {}),
        (f.k_DataRequest_BasicInfo = { include_basic_info: !0 }),
        (f.k_DataRequest_Assets = { include_assets: !0 }),
        (f.k_DataRequest_IncludeAll = {
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
        });
      const w = f;
    },
    85886: (e, r, t) => {
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
      function o(e, r) {
        switch (e) {
          case 2:
            return "bundle";
          case 1:
            return "sub";
          default:
            switch (r) {
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
      t.d(r, {
        $k: () => i,
        Ds: () => o,
        GV: () => s,
        Hy: () => l,
        TM: () => n,
        qE: () => a,
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
    23217: (e, r, t) => {
      t.d(r, { l: () => n });
      var i = t(52868),
        s = t.n(i),
        a = t(54856);
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
            if ("object" == typeof e && e instanceof a.gA)
              return {
                strErrorMsg: "" + e.GetEResult(),
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
