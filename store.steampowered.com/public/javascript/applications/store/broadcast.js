/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    "3sYe": function (e, t, r) {
      e.exports = {
        BroadcastChat: "broadcastchat_BroadcastChat_3URK7",
        ChatEntry: "broadcastchat_ChatEntry_3soy-",
        ChatPanel: "broadcastchat_ChatPanel_2ZCAI",
        ChatMessages: "broadcastchat_ChatMessages_3M5L0",
        EmoticonContainer: "broadcastchat_EmoticonContainer_1wa4o",
        ChatSend: "broadcastchat_ChatSend_3JUnD",
        ChatBox: "broadcastchat_ChatBox_2qfgS",
        ChatControls: "broadcastchat_ChatControls_1TekO",
        MessageChat: "broadcastchat_MessageChat_22PB4",
        MessageName: "broadcastchat_MessageName_BJe6C",
        MessageContents: "broadcastchat_MessageContents_PNYZa",
        EmoticonsOnly: "broadcastchat_EmoticonsOnly_gFjH8",
        MessageNotification: "broadcastchat_MessageNotification_3Xb4_",
        MessageError: "broadcastchat_MessageError_8MzyW",
        minHeightZero: "broadcastchat_minHeightZero_r7HLM",
        ChatLoginButton: "broadcastchat_ChatLoginButton_2TAQo",
        RateLimitProgressBarContainer:
          "broadcastchat_RateLimitProgressBarContainer_JPqUG",
        RateLimitProgressBar: "broadcastchat_RateLimitProgressBar_1EcVK",
        TimedProgressBarContainer:
          "broadcastchat_TimedProgressBarContainer_39xGj",
        wrapper: "broadcastchat_wrapper_2vz6R",
        pie: "broadcastchat_pie_1k4dS",
        spinner: "broadcastchat_spinner_3nRh5",
        rota: "broadcastchat_rota_1xXh6",
        filler: "broadcastchat_filler_3Eegk",
        fill: "broadcastchat_fill_2tyuX",
        mask: "broadcastchat_mask_1V4Ke",
        SelectedUserNameCtn: "broadcastchat_SelectedUserNameCtn_3K4QX",
        SelectedUserName: "broadcastchat_SelectedUserName_c907V",
        FlairContainer: "broadcastchat_FlairContainer_166wp",
        RoleFlairContainer: "broadcastchat_RoleFlairContainer_1QRJ2",
        Description: "broadcastchat_Description_105HH",
        LogInPrompt: "broadcastchat_LogInPrompt_CsA8v",
        SignInButton: "broadcastchat_SignInButton_1dMwW",
      };
    },
    "5znp": function (e, t, r) {
      e.exports = {
        FriendsListInsetShadowCtn:
          "insetshadow_FriendsListInsetShadowCtn_1qeW3",
        FriendListInsetShadowTop: "insetshadow_FriendListInsetShadowTop_1osHa",
        FriendListInsetShadowBottom:
          "insetshadow_FriendListInsetShadowBottom_2OoTJ",
      };
    },
    NIbt: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "BroadcastEmbeddablePopoutHeader", function () {
          return Kt;
        });
      var n = r("mrSG"),
        i = r("vDqi"),
        a = r.n(i),
        o = r("TyAF"),
        s = r("q1tI"),
        c = r.n(s),
        u = r("2vnA"),
        l = r("TtDX"),
        d = r("kdZy"),
        m = r("A5MU"),
        p = (r("mgoM"), r("bxBv")),
        f = r("u2yL"),
        h = r("WBba"),
        _ = r("kLLr"),
        b = r("hRO2"),
        y = r("OS8t"),
        B = b.Message;
      var g,
        S = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || y.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: y.d.readFixed64String,
                        bw: y.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_CreateBroadcastChannel_Response";
            }),
            t
          );
        })(B),
        v = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || y.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: y.d.readFixed64String,
                        bw: y.h.writeFixed64String,
                      },
                      unique_name: {
                        n: 2,
                        br: y.d.readString,
                        bw: y.h.writeString,
                      },
                      steamid: {
                        n: 3,
                        br: y.d.readFixed64String,
                        bw: y.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelID_Response";
            }),
            t
          );
        })(B),
        w = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_SetBroadcastChannelProfile_Response";
            }),
            t
          );
        })(B),
        M = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.unique_name || y.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      unique_name: {
                        n: 1,
                        br: y.d.readString,
                        bw: y.h.writeString,
                      },
                      owner_steamid: {
                        n: 2,
                        br: y.d.readFixed64String,
                        bw: y.h.writeFixed64String,
                      },
                      name: { n: 3, br: y.d.readString, bw: y.h.writeString },
                      language: {
                        n: 4,
                        br: y.d.readString,
                        bw: y.h.writeString,
                      },
                      headline: {
                        n: 5,
                        br: y.d.readString,
                        bw: y.h.writeString,
                      },
                      summary: {
                        n: 6,
                        br: y.d.readString,
                        bw: y.h.writeString,
                      },
                      schedule: {
                        n: 7,
                        br: y.d.readString,
                        bw: y.h.writeString,
                      },
                      rules: { n: 8, br: y.d.readString, bw: y.h.writeString },
                      panels: { n: 9, br: y.d.readString, bw: y.h.writeString },
                      is_partnered: {
                        n: 10,
                        br: y.d.readBool,
                        bw: y.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelProfile_Response";
            }),
            t
          );
        })(B),
        C = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.replace_image_hash || y.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      replace_image_hash: {
                        n: 1,
                        br: y.d.readString,
                        bw: y.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_SetBroadcastChannelImage_Response";
            }),
            t
          );
        })(B),
        O = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.images || y.a(t.M()),
              B.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { images: { n: 1, c: j, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelImages_Response";
            }),
            t
          );
        })(B),
        j = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.image_type || y.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      image_type: { n: 1, br: y.d.readEnum, bw: y.h.writeEnum },
                      image_path: {
                        n: 2,
                        br: y.d.readString,
                        bw: y.h.writeString,
                      },
                      image_index: {
                        n: 3,
                        br: y.d.readUint32,
                        bw: y.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelImages_Response_Images";
            }),
            t
          );
        })(B),
        z = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.links || y.a(t.M()),
              B.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { links: { n: 1, c: R, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelLinks_Response";
            }),
            t
          );
        })(B),
        R = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.link_index || y.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      link_index: {
                        n: 1,
                        br: y.d.readUint32,
                        bw: y.h.writeUint32,
                      },
                      url: { n: 2, br: y.d.readString, bw: y.h.writeString },
                      link_description: {
                        n: 3,
                        br: y.d.readString,
                        bw: y.h.writeString,
                      },
                      left: { n: 4, br: y.d.readUint32, bw: y.h.writeUint32 },
                      top: { n: 5, br: y.d.readUint32, bw: y.h.writeUint32 },
                      width: { n: 6, br: y.d.readUint32, bw: y.h.writeUint32 },
                      height: { n: 7, br: y.d.readUint32, bw: y.h.writeUint32 },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelLinks_Response_Links";
            }),
            t
          );
        })(B),
        F = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_SetBroadcastChannelLinkRegions_Response";
            }),
            t
          );
        })(B),
        T = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.is_live || y.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      is_live: { n: 1, br: y.d.readBool, bw: y.h.writeBool },
                      is_disabled: {
                        n: 2,
                        br: y.d.readBool,
                        bw: y.h.writeBool,
                      },
                      appid: { n: 3, br: y.d.readUint32, bw: y.h.writeUint32 },
                      viewers: {
                        n: 4,
                        br: y.d.readUint64String,
                        bw: y.h.writeUint64String,
                      },
                      views: {
                        n: 5,
                        br: y.d.readUint64String,
                        bw: y.h.writeUint64String,
                      },
                      broadcaster_steamid: {
                        n: 6,
                        br: y.d.readFixed64String,
                        bw: y.h.writeFixed64String,
                      },
                      thumbnail_url: {
                        n: 7,
                        br: y.d.readString,
                        bw: y.h.writeString,
                      },
                      followers: {
                        n: 8,
                        br: y.d.readUint64String,
                        bw: y.h.writeUint64String,
                      },
                      subscribers: {
                        n: 9,
                        br: y.d.readUint64String,
                        bw: y.h.writeUint64String,
                      },
                      unique_name: {
                        n: 10,
                        br: y.d.readString,
                        bw: y.h.writeString,
                      },
                      broadcast_session_id: {
                        n: 11,
                        br: y.d.readUint64String,
                        bw: y.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelStatus_Response";
            }),
            t
          );
        })(B),
        W = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || y.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: y.d.readFixed64String,
                        bw: y.h.writeFixed64String,
                      },
                      unique_name: {
                        n: 2,
                        br: y.d.readString,
                        bw: y.h.writeString,
                      },
                      name: { n: 3, br: y.d.readString, bw: y.h.writeString },
                      appid: { n: 4, br: y.d.readUint32, bw: y.h.writeUint32 },
                      viewers: {
                        n: 5,
                        br: y.d.readUint64String,
                        bw: y.h.writeUint64String,
                      },
                      views: {
                        n: 6,
                        br: y.d.readUint64String,
                        bw: y.h.writeUint64String,
                      },
                      thumbnail_url: {
                        n: 7,
                        br: y.d.readString,
                        bw: y.h.writeString,
                      },
                      followers: {
                        n: 8,
                        br: y.d.readUint64String,
                        bw: y.h.writeUint64String,
                      },
                      headline: {
                        n: 9,
                        br: y.d.readString,
                        bw: y.h.writeString,
                      },
                      avatar_url: {
                        n: 10,
                        br: y.d.readString,
                        bw: y.h.writeString,
                      },
                      broadcaster_steamid: {
                        n: 11,
                        br: y.d.readFixed64String,
                        bw: y.h.writeFixed64String,
                      },
                      subscribers: {
                        n: 12,
                        br: y.d.readUint64String,
                        bw: y.h.writeUint64String,
                      },
                      background_url: {
                        n: 13,
                        br: y.d.readString,
                        bw: y.h.writeString,
                      },
                      is_featured: {
                        n: 14,
                        br: y.d.readBool,
                        bw: y.h.writeBool,
                      },
                      is_disabled: {
                        n: 15,
                        br: y.d.readBool,
                        bw: y.h.writeBool,
                      },
                      is_live: { n: 16, br: y.d.readBool, bw: y.h.writeBool },
                      language: {
                        n: 17,
                        br: y.d.readString,
                        bw: y.h.writeString,
                      },
                      reports: {
                        n: 18,
                        br: y.d.readUint32,
                        bw: y.h.writeUint32,
                      },
                      is_partnered: {
                        n: 19,
                        br: y.d.readBool,
                        bw: y.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "GetBroadcastChannelEntry";
            }),
            t
          );
        })(B),
        I = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || y.a(t.M()),
              B.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: W, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetFollowedChannels_Response";
            }),
            t
          );
        })(B),
        E = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || y.a(t.M()),
              B.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: W, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetSubscribedChannels_Response";
            }),
            t
          );
        })(B),
        P = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.is_followed || y.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      is_followed: {
                        n: 1,
                        br: y.d.readBool,
                        bw: y.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_FollowBroadcastChannel_Response";
            }),
            t
          );
        })(B),
        N = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.is_subscribed || y.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      is_subscribed: {
                        n: 1,
                        br: y.d.readBool,
                        bw: y.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_SubscribeBroadcastChannel_Response";
            }),
            t
          );
        })(B),
        x = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_ReportBroadcastChannel_Response";
            }),
            t
          );
        })(B),
        U = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.is_followed || y.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      is_followed: {
                        n: 1,
                        br: y.d.readBool,
                        bw: y.h.writeBool,
                      },
                      is_subscribed: {
                        n: 2,
                        br: y.d.readBool,
                        bw: y.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelInteraction_Response";
            }),
            t
          );
        })(B),
        D = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.appid || y.a(t.M()),
              B.initialize(n, r, 0, -1, [5], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      appid: { n: 1, br: y.d.readUint32, bw: y.h.writeUint32 },
                      name: { n: 2, br: y.d.readString, bw: y.h.writeString },
                      image: { n: 3, br: y.d.readString, bw: y.h.writeString },
                      viewers: {
                        n: 4,
                        br: y.d.readUint64String,
                        bw: y.h.writeUint64String,
                      },
                      channels: { n: 5, c: W, r: !0, q: !0 },
                      release_date: {
                        n: 6,
                        br: y.d.readString,
                        bw: y.h.writeString,
                      },
                      developer: {
                        n: 7,
                        br: y.d.readString,
                        bw: y.h.writeString,
                      },
                      publisher: {
                        n: 8,
                        br: y.d.readString,
                        bw: y.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_Game";
            }),
            t
          );
        })(B),
        A = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || y.a(t.M()),
              B.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: D, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetGames_Response";
            }),
            t
          );
        })(B),
        G = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || y.a(t.M()),
              B.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: W, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetChannels_Response";
            }),
            t
          );
        })(B),
        L = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcasters || y.a(t.M()),
              B.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { broadcasters: { n: 1, c: k, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelBroadcasters_Response";
            }),
            t
          );
        })(B),
        k = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.steamid || y.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: y.d.readFixed64String,
                        bw: y.h.writeFixed64String,
                      },
                      name: { n: 2, br: y.d.readString, bw: y.h.writeString },
                      rtmp_token: {
                        n: 3,
                        br: y.d.readString,
                        bw: y.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster";
            }),
            t
          );
        })(B),
        V = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.issuer_steamid || y.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      issuer_steamid: {
                        n: 1,
                        br: y.d.readFixed64String,
                        bw: y.h.writeFixed64String,
                      },
                      chatter_steamid: {
                        n: 2,
                        br: y.d.readFixed64String,
                        bw: y.h.writeFixed64String,
                      },
                      time_expires: {
                        n: 3,
                        br: y.d.readString,
                        bw: y.h.writeString,
                      },
                      permanent: { n: 4, br: y.d.readBool, bw: y.h.writeBool },
                      name: { n: 5, br: y.d.readString, bw: y.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_ChatBan";
            }),
            t
          );
        })(B),
        q = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || y.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: y.d.readFixed64String,
                        bw: y.h.writeFixed64String,
                      },
                      chatter_steamid: {
                        n: 2,
                        br: y.d.readFixed64String,
                        bw: y.h.writeFixed64String,
                      },
                      duration: {
                        n: 3,
                        br: y.d.readUint32,
                        bw: y.h.writeUint32,
                      },
                      permanent: { n: 4, br: y.d.readBool, bw: y.h.writeBool },
                      undo: { n: 5, br: y.d.readBool, bw: y.h.writeBool },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AddChatBan_Request";
            }),
            t
          );
        })(B),
        H = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AddChatBan_Response";
            }),
            t
          );
        })(B),
        K = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || y.a(t.M()),
              B.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: V, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetChatBans_Response";
            }),
            t
          );
        })(B),
        Y = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || y.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: y.d.readFixed64String,
                        bw: y.h.writeFixed64String,
                      },
                      moderator_steamid: {
                        n: 2,
                        br: y.d.readFixed64String,
                        bw: y.h.writeFixed64String,
                      },
                      undo: { n: 3, br: y.d.readBool, bw: y.h.writeBool },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AddChatModerator_Request";
            }),
            t
          );
        })(B),
        J = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AddChatModerator_Response";
            }),
            t
          );
        })(B),
        X = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || y.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: y.d.readFixed64String,
                        bw: y.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetChatModerators_Request";
            }),
            t
          );
        })(B),
        Q = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.steamid || y.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: y.d.readFixed64String,
                        bw: y.h.writeFixed64String,
                      },
                      name: { n: 2, br: y.d.readString, bw: y.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_ChatModerator";
            }),
            t
          );
        })(B),
        $ = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || y.a(t.M()),
              B.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: Q, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetChatModerators_Response";
            }),
            t
          );
        })(B),
        Z = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AddWordBan_Response";
            }),
            t
          );
        })(B),
        ee = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || y.a(t.M()),
              B.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      results: {
                        n: 1,
                        r: !0,
                        q: !0,
                        br: y.d.readString,
                        bw: y.h.writeRepeatedString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetWordBans_Response";
            }),
            t
          );
        })(B),
        te = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || y.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: y.d.readFixed64String,
                        bw: y.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_JoinChat_Request";
            }),
            t
          );
        })(B),
        re = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.chat_id || y.a(t.M()),
              B.initialize(n, r, 0, -1, [3], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: y.d.readFixed64String,
                        bw: y.h.writeFixed64String,
                      },
                      view_url_template: {
                        n: 2,
                        br: y.d.readString,
                        bw: y.h.writeString,
                      },
                      flair_group_ids: {
                        n: 3,
                        r: !0,
                        q: !0,
                        br: y.d.readUint64String,
                        bw: y.h.writeRepeatedUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_JoinChat_Response";
            }),
            t
          );
        })(B),
        ne = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || y.a(t.M()),
              B.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: W, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_Search_Response";
            }),
            t
          );
        })(B),
        ie = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.stream_live_email || y.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      stream_live_email: {
                        n: 1,
                        br: y.d.readBool,
                        bw: y.h.writeBool,
                      },
                      stream_live_notification: {
                        n: 2,
                        br: y.d.readBool,
                        bw: y.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetSteamTVUserSettings_Response";
            }),
            t
          );
        })(B),
        ae = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_SetSteamTVUserSettings_Response";
            }),
            t
          );
        })(B),
        oe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || y.a(t.M()),
              B.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: W, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetMyBroadcastChannels_Response";
            }),
            t
          );
        })(B),
        se = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcasts || y.a(t.M()),
              B.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { broadcasts: { n: 1, c: W, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_Takeover";
            }),
            t
          );
        })(B),
        ce = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcasts || y.a(t.M()),
              B.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcasts: { n: 1, c: W, r: !0, q: !0 },
                      appid: { n: 2, br: y.d.readUint32, bw: y.h.writeUint32 },
                      title: { n: 3, br: y.d.readString, bw: y.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_SingleGame";
            }),
            t
          );
        })(B),
        ue = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.appid || y.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      appid: { n: 1, br: y.d.readUint32, bw: y.h.writeUint32 },
                      game_name: {
                        n: 2,
                        br: y.d.readString,
                        bw: y.h.writeString,
                      },
                      broadcast: { n: 3, c: W },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "GameListEntry";
            }),
            t
          );
        })(B),
        le = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.entries || y.a(t.M()),
              B.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      entries: { n: 1, c: ue, r: !0, q: !0 },
                      title: { n: 2, br: y.d.readString, bw: y.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_GameList";
            }),
            t
          );
        })(B),
        de = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcasts || y.a(t.M()),
              B.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcasts: { n: 1, c: W, r: !0, q: !0 },
                      title: { n: 2, br: y.d.readString, bw: y.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_QuickExplore";
            }),
            t
          );
        })(B),
        me = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcasts || y.a(t.M()),
              B.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcasts: { n: 1, c: W, r: !0, q: !0 },
                      title: { n: 2, br: y.d.readString, bw: y.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_ConveyorBelt";
            }),
            t
          );
        })(B),
        pe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast || y.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast: { n: 1, c: W },
                      title: { n: 2, br: y.d.readString, bw: y.h.writeString },
                      chat_group_id: {
                        n: 3,
                        br: y.d.readUint64String,
                        bw: y.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_WatchParty";
            }),
            t
          );
        })(B),
        fe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast || y.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast: { n: 1, c: W },
                      title: { n: 2, br: y.d.readString, bw: y.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_Developer";
            }),
            t
          );
        })(B),
        he = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.title || y.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      title: { n: 1, br: y.d.readString, bw: y.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_Event";
            }),
            t
          );
        })(B),
        _e = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.template_type || y.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      template_type: {
                        n: 1,
                        br: y.d.readEnum,
                        bw: y.h.writeEnum,
                      },
                      takeover: { n: 2, c: se },
                      single_game: { n: 3, c: ce },
                      game_list: { n: 4, c: le },
                      quick_explore: { n: 5, c: de },
                      conveyor_belt: { n: 6, c: me },
                      watch_party: { n: 7, c: pe },
                      developer: { n: 8, c: fe },
                      event: { n: 9, c: he },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageContentRow";
            }),
            t
          );
        })(B),
        be = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.rows || y.a(t.M()),
              B.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { rows: { n: 1, c: _e, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetHomePageContents_Response";
            }),
            t
          );
        })(B),
        ye = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_clip_id || y.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_clip_id: {
                        n: 1,
                        br: y.d.readUint64String,
                        bw: y.h.writeUint64String,
                      },
                      channel_id: {
                        n: 2,
                        br: y.d.readUint64String,
                        bw: y.h.writeUint64String,
                      },
                      app_id: { n: 3, br: y.d.readUint32, bw: y.h.writeUint32 },
                      broadcaster_steamid: {
                        n: 4,
                        br: y.d.readFixed64String,
                        bw: y.h.writeFixed64String,
                      },
                      creator_steamid: {
                        n: 5,
                        br: y.d.readFixed64String,
                        bw: y.h.writeFixed64String,
                      },
                      video_description: {
                        n: 6,
                        br: y.d.readString,
                        bw: y.h.writeString,
                      },
                      live_time: {
                        n: 7,
                        br: y.d.readUint32,
                        bw: y.h.writeUint32,
                      },
                      length_ms: {
                        n: 8,
                        br: y.d.readUint32,
                        bw: y.h.writeUint32,
                      },
                      thumbnail_path: {
                        n: 9,
                        br: y.d.readString,
                        bw: y.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_BroadcastClipInfo";
            }),
            t
          );
        })(B),
        Be = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.clips || y.a(t.M()),
              B.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      clips: { n: 1, c: ye, r: !0, q: !0 },
                      thumbnail_host: {
                        n: 2,
                        br: y.d.readString,
                        bw: y.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelClips_Response";
            }),
            t
          );
        })(B),
        ge = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.aggregation_delay_ms || y.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      aggregation_delay_ms: {
                        n: 1,
                        br: y.d.readUint32,
                        bw: y.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AppCheer_Response";
            }),
            t
          );
        })(B);
      !(function (e) {
        (e.CreateBroadcastChannel = function (e, t) {
          return e.SendMsg("SteamTV.CreateBroadcastChannel#1", t, S, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
          (e.GetBroadcastChannelID = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelID#1", t, v, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelProfile = function (e, t) {
            return e.SendMsg("SteamTV.SetBroadcastChannelProfile#1", t, w, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelProfile = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelProfile#1", t, M, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelImage = function (e, t) {
            return e.SendMsg("SteamTV.SetBroadcastChannelImage#1", t, C, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelImages = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelImages#1", t, O, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelLinkRegions = function (e, t) {
            return e.SendMsg("SteamTV.SetBroadcastChannelLinkRegions#1", t, F, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelLinks = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelLinks#1", t, z, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.GetBroadcastChannelBroadcasters = function (e, t) {
            return e.SendMsg(
              "SteamTV.GetBroadcastChannelBroadcasters#1",
              t,
              L,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 }
            );
          }),
          (e.GetFollowedChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetFollowedChannels#1", t, I, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetSubscribedChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetSubscribedChannels#1", t, E, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelStatus = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelStatus#1", t, T, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.FollowBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.FollowBroadcastChannel#1", t, P, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SubscribeBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.SubscribeBroadcastChannel#1", t, N, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelClips = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelClips#1", t, Be, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.ReportBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.ReportBroadcastChannel#1", t, x, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelInteraction = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelInteraction#1", t, U, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetGames = function (e, t) {
            return e.SendMsg("SteamTV.GetGames#1", t, A, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetChannels#1", t, G, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.AddChatBan = function (e, t) {
            return e.SendMsg("SteamTV.AddChatBan#1", t, H, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetChatBans = function (e, t) {
            return e.SendMsg("SteamTV.GetChatBans#1", t, K, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.AddChatModerator = function (e, t) {
            return e.SendMsg("SteamTV.AddChatModerator#1", t, J, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetChatModerators = function (e, t) {
            return e.SendMsg("SteamTV.GetChatModerators#1", t, $, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.AddWordBan = function (e, t) {
            return e.SendMsg("SteamTV.AddWordBan#1", t, Z, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetWordBans = function (e, t) {
            return e.SendMsg("SteamTV.GetWordBans#1", t, ee, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.JoinChat = function (e, t) {
            return e.SendMsg("SteamTV.JoinChat#1", t, re, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.Search = function (e, t) {
            return e.SendMsg("SteamTV.Search#1", t, ne, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.GetSteamTVUserSettings = function (e, t) {
            return e.SendMsg("SteamTV.GetSteamTVUserSettings#1", t, ie, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SetSteamTVUserSettings = function (e, t) {
            return e.SendMsg("SteamTV.SetSteamTVUserSettings#1", t, ae, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetMyBroadcastChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetMyBroadcastChannels#1", t, oe, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetHomePageContents = function (e, t) {
            return e.SendMsg("SteamTV.GetHomePageContents#1", t, be, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.AppCheer = function (e, t) {
            return e.SendMsg("SteamTV.AppCheer#1", t, ge, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(g || (g = {}));
      r("AiWL");
      var Se,
        ve,
        we = r("qiKp"),
        Me = r("TLQK"),
        Ce = r("XxJJ"),
        Oe = r("lkRc"),
        je = r("2ErG"),
        ze = b.Message,
        Re = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.groupid || y.a(t.M()),
              ze.initialize(n, r, 0, -1, [3], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      groupid: {
                        n: 1,
                        br: y.d.readUint32,
                        bw: y.h.writeUint32,
                      },
                      name: { n: 2, br: y.d.readString, bw: y.h.writeString },
                      accountid_members: {
                        n: 3,
                        r: !0,
                        q: !0,
                        br: y.d.readUint32,
                        bw: y.h.writeRepeatedUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsListCategory";
            }),
            t
          );
        })(ze),
        Fe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.categories || y.a(t.M()),
              ze.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { categories: { n: 1, c: Re, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_GetCategories_Response";
            }),
            t
          );
        })(ze),
        Te = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.accountid || y.a(t.M()),
              ze.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      accountid: {
                        n: 1,
                        br: y.d.readUint32,
                        bw: y.h.writeUint32,
                      },
                      clanid: { n: 2, br: y.d.readUint32, bw: y.h.writeUint32 },
                      chat_group_id: {
                        n: 3,
                        br: y.d.readUint64String,
                        bw: y.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsListFavoriteEntry";
            }),
            t
          );
        })(ze),
        We = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.favorites || y.a(t.M()),
              ze.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { favorites: { n: 1, c: Te, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_GetFavorites_Response";
            }),
            t
          );
        })(ze),
        Ie = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return ze.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_SetFavorites_Response";
            }),
            t
          );
        })(ze),
        Ee = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.favorites || y.a(t.M()),
              ze.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { favorites: { n: 1, c: Te, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_FavoritesChanged_Notification";
            }),
            t
          );
        })(ze),
        Pe = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return ze.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_GetFriendsList_Request";
            }),
            t
          );
        })(ze),
        Ne = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.friendslist || y.a(t.M()),
              ze.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { friendslist: { n: 1, c: je.b } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = y.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return y.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return y.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new b.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return y.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new b.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              y.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new b.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_GetFriendsList_Response";
            }),
            t
          );
        })(ze);
      !(function (e) {
        (e.GetCategories = function (e, t) {
          return e.SendMsg("FriendsList.GetCategories#1", t, Fe, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
          (e.GetFriendsList = function (e, t) {
            return e.SendMsg("FriendsList.GetFriendsList#1", t, Ne, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.GetFavorites#1", t, We, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.SetFavorites#1", t, Ie, {
              ePrivilege: 1,
            });
          });
      })(Se || (Se = {})),
        (function (e) {
          e.FavoritesChangedHandler = {
            name: "FriendsListClient.FavoritesChanged#1",
            request: Ee,
          };
        })(ve || (ve = {}));
      var xe = r("oFam"),
        Ue = (r("75qM"), r("kyHq")),
        De = r("uobO"),
        Ae = (function () {
          function e() {
            (this.m_mapPlayerCache = new Map()),
              (this.m_strBannedWords = ""),
              (this.m_strProfanityWords = ""),
              (this.m_strCleanWords = ""),
              (this.m_strBannedPattern = ""),
              (this.m_strCleanPattern = ""),
              (this.m_regexBannedWords = null),
              (this.m_regexCleanWords = null),
              (this.m_bShownFilterTip = !1),
              (this.m_TextFilterPreferences = new Ue.l());
            var e = new xe.a();
            (this.m_TextFilterPreferences.eTextFilterSetting = e.text_filter_setting()),
              (this.m_TextFilterPreferences.bIgnoreFriends = e.text_filter_ignore_friends()),
              (this.m_TextFilterWords = new xe.l());
          }
          return (
            (e.prototype.Init = function (e, t, r) {
              return (
                void 0 === e && (e = 0),
                void 0 === t && (t = null),
                void 0 === r && (r = null),
                Object(n.b)(this, void 0, void 0, function () {
                  return Object(n.e)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          (this.m_unAccountID = e),
                          (this.m_Transport = t),
                          (this.m_Storage = r),
                          (this.m_strBannedWords = ""),
                          (this.m_strProfanityWords = ""),
                          (this.m_strCleanWords = ""),
                          [4, this.LoadFilter()]
                        );
                      case 1:
                        return n.sent(), [4, this.LoadTextFilterPreferences()];
                      case 2:
                        return n.sent(), [4, this.LoadTextFilterWords()];
                      case 3:
                        return n.sent(), [4, this.RequestUpdatedSettings()];
                      case 4:
                        return n.sent(), [4, this.RequestFriendsList()];
                      case 5:
                        return n.sent(), [4, this.LoadLanguage(Oe.d.LANGUAGE)];
                      case 6:
                        return (
                          n.sent(),
                          "english" === Oe.d.LANGUAGE
                            ? [3, 8]
                            : [4, this.LoadLanguage("english")]
                        );
                      case 7:
                        n.sent(), (n.label = 8);
                      case 8:
                        return this.OnFilterDataChanged(), [2];
                    }
                  });
                })
              );
            }),
            (e.prototype.LoadTextFilterPreferences = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e;
                return Object(n.e)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return this.m_Storage
                        ? [
                            4,
                            this.m_Storage.GetObject(
                              "CTextFilterStore_TextFilterPreferences"
                            ),
                          ]
                        : [3, 2];
                    case 1:
                      (e = t.sent()) && (this.m_TextFilterPreferences = e),
                        (t.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.SaveTextFilterPreferences = function () {
              this.m_Storage &&
                this.m_Storage.StoreObject(
                  "CTextFilterStore_TextFilterPreferences",
                  this.m_TextFilterPreferences
                );
            }),
            (e.prototype.LoadTextFilterWords = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e;
                return Object(n.e)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return this.m_Storage
                        ? [
                            4,
                            this.m_Storage.GetObject(
                              "CTextFilterStore_TextFilterWords"
                            ),
                          ]
                        : [3, 2];
                    case 1:
                      (e = t.sent()) &&
                        (this.m_TextFilterWords = xe.l.fromObject(e)),
                        (t.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.SaveTextFilterWords = function () {
              this.m_Storage &&
                this.m_Storage.StoreObject(
                  "CTextFilterStore_TextFilterWords",
                  this.m_TextFilterWords.toObject()
                );
            }),
            (e.prototype.LoadFilter = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e, t;
                return Object(n.e)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return this.m_Storage
                        ? [
                            4,
                            this.m_Storage.GetObject(
                              "CTextFilterStore_strBannedPattern"
                            ),
                          ]
                        : [3, 3];
                    case 1:
                      return (
                        (e = r.sent()),
                        [
                          4,
                          this.m_Storage.GetObject(
                            "CTextFilterStore_strCleanPattern"
                          ),
                        ]
                      );
                    case 2:
                      (t = r.sent()),
                        null != e && null != t && this.BRebuildFilter(e, t),
                        (r.label = 3);
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.SaveFilter = function () {
              this.m_Storage &&
                (this.m_Storage.StoreObject(
                  "CTextFilterStore_strBannedPattern",
                  this.m_strBannedPattern
                ),
                this.m_Storage.StoreObject(
                  "CTextFilterStore_strCleanPattern",
                  this.m_strCleanPattern
                ));
            }),
            (e.prototype.RequestUpdatedSettings = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e, t, r, i, o, s, c, u;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (((e = new xe.a()), 0 === this.m_unAccountID))
                        return [3, 7];
                      n.label = 1;
                    case 1:
                      return (
                        n.trys.push([1, 6, , 7]),
                        this.m_Transport
                          ? ((t = p.b.Init(xe.b)),
                            [
                              4,
                              xe.m.GetCommunityPreferences(this.m_Transport, t),
                            ])
                          : [3, 3]
                      );
                    case 2:
                      return (
                        (r = n.sent()), (e = r.Body().preferences()), [3, 5]
                      );
                    case 3:
                      return (
                        (c = {
                          sessionid: Oe.d.SESSIONID,
                          origin: Object(Oe.f)(),
                        }),
                        [
                          4,
                          a.a.get(
                            Oe.d.COMMUNITY_BASE_URL +
                              "textfilter/ajaxgetcommunitypreferences",
                            { params: c, withCredentials: !0 }
                          ),
                        ]
                      );
                    case 4:
                      (u = n.sent()),
                        (e = xe.a.fromObject(u.data.preferences)),
                        (n.label = 5);
                    case 5:
                      return [3, 7];
                    case 6:
                      return n.sent(), [3, 7];
                    case 7:
                      if (
                        (this.UpdateCommunityPreferences(e),
                        e.text_filter_words_revision() ===
                          this.m_TextFilterWords.text_filter_words_revision())
                      )
                        return [3, 15];
                      if (
                        ((i = new xe.l()), 0 === e.text_filter_words_revision())
                      )
                        return [3, 14];
                      n.label = 8;
                    case 8:
                      return (
                        n.trys.push([8, 13, , 14]),
                        this.m_Transport
                          ? ((o = p.b.Init(xe.f)),
                            [4, xe.m.GetTextFilterWords(this.m_Transport, o)])
                          : [3, 10]
                      );
                    case 9:
                      return (s = n.sent()), (i = s.Body().words()), [3, 12];
                    case 10:
                      return (
                        (c = {
                          sessionid: Oe.d.SESSIONID,
                          origin: Object(Oe.f)(),
                        }),
                        [
                          4,
                          a.a.get(
                            Oe.d.COMMUNITY_BASE_URL +
                              "textfilter/ajaxgettextfiltercustomwords",
                            { params: c, withCredentials: !0 }
                          ),
                        ]
                      );
                    case 11:
                      (u = n.sent()),
                        (i = xe.l.fromObject(u.data.words)),
                        (n.label = 12);
                    case 12:
                      return [3, 14];
                    case 13:
                      return n.sent(), [3, 14];
                    case 14:
                      this.UpdateTextFilterWords(i), (n.label = 15);
                    case 15:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.UpdateCommunityPreferences = function (e) {
              var t = !1;
              e.text_filter_setting() !==
                this.m_TextFilterPreferences.eTextFilterSetting &&
                ((this.m_TextFilterPreferences.eTextFilterSetting = e.text_filter_setting()),
                (t = !0)),
                e.text_filter_ignore_friends() !==
                  this.m_TextFilterPreferences.bIgnoreFriends &&
                  ((this.m_TextFilterPreferences.bIgnoreFriends = e.text_filter_ignore_friends()),
                  (t = !0)),
                t && this.SaveTextFilterPreferences();
            }),
            Object.defineProperty(e.prototype, "TextFilterPreferences", {
              get: function () {
                return this.m_TextFilterPreferences;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.UpdateTextFilterWords = function (e) {
              (this.m_TextFilterWords = e), this.SaveTextFilterWords();
            }),
            (e.prototype.RequestFriendsList = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e, t, r, i, o;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (((e = new je.b()), 0 === this.m_unAccountID))
                        return [3, 7];
                      n.label = 1;
                    case 1:
                      return (
                        n.trys.push([1, 6, , 7]),
                        this.m_Transport
                          ? ((t = p.b.Init(Pe)),
                            [4, Se.GetFriendsList(this.m_Transport, t)])
                          : [3, 3]
                      );
                    case 2:
                      return (
                        (r = n.sent()), (e = r.Body().friendslist()), [3, 5]
                      );
                    case 3:
                      return (
                        (i = {
                          sessionid: Oe.d.SESSIONID,
                          origin: Object(Oe.f)(),
                        }),
                        [
                          4,
                          a.a.get(
                            Oe.d.COMMUNITY_BASE_URL +
                              "textfilter/ajaxgetfriendslist",
                            { params: i, withCredentials: !0 }
                          ),
                        ]
                      );
                    case 4:
                      (o = n.sent()),
                        (e = je.b.fromObject(o.data.friendslist)),
                        (n.label = 5);
                    case 5:
                      return [3, 7];
                    case 6:
                      return n.sent(), [3, 7];
                    case 7:
                      return this.SetFriendsList(e), [2];
                  }
                });
              });
            }),
            (e.prototype.SetFriendsList = function (e) {
              e.bincremental() || this.m_mapPlayerCache.clear();
              for (var t = 0, r = e.friends(); t < r.length; t++) {
                var n = r[t],
                  i = new _.a(n.ulfriendid());
                if (i.BIsIndividualAccount()) {
                  var a = n.efriendrelationship();
                  this.m_mapPlayerCache.set(i.GetAccountID(), a);
                }
              }
            }),
            (e.prototype.BIsFriend = function (e) {
              return (
                !!this.m_mapPlayerCache.has(e) &&
                3 == this.m_mapPlayerCache.get(e)
              );
            }),
            (e.prototype.LoadLanguage = function (e) {
              return Object(n.b)(this, void 0, void 0, function () {
                var t, r, i, o, s, c;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      (t = "1"),
                        (r =
                          Oe.d.COMMUNITY_CDN_URL +
                          "textfilter/gettextfilterdictionary?type=banned&language=" +
                          e +
                          "&v=" +
                          t +
                          "&origin=" +
                          Object(Oe.f)()),
                        (n.label = 1);
                    case 1:
                      return n.trys.push([1, 3, , 4]), [4, a.a.get(r)];
                    case 2:
                      return (
                        (s = n.sent()),
                        (this.m_strBannedWords += s.data),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (i = n.sent()),
                        console.error(
                          "Failed to load filter dictionary " + r,
                          i
                        ),
                        [3, 4]
                      );
                    case 4:
                      (r =
                        Oe.d.COMMUNITY_CDN_URL +
                        "textfilter/gettextfilterdictionary?type=profanity&language=" +
                        e +
                        "&v=" +
                        t +
                        "&origin=" +
                        Object(Oe.f)()),
                        (n.label = 5);
                    case 5:
                      return n.trys.push([5, 7, , 8]), [4, a.a.get(r)];
                    case 6:
                      return (
                        (s = n.sent()),
                        (this.m_strProfanityWords += s.data),
                        [3, 8]
                      );
                    case 7:
                      return (
                        (o = n.sent()),
                        console.error(
                          "Failed to load filter dictionary " + r,
                          o
                        ),
                        [3, 8]
                      );
                    case 8:
                      (r =
                        Oe.d.COMMUNITY_CDN_URL +
                        "textfilter/gettextfilterdictionary?type=clean_public&language=" +
                        e +
                        "&v=" +
                        t +
                        "&origin=" +
                        Object(Oe.f)()),
                        (n.label = 9);
                    case 9:
                      return n.trys.push([9, 11, , 12]), [4, a.a.get(r)];
                    case 10:
                      return (
                        (s = n.sent()),
                        (this.m_strCleanWords += s.data),
                        [3, 12]
                      );
                    case 11:
                      return (
                        (c = n.sent()),
                        console.error(
                          "Failed to load filter dictionary " + r,
                          c
                        ),
                        [3, 12]
                      );
                    case 12:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.AppendPattern = function (e, t) {
              return "" !== t && ("" !== e && (e += "|"), (e += t)), e;
            }),
            (e.prototype.CreatePattern = function (e) {
              var t = e.filter(function (e) {
                return "" !== e;
              });
              return t.length > 0 ? "\\b(" + t.join("|") + ")\\b" : "";
            }),
            (e.prototype.OnFilterDataChanged = function () {
              var e = new RegExp(/\s*[\r\n]+\s*/g),
                t = [],
                r = [];
              switch (this.m_TextFilterPreferences.eTextFilterSetting) {
                case 0:
                case 3:
                  break;
                case 2:
                  t = t.concat(this.m_strBannedWords.split(e));
                  break;
                default:
                  t = t.concat(
                    this.m_strProfanityWords.split(e),
                    this.m_strBannedWords.split(e)
                  );
              }
              (t = t.concat(
                this.m_TextFilterWords.text_filter_custom_banned_words()
              )),
                (r = (r = this.m_strCleanWords.split(e)).concat(
                  this.m_TextFilterWords.text_filter_custom_clean_words()
                ));
              var n = this.CreatePattern(t),
                i = this.CreatePattern(r);
              "" != i && (i = "^(" + i + ")$"),
                this.BRebuildFilter(n, i) && this.SaveFilter();
            }),
            (e.prototype.BRebuildFilter = function (e, t) {
              if (e === this.m_strBannedPattern && t === this.m_strCleanPattern)
                return !1;
              if (((this.m_regexBannedWords = null), "" !== e))
                try {
                  this.m_regexBannedWords = new RegExp(e, "ugi");
                } catch (e) {
                  console.warn("Couldn't compile textfilter bannedwords regex"),
                    Object(De.a)().ReportError(
                      new Error(
                        "Couldn't compile textfilter bannedwords regex: " + e
                      )
                    );
                }
              if (((this.m_regexCleanWords = null), "" !== t))
                try {
                  this.m_regexCleanWords = new RegExp(t, "ugi");
                } catch (e) {
                  console.warn("Couldn't compile textfilter cleanwords regex"),
                    Object(De.a)().ReportError(
                      new Error(
                        "Couldn't compile textfilter cleanwords regex: " + e
                      )
                    );
                }
              return (
                (this.m_strBannedPattern = e), (this.m_strCleanPattern = t), !0
              );
            }),
            (e.prototype.CreateProfanityReplacement = function (e) {
              return "♥".repeat(e);
            }),
            (e.prototype.BHasFilter = function () {
              return null != this.m_regexBannedWords;
            }),
            (e.prototype.BShownFilterTip = function () {
              return this.m_bShownFilterTip;
            }),
            (e.prototype.SetFilterTipShown = function (e) {
              this.m_bShownFilterTip = e;
            }),
            (e.prototype.FilterText = function (e, t) {
              var r = this;
              if (!this.m_regexBannedWords) return t;
              var n = 0;
              "string" == typeof e && "" !== e
                ? (n = new _.a(e).GetAccountID())
                : "number" == typeof e && (n = e);
              return !t ||
                n == this.m_unAccountID ||
                (this.m_TextFilterPreferences.bIgnoreFriends &&
                  this.BIsFriend(n))
                ? t
                : t.replace(this.m_regexBannedWords, function (e) {
                    return r.m_regexCleanWords &&
                      0 == e.search(r.m_regexCleanWords)
                      ? e
                      : r.CreateProfanityReplacement(e.length);
                  });
            }),
            Object(n.c)([u.C], e.prototype, "m_TextFilterPreferences", void 0),
            Object(n.c)([u.C], e.prototype, "m_mapPlayerCache", void 0),
            Object(n.c)([u.C], e.prototype, "m_regexBannedWords", void 0),
            Object(n.c)([u.C], e.prototype, "m_regexCleanWords", void 0),
            Object(n.c)([u.k], e.prototype, "UpdateCommunityPreferences", null),
            Object(n.c)([u.k], e.prototype, "SetFriendsList", null),
            Object(n.c)([u.k], e.prototype, "BRebuildFilter", null),
            e
          );
        })(),
        Ge = (function () {
          function e() {
            this.m_mapChats = new Map();
          }
          return (
            (e.prototype.GetChat = function (e, t) {
              return this.m_mapChats.get(e) || this.m_mapChats.get(t);
            }),
            (e.prototype.GetOrCreateChat = function (e, t) {
              var r = this.GetChat(e, t);
              return r || ((r = new Le()), this.m_mapChats.set(e || t, r)), r;
            }),
            Object(n.c)([u.C], e.prototype, "m_mapChats", void 0),
            e
          );
        })(),
        Le = (function () {
          function e() {
            (this.m_ulBroadcastChannelID = ""),
              (this.m_ulChatID = ""),
              (this.m_strFlairGroupID = ""),
              (this.m_bAutoScroll = !0),
              (this.m_ulBroadcastID = ""),
              (this.m_ulBroadcastSteamID = ""),
              (this.m_tsFirstRequest = null),
              (this.m_nFromFirstRequestMS = 0),
              (this.m_nNextChatTS = 0),
              (this.m_cConsecutiveErrors = 0),
              (this.m_nNudgeFactorMS = 0),
              (this.m_nLastSleepMS = 0),
              (this.m_bReconnecting = !1),
              (this.m_unInstanceID = Math.floor(4294967296 * Math.random())),
              (this.m_strUserSteamID = ""),
              (this.m_regexUserEmoticons = null),
              (this.m_chatScheduledFunc = null),
              (this.m_webAPIInterface = null),
              (this.m_textFilterStore = null),
              (this.m_bHasAddedWelcomeChat = !1),
              (this.m_mapMutedUsers = {}),
              (this.m_mapChannelModeratorUsers = new Map()),
              (this.m_mapBroadcastModeratorUsers = new Map()),
              (this.m_nRateLimitSeconds = 0),
              (this.m_bRateLimited = !1),
              (this.m_rgChatMessages = []),
              (this.m_webAPIInterface = new h.a(
                Oe.d.WEBAPI_BASE_URL,
                Oe.k.webapi_token
              ));
          }
          return (
            (e.prototype.InitTextFilter = function () {
              this.m_textFilterStore = new Ae();
              var e = 0;
              "" !== Oe.k.steamid && (e = new _.a(Oe.k.steamid).GetAccountID());
              this.m_textFilterStore.Init(e, null, new f.a());
            }),
            Object.defineProperty(e.prototype, "TextFilterStore", {
              get: function () {
                return this.m_textFilterStore;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.GetBroadcastSteamID = function () {
              return this.m_ulBroadcastSteamID;
            }),
            (e.prototype.GetUserSteamID = function () {
              return this.m_strUserSteamID;
            }),
            (e.prototype.StartForSteamID = function (e, t) {
              (this.m_webAPIInterface = new h.a(
                Oe.d.WEBAPI_BASE_URL,
                Oe.k.webapi_token
              )),
                (this.m_ulBroadcastSteamID = e),
                (this.m_ulBroadcastID = t),
                this.InitTextFilter(),
                this.RequestChatInfo();
            }),
            (e.prototype.StartForChannel = function (e) {
              (this.m_webAPIInterface = new h.a(
                Oe.d.WEBAPI_BASE_URL,
                Oe.k.webapi_token
              )),
                (this.m_ulBroadcastChannelID = e),
                (this.m_strUserSteamID = Oe.k.steamid),
                this.InitTextFilter(),
                this.JoinChannelChat();
            }),
            (e.prototype.Stop = function () {
              this.m_chatScheduledFunc && this.m_chatScheduledFunc.Cancel();
            }),
            (e.prototype.SendMessage = function (e) {
              return Object(n.b)(this, void 0, void 0, function () {
                var t,
                  r,
                  i,
                  o,
                  s,
                  c,
                  u,
                  l = this;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (0 == (t = e.trim()).length) return [2];
                      n.label = 1;
                    case 1:
                      return (
                        n.trys.push([1, 6, , 7]),
                        (r = void 0),
                        (i = void 0),
                        (o = void 0),
                        this.m_webApiToken
                          ? ((s = new FormData()).append(
                              "chat_id",
                              this.m_ulChatID
                            ),
                            s.append("message", t),
                            s.append(
                              "instance_id",
                              this.m_unInstanceID.toString()
                            ),
                            [
                              4,
                              a.a.post(
                                Oe.d.WEBAPI_BASE_URL +
                                  "IBroadcastService/PostChatMessage/v0001?access_token=" +
                                  this.m_webApiToken,
                                s
                              ),
                            ])
                          : [3, 3]
                      );
                    case 2:
                      return (
                        (i = n.sent()), (o = i.data && i.data.response), [3, 5]
                      );
                    case 3:
                      return (
                        (c = p.b.Init(d.c)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          message: t,
                          instance_id: this.m_unInstanceID.toString(),
                        }),
                        [
                          4,
                          d.a.PostChatMessage(
                            this.m_webAPIInterface.GetServiceTransport(),
                            c
                          ),
                        ]
                      );
                    case 4:
                      (r = n.sent()),
                        (o = {
                          result: r.GetEResult(),
                          cooldown_time_seconds: r
                            .Body()
                            .cooldown_time_seconds(),
                          in_game: r.Body().in_game(),
                          persona_name: r.Body().persona_name(),
                        }),
                        (n.label = 5);
                    case 5:
                      return o && o.result && 1 != o.result
                        ? ((u = ""),
                          (u =
                            17 == o.result
                              ? Object(Me.f)("#BroadcastChat_YouMuted")
                              : 84 == o.result
                              ? Object(Me.f)(
                                  "#BroadcastChat_Cooldown",
                                  o.cooldown_time_seconds
                                )
                              : Object(Me.f)(
                                  "#BroadcastChat_FailedToSendMsg",
                                  t
                                )),
                          this.m_rgChatMessages.push({
                            type: m.a.Error,
                            msg: u,
                            client_ts: Number(new Date()),
                            instance_id: this.m_unInstanceID,
                            in_game: o.in_game,
                            persona_name: o.persona_name,
                            steamid: "",
                          }),
                          [2])
                        : (this.m_nRateLimitSeconds ||
                            (this.m_nRateLimitSeconds =
                              o.cooldown_time_seconds),
                          this.m_nRateLimitSeconds &&
                            ((this.m_bRateLimited = !0),
                            setTimeout(function () {
                              return (l.m_bRateLimited = !1);
                            }, 1e3 * this.m_nRateLimitSeconds)),
                          [3, 7]);
                    case 6:
                      return (
                        n.sent(),
                        this.m_rgChatMessages.push({
                          type: m.a.Error,
                          msg: Object(Me.f)(
                            "#BroadcastChat_FailedToSendMsg",
                            t
                          ),
                          client_ts: Number(new Date()),
                          instance_id: this.m_unInstanceID,
                          in_game: !1,
                          persona_name: "",
                          steamid: "",
                        }),
                        [3, 7]
                      );
                    case 7:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.RequestChatInfo = function (e) {
              return Object(n.b)(this, void 0, void 0, function () {
                var t,
                  r,
                  i,
                  o = this;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      (this.m_cConsecutiveErrors = 0),
                        (this.m_bReconnecting = !1),
                        (n.label = 1);
                    case 1:
                      return (
                        n.trys.push([1, 3, , 4]),
                        (t = {
                          steamid: this.m_ulBroadcastSteamID,
                          broadcastid: this.m_ulBroadcastID,
                          sessionid: Oe.d.SESSIONID,
                        }),
                        [
                          4,
                          a.a.get(
                            Oe.d.CHAT_BASE_URL + "broadcast/getchatinfo",
                            {
                              params: t,
                              withCredentials: !0,
                              cancelToken: null == e ? void 0 : e.token,
                            }
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (r = n.sent()),
                        (e && e.token.reason) ||
                          Object(u.G)(function () {
                            var e = r.data;
                            (o.m_strChatURL = e.view_url_template),
                              (o.m_ulChatID = e.chat_id),
                              (o.m_strFlairGroupID =
                                e.flair_group_ids && e.flair_group_ids[0]),
                              e.blocked &&
                                console.log("User is blocked from chat"),
                              e.steamid && (o.m_strUserSteamID = e.steamid),
                              e.token && (o.m_webApiToken = e.token),
                              e.emoticons && o.SetOwnedEmoticons(e.emoticons),
                              o.m_bHasAddedWelcomeChat ||
                                (o.m_rgChatMessages.push({
                                  type: m.a.Notification,
                                  msg: Object(Me.f)(
                                    "#BroadcastChat_DefaultMessage"
                                  ),
                                  client_ts: Number(new Date()),
                                  instance_id: o.m_unInstanceID,
                                  in_game: !1,
                                  persona_name: "",
                                  steamid: "",
                                }),
                                (o.m_bHasAddedWelcomeChat = !0)),
                              o.m_mapBroadcastModeratorUsers.clear(),
                              e.moderators_steamid &&
                                e.moderators_steamid.forEach(function (e) {
                                  return o.m_mapBroadcastModeratorUsers.set(
                                    e,
                                    !0
                                  );
                                }),
                              (o.m_chatScheduledFunc = new we.b()),
                              o.m_chatScheduledFunc.Schedule(0, o.RequestLoop);
                          }),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (i = n.sent()),
                        console.error(i),
                        console.log("Failed to get chat info!"),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.JoinChannelChat = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e, t, r;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        n.trys.push([0, 2, , 3]),
                        (e = p.b.Init(te)).SetBodyFields({
                          broadcast_channel_id: this.m_ulBroadcastChannelID,
                        }),
                        [
                          4,
                          g.JoinChat(
                            this.m_webAPIInterface.GetServiceTransport(),
                            e
                          ),
                        ]
                      );
                    case 1:
                      return (t = n.sent()).Body().chat_id &&
                        t.Body().view_url_template
                        ? ((this.m_strChatURL = t.Body().view_url_template()),
                          (this.m_ulChatID = t.Body().chat_id()),
                          (this.m_strFlairGroupID =
                            t.Body().flair_group_ids() &&
                            t.Body().flair_group_ids()[0]),
                          this.FetchChatModerators(),
                          (this.m_rgChatMessages = []),
                          this.m_rgChatMessages.push({
                            type: m.a.Notification,
                            msg: Object(Me.f)("#BroadcastChat_DefaultMessage"),
                            client_ts: Number(new Date()),
                            instance_id: this.m_unInstanceID,
                            in_game: !1,
                            persona_name: "",
                            steamid: "",
                          }),
                          (this.m_bHasAddedWelcomeChat = !0),
                          (this.m_chatScheduledFunc = new we.b()),
                          this.m_chatScheduledFunc.Schedule(
                            0,
                            this.RequestLoop
                          ),
                          [3, 3])
                        : (console.log("Failed to join channel chat"), [2]);
                    case 2:
                      return (
                        (r = n.sent()),
                        console.error(r),
                        console.log("Failed to join chat!"),
                        [3, 3]
                      );
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.FetchChatModerators = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e, t, r, i;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (e = p.b.Init(X)).SetBodyFields({
                          broadcast_channel_id: this.m_ulBroadcastChannelID,
                        }),
                        [
                          4,
                          g.GetChatModerators(
                            this.m_webAPIInterface.GetServiceTransport(),
                            e
                          ),
                        ]
                      );
                    case 1:
                      return (
                        (t = n.sent()),
                        (r = t.Body().results()),
                        (i = new Map()),
                        r.forEach(function (e) {
                          i.set(e.steamid(), !0);
                        }),
                        (this.m_mapChannelModeratorUsers = i),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.RequestLoop = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e,
                  t,
                  r,
                  i,
                  o,
                  s,
                  c,
                  u,
                  l,
                  d,
                  p,
                  f,
                  h,
                  _,
                  b,
                  y = this;
                return Object(n.e)(this, function (B) {
                  switch (B.label) {
                    case 0:
                      (e = {}),
                        (t = this.m_strChatURL.replace(
                          "{0}",
                          this.m_nNextChatTS.toString()
                        )) == this.m_strChatURL &&
                          this.m_nNextChatTS > 0 &&
                          (e.t = this.m_nNextChatTS),
                        (B.label = 1);
                    case 1:
                      return (
                        B.trys.push([1, 3, , 4]), [4, a.a.get(t, { params: e })]
                      );
                    case 2:
                      if (
                        ((r = B.sent()),
                        (i = r.data),
                        (this.m_cConsecutiveErrors = 0),
                        (o = i.messages
                          .map(function (e) {
                            return Object(n.a)(Object(n.a)({}, e), {
                              type: m.a.Chat,
                              client_ts: Number(new Date()),
                            });
                          })
                          .filter(function (e) {
                            return !y.IsUserMutedLocally(e.steamid);
                          })),
                        (b = this.m_rgChatMessages).push.apply(b, o),
                        (s = this.m_bAutoScroll ? 150 : 300),
                        this.m_rgChatMessages.length > s &&
                          this.m_rgChatMessages.splice(
                            0,
                            this.m_rgChatMessages.length - s
                          ),
                        i.muted)
                      )
                        for (c = 0, u = i.muted; c < u.length; c++)
                          (l = u[c]),
                            (d =
                              l.muted == this.m_strUserSteamID
                                ? Object(Me.f)(
                                    "#BroadcastChat_YouMuted",
                                    l.persona_name
                                  )
                                : Object(Me.f)(
                                    "#BroadcastChat_UserMuted",
                                    l.persona_name
                                  )),
                            this.m_rgChatMessages.push({
                              type: m.a.Notification,
                              msg: d,
                              client_ts: Number(new Date()),
                              instance_id: this.m_unInstanceID,
                              in_game: !1,
                              persona_name: "",
                              steamid: "",
                            });
                      if (i.remove_msgs)
                        for (p = 0, f = i.remove_msgs; p < f.length; p++)
                          (h = f[p]), this.RemoveUserMessagesLocal(h.steamid);
                      if (
                        ((_ = 0),
                        null == this.m_tsFirstRequest ||
                          0 == this.m_nNextChatTS ||
                          i.initial_delay)
                      ) {
                        if ("undefined" === i.initial_delay)
                          return (
                            console.log(
                              "Need initial_delay to know when to request first chat message"
                            ),
                            [2]
                          );
                        (this.m_tsFirstRequest =
                          performance.now() + i.initial_delay),
                          (this.m_nFromFirstRequestMS = 0),
                          (this.m_nNextChatTS = i.next_request),
                          (_ = i.initial_delay);
                      } else {
                        if (i.next_request < this.m_nNextChatTS)
                          return console.log("Next request in past"), [2];
                        (this.m_nFromFirstRequestMS +=
                          i.next_request - this.m_nNextChatTS),
                          (this.m_nNextChatTS = i.next_request),
                          (_ =
                            this.m_tsFirstRequest +
                            this.m_nFromFirstRequestMS -
                            performance.now() +
                            this.m_nNudgeFactorMS);
                      }
                      return (
                        this.m_bReconnecting && (this.m_bReconnecting = !1),
                        (this.m_nLastSleepMS = _),
                        _ < 0 && (_ = 0),
                        this.m_chatScheduledFunc.Schedule(_, this.RequestLoop),
                        [3, 4]
                      );
                    case 3:
                      if (
                        (B.sent(),
                        console.log(
                          "Failed to get chat messages. Previous sleep set to: " +
                            this.m_nLastSleepMS +
                            " firstReq: " +
                            this.m_tsFirstRequest +
                            " firstFromRequest: " +
                            this.m_nFromFirstRequestMS +
                            " nudge: " +
                            this.m_nNudgeFactorMS
                        ),
                        this.m_cConsecutiveErrors++,
                        (this.m_nNudgeFactorMS += 10),
                        this.m_cConsecutiveErrors >= 4)
                      ) {
                        if (null == this.m_tsFirstRequest)
                          return (
                            this.m_rgChatMessages.push({
                              type: m.a.Error,
                              msg: Object(Me.f)(
                                "#BroadcastChat_UnableToJoinChat"
                              ),
                              client_ts: Number(new Date()),
                              instance_id: this.m_unInstanceID,
                              in_game: !1,
                              persona_name: "",
                              steamid: "",
                            }),
                            [2]
                          );
                        (this.m_cConsecutiveErrors = 0),
                          (this.m_bReconnecting = !0),
                          this.SyncChat();
                      }
                      return (
                        this.m_chatScheduledFunc.Schedule(
                          500,
                          this.RequestLoop
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.GetUserEmoticons = function () {
              return this.m_regexUserEmoticons;
            }),
            (e.prototype.SetOwnedEmoticons = function (e) {
              for (var t = [], r = 0; r < e.length; r++) {
                var n = e[r];
                n.length >= 2 && ":" == n[0]
                  ? t.push(n.substr(1, n.length - 2))
                  : t.push(n);
              }
              var i = ":(" + t.join("|") + "):";
              this.m_regexUserEmoticons = new RegExp(i, "g");
            }),
            (e.prototype.UpdateBroadcastChatModerator = function (e, t, r) {
              return Object(n.b)(this, void 0, void 0, function () {
                var i, o, s;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [3, 6];
                    case 1:
                      return (
                        n.trys.push([1, 4, , 5]),
                        (i = p.b.Init(Y)).SetBodyFields({
                          broadcast_channel_id: this.m_ulBroadcastChannelID,
                          moderator_steamid: e,
                          undo: !t,
                        }),
                        [
                          4,
                          g.AddChatModerator(
                            this.m_webAPIInterface.GetServiceTransport(),
                            i
                          ),
                        ]
                      );
                    case 2:
                      return (
                        n.sent(),
                        (s = Object(Me.f)(
                          t
                            ? "#BroadcastChat_AddedModerator"
                            : "#BroadcastChat_RemovedModerator",
                          r
                        )),
                        this.m_rgChatMessages.push({
                          type: m.a.Notification,
                          msg: s,
                        }),
                        [4, this.FetchChatModerators()]
                      );
                    case 3:
                      return n.sent(), [3, 5];
                    case 4:
                      return (
                        n.sent(),
                        (s = Object(Me.f)(
                          t
                            ? "#BroadcastChat_AddModeratorFailed"
                            : "#BroadcastChat_RemoveModeratorFailed",
                          r
                        )),
                        this.m_rgChatMessages.push({ type: m.a.Error, msg: s }),
                        [3, 5]
                      );
                    case 5:
                      return [3, 10];
                    case 6:
                      (o = new FormData()).append(
                        "broadcaststeamid",
                        this.m_ulBroadcastSteamID
                      ),
                        o.append("moderatorsteamid", e),
                        o.append("bAdd", t ? "1" : "0"),
                        o.append("sessionid", Oe.d.SESSIONID),
                        (n.label = 7);
                    case 7:
                      return (
                        n.trys.push([7, 9, , 10]),
                        [
                          4,
                          a.a.post(
                            Oe.d.CHAT_BASE_URL +
                              "broadcast/ajaxupdatechannelmod",
                            o
                          ),
                        ]
                      );
                    case 8:
                      return (
                        n.sent(),
                        this.m_mapBroadcastModeratorUsers.set(e, t),
                        (s = Object(Me.f)(
                          t
                            ? "#BroadcastChat_AddedModerator"
                            : "#BroadcastChat_RemovedModerator",
                          r
                        )),
                        this.m_rgChatMessages.push({
                          type: m.a.Notification,
                          msg: s,
                        }),
                        [3, 10]
                      );
                    case 9:
                      return (
                        n.sent(),
                        (s = Object(Me.f)(
                          t
                            ? "#BroadcastChat_AddModeratorFailed"
                            : "#BroadcastChat_RemoveModeratorFailed",
                          r
                        )),
                        this.m_rgChatMessages.push({ type: m.a.Error, msg: s }),
                        [3, 10]
                      );
                    case 10:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.UpdateUserChatBan = function (e, t, r, i, o, s) {
              return Object(n.b)(this, void 0, void 0, function () {
                var c, u, l, d;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (c = this.m_ulBroadcastSteamID),
                        (u = this.m_strUserSteamID),
                        this.m_ulBroadcastChannelID
                          ? ((l = p.b.Init(q)).SetBodyFields({
                              broadcast_channel_id: this.m_ulBroadcastChannelID,
                              chatter_steamid: e,
                              duration: 3600 * r,
                              permanent: i,
                              undo: s,
                            }),
                            [
                              4,
                              g.AddChatBan(
                                this.m_webAPIInterface.GetServiceTransport(),
                                l
                              ),
                            ])
                          : [3, 2]
                      );
                    case 1:
                      return n.sent(), [3, 6];
                    case 2:
                      (d = new FormData()).append("broadcaststeamid", c),
                        d.append("issuersteamid", u),
                        d.append("chattersteamid", e),
                        d.append("bantype", t),
                        d.append("duration", r.toString()),
                        d.append("perm", i ? "1" : "0"),
                        d.append("sessionid", Oe.d.SESSIONID),
                        (n.label = 3);
                    case 3:
                      return (
                        n.trys.push([3, 5, , 6]),
                        [
                          4,
                          a.a.post(
                            Oe.d.CHAT_BASE_URL + "broadcast/ajaxupdateusermute",
                            d
                          ),
                        ]
                      );
                    case 4:
                      return (
                        n.sent(),
                        0 == t
                          ? delete this.m_mapMutedUsers[e]
                          : (this.m_mapMutedUsers[e] = o),
                        [3, 6]
                      );
                    case 5:
                      return (
                        n.sent(),
                        console.log("Failed to update mute for " + o),
                        [3, 6]
                      );
                    case 6:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.MuteUserForSession = function (e, t) {
              return Object(n.b)(this, void 0, void 0, function () {
                var r, i, o;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (e == this.m_strUserSteamID) return [2];
                      if (this.m_ulBroadcastSteamID == e) return [2];
                      if (
                        ((r =
                          this.m_ulBroadcastSteamID == this.m_strUserSteamID),
                        this.m_mapMutedUsers[e])
                      )
                        return [3, 7];
                      (this.m_mapMutedUsers[e] = t), (n.label = 1);
                    case 1:
                      return (
                        n.trys.push([1, 6, , 7]),
                        this.m_webApiToken
                          ? ((i = new FormData()).append(
                              "chat_id",
                              this.m_ulChatID
                            ),
                            i.append("user_steamid", e),
                            i.append("muted", "1"),
                            [
                              4,
                              a.a.post(
                                Oe.d.WEBAPI_BASE_URL +
                                  "IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=" +
                                  this.m_webApiToken,
                                i
                              ),
                            ])
                          : [3, 3]
                      );
                    case 2:
                      return n.sent(), [3, 5];
                    case 3:
                      return (
                        (o = p.b.Init(d.b)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          user_steamid: e,
                          muted: !0,
                        }),
                        [
                          4,
                          d.a.MuteBroadcastChatUser(
                            this.m_webAPIInterface.GetServiceTransport(),
                            o
                          ),
                        ]
                      );
                    case 4:
                      n.sent(), (n.label = 5);
                    case 5:
                      return [3, 7];
                    case 6:
                      return (
                        n.sent(),
                        r &&
                          (this.m_rgChatMessages.push({
                            type: m.a.Error,
                            msg: Object(Me.f)(
                              "#BroadcastChat_UserMuteFailed",
                              t
                            ),
                            client_ts: Number(new Date()),
                            instance_id: this.m_unInstanceID,
                            in_game: !1,
                            persona_name: "",
                            steamid: "",
                          }),
                          delete this.m_mapMutedUsers[e]),
                        [3, 7]
                      );
                    case 7:
                      return (
                        r ||
                          this.m_rgChatMessages.push({
                            type: m.a.Notification,
                            msg: Object(Me.f)(
                              "#BroadcastChat_UserMutedLocal",
                              t
                            ),
                            client_ts: Number(new Date()),
                            instance_id: this.m_unInstanceID,
                            in_game: !1,
                            persona_name: "",
                            steamid: "",
                          }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.UnmuteUserForSession = function (e, t) {
              return Object(n.b)(this, void 0, void 0, function () {
                var r, i;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (e == this.m_strUserSteamID) return [2];
                      if (
                        (this.m_mapMutedUsers[e] &&
                          delete this.m_mapMutedUsers[e],
                        !(this.m_ulBroadcastSteamID == this.m_strUserSteamID))
                      )
                        return [3, 8];
                      n.label = 1;
                    case 1:
                      return (
                        n.trys.push([1, 6, , 7]),
                        this.m_webApiToken
                          ? ((r = new FormData()).append(
                              "chat_id",
                              this.m_ulChatID
                            ),
                            r.append("user_steamid", e),
                            r.append("muted", "0"),
                            [
                              4,
                              a.a.post(
                                Oe.d.WEBAPI_BASE_URL +
                                  "IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=" +
                                  this.m_webApiToken,
                                r
                              ),
                            ])
                          : [3, 3]
                      );
                    case 2:
                      return n.sent(), [3, 5];
                    case 3:
                      return (
                        (i = p.b.Init(d.b)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          user_steamid: e,
                          muted: !1,
                        }),
                        [
                          4,
                          d.a.MuteBroadcastChatUser(
                            this.m_webAPIInterface.GetServiceTransport(),
                            i
                          ),
                        ]
                      );
                    case 4:
                      n.sent(), (n.label = 5);
                    case 5:
                      return (
                        this.m_rgChatMessages.push({
                          type: m.a.Notification,
                          msg: Object(Me.f)(
                            "#BroadcastChat_UserUnmutedLocal",
                            t
                          ),
                          client_ts: Number(new Date()),
                          instance_id: this.m_unInstanceID,
                          in_game: !1,
                          persona_name: "",
                          steamid: "",
                        }),
                        [3, 7]
                      );
                    case 6:
                      return (
                        n.sent(),
                        this.m_rgChatMessages.push({
                          type: m.a.Error,
                          msg: Object(Me.f)(
                            "#BroadcastChat_UserUnmuteFailed",
                            t
                          ),
                          client_ts: Number(new Date()),
                          instance_id: this.m_unInstanceID,
                          in_game: !1,
                          persona_name: "",
                          steamid: "",
                        }),
                        [3, 7]
                      );
                    case 7:
                      return [3, 9];
                    case 8:
                      this.m_rgChatMessages.push({
                        type: m.a.Notification,
                        msg: Object(Me.f)("#BroadcastChat_UserUnmutedLocal", t),
                        client_ts: Number(new Date()),
                        instance_id: this.m_unInstanceID,
                        in_game: !1,
                        persona_name: "",
                        steamid: "",
                      }),
                        (n.label = 9);
                    case 9:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.RemoveUserMessagesLocal = function (e) {
              this.m_rgChatMessages = this.m_rgChatMessages.filter(function (
                t
              ) {
                return t.steamid !== e;
              });
            }),
            (e.prototype.RemoveUserMessagesServer = function (e, t) {
              return Object(n.b)(this, void 0, void 0, function () {
                var r, i;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (e == this.m_strUserSteamID) return [2];
                      n.label = 1;
                    case 1:
                      return (
                        n.trys.push([1, 6, , 7]),
                        this.m_webApiToken
                          ? ((r = new FormData()).append(
                              "chat_id",
                              this.m_ulChatID
                            ),
                            r.append("user_steamid", e),
                            [
                              4,
                              a.a.post(
                                Oe.d.WEBAPI_BASE_URL +
                                  "IBroadcastService/RemoveUserChatText/v0001/?access_token=" +
                                  this.m_webApiToken,
                                r
                              ),
                            ])
                          : [3, 3]
                      );
                    case 2:
                      return n.sent(), [3, 5];
                    case 3:
                      return (
                        (i = p.b.Init(d.d)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          user_steamid: e,
                        }),
                        [
                          4,
                          d.a.RemoveUserChatText(
                            this.m_webAPIInterface.GetServiceTransport(),
                            i
                          ),
                        ]
                      );
                    case 4:
                      n.sent(), (n.label = 5);
                    case 5:
                      return [3, 7];
                    case 6:
                      return (
                        n.sent(),
                        this.m_rgChatMessages.push({
                          type: m.a.Error,
                          msg: Object(Me.f)(
                            "#BroadcastChat_RemoveMessagesFailed",
                            t
                          ),
                          client_ts: Number(new Date()),
                          instance_id: this.m_unInstanceID,
                          in_game: !1,
                          persona_name: "",
                          steamid: "",
                        }),
                        [3, 7]
                      );
                    case 7:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.UpdateChatMessageFlair = function (e) {
              return Object(n.b)(this, void 0, void 0, function () {
                var t, r;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return this.m_webApiToken
                        ? ((t = new FormData()).append(
                            "chat_id",
                            this.m_ulChatID
                          ),
                          t.append(
                            "flair",
                            "^" + this.m_strFlairGroupID + "^:" + e + ":"
                          ),
                          [
                            4,
                            a.a.post(
                              Oe.d.WEBAPI_BASE_URL +
                                "IBroadcastService/UpdateChatMessageFlair/v0001/?access_token=" +
                                this.m_webApiToken,
                              t
                            ),
                          ])
                        : [3, 2];
                    case 1:
                      return n.sent(), [3, 4];
                    case 2:
                      return (
                        (r = p.b.Init(d.e)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          flair: "^" + this.m_strFlairGroupID + "^:" + e + ":",
                        }),
                        [
                          4,
                          d.a.UpdateChatMessageFlair(
                            this.m_webAPIInterface.GetServiceTransport(),
                            r
                          ),
                        ]
                      );
                    case 3:
                      n.sent(), (n.label = 4);
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.IsUserMutedLocally = function (e) {
              return Boolean(this.m_mapMutedUsers[e]);
            }),
            (e.prototype.BIsUserBroadcastModerator = function (e) {
              return this.m_mapBroadcastModeratorUsers.has(e);
            }),
            (e.prototype.IsUserBroadcaster = function (e) {
              return e === this.m_ulBroadcastSteamID;
            }),
            (e.prototype.SyncChat = function () {
              (this.m_tsFirstRequest = null),
                (this.m_nFromFirstRequestMS = 0),
                (this.m_nNextChatTS = 0),
                (this.m_rgChatMessages = []);
            }),
            Object(n.c)(
              [u.C],
              e.prototype,
              "m_mapChannelModeratorUsers",
              void 0
            ),
            Object(n.c)(
              [u.C],
              e.prototype,
              "m_mapBroadcastModeratorUsers",
              void 0
            ),
            Object(n.c)([u.C], e.prototype, "m_nRateLimitSeconds", void 0),
            Object(n.c)([u.C], e.prototype, "m_bRateLimited", void 0),
            Object(n.c)([u.C], e.prototype, "m_rgChatMessages", void 0),
            Object(n.c)([Ce.a], e.prototype, "FetchChatModerators", null),
            Object(n.c)([Ce.a], e.prototype, "RequestLoop", null),
            Object(n.c)([Ce.a], e.prototype, "MuteUserForSession", null),
            e
          );
        })(),
        ke = new Ge();
      window.g_BroadcastChatStore = ke;
      var Ve = r("1BdX"),
        qe = (r("wUwH"), r("a5LV")),
        He = r("Z9dU"),
        Ke = r.n(He),
        Ye = r("y+6m"),
        Je = r("Mgs7"),
        Xe = r("Gorr"),
        Qe = r("0QoN"),
        $e = r("BFsE"),
        Ze = r("gPCo"),
        et = r("5znp"),
        tt = r.n(et),
        rt = function () {
          return c.a.createElement(
            "div",
            { className: tt.a.FriendsListInsetShadowCtn },
            c.a.createElement("div", {
              className: tt.a.FriendListInsetShadowTop,
            })
          );
        },
        nt = function () {
          return c.a.createElement(
            "div",
            { className: tt.a.FriendsListInsetShadowCtn },
            c.a.createElement("div", {
              className: tt.a.FriendListInsetShadowBottom,
            })
          );
        },
        it = r("6Y59"),
        at = r("exH9"),
        ot = r("opsS"),
        st = r("3sYe"),
        ct = r.n(st),
        ut = new RegExp("ː([^ː]*)ː", "g"),
        lt =
          (new RegExp("(https?://[^ '\"<>]*)", "gi"),
          new RegExp(
            "^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)",
            "i"
          ));
      var dt = function (e) {
          var t = e.userType,
            r = e.msg,
            n = e.presenterInfo;
          if ("presenter" === t)
            return s.createElement(
              "span",
              null,
              s.createElement(
                Ze.b,
                {
                  name: n.name,
                  title: n.title,
                  photo: n.photo,
                  company: n.company,
                  bioString: n.bio,
                },
                s.createElement(
                  "a",
                  {
                    className: Object(at.a)(
                      ct.a.MessageName,
                      ct.a.MessagePresenter
                    ),
                    href: Oe.d.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  r.persona_name
                )
              )
            );
          var i = null;
          return (
            "broadcaster" === t
              ? (i = ct.a.MessageBroadcaster)
              : "moderator" === t && (i = ct.a.MessageModerator),
            s.createElement(
              "span",
              null,
              s.createElement(
                "a",
                {
                  className: Object(at.a)(ct.a.MessageName, i),
                  href: Oe.d.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
                  "data-miniprofile": "s" + r.steamid,
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                r.persona_name
              )
            )
          );
        },
        mt = function (e) {
          switch (e.userType) {
            case "presenter":
              return s.createElement(
                "span",
                {
                  className: ct.a.RoleFlairContainer,
                  "data-tooltip-text": Object(Me.f)(
                    "#BroadcastChat_Role_Presenter_ttip"
                  ),
                },
                s.createElement(it.i, null)
              );
            case "moderator":
              return s.createElement(
                "span",
                {
                  className: ct.a.RoleFlairContainer,
                  "data-tooltip-text": Object(Me.f)(
                    "#BroadcastChat_Role_Moderatorr_ttip"
                  ),
                },
                s.createElement(it.j, null)
              );
            case "broadcaster":
              return s.createElement(
                "span",
                {
                  className: ct.a.RoleFlairContainer,
                  "data-tooltip-text": Object(Me.f)(
                    "#BroadcastChat_Role_Broadcaster_ttip"
                  ),
                },
                s.createElement(it.h, null)
              );
            default:
              return null;
          }
        },
        pt = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.m_chat = null), (t.messagesContainer = s.createRef()), t;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.componentDidMount = function () {
              this.StartChat();
            }),
            (t.prototype.componentDidUpdate = function (e) {
              this.m_chat &&
                this.m_chat.m_bAutoScroll &&
                this.ScrollToNewestMessages(),
                (this.props.steamID === e.steamID &&
                  this.props.broadcastID === e.broadcastID &&
                  this.props.broadcastChannelID === e.broadcastChannelID) ||
                  this.StartChat();
            }),
            (t.prototype.componentWillUnmount = function () {
              this.m_chat && this.m_chat.Stop();
            }),
            (t.prototype.StartChat = function () {
              if (
                (this.m_chat && this.m_chat.Stop(),
                (this.m_chat = ke.GetOrCreateChat(
                  this.props.broadcastChannelID,
                  this.props.steamID
                )),
                this.props.broadcastChannelID)
              )
                this.m_chat.StartForChannel(this.props.broadcastChannelID);
              else if (
                this.props.steamID &&
                this.props.steamID &&
                (this.props.broadcastID || this.props.globalChat)
              ) {
                var e = this.props.broadcastID || "0";
                this.m_chat.StartForSteamID(this.props.steamID, e),
                  this.ScrollToNewestMessages();
              }
            }),
            (t.prototype.IsTrustedDomain = function (e) {
              return !!e.match(lt);
            }),
            (t.prototype.AddLinksEmoticons = function (e, t) {
              t && this.m_chat.GetUserEmoticons();
              for (var r = e.split(ut), n = [], i = 0; i < r.length; i += 1)
                i % 2 == 1
                  ? n.push(
                      s.createElement(Xe.b, {
                        emoticonHoverStore: qe.a,
                        key: i,
                        emoticon: r[i],
                        large: !0,
                      })
                    )
                  : n.push(r[i]);
              return n;
            }),
            (t.prototype.HandleScroll = function (e) {
              var t = this.props.bInvertLayout
                ? e.currentTarget.scrollTop < 6
                : e.currentTarget.scrollTop + e.currentTarget.clientHeight >=
                  e.currentTarget.scrollHeight - 6;
              this.m_chat && (this.m_chat.m_bAutoScroll = t);
            }),
            (t.prototype.ScrollToNewestMessages = function () {
              this.messagesContainer &&
                this.messagesContainer.current &&
                (this.messagesContainer.current.scrollTop = this.props
                  .bInvertLayout
                  ? 0
                  : this.messagesContainer.current.scrollHeight);
            }),
            (t.prototype.OnContextMenu = function (e, t) {
              var r = this;
              if (t.type !== m.a.Chat) return null;
              var n = [],
                i = this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID()),
                a = this.m_chat.BIsUserBroadcastModerator(
                  this.m_chat.GetUserSteamID()
                );
              ((Oe.k && Oe.k.is_support) || i || a
                ? n.push(
                    s.createElement(
                      Ye.d,
                      {
                        key: "remove",
                        onSelected: function () {
                          return r.m_chat.RemoveUserMessagesServer(
                            t.steamid,
                            t.persona_name
                          );
                        },
                      },
                      Object(Me.f)("#BroadcastChat_RemoveMessages")
                    ),
                    s.createElement(
                      Ye.d,
                      {
                        key: "updatebanh",
                        onSelected: function () {
                          return r.m_chat.UpdateUserChatBan(
                            t.steamid,
                            1,
                            12,
                            !1,
                            t.persona_name
                          );
                        },
                      },
                      Object(Me.f)("#BroadcastChat_half_Mute")
                    ),
                    s.createElement(
                      Ye.d,
                      {
                        key: "updateband",
                        onSelected: function () {
                          return r.m_chat.UpdateUserChatBan(
                            t.steamid,
                            1,
                            24,
                            !1,
                            t.persona_name
                          );
                        },
                      },
                      Object(Me.f)("#BroadcastChat_day_Mute")
                    ),
                    s.createElement(
                      Ye.d,
                      {
                        key: "updatebanw",
                        onSelected: function () {
                          return r.m_chat.UpdateUserChatBan(
                            t.steamid,
                            1,
                            168,
                            !1,
                            t.persona_name
                          );
                        },
                      },
                      Object(Me.f)("#BroadcastChat_week_Mute")
                    ),
                    s.createElement(
                      Ye.d,
                      {
                        key: "updatebanp",
                        onSelected: function () {
                          return r.m_chat.UpdateUserChatBan(
                            t.steamid,
                            1,
                            0,
                            !0,
                            t.persona_name
                          );
                        },
                      },
                      Object(Me.f)("#BroadcastChat_perm_Mute")
                    ),
                    s.createElement(
                      Ye.d,
                      {
                        key: "removeban",
                        onSelected: function () {
                          return r.m_chat.UpdateUserChatBan(
                            t.steamid,
                            0,
                            0,
                            !1,
                            t.persona_name,
                            !0
                          );
                        },
                      },
                      Object(Me.f)("#BroadcastChat_Unmute")
                    )
                  )
                : this.m_chat.IsUserMutedLocally(t.steamid)
                ? n.push(
                    s.createElement(
                      Ye.d,
                      {
                        key: "unmuteuser",
                        onSelected: function () {
                          return r.m_chat.UnmuteUserForSession(
                            t.steamid,
                            t.persona_name
                          );
                        },
                      },
                      Object(Me.f)("#BroadcastChat_UnmuteLocal")
                    )
                  )
                : n.push(
                    s.createElement(
                      Ye.d,
                      {
                        key: "muteuser",
                        onSelected: function () {
                          return r.m_chat.MuteUserForSession(
                            t.steamid,
                            t.persona_name
                          );
                        },
                      },
                      Object(Me.f)("#BroadcastChat_MuteLocal")
                    )
                  ),
              (Oe.k && Oe.k.is_support) ||
                this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID())) &&
                t.steamid &&
                (this.m_chat.BIsUserBroadcastModerator(t.steamid)
                  ? n.push(
                      s.createElement(
                        Ye.d,
                        {
                          key: "removemod",
                          onSelected: function () {
                            return r.m_chat.UpdateBroadcastChatModerator(
                              t.steamid,
                              !1,
                              t.persona_name
                            );
                          },
                        },
                        Object(Me.f)("#BroadcastChat_Remove_Moderator")
                      )
                    )
                  : n.push(
                      s.createElement(
                        Ye.d,
                        {
                          key: "addmod",
                          onSelected: function () {
                            return r.m_chat.UpdateBroadcastChatModerator(
                              t.steamid,
                              !0,
                              t.persona_name
                            );
                          },
                        },
                        Object(Me.f)("#BroadcastChat_Add_Moderator")
                      )
                    ));
              return n.length
                ? Object(l.a)(
                    s.createElement(
                      Ye.c,
                      null,
                      s.createElement(
                        "div",
                        { className: ct.a.SelectedUserNameCtn },
                        Object(Me.f)("#BroadcastChat_User"),
                        s.createElement("br", null),
                        s.createElement(
                          "span",
                          { className: ct.a.SelectedUserName },
                          t.persona_name
                        )
                      ),
                      n
                    ),
                    e
                  )
                : null;
            }),
            (t.prototype.GetTypeClassName = function (e) {
              return e.type === m.a.Notification
                ? ct.a.MessageNotification
                : e.type === m.a.Error
                ? ct.a.MessageError
                : ct.a.MessageChat;
            }),
            (t.prototype.FormatMessage = function (e, t) {
              if (e.type === m.a.Chat) {
                var r = t ? t.FilterText(e.steamid, e.msg) : e.msg;
                return this.AddLinksEmoticons(r, !1);
              }
              return e.msg;
            }),
            (t.prototype.RenderUserChatLine = function (e, t, r) {
              var n = this,
                i = r ? r.get(e.steamid) : void 0,
                a =
                  e.type === m.a.Chat
                    ? (function (e, t, r) {
                        return r
                          ? "presenter"
                          : t.GetBroadcastSteamID() === e
                          ? "broadcaster"
                          : t.BIsUserBroadcastModerator(e)
                          ? "moderator"
                          : "";
                      })(e.steamid, this.m_chat, i)
                    : "";
              return s.createElement(
                "div",
                {
                  key: e.instance_id + "_" + e.client_ts + "_" + t,
                  className: this.GetTypeClassName(e),
                  onContextMenu: function (t) {
                    return n.OnContextMenu(t, e);
                  },
                },
                e.type === m.a.Chat && s.createElement(mt, { userType: a }),
                e.flair &&
                  s.createElement(
                    "span",
                    { className: ct.a.FlairContainer },
                    this.AddLinksEmoticons(e.flair, !1)
                  ),
                e.type === m.a.Chat &&
                  s.createElement(dt, {
                    userType: a,
                    msg: e,
                    presenterInfo: i,
                  }),
                e.type === m.a.Chat &&
                  this.m_chat.GetBroadcastSteamID() === e.steamid &&
                  s.createElement(
                    "span",
                    {
                      className:
                        ct.a.MessageNotification + " " + ct.a.MessageContents,
                    },
                    " (" + Object(Me.f)("#BroadcastChat_Broadcaster") + ")"
                  ),
                e.type === m.a.Chat &&
                  this.m_chat.m_mapChannelModeratorUsers.get(e.steamid) &&
                  s.createElement(
                    "span",
                    {
                      className:
                        ct.a.MessageNotification + " " + ct.a.MessageContents,
                    },
                    " (" + Object(Me.f)("#BroadcastChat_Moderator") + ")"
                  ),
                s.createElement(
                  "span",
                  {
                    className:
                      ct.a.MessageContents +
                      " " +
                      (this.AddLinksEmoticons(e.msg, !1).filter(function (e) {
                        return e && "string" == typeof e;
                      }).length
                        ? ""
                        : ct.a.EmoticonsOnly),
                  },
                  e.type === m.a.Chat ? " : " : "",
                  this.FormatMessage(e, this.m_chat.TextFilterStore)
                )
              );
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                r = t.hidden,
                n = t.bPartnerMemberOnlyChat,
                i = t.bInvertLayout,
                a = this.m_chat ? this.m_chat.m_rgChatMessages : [],
                o = i ? a.reverse() : a,
                c = this.m_chat
                  ? Ve.b.GetPresenterMapForBroadcasterSteamID(
                      this.m_chat.GetBroadcastSteamID()
                    )
                  : void 0;
              return s.createElement(
                "div",
                {
                  className: Object(at.a)(ct.a.ChatPanel, "ChatPanel"),
                  style: r ? { display: "none" } : void 0,
                },
                i &&
                  !!this.m_chat &&
                  s.createElement(ft, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: n,
                  }),
                s.createElement(rt, null),
                s.createElement(
                  "div",
                  {
                    className: Object(at.a)(
                      ct.a.ChatMessages + " " + Ke.a.minHeightZero,
                      "ChatMessages"
                    ),
                    onScroll: this.HandleScroll,
                    ref: this.messagesContainer,
                  },
                  o.map(function (t, r) {
                    return e.RenderUserChatLine(t, r, c);
                  })
                ),
                s.createElement(nt, null),
                !i &&
                  !!this.m_chat &&
                  s.createElement(ft, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: n,
                  })
              );
            }),
            Object(n.c)([u.C], t.prototype, "m_chat", void 0),
            Object(n.c)([ot.a], t.prototype, "StartChat", null),
            Object(n.c)([ot.a], t.prototype, "HandleScroll", null),
            Object(n.c)([ot.a], t.prototype, "OnContextMenu", null),
            Object(n.c)([ot.a], t.prototype, "RenderUserChatLine", null),
            (t = Object(n.c)([o.a], t))
          );
        })(s.Component);
      function ft(e) {
        var t = e.oChat,
          r = e.emoticonStore;
        return !e.bPartnerMemberOnlyChat ||
          ((null === Oe.k || void 0 === Oe.k ? void 0 : Oe.k.logged_in) &&
            (null === Oe.k || void 0 === Oe.k
              ? void 0
              : Oe.k.is_partner_member))
          ? (null === Oe.k || void 0 === Oe.k ? void 0 : Oe.k.logged_in)
            ? s.createElement(ht, { oChat: t, emoticonStore: r })
            : null
          : s.createElement(yt, null);
      }
      function ht(e) {
        var t = e.oChat,
          r = e.emoticonStore,
          i = s.useState(""),
          a = i[0],
          o = i[1],
          c = s.useRef(),
          u = s.useCallback(
            function (e) {
              !!e.shiftKey ||
                13 !== e.charCode ||
                (t.m_bRateLimited || (t.SendMessage(a), o("")),
                e.preventDefault());
            },
            [t, a]
          ),
          l = s.useCallback(
            function (e, t) {
              void 0 === t && (t = !1),
                o(a + "ː" + e + "ː"),
                (null == c ? void 0 : c.current) && c.current.focus();
            },
            [a, c]
          );
        return s.createElement(
          "div",
          { className: Object(at.a)(ct.a.ChatEntryCtn, "ChatEntryCtn") },
          s.createElement(
            "div",
            { className: Object(at.a)(ct.a.ChatEntry, "ChatEntry") },
            s.createElement(
              "form",
              { className: "" + Ke.a.chatEntryControls },
              s.createElement("textarea", {
                className: Ke.a.chatTextarea,
                placeholder: Object(Me.f)("#BroadcastChat_EnterResponse"),
                onKeyPress: u,
                onChange: function (e) {
                  return o(e.target.value);
                },
                value: a,
                ref: c,
              }),
              Boolean(t.m_bRateLimited) &&
                s.createElement(bt, {
                  nSeconds: t.m_nRateLimitSeconds,
                  bRateLimited: t.m_bRateLimited,
                }),
              s.createElement(
                "button",
                {
                  className:
                    Ke.a.chatSubmitButton + " " + (a ? "" : Ke.a.disabled),
                  title: Object(Me.f)("#ChatEntryButton_Submit"),
                  disabled: t.m_bRateLimited || 0 == a.trim().length,
                  onClick: function () {
                    t.SendMessage(a), o("");
                  },
                },
                s.createElement(it.pb, null)
              )
            ),
            s.createElement(
              "div",
              {
                style: { height: "50px" },
                className: "" + Ke.a.chatEntryActionsContainer,
              },
              s.createElement(
                "div",
                { className: Ke.a.chatEntryActionsGroup },
                s.createElement(Qe.a, {
                  disabled: !1,
                  OnEmoticonSelected: l,
                  rtLastAckedNewEmoticons: Number.MAX_VALUE,
                  emoticonStore: r,
                  emoticonHoverStore: qe.a,
                }),
                s.createElement(_t, Object(n.a)({}, e, { textInputRef: c }))
              )
            )
          )
        );
      }
      function _t(e) {
        var t,
          r = e.oChat,
          n = e.emoticonStore,
          i = e.textInputRef;
        return r.m_strFlairGroupID &&
          n.flair_list &&
          (null === (t = n.GetFlairListByGroupID(r.m_strFlairGroupID)) ||
          void 0 === t
            ? void 0
            : t.length)
          ? s.createElement(Qe.a, {
              disabled: !1,
              OnEmoticonSelected: function (e) {
                r.UpdateChatMessageFlair(e),
                  (null == i ? void 0 : i.current) && i.current.focus();
              },
              rtLastAckedNewEmoticons: Number.MAX_VALUE,
              emoticonStore: n,
              emoticonHoverStore: qe.a,
              strFlairGroupID: r.m_strFlairGroupID,
              title: Object(Me.f)("#ChatEntryButton_Flair"),
              buttonIcon: s.createElement(it.k, null),
            })
          : null;
      }
      var bt = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.d)(t, e),
          (t.prototype.render = function () {
            return s.createElement(
              "div",
              { className: ct.a.TimedProgressBarContainer },
              s.createElement(
                "div",
                { className: ct.a.wrapper },
                s.createElement("div", {
                  className: ct.a.spinner + " " + ct.a.pie,
                  style: {
                    animationDuration: (this.props.nSeconds || 0) + "s",
                  },
                }),
                s.createElement("div", {
                  className: ct.a.filler + " " + ct.a.pie,
                  style: {
                    animationDuration: (this.props.nSeconds || 0) + "s",
                  },
                }),
                s.createElement("div", {
                  className: ct.a.mask,
                  style: {
                    animationDuration: (this.props.nSeconds || 0) + "s",
                  },
                })
              )
            );
          }),
          t
        );
      })(s.Component);
      function yt(e) {
        return s.createElement(
          "div",
          { className: ct.a.Description },
          s.createElement(
            "div",
            { className: ct.a.LogInPrompt },
            Object(Me.f)("#Broadcast_PartnerChat_Login")
          ),
          !Oe.k.logged_in &&
            s.createElement(
              Je.d,
              { onClick: $e.a, className: Object(at.a)(ct.a.SignInButton) },
              Object(Me.f)("#Login_SignIn")
            )
        );
      }
      var Bt = r("trWU"),
        gt = (r("Xhj9"), r("5eAM")),
        St = r("VQ2A"),
        vt = (r("sRB7"), r("b3LC")),
        wt = r("NKJh"),
        Mt = r("zjj+"),
        Ct = r("RQmk"),
        Ot = r("dfs5"),
        jt = r("0OaU"),
        zt = r("dLk7"),
        Rt = r.n(zt),
        Ft = Object(o.a)(function (e) {
          var t = e.appid,
            r = Object(vt.e)(t, 0, !0),
            i = (r[0], r[1]),
            a = Object(Ot.c)();
          Object(s.useEffect)(
            function () {
              if (!gt.a.BHasAppLinkLoaded(t)) {
                Object(n.b)(void 0, void 0, void 0, function () {
                  return Object(n.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, gt.a.LoadAppLinkInfo([t])];
                      case 1:
                        return [2, e.sent()];
                    }
                  });
                });
              }
            },
            [t]
          );
          var o = Rt.a.StoreSaleWidgetContainer_mini,
            u = Rt.a.StoreSaleWidgetImage_mini,
            l = Rt.a.StoreSaleImage_mini,
            d = (Rt.a.StoreSaleWidgetShortDesc_mini, gt.a.GetAppLinkInfo(t));
          if (!i || !d)
            return c.a.createElement(
              "div",
              { className: o },
              c.a.createElement(jt.a, { size: "medium" }),
              ";"
            );
          var m = "series" != d.type,
            p = Object(St.b)(d.capsule_link, a);
          return d && d.title
            ? c.a.createElement(
                "div",
                { className: o },
                c.a.createElement(
                  "div",
                  { className: wt.Actions },
                  c.a.createElement(
                    "a",
                    { href: p, target: Oe.d.IN_CLIENT ? void 0 : "_blank" },
                    c.a.createElement(
                      Ct.b,
                      { type: "app", id: d.appid },
                      c.a.createElement(
                        "div",
                        { className: u },
                        c.a.createElement("img", {
                          className: l,
                          src: d.capsule,
                        })
                      )
                    )
                  )
                ),
                c.a.createElement(
                  "div",
                  { className: wt.StoreSaleBroadcastWidgetRight },
                  c.a.createElement(
                    "div",
                    { className: wt.Actions },
                    c.a.createElement(
                      "a",
                      { href: p, target: Oe.d.IN_CLIENT ? void 0 : "_blank" },
                      c.a.createElement(
                        Ct.b,
                        { type: "app", id: d.appid },
                        c.a.createElement(
                          "div",
                          {
                            className: Object(at.a)(
                              wt.StoreSaleWidgetTitle,
                              "StoreSaleWidgetTitle"
                            ),
                          },
                          d.title
                        )
                      )
                    )
                  ),
                  c.a.createElement(
                    "div",
                    { className: wt.StoreSaleWidgetRelease },
                    d.release
                  ),
                  m && c.a.createElement(Mt.d, { info: d, bShowDemoButton: !0 })
                )
              )
            : c.a.createElement("div", {
                className: wt.StoreSaleWidgetEmptyContainer,
              });
        }),
        Tt = (r("wogL"), r("boaH")),
        Wt = r("nWbB"),
        It = (r("Bniq"), r("5L1o")),
        Et = r("02Wr"),
        Pt = r("MnIK"),
        Nt = r("uuth"),
        xt = function (e) {
          var t = e.onPositionChange,
            r = e.onLeave,
            i = s.useCallback(
              function (e) {
                return (
                  void 0 === e.previousPosition &&
                    e.currentPosition === Nt.a.above &&
                    r &&
                    r(e),
                  t && t(e)
                );
              },
              [t, r]
            );
          return s.createElement(
            Nt.a,
            Object(n.a)({}, e, { onPositionChange: i })
          );
        },
        Ut = (r("pKbv"), r("TQGK"), r("uIWk")),
        Dt = r("rKv1"),
        At = r.n(Dt),
        Gt = Object(o.a)(function (e) {
          var t = e.event,
            r = t.clanSteamID.GetAccountID(),
            i = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
            o = Object(s.useRef)(null),
            u = Object(s.useState)(
              t ? Ut.a.GetCreatorHome(t.clanSteamID) : null
            ),
            l = u[0],
            d = u[1];
          if (
            (Object(s.useEffect)(
              function () {
                var e = a.a.CancelToken.source();
                o.current = e.cancel;
                return (
                  Object(n.b)(void 0, void 0, void 0, function () {
                    var t, i;
                    return Object(n.e)(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return (
                            (t = _.a.InitFromClanID(r)),
                            [4, Ut.a.LoadCreatorHome(t, e)]
                          );
                        case 1:
                          return (i = n.sent()), e.token.reason || d(i), [2];
                      }
                    });
                  }),
                  function () {
                    o.current && o.current("BroadcastDropsDisplay: unmounting");
                  }
                );
              },
              [r]
            ),
            i || !l || !l.BIsLoaded())
          )
            return null;
          var m =
            Oe.d.COMMUNITY_BASE_URL +
            "gid/" +
            t.jsondata.broadcast_item_drops_details_clan_accountid +
            "/partnerevents/view/" +
            t.jsondata.broadcast_item_drops_details_event_gid;
          return c.a.createElement(
            "div",
            { className: At.a.item_drop_ctn },
            c.a.createElement(
              "div",
              null,
              Object(Me.f)(
                l.GetName().length > 0
                  ? t.jsondata.broadcast_item_drops_min_watch_time_minutes %
                      60 ==
                    0
                    ? "#SalePage_WatchForDrop_Hours_CreatorNamed"
                    : "#SalePage_WatchForDrop_Minutes_CreatorNamed"
                  : t.jsondata.broadcast_item_drops_min_watch_time_minutes %
                      60 ==
                    0
                  ? "#SalePage_WatchForDrop_Hours_Developer"
                  : "#SalePage_WatchForDrop_Minutes_Developer",
                t.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 == 0
                  ? t.jsondata.broadcast_item_drops_min_watch_time_minutes / 60
                  : t.jsondata.broadcast_item_drops_min_watch_time_minutes,
                l.GetName()
              ),
              Boolean(t.jsondata.broadcast_item_drops_details_clan_accountid) &&
                c.a.createElement(
                  "a",
                  { href: m, target: Oe.d.IN_CLIENT ? "" : "_blank" },
                  Object(Me.f)("#SalePage_WatchForDrop_LearnMore")
                )
            )
          );
        }),
        Lt = {
          list: [
            { appid: 444090, url: "https://steam.tv/paladins" },
            { appid: 386360, url: "https://steam.tv/smite" },
            { appid: 813820, url: "https://steam.tv/realmroyale" },
            {
              appid: 583950,
              url: "https://steam.tv/artifact",
              broadcasterAccountID: 912972716,
            },
            {
              appid: 570,
              url: "https://steam.tv/dota",
              broadcasterAccountID: 238221269,
            },
            {
              appid: 1025790,
              url: "https://steam.tv/steamawards",
              broadcasterAccountID: 934427243,
            },
            {
              appid: 730,
              url: "https://steam.tv/csgo",
              broadcasterAccountID: 927819071,
            },
          ],
        },
        kt = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.m_cancelSignal = a.a.CancelToken.source()),
              (t.state = {
                bShowPopoutHeader: !1,
                bExpanded: !1,
                bLoadingPreference: !0,
                style: {
                  maxHeight: "0vh",
                  overflow: "hidden",
                  transition: "max-height 1s ease-in-out",
                },
                innerStyle: {
                  maxHeight: "0vh",
                  overflow: "hidden",
                  transition: "max-height 1s ease-in-out",
                },
                bStartMuted: !0,
              }),
              t
            );
          }
          var r;
          return (
            Object(n.d)(t, e),
            (r = t),
            (t.IsBroadcastAllowed = function () {
              return (
                Oe.d.EREALM != Ue.g.k_ESteamRealmChina && !Oe.d.IN_GAMEPADUI
              );
            }),
            (t.prototype.componentDidMount = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e = this;
                return Object(n.e)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return r.IsBroadcastAllowed()
                        ? [
                            4,
                            Wt.a
                              .Get()
                              .LoadBIsEmbeddedBroadcastHidden(
                                this.m_cancelSignal
                              ),
                          ]
                        : [2];
                    case 1:
                      return (
                        t.sent(),
                        this.m_cancelSignal.token.reason ||
                          this.setState({
                            bLoadingPreference: !1,
                            bExpanded: !Wt.a
                              .Get()
                              .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                            innerStyle: Object(n.a)(
                              Object(n.a)({}, this.state.innerStyle),
                              {
                                maxHeight: Wt.a
                                  .Get()
                                  .BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                                  ? "0vh"
                                  : "100vh",
                              }
                            ),
                          }),
                        [
                          4,
                          this.props.bIsPreview && this.props.accountIDs
                            ? Wt.a
                                .Get()
                                .HintLoadEmbeddablePreviewStreams(this.props)
                            : Wt.a.Get().HintLoadEmbeddableStreams(this.props),
                        ]
                      );
                    case 2:
                      return (
                        t.sent(),
                        this.props.nAppIDVOD &&
                          (Wt.a
                            .Get()
                            .SetupEmbeddableVOD(
                              this.props,
                              !this.props.bSkipPreRoll
                            ),
                          this.props.bSkipPreRoll && this.PlayTopNonVOD()),
                        window.setTimeout(function () {
                          e.m_cancelSignal.token.reason ||
                            e.setState({
                              style: Object(n.a)(
                                Object(n.a)({}, e.state.style),
                                { maxHeight: "100vh" }
                              ),
                            });
                        }, 10),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.componentWillUnmount = function () {
              this.m_cancelSignal.cancel(
                "BroadcastEmbeddable component unmounted"
              );
            }),
            (t.prototype.ToggleBroadcastExpandShrink = function () {
              var e = this,
                t = Wt.a.Get().GetPlayReadyStream(this.props),
                r = Tt.a.GetOrCreateBroadcastInfo(t.steamid).m_nAppID;
              Object(Wt.e)(r, this.state.bExpanded ? 2 : 3, t.snr);
              var i = this.state.bExpanded;
              window.setTimeout(function () {
                return e.setState({
                  innerStyle: Object(n.a)(Object(n.a)({}, e.state.innerStyle), {
                    maxHeight: i ? "0vh" : "100vh",
                  }),
                });
              }, 10),
                i ||
                  this.setState(
                    { bExpanded: !this.state.bExpanded },
                    function () {
                      return Wt.a
                        .Get()
                        .SetEmbeddedStreamCollapsed(!e.state.bExpanded);
                    }
                  );
            }),
            (t.prototype.OnShrinkTransitionEnd = function () {
              "0vh" === this.state.innerStyle.maxHeight &&
                this.setState({ bExpanded: !1 }, function () {
                  return Wt.a.Get().SetEmbeddedStreamCollapsed(!0);
                });
            }),
            (t.prototype.onStreamSelect = function (e) {
              return Object(n.b)(this, void 0, void 0, function () {
                return Object(n.e)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        this.setState({ bStartMuted: !1 }),
                        Wt.a.Get().GetPlayReadyStream(this.props).accountid ==
                        e.accountid
                          ? [3, 2]
                          : [4, Wt.a.Get().AttemptToPlayStream(this.props, e)]
                      );
                    case 1:
                      t.sent(), (t.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.PlayTopNonVOD = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e,
                  t,
                  r,
                  i,
                  a = this;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      this.setState({ bStartMuted: !1 }),
                        (e = Wt.a
                          .Get()
                          .GetStreams(this.props)
                          .filter(function (e) {
                            return (
                              !a.props.fnFilterStreams ||
                              a.props.fnFilterStreams(e)
                            );
                          })),
                        Object(Wt.f)(e),
                        (t = 0),
                        (r = e),
                        (n.label = 1);
                    case 1:
                      return t < r.length
                        ? (i = r[t]).nAppIDVOD
                          ? [3, 3]
                          : [4, Wt.a.Get().AttemptToPlayStream(this.props, i)]
                        : [3, 4];
                    case 2:
                      return n.sent(), [2];
                    case 3:
                      return t++, [3, 1];
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.ConstructSidePanels = function (e, t) {
              var r = {
                leftPanel: null,
                rightPanel: null,
                bRightPanelArtworkOrEmpty: !0,
              };
              if (this.props.bWidePlayer) return r;
              var n = Wt.a.Get().GetConcurrentStreams(this.props) > 1,
                i = Tt.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
                a = s.createElement(
                  "div",
                  { className: At.a.rightPanel },
                  s.createElement(Ht, {
                    key: "right" + i,
                    ImgUrl: e.right_panel,
                  })
                ),
                o = s.createElement(Ht, {
                  key: "left" + i,
                  ImgUrl: e.left_panel,
                });
              if (i < 11) {
                var c = Ve.b.GetAppIDListForBroadcasterSteamID(e.steamid);
                c && 1 === c.length && (i = c[0]);
              }
              return (
                !(
                  (this.props.promotionName ||
                    this.props.bIsPreview ||
                    this.props.subid ||
                    this.props.bundleid) &&
                  i >= 11
                ) ||
                  (this.props.event &&
                    this.props.event.jsondata.broadcast_force_banner) ||
                  ((a = s.createElement(Ft, {
                    key: "mini" + e.accountid,
                    appid: i,
                  })),
                  (r.bRightPanelArtworkOrEmpty = !1)),
                n && !t
                  ? ((r.leftPanel = s.createElement(Yt, {
                      broadcastEmbedContext: this.props,
                      key: "selector" + i,
                      curStream: e,
                      onStreamSelect: this.onStreamSelect,
                      fnFilterStreams: this.props.fnFilterStreams,
                      bShowCapsuleArt: this.props.bShowCapsuleArt,
                    })),
                    (r.rightPanel = a))
                  : t
                  ? ((r.leftPanel = s.createElement("div", null)),
                    (r.rightPanel = s.createElement(Xt, {
                      stream: e,
                      orientation: "rightside",
                    })),
                    (r.bRightPanelArtworkOrEmpty = !1))
                  : ((r.leftPanel = o), (r.rightPanel = a)),
                r
              );
            }),
            (t.prototype.render = function () {
              var e,
                t,
                i = this;
              if (!r.IsBroadcastAllowed() || this.state.bLoadingPreference)
                return null;
              var a = Wt.a.Get().GetPlayReadyStream(this.props);
              if (a) {
                var o = "show" === Wt.a.Get().GetChatVisibility(),
                  c = this.props,
                  u = c.event,
                  l = c.language,
                  d = c.fnRenderBroadcastContext;
                u &&
                  (a = Object(n.a)(Object(n.a)({}, a), {
                    left_panel: u.GetImageURL(
                      "broadcast_left",
                      l || Object(Ue.k)(Oe.d.LANGUAGE)
                    ),
                    right_panel: u.GetImageURL(
                      "broadcast_right",
                      l || Object(Ue.k)(Oe.d.LANGUAGE)
                    ),
                    store_title: u.GetBroadcastTitle(
                      l || Object(Ue.k)(Oe.d.LANGUAGE)
                    ),
                    broadcast_chat_visibility: u.GetBroadcastChatVisibility(),
                  }));
                var m = this.ConstructSidePanels(a, o),
                  p = a.store_title ? a.store_title : a.title,
                  f = Wt.a.Get().GetConcurrentStreams(this.props) > 1;
                u && u.jsondata && u.jsondata.broadcast_gradient_inner_color,
                  u && u.jsondata && u.jsondata.broadcast_gradient_outer_color;
                return s.createElement(
                  s.Fragment,
                  null,
                  s.createElement(
                    "div",
                    {
                      className: "broadcast_embed_top_ctn_trgt",
                      style: this.state.style,
                    },
                    s.createElement(
                      "div",
                      {
                        className: Object(at.a)(
                          ((e = {}),
                          (e[At.a.bordered_container] = !0),
                          (e[At.a.Event] = Boolean(u)),
                          (e.broadcast_brd_ctn_trgt = !0),
                          e)
                        ),
                      },
                      s.createElement(
                        "div",
                        {
                          className: Object(at.a)(
                            At.a.bordered_title,
                            "bordered_title_trgt"
                          ),
                        },
                        s.createElement(It.i, null),
                        p,
                        s.createElement(
                          "div",
                          { className: At.a.bordered_corner_container },
                          !this.state.bExpanded &&
                            s.createElement("div", {
                              className: At.a.broadcast_settings_icon,
                              "data-tooltip-text": Object(Me.f)(
                                "#StoreBroadcast_Change_store_Broadcast_settings"
                              ),
                              onClick: function () {
                                return window.open(
                                  Oe.d.STORE_BASE_URL +
                                    "account/preferences/#store_broadcast_settings"
                                );
                              },
                            }),
                          s.createElement("div", {
                            className: this.state.bExpanded
                              ? At.a.bordered_corner_expanded
                              : At.a.bordered_corner_shrinked,
                            "data-tooltip-text": Object(Me.f)(
                              "#StoreBroadcast_Hide_Tooltip"
                            ),
                            onClick: this.ToggleBroadcastExpandShrink,
                          })
                        ),
                        Boolean(a.gamedata_subtitle) &&
                          s.createElement(
                            "div",
                            { className: At.a.bordered_subtitle },
                            a.gamedata_subtitle
                          )
                      ),
                      this.state.bExpanded &&
                        s.createElement(
                          "div",
                          {
                            className: Object(at.a)(
                              ((t = {}),
                              (t[At.a.container] = !0),
                              (t.embeddable_ctn_trgt = !0),
                              (t.multistream = f),
                              (t.broadcast_right_panel_simple =
                                m.bRightPanelArtworkOrEmpty),
                              (t.broadcast_chat_expanded = o),
                              t)
                            ),
                            style: Object(n.a)({}, this.state.innerStyle),
                            onTransitionEnd: this.OnShrinkTransitionEnd,
                          },
                          m.leftPanel,
                          s.createElement(Vt, {
                            stream: a,
                            bStartMuted: this.state.bStartMuted,
                            fnRenderBroadcastContext: d,
                            fnOnVideoEnd: function () {
                              var e, t;
                              a.nAppIDVOD && i.PlayTopNonVOD(),
                                null === (t = (e = i.props).fnOnVideoEnd) ||
                                  void 0 === t ||
                                  t.call(e);
                            },
                            bWidePlayer: this.props.bWidePlayer,
                          }),
                          m.rightPanel,
                          this.state.bExpanded &&
                            s.createElement(qt, { stream: a, bMultistream: f })
                        )
                    ),
                    Boolean(
                      u && u.jsondata && u.jsondata.broadcast_item_drops_enabled
                    ) && s.createElement(Gt, { event: u }),
                    this.state.bExpanded &&
                      s.createElement(
                        "div",
                        { className: "" + (u ? At.a.Event : "") },
                        s.createElement(qt, { stream: a, bMultistream: f })
                      ),
                    s.createElement("div", { className: At.a.clear_div })
                  )
                );
              }
              return s.createElement("div", {
                className: "NoBroadcastAvailable",
              });
            }),
            Object(n.c)(
              [ot.a],
              t.prototype,
              "ToggleBroadcastExpandShrink",
              null
            ),
            Object(n.c)([ot.a], t.prototype, "OnShrinkTransitionEnd", null),
            Object(n.c)([ot.a], t.prototype, "onStreamSelect", null),
            Object(n.c)([ot.a], t.prototype, "PlayTopNonVOD", null),
            (t = r = Object(n.c)([o.a], t))
          );
        })(s.Component),
        Vt =
          ((t.default = kt),
          (function (e) {
            function t(t) {
              var r = e.call(this, t) || this;
              return (
                (r.m_iVideoContainerRef = s.createRef()),
                (r.state = {
                  bPopout: !1,
                  bPreventPopup: window.screen.width <= 768,
                }),
                r
              );
            }
            return (
              Object(n.d)(t, e),
              (t.prototype.CloseBroadcastPopup = function () {
                var e = Tt.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                  .m_nAppID;
                Object(Wt.e)(e, 7, this.props.stream.snr),
                  this.setState({ bPopout: !1, bPreventPopup: !0 });
              }),
              (t.prototype.OnEnter = function () {
                !this.state.bPreventPopup &&
                  this.state.bPopout &&
                  this.setState({ bPopout: !1 });
              }),
              (t.prototype.OnLeave = function () {
                this.state.bPreventPopup ||
                  this.state.bPopout ||
                  this.setState({ bPopout: !0 });
              }),
              (t.prototype.render = function () {
                var e;
                return s.createElement(
                  "div",
                  { className: At.a.wrapper },
                  s.createElement(
                    xt,
                    { onEnter: this.OnEnter, onLeave: this.OnLeave },
                    s.createElement(
                      "div",
                      {
                        className: Object(at.a)(
                          ((e = {}),
                          (e[At.a.video_placeholder] = !0),
                          (e.video_placeholder_trgt = !0),
                          (e[At.a.WidePlayer] = this.props.bWidePlayer),
                          e)
                        ),
                        ref: this.m_iVideoContainerRef,
                      },
                      s.createElement(
                        "div",
                        {
                          className: this.state.bPopout
                            ? At.a.broadcast_floating
                            : At.a.video_container,
                        },
                        this.state.bPopout &&
                          s.createElement(Kt, {
                            steamIDBroadcast: this.props.stream.steamid,
                            OnPreventPopup: this.CloseBroadcastPopup,
                          }),
                        s.createElement(
                          "div",
                          { className: At.a.BroadcastPlayerContainer },
                          s.createElement(Bt.a, {
                            steamIDBroadcast: this.props.stream.steamid,
                            watchLocation: 6,
                            bStartMuted: this.props.bStartMuted,
                            fnRenderBroadcastContext: this.props
                              .fnRenderBroadcastContext,
                            fnOnVideoEnd: this.props.fnOnVideoEnd,
                            nAppIDVOD: this.props.stream.nAppIDVOD,
                          })
                        )
                      )
                    )
                  )
                );
              }),
              Object(n.c)([ot.a], t.prototype, "CloseBroadcastPopup", null),
              Object(n.c)([ot.a], t.prototype, "OnEnter", null),
              Object(n.c)([ot.a], t.prototype, "OnLeave", null),
              t
            );
          })(s.Component)),
        qt = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.ConstructBroadcastLink = function () {
              var e = this.props.stream,
                t = Tt.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                  .m_nAppID,
                r = Lt.list.find(function (r) {
                  return (
                    r.appid == t &&
                    (!r.broadcasterAccountID ||
                      r.broadcasterAccountID == e.accountid)
                  );
                });
              if (r) {
                var n = r.url;
                return (
                  (Oe.d.IN_CLIENT ||
                    navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
                    navigator.userAgent.indexOf("Valve Steam GameOverlay") >=
                      0 ||
                    navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
                    (n = "steam://openurl/" + n),
                  s.createElement(
                    "a",
                    { href: n },
                    Object(Me.f)("#Broadcast_Embed_Watch_With_Frieds_SteamTV")
                  )
                );
              }
              var i = this.props.stream.steamid,
                a = Oe.d.COMMUNITY_BASE_URL + "broadcast/watch/" + i;
              return s.createElement(
                "a",
                {
                  href: a,
                  className: At.a.external_link,
                  "data-tooltip-text": Object(Me.f)(
                    "#BroadcastWatch_View_Broadcast_Page"
                  ),
                },
                s.createElement(it.E, null)
              );
            }),
            (t.prototype.OnToggleChat = function (e) {
              e.preventDefault();
              var t = Tt.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nAppID;
              Object(Wt.e)(
                t,
                "show" === Wt.a.Get().GetChatVisibility() ? 5 : 4,
                this.props.stream.snr
              ),
                Wt.a.Get().ToggleChatVisibility();
            }),
            (t.prototype.onWatchBroadcastPage = function () {
              var e = Tt.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nAppID;
              Object(Wt.e)(e, 9, this.props.stream.snr);
            }),
            (t.prototype.render = function () {
              var e = this.ConstructBroadcastLink(),
                t = "remove" != Wt.a.Get().GetChatVisibility(),
                r = "hide" === Wt.a.Get().GetChatVisibility(),
                n = Number.parseInt(
                  "" +
                    Tt.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                      .m_nViewerCount
                );
              return s.createElement(
                "div",
                { className: Object(at.a)(At.a.viewer_bar, "viewer_bar") },
                s.createElement(
                  "div",
                  {
                    className: Object(at.a)(At.a.viewer_count, "viewer_count"),
                  },
                  s.createElement(it.zb, null),
                  n.toLocaleString(Me.e.GetPreferredLocales())
                ),
                s.createElement(
                  "div",
                  {
                    className: Object(at.a)(At.a.viewer_links, "viewer_links"),
                  },
                  Boolean(t && !r && this.props.bMultistream) &&
                    s.createElement(
                      "div",
                      { className: At.a.chat_link },
                      s.createElement(
                        "a",
                        {
                          href: "#",
                          className: At.a.ChatToggle,
                          onClick: this.OnToggleChat,
                        },
                        Object(Me.f)("#sale_three_section_show_streams")
                      )
                    ),
                  t &&
                    s.createElement(
                      "div",
                      { className: At.a.chat_link },
                      s.createElement(it.l, null),
                      s.createElement(
                        "a",
                        {
                          href: "#",
                          className: At.a.ChatToggle,
                          onClick: this.OnToggleChat,
                        },
                        Object(Me.f)(
                          r
                            ? "#sale_three_section_show_chat"
                            : "#sale_three_section_hide_chat"
                        )
                      )
                    ),
                  t && s.createElement("span", { className: At.a.ChatToggle }),
                  s.createElement(
                    "a",
                    {
                      href:
                        Oe.d.STORE_BASE_URL +
                        "account/preferences/#store_broadcast_settings",
                      target: Oe.d.IN_CLIENT ? void 0 : "_blank",
                      className: At.a.settings_link,
                      "data-tooltip-text": Object(Me.f)(
                        "#StoreBroadcast_Change_store_Broadcast_settings"
                      ),
                    },
                    s.createElement(it.fb, null)
                  ),
                  e
                )
              );
            }),
            Object(n.c)([ot.a], t.prototype, "OnToggleChat", null),
            Object(n.c)([ot.a], t.prototype, "onWatchBroadcastPage", null),
            (t = Object(n.c)([o.a], t))
          );
        })(s.Component),
        Ht = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props.ImgUrl;
              return s.createElement(
                s.Fragment,
                null,
                e &&
                  s.createElement("img", {
                    className: At.a.side_panels,
                    src: this.props.ImgUrl,
                  }),
                !e && s.createElement("div", { className: At.a.side_panels })
              );
            }),
            t
          );
        })(s.Component),
        Kt = Object(o.a)(function (e) {
          var t = e.steamIDBroadcast,
            r = Tt.a.GetOrCreateBroadcastInfo(t).m_nAppID,
            n = gt.a.GetAppLinkInfo(r);
          return s.createElement(
            "div",
            { className: [At.a.PopOutVideoTitleBar, At.a.NoSeslect].join(" ") },
            Boolean(n)
              ? s.createElement(
                  Ct.a,
                  { type: "app", id: r, className: At.a.PopOutVideoTitleText },
                  Object(Me.f)("#StoreBroadcast_Detault_popout_Title")
                )
              : s.createElement(
                  "div",
                  { className: At.a.PopOutVideoTitleText },
                  Object(Me.f)("#StoreBroadcast_Detault_popout_Title")
                ),
            s.createElement(
              "button",
              {
                className: At.a.PopOutVideoCloseButton,
                "data-tooltip-text": Object(Me.f)(
                  "#StoreBroadcast_close_broadcast_popup"
                ),
                onClick: e.OnPreventPopup,
              },
              s.createElement(it.Db, null)
            )
          );
        }),
        Yt = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.itemRef = s.createRef()), t;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.GetFilteredStreamList = function () {
              var e = this,
                t = Wt.a
                  .Get()
                  .GetStreams(this.props.broadcastEmbedContext)
                  .filter(function (t) {
                    return (
                      !e.props.fnFilterStreams || e.props.fnFilterStreams(t)
                    );
                  });
              return Object(Wt.f)(t), t;
            }),
            (t.prototype.CalculateStreamHeight = function (e) {
              var t = Tt.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
                r = gt.a.GetAppLinkInfo(t);
              return this.props.bShowCapsuleArt &&
                (null == r ? void 0 : r.header_image_url)
                ? parseInt(At.a.strStreamIconCapsuleArtHeight)
                : parseInt(At.a.strStreamIconScreenshotArtHeight);
            }),
            (t.prototype.componentDidMount = function () {
              if (this.itemRef && this.itemRef.current) {
                for (
                  var e = 0, t = 0, r = this.GetFilteredStreamList();
                  t < r.length;
                  t++
                ) {
                  var n = r[t];
                  if (this.props.curStream.accountid == n.accountid) break;
                  e += this.CalculateStreamHeight(n);
                }
                this.itemRef.current.scrollTop = e;
              }
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.GetFilteredStreamList(),
                r = t.map(function (t) {
                  var r;
                  return s.createElement(Jt, {
                    key:
                      null !== (r = t.accountid) && void 0 !== r
                        ? r
                        : t.steamid,
                    stream: t,
                    bSelected: e.props.curStream.accountid == t.accountid,
                    onStreamSelect: e.props.onStreamSelect,
                    bShowCapsuleArt: e.props.bShowCapsuleArt,
                  });
                });
              return s.createElement(
                "div",
                {
                  ref: this.itemRef,
                  className: Object(at.a)(
                    At.a.side_panels,
                    "side_panels",
                    At.a.multistream,
                    t.length > 3 ? At.a.scrollingstreams : ""
                  ),
                },
                r
              );
            }),
            t
          );
        })(s.Component),
        Jt = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          var r;
          return (
            Object(n.d)(t, e),
            (r = t),
            (t.prototype.onClick = function () {
              this.props.onStreamSelect &&
                this.props.onStreamSelect(this.props.stream);
            }),
            (t.prototype.generateThumbnail = function (e) {
              var t,
                r = this.props.stream,
                n = this.props.bSelected
                  ? At.a.stream_icon_selected
                  : At.a.stream_icon;
              if (e) {
                var i = Tt.a.GetOrCreateBroadcastInfo(r.steamid).m_nAppID,
                  a = gt.a.GetAppLinkInfo(
                    null !== (t = r.nAppIDVOD) && void 0 !== t ? t : i
                  ),
                  o = [r.thumbnail_http_address];
                return s.createElement(
                  s.Fragment,
                  null,
                  a &&
                    s.createElement("img", {
                      className: Object(at.a)(
                        n,
                        At.a.stream_icon_hide_on_hover
                      ),
                      src: a.header_image_url,
                    }),
                  s.createElement(Et.b, {
                    className: Object(at.a)(n, At.a.stream_icon_show_on_hover),
                    srcs: o,
                  })
                );
              }
              return s.createElement("img", {
                className: n,
                src: r.thumbnail_http_address,
              });
            }),
            (t.GetClassForStreamPriority = function (e) {
              switch (e) {
                case Wt.b.k_eFeatured:
                  return At.a.stream_featured;
              }
              return null;
            }),
            (t.prototype.render = function () {
              var e,
                t = this.props,
                n = t.stream,
                i = t.bShowCapsuleArt;
              if (!Object(Wt.d)(n)) return null;
              var a = Tt.a.GetOrCreateBroadcastInfo(n.steamid).m_nAppID,
                o = gt.a.GetAppLinkInfo(
                  null !== (e = n.nAppIDVOD) && void 0 !== e ? e : a
                ),
                c = Boolean(i && (null == o ? void 0 : o.header_image_url)),
                u = Number.parseInt("" + n.viewer_count),
                l = !Number.isNaN(u),
                d = !!n.nAppIDVOD && (null == o ? void 0 : o.title);
              return s.createElement(
                "div",
                {
                  className: Object(at.a)(
                    At.a.stream_icon_and_viewer_container,
                    r.GetClassForStreamPriority(n.current_selection_priority),
                    c && At.a.display_capsule_art
                  ),
                },
                s.createElement(
                  Ct.b,
                  { type: "app", id: a },
                  s.createElement(
                    Pt.a,
                    {
                      className: At.a.stream_icon_container,
                      onClick: this.onClick,
                      rootMargin: "100px 0px 100px 0px",
                    },
                    this.generateThumbnail(c),
                    this.props.bSelected &&
                      s.createElement("div", {
                        className: At.a.stream_icon_arrow,
                      })
                  )
                ),
                s.createElement(
                  "div",
                  {
                    className: Object(at.a)(
                      At.a.viewer_count,
                      !l && At.a.vod_title
                    ),
                  },
                  l
                    ? s.createElement(
                        s.Fragment,
                        null,
                        s.createElement(it.zb, null),
                        " ",
                        u.toLocaleString(Me.e.GetPreferredLocales())
                      )
                    : d
                )
              );
            }),
            Object(n.c)([ot.a], t.prototype, "onClick", null),
            (t = r = Object(n.c)([o.a], t))
          );
        })(s.Component),
        Xt = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.render = function () {
              var e = "below" == this.props.orientation,
                t = Tt.a.GetBroadcast(this.props.stream.steamid);
              return t
                ? s.createElement(
                    "div",
                    {
                      className: Object(at.a)(
                        e
                          ? At.a.chat_below_container
                          : At.a.chat_rightside_container,
                        At.a.store_chat_ctn
                      ),
                    },
                    s.createElement(
                      "div",
                      { className: At.a.ChatContainer },
                      s.createElement(pt, {
                        emoticonStore: Wt.g,
                        watchLocation: 6,
                        steamID: this.props.stream.steamid,
                        broadcastID: t.m_ulBroadcastID,
                      })
                    )
                  )
                : null;
            }),
            (t = Object(n.c)([o.a], t))
          );
        })(s.Component);
    },
    dLk7: function (e, t, r) {
      e.exports = {
        StoreSaleWidgetContainer_mini:
          "broadcastwidgets_StoreSaleWidgetContainer_mini_nacWp",
        Action: "broadcastwidgets_Action_2Xpw9",
        WishList: "broadcastwidgets_WishList_3mTSE",
        StoreSaleWidgetImage_mini:
          "broadcastwidgets_StoreSaleWidgetImage_mini_yvW2h",
        StoreSaleImage_mini: "broadcastwidgets_StoreSaleImage_mini_1zSsm",
        StoreSaleWidgetShortDesc_mini:
          "broadcastwidgets_StoreSaleWidgetShortDesc_mini_2ZkfU",
      };
    },
    rKv1: function (e, t, r) {
      e.exports = {
        strStreamIconCapsuleArtHeight: "90px",
        strStreamIconScreenshotArtHeight: "90px",
        bordered_container: "broadcast_embeddable_bordered_container_3zXpF",
        video_placeholder: "broadcast_embeddable_video_placeholder_1KU95",
        embedded_player: "broadcast_embeddable_embedded_player_12fBJ",
        WidePlayer: "broadcast_embeddable_WidePlayer_3zjvr",
        store_chat_ctn: "broadcast_embeddable_store_chat_ctn_21N-V",
        item_drop_ctn: "broadcast_embeddable_item_drop_ctn_ifxDf",
        BorderedContainerPromotion:
          "broadcast_embeddable_BorderedContainerPromotion_-b_1H",
        bordered_title: "broadcast_embeddable_bordered_title_Wsfbq",
        bordered_subtitle: "broadcast_embeddable_bordered_subtitle_3tYei",
        bordered_corner_container:
          "broadcast_embeddable_bordered_corner_container_3IBcN",
        bordered_corner_expanded:
          "broadcast_embeddable_bordered_corner_expanded_ahz31",
        bordered_corner_shrinked:
          "broadcast_embeddable_bordered_corner_shrinked_L8sFY",
        broadcast_settings_icon:
          "broadcast_embeddable_broadcast_settings_icon_37ugZ",
        container: "broadcast_embeddable_container_2yiy6",
        viewer_bar: "broadcast_embeddable_viewer_bar_2Ygph",
        side_panels: "broadcast_embeddable_side_panels_T_zpR",
        multistream: "broadcast_embeddable_multistream_1DS-W",
        wrapper: "broadcast_embeddable_wrapper_1mH-v",
        NoChat: "broadcast_embeddable_NoChat_2QQm1",
        video_container: "broadcast_embeddable_video_container_1gbNx",
        viewer_links: "broadcast_embeddable_viewer_links_2EQpO",
        chat_link: "broadcast_embeddable_chat_link_3a0zX",
        settings_link: "broadcast_embeddable_settings_link_1Thke",
        external_link: "broadcast_embeddable_external_link_1n1BM",
        viewer_count: "broadcast_embeddable_viewer_count_1MrTW",
        vod_title: "broadcast_embeddable_vod_title_2xKaM",
        stream_icon_and_viewer_container:
          "broadcast_embeddable_stream_icon_and_viewer_container_2sbrG",
        display_capsule_art: "broadcast_embeddable_display_capsule_art_SsORV",
        stream_icon_container:
          "broadcast_embeddable_stream_icon_container_2zBOi",
        stream_icon_hide_on_hover:
          "broadcast_embeddable_stream_icon_hide_on_hover_qYFsG",
        stream_icon_show_on_hover:
          "broadcast_embeddable_stream_icon_show_on_hover_29z3N",
        stream_icon: "broadcast_embeddable_stream_icon_1LBYs",
        stream_icon_selected: "broadcast_embeddable_stream_icon_selected_mSpze",
        scrollingstreams: "broadcast_embeddable_scrollingstreams_3aYWl",
        stream_icon_arrow: "broadcast_embeddable_stream_icon_arrow_2Qpu-",
        clear_div: "broadcast_embeddable_clear_div_1oCVb",
        NoSelect: "broadcast_embeddable_NoSelect_3Zm9d",
        broadcast_floating: "broadcast_embeddable_broadcast_floating_2WNxa",
        PopOutVideoTitleBar: "broadcast_embeddable_PopOutVideoTitleBar_184SI",
        PopOutVideoTitleText: "broadcast_embeddable_PopOutVideoTitleText_28O6d",
        PopOutVideoCloseButton:
          "broadcast_embeddable_PopOutVideoCloseButton_3bIsS",
        BroadcastPlayerContainer:
          "broadcast_embeddable_BroadcastPlayerContainer_3VvcX",
        ChatContainer: "broadcast_embeddable_ChatContainer_3kqwu",
        BroadcastAndChat: "broadcast_embeddable_BroadcastAndChat_1aJ9y",
        detail_chat_ctn: "broadcast_embeddable_detail_chat_ctn_IaFns",
        ChatEntry: "broadcast_embeddable_ChatEntry_Rs7El",
        Event: "broadcast_embeddable_Event_1A0NY",
        rightPanel: "broadcast_embeddable_rightPanel_16MsC",
      };
    },
  },
]);
