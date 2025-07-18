import {
  a as ot,
  b as a,
  c as s,
  d as o,
  e as l,
  f as d,
  g as m,
  h as P,
  i as u,
  n as F,
  u as c,
} from "./chunk-5YCHQL3Y.js";
import { e as nt } from "./chunk-UUUEXOLW.js";
var i = nt(ot());
var z = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              steamid: {
                n: 1,
                br: a.readUint64String,
                bw: s.writeUint64String,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetRecentPlaytimeSessionsForChild_Request";
    }
  },
  w = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.sessions || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { sessions: { n: 1, c: H, r: !0, q: !0 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetRecentPlaytimeSessionsForChild_Response";
    }
  },
  H = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.time_start || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              time_start: { n: 1, br: a.readUint32, bw: s.writeUint32 },
              time_end: { n: 2, br: a.readUint32, bw: s.writeUint32 },
              appid: { n: 3, br: a.readUint32, bw: s.writeUint32 },
              device_type: { n: 4, br: a.readUint32, bw: s.writeUint32 },
              disconnected: { n: 5, br: a.readBool, bw: s.writeBool },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetRecentPlaytimeSessionsForChild_Response_PlaytimeSession";
    }
  },
  M = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.min_last_played || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              min_last_played: { n: 1, br: a.readUint32, bw: s.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetLastPlayedTimes_Request";
    }
  },
  h = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.games || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { games: { n: 1, c: B, r: !0, q: !0 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetLastPlayedTimes_Response";
    }
  },
  B = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.appid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              appid: { n: 1, br: a.readInt32, bw: s.writeInt32 },
              last_playtime: { n: 2, br: a.readUint32, bw: s.writeUint32 },
              playtime_2weeks: { n: 3, br: a.readInt32, bw: s.writeInt32 },
              playtime_forever: { n: 4, br: a.readInt32, bw: s.writeInt32 },
              first_playtime: { n: 5, br: a.readUint32, bw: s.writeUint32 },
              playtime_windows_forever: {
                n: 6,
                br: a.readInt32,
                bw: s.writeInt32,
              },
              playtime_mac_forever: { n: 7, br: a.readInt32, bw: s.writeInt32 },
              playtime_linux_forever: {
                n: 8,
                br: a.readInt32,
                bw: s.writeInt32,
              },
              playtime_deck_forever: {
                n: 16,
                br: a.readInt32,
                bw: s.writeInt32,
              },
              first_windows_playtime: {
                n: 9,
                br: a.readUint32,
                bw: s.writeUint32,
              },
              first_mac_playtime: {
                n: 10,
                br: a.readUint32,
                bw: s.writeUint32,
              },
              first_linux_playtime: {
                n: 11,
                br: a.readUint32,
                bw: s.writeUint32,
              },
              first_deck_playtime: {
                n: 17,
                br: a.readUint32,
                bw: s.writeUint32,
              },
              last_windows_playtime: {
                n: 12,
                br: a.readUint32,
                bw: s.writeUint32,
              },
              last_mac_playtime: { n: 13, br: a.readUint32, bw: s.writeUint32 },
              last_linux_playtime: {
                n: 14,
                br: a.readUint32,
                bw: s.writeUint32,
              },
              last_deck_playtime: {
                n: 18,
                br: a.readUint32,
                bw: s.writeUint32,
              },
              playtime_disconnected: {
                n: 15,
                br: a.readUint32,
                bw: s.writeUint32,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetLastPlayedTimes_Response_Game";
    }
  },
  A = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamids || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              steamids: {
                n: 1,
                r: !0,
                q: !0,
                br: a.readUint64String,
                pbr: a.readPackedUint64String,
                bw: s.writeRepeatedUint64String,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPlayerLinkDetails_Request";
    }
  },
  j = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.accounts || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { accounts: { n: 1, c: W, r: !0, q: !0 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPlayerLinkDetails_Response";
    }
  },
  W = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.public_data || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              public_data: { n: 1, c: q },
              private_data: { n: 2, c: T },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails";
    }
  },
  q = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              steamid: {
                n: 1,
                q: !0,
                br: a.readFixed64String,
                bw: s.writeFixed64String,
              },
              visibility_state: { n: 2, br: a.readInt32, bw: s.writeInt32 },
              privacy_state: { n: 3, br: a.readInt32, bw: s.writeInt32 },
              profile_state: { n: 4, br: a.readInt32, bw: s.writeInt32 },
              ban_expires_time: { n: 7, br: a.readUint32, bw: s.writeUint32 },
              account_flags: { n: 8, br: a.readUint32, bw: s.writeUint32 },
              sha_digest_avatar: { n: 9, br: a.readBytes, bw: s.writeBytes },
              persona_name: { n: 10, br: a.readString, bw: s.writeString },
              profile_url: { n: 11, br: a.readString, bw: s.writeString },
              content_country_restricted: {
                n: 12,
                br: a.readBool,
                bw: s.writeBool,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPublicData";
    }
  },
  T = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.persona_state || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              persona_state: { n: 1, br: a.readInt32, bw: s.writeInt32 },
              persona_state_flags: {
                n: 2,
                br: a.readUint32,
                bw: s.writeUint32,
              },
              time_created: { n: 3, br: a.readUint32, bw: s.writeUint32 },
              game_id: {
                n: 4,
                br: a.readFixed64String,
                bw: s.writeFixed64String,
              },
              game_server_steam_id: {
                n: 5,
                br: a.readFixed64String,
                bw: s.writeFixed64String,
              },
              game_server_ip_address: {
                n: 6,
                br: a.readUint32,
                bw: s.writeUint32,
              },
              game_server_port: { n: 7, br: a.readUint32, bw: s.writeUint32 },
              game_extra_info: { n: 8, br: a.readString, bw: s.writeString },
              account_name: { n: 9, br: a.readString, bw: s.writeString },
              lobby_steam_id: {
                n: 10,
                br: a.readFixed64String,
                bw: s.writeFixed64String,
              },
              rich_presence_kv: { n: 11, br: a.readString, bw: s.writeString },
              broadcast_session_id: {
                n: 12,
                br: a.readFixed64String,
                bw: s.writeFixed64String,
              },
              watching_broadcast_accountid: {
                n: 13,
                br: a.readUint32,
                bw: s.writeUint32,
              },
              watching_broadcast_appid: {
                n: 14,
                br: a.readUint32,
                bw: s.writeUint32,
              },
              watching_broadcast_viewers: {
                n: 15,
                br: a.readUint32,
                bw: s.writeUint32,
              },
              watching_broadcast_title: {
                n: 16,
                br: a.readString,
                bw: s.writeString,
              },
              last_logoff_time: { n: 17, br: a.readUint32, bw: s.writeUint32 },
              last_seen_online: { n: 18, br: a.readUint32, bw: s.writeUint32 },
              game_os_type: { n: 19, br: a.readInt32, bw: s.writeInt32 },
              game_device_type: { n: 20, br: a.readInt32, bw: s.writeInt32 },
              game_device_name: { n: 21, br: a.readString, bw: s.writeString },
              game_is_private: { n: 22, br: a.readBool, bw: s.writeBool },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPrivateData";
    }
  },
  I = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(e) {
      return new r();
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetMutualFriendsForIncomingInvites_Request";
    }
  },
  x = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              steamid: {
                n: 1,
                br: a.readFixed64String,
                bw: s.writeFixed64String,
              },
              mutual_friend_account_ids: {
                n: 2,
                r: !0,
                q: !0,
                br: a.readUint32,
                pbr: a.readPackedUint32,
                bw: s.writeRepeatedUint32,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_IncomingInviteMutualFriendList";
    }
  },
  k = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.incoming_invite_mutual_friends_lists || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              incoming_invite_mutual_friends_lists: {
                n: 1,
                c: x,
                r: !0,
                q: !0,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetMutualFriendsForIncomingInvites_Response";
    }
  },
  O = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              steamid: {
                n: 1,
                br: a.readUint64String,
                bw: s.writeUint64String,
              },
              include_appinfo: { n: 2, br: a.readBool, bw: s.writeBool },
              include_played_free_games: {
                n: 3,
                br: a.readBool,
                bw: s.writeBool,
              },
              appids_filter: {
                n: 4,
                r: !0,
                q: !0,
                br: a.readUint32,
                pbr: a.readPackedUint32,
                bw: s.writeRepeatedUint32,
              },
              include_free_sub: { n: 5, br: a.readBool, bw: s.writeBool },
              skip_unvetted_apps: {
                n: 6,
                d: !0,
                br: a.readBool,
                bw: s.writeBool,
              },
              language: { n: 7, br: a.readString, bw: s.writeString },
              include_extended_appinfo: {
                n: 8,
                br: a.readBool,
                bw: s.writeBool,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetOwnedGames_Request";
    }
  },
  N = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.game_count || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              game_count: { n: 1, br: a.readUint32, bw: s.writeUint32 },
              games: { n: 2, c: D, r: !0, q: !0 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetOwnedGames_Response";
    }
  },
  D = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.appid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [18], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              appid: { n: 1, br: a.readInt32, bw: s.writeInt32 },
              name: { n: 2, br: a.readString, bw: s.writeString },
              playtime_2weeks: { n: 3, br: a.readInt32, bw: s.writeInt32 },
              playtime_forever: { n: 4, br: a.readInt32, bw: s.writeInt32 },
              img_icon_url: { n: 5, br: a.readString, bw: s.writeString },
              has_community_visible_stats: {
                n: 7,
                br: a.readBool,
                bw: s.writeBool,
              },
              playtime_windows_forever: {
                n: 8,
                br: a.readInt32,
                bw: s.writeInt32,
              },
              playtime_mac_forever: { n: 9, br: a.readInt32, bw: s.writeInt32 },
              playtime_linux_forever: {
                n: 10,
                br: a.readInt32,
                bw: s.writeInt32,
              },
              playtime_deck_forever: {
                n: 20,
                br: a.readInt32,
                bw: s.writeInt32,
              },
              rtime_last_played: { n: 11, br: a.readUint32, bw: s.writeUint32 },
              capsule_filename: { n: 12, br: a.readString, bw: s.writeString },
              sort_as: { n: 13, br: a.readString, bw: s.writeString },
              has_workshop: { n: 14, br: a.readBool, bw: s.writeBool },
              has_market: { n: 15, br: a.readBool, bw: s.writeBool },
              has_dlc: { n: 16, br: a.readBool, bw: s.writeBool },
              has_leaderboards: { n: 17, br: a.readBool, bw: s.writeBool },
              content_descriptorids: {
                n: 18,
                r: !0,
                q: !0,
                br: a.readUint32,
                pbr: a.readPackedUint32,
                bw: s.writeRepeatedUint32,
              },
              playtime_disconnected: {
                n: 19,
                br: a.readInt32,
                bw: s.writeInt32,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetOwnedGames_Response_Game";
    }
  },
  U = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.max_age_seconds || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              max_age_seconds: { n: 1, br: a.readUint32, bw: s.writeUint32 },
              ignore_appids: {
                n: 2,
                r: !0,
                q: !0,
                br: a.readUint32,
                pbr: a.readPackedUint32,
                bw: s.writeRepeatedUint32,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPlayNext_Request";
    }
  },
  L = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.last_update_time || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              last_update_time: { n: 1, br: a.readUint32, bw: s.writeUint32 },
              appids: {
                n: 2,
                r: !0,
                q: !0,
                br: a.readUint32,
                pbr: a.readPackedUint32,
                bw: s.writeRepeatedUint32,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPlayNext_Response";
    }
  },
  E = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.play_sessions || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { play_sessions: { n: 3, c: K, r: !0, q: !0 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_RecordDisconnectedPlaytime_Request";
    }
  },
  K = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.appid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              appid: { n: 1, br: a.readUint32, bw: s.writeUint32 },
              session_time_start: { n: 2, br: a.readUint32, bw: s.writeUint32 },
              seconds: { n: 3, br: a.readUint32, bw: s.writeUint32 },
              offline: { n: 4, br: a.readBool, bw: s.writeBool },
              owner: { n: 5, br: a.readUint32, bw: s.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_RecordDisconnectedPlaytime_Request_PlayHistory";
    }
  },
  $ = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(e) {
      return new r();
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_RecordDisconnectedPlaytime_Response";
    }
  },
  Q = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.appid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { appid: { n: 1, br: a.readUint32, bw: s.writeUint32 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetGameBadgeLevels_Request";
    }
  },
  V = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.player_level || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              player_level: { n: 1, br: a.readUint32, bw: s.writeUint32 },
              badges: { n: 2, c: Y, r: !0, q: !0 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetGameBadgeLevels_Response";
    }
  },
  Y = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.level || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              level: { n: 1, br: a.readInt32, bw: s.writeInt32 },
              series: { n: 2, br: a.readInt32, bw: s.writeInt32 },
              border_color: { n: 3, br: a.readUint32, bw: s.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetGameBadgeLevels_Response_Badge";
    }
  },
  y = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.communityitemid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [15], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              communityitemid: {
                n: 1,
                br: a.readUint64String,
                bw: s.writeUint64String,
              },
              image_small: { n: 2, br: a.readString, bw: s.writeString },
              image_large: { n: 3, br: a.readString, bw: s.writeString },
              name: { n: 4, br: a.readString, bw: s.writeString },
              item_title: { n: 5, br: a.readString, bw: s.writeString },
              item_description: { n: 6, br: a.readString, bw: s.writeString },
              appid: { n: 7, br: a.readUint32, bw: s.writeUint32 },
              item_type: { n: 8, br: a.readUint32, bw: s.writeUint32 },
              item_class: { n: 9, br: a.readUint32, bw: s.writeUint32 },
              movie_webm: { n: 10, br: a.readString, bw: s.writeString },
              movie_mp4: { n: 11, br: a.readString, bw: s.writeString },
              movie_webm_small: { n: 13, br: a.readString, bw: s.writeString },
              movie_mp4_small: { n: 14, br: a.readString, bw: s.writeString },
              equipped_flags: { n: 12, br: a.readUint32, bw: s.writeUint32 },
              profile_colors: { n: 15, c: J, r: !0, q: !0 },
              tiled: { n: 16, br: a.readBool, bw: s.writeBool },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "ProfileItem";
    }
  },
  J = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.style_name || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              style_name: { n: 1, br: a.readString, bw: s.writeString },
              color: { n: 2, br: a.readString, bw: s.writeString },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "ProfileItem_ProfileColor";
    }
  },
  X = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              steamid: {
                n: 1,
                br: a.readFixed64String,
                bw: s.writeFixed64String,
              },
              language: { n: 2, br: a.readString, bw: s.writeString },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetProfileBackground_Request";
    }
  },
  Z = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.profile_background || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { profile_background: { n: 1, c: y } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetProfileBackground_Response";
    }
  },
  ee = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.communityitemid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              communityitemid: {
                n: 1,
                br: a.readUint64String,
                bw: s.writeUint64String,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetProfileBackground_Request";
    }
  },
  re = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(e) {
      return new r();
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetProfileBackground_Response";
    }
  },
  te = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              steamid: {
                n: 1,
                br: a.readFixed64String,
                bw: s.writeFixed64String,
              },
              language: { n: 2, br: a.readString, bw: s.writeString },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetMiniProfileBackground_Request";
    }
  },
  ie = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.profile_background || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { profile_background: { n: 1, c: y } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetMiniProfileBackground_Response";
    }
  },
  ae = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.communityitemid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              communityitemid: {
                n: 1,
                br: a.readUint64String,
                bw: s.writeUint64String,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetMiniProfileBackground_Request";
    }
  },
  se = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(e) {
      return new r();
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetMiniProfileBackground_Response";
    }
  },
  ne = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              steamid: {
                n: 1,
                br: a.readFixed64String,
                bw: s.writeFixed64String,
              },
              language: { n: 2, br: a.readString, bw: s.writeString },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetAvatarFrame_Request";
    }
  },
  oe = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.avatar_frame || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = { proto: r, fields: { avatar_frame: { n: 1, c: y } } }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetAvatarFrame_Response";
    }
  },
  le = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.communityitemid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              communityitemid: {
                n: 1,
                br: a.readUint64String,
                bw: s.writeUint64String,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetAvatarFrame_Request";
    }
  },
  de = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(e) {
      return new r();
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetAvatarFrame_Response";
    }
  },
  me = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              steamid: {
                n: 1,
                br: a.readFixed64String,
                bw: s.writeFixed64String,
              },
              language: { n: 2, br: a.readString, bw: s.writeString },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetAnimatedAvatar_Request";
    }
  },
  Pe = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.avatar || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m || (r.sm_m = { proto: r, fields: { avatar: { n: 1, c: y } } }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetAnimatedAvatar_Response";
    }
  },
  ue = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.communityitemid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              communityitemid: {
                n: 1,
                br: a.readUint64String,
                bw: s.writeUint64String,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetAnimatedAvatar_Request";
    }
  },
  pe = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(e) {
      return new r();
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetAnimatedAvatar_Response";
    }
  },
  _e = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              steamid: {
                n: 1,
                br: a.readFixed64String,
                bw: s.writeFixed64String,
              },
              language: { n: 2, br: a.readString, bw: s.writeString },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetSteamDeckKeyboardSkin_Request";
    }
  },
  ce = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steam_deck_keyboard_skin || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { steam_deck_keyboard_skin: { n: 1, c: y } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetSteamDeckKeyboardSkin_Response";
    }
  },
  ye = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.communityitemid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              communityitemid: {
                n: 1,
                br: a.readUint64String,
                bw: s.writeUint64String,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetSteamDeckKeyboardSkin_Request";
    }
  },
  fe = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(e) {
      return new r();
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetSteamDeckKeyboardSkin_Response";
    }
  },
  Ce = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.language || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              language: { n: 1, br: a.readString, bw: s.writeString },
              filters: {
                n: 2,
                r: !0,
                q: !0,
                br: a.readEnum,
                pbr: a.readPackedEnum,
                bw: s.writeRepeatedEnum,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetProfileItemsOwned_Request";
    }
  },
  Re = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.profile_backgrounds || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [1, 2, 3, 4, 5, 6, 7], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              profile_backgrounds: { n: 1, c: y, r: !0, q: !0 },
              mini_profile_backgrounds: { n: 2, c: y, r: !0, q: !0 },
              avatar_frames: { n: 3, c: y, r: !0, q: !0 },
              animated_avatars: { n: 4, c: y, r: !0, q: !0 },
              profile_modifiers: { n: 5, c: y, r: !0, q: !0 },
              steam_deck_keyboard_skins: { n: 6, c: y, r: !0, q: !0 },
              steam_deck_startup_movies: { n: 7, c: y, r: !0, q: !0 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetProfileItemsOwned_Response";
    }
  },
  ge = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              steamid: {
                n: 1,
                br: a.readFixed64String,
                bw: s.writeFixed64String,
              },
              language: { n: 2, br: a.readString, bw: s.writeString },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetProfileItemsEquipped_Request";
    }
  },
  Be = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.profile_background || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              profile_background: { n: 1, c: y },
              mini_profile_background: { n: 2, c: y },
              avatar_frame: { n: 3, c: y },
              animated_avatar: { n: 4, c: y },
              profile_modifier: { n: 5, c: y },
              steam_deck_keyboard_skin: { n: 6, c: y },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetProfileItemsEquipped_Response";
    }
  },
  be = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.communityitemid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              communityitemid: {
                n: 1,
                br: a.readUint64String,
                bw: s.writeUint64String,
              },
              flags: { n: 2, br: a.readUint32, bw: s.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetEquippedProfileItemFlags_Request";
    }
  },
  ve = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(e) {
      return new r();
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetEquippedProfileItemFlags_Response";
    }
  },
  Se = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(e) {
      return new r();
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetEmoticonList_Request";
    }
  },
  Ge = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.emoticons || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { emoticons: { n: 1, c: Fe, r: !0, q: !0 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetEmoticonList_Response";
    }
  },
  Fe = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.name || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              name: { n: 1, br: a.readString, bw: s.writeString },
              count: { n: 2, br: a.readInt32, bw: s.writeInt32 },
              time_last_used: { n: 3, br: a.readUint32, bw: s.writeUint32 },
              use_count: { n: 4, br: a.readUint32, bw: s.writeUint32 },
              time_received: { n: 5, br: a.readUint32, bw: s.writeUint32 },
              appid: { n: 6, br: a.readUint32, bw: s.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetEmoticonList_Response_Emoticon";
    }
  },
  ze = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              steamid: {
                n: 1,
                br: a.readUint64String,
                bw: s.writeUint64String,
              },
              badgeid: { n: 2, br: a.readInt32, bw: s.writeInt32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetCommunityBadgeProgress_Request";
    }
  },
  we = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.quests || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { quests: { n: 1, c: He, r: !0, q: !0 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetCommunityBadgeProgress_Response";
    }
  },
  He = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.questid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              questid: { n: 1, br: a.readUint32, bw: s.writeUint32 },
              completed: { n: 2, br: a.readBool, bw: s.writeBool },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetCommunityBadgeProgress_Response_Quest";
    }
  },
  Me = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.appid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              appid: { n: 1, br: a.readUint32, bw: s.writeUint32 },
              status_text: { n: 2, br: a.readString, bw: s.writeString },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_PostStatusToFriends_Request";
    }
  },
  he = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(e) {
      return new r();
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_PostStatusToFriends_Response";
    }
  },
  Ae = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              steamid: {
                n: 1,
                br: a.readUint64String,
                bw: s.writeUint64String,
              },
              postid: { n: 2, br: a.readUint64String, bw: s.writeUint64String },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPostedStatus_Request";
    }
  },
  je = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.accountid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              accountid: { n: 1, br: a.readUint32, bw: s.writeUint32 },
              postid: { n: 2, br: a.readUint64String, bw: s.writeUint64String },
              status_text: { n: 3, br: a.readString, bw: s.writeString },
              deleted: { n: 4, br: a.readBool, bw: s.writeBool },
              appid: { n: 5, br: a.readUint32, bw: s.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPostedStatus_Response";
    }
  },
  We = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.postid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              postid: { n: 1, br: a.readUint64String, bw: s.writeUint64String },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_DeletePostedStatus_Request";
    }
  },
  qe = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(e) {
      return new r();
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_DeletePostedStatus_Response";
    }
  },
  Te = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              steamid: {
                n: 1,
                br: a.readUint64String,
                bw: s.writeUint64String,
              },
              language: { n: 2, br: a.readString, bw: s.writeString },
              max_achievements: { n: 3, br: a.readUint32, bw: s.writeUint32 },
              appids: {
                n: 4,
                r: !0,
                q: !0,
                br: a.readUint32,
                pbr: a.readPackedUint32,
                bw: s.writeRepeatedUint32,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetTopAchievementsForGames_Request";
    }
  },
  Ie = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.games || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { games: { n: 1, c: ke, r: !0, q: !0 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetTopAchievementsForGames_Response";
    }
  },
  xe = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.statid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              statid: { n: 1, br: a.readUint32, bw: s.writeUint32 },
              bit: { n: 2, br: a.readUint32, bw: s.writeUint32 },
              name: { n: 3, br: a.readString, bw: s.writeString },
              desc: { n: 4, br: a.readString, bw: s.writeString },
              icon: { n: 5, br: a.readString, bw: s.writeString },
              icon_gray: { n: 6, br: a.readString, bw: s.writeString },
              hidden: { n: 7, br: a.readBool, bw: s.writeBool },
              player_percent_unlocked: {
                n: 8,
                br: a.readString,
                bw: s.writeString,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetTopAchievementsForGames_Response_Achievement";
    }
  },
  ke = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.appid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              appid: { n: 1, br: a.readUint32, bw: s.writeUint32 },
              total_achievements: { n: 2, br: a.readUint32, bw: s.writeUint32 },
              achievements: { n: 3, c: xe, r: !0, q: !0 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetTopAchievementsForGames_Response_Game";
    }
  },
  Oe = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              steamid: {
                n: 1,
                br: a.readUint64String,
                bw: s.writeUint64String,
              },
              language: { n: 2, br: a.readString, bw: s.writeString },
              appids: {
                n: 3,
                r: !0,
                q: !0,
                br: a.readUint32,
                pbr: a.readPackedUint32,
                bw: s.writeRepeatedUint32,
              },
              include_unvetted_apps: { n: 4, br: a.readBool, bw: s.writeBool },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetAchievementsProgress_Request";
    }
  },
  Ne = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.achievement_progress || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { achievement_progress: { n: 1, c: De, r: !0, q: !0 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetAchievementsProgress_Response";
    }
  },
  De = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.appid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              appid: { n: 1, br: a.readUint32, bw: s.writeUint32 },
              unlocked: { n: 2, br: a.readUint32, bw: s.writeUint32 },
              total: { n: 3, br: a.readUint32, bw: s.writeUint32 },
              percentage: { n: 4, br: a.readFloat, bw: s.writeFloat },
              all_unlocked: { n: 5, br: a.readBool, bw: s.writeBool },
              cache_time: { n: 6, br: a.readUint32, bw: s.writeUint32 },
              vetted: { n: 7, br: a.readBool, bw: s.writeBool },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetAchievementsProgress_Response_AchievementProgress";
    }
  },
  Ue = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.appid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              appid: { n: 1, br: a.readUint32, bw: s.writeUint32 },
              language: { n: 2, br: a.readString, bw: s.writeString },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetGameAchievements_Request";
    }
  },
  Le = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.achievements || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { achievements: { n: 1, c: Ee, r: !0, q: !0 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetGameAchievements_Response";
    }
  },
  Ee = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.internal_name || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              internal_name: { n: 1, br: a.readString, bw: s.writeString },
              localized_name: { n: 2, br: a.readString, bw: s.writeString },
              localized_desc: { n: 3, br: a.readString, bw: s.writeString },
              icon: { n: 4, br: a.readString, bw: s.writeString },
              icon_gray: { n: 5, br: a.readString, bw: s.writeString },
              hidden: { n: 6, br: a.readBool, bw: s.writeBool },
              player_percent_unlocked: {
                n: 7,
                br: a.readString,
                bw: s.writeString,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetGameAchievements_Response_Achievement";
    }
  },
  Ke = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              steamid: {
                n: 1,
                br: a.readUint64String,
                bw: s.writeUint64String,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetFavoriteBadge_Request";
    }
  },
  $e = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.has_favorite_badge || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              has_favorite_badge: { n: 1, br: a.readBool, bw: s.writeBool },
              badgeid: { n: 2, br: a.readUint32, bw: s.writeUint32 },
              communityitemid: {
                n: 3,
                br: a.readUint64String,
                bw: s.writeUint64String,
              },
              item_type: { n: 4, br: a.readUint32, bw: s.writeUint32 },
              border_color: { n: 5, br: a.readUint32, bw: s.writeUint32 },
              appid: { n: 6, br: a.readUint32, bw: s.writeUint32 },
              level: { n: 7, br: a.readUint32, bw: s.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetFavoriteBadge_Response";
    }
  },
  Qe = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.communityitemid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              communityitemid: {
                n: 1,
                br: a.readUint64String,
                bw: s.writeUint64String,
              },
              badgeid: { n: 2, br: a.readUint32, bw: s.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetFavoriteBadge_Request";
    }
  },
  Ve = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(e) {
      return new r();
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetFavoriteBadge_Response";
    }
  },
  Ye = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.slot || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              slot: { n: 1, br: a.readUint32, bw: s.writeUint32 },
              appid: { n: 2, br: a.readUint32, bw: s.writeUint32 },
              publishedfileid: {
                n: 3,
                br: a.readUint64String,
                bw: s.writeUint64String,
              },
              item_assetid: {
                n: 4,
                br: a.readUint64String,
                bw: s.writeUint64String,
              },
              item_contextid: {
                n: 5,
                br: a.readUint64String,
                bw: s.writeUint64String,
              },
              notes: { n: 6, br: a.readString, bw: s.writeString },
              title: { n: 7, br: a.readString, bw: s.writeString },
              accountid: { n: 8, br: a.readUint32, bw: s.writeUint32 },
              badgeid: { n: 9, br: a.readUint32, bw: s.writeUint32 },
              border_color: { n: 10, br: a.readUint32, bw: s.writeUint32 },
              item_classid: {
                n: 11,
                br: a.readUint64String,
                bw: s.writeUint64String,
              },
              item_instanceid: {
                n: 12,
                br: a.readUint64String,
                bw: s.writeUint64String,
              },
              ban_check_result: { n: 13, br: a.readEnum, bw: s.writeEnum },
              replay_year: { n: 14, br: a.readUint32, bw: s.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "ProfileCustomizationSlot";
    }
  },
  Je = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.customization_type || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              customization_type: { n: 1, br: a.readEnum, bw: s.writeEnum },
              large: { n: 2, br: a.readBool, bw: s.writeBool },
              slots: { n: 3, c: Ye, r: !0, q: !0 },
              active: { n: 4, br: a.readBool, bw: s.writeBool },
              customization_style: { n: 5, br: a.readEnum, bw: s.writeEnum },
              purchaseid: {
                n: 6,
                br: a.readUint64String,
                bw: s.writeUint64String,
              },
              level: { n: 7, br: a.readUint32, bw: s.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "ProfileCustomization";
    }
  },
  b = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.theme_id || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              theme_id: { n: 1, br: a.readString, bw: s.writeString },
              title: { n: 2, br: a.readString, bw: s.writeString },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "ProfileTheme";
    }
  },
  v = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.hide_profile_awards || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              hide_profile_awards: { n: 1, br: a.readBool, bw: s.writeBool },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "ProfilePreferences";
    }
  },
  Xe = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              steamid: {
                n: 1,
                br: a.readFixed64String,
                bw: s.writeFixed64String,
              },
              include_inactive_customizations: {
                n: 2,
                br: a.readBool,
                bw: s.writeBool,
              },
              include_purchased_customizations: {
                n: 3,
                br: a.readBool,
                bw: s.writeBool,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetProfileCustomization_Request";
    }
  },
  Ze = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.customizations || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [1, 4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              customizations: { n: 1, c: Je, r: !0, q: !0 },
              slots_available: { n: 2, br: a.readUint32, bw: s.writeUint32 },
              profile_theme: { n: 3, c: b },
              purchased_customizations: { n: 4, c: er, r: !0, q: !0 },
              profile_preferences: { n: 5, c: v },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetProfileCustomization_Response";
    }
  },
  er = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.purchaseid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              purchaseid: {
                n: 1,
                br: a.readUint64String,
                bw: s.writeUint64String,
              },
              customization_type: { n: 2, br: a.readEnum, bw: s.writeEnum },
              level: { n: 3, br: a.readUint32, bw: s.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetProfileCustomization_Response_PurchasedCustomization";
    }
  },
  rr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              steamid: {
                n: 1,
                br: a.readFixed64String,
                bw: s.writeFixed64String,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPurchasedProfileCustomizations_Request";
    }
  },
  tr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.purchased_customizations || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { purchased_customizations: { n: 1, c: ir, r: !0, q: !0 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPurchasedProfileCustomizations_Response";
    }
  },
  ir = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.purchaseid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              purchaseid: {
                n: 1,
                br: a.readUint64String,
                bw: s.writeUint64String,
              },
              customization_type: { n: 2, br: a.readEnum, bw: s.writeEnum },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPurchasedProfileCustomizations_Response_PurchasedCustomization";
    }
  },
  ar = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              steamid: {
                n: 1,
                br: a.readFixed64String,
                bw: s.writeFixed64String,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request";
    }
  },
  sr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.purchased_customizations || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              purchased_customizations: { n: 1, c: nr, r: !0, q: !0 },
              upgraded_customizations: { n: 2, c: or, r: !0, q: !0 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response";
    }
  },
  nr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.customization_type || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              customization_type: { n: 1, br: a.readEnum, bw: s.writeEnum },
              count: { n: 2, br: a.readUint32, bw: s.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_PurchasedCustomization";
    }
  },
  or = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.customization_type || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              customization_type: { n: 1, br: a.readEnum, bw: s.writeEnum },
              level: { n: 2, br: a.readUint32, bw: s.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_UpgradedCustomization";
    }
  },
  lr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(e) {
      return new r();
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetProfileThemesAvailable_Request";
    }
  },
  dr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.profile_themes || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { profile_themes: { n: 1, c: b, r: !0, q: !0 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetProfileThemesAvailable_Response";
    }
  },
  mr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.theme_id || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { theme_id: { n: 1, br: a.readString, bw: s.writeString } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetProfileTheme_Request";
    }
  },
  Pr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(e) {
      return new r();
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetProfileTheme_Response";
    }
  },
  ur = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.profile_preferences || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { profile_preferences: { n: 1, c: v } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetProfilePreferences_Request";
    }
  },
  pr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(e) {
      return new r();
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetProfilePreferences_Response";
    }
  },
  _r = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.appid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { appid: { n: 1, br: a.readUint32, bw: s.writeUint32 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetFriendsGameplayInfo_Request";
    }
  },
  cr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.your_info || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [2, 3, 4, 5, 6], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              your_info: { n: 1, c: yr },
              in_game: { n: 2, c: C, r: !0, q: !0 },
              played_recently: { n: 3, c: C, r: !0, q: !0 },
              played_ever: { n: 4, c: C, r: !0, q: !0 },
              owns: { n: 5, c: C, r: !0, q: !0 },
              in_wishlist: { n: 6, c: C, r: !0, q: !0 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetFriendsGameplayInfo_Response";
    }
  },
  C = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              steamid: {
                n: 1,
                br: a.readFixed64String,
                bw: s.writeFixed64String,
              },
              minutes_played: { n: 2, br: a.readUint32, bw: s.writeUint32 },
              minutes_played_forever: {
                n: 3,
                br: a.readUint32,
                bw: s.writeUint32,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo";
    }
  },
  yr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              steamid: {
                n: 1,
                br: a.readFixed64String,
                bw: s.writeFixed64String,
              },
              minutes_played: { n: 2, br: a.readUint32, bw: s.writeUint32 },
              minutes_played_forever: {
                n: 3,
                br: a.readUint32,
                bw: s.writeUint32,
              },
              in_wishlist: { n: 4, br: a.readBool, bw: s.writeBool },
              owned: { n: 5, br: a.readBool, bw: s.writeBool },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetFriendsGameplayInfo_Response_OwnGameplayInfo";
    }
  },
  fr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(e) {
      return new r();
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetTimeSSAAccepted_Request";
    }
  },
  Cr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.time_ssa_accepted || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              time_ssa_accepted: { n: 1, br: a.readUint32, bw: s.writeUint32 },
              time_ssa_updated: { n: 2, br: a.readUint32, bw: s.writeUint32 },
              time_chinassa_accepted: {
                n: 3,
                br: a.readUint32,
                bw: s.writeUint32,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetTimeSSAAccepted_Response";
    }
  },
  Rr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.agreement_type || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              agreement_type: { n: 1, br: a.readEnum, bw: s.writeEnum },
              time_signed_utc: { n: 2, br: a.readUint32, bw: s.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_AcceptSSA_Request";
    }
  },
  gr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(e) {
      return new r();
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_AcceptSSA_Response";
    }
  },
  Br = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(e) {
      return new r();
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetNicknameList_Request";
    }
  },
  br = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.nicknames || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { nicknames: { n: 1, c: vr, r: !0, q: !0 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetNicknameList_Response";
    }
  },
  vr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.accountid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              accountid: { n: 1, br: a.readFixed32, bw: s.writeFixed32 },
              nickname: { n: 2, br: a.readString, bw: s.writeString },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetNicknameList_Response_PlayerNickname";
    }
  },
  R = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.accountid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              accountid: { n: 1, br: a.readFixed32, bw: s.writeFixed32 },
              nickname: { n: 2, br: a.readString, bw: s.writeString },
              notifications_showingame: {
                n: 3,
                br: a.readEnum,
                bw: s.writeEnum,
              },
              notifications_showonline: {
                n: 4,
                br: a.readEnum,
                bw: s.writeEnum,
              },
              notifications_showmessages: {
                n: 5,
                br: a.readEnum,
                bw: s.writeEnum,
              },
              sounds_showingame: { n: 6, br: a.readEnum, bw: s.writeEnum },
              sounds_showonline: { n: 7, br: a.readEnum, bw: s.writeEnum },
              sounds_showmessages: { n: 8, br: a.readEnum, bw: s.writeEnum },
              notifications_sendmobile: {
                n: 9,
                br: a.readEnum,
                bw: s.writeEnum,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "PerFriendPreferences";
    }
  },
  Sr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(e) {
      return new r();
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPerFriendPreferences_Request";
    }
  },
  Gr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.preferences || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { preferences: { n: 1, c: R, r: !0, q: !0 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPerFriendPreferences_Response";
    }
  },
  Fr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.preferences || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = { proto: r, fields: { preferences: { n: 1, c: R } } }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetPerFriendPreferences_Request";
    }
  },
  zr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(e) {
      return new r();
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetPerFriendPreferences_Response";
    }
  },
  wr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              steamid: {
                n: 1,
                br: a.readFixed64String,
                bw: s.writeFixed64String,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_AddFriend_Request";
    }
  },
  Hr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.invite_sent || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              invite_sent: { n: 1, br: a.readBool, bw: s.writeBool },
              friend_relationship: {
                n: 2,
                br: a.readUint32,
                bw: s.writeUint32,
              },
              result: { n: 3, br: a.readInt32, bw: s.writeInt32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_AddFriend_Response";
    }
  },
  Mr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              steamid: {
                n: 1,
                br: a.readFixed64String,
                bw: s.writeFixed64String,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_RemoveFriend_Request";
    }
  },
  hr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.friend_relationship || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              friend_relationship: {
                n: 1,
                br: a.readUint32,
                bw: s.writeUint32,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_RemoveFriend_Response";
    }
  },
  Ar = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              steamid: {
                n: 1,
                br: a.readFixed64String,
                bw: s.writeFixed64String,
              },
              unignore: { n: 2, br: a.readBool, bw: s.writeBool },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_IgnoreFriend_Request";
    }
  },
  jr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.friend_relationship || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              friend_relationship: {
                n: 1,
                br: a.readUint32,
                bw: s.writeUint32,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_IgnoreFriend_Response";
    }
  },
  g = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.parenthesize_nicknames || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              parenthesize_nicknames: {
                n: 4,
                d: !1,
                br: a.readBool,
                bw: s.writeBool,
              },
              text_filter_setting: { n: 5, br: a.readEnum, bw: s.writeEnum },
              text_filter_ignore_friends: {
                n: 6,
                d: !0,
                br: a.readBool,
                bw: s.writeBool,
              },
              text_filter_words_revision: {
                n: 7,
                br: a.readUint32,
                bw: s.writeUint32,
              },
              timestamp_updated: { n: 3, br: a.readUint32, bw: s.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_CommunityPreferences";
    }
  },
  Wr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(e) {
      return new r();
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetCommunityPreferences_Request";
    }
  },
  qr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.preferences || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              preferences: { n: 1, c: g },
              content_descriptor_preferences: { n: 2, c: F },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetCommunityPreferences_Response";
    }
  },
  Tr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.preferences || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = { proto: r, fields: { preferences: { n: 1, c: g } } }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetCommunityPreferences_Request";
    }
  },
  Ir = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(e) {
      return new r();
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetCommunityPreferences_Response";
    }
  },
  S = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.text_filter_custom_banned_words || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              text_filter_custom_banned_words: {
                n: 1,
                r: !0,
                q: !0,
                br: a.readString,
                bw: s.writeRepeatedString,
              },
              text_filter_custom_clean_words: {
                n: 2,
                r: !0,
                q: !0,
                br: a.readString,
                bw: s.writeRepeatedString,
              },
              text_filter_words_revision: {
                n: 3,
                br: a.readUint32,
                bw: s.writeUint32,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_TextFilterWords";
    }
  },
  xr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(e) {
      return new r();
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetTextFilterWords_Request";
    }
  },
  kr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.words || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m || (r.sm_m = { proto: r, fields: { words: { n: 1, c: S } } }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetTextFilterWords_Response";
    }
  },
  Or = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.language || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { language: { n: 1, br: a.readInt32, bw: s.writeInt32 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetNewSteamAnnouncementState_Request";
    }
  },
  Nr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.state || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              state: { n: 1, br: a.readEnum, bw: s.writeEnum },
              announcement_headline: {
                n: 2,
                br: a.readString,
                bw: s.writeString,
              },
              announcement_url: { n: 3, br: a.readString, bw: s.writeString },
              time_posted: { n: 4, br: a.readUint32, bw: s.writeUint32 },
              announcement_gid: {
                n: 5,
                br: a.readUint64String,
                bw: s.writeUint64String,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetNewSteamAnnouncementState_Response";
    }
  },
  Dr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.announcement_gid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              announcement_gid: {
                n: 1,
                br: a.readUint64String,
                bw: s.writeUint64String,
              },
              time_posted: { n: 2, br: a.readUint32, bw: s.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_UpdateSteamAnnouncementLastRead_Request";
    }
  },
  Ur = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(e) {
      return new r();
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_UpdateSteamAnnouncementLastRead_Response";
    }
  },
  G = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.privacy_state || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              privacy_state: { n: 1, br: a.readInt32, bw: s.writeInt32 },
              privacy_state_inventory: {
                n: 2,
                br: a.readInt32,
                bw: s.writeInt32,
              },
              privacy_state_gifts: { n: 3, br: a.readInt32, bw: s.writeInt32 },
              privacy_state_ownedgames: {
                n: 4,
                br: a.readInt32,
                bw: s.writeInt32,
              },
              privacy_state_playtime: {
                n: 5,
                br: a.readInt32,
                bw: s.writeInt32,
              },
              privacy_state_friendslist: {
                n: 6,
                br: a.readInt32,
                bw: s.writeInt32,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPrivacySettings";
    }
  },
  Lr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(e) {
      return new r();
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPrivacySettings_Request";
    }
  },
  Er = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.privacy_settings || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = { proto: r, fields: { privacy_settings: { n: 1, c: G } } }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPrivacySettings_Response";
    }
  },
  Kr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.appid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { appid: { n: 1, br: a.readUint32, bw: s.writeUint32 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetDurationControl_Request";
    }
  },
  $r = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.is_enabled || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              is_enabled: { n: 1, br: a.readBool, bw: s.writeBool },
              seconds: { n: 2, br: a.readInt32, bw: s.writeInt32 },
              seconds_today: { n: 3, br: a.readInt32, bw: s.writeInt32 },
              is_steamchina_account: { n: 4, br: a.readBool, bw: s.writeBool },
              is_age_verified: { n: 5, br: a.readBool, bw: s.writeBool },
              seconds_allowed_today: {
                n: 6,
                br: a.readUint32,
                bw: s.writeUint32,
              },
              age_verification_pending: {
                n: 7,
                br: a.readBool,
                bw: s.writeBool,
              },
              block_minors: { n: 8, br: a.readBool, bw: s.writeBool },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetDurationControl_Response";
    }
  },
  Qr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.games || u(r.M()),
        i.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { games: { n: 1, c: B, r: !0, q: !0 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_LastPlayedTimes_Notification";
    }
  },
  Vr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.accountid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              accountid: { n: 1, br: a.readFixed32, bw: s.writeFixed32 },
              nickname: { n: 2, br: a.readString, bw: s.writeString },
              is_echo_to_self: { n: 3, br: a.readBool, bw: s.writeBool },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_FriendNicknameChanged_Notification";
    }
  },
  Yr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.accountid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              accountid: { n: 1, br: a.readFixed32, bw: s.writeFixed32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_FriendEquippedProfileItemsChanged_Notification";
    }
  },
  Jr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.state || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              state: { n: 1, br: a.readEnum, bw: s.writeEnum },
              announcement_headline: {
                n: 2,
                br: a.readString,
                bw: s.writeString,
              },
              announcement_url: { n: 3, br: a.readString, bw: s.writeString },
              time_posted: { n: 4, br: a.readUint32, bw: s.writeUint32 },
              announcement_gid: {
                n: 5,
                br: a.readUint64String,
                bw: s.writeUint64String,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_NewSteamAnnouncementState_Notification";
    }
  },
  Xr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.preferences || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              preferences: { n: 1, c: g },
              content_descriptor_preferences: { n: 2, c: F },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_CommunityPreferencesChanged_Notification";
    }
  },
  Zr = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.words || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m || (r.sm_m = { proto: r, fields: { words: { n: 1, c: S } } }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_TextFilterWordsChanged_Notification";
    }
  },
  et = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.accountid || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              accountid: { n: 1, br: a.readFixed32, bw: s.writeFixed32 },
              preferences: { n: 2, c: R },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_PerFriendPreferencesChanged_Notification";
    }
  },
  rt = class r extends i.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.privacy_settings || u(r.M()),
        i.Message.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = { proto: r, fields: { privacy_settings: { n: 1, c: G } } }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = o(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return d(r.M(), e, t);
    }
    static fromObject(e) {
      return l(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.default.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return m(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      P(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.default.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_PrivacySettingsChanged_Notification";
    }
  },
  lt;
((ei) => {
  function r(p, _) {
    return p.SendMsg("Player.GetRecentPlaytimeSessionsForChild#1", c(z, _), w, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ei.GetRecentPlaytimeSessionsForChild = r;
  function e(p, _) {
    return p.SendMsg("Player.GetPlayerLinkDetails#1", c(A, _), j, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  ei.GetPlayerLinkDetails = e;
  function t(p, _) {
    return p.SendMsg(
      "Player.GetMutualFriendsForIncomingInvites#1",
      c(I, _),
      k,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  ei.GetMutualFriendsForIncomingInvites = t;
  function n(p, _) {
    return p.SendMsg("Player.GetOwnedGames#1", c(O, _), N, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  ei.GetOwnedGames = n;
  function tt(p, _) {
    return p.SendMsg("Player.GetPlayNext#1", c(U, _), L, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ei.GetPlayNext = tt;
  function it(p, _) {
    return p.SendMsg("Player.GetFriendsGameplayInfo#1", c(_r, _), cr, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ei.GetFriendsGameplayInfo = it;
  function at(p, _) {
    return p.SendMsg("Player.GetGameBadgeLevels#1", c(Q, _), V, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ei.GetGameBadgeLevels = at;
  function st(p, _) {
    return p.SendMsg("Player.GetProfileBackground#1", c(X, _), Z, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  ei.GetProfileBackground = st;
  function f(p, _) {
    return p.SendMsg("Player.SetProfileBackground#1", c(ee, _), re, {
      ePrivilege: 1,
    });
  }
  ei.SetProfileBackground = f;
  function mt(p, _) {
    return p.SendMsg("Player.GetMiniProfileBackground#1", c(te, _), ie, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  ei.GetMiniProfileBackground = mt;
  function Pt(p, _) {
    return p.SendMsg("Player.SetMiniProfileBackground#1", c(ae, _), se, {
      ePrivilege: 1,
    });
  }
  ei.SetMiniProfileBackground = Pt;
  function ut(p, _) {
    return p.SendMsg("Player.GetAvatarFrame#1", c(ne, _), oe, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  ei.GetAvatarFrame = ut;
  function pt(p, _) {
    return p.SendMsg("Player.SetAvatarFrame#1", c(le, _), de, {
      ePrivilege: 1,
    });
  }
  ei.SetAvatarFrame = pt;
  function _t(p, _) {
    return p.SendMsg("Player.GetAnimatedAvatar#1", c(me, _), Pe, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  ei.GetAnimatedAvatar = _t;
  function ct(p, _) {
    return p.SendMsg("Player.SetAnimatedAvatar#1", c(ue, _), pe, {
      ePrivilege: 1,
    });
  }
  ei.SetAnimatedAvatar = ct;
  function yt(p, _) {
    return p.SendMsg("Player.GetSteamDeckKeyboardSkin#1", c(_e, _), ce, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  ei.GetSteamDeckKeyboardSkin = yt;
  function ft(p, _) {
    return p.SendMsg("Player.SetSteamDeckKeyboardSkin#1", c(ye, _), fe, {
      ePrivilege: 1,
    });
  }
  ei.SetSteamDeckKeyboardSkin = ft;
  function Ct(p, _) {
    return p.SendMsg("Player.GetProfileItemsOwned#1", c(Ce, _), Re, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ei.GetProfileItemsOwned = Ct;
  function Rt(p, _) {
    return p.SendMsg("Player.GetProfileItemsEquipped#1", c(ge, _), Be, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  ei.GetProfileItemsEquipped = Rt;
  function gt(p, _) {
    return p.SendMsg("Player.SetEquippedProfileItemFlags#1", c(be, _), ve, {
      ePrivilege: 1,
    });
  }
  ei.SetEquippedProfileItemFlags = gt;
  function Bt(p, _) {
    return p.SendMsg("Player.GetEmoticonList#1", c(Se, _), Ge, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ei.GetEmoticonList = Bt;
  function bt(p, _) {
    return p.SendMsg("Player.GetCommunityBadgeProgress#1", c(ze, _), we, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 2,
    });
  }
  ei.GetCommunityBadgeProgress = bt;
  function vt(p, _) {
    return p.SendMsg("Player.GetTopAchievementsForGames#1", c(Te, _), Ie, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 2,
    });
  }
  ei.GetTopAchievementsForGames = vt;
  function St(p, _) {
    return p.SendMsg("Player.GetAchievementsProgress#1", c(Oe, _), Ne, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  ei.GetAchievementsProgress = St;
  function Gt(p, _) {
    return p.SendMsg("Player.GetGameAchievements#1", c(Ue, _), Le, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  ei.GetGameAchievements = Gt;
  function Ft(p, _) {
    return p.SendMsg("Player.GetFavoriteBadge#1", c(Ke, _), $e, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  ei.GetFavoriteBadge = Ft;
  function zt(p, _) {
    return p.SendMsg("Player.SetFavoriteBadge#1", c(Qe, _), Ve, {
      ePrivilege: 1,
    });
  }
  ei.SetFavoriteBadge = zt;
  function wt(p, _) {
    return p.SendMsg("Player.GetProfileCustomization#1", c(Xe, _), Ze, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  ei.GetProfileCustomization = wt;
  function Ht(p, _) {
    return p.SendMsg(
      "Player.GetPurchasedProfileCustomizations#1",
      c(rr, _),
      tr,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  ei.GetPurchasedProfileCustomizations = Ht;
  function Mt(p, _) {
    return p.SendMsg(
      "Player.GetPurchasedAndUpgradedProfileCustomizations#1",
      c(ar, _),
      sr,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  ei.GetPurchasedAndUpgradedProfileCustomizations = Mt;
  function ht(p, _) {
    return p.SendMsg("Player.GetProfileThemesAvailable#1", c(lr, _), dr, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ei.GetProfileThemesAvailable = ht;
  function At(p, _) {
    return p.SendMsg("Player.SetProfileTheme#1", c(mr, _), Pr, {
      ePrivilege: 1,
    });
  }
  ei.SetProfileTheme = At;
  function jt(p, _) {
    return p.SendMsg("Player.SetProfilePreferences#1", c(ur, _), pr, {
      ePrivilege: 1,
    });
  }
  ei.SetProfilePreferences = jt;
  function Wt(p, _) {
    return p.SendMsg("Player.PostStatusToFriends#1", c(Me, _), he, {
      ePrivilege: 3,
    });
  }
  ei.PostStatusToFriends = Wt;
  function qt(p, _) {
    return p.SendMsg("Player.GetPostedStatus#1", c(Ae, _), je, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ei.GetPostedStatus = qt;
  function Tt(p, _) {
    return p.SendMsg("Player.DeletePostedStatus#1", c(We, _), qe, {
      ePrivilege: 1,
    });
  }
  ei.DeletePostedStatus = Tt;
  function It(p, _) {
    return p.SendMsg("Player.ClientGetLastPlayedTimes#1", c(M, _), h, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  ei.ClientGetLastPlayedTimes = It;
  function xt(p, _) {
    return p.SendMsg("Player.GetTimeSSAAccepted#1", c(fr, _), Cr, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ei.GetTimeSSAAccepted = xt;
  function kt(p, _) {
    return p.SendMsg("Player.AcceptSSA#1", c(Rr, _), gr, { ePrivilege: 1 });
  }
  ei.AcceptSSA = kt;
  function Ot(p, _) {
    return p.SendMsg("Player.GetNicknameList#1", c(Br, _), br, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ei.GetNicknameList = Ot;
  function Nt(p, _) {
    return p.SendMsg("Player.GetPerFriendPreferences#1", c(Sr, _), Gr, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ei.GetPerFriendPreferences = Nt;
  function Dt(p, _) {
    return p.SendMsg("Player.SetPerFriendPreferences#1", c(Fr, _), zr, {
      ePrivilege: 1,
    });
  }
  ei.SetPerFriendPreferences = Dt;
  function Ut(p, _) {
    return p.SendMsg("Player.AddFriend#1", c(wr, _), Hr, { ePrivilege: 1 });
  }
  ei.AddFriend = Ut;
  function Lt(p, _) {
    return p.SendMsg("Player.RemoveFriend#1", c(Mr, _), hr, { ePrivilege: 1 });
  }
  ei.RemoveFriend = Lt;
  function Et(p, _) {
    return p.SendMsg("Player.IgnoreFriend#1", c(Ar, _), jr, { ePrivilege: 1 });
  }
  ei.IgnoreFriend = Et;
  function Kt(p, _) {
    return p.SendMsg("Player.GetCommunityPreferences#1", c(Wr, _), qr, {
      ePrivilege: 1,
    });
  }
  ei.GetCommunityPreferences = Kt;
  function $t(p, _) {
    return p.SendMsg("Player.SetCommunityPreferences#1", c(Tr, _), Ir, {
      ePrivilege: 1,
    });
  }
  ei.SetCommunityPreferences = $t;
  function Qt(p, _) {
    return p.SendMsg("Player.GetTextFilterWords#1", c(xr, _), kr, {
      ePrivilege: 1,
    });
  }
  ei.GetTextFilterWords = Qt;
  function Vt(p, _) {
    return p.SendMsg("Player.GetNewSteamAnnouncementState#1", c(Or, _), Nr, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ei.GetNewSteamAnnouncementState = Vt;
  function Yt(p, _) {
    return p.SendMsg("Player.UpdateSteamAnnouncementLastRead#1", c(Dr, _), Ur, {
      ePrivilege: 1,
    });
  }
  ei.UpdateSteamAnnouncementLastRead = Yt;
  function Jt(p, _) {
    return p.SendMsg("Player.GetPrivacySettings#1", c(Lr, _), Er, {
      ePrivilege: 1,
    });
  }
  ei.GetPrivacySettings = Jt;
  function Xt(p, _) {
    return p.SendMsg("Player.GetDurationControl#1", c(Kr, _), $r, {
      ePrivilege: 1,
    });
  }
  ei.GetDurationControl = Xt;
  function Zt(p, _) {
    return p.SendMsg("Player.RecordDisconnectedPlaytime#1", c(E, _), $, {
      ePrivilege: 1,
    });
  }
  ei.RecordDisconnectedPlaytime = Zt;
})((lt ||= {}));
var dt;
((f) => (
  (f.NotifyLastPlayedTimesHandler = {
    name: "PlayerClient.NotifyLastPlayedTimes#1",
    request: Qr,
  }),
  (f.NotifyFriendNicknameChangedHandler = {
    name: "PlayerClient.NotifyFriendNicknameChanged#1",
    request: Vr,
  }),
  (f.NotifyFriendEquippedProfileItemsChangedHandler = {
    name: "PlayerClient.NotifyFriendEquippedProfileItemsChanged#1",
    request: Yr,
  }),
  (f.NotifyNewSteamAnnouncementStateHandler = {
    name: "PlayerClient.NotifyNewSteamAnnouncementState#1",
    request: Jr,
  }),
  (f.NotifyCommunityPreferencesChangedHandler = {
    name: "PlayerClient.NotifyCommunityPreferencesChanged#1",
    request: Xr,
  }),
  (f.NotifyTextFilterWordsChangedHandler = {
    name: "PlayerClient.NotifyTextFilterWordsChanged#1",
    request: Zr,
  }),
  (f.NotifyPerFriendPreferencesChangedHandler = {
    name: "PlayerClient.NotifyPerFriendPreferencesChanged#1",
    request: et,
  }),
  (f.NotifyPrivacyPrivacySettingsChangedHandler = {
    name: "PlayerClient.NotifyPrivacyPrivacySettingsChanged#1",
    request: rt,
  })
))((dt ||= {}));
export { M as a, Br as b, g as c, Wr as d, S as e, xr as f, lt as g };
