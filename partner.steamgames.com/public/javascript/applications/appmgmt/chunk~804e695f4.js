/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [9017],
  {
    37403: (e, r, t) => {
      t.d(r, {
        $Y: () => C,
        BE: () => i,
        QU: () => j,
        _z: () => l,
        kZ: () => Z,
        wS: () => J,
        zQ: () => u,
      });
      var i,
        s = t(80613),
        a = t.n(s),
        n = t(89068),
        o = t(56545),
        m = t(36003);
      class l extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.appids || n.Sg(l.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.qM.readInt32,
                    pbr: n.qM.readPackedInt32,
                    bw: n.gp.writeRepeatedInt32,
                  },
                  language: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = n.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(l.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetApps_Request";
        }
      }
      class c extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.apps || n.Sg(c.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: { apps: { n: 1, c: m.WV, r: !0, q: !0 } },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = n.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(c.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetApps_Response";
        }
      }
      class u extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.appid || n.Sg(u.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  appid: { n: 1, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  language: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = n.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(u.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAppRichPresenceLocalization_Request";
        }
      }
      class d extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.appid || n.Sg(d.M()),
            s.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  appid: { n: 1, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  token_lists: { n: 2, c: g, r: !0, q: !0 },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = n.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(d.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAppRichPresenceLocalization_Response";
        }
      }
      class B extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.name || n.Sg(B.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  name: { n: 1, br: n.qM.readString, bw: n.gp.writeString },
                  value: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = n.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(B.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAppRichPresenceLocalization_Response_Token";
        }
      }
      class g extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.language || n.Sg(g.M()),
            s.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  language: { n: 1, br: n.qM.readString, bw: n.gp.writeString },
                  tokens: { n: 2, c: B, r: !0, q: !0 },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = n.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(g.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAppRichPresenceLocalization_Response_TokenList";
        }
      }
      class b extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.steamid || n.Sg(b.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  comment_thread_type: {
                    n: 2,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  gidfeature: {
                    n: 3,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  commentthreadid: {
                    n: 5,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  start: { n: 6, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  count: { n: 7, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  upvoters: { n: 8, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  include_deleted: {
                    n: 9,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  gidcomment: {
                    n: 10,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  time_oldest: {
                    n: 11,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  oldest_first: {
                    n: 12,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = n.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(b.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetCommentThread_Request";
        }
      }
      class y extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.gidcomment || n.Sg(y.M()),
            s.Message.initialize(this, e, 0, -1, [12], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  gidcomment: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  steamid: {
                    n: 2,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  timestamp: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  text: { n: 4, br: n.qM.readString, bw: n.gp.writeString },
                  upvotes: { n: 5, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  hidden: { n: 6, br: n.qM.readBool, bw: n.gp.writeBool },
                  hidden_by_user: {
                    n: 7,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  deleted: { n: 8, br: n.qM.readBool, bw: n.gp.writeBool },
                  ipaddress: { n: 9, c: m.kK },
                  total_hidden: {
                    n: 10,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  upvoted_by_user: {
                    n: 11,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  reactions: { n: 12, c: p, r: !0, q: !0 },
                  gidparentcomment: {
                    n: 13,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = n.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(y.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_Comment";
        }
      }
      class p extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.reactionid || n.Sg(p.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  reactionid: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  count: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = n.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(p.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_Comment_Reaction";
        }
      }
      class M extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.comments || n.Sg(M.M()),
            s.Message.initialize(this, e, 0, -1, [1, 2, 9], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  comments: { n: 1, c: y, r: !0, q: !0 },
                  deleted_comments: { n: 2, c: y, r: !0, q: !0 },
                  steamid: {
                    n: 3,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  commentthreadid: {
                    n: 4,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  start: { n: 5, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  count: { n: 6, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  total_count: {
                    n: 7,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  upvotes: { n: 8, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  upvoters: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint32,
                    pbr: n.qM.readPackedUint32,
                    bw: n.gp.writeRepeatedUint32,
                  },
                  user_subscribed: {
                    n: 10,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  user_upvoted: {
                    n: 11,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  answer_commentid: {
                    n: 12,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  answer_actor: {
                    n: 13,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  answer_actor_rank: {
                    n: 14,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  can_post: { n: 15, br: n.qM.readBool, bw: n.gp.writeBool },
                  comment_thread_type: {
                    n: 16,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  gidfeature: {
                    n: 17,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 18,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = n.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(M.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetCommentThread_Response";
        }
      }
      class _ extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.steamid || n.Sg(_.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  comment_thread_type: {
                    n: 2,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  gidfeature: {
                    n: 3,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  text: { n: 6, br: n.qM.readString, bw: n.gp.writeString },
                  gidparentcomment: {
                    n: 7,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  suppress_notifications: {
                    n: 8,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  is_report: { n: 9, br: n.qM.readBool, bw: n.gp.writeBool },
                  start_hidden: {
                    n: 10,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = n.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(_.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PostCommentToThread_Request";
        }
      }
      class w extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.gidcomment || n.Sg(w.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  gidcomment: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  commentthreadid: {
                    n: 2,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  count: { n: 3, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  upvotes: { n: 4, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = n.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(w.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PostCommentToThread_Response";
        }
      }
      class z extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.steamid || n.Sg(z.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  comment_thread_type: {
                    n: 2,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  gidfeature: {
                    n: 3,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  gidcomment: {
                    n: 5,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  undelete: { n: 6, br: n.qM.readBool, bw: n.gp.writeBool },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = n.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(z.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_DeleteCommentFromThread_Request";
        }
      }
      class f extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (a().BinaryReader)(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_DeleteCommentFromThread_Response";
        }
      }
      class S extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.commentthreadtype || n.Sg(S.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  commentthreadtype: {
                    n: 1,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  steamid: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  gidfeature: {
                    n: 3,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  gidcomment: {
                    n: 5,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  rate_up: { n: 6, br: n.qM.readBool, bw: n.gp.writeBool },
                  suppress_notifications: {
                    n: 7,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = n.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(S.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateCommentThread_Request";
        }
      }
      class R extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.gidcomment || n.Sg(R.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  gidcomment: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  commentthreadid: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  count: { n: 3, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  upvotes: { n: 4, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  has_upvoted: { n: 5, br: n.qM.readBool, bw: n.gp.writeBool },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = n.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(R.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateCommentThread_Response";
        }
      }
      class h extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.commentthreadtype || n.Sg(h.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  commentthreadtype: {
                    n: 1,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  steamid: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  gidfeature: {
                    n: 3,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  gidfeature2: {
                    n: 4,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  gidcomment: {
                    n: 5,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  max_results: {
                    n: 6,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = n.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(h.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetCommentThreadRatings_Request";
        }
      }
      class F extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.commentthreadid || n.Sg(F.M()),
            s.Message.initialize(this, e, 0, -1, [5], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  commentthreadid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  gidcomment: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  upvotes: { n: 3, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  has_upvoted: { n: 4, br: n.qM.readBool, bw: n.gp.writeBool },
                  upvoter_accountids: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint32,
                    pbr: n.qM.readPackedUint32,
                    bw: n.gp.writeRepeatedUint32,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = n.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(F.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetCommentThreadRatings_Response";
        }
      }
      class j extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.announcementid || n.Sg(j.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  announcementid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  vote_up: { n: 2, br: n.qM.readBool, bw: n.gp.writeBool },
                  clan_accountid: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = n.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(j.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateClanAnnouncement_Request";
        }
      }
      class v extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (a().BinaryReader)(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateClanAnnouncement_Response";
        }
      }
      class C extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.announcementid || n.Sg(C.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  announcementid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = n.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(C.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanAnnouncementVoteForUser_Request";
        }
      }
      class W extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.voted_up || n.Sg(W.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  voted_up: { n: 1, br: n.qM.readBool, bw: n.gp.writeBool },
                  voted_down: { n: 2, br: n.qM.readBool, bw: n.gp.writeBool },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = n.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(W.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanAnnouncementVoteForUser_Response";
        }
      }
      class T extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.steamid || n.Sg(T.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  filter_user_uploaded_only: {
                    n: 2,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = n.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(T.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAvatarHistory_Request";
        }
      }
      class q extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.avatars || n.Sg(q.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: { avatars: { n: 1, c: O, r: !0, q: !0 } },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = n.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(q.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAvatarHistory_Response";
        }
      }
      class O extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.avatar_sha1 || n.Sg(O.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  avatar_sha1: {
                    n: 1,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  user_uploaded: {
                    n: 2,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  timestamp: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = n.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(O.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAvatarHistory_Response_AvatarData";
        }
      }
      class I extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.priority || n.Sg(I.M()),
            s.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  priority: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  appid: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint32,
                    pbr: n.qM.readPackedUint32,
                    bw: n.gp.writeRepeatedUint32,
                  },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = n.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(I.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(I.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(I.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CAppPriority";
        }
      }
      class U extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.count || n.Sg(U.M()),
            s.Message.initialize(this, e, 0, -1, [5, 6, 8], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  count: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  offset: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  rtime32_start_time: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  rtime32_end_time: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  language_preference: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint32,
                    pbr: n.qM.readPackedUint32,
                    bw: n.gp.writeRepeatedUint32,
                  },
                  filter_event_type: {
                    n: 6,
                    r: !0,
                    q: !0,
                    br: n.qM.readEnum,
                    pbr: n.qM.readPackedEnum,
                    bw: n.gp.writeRepeatedEnum,
                  },
                  filter_to_appid: {
                    n: 7,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  app_list: { n: 8, c: I, r: !0, q: !0 },
                  count_after: {
                    n: 9,
                    d: 0,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  count_before: {
                    n: 10,
                    d: 0,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = n.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(U.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(U.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(U.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventNews_Request";
        }
      }
      class x extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.results || n.Sg(x.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: { results: { n: 1, c: m.h2, r: !0, q: !0 } },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = n.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(x.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(x.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(x.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventNews_Response";
        }
      }
      class P extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.include_steam_blog || n.Sg(P.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  include_steam_blog: {
                    n: 1,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  filter_to_played_within_days: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  include_only_game_updates: {
                    n: 3,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = n.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(P.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(P.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(P.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetBestEventsForUser_Request";
        }
      }
      class E extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.clanid || n.Sg(E.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  clanid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  event_gid: {
                    n: 2,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  announcement_gid: {
                    n: 3,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  appid: { n: 4, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  possible_takeover: {
                    n: 5,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  rtime32_last_modified: {
                    n: 6,
                    d: 0,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  user_app_priority: {
                    n: 7,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = n.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(E.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(E.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(E.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventResult";
        }
      }
      class A extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.results || n.Sg(A.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: { results: { n: 1, c: E, r: !0, q: !0 } },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = n.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(A.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new A();
          return A.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(A.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(A.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetBestEventsForUser_Response";
        }
      }
      class N extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new N();
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new N();
          return N.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearUserPartnerEventsAppPriorities_Request";
        }
      }
      class G extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new G();
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearUserPartnerEventsAppPriorities_Response";
        }
      }
      class k extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.appid || n.Sg(k.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  user_app_priority: {
                    n: 2,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = n.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(k.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new k();
          return k.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(k.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(k.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsAppPriority";
        }
      }
      class L extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new L();
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new L();
          return L.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventsAppPriorities_Request";
        }
      }
      class D extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.priorities || n.Sg(D.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: { priorities: { n: 1, c: k, r: !0, q: !0 } },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = n.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(D.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new D();
          return D.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(D.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(D.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventsAppPriorities_Response";
        }
      }
      class $ extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.appid || n.Sg($.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = n.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT($.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new $();
          return $.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj($.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0($.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearSinglePartnerEventsAppPriority_Request";
        }
      }
      class V extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new V();
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new V();
          return V.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearSinglePartnerEventsAppPriority_Response";
        }
      }
      class H extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.appid || n.Sg(H.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = n.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(H.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new H();
          return H.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(H.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(H.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowMoreForApp_Request";
        }
      }
      class K extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new K();
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new K();
          return K.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowMoreForApp_Response";
        }
      }
      class Y extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.appid || n.Sg(Y.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = n.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Y.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new Y();
          return Y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Y.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowLessForApp_Request";
        }
      }
      class Q extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Q();
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new Q();
          return Q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowLessForApp_Response";
        }
      }
      class J extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.markings || n.Sg(J.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: { markings: { n: 1, c: Z, r: !0, q: !0 } },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = n.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(J.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new J();
          return J.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(J.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(J.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_MarkPartnerEventsForUser_Request";
        }
      }
      class Z extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.clanid || n.Sg(Z.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  clanid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  event_gid: {
                    n: 2,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  display_location: {
                    n: 3,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  mark_shown: { n: 4, br: n.qM.readBool, bw: n.gp.writeBool },
                  mark_read: { n: 5, br: n.qM.readBool, bw: n.gp.writeBool },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = n.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Z.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new Z();
          return Z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_MarkPartnerEventsForUser_Request_PartnerEventMarking";
        }
      }
      class X extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new X();
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new X();
          return X.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_MarkPartnerEventsForUser_Response";
        }
      }
      class ee extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.event_gids || n.Sg(ee.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  event_gids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.qM.readFixed64String,
                    pbr: n.qM.readPackedFixed64String,
                    bw: n.gp.writeRepeatedFixed64String,
                  },
                  include_read_events_only: {
                    n: 2,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = n.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(ee.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new ee();
          return ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(ee.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(ee.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventViewStatus_Request";
        }
      }
      class re extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.events || n.Sg(re.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: { events: { n: 1, c: te, r: !0, q: !0 } },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = n.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(re.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new re();
          return re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(re.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventViewStatus_Response";
        }
      }
      class te extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.event_gid || n.Sg(te.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  event_gid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  last_shown_time: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  last_read_time: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  clan_account_id: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = n.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(te.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new te();
          return te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(te.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventViewStatus_Response_PartnerEvent";
        }
      }
      class ie extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.steamid || n.Sg(ie.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  itemid: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = n.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(ie.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new ie();
          return ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanEventCrowdInMetadata_Request";
        }
      }
      class se extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.crowdin_project_id || n.Sg(se.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  crowdin_project_id: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  crowdin_file_id: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = n.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(se.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new se();
          return se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(se.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(se.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanEventCrowdInMetadata_Response";
        }
      }
      class ae extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.steamid || n.Sg(ae.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = n.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(ae.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new ae();
          return ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanCrowdInMetadata_Request";
        }
      }
      class ne extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.crowdin_project_id || n.Sg(ne.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  crowdin_project_id: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  crowdin_directory_id: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  push_by_default: {
                    n: 3,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = n.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(ne.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new ne();
          return ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(ne.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(ne.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetClanCrowdInMetadata_Response";
        }
      }
      class oe extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.steamid || n.Sg(oe.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  itemid: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  language: { n: 3, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = n.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(oe.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new oe();
          return oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_FetchTranslationFromCrowdIn_Request";
        }
      }
      class me extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new me();
        }
        static deserializeBinary(e) {
          let r = new (a().BinaryReader)(e),
            t = new me();
          return me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_FetchTranslationFromCrowdIn_Response";
        }
      }
      !(function (e) {
        (e.GetApps = function (e, r) {
          return e.SendMsg("Community.GetApps#1", (0, o.I8)(l, r), c, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.GetAppRichPresenceLocalization = function (e, r) {
            return e.SendMsg(
              "Community.GetAppRichPresenceLocalization#1",
              (0, o.I8)(u, r),
              d,
              { ePrivilege: 1 },
            );
          }),
          (e.GetCommentThread = function (e, r) {
            return e.SendMsg(
              "Community.GetCommentThread#1",
              (0, o.I8)(b, r),
              M,
              { ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.PostCommentToThread = function (e, r) {
            return e.SendMsg(
              "Community.PostCommentToThread#1",
              (0, o.I8)(_, r),
              w,
              { ePrivilege: 3 },
            );
          }),
          (e.DeleteCommentFromThread = function (e, r) {
            return e.SendMsg(
              "Community.DeleteCommentFromThread#1",
              (0, o.I8)(z, r),
              f,
              { ePrivilege: 1 },
            );
          }),
          (e.RateCommentThread = function (e, r) {
            return e.SendMsg(
              "Community.RateCommentThread#1",
              (0, o.I8)(S, r),
              R,
              { ePrivilege: 3 },
            );
          }),
          (e.GetCommentThreadRatings = function (e, r) {
            return e.SendMsg(
              "Community.GetCommentThreadRatings#1",
              (0, o.I8)(h, r),
              F,
              { ePrivilege: 2 },
            );
          }),
          (e.RateClanAnnouncement = function (e, r) {
            return e.SendMsg(
              "Community.RateClanAnnouncement#1",
              (0, o.I8)(j, r),
              v,
              { ePrivilege: 3 },
            );
          }),
          (e.GetClanAnnouncementVoteForUser = function (e, r) {
            return e.SendMsg(
              "Community.GetClanAnnouncementVoteForUser#1",
              (0, o.I8)(C, r),
              W,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAvatarHistory = function (e, r) {
            return e.SendMsg(
              "Community.GetAvatarHistory#1",
              (0, o.I8)(T, r),
              q,
              { ePrivilege: 1 },
            );
          }),
          (e.GetClanEventCrowdInMetadata = function (e, r) {
            return e.SendMsg(
              "Community.GetClanEventCrowdInMetadata#1",
              (0, o.I8)(ie, r),
              se,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetClanCrowdInMetadata = function (e, r) {
            return e.SendMsg(
              "Community.GetClanCrowdInMetadata#1",
              (0, o.I8)(ae, r),
              ne,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.FetchTranslationFromCrowdIn = function (e, r) {
            return e.SendMsg(
              "Community.FetchTranslationFromCrowdIn#1",
              (0, o.I8)(oe, r),
              me,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserPartnerEventNews = function (e, r) {
            return e.SendMsg(
              "Community.GetUserPartnerEventNews#1",
              (0, o.I8)(U, r),
              x,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetBestEventsForUser = function (e, r) {
            return e.SendMsg(
              "Community.GetBestEventsForUser#1",
              (0, o.I8)(P, r),
              A,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.MarkPartnerEventsForUser = function (e, r) {
            return e.SendMsg(
              "Community.MarkPartnerEventsForUser#1",
              (0, o.I8)(J, r),
              X,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserPartnerEventViewStatus = function (e, r) {
            return e.SendMsg(
              "Community.GetUserPartnerEventViewStatus#1",
              (0, o.I8)(ee, r),
              re,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.PartnerEventsShowMoreForApp = function (e, r) {
            return e.SendMsg(
              "Community.PartnerEventsShowMoreForApp#1",
              (0, o.I8)(H, r),
              K,
              { ePrivilege: 1 },
            );
          }),
          (e.PartnerEventsShowLessForApp = function (e, r) {
            return e.SendMsg(
              "Community.PartnerEventsShowLessForApp#1",
              (0, o.I8)(Y, r),
              Q,
              { ePrivilege: 1 },
            );
          }),
          (e.ClearUserPartnerEventsAppPriorities = function (e, r) {
            return e.SendMsg(
              "Community.ClearUserPartnerEventsAppPriorities#1",
              (0, o.I8)(N, r),
              G,
              { ePrivilege: 1 },
            );
          }),
          (e.GetUserPartnerEventsAppPriorities = function (e, r) {
            return e.SendMsg(
              "Community.GetUserPartnerEventsAppPriorities#1",
              (0, o.I8)(L, r),
              D,
              { ePrivilege: 1 },
            );
          }),
          (e.ClearSinglePartnerEventsAppPriority = function (e, r) {
            return e.SendMsg(
              "Community.ClearSinglePartnerEventsAppPriority#1",
              (0, o.I8)($, r),
              V,
              { ePrivilege: 1 },
            );
          });
      })(i || (i = {}));
    },
    17690: (e, r, t) => {
      t.d(r, { IU: () => m, by: () => l, sc: () => n });
      var i = t(78327),
        s = t(85044),
        a = t(44332);
      const n = 0,
        o = "061818254b2c99ac49e6626adb128ed1282a392f",
        m = 120;
      class l {
        m_unAppID;
        m_bInitialized = !1;
        m_strName;
        m_strIconURL;
        m_dtUpdatedFromServer;
        m_eAppType;
        constructor(e) {
          this.m_unAppID = e;
        }
        get appid() {
          return this.m_unAppID;
        }
        get is_initialized() {
          return this.m_bInitialized;
        }
        get is_valid() {
          return this.m_bInitialized && !!this.m_strName;
        }
        get name() {
          return this.m_strName;
        }
        get icon_url_no_default() {
          return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, o);
        }
        get icon_url() {
          return this.BuildAppURL(this.m_strIconURL, o);
        }
        get time_updated_from_server() {
          return this.m_dtUpdatedFromServer;
        }
        get apptype() {
          return this.m_eAppType;
        }
        BIsApplicationOrTool() {
          return 4 == this.apptype || 2 == this.apptype;
        }
        BuildAppURL(e, r) {
          return e
            ? i.TS.MEDIA_CDN_COMMUNITY_URL +
                "images/apps/" +
                this.appid +
                "/" +
                e +
                ".jpg"
            : (0, s.t)(r);
        }
        DeserializeFromMessage(e) {
          (this.m_bInitialized = !0),
            (this.m_strName = e.name()),
            (this.m_strIconURL = e.icon()),
            (this.m_dtUpdatedFromServer = new Date()),
            (this.m_eAppType = e.app_type());
        }
        DeserializeFromAppOverview(e) {
          e.icon_hash() && 1073741824 != e.app_type()
            ? ((this.m_bInitialized = !0),
              (this.m_strName = e.display_name()),
              (this.m_strIconURL = e.icon_hash()),
              (this.m_dtUpdatedFromServer = new Date()),
              (this.m_eAppType = e.app_type()))
            : (this.m_bInitialized = !1);
        }
        DeserializeFromCacheObject(e) {
          try {
            (this.m_strName = e.strName),
              (this.m_strIconURL = e.strIconURL),
              (this.m_dtUpdatedFromServer = new Date(e.strUpdatedFromServer)),
              (this.m_eAppType = e.eAppType),
              (this.m_bInitialized = !0);
          } catch {}
        }
        SerializeToCacheObject() {
          return (
            (0, a.w)(
              this.m_bInitialized,
              "Attempting to serialize an uninitialized AppInfo object for caching!",
            ),
            this.m_bInitialized
              ? {
                  strName: this.m_strName,
                  strIconURL: this.m_strIconURL,
                  strUpdatedFromServer: this.m_dtUpdatedFromServer.toJSON(),
                  eAppType: this.m_eAppType,
                }
              : null
          );
        }
      }
    },
    85044: (e, r, t) => {
      t.d(r, { d: () => s, t: () => a });
      var i = t(78327);
      const s = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
      function a(e, r) {
        let t = ".jpg";
        (e && "0000000000000000000000000000000000000000" !== e) || (e = s),
          44 == e.length && ((t = e.substr(-4)), (e = e.substr(0, 40)));
        let a = i.TS.AVATAR_BASE_URL;
        return (
          a ||
            ((a = i.TS.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
            (a += e.substr(0, 2) + "/")),
          (a += e),
          r && "small" != r && (a += "_" + r),
          (a += t),
          a
        );
      }
    },
    4434: (e, r, t) => {
      t.d(r, { m: () => n });
      var i = t(41735),
        s = t.n(i),
        a = t(90626);
      function n(e) {
        const r = a.useRef(s().CancelToken.source());
        return (
          a.useEffect(() => {
            const t = r.current;
            return () => t.cancel(e ? `${e}: unmounting` : "unmounting");
          }, [e]),
          r.current
        );
      }
    },
    68797: (e, r, t) => {
      t.d(r, { H: () => n });
      var i = t(41735),
        s = t.n(i),
        a = t(56545);
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
