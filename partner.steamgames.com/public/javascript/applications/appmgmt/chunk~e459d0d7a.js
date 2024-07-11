/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [9747],
  {
    37735: (e, r, t) => {
      t.d(r, {
        B4: () => Mr,
        Ey: () => hr,
        SC: () => jr,
        dN: () => lr,
        kV: () => de,
        tz: () => pr,
        xt: () => $r,
        z2: () => y,
      });
      var i = t(80613),
        a = t(89068),
        s = t(56545),
        n = t(36003);
      const l = i.Message;
      class m extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.steamid || a.Sg(m.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = a.w0(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(m.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetRecentPlaytimeSessionsForChild_Request";
        }
      }
      class c extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.sessions || a.Sg(c.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: { sessions: { n: 1, c: o, r: !0, q: !0 } },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = a.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(c.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetRecentPlaytimeSessionsForChild_Response";
        }
      }
      class o extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.time_start || a.Sg(o.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  time_start: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  time_end: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  appid: { n: 3, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  device_type: {
                    n: 4,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  disconnected: { n: 5, br: a.qM.readBool, bw: a.gp.writeBool },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = a.w0(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(o.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(o.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(o.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(o.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetRecentPlaytimeSessionsForChild_Response_PlaytimeSession";
        }
      }
      class u extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.min_last_played || a.Sg(u.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  min_last_played: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = a.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(u.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Request";
        }
      }
      class B extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.games || a.Sg(B.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: { games: { n: 1, c: d, r: !0, q: !0 } },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = a.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(B.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Response";
        }
      }
      class d extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.appid || a.Sg(d.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  appid: { n: 1, br: a.qM.readInt32, bw: a.gp.writeInt32 },
                  last_playtime: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  playtime_2weeks: {
                    n: 3,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  playtime_forever: {
                    n: 4,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  first_playtime: {
                    n: 5,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  playtime_windows_forever: {
                    n: 6,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  playtime_mac_forever: {
                    n: 7,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  playtime_linux_forever: {
                    n: 8,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  playtime_deck_forever: {
                    n: 16,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  first_windows_playtime: {
                    n: 9,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  first_mac_playtime: {
                    n: 10,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  first_linux_playtime: {
                    n: 11,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  first_deck_playtime: {
                    n: 17,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  last_windows_playtime: {
                    n: 12,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  last_mac_playtime: {
                    n: 13,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  last_linux_playtime: {
                    n: 14,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  last_deck_playtime: {
                    n: 18,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  playtime_disconnected: {
                    n: 15,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = a.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(d.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Response_Game";
        }
      }
      class y extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.steamids || a.Sg(y.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  steamids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.qM.readUint64String,
                    pbr: a.qM.readPackedUint64String,
                    bw: a.gp.writeRepeatedUint64String,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = a.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(y.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Request";
        }
      }
      class b extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.accounts || a.Sg(b.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { accounts: { n: 1, c: g, r: !0, q: !0 } },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = a.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(b.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response";
        }
      }
      class g extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.public_data || a.Sg(g.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  public_data: { n: 1, c: _ },
                  private_data: { n: 2, c: z },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = a.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(g.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails";
        }
      }
      class _ extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.steamid || a.Sg(_.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  steamid: {
                    n: 1,
                    q: !0,
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                  visibility_state: {
                    n: 2,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  privacy_state: {
                    n: 3,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  profile_state: {
                    n: 4,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  ban_expires_time: {
                    n: 7,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  account_flags: {
                    n: 8,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  sha_digest_avatar: {
                    n: 9,
                    br: a.qM.readBytes,
                    bw: a.gp.writeBytes,
                  },
                  persona_name: {
                    n: 10,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  profile_url: {
                    n: 11,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  content_country_restricted: {
                    n: 12,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = a.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(_.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPublicData";
        }
      }
      class z extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.persona_state || a.Sg(z.M()),
            l.initialize(this, e, 0, -1, void 0, null);
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
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  persona_state_flags: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  time_created: {
                    n: 3,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  game_id: {
                    n: 4,
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                  game_server_steam_id: {
                    n: 5,
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                  game_server_ip_address: {
                    n: 6,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  game_server_port: {
                    n: 7,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  game_extra_info: {
                    n: 8,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  account_name: {
                    n: 9,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  lobby_steam_id: {
                    n: 10,
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                  rich_presence_kv: {
                    n: 11,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  broadcast_session_id: {
                    n: 12,
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                  watching_broadcast_accountid: {
                    n: 13,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  watching_broadcast_appid: {
                    n: 14,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  watching_broadcast_viewers: {
                    n: 15,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  watching_broadcast_title: {
                    n: 16,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  last_logoff_time: {
                    n: 17,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  last_seen_online: {
                    n: 18,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  game_os_type: {
                    n: 19,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  game_device_type: {
                    n: 20,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  game_device_name: {
                    n: 21,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  game_is_private: {
                    n: 22,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = a.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(z.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPrivateData";
        }
      }
      class f extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new f();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMutualFriendsForIncomingInvites_Request";
        }
      }
      class w extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.steamid || a.Sg(w.M()),
            l.initialize(this, e, 0, -1, [2], null);
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
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                  mutual_friend_account_ids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.qM.readUint32,
                    pbr: a.qM.readPackedUint32,
                    bw: a.gp.writeRepeatedUint32,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = a.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(w.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(w.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(w.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IncomingInviteMutualFriendList";
        }
      }
      class M extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.incoming_invite_mutual_friends_lists || a.Sg(M.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  incoming_invite_mutual_friends_lists: {
                    n: 1,
                    c: w,
                    r: !0,
                    q: !0,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = a.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(M.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMutualFriendsForIncomingInvites_Response";
        }
      }
      class p extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.steamid || a.Sg(p.M()),
            l.initialize(this, e, 0, -1, [4], null);
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
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  include_appinfo: {
                    n: 2,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  include_played_free_games: {
                    n: 3,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  appids_filter: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: a.qM.readUint32,
                    pbr: a.qM.readPackedUint32,
                    bw: a.gp.writeRepeatedUint32,
                  },
                  include_free_sub: {
                    n: 5,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  skip_unvetted_apps: {
                    n: 6,
                    d: !0,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  language: { n: 7, br: a.qM.readString, bw: a.gp.writeString },
                  include_extended_appinfo: {
                    n: 8,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = a.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(p.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetOwnedGames_Request";
        }
      }
      class S extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.game_count || a.Sg(S.M()),
            l.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  game_count: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  games: { n: 2, c: R, r: !0, q: !0 },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = a.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(S.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetOwnedGames_Response";
        }
      }
      class R extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.appid || a.Sg(R.M()),
            l.initialize(this, e, 0, -1, [18], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  appid: { n: 1, br: a.qM.readInt32, bw: a.gp.writeInt32 },
                  name: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                  playtime_2weeks: {
                    n: 3,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  playtime_forever: {
                    n: 4,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  img_icon_url: {
                    n: 5,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  has_community_visible_stats: {
                    n: 7,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  playtime_windows_forever: {
                    n: 8,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  playtime_mac_forever: {
                    n: 9,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  playtime_linux_forever: {
                    n: 10,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  playtime_deck_forever: {
                    n: 20,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  rtime_last_played: {
                    n: 11,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  capsule_filename: {
                    n: 12,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  sort_as: { n: 13, br: a.qM.readString, bw: a.gp.writeString },
                  has_workshop: {
                    n: 14,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  has_market: { n: 15, br: a.qM.readBool, bw: a.gp.writeBool },
                  has_dlc: { n: 16, br: a.qM.readBool, bw: a.gp.writeBool },
                  has_leaderboards: {
                    n: 17,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  content_descriptorids: {
                    n: 18,
                    r: !0,
                    q: !0,
                    br: a.qM.readUint32,
                    pbr: a.qM.readPackedUint32,
                    bw: a.gp.writeRepeatedUint32,
                  },
                  playtime_disconnected: {
                    n: 19,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = a.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(R.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetOwnedGames_Response_Game";
        }
      }
      class W extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            W.prototype.max_age_seconds || a.Sg(W.M()),
            l.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: {
                  max_age_seconds: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  ignore_appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.qM.readUint32,
                    pbr: a.qM.readPackedUint32,
                    bw: a.gp.writeRepeatedUint32,
                  },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = a.w0(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(W.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayNext_Request";
        }
      }
      class h extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.last_update_time || a.Sg(h.M()),
            l.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  last_update_time: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.qM.readUint32,
                    pbr: a.qM.readPackedUint32,
                    bw: a.gp.writeRepeatedUint32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = a.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(h.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(h.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(h.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayNext_Response";
        }
      }
      class j extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            j.prototype.play_sessions || a.Sg(j.M()),
            l.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: { play_sessions: { n: 3, c: F, r: !0, q: !0 } },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = a.w0(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(j.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RecordDisconnectedPlaytime_Request";
        }
      }
      class F extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.appid || a.Sg(F.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  session_time_start: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  seconds: { n: 3, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  offline: { n: 4, br: a.qM.readBool, bw: a.gp.writeBool },
                  owner: { n: 5, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = a.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(F.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(F.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(F.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RecordDisconnectedPlaytime_Request_PlayHistory";
        }
      }
      class v extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new v();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new v();
          return v.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RecordDisconnectedPlaytime_Response";
        }
      }
      class T extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.appid || a.Sg(T.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = a.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(T.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameBadgeLevels_Request";
        }
      }
      class O extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.player_level || a.Sg(O.M()),
            l.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  player_level: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  badges: { n: 2, c: q, r: !0, q: !0 },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = a.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(O.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(O.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(O.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameBadgeLevels_Response";
        }
      }
      class q extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            q.prototype.level || a.Sg(q.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  level: { n: 1, br: a.qM.readInt32, bw: a.gp.writeInt32 },
                  series: { n: 2, br: a.qM.readInt32, bw: a.gp.writeInt32 },
                  border_color: {
                    n: 3,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = a.w0(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(q.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameBadgeLevels_Response_Badge";
        }
      }
      class I extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            I.prototype.communityitemid || a.Sg(I.M()),
            l.initialize(this, e, 0, -1, [15], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  image_small: {
                    n: 2,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  image_large: {
                    n: 3,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  name: { n: 4, br: a.qM.readString, bw: a.gp.writeString },
                  item_title: {
                    n: 5,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  item_description: {
                    n: 6,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  appid: { n: 7, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  item_type: {
                    n: 8,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  item_class: {
                    n: 9,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  movie_webm: {
                    n: 10,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  movie_mp4: {
                    n: 11,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  movie_webm_small: {
                    n: 13,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  movie_mp4_small: {
                    n: 14,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  equipped_flags: {
                    n: 12,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  profile_colors: { n: 15, c: P, r: !0, q: !0 },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = a.w0(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(I.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(I.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(I.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(I.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileItem";
        }
      }
      class P extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.style_name || a.Sg(P.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  style_name: {
                    n: 1,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  color: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = a.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(P.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(P.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(P.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileItem_ProfileColor";
        }
      }
      class U extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.steamid || a.Sg(U.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                  language: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = a.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(U.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(U.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(U.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileBackground_Request";
        }
      }
      class C extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.profile_background || a.Sg(C.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: { profile_background: { n: 1, c: I } },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = a.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(C.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileBackground_Response";
        }
      }
      class x extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.communityitemid || a.Sg(x.M()),
            l.initialize(this, e, 0, -1, void 0, null);
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
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = a.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(x.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(x.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(x.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileBackground_Request";
        }
      }
      class N extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new N();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new N();
          return N.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileBackground_Response";
        }
      }
      class G extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.steamid || a.Sg(G.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                  language: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = a.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(G.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(G.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(G.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMiniProfileBackground_Request";
        }
      }
      class k extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.profile_background || a.Sg(k.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: { profile_background: { n: 1, c: I } },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = a.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(k.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new k();
          return k.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(k.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(k.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMiniProfileBackground_Response";
        }
      }
      class A extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.communityitemid || a.Sg(A.M()),
            l.initialize(this, e, 0, -1, void 0, null);
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
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = a.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(A.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new A();
          return A.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(A.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(A.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetMiniProfileBackground_Request";
        }
      }
      class E extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
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
          let r = new i.BinaryReader(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetMiniProfileBackground_Response";
        }
      }
      class L extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.steamid || a.Sg(L.M()),
            l.initialize(this, e, 0, -1, void 0, null);
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
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                  language: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = a.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(L.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new L();
          return L.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(L.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(L.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAvatarFrame_Request";
        }
      }
      class D extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.avatar_frame || a.Sg(D.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = { proto: D, fields: { avatar_frame: { n: 1, c: I } } }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = a.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(D.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new D();
          return D.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(D.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(D.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAvatarFrame_Response";
        }
      }
      class K extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            K.prototype.communityitemid || a.Sg(K.M()),
            l.initialize(this, e, 0, -1, void 0, null);
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
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = a.w0(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(K.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(K.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new K();
          return K.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(K.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(K.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAvatarFrame_Request";
        }
      }
      class $ extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
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
          let r = new i.BinaryReader(e),
            t = new $();
          return $.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAvatarFrame_Response";
        }
      }
      class H extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.steamid || a.Sg(H.M()),
            l.initialize(this, e, 0, -1, void 0, null);
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
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                  language: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = a.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(H.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new H();
          return H.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(H.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(H.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAnimatedAvatar_Request";
        }
      }
      class Q extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Q.prototype.avatar || a.Sg(Q.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = { proto: Q, fields: { avatar: { n: 1, c: I } } }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = a.w0(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Q.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Q();
          return Q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Q.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAnimatedAvatar_Response";
        }
      }
      class V extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.communityitemid || a.Sg(V.M()),
            l.initialize(this, e, 0, -1, void 0, null);
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
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = a.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(V.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new V();
          return V.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(V.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(V.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAnimatedAvatar_Request";
        }
      }
      class J extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
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
          let r = new i.BinaryReader(e),
            t = new J();
          return J.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAnimatedAvatar_Response";
        }
      }
      class X extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            X.prototype.steamid || a.Sg(X.M()),
            l.initialize(this, e, 0, -1, void 0, null);
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
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                  language: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = a.w0(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(X.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(X.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new X();
          return X.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(X.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(X.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetSteamDeckKeyboardSkin_Request";
        }
      }
      class Y extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Y.prototype.steam_deck_keyboard_skin || a.Sg(Y.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: { steam_deck_keyboard_skin: { n: 1, c: I } },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = a.w0(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Y.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Y();
          return Y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetSteamDeckKeyboardSkin_Response";
        }
      }
      class Z extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Z.prototype.communityitemid || a.Sg(Z.M()),
            l.initialize(this, e, 0, -1, void 0, null);
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
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = a.w0(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Z.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Z();
          return Z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Z.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetSteamDeckKeyboardSkin_Request";
        }
      }
      class ee extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
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
          let r = new i.BinaryReader(e),
            t = new ee();
          return ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetSteamDeckKeyboardSkin_Response";
        }
      }
      class re extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            re.prototype.language || a.Sg(re.M()),
            l.initialize(this, e, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  language: { n: 1, br: a.qM.readString, bw: a.gp.writeString },
                  filters: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.qM.readEnum,
                    pbr: a.qM.readPackedEnum,
                    bw: a.gp.writeRepeatedEnum,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = a.w0(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(re.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new re();
          return re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(re.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsOwned_Request";
        }
      }
      class te extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            te.prototype.profile_backgrounds || a.Sg(te.M()),
            l.initialize(this, e, 0, -1, [1, 2, 3, 4, 5, 6, 7], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  profile_backgrounds: { n: 1, c: I, r: !0, q: !0 },
                  mini_profile_backgrounds: { n: 2, c: I, r: !0, q: !0 },
                  avatar_frames: { n: 3, c: I, r: !0, q: !0 },
                  animated_avatars: { n: 4, c: I, r: !0, q: !0 },
                  profile_modifiers: { n: 5, c: I, r: !0, q: !0 },
                  steam_deck_keyboard_skins: { n: 6, c: I, r: !0, q: !0 },
                  steam_deck_startup_movies: { n: 7, c: I, r: !0, q: !0 },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = a.w0(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(te.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(te.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new te();
          return te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(te.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsOwned_Response";
        }
      }
      class ie extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ie.prototype.steamid || a.Sg(ie.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                  language: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = a.w0(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(ie.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(ie.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ie();
          return ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsEquipped_Request";
        }
      }
      class ae extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ae.prototype.profile_background || a.Sg(ae.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  profile_background: { n: 1, c: I },
                  mini_profile_background: { n: 2, c: I },
                  avatar_frame: { n: 3, c: I },
                  animated_avatar: { n: 4, c: I },
                  profile_modifier: { n: 5, c: I },
                  steam_deck_keyboard_skin: { n: 6, c: I },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = a.w0(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(ae.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(ae.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ae();
          return ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsEquipped_Response";
        }
      }
      class se extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            se.prototype.communityitemid || a.Sg(se.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  flags: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = a.w0(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(se.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(se.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new se();
          return se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(se.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(se.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetEquippedProfileItemFlags_Request";
        }
      }
      class ne extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ne();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ne();
          return ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetEquippedProfileItemFlags_Response";
        }
      }
      class le extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new le();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new le();
          return le.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetEmoticonList_Request";
        }
      }
      class me extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            me.prototype.emoticons || a.Sg(me.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: { emoticons: { n: 1, c: ce, r: !0, q: !0 } },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = a.w0(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(me.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(me.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new me();
          return me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(me.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(me.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetEmoticonList_Response";
        }
      }
      class ce extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ce.prototype.name || a.Sg(ce.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  name: { n: 1, br: a.qM.readString, bw: a.gp.writeString },
                  count: { n: 2, br: a.qM.readInt32, bw: a.gp.writeInt32 },
                  time_last_used: {
                    n: 3,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  use_count: {
                    n: 4,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  time_received: {
                    n: 5,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  appid: { n: 6, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = a.w0(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(ce.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(ce.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ce();
          return ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(ce.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(ce.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetEmoticonList_Response_Emoticon";
        }
      }
      class oe extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            oe.prototype.steamid || a.Sg(oe.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  badgeid: { n: 2, br: a.qM.readInt32, bw: a.gp.writeInt32 },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = a.w0(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(oe.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(oe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new oe();
          return oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityBadgeProgress_Request";
        }
      }
      class ue extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ue.prototype.quests || a.Sg(ue.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: { quests: { n: 1, c: Be, r: !0, q: !0 } },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = a.w0(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(ue.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(ue.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ue();
          return ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(ue.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(ue.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityBadgeProgress_Response";
        }
      }
      class Be extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Be.prototype.questid || a.Sg(Be.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  questid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  completed: { n: 2, br: a.qM.readBool, bw: a.gp.writeBool },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = a.w0(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Be.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Be.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Be();
          return Be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Be.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Be.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityBadgeProgress_Response_Quest";
        }
      }
      class de extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            de.prototype.appid || a.Sg(de.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  status_text: {
                    n: 2,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = a.w0(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(de.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(de.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new de();
          return de.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(de.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(de.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PostStatusToFriends_Request";
        }
      }
      class ye extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ye();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ye();
          return ye.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PostStatusToFriends_Response";
        }
      }
      class be extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            be.prototype.steamid || a.Sg(be.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  postid: {
                    n: 2,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = a.w0(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(be.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(be.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new be();
          return be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(be.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(be.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPostedStatus_Request";
        }
      }
      class ge extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ge.prototype.accountid || a.Sg(ge.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  postid: {
                    n: 2,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  status_text: {
                    n: 3,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  deleted: { n: 4, br: a.qM.readBool, bw: a.gp.writeBool },
                  appid: { n: 5, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = a.w0(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(ge.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(ge.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ge();
          return ge.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(ge.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(ge.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPostedStatus_Response";
        }
      }
      class _e extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _e.prototype.postid || a.Sg(_e.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  postid: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = a.w0(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(_e.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(_e.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _e();
          return _e.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(_e.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(_e.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_DeletePostedStatus_Request";
        }
      }
      class ze extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
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
          let r = new i.BinaryReader(e),
            t = new ze();
          return ze.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_DeletePostedStatus_Response";
        }
      }
      class fe extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fe.prototype.steamid || a.Sg(fe.M()),
            l.initialize(this, e, 0, -1, [4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  language: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                  max_achievements: {
                    n: 3,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  appids: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: a.qM.readUint32,
                    pbr: a.qM.readPackedUint32,
                    bw: a.gp.writeRepeatedUint32,
                  },
                },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = a.w0(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(fe.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(fe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new fe();
          return fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(fe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(fe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Request";
        }
      }
      class we extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            we.prototype.games || a.Sg(we.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: { games: { n: 1, c: pe, r: !0, q: !0 } },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = a.w0(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(we.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(we.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new we();
          return we.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(we.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(we.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Response";
        }
      }
      class Me extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Me.prototype.statid || a.Sg(Me.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  statid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  bit: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  name: { n: 3, br: a.qM.readString, bw: a.gp.writeString },
                  desc: { n: 4, br: a.qM.readString, bw: a.gp.writeString },
                  icon: { n: 5, br: a.qM.readString, bw: a.gp.writeString },
                  icon_gray: {
                    n: 6,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  hidden: { n: 7, br: a.qM.readBool, bw: a.gp.writeBool },
                  player_percent_unlocked: {
                    n: 8,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = a.w0(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Me.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Me.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Me();
          return Me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Me.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Me.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Response_Achievement";
        }
      }
      class pe extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            pe.prototype.appid || a.Sg(pe.M()),
            l.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: {
                  appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  total_achievements: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  achievements: { n: 3, c: Me, r: !0, q: !0 },
                },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = a.w0(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(pe.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(pe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new pe();
          return pe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(pe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(pe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTopAchievementsForGames_Response_Game";
        }
      }
      class Se extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Se.prototype.steamid || a.Sg(Se.M()),
            l.initialize(this, e, 0, -1, [3], null);
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
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  language: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                  appids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: a.qM.readUint32,
                    pbr: a.qM.readPackedUint32,
                    bw: a.gp.writeRepeatedUint32,
                  },
                  include_unvetted_apps: {
                    n: 4,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                },
              }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = a.w0(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Se.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Se.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Se();
          return Se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Se.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Se.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAchievementsProgress_Request";
        }
      }
      class Re extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Re.prototype.achievement_progress || a.Sg(Re.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: { achievement_progress: { n: 1, c: We, r: !0, q: !0 } },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = a.w0(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Re.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Re();
          return Re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Re.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAchievementsProgress_Response";
        }
      }
      class We extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            We.prototype.appid || a.Sg(We.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            We.sm_m ||
              (We.sm_m = {
                proto: We,
                fields: {
                  appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  unlocked: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  total: { n: 3, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  percentage: { n: 4, br: a.qM.readFloat, bw: a.gp.writeFloat },
                  all_unlocked: { n: 5, br: a.qM.readBool, bw: a.gp.writeBool },
                  cache_time: {
                    n: 6,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  vetted: { n: 7, br: a.qM.readBool, bw: a.gp.writeBool },
                },
              }),
            We.sm_m
          );
        }
        static MBF() {
          return We.sm_mbf || (We.sm_mbf = a.w0(We.M())), We.sm_mbf;
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(We.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(We.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new We();
          return We.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(We.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(We.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAchievementsProgress_Response_AchievementProgress";
        }
      }
      class he extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            he.prototype.appid || a.Sg(he.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  language: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = a.w0(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(he.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(he.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new he();
          return he.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(he.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(he.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameAchievements_Request";
        }
      }
      class je extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            je.prototype.achievements || a.Sg(je.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: { achievements: { n: 1, c: Fe, r: !0, q: !0 } },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = a.w0(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(je.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(je.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new je();
          return je.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(je.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(je.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameAchievements_Response";
        }
      }
      class Fe extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fe.prototype.internal_name || a.Sg(Fe.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: {
                  internal_name: {
                    n: 1,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  localized_name: {
                    n: 2,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  localized_desc: {
                    n: 3,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  icon: { n: 4, br: a.qM.readString, bw: a.gp.writeString },
                  icon_gray: {
                    n: 5,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  hidden: { n: 6, br: a.qM.readBool, bw: a.gp.writeBool },
                  player_percent_unlocked: {
                    n: 7,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                },
              }),
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = a.w0(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Fe.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Fe();
          return Fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Fe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Fe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameAchievements_Response_Achievement";
        }
      }
      class ve extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ve.prototype.steamid || a.Sg(ve.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = a.w0(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(ve.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(ve.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ve();
          return ve.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(ve.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(ve.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFavoriteBadge_Request";
        }
      }
      class Te extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Te.prototype.has_favorite_badge || a.Sg(Te.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: {
                  has_favorite_badge: {
                    n: 1,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  badgeid: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  communityitemid: {
                    n: 3,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  item_type: {
                    n: 4,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  border_color: {
                    n: 5,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  appid: { n: 6, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  level: { n: 7, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = a.w0(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Te.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Te.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Te();
          return Te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Te.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFavoriteBadge_Response";
        }
      }
      class Oe extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Oe.prototype.communityitemid || a.Sg(Oe.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  badgeid: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = a.w0(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Oe.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Oe();
          return Oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetFavoriteBadge_Request";
        }
      }
      class qe extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return qe.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new qe();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new qe();
          return qe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetFavoriteBadge_Response";
        }
      }
      class Ie extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ie.prototype.slot || a.Sg(Ie.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: {
                  slot: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  appid: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  publishedfileid: {
                    n: 3,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  item_assetid: {
                    n: 4,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  item_contextid: {
                    n: 5,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  notes: { n: 6, br: a.qM.readString, bw: a.gp.writeString },
                  title: { n: 7, br: a.qM.readString, bw: a.gp.writeString },
                  accountid: {
                    n: 8,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  badgeid: { n: 9, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  border_color: {
                    n: 10,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  item_classid: {
                    n: 11,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  item_instanceid: {
                    n: 12,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  ban_check_result: {
                    n: 13,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  replay_year: {
                    n: 14,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = a.w0(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Ie.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ie();
          return Ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileCustomizationSlot";
        }
      }
      class Pe extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Pe.prototype.customization_type || a.Sg(Pe.M()),
            l.initialize(this, e, 0, -1, [3], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Pe.sm_m ||
              (Pe.sm_m = {
                proto: Pe,
                fields: {
                  customization_type: {
                    n: 1,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  large: { n: 2, br: a.qM.readBool, bw: a.gp.writeBool },
                  slots: { n: 3, c: Ie, r: !0, q: !0 },
                  active: { n: 4, br: a.qM.readBool, bw: a.gp.writeBool },
                  customization_style: {
                    n: 5,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  purchaseid: {
                    n: 6,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  level: { n: 7, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                },
              }),
            Pe.sm_m
          );
        }
        static MBF() {
          return Pe.sm_mbf || (Pe.sm_mbf = a.w0(Pe.M())), Pe.sm_mbf;
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Pe.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Pe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Pe();
          return Pe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Pe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Pe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileCustomization";
        }
      }
      class Ue extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ue.prototype.theme_id || a.Sg(Ue.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  theme_id: { n: 1, br: a.qM.readString, bw: a.gp.writeString },
                  title: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = a.w0(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Ue.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ue();
          return Ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Ue.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Ue.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileTheme";
        }
      }
      class Ce extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ce.prototype.hide_profile_awards || a.Sg(Ce.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: {
                  hide_profile_awards: {
                    n: 1,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = a.w0(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Ce.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ce();
          return Ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Ce.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Ce.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfilePreferences";
        }
      }
      class xe extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xe.prototype.steamid || a.Sg(xe.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = {
                proto: xe,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                  include_inactive_customizations: {
                    n: 2,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  include_purchased_customizations: {
                    n: 3,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                },
              }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = a.w0(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(xe.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(xe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new xe();
          return xe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(xe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(xe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileCustomization_Request";
        }
      }
      class Ne extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ne.prototype.customizations || a.Sg(Ne.M()),
            l.initialize(this, e, 0, -1, [1, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: {
                  customizations: { n: 1, c: Pe, r: !0, q: !0 },
                  slots_available: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  profile_theme: { n: 3, c: Ue },
                  purchased_customizations: { n: 4, c: Ge, r: !0, q: !0 },
                  profile_preferences: { n: 5, c: Ce },
                },
              }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = a.w0(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Ne.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ne();
          return Ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Ne.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Ne.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileCustomization_Response";
        }
      }
      class Ge extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ge.prototype.purchaseid || a.Sg(Ge.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ge.sm_m ||
              (Ge.sm_m = {
                proto: Ge,
                fields: {
                  purchaseid: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  customization_type: {
                    n: 2,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  level: { n: 3, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                },
              }),
            Ge.sm_m
          );
        }
        static MBF() {
          return Ge.sm_mbf || (Ge.sm_mbf = a.w0(Ge.M())), Ge.sm_mbf;
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Ge.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Ge.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ge();
          return Ge.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Ge.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Ge.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileCustomization_Response_PurchasedCustomization";
        }
      }
      class ke extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ke.prototype.steamid || a.Sg(ke.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ke.sm_m ||
              (ke.sm_m = {
                proto: ke,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                },
              }),
            ke.sm_m
          );
        }
        static MBF() {
          return ke.sm_mbf || (ke.sm_mbf = a.w0(ke.M())), ke.sm_mbf;
        }
        toObject(e = !1) {
          return ke.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(ke.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(ke.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ke();
          return ke.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(ke.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(ke.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Request";
        }
      }
      class Ae extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ae.prototype.purchased_customizations || a.Sg(Ae.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ae.sm_m ||
              (Ae.sm_m = {
                proto: Ae,
                fields: {
                  purchased_customizations: { n: 1, c: Ee, r: !0, q: !0 },
                },
              }),
            Ae.sm_m
          );
        }
        static MBF() {
          return Ae.sm_mbf || (Ae.sm_mbf = a.w0(Ae.M())), Ae.sm_mbf;
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Ae.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Ae.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ae();
          return Ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Response";
        }
      }
      class Ee extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ee.prototype.purchaseid || a.Sg(Ee.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: {
                  purchaseid: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  customization_type: {
                    n: 2,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                },
              }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = a.w0(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Ee.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ee();
          return Ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Ee.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Ee.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Response_PurchasedCustomization";
        }
      }
      class Le extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Le.prototype.steamid || a.Sg(Le.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Le.sm_m ||
              (Le.sm_m = {
                proto: Le,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                },
              }),
            Le.sm_m
          );
        }
        static MBF() {
          return Le.sm_mbf || (Le.sm_mbf = a.w0(Le.M())), Le.sm_mbf;
        }
        toObject(e = !1) {
          return Le.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Le.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Le.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Le();
          return Le.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Le.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Le.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request";
        }
      }
      class De extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            De.prototype.purchased_customizations || a.Sg(De.M()),
            l.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            De.sm_m ||
              (De.sm_m = {
                proto: De,
                fields: {
                  purchased_customizations: { n: 1, c: Ke, r: !0, q: !0 },
                  upgraded_customizations: { n: 2, c: $e, r: !0, q: !0 },
                },
              }),
            De.sm_m
          );
        }
        static MBF() {
          return De.sm_mbf || (De.sm_mbf = a.w0(De.M())), De.sm_mbf;
        }
        toObject(e = !1) {
          return De.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(De.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(De.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new De();
          return De.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(De.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(De.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return De.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response";
        }
      }
      class Ke extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ke.prototype.customization_type || a.Sg(Ke.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ke.sm_m ||
              (Ke.sm_m = {
                proto: Ke,
                fields: {
                  customization_type: {
                    n: 1,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  count: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                },
              }),
            Ke.sm_m
          );
        }
        static MBF() {
          return Ke.sm_mbf || (Ke.sm_mbf = a.w0(Ke.M())), Ke.sm_mbf;
        }
        toObject(e = !1) {
          return Ke.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Ke.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Ke.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ke();
          return Ke.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Ke.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Ke.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ke.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_PurchasedCustomization";
        }
      }
      class $e extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            $e.prototype.customization_type || a.Sg($e.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            $e.sm_m ||
              ($e.sm_m = {
                proto: $e,
                fields: {
                  customization_type: {
                    n: 1,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  level: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                },
              }),
            $e.sm_m
          );
        }
        static MBF() {
          return $e.sm_mbf || ($e.sm_mbf = a.w0($e.M())), $e.sm_mbf;
        }
        toObject(e = !1) {
          return $e.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT($e.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq($e.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new $e();
          return $e.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj($e.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0($e.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_UpgradedCustomization";
        }
      }
      class He extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return He.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new He();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new He();
          return He.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return He.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileThemesAvailable_Request";
        }
      }
      class Qe extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Qe.prototype.profile_themes || a.Sg(Qe.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Qe.sm_m ||
              (Qe.sm_m = {
                proto: Qe,
                fields: { profile_themes: { n: 1, c: Ue, r: !0, q: !0 } },
              }),
            Qe.sm_m
          );
        }
        static MBF() {
          return Qe.sm_mbf || (Qe.sm_mbf = a.w0(Qe.M())), Qe.sm_mbf;
        }
        toObject(e = !1) {
          return Qe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Qe.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Qe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Qe();
          return Qe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Qe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Qe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Qe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileThemesAvailable_Response";
        }
      }
      class Ve extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ve.prototype.theme_id || a.Sg(Ve.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ve.sm_m ||
              (Ve.sm_m = {
                proto: Ve,
                fields: {
                  theme_id: { n: 1, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            Ve.sm_m
          );
        }
        static MBF() {
          return Ve.sm_mbf || (Ve.sm_mbf = a.w0(Ve.M())), Ve.sm_mbf;
        }
        toObject(e = !1) {
          return Ve.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Ve.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Ve.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ve();
          return Ve.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Ve.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Ve.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileTheme_Request";
        }
      }
      class Je extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Je.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Je();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Je();
          return Je.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileTheme_Response";
        }
      }
      class Xe extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Xe.prototype.profile_preferences || a.Sg(Xe.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Xe.sm_m ||
              (Xe.sm_m = {
                proto: Xe,
                fields: { profile_preferences: { n: 1, c: Ce } },
              }),
            Xe.sm_m
          );
        }
        static MBF() {
          return Xe.sm_mbf || (Xe.sm_mbf = a.w0(Xe.M())), Xe.sm_mbf;
        }
        toObject(e = !1) {
          return Xe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Xe.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Xe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Xe();
          return Xe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Xe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Xe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfilePreferences_Request";
        }
      }
      class Ye extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
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
          let r = new i.BinaryReader(e),
            t = new Ye();
          return Ye.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfilePreferences_Response";
        }
      }
      class Ze extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ze.prototype.appid || a.Sg(Ze.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ze.sm_m ||
              (Ze.sm_m = {
                proto: Ze,
                fields: {
                  appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                },
              }),
            Ze.sm_m
          );
        }
        static MBF() {
          return Ze.sm_mbf || (Ze.sm_mbf = a.w0(Ze.M())), Ze.sm_mbf;
        }
        toObject(e = !1) {
          return Ze.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Ze.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Ze.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ze();
          return Ze.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Ze.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Ze.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Request";
        }
      }
      class er extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            er.prototype.your_info || a.Sg(er.M()),
            l.initialize(this, e, 0, -1, [2, 3, 4, 5, 6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            er.sm_m ||
              (er.sm_m = {
                proto: er,
                fields: {
                  your_info: { n: 1, c: tr },
                  in_game: { n: 2, c: rr, r: !0, q: !0 },
                  played_recently: { n: 3, c: rr, r: !0, q: !0 },
                  played_ever: { n: 4, c: rr, r: !0, q: !0 },
                  owns: { n: 5, c: rr, r: !0, q: !0 },
                  in_wishlist: { n: 6, c: rr, r: !0, q: !0 },
                },
              }),
            er.sm_m
          );
        }
        static MBF() {
          return er.sm_mbf || (er.sm_mbf = a.w0(er.M())), er.sm_mbf;
        }
        toObject(e = !1) {
          return er.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(er.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(er.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new er();
          return er.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(er.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return er.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(er.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return er.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response";
        }
      }
      class rr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            rr.prototype.steamid || a.Sg(rr.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            rr.sm_m ||
              (rr.sm_m = {
                proto: rr,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                  minutes_played: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  minutes_played_forever: {
                    n: 3,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            rr.sm_m
          );
        }
        static MBF() {
          return rr.sm_mbf || (rr.sm_mbf = a.w0(rr.M())), rr.sm_mbf;
        }
        toObject(e = !1) {
          return rr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(rr.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(rr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new rr();
          return rr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(rr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return rr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(rr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return rr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo";
        }
      }
      class tr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            tr.prototype.steamid || a.Sg(tr.M()),
            l.initialize(this, e, 0, -1, void 0, null);
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
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                  minutes_played: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  minutes_played_forever: {
                    n: 3,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  in_wishlist: { n: 4, br: a.qM.readBool, bw: a.gp.writeBool },
                  owned: { n: 5, br: a.qM.readBool, bw: a.gp.writeBool },
                },
              }),
            tr.sm_m
          );
        }
        static MBF() {
          return tr.sm_mbf || (tr.sm_mbf = a.w0(tr.M())), tr.sm_mbf;
        }
        toObject(e = !1) {
          return tr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(tr.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(tr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new tr();
          return tr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(tr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return tr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(tr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return tr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response_OwnGameplayInfo";
        }
      }
      class ir extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ir.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ir();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ir();
          return ir.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ir.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ir.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTimeSSAAccepted_Request";
        }
      }
      class ar extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            ar.prototype.time_ssa_accepted || a.Sg(ar.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            ar.sm_m ||
              (ar.sm_m = {
                proto: ar,
                fields: {
                  time_ssa_accepted: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  time_ssa_updated: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  time_chinassa_accepted: {
                    n: 3,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            ar.sm_m
          );
        }
        static MBF() {
          return ar.sm_mbf || (ar.sm_mbf = a.w0(ar.M())), ar.sm_mbf;
        }
        toObject(e = !1) {
          return ar.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(ar.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(ar.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ar();
          return ar.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(ar.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ar.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(ar.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ar.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTimeSSAAccepted_Response";
        }
      }
      class sr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            sr.prototype.agreement_type || a.Sg(sr.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            sr.sm_m ||
              (sr.sm_m = {
                proto: sr,
                fields: {
                  agreement_type: {
                    n: 1,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  time_signed_utc: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            sr.sm_m
          );
        }
        static MBF() {
          return sr.sm_mbf || (sr.sm_mbf = a.w0(sr.M())), sr.sm_mbf;
        }
        toObject(e = !1) {
          return sr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(sr.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(sr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new sr();
          return sr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(sr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return sr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(sr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return sr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AcceptSSA_Request";
        }
      }
      class nr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return nr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new nr();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new nr();
          return nr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return nr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return nr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AcceptSSA_Response";
        }
      }
      class lr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return lr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new lr();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new lr();
          return lr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return lr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return lr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Request";
        }
      }
      class mr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            mr.prototype.nicknames || a.Sg(mr.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            mr.sm_m ||
              (mr.sm_m = {
                proto: mr,
                fields: { nicknames: { n: 1, c: cr, r: !0, q: !0 } },
              }),
            mr.sm_m
          );
        }
        static MBF() {
          return mr.sm_mbf || (mr.sm_mbf = a.w0(mr.M())), mr.sm_mbf;
        }
        toObject(e = !1) {
          return mr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(mr.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(mr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new mr();
          return mr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(mr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return mr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(mr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return mr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Response";
        }
      }
      class cr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            cr.prototype.accountid || a.Sg(cr.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            cr.sm_m ||
              (cr.sm_m = {
                proto: cr,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.qM.readFixed32,
                    bw: a.gp.writeFixed32,
                  },
                  nickname: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            cr.sm_m
          );
        }
        static MBF() {
          return cr.sm_mbf || (cr.sm_mbf = a.w0(cr.M())), cr.sm_mbf;
        }
        toObject(e = !1) {
          return cr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(cr.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(cr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new cr();
          return cr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(cr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return cr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(cr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return cr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Response_PlayerNickname";
        }
      }
      class or extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            or.prototype.accountid || a.Sg(or.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            or.sm_m ||
              (or.sm_m = {
                proto: or,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.qM.readFixed32,
                    bw: a.gp.writeFixed32,
                  },
                  nickname: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                  notifications_showingame: {
                    n: 3,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  notifications_showonline: {
                    n: 4,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  notifications_showmessages: {
                    n: 5,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  sounds_showingame: {
                    n: 6,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  sounds_showonline: {
                    n: 7,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  sounds_showmessages: {
                    n: 8,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  notifications_sendmobile: {
                    n: 9,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                },
              }),
            or.sm_m
          );
        }
        static MBF() {
          return or.sm_mbf || (or.sm_mbf = a.w0(or.M())), or.sm_mbf;
        }
        toObject(e = !1) {
          return or.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(or.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(or.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new or();
          return or.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(or.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return or.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(or.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return or.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "PerFriendPreferences";
        }
      }
      class ur extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ur.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new ur();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ur();
          return ur.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ur.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ur.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPerFriendPreferences_Request";
        }
      }
      class Br extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Br.prototype.preferences || a.Sg(Br.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Br.sm_m ||
              (Br.sm_m = {
                proto: Br,
                fields: { preferences: { n: 1, c: or, r: !0, q: !0 } },
              }),
            Br.sm_m
          );
        }
        static MBF() {
          return Br.sm_mbf || (Br.sm_mbf = a.w0(Br.M())), Br.sm_mbf;
        }
        toObject(e = !1) {
          return Br.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Br.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Br.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Br();
          return Br.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Br.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Br.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Br.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Br.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPerFriendPreferences_Response";
        }
      }
      class dr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            dr.prototype.preferences || a.Sg(dr.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            dr.sm_m ||
              (dr.sm_m = {
                proto: dr,
                fields: { preferences: { n: 1, c: or } },
              }),
            dr.sm_m
          );
        }
        static MBF() {
          return dr.sm_mbf || (dr.sm_mbf = a.w0(dr.M())), dr.sm_mbf;
        }
        toObject(e = !1) {
          return dr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(dr.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(dr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new dr();
          return dr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(dr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return dr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(dr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return dr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetPerFriendPreferences_Request";
        }
      }
      class yr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return yr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new yr();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new yr();
          return yr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return yr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return yr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetPerFriendPreferences_Response";
        }
      }
      class br extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            br.prototype.steamid || a.Sg(br.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            br.sm_m ||
              (br.sm_m = {
                proto: br,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                },
              }),
            br.sm_m
          );
        }
        static MBF() {
          return br.sm_mbf || (br.sm_mbf = a.w0(br.M())), br.sm_mbf;
        }
        toObject(e = !1) {
          return br.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(br.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(br.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new br();
          return br.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(br.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return br.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(br.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return br.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AddFriend_Request";
        }
      }
      class gr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            gr.prototype.invite_sent || a.Sg(gr.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            gr.sm_m ||
              (gr.sm_m = {
                proto: gr,
                fields: {
                  invite_sent: { n: 1, br: a.qM.readBool, bw: a.gp.writeBool },
                  friend_relationship: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  result: { n: 3, br: a.qM.readInt32, bw: a.gp.writeInt32 },
                },
              }),
            gr.sm_m
          );
        }
        static MBF() {
          return gr.sm_mbf || (gr.sm_mbf = a.w0(gr.M())), gr.sm_mbf;
        }
        toObject(e = !1) {
          return gr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(gr.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(gr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new gr();
          return gr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(gr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return gr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(gr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return gr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AddFriend_Response";
        }
      }
      class _r extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _r.prototype.steamid || a.Sg(_r.M()),
            l.initialize(this, e, 0, -1, void 0, null);
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
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                },
              }),
            _r.sm_m
          );
        }
        static MBF() {
          return _r.sm_mbf || (_r.sm_mbf = a.w0(_r.M())), _r.sm_mbf;
        }
        toObject(e = !1) {
          return _r.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(_r.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(_r.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _r();
          return _r.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(_r.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _r.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(_r.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _r.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RemoveFriend_Request";
        }
      }
      class zr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            zr.prototype.friend_relationship || a.Sg(zr.M()),
            l.initialize(this, e, 0, -1, void 0, null);
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
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            zr.sm_m
          );
        }
        static MBF() {
          return zr.sm_mbf || (zr.sm_mbf = a.w0(zr.M())), zr.sm_mbf;
        }
        toObject(e = !1) {
          return zr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(zr.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(zr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new zr();
          return zr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(zr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return zr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(zr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return zr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RemoveFriend_Response";
        }
      }
      class fr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            fr.prototype.steamid || a.Sg(fr.M()),
            l.initialize(this, e, 0, -1, void 0, null);
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
                    br: a.qM.readFixed64String,
                    bw: a.gp.writeFixed64String,
                  },
                  unignore: { n: 2, br: a.qM.readBool, bw: a.gp.writeBool },
                },
              }),
            fr.sm_m
          );
        }
        static MBF() {
          return fr.sm_mbf || (fr.sm_mbf = a.w0(fr.M())), fr.sm_mbf;
        }
        toObject(e = !1) {
          return fr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(fr.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(fr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new fr();
          return fr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(fr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return fr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(fr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return fr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IgnoreFriend_Request";
        }
      }
      class wr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            wr.prototype.friend_relationship || a.Sg(wr.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            wr.sm_m ||
              (wr.sm_m = {
                proto: wr,
                fields: {
                  friend_relationship: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            wr.sm_m
          );
        }
        static MBF() {
          return wr.sm_mbf || (wr.sm_mbf = a.w0(wr.M())), wr.sm_mbf;
        }
        toObject(e = !1) {
          return wr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(wr.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(wr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new wr();
          return wr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(wr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return wr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(wr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return wr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IgnoreFriend_Response";
        }
      }
      class Mr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Mr.prototype.parenthesize_nicknames || a.Sg(Mr.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Mr.sm_m ||
              (Mr.sm_m = {
                proto: Mr,
                fields: {
                  parenthesize_nicknames: {
                    n: 4,
                    d: !1,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  text_filter_setting: {
                    n: 5,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  text_filter_ignore_friends: {
                    n: 6,
                    d: !0,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  text_filter_words_revision: {
                    n: 7,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  timestamp_updated: {
                    n: 3,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            Mr.sm_m
          );
        }
        static MBF() {
          return Mr.sm_mbf || (Mr.sm_mbf = a.w0(Mr.M())), Mr.sm_mbf;
        }
        toObject(e = !1) {
          return Mr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Mr.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Mr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Mr();
          return Mr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Mr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Mr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Mr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Mr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_CommunityPreferences";
        }
      }
      class pr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
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
          let r = new i.BinaryReader(e),
            t = new pr();
          return pr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return pr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return pr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityPreferences_Request";
        }
      }
      class Sr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Sr.prototype.preferences || a.Sg(Sr.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Sr.sm_m ||
              (Sr.sm_m = {
                proto: Sr,
                fields: {
                  preferences: { n: 1, c: Mr },
                  content_descriptor_preferences: { n: 2, c: n.u2 },
                },
              }),
            Sr.sm_m
          );
        }
        static MBF() {
          return Sr.sm_mbf || (Sr.sm_mbf = a.w0(Sr.M())), Sr.sm_mbf;
        }
        toObject(e = !1) {
          return Sr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Sr.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Sr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Sr();
          return Sr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Sr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Sr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Sr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Sr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityPreferences_Response";
        }
      }
      class Rr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Rr.prototype.preferences || a.Sg(Rr.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Rr.sm_m ||
              (Rr.sm_m = {
                proto: Rr,
                fields: { preferences: { n: 1, c: Mr } },
              }),
            Rr.sm_m
          );
        }
        static MBF() {
          return Rr.sm_mbf || (Rr.sm_mbf = a.w0(Rr.M())), Rr.sm_mbf;
        }
        toObject(e = !1) {
          return Rr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Rr.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Rr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Rr();
          return Rr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Rr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Rr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Rr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Rr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetCommunityPreferences_Request";
        }
      }
      class Wr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Wr.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Wr();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Wr();
          return Wr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Wr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Wr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetCommunityPreferences_Response";
        }
      }
      class hr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            hr.prototype.text_filter_custom_banned_words || a.Sg(hr.M()),
            l.initialize(this, e, 0, -1, [1, 2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            hr.sm_m ||
              (hr.sm_m = {
                proto: hr,
                fields: {
                  text_filter_custom_banned_words: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.qM.readString,
                    bw: a.gp.writeRepeatedString,
                  },
                  text_filter_custom_clean_words: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.qM.readString,
                    bw: a.gp.writeRepeatedString,
                  },
                  text_filter_words_revision: {
                    n: 3,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            hr.sm_m
          );
        }
        static MBF() {
          return hr.sm_mbf || (hr.sm_mbf = a.w0(hr.M())), hr.sm_mbf;
        }
        toObject(e = !1) {
          return hr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(hr.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(hr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new hr();
          return hr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(hr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return hr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(hr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return hr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_TextFilterWords";
        }
      }
      class jr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
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
          let r = new i.BinaryReader(e),
            t = new jr();
          return jr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return jr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return jr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTextFilterWords_Request";
        }
      }
      class Fr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Fr.prototype.words || a.Sg(Fr.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Fr.sm_m ||
              (Fr.sm_m = { proto: Fr, fields: { words: { n: 1, c: hr } } }),
            Fr.sm_m
          );
        }
        static MBF() {
          return Fr.sm_mbf || (Fr.sm_mbf = a.w0(Fr.M())), Fr.sm_mbf;
        }
        toObject(e = !1) {
          return Fr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Fr.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Fr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Fr();
          return Fr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Fr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Fr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Fr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Fr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTextFilterWords_Response";
        }
      }
      class vr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            vr.prototype.language || a.Sg(vr.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            vr.sm_m ||
              (vr.sm_m = {
                proto: vr,
                fields: {
                  language: { n: 1, br: a.qM.readInt32, bw: a.gp.writeInt32 },
                },
              }),
            vr.sm_m
          );
        }
        static MBF() {
          return vr.sm_mbf || (vr.sm_mbf = a.w0(vr.M())), vr.sm_mbf;
        }
        toObject(e = !1) {
          return vr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(vr.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(vr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new vr();
          return vr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(vr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return vr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(vr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return vr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNewSteamAnnouncementState_Request";
        }
      }
      class Tr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Tr.prototype.state || a.Sg(Tr.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Tr.sm_m ||
              (Tr.sm_m = {
                proto: Tr,
                fields: {
                  state: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  announcement_headline: {
                    n: 2,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  announcement_url: {
                    n: 3,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  time_posted: {
                    n: 4,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  announcement_gid: {
                    n: 5,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                },
              }),
            Tr.sm_m
          );
        }
        static MBF() {
          return Tr.sm_mbf || (Tr.sm_mbf = a.w0(Tr.M())), Tr.sm_mbf;
        }
        toObject(e = !1) {
          return Tr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Tr.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Tr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Tr();
          return Tr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Tr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Tr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Tr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Tr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNewSteamAnnouncementState_Response";
        }
      }
      class Or extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Or.prototype.announcement_gid || a.Sg(Or.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Or.sm_m ||
              (Or.sm_m = {
                proto: Or,
                fields: {
                  announcement_gid: {
                    n: 1,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                  time_posted: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            Or.sm_m
          );
        }
        static MBF() {
          return Or.sm_mbf || (Or.sm_mbf = a.w0(Or.M())), Or.sm_mbf;
        }
        toObject(e = !1) {
          return Or.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Or.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Or.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Or();
          return Or.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Or.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Or.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Or.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Or.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_UpdateSteamAnnouncementLastRead_Request";
        }
      }
      class qr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
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
          let r = new i.BinaryReader(e),
            t = new qr();
          return qr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return qr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return qr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_UpdateSteamAnnouncementLastRead_Response";
        }
      }
      class Ir extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ir.prototype.privacy_state || a.Sg(Ir.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ir.sm_m ||
              (Ir.sm_m = {
                proto: Ir,
                fields: {
                  privacy_state: {
                    n: 1,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  privacy_state_inventory: {
                    n: 2,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  privacy_state_gifts: {
                    n: 3,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  privacy_state_ownedgames: {
                    n: 4,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  privacy_state_playtime: {
                    n: 5,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  privacy_state_friendslist: {
                    n: 6,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                },
              }),
            Ir.sm_m
          );
        }
        static MBF() {
          return Ir.sm_mbf || (Ir.sm_mbf = a.w0(Ir.M())), Ir.sm_mbf;
        }
        toObject(e = !1) {
          return Ir.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Ir.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Ir.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ir();
          return Ir.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Ir.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ir.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Ir.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ir.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPrivacySettings";
        }
      }
      class Pr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), l.initialize(this, e, 0, -1, void 0, null);
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
          let r = new i.BinaryReader(e),
            t = new Pr();
          return Pr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Pr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Pr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPrivacySettings_Request";
        }
      }
      class Ur extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ur.prototype.privacy_settings || a.Sg(Ur.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ur.sm_m ||
              (Ur.sm_m = {
                proto: Ur,
                fields: { privacy_settings: { n: 1, c: Ir } },
              }),
            Ur.sm_m
          );
        }
        static MBF() {
          return Ur.sm_mbf || (Ur.sm_mbf = a.w0(Ur.M())), Ur.sm_mbf;
        }
        toObject(e = !1) {
          return Ur.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Ur.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Ur.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ur();
          return Ur.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Ur.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ur.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Ur.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ur.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPrivacySettings_Response";
        }
      }
      class Cr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Cr.prototype.appid || a.Sg(Cr.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Cr.sm_m ||
              (Cr.sm_m = {
                proto: Cr,
                fields: {
                  appid: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                },
              }),
            Cr.sm_m
          );
        }
        static MBF() {
          return Cr.sm_mbf || (Cr.sm_mbf = a.w0(Cr.M())), Cr.sm_mbf;
        }
        toObject(e = !1) {
          return Cr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Cr.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Cr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Cr();
          return Cr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Cr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Cr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Cr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Cr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetDurationControl_Request";
        }
      }
      class xr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            xr.prototype.is_enabled || a.Sg(xr.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            xr.sm_m ||
              (xr.sm_m = {
                proto: xr,
                fields: {
                  is_enabled: { n: 1, br: a.qM.readBool, bw: a.gp.writeBool },
                  seconds: { n: 2, br: a.qM.readInt32, bw: a.gp.writeInt32 },
                  seconds_today: {
                    n: 3,
                    br: a.qM.readInt32,
                    bw: a.gp.writeInt32,
                  },
                  is_steamchina_account: {
                    n: 4,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  is_age_verified: {
                    n: 5,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  seconds_allowed_today: {
                    n: 6,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  age_verification_pending: {
                    n: 7,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  block_minors: { n: 8, br: a.qM.readBool, bw: a.gp.writeBool },
                },
              }),
            xr.sm_m
          );
        }
        static MBF() {
          return xr.sm_mbf || (xr.sm_mbf = a.w0(xr.M())), xr.sm_mbf;
        }
        toObject(e = !1) {
          return xr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(xr.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(xr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new xr();
          return xr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(xr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return xr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(xr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return xr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetDurationControl_Response";
        }
      }
      class Nr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Nr.prototype.games || a.Sg(Nr.M()),
            l.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Nr.sm_m ||
              (Nr.sm_m = {
                proto: Nr,
                fields: { games: { n: 1, c: d, r: !0, q: !0 } },
              }),
            Nr.sm_m
          );
        }
        static MBF() {
          return Nr.sm_mbf || (Nr.sm_mbf = a.w0(Nr.M())), Nr.sm_mbf;
        }
        toObject(e = !1) {
          return Nr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Nr.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Nr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Nr();
          return Nr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Nr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Nr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Nr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Nr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_LastPlayedTimes_Notification";
        }
      }
      class Gr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Gr.prototype.accountid || a.Sg(Gr.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Gr.sm_m ||
              (Gr.sm_m = {
                proto: Gr,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.qM.readFixed32,
                    bw: a.gp.writeFixed32,
                  },
                  nickname: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                  is_echo_to_self: {
                    n: 3,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                },
              }),
            Gr.sm_m
          );
        }
        static MBF() {
          return Gr.sm_mbf || (Gr.sm_mbf = a.w0(Gr.M())), Gr.sm_mbf;
        }
        toObject(e = !1) {
          return Gr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Gr.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Gr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Gr();
          return Gr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Gr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Gr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Gr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Gr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_FriendNicknameChanged_Notification";
        }
      }
      class kr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            kr.prototype.accountid || a.Sg(kr.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            kr.sm_m ||
              (kr.sm_m = {
                proto: kr,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.qM.readFixed32,
                    bw: a.gp.writeFixed32,
                  },
                },
              }),
            kr.sm_m
          );
        }
        static MBF() {
          return kr.sm_mbf || (kr.sm_mbf = a.w0(kr.M())), kr.sm_mbf;
        }
        toObject(e = !1) {
          return kr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(kr.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(kr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new kr();
          return kr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(kr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return kr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(kr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return kr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_FriendEquippedProfileItemsChanged_Notification";
        }
      }
      class Ar extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Ar.prototype.state || a.Sg(Ar.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Ar.sm_m ||
              (Ar.sm_m = {
                proto: Ar,
                fields: {
                  state: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  announcement_headline: {
                    n: 2,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  announcement_url: {
                    n: 3,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  time_posted: {
                    n: 4,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  announcement_gid: {
                    n: 5,
                    br: a.qM.readUint64String,
                    bw: a.gp.writeUint64String,
                  },
                },
              }),
            Ar.sm_m
          );
        }
        static MBF() {
          return Ar.sm_mbf || (Ar.sm_mbf = a.w0(Ar.M())), Ar.sm_mbf;
        }
        toObject(e = !1) {
          return Ar.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Ar.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Ar.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ar();
          return Ar.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Ar.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ar.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Ar.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ar.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_NewSteamAnnouncementState_Notification";
        }
      }
      class Er extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Er.prototype.preferences || a.Sg(Er.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Er.sm_m ||
              (Er.sm_m = {
                proto: Er,
                fields: {
                  preferences: { n: 1, c: Mr },
                  content_descriptor_preferences: { n: 2, c: n.u2 },
                },
              }),
            Er.sm_m
          );
        }
        static MBF() {
          return Er.sm_mbf || (Er.sm_mbf = a.w0(Er.M())), Er.sm_mbf;
        }
        toObject(e = !1) {
          return Er.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Er.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Er.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Er();
          return Er.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Er.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Er.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Er.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Er.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_CommunityPreferencesChanged_Notification";
        }
      }
      class Lr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Lr.prototype.words || a.Sg(Lr.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Lr.sm_m ||
              (Lr.sm_m = { proto: Lr, fields: { words: { n: 1, c: hr } } }),
            Lr.sm_m
          );
        }
        static MBF() {
          return Lr.sm_mbf || (Lr.sm_mbf = a.w0(Lr.M())), Lr.sm_mbf;
        }
        toObject(e = !1) {
          return Lr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Lr.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Lr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Lr();
          return Lr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Lr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Lr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Lr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Lr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_TextFilterWordsChanged_Notification";
        }
      }
      class Dr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Dr.prototype.accountid || a.Sg(Dr.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Dr.sm_m ||
              (Dr.sm_m = {
                proto: Dr,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.qM.readFixed32,
                    bw: a.gp.writeFixed32,
                  },
                  preferences: { n: 2, c: or },
                },
              }),
            Dr.sm_m
          );
        }
        static MBF() {
          return Dr.sm_mbf || (Dr.sm_mbf = a.w0(Dr.M())), Dr.sm_mbf;
        }
        toObject(e = !1) {
          return Dr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Dr.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Dr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Dr();
          return Dr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Dr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Dr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Dr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Dr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PerFriendPreferencesChanged_Notification";
        }
      }
      class Kr extends l {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            Kr.prototype.privacy_settings || a.Sg(Kr.M()),
            l.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            Kr.sm_m ||
              (Kr.sm_m = {
                proto: Kr,
                fields: { privacy_settings: { n: 1, c: Ir } },
              }),
            Kr.sm_m
          );
        }
        static MBF() {
          return Kr.sm_mbf || (Kr.sm_mbf = a.w0(Kr.M())), Kr.sm_mbf;
        }
        toObject(e = !1) {
          return Kr.toObject(e, this);
        }
        static toObject(e, r) {
          return a.BT(Kr.M(), e, r);
        }
        static fromObject(e) {
          return a.Uq(Kr.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Kr();
          return Kr.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.zj(Kr.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Kr.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.i0(Kr.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Kr.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PrivacySettingsChanged_Notification";
        }
      }
      var $r, Hr;
      !(function (e) {
        (e.GetRecentPlaytimeSessionsForChild = function (e, r) {
          return e.SendMsg(
            "Player.GetRecentPlaytimeSessionsForChild#1",
            (0, s.I8)(m, r),
            c,
            { bConstMethod: !0, ePrivilege: 1 },
          );
        }),
          (e.GetPlayerLinkDetails = function (e, r) {
            return e.SendMsg(
              "Player.GetPlayerLinkDetails#1",
              (0, s.I8)(y, r),
              b,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetMutualFriendsForIncomingInvites = function (e, r) {
            return e.SendMsg(
              "Player.GetMutualFriendsForIncomingInvites#1",
              (0, s.I8)(f, r),
              M,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetOwnedGames = function (e, r) {
            return e.SendMsg("Player.GetOwnedGames#1", (0, s.I8)(p, r), S, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetPlayNext = function (e, r) {
            return e.SendMsg("Player.GetPlayNext#1", (0, s.I8)(W, r), h, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetFriendsGameplayInfo = function (e, r) {
            return e.SendMsg(
              "Player.GetFriendsGameplayInfo#1",
              (0, s.I8)(Ze, r),
              er,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetGameBadgeLevels = function (e, r) {
            return e.SendMsg(
              "Player.GetGameBadgeLevels#1",
              (0, s.I8)(T, r),
              O,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetProfileBackground = function (e, r) {
            return e.SendMsg(
              "Player.GetProfileBackground#1",
              (0, s.I8)(U, r),
              C,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetProfileBackground = function (e, r) {
            return e.SendMsg(
              "Player.SetProfileBackground#1",
              (0, s.I8)(x, r),
              N,
              { ePrivilege: 1 },
            );
          }),
          (e.GetMiniProfileBackground = function (e, r) {
            return e.SendMsg(
              "Player.GetMiniProfileBackground#1",
              (0, s.I8)(G, r),
              k,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetMiniProfileBackground = function (e, r) {
            return e.SendMsg(
              "Player.SetMiniProfileBackground#1",
              (0, s.I8)(A, r),
              E,
              { ePrivilege: 1 },
            );
          }),
          (e.GetAvatarFrame = function (e, r) {
            return e.SendMsg("Player.GetAvatarFrame#1", (0, s.I8)(L, r), D, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.SetAvatarFrame = function (e, r) {
            return e.SendMsg("Player.SetAvatarFrame#1", (0, s.I8)(K, r), $, {
              ePrivilege: 1,
            });
          }),
          (e.GetAnimatedAvatar = function (e, r) {
            return e.SendMsg("Player.GetAnimatedAvatar#1", (0, s.I8)(H, r), Q, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.SetAnimatedAvatar = function (e, r) {
            return e.SendMsg("Player.SetAnimatedAvatar#1", (0, s.I8)(V, r), J, {
              ePrivilege: 1,
            });
          }),
          (e.GetSteamDeckKeyboardSkin = function (e, r) {
            return e.SendMsg(
              "Player.GetSteamDeckKeyboardSkin#1",
              (0, s.I8)(X, r),
              Y,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetSteamDeckKeyboardSkin = function (e, r) {
            return e.SendMsg(
              "Player.SetSteamDeckKeyboardSkin#1",
              (0, s.I8)(Z, r),
              ee,
              { ePrivilege: 1 },
            );
          }),
          (e.GetProfileItemsOwned = function (e, r) {
            return e.SendMsg(
              "Player.GetProfileItemsOwned#1",
              (0, s.I8)(re, r),
              te,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.GetProfileItemsEquipped = function (e, r) {
            return e.SendMsg(
              "Player.GetProfileItemsEquipped#1",
              (0, s.I8)(ie, r),
              ae,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetEquippedProfileItemFlags = function (e, r) {
            return e.SendMsg(
              "Player.SetEquippedProfileItemFlags#1",
              (0, s.I8)(se, r),
              ne,
              { ePrivilege: 1 },
            );
          }),
          (e.GetEmoticonList = function (e, r) {
            return e.SendMsg("Player.GetEmoticonList#1", (0, s.I8)(le, r), me, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetCommunityBadgeProgress = function (e, r) {
            return e.SendMsg(
              "Player.GetCommunityBadgeProgress#1",
              (0, s.I8)(oe, r),
              ue,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetTopAchievementsForGames = function (e, r) {
            return e.SendMsg(
              "Player.GetTopAchievementsForGames#1",
              (0, s.I8)(fe, r),
              we,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetAchievementsProgress = function (e, r) {
            return e.SendMsg(
              "Player.GetAchievementsProgress#1",
              (0, s.I8)(Se, r),
              Re,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }),
          (e.GetGameAchievements = function (e, r) {
            return e.SendMsg(
              "Player.GetGameAchievements#1",
              (0, s.I8)(he, r),
              je,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetFavoriteBadge = function (e, r) {
            return e.SendMsg(
              "Player.GetFavoriteBadge#1",
              (0, s.I8)(ve, r),
              Te,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.SetFavoriteBadge = function (e, r) {
            return e.SendMsg(
              "Player.SetFavoriteBadge#1",
              (0, s.I8)(Oe, r),
              qe,
              { ePrivilege: 1 },
            );
          }),
          (e.GetProfileCustomization = function (e, r) {
            return e.SendMsg(
              "Player.GetProfileCustomization#1",
              (0, s.I8)(xe, r),
              Ne,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetPurchasedProfileCustomizations = function (e, r) {
            return e.SendMsg(
              "Player.GetPurchasedProfileCustomizations#1",
              (0, s.I8)(ke, r),
              Ae,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetPurchasedAndUpgradedProfileCustomizations = function (e, r) {
            return e.SendMsg(
              "Player.GetPurchasedAndUpgradedProfileCustomizations#1",
              (0, s.I8)(Le, r),
              De,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetProfileThemesAvailable = function (e, r) {
            return e.SendMsg(
              "Player.GetProfileThemesAvailable#1",
              (0, s.I8)(He, r),
              Qe,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetProfileTheme = function (e, r) {
            return e.SendMsg("Player.SetProfileTheme#1", (0, s.I8)(Ve, r), Je, {
              ePrivilege: 1,
            });
          }),
          (e.SetProfilePreferences = function (e, r) {
            return e.SendMsg(
              "Player.SetProfilePreferences#1",
              (0, s.I8)(Xe, r),
              Ye,
              { ePrivilege: 1 },
            );
          }),
          (e.PostStatusToFriends = function (e, r) {
            return e.SendMsg(
              "Player.PostStatusToFriends#1",
              (0, s.I8)(de, r),
              ye,
              { ePrivilege: 3 },
            );
          }),
          (e.GetPostedStatus = function (e, r) {
            return e.SendMsg("Player.GetPostedStatus#1", (0, s.I8)(be, r), ge, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.DeletePostedStatus = function (e, r) {
            return e.SendMsg(
              "Player.DeletePostedStatus#1",
              (0, s.I8)(_e, r),
              ze,
              { ePrivilege: 1 },
            );
          }),
          (e.ClientGetLastPlayedTimes = function (e, r) {
            return e.SendMsg(
              "Player.ClientGetLastPlayedTimes#1",
              (0, s.I8)(u, r),
              B,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }),
          (e.GetTimeSSAAccepted = function (e, r) {
            return e.SendMsg(
              "Player.GetTimeSSAAccepted#1",
              (0, s.I8)(ir, r),
              ar,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.AcceptSSA = function (e, r) {
            return e.SendMsg("Player.AcceptSSA#1", (0, s.I8)(sr, r), nr, {
              ePrivilege: 1,
            });
          }),
          (e.GetNicknameList = function (e, r) {
            return e.SendMsg("Player.GetNicknameList#1", (0, s.I8)(lr, r), mr, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetPerFriendPreferences = function (e, r) {
            return e.SendMsg(
              "Player.GetPerFriendPreferences#1",
              (0, s.I8)(ur, r),
              Br,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.SetPerFriendPreferences = function (e, r) {
            return e.SendMsg(
              "Player.SetPerFriendPreferences#1",
              (0, s.I8)(dr, r),
              yr,
              { ePrivilege: 1 },
            );
          }),
          (e.AddFriend = function (e, r) {
            return e.SendMsg("Player.AddFriend#1", (0, s.I8)(br, r), gr, {
              ePrivilege: 1,
            });
          }),
          (e.RemoveFriend = function (e, r) {
            return e.SendMsg("Player.RemoveFriend#1", (0, s.I8)(_r, r), zr, {
              ePrivilege: 1,
            });
          }),
          (e.IgnoreFriend = function (e, r) {
            return e.SendMsg("Player.IgnoreFriend#1", (0, s.I8)(fr, r), wr, {
              ePrivilege: 1,
            });
          }),
          (e.GetCommunityPreferences = function (e, r) {
            return e.SendMsg(
              "Player.GetCommunityPreferences#1",
              (0, s.I8)(pr, r),
              Sr,
              { ePrivilege: 1 },
            );
          }),
          (e.SetCommunityPreferences = function (e, r) {
            return e.SendMsg(
              "Player.SetCommunityPreferences#1",
              (0, s.I8)(Rr, r),
              Wr,
              { ePrivilege: 1 },
            );
          }),
          (e.GetTextFilterWords = function (e, r) {
            return e.SendMsg(
              "Player.GetTextFilterWords#1",
              (0, s.I8)(jr, r),
              Fr,
              { ePrivilege: 1 },
            );
          }),
          (e.GetNewSteamAnnouncementState = function (e, r) {
            return e.SendMsg(
              "Player.GetNewSteamAnnouncementState#1",
              (0, s.I8)(vr, r),
              Tr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }),
          (e.UpdateSteamAnnouncementLastRead = function (e, r) {
            return e.SendMsg(
              "Player.UpdateSteamAnnouncementLastRead#1",
              (0, s.I8)(Or, r),
              qr,
              { ePrivilege: 1 },
            );
          }),
          (e.GetPrivacySettings = function (e, r) {
            return e.SendMsg(
              "Player.GetPrivacySettings#1",
              (0, s.I8)(Pr, r),
              Ur,
              { ePrivilege: 1 },
            );
          }),
          (e.GetDurationControl = function (e, r) {
            return e.SendMsg(
              "Player.GetDurationControl#1",
              (0, s.I8)(Cr, r),
              xr,
              { ePrivilege: 1 },
            );
          }),
          (e.RecordDisconnectedPlaytime = function (e, r) {
            return e.SendMsg(
              "Player.RecordDisconnectedPlaytime#1",
              (0, s.I8)(j, r),
              v,
              { ePrivilege: 1 },
            );
          });
      })($r || ($r = {})),
        (function (e) {
          (e.NotifyLastPlayedTimesHandler = {
            name: "PlayerClient.NotifyLastPlayedTimes#1",
            request: Nr,
          }),
            (e.NotifyFriendNicknameChangedHandler = {
              name: "PlayerClient.NotifyFriendNicknameChanged#1",
              request: Gr,
            }),
            (e.NotifyFriendEquippedProfileItemsChangedHandler = {
              name: "PlayerClient.NotifyFriendEquippedProfileItemsChanged#1",
              request: kr,
            }),
            (e.NotifyNewSteamAnnouncementStateHandler = {
              name: "PlayerClient.NotifyNewSteamAnnouncementState#1",
              request: Ar,
            }),
            (e.NotifyCommunityPreferencesChangedHandler = {
              name: "PlayerClient.NotifyCommunityPreferencesChanged#1",
              request: Er,
            }),
            (e.NotifyTextFilterWordsChangedHandler = {
              name: "PlayerClient.NotifyTextFilterWordsChanged#1",
              request: Lr,
            }),
            (e.NotifyPerFriendPreferencesChangedHandler = {
              name: "PlayerClient.NotifyPerFriendPreferencesChanged#1",
              request: Dr,
            }),
            (e.NotifyPrivacyPrivacySettingsChangedHandler = {
              name: "PlayerClient.NotifyPrivacyPrivacySettingsChanged#1",
              request: Kr,
            });
        })(Hr || (Hr = {}));
    },
  },
]);
