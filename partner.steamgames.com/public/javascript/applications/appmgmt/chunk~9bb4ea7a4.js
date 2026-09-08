/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [7671],
  {
    76176: (e, r, t) => {
      t.d(r, {
        B4H: () => xr,
        tzK: () => Gr,
        w_T: () => Sr,
        SCE: () => Lr,
        kVt: () => Me,
        EyI: () => Er,
        Bx6: () => i,
        xtC: () => mt,
      });
      var i = {};
      t.r(i), t.d(i, { NS: () => u, bf: () => o, C5: () => c });
      var a = t(80613),
        s = t.n(a),
        n = t(89068),
        l = t(56545),
        m = t(5323);
      const c = 0,
        o = 2,
        u = 3;
      class B extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.steamid || n.Sg(B.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
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
          let r = new (s().BinaryReader)(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetRecentPlaytimeSessionsForChild_Request";
        }
      }
      class d extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.sessions || n.Sg(d.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: { sessions: { n: 1, c: g, r: !0, q: !0 } },
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
          let r = new (s().BinaryReader)(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetRecentPlaytimeSessionsForChild_Response";
        }
      }
      class g extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.time_start || n.Sg(g.M()),
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
                  time_start: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  time_end: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  appid: { n: 3, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  device_type: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  disconnected: { n: 5, br: n.qM.readBool, bw: n.gp.writeBool },
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
          let r = new (s().BinaryReader)(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetRecentPlaytimeSessionsForChild_Response_PlaytimeSession";
        }
      }
      class y extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.min_last_played || n.Sg(y.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  min_last_played: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
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
          let r = new (s().BinaryReader)(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Request";
        }
      }
      class b extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.games || n.Sg(b.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { games: { n: 1, c: M, r: !0, q: !0 } },
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
          let r = new (s().BinaryReader)(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Response";
        }
      }
      class M extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.appid || n.Sg(M.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  appid: { n: 1, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  last_playtime: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  playtime_2weeks: {
                    n: 3,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  playtime_forever: {
                    n: 4,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  first_playtime: {
                    n: 5,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  playtime_windows_forever: {
                    n: 6,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  playtime_mac_forever: {
                    n: 7,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  playtime_linux_forever: {
                    n: 8,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  playtime_deck_forever: {
                    n: 16,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  first_windows_playtime: {
                    n: 9,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  first_mac_playtime: {
                    n: 10,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  first_linux_playtime: {
                    n: 11,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  first_deck_playtime: {
                    n: 17,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  last_windows_playtime: {
                    n: 12,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  last_mac_playtime: {
                    n: 13,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  last_linux_playtime: {
                    n: 14,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  last_deck_playtime: {
                    n: 18,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  playtime_disconnected: {
                    n: 15,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
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
          let r = new (s().BinaryReader)(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Response_Game";
        }
      }
      class _ extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.steamids || n.Sg(_.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  steamids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint64String,
                    pbr: n.qM.readPackedUint64String,
                    bw: n.gp.writeRepeatedUint64String,
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
          let r = new (s().BinaryReader)(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Request";
        }
      }
      class z extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.accounts || n.Sg(z.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: { accounts: { n: 1, c: f, r: !0, q: !0 } },
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
          let r = new (s().BinaryReader)(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response";
        }
      }
      class f extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.public_data || n.Sg(f.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  public_data: { n: 1, c: w },
                  private_data: { n: 2, c: p },
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
        static toObject(e, r) {
          return n.BT(f.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails";
        }
      }
      class w extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.steamid || n.Sg(w.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
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
                    q: !0,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  visibility_state: {
                    n: 2,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  privacy_state: {
                    n: 3,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  profile_state: {
                    n: 4,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  ban_expires_time: {
                    n: 7,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  account_flags: {
                    n: 8,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  sha_digest_avatar: {
                    n: 9,
                    br: n.qM.readBytes,
                    bw: n.gp.writeBytes,
                  },
                  persona_name: {
                    n: 10,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  profile_url: {
                    n: 11,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  content_country_restricted: {
                    n: 12,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
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
        static toObject(e, r) {
          return n.BT(w.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPublicData";
        }
      }
      class p extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.persona_state || n.Sg(p.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  persona_state: {
                    n: 1,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  persona_state_flags: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  time_created: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  game_id: {
                    n: 4,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  game_server_steam_id: {
                    n: 5,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  game_server_ip_address: {
                    n: 6,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  game_server_port: {
                    n: 7,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  game_extra_info: {
                    n: 8,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  account_name: {
                    n: 9,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  lobby_steam_id: {
                    n: 10,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  rich_presence_kv: {
                    n: 11,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  broadcast_session_id: {
                    n: 12,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  watching_broadcast_accountid: {
                    n: 13,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  watching_broadcast_appid: {
                    n: 14,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  watching_broadcast_viewers: {
                    n: 15,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  watching_broadcast_title: {
                    n: 16,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  last_logoff_time: {
                    n: 17,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  last_seen_online: {
                    n: 18,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  game_os_type: {
                    n: 19,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  game_device_type: {
                    n: 20,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  game_device_name: {
                    n: 21,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  game_is_private: {
                    n: 22,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
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
          let r = new (s().BinaryReader)(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPrivateData";
        }
      }
      class S extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (s().BinaryReader)(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMutualFriendsForIncomingInvites_Request";
        }
      }
      class R extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.steamid || n.Sg(R.M()),
            a.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  mutual_friend_account_ids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint32,
                    pbr: n.qM.readPackedUint32,
                    bw: n.gp.writeRepeatedUint32,
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
        static toObject(e, r) {
          return n.BT(R.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IncomingInviteMutualFriendList";
        }
      }
      class h extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.incoming_invite_mutual_friends_lists || n.Sg(h.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  incoming_invite_mutual_friends_lists: {
                    n: 1,
                    c: R,
                    r: !0,
                    q: !0,
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
          let r = new (s().BinaryReader)(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMutualFriendsForIncomingInvites_Response";
        }
      }
      class W extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.steamid || n.Sg(W.M()),
            a.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  include_appinfo: {
                    n: 2,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  include_played_free_games: {
                    n: 3,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  appids_filter: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint32,
                    pbr: n.qM.readPackedUint32,
                    bw: n.gp.writeRepeatedUint32,
                  },
                  include_free_sub: {
                    n: 5,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  skip_unvetted_apps: {
                    n: 6,
                    d: !0,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  language: { n: 7, br: n.qM.readString, bw: n.gp.writeString },
                  include_extended_appinfo: {
                    n: 8,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
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
        static toObject(e, r) {
          return n.BT(W.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetOwnedGames_Request";
        }
      }
      class j extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.game_count || n.Sg(j.M()),
            a.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  game_count: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  games: { n: 2, c: F, r: !0, q: !0 },
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
          let r = new (s().BinaryReader)(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetOwnedGames_Response";
        }
      }
      class F extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.appid || n.Sg(F.M()),
            a.Message.initialize(this, e, 0, -1, [18], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  appid: { n: 1, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  name: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                  playtime_2weeks: {
                    n: 3,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  playtime_forever: {
                    n: 4,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  img_icon_url: {
                    n: 5,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  has_community_visible_stats: {
                    n: 7,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  playtime_windows_forever: {
                    n: 8,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  playtime_mac_forever: {
                    n: 9,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  playtime_linux_forever: {
                    n: 10,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  playtime_deck_forever: {
                    n: 20,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  rtime_last_played: {
                    n: 11,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  capsule_filename: {
                    n: 12,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  sort_as: { n: 13, br: n.qM.readString, bw: n.gp.writeString },
                  has_workshop: {
                    n: 14,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  has_market: { n: 15, br: n.qM.readBool, bw: n.gp.writeBool },
                  has_dlc: { n: 16, br: n.qM.readBool, bw: n.gp.writeBool },
                  has_leaderboards: {
                    n: 17,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  content_descriptorids: {
                    n: 18,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint32,
                    pbr: n.qM.readPackedUint32,
                    bw: n.gp.writeRepeatedUint32,
                  },
                  playtime_disconnected: {
                    n: 19,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
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
          let r = new (s().BinaryReader)(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetOwnedGames_Response_Game";
        }
      }
      class v extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.max_age_seconds || n.Sg(v.M()),
            a.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  max_age_seconds: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  ignore_appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint32,
                    pbr: n.qM.readPackedUint32,
                    bw: n.gp.writeRepeatedUint32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = n.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(v.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayNext_Request";
        }
      }
      class q extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.last_update_time || n.Sg(q.M()),
            a.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  last_update_time: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint32,
                    pbr: n.qM.readPackedUint32,
                    bw: n.gp.writeRepeatedUint32,
                  },
                },
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
          let r = new (s().BinaryReader)(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayNext_Response";
        }
      }
      class T extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.play_sessions || n.Sg(T.M()),
            a.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: { play_sessions: { n: 3, c: O, r: !0, q: !0 } },
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
          let r = new (s().BinaryReader)(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RecordDisconnectedPlaytime_Request";
        }
      }
      class O extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.appid || n.Sg(O.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  session_time_start: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  seconds: { n: 3, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  offline: { n: 4, br: n.qM.readBool, bw: n.gp.writeBool },
                  owner: { n: 5, br: n.qM.readUint32, bw: n.gp.writeUint32 },
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
          let r = new (s().BinaryReader)(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RecordDisconnectedPlaytime_Request_PlayHistory";
        }
      }
      class I extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (s().BinaryReader)(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RecordDisconnectedPlaytime_Response";
        }
      }
      class P extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.appid || n.Sg(P.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
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
          let r = new (s().BinaryReader)(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(P.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(P.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameBadgeLevels_Request";
        }
      }
      class U extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.player_level || n.Sg(U.M()),
            a.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  player_level: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  badges: { n: 2, c: C, r: !0, q: !0 },
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
          let r = new (s().BinaryReader)(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(U.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(U.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameBadgeLevels_Response";
        }
      }
      class C extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.level || n.Sg(C.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  level: { n: 1, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  series: { n: 2, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  border_color: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
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
          let r = new (s().BinaryReader)(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameBadgeLevels_Response_Badge";
        }
      }
      class x extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.communityitemid || n.Sg(x.M()),
            a.Message.initialize(this, e, 0, -1, [15], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  image_small: {
                    n: 2,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  image_large: {
                    n: 3,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  name: { n: 4, br: n.qM.readString, bw: n.gp.writeString },
                  item_title: {
                    n: 5,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  item_description: {
                    n: 6,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  appid: { n: 7, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  item_type: {
                    n: 8,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  item_class: {
                    n: 9,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  movie_webm: {
                    n: 10,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  movie_mp4: {
                    n: 11,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  movie_webm_small: {
                    n: 13,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  movie_mp4_small: {
                    n: 14,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  equipped_flags: {
                    n: 12,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  profile_colors: { n: 15, c: G, r: !0, q: !0 },
                  tiled: { n: 16, br: n.qM.readBool, bw: n.gp.writeBool },
                },
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
          let r = new (s().BinaryReader)(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(x.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(x.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileItem";
        }
      }
      class G extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.style_name || n.Sg(G.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  style_name: {
                    n: 1,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  color: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = n.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(G.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(G.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(G.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileItem_ProfileColor";
        }
      }
      class N extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.steamid || n.Sg(N.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  language: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = n.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(N.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new N();
          return N.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(N.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(N.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileBackground_Request";
        }
      }
      class k extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.profile_background || n.Sg(k.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: { profile_background: { n: 1, c: x } },
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
          let r = new (s().BinaryReader)(e),
            t = new k();
          return k.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(k.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(k.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileBackground_Response";
        }
      }
      class A extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.communityitemid || n.Sg(A.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                },
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
          let r = new (s().BinaryReader)(e),
            t = new A();
          return A.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(A.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(A.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileBackground_Request";
        }
      }
      class E extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new E();
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileBackground_Response";
        }
      }
      class L extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.steamid || n.Sg(L.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  language: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = n.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(L.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new L();
          return L.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(L.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(L.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMiniProfileBackground_Request";
        }
      }
      class D extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.profile_background || n.Sg(D.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: { profile_background: { n: 1, c: x } },
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
          let r = new (s().BinaryReader)(e),
            t = new D();
          return D.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(D.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(D.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMiniProfileBackground_Response";
        }
      }
      class K extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.communityitemid || n.Sg(K.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = n.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(K.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new K();
          return K.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(K.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(K.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetMiniProfileBackground_Request";
        }
      }
      class $ extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new $();
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new $();
          return $.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetMiniProfileBackground_Response";
        }
      }
      class H extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.steamid || n.Sg(H.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  language: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
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
          let r = new (s().BinaryReader)(e),
            t = new H();
          return H.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(H.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(H.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAvatarFrame_Request";
        }
      }
      class Q extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.avatar_frame || n.Sg(Q.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = { proto: Q, fields: { avatar_frame: { n: 1, c: x } } }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = n.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Q.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Q();
          return Q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Q.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAvatarFrame_Response";
        }
      }
      class V extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.communityitemid || n.Sg(V.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = n.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(V.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new V();
          return V.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(V.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(V.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAvatarFrame_Request";
        }
      }
      class J extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new J();
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new J();
          return J.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAvatarFrame_Response";
        }
      }
      class X extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.steamid || n.Sg(X.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  language: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = n.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(X.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new X();
          return X.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(X.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(X.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAnimatedAvatar_Request";
        }
      }
      class Y extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.avatar || n.Sg(Y.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = { proto: Y, fields: { avatar: { n: 1, c: x } } }),
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
          let r = new (s().BinaryReader)(e),
            t = new Y();
          return Y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Y.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAnimatedAvatar_Response";
        }
      }
      class Z extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.communityitemid || n.Sg(Z.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
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
          let r = new (s().BinaryReader)(e),
            t = new Z();
          return Z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAnimatedAvatar_Request";
        }
      }
      class ee extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ee();
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new ee();
          return ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAnimatedAvatar_Response";
        }
      }
      class re extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.steamid || n.Sg(re.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  language: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                },
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
          let r = new (s().BinaryReader)(e),
            t = new re();
          return re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(re.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetSteamDeckKeyboardSkin_Request";
        }
      }
      class te extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.steam_deck_keyboard_skin || n.Sg(te.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: { steam_deck_keyboard_skin: { n: 1, c: x } },
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
          let r = new (s().BinaryReader)(e),
            t = new te();
          return te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(te.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetSteamDeckKeyboardSkin_Response";
        }
      }
      class ie extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.communityitemid || n.Sg(ie.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  communityitemid: {
                    n: 1,
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
          let r = new (s().BinaryReader)(e),
            t = new ie();
          return ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetSteamDeckKeyboardSkin_Request";
        }
      }
      class ae extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ae();
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new ae();
          return ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetSteamDeckKeyboardSkin_Response";
        }
      }
      class se extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.language || n.Sg(se.M()),
            a.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  language: { n: 1, br: n.qM.readString, bw: n.gp.writeString },
                  filters: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.qM.readEnum,
                    pbr: n.qM.readPackedEnum,
                    bw: n.gp.writeRepeatedEnum,
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
          let r = new (s().BinaryReader)(e),
            t = new se();
          return se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(se.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(se.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsOwned_Request";
        }
      }
      class ne extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.profile_backgrounds || n.Sg(ne.M()),
            a.Message.initialize(this, e, 0, -1, [1, 2, 3, 4, 5, 6, 7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  profile_backgrounds: { n: 1, c: x, r: !0, q: !0 },
                  mini_profile_backgrounds: { n: 2, c: x, r: !0, q: !0 },
                  avatar_frames: { n: 3, c: x, r: !0, q: !0 },
                  animated_avatars: { n: 4, c: x, r: !0, q: !0 },
                  profile_modifiers: { n: 5, c: x, r: !0, q: !0 },
                  steam_deck_keyboard_skins: { n: 6, c: x, r: !0, q: !0 },
                  steam_deck_startup_movies: { n: 7, c: x, r: !0, q: !0 },
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
          let r = new (s().BinaryReader)(e),
            t = new ne();
          return ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(ne.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(ne.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsOwned_Response";
        }
      }
      class le extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.steamid || n.Sg(le.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  language: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = n.w0(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(le.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(le.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new le();
          return le.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(le.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(le.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsEquipped_Request";
        }
      }
      class me extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.profile_background || n.Sg(me.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  profile_background: { n: 1, c: x },
                  mini_profile_background: { n: 2, c: x },
                  avatar_frame: { n: 3, c: x },
                  animated_avatar: { n: 4, c: x },
                  profile_modifier: { n: 5, c: x },
                  steam_deck_keyboard_skin: { n: 6, c: x },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = n.w0(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(me.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(me.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new me();
          return me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(me.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(me.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsEquipped_Response";
        }
      }
      class ce extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.communityitemid || n.Sg(ce.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  flags: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = n.w0(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(ce.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(ce.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new ce();
          return ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(ce.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(ce.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetEquippedProfileItemFlags_Request";
        }
      }
      class oe extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new oe();
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new oe();
          return oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetEquippedProfileItemFlags_Response";
        }
      }
      class ue extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ue();
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new ue();
          return ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetEmoticonList_Request";
        }
      }
      class Be extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.emoticons || n.Sg(Be.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: { emoticons: { n: 1, c: de, r: !0, q: !0 } },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = n.w0(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Be.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Be.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Be();
          return Be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Be.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Be.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetEmoticonList_Response";
        }
      }
      class de extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.name || n.Sg(de.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  name: { n: 1, br: n.qM.readString, bw: n.gp.writeString },
                  count: { n: 2, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  time_last_used: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  use_count: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  time_received: {
                    n: 5,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  appid: { n: 6, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = n.w0(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(de.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(de.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new de();
          return de.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(de.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(de.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetEmoticonList_Response_Emoticon";
        }
      }
      class ge extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.steamid || n.Sg(ge.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  badgeid: { n: 2, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = n.w0(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(ge.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(ge.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new ge();
          return ge.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(ge.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(ge.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityBadgeProgress_Request";
        }
      }
      class ye extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.quests || n.Sg(ye.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: { quests: { n: 1, c: be, r: !0, q: !0 } },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = n.w0(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(ye.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(ye.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new ye();
          return ye.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(ye.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(ye.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityBadgeProgress_Response";
        }
      }
      class be extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.questid || n.Sg(be.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  questid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  completed: { n: 2, br: n.qM.readBool, bw: n.gp.writeBool },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = n.w0(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(be.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(be.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new be();
          return be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(be.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(be.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityBadgeProgress_Response_Quest";
        }
      }
      class Me extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.appid || n.Sg(Me.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  status_text: {
                    n: 2,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = n.w0(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Me.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Me.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Me();
          return Me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Me.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Me.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PostStatusToFriends_Request";
        }
      }
      class _e extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new _e();
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new _e();
          return _e.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PostStatusToFriends_Response";
        }
      }
      class ze extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ze.prototype.steamid || n.Sg(ze.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  postid: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = n.w0(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(ze.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(ze.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new ze();
          return ze.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(ze.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(ze.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPostedStatus_Request";
        }
      }
      class fe extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.accountid || n.Sg(fe.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: {
                  accountid: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  postid: {
                    n: 2,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  status_text: {
                    n: 3,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  deleted: { n: 4, br: n.qM.readBool, bw: n.gp.writeBool },
                  appid: { n: 5, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = n.w0(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(fe.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(fe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new fe();
          return fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(fe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(fe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPostedStatus_Response";
        }
      }
      class we extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.postid || n.Sg(we.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  postid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = n.w0(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(we.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(we.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new we();
          return we.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(we.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(we.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_DeletePostedStatus_Request";
        }
      }
      class pe extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new pe();
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new pe();
          return pe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_DeletePostedStatus_Response";
        }
      }
      class Se extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.steamid || n.Sg(Se.M()),
            a.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  language: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                  max_achievements: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  appids: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint32,
                    pbr: n.qM.readPackedUint32,
                    bw: n.gp.writeRepeatedUint32,
                  },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = n.w0(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Se.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Se.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Se();
          return Se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Se.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Se.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Request";
        }
      }
      class Re extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.games || n.Sg(Re.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: { games: { n: 1, c: We, r: !0, q: !0 } },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = n.w0(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Re.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Re();
          return Re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Re.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Response";
        }
      }
      class he extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.statid || n.Sg(he.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  statid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  bit: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  name: { n: 3, br: n.qM.readString, bw: n.gp.writeString },
                  desc: { n: 4, br: n.qM.readString, bw: n.gp.writeString },
                  icon: { n: 5, br: n.qM.readString, bw: n.gp.writeString },
                  icon_gray: {
                    n: 6,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  hidden: { n: 7, br: n.qM.readBool, bw: n.gp.writeBool },
                  player_percent_unlocked: {
                    n: 8,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = n.w0(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(he.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(he.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new he();
          return he.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(he.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(he.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Response_Achievement";
        }
      }
      class We extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.appid || n.Sg(We.M()),
            a.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  total_achievements: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  achievements: { n: 3, c: he, r: !0, q: !0 },
                },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = n.w0(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(We.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(We.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new We();
          return We.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(We.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(We.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Response_Game";
        }
      }
      class je extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.steamid || n.Sg(je.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  appid: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  sha_schema: { n: 3, br: n.qM.readBytes, bw: n.gp.writeBytes },
                  crc_stats: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  crc_schema: {
                    n: 5,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = n.w0(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(je.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(je.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new je();
          return je.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(je.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(je.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetUserStats_Request";
        }
      }
      class Fe extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fe.prototype.sha_schema || n.Sg(Fe.M()),
            a.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: {
                  sha_schema: { n: 1, br: n.qM.readBytes, bw: n.gp.writeBytes },
                  crc_stats: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  schema: { n: 3, br: n.qM.readBytes, bw: n.gp.writeBytes },
                  stats: { n: 4, c: qe, r: !0, q: !0 },
                  crc_schema: {
                    n: 5,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = n.w0(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Fe.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Fe();
          return Fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Fe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Fe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetUserStats_Response";
        }
      }
      class ve extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.achievement_bit || n.Sg(ve.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: {
                  achievement_bit: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  unlock_time: {
                    n: 2,
                    br: n.qM.readFixed32,
                    bw: n.gp.writeFixed32,
                  },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = n.w0(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(ve.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(ve.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new ve();
          return ve.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(ve.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(ve.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetUserStats_Response_Unlock_Time";
        }
      }
      class qe extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qe.prototype.stat_id || n.Sg(qe.M()),
            a.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            qe.sm_m ||
              (qe.sm_m = {
                proto: qe,
                fields: {
                  stat_id: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  stat_value: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  unlock_times: { n: 3, c: ve, r: !0, q: !0 },
                },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = n.w0(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(qe.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(qe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new qe();
          return qe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(qe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(qe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetUserStats_Response_Stats";
        }
      }
      class Te extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.steamid || n.Sg(Te.M()),
            a.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  language: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                  appids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: n.qM.readUint32,
                    pbr: n.qM.readPackedUint32,
                    bw: n.gp.writeRepeatedUint32,
                  },
                  include_unvetted_apps: {
                    n: 4,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = n.w0(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Te.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Te.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Te();
          return Te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Te.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAchievementsProgress_Request";
        }
      }
      class Oe extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.achievement_progress || n.Sg(Oe.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: { achievement_progress: { n: 1, c: Ie, r: !0, q: !0 } },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = n.w0(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Oe.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Oe();
          return Oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAchievementsProgress_Response";
        }
      }
      class Ie extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.appid || n.Sg(Ie.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  unlocked: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  total: { n: 3, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  percentage: { n: 4, br: n.qM.readFloat, bw: n.gp.writeFloat },
                  all_unlocked: { n: 5, br: n.qM.readBool, bw: n.gp.writeBool },
                  cache_time: {
                    n: 6,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  vetted: { n: 7, br: n.qM.readBool, bw: n.gp.writeBool },
                },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = n.w0(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Ie.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Ie();
          return Ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAchievementsProgress_Response_AchievementProgress";
        }
      }
      class Pe extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pe.prototype.appid || n.Sg(Pe.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Pe.sm_m ||
              (Pe.sm_m = {
                proto: Pe,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  language: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                  hash_only: { n: 3, br: n.qM.readBool, bw: n.gp.writeBool },
                },
              }),
            Pe.sm_m
          );
        }
        static MBF() {
          return Pe.sm_mbf || (Pe.sm_mbf = n.w0(Pe.M())), Pe.sm_mbf;
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Pe.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Pe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Pe();
          return Pe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Pe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Pe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameAchievements_Request";
        }
      }
      class Ue extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.achievements || n.Sg(Ue.M()),
            a.Message.initialize(this, e, 0, -1, [1, 3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  achievements: { n: 1, c: Ce, r: !0, q: !0 },
                  schema_version: {
                    n: 2,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  groups: { n: 3, c: xe, r: !0, q: !0 },
                  schema_hash: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = n.w0(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Ue.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Ue();
          return Ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Ue.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Ue.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameAchievements_Response";
        }
      }
      class Ce extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.internal_name || n.Sg(Ce.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: {
                  internal_name: {
                    n: 1,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  localized_name: {
                    n: 2,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  localized_desc: {
                    n: 3,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  icon: { n: 4, br: n.qM.readString, bw: n.gp.writeString },
                  icon_gray: {
                    n: 5,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  hidden: { n: 6, br: n.qM.readBool, bw: n.gp.writeBool },
                  player_percent_unlocked: {
                    n: 7,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  internal_key: {
                    n: 8,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  min_progress_int: {
                    n: 9,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  max_progress_int: {
                    n: 10,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  groupid: { n: 11, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  archived: { n: 12, br: n.qM.readBool, bw: n.gp.writeBool },
                  progress_type: {
                    n: 13,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  min_progress_float: {
                    n: 14,
                    br: n.qM.readFloat,
                    bw: n.gp.writeFloat,
                  },
                  max_progress_float: {
                    n: 15,
                    br: n.qM.readFloat,
                    bw: n.gp.writeFloat,
                  },
                },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = n.w0(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Ce.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Ce();
          return Ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Ce.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Ce.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameAchievements_Response_Achievement";
        }
      }
      class xe extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.groupid || n.Sg(xe.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  groupid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  localized_name: {
                    n: 2,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  dlcappid: { n: 3, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  archived: { n: 4, br: n.qM.readBool, bw: n.gp.writeBool },
                  developeronly: {
                    n: 5,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  order: { n: 6, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  ispublic: { n: 7, br: n.qM.readBool, bw: n.gp.writeBool },
                  total_achievements: {
                    n: 8,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  completion_achievements: {
                    n: 9,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = n.w0(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(xe.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(xe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new xe();
          return xe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(xe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(xe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameAchievements_Response_Group";
        }
      }
      class Ge extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ge.prototype.steamid || n.Sg(Ge.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ge.sm_m ||
              (Ge.sm_m = {
                proto: Ge,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  appid: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            Ge.sm_m
          );
        }
        static MBF() {
          return Ge.sm_mbf || (Ge.sm_mbf = n.w0(Ge.M())), Ge.sm_mbf;
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Ge.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Ge.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Ge();
          return Ge.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Ge.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Ge.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetUserAchievements_Request";
        }
      }
      class Ne extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ne.prototype.achievements || n.Sg(Ne.M()),
            a.Message.initialize(this, e, 0, -1, [1, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: {
                  achievements: { n: 1, c: ke, r: !0, q: !0 },
                  schema_version: {
                    n: 2,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  schema_hash: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  groups: { n: 4, c: Ae, r: !0, q: !0 },
                },
              }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = n.w0(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Ne.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Ne();
          return Ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Ne.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Ne.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetUserAchievements_Response";
        }
      }
      class ke extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ke.prototype.internal_key || n.Sg(ke.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = {
                proto: ke,
                fields: {
                  internal_key: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  unlocked: { n: 2, br: n.qM.readBool, bw: n.gp.writeBool },
                  unlock_time: {
                    n: 3,
                    br: n.qM.readFixed32,
                    bw: n.gp.writeFixed32,
                  },
                  progress_int: {
                    n: 4,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  progress_float: {
                    n: 5,
                    br: n.qM.readFloat,
                    bw: n.gp.writeFloat,
                  },
                },
              }),
            ke.sm_m
          );
        }
        static MBF() {
          return ke.sm_mbf || (ke.sm_mbf = n.w0(ke.M())), ke.sm_mbf;
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(ke.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(ke.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new ke();
          return ke.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(ke.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(ke.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetUserAchievements_Response_Achievement";
        }
      }
      class Ae extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ae.prototype.groupid || n.Sg(Ae.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ae.sm_m ||
              (Ae.sm_m = {
                proto: Ae,
                fields: {
                  groupid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  is_achievable: {
                    n: 2,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  completed_achievements: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  is_completed: { n: 4, br: n.qM.readBool, bw: n.gp.writeBool },
                },
              }),
            Ae.sm_m
          );
        }
        static MBF() {
          return Ae.sm_mbf || (Ae.sm_mbf = n.w0(Ae.M())), Ae.sm_mbf;
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Ae.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Ae.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Ae();
          return Ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetUserAchievements_Response_Group";
        }
      }
      class Ee extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ee.prototype.appid || n.Sg(Ee.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = n.w0(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Ee.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Ee();
          return Ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Ee.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Ee.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGlobalAchievementPercentages_Request";
        }
      }
      class Le extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Le.prototype.achievements || n.Sg(Le.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Le.sm_m ||
              (Le.sm_m = {
                proto: Le,
                fields: { achievements: { n: 1, c: De, r: !0, q: !0 } },
              }),
            Le.sm_m
          );
        }
        static MBF() {
          return Le.sm_mbf || (Le.sm_mbf = n.w0(Le.M())), Le.sm_mbf;
        }
        toObject(e = !1) {
          return Le.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Le.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Le.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Le();
          return Le.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Le.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Le.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGlobalAchievementPercentages_Response";
        }
      }
      class De extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            De.prototype.internal_key || n.Sg(De.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            De.sm_m ||
              (De.sm_m = {
                proto: De,
                fields: {
                  internal_key: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  player_percent_unlocked: {
                    n: 2,
                    br: n.qM.readFloat,
                    bw: n.gp.writeFloat,
                  },
                },
              }),
            De.sm_m
          );
        }
        static MBF() {
          return De.sm_mbf || (De.sm_mbf = n.w0(De.M())), De.sm_mbf;
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(De.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(De.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new De();
          return De.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(De.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(De.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGlobalAchievementPercentages_Response_Achievement";
        }
      }
      class Ke extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ke.prototype.steamid || n.Sg(Ke.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ke.sm_m ||
              (Ke.sm_m = {
                proto: Ke,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                },
              }),
            Ke.sm_m
          );
        }
        static MBF() {
          return Ke.sm_mbf || (Ke.sm_mbf = n.w0(Ke.M())), Ke.sm_mbf;
        }
        toObject(e = !1) {
          return Ke.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Ke.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Ke.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Ke();
          return Ke.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Ke.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Ke.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFavoriteBadge_Request";
        }
      }
      class $e extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $e.prototype.has_favorite_badge || n.Sg($e.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $e.sm_m ||
              ($e.sm_m = {
                proto: $e,
                fields: {
                  has_favorite_badge: {
                    n: 1,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  badgeid: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  communityitemid: {
                    n: 3,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  item_type: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  border_color: {
                    n: 5,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  appid: { n: 6, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  level: { n: 7, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            $e.sm_m
          );
        }
        static MBF() {
          return $e.sm_mbf || ($e.sm_mbf = n.w0($e.M())), $e.sm_mbf;
        }
        toObject(e = !1) {
          return $e.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT($e.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq($e.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new $e();
          return $e.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj($e.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0($e.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return $e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFavoriteBadge_Response";
        }
      }
      class He extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            He.prototype.communityitemid || n.Sg(He.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            He.sm_m ||
              (He.sm_m = {
                proto: He,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  badgeid: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            He.sm_m
          );
        }
        static MBF() {
          return He.sm_mbf || (He.sm_mbf = n.w0(He.M())), He.sm_mbf;
        }
        toObject(e = !1) {
          return He.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(He.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(He.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new He();
          return He.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(He.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(He.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return He.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetFavoriteBadge_Request";
        }
      }
      class Qe extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Qe.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Qe();
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Qe();
          return Qe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetFavoriteBadge_Response";
        }
      }
      class Ve extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ve.prototype.slot || n.Sg(Ve.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ve.sm_m ||
              (Ve.sm_m = {
                proto: Ve,
                fields: {
                  slot: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  appid: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  publishedfileid: {
                    n: 3,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  item_assetid: {
                    n: 4,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  item_contextid: {
                    n: 5,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  notes: { n: 6, br: n.qM.readString, bw: n.gp.writeString },
                  title: { n: 7, br: n.qM.readString, bw: n.gp.writeString },
                  accountid: {
                    n: 8,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  badgeid: { n: 9, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                  border_color: {
                    n: 10,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  item_classid: {
                    n: 11,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  item_instanceid: {
                    n: 12,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  ban_check_result: {
                    n: 13,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  replay_year: {
                    n: 14,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            Ve.sm_m
          );
        }
        static MBF() {
          return Ve.sm_mbf || (Ve.sm_mbf = n.w0(Ve.M())), Ve.sm_mbf;
        }
        toObject(e = !1) {
          return Ve.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Ve.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Ve.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Ve();
          return Ve.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Ve.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Ve.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileCustomizationSlot";
        }
      }
      class Je extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Je.prototype.customization_type || n.Sg(Je.M()),
            a.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Je.sm_m ||
              (Je.sm_m = {
                proto: Je,
                fields: {
                  customization_type: {
                    n: 1,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  large: { n: 2, br: n.qM.readBool, bw: n.gp.writeBool },
                  slots: { n: 3, c: Ve, r: !0, q: !0 },
                  active: { n: 4, br: n.qM.readBool, bw: n.gp.writeBool },
                  customization_style: {
                    n: 5,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  purchaseid: {
                    n: 6,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  level: { n: 7, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            Je.sm_m
          );
        }
        static MBF() {
          return Je.sm_mbf || (Je.sm_mbf = n.w0(Je.M())), Je.sm_mbf;
        }
        toObject(e = !1) {
          return Je.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Je.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Je.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Je();
          return Je.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Je.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Je.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileCustomization";
        }
      }
      class Xe extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Xe.prototype.theme_id || n.Sg(Xe.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Xe.sm_m ||
              (Xe.sm_m = {
                proto: Xe,
                fields: {
                  theme_id: { n: 1, br: n.qM.readString, bw: n.gp.writeString },
                  title: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                },
              }),
            Xe.sm_m
          );
        }
        static MBF() {
          return Xe.sm_mbf || (Xe.sm_mbf = n.w0(Xe.M())), Xe.sm_mbf;
        }
        toObject(e = !1) {
          return Xe.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Xe.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Xe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Xe();
          return Xe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Xe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Xe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileTheme";
        }
      }
      class Ye extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ye.prototype.hide_profile_awards || n.Sg(Ye.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ye.sm_m ||
              (Ye.sm_m = {
                proto: Ye,
                fields: {
                  hide_profile_awards: {
                    n: 1,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            Ye.sm_m
          );
        }
        static MBF() {
          return Ye.sm_mbf || (Ye.sm_mbf = n.w0(Ye.M())), Ye.sm_mbf;
        }
        toObject(e = !1) {
          return Ye.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Ye.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Ye.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Ye();
          return Ye.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Ye.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Ye.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfilePreferences";
        }
      }
      class Ze extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ze.prototype.steamid || n.Sg(Ze.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ze.sm_m ||
              (Ze.sm_m = {
                proto: Ze,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  include_inactive_customizations: {
                    n: 2,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  include_purchased_customizations: {
                    n: 3,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            Ze.sm_m
          );
        }
        static MBF() {
          return Ze.sm_mbf || (Ze.sm_mbf = n.w0(Ze.M())), Ze.sm_mbf;
        }
        toObject(e = !1) {
          return Ze.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Ze.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Ze.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Ze();
          return Ze.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Ze.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Ze.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileCustomization_Request";
        }
      }
      class er extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            er.prototype.customizations || n.Sg(er.M()),
            a.Message.initialize(this, e, 0, -1, [1, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            er.sm_m ||
              (er.sm_m = {
                proto: er,
                fields: {
                  customizations: { n: 1, c: Je, r: !0, q: !0 },
                  slots_available: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  profile_theme: { n: 3, c: Xe },
                  purchased_customizations: { n: 4, c: rr, r: !0, q: !0 },
                  profile_preferences: { n: 5, c: Ye },
                },
              }),
            er.sm_m
          );
        }
        static MBF() {
          return er.sm_mbf || (er.sm_mbf = n.w0(er.M())), er.sm_mbf;
        }
        toObject(e = !1) {
          return er.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(er.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(er.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new er();
          return er.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(er.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return er.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(er.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return er.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileCustomization_Response";
        }
      }
      class rr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            rr.prototype.purchaseid || n.Sg(rr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            rr.sm_m ||
              (rr.sm_m = {
                proto: rr,
                fields: {
                  purchaseid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  customization_type: {
                    n: 2,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  level: { n: 3, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            rr.sm_m
          );
        }
        static MBF() {
          return rr.sm_mbf || (rr.sm_mbf = n.w0(rr.M())), rr.sm_mbf;
        }
        toObject(e = !1) {
          return rr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(rr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(rr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new rr();
          return rr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(rr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return rr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(rr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return rr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileCustomization_Response_PurchasedCustomization";
        }
      }
      class tr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            tr.prototype.steamid || n.Sg(tr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            tr.sm_m ||
              (tr.sm_m = {
                proto: tr,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                },
              }),
            tr.sm_m
          );
        }
        static MBF() {
          return tr.sm_mbf || (tr.sm_mbf = n.w0(tr.M())), tr.sm_mbf;
        }
        toObject(e = !1) {
          return tr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(tr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(tr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new tr();
          return tr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(tr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return tr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(tr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return tr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Request";
        }
      }
      class ir extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ir.prototype.purchased_customizations || n.Sg(ir.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ir.sm_m ||
              (ir.sm_m = {
                proto: ir,
                fields: {
                  purchased_customizations: { n: 1, c: ar, r: !0, q: !0 },
                },
              }),
            ir.sm_m
          );
        }
        static MBF() {
          return ir.sm_mbf || (ir.sm_mbf = n.w0(ir.M())), ir.sm_mbf;
        }
        toObject(e = !1) {
          return ir.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(ir.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(ir.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new ir();
          return ir.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(ir.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ir.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(ir.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ir.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Response";
        }
      }
      class ar extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ar.prototype.purchaseid || n.Sg(ar.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ar.sm_m ||
              (ar.sm_m = {
                proto: ar,
                fields: {
                  purchaseid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  customization_type: {
                    n: 2,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                },
              }),
            ar.sm_m
          );
        }
        static MBF() {
          return ar.sm_mbf || (ar.sm_mbf = n.w0(ar.M())), ar.sm_mbf;
        }
        toObject(e = !1) {
          return ar.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(ar.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(ar.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new ar();
          return ar.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(ar.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ar.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(ar.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ar.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Response_PurchasedCustomization";
        }
      }
      class sr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            sr.prototype.steamid || n.Sg(sr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            sr.sm_m ||
              (sr.sm_m = {
                proto: sr,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                },
              }),
            sr.sm_m
          );
        }
        static MBF() {
          return sr.sm_mbf || (sr.sm_mbf = n.w0(sr.M())), sr.sm_mbf;
        }
        toObject(e = !1) {
          return sr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(sr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(sr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new sr();
          return sr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(sr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return sr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(sr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return sr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request";
        }
      }
      class nr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            nr.prototype.purchased_customizations || n.Sg(nr.M()),
            a.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            nr.sm_m ||
              (nr.sm_m = {
                proto: nr,
                fields: {
                  purchased_customizations: { n: 1, c: lr, r: !0, q: !0 },
                  upgraded_customizations: { n: 2, c: mr, r: !0, q: !0 },
                },
              }),
            nr.sm_m
          );
        }
        static MBF() {
          return nr.sm_mbf || (nr.sm_mbf = n.w0(nr.M())), nr.sm_mbf;
        }
        toObject(e = !1) {
          return nr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(nr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(nr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new nr();
          return nr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(nr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return nr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(nr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return nr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response";
        }
      }
      class lr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            lr.prototype.customization_type || n.Sg(lr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            lr.sm_m ||
              (lr.sm_m = {
                proto: lr,
                fields: {
                  customization_type: {
                    n: 1,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  count: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            lr.sm_m
          );
        }
        static MBF() {
          return lr.sm_mbf || (lr.sm_mbf = n.w0(lr.M())), lr.sm_mbf;
        }
        toObject(e = !1) {
          return lr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(lr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(lr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new lr();
          return lr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(lr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return lr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(lr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return lr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_PurchasedCustomization";
        }
      }
      class mr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            mr.prototype.customization_type || n.Sg(mr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            mr.sm_m ||
              (mr.sm_m = {
                proto: mr,
                fields: {
                  customization_type: {
                    n: 1,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  level: { n: 2, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            mr.sm_m
          );
        }
        static MBF() {
          return mr.sm_mbf || (mr.sm_mbf = n.w0(mr.M())), mr.sm_mbf;
        }
        toObject(e = !1) {
          return mr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(mr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(mr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new mr();
          return mr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(mr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return mr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(mr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return mr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_UpgradedCustomization";
        }
      }
      class cr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return cr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new cr();
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new cr();
          return cr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return cr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return cr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileThemesAvailable_Request";
        }
      }
      class or extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            or.prototype.profile_themes || n.Sg(or.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            or.sm_m ||
              (or.sm_m = {
                proto: or,
                fields: { profile_themes: { n: 1, c: Xe, r: !0, q: !0 } },
              }),
            or.sm_m
          );
        }
        static MBF() {
          return or.sm_mbf || (or.sm_mbf = n.w0(or.M())), or.sm_mbf;
        }
        toObject(e = !1) {
          return or.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(or.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(or.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new or();
          return or.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(or.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return or.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(or.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return or.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileThemesAvailable_Response";
        }
      }
      class ur extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ur.prototype.theme_id || n.Sg(ur.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ur.sm_m ||
              (ur.sm_m = {
                proto: ur,
                fields: {
                  theme_id: { n: 1, br: n.qM.readString, bw: n.gp.writeString },
                },
              }),
            ur.sm_m
          );
        }
        static MBF() {
          return ur.sm_mbf || (ur.sm_mbf = n.w0(ur.M())), ur.sm_mbf;
        }
        toObject(e = !1) {
          return ur.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(ur.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(ur.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new ur();
          return ur.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(ur.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return ur.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(ur.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return ur.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileTheme_Request";
        }
      }
      class Br extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Br.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Br();
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Br();
          return Br.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Br.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Br.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileTheme_Response";
        }
      }
      class dr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            dr.prototype.profile_preferences || n.Sg(dr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            dr.sm_m ||
              (dr.sm_m = {
                proto: dr,
                fields: { profile_preferences: { n: 1, c: Ye } },
              }),
            dr.sm_m
          );
        }
        static MBF() {
          return dr.sm_mbf || (dr.sm_mbf = n.w0(dr.M())), dr.sm_mbf;
        }
        toObject(e = !1) {
          return dr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(dr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(dr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new dr();
          return dr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(dr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return dr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(dr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return dr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfilePreferences_Request";
        }
      }
      class gr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return gr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new gr();
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new gr();
          return gr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return gr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return gr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfilePreferences_Response";
        }
      }
      class yr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            yr.prototype.appid || n.Sg(yr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            yr.sm_m ||
              (yr.sm_m = {
                proto: yr,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            yr.sm_m
          );
        }
        static MBF() {
          return yr.sm_mbf || (yr.sm_mbf = n.w0(yr.M())), yr.sm_mbf;
        }
        toObject(e = !1) {
          return yr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(yr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(yr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new yr();
          return yr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(yr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return yr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(yr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return yr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Request";
        }
      }
      class br extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            br.prototype.your_info || n.Sg(br.M()),
            a.Message.initialize(this, e, 0, -1, [2, 3, 4, 5, 6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            br.sm_m ||
              (br.sm_m = {
                proto: br,
                fields: {
                  your_info: { n: 1, c: _r },
                  in_game: { n: 2, c: Mr, r: !0, q: !0 },
                  played_recently: { n: 3, c: Mr, r: !0, q: !0 },
                  played_ever: { n: 4, c: Mr, r: !0, q: !0 },
                  owns: { n: 5, c: Mr, r: !0, q: !0 },
                  in_wishlist: { n: 6, c: Mr, r: !0, q: !0 },
                },
              }),
            br.sm_m
          );
        }
        static MBF() {
          return br.sm_mbf || (br.sm_mbf = n.w0(br.M())), br.sm_mbf;
        }
        toObject(e = !1) {
          return br.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(br.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(br.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new br();
          return br.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(br.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return br.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(br.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return br.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response";
        }
      }
      class Mr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Mr.prototype.steamid || n.Sg(Mr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Mr.sm_m ||
              (Mr.sm_m = {
                proto: Mr,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  minutes_played: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  minutes_played_forever: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            Mr.sm_m
          );
        }
        static MBF() {
          return Mr.sm_mbf || (Mr.sm_mbf = n.w0(Mr.M())), Mr.sm_mbf;
        }
        toObject(e = !1) {
          return Mr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Mr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Mr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Mr();
          return Mr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Mr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Mr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Mr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Mr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo";
        }
      }
      class _r extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _r.prototype.steamid || n.Sg(_r.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _r.sm_m ||
              (_r.sm_m = {
                proto: _r,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  minutes_played: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  minutes_played_forever: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  in_wishlist: { n: 4, br: n.qM.readBool, bw: n.gp.writeBool },
                  owned: { n: 5, br: n.qM.readBool, bw: n.gp.writeBool },
                },
              }),
            _r.sm_m
          );
        }
        static MBF() {
          return _r.sm_mbf || (_r.sm_mbf = n.w0(_r.M())), _r.sm_mbf;
        }
        toObject(e = !1) {
          return _r.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(_r.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(_r.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new _r();
          return _r.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(_r.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return _r.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(_r.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return _r.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response_OwnGameplayInfo";
        }
      }
      class zr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return zr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new zr();
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new zr();
          return zr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return zr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return zr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTimeSSAAccepted_Request";
        }
      }
      class fr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fr.prototype.time_ssa_accepted || n.Sg(fr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fr.sm_m ||
              (fr.sm_m = {
                proto: fr,
                fields: {
                  time_ssa_accepted: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  time_ssa_updated: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  time_chinassa_accepted: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            fr.sm_m
          );
        }
        static MBF() {
          return fr.sm_mbf || (fr.sm_mbf = n.w0(fr.M())), fr.sm_mbf;
        }
        toObject(e = !1) {
          return fr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(fr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(fr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new fr();
          return fr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(fr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return fr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(fr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return fr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTimeSSAAccepted_Response";
        }
      }
      class wr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            wr.prototype.agreement_type || n.Sg(wr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            wr.sm_m ||
              (wr.sm_m = {
                proto: wr,
                fields: {
                  agreement_type: {
                    n: 1,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  time_signed_utc: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            wr.sm_m
          );
        }
        static MBF() {
          return wr.sm_mbf || (wr.sm_mbf = n.w0(wr.M())), wr.sm_mbf;
        }
        toObject(e = !1) {
          return wr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(wr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(wr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new wr();
          return wr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(wr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return wr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(wr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return wr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AcceptSSA_Request";
        }
      }
      class pr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return pr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new pr();
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new pr();
          return pr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return pr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return pr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AcceptSSA_Response";
        }
      }
      class Sr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Sr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Sr();
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Sr();
          return Sr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Sr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Sr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Request";
        }
      }
      class Rr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Rr.prototype.nicknames || n.Sg(Rr.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Rr.sm_m ||
              (Rr.sm_m = {
                proto: Rr,
                fields: { nicknames: { n: 1, c: hr, r: !0, q: !0 } },
              }),
            Rr.sm_m
          );
        }
        static MBF() {
          return Rr.sm_mbf || (Rr.sm_mbf = n.w0(Rr.M())), Rr.sm_mbf;
        }
        toObject(e = !1) {
          return Rr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Rr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Rr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Rr();
          return Rr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Rr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Rr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Rr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Rr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Response";
        }
      }
      class hr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            hr.prototype.accountid || n.Sg(hr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            hr.sm_m ||
              (hr.sm_m = {
                proto: hr,
                fields: {
                  accountid: {
                    n: 1,
                    br: n.qM.readFixed32,
                    bw: n.gp.writeFixed32,
                  },
                  nickname: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                },
              }),
            hr.sm_m
          );
        }
        static MBF() {
          return hr.sm_mbf || (hr.sm_mbf = n.w0(hr.M())), hr.sm_mbf;
        }
        toObject(e = !1) {
          return hr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(hr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(hr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new hr();
          return hr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(hr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return hr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(hr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return hr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Response_PlayerNickname";
        }
      }
      class Wr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Wr.prototype.accountid || n.Sg(Wr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Wr.sm_m ||
              (Wr.sm_m = {
                proto: Wr,
                fields: {
                  accountid: {
                    n: 1,
                    br: n.qM.readFixed32,
                    bw: n.gp.writeFixed32,
                  },
                  nickname: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                  notifications_showingame: {
                    n: 3,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  notifications_showonline: {
                    n: 4,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  notifications_showmessages: {
                    n: 5,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  sounds_showingame: {
                    n: 6,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  sounds_showonline: {
                    n: 7,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  sounds_showmessages: {
                    n: 8,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  notifications_sendmobile: {
                    n: 9,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                },
              }),
            Wr.sm_m
          );
        }
        static MBF() {
          return Wr.sm_mbf || (Wr.sm_mbf = n.w0(Wr.M())), Wr.sm_mbf;
        }
        toObject(e = !1) {
          return Wr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Wr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Wr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Wr();
          return Wr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Wr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Wr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Wr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Wr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "PerFriendPreferences";
        }
      }
      class jr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return jr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new jr();
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new jr();
          return jr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return jr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return jr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPerFriendPreferences_Request";
        }
      }
      class Fr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fr.prototype.preferences || n.Sg(Fr.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Fr.sm_m ||
              (Fr.sm_m = {
                proto: Fr,
                fields: { preferences: { n: 1, c: Wr, r: !0, q: !0 } },
              }),
            Fr.sm_m
          );
        }
        static MBF() {
          return Fr.sm_mbf || (Fr.sm_mbf = n.w0(Fr.M())), Fr.sm_mbf;
        }
        toObject(e = !1) {
          return Fr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Fr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Fr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Fr();
          return Fr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Fr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Fr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Fr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Fr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPerFriendPreferences_Response";
        }
      }
      class vr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            vr.prototype.preferences || n.Sg(vr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            vr.sm_m ||
              (vr.sm_m = {
                proto: vr,
                fields: { preferences: { n: 1, c: Wr } },
              }),
            vr.sm_m
          );
        }
        static MBF() {
          return vr.sm_mbf || (vr.sm_mbf = n.w0(vr.M())), vr.sm_mbf;
        }
        toObject(e = !1) {
          return vr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(vr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(vr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new vr();
          return vr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(vr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return vr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(vr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return vr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetPerFriendPreferences_Request";
        }
      }
      class qr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return qr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new qr();
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new qr();
          return qr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return qr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return qr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetPerFriendPreferences_Response";
        }
      }
      class Tr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Tr.prototype.steamid || n.Sg(Tr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Tr.sm_m ||
              (Tr.sm_m = {
                proto: Tr,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                },
              }),
            Tr.sm_m
          );
        }
        static MBF() {
          return Tr.sm_mbf || (Tr.sm_mbf = n.w0(Tr.M())), Tr.sm_mbf;
        }
        toObject(e = !1) {
          return Tr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Tr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Tr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Tr();
          return Tr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Tr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Tr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Tr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Tr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AddFriend_Request";
        }
      }
      class Or extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Or.prototype.invite_sent || n.Sg(Or.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Or.sm_m ||
              (Or.sm_m = {
                proto: Or,
                fields: {
                  invite_sent: { n: 1, br: n.qM.readBool, bw: n.gp.writeBool },
                  friend_relationship: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  result: { n: 3, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                },
              }),
            Or.sm_m
          );
        }
        static MBF() {
          return Or.sm_mbf || (Or.sm_mbf = n.w0(Or.M())), Or.sm_mbf;
        }
        toObject(e = !1) {
          return Or.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Or.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Or.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Or();
          return Or.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Or.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Or.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Or.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Or.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AddFriend_Response";
        }
      }
      class Ir extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ir.prototype.steamid || n.Sg(Ir.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ir.sm_m ||
              (Ir.sm_m = {
                proto: Ir,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                },
              }),
            Ir.sm_m
          );
        }
        static MBF() {
          return Ir.sm_mbf || (Ir.sm_mbf = n.w0(Ir.M())), Ir.sm_mbf;
        }
        toObject(e = !1) {
          return Ir.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Ir.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Ir.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Ir();
          return Ir.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Ir.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Ir.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Ir.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Ir.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RemoveFriend_Request";
        }
      }
      class Pr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pr.prototype.friend_relationship || n.Sg(Pr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Pr.sm_m ||
              (Pr.sm_m = {
                proto: Pr,
                fields: {
                  friend_relationship: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            Pr.sm_m
          );
        }
        static MBF() {
          return Pr.sm_mbf || (Pr.sm_mbf = n.w0(Pr.M())), Pr.sm_mbf;
        }
        toObject(e = !1) {
          return Pr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Pr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Pr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Pr();
          return Pr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Pr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Pr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Pr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Pr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RemoveFriend_Response";
        }
      }
      class Ur extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ur.prototype.steamid || n.Sg(Ur.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ur.sm_m ||
              (Ur.sm_m = {
                proto: Ur,
                fields: {
                  steamid: {
                    n: 1,
                    br: n.qM.readFixed64String,
                    bw: n.gp.writeFixed64String,
                  },
                  unignore: { n: 2, br: n.qM.readBool, bw: n.gp.writeBool },
                },
              }),
            Ur.sm_m
          );
        }
        static MBF() {
          return Ur.sm_mbf || (Ur.sm_mbf = n.w0(Ur.M())), Ur.sm_mbf;
        }
        toObject(e = !1) {
          return Ur.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Ur.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Ur.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Ur();
          return Ur.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Ur.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Ur.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Ur.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Ur.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IgnoreFriend_Request";
        }
      }
      class Cr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Cr.prototype.friend_relationship || n.Sg(Cr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Cr.sm_m ||
              (Cr.sm_m = {
                proto: Cr,
                fields: {
                  friend_relationship: {
                    n: 1,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            Cr.sm_m
          );
        }
        static MBF() {
          return Cr.sm_mbf || (Cr.sm_mbf = n.w0(Cr.M())), Cr.sm_mbf;
        }
        toObject(e = !1) {
          return Cr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Cr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Cr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Cr();
          return Cr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Cr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Cr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Cr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Cr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IgnoreFriend_Response";
        }
      }
      class xr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xr.prototype.parenthesize_nicknames || n.Sg(xr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xr.sm_m ||
              (xr.sm_m = {
                proto: xr,
                fields: {
                  parenthesize_nicknames: {
                    n: 4,
                    d: !1,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  text_filter_setting: {
                    n: 5,
                    br: n.qM.readEnum,
                    bw: n.gp.writeEnum,
                  },
                  text_filter_ignore_friends: {
                    n: 6,
                    d: !0,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  text_filter_words_revision: {
                    n: 7,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  timestamp_updated: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            xr.sm_m
          );
        }
        static MBF() {
          return xr.sm_mbf || (xr.sm_mbf = n.w0(xr.M())), xr.sm_mbf;
        }
        toObject(e = !1) {
          return xr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(xr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(xr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new xr();
          return xr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(xr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return xr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(xr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return xr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_CommunityPreferences";
        }
      }
      class Gr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Gr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Gr();
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Gr();
          return Gr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Gr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Gr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityPreferences_Request";
        }
      }
      class Nr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Nr.prototype.preferences || n.Sg(Nr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Nr.sm_m ||
              (Nr.sm_m = {
                proto: Nr,
                fields: {
                  preferences: { n: 1, c: xr },
                  content_descriptor_preferences: { n: 2, c: m.u2 },
                },
              }),
            Nr.sm_m
          );
        }
        static MBF() {
          return Nr.sm_mbf || (Nr.sm_mbf = n.w0(Nr.M())), Nr.sm_mbf;
        }
        toObject(e = !1) {
          return Nr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Nr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Nr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Nr();
          return Nr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Nr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Nr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Nr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Nr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityPreferences_Response";
        }
      }
      class kr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            kr.prototype.preferences || n.Sg(kr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            kr.sm_m ||
              (kr.sm_m = {
                proto: kr,
                fields: { preferences: { n: 1, c: xr } },
              }),
            kr.sm_m
          );
        }
        static MBF() {
          return kr.sm_mbf || (kr.sm_mbf = n.w0(kr.M())), kr.sm_mbf;
        }
        toObject(e = !1) {
          return kr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(kr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(kr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new kr();
          return kr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(kr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return kr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(kr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return kr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetCommunityPreferences_Request";
        }
      }
      class Ar extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ar.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Ar();
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Ar();
          return Ar.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Ar.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Ar.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetCommunityPreferences_Response";
        }
      }
      class Er extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Er.prototype.text_filter_custom_banned_words || n.Sg(Er.M()),
            a.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Er.sm_m ||
              (Er.sm_m = {
                proto: Er,
                fields: {
                  text_filter_custom_banned_words: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: n.qM.readString,
                    bw: n.gp.writeRepeatedString,
                  },
                  text_filter_custom_clean_words: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: n.qM.readString,
                    bw: n.gp.writeRepeatedString,
                  },
                  text_filter_words_revision: {
                    n: 3,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            Er.sm_m
          );
        }
        static MBF() {
          return Er.sm_mbf || (Er.sm_mbf = n.w0(Er.M())), Er.sm_mbf;
        }
        toObject(e = !1) {
          return Er.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Er.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Er.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Er();
          return Er.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Er.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Er.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Er.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Er.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_TextFilterWords";
        }
      }
      class Lr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Lr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Lr();
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Lr();
          return Lr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Lr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Lr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTextFilterWords_Request";
        }
      }
      class Dr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Dr.prototype.words || n.Sg(Dr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Dr.sm_m ||
              (Dr.sm_m = { proto: Dr, fields: { words: { n: 1, c: Er } } }),
            Dr.sm_m
          );
        }
        static MBF() {
          return Dr.sm_mbf || (Dr.sm_mbf = n.w0(Dr.M())), Dr.sm_mbf;
        }
        toObject(e = !1) {
          return Dr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Dr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Dr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Dr();
          return Dr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Dr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Dr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Dr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Dr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTextFilterWords_Response";
        }
      }
      class Kr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Kr.prototype.language || n.Sg(Kr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Kr.sm_m ||
              (Kr.sm_m = {
                proto: Kr,
                fields: {
                  language: { n: 1, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                },
              }),
            Kr.sm_m
          );
        }
        static MBF() {
          return Kr.sm_mbf || (Kr.sm_mbf = n.w0(Kr.M())), Kr.sm_mbf;
        }
        toObject(e = !1) {
          return Kr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Kr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Kr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Kr();
          return Kr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Kr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Kr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Kr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Kr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNewSteamAnnouncementState_Request";
        }
      }
      class $r extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $r.prototype.state || n.Sg($r.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $r.sm_m ||
              ($r.sm_m = {
                proto: $r,
                fields: {
                  state: { n: 1, br: n.qM.readEnum, bw: n.gp.writeEnum },
                  announcement_headline: {
                    n: 2,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  announcement_url: {
                    n: 3,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  time_posted: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  announcement_gid: {
                    n: 5,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                },
              }),
            $r.sm_m
          );
        }
        static MBF() {
          return $r.sm_mbf || ($r.sm_mbf = n.w0($r.M())), $r.sm_mbf;
        }
        toObject(e = !1) {
          return $r.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT($r.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq($r.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new $r();
          return $r.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj($r.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return $r.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0($r.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return $r.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNewSteamAnnouncementState_Response";
        }
      }
      class Hr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Hr.prototype.announcement_gid || n.Sg(Hr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Hr.sm_m ||
              (Hr.sm_m = {
                proto: Hr,
                fields: {
                  announcement_gid: {
                    n: 1,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                  time_posted: {
                    n: 2,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                },
              }),
            Hr.sm_m
          );
        }
        static MBF() {
          return Hr.sm_mbf || (Hr.sm_mbf = n.w0(Hr.M())), Hr.sm_mbf;
        }
        toObject(e = !1) {
          return Hr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Hr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Hr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Hr();
          return Hr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Hr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Hr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Hr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Hr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_UpdateSteamAnnouncementLastRead_Request";
        }
      }
      class Qr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Qr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Qr();
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Qr();
          return Qr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Qr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Qr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_UpdateSteamAnnouncementLastRead_Response";
        }
      }
      class Vr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Vr.prototype.privacy_state || n.Sg(Vr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Vr.sm_m ||
              (Vr.sm_m = {
                proto: Vr,
                fields: {
                  privacy_state: {
                    n: 1,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  privacy_state_inventory: {
                    n: 2,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  privacy_state_gifts: {
                    n: 3,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  privacy_state_ownedgames: {
                    n: 4,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  privacy_state_playtime: {
                    n: 5,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  privacy_state_friendslist: {
                    n: 6,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                },
              }),
            Vr.sm_m
          );
        }
        static MBF() {
          return Vr.sm_mbf || (Vr.sm_mbf = n.w0(Vr.M())), Vr.sm_mbf;
        }
        toObject(e = !1) {
          return Vr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Vr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Vr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Vr();
          return Vr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Vr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Vr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Vr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Vr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPrivacySettings";
        }
      }
      class Jr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Jr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Jr();
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Jr();
          return Jr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Jr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Jr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPrivacySettings_Request";
        }
      }
      class Xr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Xr.prototype.privacy_settings || n.Sg(Xr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Xr.sm_m ||
              (Xr.sm_m = {
                proto: Xr,
                fields: { privacy_settings: { n: 1, c: Vr } },
              }),
            Xr.sm_m
          );
        }
        static MBF() {
          return Xr.sm_mbf || (Xr.sm_mbf = n.w0(Xr.M())), Xr.sm_mbf;
        }
        toObject(e = !1) {
          return Xr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Xr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Xr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Xr();
          return Xr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Xr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Xr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Xr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Xr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPrivacySettings_Response";
        }
      }
      class Yr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Yr.prototype.appid || n.Sg(Yr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Yr.sm_m ||
              (Yr.sm_m = {
                proto: Yr,
                fields: {
                  appid: { n: 1, br: n.qM.readUint32, bw: n.gp.writeUint32 },
                },
              }),
            Yr.sm_m
          );
        }
        static MBF() {
          return Yr.sm_mbf || (Yr.sm_mbf = n.w0(Yr.M())), Yr.sm_mbf;
        }
        toObject(e = !1) {
          return Yr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Yr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Yr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Yr();
          return Yr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Yr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Yr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Yr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Yr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetDurationControl_Request";
        }
      }
      class Zr extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Zr.prototype.is_enabled || n.Sg(Zr.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Zr.sm_m ||
              (Zr.sm_m = {
                proto: Zr,
                fields: {
                  is_enabled: { n: 1, br: n.qM.readBool, bw: n.gp.writeBool },
                  seconds: { n: 2, br: n.qM.readInt32, bw: n.gp.writeInt32 },
                  seconds_today: {
                    n: 3,
                    br: n.qM.readInt32,
                    bw: n.gp.writeInt32,
                  },
                  is_steamchina_account: {
                    n: 4,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  is_age_verified: {
                    n: 5,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  seconds_allowed_today: {
                    n: 6,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  age_verification_pending: {
                    n: 7,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                  block_minors: { n: 8, br: n.qM.readBool, bw: n.gp.writeBool },
                },
              }),
            Zr.sm_m
          );
        }
        static MBF() {
          return Zr.sm_mbf || (Zr.sm_mbf = n.w0(Zr.M())), Zr.sm_mbf;
        }
        toObject(e = !1) {
          return Zr.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(Zr.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(Zr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new Zr();
          return Zr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(Zr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return Zr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(Zr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return Zr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetDurationControl_Response";
        }
      }
      class et extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            et.prototype.games || n.Sg(et.M()),
            a.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            et.sm_m ||
              (et.sm_m = {
                proto: et,
                fields: { games: { n: 1, c: M, r: !0, q: !0 } },
              }),
            et.sm_m
          );
        }
        static MBF() {
          return et.sm_mbf || (et.sm_mbf = n.w0(et.M())), et.sm_mbf;
        }
        toObject(e = !1) {
          return et.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(et.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(et.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new et();
          return et.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(et.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(et.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return et.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_LastPlayedTimes_Notification";
        }
      }
      class rt extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            rt.prototype.accountid || n.Sg(rt.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            rt.sm_m ||
              (rt.sm_m = {
                proto: rt,
                fields: {
                  accountid: {
                    n: 1,
                    br: n.qM.readFixed32,
                    bw: n.gp.writeFixed32,
                  },
                  nickname: { n: 2, br: n.qM.readString, bw: n.gp.writeString },
                  is_echo_to_self: {
                    n: 3,
                    br: n.qM.readBool,
                    bw: n.gp.writeBool,
                  },
                },
              }),
            rt.sm_m
          );
        }
        static MBF() {
          return rt.sm_mbf || (rt.sm_mbf = n.w0(rt.M())), rt.sm_mbf;
        }
        toObject(e = !1) {
          return rt.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(rt.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(rt.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new rt();
          return rt.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(rt.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(rt.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return rt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_FriendNicknameChanged_Notification";
        }
      }
      class tt extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            tt.prototype.accountid || n.Sg(tt.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            tt.sm_m ||
              (tt.sm_m = {
                proto: tt,
                fields: {
                  accountid: {
                    n: 1,
                    br: n.qM.readFixed32,
                    bw: n.gp.writeFixed32,
                  },
                },
              }),
            tt.sm_m
          );
        }
        static MBF() {
          return tt.sm_mbf || (tt.sm_mbf = n.w0(tt.M())), tt.sm_mbf;
        }
        toObject(e = !1) {
          return tt.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(tt.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(tt.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new tt();
          return tt.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(tt.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(tt.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return tt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_FriendEquippedProfileItemsChanged_Notification";
        }
      }
      class it extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            it.prototype.state || n.Sg(it.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            it.sm_m ||
              (it.sm_m = {
                proto: it,
                fields: {
                  state: { n: 1, br: n.qM.readEnum, bw: n.gp.writeEnum },
                  announcement_headline: {
                    n: 2,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  announcement_url: {
                    n: 3,
                    br: n.qM.readString,
                    bw: n.gp.writeString,
                  },
                  time_posted: {
                    n: 4,
                    br: n.qM.readUint32,
                    bw: n.gp.writeUint32,
                  },
                  announcement_gid: {
                    n: 5,
                    br: n.qM.readUint64String,
                    bw: n.gp.writeUint64String,
                  },
                },
              }),
            it.sm_m
          );
        }
        static MBF() {
          return it.sm_mbf || (it.sm_mbf = n.w0(it.M())), it.sm_mbf;
        }
        toObject(e = !1) {
          return it.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(it.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(it.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new it();
          return it.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(it.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(it.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return it.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_NewSteamAnnouncementState_Notification";
        }
      }
      class at extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            at.prototype.preferences || n.Sg(at.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            at.sm_m ||
              (at.sm_m = {
                proto: at,
                fields: {
                  preferences: { n: 1, c: xr },
                  content_descriptor_preferences: { n: 2, c: m.u2 },
                },
              }),
            at.sm_m
          );
        }
        static MBF() {
          return at.sm_mbf || (at.sm_mbf = n.w0(at.M())), at.sm_mbf;
        }
        toObject(e = !1) {
          return at.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(at.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(at.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new at();
          return at.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(at.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return at.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(at.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return at.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_CommunityPreferencesChanged_Notification";
        }
      }
      class st extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            st.prototype.words || n.Sg(st.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            st.sm_m ||
              (st.sm_m = { proto: st, fields: { words: { n: 1, c: Er } } }),
            st.sm_m
          );
        }
        static MBF() {
          return st.sm_mbf || (st.sm_mbf = n.w0(st.M())), st.sm_mbf;
        }
        toObject(e = !1) {
          return st.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(st.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(st.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new st();
          return st.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(st.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return st.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(st.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return st.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_TextFilterWordsChanged_Notification";
        }
      }
      class nt extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            nt.prototype.accountid || n.Sg(nt.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            nt.sm_m ||
              (nt.sm_m = {
                proto: nt,
                fields: {
                  accountid: {
                    n: 1,
                    br: n.qM.readFixed32,
                    bw: n.gp.writeFixed32,
                  },
                  preferences: { n: 2, c: Wr },
                },
              }),
            nt.sm_m
          );
        }
        static MBF() {
          return nt.sm_mbf || (nt.sm_mbf = n.w0(nt.M())), nt.sm_mbf;
        }
        toObject(e = !1) {
          return nt.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(nt.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(nt.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new nt();
          return nt.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(nt.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(nt.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return nt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PerFriendPreferencesChanged_Notification";
        }
      }
      class lt extends a.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            lt.prototype.privacy_settings || n.Sg(lt.M()),
            a.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            lt.sm_m ||
              (lt.sm_m = {
                proto: lt,
                fields: { privacy_settings: { n: 1, c: Vr } },
              }),
            lt.sm_m
          );
        }
        static MBF() {
          return lt.sm_mbf || (lt.sm_mbf = n.w0(lt.M())), lt.sm_mbf;
        }
        toObject(e = !1) {
          return lt.toObject(e, this);
        }
        static toObject(e, r) {
          return n.BT(lt.M(), e, r);
        }
        static fromObject(e) {
          return n.Uq(lt.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (s().BinaryReader)(e),
            t = new lt();
          return lt.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return n.zj(lt.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (s().BinaryWriter)();
          return lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          n.i0(lt.M(), e, r);
        }
        serializeBase64String() {
          var e = new (s().BinaryWriter)();
          return lt.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PrivacySettingsChanged_Notification";
        }
      }
      var mt, ct;
      !(function (e) {
        (e.GetRecentPlaytimeSessionsForChild = function (e, r, t) {
          return e.SendMsg(
            "Player.GetRecentPlaytimeSessionsForChild#1",
            (0, l.I8)(B, r, t),
            d,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.GetPlayerLinkDetails = function (e, r, t) {
            return e.SendMsg(
              "Player.GetPlayerLinkDetails#1",
              (0, l.I8)(_, r, t),
              z,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetMutualFriendsForIncomingInvites = function (e, r, t) {
            return e.SendMsg(
              "Player.GetMutualFriendsForIncomingInvites#1",
              (0, l.I8)(S, r, t),
              h,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetOwnedGames = function (e, r, t) {
            return e.SendMsg("Player.GetOwnedGames#1", (0, l.I8)(W, r, t), j, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetPlayNext = function (e, r, t) {
            return e.SendMsg("Player.GetPlayNext#1", (0, l.I8)(v, r, t), q, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetFriendsGameplayInfo = function (e, r, t) {
            return e.SendMsg(
              "Player.GetFriendsGameplayInfo#1",
              (0, l.I8)(yr, r, t),
              br,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetGameBadgeLevels = function (e, r, t) {
            return e.SendMsg(
              "Player.GetGameBadgeLevels#1",
              (0, l.I8)(P, r, t),
              U,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetProfileBackground = function (e, r, t) {
            return e.SendMsg(
              "Player.GetProfileBackground#1",
              (0, l.I8)(N, r, t),
              k,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetProfileBackground = function (e, r, t) {
            return e.SendMsg(
              "Player.SetProfileBackground#1",
              (0, l.I8)(A, r, t),
              E,
              { ePrivilege: 1 },
            );
          }),
          (e.GetMiniProfileBackground = function (e, r, t) {
            return e.SendMsg(
              "Player.GetMiniProfileBackground#1",
              (0, l.I8)(L, r, t),
              D,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetMiniProfileBackground = function (e, r, t) {
            return e.SendMsg(
              "Player.SetMiniProfileBackground#1",
              (0, l.I8)(K, r, t),
              $,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAvatarFrame = function (e, r, t) {
            return e.SendMsg("Player.GetAvatarFrame#1", (0, l.I8)(H, r, t), Q, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.SetAvatarFrame = function (e, r, t) {
            return e.SendMsg("Player.SetAvatarFrame#1", (0, l.I8)(V, r, t), J, {
              ePrivilege: 1,
            });
          }),
          (e.GetAnimatedAvatar = function (e, r, t) {
            return e.SendMsg(
              "Player.GetAnimatedAvatar#1",
              (0, l.I8)(X, r, t),
              Y,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetAnimatedAvatar = function (e, r, t) {
            return e.SendMsg(
              "Player.SetAnimatedAvatar#1",
              (0, l.I8)(Z, r, t),
              ee,
              { ePrivilege: 1 },
            );
          }),
          (e.GetSteamDeckKeyboardSkin = function (e, r, t) {
            return e.SendMsg(
              "Player.GetSteamDeckKeyboardSkin#1",
              (0, l.I8)(re, r, t),
              te,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetSteamDeckKeyboardSkin = function (e, r, t) {
            return e.SendMsg(
              "Player.SetSteamDeckKeyboardSkin#1",
              (0, l.I8)(ie, r, t),
              ae,
              { ePrivilege: 1 },
            );
          }),
          (e.GetProfileItemsOwned = function (e, r, t) {
            return e.SendMsg(
              "Player.GetProfileItemsOwned#1",
              (0, l.I8)(se, r, t),
              ne,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetProfileItemsEquipped = function (e, r, t) {
            return e.SendMsg(
              "Player.GetProfileItemsEquipped#1",
              (0, l.I8)(le, r, t),
              me,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetEquippedProfileItemFlags = function (e, r, t) {
            return e.SendMsg(
              "Player.SetEquippedProfileItemFlags#1",
              (0, l.I8)(ce, r, t),
              oe,
              { ePrivilege: 1 },
            );
          }),
          (e.GetEmoticonList = function (e, r, t) {
            return e.SendMsg(
              "Player.GetEmoticonList#1",
              (0, l.I8)(ue, r, t),
              Be,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetCommunityBadgeProgress = function (e, r, t) {
            return e.SendMsg(
              "Player.GetCommunityBadgeProgress#1",
              (0, l.I8)(ge, r, t),
              ye,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetTopAchievementsForGames = function (e, r, t) {
            return e.SendMsg(
              "Player.GetTopAchievementsForGames#1",
              (0, l.I8)(Se, r, t),
              Re,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetAchievementsProgress = function (e, r, t) {
            return e.SendMsg(
              "Player.GetAchievementsProgress#1",
              (0, l.I8)(Te, r, t),
              Oe,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetGameAchievements = function (e, r, t) {
            return e.SendMsg(
              "Player.GetGameAchievements#1",
              (0, l.I8)(Pe, r, t),
              Ue,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetUserAchievements = function (e, r, t) {
            return e.SendMsg(
              "Player.GetUserAchievements#1",
              (0, l.I8)(Ge, r, t),
              Ne,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetGlobalAchievementPercentages = function (e, r, t) {
            return e.SendMsg(
              "Player.GetGlobalAchievementPercentages#1",
              (0, l.I8)(Ee, r, t),
              Le,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetUserStats = function (e, r, t) {
            return e.SendMsg("Player.GetUserStats#1", (0, l.I8)(je, r, t), Fe, {
              bConstMethod: !0,
              ePrivilege: 2,
            });
          }),
          (e.GetFavoriteBadge = function (e, r, t) {
            return e.SendMsg(
              "Player.GetFavoriteBadge#1",
              (0, l.I8)(Ke, r, t),
              $e,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetFavoriteBadge = function (e, r, t) {
            return e.SendMsg(
              "Player.SetFavoriteBadge#1",
              (0, l.I8)(He, r, t),
              Qe,
              { ePrivilege: 1 },
            );
          }),
          (e.GetProfileCustomization = function (e, r, t) {
            return e.SendMsg(
              "Player.GetProfileCustomization#1",
              (0, l.I8)(Ze, r, t),
              er,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetPurchasedProfileCustomizations = function (e, r, t) {
            return e.SendMsg(
              "Player.GetPurchasedProfileCustomizations#1",
              (0, l.I8)(tr, r, t),
              ir,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetPurchasedAndUpgradedProfileCustomizations = function (e, r, t) {
            return e.SendMsg(
              "Player.GetPurchasedAndUpgradedProfileCustomizations#1",
              (0, l.I8)(sr, r, t),
              nr,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetProfileThemesAvailable = function (e, r, t) {
            return e.SendMsg(
              "Player.GetProfileThemesAvailable#1",
              (0, l.I8)(cr, r, t),
              or,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetProfileTheme = function (e, r, t) {
            return e.SendMsg(
              "Player.SetProfileTheme#1",
              (0, l.I8)(ur, r, t),
              Br,
              { ePrivilege: 1 },
            );
          }),
          (e.SetProfilePreferences = function (e, r, t) {
            return e.SendMsg(
              "Player.SetProfilePreferences#1",
              (0, l.I8)(dr, r, t),
              gr,
              { ePrivilege: 1 },
            );
          }),
          (e.PostStatusToFriends = function (e, r, t) {
            return e.SendMsg(
              "Player.PostStatusToFriends#1",
              (0, l.I8)(Me, r, t),
              _e,
              { ePrivilege: 3 },
            );
          }),
          (e.GetPostedStatus = function (e, r, t) {
            return e.SendMsg(
              "Player.GetPostedStatus#1",
              (0, l.I8)(ze, r, t),
              fe,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.DeletePostedStatus = function (e, r, t) {
            return e.SendMsg(
              "Player.DeletePostedStatus#1",
              (0, l.I8)(we, r, t),
              pe,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientGetLastPlayedTimes = function (e, r, t) {
            return e.SendMsg(
              "Player.ClientGetLastPlayedTimes#1",
              (0, l.I8)(y, r, t),
              b,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetTimeSSAAccepted = function (e, r, t) {
            return e.SendMsg(
              "Player.GetTimeSSAAccepted#1",
              (0, l.I8)(zr, r, t),
              fr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.AcceptSSA = function (e, r, t) {
            return e.SendMsg("Player.AcceptSSA#1", (0, l.I8)(wr, r, t), pr, {
              ePrivilege: 1,
            });
          }),
          (e.GetNicknameList = function (e, r, t) {
            return e.SendMsg(
              "Player.GetNicknameList#1",
              (0, l.I8)(Sr, r, t),
              Rr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetPerFriendPreferences = function (e, r, t) {
            return e.SendMsg(
              "Player.GetPerFriendPreferences#1",
              (0, l.I8)(jr, r, t),
              Fr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetPerFriendPreferences = function (e, r, t) {
            return e.SendMsg(
              "Player.SetPerFriendPreferences#1",
              (0, l.I8)(vr, r, t),
              qr,
              { ePrivilege: 1 },
            );
          }),
          (e.AddFriend = function (e, r, t) {
            return e.SendMsg("Player.AddFriend#1", (0, l.I8)(Tr, r, t), Or, {
              ePrivilege: 1,
            });
          }),
          (e.RemoveFriend = function (e, r, t) {
            return e.SendMsg("Player.RemoveFriend#1", (0, l.I8)(Ir, r, t), Pr, {
              ePrivilege: 1,
            });
          }),
          (e.IgnoreFriend = function (e, r, t) {
            return e.SendMsg("Player.IgnoreFriend#1", (0, l.I8)(Ur, r, t), Cr, {
              ePrivilege: 1,
            });
          }),
          (e.GetCommunityPreferences = function (e, r, t) {
            return e.SendMsg(
              "Player.GetCommunityPreferences#1",
              (0, l.I8)(Gr, r, t),
              Nr,
              { ePrivilege: 1 },
            );
          }),
          (e.SetCommunityPreferences = function (e, r, t) {
            return e.SendMsg(
              "Player.SetCommunityPreferences#1",
              (0, l.I8)(kr, r, t),
              Ar,
              { ePrivilege: 1 },
            );
          }),
          (e.GetTextFilterWords = function (e, r, t) {
            return e.SendMsg(
              "Player.GetTextFilterWords#1",
              (0, l.I8)(Lr, r, t),
              Dr,
              { ePrivilege: 1 },
            );
          }),
          (e.GetNewSteamAnnouncementState = function (e, r, t) {
            return e.SendMsg(
              "Player.GetNewSteamAnnouncementState#1",
              (0, l.I8)(Kr, r, t),
              $r,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.UpdateSteamAnnouncementLastRead = function (e, r, t) {
            return e.SendMsg(
              "Player.UpdateSteamAnnouncementLastRead#1",
              (0, l.I8)(Hr, r, t),
              Qr,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPrivacySettings = function (e, r, t) {
            return e.SendMsg(
              "Player.GetPrivacySettings#1",
              (0, l.I8)(Jr, r, t),
              Xr,
              { ePrivilege: 1 },
            );
          }),
          (e.GetDurationControl = function (e, r, t) {
            return e.SendMsg(
              "Player.GetDurationControl#1",
              (0, l.I8)(Yr, r, t),
              Zr,
              { ePrivilege: 1 },
            );
          }),
          (e.RecordDisconnectedPlaytime = function (e, r, t) {
            return e.SendMsg(
              "Player.RecordDisconnectedPlaytime#1",
              (0, l.I8)(T, r, t),
              I,
              { ePrivilege: 1 },
            );
          });
      })(mt || (mt = {})),
        (function (e) {
          (e.NotifyLastPlayedTimesHandler = {
            name: "PlayerClient.NotifyLastPlayedTimes#1",
            request: et,
          }),
            (e.NotifyFriendNicknameChangedHandler = {
              name: "PlayerClient.NotifyFriendNicknameChanged#1",
              request: rt,
            }),
            (e.NotifyFriendEquippedProfileItemsChangedHandler = {
              name: "PlayerClient.NotifyFriendEquippedProfileItemsChanged#1",
              request: tt,
            }),
            (e.NotifyNewSteamAnnouncementStateHandler = {
              name: "PlayerClient.NotifyNewSteamAnnouncementState#1",
              request: it,
            }),
            (e.NotifyCommunityPreferencesChangedHandler = {
              name: "PlayerClient.NotifyCommunityPreferencesChanged#1",
              request: at,
            }),
            (e.NotifyTextFilterWordsChangedHandler = {
              name: "PlayerClient.NotifyTextFilterWordsChanged#1",
              request: st,
            }),
            (e.NotifyPerFriendPreferencesChangedHandler = {
              name: "PlayerClient.NotifyPerFriendPreferencesChanged#1",
              request: nt,
            }),
            (e.NotifyPrivacyPrivacySettingsChangedHandler = {
              name: "PlayerClient.NotifyPrivacyPrivacySettingsChanged#1",
              request: lt,
            });
        })(ct || (ct = {}));
    },
  },
]);
