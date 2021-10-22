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
      r.r(t);
      var n = r("mrSG"),
        i = r("vDqi"),
        a = r.n(i),
        o = r("TyAF"),
        s = r("q1tI"),
        u = r.n(s),
        c = r("2vnA"),
        d = r("TtDX"),
        l = r("A5MU"),
        m = r("bxBv"),
        f = r("u2yL"),
        p = r("WBba"),
        b = r("kLLr"),
        h = r("hRO2"),
        _ = r("OS8t"),
        B = h.Message;
      var y = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_id || _.a(t.M()),
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
                      broadcast_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      thumbnail_upload_address: {
                        n: 2,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      thumbnail_upload_token: {
                        n: 3,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      thumbnail_interval_seconds: {
                        n: 4,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      heartbeat_interval_seconds: {
                        n: 5,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_BeginBroadcastSession_Response";
            }),
            t
          );
        })(B),
        g = (function (e) {
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
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_EndBroadcastSession_Response";
            }),
            t
          );
        })(B),
        w = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.upload_token || _.a(t.M()),
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
                      upload_token: {
                        n: 1,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      upload_address: {
                        n: 2,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      broadcast_upload_id: {
                        n: 3,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      enable_replay: {
                        n: 6,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                      http_address: {
                        n: 7,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_StartBroadcastUpload_Response";
            }),
            t
          );
        })(B),
        v = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_id || _.a(t.M()),
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
                      broadcast_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      upload_token: {
                        n: 2,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      upload_address: {
                        n: 3,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      http_address: {
                        n: 4,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      broadcast_upload_id: {
                        n: 5,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      heartbeat_interval_seconds: {
                        n: 6,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      is_rtmp: { n: 7, br: _.d.readBool, bw: _.h.writeBool },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_BroadcastUploadStarted_Notification";
            }),
            t
          );
        })(B),
        S = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.gameid || _.a(t.M()),
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
                      gameid: {
                        n: 1,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      title: { n: 2, br: _.d.readString, bw: _.h.writeString },
                      num_viewers: {
                        n: 3,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      permission: {
                        n: 4,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                      is_rtmp: { n: 5, br: _.d.readBool, bw: _.h.writeBool },
                      seconds_delay: {
                        n: 6,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                      is_publisher: {
                        n: 7,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                      thumbnail_url: {
                        n: 8,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      update_interval: {
                        n: 9,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                      is_uploading: {
                        n: 10,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                      duration: {
                        n: 11,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      is_replay: { n: 12, br: _.d.readBool, bw: _.h.writeBool },
                      is_capturing_vod: {
                        n: 13,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                      is_store_whitelisted: {
                        n: 14,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastStatus_Response";
            }),
            t
          );
        })(B),
        M = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.thumbnail_url || _.a(t.M()),
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
                      thumbnail_url: {
                        n: 1,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      update_interval: {
                        n: 2,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                      num_viewers: {
                        n: 3,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                      duration: { n: 4, br: _.d.readInt32, bw: _.h.writeInt32 },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastThumbnail_Response";
            }),
            t
          );
        })(B),
        z = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.response || _.a(t.M()),
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
                      response: { n: 1, br: _.d.readEnum, bw: _.h.writeEnum },
                      mpd_url: {
                        n: 2,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      broadcast_id: {
                        n: 3,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      gameid: {
                        n: 4,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      title: { n: 5, br: _.d.readString, bw: _.h.writeString },
                      num_viewers: {
                        n: 6,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      permission: {
                        n: 7,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                      is_rtmp: { n: 8, br: _.d.readBool, bw: _.h.writeBool },
                      seconds_delay: {
                        n: 9,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                      viewer_token: {
                        n: 10,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      hls_m3u8_master_url: {
                        n: 11,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      heartbeat_interval: {
                        n: 12,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                      thumbnail_url: {
                        n: 13,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      is_webrtc: { n: 14, br: _.d.readBool, bw: _.h.writeBool },
                      webrtc_session_id: {
                        n: 15,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      webrtc_offer_sdp: {
                        n: 16,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      webrtc_turn_server: {
                        n: 17,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      is_replay: { n: 18, br: _.d.readBool, bw: _.h.writeBool },
                      duration: {
                        n: 19,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                      cdn_auth_url_parameters: {
                        n: 20,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WatchBroadcast_Response";
            }),
            t
          );
        })(B);
      var C = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.success || _.a(t.M()),
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
                      success: { n: 1, br: _.d.readBool, bw: _.h.writeBool },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_InviteToBroadcast_Response";
            }),
            t
          );
        })(B),
        R = (function (e) {
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
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_SendBroadcastStateToServer_Response";
            }),
            t
          );
        })(B),
        O = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.steamid || _.a(t.M()),
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
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      state: { n: 2, br: _.d.readEnum, bw: _.h.writeEnum },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_BroadcastViewerState_Notification";
            }),
            t
          );
        })(B);
      var j,
        F,
        W = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_id || _.a(t.M()),
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
                      broadcast_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WaitingBroadcastViewer_Notification";
            }),
            t
          );
        })(B),
        T = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_id || _.a(t.M()),
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
                      broadcast_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      broadcast_relay_id: {
                        n: 2,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      upload_result: {
                        n: 3,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      too_many_poor_uploads: {
                        n: 4,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_StopBroadcastUpload_Notification";
            }),
            t
          );
        })(B),
        I = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_id || _.a(t.M()),
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
                      broadcast_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_SessionClosed_Notification";
            }),
            t
          );
        })(B),
        U = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_id || _.a(t.M()),
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
                      broadcast_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      num_viewers: {
                        n: 2,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_BroadcastStatus_Notification";
            }),
            t
          );
        })(B),
        N = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || _.a(t.M()),
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
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      broadcast_channel_name: {
                        n: 2,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      broadcast_channel_avatar: {
                        n: 3,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_BroadcastChannelLive_Notification";
            }),
            t
          );
        })(B),
        x = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.thumbnail_upload_token || _.a(t.M()),
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
                      thumbnail_upload_token: {
                        n: 1,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      thumbnail_broadcast_session_id: {
                        n: 2,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      thumbnail_data: {
                        n: 3,
                        br: _.d.readBytes,
                        bw: _.h.writeBytes,
                      },
                      thumbnail_width: {
                        n: 4,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      thumbnail_height: {
                        n: 5,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_SendThumbnailToRelay_Notification";
            }),
            t
          );
        })(B),
        E = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcaster_steamid || _.a(t.M()),
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
                      broadcaster_steamid: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_ViewerBroadcastInvite_Notification";
            }),
            t
          );
        })(B),
        P = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.chat_id || _.a(t.M()),
              B.initialize(n, r, 0, -1, [4], null),
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
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      view_url_template: {
                        n: 3,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      flair_group_ids: {
                        n: 4,
                        r: !0,
                        q: !0,
                        br: _.d.readUint32,
                        bw: _.h.writeRepeatedUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastChatInfo_Response";
            }),
            t
          );
        })(B),
        G = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.chat_id || _.a(t.M()),
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
                      chat_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      message: {
                        n: 2,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      instance_id: {
                        n: 3,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      language: {
                        n: 4,
                        d: 0,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      country_code: {
                        n: 5,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_PostChatMessage_Request";
            }),
            t
          );
        })(B),
        A = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.persona_name || _.a(t.M()),
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
                      persona_name: {
                        n: 1,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      in_game: { n: 2, br: _.d.readBool, bw: _.h.writeBool },
                      result: { n: 3, br: _.d.readInt32, bw: _.h.writeInt32 },
                      cooldown_time_seconds: {
                        n: 4,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_PostChatMessage_Response";
            }),
            t
          );
        })(B),
        D = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.chat_id || _.a(t.M()),
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
                      chat_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      flair: { n: 2, br: _.d.readString, bw: _.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_UpdateChatMessageFlair_Request";
            }),
            t
          );
        })(B),
        L = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.result || _.a(t.M()),
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
                      result: { n: 1, br: _.d.readInt32, bw: _.h.writeInt32 },
                      chat_id: {
                        n: 2,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      flair: { n: 3, br: _.d.readString, bw: _.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_UpdateChatMessageFlair_Response";
            }),
            t
          );
        })(B),
        k = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.chat_id || _.a(t.M()),
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
                      chat_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      user_steamid: {
                        n: 2,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      muted: { n: 3, br: _.d.readBool, bw: _.h.writeBool },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_MuteBroadcastChatUser_Request";
            }),
            t
          );
        })(B),
        V = (function (e) {
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
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_MuteBroadcastChatUser_Response";
            }),
            t
          );
        })(B),
        q = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.chat_id || _.a(t.M()),
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
                      chat_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      user_steamid: {
                        n: 2,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_RemoveUserChatText_Request";
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
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_RemoveUserChatText_Response";
            }),
            t
          );
        })(B),
        K = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.persona_names || _.a(t.M()),
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
                    fields: { persona_names: { n: 1, c: $, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastChatUserNames_Response";
            }),
            t
          );
        })(B),
        $ = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.steam_id || _.a(t.M()),
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
                      steam_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      persona: {
                        n: 2,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastChatUserNames_Response_PersonaName";
            }),
            t
          );
        })(B),
        Y = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_clip_id || _.a(t.M()),
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
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_StartBuildClip_Response";
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
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBuildClipStatus_Response";
            }),
            t
          );
        })(B),
        X = (function (e) {
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
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_SetClipDetails_Response";
            }),
            t
          );
        })(B),
        Q = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_clip_id || _.a(t.M()),
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
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      video_id: {
                        n: 2,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      channel_id: {
                        n: 3,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      app_id: { n: 4, br: _.d.readUint32, bw: _.h.writeUint32 },
                      accountid_broadcaster: {
                        n: 5,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      accountid_clipmaker: {
                        n: 6,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      video_description: {
                        n: 7,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      start_time: {
                        n: 8,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      length_milliseconds: {
                        n: 9,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      thumbnail_path: {
                        n: 10,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetClipDetails_Response";
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
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_SetRTMPInfo_Response";
            }),
            t
          );
        })(B),
        ee = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_permission || _.a(t.M()),
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
                      broadcast_permission: {
                        n: 1,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                      rtmp_host: {
                        n: 2,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      rtmp_token: {
                        n: 3,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      broadcast_delay: {
                        n: 4,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                      app_id: { n: 5, br: _.d.readUint32, bw: _.h.writeUint32 },
                      required_app_id: {
                        n: 6,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      broadcast_chat_permission: {
                        n: 7,
                        br: _.d.readEnum,
                        bw: _.h.writeEnum,
                      },
                      broadcast_buffer: {
                        n: 8,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                      steamid: {
                        n: 9,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      chat_rate_limit: {
                        n: 10,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      enable_replay: {
                        n: 11,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetRTMPInfo_Response";
            }),
            t
          );
        })(B),
        te = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.upload_stats || _.a(t.M()),
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
                    fields: { upload_stats: { n: 1, c: re, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastUploadStats_Response";
            }),
            t
          );
        })(B),
        re = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.upload_result || _.a(t.M()),
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
                      upload_result: {
                        n: 1,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      time_stopped: {
                        n: 2,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      seconds_uploaded: {
                        n: 3,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      max_viewers: {
                        n: 4,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      resolution_x: {
                        n: 5,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      resolution_y: {
                        n: 6,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      avg_bandwidth: {
                        n: 7,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      total_bytes: {
                        n: 8,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      app_id: { n: 9, br: _.d.readUint32, bw: _.h.writeUint32 },
                      total_unique_viewers: {
                        n: 10,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      total_seconds_watched: {
                        n: 11,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      time_started: {
                        n: 12,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      upload_id: {
                        n: 13,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      local_address: {
                        n: 14,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      remote_address: {
                        n: 15,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      frames_per_second: {
                        n: 16,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      num_representations: {
                        n: 17,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      app_name: {
                        n: 18,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      is_replay: { n: 19, br: _.d.readBool, bw: _.h.writeBool },
                      session_id: {
                        n: 20,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastUploadStats_Response_UploadStats";
            }),
            t
          );
        })(B),
        ne = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.viewer_stats || _.a(t.M()),
              B.initialize(n, r, 0, -1, [1, 2], null),
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
                      viewer_stats: { n: 1, c: ie, r: !0, q: !0 },
                      country_stats: { n: 2, c: ae, r: !0, q: !0 },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastViewerStats_Response";
            }),
            t
          );
        })(B),
        ie = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.time || _.a(t.M()),
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
                      time: { n: 1, br: _.d.readUint32, bw: _.h.writeUint32 },
                      num_viewers: {
                        n: 2,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastViewerStats_Response_ViewerStats";
            }),
            t
          );
        })(B),
        ae = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.country_code || _.a(t.M()),
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
                      country_code: {
                        n: 1,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      num_viewers: {
                        n: 2,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastViewerStats_Response_CountryStats";
            }),
            t
          );
        })(B),
        oe = (function (e) {
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
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCStartResult_Response";
            }),
            t
          );
        })(B),
        se = (function (e) {
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
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCStopped_Response";
            }),
            t
          );
        })(B),
        ue = (function (e) {
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
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCSetAnswer_Response";
            }),
            t
          );
        })(B),
        ce = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.sdp_mid || _.a(t.M()),
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
                      sdp_mid: {
                        n: 1,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      sdp_mline_index: {
                        n: 2,
                        br: _.d.readInt32,
                        bw: _.h.writeInt32,
                      },
                      candidate: {
                        n: 3,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTC_Candidate";
            }),
            t
          );
        })(B),
        de = (function (e) {
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
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCAddHostCandidate_Response";
            }),
            t
          );
        })(B),
        le = (function (e) {
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
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCAddViewerCandidate_Response";
            }),
            t
          );
        })(B),
        me = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.candidate_generation || _.a(t.M()),
              B.initialize(n, r, 0, -1, [2], null),
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
                      candidate_generation: {
                        n: 1,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      candidates: { n: 2, c: ce, r: !0, q: !0 },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCGetHostCandidates_Response";
            }),
            t
          );
        })(B),
        fe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_session_id || _.a(t.M()),
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
                      broadcast_session_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCNeedTURNServer_Notification";
            }),
            t
          );
        })(B),
        pe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.turn_server || _.a(t.M()),
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
                      turn_server: {
                        n: 1,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCLookupTURNServer_Response";
            }),
            t
          );
        })(B),
        be = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_session_id || _.a(t.M()),
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
                      broadcast_session_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      webrtc_session_id: {
                        n: 2,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      viewer_steamid: {
                        n: 3,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      viewer_token: {
                        n: 4,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCStart_Notification";
            }),
            t
          );
        })(B),
        he = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_session_id || _.a(t.M()),
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
                      broadcast_session_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      webrtc_session_id: {
                        n: 2,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      answer: { n: 3, br: _.d.readString, bw: _.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCSetAnswer_Notification";
            }),
            t
          );
        })(B),
        _e = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_session_id || _.a(t.M()),
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
                      broadcast_session_id: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      webrtc_session_id: {
                        n: 2,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      candidate: { n: 3, c: ce },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCAddViewerCandidate_Notification";
            }),
            t
          );
        })(B);
      !(function (e) {
        (e.BeginBroadcastSession = function (e, t) {
          return e.SendMsg("Broadcast.BeginBroadcastSession#1", t, y, {
            ePrivilege: 1,
          });
        }),
          (e.EndBroadcastSession = function (e, t) {
            return e.SendMsg("Broadcast.EndBroadcastSession#1", t, g, {
              ePrivilege: 1,
            });
          }),
          (e.StartBroadcastUpload = function (e, t) {
            return e.SendMsg("Broadcast.StartBroadcastUpload#1", t, w, {
              ePrivilege: 1,
            });
          }),
          (e.NotifyBroadcastUploadStop = function (e, t) {
            return e.SendNotification(
              "Broadcast.NotifyBroadcastUploadStop#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.WatchBroadcast = function (e, t) {
            return e.SendMsg("Broadcast.WatchBroadcast#1", t, z, {
              ePrivilege: 2,
            });
          }),
          (e.HeartbeatBroadcast = function (e, t) {
            return e.SendNotification("Broadcast.HeartbeatBroadcast#1", t, {
              ePrivilege: 2,
            });
          }),
          (e.StopWatchingBroadcast = function (e, t) {
            return e.SendNotification("Broadcast.StopWatchingBroadcast#1", t, {
              ePrivilege: 2,
            });
          }),
          (e.GetBroadcastStatus = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastStatus#1", t, S, {
              ePrivilege: 2,
            });
          }),
          (e.GetBroadcastThumbnail = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastThumbnail#1", t, M, {
              ePrivilege: 2,
            });
          }),
          (e.InviteToBroadcast = function (e, t) {
            return e.SendMsg("Broadcast.InviteToBroadcast#1", t, C, {
              ePrivilege: 1,
            });
          }),
          (e.SendBroadcastStateToServer = function (e, t) {
            return e.SendMsg("Broadcast.SendBroadcastStateToServer#1", t, R, {
              ePrivilege: 1,
            });
          }),
          (e.NotifyBroadcastSessionHeartbeat = function (e, t) {
            return e.SendNotification(
              "Broadcast.NotifyBroadcastSessionHeartbeat#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.GetBroadcastChatInfo = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastChatInfo#1", t, P, {
              ePrivilege: 2,
            });
          }),
          (e.PostChatMessage = function (e, t) {
            return e.SendMsg("Broadcast.PostChatMessage#1", t, A, {
              ePrivilege: 3,
            });
          }),
          (e.UpdateChatMessageFlair = function (e, t) {
            return e.SendMsg("Broadcast.UpdateChatMessageFlair#1", t, L, {
              ePrivilege: 1,
            });
          }),
          (e.MuteBroadcastChatUser = function (e, t) {
            return e.SendMsg("Broadcast.MuteBroadcastChatUser#1", t, V, {
              ePrivilege: 3,
            });
          }),
          (e.RemoveUserChatText = function (e, t) {
            return e.SendMsg("Broadcast.RemoveUserChatText#1", t, H, {
              ePrivilege: 3,
            });
          }),
          (e.GetBroadcastChatUserNames = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastChatUserNames#1", t, K, {
              ePrivilege: 1,
            });
          }),
          (e.StartBuildClip = function (e, t) {
            return e.SendMsg("Broadcast.StartBuildClip#1", t, Y, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBuildClipStatus = function (e, t) {
            return e.SendMsg("Broadcast.GetBuildClipStatus#1", t, J, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SetClipDetails = function (e, t) {
            return e.SendMsg("Broadcast.SetClipDetails#1", t, X, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetClipDetails = function (e, t) {
            return e.SendMsg("Broadcast.GetClipDetails#1", t, Q, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SetRTMPInfo = function (e, t) {
            return e.SendMsg("Broadcast.SetRTMPInfo#1", t, Z, {
              ePrivilege: 1,
            });
          }),
          (e.GetRTMPInfo = function (e, t) {
            return e.SendMsg("Broadcast.GetRTMPInfo#1", t, ee, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.NotifyWebRTCHaveTURNServer = function (e, t) {
            return e.SendNotification(
              "Broadcast.NotifyWebRTCHaveTURNServer#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.WebRTCStartResult = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCStartResult#1", t, oe, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCStopped = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCStopped#1", t, se, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCSetAnswer = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCSetAnswer#1", t, ue, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCLookupTURNServer = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCLookupTURNServer#1", t, pe, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCAddHostCandidate = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCAddHostCandidate#1", t, de, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCAddViewerCandidate = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCAddViewerCandidate#1", t, le, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCGetHostCandidates = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCGetHostCandidates#1", t, me, {
              ePrivilege: 1,
            });
          }),
          (e.GetBroadcastUploadStats = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastUploadStats#1", t, te, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastViewerStats = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastViewerStats#1", t, ne, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          });
      })(j || (j = {})),
        (function (e) {
          (e.NotifyBroadcastViewerStateHandler = {
            name: "BroadcastClient.NotifyBroadcastViewerState#1",
            request: O,
          }),
            (e.NotifyWaitingBroadcastViewerHandler = {
              name: "BroadcastClient.NotifyWaitingBroadcastViewer#1",
              request: W,
            }),
            (e.NotifyBroadcastUploadStartedHandler = {
              name: "BroadcastClient.NotifyBroadcastUploadStarted#1",
              request: v,
            }),
            (e.NotifyStopBroadcastUploadHandler = {
              name: "BroadcastClient.NotifyStopBroadcastUpload#1",
              request: T,
            }),
            (e.NotifySessionClosedHandler = {
              name: "BroadcastClient.NotifySessionClosed#1",
              request: I,
            }),
            (e.NotifyViewerBroadcastInviteHandler = {
              name: "BroadcastClient.NotifyViewerBroadcastInvite#1",
              request: E,
            }),
            (e.NotifyBroadcastStatusHandler = {
              name: "BroadcastClient.NotifyBroadcastStatus#1",
              request: U,
            }),
            (e.NotifyBroadcastChannelLiveHandler = {
              name: "BroadcastClient.NotifyBroadcastChannelLive#1",
              request: N,
            }),
            (e.SendThumbnailToRelayHandler = {
              name: "BroadcastClient.SendThumbnailToRelay#1",
              request: x,
            }),
            (e.NotifyWebRTCNeedTURNServerHandler = {
              name: "BroadcastClient.NotifyWebRTCNeedTURNServer#1",
              request: fe,
            }),
            (e.NotifyWebRTCStartHandler = {
              name: "BroadcastClient.NotifyWebRTCStart#1",
              request: be,
            }),
            (e.NotifyWebRTCSetAnswerHandler = {
              name: "BroadcastClient.NotifyWebRTCSetAnswer#1",
              request: he,
            }),
            (e.NotifyWebRTCAddViewerCandidateHandler = {
              name: "BroadcastClient.NotifyWebRTCAddViewerCandidate#1",
              request: _e,
            });
        })(F || (F = {}));
      var Be = h.Message;
      var ye,
        ge = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
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
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_CreateBroadcastChannel_Response";
            }),
            t
          );
        })(Be),
        we = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
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
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      unique_name: {
                        n: 2,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      steamid: {
                        n: 3,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelID_Response";
            }),
            t
          );
        })(Be),
        ve = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return Be.initialize(r, t, 0, -1, void 0, null), r;
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
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_SetBroadcastChannelProfile_Response";
            }),
            t
          );
        })(Be),
        Se = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.unique_name || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
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
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      owner_steamid: {
                        n: 2,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      name: { n: 3, br: _.d.readString, bw: _.h.writeString },
                      language: {
                        n: 4,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      headline: {
                        n: 5,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      summary: {
                        n: 6,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      schedule: {
                        n: 7,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      rules: { n: 8, br: _.d.readString, bw: _.h.writeString },
                      panels: { n: 9, br: _.d.readString, bw: _.h.writeString },
                      is_partnered: {
                        n: 10,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelProfile_Response";
            }),
            t
          );
        })(Be),
        Me = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.replace_image_hash || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
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
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_SetBroadcastChannelImage_Response";
            }),
            t
          );
        })(Be),
        ze = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.images || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
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
                    fields: { images: { n: 1, c: Ce, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelImages_Response";
            }),
            t
          );
        })(Be),
        Ce = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.image_type || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
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
                      image_type: { n: 1, br: _.d.readEnum, bw: _.h.writeEnum },
                      image_path: {
                        n: 2,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      image_index: {
                        n: 3,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelImages_Response_Images";
            }),
            t
          );
        })(Be),
        Re = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.links || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
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
                    fields: { links: { n: 1, c: Oe, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelLinks_Response";
            }),
            t
          );
        })(Be),
        Oe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.link_index || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
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
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      url: { n: 2, br: _.d.readString, bw: _.h.writeString },
                      link_description: {
                        n: 3,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      left: { n: 4, br: _.d.readUint32, bw: _.h.writeUint32 },
                      top: { n: 5, br: _.d.readUint32, bw: _.h.writeUint32 },
                      width: { n: 6, br: _.d.readUint32, bw: _.h.writeUint32 },
                      height: { n: 7, br: _.d.readUint32, bw: _.h.writeUint32 },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelLinks_Response_Links";
            }),
            t
          );
        })(Be),
        je = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return Be.initialize(r, t, 0, -1, void 0, null), r;
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
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_SetBroadcastChannelLinkRegions_Response";
            }),
            t
          );
        })(Be),
        Fe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.is_live || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
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
                      is_live: { n: 1, br: _.d.readBool, bw: _.h.writeBool },
                      is_disabled: {
                        n: 2,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                      appid: { n: 3, br: _.d.readUint32, bw: _.h.writeUint32 },
                      viewers: {
                        n: 4,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      views: {
                        n: 5,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      broadcaster_steamid: {
                        n: 6,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      thumbnail_url: {
                        n: 7,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      followers: {
                        n: 8,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      subscribers: {
                        n: 9,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      unique_name: {
                        n: 10,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      broadcast_session_id: {
                        n: 11,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelStatus_Response";
            }),
            t
          );
        })(Be),
        We = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
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
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      unique_name: {
                        n: 2,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      name: { n: 3, br: _.d.readString, bw: _.h.writeString },
                      appid: { n: 4, br: _.d.readUint32, bw: _.h.writeUint32 },
                      viewers: {
                        n: 5,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      views: {
                        n: 6,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      thumbnail_url: {
                        n: 7,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      followers: {
                        n: 8,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      headline: {
                        n: 9,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      avatar_url: {
                        n: 10,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      broadcaster_steamid: {
                        n: 11,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      subscribers: {
                        n: 12,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      background_url: {
                        n: 13,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      is_featured: {
                        n: 14,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                      is_disabled: {
                        n: 15,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                      is_live: { n: 16, br: _.d.readBool, bw: _.h.writeBool },
                      language: {
                        n: 17,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      reports: {
                        n: 18,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      is_partnered: {
                        n: 19,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "GetBroadcastChannelEntry";
            }),
            t
          );
        })(Be),
        Te = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
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
                    fields: { results: { n: 1, c: We, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetFollowedChannels_Response";
            }),
            t
          );
        })(Be),
        Ie = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
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
                    fields: { results: { n: 1, c: We, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetSubscribedChannels_Response";
            }),
            t
          );
        })(Be),
        Ue = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.is_followed || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
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
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_FollowBroadcastChannel_Response";
            }),
            t
          );
        })(Be),
        Ne = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.is_subscribed || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
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
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_SubscribeBroadcastChannel_Response";
            }),
            t
          );
        })(Be),
        xe = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return Be.initialize(r, t, 0, -1, void 0, null), r;
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
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_ReportBroadcastChannel_Response";
            }),
            t
          );
        })(Be),
        Ee = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.is_followed || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
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
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                      is_subscribed: {
                        n: 2,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelInteraction_Response";
            }),
            t
          );
        })(Be),
        Pe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.appid || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [5], null),
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
                      appid: { n: 1, br: _.d.readUint32, bw: _.h.writeUint32 },
                      name: { n: 2, br: _.d.readString, bw: _.h.writeString },
                      image: { n: 3, br: _.d.readString, bw: _.h.writeString },
                      viewers: {
                        n: 4,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      channels: { n: 5, c: We, r: !0, q: !0 },
                      release_date: {
                        n: 6,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      developer: {
                        n: 7,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      publisher: {
                        n: 8,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_Game";
            }),
            t
          );
        })(Be),
        Ge = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
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
                    fields: { results: { n: 1, c: Pe, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetGames_Response";
            }),
            t
          );
        })(Be),
        Ae = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
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
                    fields: { results: { n: 1, c: We, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetChannels_Response";
            }),
            t
          );
        })(Be),
        De = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcasters || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
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
                    fields: { broadcasters: { n: 1, c: Le, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelBroadcasters_Response";
            }),
            t
          );
        })(Be),
        Le = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.steamid || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
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
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      name: { n: 2, br: _.d.readString, bw: _.h.writeString },
                      rtmp_token: {
                        n: 3,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster";
            }),
            t
          );
        })(Be),
        ke = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.issuer_steamid || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
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
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      chatter_steamid: {
                        n: 2,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      time_expires: {
                        n: 3,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      permanent: { n: 4, br: _.d.readBool, bw: _.h.writeBool },
                      name: { n: 5, br: _.d.readString, bw: _.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_ChatBan";
            }),
            t
          );
        })(Be),
        Ve = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
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
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      chatter_steamid: {
                        n: 2,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      duration: {
                        n: 3,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      permanent: { n: 4, br: _.d.readBool, bw: _.h.writeBool },
                      undo: { n: 5, br: _.d.readBool, bw: _.h.writeBool },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AddChatBan_Request";
            }),
            t
          );
        })(Be),
        qe = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return Be.initialize(r, t, 0, -1, void 0, null), r;
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
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AddChatBan_Response";
            }),
            t
          );
        })(Be),
        He = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
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
                    fields: { results: { n: 1, c: ke, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetChatBans_Response";
            }),
            t
          );
        })(Be),
        Ke = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
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
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      moderator_steamid: {
                        n: 2,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      undo: { n: 3, br: _.d.readBool, bw: _.h.writeBool },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AddChatModerator_Request";
            }),
            t
          );
        })(Be),
        $e = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return Be.initialize(r, t, 0, -1, void 0, null), r;
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
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AddChatModerator_Response";
            }),
            t
          );
        })(Be),
        Ye = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
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
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetChatModerators_Request";
            }),
            t
          );
        })(Be),
        Je = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.steamid || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
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
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      name: { n: 2, br: _.d.readString, bw: _.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_ChatModerator";
            }),
            t
          );
        })(Be),
        Xe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
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
                    fields: { results: { n: 1, c: Je, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetChatModerators_Response";
            }),
            t
          );
        })(Be),
        Qe = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return Be.initialize(r, t, 0, -1, void 0, null), r;
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
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AddWordBan_Response";
            }),
            t
          );
        })(Be),
        Ze = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
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
                        br: _.d.readString,
                        bw: _.h.writeRepeatedString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetWordBans_Response";
            }),
            t
          );
        })(Be),
        et = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
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
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_JoinChat_Request";
            }),
            t
          );
        })(Be),
        tt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.chat_id || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [3], null),
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
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      view_url_template: {
                        n: 2,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      flair_group_ids: {
                        n: 3,
                        r: !0,
                        q: !0,
                        br: _.d.readUint64String,
                        bw: _.h.writeRepeatedUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_JoinChat_Response";
            }),
            t
          );
        })(Be),
        rt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
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
                    fields: { results: { n: 1, c: We, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_Search_Response";
            }),
            t
          );
        })(Be),
        nt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.stream_live_email || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
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
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                      stream_live_notification: {
                        n: 2,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetSteamTVUserSettings_Response";
            }),
            t
          );
        })(Be),
        it = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return Be.initialize(r, t, 0, -1, void 0, null), r;
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
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_SetSteamTVUserSettings_Response";
            }),
            t
          );
        })(Be),
        at = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
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
                    fields: { results: { n: 1, c: We, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetMyBroadcastChannels_Response";
            }),
            t
          );
        })(Be),
        ot = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcasts || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
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
                    fields: { broadcasts: { n: 1, c: We, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_Takeover";
            }),
            t
          );
        })(Be),
        st = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcasts || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
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
                      broadcasts: { n: 1, c: We, r: !0, q: !0 },
                      appid: { n: 2, br: _.d.readUint32, bw: _.h.writeUint32 },
                      title: { n: 3, br: _.d.readString, bw: _.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_SingleGame";
            }),
            t
          );
        })(Be),
        ut = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.appid || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
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
                      appid: { n: 1, br: _.d.readUint32, bw: _.h.writeUint32 },
                      game_name: {
                        n: 2,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      broadcast: { n: 3, c: We },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "GameListEntry";
            }),
            t
          );
        })(Be),
        ct = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.entries || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
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
                      entries: { n: 1, c: ut, r: !0, q: !0 },
                      title: { n: 2, br: _.d.readString, bw: _.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_GameList";
            }),
            t
          );
        })(Be),
        dt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcasts || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
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
                      broadcasts: { n: 1, c: We, r: !0, q: !0 },
                      title: { n: 2, br: _.d.readString, bw: _.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_QuickExplore";
            }),
            t
          );
        })(Be),
        lt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcasts || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
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
                      broadcasts: { n: 1, c: We, r: !0, q: !0 },
                      title: { n: 2, br: _.d.readString, bw: _.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_ConveyorBelt";
            }),
            t
          );
        })(Be),
        mt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
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
                      broadcast: { n: 1, c: We },
                      title: { n: 2, br: _.d.readString, bw: _.h.writeString },
                      chat_group_id: {
                        n: 3,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_WatchParty";
            }),
            t
          );
        })(Be),
        ft = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
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
                      broadcast: { n: 1, c: We },
                      title: { n: 2, br: _.d.readString, bw: _.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_Developer";
            }),
            t
          );
        })(Be),
        pt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.title || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
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
                      title: { n: 1, br: _.d.readString, bw: _.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_Event";
            }),
            t
          );
        })(Be),
        bt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.template_type || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
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
                        br: _.d.readEnum,
                        bw: _.h.writeEnum,
                      },
                      takeover: { n: 2, c: ot },
                      single_game: { n: 3, c: st },
                      game_list: { n: 4, c: ct },
                      quick_explore: { n: 5, c: dt },
                      conveyor_belt: { n: 6, c: lt },
                      watch_party: { n: 7, c: mt },
                      developer: { n: 8, c: ft },
                      event: { n: 9, c: pt },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageContentRow";
            }),
            t
          );
        })(Be),
        ht = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.rows || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
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
                    fields: { rows: { n: 1, c: bt, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetHomePageContents_Response";
            }),
            t
          );
        })(Be),
        _t = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_clip_id || _.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
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
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      channel_id: {
                        n: 2,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                      app_id: { n: 3, br: _.d.readUint32, bw: _.h.writeUint32 },
                      broadcaster_steamid: {
                        n: 4,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      creator_steamid: {
                        n: 5,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      video_description: {
                        n: 6,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                      live_time: {
                        n: 7,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      length_ms: {
                        n: 8,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      thumbnail_path: {
                        n: 9,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_BroadcastClipInfo";
            }),
            t
          );
        })(Be),
        Bt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.clips || _.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
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
                      clips: { n: 1, c: _t, r: !0, q: !0 },
                      thumbnail_host: {
                        n: 2,
                        br: _.d.readString,
                        bw: _.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelClips_Response";
            }),
            t
          );
        })(Be),
        yt = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return Be.initialize(r, t, 0, -1, void 0, null), r;
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
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AppCheer_Response";
            }),
            t
          );
        })(Be);
      !(function (e) {
        (e.CreateBroadcastChannel = function (e, t) {
          return e.SendMsg("SteamTV.CreateBroadcastChannel#1", t, ge, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
          (e.GetBroadcastChannelID = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelID#1", t, we, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelProfile = function (e, t) {
            return e.SendMsg("SteamTV.SetBroadcastChannelProfile#1", t, ve, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelProfile = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelProfile#1", t, Se, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelImage = function (e, t) {
            return e.SendMsg("SteamTV.SetBroadcastChannelImage#1", t, Me, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelImages = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelImages#1", t, ze, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelLinkRegions = function (e, t) {
            return e.SendMsg(
              "SteamTV.SetBroadcastChannelLinkRegions#1",
              t,
              je,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 }
            );
          }),
          (e.GetBroadcastChannelLinks = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelLinks#1", t, Re, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.GetBroadcastChannelBroadcasters = function (e, t) {
            return e.SendMsg(
              "SteamTV.GetBroadcastChannelBroadcasters#1",
              t,
              De,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 }
            );
          }),
          (e.GetFollowedChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetFollowedChannels#1", t, Te, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetSubscribedChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetSubscribedChannels#1", t, Ie, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelStatus = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelStatus#1", t, Fe, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.FollowBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.FollowBroadcastChannel#1", t, Ue, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SubscribeBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.SubscribeBroadcastChannel#1", t, Ne, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelClips = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelClips#1", t, Bt, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.ReportBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.ReportBroadcastChannel#1", t, xe, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelInteraction = function (e, t) {
            return e.SendMsg(
              "SteamTV.GetBroadcastChannelInteraction#1",
              t,
              Ee,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 }
            );
          }),
          (e.GetGames = function (e, t) {
            return e.SendMsg("SteamTV.GetGames#1", t, Ge, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetChannels#1", t, Ae, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.AddChatBan = function (e, t) {
            return e.SendMsg("SteamTV.AddChatBan#1", t, qe, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetChatBans = function (e, t) {
            return e.SendMsg("SteamTV.GetChatBans#1", t, He, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.AddChatModerator = function (e, t) {
            return e.SendMsg("SteamTV.AddChatModerator#1", t, $e, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetChatModerators = function (e, t) {
            return e.SendMsg("SteamTV.GetChatModerators#1", t, Xe, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.AddWordBan = function (e, t) {
            return e.SendMsg("SteamTV.AddWordBan#1", t, Qe, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetWordBans = function (e, t) {
            return e.SendMsg("SteamTV.GetWordBans#1", t, Ze, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.JoinChat = function (e, t) {
            return e.SendMsg("SteamTV.JoinChat#1", t, tt, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.Search = function (e, t) {
            return e.SendMsg("SteamTV.Search#1", t, rt, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.GetSteamTVUserSettings = function (e, t) {
            return e.SendMsg("SteamTV.GetSteamTVUserSettings#1", t, nt, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SetSteamTVUserSettings = function (e, t) {
            return e.SendMsg("SteamTV.SetSteamTVUserSettings#1", t, it, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetMyBroadcastChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetMyBroadcastChannels#1", t, at, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetHomePageContents = function (e, t) {
            return e.SendMsg("SteamTV.GetHomePageContents#1", t, ht, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.AppCheer = function (e, t) {
            return e.SendMsg("SteamTV.AppCheer#1", t, yt, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(ye || (ye = {}));
      var gt,
        wt,
        vt = r("qiKp"),
        St = r("TLQK"),
        Mt = r("XxJJ"),
        zt = r("lkRc"),
        Ct = h.Message,
        Rt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.bincremental || _.a(t.M()),
              Ct.initialize(n, r, 0, -1, [2], null),
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
                      bincremental: {
                        n: 1,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                      friends: { n: 2, c: Ot, r: !0, q: !0 },
                      max_friend_count: {
                        n: 3,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      active_friend_count: {
                        n: 4,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      friends_limit_hit: {
                        n: 5,
                        br: _.d.readBool,
                        bw: _.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CMsgClientFriendsList";
            }),
            t
          );
        })(Ct),
        Ot = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.ulfriendid || _.a(t.M()),
              Ct.initialize(n, r, 0, -1, void 0, null),
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
                      ulfriendid: {
                        n: 1,
                        br: _.d.readFixed64String,
                        bw: _.h.writeFixed64String,
                      },
                      efriendrelationship: {
                        n: 2,
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CMsgClientFriendsList_Friend";
            }),
            t
          );
        })(Ct),
        jt = h.Message,
        Ft = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.groupid || _.a(t.M()),
              jt.initialize(n, r, 0, -1, [3], null),
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
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      name: { n: 2, br: _.d.readString, bw: _.h.writeString },
                      accountid_members: {
                        n: 3,
                        r: !0,
                        q: !0,
                        br: _.d.readUint32,
                        bw: _.h.writeRepeatedUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsListCategory";
            }),
            t
          );
        })(jt),
        Wt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.categories || _.a(t.M()),
              jt.initialize(n, r, 0, -1, [1], null),
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
                    fields: { categories: { n: 1, c: Ft, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_GetCategories_Response";
            }),
            t
          );
        })(jt),
        Tt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.accountid || _.a(t.M()),
              jt.initialize(n, r, 0, -1, void 0, null),
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
                        br: _.d.readUint32,
                        bw: _.h.writeUint32,
                      },
                      clanid: { n: 2, br: _.d.readUint32, bw: _.h.writeUint32 },
                      chat_group_id: {
                        n: 3,
                        br: _.d.readUint64String,
                        bw: _.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsListFavoriteEntry";
            }),
            t
          );
        })(jt),
        It = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.favorites || _.a(t.M()),
              jt.initialize(n, r, 0, -1, [1], null),
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
                    fields: { favorites: { n: 1, c: Tt, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_GetFavorites_Response";
            }),
            t
          );
        })(jt),
        Ut = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return jt.initialize(r, t, 0, -1, void 0, null), r;
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
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_SetFavorites_Response";
            }),
            t
          );
        })(jt),
        Nt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.favorites || _.a(t.M()),
              jt.initialize(n, r, 0, -1, [1], null),
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
                    fields: { favorites: { n: 1, c: Tt, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_FavoritesChanged_Notification";
            }),
            t
          );
        })(jt),
        xt = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return jt.initialize(r, t, 0, -1, void 0, null), r;
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
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_GetFriendsList_Request";
            }),
            t
          );
        })(jt),
        Et = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.friendslist || _.a(t.M()),
              jt.initialize(n, r, 0, -1, void 0, null),
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
                    fields: { friendslist: { n: 1, c: Rt } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = _.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return _.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return _.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new h.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return _.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new h.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              _.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new h.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_GetFriendsList_Response";
            }),
            t
          );
        })(jt);
      !(function (e) {
        (e.GetCategories = function (e, t) {
          return e.SendMsg("FriendsList.GetCategories#1", t, Wt, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
          (e.GetFriendsList = function (e, t) {
            return e.SendMsg("FriendsList.GetFriendsList#1", t, Et, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.GetFavorites#1", t, It, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.SetFavorites#1", t, Ut, {
              ePrivilege: 1,
            });
          });
      })(gt || (gt = {})),
        (function (e) {
          e.FavoritesChangedHandler = {
            name: "FriendsListClient.FavoritesChanged#1",
            request: Nt,
          };
        })(wt || (wt = {}));
      var Pt = r("oFam"),
        Gt = r("kyHq"),
        At = r("uobO"),
        Dt = (function () {
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
              (this.m_TextFilterPreferences = new Gt.j());
            var e = new Pt.a();
            (this.m_TextFilterPreferences.eTextFilterSetting = e.text_filter_setting()),
              (this.m_TextFilterPreferences.bIgnoreFriends = e.text_filter_ignore_friends()),
              (this.m_TextFilterWords = new Pt.l());
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
                        return n.sent(), [4, this.LoadLanguage(zt.d.LANGUAGE)];
                      case 6:
                        return (
                          n.sent(),
                          "english" === zt.d.LANGUAGE
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
                        (this.m_TextFilterWords = Pt.l.fromObject(e)),
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
                var e, t, r, i, o, s, u, c;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (((e = new Pt.a()), 0 === this.m_unAccountID))
                        return [3, 7];
                      n.label = 1;
                    case 1:
                      return (
                        n.trys.push([1, 6, , 7]),
                        this.m_Transport
                          ? ((t = m.b.Init(Pt.b)),
                            [
                              4,
                              Pt.m.GetCommunityPreferences(this.m_Transport, t),
                            ])
                          : [3, 3]
                      );
                    case 2:
                      return (
                        (r = n.sent()), (e = r.Body().preferences()), [3, 5]
                      );
                    case 3:
                      return (
                        (u = {
                          sessionid: zt.d.SESSIONID,
                          origin: Object(zt.f)(),
                        }),
                        [
                          4,
                          a.a.get(
                            zt.d.COMMUNITY_BASE_URL +
                              "textfilter/ajaxgetcommunitypreferences",
                            { params: u, withCredentials: !0 }
                          ),
                        ]
                      );
                    case 4:
                      (c = n.sent()),
                        (e = Pt.a.fromObject(c.data.preferences)),
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
                        ((i = new Pt.l()), 0 === e.text_filter_words_revision())
                      )
                        return [3, 14];
                      n.label = 8;
                    case 8:
                      return (
                        n.trys.push([8, 13, , 14]),
                        this.m_Transport
                          ? ((o = m.b.Init(Pt.f)),
                            [4, Pt.m.GetTextFilterWords(this.m_Transport, o)])
                          : [3, 10]
                      );
                    case 9:
                      return (s = n.sent()), (i = s.Body().words()), [3, 12];
                    case 10:
                      return (
                        (u = {
                          sessionid: zt.d.SESSIONID,
                          origin: Object(zt.f)(),
                        }),
                        [
                          4,
                          a.a.get(
                            zt.d.COMMUNITY_BASE_URL +
                              "textfilter/ajaxgettextfiltercustomwords",
                            { params: u, withCredentials: !0 }
                          ),
                        ]
                      );
                    case 11:
                      (c = n.sent()),
                        (i = Pt.l.fromObject(c.data.words)),
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
                      if (((e = new Rt()), 0 === this.m_unAccountID))
                        return [3, 7];
                      n.label = 1;
                    case 1:
                      return (
                        n.trys.push([1, 6, , 7]),
                        this.m_Transport
                          ? ((t = m.b.Init(xt)),
                            [4, gt.GetFriendsList(this.m_Transport, t)])
                          : [3, 3]
                      );
                    case 2:
                      return (
                        (r = n.sent()), (e = r.Body().friendslist()), [3, 5]
                      );
                    case 3:
                      return (
                        (i = {
                          sessionid: zt.d.SESSIONID,
                          origin: Object(zt.f)(),
                        }),
                        [
                          4,
                          a.a.get(
                            zt.d.COMMUNITY_BASE_URL +
                              "textfilter/ajaxgetfriendslist",
                            { params: i, withCredentials: !0 }
                          ),
                        ]
                      );
                    case 4:
                      (o = n.sent()),
                        (e = Rt.fromObject(o.data.friendslist)),
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
                  i = new b.a(n.ulfriendid());
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
                var t, r, i, o, s, u;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      (t = "1"),
                        (r =
                          zt.d.COMMUNITY_CDN_URL +
                          "textfilter/gettextfilterdictionary?type=banned&language=" +
                          e +
                          "&v=" +
                          t +
                          "&origin=" +
                          Object(zt.f)()),
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
                        zt.d.COMMUNITY_CDN_URL +
                        "textfilter/gettextfilterdictionary?type=profanity&language=" +
                        e +
                        "&v=" +
                        t +
                        "&origin=" +
                        Object(zt.f)()),
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
                        zt.d.COMMUNITY_CDN_URL +
                        "textfilter/gettextfilterdictionary?type=clean_public&language=" +
                        e +
                        "&v=" +
                        t +
                        "&origin=" +
                        Object(zt.f)()),
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
                        (u = n.sent()),
                        console.error(
                          "Failed to load filter dictionary " + r,
                          u
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
                    Object(At.a)().ReportError(
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
                    Object(At.a)().ReportError(
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
                ? (n = new b.a(e).GetAccountID())
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
            Object(n.c)([c.C], e.prototype, "m_TextFilterPreferences", void 0),
            Object(n.c)([c.C], e.prototype, "m_mapPlayerCache", void 0),
            Object(n.c)([c.C], e.prototype, "m_regexBannedWords", void 0),
            Object(n.c)([c.C], e.prototype, "m_regexCleanWords", void 0),
            Object(n.c)([c.k], e.prototype, "UpdateCommunityPreferences", null),
            Object(n.c)([c.k], e.prototype, "SetFriendsList", null),
            Object(n.c)([c.k], e.prototype, "BRebuildFilter", null),
            e
          );
        })(),
        Lt = (function () {
          function e() {
            this.m_mapChats = new Map();
          }
          return (
            (e.prototype.GetChat = function (e, t) {
              return this.m_mapChats.get(e) || this.m_mapChats.get(t);
            }),
            (e.prototype.GetOrCreateChat = function (e, t) {
              var r = this.GetChat(e, t);
              return r || ((r = new kt()), this.m_mapChats.set(e || t, r)), r;
            }),
            Object(n.c)([c.C], e.prototype, "m_mapChats", void 0),
            e
          );
        })(),
        kt = (function () {
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
              (this.m_webAPIInterface = new p.a(
                zt.d.WEBAPI_BASE_URL,
                zt.k.webapi_token
              ));
          }
          return (
            (e.prototype.InitTextFilter = function () {
              this.m_textFilterStore = new Dt();
              var e = 0;
              "" !== zt.k.steamid && (e = new b.a(zt.k.steamid).GetAccountID());
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
              (this.m_webAPIInterface = new p.a(
                zt.d.WEBAPI_BASE_URL,
                zt.k.webapi_token
              )),
                (this.m_ulBroadcastSteamID = e),
                (this.m_ulBroadcastID = t),
                this.InitTextFilter(),
                this.RequestChatInfo();
            }),
            (e.prototype.StartForChannel = function (e) {
              (this.m_webAPIInterface = new p.a(
                zt.d.WEBAPI_BASE_URL,
                zt.k.webapi_token
              )),
                (this.m_ulBroadcastChannelID = e),
                (this.m_strUserSteamID = zt.k.steamid),
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
                  u,
                  c,
                  d = this;
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
                                zt.d.WEBAPI_BASE_URL +
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
                        (u = m.b.Init(G)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          message: t,
                          instance_id: this.m_unInstanceID.toString(),
                        }),
                        [
                          4,
                          j.PostChatMessage(
                            this.m_webAPIInterface.GetServiceTransport(),
                            u
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
                        ? ((c = ""),
                          (c =
                            17 == o.result
                              ? Object(St.f)("#BroadcastChat_YouMuted")
                              : 84 == o.result
                              ? Object(St.f)(
                                  "#BroadcastChat_Cooldown",
                                  o.cooldown_time_seconds
                                )
                              : Object(St.f)(
                                  "#BroadcastChat_FailedToSendMsg",
                                  t
                                )),
                          this.m_rgChatMessages.push({
                            type: l.a.Error,
                            msg: c,
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
                              return (d.m_bRateLimited = !1);
                            }, 1e3 * this.m_nRateLimitSeconds)),
                          [3, 7]);
                    case 6:
                      return (
                        n.sent(),
                        this.m_rgChatMessages.push({
                          type: l.a.Error,
                          msg: Object(St.f)(
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
                          sessionid: zt.d.SESSIONID,
                        }),
                        [
                          4,
                          a.a.get(
                            zt.d.CHAT_BASE_URL + "broadcast/getchatinfo",
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
                          Object(c.G)(function () {
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
                                  type: l.a.Notification,
                                  msg: Object(St.f)(
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
                              (o.m_chatScheduledFunc = new vt.b()),
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
                        (e = m.b.Init(et)).SetBodyFields({
                          broadcast_channel_id: this.m_ulBroadcastChannelID,
                        }),
                        [
                          4,
                          ye.JoinChat(
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
                            type: l.a.Notification,
                            msg: Object(St.f)("#BroadcastChat_DefaultMessage"),
                            client_ts: Number(new Date()),
                            instance_id: this.m_unInstanceID,
                            in_game: !1,
                            persona_name: "",
                            steamid: "",
                          }),
                          (this.m_bHasAddedWelcomeChat = !0),
                          (this.m_chatScheduledFunc = new vt.b()),
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
                        (e = m.b.Init(Ye)).SetBodyFields({
                          broadcast_channel_id: this.m_ulBroadcastChannelID,
                        }),
                        [
                          4,
                          ye.GetChatModerators(
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
                  u,
                  c,
                  d,
                  m,
                  f,
                  p,
                  b,
                  h,
                  _,
                  B = this;
                return Object(n.e)(this, function (y) {
                  switch (y.label) {
                    case 0:
                      (e = {}),
                        (t = this.m_strChatURL.replace(
                          "{0}",
                          this.m_nNextChatTS.toString()
                        )) == this.m_strChatURL &&
                          this.m_nNextChatTS > 0 &&
                          (e.t = this.m_nNextChatTS),
                        (y.label = 1);
                    case 1:
                      return (
                        y.trys.push([1, 3, , 4]), [4, a.a.get(t, { params: e })]
                      );
                    case 2:
                      if (
                        ((r = y.sent()),
                        (i = r.data),
                        (this.m_cConsecutiveErrors = 0),
                        (o = i.messages
                          .map(function (e) {
                            return Object(n.a)(Object(n.a)({}, e), {
                              type: l.a.Chat,
                              client_ts: Number(new Date()),
                            });
                          })
                          .filter(function (e) {
                            return !B.IsUserMutedLocally(e.steamid);
                          })),
                        (_ = this.m_rgChatMessages).push.apply(_, o),
                        (s = this.m_bAutoScroll ? 150 : 300),
                        this.m_rgChatMessages.length > s &&
                          this.m_rgChatMessages.splice(
                            0,
                            this.m_rgChatMessages.length - s
                          ),
                        i.muted)
                      )
                        for (u = 0, c = i.muted; u < c.length; u++)
                          (d = c[u]),
                            (m =
                              d.muted == this.m_strUserSteamID
                                ? Object(St.f)(
                                    "#BroadcastChat_YouMuted",
                                    d.persona_name
                                  )
                                : Object(St.f)(
                                    "#BroadcastChat_UserMuted",
                                    d.persona_name
                                  )),
                            this.m_rgChatMessages.push({
                              type: l.a.Notification,
                              msg: m,
                              client_ts: Number(new Date()),
                              instance_id: this.m_unInstanceID,
                              in_game: !1,
                              persona_name: "",
                              steamid: "",
                            });
                      if (i.remove_msgs)
                        for (f = 0, p = i.remove_msgs; f < p.length; f++)
                          (b = p[f]), this.RemoveUserMessagesLocal(b.steamid);
                      if (
                        ((h = 0),
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
                          (h = i.initial_delay);
                      } else {
                        if (i.next_request < this.m_nNextChatTS)
                          return console.log("Next request in past"), [2];
                        (this.m_nFromFirstRequestMS +=
                          i.next_request - this.m_nNextChatTS),
                          (this.m_nNextChatTS = i.next_request),
                          (h =
                            this.m_tsFirstRequest +
                            this.m_nFromFirstRequestMS -
                            performance.now() +
                            this.m_nNudgeFactorMS);
                      }
                      return (
                        this.m_bReconnecting && (this.m_bReconnecting = !1),
                        (this.m_nLastSleepMS = h),
                        h < 0 && (h = 0),
                        this.m_chatScheduledFunc.Schedule(h, this.RequestLoop),
                        [3, 4]
                      );
                    case 3:
                      if (
                        (y.sent(),
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
                              type: l.a.Error,
                              msg: Object(St.f)(
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
                        (i = m.b.Init(Ke)).SetBodyFields({
                          broadcast_channel_id: this.m_ulBroadcastChannelID,
                          moderator_steamid: e,
                          undo: !t,
                        }),
                        [
                          4,
                          ye.AddChatModerator(
                            this.m_webAPIInterface.GetServiceTransport(),
                            i
                          ),
                        ]
                      );
                    case 2:
                      return (
                        n.sent(),
                        (s = Object(St.f)(
                          t
                            ? "#BroadcastChat_AddedModerator"
                            : "#BroadcastChat_RemovedModerator",
                          r
                        )),
                        this.m_rgChatMessages.push({
                          type: l.a.Notification,
                          msg: s,
                        }),
                        [4, this.FetchChatModerators()]
                      );
                    case 3:
                      return n.sent(), [3, 5];
                    case 4:
                      return (
                        n.sent(),
                        (s = Object(St.f)(
                          t
                            ? "#BroadcastChat_AddModeratorFailed"
                            : "#BroadcastChat_RemoveModeratorFailed",
                          r
                        )),
                        this.m_rgChatMessages.push({ type: l.a.Error, msg: s }),
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
                        o.append("sessionid", zt.d.SESSIONID),
                        (n.label = 7);
                    case 7:
                      return (
                        n.trys.push([7, 9, , 10]),
                        [
                          4,
                          a.a.post(
                            zt.d.CHAT_BASE_URL +
                              "broadcast/ajaxupdatechannelmod",
                            o
                          ),
                        ]
                      );
                    case 8:
                      return (
                        n.sent(),
                        this.m_mapBroadcastModeratorUsers.set(e, t),
                        (s = Object(St.f)(
                          t
                            ? "#BroadcastChat_AddedModerator"
                            : "#BroadcastChat_RemovedModerator",
                          r
                        )),
                        this.m_rgChatMessages.push({
                          type: l.a.Notification,
                          msg: s,
                        }),
                        [3, 10]
                      );
                    case 9:
                      return (
                        n.sent(),
                        (s = Object(St.f)(
                          t
                            ? "#BroadcastChat_AddModeratorFailed"
                            : "#BroadcastChat_RemoveModeratorFailed",
                          r
                        )),
                        this.m_rgChatMessages.push({ type: l.a.Error, msg: s }),
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
                var u, c, d, l;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (u = this.m_ulBroadcastSteamID),
                        (c = this.m_strUserSteamID),
                        this.m_ulBroadcastChannelID
                          ? ((d = m.b.Init(Ve)).SetBodyFields({
                              broadcast_channel_id: this.m_ulBroadcastChannelID,
                              chatter_steamid: e,
                              duration: 3600 * r,
                              permanent: i,
                              undo: s,
                            }),
                            [
                              4,
                              ye.AddChatBan(
                                this.m_webAPIInterface.GetServiceTransport(),
                                d
                              ),
                            ])
                          : [3, 2]
                      );
                    case 1:
                      return n.sent(), [3, 6];
                    case 2:
                      (l = new FormData()).append("broadcaststeamid", u),
                        l.append("issuersteamid", c),
                        l.append("chattersteamid", e),
                        l.append("bantype", t),
                        l.append("duration", r.toString()),
                        l.append("perm", i ? "1" : "0"),
                        l.append("sessionid", zt.d.SESSIONID),
                        (n.label = 3);
                    case 3:
                      return (
                        n.trys.push([3, 5, , 6]),
                        [
                          4,
                          a.a.post(
                            zt.d.CHAT_BASE_URL + "broadcast/ajaxupdateusermute",
                            l
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
                                zt.d.WEBAPI_BASE_URL +
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
                        (o = m.b.Init(k)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          user_steamid: e,
                          muted: !0,
                        }),
                        [
                          4,
                          j.MuteBroadcastChatUser(
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
                            type: l.a.Error,
                            msg: Object(St.f)(
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
                            type: l.a.Notification,
                            msg: Object(St.f)(
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
                                zt.d.WEBAPI_BASE_URL +
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
                        (i = m.b.Init(k)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          user_steamid: e,
                          muted: !1,
                        }),
                        [
                          4,
                          j.MuteBroadcastChatUser(
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
                          type: l.a.Notification,
                          msg: Object(St.f)(
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
                          type: l.a.Error,
                          msg: Object(St.f)(
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
                        type: l.a.Notification,
                        msg: Object(St.f)("#BroadcastChat_UserUnmutedLocal", t),
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
                                zt.d.WEBAPI_BASE_URL +
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
                        (i = m.b.Init(q)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          user_steamid: e,
                        }),
                        [
                          4,
                          j.RemoveUserChatText(
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
                          type: l.a.Error,
                          msg: Object(St.f)(
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
                              zt.d.WEBAPI_BASE_URL +
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
                        (r = m.b.Init(D)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          flair: "^" + this.m_strFlairGroupID + "^:" + e + ":",
                        }),
                        [
                          4,
                          j.UpdateChatMessageFlair(
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
              [c.C],
              e.prototype,
              "m_mapChannelModeratorUsers",
              void 0
            ),
            Object(n.c)(
              [c.C],
              e.prototype,
              "m_mapBroadcastModeratorUsers",
              void 0
            ),
            Object(n.c)([c.C], e.prototype, "m_nRateLimitSeconds", void 0),
            Object(n.c)([c.C], e.prototype, "m_bRateLimited", void 0),
            Object(n.c)([c.C], e.prototype, "m_rgChatMessages", void 0),
            Object(n.c)([Mt.a], e.prototype, "FetchChatModerators", null),
            Object(n.c)([Mt.a], e.prototype, "RequestLoop", null),
            Object(n.c)([Mt.a], e.prototype, "MuteUserForSession", null),
            e
          );
        })(),
        Vt = new Lt();
      window.g_BroadcastChatStore = Vt;
      var qt = r("1BdX"),
        Ht = r("a5LV"),
        Kt = r("Z9dU"),
        $t = r.n(Kt),
        Yt = r("y+6m"),
        Jt = r("Gorr"),
        Xt = r("0QoN"),
        Qt = r("gPCo"),
        Zt = r("5znp"),
        er = r.n(Zt),
        tr = function () {
          return u.a.createElement(
            "div",
            { className: er.a.FriendsListInsetShadowCtn },
            u.a.createElement("div", {
              className: er.a.FriendListInsetShadowTop,
            })
          );
        },
        rr = function () {
          return u.a.createElement(
            "div",
            { className: er.a.FriendsListInsetShadowCtn },
            u.a.createElement("div", {
              className: er.a.FriendListInsetShadowBottom,
            })
          );
        },
        nr = r("6Y59"),
        ir = r("exH9"),
        ar = r("opsS"),
        or = r("3sYe"),
        sr = r.n(or),
        ur = new RegExp("ː([^ː]*)ː", "g"),
        cr =
          (new RegExp("(https?://[^ '\"<>]*)", "gi"),
          new RegExp(
            "^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)",
            "i"
          ));
      var dr = function (e) {
          var t = e.userType,
            r = e.msg,
            n = e.presenterInfo;
          if ("presenter" === t)
            return s.createElement(
              "span",
              null,
              s.createElement(
                Qt.b,
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
                    className: Object(ir.a)(
                      sr.a.MessageName,
                      sr.a.MessagePresenter
                    ),
                    href: zt.d.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
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
              ? (i = sr.a.MessageBroadcaster)
              : "moderator" === t && (i = sr.a.MessageModerator),
            s.createElement(
              "span",
              null,
              s.createElement(
                "a",
                {
                  className: Object(ir.a)(sr.a.MessageName, i),
                  href: zt.d.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
                  "data-miniprofile": "s" + r.steamid,
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                r.persona_name
              )
            )
          );
        },
        lr = function (e) {
          switch (e.userType) {
            case "presenter":
              return s.createElement(
                "span",
                {
                  className: sr.a.RoleFlairContainer,
                  "data-tooltip-text": Object(St.f)(
                    "#BroadcastChat_Role_Presenter_ttip"
                  ),
                },
                s.createElement(nr.h, null)
              );
            case "moderator":
              return s.createElement(
                "span",
                {
                  className: sr.a.RoleFlairContainer,
                  "data-tooltip-text": Object(St.f)(
                    "#BroadcastChat_Role_Moderatorr_ttip"
                  ),
                },
                s.createElement(nr.i, null)
              );
            case "broadcaster":
              return s.createElement(
                "span",
                {
                  className: sr.a.RoleFlairContainer,
                  "data-tooltip-text": Object(St.f)(
                    "#BroadcastChat_Role_Broadcaster_ttip"
                  ),
                },
                s.createElement(nr.g, null)
              );
            default:
              return null;
          }
        },
        mr = (function (e) {
          function t(t) {
            var r = e.call(this, t) || this;
            return (
              (r.m_chat = null),
              (r.messagesContainer = s.createRef()),
              (r.textInput = s.createRef()),
              (r.state = { message: "" }),
              r
            );
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.componentDidMount = function () {
              this.StartChat();
            }),
            (t.prototype.componentDidUpdate = function (e) {
              this.m_chat && this.m_chat.m_bAutoScroll && this.ScrollToBottom(),
                (this.props.steamID === e.steamID &&
                  this.props.broadcastID === e.broadcastID &&
                  this.props.broadcastChannelID === e.broadcastChannelID) ||
                  this.StartChat();
            }),
            (t.prototype.componentWillUnmount = function () {
              this.m_chat && this.m_chat.Stop();
            }),
            (t.prototype.StartChat = function () {
              this.m_chat && this.m_chat.Stop(),
                (this.m_chat = Vt.GetOrCreateChat(
                  this.props.broadcastChannelID,
                  this.props.steamID
                )),
                this.props.broadcastChannelID
                  ? this.m_chat.StartForChannel(this.props.broadcastChannelID)
                  : this.props.steamID &&
                    this.props.steamID &&
                    this.props.broadcastID &&
                    (this.m_chat.StartForSteamID(
                      this.props.steamID,
                      this.props.broadcastID
                    ),
                    this.ScrollToBottom());
            }),
            (t.prototype.ChatBoxChange = function (e) {
              this.setState({ message: e.target.value });
            }),
            (t.prototype.ChatBoxKeypress = function (e) {
              !!e.shiftKey ||
                13 !== e.charCode ||
                (this.SendMessage(), e.preventDefault());
            }),
            (t.prototype.SendMessage = function (e) {
              this.m_chat.m_bRateLimited ||
                (this.m_chat.SendMessage(this.state.message),
                this.setState({ message: "" }),
                e && e.preventDefault());
            }),
            (t.prototype.IsTrustedDomain = function (e) {
              return !!e.match(cr);
            }),
            (t.prototype.AddLinksEmoticons = function (e, t) {
              t && this.m_chat.GetUserEmoticons();
              for (var r = e.split(ur), n = [], i = 0; i < r.length; i += 1)
                i % 2 == 1
                  ? n.push(
                      s.createElement(Jt.b, {
                        emoticonHoverStore: Ht.a,
                        key: i,
                        emoticon: r[i],
                        large: !0,
                      })
                    )
                  : n.push(r[i]);
              return n;
            }),
            (t.prototype.HandleScroll = function (e) {
              var t =
                e.currentTarget.scrollTop + e.currentTarget.clientHeight >=
                e.currentTarget.scrollHeight - 6;
              this.m_chat && (this.m_chat.m_bAutoScroll = t);
            }),
            (t.prototype.ScrollToBottom = function () {
              this.messagesContainer &&
                this.messagesContainer.current &&
                (this.messagesContainer.current.scrollTop = this.messagesContainer.current.scrollHeight);
            }),
            (t.prototype.OnContextMenu = function (e, t) {
              var r = this;
              if (t.type !== l.a.Chat) return null;
              var n = [],
                i = this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID()),
                a = this.m_chat.BIsUserBroadcastModerator(
                  this.m_chat.GetUserSteamID()
                );
              ((zt.k && zt.k.is_support) || i || a
                ? n.push(
                    s.createElement(
                      Yt.d,
                      {
                        key: "remove",
                        onSelected: function () {
                          return r.m_chat.RemoveUserMessagesServer(
                            t.steamid,
                            t.persona_name
                          );
                        },
                      },
                      Object(St.f)("#BroadcastChat_RemoveMessages")
                    ),
                    s.createElement(
                      Yt.d,
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
                      Object(St.f)("#BroadcastChat_half_Mute")
                    ),
                    s.createElement(
                      Yt.d,
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
                      Object(St.f)("#BroadcastChat_day_Mute")
                    ),
                    s.createElement(
                      Yt.d,
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
                      Object(St.f)("#BroadcastChat_week_Mute")
                    ),
                    s.createElement(
                      Yt.d,
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
                      Object(St.f)("#BroadcastChat_perm_Mute")
                    ),
                    s.createElement(
                      Yt.d,
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
                      Object(St.f)("#BroadcastChat_Unmute")
                    )
                  )
                : this.m_chat.IsUserMutedLocally(t.steamid)
                ? n.push(
                    s.createElement(
                      Yt.d,
                      {
                        key: "unmuteuser",
                        onSelected: function () {
                          return r.m_chat.UnmuteUserForSession(
                            t.steamid,
                            t.persona_name
                          );
                        },
                      },
                      Object(St.f)("#BroadcastChat_UnmuteLocal")
                    )
                  )
                : n.push(
                    s.createElement(
                      Yt.d,
                      {
                        key: "muteuser",
                        onSelected: function () {
                          return r.m_chat.MuteUserForSession(
                            t.steamid,
                            t.persona_name
                          );
                        },
                      },
                      Object(St.f)("#BroadcastChat_MuteLocal")
                    )
                  ),
              (zt.k && zt.k.is_support) ||
                this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID())) &&
                t.steamid &&
                (this.m_chat.BIsUserBroadcastModerator(t.steamid)
                  ? n.push(
                      s.createElement(
                        Yt.d,
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
                        Object(St.f)("#BroadcastChat_Remove_Moderator")
                      )
                    )
                  : n.push(
                      s.createElement(
                        Yt.d,
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
                        Object(St.f)("#BroadcastChat_Add_Moderator")
                      )
                    ));
              return n.length
                ? Object(d.a)(
                    s.createElement(
                      Yt.c,
                      null,
                      s.createElement(
                        "div",
                        { className: sr.a.SelectedUserNameCtn },
                        Object(St.f)("#BroadcastChat_User"),
                        s.createElement("br", null),
                        s.createElement(
                          "span",
                          { className: sr.a.SelectedUserName },
                          t.persona_name
                        )
                      ),
                      n
                    ),
                    e
                  )
                : null;
            }),
            (t.prototype.OnEmoticonSelected = function (e, t) {
              void 0 === t && (t = !1),
                this.setState({ message: this.state.message + "ː" + e + "ː" }),
                this.textInput &&
                  this.textInput.current &&
                  this.textInput.current.focus();
            }),
            (t.prototype.OnFlairSelected = function (e) {
              this.m_chat.UpdateChatMessageFlair(e),
                this.textInput &&
                  this.textInput.current &&
                  this.textInput.current.focus();
            }),
            (t.prototype.GetTypeClassName = function (e) {
              return e.type === l.a.Notification
                ? sr.a.MessageNotification
                : e.type === l.a.Error
                ? sr.a.MessageError
                : sr.a.MessageChat;
            }),
            (t.prototype.FormatMessage = function (e, t) {
              if (e.type === l.a.Chat) {
                var r = t ? t.FilterText(e.steamid, e.msg) : e.msg;
                return this.AddLinksEmoticons(r, !1);
              }
              return e.msg;
            }),
            (t.prototype.RenderUserChatLine = function (e, t, r) {
              var n = this,
                i = r ? r.get(e.steamid) : void 0,
                a =
                  e.type === l.a.Chat
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
                e.type === l.a.Chat && s.createElement(lr, { userType: a }),
                e.flair &&
                  s.createElement(
                    "span",
                    { className: sr.a.FlairContainer },
                    this.AddLinksEmoticons(e.flair, !1)
                  ),
                e.type === l.a.Chat &&
                  s.createElement(dr, {
                    userType: a,
                    msg: e,
                    presenterInfo: i,
                  }),
                e.type === l.a.Chat &&
                  this.m_chat.GetBroadcastSteamID() === e.steamid &&
                  s.createElement(
                    "span",
                    {
                      className:
                        sr.a.MessageNotification + " " + sr.a.MessageContents,
                    },
                    " (" + Object(St.f)("#BroadcastChat_Broadcaster") + ")"
                  ),
                e.type === l.a.Chat &&
                  this.m_chat.m_mapChannelModeratorUsers.get(e.steamid) &&
                  s.createElement(
                    "span",
                    {
                      className:
                        sr.a.MessageNotification + " " + sr.a.MessageContents,
                    },
                    " (" + Object(St.f)("#BroadcastChat_Moderator") + ")"
                  ),
                s.createElement(
                  "span",
                  {
                    className:
                      sr.a.MessageContents +
                      " " +
                      (this.AddLinksEmoticons(e.msg, !1).filter(function (e) {
                        return e && "string" == typeof e;
                      }).length
                        ? ""
                        : sr.a.EmoticonsOnly),
                  },
                  e.type === l.a.Chat ? " : " : "",
                  this.FormatMessage(e, this.m_chat.TextFilterStore)
                )
              );
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.m_chat ? this.m_chat.m_rgChatMessages : [],
                r = this.m_chat
                  ? qt.b.GetPresenterMapForBroadcasterSteamID(
                      this.m_chat.GetBroadcastSteamID()
                    )
                  : void 0;
              return s.createElement(
                "div",
                {
                  className: sr.a.ChatPanel,
                  style: this.props.hidden ? { display: "none" } : void 0,
                },
                s.createElement(tr, null),
                s.createElement(
                  "div",
                  {
                    className: sr.a.ChatMessages + " " + $t.a.minHeightZero,
                    onScroll: this.HandleScroll,
                    ref: this.messagesContainer,
                  },
                  t.map(function (t, n) {
                    return e.RenderUserChatLine(t, n, r);
                  })
                ),
                s.createElement(rr, null),
                zt.k && zt.k.logged_in && this.m_chat
                  ? s.createElement(
                      "div",
                      {
                        className: Object(ir.a)(
                          sr.a.ChatEntryCtn,
                          "ChatEntryCtn"
                        ),
                      },
                      s.createElement(
                        "div",
                        {
                          className: Object(ir.a)(sr.a.ChatEntry, "ChatEntry"),
                        },
                        s.createElement(
                          "form",
                          { className: "" + $t.a.chatEntryControls },
                          s.createElement("textarea", {
                            className: $t.a.chatTextarea,
                            placeholder: Object(St.f)(
                              "#BroadcastChat_EnterResponse"
                            ),
                            onKeyPress: this.ChatBoxKeypress,
                            onChange: this.ChatBoxChange,
                            value: this.state.message,
                            ref: this.textInput,
                          }),
                          this.m_chat.m_bRateLimited &&
                            s.createElement(fr, {
                              nSeconds: this.m_chat.m_nRateLimitSeconds,
                              bRateLimited: this.m_chat.m_bRateLimited,
                            }),
                          s.createElement(
                            "button",
                            {
                              className:
                                $t.a.chatSubmitButton +
                                " " +
                                (this.state.message ? "" : $t.a.disabled),
                              title: Object(St.f)("#ChatEntryButton_Submit"),
                              onClick: this.SendMessage,
                            },
                            s.createElement(nr.cb, null)
                          )
                        ),
                        s.createElement(
                          "div",
                          {
                            style: { height: "50px" },
                            className: "" + $t.a.chatEntryActionsContainer,
                          },
                          s.createElement(
                            "div",
                            { className: $t.a.chatEntryActionsGroup },
                            s.createElement(Xt.a, {
                              disabled: !1,
                              OnEmoticonSelected: this.OnEmoticonSelected,
                              rtLastAckedNewEmoticons: Number.MAX_VALUE,
                              emoticonStore: this.props.emoticonStore,
                              emoticonHoverStore: Ht.a,
                            }),
                            this.m_chat.m_strFlairGroupID &&
                              this.props.emoticonStore.flair_list &&
                              this.props.emoticonStore.GetFlairListByGroupID(
                                this.m_chat.m_strFlairGroupID
                              ).length
                              ? s.createElement(Xt.a, {
                                  disabled: !1,
                                  OnEmoticonSelected: this.OnFlairSelected,
                                  rtLastAckedNewEmoticons: Number.MAX_VALUE,
                                  emoticonStore: this.props.emoticonStore,
                                  emoticonHoverStore: Ht.a,
                                  strFlairGroupID: this.m_chat
                                    .m_strFlairGroupID,
                                  title: Object(St.f)("#ChatEntryButton_Flair"),
                                  buttonIcon: s.createElement(nr.j, null),
                                })
                              : null
                          )
                        )
                      )
                    )
                  : null
              );
            }),
            Object(n.c)([c.C], t.prototype, "m_chat", void 0),
            Object(n.c)([ar.a], t.prototype, "StartChat", null),
            Object(n.c)([ar.a], t.prototype, "ChatBoxChange", null),
            Object(n.c)([ar.a], t.prototype, "ChatBoxKeypress", null),
            Object(n.c)([ar.a], t.prototype, "SendMessage", null),
            Object(n.c)([ar.a], t.prototype, "HandleScroll", null),
            Object(n.c)([ar.a], t.prototype, "OnContextMenu", null),
            Object(n.c)([ar.a], t.prototype, "OnEmoticonSelected", null),
            Object(n.c)([ar.a], t.prototype, "OnFlairSelected", null),
            Object(n.c)([ar.a], t.prototype, "RenderUserChatLine", null),
            (t = Object(n.c)([o.a], t))
          );
        })(s.Component),
        fr = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.render = function () {
              return s.createElement(
                "div",
                { className: sr.a.TimedProgressBarContainer },
                s.createElement(
                  "div",
                  { className: sr.a.wrapper },
                  s.createElement("div", {
                    className: sr.a.spinner + " " + sr.a.pie,
                    style: {
                      animationDuration: (this.props.nSeconds || 0) + "s",
                    },
                  }),
                  s.createElement("div", {
                    className: sr.a.filler + " " + sr.a.pie,
                    style: {
                      animationDuration: (this.props.nSeconds || 0) + "s",
                    },
                  }),
                  s.createElement("div", {
                    className: sr.a.mask,
                    style: {
                      animationDuration: (this.props.nSeconds || 0) + "s",
                    },
                  })
                )
              );
            }),
            t
          );
        })(s.Component),
        pr = r("trWU"),
        br = r("5eAM"),
        hr = r("VQ2A"),
        _r = r("b3LC"),
        Br = r("5L1o"),
        yr = r("NKJh"),
        gr = r("RQmk"),
        wr = r("dfs5"),
        vr = r("0OaU"),
        Sr = r("dLk7"),
        Mr = r.n(Sr),
        zr = Object(o.a)(function (e) {
          var t = e.appid,
            r = Object(_r.d)(t, 0, !0),
            i = (r[0], r[1]),
            a = Object(wr.c)();
          Object(s.useEffect)(
            function () {
              if (!br.a.BHasAppLinkLoaded(t)) {
                Object(n.b)(void 0, void 0, void 0, function () {
                  return Object(n.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, br.a.LoadAppLinkInfo([t])];
                      case 1:
                        return [2, e.sent()];
                    }
                  });
                });
              }
            },
            [t]
          );
          var o = Mr.a.StoreSaleWidgetContainer_mini,
            c = Mr.a.StoreSaleWidgetImage_mini,
            d = Mr.a.StoreSaleImage_mini,
            l = (Mr.a.StoreSaleWidgetShortDesc_mini, br.a.GetAppLinkInfo(t));
          if (!i || !l)
            return u.a.createElement(
              "div",
              { className: o },
              u.a.createElement(vr.a, { size: "medium" }),
              ";"
            );
          var m = "series" != l.type,
            f = Object(hr.b)(l.capsule_link, a);
          return l && l.title
            ? u.a.createElement(
                "div",
                { className: o },
                u.a.createElement(
                  "div",
                  { className: yr.Actions },
                  u.a.createElement(
                    "a",
                    { href: f, target: zt.d.IN_CLIENT ? void 0 : "_blank" },
                    u.a.createElement(
                      gr.b,
                      { type: "app", id: l.appid },
                      u.a.createElement(
                        "div",
                        { className: c },
                        u.a.createElement("img", {
                          className: d,
                          src: l.capsule,
                        })
                      )
                    )
                  )
                ),
                u.a.createElement(
                  "div",
                  { className: yr.StoreSaleBroadcastWidgetRight },
                  u.a.createElement(
                    "div",
                    { className: yr.Actions },
                    u.a.createElement(
                      "a",
                      { href: f, target: zt.d.IN_CLIENT ? void 0 : "_blank" },
                      u.a.createElement(
                        gr.b,
                        { type: "app", id: l.appid },
                        u.a.createElement(
                          "div",
                          {
                            className: Object(ir.a)(
                              yr.StoreSaleWidgetTitle,
                              "StoreSaleWidgetTitle"
                            ),
                          },
                          l.title
                        )
                      )
                    )
                  ),
                  u.a.createElement(
                    "div",
                    { className: yr.StoreSaleWidgetRelease },
                    l.release
                  ),
                  m &&
                    u.a.createElement(Br.o, {
                      info: l,
                      bShowDemoButton: !0,
                      bStackedButtons: !0,
                    })
                )
              )
            : u.a.createElement("div", {
                className: yr.StoreSaleWidgetEmptyContainer,
              });
        }),
        Cr = r("boaH"),
        Rr = r("nWbB"),
        Or = r("02Wr"),
        jr = r("MnIK"),
        Fr = r("uuth"),
        Wr = function (e) {
          var t = e.onPositionChange,
            r = e.onLeave,
            i = s.useCallback(
              function (e) {
                return (
                  void 0 === e.previousPosition &&
                    e.currentPosition === Fr.a.above &&
                    r &&
                    r(e),
                  t && t(e)
                );
              },
              [t, r]
            );
          return s.createElement(
            Fr.a,
            Object(n.a)({}, e, { onPositionChange: i })
          );
        },
        Tr = r("uIWk"),
        Ir = r("rKv1"),
        Ur = r.n(Ir),
        Nr = Object(o.a)(function (e) {
          var t = e.event,
            r = t.clanSteamID.GetAccountID(),
            i = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
            o = Object(s.useRef)(null),
            c = Object(s.useState)(
              t ? Tr.a.GetCreatorHome(t.clanSteamID) : null
            ),
            d = c[0],
            l = c[1];
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
                            (t = b.a.InitFromClanID(r)),
                            [4, Tr.a.LoadCreatorHome(t, e)]
                          );
                        case 1:
                          return (i = n.sent()), e.token.reason || l(i), [2];
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
            i || !d || !d.BIsLoaded())
          )
            return null;
          var m =
            zt.d.COMMUNITY_BASE_URL +
            "gid/" +
            t.jsondata.broadcast_item_drops_details_clan_accountid +
            "/partnerevents/view/" +
            t.jsondata.broadcast_item_drops_details_event_gid;
          return u.a.createElement(
            "div",
            { className: Ur.a.item_drop_ctn },
            u.a.createElement(
              "div",
              null,
              Object(St.f)(
                d.GetName().length > 0
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
                d.GetName()
              ),
              Boolean(t.jsondata.broadcast_item_drops_details_clan_accountid) &&
                u.a.createElement(
                  "a",
                  { href: m, target: zt.d.IN_CLIENT ? "" : "_blank" },
                  Object(St.f)("#SalePage_WatchForDrop_LearnMore")
                )
            )
          );
        }),
        xr = {
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
        Er = (function (e) {
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
              return zt.d.EREALM != Gt.g.k_ESteamRealmChina;
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
                            Rr.a
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
                            bExpanded: !Rr.a
                              .Get()
                              .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                            innerStyle: Object(n.a)(
                              Object(n.a)({}, this.state.innerStyle),
                              {
                                maxHeight: Rr.a
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
                            ? Rr.a
                                .Get()
                                .HintLoadEmbeddablePreviewStreams(this.props)
                            : Rr.a.Get().HintLoadEmbeddableStreams(this.props),
                        ]
                      );
                    case 2:
                      return (
                        t.sent(),
                        this.props.nAppIDVOD &&
                          (Rr.a
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
                t = Rr.a.Get().GetPlayReadyStream(this.props),
                r = Cr.a.GetOrCreateBroadcastInfo(t.steamid).m_nAppID;
              Object(Rr.e)(r, this.state.bExpanded ? 2 : 3, t.snr);
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
                      return Rr.a
                        .Get()
                        .SetEmbeddedStreamCollapsed(!e.state.bExpanded);
                    }
                  );
            }),
            (t.prototype.OnShrinkTransitionEnd = function () {
              "0vh" === this.state.innerStyle.maxHeight &&
                this.setState({ bExpanded: !1 }, function () {
                  return Rr.a.Get().SetEmbeddedStreamCollapsed(!0);
                });
            }),
            (t.prototype.onStreamSelect = function (e) {
              return Object(n.b)(this, void 0, void 0, function () {
                return Object(n.e)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        this.setState({ bStartMuted: !1 }),
                        Rr.a.Get().GetPlayReadyStream(this.props).accountid ==
                        e.accountid
                          ? [3, 2]
                          : [4, Rr.a.Get().AttemptToPlayStream(this.props, e)]
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
                        (e = Rr.a
                          .Get()
                          .GetStreams(this.props)
                          .filter(function (e) {
                            return (
                              !a.props.fnFilterStreams ||
                              a.props.fnFilterStreams(e)
                            );
                          })),
                        Object(Rr.f)(e),
                        (t = 0),
                        (r = e),
                        (n.label = 1);
                    case 1:
                      return t < r.length
                        ? (i = r[t]).nAppIDVOD
                          ? [3, 3]
                          : [4, Rr.a.Get().AttemptToPlayStream(this.props, i)]
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
              var n = Rr.a.Get().GetConcurrentStreams(this.props) > 1,
                i = Cr.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
                a = s.createElement(
                  "div",
                  { className: Ur.a.rightPanel },
                  s.createElement(Ar, {
                    key: "right" + i,
                    ImgUrl: e.right_panel,
                  })
                ),
                o = s.createElement(Ar, {
                  key: "left" + i,
                  ImgUrl: e.left_panel,
                });
              if (i < 11) {
                var u = qt.b.GetAppIDListForBroadcasterSteamID(e.steamid);
                u && 1 === u.length && (i = u[0]);
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
                  ((a = s.createElement(zr, {
                    key: "mini" + e.accountid,
                    appid: i,
                  })),
                  (r.bRightPanelArtworkOrEmpty = !1)),
                n && !t
                  ? ((r.leftPanel = s.createElement(Lr, {
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
                    (r.rightPanel = s.createElement(Vr, {
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
              var a = Rr.a.Get().GetPlayReadyStream(this.props);
              if (a) {
                var o = "show" === Rr.a.Get().GetChatVisibility(),
                  u = this.props,
                  c = u.event,
                  d = u.language,
                  l = u.fnRenderBroadcastContext;
                c &&
                  (a = Object(n.a)(Object(n.a)({}, a), {
                    left_panel: c.GetImageURL(
                      "broadcast_left",
                      d || Object(Gt.i)(zt.d.LANGUAGE)
                    ),
                    right_panel: c.GetImageURL(
                      "broadcast_right",
                      d || Object(Gt.i)(zt.d.LANGUAGE)
                    ),
                    store_title: c.GetBroadcastTitle(
                      d || Object(Gt.i)(zt.d.LANGUAGE)
                    ),
                    broadcast_chat_visibility: c.GetBroadcastChatVisibility(),
                  }));
                var m = this.ConstructSidePanels(a, o),
                  f = a.store_title ? a.store_title : a.title,
                  p = Rr.a.Get().GetConcurrentStreams(this.props) > 1;
                c && c.jsondata && c.jsondata.broadcast_gradient_inner_color,
                  c && c.jsondata && c.jsondata.broadcast_gradient_outer_color;
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
                        className: Object(ir.a)(
                          ((e = {}),
                          (e[Ur.a.bordered_container] = !0),
                          (e[Ur.a.Event] = Boolean(c)),
                          (e.broadcast_brd_ctn_trgt = !0),
                          e)
                        ),
                      },
                      s.createElement(
                        "div",
                        {
                          className: Object(ir.a)(
                            Ur.a.bordered_title,
                            "bordered_title_trgt"
                          ),
                        },
                        s.createElement(Br.i, null),
                        f,
                        s.createElement(
                          "div",
                          { className: Ur.a.bordered_corner_container },
                          !this.state.bExpanded &&
                            s.createElement("div", {
                              className: Ur.a.broadcast_settings_icon,
                              "data-tooltip-text": Object(St.f)(
                                "#StoreBroadcast_Change_store_Broadcast_settings"
                              ),
                              onClick: function () {
                                return window.open(
                                  zt.d.STORE_BASE_URL +
                                    "account/preferences/#store_broadcast_settings"
                                );
                              },
                            }),
                          s.createElement("div", {
                            className: this.state.bExpanded
                              ? Ur.a.bordered_corner_expanded
                              : Ur.a.bordered_corner_shrinked,
                            "data-tooltip-text": Object(St.f)(
                              "#StoreBroadcast_Hide_Tooltip"
                            ),
                            onClick: this.ToggleBroadcastExpandShrink,
                          })
                        ),
                        Boolean(a.gamedata_subtitle) &&
                          s.createElement(
                            "div",
                            { className: Ur.a.bordered_subtitle },
                            a.gamedata_subtitle
                          )
                      ),
                      this.state.bExpanded &&
                        s.createElement(
                          "div",
                          {
                            className: Object(ir.a)(
                              ((t = {}),
                              (t[Ur.a.container] = !0),
                              (t.embeddable_ctn_trgt = !0),
                              (t.multistream = p),
                              (t.broadcast_right_panel_simple =
                                m.bRightPanelArtworkOrEmpty),
                              (t.broadcast_chat_expanded = o),
                              t)
                            ),
                            style: Object(n.a)({}, this.state.innerStyle),
                            onTransitionEnd: this.OnShrinkTransitionEnd,
                          },
                          m.leftPanel,
                          s.createElement(Pr, {
                            stream: a,
                            bStartMuted: this.state.bStartMuted,
                            fnRenderBroadcastContext: l,
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
                            s.createElement(Gr, { stream: a, bMultistream: p })
                        )
                    ),
                    Boolean(
                      c && c.jsondata && c.jsondata.broadcast_item_drops_enabled
                    ) && s.createElement(Nr, { event: c }),
                    this.state.bExpanded &&
                      s.createElement(
                        "div",
                        { className: "" + (c ? Ur.a.Event : "") },
                        s.createElement(Gr, { stream: a, bMultistream: p })
                      ),
                    s.createElement("div", { className: Ur.a.clear_div })
                  )
                );
              }
              return s.createElement("div", {
                className: "NoBroadcastAvailable",
              });
            }),
            Object(n.c)(
              [ar.a],
              t.prototype,
              "ToggleBroadcastExpandShrink",
              null
            ),
            Object(n.c)([ar.a], t.prototype, "OnShrinkTransitionEnd", null),
            Object(n.c)([ar.a], t.prototype, "onStreamSelect", null),
            Object(n.c)([ar.a], t.prototype, "PlayTopNonVOD", null),
            (t = r = Object(n.c)([o.a], t))
          );
        })(s.Component),
        Pr =
          ((t.default = Er),
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
                var e = Cr.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                  .m_nAppID;
                Object(Rr.e)(e, 7, this.props.stream.snr),
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
                  { className: Ur.a.wrapper },
                  s.createElement(
                    Wr,
                    { onEnter: this.OnEnter, onLeave: this.OnLeave },
                    s.createElement(
                      "div",
                      {
                        className: Object(ir.a)(
                          ((e = {}),
                          (e[Ur.a.video_placeholder] = !0),
                          (e.video_placeholder_trgt = !0),
                          (e[Ur.a.WidePlayer] = this.props.bWidePlayer),
                          e)
                        ),
                        ref: this.m_iVideoContainerRef,
                      },
                      s.createElement(
                        "div",
                        {
                          className: this.state.bPopout
                            ? Ur.a.broadcast_floating
                            : Ur.a.video_container,
                        },
                        this.state.bPopout &&
                          s.createElement(Dr, {
                            stream: this.props.stream,
                            OnPreventPopup: this.CloseBroadcastPopup,
                          }),
                        s.createElement(
                          "div",
                          { className: Ur.a.BroadcastPlayerContainer },
                          s.createElement(pr.a, {
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
              Object(n.c)([ar.a], t.prototype, "CloseBroadcastPopup", null),
              Object(n.c)([ar.a], t.prototype, "OnEnter", null),
              Object(n.c)([ar.a], t.prototype, "OnLeave", null),
              t
            );
          })(s.Component)),
        Gr = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.ConstructBroadcastLink = function () {
              var e = this.props.stream,
                t = Cr.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                  .m_nAppID,
                r = xr.list.find(function (r) {
                  return (
                    r.appid == t &&
                    (!r.broadcasterAccountID ||
                      r.broadcasterAccountID == e.accountid)
                  );
                });
              if (r) {
                var n = r.url;
                return (
                  (zt.d.IN_CLIENT ||
                    navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
                    navigator.userAgent.indexOf("Valve Steam GameOverlay") >=
                      0 ||
                    navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
                    (n = "steam://openurl/" + n),
                  s.createElement(
                    "a",
                    { href: n },
                    Object(St.f)("#Broadcast_Embed_Watch_With_Frieds_SteamTV")
                  )
                );
              }
              var i = this.props.stream.steamid,
                a = zt.d.COMMUNITY_BASE_URL + "broadcast/watch/" + i;
              return s.createElement(
                "a",
                {
                  href: a,
                  className: Ur.a.external_link,
                  "data-tooltip-text": Object(St.f)(
                    "#BroadcastWatch_View_Broadcast_Page"
                  ),
                },
                s.createElement(nr.B, null)
              );
            }),
            (t.prototype.OnToggleChat = function (e) {
              e.preventDefault();
              var t = Cr.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nAppID;
              Object(Rr.e)(
                t,
                "show" === Rr.a.Get().GetChatVisibility() ? 5 : 4,
                this.props.stream.snr
              ),
                Rr.a.Get().ToggleChatVisibility();
            }),
            (t.prototype.onWatchBroadcastPage = function () {
              var e = Cr.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nAppID;
              Object(Rr.e)(e, 9, this.props.stream.snr);
            }),
            (t.prototype.render = function () {
              var e = this.ConstructBroadcastLink(),
                t = "remove" != Rr.a.Get().GetChatVisibility(),
                r = "hide" === Rr.a.Get().GetChatVisibility(),
                n = Number.parseInt(
                  "" +
                    Cr.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                      .m_nViewerCount
                );
              return s.createElement(
                "div",
                { className: Object(ir.a)(Ur.a.viewer_bar, "viewer_bar") },
                s.createElement(
                  "div",
                  {
                    className: Object(ir.a)(Ur.a.viewer_count, "viewer_count"),
                  },
                  s.createElement(nr.lb, null),
                  n.toLocaleString(St.e.GetPreferredLocales())
                ),
                s.createElement(
                  "div",
                  {
                    className: Object(ir.a)(Ur.a.viewer_links, "viewer_links"),
                  },
                  Boolean(t && !r && this.props.bMultistream) &&
                    s.createElement(
                      "div",
                      { className: Ur.a.chat_link },
                      s.createElement(
                        "a",
                        {
                          href: "#",
                          className: Ur.a.ChatToggle,
                          onClick: this.OnToggleChat,
                        },
                        Object(St.f)("#sale_three_section_show_streams")
                      )
                    ),
                  t &&
                    s.createElement(
                      "div",
                      { className: Ur.a.chat_link },
                      s.createElement(nr.k, null),
                      s.createElement(
                        "a",
                        {
                          href: "#",
                          className: Ur.a.ChatToggle,
                          onClick: this.OnToggleChat,
                        },
                        Object(St.f)(
                          r
                            ? "#sale_three_section_show_chat"
                            : "#sale_three_section_hide_chat"
                        )
                      )
                    ),
                  t && s.createElement("span", { className: Ur.a.ChatToggle }),
                  s.createElement(
                    "a",
                    {
                      href:
                        zt.d.STORE_BASE_URL +
                        "account/preferences/#store_broadcast_settings",
                      target: zt.d.IN_CLIENT ? void 0 : "_blank",
                      className: Ur.a.settings_link,
                      "data-tooltip-text": Object(St.f)(
                        "#StoreBroadcast_Change_store_Broadcast_settings"
                      ),
                    },
                    s.createElement(nr.X, null)
                  ),
                  e
                )
              );
            }),
            Object(n.c)([ar.a], t.prototype, "OnToggleChat", null),
            Object(n.c)([ar.a], t.prototype, "onWatchBroadcastPage", null),
            (t = Object(n.c)([o.a], t))
          );
        })(s.Component),
        Ar = (function (e) {
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
                    className: Ur.a.side_panels,
                    src: this.props.ImgUrl,
                  }),
                !e && s.createElement("div", { className: Ur.a.side_panels })
              );
            }),
            t
          );
        })(s.Component),
        Dr = Object(o.a)(function (e) {
          var t = e.stream,
            r = Object(wr.c)(),
            n = Cr.a.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
            i = br.a.GetAppLinkInfo(n),
            a = i
              ? s.createElement(
                  gr.a,
                  {
                    type: "app",
                    id: n,
                    strURL: Object(hr.b)(i.capsule_link, r),
                    className: Ur.a.PopOutVideoTitleText,
                  },
                  Object(St.f)("#StoreBroadcast_Detault_popout_Title")
                )
              : s.createElement(
                  "div",
                  { className: Ur.a.PopOutVideoTitleText },
                  Object(St.f)("#StoreBroadcast_Detault_popout_Title")
                );
          return s.createElement(
            "div",
            { className: [Ur.a.PopOutVideoTitleBar, Ur.a.NoSeslect].join(" ") },
            a,
            s.createElement(
              "button",
              {
                className: Ur.a.PopOutVideoCloseButton,
                "data-tooltip-text": Object(St.f)(
                  "#StoreBroadcast_close_broadcast_popup"
                ),
                onClick: e.OnPreventPopup,
              },
              s.createElement(nr.pb, null)
            )
          );
        }),
        Lr = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.itemRef = s.createRef()), t;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.GetFilteredStreamList = function () {
              var e = this,
                t = Rr.a
                  .Get()
                  .GetStreams(this.props.broadcastEmbedContext)
                  .filter(function (t) {
                    return (
                      !e.props.fnFilterStreams || e.props.fnFilterStreams(t)
                    );
                  });
              return Object(Rr.f)(t), t;
            }),
            (t.prototype.CalculateStreamHeight = function (e) {
              var t = Cr.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
                r = br.a.GetAppLinkInfo(t);
              return this.props.bShowCapsuleArt &&
                (null == r ? void 0 : r.header_image_url)
                ? parseInt(Ur.a.strStreamIconCapsuleArtHeight)
                : parseInt(Ur.a.strStreamIconScreenshotArtHeight);
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
                  return s.createElement(kr, {
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
                  className: Object(ir.a)(
                    Ur.a.side_panels,
                    "side_panels",
                    Ur.a.multistream,
                    t.length > 3 ? Ur.a.scrollingstreams : ""
                  ),
                },
                r
              );
            }),
            t
          );
        })(s.Component),
        kr = (function (e) {
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
                  ? Ur.a.stream_icon_selected
                  : Ur.a.stream_icon;
              if (e) {
                var i = Cr.a.GetOrCreateBroadcastInfo(r.steamid).m_nAppID,
                  a = br.a.GetAppLinkInfo(
                    null !== (t = r.nAppIDVOD) && void 0 !== t ? t : i
                  ),
                  o = [r.thumbnail_http_address];
                return s.createElement(
                  s.Fragment,
                  null,
                  a &&
                    s.createElement("img", {
                      className: Object(ir.a)(
                        n,
                        Ur.a.stream_icon_hide_on_hover
                      ),
                      src: a.header_image_url,
                    }),
                  s.createElement(Or.b, {
                    className: Object(ir.a)(n, Ur.a.stream_icon_show_on_hover),
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
                case Rr.b.k_eFeatured:
                  return Ur.a.stream_featured;
              }
              return null;
            }),
            (t.prototype.render = function () {
              var e,
                t = this.props,
                n = t.stream,
                i = t.bShowCapsuleArt;
              if (!Object(Rr.d)(n)) return null;
              var a = Cr.a.GetOrCreateBroadcastInfo(n.steamid).m_nAppID,
                o = br.a.GetAppLinkInfo(
                  null !== (e = n.nAppIDVOD) && void 0 !== e ? e : a
                ),
                u = Boolean(i && (null == o ? void 0 : o.header_image_url)),
                c = Number.parseInt("" + n.viewer_count),
                d = !Number.isNaN(c),
                l = !!n.nAppIDVOD && (null == o ? void 0 : o.title);
              return s.createElement(
                "div",
                {
                  className: Object(ir.a)(
                    Ur.a.stream_icon_and_viewer_container,
                    r.GetClassForStreamPriority(n.current_selection_priority),
                    u && Ur.a.display_capsule_art
                  ),
                },
                s.createElement(
                  gr.b,
                  { type: "app", id: a },
                  s.createElement(
                    jr.a,
                    {
                      className: Ur.a.stream_icon_container,
                      onClick: this.onClick,
                      rootMargin: "100px 0px 100px 0px",
                    },
                    this.generateThumbnail(u),
                    this.props.bSelected &&
                      s.createElement("div", {
                        className: Ur.a.stream_icon_arrow,
                      })
                  )
                ),
                s.createElement(
                  "div",
                  {
                    className: Object(ir.a)(
                      Ur.a.viewer_count,
                      !d && Ur.a.vod_title
                    ),
                  },
                  d
                    ? s.createElement(
                        s.Fragment,
                        null,
                        s.createElement(nr.lb, null),
                        " ",
                        c.toLocaleString(St.e.GetPreferredLocales())
                      )
                    : l
                )
              );
            }),
            Object(n.c)([ar.a], t.prototype, "onClick", null),
            (t = r = Object(n.c)([o.a], t))
          );
        })(s.Component),
        Vr = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.render = function () {
              var e = "below" == this.props.orientation,
                t = Cr.a.GetBroadcast(this.props.stream.steamid);
              return t
                ? s.createElement(
                    "div",
                    {
                      className: Object(ir.a)(
                        e
                          ? Ur.a.chat_below_container
                          : Ur.a.chat_rightside_container,
                        Ur.a.store_chat_ctn
                      ),
                    },
                    s.createElement(
                      "div",
                      { className: Ur.a.ChatContainer },
                      s.createElement(mr, {
                        emoticonStore: Rr.g,
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
