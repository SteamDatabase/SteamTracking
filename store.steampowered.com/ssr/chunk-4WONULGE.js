const CLSTAMP = 9564007;

import {
  a as Pt,
  b as s,
  c as a,
  d as l,
  e as d,
  f as m,
  g as P,
  h as p,
  i as u,
  n as w,
  u as y,
} from "./chunk-X3WGCX3P.js";
import { a as mt } from "./chunk-YWB64WUS.js";
import { d as st } from "./chunk-EBDYFHBQ.js";
var C = st(mt()),
  at = (0, C.createContext)(void 0),
  pt = at.Provider;
function ni(r) {
  let { steamid: e, children: t } = r,
    n = (0, C.useMemo)(() => ({ useActiveAccount: () => e ?? "" }), [e]);
  return (0, C.createElement)(pt, { value: n }, t);
}
function oi() {
  let r = (0, C.useContext)(at);
  if (!r)
    throw new Error("called useActiveAccount outside of ActiveAccountProvider");
  return r.useActiveAccount();
}
var i = st(Pt());
var o = i.Message;
var H = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readUint64String,
                bw: a.writeUint64String,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetRecentPlaytimeSessionsForChild_Request";
    }
  },
  j = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.sessions || u(r.M()),
        o.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { sessions: { n: 1, c: M, r: !0, q: !0 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetRecentPlaytimeSessionsForChild_Response";
    }
  },
  M = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.time_start || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              time_start: { n: 1, br: s.readUint32, bw: a.writeUint32 },
              time_end: { n: 2, br: s.readUint32, bw: a.writeUint32 },
              appid: { n: 3, br: s.readUint32, bw: a.writeUint32 },
              device_type: { n: 4, br: s.readUint32, bw: a.writeUint32 },
              disconnected: { n: 5, br: s.readBool, bw: a.writeBool },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetRecentPlaytimeSessionsForChild_Response_PlaytimeSession";
    }
  },
  h = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.min_last_played || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              min_last_played: { n: 1, br: s.readUint32, bw: a.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetLastPlayedTimes_Request";
    }
  },
  A = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.games || u(r.M()),
        o.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { games: { n: 1, c: v, r: !0, q: !0 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetLastPlayedTimes_Response";
    }
  },
  v = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.appid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              appid: { n: 1, br: s.readInt32, bw: a.writeInt32 },
              last_playtime: { n: 2, br: s.readUint32, bw: a.writeUint32 },
              playtime_2weeks: { n: 3, br: s.readInt32, bw: a.writeInt32 },
              playtime_forever: { n: 4, br: s.readInt32, bw: a.writeInt32 },
              first_playtime: { n: 5, br: s.readUint32, bw: a.writeUint32 },
              playtime_windows_forever: {
                n: 6,
                br: s.readInt32,
                bw: a.writeInt32,
              },
              playtime_mac_forever: { n: 7, br: s.readInt32, bw: a.writeInt32 },
              playtime_linux_forever: {
                n: 8,
                br: s.readInt32,
                bw: a.writeInt32,
              },
              playtime_deck_forever: {
                n: 16,
                br: s.readInt32,
                bw: a.writeInt32,
              },
              first_windows_playtime: {
                n: 9,
                br: s.readUint32,
                bw: a.writeUint32,
              },
              first_mac_playtime: {
                n: 10,
                br: s.readUint32,
                bw: a.writeUint32,
              },
              first_linux_playtime: {
                n: 11,
                br: s.readUint32,
                bw: a.writeUint32,
              },
              first_deck_playtime: {
                n: 17,
                br: s.readUint32,
                bw: a.writeUint32,
              },
              last_windows_playtime: {
                n: 12,
                br: s.readUint32,
                bw: a.writeUint32,
              },
              last_mac_playtime: { n: 13, br: s.readUint32, bw: a.writeUint32 },
              last_linux_playtime: {
                n: 14,
                br: s.readUint32,
                bw: a.writeUint32,
              },
              last_deck_playtime: {
                n: 18,
                br: s.readUint32,
                bw: a.writeUint32,
              },
              playtime_disconnected: {
                n: 15,
                br: s.readUint32,
                bw: a.writeUint32,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetLastPlayedTimes_Response_Game";
    }
  },
  W = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamids || u(r.M()),
        o.initialize(this, e, 0, -1, [1], null);
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
                br: s.readUint64String,
                pbr: s.readPackedUint64String,
                bw: a.writeRepeatedUint64String,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPlayerLinkDetails_Request";
    }
  },
  q = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.accounts || u(r.M()),
        o.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { accounts: { n: 1, c: T, r: !0, q: !0 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPlayerLinkDetails_Response";
    }
  },
  T = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.public_data || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              public_data: { n: 1, c: I },
              private_data: { n: 2, c: x },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails";
    }
  },
  I = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: a.writeFixed64String,
              },
              visibility_state: { n: 2, br: s.readInt32, bw: a.writeInt32 },
              privacy_state: { n: 3, br: s.readInt32, bw: a.writeInt32 },
              profile_state: { n: 4, br: s.readInt32, bw: a.writeInt32 },
              ban_expires_time: { n: 7, br: s.readUint32, bw: a.writeUint32 },
              account_flags: { n: 8, br: s.readUint32, bw: a.writeUint32 },
              sha_digest_avatar: { n: 9, br: s.readBytes, bw: a.writeBytes },
              persona_name: { n: 10, br: s.readString, bw: a.writeString },
              profile_url: { n: 11, br: s.readString, bw: a.writeString },
              content_country_restricted: {
                n: 12,
                br: s.readBool,
                bw: a.writeBool,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPublicData";
    }
  },
  x = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.persona_state || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              persona_state: { n: 1, br: s.readInt32, bw: a.writeInt32 },
              persona_state_flags: {
                n: 2,
                br: s.readUint32,
                bw: a.writeUint32,
              },
              time_created: { n: 3, br: s.readUint32, bw: a.writeUint32 },
              game_id: {
                n: 4,
                br: s.readFixed64String,
                bw: a.writeFixed64String,
              },
              game_server_steam_id: {
                n: 5,
                br: s.readFixed64String,
                bw: a.writeFixed64String,
              },
              game_server_ip_address: {
                n: 6,
                br: s.readUint32,
                bw: a.writeUint32,
              },
              game_server_port: { n: 7, br: s.readUint32, bw: a.writeUint32 },
              game_extra_info: { n: 8, br: s.readString, bw: a.writeString },
              account_name: { n: 9, br: s.readString, bw: a.writeString },
              lobby_steam_id: {
                n: 10,
                br: s.readFixed64String,
                bw: a.writeFixed64String,
              },
              rich_presence_kv: { n: 11, br: s.readString, bw: a.writeString },
              broadcast_session_id: {
                n: 12,
                br: s.readFixed64String,
                bw: a.writeFixed64String,
              },
              watching_broadcast_accountid: {
                n: 13,
                br: s.readUint32,
                bw: a.writeUint32,
              },
              watching_broadcast_appid: {
                n: 14,
                br: s.readUint32,
                bw: a.writeUint32,
              },
              watching_broadcast_viewers: {
                n: 15,
                br: s.readUint32,
                bw: a.writeUint32,
              },
              watching_broadcast_title: {
                n: 16,
                br: s.readString,
                bw: a.writeString,
              },
              last_logoff_time: { n: 17, br: s.readUint32, bw: a.writeUint32 },
              last_seen_online: { n: 18, br: s.readUint32, bw: a.writeUint32 },
              game_os_type: { n: 19, br: s.readInt32, bw: a.writeInt32 },
              game_device_type: { n: 20, br: s.readInt32, bw: a.writeInt32 },
              game_device_name: { n: 21, br: s.readString, bw: a.writeString },
              game_is_private: { n: 22, br: s.readBool, bw: a.writeBool },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPlayerLinkDetails_Response_PlayerLinkDetails_AccountPrivateData";
    }
  },
  k = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), o.initialize(this, e, 0, -1, void 0, null);
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
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetMutualFriendsForIncomingInvites_Request";
    }
  },
  O = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        o.initialize(this, e, 0, -1, [2], null);
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
                br: s.readFixed64String,
                bw: a.writeFixed64String,
              },
              mutual_friend_account_ids: {
                n: 2,
                r: !0,
                q: !0,
                br: s.readUint32,
                pbr: s.readPackedUint32,
                bw: a.writeRepeatedUint32,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_IncomingInviteMutualFriendList";
    }
  },
  N = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.incoming_invite_mutual_friends_lists || u(r.M()),
        o.initialize(this, e, 0, -1, [1], null);
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
                c: O,
                r: !0,
                q: !0,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetMutualFriendsForIncomingInvites_Response";
    }
  },
  D = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        o.initialize(this, e, 0, -1, [4], null);
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
                br: s.readUint64String,
                bw: a.writeUint64String,
              },
              include_appinfo: { n: 2, br: s.readBool, bw: a.writeBool },
              include_played_free_games: {
                n: 3,
                br: s.readBool,
                bw: a.writeBool,
              },
              appids_filter: {
                n: 4,
                r: !0,
                q: !0,
                br: s.readUint32,
                pbr: s.readPackedUint32,
                bw: a.writeRepeatedUint32,
              },
              include_free_sub: { n: 5, br: s.readBool, bw: a.writeBool },
              skip_unvetted_apps: {
                n: 6,
                d: !0,
                br: s.readBool,
                bw: a.writeBool,
              },
              language: { n: 7, br: s.readString, bw: a.writeString },
              include_extended_appinfo: {
                n: 8,
                br: s.readBool,
                bw: a.writeBool,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetOwnedGames_Request";
    }
  },
  U = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.game_count || u(r.M()),
        o.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              game_count: { n: 1, br: s.readUint32, bw: a.writeUint32 },
              games: { n: 2, c: L, r: !0, q: !0 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetOwnedGames_Response";
    }
  },
  L = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.appid || u(r.M()),
        o.initialize(this, e, 0, -1, [18], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              appid: { n: 1, br: s.readInt32, bw: a.writeInt32 },
              name: { n: 2, br: s.readString, bw: a.writeString },
              playtime_2weeks: { n: 3, br: s.readInt32, bw: a.writeInt32 },
              playtime_forever: { n: 4, br: s.readInt32, bw: a.writeInt32 },
              img_icon_url: { n: 5, br: s.readString, bw: a.writeString },
              has_community_visible_stats: {
                n: 7,
                br: s.readBool,
                bw: a.writeBool,
              },
              playtime_windows_forever: {
                n: 8,
                br: s.readInt32,
                bw: a.writeInt32,
              },
              playtime_mac_forever: { n: 9, br: s.readInt32, bw: a.writeInt32 },
              playtime_linux_forever: {
                n: 10,
                br: s.readInt32,
                bw: a.writeInt32,
              },
              playtime_deck_forever: {
                n: 20,
                br: s.readInt32,
                bw: a.writeInt32,
              },
              rtime_last_played: { n: 11, br: s.readUint32, bw: a.writeUint32 },
              capsule_filename: { n: 12, br: s.readString, bw: a.writeString },
              sort_as: { n: 13, br: s.readString, bw: a.writeString },
              has_workshop: { n: 14, br: s.readBool, bw: a.writeBool },
              has_market: { n: 15, br: s.readBool, bw: a.writeBool },
              has_dlc: { n: 16, br: s.readBool, bw: a.writeBool },
              has_leaderboards: { n: 17, br: s.readBool, bw: a.writeBool },
              content_descriptorids: {
                n: 18,
                r: !0,
                q: !0,
                br: s.readUint32,
                pbr: s.readPackedUint32,
                bw: a.writeRepeatedUint32,
              },
              playtime_disconnected: {
                n: 19,
                br: s.readInt32,
                bw: a.writeInt32,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetOwnedGames_Response_Game";
    }
  },
  E = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.max_age_seconds || u(r.M()),
        o.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              max_age_seconds: { n: 1, br: s.readUint32, bw: a.writeUint32 },
              ignore_appids: {
                n: 2,
                r: !0,
                q: !0,
                br: s.readUint32,
                pbr: s.readPackedUint32,
                bw: a.writeRepeatedUint32,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPlayNext_Request";
    }
  },
  K = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.last_update_time || u(r.M()),
        o.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              last_update_time: { n: 1, br: s.readUint32, bw: a.writeUint32 },
              appids: {
                n: 2,
                r: !0,
                q: !0,
                br: s.readUint32,
                pbr: s.readPackedUint32,
                bw: a.writeRepeatedUint32,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPlayNext_Response";
    }
  },
  $ = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.play_sessions || u(r.M()),
        o.initialize(this, e, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { play_sessions: { n: 3, c: Q, r: !0, q: !0 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_RecordDisconnectedPlaytime_Request";
    }
  },
  Q = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.appid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              appid: { n: 1, br: s.readUint32, bw: a.writeUint32 },
              session_time_start: { n: 2, br: s.readUint32, bw: a.writeUint32 },
              seconds: { n: 3, br: s.readUint32, bw: a.writeUint32 },
              offline: { n: 4, br: s.readBool, bw: a.writeBool },
              owner: { n: 5, br: s.readUint32, bw: a.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_RecordDisconnectedPlaytime_Request_PlayHistory";
    }
  },
  V = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), o.initialize(this, e, 0, -1, void 0, null);
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
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_RecordDisconnectedPlaytime_Response";
    }
  },
  Y = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.appid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { appid: { n: 1, br: s.readUint32, bw: a.writeUint32 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetGameBadgeLevels_Request";
    }
  },
  J = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.player_level || u(r.M()),
        o.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              player_level: { n: 1, br: s.readUint32, bw: a.writeUint32 },
              badges: { n: 2, c: X, r: !0, q: !0 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetGameBadgeLevels_Response";
    }
  },
  X = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.level || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              level: { n: 1, br: s.readInt32, bw: a.writeInt32 },
              series: { n: 2, br: s.readInt32, bw: a.writeInt32 },
              border_color: { n: 3, br: s.readUint32, bw: a.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetGameBadgeLevels_Response_Badge";
    }
  },
  f = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.communityitemid || u(r.M()),
        o.initialize(this, e, 0, -1, [15], null);
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
                br: s.readUint64String,
                bw: a.writeUint64String,
              },
              image_small: { n: 2, br: s.readString, bw: a.writeString },
              image_large: { n: 3, br: s.readString, bw: a.writeString },
              name: { n: 4, br: s.readString, bw: a.writeString },
              item_title: { n: 5, br: s.readString, bw: a.writeString },
              item_description: { n: 6, br: s.readString, bw: a.writeString },
              appid: { n: 7, br: s.readUint32, bw: a.writeUint32 },
              item_type: { n: 8, br: s.readUint32, bw: a.writeUint32 },
              item_class: { n: 9, br: s.readUint32, bw: a.writeUint32 },
              movie_webm: { n: 10, br: s.readString, bw: a.writeString },
              movie_mp4: { n: 11, br: s.readString, bw: a.writeString },
              movie_webm_small: { n: 13, br: s.readString, bw: a.writeString },
              movie_mp4_small: { n: 14, br: s.readString, bw: a.writeString },
              equipped_flags: { n: 12, br: s.readUint32, bw: a.writeUint32 },
              profile_colors: { n: 15, c: Z, r: !0, q: !0 },
              tiled: { n: 16, br: s.readBool, bw: a.writeBool },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "ProfileItem";
    }
  },
  Z = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.style_name || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              style_name: { n: 1, br: s.readString, bw: a.writeString },
              color: { n: 2, br: s.readString, bw: a.writeString },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "ProfileItem_ProfileColor";
    }
  },
  ee = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: a.writeFixed64String,
              },
              language: { n: 2, br: s.readString, bw: a.writeString },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetProfileBackground_Request";
    }
  },
  re = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.profile_background || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { profile_background: { n: 1, c: f } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetProfileBackground_Response";
    }
  },
  te = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.communityitemid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readUint64String,
                bw: a.writeUint64String,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetProfileBackground_Request";
    }
  },
  ie = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), o.initialize(this, e, 0, -1, void 0, null);
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
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetProfileBackground_Response";
    }
  },
  se = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: a.writeFixed64String,
              },
              language: { n: 2, br: s.readString, bw: a.writeString },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetMiniProfileBackground_Request";
    }
  },
  ae = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.profile_background || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { profile_background: { n: 1, c: f } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetMiniProfileBackground_Response";
    }
  },
  ne = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.communityitemid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readUint64String,
                bw: a.writeUint64String,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetMiniProfileBackground_Request";
    }
  },
  oe = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), o.initialize(this, e, 0, -1, void 0, null);
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
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetMiniProfileBackground_Response";
    }
  },
  le = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: a.writeFixed64String,
              },
              language: { n: 2, br: s.readString, bw: a.writeString },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetAvatarFrame_Request";
    }
  },
  de = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.avatar_frame || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = { proto: r, fields: { avatar_frame: { n: 1, c: f } } }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetAvatarFrame_Response";
    }
  },
  me = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.communityitemid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readUint64String,
                bw: a.writeUint64String,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetAvatarFrame_Request";
    }
  },
  Pe = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), o.initialize(this, e, 0, -1, void 0, null);
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
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetAvatarFrame_Response";
    }
  },
  pe = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: a.writeFixed64String,
              },
              language: { n: 2, br: s.readString, bw: a.writeString },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetAnimatedAvatar_Request";
    }
  },
  ue = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.avatar || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m || (r.sm_m = { proto: r, fields: { avatar: { n: 1, c: f } } }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetAnimatedAvatar_Response";
    }
  },
  _e = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.communityitemid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readUint64String,
                bw: a.writeUint64String,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetAnimatedAvatar_Request";
    }
  },
  ce = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), o.initialize(this, e, 0, -1, void 0, null);
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
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetAnimatedAvatar_Response";
    }
  },
  ye = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: a.writeFixed64String,
              },
              language: { n: 2, br: s.readString, bw: a.writeString },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetSteamDeckKeyboardSkin_Request";
    }
  },
  fe = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steam_deck_keyboard_skin || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { steam_deck_keyboard_skin: { n: 1, c: f } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetSteamDeckKeyboardSkin_Response";
    }
  },
  be = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.communityitemid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readUint64String,
                bw: a.writeUint64String,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetSteamDeckKeyboardSkin_Request";
    }
  },
  Ce = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), o.initialize(this, e, 0, -1, void 0, null);
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
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetSteamDeckKeyboardSkin_Response";
    }
  },
  Re = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.language || u(r.M()),
        o.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              language: { n: 1, br: s.readString, bw: a.writeString },
              filters: {
                n: 2,
                r: !0,
                q: !0,
                br: s.readEnum,
                pbr: s.readPackedEnum,
                bw: a.writeRepeatedEnum,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetProfileItemsOwned_Request";
    }
  },
  ge = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.profile_backgrounds || u(r.M()),
        o.initialize(this, e, 0, -1, [1, 2, 3, 4, 5, 6, 7], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              profile_backgrounds: { n: 1, c: f, r: !0, q: !0 },
              mini_profile_backgrounds: { n: 2, c: f, r: !0, q: !0 },
              avatar_frames: { n: 3, c: f, r: !0, q: !0 },
              animated_avatars: { n: 4, c: f, r: !0, q: !0 },
              profile_modifiers: { n: 5, c: f, r: !0, q: !0 },
              steam_deck_keyboard_skins: { n: 6, c: f, r: !0, q: !0 },
              steam_deck_startup_movies: { n: 7, c: f, r: !0, q: !0 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetProfileItemsOwned_Response";
    }
  },
  Be = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: a.writeFixed64String,
              },
              language: { n: 2, br: s.readString, bw: a.writeString },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetProfileItemsEquipped_Request";
    }
  },
  ve = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.profile_background || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              profile_background: { n: 1, c: f },
              mini_profile_background: { n: 2, c: f },
              avatar_frame: { n: 3, c: f },
              animated_avatar: { n: 4, c: f },
              profile_modifier: { n: 5, c: f },
              steam_deck_keyboard_skin: { n: 6, c: f },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetProfileItemsEquipped_Response";
    }
  },
  Se = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.communityitemid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readUint64String,
                bw: a.writeUint64String,
              },
              flags: { n: 2, br: s.readUint32, bw: a.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetEquippedProfileItemFlags_Request";
    }
  },
  Ge = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), o.initialize(this, e, 0, -1, void 0, null);
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
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetEquippedProfileItemFlags_Response";
    }
  },
  Fe = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), o.initialize(this, e, 0, -1, void 0, null);
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
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetEmoticonList_Request";
    }
  },
  ze = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.emoticons || u(r.M()),
        o.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { emoticons: { n: 1, c: we, r: !0, q: !0 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetEmoticonList_Response";
    }
  },
  we = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.name || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              name: { n: 1, br: s.readString, bw: a.writeString },
              count: { n: 2, br: s.readInt32, bw: a.writeInt32 },
              time_last_used: { n: 3, br: s.readUint32, bw: a.writeUint32 },
              use_count: { n: 4, br: s.readUint32, bw: a.writeUint32 },
              time_received: { n: 5, br: s.readUint32, bw: a.writeUint32 },
              appid: { n: 6, br: s.readUint32, bw: a.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetEmoticonList_Response_Emoticon";
    }
  },
  He = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readUint64String,
                bw: a.writeUint64String,
              },
              badgeid: { n: 2, br: s.readInt32, bw: a.writeInt32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetCommunityBadgeProgress_Request";
    }
  },
  je = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.quests || u(r.M()),
        o.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { quests: { n: 1, c: Me, r: !0, q: !0 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetCommunityBadgeProgress_Response";
    }
  },
  Me = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.questid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              questid: { n: 1, br: s.readUint32, bw: a.writeUint32 },
              completed: { n: 2, br: s.readBool, bw: a.writeBool },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetCommunityBadgeProgress_Response_Quest";
    }
  },
  he = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.appid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              appid: { n: 1, br: s.readUint32, bw: a.writeUint32 },
              status_text: { n: 2, br: s.readString, bw: a.writeString },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_PostStatusToFriends_Request";
    }
  },
  Ae = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), o.initialize(this, e, 0, -1, void 0, null);
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
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_PostStatusToFriends_Response";
    }
  },
  We = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readUint64String,
                bw: a.writeUint64String,
              },
              postid: { n: 2, br: s.readUint64String, bw: a.writeUint64String },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPostedStatus_Request";
    }
  },
  qe = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.accountid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              accountid: { n: 1, br: s.readUint32, bw: a.writeUint32 },
              postid: { n: 2, br: s.readUint64String, bw: a.writeUint64String },
              status_text: { n: 3, br: s.readString, bw: a.writeString },
              deleted: { n: 4, br: s.readBool, bw: a.writeBool },
              appid: { n: 5, br: s.readUint32, bw: a.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPostedStatus_Response";
    }
  },
  Te = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.postid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              postid: { n: 1, br: s.readUint64String, bw: a.writeUint64String },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_DeletePostedStatus_Request";
    }
  },
  Ie = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), o.initialize(this, e, 0, -1, void 0, null);
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
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_DeletePostedStatus_Response";
    }
  },
  xe = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        o.initialize(this, e, 0, -1, [4], null);
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
                br: s.readUint64String,
                bw: a.writeUint64String,
              },
              language: { n: 2, br: s.readString, bw: a.writeString },
              max_achievements: { n: 3, br: s.readUint32, bw: a.writeUint32 },
              appids: {
                n: 4,
                r: !0,
                q: !0,
                br: s.readUint32,
                pbr: s.readPackedUint32,
                bw: a.writeRepeatedUint32,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetTopAchievementsForGames_Request";
    }
  },
  ke = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.games || u(r.M()),
        o.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { games: { n: 1, c: Ne, r: !0, q: !0 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetTopAchievementsForGames_Response";
    }
  },
  Oe = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.statid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              statid: { n: 1, br: s.readUint32, bw: a.writeUint32 },
              bit: { n: 2, br: s.readUint32, bw: a.writeUint32 },
              name: { n: 3, br: s.readString, bw: a.writeString },
              desc: { n: 4, br: s.readString, bw: a.writeString },
              icon: { n: 5, br: s.readString, bw: a.writeString },
              icon_gray: { n: 6, br: s.readString, bw: a.writeString },
              hidden: { n: 7, br: s.readBool, bw: a.writeBool },
              player_percent_unlocked: {
                n: 8,
                br: s.readString,
                bw: a.writeString,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetTopAchievementsForGames_Response_Achievement";
    }
  },
  Ne = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.appid || u(r.M()),
        o.initialize(this, e, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              appid: { n: 1, br: s.readUint32, bw: a.writeUint32 },
              total_achievements: { n: 2, br: s.readUint32, bw: a.writeUint32 },
              achievements: { n: 3, c: Oe, r: !0, q: !0 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetTopAchievementsForGames_Response_Game";
    }
  },
  De = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        o.initialize(this, e, 0, -1, [3], null);
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
                br: s.readUint64String,
                bw: a.writeUint64String,
              },
              language: { n: 2, br: s.readString, bw: a.writeString },
              appids: {
                n: 3,
                r: !0,
                q: !0,
                br: s.readUint32,
                pbr: s.readPackedUint32,
                bw: a.writeRepeatedUint32,
              },
              include_unvetted_apps: { n: 4, br: s.readBool, bw: a.writeBool },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetAchievementsProgress_Request";
    }
  },
  Ue = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.achievement_progress || u(r.M()),
        o.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { achievement_progress: { n: 1, c: Le, r: !0, q: !0 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetAchievementsProgress_Response";
    }
  },
  Le = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.appid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              appid: { n: 1, br: s.readUint32, bw: a.writeUint32 },
              unlocked: { n: 2, br: s.readUint32, bw: a.writeUint32 },
              total: { n: 3, br: s.readUint32, bw: a.writeUint32 },
              percentage: { n: 4, br: s.readFloat, bw: a.writeFloat },
              all_unlocked: { n: 5, br: s.readBool, bw: a.writeBool },
              cache_time: { n: 6, br: s.readUint32, bw: a.writeUint32 },
              vetted: { n: 7, br: s.readBool, bw: a.writeBool },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetAchievementsProgress_Response_AchievementProgress";
    }
  },
  Ee = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.appid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              appid: { n: 1, br: s.readUint32, bw: a.writeUint32 },
              language: { n: 2, br: s.readString, bw: a.writeString },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetGameAchievements_Request";
    }
  },
  Ke = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.achievements || u(r.M()),
        o.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { achievements: { n: 1, c: $e, r: !0, q: !0 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetGameAchievements_Response";
    }
  },
  $e = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.internal_name || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              internal_name: { n: 1, br: s.readString, bw: a.writeString },
              localized_name: { n: 2, br: s.readString, bw: a.writeString },
              localized_desc: { n: 3, br: s.readString, bw: a.writeString },
              icon: { n: 4, br: s.readString, bw: a.writeString },
              icon_gray: { n: 5, br: s.readString, bw: a.writeString },
              hidden: { n: 6, br: s.readBool, bw: a.writeBool },
              player_percent_unlocked: {
                n: 7,
                br: s.readString,
                bw: a.writeString,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetGameAchievements_Response_Achievement";
    }
  },
  Qe = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readUint64String,
                bw: a.writeUint64String,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetFavoriteBadge_Request";
    }
  },
  Ve = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.has_favorite_badge || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              has_favorite_badge: { n: 1, br: s.readBool, bw: a.writeBool },
              badgeid: { n: 2, br: s.readUint32, bw: a.writeUint32 },
              communityitemid: {
                n: 3,
                br: s.readUint64String,
                bw: a.writeUint64String,
              },
              item_type: { n: 4, br: s.readUint32, bw: a.writeUint32 },
              border_color: { n: 5, br: s.readUint32, bw: a.writeUint32 },
              appid: { n: 6, br: s.readUint32, bw: a.writeUint32 },
              level: { n: 7, br: s.readUint32, bw: a.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetFavoriteBadge_Response";
    }
  },
  Ye = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.communityitemid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readUint64String,
                bw: a.writeUint64String,
              },
              badgeid: { n: 2, br: s.readUint32, bw: a.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetFavoriteBadge_Request";
    }
  },
  Je = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), o.initialize(this, e, 0, -1, void 0, null);
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
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetFavoriteBadge_Response";
    }
  },
  Xe = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.slot || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              slot: { n: 1, br: s.readUint32, bw: a.writeUint32 },
              appid: { n: 2, br: s.readUint32, bw: a.writeUint32 },
              publishedfileid: {
                n: 3,
                br: s.readUint64String,
                bw: a.writeUint64String,
              },
              item_assetid: {
                n: 4,
                br: s.readUint64String,
                bw: a.writeUint64String,
              },
              item_contextid: {
                n: 5,
                br: s.readUint64String,
                bw: a.writeUint64String,
              },
              notes: { n: 6, br: s.readString, bw: a.writeString },
              title: { n: 7, br: s.readString, bw: a.writeString },
              accountid: { n: 8, br: s.readUint32, bw: a.writeUint32 },
              badgeid: { n: 9, br: s.readUint32, bw: a.writeUint32 },
              border_color: { n: 10, br: s.readUint32, bw: a.writeUint32 },
              item_classid: {
                n: 11,
                br: s.readUint64String,
                bw: a.writeUint64String,
              },
              item_instanceid: {
                n: 12,
                br: s.readUint64String,
                bw: a.writeUint64String,
              },
              ban_check_result: { n: 13, br: s.readEnum, bw: a.writeEnum },
              replay_year: { n: 14, br: s.readUint32, bw: a.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "ProfileCustomizationSlot";
    }
  },
  Ze = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.customization_type || u(r.M()),
        o.initialize(this, e, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              customization_type: { n: 1, br: s.readEnum, bw: a.writeEnum },
              large: { n: 2, br: s.readBool, bw: a.writeBool },
              slots: { n: 3, c: Xe, r: !0, q: !0 },
              active: { n: 4, br: s.readBool, bw: a.writeBool },
              customization_style: { n: 5, br: s.readEnum, bw: a.writeEnum },
              purchaseid: {
                n: 6,
                br: s.readUint64String,
                bw: a.writeUint64String,
              },
              level: { n: 7, br: s.readUint32, bw: a.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "ProfileCustomization";
    }
  },
  S = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.theme_id || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              theme_id: { n: 1, br: s.readString, bw: a.writeString },
              title: { n: 2, br: s.readString, bw: a.writeString },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "ProfileTheme";
    }
  },
  G = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.hide_profile_awards || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              hide_profile_awards: { n: 1, br: s.readBool, bw: a.writeBool },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "ProfilePreferences";
    }
  },
  er = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: a.writeFixed64String,
              },
              include_inactive_customizations: {
                n: 2,
                br: s.readBool,
                bw: a.writeBool,
              },
              include_purchased_customizations: {
                n: 3,
                br: s.readBool,
                bw: a.writeBool,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetProfileCustomization_Request";
    }
  },
  rr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.customizations || u(r.M()),
        o.initialize(this, e, 0, -1, [1, 4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              customizations: { n: 1, c: Ze, r: !0, q: !0 },
              slots_available: { n: 2, br: s.readUint32, bw: a.writeUint32 },
              profile_theme: { n: 3, c: S },
              purchased_customizations: { n: 4, c: tr, r: !0, q: !0 },
              profile_preferences: { n: 5, c: G },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetProfileCustomization_Response";
    }
  },
  tr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.purchaseid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readUint64String,
                bw: a.writeUint64String,
              },
              customization_type: { n: 2, br: s.readEnum, bw: a.writeEnum },
              level: { n: 3, br: s.readUint32, bw: a.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetProfileCustomization_Response_PurchasedCustomization";
    }
  },
  ir = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: a.writeFixed64String,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPurchasedProfileCustomizations_Request";
    }
  },
  sr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.purchased_customizations || u(r.M()),
        o.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { purchased_customizations: { n: 1, c: ar, r: !0, q: !0 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPurchasedProfileCustomizations_Response";
    }
  },
  ar = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.purchaseid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readUint64String,
                bw: a.writeUint64String,
              },
              customization_type: { n: 2, br: s.readEnum, bw: a.writeEnum },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPurchasedProfileCustomizations_Response_PurchasedCustomization";
    }
  },
  nr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: a.writeFixed64String,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request";
    }
  },
  or = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.purchased_customizations || u(r.M()),
        o.initialize(this, e, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              purchased_customizations: { n: 1, c: lr, r: !0, q: !0 },
              upgraded_customizations: { n: 2, c: dr, r: !0, q: !0 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response";
    }
  },
  lr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.customization_type || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              customization_type: { n: 1, br: s.readEnum, bw: a.writeEnum },
              count: { n: 2, br: s.readUint32, bw: a.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_PurchasedCustomization";
    }
  },
  dr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.customization_type || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              customization_type: { n: 1, br: s.readEnum, bw: a.writeEnum },
              level: { n: 2, br: s.readUint32, bw: a.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_UpgradedCustomization";
    }
  },
  mr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), o.initialize(this, e, 0, -1, void 0, null);
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
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetProfileThemesAvailable_Request";
    }
  },
  Pr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.profile_themes || u(r.M()),
        o.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { profile_themes: { n: 1, c: S, r: !0, q: !0 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetProfileThemesAvailable_Response";
    }
  },
  pr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.theme_id || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { theme_id: { n: 1, br: s.readString, bw: a.writeString } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetProfileTheme_Request";
    }
  },
  ur = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), o.initialize(this, e, 0, -1, void 0, null);
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
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetProfileTheme_Response";
    }
  },
  _r = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.profile_preferences || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { profile_preferences: { n: 1, c: G } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetProfilePreferences_Request";
    }
  },
  cr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), o.initialize(this, e, 0, -1, void 0, null);
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
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetProfilePreferences_Response";
    }
  },
  yr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.appid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { appid: { n: 1, br: s.readUint32, bw: a.writeUint32 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetFriendsGameplayInfo_Request";
    }
  },
  fr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.your_info || u(r.M()),
        o.initialize(this, e, 0, -1, [2, 3, 4, 5, 6], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              your_info: { n: 1, c: br },
              in_game: { n: 2, c: R, r: !0, q: !0 },
              played_recently: { n: 3, c: R, r: !0, q: !0 },
              played_ever: { n: 4, c: R, r: !0, q: !0 },
              owns: { n: 5, c: R, r: !0, q: !0 },
              in_wishlist: { n: 6, c: R, r: !0, q: !0 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetFriendsGameplayInfo_Response";
    }
  },
  R = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: a.writeFixed64String,
              },
              minutes_played: { n: 2, br: s.readUint32, bw: a.writeUint32 },
              minutes_played_forever: {
                n: 3,
                br: s.readUint32,
                bw: a.writeUint32,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo";
    }
  },
  br = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: a.writeFixed64String,
              },
              minutes_played: { n: 2, br: s.readUint32, bw: a.writeUint32 },
              minutes_played_forever: {
                n: 3,
                br: s.readUint32,
                bw: a.writeUint32,
              },
              in_wishlist: { n: 4, br: s.readBool, bw: a.writeBool },
              owned: { n: 5, br: s.readBool, bw: a.writeBool },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetFriendsGameplayInfo_Response_OwnGameplayInfo";
    }
  },
  Cr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), o.initialize(this, e, 0, -1, void 0, null);
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
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetTimeSSAAccepted_Request";
    }
  },
  Rr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.time_ssa_accepted || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              time_ssa_accepted: { n: 1, br: s.readUint32, bw: a.writeUint32 },
              time_ssa_updated: { n: 2, br: s.readUint32, bw: a.writeUint32 },
              time_chinassa_accepted: {
                n: 3,
                br: s.readUint32,
                bw: a.writeUint32,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetTimeSSAAccepted_Response";
    }
  },
  gr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.agreement_type || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              agreement_type: { n: 1, br: s.readEnum, bw: a.writeEnum },
              time_signed_utc: { n: 2, br: s.readUint32, bw: a.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_AcceptSSA_Request";
    }
  },
  Br = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), o.initialize(this, e, 0, -1, void 0, null);
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
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_AcceptSSA_Response";
    }
  },
  vr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), o.initialize(this, e, 0, -1, void 0, null);
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
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetNicknameList_Request";
    }
  },
  Sr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.nicknames || u(r.M()),
        o.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { nicknames: { n: 1, c: Gr, r: !0, q: !0 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetNicknameList_Response";
    }
  },
  Gr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.accountid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              accountid: { n: 1, br: s.readFixed32, bw: a.writeFixed32 },
              nickname: { n: 2, br: s.readString, bw: a.writeString },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetNicknameList_Response_PlayerNickname";
    }
  },
  g = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.accountid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              accountid: { n: 1, br: s.readFixed32, bw: a.writeFixed32 },
              nickname: { n: 2, br: s.readString, bw: a.writeString },
              notifications_showingame: {
                n: 3,
                br: s.readEnum,
                bw: a.writeEnum,
              },
              notifications_showonline: {
                n: 4,
                br: s.readEnum,
                bw: a.writeEnum,
              },
              notifications_showmessages: {
                n: 5,
                br: s.readEnum,
                bw: a.writeEnum,
              },
              sounds_showingame: { n: 6, br: s.readEnum, bw: a.writeEnum },
              sounds_showonline: { n: 7, br: s.readEnum, bw: a.writeEnum },
              sounds_showmessages: { n: 8, br: s.readEnum, bw: a.writeEnum },
              notifications_sendmobile: {
                n: 9,
                br: s.readEnum,
                bw: a.writeEnum,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "PerFriendPreferences";
    }
  },
  Fr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), o.initialize(this, e, 0, -1, void 0, null);
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
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPerFriendPreferences_Request";
    }
  },
  zr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.preferences || u(r.M()),
        o.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { preferences: { n: 1, c: g, r: !0, q: !0 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPerFriendPreferences_Response";
    }
  },
  wr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.preferences || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetPerFriendPreferences_Request";
    }
  },
  Hr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), o.initialize(this, e, 0, -1, void 0, null);
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
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetPerFriendPreferences_Response";
    }
  },
  jr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: a.writeFixed64String,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_AddFriend_Request";
    }
  },
  Mr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.invite_sent || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              invite_sent: { n: 1, br: s.readBool, bw: a.writeBool },
              friend_relationship: {
                n: 2,
                br: s.readUint32,
                bw: a.writeUint32,
              },
              result: { n: 3, br: s.readInt32, bw: a.writeInt32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_AddFriend_Response";
    }
  },
  hr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: a.writeFixed64String,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_RemoveFriend_Request";
    }
  },
  Ar = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.friend_relationship || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readUint32,
                bw: a.writeUint32,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_RemoveFriend_Response";
    }
  },
  Wr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.steamid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readFixed64String,
                bw: a.writeFixed64String,
              },
              unignore: { n: 2, br: s.readBool, bw: a.writeBool },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_IgnoreFriend_Request";
    }
  },
  qr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.friend_relationship || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readUint32,
                bw: a.writeUint32,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_IgnoreFriend_Response";
    }
  },
  B = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.parenthesize_nicknames || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readBool,
                bw: a.writeBool,
              },
              text_filter_setting: { n: 5, br: s.readEnum, bw: a.writeEnum },
              text_filter_ignore_friends: {
                n: 6,
                d: !0,
                br: s.readBool,
                bw: a.writeBool,
              },
              text_filter_words_revision: {
                n: 7,
                br: s.readUint32,
                bw: a.writeUint32,
              },
              timestamp_updated: { n: 3, br: s.readUint32, bw: a.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_CommunityPreferences";
    }
  },
  Tr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), o.initialize(this, e, 0, -1, void 0, null);
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
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetCommunityPreferences_Request";
    }
  },
  Ir = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.preferences || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              preferences: { n: 1, c: B },
              content_descriptor_preferences: { n: 2, c: w },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetCommunityPreferences_Response";
    }
  },
  xr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.preferences || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = { proto: r, fields: { preferences: { n: 1, c: B } } }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetCommunityPreferences_Request";
    }
  },
  kr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), o.initialize(this, e, 0, -1, void 0, null);
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
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_SetCommunityPreferences_Response";
    }
  },
  F = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.text_filter_custom_banned_words || u(r.M()),
        o.initialize(this, e, 0, -1, [1, 2], null);
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
                br: s.readString,
                bw: a.writeRepeatedString,
              },
              text_filter_custom_clean_words: {
                n: 2,
                r: !0,
                q: !0,
                br: s.readString,
                bw: a.writeRepeatedString,
              },
              text_filter_words_revision: {
                n: 3,
                br: s.readUint32,
                bw: a.writeUint32,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_TextFilterWords";
    }
  },
  Or = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), o.initialize(this, e, 0, -1, void 0, null);
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
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetTextFilterWords_Request";
    }
  },
  Nr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.words || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m || (r.sm_m = { proto: r, fields: { words: { n: 1, c: F } } }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetTextFilterWords_Response";
    }
  },
  Dr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.language || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { language: { n: 1, br: s.readInt32, bw: a.writeInt32 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetNewSteamAnnouncementState_Request";
    }
  },
  Ur = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.state || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              state: { n: 1, br: s.readEnum, bw: a.writeEnum },
              announcement_headline: {
                n: 2,
                br: s.readString,
                bw: a.writeString,
              },
              announcement_url: { n: 3, br: s.readString, bw: a.writeString },
              time_posted: { n: 4, br: s.readUint32, bw: a.writeUint32 },
              announcement_gid: {
                n: 5,
                br: s.readUint64String,
                bw: a.writeUint64String,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetNewSteamAnnouncementState_Response";
    }
  },
  Lr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.announcement_gid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
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
                br: s.readUint64String,
                bw: a.writeUint64String,
              },
              time_posted: { n: 2, br: s.readUint32, bw: a.writeUint32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_UpdateSteamAnnouncementLastRead_Request";
    }
  },
  Er = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), o.initialize(this, e, 0, -1, void 0, null);
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
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_UpdateSteamAnnouncementLastRead_Response";
    }
  },
  z = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.privacy_state || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              privacy_state: { n: 1, br: s.readInt32, bw: a.writeInt32 },
              privacy_state_inventory: {
                n: 2,
                br: s.readInt32,
                bw: a.writeInt32,
              },
              privacy_state_gifts: { n: 3, br: s.readInt32, bw: a.writeInt32 },
              privacy_state_ownedgames: {
                n: 4,
                br: s.readInt32,
                bw: a.writeInt32,
              },
              privacy_state_playtime: {
                n: 5,
                br: s.readInt32,
                bw: a.writeInt32,
              },
              privacy_state_friendslist: {
                n: 6,
                br: s.readInt32,
                bw: a.writeInt32,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPrivacySettings";
    }
  },
  Kr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), o.initialize(this, e, 0, -1, void 0, null);
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
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPrivacySettings_Request";
    }
  },
  $r = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.privacy_settings || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = { proto: r, fields: { privacy_settings: { n: 1, c: z } } }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetPrivacySettings_Response";
    }
  },
  Qr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.appid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { appid: { n: 1, br: s.readUint32, bw: a.writeUint32 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetDurationControl_Request";
    }
  },
  Vr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.is_enabled || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              is_enabled: { n: 1, br: s.readBool, bw: a.writeBool },
              seconds: { n: 2, br: s.readInt32, bw: a.writeInt32 },
              seconds_today: { n: 3, br: s.readInt32, bw: a.writeInt32 },
              is_steamchina_account: { n: 4, br: s.readBool, bw: a.writeBool },
              is_age_verified: { n: 5, br: s.readBool, bw: a.writeBool },
              seconds_allowed_today: {
                n: 6,
                br: s.readUint32,
                bw: a.writeUint32,
              },
              age_verification_pending: {
                n: 7,
                br: s.readBool,
                bw: a.writeBool,
              },
              block_minors: { n: 8, br: s.readBool, bw: a.writeBool },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_GetDurationControl_Response";
    }
  },
  Yr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.games || u(r.M()),
        o.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: { games: { n: 1, c: v, r: !0, q: !0 } },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_LastPlayedTimes_Notification";
    }
  },
  Jr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.accountid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              accountid: { n: 1, br: s.readFixed32, bw: a.writeFixed32 },
              nickname: { n: 2, br: s.readString, bw: a.writeString },
              is_echo_to_self: { n: 3, br: s.readBool, bw: a.writeBool },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_FriendNicknameChanged_Notification";
    }
  },
  Xr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.accountid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              accountid: { n: 1, br: s.readFixed32, bw: a.writeFixed32 },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_FriendEquippedProfileItemsChanged_Notification";
    }
  },
  Zr = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.state || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              state: { n: 1, br: s.readEnum, bw: a.writeEnum },
              announcement_headline: {
                n: 2,
                br: s.readString,
                bw: a.writeString,
              },
              announcement_url: { n: 3, br: s.readString, bw: a.writeString },
              time_posted: { n: 4, br: s.readUint32, bw: a.writeUint32 },
              announcement_gid: {
                n: 5,
                br: s.readUint64String,
                bw: a.writeUint64String,
              },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_NewSteamAnnouncementState_Notification";
    }
  },
  et = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.preferences || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              preferences: { n: 1, c: B },
              content_descriptor_preferences: { n: 2, c: w },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_CommunityPreferencesChanged_Notification";
    }
  },
  rt = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.words || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m || (r.sm_m = { proto: r, fields: { words: { n: 1, c: F } } }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_TextFilterWordsChanged_Notification";
    }
  },
  tt = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.accountid || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = {
            proto: r,
            fields: {
              accountid: { n: 1, br: s.readFixed32, bw: a.writeFixed32 },
              preferences: { n: 2, c: g },
            },
          }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_PerFriendPreferencesChanged_Notification";
    }
  },
  it = class r extends o {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        r.prototype.privacy_settings || u(r.M()),
        o.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        r.sm_m ||
          (r.sm_m = { proto: r, fields: { privacy_settings: { n: 1, c: z } } }),
        r.sm_m
      );
    }
    static MBF() {
      return r.sm_mbf || (r.sm_mbf = l(r.M())), r.sm_mbf;
    }
    toObject(e = !1) {
      return r.toObject(e, this);
    }
    static toObject(e, t) {
      return m(r.M(), e, t);
    }
    static fromObject(e) {
      return d(r.M(), e);
    }
    static deserializeBinary(e) {
      let t = new i.BinaryReader(e),
        n = new r();
      return r.deserializeBinaryFromReader(n, t);
    }
    static deserializeBinaryFromReader(e, t) {
      return P(r.MBF(), e, t);
    }
    serializeBinary() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {
      p(r.M(), e, t);
    }
    serializeBase64String() {
      var e = new i.BinaryWriter();
      return r.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlayer_PrivacySettingsChanged_Notification";
    }
  },
  ut;
((ai) => {
  function r(_, c) {
    return _.SendMsg("Player.GetRecentPlaytimeSessionsForChild#1", y(H, c), j, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ai.GetRecentPlaytimeSessionsForChild = r;
  function e(_, c) {
    return _.SendMsg("Player.GetPlayerLinkDetails#1", y(W, c), q, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 2,
    });
  }
  ai.GetPlayerLinkDetails = e;
  function t(_, c) {
    return _.SendMsg(
      "Player.GetMutualFriendsForIncomingInvites#1",
      y(k, c),
      N,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  ai.GetMutualFriendsForIncomingInvites = t;
  function n(_, c) {
    return _.SendMsg("Player.GetOwnedGames#1", y(D, c), U, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 2,
    });
  }
  ai.GetOwnedGames = n;
  function nt(_, c) {
    return _.SendMsg("Player.GetPlayNext#1", y(E, c), K, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ai.GetPlayNext = nt;
  function ot(_, c) {
    return _.SendMsg("Player.GetFriendsGameplayInfo#1", y(yr, c), fr, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ai.GetFriendsGameplayInfo = ot;
  function lt(_, c) {
    return _.SendMsg("Player.GetGameBadgeLevels#1", y(Y, c), J, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ai.GetGameBadgeLevels = lt;
  function dt(_, c) {
    return _.SendMsg("Player.GetProfileBackground#1", y(ee, c), re, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  ai.GetProfileBackground = dt;
  function b(_, c) {
    return _.SendMsg("Player.SetProfileBackground#1", y(te, c), ie, {
      ePrivilege: 1,
    });
  }
  ai.SetProfileBackground = b;
  function ct(_, c) {
    return _.SendMsg("Player.GetMiniProfileBackground#1", y(se, c), ae, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  ai.GetMiniProfileBackground = ct;
  function yt(_, c) {
    return _.SendMsg("Player.SetMiniProfileBackground#1", y(ne, c), oe, {
      ePrivilege: 1,
    });
  }
  ai.SetMiniProfileBackground = yt;
  function ft(_, c) {
    return _.SendMsg("Player.GetAvatarFrame#1", y(le, c), de, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  ai.GetAvatarFrame = ft;
  function bt(_, c) {
    return _.SendMsg("Player.SetAvatarFrame#1", y(me, c), Pe, {
      ePrivilege: 1,
    });
  }
  ai.SetAvatarFrame = bt;
  function Ct(_, c) {
    return _.SendMsg("Player.GetAnimatedAvatar#1", y(pe, c), ue, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  ai.GetAnimatedAvatar = Ct;
  function Rt(_, c) {
    return _.SendMsg("Player.SetAnimatedAvatar#1", y(_e, c), ce, {
      ePrivilege: 1,
    });
  }
  ai.SetAnimatedAvatar = Rt;
  function gt(_, c) {
    return _.SendMsg("Player.GetSteamDeckKeyboardSkin#1", y(ye, c), fe, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  ai.GetSteamDeckKeyboardSkin = gt;
  function Bt(_, c) {
    return _.SendMsg("Player.SetSteamDeckKeyboardSkin#1", y(be, c), Ce, {
      ePrivilege: 1,
    });
  }
  ai.SetSteamDeckKeyboardSkin = Bt;
  function vt(_, c) {
    return _.SendMsg("Player.GetProfileItemsOwned#1", y(Re, c), ge, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ai.GetProfileItemsOwned = vt;
  function St(_, c) {
    return _.SendMsg("Player.GetProfileItemsEquipped#1", y(Be, c), ve, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  ai.GetProfileItemsEquipped = St;
  function Gt(_, c) {
    return _.SendMsg("Player.SetEquippedProfileItemFlags#1", y(Se, c), Ge, {
      ePrivilege: 1,
    });
  }
  ai.SetEquippedProfileItemFlags = Gt;
  function Ft(_, c) {
    return _.SendMsg("Player.GetEmoticonList#1", y(Fe, c), ze, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ai.GetEmoticonList = Ft;
  function zt(_, c) {
    return _.SendMsg("Player.GetCommunityBadgeProgress#1", y(He, c), je, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 2,
    });
  }
  ai.GetCommunityBadgeProgress = zt;
  function wt(_, c) {
    return _.SendMsg("Player.GetTopAchievementsForGames#1", y(xe, c), ke, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 2,
    });
  }
  ai.GetTopAchievementsForGames = wt;
  function Ht(_, c) {
    return _.SendMsg("Player.GetAchievementsProgress#1", y(De, c), Ue, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
    });
  }
  ai.GetAchievementsProgress = Ht;
  function jt(_, c) {
    return _.SendMsg("Player.GetGameAchievements#1", y(Ee, c), Ke, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  ai.GetGameAchievements = jt;
  function Mt(_, c) {
    return _.SendMsg("Player.GetFavoriteBadge#1", y(Qe, c), Ve, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  ai.GetFavoriteBadge = Mt;
  function ht(_, c) {
    return _.SendMsg("Player.SetFavoriteBadge#1", y(Ye, c), Je, {
      ePrivilege: 1,
    });
  }
  ai.SetFavoriteBadge = ht;
  function At(_, c) {
    return _.SendMsg("Player.GetProfileCustomization#1", y(er, c), rr, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  ai.GetProfileCustomization = At;
  function Wt(_, c) {
    return _.SendMsg(
      "Player.GetPurchasedProfileCustomizations#1",
      y(ir, c),
      sr,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  ai.GetPurchasedProfileCustomizations = Wt;
  function qt(_, c) {
    return _.SendMsg(
      "Player.GetPurchasedAndUpgradedProfileCustomizations#1",
      y(nr, c),
      or,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  ai.GetPurchasedAndUpgradedProfileCustomizations = qt;
  function Tt(_, c) {
    return _.SendMsg("Player.GetProfileThemesAvailable#1", y(mr, c), Pr, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ai.GetProfileThemesAvailable = Tt;
  function It(_, c) {
    return _.SendMsg("Player.SetProfileTheme#1", y(pr, c), ur, {
      ePrivilege: 1,
    });
  }
  ai.SetProfileTheme = It;
  function xt(_, c) {
    return _.SendMsg("Player.SetProfilePreferences#1", y(_r, c), cr, {
      ePrivilege: 1,
    });
  }
  ai.SetProfilePreferences = xt;
  function kt(_, c) {
    return _.SendMsg("Player.PostStatusToFriends#1", y(he, c), Ae, {
      ePrivilege: 3,
    });
  }
  ai.PostStatusToFriends = kt;
  function Ot(_, c) {
    return _.SendMsg("Player.GetPostedStatus#1", y(We, c), qe, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ai.GetPostedStatus = Ot;
  function Nt(_, c) {
    return _.SendMsg("Player.DeletePostedStatus#1", y(Te, c), Ie, {
      ePrivilege: 1,
    });
  }
  ai.DeletePostedStatus = Nt;
  function Dt(_, c) {
    return _.SendMsg("Player.ClientGetLastPlayedTimes#1", y(h, c), A, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  ai.ClientGetLastPlayedTimes = Dt;
  function Ut(_, c) {
    return _.SendMsg("Player.GetTimeSSAAccepted#1", y(Cr, c), Rr, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ai.GetTimeSSAAccepted = Ut;
  function Lt(_, c) {
    return _.SendMsg("Player.AcceptSSA#1", y(gr, c), Br, { ePrivilege: 1 });
  }
  ai.AcceptSSA = Lt;
  function Et(_, c) {
    return _.SendMsg("Player.GetNicknameList#1", y(vr, c), Sr, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ai.GetNicknameList = Et;
  function Kt(_, c) {
    return _.SendMsg("Player.GetPerFriendPreferences#1", y(Fr, c), zr, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ai.GetPerFriendPreferences = Kt;
  function $t(_, c) {
    return _.SendMsg("Player.SetPerFriendPreferences#1", y(wr, c), Hr, {
      ePrivilege: 1,
    });
  }
  ai.SetPerFriendPreferences = $t;
  function Qt(_, c) {
    return _.SendMsg("Player.AddFriend#1", y(jr, c), Mr, { ePrivilege: 1 });
  }
  ai.AddFriend = Qt;
  function Vt(_, c) {
    return _.SendMsg("Player.RemoveFriend#1", y(hr, c), Ar, { ePrivilege: 1 });
  }
  ai.RemoveFriend = Vt;
  function Yt(_, c) {
    return _.SendMsg("Player.IgnoreFriend#1", y(Wr, c), qr, { ePrivilege: 1 });
  }
  ai.IgnoreFriend = Yt;
  function Jt(_, c) {
    return _.SendMsg("Player.GetCommunityPreferences#1", y(Tr, c), Ir, {
      ePrivilege: 1,
    });
  }
  ai.GetCommunityPreferences = Jt;
  function Xt(_, c) {
    return _.SendMsg("Player.SetCommunityPreferences#1", y(xr, c), kr, {
      ePrivilege: 1,
    });
  }
  ai.SetCommunityPreferences = Xt;
  function Zt(_, c) {
    return _.SendMsg("Player.GetTextFilterWords#1", y(Or, c), Nr, {
      ePrivilege: 1,
    });
  }
  ai.GetTextFilterWords = Zt;
  function ei(_, c) {
    return _.SendMsg("Player.GetNewSteamAnnouncementState#1", y(Dr, c), Ur, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  ai.GetNewSteamAnnouncementState = ei;
  function ri(_, c) {
    return _.SendMsg("Player.UpdateSteamAnnouncementLastRead#1", y(Lr, c), Er, {
      ePrivilege: 1,
    });
  }
  ai.UpdateSteamAnnouncementLastRead = ri;
  function ti(_, c) {
    return _.SendMsg("Player.GetPrivacySettings#1", y(Kr, c), $r, {
      ePrivilege: 1,
    });
  }
  ai.GetPrivacySettings = ti;
  function ii(_, c) {
    return _.SendMsg("Player.GetDurationControl#1", y(Qr, c), Vr, {
      ePrivilege: 1,
    });
  }
  ai.GetDurationControl = ii;
  function si(_, c) {
    return _.SendMsg("Player.RecordDisconnectedPlaytime#1", y($, c), V, {
      ePrivilege: 1,
    });
  }
  ai.RecordDisconnectedPlaytime = si;
})((ut ||= {}));
var _t;
((b) => (
  (b.NotifyLastPlayedTimesHandler = {
    name: "PlayerClient.NotifyLastPlayedTimes#1",
    request: Yr,
  }),
  (b.NotifyFriendNicknameChangedHandler = {
    name: "PlayerClient.NotifyFriendNicknameChanged#1",
    request: Jr,
  }),
  (b.NotifyFriendEquippedProfileItemsChangedHandler = {
    name: "PlayerClient.NotifyFriendEquippedProfileItemsChanged#1",
    request: Xr,
  }),
  (b.NotifyNewSteamAnnouncementStateHandler = {
    name: "PlayerClient.NotifyNewSteamAnnouncementState#1",
    request: Zr,
  }),
  (b.NotifyCommunityPreferencesChangedHandler = {
    name: "PlayerClient.NotifyCommunityPreferencesChanged#1",
    request: et,
  }),
  (b.NotifyTextFilterWordsChangedHandler = {
    name: "PlayerClient.NotifyTextFilterWordsChanged#1",
    request: rt,
  }),
  (b.NotifyPerFriendPreferencesChangedHandler = {
    name: "PlayerClient.NotifyPerFriendPreferencesChanged#1",
    request: tt,
  }),
  (b.NotifyPrivacyPrivacySettingsChangedHandler = {
    name: "PlayerClient.NotifyPrivacyPrivacySettingsChanged#1",
    request: it,
  })
))((_t ||= {}));
export {
  h as a,
  vr as b,
  B as c,
  Tr as d,
  F as e,
  Or as f,
  ut as g,
  ni as h,
  oi as i,
};
