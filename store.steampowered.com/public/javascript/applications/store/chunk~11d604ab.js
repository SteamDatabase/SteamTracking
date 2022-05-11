/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    KjDl: function (e, r, t) {
      "use strict";
      t.d(r, "b", function () {
        return o;
      }),
        t.d(r, "a", function () {
          return u;
        }),
        t.d(r, "f", function () {
          return f;
        }),
        t.d(r, "c", function () {
          return p;
        }),
        t.d(r, "d", function () {
          return x;
        }),
        t.d(r, "e", function () {
          return A;
        }),
        t.d(r, "g", function () {
          return N;
        });
      var i = t("hRO2"),
        n = t("3dpo"),
        a = t("QAsS");
      const s = i.Message;
      class o extends s {
        constructor(e = null) {
          super(),
            o.prototype.appids || n.a(o.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.d.readInt32,
                    bw: n.h.writeRepeatedInt32,
                  },
                  language: { n: 2, br: n.d.readUint32, bw: n.h.writeUint32 },
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
          return "CCommunity_GetApps_Request";
        }
      }
      class l extends s {
        constructor(e = null) {
          super(),
            l.prototype.apps || n.a(l.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: { apps: { n: 1, c: a.a, r: !0, q: !0 } },
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
          return "CCommunity_GetApps_Response";
        }
      }
      class u extends s {
        constructor(e = null) {
          super(),
            u.prototype.appid || n.a(u.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  appid: { n: 1, br: n.d.readInt32, bw: n.h.writeInt32 },
                  language: { n: 2, br: n.d.readString, bw: n.h.writeString },
                },
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
          return "CCommunity_GetAppRichPresenceLocalization_Request";
        }
      }
      class m extends s {
        constructor(e = null) {
          super(),
            m.prototype.appid || n.a(m.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  appid: { n: 1, br: n.d.readInt32, bw: n.h.writeInt32 },
                  token_lists: { n: 2, c: d, r: !0, q: !0 },
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
          return "CCommunity_GetAppRichPresenceLocalization_Response";
        }
      }
      class c extends s {
        constructor(e = null) {
          super(),
            c.prototype.name || n.a(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  name: { n: 1, br: n.d.readString, bw: n.h.writeString },
                  value: { n: 2, br: n.d.readString, bw: n.h.writeString },
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
          return "CCommunity_GetAppRichPresenceLocalization_Response_Token";
        }
      }
      class d extends s {
        constructor(e = null) {
          super(),
            d.prototype.language || n.a(d.M()),
            s.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  language: { n: 1, br: n.d.readString, bw: n.h.writeString },
                  tokens: { n: 2, c: c, r: !0, q: !0 },
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
          return "CCommunity_GetAppRichPresenceLocalization_Response_TokenList";
        }
      }
      class B extends s {
        constructor(e = null) {
          super(),
            B.prototype.gidcomment || n.a(B.M()),
            s.initialize(this, e, 0, -1, [12], null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  gidcomment: {
                    n: 1,
                    br: n.d.readFixed64String,
                    bw: n.h.writeFixed64String,
                  },
                  steamid: {
                    n: 2,
                    br: n.d.readFixed64String,
                    bw: n.h.writeFixed64String,
                  },
                  timestamp: { n: 3, br: n.d.readUint32, bw: n.h.writeUint32 },
                  text: { n: 4, br: n.d.readString, bw: n.h.writeString },
                  upvotes: { n: 5, br: n.d.readInt32, bw: n.h.writeInt32 },
                  hidden: { n: 6, br: n.d.readBool, bw: n.h.writeBool },
                  hidden_by_user: { n: 7, br: n.d.readBool, bw: n.h.writeBool },
                  deleted: { n: 8, br: n.d.readBool, bw: n.h.writeBool },
                  ipaddress: { n: 9, c: a.c },
                  total_hidden: {
                    n: 10,
                    br: n.d.readInt32,
                    bw: n.h.writeInt32,
                  },
                  upvoted_by_user: {
                    n: 11,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                  reactions: { n: 12, c: y, r: !0, q: !0 },
                  gidparentcomment: {
                    n: 13,
                    br: n.d.readFixed64String,
                    bw: n.h.writeFixed64String,
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
          return "CCommunity_Comment";
        }
      }
      class y extends s {
        constructor(e = null) {
          super(),
            y.prototype.reactionid || n.a(y.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  reactionid: { n: 1, br: n.d.readUint32, bw: n.h.writeUint32 },
                  count: { n: 2, br: n.d.readUint32, bw: n.h.writeUint32 },
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
          return "CCommunity_Comment_Reaction";
        }
      }
      class b extends s {
        constructor(e = null) {
          super(),
            b.prototype.comments || n.a(b.M()),
            s.initialize(this, e, 0, -1, [1, 2, 9], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  comments: { n: 1, c: B, r: !0, q: !0 },
                  deleted_comments: { n: 2, c: B, r: !0, q: !0 },
                  steamid: {
                    n: 3,
                    br: n.d.readFixed64String,
                    bw: n.h.writeFixed64String,
                  },
                  commentthreadid: {
                    n: 4,
                    br: n.d.readFixed64String,
                    bw: n.h.writeFixed64String,
                  },
                  start: { n: 5, br: n.d.readInt32, bw: n.h.writeInt32 },
                  count: { n: 6, br: n.d.readInt32, bw: n.h.writeInt32 },
                  total_count: { n: 7, br: n.d.readInt32, bw: n.h.writeInt32 },
                  upvotes: { n: 8, br: n.d.readInt32, bw: n.h.writeInt32 },
                  upvoters: {
                    n: 9,
                    r: !0,
                    q: !0,
                    br: n.d.readUint32,
                    bw: n.h.writeRepeatedUint32,
                  },
                  user_subscribed: {
                    n: 10,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                  user_upvoted: { n: 11, br: n.d.readBool, bw: n.h.writeBool },
                  answer_commentid: {
                    n: 12,
                    br: n.d.readFixed64String,
                    bw: n.h.writeFixed64String,
                  },
                  answer_actor: {
                    n: 13,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  answer_actor_rank: {
                    n: 14,
                    br: n.d.readInt32,
                    bw: n.h.writeInt32,
                  },
                  can_post: { n: 15, br: n.d.readBool, bw: n.h.writeBool },
                  comment_thread_type: {
                    n: 16,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  gidfeature: {
                    n: 17,
                    br: n.d.readFixed64String,
                    bw: n.h.writeFixed64String,
                  },
                  gidfeature2: {
                    n: 18,
                    br: n.d.readFixed64String,
                    bw: n.h.writeFixed64String,
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
          return "CCommunity_GetCommentThread_Response";
        }
      }
      class g extends s {
        constructor(e = null) {
          super(),
            g.prototype.gidcomment || n.a(g.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  gidcomment: {
                    n: 1,
                    br: n.d.readFixed64String,
                    bw: n.h.writeFixed64String,
                  },
                  commentthreadid: {
                    n: 2,
                    br: n.d.readFixed64String,
                    bw: n.h.writeFixed64String,
                  },
                  count: { n: 3, br: n.d.readInt32, bw: n.h.writeInt32 },
                  upvotes: { n: 4, br: n.d.readInt32, bw: n.h.writeInt32 },
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
          return "CCommunity_PostCommentToThread_Response";
        }
      }
      class w extends s {
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
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
          return "CCommunity_DeleteCommentFromThread_Response";
        }
      }
      class z extends s {
        constructor(e = null) {
          super(),
            z.prototype.gidcomment || n.a(z.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  gidcomment: {
                    n: 1,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
                  },
                  commentthreadid: {
                    n: 2,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
                  },
                  count: { n: 3, br: n.d.readUint32, bw: n.h.writeUint32 },
                  upvotes: { n: 4, br: n.d.readUint32, bw: n.h.writeUint32 },
                  has_upvoted: { n: 5, br: n.d.readBool, bw: n.h.writeBool },
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
          return "CCommunity_RateCommentThread_Response";
        }
      }
      class _ extends s {
        constructor(e = null) {
          super(),
            _.prototype.commentthreadid || n.a(_.M()),
            s.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  commentthreadid: {
                    n: 1,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
                  },
                  gidcomment: {
                    n: 2,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
                  },
                  upvotes: { n: 3, br: n.d.readUint32, bw: n.h.writeUint32 },
                  has_upvoted: { n: 4, br: n.d.readBool, bw: n.h.writeBool },
                  upvoter_accountids: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: n.d.readUint32,
                    bw: n.h.writeRepeatedUint32,
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
          return "CCommunity_GetCommentThreadRatings_Response";
        }
      }
      class f extends s {
        constructor(e = null) {
          super(),
            f.prototype.announcementid || n.a(f.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  announcementid: {
                    n: 1,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
                  },
                  vote_up: { n: 2, br: n.d.readBool, bw: n.h.writeBool },
                  clan_accountid: {
                    n: 3,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = n.e(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(f.M(), e, r);
        }
        static fromObject(e) {
          return n.c(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateClanAnnouncement_Request";
        }
      }
      class h extends s {
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new h();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_RateClanAnnouncement_Response";
        }
      }
      class p extends s {
        constructor(e = null) {
          super(),
            p.prototype.announcementid || n.a(p.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  announcementid: {
                    n: 1,
                    br: n.d.readUint64String,
                    bw: n.h.writeUint64String,
                  },
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
          return "CCommunity_GetClanAnnouncementVoteForUser_Request";
        }
      }
      class M extends s {
        constructor(e = null) {
          super(),
            M.prototype.voted_up || n.a(M.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  voted_up: { n: 1, br: n.d.readBool, bw: n.h.writeBool },
                  voted_down: { n: 2, br: n.d.readBool, bw: n.h.writeBool },
                },
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
          return "CCommunity_GetClanAnnouncementVoteForUser_Response";
        }
      }
      class R extends s {
        constructor(e = null) {
          super(),
            R.prototype.avatars || n.a(R.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: { avatars: { n: 1, c: v, r: !0, q: !0 } },
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
          return "CCommunity_GetAvatarHistory_Response";
        }
      }
      class v extends s {
        constructor(e = null) {
          super(),
            v.prototype.avatar_sha1 || n.a(v.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  avatar_sha1: {
                    n: 1,
                    br: n.d.readString,
                    bw: n.h.writeString,
                  },
                  user_uploaded: { n: 2, br: n.d.readBool, bw: n.h.writeBool },
                  timestamp: { n: 3, br: n.d.readUint32, bw: n.h.writeUint32 },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = n.e(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(v.M(), e, r);
        }
        static fromObject(e) {
          return n.c(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetAvatarHistory_Response_AvatarData";
        }
      }
      class W extends s {
        constructor(e = null) {
          super(),
            W.prototype.results || n.a(W.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: { results: { n: 1, c: a.b, r: !0, q: !0 } },
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
          return "CCommunity_GetUserPartnerEventNews_Response";
        }
      }
      class F extends s {
        constructor(e = null) {
          super(),
            F.prototype.clanid || n.a(F.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  clanid: { n: 1, br: n.d.readUint32, bw: n.h.writeUint32 },
                  event_gid: {
                    n: 2,
                    br: n.d.readFixed64String,
                    bw: n.h.writeFixed64String,
                  },
                  announcement_gid: {
                    n: 3,
                    br: n.d.readFixed64String,
                    bw: n.h.writeFixed64String,
                  },
                  appid: { n: 4, br: n.d.readUint32, bw: n.h.writeUint32 },
                  possible_takeover: {
                    n: 5,
                    br: n.d.readBool,
                    bw: n.h.writeBool,
                  },
                  rtime32_last_modified: {
                    n: 6,
                    d: 0,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  user_app_priority: {
                    n: 7,
                    br: n.d.readInt32,
                    bw: n.h.writeInt32,
                  },
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
          return "CCommunity_PartnerEventResult";
        }
      }
      class C extends s {
        constructor(e = null) {
          super(),
            C.prototype.results || n.a(C.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: { results: { n: 1, c: F, r: !0, q: !0 } },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = n.e(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(C.M(), e, r);
        }
        static fromObject(e) {
          return n.c(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetBestEventsForUser_Response";
        }
      }
      class S extends s {
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new S();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearUserPartnerEventsAppPriorities_Response";
        }
      }
      class j extends s {
        constructor(e = null) {
          super(),
            j.prototype.appid || n.a(j.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  appid: { n: 1, br: n.d.readUint32, bw: n.h.writeUint32 },
                  user_app_priority: {
                    n: 2,
                    br: n.d.readInt32,
                    bw: n.h.writeInt32,
                  },
                },
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
          return "CCommunity_PartnerEventsAppPriority";
        }
      }
      class O extends s {
        constructor(e = null) {
          super(),
            O.prototype.priorities || n.a(O.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: { priorities: { n: 1, c: j, r: !0, q: !0 } },
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
          return "CCommunity_GetUserPartnerEventsAppPriorities_Response";
        }
      }
      class T extends s {
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new T();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_ClearSinglePartnerEventsAppPriority_Response";
        }
      }
      class U extends s {
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new U();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowMoreForApp_Response";
        }
      }
      class P extends s {
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new P();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_PartnerEventsShowLessForApp_Response";
        }
      }
      class x extends s {
        constructor(e = null) {
          super(),
            x.prototype.markings || n.a(x.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: { markings: { n: 1, c: A, r: !0, q: !0 } },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = n.e(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(x.M(), e, r);
        }
        static fromObject(e) {
          return n.c(x.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(x.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(x.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_MarkPartnerEventsForUser_Request";
        }
      }
      class A extends s {
        constructor(e = null) {
          super(),
            A.prototype.clanid || n.a(A.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  clanid: { n: 1, br: n.d.readUint32, bw: n.h.writeUint32 },
                  event_gid: {
                    n: 2,
                    br: n.d.readFixed64String,
                    bw: n.h.writeFixed64String,
                  },
                  display_location: {
                    n: 3,
                    br: n.d.readEnum,
                    bw: n.h.writeEnum,
                  },
                  mark_shown: { n: 4, br: n.d.readBool, bw: n.h.writeBool },
                  mark_read: { n: 5, br: n.d.readBool, bw: n.h.writeBool },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = n.e(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(A.M(), e, r);
        }
        static fromObject(e) {
          return n.c(A.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new A();
          return A.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(A.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(A.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_MarkPartnerEventsForUser_Request_PartnerEventMarking";
        }
      }
      class I extends s {
        constructor(e = null) {
          super(), s.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new I();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_MarkPartnerEventsForUser_Response";
        }
      }
      class G extends s {
        constructor(e = null) {
          super(),
            G.prototype.events || n.a(G.M()),
            s.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: { events: { n: 1, c: E, r: !0, q: !0 } },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = n.e(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(G.M(), e, r);
        }
        static fromObject(e) {
          return n.c(G.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(G.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(G.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventViewStatus_Response";
        }
      }
      class E extends s {
        constructor(e = null) {
          super(),
            E.prototype.event_gid || n.a(E.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  event_gid: {
                    n: 1,
                    br: n.d.readFixed64String,
                    bw: n.h.writeFixed64String,
                  },
                  last_shown_time: {
                    n: 2,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  last_read_time: {
                    n: 3,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                  clan_account_id: {
                    n: 4,
                    br: n.d.readUint32,
                    bw: n.h.writeUint32,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = n.e(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, r) {
          return n.g(E.M(), e, r);
        }
        static fromObject(e) {
          return n.c(E.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.b(E.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.f(E.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CCommunity_GetUserPartnerEventViewStatus_Response_PartnerEvent";
        }
      }
      var N;
      !(function (e) {
        (e.GetApps = function (e, r) {
          return e.SendMsg("Community.GetApps#1", r, l, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
          (e.GetAppRichPresenceLocalization = function (e, r) {
            return e.SendMsg(
              "Community.GetAppRichPresenceLocalization#1",
              r,
              m,
              { ePrivilege: 1 }
            );
          }),
          (e.GetCommentThread = function (e, r) {
            return e.SendMsg("Community.GetCommentThread#1", r, b, {
              ePrivilege: 2,
            });
          }),
          (e.PostCommentToThread = function (e, r) {
            return e.SendMsg("Community.PostCommentToThread#1", r, g, {
              ePrivilege: 3,
            });
          }),
          (e.DeleteCommentFromThread = function (e, r) {
            return e.SendMsg("Community.DeleteCommentFromThread#1", r, w, {
              ePrivilege: 1,
            });
          }),
          (e.RateCommentThread = function (e, r) {
            return e.SendMsg("Community.RateCommentThread#1", r, z, {
              ePrivilege: 3,
            });
          }),
          (e.GetCommentThreadRatings = function (e, r) {
            return e.SendMsg("Community.GetCommentThreadRatings#1", r, _, {
              ePrivilege: 2,
            });
          }),
          (e.RateClanAnnouncement = function (e, r) {
            return e.SendMsg("Community.RateClanAnnouncement#1", r, h, {
              ePrivilege: 3,
            });
          }),
          (e.GetClanAnnouncementVoteForUser = function (e, r) {
            return e.SendMsg(
              "Community.GetClanAnnouncementVoteForUser#1",
              r,
              M,
              { ePrivilege: 1 }
            );
          }),
          (e.GetAvatarHistory = function (e, r) {
            return e.SendMsg("Community.GetAvatarHistory#1", r, R, {
              ePrivilege: 1,
            });
          }),
          (e.GetUserPartnerEventNews = function (e, r) {
            return e.SendMsg("Community.GetUserPartnerEventNews#1", r, W, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBestEventsForUser = function (e, r) {
            return e.SendMsg("Community.GetBestEventsForUser#1", r, C, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.MarkPartnerEventsForUser = function (e, r) {
            return e.SendMsg("Community.MarkPartnerEventsForUser#1", r, I, {
              ePrivilege: 1,
            });
          }),
          (e.GetUserPartnerEventViewStatus = function (e, r) {
            return e.SendMsg(
              "Community.GetUserPartnerEventViewStatus#1",
              r,
              G,
              { bConstMethod: !0, ePrivilege: 1 }
            );
          }),
          (e.PartnerEventsShowMoreForApp = function (e, r) {
            return e.SendMsg("Community.PartnerEventsShowMoreForApp#1", r, U, {
              ePrivilege: 1,
            });
          }),
          (e.PartnerEventsShowLessForApp = function (e, r) {
            return e.SendMsg("Community.PartnerEventsShowLessForApp#1", r, P, {
              ePrivilege: 1,
            });
          }),
          (e.ClearUserPartnerEventsAppPriorities = function (e, r) {
            return e.SendMsg(
              "Community.ClearUserPartnerEventsAppPriorities#1",
              r,
              S,
              { ePrivilege: 1 }
            );
          }),
          (e.GetUserPartnerEventsAppPriorities = function (e, r) {
            return e.SendMsg(
              "Community.GetUserPartnerEventsAppPriorities#1",
              r,
              O,
              { ePrivilege: 1 }
            );
          }),
          (e.ClearSinglePartnerEventsAppPriority = function (e, r) {
            return e.SendMsg(
              "Community.ClearSinglePartnerEventsAppPriority#1",
              r,
              T,
              { ePrivilege: 1 }
            );
          });
      })(N || (N = {}));
    },
  },
]);
