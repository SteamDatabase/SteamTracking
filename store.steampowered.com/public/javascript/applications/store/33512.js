/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [33512],
    {
      33512: (L, T, j) => {
        j.d(T, { Wv: () => U });
        var U = {};
        j.r(U),
          j.d(U, {
            bM: () => k,
            Nq: () => a,
            xc: () => Q,
            GH: () => J,
            Jb: () => B,
            Jn: () => H,
            Mv: () => K,
            yl: () => $,
            _x: () => h,
          });
        var u = j(80613),
          s = j.n(u),
          r = j(75245),
          d = j(35038);
        const V = 0,
          h = 1,
          k = 2,
          B = 4,
          J = 8,
          a = 16,
          H = 32,
          K = 64,
          Q = 128,
          $ = 256;
        function X(O) {
          return "unknown EClanAccountFlags ( " + O + " )";
        }
        class b extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              b.prototype.steamid || r.Sg(b.M()),
              u.Message.initialize(this, i, 0, -1, void 0, null);
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
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    accept: { n: 2, br: r.qM.readBool, bw: r.gp.writeBool },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = r.w0(b.M())), b.sm_mbf;
          }
          toObject(i = !1) {
            return b.toObject(i, this);
          }
          static toObject(i, m) {
            return r.BT(b.M(), i, m);
          }
          static fromObject(i) {
            return r.Uq(b.M(), i);
          }
          static deserializeBinary(i) {
            let m = new (s().BinaryReader)(i),
              F = new b();
            return b.deserializeBinaryFromReader(F, m);
          }
          static deserializeBinaryFromReader(i, m) {
            return r.zj(b.MBF(), i, m);
          }
          serializeBinary() {
            var i = new (s().BinaryWriter)();
            return b.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, m) {
            r.i0(b.M(), i, m);
          }
          serializeBase64String() {
            var i = new (s().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_RespondToClanInvite_Request";
          }
        }
        class W extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), u.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return W.toObject(i, this);
          }
          static toObject(i, m) {
            return i ? { $jspbMessageInstance: m } : {};
          }
          static fromObject(i) {
            return new W();
          }
          static deserializeBinary(i) {
            let m = new (s().BinaryReader)(i),
              F = new W();
            return W.deserializeBinaryFromReader(F, m);
          }
          static deserializeBinaryFromReader(i, m) {
            return i;
          }
          serializeBinary() {
            var i = new (s().BinaryWriter)();
            return W.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, m) {}
          serializeBase64String() {
            var i = new (s().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_RespondToClanInvite_Response";
          }
        }
        class c extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              c.prototype.steamid || r.Sg(c.M()),
              u.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = {
                  proto: c,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    rtime_oldest_date: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              c.sm_m
            );
          }
          static MBF() {
            return c.sm_mbf || (c.sm_mbf = r.w0(c.M())), c.sm_mbf;
          }
          toObject(i = !1) {
            return c.toObject(i, this);
          }
          static toObject(i, m) {
            return r.BT(c.M(), i, m);
          }
          static fromObject(i) {
            return r.Uq(c.M(), i);
          }
          static deserializeBinary(i) {
            let m = new (s().BinaryReader)(i),
              F = new c();
            return c.deserializeBinaryFromReader(F, m);
          }
          static deserializeBinaryFromReader(i, m) {
            return r.zj(c.MBF(), i, m);
          }
          serializeBinary() {
            var i = new (s().BinaryWriter)();
            return c.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, m) {
            r.i0(c.M(), i, m);
          }
          serializeBase64String() {
            var i = new (s().BinaryWriter)();
            return (
              c.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetDraftAndRecentPartnerEventSnippet_Request";
          }
        }
        class w extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              w.prototype.snippets || r.Sg(w.M()),
              u.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: { snippets: { n: 1, c: M, r: !0, q: !0 } },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = r.w0(w.M())), w.sm_mbf;
          }
          toObject(i = !1) {
            return w.toObject(i, this);
          }
          static toObject(i, m) {
            return r.BT(w.M(), i, m);
          }
          static fromObject(i) {
            return r.Uq(w.M(), i);
          }
          static deserializeBinary(i) {
            let m = new (s().BinaryReader)(i),
              F = new w();
            return w.deserializeBinaryFromReader(F, m);
          }
          static deserializeBinaryFromReader(i, m) {
            return r.zj(w.MBF(), i, m);
          }
          serializeBinary() {
            var i = new (s().BinaryWriter)();
            return w.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, m) {
            r.i0(w.M(), i, m);
          }
          serializeBase64String() {
            var i = new (s().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetDraftAndRecentPartnerEventSnippet_Response";
          }
        }
        class M extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              M.prototype.gid || r.Sg(M.M()),
              u.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    gid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    announcement_gid: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    hidden: { n: 3, br: r.qM.readBool, bw: r.gp.writeBool },
                    published: { n: 4, br: r.qM.readBool, bw: r.gp.writeBool },
                    rtime32_start_time: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    event_name: {
                      n: 6,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    event_type: { n: 7, br: r.qM.readEnum, bw: r.gp.writeEnum },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = r.w0(M.M())), M.sm_mbf;
          }
          toObject(i = !1) {
            return M.toObject(i, this);
          }
          static toObject(i, m) {
            return r.BT(M.M(), i, m);
          }
          static fromObject(i) {
            return r.Uq(M.M(), i);
          }
          static deserializeBinary(i) {
            let m = new (s().BinaryReader)(i),
              F = new M();
            return M.deserializeBinaryFromReader(F, m);
          }
          static deserializeBinaryFromReader(i, m) {
            return r.zj(M.MBF(), i, m);
          }
          serializeBinary() {
            var i = new (s().BinaryWriter)();
            return M.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, m) {
            r.i0(M.M(), i, m);
          }
          serializeBase64String() {
            var i = new (s().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData";
          }
        }
        class z extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              z.prototype.requests || r.Sg(z.M()),
              u.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    requests: { n: 1, c: g, r: !0, q: !0 },
                    cursor: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    count: {
                      n: 3,
                      d: 100,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = r.w0(z.M())), z.sm_mbf;
          }
          toObject(i = !1) {
            return z.toObject(i, this);
          }
          static toObject(i, m) {
            return r.BT(z.M(), i, m);
          }
          static fromObject(i) {
            return r.Uq(z.M(), i);
          }
          static deserializeBinary(i) {
            let m = new (s().BinaryReader)(i),
              F = new z();
            return z.deserializeBinaryFromReader(F, m);
          }
          static deserializeBinaryFromReader(i, m) {
            return r.zj(z.MBF(), i, m);
          }
          serializeBinary() {
            var i = new (s().BinaryWriter)();
            return z.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, m) {
            r.i0(z.M(), i, m);
          }
          serializeBase64String() {
            var i = new (s().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetPartnerEventsByBuildIDRange_Request";
          }
        }
        class g extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              g.prototype.appid || r.Sg(g.M()),
              u.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    start_build_id: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    end_build_id: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    branch: { n: 4, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = r.w0(g.M())), g.sm_mbf;
          }
          toObject(i = !1) {
            return g.toObject(i, this);
          }
          static toObject(i, m) {
            return r.BT(g.M(), i, m);
          }
          static fromObject(i) {
            return r.Uq(g.M(), i);
          }
          static deserializeBinary(i) {
            let m = new (s().BinaryReader)(i),
              F = new g();
            return g.deserializeBinaryFromReader(F, m);
          }
          static deserializeBinaryFromReader(i, m) {
            return r.zj(g.MBF(), i, m);
          }
          serializeBinary() {
            var i = new (s().BinaryWriter)();
            return g.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, m) {
            r.i0(g.M(), i, m);
          }
          serializeBase64String() {
            var i = new (s().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange";
          }
        }
        class f extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              f.prototype.matches || r.Sg(f.M()),
              u.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              f.sm_m ||
                (f.sm_m = {
                  proto: f,
                  fields: {
                    matches: { n: 1, c: o, r: !0, q: !0 },
                    num_total_results: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    next_cursor: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              f.sm_m
            );
          }
          static MBF() {
            return f.sm_mbf || (f.sm_mbf = r.w0(f.M())), f.sm_mbf;
          }
          toObject(i = !1) {
            return f.toObject(i, this);
          }
          static toObject(i, m) {
            return r.BT(f.M(), i, m);
          }
          static fromObject(i) {
            return r.Uq(f.M(), i);
          }
          static deserializeBinary(i) {
            let m = new (s().BinaryReader)(i),
              F = new f();
            return f.deserializeBinaryFromReader(F, m);
          }
          static deserializeBinaryFromReader(i, m) {
            return r.zj(f.MBF(), i, m);
          }
          serializeBinary() {
            var i = new (s().BinaryWriter)();
            return f.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, m) {
            r.i0(f.M(), i, m);
          }
          serializeBase64String() {
            var i = new (s().BinaryWriter)();
            return (
              f.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetPartnerEventsByBuildIDRange_Response";
          }
        }
        class o extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              o.prototype.appid || r.Sg(o.M()),
              u.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    build_id: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    branch: { n: 3, br: r.qM.readString, bw: r.gp.writeString },
                    clan_event_gid: {
                      n: 4,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    clan_account_id: {
                      n: 5,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = r.w0(o.M())), o.sm_mbf;
          }
          toObject(i = !1) {
            return o.toObject(i, this);
          }
          static toObject(i, m) {
            return r.BT(o.M(), i, m);
          }
          static fromObject(i) {
            return r.Uq(o.M(), i);
          }
          static deserializeBinary(i) {
            let m = new (s().BinaryReader)(i),
              F = new o();
            return o.deserializeBinaryFromReader(F, m);
          }
          static deserializeBinaryFromReader(i, m) {
            return r.zj(o.MBF(), i, m);
          }
          serializeBinary() {
            var i = new (s().BinaryWriter)();
            return o.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, m) {
            r.i0(o.M(), i, m);
          }
          serializeBase64String() {
            var i = new (s().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc";
          }
        }
        var x;
        ((O) => {
          function i(l, t, y) {
            return l.SendMsg(
              "Clan.RespondToClanInvite#1",
              (0, d.I8)(b, t, y),
              W,
              { ePrivilege: 1 },
            );
          }
          O.RespondToClanInvite = i;
          function m(l, t, y) {
            return l.SendMsg(
              "Clan.GetDraftAndRecentPartnerEventSnippet#1",
              (0, d.I8)(c, t, y),
              w,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          O.GetDraftAndRecentPartnerEventSnippet = m;
          function F(l, t, y) {
            return l.SendMsg(
              "Clan.GetPartnerEventsByBuildIDRange#1",
              (0, d.I8)(z, t, y),
              f,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          O.GetPartnerEventsByBuildIDRange = F;
        })(x || (x = {}));
      },
    },
  ]);
})();
