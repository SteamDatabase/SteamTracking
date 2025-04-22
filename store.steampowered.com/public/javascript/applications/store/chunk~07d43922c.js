/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [7854],
  {
    21659: (e, t, r) => {
      r.d(t, {
        FI: () => y,
        GM: () => h,
        MN: () => b,
        Qo: () => z,
        ZG: () => i,
        rT: () => o,
      });
      var i,
        s = r(80613),
        a = r.n(s),
        n = r(89068),
        m = r(56545),
        l = r(15161);
      class o extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.context || n.Sg(o.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  context: { n: 1, c: l.TS },
                  data_request: { n: 2, c: l.gn },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = n.w0(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(o.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (a().BinaryReader)(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamCharts_GetMostPlayedGames_Request";
        }
      }
      class c extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.rollup_date || n.Sg(c.M()),
            s.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  rollup_date: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  ranks: { n: 2, c: u, r: !0, q: !0 },
                },
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
        static toObject(e, t) {
          return n.BT(c.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (a().BinaryReader)(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamCharts_GetMostPlayedGames_Response";
        }
      }
      class u extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.rank || n.Sg(u.M()),
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
                  rank: { n: 1, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  appid: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  item: { n: 3, c: l.vB },
                  last_week_rank: {
                    n: 4,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  peak_in_game: {
                    n: 5,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  daily_active_players: {
                    n: 6,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
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
        static toObject(e, t) {
          return n.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (a().BinaryReader)(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamCharts_GetMostPlayedGames_Response_MostPlayedRank";
        }
      }
      class B extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.context || n.Sg(B.M()),
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
                  context: { n: 1, c: l.TS },
                  data_request: { n: 2, c: l.gn },
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
        static toObject(e, t) {
          return n.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (a().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamCharts_GetGamesByConcurrentPlayers_Request";
        }
      }
      class d extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.last_update || n.Sg(d.M()),
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
                  last_update: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  ranks: { n: 2, c: _, r: !0, q: !0 },
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
        static toObject(e, t) {
          return n.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (a().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamCharts_GetGamesByConcurrentPlayers_Response";
        }
      }
      class _ extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.rank || n.Sg(_.M()),
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
                  rank: { n: 1, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  appid: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  item: { n: 3, c: l.vB },
                  concurrent_in_game: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  peak_in_game: {
                    n: 5,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
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
        static toObject(e, t) {
          return n.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (a().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamCharts_GetGamesByConcurrentPlayers_Response_MostPlayedRank";
        }
      }
      class y extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (a().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamCharts_GetTopReleasesPages_Request";
        }
      }
      class M extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.pages || n.Sg(M.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: { pages: { n: 1, c: g, r: !0, q: !0 } },
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
        static toObject(e, t) {
          return n.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (a().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamCharts_GetTopReleasesPages_Response";
        }
      }
      class g extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.name || n.Sg(g.M()),
            s.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  name: { n: 1, br: n.qM.readString, bw: n.gp.writeString },
                  start_of_month: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  url_path: { n: 3, br: n.qM.readString, bw: n.gp.writeString },
                  item_ids: { n: 4, c: l.O4, r: !0, q: !0 },
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
        static toObject(e, t) {
          return n.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (a().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamCharts_GetTopReleasesPages_Response_TopReleasesPage";
        }
      }
      class b extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
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
          let t = new (a().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamCharts_GetBestOfYearPages_Request";
        }
      }
      class p extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.pages || n.Sg(p.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: { pages: { n: 1, c: f, r: !0, q: !0 } },
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
        static toObject(e, t) {
          return n.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (a().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamCharts_GetBestOfYearPages_Response";
        }
      }
      class f extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.name || n.Sg(f.M()),
            s.Message.initialize(this, e, 0, -1, [3, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  name: { n: 1, br: n.qM.readString, bw: n.gp.writeString },
                  url_path: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                  banner_url: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: n.qM.readString,
                    bw: n.gp.writeRepeatedString,
                  },
                  banner_url_mobile: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: n.qM.readString,
                    bw: n.gp.writeRepeatedString,
                  },
                  start_date: {
                    n: 5,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = n.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return n.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (a().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamCharts_GetBestOfYearPages_Response_BestOfYearPage";
        }
      }
      class z extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.context || n.Sg(z.M()),
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
                  context: { n: 1, c: l.TS },
                  data_request: { n: 2, c: l.gn },
                  top_played_period: {
                    n: 3,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  count: { n: 4, br: n.qM.readInt32, bw: n.gp.writeInt32 },
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
        static toObject(e, t) {
          return n.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (a().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamCharts_GetMostPlayedSteamDeckGames_Request";
        }
      }
      class w extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.ranks || n.Sg(w.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  ranks: { n: 1, c: R, r: !0, q: !0 },
                  top_played_period: {
                    n: 2,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
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
        static toObject(e, t) {
          return n.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (a().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamCharts_GetMostPlayedSteamDeckGames_Response";
        }
      }
      class R extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.rank || n.Sg(R.M()),
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
                  rank: { n: 1, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  appid: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  item: { n: 3, c: l.vB },
                  last_period_rank: {
                    n: 4,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
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
        static toObject(e, t) {
          return n.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (a().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamCharts_GetMostPlayedSteamDeckGames_Response_MostPlayedRank";
        }
      }
      class h extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.rtime_month || n.Sg(h.M()),
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
                  rtime_month: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  include_dlc: { n: 2, br: n.qM.readBool, bw: n.gp.writeBool },
                  top_results_limit: {
                    n: 3,
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
        static toObject(e, t) {
          return n.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (a().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamCharts_GetMonthTopAppReleases_Request";
        }
      }
      class S extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.top_app_releases || n.Sg(S.M()),
            s.Message.initialize(this, e, 0, -1, [1, 2, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  top_app_releases: { n: 1, c: W, r: !0, q: !0 },
                  top_dlc_releases: { n: 2, c: W, r: !0, q: !0 },
                  top_combined_app_and_dlc_releases: {
                    n: 3,
                    c: W,
                    r: !0,
                    q: !0,
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
        static toObject(e, t) {
          return n.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (a().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamCharts_GetMonthTopAppReleases_Response";
        }
      }
      class W extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.appid || n.Sg(W.M()),
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
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  rtime_release: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  app_release_rank: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
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
        static toObject(e, t) {
          return n.BT(W.M(), e, t);
        }
        static fromObject(e) {
          return n.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (a().BinaryReader)(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return n.zj(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (a().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          n.i0(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new (a().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamCharts_GetMonthTopAppReleases_Response_AppNewRelease";
        }
      }
      !(function (e) {
        (e.GetMostPlayedGames = function (e, t) {
          return e.SendMsg(
            "SteamCharts.GetMostPlayedGames#1",
            (0, m.I8)(o, t),
            c,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
          );
        }),
          (e.GetGamesByConcurrentPlayers = function (e, t) {
            return e.SendMsg(
              "SteamCharts.GetGamesByConcurrentPlayers#1",
              (0, m.I8)(B, t),
              d,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetTopReleasesPages = function (e, t) {
            return e.SendMsg(
              "SteamCharts.GetTopReleasesPages#1",
              (0, m.I8)(y, t),
              M,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetBestOfYearPages = function (e, t) {
            return e.SendMsg(
              "SteamCharts.GetBestOfYearPages#1",
              (0, m.I8)(b, t),
              p,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetMostPlayedSteamDeckGames = function (e, t) {
            return e.SendMsg(
              "SteamCharts.GetMostPlayedSteamDeckGames#1",
              (0, m.I8)(z, t),
              w,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetMonthTopAppReleases = function (e, t) {
            return e.SendMsg(
              "SteamCharts.GetMonthTopAppReleases#1",
              (0, m.I8)(h, t),
              S,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          });
      })(i || (i = {}));
    },
    3734: (e, t, r) => {
      r.d(t, { E2: () => d, PG: () => y });
      var i = r(90626),
        s = r(20194),
        a = r(56545),
        n = r(94601),
        m = r(72839),
        l = r(82097),
        o = r(44332),
        c = r(23809);
      const u = i.createContext({}),
        B = () => i.useContext(u);
      function d(e) {
        let { defaultOptions: t, children: r } = e,
          s = i.useMemo(() => ({ defaultOptions: t || {} }), [t]);
        return i.createElement(u.Provider, { value: s }, r);
      }
      const _ = "StoreQueryStore";
      function y(e, t, r, l) {
        let u = B();
        const d = (0, c.KV)();
        u || (0, o.w)(!1, "useStoreQuery called outside of a <StoreQueryRoot>");
        let y = u.defaultOptions;
        const g = i.useMemo(() => {
          let e = [];
          return (
            l?.content_descriptors_excluded
              ? (e = l.content_descriptors_excluded)
              : y?.content_descriptors_excluded &&
                (e = y.content_descriptors_excluded),
            { ...t, filters: { content_descriptors_excluded: e, ...t.filters } }
          );
        }, [t, l, y]);
        let b;
        void 0 !== l?.override_country_code
          ? (b = l.override_country_code)
          : void 0 !== y?.override_country_code &&
            (b = y.override_country_code);
        let p = { staleTime: 36e5 };
        l?.reactQuery && (p = { ...p, ...l.reactQuery });
        const f = [_, g, r, l];
        return (0, s.I)({
          queryKey: f,
          queryFn: () =>
            (async function (e, t, r, i, s) {
              const l = a.w.Init(n.iU);
              (0, m.rV)(l), i && (0, m.Bn)(l, i);
              s && l.Body().set_override_country_code(s);
              l.Body().set_query(n.nu.fromObject(r)),
                l.Body().set_query_name(t);
              const o = await n.Fs.Query(e, l);
              if (1 != o.GetEResult())
                throw `Error executing StoreQuery "${t}", EResult: ${o.GetEResult()}`;
              return new M(o, i);
            })(d, e, g, r, b),
          ...p,
        });
      }
      class M {
        m_Items;
        m_rgItemIDs;
        m_metadata;
        constructor(e, t) {
          this.ReadResults(e, t);
        }
        GetItems() {
          return this.m_Items;
        }
        GetItemIDs() {
          return this.m_rgItemIDs;
        }
        GetMetadata() {
          return this.m_metadata;
        }
        ReadResults(e, t) {
          this.m_Items ||
            ((0, o.w)(
              0 == e.Body().metadata().start(),
              "Empty item list - expected to start at 0",
            ),
            (this.m_Items = []));
          const r = e.Body().ids() || [];
          if (
            ((this.m_rgItemIDs = r.map((e) => e.toObject())),
            e.Body().store_items())
          )
            for (const r of e.Body().store_items())
              this.m_Items.push(l.A.Get().ReadItem(r, t));
          this.m_metadata = e.Body().metadata().toObject();
        }
      }
    },
  },
]);
