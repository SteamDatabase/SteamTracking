/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7576],
  {
    26505: (e, t, r) => {
      r.d(t, {
        M8: () => L,
        d0: () => O,
        Dv: () => I,
        Nd: () => N,
        EW: () => q,
      });
      var i = r(92298),
        n = r(23809),
        s = r(75233),
        a = r(20194),
        c = r(56545),
        l = r(17720),
        o = r(80613),
        u = r(89068);
      const m = o.Message;
      class d extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.bincremental || u.Sg(d.M()),
            m.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  bincremental: { n: 1, br: u.qM.readBool, bw: u.gp.writeBool },
                  friends: { n: 2, c: B, r: !0, q: !0 },
                  max_friend_count: {
                    n: 3,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  active_friend_count: {
                    n: 4,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  friends_limit_hit: {
                    n: 5,
                    br: u.qM.readBool,
                    bw: u.gp.writeBool,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = u.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new o.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientFriendsList";
        }
      }
      class B extends m {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.ulfriendid || u.Sg(B.M()),
            m.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  ulfriendid: {
                    n: 1,
                    br: u.qM.readFixed64String,
                    bw: u.gp.writeFixed64String,
                  },
                  efriendrelationship: {
                    n: 2,
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = u.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new o.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientFriendsList_Friend";
        }
      }
      const y = o.Message;
      class f extends y {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.groupid || u.Sg(f.M()),
            y.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  groupid: { n: 1, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                  name: { n: 2, br: u.qM.readString, bw: u.gp.writeString },
                  accountid_members: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: u.qM.readUint32,
                    pbr: u.qM.readPackedUint32,
                    bw: u.gp.writeRepeatedUint32,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = u.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new o.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsListCategory";
        }
      }
      class b extends y {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.initialize(this, e, 0, -1, void 0, null);
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
          let t = new o.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetCategories_Request";
        }
      }
      class g extends y {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.categories || u.Sg(g.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: { categories: { n: 1, c: f, r: !0, q: !0 } },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = u.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new o.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetCategories_Response";
        }
      }
      class z extends y {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.accountid || u.Sg(z.M()),
            y.initialize(this, e, 0, -1, void 0, null);
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
                    br: u.qM.readUint32,
                    bw: u.gp.writeUint32,
                  },
                  clanid: { n: 2, br: u.qM.readUint32, bw: u.gp.writeUint32 },
                  chat_group_id: {
                    n: 3,
                    br: u.qM.readUint64String,
                    bw: u.gp.writeUint64String,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = u.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new o.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsListFavoriteEntry";
        }
      }
      class w extends y {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.initialize(this, e, 0, -1, void 0, null);
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
          let t = new o.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFavorites_Request";
        }
      }
      class M extends y {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.favorites || u.Sg(M.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: { favorites: { n: 1, c: z, r: !0, q: !0 } },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = u.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new o.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFavorites_Response";
        }
      }
      class _ extends y {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.favorites || u.Sg(_.M()),
            y.initialize(this, e, 0, -1, [1], null);
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
          return _.sm_mbf || (_.sm_mbf = u.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new o.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_SetFavorites_Request";
        }
      }
      class p extends y {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new p();
        }
        static deserializeBinary(e) {
          let t = new o.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_SetFavorites_Response";
        }
      }
      class F extends y {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.favorites || u.Sg(F.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: { favorites: { n: 1, c: z, r: !0, q: !0 } },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = u.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new o.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_FavoritesChanged_Notification";
        }
      }
      class R extends y {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), y.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new R();
        }
        static deserializeBinary(e) {
          let t = new o.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFriendsList_Request";
        }
      }
      class h extends y {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.friendslist || u.Sg(h.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = { proto: h, fields: { friendslist: { n: 1, c: d } } }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = u.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return u.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return u.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new o.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return u.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new o.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          u.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new o.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFriendsList_Response";
        }
      }
      var v, j;
      !(function (e) {
        (e.GetCategories = function (e, t) {
          return e.SendMsg("FriendsList.GetCategories#1", (0, c.I8)(b, t), g, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
          (e.GetFriendsList = function (e, t) {
            return e.SendMsg(
              "FriendsList.GetFriendsList#1",
              (0, c.I8)(R, t),
              h,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.GetFavorites#1", (0, c.I8)(w, t), M, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.SetFavorites#1", (0, c.I8)(_, t), p, {
              ePrivilege: 1,
            });
          });
      })(v || (v = {})),
        (function (e) {
          e.FavoritesChangedHandler = {
            name: "FriendsListClient.FavoritesChanged#1",
            request: F,
          };
        })(j || (j = {}));
      var W = r(37735),
        S = r(41471);
      function O(e) {
        const t = (0, n.KV)(),
          r = (0, i.L)(),
          c = (0, S.tb)(),
          o = (0, s.jE)();
        let u = { loadNicknames: !1, loadFavorites: !1, ...e };
        return (0, a.I)({
          queryKey: ["FriendsList", r, u],
          queryFn: async () => {
            const e = o.fetchQuery(T(t, r)),
              i = u.loadNicknames ? o.fetchQuery(C(t, r)) : void 0,
              n = u.loadFavorites ? o.fetchQuery(G(t, r)) : void 0,
              s = await e,
              a = new Map(s.map((e) => [e, o.fetchQuery((0, S.mK)(c, t, e))]));
            let m;
            if (i) {
              const e = (await i).nicknames;
              m = new Map(e.map((e) => [e.accountid, e.nickname]));
            }
            const d = new Set(await (n ?? Promise.resolve([])));
            return (
              await Promise.all(
                s.map(async (e) => {
                  const t = new l.b(e).GetAccountID(),
                    r = { accountid: t, persona: await a.get(e) };
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
      function I() {
        const e = (0, n.KV)(),
          t = (0, i.L)();
        return (0, a.I)(T(e, t));
      }
      function T(e, t) {
        return {
          queryKey: ["GetFriendsList", t],
          queryFn: async () => {
            const t = c.w.Init(R),
              r = await v.GetFriendsList(e, t);
            return r
              .Body()
              .friendslist()
              ?.friends()
              ?.filter((e) => {
                const t = new l.b(e.ulfriendid());
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
      function q() {
        const e = (0, n.KV)(),
          t = (0, i.L)();
        return (0, a.I)({
          queryKey: ["GetIgnoredAccounts", t],
          queryFn: async () => {
            const t = c.w.Init(R),
              r = await v.GetFriendsList(e, t);
            return r
              .Body()
              .friendslist()
              ?.friends()
              ?.filter((e) => {
                const t = new l.b(e.ulfriendid());
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
      function C(e, t) {
        return {
          queryKey: ["GetFriendNicknameList", t],
          queryFn: async () => {
            const t = c.w.Init(W.dN);
            return (await W.xt.GetNicknameList(e, t)).Body().toObject();
          },
        };
      }
      function L(e = {}) {
        return (function (e = {}) {
          const t = (0, n.KV)(),
            r = (0, i.L)();
          return (0, a.I)({ ...C(t, r), ...e });
        })({
          ...e,
          select: (e) =>
            new Map(e.nicknames.map((e) => [e.accountid, e.nickname])),
        });
      }
      function G(e, t) {
        return {
          queryKey: ["GetFriendFavorites", t],
          queryFn: async () => {
            const t = c.w.Init(w),
              r = (await v.GetFavorites(e, t)).Body().toObject();
            return r.favorites
              ?.filter((e) => e.accountid)
              .map((e) => e.accountid);
          },
        };
      }
      async function U(e, t) {
        const r = c.w.Init(W.tl);
        r.Body().set_appid(t);
        const i = await W.xt.GetFriendsGameplayInfo(e, r);
        return (
          i.BSuccess() ||
            console.warn(`Failed to get gameplay info: ${i.GetEResult()}`),
          i.Body().toObject()
        );
      }
      function N(e, t = {}) {
        const r = (0, n.KV)(),
          s = (0, i.L)();
        return (0, a.I)({
          queryKey: [`GameplayInfo_${s}_${e}`],
          queryFn: async () => await U(r, e),
          ...t,
        });
      }
    },
    97232: (e, t, r) => {
      r.d(t, { Jl: () => c, nl: () => o, rf: () => l });
      var i = r(90626),
        n = r(12155),
        s = r(4869),
        a = r(78327);
      function c() {
        return (0, a.Qn)()
          ? i.createElement(s.MGO, null)
          : i.createElement(n.Jlk, null);
      }
      function l() {
        return i.createElement(n.rfv, null);
      }
      function o() {
        return (0, a.Qn)()
          ? i.createElement(s.nl, null)
          : i.createElement(n.jZW, null);
      }
    },
  },
]);
