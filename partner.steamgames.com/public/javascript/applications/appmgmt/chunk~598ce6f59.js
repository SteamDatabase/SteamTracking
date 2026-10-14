/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [37368],
    {
      33512: (Y, k, F) => {
        F.d(k, { Wv: () => W });
        var W = {};
        F.r(W),
          F.d(W, {
            bM: () => J,
            Nq: () => Q,
            xc: () => B,
            GH: () => H,
            Jb: () => $,
            Jn: () => V,
            Mv: () => X,
            yl: () => d,
            _x: () => K,
          });
        var M = F(80613),
          a = F.n(M),
          r = F(75245),
          j = F(35038);
        const x = 0,
          K = 1,
          J = 2,
          $ = 4,
          H = 8,
          Q = 16,
          V = 32,
          X = 64,
          B = 128,
          d = 256;
        function e(u) {
          return "unknown EClanAccountFlags ( " + u + " )";
        }
        class w extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              w.prototype.steamid || r.Sg(w.M()),
              M.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    accept: { n: 2, br: r.qM.readBool, bw: r.gp.writeBool },
                  },
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
          static toObject(i, b) {
            return r.BT(w.M(), i, b);
          }
          static fromObject(i) {
            return r.Uq(w.M(), i);
          }
          static deserializeBinary(i) {
            let b = new (a().BinaryReader)(i),
              y = new w();
            return w.deserializeBinaryFromReader(y, b);
          }
          static deserializeBinaryFromReader(i, b) {
            return r.zj(w.MBF(), i, b);
          }
          serializeBinary() {
            var i = new (a().BinaryWriter)();
            return w.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, b) {
            r.i0(w.M(), i, b);
          }
          serializeBase64String() {
            var i = new (a().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_RespondToClanInvite_Request";
          }
        }
        class f extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), M.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return f.toObject(i, this);
          }
          static toObject(i, b) {
            return i ? { $jspbMessageInstance: b } : {};
          }
          static fromObject(i) {
            return new f();
          }
          static deserializeBinary(i) {
            let b = new (a().BinaryReader)(i),
              y = new f();
            return f.deserializeBinaryFromReader(y, b);
          }
          static deserializeBinaryFromReader(i, b) {
            return i;
          }
          serializeBinary() {
            var i = new (a().BinaryWriter)();
            return f.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, b) {}
          serializeBase64String() {
            var i = new (a().BinaryWriter)();
            return (
              f.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_RespondToClanInvite_Response";
          }
        }
        class t extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              t.prototype.steamid || r.Sg(t.M()),
              M.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              t.sm_m ||
                (t.sm_m = {
                  proto: t,
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
              t.sm_m
            );
          }
          static MBF() {
            return t.sm_mbf || (t.sm_mbf = r.w0(t.M())), t.sm_mbf;
          }
          toObject(i = !1) {
            return t.toObject(i, this);
          }
          static toObject(i, b) {
            return r.BT(t.M(), i, b);
          }
          static fromObject(i) {
            return r.Uq(t.M(), i);
          }
          static deserializeBinary(i) {
            let b = new (a().BinaryReader)(i),
              y = new t();
            return t.deserializeBinaryFromReader(y, b);
          }
          static deserializeBinaryFromReader(i, b) {
            return r.zj(t.MBF(), i, b);
          }
          serializeBinary() {
            var i = new (a().BinaryWriter)();
            return t.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, b) {
            r.i0(t.M(), i, b);
          }
          serializeBase64String() {
            var i = new (a().BinaryWriter)();
            return (
              t.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetDraftAndRecentPartnerEventSnippet_Request";
          }
        }
        class g extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              g.prototype.snippets || r.Sg(g.M()),
              M.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
                  fields: { snippets: { n: 1, c: z, r: !0, q: !0 } },
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
          static toObject(i, b) {
            return r.BT(g.M(), i, b);
          }
          static fromObject(i) {
            return r.Uq(g.M(), i);
          }
          static deserializeBinary(i) {
            let b = new (a().BinaryReader)(i),
              y = new g();
            return g.deserializeBinaryFromReader(y, b);
          }
          static deserializeBinaryFromReader(i, b) {
            return r.zj(g.MBF(), i, b);
          }
          serializeBinary() {
            var i = new (a().BinaryWriter)();
            return g.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, b) {
            r.i0(g.M(), i, b);
          }
          serializeBase64String() {
            var i = new (a().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetDraftAndRecentPartnerEventSnippet_Response";
          }
        }
        class z extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              z.prototype.gid || r.Sg(z.M()),
              M.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
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
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = r.w0(z.M())), z.sm_mbf;
          }
          toObject(i = !1) {
            return z.toObject(i, this);
          }
          static toObject(i, b) {
            return r.BT(z.M(), i, b);
          }
          static fromObject(i) {
            return r.Uq(z.M(), i);
          }
          static deserializeBinary(i) {
            let b = new (a().BinaryReader)(i),
              y = new z();
            return z.deserializeBinaryFromReader(y, b);
          }
          static deserializeBinaryFromReader(i, b) {
            return r.zj(z.MBF(), i, b);
          }
          serializeBinary() {
            var i = new (a().BinaryWriter)();
            return z.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, b) {
            r.i0(z.M(), i, b);
          }
          serializeBase64String() {
            var i = new (a().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData";
          }
        }
        class l extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              l.prototype.requests || r.Sg(l.M()),
              M.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              l.sm_m ||
                (l.sm_m = {
                  proto: l,
                  fields: {
                    requests: { n: 1, c: m, r: !0, q: !0 },
                    cursor: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    count: {
                      n: 3,
                      d: 100,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              l.sm_m
            );
          }
          static MBF() {
            return l.sm_mbf || (l.sm_mbf = r.w0(l.M())), l.sm_mbf;
          }
          toObject(i = !1) {
            return l.toObject(i, this);
          }
          static toObject(i, b) {
            return r.BT(l.M(), i, b);
          }
          static fromObject(i) {
            return r.Uq(l.M(), i);
          }
          static deserializeBinary(i) {
            let b = new (a().BinaryReader)(i),
              y = new l();
            return l.deserializeBinaryFromReader(y, b);
          }
          static deserializeBinaryFromReader(i, b) {
            return r.zj(l.MBF(), i, b);
          }
          serializeBinary() {
            var i = new (a().BinaryWriter)();
            return l.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, b) {
            r.i0(l.M(), i, b);
          }
          serializeBase64String() {
            var i = new (a().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetPartnerEventsByBuildIDRange_Request";
          }
        }
        class m extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              m.prototype.appid || r.Sg(m.M()),
              M.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
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
              m.sm_m
            );
          }
          static MBF() {
            return m.sm_mbf || (m.sm_mbf = r.w0(m.M())), m.sm_mbf;
          }
          toObject(i = !1) {
            return m.toObject(i, this);
          }
          static toObject(i, b) {
            return r.BT(m.M(), i, b);
          }
          static fromObject(i) {
            return r.Uq(m.M(), i);
          }
          static deserializeBinary(i) {
            let b = new (a().BinaryReader)(i),
              y = new m();
            return m.deserializeBinaryFromReader(y, b);
          }
          static deserializeBinaryFromReader(i, b) {
            return r.zj(m.MBF(), i, b);
          }
          serializeBinary() {
            var i = new (a().BinaryWriter)();
            return m.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, b) {
            r.i0(m.M(), i, b);
          }
          serializeBase64String() {
            var i = new (a().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange";
          }
        }
        class c extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              c.prototype.matches || r.Sg(c.M()),
              M.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = {
                  proto: c,
                  fields: {
                    matches: { n: 1, c: s, r: !0, q: !0 },
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
              c.sm_m
            );
          }
          static MBF() {
            return c.sm_mbf || (c.sm_mbf = r.w0(c.M())), c.sm_mbf;
          }
          toObject(i = !1) {
            return c.toObject(i, this);
          }
          static toObject(i, b) {
            return r.BT(c.M(), i, b);
          }
          static fromObject(i) {
            return r.Uq(c.M(), i);
          }
          static deserializeBinary(i) {
            let b = new (a().BinaryReader)(i),
              y = new c();
            return c.deserializeBinaryFromReader(y, b);
          }
          static deserializeBinaryFromReader(i, b) {
            return r.zj(c.MBF(), i, b);
          }
          serializeBinary() {
            var i = new (a().BinaryWriter)();
            return c.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, b) {
            r.i0(c.M(), i, b);
          }
          serializeBase64String() {
            var i = new (a().BinaryWriter)();
            return (
              c.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetPartnerEventsByBuildIDRange_Response";
          }
        }
        class s extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              s.prototype.appid || r.Sg(s.M()),
              M.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              s.sm_m ||
                (s.sm_m = {
                  proto: s,
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
              s.sm_m
            );
          }
          static MBF() {
            return s.sm_mbf || (s.sm_mbf = r.w0(s.M())), s.sm_mbf;
          }
          toObject(i = !1) {
            return s.toObject(i, this);
          }
          static toObject(i, b) {
            return r.BT(s.M(), i, b);
          }
          static fromObject(i) {
            return r.Uq(s.M(), i);
          }
          static deserializeBinary(i) {
            let b = new (a().BinaryReader)(i),
              y = new s();
            return s.deserializeBinaryFromReader(y, b);
          }
          static deserializeBinaryFromReader(i, b) {
            return r.zj(s.MBF(), i, b);
          }
          serializeBinary() {
            var i = new (a().BinaryWriter)();
            return s.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, b) {
            r.i0(s.M(), i, b);
          }
          serializeBase64String() {
            var i = new (a().BinaryWriter)();
            return (
              s.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc";
          }
        }
        var O;
        ((u) => {
          function i(U, T, h) {
            return U.SendMsg(
              "Clan.RespondToClanInvite#1",
              (0, j.I8)(w, T, h),
              f,
              { ePrivilege: 1 },
            );
          }
          u.RespondToClanInvite = i;
          function b(U, T, h) {
            return U.SendMsg(
              "Clan.GetDraftAndRecentPartnerEventSnippet#1",
              (0, j.I8)(t, T, h),
              g,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          u.GetDraftAndRecentPartnerEventSnippet = b;
          function y(U, T, h) {
            return U.SendMsg(
              "Clan.GetPartnerEventsByBuildIDRange#1",
              (0, j.I8)(l, T, h),
              c,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          u.GetPartnerEventsByBuildIDRange = y;
        })(O || (O = {}));
      },
      93804: (Y, k, F) => {
        F.d(k, { tV: () => W });
        var W = {};
        F.r(W), F.d(W, { $D: () => K });
        var M = F(80613),
          a = F.n(M),
          r = F(75245),
          j = F(35038),
          x = F(47997);
        const K = 0,
          J = 1,
          $ = 2,
          H = 3;
        function Q(l) {
          return "unknown EStoreCuratorRecommendationState ( " + l + " )";
        }
        function V(l) {
          return "unknown EStoreCuratorListType ( " + l + " )";
        }
        function X(l) {
          return "unknown EStoreCuratorListState ( " + l + " )";
        }
        class B extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(m = null) {
            super(),
              B.prototype.appid || r.Sg(B.M()),
              M.Message.initialize(this, m, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    appid: { n: 1, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    clanid: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    link_url: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    link_text: {
                      n: 4,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    blurb: { n: 5, br: r.qM.readString, bw: r.gp.writeString },
                    time_recommended: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    comment_count: {
                      n: 7,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    upvote_count: {
                      n: 8,
                      br: r.qM.readInt32,
                      bw: r.gp.writeInt32,
                    },
                    accountid_creator: {
                      n: 9,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    recommendation_state: {
                      n: 10,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    received_compensation: {
                      n: 11,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    received_for_free: {
                      n: 12,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = r.w0(B.M())), B.sm_mbf;
          }
          toObject(m = !1) {
            return B.toObject(m, this);
          }
          static toObject(m, c) {
            return r.BT(B.M(), m, c);
          }
          static fromObject(m) {
            return r.Uq(B.M(), m);
          }
          static deserializeBinary(m) {
            let c = new (a().BinaryReader)(m),
              s = new B();
            return B.deserializeBinaryFromReader(s, c);
          }
          static deserializeBinaryFromReader(m, c) {
            return r.zj(B.MBF(), m, c);
          }
          serializeBinary() {
            var m = new (a().BinaryWriter)();
            return B.serializeBinaryToWriter(this, m), m.getResultBuffer();
          }
          static serializeBinaryToWriter(m, c) {
            r.i0(B.M(), m, c);
          }
          serializeBase64String() {
            var m = new (a().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, m), m.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_RecommendedApp";
          }
        }
        class d extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(m = null) {
            super(),
              d.prototype.listid || r.Sg(d.M()),
              M.Message.initialize(this, m, 0, -1, [10, 12, 13, 14], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              d.sm_m ||
                (d.sm_m = {
                  proto: d,
                  fields: {
                    listid: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    title: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    blurb: { n: 3, br: r.qM.readString, bw: r.gp.writeString },
                    link: { n: 4, br: r.qM.readString, bw: r.gp.writeString },
                    list_state: { n: 5, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    sort_order: {
                      n: 6,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    time_created: {
                      n: 7,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    time_updated: {
                      n: 8,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    accountid: {
                      n: 9,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                    apps: { n: 10, c: e, r: !0, q: !0 },
                    list_type: { n: 11, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    title_localization: { n: 12, c: x.O2, r: !0, q: !0 },
                    blurb_localization: { n: 13, c: x.O2, r: !0, q: !0 },
                    link_localization: { n: 14, c: x.O2, r: !0, q: !0 },
                    sale_clan_steamid: {
                      n: 15,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    sale_clan_event_gid: {
                      n: 16,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    list_jsondata: {
                      n: 17,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    clan_account_id: {
                      n: 18,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              d.sm_m
            );
          }
          static MBF() {
            return d.sm_mbf || (d.sm_mbf = r.w0(d.M())), d.sm_mbf;
          }
          toObject(m = !1) {
            return d.toObject(m, this);
          }
          static toObject(m, c) {
            return r.BT(d.M(), m, c);
          }
          static fromObject(m) {
            return r.Uq(d.M(), m);
          }
          static deserializeBinary(m) {
            let c = new (a().BinaryReader)(m),
              s = new d();
            return d.deserializeBinaryFromReader(s, c);
          }
          static deserializeBinaryFromReader(m, c) {
            return r.zj(d.MBF(), m, c);
          }
          serializeBinary() {
            var m = new (a().BinaryWriter)();
            return d.serializeBinaryToWriter(this, m), m.getResultBuffer();
          }
          static serializeBinaryToWriter(m, c) {
            r.i0(d.M(), m, c);
          }
          serializeBase64String() {
            var m = new (a().BinaryWriter)();
            return (
              d.serializeBinaryToWriter(this, m), m.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_ListDetails";
          }
        }
        class e extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(m = null) {
            super(),
              e.prototype.recommended_app || r.Sg(e.M()),
              M.Message.initialize(this, m, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              e.sm_m ||
                (e.sm_m = {
                  proto: e,
                  fields: {
                    recommended_app: { n: 1, c: B },
                    blurb: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                    sort_order: {
                      n: 3,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              e.sm_m
            );
          }
          static MBF() {
            return e.sm_mbf || (e.sm_mbf = r.w0(e.M())), e.sm_mbf;
          }
          toObject(m = !1) {
            return e.toObject(m, this);
          }
          static toObject(m, c) {
            return r.BT(e.M(), m, c);
          }
          static fromObject(m) {
            return r.Uq(e.M(), m);
          }
          static deserializeBinary(m) {
            let c = new (a().BinaryReader)(m),
              s = new e();
            return e.deserializeBinaryFromReader(s, c);
          }
          static deserializeBinaryFromReader(m, c) {
            return r.zj(e.MBF(), m, c);
          }
          serializeBinary() {
            var m = new (a().BinaryWriter)();
            return e.serializeBinaryToWriter(this, m), m.getResultBuffer();
          }
          static serializeBinaryToWriter(m, c) {
            r.i0(e.M(), m, c);
          }
          serializeBase64String() {
            var m = new (a().BinaryWriter)();
            return (
              e.serializeBinaryToWriter(this, m), m.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_ListDetails_ListItem";
          }
        }
        class w extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(m = null) {
            super(),
              w.prototype.steamid || r.Sg(w.M()),
              M.Message.initialize(this, m, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    list_state: { n: 2, br: r.qM.readEnum, bw: r.gp.writeEnum },
                    start: { n: 3, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    count: { n: 4, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                    return_total_only: {
                      n: 5,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    return_metadata_only: {
                      n: 6,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                    max_apps: { n: 7, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                    sale_clan_event_gid: {
                      n: 8,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = r.w0(w.M())), w.sm_mbf;
          }
          toObject(m = !1) {
            return w.toObject(m, this);
          }
          static toObject(m, c) {
            return r.BT(w.M(), m, c);
          }
          static fromObject(m) {
            return r.Uq(w.M(), m);
          }
          static deserializeBinary(m) {
            let c = new (a().BinaryReader)(m),
              s = new w();
            return w.deserializeBinaryFromReader(s, c);
          }
          static deserializeBinaryFromReader(m, c) {
            return r.zj(w.MBF(), m, c);
          }
          serializeBinary() {
            var m = new (a().BinaryWriter)();
            return w.serializeBinaryToWriter(this, m), m.getResultBuffer();
          }
          static serializeBinaryToWriter(m, c) {
            r.i0(w.M(), m, c);
          }
          serializeBase64String() {
            var m = new (a().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, m), m.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_GetLists_Request";
          }
        }
        class f extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(m = null) {
            super(),
              f.prototype.list_details || r.Sg(f.M()),
              M.Message.initialize(this, m, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              f.sm_m ||
                (f.sm_m = {
                  proto: f,
                  fields: {
                    list_details: { n: 1, c: d, r: !0, q: !0 },
                    total: { n: 2, br: r.qM.readUint32, bw: r.gp.writeUint32 },
                  },
                }),
              f.sm_m
            );
          }
          static MBF() {
            return f.sm_mbf || (f.sm_mbf = r.w0(f.M())), f.sm_mbf;
          }
          toObject(m = !1) {
            return f.toObject(m, this);
          }
          static toObject(m, c) {
            return r.BT(f.M(), m, c);
          }
          static fromObject(m) {
            return r.Uq(f.M(), m);
          }
          static deserializeBinary(m) {
            let c = new (a().BinaryReader)(m),
              s = new f();
            return f.deserializeBinaryFromReader(s, c);
          }
          static deserializeBinaryFromReader(m, c) {
            return r.zj(f.MBF(), m, c);
          }
          serializeBinary() {
            var m = new (a().BinaryWriter)();
            return f.serializeBinaryToWriter(this, m), m.getResultBuffer();
          }
          static serializeBinaryToWriter(m, c) {
            r.i0(f.M(), m, c);
          }
          serializeBase64String() {
            var m = new (a().BinaryWriter)();
            return (
              f.serializeBinaryToWriter(this, m), m.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_GetLists_Response";
          }
        }
        class t extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(m = null) {
            super(),
              t.prototype.steamid || r.Sg(t.M()),
              M.Message.initialize(this, m, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              t.sm_m ||
                (t.sm_m = {
                  proto: t,
                  fields: {
                    steamid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                    listid: {
                      n: 2,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              t.sm_m
            );
          }
          static MBF() {
            return t.sm_mbf || (t.sm_mbf = r.w0(t.M())), t.sm_mbf;
          }
          toObject(m = !1) {
            return t.toObject(m, this);
          }
          static toObject(m, c) {
            return r.BT(t.M(), m, c);
          }
          static fromObject(m) {
            return r.Uq(t.M(), m);
          }
          static deserializeBinary(m) {
            let c = new (a().BinaryReader)(m),
              s = new t();
            return t.deserializeBinaryFromReader(s, c);
          }
          static deserializeBinaryFromReader(m, c) {
            return r.zj(t.MBF(), m, c);
          }
          serializeBinary() {
            var m = new (a().BinaryWriter)();
            return t.serializeBinaryToWriter(this, m), m.getResultBuffer();
          }
          static serializeBinaryToWriter(m, c) {
            r.i0(t.M(), m, c);
          }
          serializeBase64String() {
            var m = new (a().BinaryWriter)();
            return (
              t.serializeBinaryToWriter(this, m), m.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_GetListDetails_Request";
          }
        }
        class g extends M.Message {
          static ImplementsStaticInterface() {}
          constructor(m = null) {
            super(),
              g.prototype.list_details || r.Sg(g.M()),
              M.Message.initialize(this, m, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              g.sm_m ||
                (g.sm_m = {
                  proto: g,
                  fields: { list_details: { n: 1, c: d } },
                }),
              g.sm_m
            );
          }
          static MBF() {
            return g.sm_mbf || (g.sm_mbf = r.w0(g.M())), g.sm_mbf;
          }
          toObject(m = !1) {
            return g.toObject(m, this);
          }
          static toObject(m, c) {
            return r.BT(g.M(), m, c);
          }
          static fromObject(m) {
            return r.Uq(g.M(), m);
          }
          static deserializeBinary(m) {
            let c = new (a().BinaryReader)(m),
              s = new g();
            return g.deserializeBinaryFromReader(s, c);
          }
          static deserializeBinaryFromReader(m, c) {
            return r.zj(g.MBF(), m, c);
          }
          serializeBinary() {
            var m = new (a().BinaryWriter)();
            return g.serializeBinaryToWriter(this, m), m.getResultBuffer();
          }
          static serializeBinaryToWriter(m, c) {
            r.i0(g.M(), m, c);
          }
          serializeBase64String() {
            var m = new (a().BinaryWriter)();
            return (
              g.serializeBinaryToWriter(this, m), m.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCuration_GetListDetails_Response";
          }
        }
        var z;
        ((l) => {
          function m(s, O, u) {
            return s.SendMsg(
              "StoreCuration.GetLists#1",
              (0, j.I8)(w, O, u),
              f,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          l.GetLists = m;
          function c(s, O, u) {
            return s.SendMsg(
              "StoreCuration.GetListDetails#1",
              (0, j.I8)(t, O, u),
              g,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          l.GetListDetails = c;
        })(z || (z = {}));
      },
    },
  ]);
})();
