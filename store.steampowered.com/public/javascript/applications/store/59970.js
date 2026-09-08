/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [59970],
  {
    88544: (e, t, r) => {
      r.d(t, { J3: () => y, pH: () => w, DF: () => i });
      var i,
        s,
        a = r(80613),
        n = r.n(a),
        c = r(89068),
        o = r(56545);
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      class l extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.bincremental || c.Sg(l.M()),
            a.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  bincremental: { n: 1, br: c.qM.readBool, bw: c.gp.writeBool },
                  friends: { n: 2, c: u, r: !0, q: !0 },
                  max_friend_count: {
                    n: 3,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  active_friend_count: {
                    n: 4,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  friends_limit_hit: {
                    n: 5,
                    br: c.qM.readBool,
                    bw: c.gp.writeBool,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = c.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(l.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientFriendsList";
        }
      }
      class u extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.ulfriendid || c.Sg(u.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  ulfriendid: {
                    n: 1,
                    br: c.qM.readFixed64String,
                    bw: c.gp.writeFixed64String,
                  },
                  efriendrelationship: {
                    n: 2,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = c.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientFriendsList_Friend";
        }
      }
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      a.Message;
      class m extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.groupid || c.Sg(m.M()),
            a.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  groupid: { n: 1, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  name: { n: 2, br: c.qM.readString, bw: c.gp.writeString },
                  accountid_members: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: c.qM.readUint32,
                    pbr: c.qM.readPackedUint32,
                    bw: c.gp.writeRepeatedUint32,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = c.w0(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(m.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsListCategory";
        }
      }
      class d extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new d();
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetCategories_Request";
        }
      }
      class B extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.categories || c.Sg(B.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: { categories: { n: 1, c: m, r: !0, q: !0 } },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = c.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetCategories_Response";
        }
      }
      class g extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.accountid || c.Sg(g.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  accountid: {
                    n: 1,
                    br: c.qM.readUint32,
                    bw: c.gp.writeUint32,
                  },
                  clanid: { n: 2, br: c.qM.readUint32, bw: c.gp.writeUint32 },
                  chat_group_id: {
                    n: 3,
                    br: c.qM.readUint64String,
                    bw: c.gp.writeUint64String,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = c.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsListFavoriteEntry";
        }
      }
      class y extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new y();
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFavorites_Request";
        }
      }
      class f extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.favorites || c.Sg(f.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { favorites: { n: 1, c: g, r: !0, q: !0 } },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = c.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFavorites_Response";
        }
      }
      class M extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.favorites || c.Sg(M.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: { favorites: { n: 1, c: g, r: !0, q: !0 } },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = c.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_SetFavorites_Request";
        }
      }
      class b extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new b();
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_SetFavorites_Response";
        }
      }
      class z extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.favorites || c.Sg(z.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: { favorites: { n: 1, c: g, r: !0, q: !0 } },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = c.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_FavoritesChanged_Notification";
        }
      }
      class w extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new w();
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFriendsList_Request";
        }
      }
      class _ extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.friendslist || c.Sg(_.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = { proto: _, fields: { friendslist: { n: 1, c: l } } }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = c.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return c.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return c.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (n().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFriendsList_Response";
        }
      }
      !(function (e) {
        (e.GetCategories = function (e, t, r) {
          return e.SendMsg(
            "FriendsList.GetCategories#1",
            (0, o.I8)(d, t, r),
            B,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.GetFriendsList = function (e, t, r) {
            return e.SendMsg(
              "FriendsList.GetFriendsList#1",
              (0, o.I8)(w, t, r),
              _,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetFavorites = function (e, t, r) {
            return e.SendMsg(
              "FriendsList.GetFavorites#1",
              (0, o.I8)(y, t, r),
              f,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetFavorites = function (e, t, r) {
            return e.SendMsg(
              "FriendsList.SetFavorites#1",
              (0, o.I8)(M, t, r),
              b,
              { ePrivilege: 1 },
            );
          });
      })(i || (i = {})),
        (function (e) {
          e.FavoritesChangedHandler = {
            name: "FriendsListClient.FavoritesChanged#1",
            request: z,
          };
        })(s || (s = {}));
    },
    49451: (e, t, r) => {
      r.d(t, {
        Dv: () => g,
        EW: () => f,
        M8: () => b,
        Nd: () => F,
        d0: () => B,
      });
      var i = r(68950),
        s = r(23809),
        a = r(75233),
        n = r(80902),
        c = r(56545),
        o = r(17720),
        l = r(88544),
        u = r(42457),
        m = r(22837),
        d = r(41471);
      function B(e) {
        const t = (0, s.KV)(),
          r = (0, i.LH)(),
          c = (0, d.tb)(),
          l = (0, a.jE)();
        let u = { loadNicknames: !1, loadFavorites: !1, ...e };
        return (0, n.I)({
          queryKey: ["FriendsList", r, u],
          queryFn: async () => {
            const e = l.fetchQuery(y(t, r)),
              i = u.loadNicknames ? l.fetchQuery(M(t, r)) : void 0,
              s = u.loadFavorites ? l.fetchQuery(w(t, r)) : void 0,
              a = await e,
              n = new Map(a.map((e) => [e, l.fetchQuery((0, d.mK)(c, t, e))]));
            let m;
            i && (m = z((await i).nicknames));
            const B = new Set(await (s ?? Promise.resolve([])));
            return (
              await Promise.all(
                a.map(async (e) => {
                  const t = new o.b(e).GetAccountID(),
                    r = await n.get(e);
                  if (!r) return;
                  const i = { accountid: t, persona: r };
                  return (
                    B.has(t) && (i.is_favorite = !0),
                    m && m.has(t) && (i.nickname = m.get(t)),
                    i
                  );
                }),
              )
            ).filter((e) => void 0 !== e);
          },
          staleTime: 12e4,
        });
      }
      function g() {
        const e = (0, s.KV)(),
          t = (0, i.LH)();
        return (0, n.I)(y(e, t));
      }
      function y(e, t) {
        return {
          queryKey: ["GetFriendsList", t],
          queryFn: async () => {
            const t = c.w.Init(l.pH),
              r = await l.DF.GetFriendsList(e, t),
              i = [];
            for (const e of r.Body().friendslist()?.friends() ?? []) {
              const t = e.ulfriendid();
              t &&
                ((e.efriendrelationship() != m._UC &&
                  e.efriendrelationship() != m.Ec7) ||
                  !new o.b(t).BIsIndividualAccount() ||
                  i.push(t));
            }
            return i;
          },
        };
      }
      function f() {
        const e = (0, s.KV)(),
          t = (0, i.LH)();
        return (0, n.I)({
          queryKey: ["GetIgnoredAccounts", t],
          queryFn: async () => {
            const t = c.w.Init(l.pH),
              r = await l.DF.GetFriendsList(e, t);
            return r
              .Body()
              .friendslist()
              ?.friends()
              ?.filter((e) => {
                const t = new o.b(e.ulfriendid());
                return (
                  (e.efriendrelationship() == m.wim ||
                    e.efriendrelationship() == m.Ec7) &&
                  t.BIsIndividualAccount()
                );
              })
              .map((e) => e.ulfriendid());
          },
        });
      }
      function M(e, t) {
        return {
          queryKey: ["GetFriendNicknameList", t],
          queryFn: async () => {
            const t = c.w.Init(u.w_T);
            return (await u.xtC.GetNicknameList(e, t)).Body().toObject();
          },
        };
      }
      function b(e = {}) {
        return (function (e = {}) {
          const t = (0, s.KV)(),
            r = (0, i.LH)();
          return (0, n.I)({ ...M(t, r), ...e });
        })({ ...e, select: (e) => z(e.nicknames) });
      }
      function z(e) {
        const t = new Map();
        for (const r of e ?? [])
          void 0 !== r.accountid &&
            void 0 !== r.nickname &&
            t.set(r.accountid, r.nickname);
        return t;
      }
      function w(e, t) {
        return {
          queryKey: ["GetFriendFavorites", t],
          queryFn: async () => {
            const t = c.w.Init(l.J3),
              r = await l.DF.GetFavorites(e, t),
              i = [];
            for (const e of r.Body().toObject().favorites ?? [])
              e.accountid && i.push(e.accountid);
            return i;
          },
        };
      }
      async function _(e, t) {
        const r = c.w.Init(u.tlx);
        r.Body().set_appid(t);
        const i = await u.xtC.GetFriendsGameplayInfo(e, r);
        return (
          i.BSuccess() ||
            console.warn(`Failed to get gameplay info: ${i.GetEResult()}`),
          i.Body().toObject()
        );
      }
      function F(e, t = {}) {
        const r = (0, s.KV)(),
          a = (0, i.LH)();
        return (0, n.I)({
          queryKey: [`GameplayInfo_${a}_${e}`],
          queryFn: async () => await _(r, e),
          ...t,
        });
      }
    },
    97232: (e, t, r) => {
      r.d(t, { Jl: () => c, nl: () => l, rf: () => o });
      var i = r(7850),
        s = r(12155),
        a = r(4869),
        n = r(78327);
      function c(e) {
        return (0, n.Qn)()
          ? (0, i.jsx)(a.MGO, { ...e })
          : (0, i.jsx)(s.Jlk, { ...e });
      }
      function o() {
        return (0, i.jsx)(s.rfv, {});
      }
      function l() {
        return (0, n.Qn)() ? (0, i.jsx)(a.nl, {}) : (0, i.jsx)(s.jZW, {});
      }
    },
  },
]);
