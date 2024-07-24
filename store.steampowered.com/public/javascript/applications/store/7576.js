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
        EW: () => I,
      });
      var i = r(92298),
        n = r(23809),
        s = r(31380),
        a = r(56545),
        c = r(17720),
        l = r(80613),
        o = r(89068);
      const u = l.Message;
      class m extends u {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.bincremental || o.Sg(m.M()),
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
                  bincremental: { n: 1, br: o.qM.readBool, bw: o.gp.writeBool },
                  friends: { n: 2, c: d, r: !0, q: !0 },
                  max_friend_count: {
                    n: 3,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  active_friend_count: {
                    n: 4,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  friends_limit_hit: {
                    n: 5,
                    br: o.qM.readBool,
                    bw: o.gp.writeBool,
                  },
                },
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
          let t = new l.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
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
            d.prototype.ulfriendid || o.Sg(d.M()),
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
                    br: o.qM.readFixed64String,
                    bw: o.gp.writeFixed64String,
                  },
                  efriendrelationship: {
                    n: 2,
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
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
          let t = new l.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientFriendsList_Friend";
        }
      }
      const B = l.Message;
      class y extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.groupid || o.Sg(y.M()),
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
                  groupid: { n: 1, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  name: { n: 2, br: o.qM.readString, bw: o.gp.writeString },
                  accountid_members: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: o.qM.readUint32,
                    pbr: o.qM.readPackedUint32,
                    bw: o.gp.writeRepeatedUint32,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = o.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
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
          let t = new l.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetCategories_Request";
        }
      }
      class b extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.categories || o.Sg(b.M()),
            B.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { categories: { n: 1, c: y, r: !0, q: !0 } },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = o.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetCategories_Response";
        }
      }
      class g extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.accountid || o.Sg(g.M()),
            B.initialize(this, e, 0, -1, void 0, null);
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
                    br: o.qM.readUint32,
                    bw: o.gp.writeUint32,
                  },
                  clanid: { n: 2, br: o.qM.readUint32, bw: o.gp.writeUint32 },
                  chat_group_id: {
                    n: 3,
                    br: o.qM.readUint64String,
                    bw: o.gp.writeUint64String,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = o.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsListFavoriteEntry";
        }
      }
      class z extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), B.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new z();
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFavorites_Request";
        }
      }
      class w extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.favorites || o.Sg(w.M()),
            B.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: { favorites: { n: 1, c: g, r: !0, q: !0 } },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = o.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFavorites_Response";
        }
      }
      class M extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.favorites || o.Sg(M.M()),
            B.initialize(this, e, 0, -1, [1], null);
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
          return M.sm_mbf || (M.sm_mbf = o.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
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
          let t = new l.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_SetFavorites_Response";
        }
      }
      class p extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.favorites || o.Sg(p.M()),
            B.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: { favorites: { n: 1, c: g, r: !0, q: !0 } },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = o.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_FavoritesChanged_Notification";
        }
      }
      class F extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), B.initialize(this, e, 0, -1, void 0, null);
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
          let t = new l.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFriendsList_Request";
        }
      }
      class R extends B {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.friendslist || o.Sg(R.M()),
            B.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = { proto: R, fields: { friendslist: { n: 1, c: m } } }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = o.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return o.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return o.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return o.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          o.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFriendsList_Response";
        }
      }
      var h, v;
      !(function (e) {
        (e.GetCategories = function (e, t) {
          return e.SendMsg("FriendsList.GetCategories#1", (0, a.I8)(f, t), b, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
          (e.GetFriendsList = function (e, t) {
            return e.SendMsg(
              "FriendsList.GetFriendsList#1",
              (0, a.I8)(F, t),
              R,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.GetFavorites#1", (0, a.I8)(z, t), w, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.SetFavorites#1", (0, a.I8)(M, t), _, {
              ePrivilege: 1,
            });
          });
      })(h || (h = {})),
        (function (e) {
          e.FavoritesChangedHandler = {
            name: "FriendsListClient.FavoritesChanged#1",
            request: p,
          };
        })(v || (v = {}));
      var j = r(37735),
        W = r(41471);
      function S(e) {
        const t = (0, n.KV)(),
          r = (0, i.L)(),
          a = (0, W.tb)(),
          l = (0, s.useQueryClient)();
        let o = { loadNicknames: !1, loadFavorites: !1, ...e };
        return (0, s.useQuery)(
          ["FriendsList", r, o],
          async () => {
            const e = l.fetchQuery(T(t, r)),
              i = o.loadNicknames ? l.fetchQuery(q(t, r)) : void 0,
              n = o.loadFavorites ? l.fetchQuery(L(t, r)) : void 0,
              s = await e,
              u = new Map(s.map((e) => [e, l.fetchQuery((0, W.mK)(a, t, e))]));
            let m;
            if (i) {
              const e = (await i).nicknames;
              m = new Map(e.map((e) => [e.accountid, e.nickname]));
            }
            const d = new Set(await (n ?? Promise.resolve([])));
            return (
              await Promise.all(
                s.map(async (e) => {
                  const t = new c.b(e).GetAccountID(),
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
      function O() {
        const e = (0, n.KV)(),
          t = (0, i.L)();
        return (0, s.useQuery)(T(e, t));
      }
      function T(e, t) {
        return {
          queryKey: ["GetFriendsList", t],
          queryFn: async () => {
            const t = a.w.Init(F),
              r = await h.GetFriendsList(e, t);
            return r
              .Body()
              .friendslist()
              ?.friends()
              ?.filter((e) => {
                const t = new c.b(e.ulfriendid());
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
      function I() {
        const e = (0, n.KV)(),
          t = (0, i.L)();
        return (0, s.useQuery)({
          queryKey: ["GetIgnoredAccounts", t],
          queryFn: async () => {
            const t = a.w.Init(F),
              r = await h.GetFriendsList(e, t);
            return r
              .Body()
              .friendslist()
              ?.friends()
              ?.filter((e) => {
                const t = new c.b(e.ulfriendid());
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
            const t = a.w.Init(j.dN);
            return (await j.xt.GetNicknameList(e, t)).Body().toObject();
          },
        };
      }
      function C(e = {}) {
        return (function (e = {}) {
          const t = (0, n.KV)(),
            r = (0, i.L)();
          return (0, s.useQuery)({ ...q(t, r), ...e });
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
            const t = a.w.Init(z),
              r = (await h.GetFavorites(e, t)).Body().toObject();
            return r.favorites
              ?.filter((e) => e.accountid)
              .map((e) => e.accountid);
          },
        };
      }
      async function G(e, t) {
        const r = a.w.Init(j.tl);
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
          a = (0, i.L)();
        return (0, s.useQuery)({
          queryKey: `GameplayInfo_${a}_${e}`,
          queryFn: async () => await G(r, e),
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
