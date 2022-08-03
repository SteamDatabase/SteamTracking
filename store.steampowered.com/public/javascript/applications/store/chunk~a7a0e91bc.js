/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9886],
  {
    39722: (e, r, t) => {
      t.d(r, { Bn: () => _, Pe: () => u });
      var i = t(33019),
        s = t(40110),
        a = t(990);
      const n = i.Message;
      class l extends n {
        constructor(e = null) {
          super(),
            l.prototype.gid || s.aR(l.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  gid: {
                    n: 1,
                    br: s.FE.readFixed64String,
                    bw: s.Xc.writeFixed64String,
                  },
                  title: { n: 2, br: s.FE.readString, bw: s.Xc.writeString },
                  type: { n: 3, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  visibility: { n: 4, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  priority: { n: 5, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  association_type: {
                    n: 6,
                    br: s.FE.readEnum,
                    bw: s.Xc.writeEnum,
                  },
                  associated_id: {
                    n: 7,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  associated_name: {
                    n: 8,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  start_date: {
                    n: 9,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  end_date: {
                    n: 10,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  country_allow: {
                    n: 11,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  country_deny: {
                    n: 12,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  ownership_restrictions_overridden: {
                    n: 13,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  must_own_appid: {
                    n: 14,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  must_not_own_appid: {
                    n: 15,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  must_own_packageid: {
                    n: 16,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  must_not_own_packageid: {
                    n: 17,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  must_have_launched_appid: {
                    n: 18,
                    br: s.FE.readUint32,
                    bw: s.Xc.writeUint32,
                  },
                  additional_restrictions: {
                    n: 19,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  template_type: {
                    n: 20,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  template_vars: {
                    n: 21,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  flags: { n: 22, br: s.FE.readUint32, bw: s.Xc.writeUint32 },
                  creator_name: {
                    n: 23,
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
          return "CMarketingMessageProto";
        }
      }
      class o extends n {
        constructor(e = null) {
          super(),
            o.prototype.gid || s.aR(o.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  gid: {
                    n: 1,
                    br: s.FE.readFixed64String,
                    bw: s.Xc.writeFixed64String,
                  },
                  title: { n: 2, br: s.FE.readString, bw: s.Xc.writeString },
                  type: { n: 3, br: s.FE.readEnum, bw: s.Xc.writeEnum },
                  associated_item_id: { n: 4, c: a.oY },
                  associated_item: { n: 5, c: a.VL },
                  associated_name: {
                    n: 6,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  template_type: {
                    n: 10,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  template_vars_json: {
                    n: 11,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
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
          return "CDisplayMarketingMessage";
        }
      }
      class c extends n {
        constructor(e = null) {
          super(),
            c.prototype.messages || s.aR(c.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  messages: { n: 1, c: l, r: !0, q: !0 },
                  time_next_message_age: {
                    n: 2,
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
          return "CMarketingMessages_GetActiveMarketingMessages_Response";
        }
      }
      class u extends n {
        constructor(e = null) {
          super(),
            u.prototype.include_seen_messages || s.aR(u.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  include_seen_messages: {
                    n: 1,
                    br: s.FE.readBool,
                    bw: s.Xc.writeBool,
                  },
                  country_code: {
                    n: 2,
                    br: s.FE.readString,
                    bw: s.Xc.writeString,
                  },
                  elanguage: { n: 3, br: s.FE.readInt32, bw: s.Xc.writeInt32 },
                  operating_system: {
                    n: 4,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  client_package_version: {
                    n: 5,
                    br: s.FE.readInt32,
                    bw: s.Xc.writeInt32,
                  },
                  context: { n: 6, c: a.WJ },
                  data_request: { n: 7, c: a.Qn },
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
          return "CMarketingMessages_GetMarketingMessagesForUser_Request";
        }
      }
      class g extends n {
        constructor(e = null) {
          super(),
            g.prototype.messages || s.aR(g.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: { messages: { n: 1, c: m, r: !0, q: !0 } },
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
          return "CMarketingMessages_GetMarketingMessagesForUser_Response";
        }
      }
      class m extends n {
        constructor(e = null) {
          super(),
            m.prototype.already_seen || s.aR(m.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  already_seen: { n: 1, br: s.FE.readBool, bw: s.Xc.writeBool },
                  message: { n: 2, c: o },
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
          return "CMarketingMessages_GetMarketingMessagesForUser_Response_MarketingMessageForUser";
        }
      }
      class d extends n {
        constructor(e = null) {
          super(),
            d.prototype.message || s.aR(d.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = { proto: d, fields: { message: { n: 1, c: o } } }),
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
          return "CMarketingMessages_GetDisplayMarketingMessage_Response";
        }
      }
      class M extends n {
        constructor(e = null) {
          super(),
            M.prototype.message || s.aR(M.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = { proto: M, fields: { message: { n: 1, c: l } } }),
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
          return "CMarketingMessages_GetMarketingMessage_Response";
        }
      }
      class B extends n {
        constructor(e = null) {
          super(),
            B.prototype.messages || s.aR(B.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: { messages: { n: 1, c: l, r: !0, q: !0 } },
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
          return "CMarketingMessages_FindMarketingMessages_Response";
        }
      }
      class b extends n {
        constructor(e = null) {
          super(),
            b.prototype.gid || s.aR(b.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  gid: {
                    n: 1,
                    br: s.FE.readFixed64String,
                    bw: s.Xc.writeFixed64String,
                  },
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
          return "CMarketingMessages_CreateMarketingMessage_Response";
        }
      }
      class y extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new y();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_UpdateMarketingMessage_Response";
        }
      }
      class w extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new w();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMarketingMessages_DeleteMarketingMessage_Response";
        }
      }
      var _;
      !(function (e) {
        (e.GetActiveMarketingMessages = function (e, r) {
          return e.SendMsg(
            "MarketingMessages.GetActiveMarketingMessages#1",
            r,
            c,
            { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 }
          );
        }),
          (e.GetMarketingMessagesForUser = function (e, r) {
            return e.SendMsg(
              "MarketingMessages.GetMarketingMessagesForUser#1",
              r,
              g,
              { bConstMethod: !0, ePrivilege: 1 }
            );
          }),
          (e.GetDisplayMarketingMessage = function (e, r) {
            return e.SendMsg(
              "MarketingMessages.GetDisplayMarketingMessage#1",
              r,
              d,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.MarkMessageSeen = function (e, r) {
            return e.SendNotification(
              "MarketingMessages.MarkMessageSeen#1",
              r,
              { ePrivilege: 1 }
            );
          }),
          (e.GetMarketingMessage = function (e, r) {
            return e.SendMsg("MarketingMessages.GetMarketingMessage#1", r, M, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.CreateMarketingMessage = function (e, r) {
            return e.SendMsg(
              "MarketingMessages.CreateMarketingMessage#1",
              r,
              b,
              { ePrivilege: 4 }
            );
          }),
          (e.UpdateMarketingMessage = function (e, r) {
            return e.SendMsg(
              "MarketingMessages.UpdateMarketingMessage#1",
              r,
              y,
              { ePrivilege: 4 }
            );
          }),
          (e.DeleteMarketingMessage = function (e, r) {
            return e.SendMsg(
              "MarketingMessages.DeleteMarketingMessage#1",
              r,
              w,
              { ePrivilege: 4 }
            );
          }),
          (e.FindMarketingMessages = function (e, r) {
            return e.SendMsg(
              "MarketingMessages.FindMarketingMessages#1",
              r,
              B,
              { ePrivilege: 4 }
            );
          });
      })(_ || (_ = {}));
    },
  },
]);
