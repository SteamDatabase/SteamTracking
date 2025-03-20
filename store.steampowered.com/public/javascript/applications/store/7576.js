/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7576],
  {
    26505: (e, t, r) => {
      r.d(t, {
        M8: () => C,
        d0: () => S,
        Dv: () => O,
        Nd: () => U,
        EW: () => T,
      });
      var i,
        s,
        a = r(68950),
        n = r(23809),
        c = r(75233),
        l = r(20194),
        o = r(56545),
        u = r(17720),
        m = r(80613),
        d = r.n(m),
        B = r(89068);
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      class g extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.bincremental || B.Sg(g.M()),
            m.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  bincremental: { n: 1, br: B.qM.readBool, bw: B.gp.writeBool },
                  friends: { n: 2, c: y, r: !0, q: !0 },
                  max_friend_count: {
                    n: 3,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  active_friend_count: {
                    n: 4,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  friends_limit_hit: {
                    n: 5,
                    br: B.qM.readBool,
                    bw: B.gp.writeBool,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = B.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientFriendsList";
        }
      }
      class y extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.ulfriendid || B.Sg(y.M()),
            m.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  ulfriendid: {
                    n: 1,
                    br: B.qM.readFixed64String,
                    bw: B.gp.writeFixed64String,
                  },
                  efriendrelationship: {
                    n: 2,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = B.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientFriendsList_Friend";
        }
      }
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      m.Message;
      class M extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.groupid || B.Sg(M.M()),
            m.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  groupid: { n: 1, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  name: { n: 2, br: B.qM.readString, bw: B.gp.writeString },
                  accountid_members: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: B.qM.readUint32,
                    pbr: B.qM.readPackedUint32,
                    bw: B.gp.writeRepeatedUint32,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = B.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsListCategory";
        }
      }
      class f extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), m.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new f();
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetCategories_Request";
        }
      }
      class b extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.categories || B.Sg(b.M()),
            m.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { categories: { n: 1, c: M, r: !0, q: !0 } },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = B.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetCategories_Response";
        }
      }
      class z extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.accountid || B.Sg(z.M()),
            m.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  accountid: {
                    n: 1,
                    br: B.qM.readUint32,
                    bw: B.gp.writeUint32,
                  },
                  clanid: { n: 2, br: B.qM.readUint32, bw: B.gp.writeUint32 },
                  chat_group_id: {
                    n: 3,
                    br: B.qM.readUint64String,
                    bw: B.gp.writeUint64String,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = B.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsListFavoriteEntry";
        }
      }
      class w extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), m.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (d().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFavorites_Request";
        }
      }
      class _ extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.favorites || B.Sg(_.M()),
            m.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: { favorites: { n: 1, c: z, r: !0, q: !0 } },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = B.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFavorites_Response";
        }
      }
      class p extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.favorites || B.Sg(p.M()),
            m.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: { favorites: { n: 1, c: z, r: !0, q: !0 } },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = B.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_SetFavorites_Request";
        }
      }
      class F extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), m.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new F();
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_SetFavorites_Response";
        }
      }
      class R extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.favorites || B.Sg(R.M()),
            m.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: { favorites: { n: 1, c: z, r: !0, q: !0 } },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = B.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_FavoritesChanged_Notification";
        }
      }
      class h extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), m.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new h();
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFriendsList_Request";
        }
      }
      class v extends m.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.friendslist || B.Sg(v.M()),
            m.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = { proto: v, fields: { friendslist: { n: 1, c: g } } }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = B.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return B.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return B.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return B.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          B.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFriendsList_Response";
        }
      }
      !(function (e) {
        (e.GetCategories = function (e, t) {
          return e.SendMsg("FriendsList.GetCategories#1", (0, o.I8)(f, t), b, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
          (e.GetFriendsList = function (e, t) {
            return e.SendMsg(
              "FriendsList.GetFriendsList#1",
              (0, o.I8)(h, t),
              v,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.GetFavorites#1", (0, o.I8)(w, t), _, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.SetFavorites#1", (0, o.I8)(p, t), F, {
              ePrivilege: 1,
            });
          });
      })(i || (i = {})),
        (function (e) {
          e.FavoritesChangedHandler = {
            name: "FriendsListClient.FavoritesChanged#1",
            request: R,
          };
        })(s || (s = {}));
      var j = r(37735),
        W = r(14336);
      function S(e) {
        const t = (0, n.KV)(),
          r = (0, a.LH)(),
          i = (0, W.tb)(),
          s = (0, c.jE)();
        let o = { loadNicknames: !1, loadFavorites: !1, ...e };
        return (0, l.I)({
          queryKey: ["FriendsList", r, o],
          queryFn: async () => {
            const e = s.fetchQuery(I(t, r)),
              a = o.loadNicknames ? s.fetchQuery(q(t, r)) : void 0,
              n = o.loadFavorites ? s.fetchQuery(L(t, r)) : void 0,
              c = await e,
              l = new Map(c.map((e) => [e, s.fetchQuery((0, W.mK)(i, t, e))]));
            let m;
            if (a) {
              const e = (await a).nicknames;
              m = new Map(e.map((e) => [e.accountid, e.nickname]));
            }
            const d = new Set(await (n ?? Promise.resolve([])));
            return (
              await Promise.all(
                c.map(async (e) => {
                  const t = new u.b(e).GetAccountID(),
                    r = { accountid: t, persona: await l.get(e) };
                  return (
                    d.has(t) && (r.is_favorite = !0),
                    m && m.has(t) && (r.nickname = m.get(t)),
                    r
                  );
                }),
              )
            ).filter((e) => !!e.persona);
          },
          staleTime: 12e4,
        });
      }
      function O() {
        const e = (0, n.KV)(),
          t = (0, a.LH)();
        return (0, l.I)(I(e, t));
      }
      function I(e, t) {
        return {
          queryKey: ["GetFriendsList", t],
          queryFn: async () => {
            const t = o.w.Init(h),
              r = await i.GetFriendsList(e, t);
            return r
              .Body()
              .friendslist()
              ?.friends()
              ?.filter((e) => {
                const t = new u.b(e.ulfriendid());
                return (
                  (3 == e.efriendrelationship() ||
                    6 == e.efriendrelationship()) &&
                  t.BIsIndividualAccount()
                );
              })
              .map((e) => e.ulfriendid());
          },
        };
      }
      function T() {
        const e = (0, n.KV)(),
          t = (0, a.LH)();
        return (0, l.I)({
          queryKey: ["GetIgnoredAccounts", t],
          queryFn: async () => {
            const t = o.w.Init(h),
              r = await i.GetFriendsList(e, t);
            return r
              .Body()
              .friendslist()
              ?.friends()
              ?.filter((e) => {
                const t = new u.b(e.ulfriendid());
                return (
                  (5 == e.efriendrelationship() ||
                    6 == e.efriendrelationship()) &&
                  t.BIsIndividualAccount()
                );
              })
              .map((e) => e.ulfriendid());
          },
        });
      }
      function q(e, t) {
        return {
          queryKey: ["GetFriendNicknameList", t],
          queryFn: async () => {
            const t = o.w.Init(j.dN);
            return (await j.xt.GetNicknameList(e, t)).Body().toObject();
          },
        };
      }
      function C(e = {}) {
        return (function (e = {}) {
          const t = (0, n.KV)(),
            r = (0, a.LH)();
          return (0, l.I)({ ...q(t, r), ...e });
        })({
          ...e,
          select: (e) =>
            new Map(e.nicknames.map((e) => [e.accountid, e.nickname])),
        });
      }
      function L(e, t) {
        return {
          queryKey: ["GetFriendFavorites", t],
          queryFn: async () => {
            const t = o.w.Init(w),
              r = (await i.GetFavorites(e, t)).Body().toObject();
            return r.favorites
              ?.filter((e) => e.accountid)
              .map((e) => e.accountid);
          },
        };
      }
      async function G(e, t) {
        const r = o.w.Init(j.tl);
        r.Body().set_appid(t);
        const i = await j.xt.GetFriendsGameplayInfo(e, r);
        return (
          i.BSuccess() ||
            console.warn(`Failed to get gameplay info: ${i.GetEResult()}`),
          i.Body().toObject()
        );
      }
      function U(e, t = {}) {
        const r = (0, n.KV)(),
          i = (0, a.LH)();
        return (0, l.I)({
          queryKey: [`GameplayInfo_${i}_${e}`],
          queryFn: async () => await G(r, e),
          ...t,
        });
      }
    },
    97232: (e, t, r) => {
      r.d(t, { Jl: () => c, nl: () => o, rf: () => l });
      var i = r(90626),
        s = r(12155),
        a = r(4869),
        n = r(78327);
      function c(e) {
        return (0, n.Qn)()
          ? i.createElement(a.MGO, { ...e })
          : i.createElement(s.Jlk, { ...e });
      }
      function l() {
        return i.createElement(s.rfv, null);
      }
      function o() {
        return (0, n.Qn)()
          ? i.createElement(a.nl, null)
          : i.createElement(s.jZW, null);
      }
    },
  },
]);
