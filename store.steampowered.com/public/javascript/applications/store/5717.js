/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5717],
  {
    26505: (e, t, r) => {
      r.d(t, {
        M8: () => q,
        d0: () => I,
        Dv: () => W,
        Nd: () => U,
        EW: () => T,
      });
      var i = r(92298),
        s = r(23809),
        n = r(31380),
        a = r(56545),
        o = r(17720),
        c = r(80613),
        l = r(89068);
      const u = c.Message;
      class m extends u {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.bincremental || l.Sg(m.M()),
            u.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  bincremental: { n: 1, br: l.qM.readBool, bw: l.gp.writeBool },
                  friends: { n: 2, c: d, r: !0, q: !0 },
                  max_friend_count: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  active_friend_count: {
                    n: 4,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  friends_limit_hit: {
                    n: 5,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = l.w0(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(m.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new c.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientFriendsList";
        }
      }
      class d extends u {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.ulfriendid || l.Sg(d.M()),
            u.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  ulfriendid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  efriendrelationship: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = l.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new c.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientFriendsList_Friend";
        }
      }
      const B = c.Message;
      class y extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.groupid || l.Sg(y.M()),
            B.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  groupid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  name: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  accountid_members: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = l.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new c.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsListCategory";
        }
      }
      class f extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), B.initialize(this, e, 0, -1, void 0, null);
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
          let t = new c.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetCategories_Request";
        }
      }
      class g extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.categories || l.Sg(g.M()),
            B.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: { categories: { n: 1, c: y, r: !0, q: !0 } },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = l.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new c.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetCategories_Response";
        }
      }
      class p extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.accountid || l.Sg(p.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  accountid: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  clanid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  chat_group_id: {
                    n: 3,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = l.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new c.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsListFavoriteEntry";
        }
      }
      class b extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), B.initialize(this, e, 0, -1, void 0, null);
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
          let t = new c.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFavorites_Request";
        }
      }
      class z extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.favorites || l.Sg(z.M()),
            B.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: { favorites: { n: 1, c: p, r: !0, q: !0 } },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = l.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new c.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFavorites_Response";
        }
      }
      class w extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.favorites || l.Sg(w.M()),
            B.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: { favorites: { n: 1, c: p, r: !0, q: !0 } },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = l.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new c.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_SetFavorites_Request";
        }
      }
      class _ extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), B.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new _();
        }
        static deserializeBinary(e) {
          let t = new c.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_SetFavorites_Response";
        }
      }
      class M extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.favorites || l.Sg(M.M()),
            B.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: { favorites: { n: 1, c: p, r: !0, q: !0 } },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = l.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new c.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_FavoritesChanged_Notification";
        }
      }
      class h extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), B.initialize(this, e, 0, -1, void 0, null);
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
          let t = new c.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFriendsList_Request";
        }
      }
      class F extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.friendslist || l.Sg(F.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = { proto: F, fields: { friendslist: { n: 1, c: m } } }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = l.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return l.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return l.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new c.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return l.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new c.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          l.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new c.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFriendsList_Response";
        }
      }
      var R, S;
      !(function (e) {
        (e.GetCategories = function (e, t) {
          return e.SendMsg("FriendsList.GetCategories#1", (0, a.I8)(f, t), g, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
          (e.GetFriendsList = function (e, t) {
            return e.SendMsg(
              "FriendsList.GetFriendsList#1",
              (0, a.I8)(h, t),
              F,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.GetFavorites#1", (0, a.I8)(b, t), z, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.SetFavorites#1", (0, a.I8)(w, t), _, {
              ePrivilege: 1,
            });
          });
      })(R || (R = {})),
        (function (e) {
          e.FavoritesChangedHandler = {
            name: "FriendsListClient.FavoritesChanged#1",
            request: M,
          };
        })(S || (S = {}));
      var v = r(37735),
        j = r(41471);
      function I(e) {
        const t = (0, s.KV)(),
          r = (0, i.L)(),
          a = (0, j.tb)(),
          c = (0, n.useQueryClient)();
        let l = { loadNicknames: !1, loadFavorites: !1, ...e };
        return (0, n.useQuery)(
          ["FriendsList", r, l],
          async () => {
            const e = c.fetchQuery(O(t, r)),
              i = l.loadNicknames ? c.fetchQuery(C(t, r)) : void 0,
              s = l.loadFavorites ? c.fetchQuery(L(t, r)) : void 0,
              n = await e,
              u = new Map(n.map((e) => [e, c.fetchQuery((0, j.mK)(a, t, e))]));
            let m;
            if (i) {
              const e = (await i).nicknames;
              m = new Map(e.map((e) => [e.accountid, e.nickname]));
            }
            const d = new Set(await (s ?? Promise.resolve([])));
            return (
              await Promise.all(
                n.map(async (e) => {
                  const t = new o.b(e).GetAccountID(),
                    r = { accountid: t, persona: await u.get(e) };
                  return (
                    d.has(t) && (r.is_favorite = !0),
                    m && m.has(t) && (r.nickname = m.get(t)),
                    r
                  );
                }),
              )
            ).filter((e) => !!e.persona);
          },
          { staleTime: 12e4 },
        );
      }
      function W() {
        const e = (0, s.KV)(),
          t = (0, i.L)();
        return (0, n.useQuery)(O(e, t));
      }
      function O(e, t) {
        return {
          queryKey: ["GetFriendsList", t],
          queryFn: async () => {
            const t = a.w.Init(h),
              r = await R.GetFriendsList(e, t);
            return r
              .Body()
              .friendslist()
              ?.friends()
              ?.filter((e) => {
                const t = new o.b(e.ulfriendid());
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
        const e = (0, s.KV)(),
          t = (0, i.L)();
        return (0, n.useQuery)({
          queryKey: ["GetIgnoredAccounts", t],
          queryFn: async () => {
            const t = a.w.Init(h),
              r = await R.GetFriendsList(e, t);
            return r
              .Body()
              .friendslist()
              ?.friends()
              ?.filter((e) => {
                const t = new o.b(e.ulfriendid());
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
            const t = a.w.Init(v.dN);
            return (await v.xt.GetNicknameList(e, t)).Body().toObject();
          },
        };
      }
      function q(e = {}) {
        return (function (e = {}) {
          const t = (0, s.KV)(),
            r = (0, i.L)();
          return (0, n.useQuery)({ ...C(t, r), ...e });
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
            const t = a.w.Init(b),
              r = (await R.GetFavorites(e, t)).Body().toObject();
            return r.favorites
              ?.filter((e) => e.accountid)
              .map((e) => e.accountid);
          },
        };
      }
      async function G(e, t) {
        const r = a.w.Init(v.tl);
        r.Body().set_appid(t);
        const i = await v.xt.GetFriendsGameplayInfo(e, r);
        return (
          i.BSuccess() ||
            console.warn(`Failed to get gameplay info: ${i.GetEResult()}`),
          i.Body().toObject()
        );
      }
      function U(e, t = {}) {
        const r = (0, s.KV)(),
          a = (0, i.L)();
        return (0, n.useQuery)({
          queryKey: `GameplayInfo_${a}_${e}`,
          queryFn: async () => await G(r, e),
          ...t,
        });
      }
    },
    97232: (e, t, r) => {
      r.d(t, { Jl: () => o, nl: () => l, rf: () => c });
      var i = r(90626),
        s = r(12155),
        n = r(4869),
        a = r(78327);
      function o() {
        return (0, a.Qn)()
          ? i.createElement(n.MGO, null)
          : i.createElement(s.Jlk, null);
      }
      function c() {
        return i.createElement(s.rfv, null);
      }
      function l() {
        return (0, a.Qn)()
          ? i.createElement(n.nl, null)
          : i.createElement(s.jZW, null);
      }
    },
    3088: (e, t, r) => {
      r.d(t, { c: () => a });
      var i = r(34629),
        s = r(90626),
        n = r(56093);
      class a extends s.Component {
        m_refImage = s.createRef();
        constructor(e) {
          super(e), (this.state = { nImage: 0 });
        }
        componentDidUpdate(e) {
          JSON.stringify(this.props.rgSources) != JSON.stringify(e.rgSources) &&
            this.setState({ nImage: 0 });
        }
        get src() {
          let e = "";
          return (
            this.props.rgSources &&
              this.props.rgSources.length > this.state.nImage &&
              (e = this.props.rgSources[this.state.nImage]),
            e ||
              (console.warn(
                "MultiSourceImage created with no image src",
                this.props,
                this.state.nImage,
              ),
              (e =
                "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
            e
          );
        }
        get imgRef() {
          return this.m_refImage;
        }
        OnImageError(e) {
          this.props.onIncrementalError &&
            this.props.onIncrementalError(
              e,
              this.props.rgSources[this.state.nImage],
              this.state.nImage,
            );
          let t = this.state.nImage + 1;
          t >= this.props.rgSources.length &&
            this.props.onError &&
            this.props.onError(e),
            t < this.props.rgSources.length && this.setState({ nImage: t });
        }
        render() {
          const {
              rgSources: e,
              onIncrementalError: t,
              onError: r,
              ...i
            } = this.props,
            n = this.src;
          return s.createElement("img", {
            ref: this.m_refImage,
            ...i,
            src: n,
            onError: this.OnImageError,
          });
        }
      }
      (0, i.Cg)([n.oI], a.prototype, "OnImageError", null);
    },
  },
]);
