/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    BaLb: function (e, r, t) {
      "use strict";
      t.d(r, "b", function () {
        return m;
      }),
        t.d(r, "a", function () {
          return c;
        }),
        t.d(r, "c", function () {
          return B;
        }),
        t.d(r, "d", function () {
          return g;
        });
      var i = t("hRO2"),
        n = t("3dpo");
      const a = i.Message;
      class s extends a {
        constructor(e = null) {
          super(),
            s.prototype.communityitemid || n.a(s.M()),
            a.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            s.sm_m ||
              (s.sm_m = {
                proto: s,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
                  },
                  item_type: { n: 2, br: n.d.readUint32, bw: n.h.writeUint32 },
                  appid: { n: 3, br: n.d.readUint32, bw: n.h.writeUint32 },
                  owner: { n: 4, br: n.d.readUint32, bw: n.h.writeUint32 },
                  attributes: { n: 5, c: o, r: !0, q: !0 },
                  used: { n: 6, br: n.d.readBool, bw: n.h.writeBool },
                  owner_origin: {
                    n: 7,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  amount: {
                    n: 8,
                    br: n.d.readInt64String,
                    bw: n.h.writeInt64String,
                  },
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
          return "CQuest_CommunityItem";
        }
      }
      class o extends a {
        constructor(e = null) {
          super(),
            o.prototype.attributeid || n.a(o.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  attributeid: {
                    n: 1,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  value: {
                    n: 2,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
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
          return "CQuest_CommunityItem_Attribute";
        }
      }
      class m extends a {
        constructor(e = null) {
          super(),
            m.prototype.filter_appids || n.a(m.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  filter_appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.d.readUint32,
                    bw: n.h.writeRepeatedUint32,
                  },
                },
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
          return "CQuest_GetCommunityInventory_Request";
        }
      }
      class d extends a {
        constructor(e = null) {
          super(),
            d.prototype.items || n.a(d.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: { items: { n: 1, c: s, r: !0, q: !0 } },
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
          return "CQuest_GetCommunityInventory_Response";
        }
      }
      class u extends a {
        constructor(e = null) {
          super(),
            u.prototype.item_definitions || n.a(u.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: { item_definitions: { n: 1, c: l, r: !0, q: !0 } },
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
          return "CQuest_GetCommunityItemDefinitions_Response";
        }
      }
      class l extends a {
        constructor(e = null) {
          super(),
            l.prototype.item_type || n.a(l.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  item_type: { n: 1, br: n.d.readUint32, bw: n.h.writeUint32 },
                  appid: { n: 2, br: n.d.readUint32, bw: n.h.writeUint32 },
                  item_name: { n: 3, br: n.d.readString, bw: n.h.writeString },
                  item_title: { n: 4, br: n.d.readString, bw: n.h.writeString },
                  item_description: {
                    n: 5,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  item_image_small: {
                    n: 6,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  item_image_large: {
                    n: 7,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  item_key_values: {
                    n: 8,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  item_series: {
                    n: 9,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  item_class: {
                    n: 10,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  editor_accountid: {
                    n: 11,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  active: { n: 12, br: n.d.readBool, bw: n.h.writeBool },
                  item_image_composed: {
                    n: 13,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  item_image_composed_foil: {
                    n: 14,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  deleted: { n: 15, br: n.d.readBool, bw: n.h.writeBool },
                  item_last_changed: {
                    n: 16,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  broadcast_channel_id: {
                    n: 17,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
                  },
                  item_movie_webm: {
                    n: 18,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  item_movie_mp4: {
                    n: 19,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  item_movie_webm_small: {
                    n: 20,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  item_movie_mp4_small: {
                    n: 21,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
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
          return "CQuest_GetCommunityItemDefinitions_Response_ItemDefinition";
        }
      }
      class c extends a {
        constructor(e = null) {
          super(),
            c.prototype.appid || n.a(c.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  appid: { n: 1, br: n.d.readUint32, bw: n.h.writeUint32 },
                  communityitemid: {
                    n: 2,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
                  },
                  activate: { n: 3, br: n.d.readBool, bw: n.h.writeBool },
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
          return "CQuest_ActivateProfileModifierItem_Request";
        }
      }
      class b extends a {
        constructor(e = null) {
          super(), a.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new b();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CQuest_ActivateProfileModifierItem_Response";
        }
      }
      class B extends a {
        constructor(e = null) {
          super(),
            B.prototype.timestamp_start || n.a(B.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  timestamp_start: {
                    n: 1,
                    d: 0,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  timestamp_end: {
                    n: 2,
                    d: 4294967295,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
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
          return "CQuest_GetNumTradingCardsEarned_Request";
        }
      }
      class w extends a {
        constructor(e = null) {
          super(),
            w.prototype.num_trading_cards || n.a(w.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  num_trading_cards: {
                    n: 1,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
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
          return "CQuest_GetNumTradingCardsEarned_Response";
        }
      }
      class y extends a {
        constructor(e = null) {
          super(),
            y.prototype.eventid || n.a(y.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  eventid: { n: 1, br: n.d.readEnum, bw: n.h.writeEnum },
                  item_bucket: {
                    n: 2,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  appid: { n: 3, br: n.d.readUint32, bw: n.h.writeUint32 },
                  active: { n: 4, br: n.d.readBool, bw: n.h.writeBool },
                  rarity: { n: 5, br: n.d.readUint32, bw: n.h.writeUint32 },
                  package_to_grant: {
                    n: 6,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  game_item_id: {
                    n: 7,
                    br: n.d.readFixed64String,
                    bw: n.h.writeFixed64String,
                  },
                  community_item_class: {
                    n: 8,
                    br: n.d.readInt32,
                    bw: n.h.writeInt32,
                  },
                  community_item_type: {
                    n: 9,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  loyalty_point_type: {
                    n: 10,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  amount: {
                    n: 11,
                    br: n.d.readInt64String,
                    bw: n.h.writeInt64String,
                  },
                  rtime_time_active: {
                    n: 12,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  loyalty_reward_defid: {
                    n: 13,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  user_badge_to_grant: {
                    n: 14,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  user_badge_level: {
                    n: 15,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
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
          return "CVirtualItemRewardDefinition";
        }
      }
      class _ extends a {
        constructor(e = null) {
          super(),
            _.prototype.rewards || n.a(_.M()),
            a.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: { rewards: { n: 1, c: y, r: !0, q: !0 } },
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
          return "CQuest_VirtualItemRewardDefinition_Response";
        }
      }
      var g;
      !(function (e) {
        (e.GetCommunityInventory = function (e, r) {
          return e.SendMsg("Quest.GetCommunityInventory#1", r, d, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
          (e.GetCommunityItemDefinitions = function (e, r) {
            return e.SendMsg("Quest.GetCommunityItemDefinitions#1", r, u, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 4,
            });
          }),
          (e.ActivateProfileModifierItem = function (e, r) {
            return e.SendMsg("Quest.ActivateProfileModifierItem#1", r, b, {
              ePrivilege: 1,
            });
          }),
          (e.GetNumTradingCardsEarned = function (e, r) {
            return e.SendMsg("Quest.GetNumTradingCardsEarned#1", r, w, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetVirtualItemRewardDefinition = function (e, r) {
            return e.SendMsg("Quest.GetVirtualItemRewardDefinition#1", r, _, {
              bConstMethod: !0,
              ePrivilege: 4,
            });
          });
      })(g || (g = {}));
    },
  },
]);
