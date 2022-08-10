/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6431],
  {
    18330: (e, r, t) => {
      t.d(r, {
        $_: () => le,
        AP: () => Fe,
        DN: () => f,
        Dq: () => p,
        N$: () => M,
        No: () => he,
        Oz: () => We,
        Q0: () => s,
        RR: () => S,
        Rl: () => ee,
        Sv: () => x,
        ZY: () => T,
        cy: () => C,
        lk: () => Ie,
        n8: () => Me,
      });
      var i = t(33019),
        a = t(40110);
      t(21205), t(39799);
      const n = i.Message;
      class s extends n {
        constructor(e = null) {
          super(),
            s.prototype.min_last_played || a.aR(s.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            s.sm_m ||
              (s.sm_m = {
                proto: s,
                fields: {
                  min_last_played: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            s.sm_m
          );
        }
        static MBF() {
          return s.sm_mbf || (s.sm_mbf = a.Bh(s.M())), s.sm_mbf;
        }
        toObject(e = !1) {
          return s.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(s.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(s.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new s();
          return s.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(s.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(s.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Request";
        }
      }
      class l extends n {
        constructor(e = null) {
          super(),
            l.prototype.games || a.aR(l.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: { games: { n: 1, c: o, r: !0, q: !0 } },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = a.Bh(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(l.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(l.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new l();
          return l.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(l.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(l.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Response";
        }
      }
      class o extends n {
        constructor(e = null) {
          super(),
            o.prototype.appid || a.aR(o.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  appid: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  last_playtime: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  playtime_2weeks: {
                    n: 3,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  playtime_forever: {
                    n: 4,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  first_playtime: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  playtime_windows_forever: {
                    n: 6,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  playtime_mac_forever: {
                    n: 7,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  playtime_linux_forever: {
                    n: 8,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  first_windows_playtime: {
                    n: 9,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  first_mac_playtime: {
                    n: 10,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  first_linux_playtime: {
                    n: 11,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  last_windows_playtime: {
                    n: 12,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  last_mac_playtime: {
                    n: 13,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  last_linux_playtime: {
                    n: 14,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = a.Bh(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(o.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(o.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new o();
          return o.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(o.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(o.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetLastPlayedTimes_Response_Game";
        }
      }
      class u extends n {
        constructor(e = null) {
          super(),
            u.prototype.steamid || a.aR(u.M()),
            n.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  mutual_friend_account_ids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = a.Bh(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(u.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(u.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new u();
          return u.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(u.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(u.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IncomingInviteMutualFriendList";
        }
      }
      class c extends n {
        constructor(e = null) {
          super(),
            c.prototype.incoming_invite_mutual_friends_lists || a.aR(c.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  incoming_invite_mutual_friends_lists: {
                    n: 1,
                    c: u,
                    r: !0,
                    q: !0,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = a.Bh(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(c.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(c.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new c();
          return c.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(c.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(c.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMutualFriendsForIncomingInvites_Response";
        }
      }
      class m extends n {
        constructor(e = null) {
          super(),
            m.prototype.game_count || a.aR(m.M()),
            n.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  game_count: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  games: { n: 2, c: B, r: !0, q: !0 },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = a.Bh(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(m.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(m.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new m();
          return m.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(m.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(m.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetOwnedGames_Response";
        }
      }
      class B extends n {
        constructor(e = null) {
          super(),
            B.prototype.appid || a.aR(B.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  appid: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  name: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                  playtime_2weeks: {
                    n: 3,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  playtime_forever: {
                    n: 4,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  img_icon_url: {
                    n: 5,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  has_community_visible_stats: {
                    n: 7,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  playtime_windows_forever: {
                    n: 8,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  playtime_mac_forever: {
                    n: 9,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  playtime_linux_forever: {
                    n: 10,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  rtime_last_played: {
                    n: 11,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  capsule_filename: {
                    n: 12,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  sort_as: { n: 13, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = a.Bh(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(B.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(B.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new B();
          return B.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(B.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(B.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetOwnedGames_Response_Game";
        }
      }
      class d extends n {
        constructor(e = null) {
          super(),
            d.prototype.last_update_time || a.aR(d.M()),
            n.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  last_update_time: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  appids: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeRepeatedUint32,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = a.Bh(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(d.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(d.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new d();
          return d.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(d.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(d.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPlayNext_Response";
        }
      }
      class y extends n {
        constructor(e = null) {
          super(),
            y.prototype.player_level || a.aR(y.M()),
            n.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  player_level: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  badges: { n: 2, c: b, r: !0, q: !0 },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = a.Bh(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(y.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new y();
          return y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameBadgeLevels_Response";
        }
      }
      class b extends n {
        constructor(e = null) {
          super(),
            b.prototype.level || a.aR(b.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  level: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  series: { n: 2, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  border_color: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = a.Bh(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(b.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(b.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new b();
          return b.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(b.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(b.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetGameBadgeLevels_Response_Badge";
        }
      }
      class _ extends n {
        constructor(e = null) {
          super(),
            _.prototype.communityitemid || a.aR(_.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  image_small: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  image_large: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  name: { n: 4, br: a.FE.readString, bw: a.Xc.writeString },
                  item_title: {
                    n: 5,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  item_description: {
                    n: 6,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  appid: { n: 7, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  item_type: {
                    n: 8,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  item_class: {
                    n: 9,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  movie_webm: {
                    n: 10,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  movie_mp4: {
                    n: 11,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  movie_webm_small: {
                    n: 13,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  movie_mp4_small: {
                    n: 14,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  equipped_flags: {
                    n: 12,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = a.Bh(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(_.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(_.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _();
          return _.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(_.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(_.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileItem";
        }
      }
      class z extends n {
        constructor(e = null) {
          super(),
            z.prototype.profile_background || a.aR(z.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: { profile_background: { n: 1, c: _ } },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = a.Bh(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(z.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new z();
          return z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(z.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileBackground_Response";
        }
      }
      class f extends n {
        constructor(e = null) {
          super(),
            f.prototype.communityitemid || a.aR(f.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = a.Bh(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(f.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(f.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new f();
          return f.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(f.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(f.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileBackground_Request";
        }
      }
      class w extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
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
          let r = new i.BinaryReader(e),
            t = new w();
          return w.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfileBackground_Response";
        }
      }
      class g extends n {
        constructor(e = null) {
          super(),
            g.prototype.profile_background || a.aR(g.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: { profile_background: { n: 1, c: _ } },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = a.Bh(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(g.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(g.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new g();
          return g.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(g.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(g.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetMiniProfileBackground_Response";
        }
      }
      class M extends n {
        constructor(e = null) {
          super(),
            M.prototype.communityitemid || a.aR(M.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = a.Bh(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(M.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(M.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new M();
          return M.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(M.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(M.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetMiniProfileBackground_Request";
        }
      }
      class F extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new F();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new F();
          return F.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetMiniProfileBackground_Response";
        }
      }
      class R extends n {
        constructor(e = null) {
          super(),
            R.prototype.avatar_frame || a.aR(R.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = { proto: R, fields: { avatar_frame: { n: 1, c: _ } } }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = a.Bh(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(R.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(R.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new R();
          return R.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(R.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(R.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAvatarFrame_Response";
        }
      }
      class p extends n {
        constructor(e = null) {
          super(),
            p.prototype.communityitemid || a.aR(p.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = a.Bh(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(p.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(p.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new p();
          return p.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(p.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(p.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAvatarFrame_Request";
        }
      }
      class h extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new h();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new h();
          return h.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAvatarFrame_Response";
        }
      }
      class W extends n {
        constructor(e = null) {
          super(),
            W.prototype.avatar || a.aR(W.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = { proto: W, fields: { avatar: { n: 1, c: _ } } }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = a.Bh(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(W.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(W.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new W();
          return W.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(W.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(W.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAnimatedAvatar_Response";
        }
      }
      class S extends n {
        constructor(e = null) {
          super(),
            S.prototype.communityitemid || a.aR(S.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = a.Bh(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(S.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(S.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new S();
          return S.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(S.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(S.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetAnimatedAvatar_Request";
        }
      }
      class v extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
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
          return "CPlayer_SetAnimatedAvatar_Response";
        }
      }
      class j extends n {
        constructor(e = null) {
          super(),
            j.prototype.steam_deck_keyboard_skin || a.aR(j.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: { steam_deck_keyboard_skin: { n: 1, c: _ } },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = a.Bh(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(j.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(j.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new j();
          return j.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(j.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(j.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetSteamDeckKeyboardSkin_Response";
        }
      }
      class T extends n {
        constructor(e = null) {
          super(),
            T.prototype.communityitemid || a.aR(T.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  communityitemid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = a.Bh(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(T.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(T.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new T();
          return T.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(T.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(T.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetSteamDeckKeyboardSkin_Request";
        }
      }
      class O extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
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
          let r = new i.BinaryReader(e),
            t = new O();
          return O.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetSteamDeckKeyboardSkin_Response";
        }
      }
      class P extends n {
        constructor(e = null) {
          super(),
            P.prototype.profile_backgrounds || a.aR(P.M()),
            n.initialize(this, e, 0, -1, [1, 2, 3, 4, 5, 6], null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  profile_backgrounds: { n: 1, c: _, r: !0, q: !0 },
                  mini_profile_backgrounds: { n: 2, c: _, r: !0, q: !0 },
                  avatar_frames: { n: 3, c: _, r: !0, q: !0 },
                  animated_avatars: { n: 4, c: _, r: !0, q: !0 },
                  profile_modifiers: { n: 5, c: _, r: !0, q: !0 },
                  steam_deck_keyboard_skins: { n: 6, c: _, r: !0, q: !0 },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = a.Bh(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(P.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(P.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new P();
          return P.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(P.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(P.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsOwned_Response";
        }
      }
      class C extends n {
        constructor(e = null) {
          super(),
            C.prototype.steamid || a.aR(C.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  language: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = a.Bh(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(C.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(C.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new C();
          return C.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(C.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(C.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsEquipped_Request";
        }
      }
      class E extends n {
        constructor(e = null) {
          super(),
            E.prototype.profile_background || a.aR(E.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  profile_background: { n: 1, c: _ },
                  mini_profile_background: { n: 2, c: _ },
                  avatar_frame: { n: 3, c: _ },
                  animated_avatar: { n: 4, c: _ },
                  profile_modifier: { n: 5, c: _ },
                  steam_deck_keyboard_skin: { n: 6, c: _ },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = a.Bh(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(E.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(E.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new E();
          return E.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(E.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(E.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileItemsEquipped_Response";
        }
      }
      class X extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new X();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new X();
          return X.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetEquippedProfileItemFlags_Response";
        }
      }
      class U extends n {
        constructor(e = null) {
          super(),
            U.prototype.emoticons || a.aR(U.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: { emoticons: { n: 1, c: A, r: !0, q: !0 } },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = a.Bh(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(U.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(U.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new U();
          return U.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(U.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(U.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetEmoticonList_Response";
        }
      }
      class A extends n {
        constructor(e = null) {
          super(),
            A.prototype.name || a.aR(A.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  name: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  count: { n: 2, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  time_last_used: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  use_count: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  time_received: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  appid: { n: 6, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = a.Bh(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(A.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(A.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new A();
          return A.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(A.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(A.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetEmoticonList_Response_Emoticon";
        }
      }
      class x extends n {
        constructor(e = null) {
          super(),
            x.prototype.appid || a.aR(x.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  status_text: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = a.Bh(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(x.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(x.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new x();
          return x.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(x.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(x.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PostStatusToFriends_Request";
        }
      }
      class N extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
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
          return "CPlayer_PostStatusToFriends_Response";
        }
      }
      class G extends n {
        constructor(e = null) {
          super(),
            G.prototype.accountid || a.aR(G.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  postid: {
                    n: 2,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  status_text: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  deleted: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                  appid: { n: 5, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = a.Bh(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(G.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(G.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new G();
          return G.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(G.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(G.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPostedStatus_Response";
        }
      }
      class I extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
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
          let r = new i.BinaryReader(e),
            t = new I();
          return I.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_DeletePostedStatus_Response";
        }
      }
      class D extends n {
        constructor(e = null) {
          super(),
            D.prototype.achievement_progress || a.aR(D.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: { achievement_progress: { n: 1, c: k, r: !0, q: !0 } },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = a.Bh(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(D.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(D.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new D();
          return D.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(D.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(D.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAchievementsProgress_Response";
        }
      }
      class k extends n {
        constructor(e = null) {
          super(),
            k.prototype.appid || a.aR(k.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  unlocked: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  total: { n: 3, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  percentage: { n: 4, br: a.FE.readFloat, bw: a.Xc.writeFloat },
                  all_unlocked: { n: 5, br: a.FE.readBool, bw: a.Xc.writeBool },
                  cache_time: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = a.Bh(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(k.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(k.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new k();
          return k.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(k.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(k.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetAchievementsProgress_Response_AchievementProgress";
        }
      }
      class q extends n {
        constructor(e = null) {
          super(),
            q.prototype.has_favorite_badge || a.aR(q.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
                fields: {
                  has_favorite_badge: {
                    n: 1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  badgeid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  communityitemid: {
                    n: 3,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  item_type: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  border_color: {
                    n: 5,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  appid: { n: 6, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  level: { n: 7, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = a.Bh(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(q.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new q();
          return q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(q.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFavoriteBadge_Response";
        }
      }
      class L extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new L();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new L();
          return L.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetFavoriteBadge_Response";
        }
      }
      class K extends n {
        constructor(e = null) {
          super(),
            K.prototype.slot || a.aR(K.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  slot: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  appid: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  publishedfileid: {
                    n: 3,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  item_assetid: {
                    n: 4,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  item_contextid: {
                    n: 5,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  notes: { n: 6, br: a.FE.readString, bw: a.Xc.writeString },
                  title: { n: 7, br: a.FE.readString, bw: a.Xc.writeString },
                  accountid: {
                    n: 8,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  badgeid: { n: 9, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                  border_color: {
                    n: 10,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  item_classid: {
                    n: 11,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  item_instanceid: {
                    n: 12,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  ban_check_result: {
                    n: 13,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = a.Bh(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(K.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(K.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new K();
          return K.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(K.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(K.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileCustomizationSlot";
        }
      }
      class $ extends n {
        constructor(e = null) {
          super(),
            $.prototype.customization_type || a.aR($.M()),
            n.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: {
                  customization_type: {
                    n: 1,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  large: { n: 2, br: a.FE.readBool, bw: a.Xc.writeBool },
                  slots: { n: 3, c: K, r: !0, q: !0 },
                  active: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                  customization_style: {
                    n: 5,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  purchaseid: {
                    n: 6,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  level: { n: 7, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = a.Bh($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA($.M(), e, r);
        }
        static fromObject(e) {
          return a.aD($.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new $();
          return $.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F($.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2($.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileCustomization";
        }
      }
      class H extends n {
        constructor(e = null) {
          super(),
            H.prototype.theme_id || a.aR(H.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  theme_id: { n: 1, br: a.FE.readString, bw: a.Xc.writeString },
                  title: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = a.Bh(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(H.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(H.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new H();
          return H.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(H.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(H.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfileTheme";
        }
      }
      class Q extends n {
        constructor(e = null) {
          super(),
            Q.prototype.hide_profile_awards || a.aR(Q.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  hide_profile_awards: {
                    n: 1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = a.Bh(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Q.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Q.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Q();
          return Q.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Q.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Q.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "ProfilePreferences";
        }
      }
      class Y extends n {
        constructor(e = null) {
          super(),
            Y.prototype.customizations || a.aR(Y.M()),
            n.initialize(this, e, 0, -1, [1, 4], null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  customizations: { n: 1, c: $, r: !0, q: !0 },
                  slots_available: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  profile_theme: { n: 3, c: H },
                  purchased_customizations: { n: 4, c: Z, r: !0, q: !0 },
                  profile_preferences: { n: 5, c: Q },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = a.Bh(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Y.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Y.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Y();
          return Y.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Y.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Y.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileCustomization_Response";
        }
      }
      class Z extends n {
        constructor(e = null) {
          super(),
            Z.prototype.purchaseid || a.aR(Z.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  purchaseid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  customization_type: {
                    n: 2,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  level: { n: 3, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = a.Bh(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Z.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Z.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Z();
          return Z.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Z.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Z.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileCustomization_Response_PurchasedCustomization";
        }
      }
      class J extends n {
        constructor(e = null) {
          super(),
            J.prototype.purchased_customizations || a.aR(J.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  purchased_customizations: { n: 1, c: V, r: !0, q: !0 },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = a.Bh(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(J.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(J.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new J();
          return J.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(J.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(J.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Response";
        }
      }
      class V extends n {
        constructor(e = null) {
          super(),
            V.prototype.purchaseid || a.aR(V.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  purchaseid: {
                    n: 1,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                  customization_type: {
                    n: 2,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = a.Bh(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(V.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(V.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new V();
          return V.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(V.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(V.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedProfileCustomizations_Response_PurchasedCustomization";
        }
      }
      class ee extends n {
        constructor(e = null) {
          super(),
            ee.prototype.steamid || a.aR(ee.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = a.Bh(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ee.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ee.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ee();
          return ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ee.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ee.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request";
        }
      }
      class re extends n {
        constructor(e = null) {
          super(),
            re.prototype.purchased_customizations || a.aR(re.M()),
            n.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  purchased_customizations: { n: 1, c: te, r: !0, q: !0 },
                  upgraded_customizations: { n: 2, c: ie, r: !0, q: !0 },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = a.Bh(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(re.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new re();
          return re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(re.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response";
        }
      }
      class te extends n {
        constructor(e = null) {
          super(),
            te.prototype.customization_type || a.aR(te.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: {
                  customization_type: {
                    n: 1,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  count: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = a.Bh(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(te.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(te.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new te();
          return te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(te.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_PurchasedCustomization";
        }
      }
      class ie extends n {
        constructor(e = null) {
          super(),
            ie.prototype.customization_type || a.aR(ie.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  customization_type: {
                    n: 1,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  level: { n: 2, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = a.Bh(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ie.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ie.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ie();
          return ie.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ie.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ie.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_UpgradedCustomization";
        }
      }
      class ae extends n {
        constructor(e = null) {
          super(),
            ae.prototype.profile_themes || a.aR(ae.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: { profile_themes: { n: 1, c: H, r: !0, q: !0 } },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = a.Bh(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ae.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ae.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ae();
          return ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetProfileThemesAvailable_Response";
        }
      }
      class ne extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
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
          return "CPlayer_SetProfileTheme_Response";
        }
      }
      class se extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new se();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new se();
          return se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetProfilePreferences_Response";
        }
      }
      class le extends n {
        constructor(e = null) {
          super(),
            le.prototype.appid || a.aR(le.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  appid: { n: 1, br: a.FE.readUint32, bw: a.Xc.writeUint32 },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = a.Bh(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(le.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(le.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new le();
          return le.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(le.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(le.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Request";
        }
      }
      class oe extends n {
        constructor(e = null) {
          super(),
            oe.prototype.your_info || a.aR(oe.M()),
            n.initialize(this, e, 0, -1, [2, 3, 4, 5, 6], null);
        }
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  your_info: { n: 1, c: ce },
                  in_game: { n: 2, c: ue, r: !0, q: !0 },
                  played_recently: { n: 3, c: ue, r: !0, q: !0 },
                  played_ever: { n: 4, c: ue, r: !0, q: !0 },
                  owns: { n: 5, c: ue, r: !0, q: !0 },
                  in_wishlist: { n: 6, c: ue, r: !0, q: !0 },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = a.Bh(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(oe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(oe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new oe();
          return oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response";
        }
      }
      class ue extends n {
        constructor(e = null) {
          super(),
            ue.prototype.steamid || a.aR(ue.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  minutes_played: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  minutes_played_forever: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = a.Bh(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ue.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ue.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ue();
          return ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ue.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ue.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo";
        }
      }
      class ce extends n {
        constructor(e = null) {
          super(),
            ce.prototype.steamid || a.aR(ce.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  steamid: {
                    n: 1,
                    br: a.FE.readFixed64String,
                    bw: a.Xc.writeFixed64String,
                  },
                  minutes_played: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  minutes_played_forever: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  in_wishlist: { n: 4, br: a.FE.readBool, bw: a.Xc.writeBool },
                  owned: { n: 5, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = a.Bh(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ce.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ce.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ce();
          return ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ce.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ce.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetFriendsGameplayInfo_Response_OwnGameplayInfo";
        }
      }
      class me extends n {
        constructor(e = null) {
          super(),
            me.prototype.time_ssa_accepted || a.aR(me.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  time_ssa_accepted: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  time_ssa_updated: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  time_chinassa_accepted: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = a.Bh(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(me.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(me.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new me();
          return me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(me.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(me.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTimeSSAAccepted_Response";
        }
      }
      class Be extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Be();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Be();
          return Be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AcceptSSA_Response";
        }
      }
      class de extends n {
        constructor(e = null) {
          super(),
            de.prototype.nicknames || a.aR(de.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: { nicknames: { n: 1, c: ye, r: !0, q: !0 } },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = a.Bh(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(de.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(de.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new de();
          return de.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(de.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(de.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Response";
        }
      }
      class ye extends n {
        constructor(e = null) {
          super(),
            ye.prototype.accountid || a.aR(ye.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.FE.readFixed32,
                    bw: a.Xc.writeFixed32,
                  },
                  nickname: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = a.Bh(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ye.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ye.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ye();
          return ye.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ye.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ye.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNicknameList_Response_PlayerNickname";
        }
      }
      class be extends n {
        constructor(e = null) {
          super(),
            be.prototype.accountid || a.aR(be.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.FE.readFixed32,
                    bw: a.Xc.writeFixed32,
                  },
                  nickname: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                  notifications_showingame: {
                    n: 3,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  notifications_showonline: {
                    n: 4,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  notifications_showmessages: {
                    n: 5,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  sounds_showingame: {
                    n: 6,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  sounds_showonline: {
                    n: 7,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  sounds_showmessages: {
                    n: 8,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  notifications_sendmobile: {
                    n: 9,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = a.Bh(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(be.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(be.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new be();
          return be.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(be.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(be.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "PerFriendPreferences";
        }
      }
      class _e extends n {
        constructor(e = null) {
          super(),
            _e.prototype.preferences || a.aR(_e.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: { preferences: { n: 1, c: be, r: !0, q: !0 } },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = a.Bh(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(_e.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(_e.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new _e();
          return _e.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(_e.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(_e.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPerFriendPreferences_Response";
        }
      }
      class ze extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
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
          return "CPlayer_SetPerFriendPreferences_Response";
        }
      }
      class fe extends n {
        constructor(e = null) {
          super(),
            fe.prototype.invite_sent || a.aR(fe.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            fe.sm_m ||
              (fe.sm_m = {
                proto: fe,
                fields: {
                  invite_sent: { n: 1, br: a.FE.readBool, bw: a.Xc.writeBool },
                  friend_relationship: {
                    n: 2,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  result: { n: 3, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                },
              }),
            fe.sm_m
          );
        }
        static MBF() {
          return fe.sm_mbf || (fe.sm_mbf = a.Bh(fe.M())), fe.sm_mbf;
        }
        toObject(e = !1) {
          return fe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(fe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(fe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new fe();
          return fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(fe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(fe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_AddFriend_Response";
        }
      }
      class we extends n {
        constructor(e = null) {
          super(),
            we.prototype.friend_relationship || a.aR(we.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            we.sm_m ||
              (we.sm_m = {
                proto: we,
                fields: {
                  friend_relationship: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            we.sm_m
          );
        }
        static MBF() {
          return we.sm_mbf || (we.sm_mbf = a.Bh(we.M())), we.sm_mbf;
        }
        toObject(e = !1) {
          return we.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(we.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(we.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new we();
          return we.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(we.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(we.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return we.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_RemoveFriend_Response";
        }
      }
      class ge extends n {
        constructor(e = null) {
          super(),
            ge.prototype.friend_relationship || a.aR(ge.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  friend_relationship: {
                    n: 1,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = a.Bh(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ge.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ge.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ge();
          return ge.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ge.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ge.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_IgnoreFriend_Response";
        }
      }
      class Me extends n {
        constructor(e = null) {
          super(),
            Me.prototype.hide_adult_content_violence || a.aR(Me.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Me.sm_m ||
              (Me.sm_m = {
                proto: Me,
                fields: {
                  hide_adult_content_violence: {
                    n: 1,
                    d: !0,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  hide_adult_content_sex: {
                    n: 2,
                    d: !0,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  parenthesize_nicknames: {
                    n: 4,
                    d: !1,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  text_filter_setting: {
                    n: 5,
                    br: a.FE.readEnum,
                    bw: a.Xc.writeEnum,
                  },
                  text_filter_ignore_friends: {
                    n: 6,
                    d: !0,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  text_filter_words_revision: {
                    n: 7,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  timestamp_updated: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            Me.sm_m
          );
        }
        static MBF() {
          return Me.sm_mbf || (Me.sm_mbf = a.Bh(Me.M())), Me.sm_mbf;
        }
        toObject(e = !1) {
          return Me.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Me.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Me.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Me();
          return Me.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Me.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Me.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_CommunityPreferences";
        }
      }
      class Fe extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new Fe();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Fe();
          return Fe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityPreferences_Request";
        }
      }
      class Re extends n {
        constructor(e = null) {
          super(),
            Re.prototype.preferences || a.aR(Re.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: { preferences: { n: 1, c: Me } },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = a.Bh(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Re.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Re.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Re();
          return Re.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Re.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Re.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetCommunityPreferences_Response";
        }
      }
      class pe extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
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
          let r = new i.BinaryReader(e),
            t = new pe();
          return pe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_SetCommunityPreferences_Response";
        }
      }
      class he extends n {
        constructor(e = null) {
          super(),
            he.prototype.text_filter_custom_banned_words || a.aR(he.M()),
            n.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  text_filter_custom_banned_words: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: a.FE.readString,
                    bw: a.Xc.writeRepeatedString,
                  },
                  text_filter_custom_clean_words: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.FE.readString,
                    bw: a.Xc.writeRepeatedString,
                  },
                  text_filter_words_revision: {
                    n: 3,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = a.Bh(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(he.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(he.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new he();
          return he.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(he.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(he.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_TextFilterWords";
        }
      }
      class We extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new We();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new We();
          return We.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTextFilterWords_Request";
        }
      }
      class Se extends n {
        constructor(e = null) {
          super(),
            Se.prototype.words || a.aR(Se.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Se.sm_m ||
              (Se.sm_m = { proto: Se, fields: { words: { n: 1, c: he } } }),
            Se.sm_m
          );
        }
        static MBF() {
          return Se.sm_mbf || (Se.sm_mbf = a.Bh(Se.M())), Se.sm_mbf;
        }
        toObject(e = !1) {
          return Se.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Se.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Se.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Se();
          return Se.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Se.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Se.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetTextFilterWords_Response";
        }
      }
      class ve extends n {
        constructor(e = null) {
          super(),
            ve.prototype.state || a.aR(ve.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ve.sm_m ||
              (ve.sm_m = {
                proto: ve,
                fields: {
                  state: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  announcement_headline: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  announcement_url: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  time_posted: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  announcement_gid: {
                    n: 5,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            ve.sm_m
          );
        }
        static MBF() {
          return ve.sm_mbf || (ve.sm_mbf = a.Bh(ve.M())), ve.sm_mbf;
        }
        toObject(e = !1) {
          return ve.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(ve.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(ve.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new ve();
          return ve.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(ve.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(ve.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return ve.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetNewSteamAnnouncementState_Response";
        }
      }
      class je extends n {
        constructor(e = null) {
          super(), n.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, r) {
          return e ? { $jspbMessageInstance: r } : {};
        }
        static fromObject(e) {
          return new je();
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new je();
          return je.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return e;
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {}
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_UpdateSteamAnnouncementLastRead_Response";
        }
      }
      class Te extends n {
        constructor(e = null) {
          super(),
            Te.prototype.privacy_state || a.aR(Te.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Te.sm_m ||
              (Te.sm_m = {
                proto: Te,
                fields: {
                  privacy_state: {
                    n: 1,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  privacy_state_inventory: {
                    n: 2,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  privacy_state_gifts: {
                    n: 3,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  privacy_state_ownedgames: {
                    n: 4,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  privacy_state_playtime: {
                    n: 5,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  privacy_state_friendslist: {
                    n: 6,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                },
              }),
            Te.sm_m
          );
        }
        static MBF() {
          return Te.sm_mbf || (Te.sm_mbf = a.Bh(Te.M())), Te.sm_mbf;
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Te.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Te.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Te();
          return Te.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Te.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Te.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPrivacySettings";
        }
      }
      class Oe extends n {
        constructor(e = null) {
          super(),
            Oe.prototype.privacy_settings || a.aR(Oe.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: { privacy_settings: { n: 1, c: Te } },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = a.Bh(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Oe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Oe();
          return Oe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Oe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Oe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetPrivacySettings_Response";
        }
      }
      class Pe extends n {
        constructor(e = null) {
          super(),
            Pe.prototype.is_enabled || a.aR(Pe.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Pe.sm_m ||
              (Pe.sm_m = {
                proto: Pe,
                fields: {
                  is_enabled: { n: 1, br: a.FE.readBool, bw: a.Xc.writeBool },
                  seconds: { n: 2, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  seconds_today: {
                    n: 3,
                    br: a.FE.readInt32,
                    bw: a.Xc.writeInt32,
                  },
                  is_steamchina_account: {
                    n: 4,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  is_age_verified: {
                    n: 5,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  seconds_allowed_today: {
                    n: 6,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  age_verification_pending: {
                    n: 7,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                  block_minors: { n: 8, br: a.FE.readBool, bw: a.Xc.writeBool },
                },
              }),
            Pe.sm_m
          );
        }
        static MBF() {
          return Pe.sm_mbf || (Pe.sm_mbf = a.Bh(Pe.M())), Pe.sm_mbf;
        }
        toObject(e = !1) {
          return Pe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Pe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Pe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Pe();
          return Pe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Pe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Pe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_GetDurationControl_Response";
        }
      }
      class Ce extends n {
        constructor(e = null) {
          super(),
            Ce.prototype.games || a.aR(Ce.M()),
            n.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Ce.sm_m ||
              (Ce.sm_m = {
                proto: Ce,
                fields: { games: { n: 1, c: o, r: !0, q: !0 } },
              }),
            Ce.sm_m
          );
        }
        static MBF() {
          return Ce.sm_mbf || (Ce.sm_mbf = a.Bh(Ce.M())), Ce.sm_mbf;
        }
        toObject(e = !1) {
          return Ce.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ce.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ce.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ce();
          return Ce.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ce.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ce.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_LastPlayedTimes_Notification";
        }
      }
      class Ee extends n {
        constructor(e = null) {
          super(),
            Ee.prototype.accountid || a.aR(Ee.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ee.sm_m ||
              (Ee.sm_m = {
                proto: Ee,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.FE.readFixed32,
                    bw: a.Xc.writeFixed32,
                  },
                  nickname: { n: 2, br: a.FE.readString, bw: a.Xc.writeString },
                  is_echo_to_self: {
                    n: 3,
                    br: a.FE.readBool,
                    bw: a.Xc.writeBool,
                  },
                },
              }),
            Ee.sm_m
          );
        }
        static MBF() {
          return Ee.sm_mbf || (Ee.sm_mbf = a.Bh(Ee.M())), Ee.sm_mbf;
        }
        toObject(e = !1) {
          return Ee.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ee.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ee.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ee();
          return Ee.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ee.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ee.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_FriendNicknameChanged_Notification";
        }
      }
      class Xe extends n {
        constructor(e = null) {
          super(),
            Xe.prototype.accountid || a.aR(Xe.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Xe.sm_m ||
              (Xe.sm_m = {
                proto: Xe,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.FE.readFixed32,
                    bw: a.Xc.writeFixed32,
                  },
                },
              }),
            Xe.sm_m
          );
        }
        static MBF() {
          return Xe.sm_mbf || (Xe.sm_mbf = a.Bh(Xe.M())), Xe.sm_mbf;
        }
        toObject(e = !1) {
          return Xe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Xe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Xe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Xe();
          return Xe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Xe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Xe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_FriendEquippedProfileItemsChanged_Notification";
        }
      }
      class Ue extends n {
        constructor(e = null) {
          super(),
            Ue.prototype.state || a.aR(Ue.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ue.sm_m ||
              (Ue.sm_m = {
                proto: Ue,
                fields: {
                  state: { n: 1, br: a.FE.readInt32, bw: a.Xc.writeInt32 },
                  announcement_headline: {
                    n: 2,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  announcement_url: {
                    n: 3,
                    br: a.FE.readString,
                    bw: a.Xc.writeString,
                  },
                  time_posted: {
                    n: 4,
                    br: a.FE.readUint32,
                    bw: a.Xc.writeUint32,
                  },
                  announcement_gid: {
                    n: 5,
                    br: a.FE.readUint64String,
                    bw: a.Xc.writeUint64String,
                  },
                },
              }),
            Ue.sm_m
          );
        }
        static MBF() {
          return Ue.sm_mbf || (Ue.sm_mbf = a.Bh(Ue.M())), Ue.sm_mbf;
        }
        toObject(e = !1) {
          return Ue.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ue.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ue.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ue();
          return Ue.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ue.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ue.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_NewSteamAnnouncementState_Notification";
        }
      }
      class Ae extends n {
        constructor(e = null) {
          super(),
            Ae.prototype.preferences || a.aR(Ae.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ae.sm_m ||
              (Ae.sm_m = {
                proto: Ae,
                fields: { preferences: { n: 1, c: Me } },
              }),
            Ae.sm_m
          );
        }
        static MBF() {
          return Ae.sm_mbf || (Ae.sm_mbf = a.Bh(Ae.M())), Ae.sm_mbf;
        }
        toObject(e = !1) {
          return Ae.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ae.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ae.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ae();
          return Ae.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ae.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ae.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_CommunityPreferencesChanged_Notification";
        }
      }
      class xe extends n {
        constructor(e = null) {
          super(),
            xe.prototype.words || a.aR(xe.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            xe.sm_m ||
              (xe.sm_m = { proto: xe, fields: { words: { n: 1, c: he } } }),
            xe.sm_m
          );
        }
        static MBF() {
          return xe.sm_mbf || (xe.sm_mbf = a.Bh(xe.M())), xe.sm_mbf;
        }
        toObject(e = !1) {
          return xe.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(xe.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(xe.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new xe();
          return xe.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(xe.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(xe.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return xe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_TextFilterWordsChanged_Notification";
        }
      }
      class Ne extends n {
        constructor(e = null) {
          super(),
            Ne.prototype.accountid || a.aR(Ne.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ne.sm_m ||
              (Ne.sm_m = {
                proto: Ne,
                fields: {
                  accountid: {
                    n: 1,
                    br: a.FE.readFixed32,
                    bw: a.Xc.writeFixed32,
                  },
                  preferences: { n: 2, c: be },
                },
              }),
            Ne.sm_m
          );
        }
        static MBF() {
          return Ne.sm_mbf || (Ne.sm_mbf = a.Bh(Ne.M())), Ne.sm_mbf;
        }
        toObject(e = !1) {
          return Ne.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ne.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ne.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ne();
          return Ne.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ne.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ne.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PerFriendPreferencesChanged_Notification";
        }
      }
      class Ge extends n {
        constructor(e = null) {
          super(),
            Ge.prototype.privacy_settings || a.aR(Ge.M()),
            n.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ge.sm_m ||
              (Ge.sm_m = {
                proto: Ge,
                fields: { privacy_settings: { n: 1, c: Te } },
              }),
            Ge.sm_m
          );
        }
        static MBF() {
          return Ge.sm_mbf || (Ge.sm_mbf = a.Bh(Ge.M())), Ge.sm_mbf;
        }
        toObject(e = !1) {
          return Ge.toObject(e, this);
        }
        static toObject(e, r) {
          return a.TA(Ge.M(), e, r);
        }
        static fromObject(e) {
          return a.aD(Ge.M(), e);
        }
        static deserializeBinary(e) {
          let r = new i.BinaryReader(e),
            t = new Ge();
          return Ge.deserializeBinaryFromReader(t, r);
        }
        static deserializeBinaryFromReader(e, r) {
          return a.F(Ge.MBF(), e, r);
        }
        serializeBinary() {
          var e = new i.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, r) {
          a.l2(Ge.M(), e, r);
        }
        serializeBase64String() {
          var e = new i.BinaryWriter();
          return Ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CPlayer_PrivacySettingsChanged_Notification";
        }
      }
      var Ie, De;
      !(function (e) {
        (e.GetMutualFriendsForIncomingInvites = function (e, r) {
          return e.SendMsg(
            "Player.GetMutualFriendsForIncomingInvites#1",
            r,
            c,
            { bConstMethod: !0, ePrivilege: 1 }
          );
        }),
          (e.GetOwnedGames = function (e, r) {
            return e.SendMsg("Player.GetOwnedGames#1", r, m, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetPlayNext = function (e, r) {
            return e.SendMsg("Player.GetPlayNext#1", r, d, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetFriendsGameplayInfo = function (e, r) {
            return e.SendMsg("Player.GetFriendsGameplayInfo#1", r, oe, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetGameBadgeLevels = function (e, r) {
            return e.SendMsg("Player.GetGameBadgeLevels#1", r, y, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetProfileBackground = function (e, r) {
            return e.SendMsg("Player.GetProfileBackground#1", r, z, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.SetProfileBackground = function (e, r) {
            return e.SendMsg("Player.SetProfileBackground#1", r, w, {
              ePrivilege: 1,
            });
          }),
          (e.GetMiniProfileBackground = function (e, r) {
            return e.SendMsg("Player.GetMiniProfileBackground#1", r, g, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.SetMiniProfileBackground = function (e, r) {
            return e.SendMsg("Player.SetMiniProfileBackground#1", r, F, {
              ePrivilege: 1,
            });
          }),
          (e.GetAvatarFrame = function (e, r) {
            return e.SendMsg("Player.GetAvatarFrame#1", r, R, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.SetAvatarFrame = function (e, r) {
            return e.SendMsg("Player.SetAvatarFrame#1", r, h, {
              ePrivilege: 1,
            });
          }),
          (e.GetAnimatedAvatar = function (e, r) {
            return e.SendMsg("Player.GetAnimatedAvatar#1", r, W, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.SetAnimatedAvatar = function (e, r) {
            return e.SendMsg("Player.SetAnimatedAvatar#1", r, v, {
              ePrivilege: 1,
            });
          }),
          (e.GetSteamDeckKeyboardSkin = function (e, r) {
            return e.SendMsg("Player.GetSteamDeckKeyboardSkin#1", r, j, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.SetSteamDeckKeyboardSkin = function (e, r) {
            return e.SendMsg("Player.SetSteamDeckKeyboardSkin#1", r, O, {
              ePrivilege: 1,
            });
          }),
          (e.GetProfileItemsOwned = function (e, r) {
            return e.SendMsg("Player.GetProfileItemsOwned#1", r, P, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetProfileItemsEquipped = function (e, r) {
            return e.SendMsg("Player.GetProfileItemsEquipped#1", r, E, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.SetEquippedProfileItemFlags = function (e, r) {
            return e.SendMsg("Player.SetEquippedProfileItemFlags#1", r, X, {
              ePrivilege: 1,
            });
          }),
          (e.GetEmoticonList = function (e, r) {
            return e.SendMsg("Player.GetEmoticonList#1", r, U, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetAchievementsProgress = function (e, r) {
            return e.SendMsg("Player.GetAchievementsProgress#1", r, D, {
              ePrivilege: 1,
            });
          }),
          (e.GetFavoriteBadge = function (e, r) {
            return e.SendMsg("Player.GetFavoriteBadge#1", r, q, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.SetFavoriteBadge = function (e, r) {
            return e.SendMsg("Player.SetFavoriteBadge#1", r, L, {
              ePrivilege: 1,
            });
          }),
          (e.GetProfileCustomization = function (e, r) {
            return e.SendMsg("Player.GetProfileCustomization#1", r, Y, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetPurchasedProfileCustomizations = function (e, r) {
            return e.SendMsg(
              "Player.GetPurchasedProfileCustomizations#1",
              r,
              J,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.GetPurchasedAndUpgradedProfileCustomizations = function (e, r) {
            return e.SendMsg(
              "Player.GetPurchasedAndUpgradedProfileCustomizations#1",
              r,
              re,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 }
            );
          }),
          (e.GetProfileThemesAvailable = function (e, r) {
            return e.SendMsg("Player.GetProfileThemesAvailable#1", r, ae, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SetProfileTheme = function (e, r) {
            return e.SendMsg("Player.SetProfileTheme#1", r, ne, {
              ePrivilege: 1,
            });
          }),
          (e.SetProfilePreferences = function (e, r) {
            return e.SendMsg("Player.SetProfilePreferences#1", r, se, {
              ePrivilege: 1,
            });
          }),
          (e.PostStatusToFriends = function (e, r) {
            return e.SendMsg("Player.PostStatusToFriends#1", r, N, {
              ePrivilege: 3,
            });
          }),
          (e.GetPostedStatus = function (e, r) {
            return e.SendMsg("Player.GetPostedStatus#1", r, G, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.DeletePostedStatus = function (e, r) {
            return e.SendMsg("Player.DeletePostedStatus#1", r, I, {
              ePrivilege: 1,
            });
          }),
          (e.ClientGetLastPlayedTimes = function (e, r) {
            return e.SendMsg("Player.ClientGetLastPlayedTimes#1", r, l, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetTimeSSAAccepted = function (e, r) {
            return e.SendMsg("Player.GetTimeSSAAccepted#1", r, me, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.AcceptSSA = function (e, r) {
            return e.SendMsg("Player.AcceptSSA#1", r, Be, { ePrivilege: 1 });
          }),
          (e.GetNicknameList = function (e, r) {
            return e.SendMsg("Player.GetNicknameList#1", r, de, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetPerFriendPreferences = function (e, r) {
            return e.SendMsg("Player.GetPerFriendPreferences#1", r, _e, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SetPerFriendPreferences = function (e, r) {
            return e.SendMsg("Player.SetPerFriendPreferences#1", r, ze, {
              ePrivilege: 1,
            });
          }),
          (e.AddFriend = function (e, r) {
            return e.SendMsg("Player.AddFriend#1", r, fe, { ePrivilege: 1 });
          }),
          (e.RemoveFriend = function (e, r) {
            return e.SendMsg("Player.RemoveFriend#1", r, we, { ePrivilege: 1 });
          }),
          (e.IgnoreFriend = function (e, r) {
            return e.SendMsg("Player.IgnoreFriend#1", r, ge, { ePrivilege: 1 });
          }),
          (e.GetCommunityPreferences = function (e, r) {
            return e.SendMsg("Player.GetCommunityPreferences#1", r, Re, {
              ePrivilege: 1,
            });
          }),
          (e.SetCommunityPreferences = function (e, r) {
            return e.SendMsg("Player.SetCommunityPreferences#1", r, pe, {
              ePrivilege: 1,
            });
          }),
          (e.GetTextFilterWords = function (e, r) {
            return e.SendMsg("Player.GetTextFilterWords#1", r, Se, {
              ePrivilege: 1,
            });
          }),
          (e.GetNewSteamAnnouncementState = function (e, r) {
            return e.SendMsg("Player.GetNewSteamAnnouncementState#1", r, ve, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.UpdateSteamAnnouncementLastRead = function (e, r) {
            return e.SendMsg(
              "Player.UpdateSteamAnnouncementLastRead#1",
              r,
              je,
              { ePrivilege: 1 }
            );
          }),
          (e.GetPrivacySettings = function (e, r) {
            return e.SendMsg("Player.GetPrivacySettings#1", r, Oe, {
              ePrivilege: 1,
            });
          }),
          (e.GetDurationControl = function (e, r) {
            return e.SendMsg("Player.GetDurationControl#1", r, Pe, {
              ePrivilege: 1,
            });
          });
      })(Ie || (Ie = {})),
        (function (e) {
          (e.NotifyLastPlayedTimesHandler = {
            name: "PlayerClient.NotifyLastPlayedTimes#1",
            request: Ce,
          }),
            (e.NotifyFriendNicknameChangedHandler = {
              name: "PlayerClient.NotifyFriendNicknameChanged#1",
              request: Ee,
            }),
            (e.NotifyFriendEquippedProfileItemsChangedHandler = {
              name: "PlayerClient.NotifyFriendEquippedProfileItemsChanged#1",
              request: Xe,
            }),
            (e.NotifyNewSteamAnnouncementStateHandler = {
              name: "PlayerClient.NotifyNewSteamAnnouncementState#1",
              request: Ue,
            }),
            (e.NotifyCommunityPreferencesChangedHandler = {
              name: "PlayerClient.NotifyCommunityPreferencesChanged#1",
              request: Ae,
            }),
            (e.NotifyTextFilterWordsChangedHandler = {
              name: "PlayerClient.NotifyTextFilterWordsChanged#1",
              request: xe,
            }),
            (e.NotifyPerFriendPreferencesChangedHandler = {
              name: "PlayerClient.NotifyPerFriendPreferencesChanged#1",
              request: Ne,
            }),
            (e.NotifyPrivacyPrivacySettingsChangedHandler = {
              name: "PlayerClient.NotifyPrivacyPrivacySettingsChanged#1",
              request: Ge,
            });
        })(De || (De = {}));
    },
  },
]);
