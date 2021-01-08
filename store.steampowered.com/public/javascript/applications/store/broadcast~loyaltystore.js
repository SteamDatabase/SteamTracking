/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    oFam: function (e, r, t) {
      "use strict";
      t.d(r, "c", function () {
        return f;
      }),
        t.d(r, "d", function () {
          return p;
        }),
        t.d(r, "k", function () {
          return g;
        }),
        t.d(r, "j", function () {
          return R;
        }),
        t.d(r, "i", function () {
          return W;
        }),
        t.d(r, "h", function () {
          return T;
        }),
        t.d(r, "e", function () {
          return G;
        }),
        t.d(r, "f", function () {
          return re;
        }),
        t.d(r, "a", function () {
          return he;
        }),
        t.d(r, "b", function () {
          return ze;
        }),
        t.d(r, "l", function () {
          return Oe;
        }),
        t.d(r, "g", function () {
          return Re;
        }),
        t.d(r, "m", function () {
          return n;
        });
      var i = t("mrSG"),
        o = t("hRO2"),
        a = t("OS8t"),
        u = o.Message;
      var n,
        s,
        c,
        l,
        f = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.min_last_played || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      min_last_played: {
                        n: 1,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetLastPlayedTimes_Request";
            }),
            n
          );
        })(u),
        d = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.games || a.a(n.M()),
              u.initialize(r, e, 0, -1, [1], null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { games: { n: 1, c: m, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetLastPlayedTimes_Response";
            }),
            n
          );
        })(u),
        m = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.appid || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      appid: { n: 1, br: a.d.readInt32, bw: a.h.writeInt32 },
                      last_playtime: {
                        n: 2,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      playtime_2weeks: {
                        n: 3,
                        br: a.d.readInt32,
                        bw: a.h.writeInt32,
                      },
                      playtime_forever: {
                        n: 4,
                        br: a.d.readInt32,
                        bw: a.h.writeInt32,
                      },
                      first_playtime: {
                        n: 5,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      playtime_windows_forever: {
                        n: 6,
                        br: a.d.readInt32,
                        bw: a.h.writeInt32,
                      },
                      playtime_mac_forever: {
                        n: 7,
                        br: a.d.readInt32,
                        bw: a.h.writeInt32,
                      },
                      playtime_linux_forever: {
                        n: 8,
                        br: a.d.readInt32,
                        bw: a.h.writeInt32,
                      },
                      first_windows_playtime: {
                        n: 9,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      first_mac_playtime: {
                        n: 10,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      first_linux_playtime: {
                        n: 11,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      last_windows_playtime: {
                        n: 12,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      last_mac_playtime: {
                        n: 13,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      last_linux_playtime: {
                        n: 14,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetLastPlayedTimes_Response_Game";
            }),
            n
          );
        })(u),
        y = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.steamid || a.a(n.M()),
              u.initialize(r, e, 0, -1, [2], null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      steamid: {
                        n: 1,
                        br: a.d.readFixed64String,
                        bw: a.h.writeFixed64String,
                      },
                      mutual_friend_account_ids: {
                        n: 2,
                        r: !0,
                        q: !0,
                        br: a.d.readUint32,
                        bw: a.h.writeRepeatedUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_IncomingInviteMutualFriendList";
            }),
            n
          );
        })(u),
        b = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.incoming_invite_mutual_friends_lists || a.a(n.M()),
              u.initialize(r, e, 0, -1, [1], null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      incoming_invite_mutual_friends_lists: {
                        n: 1,
                        c: y,
                        r: !0,
                        q: !0,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetMutualFriendsForIncomingInvites_Response";
            }),
            n
          );
        })(u),
        p = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.steamid || a.a(n.M()),
              u.initialize(r, e, 0, -1, [4], null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      steamid: {
                        n: 1,
                        br: a.d.readUint64String,
                        bw: a.h.writeUint64String,
                      },
                      include_appinfo: {
                        n: 2,
                        br: a.d.readBool,
                        bw: a.h.writeBool,
                      },
                      include_played_free_games: {
                        n: 3,
                        br: a.d.readBool,
                        bw: a.h.writeBool,
                      },
                      appids_filter: {
                        n: 4,
                        r: !0,
                        q: !0,
                        br: a.d.readUint32,
                        bw: a.h.writeRepeatedUint32,
                      },
                      include_free_sub: {
                        n: 5,
                        br: a.d.readBool,
                        bw: a.h.writeBool,
                      },
                      skip_unvetted_apps: {
                        n: 6,
                        d: !0,
                        br: a.d.readBool,
                        bw: a.h.writeBool,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetOwnedGames_Request";
            }),
            n
          );
        })(u),
        B = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.game_count || a.a(n.M()),
              u.initialize(r, e, 0, -1, [2], null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      game_count: {
                        n: 1,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      games: { n: 2, c: _, r: !0, q: !0 },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetOwnedGames_Response";
            }),
            n
          );
        })(u),
        _ = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.appid || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      appid: { n: 1, br: a.d.readInt32, bw: a.h.writeInt32 },
                      name: { n: 2, br: a.d.readString, bw: a.h.writeString },
                      playtime_2weeks: {
                        n: 3,
                        br: a.d.readInt32,
                        bw: a.h.writeInt32,
                      },
                      playtime_forever: {
                        n: 4,
                        br: a.d.readInt32,
                        bw: a.h.writeInt32,
                      },
                      img_icon_url: {
                        n: 5,
                        br: a.d.readString,
                        bw: a.h.writeString,
                      },
                      img_logo_url: {
                        n: 6,
                        br: a.d.readString,
                        bw: a.h.writeString,
                      },
                      has_community_visible_stats: {
                        n: 7,
                        br: a.d.readBool,
                        bw: a.h.writeBool,
                      },
                      playtime_windows_forever: {
                        n: 8,
                        br: a.d.readInt32,
                        bw: a.h.writeInt32,
                      },
                      playtime_mac_forever: {
                        n: 9,
                        br: a.d.readInt32,
                        bw: a.h.writeInt32,
                      },
                      playtime_linux_forever: {
                        n: 10,
                        br: a.d.readInt32,
                        bw: a.h.writeInt32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetOwnedGames_Response_Game";
            }),
            n
          );
        })(u),
        w = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.last_update_time || a.a(n.M()),
              u.initialize(r, e, 0, -1, [2], null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      last_update_time: {
                        n: 1,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      appids: {
                        n: 2,
                        r: !0,
                        q: !0,
                        br: a.d.readUint32,
                        bw: a.h.writeRepeatedUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetPlayNext_Response";
            }),
            n
          );
        })(u),
        M = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.player_level || a.a(n.M()),
              u.initialize(r, e, 0, -1, [2], null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      player_level: {
                        n: 1,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      badges: { n: 2, c: v, r: !0, q: !0 },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetGameBadgeLevels_Response";
            }),
            n
          );
        })(u),
        v = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.level || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      level: { n: 1, br: a.d.readInt32, bw: a.h.writeInt32 },
                      series: { n: 2, br: a.d.readInt32, bw: a.h.writeInt32 },
                      border_color: {
                        n: 3,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetGameBadgeLevels_Response_Badge";
            }),
            n
          );
        })(u),
        h = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.communityitemid || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      communityitemid: {
                        n: 1,
                        br: a.d.readUint64String,
                        bw: a.h.writeUint64String,
                      },
                      image_small: {
                        n: 2,
                        br: a.d.readString,
                        bw: a.h.writeString,
                      },
                      image_large: {
                        n: 3,
                        br: a.d.readString,
                        bw: a.h.writeString,
                      },
                      name: { n: 4, br: a.d.readString, bw: a.h.writeString },
                      item_title: {
                        n: 5,
                        br: a.d.readString,
                        bw: a.h.writeString,
                      },
                      item_description: {
                        n: 6,
                        br: a.d.readString,
                        bw: a.h.writeString,
                      },
                      appid: { n: 7, br: a.d.readUint32, bw: a.h.writeUint32 },
                      item_type: {
                        n: 8,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      item_class: {
                        n: 9,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      movie_webm: {
                        n: 10,
                        br: a.d.readString,
                        bw: a.h.writeString,
                      },
                      movie_mp4: {
                        n: 11,
                        br: a.d.readString,
                        bw: a.h.writeString,
                      },
                      movie_webm_small: {
                        n: 13,
                        br: a.d.readString,
                        bw: a.h.writeString,
                      },
                      movie_mp4_small: {
                        n: 14,
                        br: a.d.readString,
                        bw: a.h.writeString,
                      },
                      equipped_flags: {
                        n: 12,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "ProfileItem";
            }),
            n
          );
        })(u),
        z = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.profile_background || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { profile_background: { n: 1, c: h } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetProfileBackground_Response";
            }),
            n
          );
        })(u),
        g = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.communityitemid || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      communityitemid: {
                        n: 1,
                        br: a.d.readUint64String,
                        bw: a.h.writeUint64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_SetProfileBackground_Request";
            }),
            n
          );
        })(u),
        j = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return u.initialize(r, e, 0, -1, void 0, null), r;
          }
          return (
            Object(i.d)(n, t),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return e ? { $jspbMessageInstance: r } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {}),
            (n.prototype.getClassName = function () {
              return "CPlayer_SetProfileBackground_Response";
            }),
            n
          );
        })(u),
        O = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.profile_background || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { profile_background: { n: 1, c: h } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetMiniProfileBackground_Response";
            }),
            n
          );
        })(u),
        R = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.communityitemid || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      communityitemid: {
                        n: 1,
                        br: a.d.readUint64String,
                        bw: a.h.writeUint64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_SetMiniProfileBackground_Request";
            }),
            n
          );
        })(u),
        F = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return u.initialize(r, e, 0, -1, void 0, null), r;
          }
          return (
            Object(i.d)(n, t),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return e ? { $jspbMessageInstance: r } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {}),
            (n.prototype.getClassName = function () {
              return "CPlayer_SetMiniProfileBackground_Response";
            }),
            n
          );
        })(u),
        P = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.avatar_frame || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { avatar_frame: { n: 1, c: h } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetAvatarFrame_Response";
            }),
            n
          );
        })(u),
        W = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.communityitemid || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      communityitemid: {
                        n: 1,
                        br: a.d.readUint64String,
                        bw: a.h.writeUint64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_SetAvatarFrame_Request";
            }),
            n
          );
        })(u),
        C = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return u.initialize(r, e, 0, -1, void 0, null), r;
          }
          return (
            Object(i.d)(n, t),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return e ? { $jspbMessageInstance: r } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {}),
            (n.prototype.getClassName = function () {
              return "CPlayer_SetAvatarFrame_Response";
            }),
            n
          );
        })(u),
        S = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.avatar || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = { proto: n, fields: { avatar: { n: 1, c: h } } }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetAnimatedAvatar_Response";
            }),
            n
          );
        })(u),
        T = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.communityitemid || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      communityitemid: {
                        n: 1,
                        br: a.d.readUint64String,
                        bw: a.h.writeUint64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_SetAnimatedAvatar_Request";
            }),
            n
          );
        })(u),
        U = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return u.initialize(r, e, 0, -1, void 0, null), r;
          }
          return (
            Object(i.d)(n, t),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return e ? { $jspbMessageInstance: r } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {}),
            (n.prototype.getClassName = function () {
              return "CPlayer_SetAnimatedAvatar_Response";
            }),
            n
          );
        })(u),
        N = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.profile_backgrounds || a.a(n.M()),
              u.initialize(r, e, 0, -1, [1, 2, 3, 4, 5], null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      profile_backgrounds: { n: 1, c: h, r: !0, q: !0 },
                      mini_profile_backgrounds: { n: 2, c: h, r: !0, q: !0 },
                      avatar_frames: { n: 3, c: h, r: !0, q: !0 },
                      animated_avatars: { n: 4, c: h, r: !0, q: !0 },
                      profile_modifiers: { n: 5, c: h, r: !0, q: !0 },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetProfileItemsOwned_Response";
            }),
            n
          );
        })(u),
        G = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.steamid || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      steamid: {
                        n: 1,
                        br: a.d.readFixed64String,
                        bw: a.h.writeFixed64String,
                      },
                      language: {
                        n: 2,
                        br: a.d.readString,
                        bw: a.h.writeString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetProfileItemsEquipped_Request";
            }),
            n
          );
        })(u),
        I = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.profile_background || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      profile_background: { n: 1, c: h },
                      mini_profile_background: { n: 2, c: h },
                      avatar_frame: { n: 3, c: h },
                      animated_avatar: { n: 4, c: h },
                      profile_modifier: { n: 5, c: h },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetProfileItemsEquipped_Response";
            }),
            n
          );
        })(u),
        q = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return u.initialize(r, e, 0, -1, void 0, null), r;
          }
          return (
            Object(i.d)(n, t),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return e ? { $jspbMessageInstance: r } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {}),
            (n.prototype.getClassName = function () {
              return "CPlayer_SetEquippedProfileItemFlags_Response";
            }),
            n
          );
        })(u),
        A = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.emoticons || a.a(n.M()),
              u.initialize(r, e, 0, -1, [1], null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { emoticons: { n: 1, c: k, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetEmoticonList_Response";
            }),
            n
          );
        })(u),
        k = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.name || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      name: { n: 1, br: a.d.readString, bw: a.h.writeString },
                      count: { n: 2, br: a.d.readInt32, bw: a.h.writeInt32 },
                      time_last_used: {
                        n: 3,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      use_count: {
                        n: 4,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      time_received: {
                        n: 5,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      appid: { n: 6, br: a.d.readUint32, bw: a.h.writeUint32 },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetEmoticonList_Response_Emoticon";
            }),
            n
          );
        })(u),
        x = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return u.initialize(r, e, 0, -1, void 0, null), r;
          }
          return (
            Object(i.d)(n, t),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return e ? { $jspbMessageInstance: r } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {}),
            (n.prototype.getClassName = function () {
              return "CPlayer_PostStatusToFriends_Response";
            }),
            n
          );
        })(u),
        E = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.accountid || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      accountid: {
                        n: 1,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      postid: {
                        n: 2,
                        br: a.d.readUint64String,
                        bw: a.h.writeUint64String,
                      },
                      status_text: {
                        n: 3,
                        br: a.d.readString,
                        bw: a.h.writeString,
                      },
                      deleted: { n: 4, br: a.d.readBool, bw: a.h.writeBool },
                      appid: { n: 5, br: a.d.readUint32, bw: a.h.writeUint32 },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetPostedStatus_Response";
            }),
            n
          );
        })(u),
        L = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return u.initialize(r, e, 0, -1, void 0, null), r;
          }
          return (
            Object(i.d)(n, t),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return e ? { $jspbMessageInstance: r } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {}),
            (n.prototype.getClassName = function () {
              return "CPlayer_DeletePostedStatus_Response";
            }),
            n
          );
        })(u),
        $ = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.achievement_progress || a.a(n.M()),
              u.initialize(r, e, 0, -1, [1], null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      achievement_progress: { n: 1, c: K, r: !0, q: !0 },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetAchievementsProgress_Response";
            }),
            n
          );
        })(u),
        K = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.appid || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      appid: { n: 1, br: a.d.readUint32, bw: a.h.writeUint32 },
                      unlocked: {
                        n: 2,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      total: { n: 3, br: a.d.readUint32, bw: a.h.writeUint32 },
                      percentage: {
                        n: 4,
                        br: a.d.readFloat,
                        bw: a.h.writeFloat,
                      },
                      all_unlocked: {
                        n: 5,
                        br: a.d.readBool,
                        bw: a.h.writeBool,
                      },
                      cache_time: {
                        n: 6,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetAchievementsProgress_Response_AchievementProgress";
            }),
            n
          );
        })(u),
        H = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.has_favorite_badge || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      has_favorite_badge: {
                        n: 1,
                        br: a.d.readBool,
                        bw: a.h.writeBool,
                      },
                      badgeid: {
                        n: 2,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      communityitemid: {
                        n: 3,
                        br: a.d.readUint64String,
                        bw: a.h.writeUint64String,
                      },
                      item_type: {
                        n: 4,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      border_color: {
                        n: 5,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      appid: { n: 6, br: a.d.readUint32, bw: a.h.writeUint32 },
                      level: { n: 7, br: a.d.readUint32, bw: a.h.writeUint32 },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetFavoriteBadge_Response";
            }),
            n
          );
        })(u),
        D = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return u.initialize(r, e, 0, -1, void 0, null), r;
          }
          return (
            Object(i.d)(n, t),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return e ? { $jspbMessageInstance: r } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {}),
            (n.prototype.getClassName = function () {
              return "CPlayer_SetFavoriteBadge_Response";
            }),
            n
          );
        })(u),
        J = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.slot || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      slot: { n: 1, br: a.d.readUint32, bw: a.h.writeUint32 },
                      appid: { n: 2, br: a.d.readUint32, bw: a.h.writeUint32 },
                      publishedfileid: {
                        n: 3,
                        br: a.d.readUint64String,
                        bw: a.h.writeUint64String,
                      },
                      item_assetid: {
                        n: 4,
                        br: a.d.readUint64String,
                        bw: a.h.writeUint64String,
                      },
                      item_contextid: {
                        n: 5,
                        br: a.d.readUint64String,
                        bw: a.h.writeUint64String,
                      },
                      notes: { n: 6, br: a.d.readString, bw: a.h.writeString },
                      title: { n: 7, br: a.d.readString, bw: a.h.writeString },
                      accountid: {
                        n: 8,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      badgeid: {
                        n: 9,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      border_color: {
                        n: 10,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      item_classid: {
                        n: 11,
                        br: a.d.readUint64String,
                        bw: a.h.writeUint64String,
                      },
                      item_instanceid: {
                        n: 12,
                        br: a.d.readUint64String,
                        bw: a.h.writeUint64String,
                      },
                      ban_check_result: {
                        n: 13,
                        br: a.d.readEnum,
                        bw: a.h.writeEnum,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "ProfileCustomizationSlot";
            }),
            n
          );
        })(u),
        Q = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.customization_type || a.a(n.M()),
              u.initialize(r, e, 0, -1, [3], null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      customization_type: {
                        n: 1,
                        br: a.d.readEnum,
                        bw: a.h.writeEnum,
                      },
                      large: { n: 2, br: a.d.readBool, bw: a.h.writeBool },
                      slots: { n: 3, c: J, r: !0, q: !0 },
                      active: { n: 4, br: a.d.readBool, bw: a.h.writeBool },
                      customization_style: {
                        n: 5,
                        br: a.d.readEnum,
                        bw: a.h.writeEnum,
                      },
                      purchaseid: {
                        n: 6,
                        br: a.d.readUint64String,
                        bw: a.h.writeUint64String,
                      },
                      level: { n: 7, br: a.d.readUint32, bw: a.h.writeUint32 },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "ProfileCustomization";
            }),
            n
          );
        })(u),
        V = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.theme_id || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      theme_id: {
                        n: 1,
                        br: a.d.readString,
                        bw: a.h.writeString,
                      },
                      title: { n: 2, br: a.d.readString, bw: a.h.writeString },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "ProfileTheme";
            }),
            n
          );
        })(u),
        X = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.customizations || a.a(n.M()),
              u.initialize(r, e, 0, -1, [1, 4], null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      customizations: { n: 1, c: Q, r: !0, q: !0 },
                      slots_available: {
                        n: 2,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      profile_theme: { n: 3, c: V },
                      purchased_customizations: { n: 4, c: Y, r: !0, q: !0 },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetProfileCustomization_Response";
            }),
            n
          );
        })(u),
        Y = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.purchaseid || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      purchaseid: {
                        n: 1,
                        br: a.d.readUint64String,
                        bw: a.h.writeUint64String,
                      },
                      customization_type: {
                        n: 2,
                        br: a.d.readEnum,
                        bw: a.h.writeEnum,
                      },
                      level: { n: 3, br: a.d.readUint32, bw: a.h.writeUint32 },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetProfileCustomization_Response_PurchasedCustomization";
            }),
            n
          );
        })(u),
        Z = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.purchased_customizations || a.a(n.M()),
              u.initialize(r, e, 0, -1, [1], null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      purchased_customizations: { n: 1, c: ee, r: !0, q: !0 },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetPurchasedProfileCustomizations_Response";
            }),
            n
          );
        })(u),
        ee = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.purchaseid || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      purchaseid: {
                        n: 1,
                        br: a.d.readUint64String,
                        bw: a.h.writeUint64String,
                      },
                      customization_type: {
                        n: 2,
                        br: a.d.readEnum,
                        bw: a.h.writeEnum,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetPurchasedProfileCustomizations_Response_PurchasedCustomization";
            }),
            n
          );
        })(u),
        re = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.steamid || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      steamid: {
                        n: 1,
                        br: a.d.readFixed64String,
                        bw: a.h.writeFixed64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Request";
            }),
            n
          );
        })(u),
        te = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.purchased_customizations || a.a(n.M()),
              u.initialize(r, e, 0, -1, [1, 2], null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      purchased_customizations: { n: 1, c: ne, r: !0, q: !0 },
                      upgraded_customizations: { n: 2, c: ie, r: !0, q: !0 },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response";
            }),
            n
          );
        })(u),
        ne = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.customization_type || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      customization_type: {
                        n: 1,
                        br: a.d.readEnum,
                        bw: a.h.writeEnum,
                      },
                      count: { n: 2, br: a.d.readUint32, bw: a.h.writeUint32 },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_PurchasedCustomization";
            }),
            n
          );
        })(u),
        ie = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.customization_type || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      customization_type: {
                        n: 1,
                        br: a.d.readEnum,
                        bw: a.h.writeEnum,
                      },
                      level: { n: 2, br: a.d.readUint32, bw: a.h.writeUint32 },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetPurchasedAndUpgradedProfileCustomizations_Response_UpgradedCustomization";
            }),
            n
          );
        })(u),
        oe = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.profile_themes || a.a(n.M()),
              u.initialize(r, e, 0, -1, [1], null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { profile_themes: { n: 1, c: V, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetProfileThemesAvailable_Response";
            }),
            n
          );
        })(u),
        ae = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return u.initialize(r, e, 0, -1, void 0, null), r;
          }
          return (
            Object(i.d)(n, t),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return e ? { $jspbMessageInstance: r } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {}),
            (n.prototype.getClassName = function () {
              return "CPlayer_SetProfileTheme_Response";
            }),
            n
          );
        })(u),
        ue = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.your_info || a.a(n.M()),
              u.initialize(r, e, 0, -1, [2, 3, 4, 5, 6], null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      your_info: { n: 1, c: ce },
                      in_game: { n: 2, c: se, r: !0, q: !0 },
                      played_recently: { n: 3, c: se, r: !0, q: !0 },
                      played_ever: { n: 4, c: se, r: !0, q: !0 },
                      owns: { n: 5, c: se, r: !0, q: !0 },
                      in_wishlist: { n: 6, c: se, r: !0, q: !0 },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetFriendsGameplayInfo_Response";
            }),
            n
          );
        })(u),
        se = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.steamid || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      steamid: {
                        n: 1,
                        br: a.d.readFixed64String,
                        bw: a.h.writeFixed64String,
                      },
                      minutes_played: {
                        n: 2,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      minutes_played_forever: {
                        n: 3,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetFriendsGameplayInfo_Response_FriendsGameplayInfo";
            }),
            n
          );
        })(u),
        ce = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.steamid || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      steamid: {
                        n: 1,
                        br: a.d.readFixed64String,
                        bw: a.h.writeFixed64String,
                      },
                      minutes_played: {
                        n: 2,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      minutes_played_forever: {
                        n: 3,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      in_wishlist: {
                        n: 4,
                        br: a.d.readBool,
                        bw: a.h.writeBool,
                      },
                      owned: { n: 5, br: a.d.readBool, bw: a.h.writeBool },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetFriendsGameplayInfo_Response_OwnGameplayInfo";
            }),
            n
          );
        })(u),
        le = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.trending || a.a(n.M()),
              u.initialize(r, e, 0, -1, [1, 2, 3, 4, 5, 6, 7, 8], null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      trending: { n: 1, c: de, r: !0, q: !0 },
                      recent_purchases: { n: 2, c: de, r: !0, q: !0 },
                      unowned: { n: 3, c: de, r: !0, q: !0 },
                      popular: { n: 4, c: de, r: !0, q: !0 },
                      dont_forget: { n: 5, c: de, r: !0, q: !0 },
                      being_discussed: { n: 6, c: de, r: !0, q: !0 },
                      new_to_group: { n: 7, c: de, r: !0, q: !0 },
                      returned_to_group: { n: 8, c: de, r: !0, q: !0 },
                      active_friend_count: {
                        n: 9,
                        d: 0,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetFriendsAppsActivity_Response";
            }),
            n
          );
        })(u),
        fe = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.steamid || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      steamid: {
                        n: 1,
                        br: a.d.readFixed64String,
                        bw: a.h.writeFixed64String,
                      },
                      minutes_played_this_week: {
                        n: 2,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      minutes_played_two_weeks: {
                        n: 3,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      minutes_played_forever: {
                        n: 4,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      event_count: {
                        n: 5,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetFriendsAppsActivity_Response_FriendPlayTime";
            }),
            n
          );
        })(u),
        de = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.appid || a.a(n.M()),
              u.initialize(r, e, 0, -1, [2], null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      appid: { n: 1, br: a.d.readUint32, bw: a.h.writeUint32 },
                      friends: { n: 2, c: fe, r: !0, q: !0 },
                      display_order: {
                        n: 3,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetFriendsAppsActivity_Response_AppFriendsInfo";
            }),
            n
          );
        })(u),
        me = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return u.initialize(r, e, 0, -1, void 0, null), r;
          }
          return (
            Object(i.d)(n, t),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return e ? { $jspbMessageInstance: r } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {}),
            (n.prototype.getClassName = function () {
              return "CPlayer_AcceptSSA_Response";
            }),
            n
          );
        })(u),
        ye = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.nicknames || a.a(n.M()),
              u.initialize(r, e, 0, -1, [1], null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { nicknames: { n: 1, c: be, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetNicknameList_Response";
            }),
            n
          );
        })(u),
        be = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.accountid || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      accountid: {
                        n: 1,
                        br: a.d.readFixed32,
                        bw: a.h.writeFixed32,
                      },
                      nickname: {
                        n: 2,
                        br: a.d.readString,
                        bw: a.h.writeString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetNicknameList_Response_PlayerNickname";
            }),
            n
          );
        })(u),
        pe = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.accountid || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      accountid: {
                        n: 1,
                        br: a.d.readFixed32,
                        bw: a.h.writeFixed32,
                      },
                      nickname: {
                        n: 2,
                        br: a.d.readString,
                        bw: a.h.writeString,
                      },
                      notifications_showingame: {
                        n: 3,
                        br: a.d.readEnum,
                        bw: a.h.writeEnum,
                      },
                      notifications_showonline: {
                        n: 4,
                        br: a.d.readEnum,
                        bw: a.h.writeEnum,
                      },
                      notifications_showmessages: {
                        n: 5,
                        br: a.d.readEnum,
                        bw: a.h.writeEnum,
                      },
                      sounds_showingame: {
                        n: 6,
                        br: a.d.readEnum,
                        bw: a.h.writeEnum,
                      },
                      sounds_showonline: {
                        n: 7,
                        br: a.d.readEnum,
                        bw: a.h.writeEnum,
                      },
                      sounds_showmessages: {
                        n: 8,
                        br: a.d.readEnum,
                        bw: a.h.writeEnum,
                      },
                      notifications_sendmobile: {
                        n: 9,
                        br: a.d.readEnum,
                        bw: a.h.writeEnum,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "PerFriendPreferences";
            }),
            n
          );
        })(u),
        Be = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.preferences || a.a(n.M()),
              u.initialize(r, e, 0, -1, [1], null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { preferences: { n: 1, c: pe, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetPerFriendPreferences_Response";
            }),
            n
          );
        })(u),
        _e = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return u.initialize(r, e, 0, -1, void 0, null), r;
          }
          return (
            Object(i.d)(n, t),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return e ? { $jspbMessageInstance: r } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {}),
            (n.prototype.getClassName = function () {
              return "CPlayer_SetPerFriendPreferences_Response";
            }),
            n
          );
        })(u),
        we = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.invite_sent || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      invite_sent: {
                        n: 1,
                        br: a.d.readBool,
                        bw: a.h.writeBool,
                      },
                      friend_relationship: {
                        n: 2,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      result: { n: 3, br: a.d.readInt32, bw: a.h.writeInt32 },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_AddFriend_Response";
            }),
            n
          );
        })(u),
        Me = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.friend_relationship || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      friend_relationship: {
                        n: 1,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_RemoveFriend_Response";
            }),
            n
          );
        })(u),
        ve = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.friend_relationship || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      friend_relationship: {
                        n: 1,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_IgnoreFriend_Response";
            }),
            n
          );
        })(u),
        he = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.hide_adult_content_violence || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      hide_adult_content_violence: {
                        n: 1,
                        d: !0,
                        br: a.d.readBool,
                        bw: a.h.writeBool,
                      },
                      hide_adult_content_sex: {
                        n: 2,
                        d: !0,
                        br: a.d.readBool,
                        bw: a.h.writeBool,
                      },
                      parenthesize_nicknames: {
                        n: 4,
                        d: !1,
                        br: a.d.readBool,
                        bw: a.h.writeBool,
                      },
                      text_filter_setting: {
                        n: 5,
                        br: a.d.readEnum,
                        bw: a.h.writeEnum,
                      },
                      text_filter_ignore_friends: {
                        n: 6,
                        d: !0,
                        br: a.d.readBool,
                        bw: a.h.writeBool,
                      },
                      text_filter_words_revision: {
                        n: 7,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      timestamp_updated: {
                        n: 3,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_CommunityPreferences";
            }),
            n
          );
        })(u),
        ze = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return u.initialize(r, e, 0, -1, void 0, null), r;
          }
          return (
            Object(i.d)(n, t),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return e ? { $jspbMessageInstance: r } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {}),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetCommunityPreferences_Request";
            }),
            n
          );
        })(u),
        ge = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.preferences || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { preferences: { n: 1, c: he } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetCommunityPreferences_Response";
            }),
            n
          );
        })(u),
        je = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return u.initialize(r, e, 0, -1, void 0, null), r;
          }
          return (
            Object(i.d)(n, t),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return e ? { $jspbMessageInstance: r } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {}),
            (n.prototype.getClassName = function () {
              return "CPlayer_SetCommunityPreferences_Response";
            }),
            n
          );
        })(u),
        Oe = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.text_filter_custom_banned_words || a.a(n.M()),
              u.initialize(r, e, 0, -1, [1, 2], null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      text_filter_custom_banned_words: {
                        n: 1,
                        r: !0,
                        q: !0,
                        br: a.d.readString,
                        bw: a.h.writeRepeatedString,
                      },
                      text_filter_custom_clean_words: {
                        n: 2,
                        r: !0,
                        q: !0,
                        br: a.d.readString,
                        bw: a.h.writeRepeatedString,
                      },
                      text_filter_words_revision: {
                        n: 3,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_TextFilterWords";
            }),
            n
          );
        })(u),
        Re = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return u.initialize(r, e, 0, -1, void 0, null), r;
          }
          return (
            Object(i.d)(n, t),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return e ? { $jspbMessageInstance: r } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {}),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetTextFilterWords_Request";
            }),
            n
          );
        })(u),
        Fe = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.words || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = { proto: n, fields: { words: { n: 1, c: Oe } } }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetTextFilterWords_Response";
            }),
            n
          );
        })(u),
        Pe = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.state || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      state: { n: 1, br: a.d.readInt32, bw: a.h.writeInt32 },
                      announcement_headline: {
                        n: 2,
                        br: a.d.readString,
                        bw: a.h.writeString,
                      },
                      announcement_url: {
                        n: 3,
                        br: a.d.readString,
                        bw: a.h.writeString,
                      },
                      time_posted: {
                        n: 4,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      announcement_gid: {
                        n: 5,
                        br: a.d.readUint64String,
                        bw: a.h.writeUint64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetNewSteamAnnouncementState_Response";
            }),
            n
          );
        })(u),
        We = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return u.initialize(r, e, 0, -1, void 0, null), r;
          }
          return (
            Object(i.d)(n, t),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return e ? { $jspbMessageInstance: r } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {}),
            (n.prototype.getClassName = function () {
              return "CPlayer_UpdateSteamAnnouncementLastRead_Response";
            }),
            n
          );
        })(u),
        Ce = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.privacy_state || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      privacy_state: {
                        n: 1,
                        br: a.d.readInt32,
                        bw: a.h.writeInt32,
                      },
                      privacy_state_inventory: {
                        n: 2,
                        br: a.d.readInt32,
                        bw: a.h.writeInt32,
                      },
                      privacy_state_gifts: {
                        n: 3,
                        br: a.d.readInt32,
                        bw: a.h.writeInt32,
                      },
                      privacy_state_ownedgames: {
                        n: 4,
                        br: a.d.readInt32,
                        bw: a.h.writeInt32,
                      },
                      privacy_state_playtime: {
                        n: 5,
                        br: a.d.readInt32,
                        bw: a.h.writeInt32,
                      },
                      privacy_state_friendslist: {
                        n: 6,
                        br: a.d.readInt32,
                        bw: a.h.writeInt32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPrivacySettings";
            }),
            n
          );
        })(u),
        Se = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.privacy_settings || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { privacy_settings: { n: 1, c: Ce } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetPrivacySettings_Response";
            }),
            n
          );
        })(u),
        Te = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.is_enabled || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      is_enabled: { n: 1, br: a.d.readBool, bw: a.h.writeBool },
                      seconds: { n: 2, br: a.d.readInt32, bw: a.h.writeInt32 },
                      seconds_today: {
                        n: 3,
                        br: a.d.readInt32,
                        bw: a.h.writeInt32,
                      },
                      is_steamchina_account: {
                        n: 4,
                        br: a.d.readBool,
                        bw: a.h.writeBool,
                      },
                      is_age_verified: {
                        n: 5,
                        br: a.d.readBool,
                        bw: a.h.writeBool,
                      },
                      seconds_allowed_today: {
                        n: 6,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_GetDurationControl_Response";
            }),
            n
          );
        })(u),
        Ue = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.games || a.a(n.M()),
              u.initialize(r, e, 0, -1, [1], null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { games: { n: 1, c: m, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_LastPlayedTimes_Notification";
            }),
            n
          );
        })(u),
        Ne = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.accountid || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      accountid: {
                        n: 1,
                        br: a.d.readFixed32,
                        bw: a.h.writeFixed32,
                      },
                      nickname: {
                        n: 2,
                        br: a.d.readString,
                        bw: a.h.writeString,
                      },
                      is_echo_to_self: {
                        n: 3,
                        br: a.d.readBool,
                        bw: a.h.writeBool,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_FriendNicknameChanged_Notification";
            }),
            n
          );
        })(u),
        Ge = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.accountid || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      accountid: {
                        n: 1,
                        br: a.d.readFixed32,
                        bw: a.h.writeFixed32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_FriendEquippedProfileItemsChanged_Notification";
            }),
            n
          );
        })(u),
        Ie = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.state || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      state: { n: 1, br: a.d.readInt32, bw: a.h.writeInt32 },
                      announcement_headline: {
                        n: 2,
                        br: a.d.readString,
                        bw: a.h.writeString,
                      },
                      announcement_url: {
                        n: 3,
                        br: a.d.readString,
                        bw: a.h.writeString,
                      },
                      time_posted: {
                        n: 4,
                        br: a.d.readUint32,
                        bw: a.h.writeUint32,
                      },
                      announcement_gid: {
                        n: 5,
                        br: a.d.readUint64String,
                        bw: a.h.writeUint64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_NewSteamAnnouncementState_Notification";
            }),
            n
          );
        })(u),
        qe = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.preferences || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { preferences: { n: 1, c: he } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_CommunityPreferencesChanged_Notification";
            }),
            n
          );
        })(u),
        Ae = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.words || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = { proto: n, fields: { words: { n: 1, c: Oe } } }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_TextFilterWordsChanged_Notification";
            }),
            n
          );
        })(u),
        ke = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.accountid || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      accountid: {
                        n: 1,
                        br: a.d.readFixed32,
                        bw: a.h.writeFixed32,
                      },
                      preferences: { n: 2, c: pe },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_PerFriendPreferencesChanged_Notification";
            }),
            n
          );
        })(u),
        xe = (function (t) {
          function n(e) {
            void 0 === e && (e = null);
            var r = t.call(this) || this;
            return (
              n.prototype.privacy_settings || a.a(n.M()),
              u.initialize(r, e, 0, -1, void 0, null),
              r
            );
          }
          return (
            Object(i.d)(n, t),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { privacy_settings: { n: 1, c: Ce } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = a.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, r) {
              return a.g(n.M(), e, r);
            }),
            (n.fromObject = function (e) {
              return a.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var r = new o.BinaryReader(e),
                t = new n();
              return n.deserializeBinaryFromReader(t, r);
            }),
            (n.deserializeBinaryFromReader = function (e, r) {
              return a.b(n.MBF(), e, r);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new o.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, r) {
              a.f(n.M(), e, r);
            }),
            (n.prototype.getClassName = function () {
              return "CPlayer_PrivacySettingsChanged_Notification";
            }),
            n
          );
        })(u);
      ((s = n = n || {}).GetMutualFriendsForIncomingInvites = function (e, r) {
        return e.SendMsg("Player.GetMutualFriendsForIncomingInvites#1", r, b, {
          bConstMethod: !0,
          ePrivilege: 1,
        });
      }),
        (s.GetOwnedGames = function (e, r) {
          return e.SendMsg("Player.GetOwnedGames#1", r, B, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (s.GetPlayNext = function (e, r) {
          return e.SendMsg("Player.GetPlayNext#1", r, w, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
        (s.GetFriendsGameplayInfo = function (e, r) {
          return e.SendMsg("Player.GetFriendsGameplayInfo#1", r, ue, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
        (s.GetFriendsAppsActivity = function (e, r) {
          return e.SendMsg("Player.GetFriendsAppsActivity#1", r, le, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
        (s.GetGameBadgeLevels = function (e, r) {
          return e.SendMsg("Player.GetGameBadgeLevels#1", r, M, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
        (s.GetProfileBackground = function (e, r) {
          return e.SendMsg("Player.GetProfileBackground#1", r, z, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
        (s.SetProfileBackground = function (e, r) {
          return e.SendMsg("Player.SetProfileBackground#1", r, j, {
            ePrivilege: 1,
          });
        }),
        (s.GetMiniProfileBackground = function (e, r) {
          return e.SendMsg("Player.GetMiniProfileBackground#1", r, O, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
        (s.SetMiniProfileBackground = function (e, r) {
          return e.SendMsg("Player.SetMiniProfileBackground#1", r, F, {
            ePrivilege: 1,
          });
        }),
        (s.GetAvatarFrame = function (e, r) {
          return e.SendMsg("Player.GetAvatarFrame#1", r, P, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
        (s.SetAvatarFrame = function (e, r) {
          return e.SendMsg("Player.SetAvatarFrame#1", r, C, { ePrivilege: 1 });
        }),
        (s.GetAnimatedAvatar = function (e, r) {
          return e.SendMsg("Player.GetAnimatedAvatar#1", r, S, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
        (s.SetAnimatedAvatar = function (e, r) {
          return e.SendMsg("Player.SetAnimatedAvatar#1", r, U, {
            ePrivilege: 1,
          });
        }),
        (s.GetProfileItemsOwned = function (e, r) {
          return e.SendMsg("Player.GetProfileItemsOwned#1", r, N, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
        (s.GetProfileItemsEquipped = function (e, r) {
          return e.SendMsg("Player.GetProfileItemsEquipped#1", r, I, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
        (s.SetEquippedProfileItemFlags = function (e, r) {
          return e.SendMsg("Player.SetEquippedProfileItemFlags#1", r, q, {
            ePrivilege: 1,
          });
        }),
        (s.GetEmoticonList = function (e, r) {
          return e.SendMsg("Player.GetEmoticonList#1", r, A, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
        (s.GetAchievementsProgress = function (e, r) {
          return e.SendMsg("Player.GetAchievementsProgress#1", r, $, {
            ePrivilege: 1,
          });
        }),
        (s.GetFavoriteBadge = function (e, r) {
          return e.SendMsg("Player.GetFavoriteBadge#1", r, H, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
        (s.SetFavoriteBadge = function (e, r) {
          return e.SendMsg("Player.SetFavoriteBadge#1", r, D, {
            ePrivilege: 1,
          });
        }),
        (s.GetProfileCustomization = function (e, r) {
          return e.SendMsg("Player.GetProfileCustomization#1", r, X, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
        (s.GetPurchasedProfileCustomizations = function (e, r) {
          return e.SendMsg("Player.GetPurchasedProfileCustomizations#1", r, Z, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
        (s.GetPurchasedAndUpgradedProfileCustomizations = function (e, r) {
          return e.SendMsg(
            "Player.GetPurchasedAndUpgradedProfileCustomizations#1",
            r,
            te,
            { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 }
          );
        }),
        (s.GetProfileThemesAvailable = function (e, r) {
          return e.SendMsg("Player.GetProfileThemesAvailable#1", r, oe, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
        (s.SetProfileTheme = function (e, r) {
          return e.SendMsg("Player.SetProfileTheme#1", r, ae, {
            ePrivilege: 1,
          });
        }),
        (s.PostStatusToFriends = function (e, r) {
          return e.SendMsg("Player.PostStatusToFriends#1", r, x, {
            ePrivilege: 3,
          });
        }),
        (s.GetPostedStatus = function (e, r) {
          return e.SendMsg("Player.GetPostedStatus#1", r, E, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
        (s.DeletePostedStatus = function (e, r) {
          return e.SendMsg("Player.DeletePostedStatus#1", r, L, {
            ePrivilege: 1,
          });
        }),
        (s.ClientGetLastPlayedTimes = function (e, r) {
          return e.SendMsg("Player.ClientGetLastPlayedTimes#1", r, d, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
        (s.AcceptSSA = function (e, r) {
          return e.SendMsg("Player.AcceptSSA#1", r, me, { ePrivilege: 1 });
        }),
        (s.GetNicknameList = function (e, r) {
          return e.SendMsg("Player.GetNicknameList#1", r, ye, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
        (s.GetPerFriendPreferences = function (e, r) {
          return e.SendMsg("Player.GetPerFriendPreferences#1", r, Be, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
        (s.SetPerFriendPreferences = function (e, r) {
          return e.SendMsg("Player.SetPerFriendPreferences#1", r, _e, {
            ePrivilege: 1,
          });
        }),
        (s.AddFriend = function (e, r) {
          return e.SendMsg("Player.AddFriend#1", r, we, { ePrivilege: 1 });
        }),
        (s.RemoveFriend = function (e, r) {
          return e.SendMsg("Player.RemoveFriend#1", r, Me, { ePrivilege: 1 });
        }),
        (s.IgnoreFriend = function (e, r) {
          return e.SendMsg("Player.IgnoreFriend#1", r, ve, { ePrivilege: 1 });
        }),
        (s.GetCommunityPreferences = function (e, r) {
          return e.SendMsg("Player.GetCommunityPreferences#1", r, ge, {
            ePrivilege: 1,
          });
        }),
        (s.SetCommunityPreferences = function (e, r) {
          return e.SendMsg("Player.SetCommunityPreferences#1", r, je, {
            ePrivilege: 1,
          });
        }),
        (s.GetTextFilterWords = function (e, r) {
          return e.SendMsg("Player.GetTextFilterWords#1", r, Fe, {
            ePrivilege: 1,
          });
        }),
        (s.GetNewSteamAnnouncementState = function (e, r) {
          return e.SendMsg("Player.GetNewSteamAnnouncementState#1", r, Pe, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
        (s.UpdateSteamAnnouncementLastRead = function (e, r) {
          return e.SendMsg("Player.UpdateSteamAnnouncementLastRead#1", r, We, {
            ePrivilege: 1,
          });
        }),
        (s.GetPrivacySettings = function (e, r) {
          return e.SendMsg("Player.GetPrivacySettings#1", r, Se, {
            ePrivilege: 1,
          });
        }),
        (s.GetDurationControl = function (e, r) {
          return e.SendMsg("Player.GetDurationControl#1", r, Te, {
            ePrivilege: 1,
          });
        }),
        ((l = c = c || {}).NotifyLastPlayedTimesHandler = {
          name: "PlayerClient.NotifyLastPlayedTimes#1",
          request: Ue,
        }),
        (l.NotifyFriendNicknameChangedHandler = {
          name: "PlayerClient.NotifyFriendNicknameChanged#1",
          request: Ne,
        }),
        (l.NotifyFriendEquippedProfileItemsChangedHandler = {
          name: "PlayerClient.NotifyFriendEquippedProfileItemsChanged#1",
          request: Ge,
        }),
        (l.NotifyNewSteamAnnouncementStateHandler = {
          name: "PlayerClient.NotifyNewSteamAnnouncementState#1",
          request: Ie,
        }),
        (l.NotifyCommunityPreferencesChangedHandler = {
          name: "PlayerClient.NotifyCommunityPreferencesChanged#1",
          request: qe,
        }),
        (l.NotifyTextFilterWordsChangedHandler = {
          name: "PlayerClient.NotifyTextFilterWordsChanged#1",
          request: Ae,
        }),
        (l.NotifyPerFriendPreferencesChangedHandler = {
          name: "PlayerClient.NotifyPerFriendPreferencesChanged#1",
          request: ke,
        }),
        (l.NotifyPrivacyPrivacySettingsChangedHandler = {
          name: "PlayerClient.NotifyPrivacyPrivacySettingsChanged#1",
          request: xe,
        });
    },
  },
]);
