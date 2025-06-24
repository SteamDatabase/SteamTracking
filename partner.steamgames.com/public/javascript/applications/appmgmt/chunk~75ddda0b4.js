/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [725],
  {
    37735: (e, r, t) => {
      t.d(r, {
        B4: () => Sr,
        Ey: () => Fr,
        SC: () => vr,
        dN: () => cr,
        kV: () => ye,
        tz: () => Rr,
        xt: () => i,
      });
      var i,
        a,
        s = t(80613),
        n = t.n(s),
        l = t(89068),
        m = t(56545),
        c = t(36003);
      class o extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.steamid || l.Sg(o.M()),
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
                  steamid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = l.w0(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(o.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(o.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(o.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(o.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetRecentPlaytimeSessionsForChild_Request";
        }
      }
      class u extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.sessions || l.Sg(u.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: { sessions: { n: 1, c: B, r: !0, q: !0 } },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = l.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(u.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetRecentPlaytimeSessionsForChild_Response";
        }
      }
      class B extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.time_start || l.Sg(B.M()),
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
                  time_start: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  time_end: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  appid: { n: 3, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  device_type: {
                    n: 4,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  disconnected: { n: 5, br: l.qM.readBool, bw: l.gp.writeBool },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = l.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(B.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetRecentPlaytimeSessionsForChild_Response_PlaytimeSession";
        }
      }
      class d extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.min_last_played || l.Sg(d.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  min_last_played: {
                    n: 1,
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
        static toObject(e, r) {
          return l.BT(d.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Request";
        }
      }
      class g extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.games || l.Sg(g.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: { games: { n: 1, c: y, r: !0, q: !0 } },
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
        static toObject(e, r) {
          return l.BT(g.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Response";
        }
      }
      class y extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.appid || l.Sg(y.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  appid: { n: 1, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                  last_playtime: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  playtime_2weeks: {
                    n: 3,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  playtime_forever: {
                    n: 4,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  first_playtime: {
                    n: 5,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  playtime_windows_forever: {
                    n: 6,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  playtime_mac_forever: {
                    n: 7,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  playtime_linux_forever: {
                    n: 8,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  playtime_deck_forever: {
                    n: 16,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  first_windows_playtime: {
                    n: 9,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  first_mac_playtime: {
                    n: 10,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  first_linux_playtime: {
                    n: 11,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  first_deck_playtime: {
                    n: 17,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  last_windows_playtime: {
                    n: 12,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  last_mac_playtime: {
                    n: 13,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  last_linux_playtime: {
                    n: 14,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  last_deck_playtime: {
                    n: 18,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  playtime_disconnected: {
                    n: 15,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
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
        static toObject(e, r) {
          return l.BT(y.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Response_Game";
        }
      }
      class b extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.steamids || l.Sg(b.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  steamids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint64String,
                    pbr: l.qM.readPackedUint64String,
                    bw: l.gp.writeRepeatedUint64String,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = l.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(b.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Request";
        }
      }
      class M extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.accounts || l.Sg(M.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: { accounts: { n: 1, c: _, r: !0, q: !0 } },
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
        static toObject(e, r) {
          return l.BT(M.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response";
        }
      }
      class _ extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.public_data || l.Sg(_.M()),
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
                  public_data: { n: 1, c: f },
                  private_data: { n: 2, c: z },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = l.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(_.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails";
        }
      }
      class f extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.steamid || l.Sg(f.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  steamid: {
                    n: 1,
                    q: !0,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  visibility_state: {
                    n: 2,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  privacy_state: {
                    n: 3,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  profile_state: {
                    n: 4,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  ban_expires_time: {
                    n: 7,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  account_flags: {
                    n: 8,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  sha_digest_avatar: {
                    n: 9,
                    br: l.qM.readBytes,
                    bw: l.gp.writeBytes,
                  },
                  persona_name: {
                    n: 10,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  profile_url: {
                    n: 11,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  content_country_restricted: {
                    n: 12,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = l.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(f.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPublicData";
        }
      }
      class z extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.persona_state || l.Sg(z.M()),
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
                  persona_state: {
                    n: 1,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  persona_state_flags: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  time_created: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  game_id: {
                    n: 4,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  game_server_steam_id: {
                    n: 5,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  game_server_ip_address: {
                    n: 6,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  game_server_port: {
                    n: 7,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  game_extra_info: {
                    n: 8,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  account_name: {
                    n: 9,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  lobby_steam_id: {
                    n: 10,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  rich_presence_kv: {
                    n: 11,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  broadcast_session_id: {
                    n: 12,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  watching_broadcast_accountid: {
                    n: 13,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  watching_broadcast_appid: {
                    n: 14,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  watching_broadcast_viewers: {
                    n: 15,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  watching_broadcast_title: {
                    n: 16,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  last_logoff_time: {
                    n: 17,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  last_seen_online: {
                    n: 18,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  game_os_type: {
                    n: 19,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  game_device_type: {
                    n: 20,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  game_device_name: {
                    n: 21,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  game_is_private: {
                    n: 22,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                },
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
        static toObject(e, r) {
          return l.BT(z.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPrivateData";
        }
      }
      class w extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (n().BinaryReader)(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMutualFriendsForIncomingInvites_Request";
        }
      }
      class p extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.steamid || l.Sg(p.M()),
            s.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  mutual_friend_account_ids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
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
        static toObject(e, r) {
          return l.BT(p.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IncomingInviteMutualFriendList";
        }
      }
      class S extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.incoming_invite_mutual_friends_lists || l.Sg(S.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  incoming_invite_mutual_friends_lists: {
                    n: 1,
                    c: p,
                    r: !0,
                    q: !0,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = l.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(S.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMutualFriendsForIncomingInvites_Response";
        }
      }
      class R extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.steamid || l.Sg(R.M()),
            s.Message.initialize(this, e, 0, -1, [4], null);
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
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  include_appinfo: {
                    n: 2,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  include_played_free_games: {
                    n: 3,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  appids_filter: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                  include_free_sub: {
                    n: 5,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  skip_unvetted_apps: {
                    n: 6,
                    d: !0,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  language: { n: 7, br: l.qM.readString, bw: l.gp.writeString },
                  include_extended_appinfo: {
                    n: 8,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = l.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(R.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetOwnedGames_Request";
        }
      }
      class W extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.game_count || l.Sg(W.M()),
            s.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  game_count: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  games: { n: 2, c: h, r: !0, q: !0 },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = l.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(W.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetOwnedGames_Response";
        }
      }
      class h extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.appid || l.Sg(h.M()),
            s.Message.initialize(this, e, 0, -1, [18], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  appid: { n: 1, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                  name: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  playtime_2weeks: {
                    n: 3,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  playtime_forever: {
                    n: 4,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  img_icon_url: {
                    n: 5,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  has_community_visible_stats: {
                    n: 7,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  playtime_windows_forever: {
                    n: 8,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  playtime_mac_forever: {
                    n: 9,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  playtime_linux_forever: {
                    n: 10,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  playtime_deck_forever: {
                    n: 20,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  rtime_last_played: {
                    n: 11,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  capsule_filename: {
                    n: 12,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  sort_as: { n: 13, br: l.qM.readString, bw: l.gp.writeString },
                  has_workshop: {
                    n: 14,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  has_market: { n: 15, br: l.qM.readBool, bw: l.gp.writeBool },
                  has_dlc: { n: 16, br: l.qM.readBool, bw: l.gp.writeBool },
                  has_leaderboards: {
                    n: 17,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  content_descriptorids: {
                    n: 18,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                  playtime_disconnected: {
                    n: 19,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = l.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(h.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetOwnedGames_Response_Game";
        }
      }
      class j extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.max_age_seconds || l.Sg(j.M()),
            s.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  max_age_seconds: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  ignore_appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = l.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(j.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayNext_Request";
        }
      }
      class F extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.last_update_time || l.Sg(F.M()),
            s.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  last_update_time: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = l.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(F.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayNext_Response";
        }
      }
      class v extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.play_sessions || l.Sg(v.M()),
            s.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: { play_sessions: { n: 3, c: T, r: !0, q: !0 } },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = l.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(v.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(v.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(v.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RecordDisconnectedPlaytime_Request";
        }
      }
      class T extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.appid || l.Sg(T.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  session_time_start: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  seconds: { n: 3, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  offline: { n: 4, br: l.qM.readBool, bw: l.gp.writeBool },
                  owner: { n: 5, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = l.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(T.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RecordDisconnectedPlaytime_Request_PlayHistory";
        }
      }
      class O extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new O();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RecordDisconnectedPlaytime_Response";
        }
      }
      class q extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.appid || l.Sg(q.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = l.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(q.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameBadgeLevels_Request";
        }
      }
      class I extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.player_level || l.Sg(I.M()),
            s.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  player_level: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  badges: { n: 2, c: P, r: !0, q: !0 },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = l.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(I.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(I.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(I.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameBadgeLevels_Response";
        }
      }
      class P extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.level || l.Sg(P.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  level: { n: 1, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                  series: { n: 2, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                  border_color: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = l.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(P.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(P.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(P.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameBadgeLevels_Response_Badge";
        }
      }
      class U extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.communityitemid || l.Sg(U.M()),
            s.Message.initialize(this, e, 0, -1, [15], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  image_small: {
                    n: 2,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  image_large: {
                    n: 3,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  name: { n: 4, br: l.qM.readString, bw: l.gp.writeString },
                  item_title: {
                    n: 5,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  item_description: {
                    n: 6,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  appid: { n: 7, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  item_type: {
                    n: 8,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  item_class: {
                    n: 9,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  movie_webm: {
                    n: 10,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  movie_mp4: {
                    n: 11,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  movie_webm_small: {
                    n: 13,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  movie_mp4_small: {
                    n: 14,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  equipped_flags: {
                    n: 12,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  profile_colors: { n: 15, c: C, r: !0, q: !0 },
                  tiled: { n: 16, br: l.qM.readBool, bw: l.gp.writeBool },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = l.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(U.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(U.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(U.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileItem";
        }
      }
      class C extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.style_name || l.Sg(C.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  style_name: {
                    n: 1,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  color: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = l.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(C.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileItem_ProfileColor";
        }
      }
      class x extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.steamid || l.Sg(x.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  language: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = l.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(x.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(x.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(x.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileBackground_Request";
        }
      }
      class N extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.profile_background || l.Sg(N.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: { profile_background: { n: 1, c: U } },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = l.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(N.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new N();
          return N.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(N.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(N.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileBackground_Response";
        }
      }
      class G extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.communityitemid || l.Sg(G.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = l.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(G.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(G.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(G.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileBackground_Request";
        }
      }
      class k extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new k();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new k();
          return k.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileBackground_Response";
        }
      }
      class A extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.steamid || l.Sg(A.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  language: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = l.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(A.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new A();
          return A.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(A.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(A.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMiniProfileBackground_Request";
        }
      }
      class E extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.profile_background || l.Sg(E.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: { profile_background: { n: 1, c: U } },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = l.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(E.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(E.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(E.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMiniProfileBackground_Response";
        }
      }
      class L extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.communityitemid || l.Sg(L.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = l.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(L.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new L();
          return L.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(L.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(L.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetMiniProfileBackground_Request";
        }
      }
      class D extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new D();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new D();
          return D.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetMiniProfileBackground_Response";
        }
      }
      class K extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.steamid || l.Sg(K.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  language: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = l.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(K.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new K();
          return K.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(K.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(K.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAvatarFrame_Request";
        }
      }
      class $ extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $.prototype.avatar_frame || l.Sg($.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = { proto: $, fields: { avatar_frame: { n: 1, c: U } } }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = l.w0($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT($.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq($.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new $();
          return $.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj($.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0($.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAvatarFrame_Response";
        }
      }
      class H extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.communityitemid || l.Sg(H.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = l.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(H.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new H();
          return H.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(H.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(H.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAvatarFrame_Request";
        }
      }
      class Q extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Q();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Q();
          return Q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAvatarFrame_Response";
        }
      }
      class V extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.steamid || l.Sg(V.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  language: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = l.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(V.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new V();
          return V.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(V.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(V.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAnimatedAvatar_Request";
        }
      }
      class J extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            J.prototype.avatar || l.Sg(J.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = { proto: J, fields: { avatar: { n: 1, c: U } } }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = l.w0(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(J.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(J.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new J();
          return J.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(J.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(J.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAnimatedAvatar_Response";
        }
      }
      class X extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.communityitemid || l.Sg(X.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = l.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(X.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new X();
          return X.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(X.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(X.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAnimatedAvatar_Request";
        }
      }
      class Y extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Y();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Y();
          return Y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAnimatedAvatar_Response";
        }
      }
      class Z extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.steamid || l.Sg(Z.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  language: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = l.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Z.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Z();
          return Z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Z.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetSteamDeckKeyboardSkin_Request";
        }
      }
      class ee extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ee.prototype.steam_deck_keyboard_skin || l.Sg(ee.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: { steam_deck_keyboard_skin: { n: 1, c: U } },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = l.w0(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ee.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ee.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ee();
          return ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ee.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ee.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetSteamDeckKeyboardSkin_Response";
        }
      }
      class re extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.communityitemid || l.Sg(re.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = l.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(re.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new re();
          return re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(re.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetSteamDeckKeyboardSkin_Request";
        }
      }
      class te extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new te();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new te();
          return te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetSteamDeckKeyboardSkin_Response";
        }
      }
      class ie extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.language || l.Sg(ie.M()),
            s.Message.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  language: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                  filters: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: l.qM.readEnum,
                    pbr: l.qM.readPackedEnum,
                    bw: l.gp.writeRepeatedEnum,
                  },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = l.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ie.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ie();
          return ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsOwned_Request";
        }
      }
      class ae extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.profile_backgrounds || l.Sg(ae.M()),
            s.Message.initialize(this, e, 0, -1, [1, 2, 3, 4, 5, 6, 7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  profile_backgrounds: { n: 1, c: U, r: !0, q: !0 },
                  mini_profile_backgrounds: { n: 2, c: U, r: !0, q: !0 },
                  avatar_frames: { n: 3, c: U, r: !0, q: !0 },
                  animated_avatars: { n: 4, c: U, r: !0, q: !0 },
                  profile_modifiers: { n: 5, c: U, r: !0, q: !0 },
                  steam_deck_keyboard_skins: { n: 6, c: U, r: !0, q: !0 },
                  steam_deck_startup_movies: { n: 7, c: U, r: !0, q: !0 },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = l.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ae.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ae();
          return ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsOwned_Response";
        }
      }
      class se extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.steamid || l.Sg(se.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  language: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = l.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(se.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new se();
          return se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(se.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(se.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsEquipped_Request";
        }
      }
      class ne extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ne.prototype.profile_background || l.Sg(ne.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  profile_background: { n: 1, c: U },
                  mini_profile_background: { n: 2, c: U },
                  avatar_frame: { n: 3, c: U },
                  animated_avatar: { n: 4, c: U },
                  profile_modifier: { n: 5, c: U },
                  steam_deck_keyboard_skin: { n: 6, c: U },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = l.w0(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ne.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ne.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ne();
          return ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ne.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ne.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsEquipped_Response";
        }
      }
      class le extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            le.prototype.communityitemid || l.Sg(le.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  flags: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = l.w0(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(le.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(le.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new le();
          return le.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(le.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(le.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetEquippedProfileItemFlags_Request";
        }
      }
      class me extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new me();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new me();
          return me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetEquippedProfileItemFlags_Response";
        }
      }
      class ce extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ce();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ce();
          return ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetEmoticonList_Request";
        }
      }
      class oe extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.emoticons || l.Sg(oe.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: { emoticons: { n: 1, c: ue, r: !0, q: !0 } },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = l.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(oe.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new oe();
          return oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetEmoticonList_Response";
        }
      }
      class ue extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.name || l.Sg(ue.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  name: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                  count: { n: 2, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                  time_last_used: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  use_count: {
                    n: 4,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  time_received: {
                    n: 5,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  appid: { n: 6, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = l.w0(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ue.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ue.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ue();
          return ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ue.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ue.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetEmoticonList_Response_Emoticon";
        }
      }
      class Be extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.steamid || l.Sg(Be.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  badgeid: { n: 2, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = l.w0(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Be.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Be.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Be();
          return Be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Be.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Be.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityBadgeProgress_Request";
        }
      }
      class de extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.quests || l.Sg(de.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: { quests: { n: 1, c: ge, r: !0, q: !0 } },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = l.w0(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(de.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(de.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new de();
          return de.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(de.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(de.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityBadgeProgress_Response";
        }
      }
      class ge extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.questid || l.Sg(ge.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  questid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  completed: { n: 2, br: l.qM.readBool, bw: l.gp.writeBool },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = l.w0(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ge.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ge.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ge();
          return ge.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ge.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ge.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityBadgeProgress_Response_Quest";
        }
      }
      class ye extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ye.prototype.appid || l.Sg(ye.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  status_text: {
                    n: 2,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = l.w0(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ye.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ye.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ye();
          return ye.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ye.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ye.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PostStatusToFriends_Request";
        }
      }
      class be extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new be();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new be();
          return be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PostStatusToFriends_Response";
        }
      }
      class Me extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.steamid || l.Sg(Me.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  postid: {
                    n: 2,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = l.w0(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Me.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Me.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Me();
          return Me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Me.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Me.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPostedStatus_Request";
        }
      }
      class _e extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.accountid || l.Sg(_e.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  accountid: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  postid: {
                    n: 2,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  status_text: {
                    n: 3,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  deleted: { n: 4, br: l.qM.readBool, bw: l.gp.writeBool },
                  appid: { n: 5, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = l.w0(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(_e.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(_e.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new _e();
          return _e.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(_e.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(_e.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPostedStatus_Response";
        }
      }
      class fe extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.postid || l.Sg(fe.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: {
                  postid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = l.w0(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(fe.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(fe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new fe();
          return fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(fe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(fe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_DeletePostedStatus_Request";
        }
      }
      class ze extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ze();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ze();
          return ze.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_DeletePostedStatus_Response";
        }
      }
      class we extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.steamid || l.Sg(we.M()),
            s.Message.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  language: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  max_achievements: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  appids: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = l.w0(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(we.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(we.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new we();
          return we.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(we.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(we.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Request";
        }
      }
      class pe extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.games || l.Sg(pe.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: { games: { n: 1, c: Re, r: !0, q: !0 } },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = l.w0(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(pe.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(pe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new pe();
          return pe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(pe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(pe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Response";
        }
      }
      class Se extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.statid || l.Sg(Se.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = {
                proto: Se,
                fields: {
                  statid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  bit: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  name: { n: 3, br: l.qM.readString, bw: l.gp.writeString },
                  desc: { n: 4, br: l.qM.readString, bw: l.gp.writeString },
                  icon: { n: 5, br: l.qM.readString, bw: l.gp.writeString },
                  icon_gray: {
                    n: 6,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  hidden: { n: 7, br: l.qM.readBool, bw: l.gp.writeBool },
                  player_percent_unlocked: {
                    n: 8,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = l.w0(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Se.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Se.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Se();
          return Se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Se.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Se.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Response_Achievement";
        }
      }
      class Re extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.appid || l.Sg(Re.M()),
            s.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  total_achievements: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  achievements: { n: 3, c: Se, r: !0, q: !0 },
                },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = l.w0(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Re.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Re();
          return Re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Re.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Response_Game";
        }
      }
      class We extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.steamid || l.Sg(We.M()),
            s.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  language: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  appids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: l.qM.readUint32,
                    pbr: l.qM.readPackedUint32,
                    bw: l.gp.writeRepeatedUint32,
                  },
                  include_unvetted_apps: {
                    n: 4,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = l.w0(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(We.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(We.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new We();
          return We.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(We.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(We.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAchievementsProgress_Request";
        }
      }
      class he extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.achievement_progress || l.Sg(he.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: { achievement_progress: { n: 1, c: je, r: !0, q: !0 } },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = l.w0(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(he.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(he.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new he();
          return he.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(he.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(he.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAchievementsProgress_Response";
        }
      }
      class je extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.appid || l.Sg(je.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  unlocked: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  total: { n: 3, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  percentage: { n: 4, br: l.qM.readFloat, bw: l.gp.writeFloat },
                  all_unlocked: { n: 5, br: l.qM.readBool, bw: l.gp.writeBool },
                  cache_time: {
                    n: 6,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  vetted: { n: 7, br: l.qM.readBool, bw: l.gp.writeBool },
                },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = l.w0(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(je.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(je.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new je();
          return je.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(je.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(je.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAchievementsProgress_Response_AchievementProgress";
        }
      }
      class Fe extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fe.prototype.appid || l.Sg(Fe.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  language: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = l.w0(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Fe.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Fe();
          return Fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Fe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Fe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameAchievements_Request";
        }
      }
      class ve extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.achievements || l.Sg(ve.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: { achievements: { n: 1, c: Te, r: !0, q: !0 } },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = l.w0(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ve.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ve.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ve();
          return ve.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ve.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ve.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameAchievements_Response";
        }
      }
      class Te extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.internal_name || l.Sg(Te.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: {
                  internal_name: {
                    n: 1,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  localized_name: {
                    n: 2,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  localized_desc: {
                    n: 3,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  icon: { n: 4, br: l.qM.readString, bw: l.gp.writeString },
                  icon_gray: {
                    n: 5,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  hidden: { n: 6, br: l.qM.readBool, bw: l.gp.writeBool },
                  player_percent_unlocked: {
                    n: 7,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = l.w0(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Te.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Te.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Te();
          return Te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Te.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameAchievements_Response_Achievement";
        }
      }
      class Oe extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.steamid || l.Sg(Oe.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = l.w0(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Oe.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Oe();
          return Oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFavoriteBadge_Request";
        }
      }
      class qe extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qe.prototype.has_favorite_badge || l.Sg(qe.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            qe.sm_m ||
              (qe.sm_m = {
                proto: qe,
                fields: {
                  has_favorite_badge: {
                    n: 1,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  badgeid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  communityitemid: {
                    n: 3,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  item_type: {
                    n: 4,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  border_color: {
                    n: 5,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  appid: { n: 6, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  level: { n: 7, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            qe.sm_m
          );
        }
        static MBF() {
          return qe.sm_mbf || (qe.sm_mbf = l.w0(qe.M())), qe.sm_mbf;
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(qe.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(qe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new qe();
          return qe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(qe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(qe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFavoriteBadge_Response";
        }
      }
      class Ie extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.communityitemid || l.Sg(Ie.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  badgeid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = l.w0(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Ie.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Ie();
          return Ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetFavoriteBadge_Request";
        }
      }
      class Pe extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Pe();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Pe();
          return Pe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetFavoriteBadge_Response";
        }
      }
      class Ue extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.slot || l.Sg(Ue.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  slot: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  appid: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  publishedfileid: {
                    n: 3,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  item_assetid: {
                    n: 4,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  item_contextid: {
                    n: 5,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  notes: { n: 6, br: l.qM.readString, bw: l.gp.writeString },
                  title: { n: 7, br: l.qM.readString, bw: l.gp.writeString },
                  accountid: {
                    n: 8,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  badgeid: { n: 9, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                  border_color: {
                    n: 10,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  item_classid: {
                    n: 11,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  item_instanceid: {
                    n: 12,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  ban_check_result: {
                    n: 13,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  replay_year: {
                    n: 14,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = l.w0(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Ue.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Ue();
          return Ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Ue.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Ue.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileCustomizationSlot";
        }
      }
      class Ce extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.customization_type || l.Sg(Ce.M()),
            s.Message.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: {
                  customization_type: {
                    n: 1,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  large: { n: 2, br: l.qM.readBool, bw: l.gp.writeBool },
                  slots: { n: 3, c: Ue, r: !0, q: !0 },
                  active: { n: 4, br: l.qM.readBool, bw: l.gp.writeBool },
                  customization_style: {
                    n: 5,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  purchaseid: {
                    n: 6,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  level: { n: 7, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = l.w0(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Ce.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Ce();
          return Ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Ce.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Ce.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileCustomization";
        }
      }
      class xe extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.theme_id || l.Sg(xe.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  theme_id: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                  title: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = l.w0(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(xe.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(xe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new xe();
          return xe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(xe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(xe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileTheme";
        }
      }
      class Ne extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ne.prototype.hide_profile_awards || l.Sg(Ne.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: {
                  hide_profile_awards: {
                    n: 1,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                },
              }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = l.w0(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Ne.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Ne();
          return Ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Ne.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Ne.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfilePreferences";
        }
      }
      class Ge extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ge.prototype.steamid || l.Sg(Ge.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  include_inactive_customizations: {
                    n: 2,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  include_purchased_customizations: {
                    n: 3,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                },
              }),
            Ge.sm_m
          );
        }
        static MBF() {
          return Ge.sm_mbf || (Ge.sm_mbf = l.w0(Ge.M())), Ge.sm_mbf;
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Ge.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Ge.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Ge();
          return Ge.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Ge.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Ge.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileCustomization_Request";
        }
      }
      class ke extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ke.prototype.customizations || l.Sg(ke.M()),
            s.Message.initialize(this, e, 0, -1, [1, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = {
                proto: ke,
                fields: {
                  customizations: { n: 1, c: Ce, r: !0, q: !0 },
                  slots_available: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  profile_theme: { n: 3, c: xe },
                  purchased_customizations: { n: 4, c: Ae, r: !0, q: !0 },
                  profile_preferences: { n: 5, c: Ne },
                },
              }),
            ke.sm_m
          );
        }
        static MBF() {
          return ke.sm_mbf || (ke.sm_mbf = l.w0(ke.M())), ke.sm_mbf;
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ke.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ke.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ke();
          return ke.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ke.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ke.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileCustomization_Response";
        }
      }
      class Ae extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ae.prototype.purchaseid || l.Sg(Ae.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ae.sm_m ||
              (Ae.sm_m = {
                proto: Ae,
                fields: {
                  purchaseid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  customization_type: {
                    n: 2,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  level: { n: 3, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            Ae.sm_m
          );
        }
        static MBF() {
          return Ae.sm_mbf || (Ae.sm_mbf = l.w0(Ae.M())), Ae.sm_mbf;
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Ae.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Ae.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Ae();
          return Ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileCustomization_Response_PurchasedCustomization";
        }
      }
      class Ee extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ee.prototype.steamid || l.Sg(Ee.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                },
              }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = l.w0(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Ee.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Ee();
          return Ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Ee.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Ee.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Request";
        }
      }
      class Le extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Le.prototype.purchased_customizations || l.Sg(Le.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Le.sm_m ||
              (Le.sm_m = {
                proto: Le,
                fields: {
                  purchased_customizations: { n: 1, c: De, r: !0, q: !0 },
                },
              }),
            Le.sm_m
          );
        }
        static MBF() {
          return Le.sm_mbf || (Le.sm_mbf = l.w0(Le.M())), Le.sm_mbf;
        }
        toObject(e = !1) {
          return Le.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Le.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Le.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Le();
          return Le.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Le.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Le.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Response";
        }
      }
      class De extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            De.prototype.purchaseid || l.Sg(De.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            De.sm_m ||
              (De.sm_m = {
                proto: De,
                fields: {
                  purchaseid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  customization_type: {
                    n: 2,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                },
              }),
            De.sm_m
          );
        }
        static MBF() {
          return De.sm_mbf || (De.sm_mbf = l.w0(De.M())), De.sm_mbf;
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(De.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(De.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new De();
          return De.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(De.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(De.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Response_PurchasedCustomization";
        }
      }
      class Ke extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ke.prototype.steamid || l.Sg(Ke.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                },
              }),
            Ke.sm_m
          );
        }
        static MBF() {
          return Ke.sm_mbf || (Ke.sm_mbf = l.w0(Ke.M())), Ke.sm_mbf;
        }
        toObject(e = !1) {
          return Ke.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Ke.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Ke.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Ke();
          return Ke.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Ke.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Ke.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request";
        }
      }
      class $e extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $e.prototype.purchased_customizations || l.Sg($e.M()),
            s.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $e.sm_m ||
              ($e.sm_m = {
                proto: $e,
                fields: {
                  purchased_customizations: { n: 1, c: He, r: !0, q: !0 },
                  upgraded_customizations: { n: 2, c: Qe, r: !0, q: !0 },
                },
              }),
            $e.sm_m
          );
        }
        static MBF() {
          return $e.sm_mbf || ($e.sm_mbf = l.w0($e.M())), $e.sm_mbf;
        }
        toObject(e = !1) {
          return $e.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT($e.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq($e.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new $e();
          return $e.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj($e.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0($e.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return $e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response";
        }
      }
      class He extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            He.prototype.customization_type || l.Sg(He.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            He.sm_m ||
              (He.sm_m = {
                proto: He,
                fields: {
                  customization_type: {
                    n: 1,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  count: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            He.sm_m
          );
        }
        static MBF() {
          return He.sm_mbf || (He.sm_mbf = l.w0(He.M())), He.sm_mbf;
        }
        toObject(e = !1) {
          return He.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(He.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(He.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new He();
          return He.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(He.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(He.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return He.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_PurchasedCustomization";
        }
      }
      class Qe extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Qe.prototype.customization_type || l.Sg(Qe.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Qe.sm_m ||
              (Qe.sm_m = {
                proto: Qe,
                fields: {
                  customization_type: {
                    n: 1,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  level: { n: 2, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            Qe.sm_m
          );
        }
        static MBF() {
          return Qe.sm_mbf || (Qe.sm_mbf = l.w0(Qe.M())), Qe.sm_mbf;
        }
        toObject(e = !1) {
          return Qe.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Qe.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Qe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Qe();
          return Qe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Qe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Qe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_UpgradedCustomization";
        }
      }
      class Ve extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ve.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Ve();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Ve();
          return Ve.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileThemesAvailable_Request";
        }
      }
      class Je extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Je.prototype.profile_themes || l.Sg(Je.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Je.sm_m ||
              (Je.sm_m = {
                proto: Je,
                fields: { profile_themes: { n: 1, c: xe, r: !0, q: !0 } },
              }),
            Je.sm_m
          );
        }
        static MBF() {
          return Je.sm_mbf || (Je.sm_mbf = l.w0(Je.M())), Je.sm_mbf;
        }
        toObject(e = !1) {
          return Je.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Je.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Je.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Je();
          return Je.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Je.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Je.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileThemesAvailable_Response";
        }
      }
      class Xe extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Xe.prototype.theme_id || l.Sg(Xe.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Xe.sm_m ||
              (Xe.sm_m = {
                proto: Xe,
                fields: {
                  theme_id: { n: 1, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            Xe.sm_m
          );
        }
        static MBF() {
          return Xe.sm_mbf || (Xe.sm_mbf = l.w0(Xe.M())), Xe.sm_mbf;
        }
        toObject(e = !1) {
          return Xe.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Xe.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Xe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Xe();
          return Xe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Xe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Xe.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileTheme_Request";
        }
      }
      class Ye extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Ye.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Ye();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Ye();
          return Ye.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileTheme_Response";
        }
      }
      class Ze extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ze.prototype.profile_preferences || l.Sg(Ze.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ze.sm_m ||
              (Ze.sm_m = {
                proto: Ze,
                fields: { profile_preferences: { n: 1, c: Ne } },
              }),
            Ze.sm_m
          );
        }
        static MBF() {
          return Ze.sm_mbf || (Ze.sm_mbf = l.w0(Ze.M())), Ze.sm_mbf;
        }
        toObject(e = !1) {
          return Ze.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Ze.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Ze.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Ze();
          return Ze.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Ze.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Ze.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfilePreferences_Request";
        }
      }
      class er extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return er.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new er();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new er();
          return er.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return er.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return er.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfilePreferences_Response";
        }
      }
      class rr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            rr.prototype.appid || l.Sg(rr.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            rr.sm_m ||
              (rr.sm_m = {
                proto: rr,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            rr.sm_m
          );
        }
        static MBF() {
          return rr.sm_mbf || (rr.sm_mbf = l.w0(rr.M())), rr.sm_mbf;
        }
        toObject(e = !1) {
          return rr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(rr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(rr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new rr();
          return rr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(rr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return rr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(rr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return rr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Request";
        }
      }
      class tr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            tr.prototype.your_info || l.Sg(tr.M()),
            s.Message.initialize(this, e, 0, -1, [2, 3, 4, 5, 6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            tr.sm_m ||
              (tr.sm_m = {
                proto: tr,
                fields: {
                  your_info: { n: 1, c: ar },
                  in_game: { n: 2, c: ir, r: !0, q: !0 },
                  played_recently: { n: 3, c: ir, r: !0, q: !0 },
                  played_ever: { n: 4, c: ir, r: !0, q: !0 },
                  owns: { n: 5, c: ir, r: !0, q: !0 },
                  in_wishlist: { n: 6, c: ir, r: !0, q: !0 },
                },
              }),
            tr.sm_m
          );
        }
        static MBF() {
          return tr.sm_mbf || (tr.sm_mbf = l.w0(tr.M())), tr.sm_mbf;
        }
        toObject(e = !1) {
          return tr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(tr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(tr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new tr();
          return tr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(tr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return tr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(tr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return tr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response";
        }
      }
      class ir extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ir.prototype.steamid || l.Sg(ir.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ir.sm_m ||
              (ir.sm_m = {
                proto: ir,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  minutes_played: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  minutes_played_forever: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            ir.sm_m
          );
        }
        static MBF() {
          return ir.sm_mbf || (ir.sm_mbf = l.w0(ir.M())), ir.sm_mbf;
        }
        toObject(e = !1) {
          return ir.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ir.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ir.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ir();
          return ir.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ir.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ir.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ir.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ir.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo";
        }
      }
      class ar extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ar.prototype.steamid || l.Sg(ar.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ar.sm_m ||
              (ar.sm_m = {
                proto: ar,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  minutes_played: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  minutes_played_forever: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  in_wishlist: { n: 4, br: l.qM.readBool, bw: l.gp.writeBool },
                  owned: { n: 5, br: l.qM.readBool, bw: l.gp.writeBool },
                },
              }),
            ar.sm_m
          );
        }
        static MBF() {
          return ar.sm_mbf || (ar.sm_mbf = l.w0(ar.M())), ar.sm_mbf;
        }
        toObject(e = !1) {
          return ar.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ar.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ar.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ar();
          return ar.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ar.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ar.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ar.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ar.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response_OwnGameplayInfo";
        }
      }
      class sr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return sr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new sr();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new sr();
          return sr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return sr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return sr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTimeSSAAccepted_Request";
        }
      }
      class nr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            nr.prototype.time_ssa_accepted || l.Sg(nr.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            nr.sm_m ||
              (nr.sm_m = {
                proto: nr,
                fields: {
                  time_ssa_accepted: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  time_ssa_updated: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  time_chinassa_accepted: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            nr.sm_m
          );
        }
        static MBF() {
          return nr.sm_mbf || (nr.sm_mbf = l.w0(nr.M())), nr.sm_mbf;
        }
        toObject(e = !1) {
          return nr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(nr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(nr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new nr();
          return nr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(nr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return nr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(nr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return nr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTimeSSAAccepted_Response";
        }
      }
      class lr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            lr.prototype.agreement_type || l.Sg(lr.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            lr.sm_m ||
              (lr.sm_m = {
                proto: lr,
                fields: {
                  agreement_type: {
                    n: 1,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  time_signed_utc: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            lr.sm_m
          );
        }
        static MBF() {
          return lr.sm_mbf || (lr.sm_mbf = l.w0(lr.M())), lr.sm_mbf;
        }
        toObject(e = !1) {
          return lr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(lr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(lr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new lr();
          return lr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(lr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return lr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(lr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return lr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AcceptSSA_Request";
        }
      }
      class mr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return mr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new mr();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new mr();
          return mr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return mr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return mr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AcceptSSA_Response";
        }
      }
      class cr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (n().BinaryReader)(e),
            t = new cr();
          return cr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return cr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return cr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Request";
        }
      }
      class or extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            or.prototype.nicknames || l.Sg(or.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            or.sm_m ||
              (or.sm_m = {
                proto: or,
                fields: { nicknames: { n: 1, c: ur, r: !0, q: !0 } },
              }),
            or.sm_m
          );
        }
        static MBF() {
          return or.sm_mbf || (or.sm_mbf = l.w0(or.M())), or.sm_mbf;
        }
        toObject(e = !1) {
          return or.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(or.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(or.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new or();
          return or.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(or.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return or.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(or.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return or.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Response";
        }
      }
      class ur extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ur.prototype.accountid || l.Sg(ur.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ur.sm_m ||
              (ur.sm_m = {
                proto: ur,
                fields: {
                  accountid: {
                    n: 1,
                    br: l.qM.readFixed32,
                    bw: l.gp.writeFixed32,
                  },
                  nickname: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                },
              }),
            ur.sm_m
          );
        }
        static MBF() {
          return ur.sm_mbf || (ur.sm_mbf = l.w0(ur.M())), ur.sm_mbf;
        }
        toObject(e = !1) {
          return ur.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(ur.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(ur.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new ur();
          return ur.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(ur.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return ur.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(ur.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return ur.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Response_PlayerNickname";
        }
      }
      class Br extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Br.prototype.accountid || l.Sg(Br.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Br.sm_m ||
              (Br.sm_m = {
                proto: Br,
                fields: {
                  accountid: {
                    n: 1,
                    br: l.qM.readFixed32,
                    bw: l.gp.writeFixed32,
                  },
                  nickname: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  notifications_showingame: {
                    n: 3,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  notifications_showonline: {
                    n: 4,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  notifications_showmessages: {
                    n: 5,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  sounds_showingame: {
                    n: 6,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  sounds_showonline: {
                    n: 7,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  sounds_showmessages: {
                    n: 8,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  notifications_sendmobile: {
                    n: 9,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                },
              }),
            Br.sm_m
          );
        }
        static MBF() {
          return Br.sm_mbf || (Br.sm_mbf = l.w0(Br.M())), Br.sm_mbf;
        }
        toObject(e = !1) {
          return Br.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Br.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Br.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Br();
          return Br.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Br.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Br.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Br.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Br.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "PerFriendPreferences";
        }
      }
      class dr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return dr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new dr();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new dr();
          return dr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return dr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return dr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPerFriendPreferences_Request";
        }
      }
      class gr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            gr.prototype.preferences || l.Sg(gr.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            gr.sm_m ||
              (gr.sm_m = {
                proto: gr,
                fields: { preferences: { n: 1, c: Br, r: !0, q: !0 } },
              }),
            gr.sm_m
          );
        }
        static MBF() {
          return gr.sm_mbf || (gr.sm_mbf = l.w0(gr.M())), gr.sm_mbf;
        }
        toObject(e = !1) {
          return gr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(gr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(gr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new gr();
          return gr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(gr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return gr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(gr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return gr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPerFriendPreferences_Response";
        }
      }
      class yr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            yr.prototype.preferences || l.Sg(yr.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            yr.sm_m ||
              (yr.sm_m = {
                proto: yr,
                fields: { preferences: { n: 1, c: Br } },
              }),
            yr.sm_m
          );
        }
        static MBF() {
          return yr.sm_mbf || (yr.sm_mbf = l.w0(yr.M())), yr.sm_mbf;
        }
        toObject(e = !1) {
          return yr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(yr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(yr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new yr();
          return yr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(yr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return yr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(yr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return yr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetPerFriendPreferences_Request";
        }
      }
      class br extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return br.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new br();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new br();
          return br.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return br.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return br.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetPerFriendPreferences_Response";
        }
      }
      class Mr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Mr.prototype.steamid || l.Sg(Mr.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
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
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                },
              }),
            Mr.sm_m
          );
        }
        static MBF() {
          return Mr.sm_mbf || (Mr.sm_mbf = l.w0(Mr.M())), Mr.sm_mbf;
        }
        toObject(e = !1) {
          return Mr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Mr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Mr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Mr();
          return Mr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Mr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Mr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Mr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Mr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AddFriend_Request";
        }
      }
      class _r extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _r.prototype.invite_sent || l.Sg(_r.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _r.sm_m ||
              (_r.sm_m = {
                proto: _r,
                fields: {
                  invite_sent: { n: 1, br: l.qM.readBool, bw: l.gp.writeBool },
                  friend_relationship: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  result: { n: 3, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                },
              }),
            _r.sm_m
          );
        }
        static MBF() {
          return _r.sm_mbf || (_r.sm_mbf = l.w0(_r.M())), _r.sm_mbf;
        }
        toObject(e = !1) {
          return _r.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(_r.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(_r.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new _r();
          return _r.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(_r.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return _r.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(_r.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return _r.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AddFriend_Response";
        }
      }
      class fr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fr.prototype.steamid || l.Sg(fr.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fr.sm_m ||
              (fr.sm_m = {
                proto: fr,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                },
              }),
            fr.sm_m
          );
        }
        static MBF() {
          return fr.sm_mbf || (fr.sm_mbf = l.w0(fr.M())), fr.sm_mbf;
        }
        toObject(e = !1) {
          return fr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(fr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(fr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new fr();
          return fr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(fr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return fr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(fr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return fr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RemoveFriend_Request";
        }
      }
      class zr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            zr.prototype.friend_relationship || l.Sg(zr.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            zr.sm_m ||
              (zr.sm_m = {
                proto: zr,
                fields: {
                  friend_relationship: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            zr.sm_m
          );
        }
        static MBF() {
          return zr.sm_mbf || (zr.sm_mbf = l.w0(zr.M())), zr.sm_mbf;
        }
        toObject(e = !1) {
          return zr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(zr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(zr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new zr();
          return zr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(zr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return zr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(zr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return zr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RemoveFriend_Response";
        }
      }
      class wr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            wr.prototype.steamid || l.Sg(wr.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            wr.sm_m ||
              (wr.sm_m = {
                proto: wr,
                fields: {
                  steamid: {
                    n: 1,
                    br: l.qM.readFixed64String,
                    bw: l.gp.writeFixed64String,
                  },
                  unignore: { n: 2, br: l.qM.readBool, bw: l.gp.writeBool },
                },
              }),
            wr.sm_m
          );
        }
        static MBF() {
          return wr.sm_mbf || (wr.sm_mbf = l.w0(wr.M())), wr.sm_mbf;
        }
        toObject(e = !1) {
          return wr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(wr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(wr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new wr();
          return wr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(wr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return wr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(wr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return wr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IgnoreFriend_Request";
        }
      }
      class pr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pr.prototype.friend_relationship || l.Sg(pr.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pr.sm_m ||
              (pr.sm_m = {
                proto: pr,
                fields: {
                  friend_relationship: {
                    n: 1,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            pr.sm_m
          );
        }
        static MBF() {
          return pr.sm_mbf || (pr.sm_mbf = l.w0(pr.M())), pr.sm_mbf;
        }
        toObject(e = !1) {
          return pr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(pr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(pr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new pr();
          return pr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(pr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return pr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(pr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return pr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IgnoreFriend_Response";
        }
      }
      class Sr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Sr.prototype.parenthesize_nicknames || l.Sg(Sr.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Sr.sm_m ||
              (Sr.sm_m = {
                proto: Sr,
                fields: {
                  parenthesize_nicknames: {
                    n: 4,
                    d: !1,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  text_filter_setting: {
                    n: 5,
                    br: l.qM.readEnum,
                    bw: l.gp.writeEnum,
                  },
                  text_filter_ignore_friends: {
                    n: 6,
                    d: !0,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  text_filter_words_revision: {
                    n: 7,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  timestamp_updated: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            Sr.sm_m
          );
        }
        static MBF() {
          return Sr.sm_mbf || (Sr.sm_mbf = l.w0(Sr.M())), Sr.sm_mbf;
        }
        toObject(e = !1) {
          return Sr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Sr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Sr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Sr();
          return Sr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Sr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Sr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Sr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Sr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_CommunityPreferences";
        }
      }
      class Rr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Rr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Rr();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Rr();
          return Rr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Rr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Rr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityPreferences_Request";
        }
      }
      class Wr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Wr.prototype.preferences || l.Sg(Wr.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Wr.sm_m ||
              (Wr.sm_m = {
                proto: Wr,
                fields: {
                  preferences: { n: 1, c: Sr },
                  content_descriptor_preferences: { n: 2, c: c.u2 },
                },
              }),
            Wr.sm_m
          );
        }
        static MBF() {
          return Wr.sm_mbf || (Wr.sm_mbf = l.w0(Wr.M())), Wr.sm_mbf;
        }
        toObject(e = !1) {
          return Wr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Wr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Wr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Wr();
          return Wr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Wr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Wr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Wr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Wr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityPreferences_Response";
        }
      }
      class hr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            hr.prototype.preferences || l.Sg(hr.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            hr.sm_m ||
              (hr.sm_m = {
                proto: hr,
                fields: { preferences: { n: 1, c: Sr } },
              }),
            hr.sm_m
          );
        }
        static MBF() {
          return hr.sm_mbf || (hr.sm_mbf = l.w0(hr.M())), hr.sm_mbf;
        }
        toObject(e = !1) {
          return hr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(hr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(hr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new hr();
          return hr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(hr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return hr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(hr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return hr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetCommunityPreferences_Request";
        }
      }
      class jr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
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
          let r = new (n().BinaryReader)(e),
            t = new jr();
          return jr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return jr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return jr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetCommunityPreferences_Response";
        }
      }
      class Fr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fr.prototype.text_filter_custom_banned_words || l.Sg(Fr.M()),
            s.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Fr.sm_m ||
              (Fr.sm_m = {
                proto: Fr,
                fields: {
                  text_filter_custom_banned_words: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: l.qM.readString,
                    bw: l.gp.writeRepeatedString,
                  },
                  text_filter_custom_clean_words: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: l.qM.readString,
                    bw: l.gp.writeRepeatedString,
                  },
                  text_filter_words_revision: {
                    n: 3,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            Fr.sm_m
          );
        }
        static MBF() {
          return Fr.sm_mbf || (Fr.sm_mbf = l.w0(Fr.M())), Fr.sm_mbf;
        }
        toObject(e = !1) {
          return Fr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Fr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Fr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Fr();
          return Fr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Fr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Fr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Fr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Fr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_TextFilterWords";
        }
      }
      class vr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return vr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new vr();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new vr();
          return vr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return vr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return vr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTextFilterWords_Request";
        }
      }
      class Tr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Tr.prototype.words || l.Sg(Tr.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Tr.sm_m ||
              (Tr.sm_m = { proto: Tr, fields: { words: { n: 1, c: Fr } } }),
            Tr.sm_m
          );
        }
        static MBF() {
          return Tr.sm_mbf || (Tr.sm_mbf = l.w0(Tr.M())), Tr.sm_mbf;
        }
        toObject(e = !1) {
          return Tr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Tr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Tr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Tr();
          return Tr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Tr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Tr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Tr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Tr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTextFilterWords_Response";
        }
      }
      class Or extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Or.prototype.language || l.Sg(Or.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Or.sm_m ||
              (Or.sm_m = {
                proto: Or,
                fields: {
                  language: { n: 1, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                },
              }),
            Or.sm_m
          );
        }
        static MBF() {
          return Or.sm_mbf || (Or.sm_mbf = l.w0(Or.M())), Or.sm_mbf;
        }
        toObject(e = !1) {
          return Or.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Or.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Or.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Or();
          return Or.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Or.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Or.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Or.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Or.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNewSteamAnnouncementState_Request";
        }
      }
      class qr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            qr.prototype.state || l.Sg(qr.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            qr.sm_m ||
              (qr.sm_m = {
                proto: qr,
                fields: {
                  state: { n: 1, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  announcement_headline: {
                    n: 2,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  announcement_url: {
                    n: 3,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  time_posted: {
                    n: 4,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  announcement_gid: {
                    n: 5,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                },
              }),
            qr.sm_m
          );
        }
        static MBF() {
          return qr.sm_mbf || (qr.sm_mbf = l.w0(qr.M())), qr.sm_mbf;
        }
        toObject(e = !1) {
          return qr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(qr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(qr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new qr();
          return qr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(qr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return qr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(qr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return qr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNewSteamAnnouncementState_Response";
        }
      }
      class Ir extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ir.prototype.announcement_gid || l.Sg(Ir.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ir.sm_m ||
              (Ir.sm_m = {
                proto: Ir,
                fields: {
                  announcement_gid: {
                    n: 1,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                  time_posted: {
                    n: 2,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                },
              }),
            Ir.sm_m
          );
        }
        static MBF() {
          return Ir.sm_mbf || (Ir.sm_mbf = l.w0(Ir.M())), Ir.sm_mbf;
        }
        toObject(e = !1) {
          return Ir.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Ir.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Ir.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Ir();
          return Ir.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Ir.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ir.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Ir.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ir.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_UpdateSteamAnnouncementLastRead_Request";
        }
      }
      class Pr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Pr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Pr();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Pr();
          return Pr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Pr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Pr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_UpdateSteamAnnouncementLastRead_Response";
        }
      }
      class Ur extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ur.prototype.privacy_state || l.Sg(Ur.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ur.sm_m ||
              (Ur.sm_m = {
                proto: Ur,
                fields: {
                  privacy_state: {
                    n: 1,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  privacy_state_inventory: {
                    n: 2,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  privacy_state_gifts: {
                    n: 3,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  privacy_state_ownedgames: {
                    n: 4,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  privacy_state_playtime: {
                    n: 5,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  privacy_state_friendslist: {
                    n: 6,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                },
              }),
            Ur.sm_m
          );
        }
        static MBF() {
          return Ur.sm_mbf || (Ur.sm_mbf = l.w0(Ur.M())), Ur.sm_mbf;
        }
        toObject(e = !1) {
          return Ur.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Ur.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Ur.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Ur();
          return Ur.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Ur.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ur.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Ur.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ur.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPrivacySettings";
        }
      }
      class Cr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Cr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Cr();
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Cr();
          return Cr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Cr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Cr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPrivacySettings_Request";
        }
      }
      class xr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xr.prototype.privacy_settings || l.Sg(xr.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xr.sm_m ||
              (xr.sm_m = {
                proto: xr,
                fields: { privacy_settings: { n: 1, c: Ur } },
              }),
            xr.sm_m
          );
        }
        static MBF() {
          return xr.sm_mbf || (xr.sm_mbf = l.w0(xr.M())), xr.sm_mbf;
        }
        toObject(e = !1) {
          return xr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(xr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(xr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new xr();
          return xr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(xr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return xr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(xr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return xr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPrivacySettings_Response";
        }
      }
      class Nr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Nr.prototype.appid || l.Sg(Nr.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Nr.sm_m ||
              (Nr.sm_m = {
                proto: Nr,
                fields: {
                  appid: { n: 1, br: l.qM.readUint32, bw: l.gp.writeUint32 },
                },
              }),
            Nr.sm_m
          );
        }
        static MBF() {
          return Nr.sm_mbf || (Nr.sm_mbf = l.w0(Nr.M())), Nr.sm_mbf;
        }
        toObject(e = !1) {
          return Nr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Nr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Nr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Nr();
          return Nr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Nr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Nr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Nr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Nr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetDurationControl_Request";
        }
      }
      class Gr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Gr.prototype.is_enabled || l.Sg(Gr.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Gr.sm_m ||
              (Gr.sm_m = {
                proto: Gr,
                fields: {
                  is_enabled: { n: 1, br: l.qM.readBool, bw: l.gp.writeBool },
                  seconds: { n: 2, br: l.qM.readInt32, bw: l.gp.writeInt32 },
                  seconds_today: {
                    n: 3,
                    br: l.qM.readInt32,
                    bw: l.gp.writeInt32,
                  },
                  is_steamchina_account: {
                    n: 4,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  is_age_verified: {
                    n: 5,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  seconds_allowed_today: {
                    n: 6,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  age_verification_pending: {
                    n: 7,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                  block_minors: { n: 8, br: l.qM.readBool, bw: l.gp.writeBool },
                },
              }),
            Gr.sm_m
          );
        }
        static MBF() {
          return Gr.sm_mbf || (Gr.sm_mbf = l.w0(Gr.M())), Gr.sm_mbf;
        }
        toObject(e = !1) {
          return Gr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Gr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Gr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Gr();
          return Gr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Gr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Gr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Gr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Gr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetDurationControl_Response";
        }
      }
      class kr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            kr.prototype.games || l.Sg(kr.M()),
            s.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            kr.sm_m ||
              (kr.sm_m = {
                proto: kr,
                fields: { games: { n: 1, c: y, r: !0, q: !0 } },
              }),
            kr.sm_m
          );
        }
        static MBF() {
          return kr.sm_mbf || (kr.sm_mbf = l.w0(kr.M())), kr.sm_mbf;
        }
        toObject(e = !1) {
          return kr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(kr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(kr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new kr();
          return kr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(kr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return kr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(kr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return kr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_LastPlayedTimes_Notification";
        }
      }
      class Ar extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ar.prototype.accountid || l.Sg(Ar.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ar.sm_m ||
              (Ar.sm_m = {
                proto: Ar,
                fields: {
                  accountid: {
                    n: 1,
                    br: l.qM.readFixed32,
                    bw: l.gp.writeFixed32,
                  },
                  nickname: { n: 2, br: l.qM.readString, bw: l.gp.writeString },
                  is_echo_to_self: {
                    n: 3,
                    br: l.qM.readBool,
                    bw: l.gp.writeBool,
                  },
                },
              }),
            Ar.sm_m
          );
        }
        static MBF() {
          return Ar.sm_mbf || (Ar.sm_mbf = l.w0(Ar.M())), Ar.sm_mbf;
        }
        toObject(e = !1) {
          return Ar.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Ar.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Ar.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Ar();
          return Ar.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Ar.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Ar.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Ar.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Ar.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_FriendNicknameChanged_Notification";
        }
      }
      class Er extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Er.prototype.accountid || l.Sg(Er.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Er.sm_m ||
              (Er.sm_m = {
                proto: Er,
                fields: {
                  accountid: {
                    n: 1,
                    br: l.qM.readFixed32,
                    bw: l.gp.writeFixed32,
                  },
                },
              }),
            Er.sm_m
          );
        }
        static MBF() {
          return Er.sm_mbf || (Er.sm_mbf = l.w0(Er.M())), Er.sm_mbf;
        }
        toObject(e = !1) {
          return Er.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Er.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Er.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Er();
          return Er.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Er.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Er.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Er.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Er.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_FriendEquippedProfileItemsChanged_Notification";
        }
      }
      class Lr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Lr.prototype.state || l.Sg(Lr.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Lr.sm_m ||
              (Lr.sm_m = {
                proto: Lr,
                fields: {
                  state: { n: 1, br: l.qM.readEnum, bw: l.gp.writeEnum },
                  announcement_headline: {
                    n: 2,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  announcement_url: {
                    n: 3,
                    br: l.qM.readString,
                    bw: l.gp.writeString,
                  },
                  time_posted: {
                    n: 4,
                    br: l.qM.readUint32,
                    bw: l.gp.writeUint32,
                  },
                  announcement_gid: {
                    n: 5,
                    br: l.qM.readUint64String,
                    bw: l.gp.writeUint64String,
                  },
                },
              }),
            Lr.sm_m
          );
        }
        static MBF() {
          return Lr.sm_mbf || (Lr.sm_mbf = l.w0(Lr.M())), Lr.sm_mbf;
        }
        toObject(e = !1) {
          return Lr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Lr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Lr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Lr();
          return Lr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Lr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Lr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Lr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Lr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_NewSteamAnnouncementState_Notification";
        }
      }
      class Dr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Dr.prototype.preferences || l.Sg(Dr.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Dr.sm_m ||
              (Dr.sm_m = {
                proto: Dr,
                fields: {
                  preferences: { n: 1, c: Sr },
                  content_descriptor_preferences: { n: 2, c: c.u2 },
                },
              }),
            Dr.sm_m
          );
        }
        static MBF() {
          return Dr.sm_mbf || (Dr.sm_mbf = l.w0(Dr.M())), Dr.sm_mbf;
        }
        toObject(e = !1) {
          return Dr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Dr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Dr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Dr();
          return Dr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Dr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Dr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Dr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Dr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_CommunityPreferencesChanged_Notification";
        }
      }
      class Kr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Kr.prototype.words || l.Sg(Kr.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Kr.sm_m ||
              (Kr.sm_m = { proto: Kr, fields: { words: { n: 1, c: Fr } } }),
            Kr.sm_m
          );
        }
        static MBF() {
          return Kr.sm_mbf || (Kr.sm_mbf = l.w0(Kr.M())), Kr.sm_mbf;
        }
        toObject(e = !1) {
          return Kr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Kr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Kr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Kr();
          return Kr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Kr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Kr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Kr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Kr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_TextFilterWordsChanged_Notification";
        }
      }
      class $r extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $r.prototype.accountid || l.Sg($r.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $r.sm_m ||
              ($r.sm_m = {
                proto: $r,
                fields: {
                  accountid: {
                    n: 1,
                    br: l.qM.readFixed32,
                    bw: l.gp.writeFixed32,
                  },
                  preferences: { n: 2, c: Br },
                },
              }),
            $r.sm_m
          );
        }
        static MBF() {
          return $r.sm_mbf || ($r.sm_mbf = l.w0($r.M())), $r.sm_mbf;
        }
        toObject(e = !1) {
          return $r.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT($r.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq($r.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new $r();
          return $r.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj($r.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return $r.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0($r.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return $r.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PerFriendPreferencesChanged_Notification";
        }
      }
      class Hr extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Hr.prototype.privacy_settings || l.Sg(Hr.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Hr.sm_m ||
              (Hr.sm_m = {
                proto: Hr,
                fields: { privacy_settings: { n: 1, c: Ur } },
              }),
            Hr.sm_m
          );
        }
        static MBF() {
          return Hr.sm_mbf || (Hr.sm_mbf = l.w0(Hr.M())), Hr.sm_mbf;
        }
        toObject(e = !1) {
          return Hr.toObject(e, this);
        }
        static toObject(e, r) {
          return l.BT(Hr.M(), e, r);
        }
        static fromObject(e) {
          return l.Uq(Hr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new (n().BinaryReader)(e),
            t = new Hr();
          return Hr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return l.zj(Hr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new (n().BinaryWriter)();
          return Hr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          l.i0(Hr.M(), e, r);
        }
        serializeBase64String() {
          var e = new (n().BinaryWriter)();
          return Hr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PrivacySettingsChanged_Notification";
        }
      }
      !(function (e) {
        (e.GetRecentPlaytimeSessionsForChild = function (e, r) {
          return e.SendMsg(
            "Player.GetRecentPlaytimeSessionsForChild#1",
            (0, m.I8)(o, r),
            u,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.GetPlayerLinkDetails = function (e, r) {
            return e.SendMsg(
              "Player.GetPlayerLinkDetails#1",
              (0, m.I8)(b, r),
              M,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetMutualFriendsForIncomingInvites = function (e, r) {
            return e.SendMsg(
              "Player.GetMutualFriendsForIncomingInvites#1",
              (0, m.I8)(w, r),
              S,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetOwnedGames = function (e, r) {
            return e.SendMsg("Player.GetOwnedGames#1", (0, m.I8)(R, r), W, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetPlayNext = function (e, r) {
            return e.SendMsg("Player.GetPlayNext#1", (0, m.I8)(j, r), F, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetFriendsGameplayInfo = function (e, r) {
            return e.SendMsg(
              "Player.GetFriendsGameplayInfo#1",
              (0, m.I8)(rr, r),
              tr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetGameBadgeLevels = function (e, r) {
            return e.SendMsg(
              "Player.GetGameBadgeLevels#1",
              (0, m.I8)(q, r),
              I,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetProfileBackground = function (e, r) {
            return e.SendMsg(
              "Player.GetProfileBackground#1",
              (0, m.I8)(x, r),
              N,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetProfileBackground = function (e, r) {
            return e.SendMsg(
              "Player.SetProfileBackground#1",
              (0, m.I8)(G, r),
              k,
              { ePrivilege: 1 },
            );
          }),
          (e.GetMiniProfileBackground = function (e, r) {
            return e.SendMsg(
              "Player.GetMiniProfileBackground#1",
              (0, m.I8)(A, r),
              E,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetMiniProfileBackground = function (e, r) {
            return e.SendMsg(
              "Player.SetMiniProfileBackground#1",
              (0, m.I8)(L, r),
              D,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAvatarFrame = function (e, r) {
            return e.SendMsg("Player.GetAvatarFrame#1", (0, m.I8)(K, r), $, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.SetAvatarFrame = function (e, r) {
            return e.SendMsg("Player.SetAvatarFrame#1", (0, m.I8)(H, r), Q, {
              ePrivilege: 1,
            });
          }),
          (e.GetAnimatedAvatar = function (e, r) {
            return e.SendMsg("Player.GetAnimatedAvatar#1", (0, m.I8)(V, r), J, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.SetAnimatedAvatar = function (e, r) {
            return e.SendMsg("Player.SetAnimatedAvatar#1", (0, m.I8)(X, r), Y, {
              ePrivilege: 1,
            });
          }),
          (e.GetSteamDeckKeyboardSkin = function (e, r) {
            return e.SendMsg(
              "Player.GetSteamDeckKeyboardSkin#1",
              (0, m.I8)(Z, r),
              ee,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetSteamDeckKeyboardSkin = function (e, r) {
            return e.SendMsg(
              "Player.SetSteamDeckKeyboardSkin#1",
              (0, m.I8)(re, r),
              te,
              { ePrivilege: 1 },
            );
          }),
          (e.GetProfileItemsOwned = function (e, r) {
            return e.SendMsg(
              "Player.GetProfileItemsOwned#1",
              (0, m.I8)(ie, r),
              ae,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetProfileItemsEquipped = function (e, r) {
            return e.SendMsg(
              "Player.GetProfileItemsEquipped#1",
              (0, m.I8)(se, r),
              ne,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetEquippedProfileItemFlags = function (e, r) {
            return e.SendMsg(
              "Player.SetEquippedProfileItemFlags#1",
              (0, m.I8)(le, r),
              me,
              { ePrivilege: 1 },
            );
          }),
          (e.GetEmoticonList = function (e, r) {
            return e.SendMsg("Player.GetEmoticonList#1", (0, m.I8)(ce, r), oe, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetCommunityBadgeProgress = function (e, r) {
            return e.SendMsg(
              "Player.GetCommunityBadgeProgress#1",
              (0, m.I8)(Be, r),
              de,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetTopAchievementsForGames = function (e, r) {
            return e.SendMsg(
              "Player.GetTopAchievementsForGames#1",
              (0, m.I8)(we, r),
              pe,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetAchievementsProgress = function (e, r) {
            return e.SendMsg(
              "Player.GetAchievementsProgress#1",
              (0, m.I8)(We, r),
              he,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetGameAchievements = function (e, r) {
            return e.SendMsg(
              "Player.GetGameAchievements#1",
              (0, m.I8)(Fe, r),
              ve,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetFavoriteBadge = function (e, r) {
            return e.SendMsg(
              "Player.GetFavoriteBadge#1",
              (0, m.I8)(Oe, r),
              qe,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetFavoriteBadge = function (e, r) {
            return e.SendMsg(
              "Player.SetFavoriteBadge#1",
              (0, m.I8)(Ie, r),
              Pe,
              { ePrivilege: 1 },
            );
          }),
          (e.GetProfileCustomization = function (e, r) {
            return e.SendMsg(
              "Player.GetProfileCustomization#1",
              (0, m.I8)(Ge, r),
              ke,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetPurchasedProfileCustomizations = function (e, r) {
            return e.SendMsg(
              "Player.GetPurchasedProfileCustomizations#1",
              (0, m.I8)(Ee, r),
              Le,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetPurchasedAndUpgradedProfileCustomizations = function (e, r) {
            return e.SendMsg(
              "Player.GetPurchasedAndUpgradedProfileCustomizations#1",
              (0, m.I8)(Ke, r),
              $e,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetProfileThemesAvailable = function (e, r) {
            return e.SendMsg(
              "Player.GetProfileThemesAvailable#1",
              (0, m.I8)(Ve, r),
              Je,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetProfileTheme = function (e, r) {
            return e.SendMsg("Player.SetProfileTheme#1", (0, m.I8)(Xe, r), Ye, {
              ePrivilege: 1,
            });
          }),
          (e.SetProfilePreferences = function (e, r) {
            return e.SendMsg(
              "Player.SetProfilePreferences#1",
              (0, m.I8)(Ze, r),
              er,
              { ePrivilege: 1 },
            );
          }),
          (e.PostStatusToFriends = function (e, r) {
            return e.SendMsg(
              "Player.PostStatusToFriends#1",
              (0, m.I8)(ye, r),
              be,
              { ePrivilege: 3 },
            );
          }),
          (e.GetPostedStatus = function (e, r) {
            return e.SendMsg("Player.GetPostedStatus#1", (0, m.I8)(Me, r), _e, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.DeletePostedStatus = function (e, r) {
            return e.SendMsg(
              "Player.DeletePostedStatus#1",
              (0, m.I8)(fe, r),
              ze,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientGetLastPlayedTimes = function (e, r) {
            return e.SendMsg(
              "Player.ClientGetLastPlayedTimes#1",
              (0, m.I8)(d, r),
              g,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetTimeSSAAccepted = function (e, r) {
            return e.SendMsg(
              "Player.GetTimeSSAAccepted#1",
              (0, m.I8)(sr, r),
              nr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.AcceptSSA = function (e, r) {
            return e.SendMsg("Player.AcceptSSA#1", (0, m.I8)(lr, r), mr, {
              ePrivilege: 1,
            });
          }),
          (e.GetNicknameList = function (e, r) {
            return e.SendMsg("Player.GetNicknameList#1", (0, m.I8)(cr, r), or, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetPerFriendPreferences = function (e, r) {
            return e.SendMsg(
              "Player.GetPerFriendPreferences#1",
              (0, m.I8)(dr, r),
              gr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetPerFriendPreferences = function (e, r) {
            return e.SendMsg(
              "Player.SetPerFriendPreferences#1",
              (0, m.I8)(yr, r),
              br,
              { ePrivilege: 1 },
            );
          }),
          (e.AddFriend = function (e, r) {
            return e.SendMsg("Player.AddFriend#1", (0, m.I8)(Mr, r), _r, {
              ePrivilege: 1,
            });
          }),
          (e.RemoveFriend = function (e, r) {
            return e.SendMsg("Player.RemoveFriend#1", (0, m.I8)(fr, r), zr, {
              ePrivilege: 1,
            });
          }),
          (e.IgnoreFriend = function (e, r) {
            return e.SendMsg("Player.IgnoreFriend#1", (0, m.I8)(wr, r), pr, {
              ePrivilege: 1,
            });
          }),
          (e.GetCommunityPreferences = function (e, r) {
            return e.SendMsg(
              "Player.GetCommunityPreferences#1",
              (0, m.I8)(Rr, r),
              Wr,
              { ePrivilege: 1 },
            );
          }),
          (e.SetCommunityPreferences = function (e, r) {
            return e.SendMsg(
              "Player.SetCommunityPreferences#1",
              (0, m.I8)(hr, r),
              jr,
              { ePrivilege: 1 },
            );
          }),
          (e.GetTextFilterWords = function (e, r) {
            return e.SendMsg(
              "Player.GetTextFilterWords#1",
              (0, m.I8)(vr, r),
              Tr,
              { ePrivilege: 1 },
            );
          }),
          (e.GetNewSteamAnnouncementState = function (e, r) {
            return e.SendMsg(
              "Player.GetNewSteamAnnouncementState#1",
              (0, m.I8)(Or, r),
              qr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.UpdateSteamAnnouncementLastRead = function (e, r) {
            return e.SendMsg(
              "Player.UpdateSteamAnnouncementLastRead#1",
              (0, m.I8)(Ir, r),
              Pr,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPrivacySettings = function (e, r) {
            return e.SendMsg(
              "Player.GetPrivacySettings#1",
              (0, m.I8)(Cr, r),
              xr,
              { ePrivilege: 1 },
            );
          }),
          (e.GetDurationControl = function (e, r) {
            return e.SendMsg(
              "Player.GetDurationControl#1",
              (0, m.I8)(Nr, r),
              Gr,
              { ePrivilege: 1 },
            );
          }),
          (e.RecordDisconnectedPlaytime = function (e, r) {
            return e.SendMsg(
              "Player.RecordDisconnectedPlaytime#1",
              (0, m.I8)(v, r),
              O,
              { ePrivilege: 1 },
            );
          });
      })(i || (i = {})),
        (function (e) {
          (e.NotifyLastPlayedTimesHandler = {
            name: "PlayerClient.NotifyLastPlayedTimes#1",
            request: kr,
          }),
            (e.NotifyFriendNicknameChangedHandler = {
              name: "PlayerClient.NotifyFriendNicknameChanged#1",
              request: Ar,
            }),
            (e.NotifyFriendEquippedProfileItemsChangedHandler = {
              name: "PlayerClient.NotifyFriendEquippedProfileItemsChanged#1",
              request: Er,
            }),
            (e.NotifyNewSteamAnnouncementStateHandler = {
              name: "PlayerClient.NotifyNewSteamAnnouncementState#1",
              request: Lr,
            }),
            (e.NotifyCommunityPreferencesChangedHandler = {
              name: "PlayerClient.NotifyCommunityPreferencesChanged#1",
              request: Dr,
            }),
            (e.NotifyTextFilterWordsChangedHandler = {
              name: "PlayerClient.NotifyTextFilterWordsChanged#1",
              request: Kr,
            }),
            (e.NotifyPerFriendPreferencesChangedHandler = {
              name: "PlayerClient.NotifyPerFriendPreferencesChanged#1",
              request: $r,
            }),
            (e.NotifyPrivacyPrivacySettingsChangedHandler = {
              name: "PlayerClient.NotifyPrivacyPrivacySettingsChanged#1",
              request: Hr,
            });
        })(a || (a = {}));
    },
  },
]);
