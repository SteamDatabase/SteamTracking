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
      var a = r("mrSG"),
        i = r("vDqi"),
        s = r.n(i),
        n = r("TyAF"),
        o = r("q1tI"),
        l = r.n(o),
        c = r("2vnA"),
        d = r("TtDX"),
        m = r("kdZy"),
        u = r("A5MU"),
        _ = (r("mgoM"), r("bxBv")),
        h = r("u2yL"),
        b = r("WBba"),
        B = r("kLLr"),
        p = r("hRO2"),
        g = r("OS8t");
      const y = p.Message;
      class f extends y {
        constructor(e = null) {
          super(),
            f.prototype.broadcast_channel_id || g.a(f.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: g.d.readFixed64String,
                    bw: g.h.writeFixed64String,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = g.e(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(f.M(), e, t);
        }
        static fromObject(e) {
          return g.c(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_CreateBroadcastChannel_Response";
        }
      }
      class S extends y {
        constructor(e = null) {
          super(),
            S.prototype.broadcast_channel_id || g.a(S.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: g.d.readFixed64String,
                    bw: g.h.writeFixed64String,
                  },
                  unique_name: {
                    n: 2,
                    br: g.d.readString,
                    bw: g.h.writeString,
                  },
                  steamid: {
                    n: 3,
                    br: g.d.readFixed64String,
                    bw: g.h.writeFixed64String,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = g.e(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(S.M(), e, t);
        }
        static fromObject(e) {
          return g.c(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelID_Response";
        }
      }
      class w extends y {
        constructor(e = null) {
          super(), y.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new w();
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SetBroadcastChannelProfile_Response";
        }
      }
      class C extends y {
        constructor(e = null) {
          super(),
            C.prototype.unique_name || g.a(C.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  unique_name: {
                    n: 1,
                    br: g.d.readString,
                    bw: g.h.writeString,
                  },
                  owner_steamid: {
                    n: 2,
                    br: g.d.readFixed64String,
                    bw: g.h.writeFixed64String,
                  },
                  name: { n: 3, br: g.d.readString, bw: g.h.writeString },
                  language: { n: 4, br: g.d.readString, bw: g.h.writeString },
                  headline: { n: 5, br: g.d.readString, bw: g.h.writeString },
                  summary: { n: 6, br: g.d.readString, bw: g.h.writeString },
                  schedule: { n: 7, br: g.d.readString, bw: g.h.writeString },
                  rules: { n: 8, br: g.d.readString, bw: g.h.writeString },
                  panels: { n: 9, br: g.d.readString, bw: g.h.writeString },
                  is_partnered: { n: 10, br: g.d.readBool, bw: g.h.writeBool },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = g.e(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(C.M(), e, t);
        }
        static fromObject(e) {
          return g.c(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelProfile_Response";
        }
      }
      class M extends y {
        constructor(e = null) {
          super(),
            M.prototype.replace_image_hash || g.a(M.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  replace_image_hash: {
                    n: 1,
                    br: g.d.readString,
                    bw: g.h.writeString,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = g.e(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(M.M(), e, t);
        }
        static fromObject(e) {
          return g.c(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SetBroadcastChannelImage_Response";
        }
      }
      class v extends y {
        constructor(e = null) {
          super(),
            v.prototype.images || g.a(v.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: { images: { n: 1, c: z, r: !0, q: !0 } },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = g.e(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(v.M(), e, t);
        }
        static fromObject(e) {
          return g.c(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelImages_Response";
        }
      }
      class z extends y {
        constructor(e = null) {
          super(),
            z.prototype.image_type || g.a(z.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  image_type: { n: 1, br: g.d.readEnum, bw: g.h.writeEnum },
                  image_path: { n: 2, br: g.d.readString, bw: g.h.writeString },
                  image_index: {
                    n: 3,
                    br: g.d.readUint32,
                    bw: g.h.writeUint32,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = g.e(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(z.M(), e, t);
        }
        static fromObject(e) {
          return g.c(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelImages_Response_Images";
        }
      }
      class R extends y {
        constructor(e = null) {
          super(),
            R.prototype.links || g.a(R.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: { links: { n: 1, c: O, r: !0, q: !0 } },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = g.e(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(R.M(), e, t);
        }
        static fromObject(e) {
          return g.c(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelLinks_Response";
        }
      }
      class O extends y {
        constructor(e = null) {
          super(),
            O.prototype.link_index || g.a(O.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  link_index: { n: 1, br: g.d.readUint32, bw: g.h.writeUint32 },
                  url: { n: 2, br: g.d.readString, bw: g.h.writeString },
                  link_description: {
                    n: 3,
                    br: g.d.readString,
                    bw: g.h.writeString,
                  },
                  left: { n: 4, br: g.d.readUint32, bw: g.h.writeUint32 },
                  top: { n: 5, br: g.d.readUint32, bw: g.h.writeUint32 },
                  width: { n: 6, br: g.d.readUint32, bw: g.h.writeUint32 },
                  height: { n: 7, br: g.d.readUint32, bw: g.h.writeUint32 },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = g.e(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(O.M(), e, t);
        }
        static fromObject(e) {
          return g.c(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelLinks_Response_Links";
        }
      }
      class F extends y {
        constructor(e = null) {
          super(), y.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new F();
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SetBroadcastChannelLinkRegions_Response";
        }
      }
      class T extends y {
        constructor(e = null) {
          super(),
            T.prototype.is_live || g.a(T.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  is_live: { n: 1, br: g.d.readBool, bw: g.h.writeBool },
                  is_disabled: { n: 2, br: g.d.readBool, bw: g.h.writeBool },
                  appid: { n: 3, br: g.d.readUint32, bw: g.h.writeUint32 },
                  viewers: {
                    n: 4,
                    br: g.d.readUint64String,
                    bw: g.h.writeUint64String,
                  },
                  views: {
                    n: 5,
                    br: g.d.readUint64String,
                    bw: g.h.writeUint64String,
                  },
                  broadcaster_steamid: {
                    n: 6,
                    br: g.d.readFixed64String,
                    bw: g.h.writeFixed64String,
                  },
                  thumbnail_url: {
                    n: 7,
                    br: g.d.readString,
                    bw: g.h.writeString,
                  },
                  followers: {
                    n: 8,
                    br: g.d.readUint64String,
                    bw: g.h.writeUint64String,
                  },
                  subscribers: {
                    n: 9,
                    br: g.d.readUint64String,
                    bw: g.h.writeUint64String,
                  },
                  unique_name: {
                    n: 10,
                    br: g.d.readString,
                    bw: g.h.writeString,
                  },
                  broadcast_session_id: {
                    n: 11,
                    br: g.d.readUint64String,
                    bw: g.h.writeUint64String,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = g.e(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(T.M(), e, t);
        }
        static fromObject(e) {
          return g.c(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelStatus_Response";
        }
      }
      class j extends y {
        constructor(e = null) {
          super(),
            j.prototype.broadcast_channel_id || g.a(j.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: g.d.readFixed64String,
                    bw: g.h.writeFixed64String,
                  },
                  unique_name: {
                    n: 2,
                    br: g.d.readString,
                    bw: g.h.writeString,
                  },
                  name: { n: 3, br: g.d.readString, bw: g.h.writeString },
                  appid: { n: 4, br: g.d.readUint32, bw: g.h.writeUint32 },
                  viewers: {
                    n: 5,
                    br: g.d.readUint64String,
                    bw: g.h.writeUint64String,
                  },
                  views: {
                    n: 6,
                    br: g.d.readUint64String,
                    bw: g.h.writeUint64String,
                  },
                  thumbnail_url: {
                    n: 7,
                    br: g.d.readString,
                    bw: g.h.writeString,
                  },
                  followers: {
                    n: 8,
                    br: g.d.readUint64String,
                    bw: g.h.writeUint64String,
                  },
                  headline: { n: 9, br: g.d.readString, bw: g.h.writeString },
                  avatar_url: {
                    n: 10,
                    br: g.d.readString,
                    bw: g.h.writeString,
                  },
                  broadcaster_steamid: {
                    n: 11,
                    br: g.d.readFixed64String,
                    bw: g.h.writeFixed64String,
                  },
                  subscribers: {
                    n: 12,
                    br: g.d.readUint64String,
                    bw: g.h.writeUint64String,
                  },
                  background_url: {
                    n: 13,
                    br: g.d.readString,
                    bw: g.h.writeString,
                  },
                  is_featured: { n: 14, br: g.d.readBool, bw: g.h.writeBool },
                  is_disabled: { n: 15, br: g.d.readBool, bw: g.h.writeBool },
                  is_live: { n: 16, br: g.d.readBool, bw: g.h.writeBool },
                  language: { n: 17, br: g.d.readString, bw: g.h.writeString },
                  reports: { n: 18, br: g.d.readUint32, bw: g.h.writeUint32 },
                  is_partnered: { n: 19, br: g.d.readBool, bw: g.h.writeBool },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = g.e(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(j.M(), e, t);
        }
        static fromObject(e) {
          return g.c(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "GetBroadcastChannelEntry";
        }
      }
      class W extends y {
        constructor(e = null) {
          super(),
            W.prototype.results || g.a(W.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: { results: { n: 1, c: j, r: !0, q: !0 } },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = g.e(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(W.M(), e, t);
        }
        static fromObject(e) {
          return g.c(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetFollowedChannels_Response";
        }
      }
      class I extends y {
        constructor(e = null) {
          super(),
            I.prototype.results || g.a(I.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: { results: { n: 1, c: j, r: !0, q: !0 } },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = g.e(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(I.M(), e, t);
        }
        static fromObject(e) {
          return g.c(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetSubscribedChannels_Response";
        }
      }
      class E extends y {
        constructor(e = null) {
          super(),
            E.prototype.is_followed || g.a(E.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  is_followed: { n: 1, br: g.d.readBool, bw: g.h.writeBool },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = g.e(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(E.M(), e, t);
        }
        static fromObject(e) {
          return g.c(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_FollowBroadcastChannel_Response";
        }
      }
      class x extends y {
        constructor(e = null) {
          super(),
            x.prototype.is_subscribed || g.a(x.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  is_subscribed: { n: 1, br: g.d.readBool, bw: g.h.writeBool },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = g.e(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(x.M(), e, t);
        }
        static fromObject(e) {
          return g.c(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SubscribeBroadcastChannel_Response";
        }
      }
      class P extends y {
        constructor(e = null) {
          super(), y.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new P();
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_ReportBroadcastChannel_Response";
        }
      }
      class N extends y {
        constructor(e = null) {
          super(),
            N.prototype.is_followed || g.a(N.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  is_followed: { n: 1, br: g.d.readBool, bw: g.h.writeBool },
                  is_subscribed: { n: 2, br: g.d.readBool, bw: g.h.writeBool },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = g.e(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(N.M(), e, t);
        }
        static fromObject(e) {
          return g.c(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelInteraction_Response";
        }
      }
      class U extends y {
        constructor(e = null) {
          super(),
            U.prototype.appid || g.a(U.M()),
            y.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  appid: { n: 1, br: g.d.readUint32, bw: g.h.writeUint32 },
                  name: { n: 2, br: g.d.readString, bw: g.h.writeString },
                  image: { n: 3, br: g.d.readString, bw: g.h.writeString },
                  viewers: {
                    n: 4,
                    br: g.d.readUint64String,
                    bw: g.h.writeUint64String,
                  },
                  channels: { n: 5, c: j, r: !0, q: !0 },
                  release_date: {
                    n: 6,
                    br: g.d.readString,
                    bw: g.h.writeString,
                  },
                  developer: { n: 7, br: g.d.readString, bw: g.h.writeString },
                  publisher: { n: 8, br: g.d.readString, bw: g.h.writeString },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = g.e(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(U.M(), e, t);
        }
        static fromObject(e) {
          return g.c(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_Game";
        }
      }
      class D extends y {
        constructor(e = null) {
          super(),
            D.prototype.results || g.a(D.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: { results: { n: 1, c: U, r: !0, q: !0 } },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = g.e(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(D.M(), e, t);
        }
        static fromObject(e) {
          return g.c(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetGames_Response";
        }
      }
      class G extends y {
        constructor(e = null) {
          super(),
            G.prototype.results || g.a(G.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: { results: { n: 1, c: j, r: !0, q: !0 } },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = g.e(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(G.M(), e, t);
        }
        static fromObject(e) {
          return g.c(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetChannels_Response";
        }
      }
      class A extends y {
        constructor(e = null) {
          super(),
            A.prototype.broadcasters || g.a(A.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: { broadcasters: { n: 1, c: L, r: !0, q: !0 } },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = g.e(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(A.M(), e, t);
        }
        static fromObject(e) {
          return g.c(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelBroadcasters_Response";
        }
      }
      class L extends y {
        constructor(e = null) {
          super(),
            L.prototype.steamid || g.a(L.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  steamid: {
                    n: 1,
                    br: g.d.readFixed64String,
                    bw: g.h.writeFixed64String,
                  },
                  name: { n: 2, br: g.d.readString, bw: g.h.writeString },
                  rtmp_token: { n: 3, br: g.d.readString, bw: g.h.writeString },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = g.e(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(L.M(), e, t);
        }
        static fromObject(e) {
          return g.c(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster";
        }
      }
      class k extends y {
        constructor(e = null) {
          super(),
            k.prototype.issuer_steamid || g.a(k.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  issuer_steamid: {
                    n: 1,
                    br: g.d.readFixed64String,
                    bw: g.h.writeFixed64String,
                  },
                  chatter_steamid: {
                    n: 2,
                    br: g.d.readFixed64String,
                    bw: g.h.writeFixed64String,
                  },
                  time_expires: {
                    n: 3,
                    br: g.d.readString,
                    bw: g.h.writeString,
                  },
                  permanent: { n: 4, br: g.d.readBool, bw: g.h.writeBool },
                  name: { n: 5, br: g.d.readString, bw: g.h.writeString },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = g.e(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(k.M(), e, t);
        }
        static fromObject(e) {
          return g.c(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_ChatBan";
        }
      }
      class V extends y {
        constructor(e = null) {
          super(),
            V.prototype.broadcast_channel_id || g.a(V.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: g.d.readFixed64String,
                    bw: g.h.writeFixed64String,
                  },
                  chatter_steamid: {
                    n: 2,
                    br: g.d.readFixed64String,
                    bw: g.h.writeFixed64String,
                  },
                  duration: { n: 3, br: g.d.readUint32, bw: g.h.writeUint32 },
                  permanent: { n: 4, br: g.d.readBool, bw: g.h.writeBool },
                  undo: { n: 5, br: g.d.readBool, bw: g.h.writeBool },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = g.e(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(V.M(), e, t);
        }
        static fromObject(e) {
          return g.c(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AddChatBan_Request";
        }
      }
      class q extends y {
        constructor(e = null) {
          super(), y.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new q();
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AddChatBan_Response";
        }
      }
      class H extends y {
        constructor(e = null) {
          super(),
            H.prototype.results || g.a(H.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: { results: { n: 1, c: k, r: !0, q: !0 } },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = g.e(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(H.M(), e, t);
        }
        static fromObject(e) {
          return g.c(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetChatBans_Response";
        }
      }
      class $ extends y {
        constructor(e = null) {
          super(), y.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new $();
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AddChatModerator_Response";
        }
      }
      class K extends y {
        constructor(e = null) {
          super(),
            K.prototype.broadcast_channel_id || g.a(K.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            K.sm_m ||
              (K.sm_m = {
                proto: K,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: g.d.readFixed64String,
                    bw: g.h.writeFixed64String,
                  },
                },
              }),
            K.sm_m
          );
        }
        static MBF() {
          return K.sm_mbf || (K.sm_mbf = g.e(K.M())), K.sm_mbf;
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(K.M(), e, t);
        }
        static fromObject(e) {
          return g.c(K.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(K.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(K.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetChatModerators_Request";
        }
      }
      class Y extends y {
        constructor(e = null) {
          super(),
            Y.prototype.steamid || g.a(Y.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  steamid: {
                    n: 1,
                    br: g.d.readFixed64String,
                    bw: g.h.writeFixed64String,
                  },
                  name: { n: 2, br: g.d.readString, bw: g.h.writeString },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = g.e(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(Y.M(), e, t);
        }
        static fromObject(e) {
          return g.c(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_ChatModerator";
        }
      }
      class J extends y {
        constructor(e = null) {
          super(),
            J.prototype.results || g.a(J.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: { results: { n: 1, c: Y, r: !0, q: !0 } },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = g.e(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(J.M(), e, t);
        }
        static fromObject(e) {
          return g.c(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetChatModerators_Response";
        }
      }
      class X extends y {
        constructor(e = null) {
          super(), y.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new X();
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AddWordBan_Response";
        }
      }
      class Q extends y {
        constructor(e = null) {
          super(),
            Q.prototype.results || g.a(Q.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: {
                  results: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: g.d.readString,
                    bw: g.h.writeRepeatedString,
                  },
                },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = g.e(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(Q.M(), e, t);
        }
        static fromObject(e) {
          return g.c(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetWordBans_Response";
        }
      }
      class Z extends y {
        constructor(e = null) {
          super(),
            Z.prototype.broadcast_channel_id || g.a(Z.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: g.d.readFixed64String,
                    bw: g.h.writeFixed64String,
                  },
                },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = g.e(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(Z.M(), e, t);
        }
        static fromObject(e) {
          return g.c(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_JoinChat_Request";
        }
      }
      class ee extends y {
        constructor(e = null) {
          super(),
            ee.prototype.chat_id || g.a(ee.M()),
            y.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  chat_id: {
                    n: 1,
                    br: g.d.readFixed64String,
                    bw: g.h.writeFixed64String,
                  },
                  view_url_template: {
                    n: 2,
                    br: g.d.readString,
                    bw: g.h.writeString,
                  },
                  flair_group_ids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: g.d.readUint64String,
                    bw: g.h.writeRepeatedUint64String,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = g.e(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(ee.M(), e, t);
        }
        static fromObject(e) {
          return g.c(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_JoinChat_Response";
        }
      }
      class te extends y {
        constructor(e = null) {
          super(),
            te.prototype.results || g.a(te.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: { results: { n: 1, c: j, r: !0, q: !0 } },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = g.e(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(te.M(), e, t);
        }
        static fromObject(e) {
          return g.c(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_Search_Response";
        }
      }
      class re extends y {
        constructor(e = null) {
          super(),
            re.prototype.stream_live_email || g.a(re.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  stream_live_email: {
                    n: 1,
                    br: g.d.readBool,
                    bw: g.h.writeBool,
                  },
                  stream_live_notification: {
                    n: 2,
                    br: g.d.readBool,
                    bw: g.h.writeBool,
                  },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = g.e(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(re.M(), e, t);
        }
        static fromObject(e) {
          return g.c(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetSteamTVUserSettings_Response";
        }
      }
      class ae extends y {
        constructor(e = null) {
          super(), y.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ae();
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SetSteamTVUserSettings_Response";
        }
      }
      class ie extends y {
        constructor(e = null) {
          super(),
            ie.prototype.results || g.a(ie.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: { results: { n: 1, c: j, r: !0, q: !0 } },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = g.e(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(ie.M(), e, t);
        }
        static fromObject(e) {
          return g.c(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetMyBroadcastChannels_Response";
        }
      }
      class se extends y {
        constructor(e = null) {
          super(),
            se.prototype.broadcasts || g.a(se.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: { broadcasts: { n: 1, c: j, r: !0, q: !0 } },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = g.e(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(se.M(), e, t);
        }
        static fromObject(e) {
          return g.c(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_Takeover";
        }
      }
      class ne extends y {
        constructor(e = null) {
          super(),
            ne.prototype.broadcasts || g.a(ne.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  broadcasts: { n: 1, c: j, r: !0, q: !0 },
                  appid: { n: 2, br: g.d.readUint32, bw: g.h.writeUint32 },
                  title: { n: 3, br: g.d.readString, bw: g.h.writeString },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = g.e(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(ne.M(), e, t);
        }
        static fromObject(e) {
          return g.c(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_SingleGame";
        }
      }
      class oe extends y {
        constructor(e = null) {
          super(),
            oe.prototype.appid || g.a(oe.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  appid: { n: 1, br: g.d.readUint32, bw: g.h.writeUint32 },
                  game_name: { n: 2, br: g.d.readString, bw: g.h.writeString },
                  broadcast: { n: 3, c: j },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = g.e(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(oe.M(), e, t);
        }
        static fromObject(e) {
          return g.c(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "GameListEntry";
        }
      }
      class le extends y {
        constructor(e = null) {
          super(),
            le.prototype.entries || g.a(le.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  entries: { n: 1, c: oe, r: !0, q: !0 },
                  title: { n: 2, br: g.d.readString, bw: g.h.writeString },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = g.e(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(le.M(), e, t);
        }
        static fromObject(e) {
          return g.c(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_GameList";
        }
      }
      class ce extends y {
        constructor(e = null) {
          super(),
            ce.prototype.broadcasts || g.a(ce.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  broadcasts: { n: 1, c: j, r: !0, q: !0 },
                  title: { n: 2, br: g.d.readString, bw: g.h.writeString },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = g.e(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(ce.M(), e, t);
        }
        static fromObject(e) {
          return g.c(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_QuickExplore";
        }
      }
      class de extends y {
        constructor(e = null) {
          super(),
            de.prototype.broadcasts || g.a(de.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  broadcasts: { n: 1, c: j, r: !0, q: !0 },
                  title: { n: 2, br: g.d.readString, bw: g.h.writeString },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = g.e(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(de.M(), e, t);
        }
        static fromObject(e) {
          return g.c(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_ConveyorBelt";
        }
      }
      class me extends y {
        constructor(e = null) {
          super(),
            me.prototype.broadcast || g.a(me.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  broadcast: { n: 1, c: j },
                  title: { n: 2, br: g.d.readString, bw: g.h.writeString },
                  chat_group_id: {
                    n: 3,
                    br: g.d.readUint64String,
                    bw: g.h.writeUint64String,
                  },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = g.e(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(me.M(), e, t);
        }
        static fromObject(e) {
          return g.c(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_WatchParty";
        }
      }
      class ue extends y {
        constructor(e = null) {
          super(),
            ue.prototype.broadcast || g.a(ue.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  broadcast: { n: 1, c: j },
                  title: { n: 2, br: g.d.readString, bw: g.h.writeString },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = g.e(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(ue.M(), e, t);
        }
        static fromObject(e) {
          return g.c(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_Developer";
        }
      }
      class _e extends y {
        constructor(e = null) {
          super(),
            _e.prototype.title || g.a(_e.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  title: { n: 1, br: g.d.readString, bw: g.h.writeString },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = g.e(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(_e.M(), e, t);
        }
        static fromObject(e) {
          return g.c(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_Event";
        }
      }
      class he extends y {
        constructor(e = null) {
          super(),
            he.prototype.template_type || g.a(he.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  template_type: { n: 1, br: g.d.readEnum, bw: g.h.writeEnum },
                  takeover: { n: 2, c: se },
                  single_game: { n: 3, c: ne },
                  game_list: { n: 4, c: le },
                  quick_explore: { n: 5, c: ce },
                  conveyor_belt: { n: 6, c: de },
                  watch_party: { n: 7, c: me },
                  developer: { n: 8, c: ue },
                  event: { n: 9, c: _e },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = g.e(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(he.M(), e, t);
        }
        static fromObject(e) {
          return g.c(he.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(he.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(he.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageContentRow";
        }
      }
      class be extends y {
        constructor(e = null) {
          super(),
            be.prototype.rows || g.a(be.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: { rows: { n: 1, c: he, r: !0, q: !0 } },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = g.e(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(be.M(), e, t);
        }
        static fromObject(e) {
          return g.c(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetHomePageContents_Response";
        }
      }
      class Be extends y {
        constructor(e = null) {
          super(),
            Be.prototype.broadcast_clip_id || g.a(Be.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  broadcast_clip_id: {
                    n: 1,
                    br: g.d.readUint64String,
                    bw: g.h.writeUint64String,
                  },
                  channel_id: {
                    n: 2,
                    br: g.d.readUint64String,
                    bw: g.h.writeUint64String,
                  },
                  app_id: { n: 3, br: g.d.readUint32, bw: g.h.writeUint32 },
                  broadcaster_steamid: {
                    n: 4,
                    br: g.d.readFixed64String,
                    bw: g.h.writeFixed64String,
                  },
                  creator_steamid: {
                    n: 5,
                    br: g.d.readFixed64String,
                    bw: g.h.writeFixed64String,
                  },
                  video_description: {
                    n: 6,
                    br: g.d.readString,
                    bw: g.h.writeString,
                  },
                  live_time: { n: 7, br: g.d.readUint32, bw: g.h.writeUint32 },
                  length_ms: { n: 8, br: g.d.readUint32, bw: g.h.writeUint32 },
                  thumbnail_path: {
                    n: 9,
                    br: g.d.readString,
                    bw: g.h.writeString,
                  },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = g.e(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(Be.M(), e, t);
        }
        static fromObject(e) {
          return g.c(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_BroadcastClipInfo";
        }
      }
      class pe extends y {
        constructor(e = null) {
          super(),
            pe.prototype.clips || g.a(pe.M()),
            y.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: {
                  clips: { n: 1, c: Be, r: !0, q: !0 },
                  thumbnail_host: {
                    n: 2,
                    br: g.d.readString,
                    bw: g.h.writeString,
                  },
                },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = g.e(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(pe.M(), e, t);
        }
        static fromObject(e) {
          return g.c(pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelClips_Response";
        }
      }
      class ge extends y {
        constructor(e = null) {
          super(),
            ge.prototype.aggregation_delay_ms || g.a(ge.M()),
            y.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
                fields: {
                  aggregation_delay_ms: {
                    n: 1,
                    br: g.d.readUint32,
                    bw: g.h.writeUint32,
                  },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = g.e(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(ge.M(), e, t);
        }
        static fromObject(e) {
          return g.c(ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AppCheer_Response";
        }
      }
      var ye;
      !(function (e) {
        (e.CreateBroadcastChannel = function (e, t) {
          return e.SendMsg("SteamTV.CreateBroadcastChannel#1", t, f, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
          (e.GetBroadcastChannelID = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelID#1", t, S, {
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
            return e.SendMsg("SteamTV.GetBroadcastChannelProfile#1", t, C, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelImage = function (e, t) {
            return e.SendMsg("SteamTV.SetBroadcastChannelImage#1", t, M, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelImages = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelImages#1", t, v, {
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
            return e.SendMsg("SteamTV.GetBroadcastChannelLinks#1", t, R, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.GetBroadcastChannelBroadcasters = function (e, t) {
            return e.SendMsg(
              "SteamTV.GetBroadcastChannelBroadcasters#1",
              t,
              A,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 }
            );
          }),
          (e.GetFollowedChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetFollowedChannels#1", t, W, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetSubscribedChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetSubscribedChannels#1", t, I, {
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
            return e.SendMsg("SteamTV.FollowBroadcastChannel#1", t, E, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SubscribeBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.SubscribeBroadcastChannel#1", t, x, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelClips = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelClips#1", t, pe, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.ReportBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.ReportBroadcastChannel#1", t, P, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelInteraction = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelInteraction#1", t, N, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetGames = function (e, t) {
            return e.SendMsg("SteamTV.GetGames#1", t, D, {
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
            return e.SendMsg("SteamTV.AddChatBan#1", t, q, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetChatBans = function (e, t) {
            return e.SendMsg("SteamTV.GetChatBans#1", t, H, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.AddChatModerator = function (e, t) {
            return e.SendMsg("SteamTV.AddChatModerator#1", t, $, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetChatModerators = function (e, t) {
            return e.SendMsg("SteamTV.GetChatModerators#1", t, J, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.AddWordBan = function (e, t) {
            return e.SendMsg("SteamTV.AddWordBan#1", t, X, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetWordBans = function (e, t) {
            return e.SendMsg("SteamTV.GetWordBans#1", t, Q, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.JoinChat = function (e, t) {
            return e.SendMsg("SteamTV.JoinChat#1", t, ee, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.Search = function (e, t) {
            return e.SendMsg("SteamTV.Search#1", t, te, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.GetSteamTVUserSettings = function (e, t) {
            return e.SendMsg("SteamTV.GetSteamTVUserSettings#1", t, re, {
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
            return e.SendMsg("SteamTV.GetMyBroadcastChannels#1", t, ie, {
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
      })(ye || (ye = {}));
      r("AiWL");
      var fe = r("qiKp"),
        Se = r("TLQK"),
        we = r("XxJJ"),
        Ce = r("lkRc"),
        Me = r("2ErG");
      const ve = p.Message;
      class ze extends ve {
        constructor(e = null) {
          super(),
            ze.prototype.groupid || g.a(ze.M()),
            ve.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            ze.sm_m ||
              (ze.sm_m = {
                proto: ze,
                fields: {
                  groupid: { n: 1, br: g.d.readUint32, bw: g.h.writeUint32 },
                  name: { n: 2, br: g.d.readString, bw: g.h.writeString },
                  accountid_members: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: g.d.readUint32,
                    bw: g.h.writeRepeatedUint32,
                  },
                },
              }),
            ze.sm_m
          );
        }
        static MBF() {
          return ze.sm_mbf || (ze.sm_mbf = g.e(ze.M())), ze.sm_mbf;
        }
        toObject(e = !1) {
          return ze.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(ze.M(), e, t);
        }
        static fromObject(e) {
          return g.c(ze.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new ze();
          return ze.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(ze.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(ze.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return ze.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsListCategory";
        }
      }
      class Re extends ve {
        constructor(e = null) {
          super(),
            Re.prototype.categories || g.a(Re.M()),
            ve.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Re.sm_m ||
              (Re.sm_m = {
                proto: Re,
                fields: { categories: { n: 1, c: ze, r: !0, q: !0 } },
              }),
            Re.sm_m
          );
        }
        static MBF() {
          return Re.sm_mbf || (Re.sm_mbf = g.e(Re.M())), Re.sm_mbf;
        }
        toObject(e = !1) {
          return Re.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(Re.M(), e, t);
        }
        static fromObject(e) {
          return g.c(Re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new Re();
          return Re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(Re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(Re.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return Re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetCategories_Response";
        }
      }
      class Oe extends ve {
        constructor(e = null) {
          super(),
            Oe.prototype.accountid || g.a(Oe.M()),
            ve.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Oe.sm_m ||
              (Oe.sm_m = {
                proto: Oe,
                fields: {
                  accountid: { n: 1, br: g.d.readUint32, bw: g.h.writeUint32 },
                  clanid: { n: 2, br: g.d.readUint32, bw: g.h.writeUint32 },
                  chat_group_id: {
                    n: 3,
                    br: g.d.readUint64String,
                    bw: g.h.writeUint64String,
                  },
                },
              }),
            Oe.sm_m
          );
        }
        static MBF() {
          return Oe.sm_mbf || (Oe.sm_mbf = g.e(Oe.M())), Oe.sm_mbf;
        }
        toObject(e = !1) {
          return Oe.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(Oe.M(), e, t);
        }
        static fromObject(e) {
          return g.c(Oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new Oe();
          return Oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(Oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(Oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return Oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsListFavoriteEntry";
        }
      }
      class Fe extends ve {
        constructor(e = null) {
          super(),
            Fe.prototype.favorites || g.a(Fe.M()),
            ve.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Fe.sm_m ||
              (Fe.sm_m = {
                proto: Fe,
                fields: { favorites: { n: 1, c: Oe, r: !0, q: !0 } },
              }),
            Fe.sm_m
          );
        }
        static MBF() {
          return Fe.sm_mbf || (Fe.sm_mbf = g.e(Fe.M())), Fe.sm_mbf;
        }
        toObject(e = !1) {
          return Fe.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(Fe.M(), e, t);
        }
        static fromObject(e) {
          return g.c(Fe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new Fe();
          return Fe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(Fe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(Fe.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return Fe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFavorites_Response";
        }
      }
      class Te extends ve {
        constructor(e = null) {
          super(), ve.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return Te.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new Te();
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new Te();
          return Te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return Te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_SetFavorites_Response";
        }
      }
      class je extends ve {
        constructor(e = null) {
          super(),
            je.prototype.favorites || g.a(je.M()),
            ve.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            je.sm_m ||
              (je.sm_m = {
                proto: je,
                fields: { favorites: { n: 1, c: Oe, r: !0, q: !0 } },
              }),
            je.sm_m
          );
        }
        static MBF() {
          return je.sm_mbf || (je.sm_mbf = g.e(je.M())), je.sm_mbf;
        }
        toObject(e = !1) {
          return je.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(je.M(), e, t);
        }
        static fromObject(e) {
          return g.c(je.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new je();
          return je.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(je.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(je.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return je.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_FavoritesChanged_Notification";
        }
      }
      class We extends ve {
        constructor(e = null) {
          super(), ve.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return We.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new We();
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new We();
          return We.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return We.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFriendsList_Request";
        }
      }
      class Ie extends ve {
        constructor(e = null) {
          super(),
            Ie.prototype.friendslist || g.a(Ie.M()),
            ve.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Ie.sm_m ||
              (Ie.sm_m = {
                proto: Ie,
                fields: { friendslist: { n: 1, c: Me.b } },
              }),
            Ie.sm_m
          );
        }
        static MBF() {
          return Ie.sm_mbf || (Ie.sm_mbf = g.e(Ie.M())), Ie.sm_mbf;
        }
        toObject(e = !1) {
          return Ie.toObject(e, this);
        }
        static toObject(e, t) {
          return g.g(Ie.M(), e, t);
        }
        static fromObject(e) {
          return g.c(Ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new p.BinaryReader(e),
            r = new Ie();
          return Ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return g.b(Ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new p.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          g.f(Ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new p.BinaryWriter();
          return Ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFriendsList_Response";
        }
      }
      var Ee, xe;
      !(function (e) {
        (e.GetCategories = function (e, t) {
          return e.SendMsg("FriendsList.GetCategories#1", t, Re, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
          (e.GetFriendsList = function (e, t) {
            return e.SendMsg("FriendsList.GetFriendsList#1", t, Ie, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.GetFavorites#1", t, Fe, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.SetFavorites#1", t, Te, {
              ePrivilege: 1,
            });
          });
      })(Ee || (Ee = {})),
        (function (e) {
          e.FavoritesChangedHandler = {
            name: "FriendsListClient.FavoritesChanged#1",
            request: je,
          };
        })(xe || (xe = {}));
      var Pe = r("oFam"),
        Ne = (r("75qM"), r("kyHq")),
        Ue = r("uobO");
      class De {
        constructor() {
          (this.m_mapPlayerCache = new Map()),
            (this.m_strBannedWords = ""),
            (this.m_strProfanityWords = ""),
            (this.m_strCleanWords = ""),
            (this.m_strBannedPattern = ""),
            (this.m_strCleanPattern = ""),
            (this.m_regexBannedWords = null),
            (this.m_regexCleanWords = null),
            (this.m_bShownFilterTip = !1),
            (this.m_TextFilterPreferences = new Ne.l());
          {
            let e = new Pe.a();
            (this.m_TextFilterPreferences.eTextFilterSetting = e.text_filter_setting()),
              (this.m_TextFilterPreferences.bIgnoreFriends = e.text_filter_ignore_friends());
          }
          this.m_TextFilterWords = new Pe.l();
        }
        Init(e = 0, t = null, r = null) {
          return Object(a.a)(this, void 0, void 0, function* () {
            (this.m_unAccountID = e),
              (this.m_Transport = t),
              (this.m_Storage = r),
              (this.m_strBannedWords = ""),
              (this.m_strProfanityWords = ""),
              (this.m_strCleanWords = ""),
              yield this.LoadFilter(),
              yield this.LoadTextFilterPreferences(),
              yield this.LoadTextFilterWords(),
              yield this.RequestUpdatedSettings(),
              yield this.RequestFriendsList(),
              yield this.LoadLanguage(Ce.d.LANGUAGE),
              "english" !== Ce.d.LANGUAGE &&
                (yield this.LoadLanguage("english")),
              this.OnFilterDataChanged();
          });
        }
        LoadTextFilterPreferences() {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (this.m_Storage) {
              let e = yield this.m_Storage.GetObject(
                "CTextFilterStore_TextFilterPreferences"
              );
              e && (this.m_TextFilterPreferences = e);
            }
          });
        }
        SaveTextFilterPreferences() {
          this.m_Storage &&
            this.m_Storage.StoreObject(
              "CTextFilterStore_TextFilterPreferences",
              this.m_TextFilterPreferences
            );
        }
        LoadTextFilterWords() {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (this.m_Storage) {
              let e = yield this.m_Storage.GetObject(
                "CTextFilterStore_TextFilterWords"
              );
              e && (this.m_TextFilterWords = Pe.l.fromObject(e));
            }
          });
        }
        SaveTextFilterWords() {
          this.m_Storage &&
            this.m_Storage.StoreObject(
              "CTextFilterStore_TextFilterWords",
              this.m_TextFilterWords.toObject()
            );
        }
        LoadFilter() {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (this.m_Storage) {
              let e = yield this.m_Storage.GetObject(
                  "CTextFilterStore_strBannedPattern"
                ),
                t = yield this.m_Storage.GetObject(
                  "CTextFilterStore_strCleanPattern"
                );
              null != e && null != t && this.BRebuildFilter(e, t);
            }
          });
        }
        SaveFilter() {
          this.m_Storage &&
            (this.m_Storage.StoreObject(
              "CTextFilterStore_strBannedPattern",
              this.m_strBannedPattern
            ),
            this.m_Storage.StoreObject(
              "CTextFilterStore_strCleanPattern",
              this.m_strCleanPattern
            ));
        }
        RequestUpdatedSettings() {
          return Object(a.a)(this, void 0, void 0, function* () {
            let e = new Pe.a();
            if (0 !== this.m_unAccountID)
              try {
                if (this.m_Transport) {
                  let t = _.b.Init(Pe.b);
                  e = (yield Pe.m.GetCommunityPreferences(this.m_Transport, t))
                    .Body()
                    .preferences();
                } else {
                  let t = { sessionid: Ce.d.SESSIONID, origin: Object(Ce.f)() };
                  const r = yield s.a.get(
                    Ce.d.COMMUNITY_BASE_URL +
                      "textfilter/ajaxgetcommunitypreferences",
                    { params: t, withCredentials: !0 }
                  );
                  e = Pe.a.fromObject(r.data.preferences);
                }
              } catch (e) {}
            if (
              (this.UpdateCommunityPreferences(e),
              e.text_filter_words_revision() !==
                this.m_TextFilterWords.text_filter_words_revision())
            ) {
              let t = new Pe.l();
              if (0 !== e.text_filter_words_revision())
                try {
                  if (this.m_Transport) {
                    let e = _.b.Init(Pe.f);
                    t = (yield Pe.m.GetTextFilterWords(this.m_Transport, e))
                      .Body()
                      .words();
                  } else {
                    let e = {
                      sessionid: Ce.d.SESSIONID,
                      origin: Object(Ce.f)(),
                    };
                    const r = yield s.a.get(
                      Ce.d.COMMUNITY_BASE_URL +
                        "textfilter/ajaxgettextfiltercustomwords",
                      { params: e, withCredentials: !0 }
                    );
                    t = Pe.l.fromObject(r.data.words);
                  }
                } catch (e) {}
              this.UpdateTextFilterWords(t);
            }
          });
        }
        UpdateCommunityPreferences(e) {
          let t = !1;
          e.text_filter_setting() !==
            this.m_TextFilterPreferences.eTextFilterSetting &&
            ((this.m_TextFilterPreferences.eTextFilterSetting = e.text_filter_setting()),
            (t = !0)),
            e.text_filter_ignore_friends() !==
              this.m_TextFilterPreferences.bIgnoreFriends &&
              ((this.m_TextFilterPreferences.bIgnoreFriends = e.text_filter_ignore_friends()),
              (t = !0)),
            t && this.SaveTextFilterPreferences();
        }
        get TextFilterPreferences() {
          return this.m_TextFilterPreferences;
        }
        UpdateTextFilterWords(e) {
          (this.m_TextFilterWords = e), this.SaveTextFilterWords();
        }
        RequestFriendsList() {
          return Object(a.a)(this, void 0, void 0, function* () {
            let e = new Me.b();
            if (0 !== this.m_unAccountID)
              try {
                if (this.m_Transport) {
                  let t = _.b.Init(We);
                  e = (yield Ee.GetFriendsList(this.m_Transport, t))
                    .Body()
                    .friendslist();
                } else {
                  let t = { sessionid: Ce.d.SESSIONID, origin: Object(Ce.f)() };
                  const r = yield s.a.get(
                    Ce.d.COMMUNITY_BASE_URL + "textfilter/ajaxgetfriendslist",
                    { params: t, withCredentials: !0 }
                  );
                  e = Me.b.fromObject(r.data.friendslist);
                }
              } catch (e) {}
            this.SetFriendsList(e);
          });
        }
        SetFriendsList(e) {
          e.bincremental() || this.m_mapPlayerCache.clear();
          for (let t of e.friends()) {
            let e = new B.a(t.ulfriendid());
            if (e.BIsIndividualAccount()) {
              let r = t.efriendrelationship();
              this.m_mapPlayerCache.set(e.GetAccountID(), r);
            }
          }
        }
        BIsFriend(e) {
          return (
            !!this.m_mapPlayerCache.has(e) && 3 == this.m_mapPlayerCache.get(e)
          );
        }
        LoadLanguage(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            let t = `${
              Ce.d.COMMUNITY_CDN_URL
            }textfilter/gettextfilterdictionary?type=banned&language=${e}&v=1&origin=${Object(
              Ce.f
            )()}`;
            try {
              const e = yield s.a.get(t);
              this.m_strBannedWords += e.data;
            } catch (e) {
              console.error("Failed to load filter dictionary " + t, e);
            }
            t = `${
              Ce.d.COMMUNITY_CDN_URL
            }textfilter/gettextfilterdictionary?type=profanity&language=${e}&v=1&origin=${Object(
              Ce.f
            )()}`;
            try {
              const e = yield s.a.get(t);
              this.m_strProfanityWords += e.data;
            } catch (e) {
              console.error("Failed to load filter dictionary " + t, e);
            }
            t = `${
              Ce.d.COMMUNITY_CDN_URL
            }textfilter/gettextfilterdictionary?type=clean_public&language=${e}&v=1&origin=${Object(
              Ce.f
            )()}`;
            try {
              const e = yield s.a.get(t);
              this.m_strCleanWords += e.data;
            } catch (e) {
              console.error("Failed to load filter dictionary " + t, e);
            }
          });
        }
        AppendPattern(e, t) {
          return "" !== t && ("" !== e && (e += "|"), (e += t)), e;
        }
        CreatePattern(e) {
          let t = e.filter(function (e) {
            return "" !== e;
          });
          return t.length > 0 ? "\\b(" + t.join("|") + ")\\b" : "";
        }
        OnFilterDataChanged() {
          let e = new RegExp(/\s*[\r\n]+\s*/g),
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
            (r = this.m_strCleanWords.split(e)),
            (r = r.concat(
              this.m_TextFilterWords.text_filter_custom_clean_words()
            ));
          let a = this.CreatePattern(t),
            i = this.CreatePattern(r);
          "" != i && (i = "^(" + i + ")$"),
            this.BRebuildFilter(a, i) && this.SaveFilter();
        }
        BRebuildFilter(e, t) {
          if (e === this.m_strBannedPattern && t === this.m_strCleanPattern)
            return !1;
          if (((this.m_regexBannedWords = null), "" !== e))
            try {
              this.m_regexBannedWords = new RegExp(e, "ugi");
            } catch (e) {
              console.warn("Couldn't compile textfilter bannedwords regex"),
                Object(Ue.a)().ReportError(
                  new Error(
                    `Couldn't compile textfilter bannedwords regex: ${e}`
                  )
                );
            }
          if (((this.m_regexCleanWords = null), "" !== t))
            try {
              this.m_regexCleanWords = new RegExp(t, "ugi");
            } catch (e) {
              console.warn("Couldn't compile textfilter cleanwords regex"),
                Object(Ue.a)().ReportError(
                  new Error(
                    `Couldn't compile textfilter cleanwords regex: ${e}`
                  )
                );
            }
          return (
            (this.m_strBannedPattern = e), (this.m_strCleanPattern = t), !0
          );
        }
        CreateProfanityReplacement(e) {
          return "♥".repeat(e);
        }
        BHasFilter() {
          return null != this.m_regexBannedWords;
        }
        BShownFilterTip() {
          return this.m_bShownFilterTip;
        }
        SetFilterTipShown(e) {
          this.m_bShownFilterTip = e;
        }
        FilterText(e, t) {
          if (!this.m_regexBannedWords) return t;
          let r = 0;
          if ("string" == typeof e && "" !== e) {
            r = new B.a(e).GetAccountID();
          } else "number" == typeof e && (r = e);
          return !t ||
            r == this.m_unAccountID ||
            (this.m_TextFilterPreferences.bIgnoreFriends && this.BIsFriend(r))
            ? t
            : t.replace(this.m_regexBannedWords, (e) =>
                this.m_regexCleanWords && 0 == e.search(this.m_regexCleanWords)
                  ? e
                  : this.CreateProfanityReplacement(e.length)
              );
        }
      }
      Object(a.b)([c.C], De.prototype, "m_TextFilterPreferences", void 0),
        Object(a.b)([c.C], De.prototype, "m_mapPlayerCache", void 0),
        Object(a.b)([c.C], De.prototype, "m_regexBannedWords", void 0),
        Object(a.b)([c.C], De.prototype, "m_regexCleanWords", void 0),
        Object(a.b)([c.k], De.prototype, "UpdateCommunityPreferences", null),
        Object(a.b)([c.k], De.prototype, "SetFriendsList", null),
        Object(a.b)([c.k], De.prototype, "BRebuildFilter", null);
      class Ge {
        constructor() {
          this.m_mapChats = new Map();
        }
        GetChat(e, t) {
          return this.m_mapChats.get(e) || this.m_mapChats.get(t);
        }
        GetOrCreateChat(e, t) {
          let r = this.GetChat(e, t);
          return r || ((r = new Ae()), this.m_mapChats.set(e || t, r)), r;
        }
      }
      Object(a.b)([c.C], Ge.prototype, "m_mapChats", void 0);
      class Ae {
        constructor() {
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
            (this.m_webAPIInterface = new b.a(
              Ce.d.WEBAPI_BASE_URL,
              Ce.k.webapi_token
            ));
        }
        InitTextFilter() {
          this.m_textFilterStore = new De();
          let e = 0;
          if ("" !== Ce.k.steamid) {
            e = new B.a(Ce.k.steamid).GetAccountID();
          }
          this.m_textFilterStore.Init(e, null, new h.a());
        }
        get TextFilterStore() {
          return this.m_textFilterStore;
        }
        GetBroadcastSteamID() {
          return this.m_ulBroadcastSteamID;
        }
        GetUserSteamID() {
          return this.m_strUserSteamID;
        }
        StartForSteamID(e, t) {
          (this.m_webAPIInterface = new b.a(
            Ce.d.WEBAPI_BASE_URL,
            Ce.k.webapi_token
          )),
            (this.m_ulBroadcastSteamID = e),
            (this.m_ulBroadcastID = t),
            this.InitTextFilter(),
            this.RequestChatInfo();
        }
        StartForChannel(e) {
          (this.m_webAPIInterface = new b.a(
            Ce.d.WEBAPI_BASE_URL,
            Ce.k.webapi_token
          )),
            (this.m_ulBroadcastChannelID = e),
            (this.m_strUserSteamID = Ce.k.steamid),
            this.InitTextFilter(),
            this.JoinChannelChat();
        }
        Stop() {
          this.m_chatScheduledFunc && this.m_chatScheduledFunc.Cancel();
        }
        SendMessage(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            const t = e.trim();
            if (0 != t.length)
              try {
                let e, r, a;
                if (this.m_webApiToken) {
                  const e = new FormData();
                  e.append("chat_id", this.m_ulChatID),
                    e.append("message", t),
                    e.append("instance_id", this.m_unInstanceID.toString()),
                    (r = yield s.a.post(
                      `${Ce.d.WEBAPI_BASE_URL}IBroadcastService/PostChatMessage/v0001?access_token=${this.m_webApiToken}`,
                      e
                    )),
                    (a = r.data && r.data.response);
                } else {
                  const r = _.b.Init(m.c);
                  r.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    message: t,
                    instance_id: this.m_unInstanceID.toString(),
                  }),
                    (e = yield m.a.PostChatMessage(
                      this.m_webAPIInterface.GetServiceTransport(),
                      r
                    )),
                    (a = {
                      result: e.GetEResult(),
                      cooldown_time_seconds: e.Body().cooldown_time_seconds(),
                      in_game: e.Body().in_game(),
                      persona_name: e.Body().persona_name(),
                    });
                }
                if (a && a.result && 1 != a.result) {
                  let e = "";
                  return (
                    (e =
                      17 == a.result
                        ? Object(Se.f)("#BroadcastChat_YouMuted")
                        : 84 == a.result
                        ? Object(Se.f)(
                            "#BroadcastChat_Cooldown",
                            a.cooldown_time_seconds
                          )
                        : Object(Se.f)("#BroadcastChat_FailedToSendMsg", t)),
                    void this.m_rgChatMessages.push({
                      type: u.a.Error,
                      msg: e,
                      client_ts: Number(new Date()),
                      instance_id: this.m_unInstanceID,
                      in_game: a.in_game,
                      persona_name: a.persona_name,
                      steamid: "",
                    })
                  );
                }
                this.m_nRateLimitSeconds ||
                  (this.m_nRateLimitSeconds = a.cooldown_time_seconds),
                  this.m_nRateLimitSeconds &&
                    ((this.m_bRateLimited = !0),
                    setTimeout(
                      () => (this.m_bRateLimited = !1),
                      1e3 * this.m_nRateLimitSeconds
                    ));
              } catch (e) {
                this.m_rgChatMessages.push({
                  type: u.a.Error,
                  msg: Object(Se.f)("#BroadcastChat_FailedToSendMsg", t),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
          });
        }
        RequestChatInfo(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            (this.m_cConsecutiveErrors = 0), (this.m_bReconnecting = !1);
            try {
              const t = {
                  steamid: this.m_ulBroadcastSteamID,
                  broadcastid: this.m_ulBroadcastID,
                  sessionid: Ce.d.SESSIONID,
                },
                r = yield s.a.get(
                  `${Ce.d.CHAT_BASE_URL}broadcast/getchatinfo`,
                  {
                    params: t,
                    withCredentials: !0,
                    cancelToken: null == e ? void 0 : e.token,
                  }
                );
              (e && e.token.reason) ||
                Object(c.G)(() => {
                  const e = r.data;
                  (this.m_strChatURL = e.view_url_template),
                    (this.m_ulChatID = e.chat_id),
                    (this.m_strFlairGroupID =
                      e.flair_group_ids && e.flair_group_ids[0]),
                    e.blocked && console.log("User is blocked from chat"),
                    e.steamid && (this.m_strUserSteamID = e.steamid),
                    e.token && (this.m_webApiToken = e.token),
                    e.emoticons && this.SetOwnedEmoticons(e.emoticons),
                    this.m_bHasAddedWelcomeChat ||
                      (this.m_rgChatMessages.push({
                        type: u.a.Notification,
                        msg: Object(Se.f)("#BroadcastChat_DefaultMessage"),
                        client_ts: Number(new Date()),
                        instance_id: this.m_unInstanceID,
                        in_game: !1,
                        persona_name: "",
                        steamid: "",
                      }),
                      (this.m_bHasAddedWelcomeChat = !0)),
                    this.m_mapBroadcastModeratorUsers.clear(),
                    e.moderators_steamid &&
                      e.moderators_steamid.forEach((e) =>
                        this.m_mapBroadcastModeratorUsers.set(e, !0)
                      ),
                    (this.m_chatScheduledFunc = new fe.b()),
                    this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
                });
            } catch (e) {
              console.error(e), console.log("Failed to get chat info!");
            }
          });
        }
        JoinChannelChat() {
          return Object(a.a)(this, void 0, void 0, function* () {
            try {
              const e = _.b.Init(Z);
              e.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
              });
              let t = yield ye.JoinChat(
                this.m_webAPIInterface.GetServiceTransport(),
                e
              );
              if (!t.Body().chat_id || !t.Body().view_url_template)
                return void console.log("Failed to join channel chat");
              (this.m_strChatURL = t.Body().view_url_template()),
                (this.m_ulChatID = t.Body().chat_id()),
                (this.m_strFlairGroupID =
                  t.Body().flair_group_ids() && t.Body().flair_group_ids()[0]),
                this.FetchChatModerators(),
                (this.m_rgChatMessages = []),
                this.m_rgChatMessages.push({
                  type: u.a.Notification,
                  msg: Object(Se.f)("#BroadcastChat_DefaultMessage"),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                }),
                (this.m_bHasAddedWelcomeChat = !0),
                (this.m_chatScheduledFunc = new fe.b()),
                this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
            } catch (e) {
              console.error(e), console.log("Failed to join chat!");
            }
          });
        }
        FetchChatModerators() {
          return Object(a.a)(this, void 0, void 0, function* () {
            const e = _.b.Init(K);
            e.SetBodyFields({
              broadcast_channel_id: this.m_ulBroadcastChannelID,
            });
            const t = (yield ye.GetChatModerators(
                this.m_webAPIInterface.GetServiceTransport(),
                e
              ))
                .Body()
                .results(),
              r = new Map();
            t.forEach((e) => {
              r.set(e.steamid(), !0);
            }),
              (this.m_mapChannelModeratorUsers = r);
          });
        }
        RequestLoop() {
          return Object(a.a)(this, void 0, void 0, function* () {
            const e = {},
              t = this.m_strChatURL.replace(
                "{0}",
                this.m_nNextChatTS.toString()
              );
            t == this.m_strChatURL &&
              this.m_nNextChatTS > 0 &&
              (e.t = this.m_nNextChatTS);
            try {
              const r = (yield s.a.get(t, { params: e })).data;
              this.m_cConsecutiveErrors = 0;
              const a = r.messages
                .map((e) =>
                  Object.assign(Object.assign({}, e), {
                    type: u.a.Chat,
                    client_ts: Number(new Date()),
                  })
                )
                .filter((e) => !this.IsUserMutedLocally(e.steamid));
              this.m_rgChatMessages.push(...a);
              const i = this.m_bAutoScroll ? 150 : 300;
              if (
                (this.m_rgChatMessages.length > i &&
                  this.m_rgChatMessages.splice(
                    0,
                    this.m_rgChatMessages.length - i
                  ),
                r.muted)
              )
                for (const e of r.muted) {
                  const t =
                    e.muted == this.m_strUserSteamID
                      ? Object(Se.f)("#BroadcastChat_YouMuted", e.persona_name)
                      : Object(Se.f)(
                          "#BroadcastChat_UserMuted",
                          e.persona_name
                        );
                  this.m_rgChatMessages.push({
                    type: u.a.Notification,
                    msg: t,
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
                }
              if (r.remove_msgs)
                for (const e of r.remove_msgs)
                  this.RemoveUserMessagesLocal(e.steamid);
              let n = 0;
              if (
                null == this.m_tsFirstRequest ||
                0 == this.m_nNextChatTS ||
                r.initial_delay
              ) {
                if ("undefined" === r.initial_delay)
                  return void console.log(
                    "Need initial_delay to know when to request first chat message"
                  );
                (this.m_tsFirstRequest = performance.now() + r.initial_delay),
                  (this.m_nFromFirstRequestMS = 0),
                  (this.m_nNextChatTS = r.next_request),
                  (n = r.initial_delay);
              } else {
                if (r.next_request < this.m_nNextChatTS)
                  return void console.log("Next request in past");
                (this.m_nFromFirstRequestMS +=
                  r.next_request - this.m_nNextChatTS),
                  (this.m_nNextChatTS = r.next_request),
                  (n =
                    this.m_tsFirstRequest +
                    this.m_nFromFirstRequestMS -
                    performance.now() +
                    this.m_nNudgeFactorMS);
              }
              this.m_bReconnecting && (this.m_bReconnecting = !1),
                (this.m_nLastSleepMS = n),
                n < 0 && (n = 0),
                this.m_chatScheduledFunc.Schedule(n, this.RequestLoop);
            } catch (e) {
              if (
                (console.log(
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
                  return void this.m_rgChatMessages.push({
                    type: u.a.Error,
                    msg: Object(Se.f)("#BroadcastChat_UnableToJoinChat"),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
                (this.m_cConsecutiveErrors = 0),
                  (this.m_bReconnecting = !0),
                  this.SyncChat();
              }
              this.m_chatScheduledFunc.Schedule(500, this.RequestLoop);
            }
          });
        }
        GetUserEmoticons() {
          return this.m_regexUserEmoticons;
        }
        SetOwnedEmoticons(e) {
          let t = [];
          for (let r = 0; r < e.length; r++) {
            let a = e[r];
            a.length >= 2 && ":" == a[0]
              ? t.push(a.substr(1, a.length - 2))
              : t.push(a);
          }
          let r = ":(" + t.join("|") + "):";
          this.m_regexUserEmoticons = new RegExp(r, "g");
        }
        UpdateBroadcastChatModerator(e, t, r) {
          return Object(a.a)(this, void 0, void 0, function* () {
            {
              const a = new FormData();
              a.append("broadcaststeamid", this.m_ulBroadcastSteamID),
                a.append("moderatorsteamid", e),
                a.append("bAdd", t ? "1" : "0"),
                a.append("sessionid", Ce.d.SESSIONID);
              try {
                yield s.a.post(
                  `${Ce.d.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`,
                  a
                ),
                  this.m_mapBroadcastModeratorUsers.set(e, t);
                const i = Object(Se.f)(
                  t
                    ? "#BroadcastChat_AddedModerator"
                    : "#BroadcastChat_RemovedModerator",
                  r
                );
                this.m_rgChatMessages.push({ type: u.a.Notification, msg: i });
              } catch (e) {
                const a = Object(Se.f)(
                  t
                    ? "#BroadcastChat_AddModeratorFailed"
                    : "#BroadcastChat_RemoveModeratorFailed",
                  r
                );
                this.m_rgChatMessages.push({ type: u.a.Error, msg: a });
              }
            }
          });
        }
        UpdateUserChatBan(e, t, r, i, n, o) {
          return Object(a.a)(this, void 0, void 0, function* () {
            const a = this.m_ulBroadcastSteamID,
              l = this.m_strUserSteamID;
            if (this.m_ulBroadcastChannelID) {
              const t = _.b.Init(V);
              t.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
                chatter_steamid: e,
                duration: 3600 * r,
                permanent: i,
                undo: o,
              }),
                yield ye.AddChatBan(
                  this.m_webAPIInterface.GetServiceTransport(),
                  t
                );
            } else {
              const o = new FormData();
              o.append("broadcaststeamid", a),
                o.append("issuersteamid", l),
                o.append("chattersteamid", e),
                o.append("bantype", t),
                o.append("duration", r.toString()),
                o.append("perm", i ? "1" : "0"),
                o.append("sessionid", Ce.d.SESSIONID);
              try {
                yield s.a.post(
                  `${Ce.d.CHAT_BASE_URL}broadcast/ajaxupdateusermute`,
                  o
                ),
                  0 == t
                    ? delete this.m_mapMutedUsers[e]
                    : (this.m_mapMutedUsers[e] = n);
              } catch (e) {
                console.log("Failed to update mute for " + n);
              }
            }
          });
        }
        MuteUserForSession(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (e == this.m_strUserSteamID) return;
            if (this.m_ulBroadcastSteamID == e) return;
            let r = this.m_ulBroadcastSteamID == this.m_strUserSteamID;
            if (!this.m_mapMutedUsers[e]) {
              this.m_mapMutedUsers[e] = t;
              try {
                if (this.m_webApiToken) {
                  const t = new FormData();
                  t.append("chat_id", this.m_ulChatID),
                    t.append("user_steamid", e),
                    t.append("muted", "1"),
                    yield s.a.post(
                      `${Ce.d.WEBAPI_BASE_URL}IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=${this.m_webApiToken}`,
                      t
                    );
                } else {
                  const t = _.b.Init(m.b);
                  t.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    user_steamid: e,
                    muted: !0,
                  }),
                    yield m.a.MuteBroadcastChatUser(
                      this.m_webAPIInterface.GetServiceTransport(),
                      t
                    );
                }
              } catch (a) {
                r &&
                  (this.m_rgChatMessages.push({
                    type: u.a.Error,
                    msg: Object(Se.f)("#BroadcastChat_UserMuteFailed", t),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  }),
                  delete this.m_mapMutedUsers[e]);
              }
            }
            r ||
              this.m_rgChatMessages.push({
                type: u.a.Notification,
                msg: Object(Se.f)("#BroadcastChat_UserMutedLocal", t),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: "",
                steamid: "",
              });
          });
        }
        UnmuteUserForSession(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (e == this.m_strUserSteamID) return;
            if (
              (this.m_mapMutedUsers[e] && delete this.m_mapMutedUsers[e],
              this.m_ulBroadcastSteamID == this.m_strUserSteamID)
            )
              try {
                if (this.m_webApiToken) {
                  const t = new FormData();
                  t.append("chat_id", this.m_ulChatID),
                    t.append("user_steamid", e),
                    t.append("muted", "0"),
                    yield s.a.post(
                      `${Ce.d.WEBAPI_BASE_URL}IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=${this.m_webApiToken}`,
                      t
                    );
                } else {
                  const t = _.b.Init(m.b);
                  t.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    user_steamid: e,
                    muted: !1,
                  }),
                    yield m.a.MuteBroadcastChatUser(
                      this.m_webAPIInterface.GetServiceTransport(),
                      t
                    );
                }
                this.m_rgChatMessages.push({
                  type: u.a.Notification,
                  msg: Object(Se.f)("#BroadcastChat_UserUnmutedLocal", t),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              } catch (e) {
                this.m_rgChatMessages.push({
                  type: u.a.Error,
                  msg: Object(Se.f)("#BroadcastChat_UserUnmuteFailed", t),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
            else
              this.m_rgChatMessages.push({
                type: u.a.Notification,
                msg: Object(Se.f)("#BroadcastChat_UserUnmutedLocal", t),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: "",
                steamid: "",
              });
          });
        }
        RemoveUserMessagesLocal(e) {
          this.m_rgChatMessages = this.m_rgChatMessages.filter(
            (t) => t.steamid !== e
          );
        }
        RemoveUserMessagesServer(e, t) {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (e != this.m_strUserSteamID)
              try {
                if (this.m_webApiToken) {
                  const t = new FormData();
                  t.append("chat_id", this.m_ulChatID),
                    t.append("user_steamid", e),
                    yield s.a.post(
                      `${Ce.d.WEBAPI_BASE_URL}IBroadcastService/RemoveUserChatText/v0001/?access_token=${this.m_webApiToken}`,
                      t
                    );
                } else {
                  const t = _.b.Init(m.d);
                  t.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    user_steamid: e,
                  }),
                    yield m.a.RemoveUserChatText(
                      this.m_webAPIInterface.GetServiceTransport(),
                      t
                    );
                }
              } catch (e) {
                this.m_rgChatMessages.push({
                  type: u.a.Error,
                  msg: Object(Se.f)("#BroadcastChat_RemoveMessagesFailed", t),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
          });
        }
        UpdateChatMessageFlair(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            if (this.m_webApiToken) {
              const t = new FormData();
              t.append("chat_id", this.m_ulChatID),
                t.append("flair", `^${this.m_strFlairGroupID}^:${e}:`),
                yield s.a.post(
                  `${Ce.d.WEBAPI_BASE_URL}IBroadcastService/UpdateChatMessageFlair/v0001/?access_token=${this.m_webApiToken}`,
                  t
                );
            } else {
              const t = _.b.Init(m.e);
              t.SetBodyFields({
                chat_id: this.m_ulChatID,
                flair: `^${this.m_strFlairGroupID}^:${e}:`,
              }),
                yield m.a.UpdateChatMessageFlair(
                  this.m_webAPIInterface.GetServiceTransport(),
                  t
                );
            }
          });
        }
        IsUserMutedLocally(e) {
          return Boolean(this.m_mapMutedUsers[e]);
        }
        BIsUserBroadcastModerator(e) {
          return this.m_mapBroadcastModeratorUsers.has(e);
        }
        IsUserBroadcaster(e) {
          return e === this.m_ulBroadcastSteamID;
        }
        SyncChat() {
          (this.m_tsFirstRequest = null),
            (this.m_nFromFirstRequestMS = 0),
            (this.m_nNextChatTS = 0),
            (this.m_rgChatMessages = []);
        }
      }
      Object(a.b)([c.C], Ae.prototype, "m_mapChannelModeratorUsers", void 0),
        Object(a.b)(
          [c.C],
          Ae.prototype,
          "m_mapBroadcastModeratorUsers",
          void 0
        ),
        Object(a.b)([c.C], Ae.prototype, "m_nRateLimitSeconds", void 0),
        Object(a.b)([c.C], Ae.prototype, "m_bRateLimited", void 0),
        Object(a.b)([c.C], Ae.prototype, "m_rgChatMessages", void 0),
        Object(a.b)([we.a], Ae.prototype, "FetchChatModerators", null),
        Object(a.b)([we.a], Ae.prototype, "RequestLoop", null),
        Object(a.b)([we.a], Ae.prototype, "MuteUserForSession", null);
      const Le = new Ge();
      window.g_BroadcastChatStore = Le;
      var ke = r("1BdX"),
        Ve = (r("wUwH"), r("a5LV")),
        qe = r("Z9dU"),
        He = r.n(qe),
        $e = r("y+6m"),
        Ke = r("Mgs7"),
        Ye = r("Gorr"),
        Je = r("0QoN"),
        Xe = r("BFsE"),
        Qe = r("gPCo"),
        Ze = r("5znp"),
        et = r.n(Ze);
      const tt = () =>
          l.a.createElement(
            "div",
            { className: et.a.FriendsListInsetShadowCtn },
            l.a.createElement("div", {
              className: et.a.FriendListInsetShadowTop,
            })
          ),
        rt = () =>
          l.a.createElement(
            "div",
            { className: et.a.FriendsListInsetShadowCtn },
            l.a.createElement("div", {
              className: et.a.FriendListInsetShadowBottom,
            })
          );
      var at = r("6Y59"),
        it = r("exH9"),
        st = r("opsS"),
        nt = r("3sYe"),
        ot = r.n(nt);
      const lt = new RegExp("ː([^ː]*)ː", "g"),
        ct =
          (new RegExp("(https?://[^ '\"<>]*)", "gi"),
          new RegExp(
            "^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)",
            "i"
          ));
      const dt = (e) => {
          const { userType: t, msg: r, presenterInfo: a } = e;
          if ("presenter" === t)
            return o.createElement(
              "span",
              null,
              o.createElement(
                Qe.b,
                {
                  name: a.name,
                  title: a.title,
                  photo: a.photo,
                  company: a.company,
                  bioString: a.bio,
                },
                o.createElement(
                  "a",
                  {
                    className: Object(it.a)(
                      ot.a.MessageName,
                      ot.a.MessagePresenter
                    ),
                    href: Ce.d.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  r.persona_name
                )
              )
            );
          {
            let e = null;
            return (
              "broadcaster" === t
                ? (e = ot.a.MessageBroadcaster)
                : "moderator" === t && (e = ot.a.MessageModerator),
              o.createElement(
                "span",
                null,
                o.createElement(
                  "a",
                  {
                    className: Object(it.a)(ot.a.MessageName, e),
                    href: Ce.d.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
                    "data-miniprofile": "s" + r.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  r.persona_name
                )
              )
            );
          }
        },
        mt = (e) => {
          switch (e.userType) {
            case "presenter":
              return o.createElement(
                "span",
                {
                  className: ot.a.RoleFlairContainer,
                  "data-tooltip-text": Object(Se.f)(
                    "#BroadcastChat_Role_Presenter_ttip"
                  ),
                },
                o.createElement(at.i, null)
              );
            case "moderator":
              return o.createElement(
                "span",
                {
                  className: ot.a.RoleFlairContainer,
                  "data-tooltip-text": Object(Se.f)(
                    "#BroadcastChat_Role_Moderatorr_ttip"
                  ),
                },
                o.createElement(at.j, null)
              );
            case "broadcaster":
              return o.createElement(
                "span",
                {
                  className: ot.a.RoleFlairContainer,
                  "data-tooltip-text": Object(Se.f)(
                    "#BroadcastChat_Role_Broadcaster_ttip"
                  ),
                },
                o.createElement(at.h, null)
              );
            default:
              return null;
          }
        };
      let ut = class extends o.Component {
        constructor() {
          super(...arguments),
            (this.m_chat = null),
            (this.messagesContainer = o.createRef());
        }
        componentDidMount() {
          this.StartChat();
        }
        componentDidUpdate(e) {
          this.m_chat &&
            this.m_chat.m_bAutoScroll &&
            this.ScrollToNewestMessages(),
            (this.props.steamID === e.steamID &&
              this.props.broadcastID === e.broadcastID &&
              this.props.broadcastChannelID === e.broadcastChannelID) ||
              this.StartChat();
        }
        componentWillUnmount() {
          this.m_chat && this.m_chat.Stop();
        }
        StartChat() {
          if (
            (this.m_chat && this.m_chat.Stop(),
            (this.m_chat = Le.GetOrCreateChat(
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
            let e = this.props.broadcastID || "0";
            this.m_chat.StartForSteamID(this.props.steamID, e),
              this.ScrollToNewestMessages();
          }
        }
        IsTrustedDomain(e) {
          return !!e.match(ct);
        }
        AddLinksEmoticons(e, t) {
          let r = lt;
          t && (r = this.m_chat.GetUserEmoticons());
          let a = e.split(lt);
          const i = [];
          for (let e = 0; e < a.length; e += 1)
            e % 2 == 1
              ? i.push(
                  o.createElement(Ye.b, {
                    emoticonHoverStore: Ve.a,
                    key: e,
                    emoticon: a[e],
                    large: !0,
                  })
                )
              : i.push(a[e]);
          return i;
        }
        HandleScroll(e) {
          const t = this.props.bInvertLayout
            ? e.currentTarget.scrollTop < 6
            : e.currentTarget.scrollTop + e.currentTarget.clientHeight >=
              e.currentTarget.scrollHeight - 6;
          this.m_chat && (this.m_chat.m_bAutoScroll = t);
        }
        ScrollToNewestMessages() {
          this.messagesContainer &&
            this.messagesContainer.current &&
            (this.messagesContainer.current.scrollTop = this.props.bInvertLayout
              ? 0
              : this.messagesContainer.current.scrollHeight);
        }
        OnContextMenu(e, t) {
          if (t.type !== u.a.Chat) return null;
          const r = [],
            a = this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID()),
            i = this.m_chat.BIsUserBroadcastModerator(
              this.m_chat.GetUserSteamID()
            );
          if (
            ((Ce.k && Ce.k.is_support) || a || i
              ? r.push(
                  o.createElement(
                    $e.d,
                    {
                      key: "remove",
                      onSelected: () =>
                        this.m_chat.RemoveUserMessagesServer(
                          t.steamid,
                          t.persona_name
                        ),
                    },
                    Object(Se.f)("#BroadcastChat_RemoveMessages")
                  ),
                  o.createElement(
                    $e.d,
                    {
                      key: "updatebanh",
                      onSelected: () =>
                        this.m_chat.UpdateUserChatBan(
                          t.steamid,
                          1,
                          12,
                          !1,
                          t.persona_name
                        ),
                    },
                    Object(Se.f)("#BroadcastChat_half_Mute")
                  ),
                  o.createElement(
                    $e.d,
                    {
                      key: "updateband",
                      onSelected: () =>
                        this.m_chat.UpdateUserChatBan(
                          t.steamid,
                          1,
                          24,
                          !1,
                          t.persona_name
                        ),
                    },
                    Object(Se.f)("#BroadcastChat_day_Mute")
                  ),
                  o.createElement(
                    $e.d,
                    {
                      key: "updatebanw",
                      onSelected: () =>
                        this.m_chat.UpdateUserChatBan(
                          t.steamid,
                          1,
                          168,
                          !1,
                          t.persona_name
                        ),
                    },
                    Object(Se.f)("#BroadcastChat_week_Mute")
                  ),
                  o.createElement(
                    $e.d,
                    {
                      key: "updatebanp",
                      onSelected: () =>
                        this.m_chat.UpdateUserChatBan(
                          t.steamid,
                          1,
                          0,
                          !0,
                          t.persona_name
                        ),
                    },
                    Object(Se.f)("#BroadcastChat_perm_Mute")
                  ),
                  o.createElement(
                    $e.d,
                    {
                      key: "removeban",
                      onSelected: () =>
                        this.m_chat.UpdateUserChatBan(
                          t.steamid,
                          0,
                          0,
                          !1,
                          t.persona_name,
                          !0
                        ),
                    },
                    Object(Se.f)("#BroadcastChat_Unmute")
                  )
                )
              : this.m_chat.IsUserMutedLocally(t.steamid)
              ? r.push(
                  o.createElement(
                    $e.d,
                    {
                      key: "unmuteuser",
                      onSelected: () =>
                        this.m_chat.UnmuteUserForSession(
                          t.steamid,
                          t.persona_name
                        ),
                    },
                    Object(Se.f)("#BroadcastChat_UnmuteLocal")
                  )
                )
              : r.push(
                  o.createElement(
                    $e.d,
                    {
                      key: "muteuser",
                      onSelected: () =>
                        this.m_chat.MuteUserForSession(
                          t.steamid,
                          t.persona_name
                        ),
                    },
                    Object(Se.f)("#BroadcastChat_MuteLocal")
                  )
                ),
            ((Ce.k && Ce.k.is_support) ||
              this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID())) &&
              t.steamid)
          ) {
            this.m_chat.BIsUserBroadcastModerator(t.steamid)
              ? r.push(
                  o.createElement(
                    $e.d,
                    {
                      key: "removemod",
                      onSelected: () =>
                        this.m_chat.UpdateBroadcastChatModerator(
                          t.steamid,
                          !1,
                          t.persona_name
                        ),
                    },
                    Object(Se.f)("#BroadcastChat_Remove_Moderator")
                  )
                )
              : r.push(
                  o.createElement(
                    $e.d,
                    {
                      key: "addmod",
                      onSelected: () =>
                        this.m_chat.UpdateBroadcastChatModerator(
                          t.steamid,
                          !0,
                          t.persona_name
                        ),
                    },
                    Object(Se.f)("#BroadcastChat_Add_Moderator")
                  )
                );
          }
          return r.length
            ? Object(d.a)(
                o.createElement(
                  $e.c,
                  null,
                  o.createElement(
                    "div",
                    { className: ot.a.SelectedUserNameCtn },
                    Object(Se.f)("#BroadcastChat_User"),
                    o.createElement("br", null),
                    o.createElement(
                      "span",
                      { className: ot.a.SelectedUserName },
                      t.persona_name
                    )
                  ),
                  r
                ),
                e
              )
            : null;
        }
        GetTypeClassName(e) {
          return e.type === u.a.Notification
            ? ot.a.MessageNotification
            : e.type === u.a.Error
            ? ot.a.MessageError
            : ot.a.MessageChat;
        }
        FormatMessage(e, t) {
          if (e.type === u.a.Chat) {
            let r = t ? t.FilterText(e.steamid, e.msg) : e.msg;
            return this.AddLinksEmoticons(r, !1);
          }
          return e.msg;
        }
        RenderUserChatLine(e, t, r) {
          let a = r ? r.get(e.steamid) : void 0;
          const i =
            e.type === u.a.Chat
              ? (function (e, t, r) {
                  return r
                    ? "presenter"
                    : t.GetBroadcastSteamID() === e
                    ? "broadcaster"
                    : t.BIsUserBroadcastModerator(e)
                    ? "moderator"
                    : "";
                })(e.steamid, this.m_chat, a)
              : "";
          return o.createElement(
            "div",
            {
              key: e.instance_id + "_" + e.client_ts + "_" + t,
              className: this.GetTypeClassName(e),
              onContextMenu: (t) => this.OnContextMenu(t, e),
            },
            e.type === u.a.Chat && o.createElement(mt, { userType: i }),
            e.flair &&
              o.createElement(
                "span",
                { className: ot.a.FlairContainer },
                this.AddLinksEmoticons(e.flair, !1)
              ),
            e.type === u.a.Chat &&
              o.createElement(dt, { userType: i, msg: e, presenterInfo: a }),
            e.type === u.a.Chat &&
              this.m_chat.GetBroadcastSteamID() === e.steamid &&
              o.createElement(
                "span",
                {
                  className: `${ot.a.MessageNotification} ${ot.a.MessageContents}`,
                },
                ` (${Object(Se.f)("#BroadcastChat_Broadcaster")})`
              ),
            e.type === u.a.Chat &&
              this.m_chat.m_mapChannelModeratorUsers.get(e.steamid) &&
              o.createElement(
                "span",
                {
                  className: `${ot.a.MessageNotification} ${ot.a.MessageContents}`,
                },
                ` (${Object(Se.f)("#BroadcastChat_Moderator")})`
              ),
            o.createElement(
              "span",
              {
                className: `${ot.a.MessageContents} ${
                  this.AddLinksEmoticons(e.msg, !1).filter(
                    (e) => e && "string" == typeof e
                  ).length
                    ? ""
                    : ot.a.EmoticonsOnly
                }`,
              },
              e.type === u.a.Chat ? " : " : "",
              this.FormatMessage(e, this.m_chat.TextFilterStore)
            )
          );
        }
        render() {
          const {
              hidden: e,
              bPartnerMemberOnlyChat: t,
              bInvertLayout: r,
            } = this.props,
            a = this.m_chat ? this.m_chat.m_rgChatMessages : [],
            i = r ? a.reverse() : a,
            s = this.m_chat
              ? ke.b.GetPresenterMapForBroadcasterSteamID(
                  this.m_chat.GetBroadcastSteamID()
                )
              : void 0;
          return o.createElement(
            "div",
            {
              className: Object(it.a)(ot.a.ChatPanel, "ChatPanel"),
              style: e ? { display: "none" } : void 0,
            },
            r &&
              !!this.m_chat &&
              o.createElement(_t, {
                oChat: this.m_chat,
                emoticonStore: this.props.emoticonStore,
                bPartnerMemberOnlyChat: t,
              }),
            o.createElement(tt, null),
            o.createElement(
              "div",
              {
                className: Object(it.a)(
                  `${ot.a.ChatMessages} ${He.a.minHeightZero}`,
                  "ChatMessages"
                ),
                onScroll: this.HandleScroll,
                ref: this.messagesContainer,
              },
              i.map((e, t) => this.RenderUserChatLine(e, t, s))
            ),
            o.createElement(rt, null),
            !r &&
              !!this.m_chat &&
              o.createElement(_t, {
                oChat: this.m_chat,
                emoticonStore: this.props.emoticonStore,
                bPartnerMemberOnlyChat: t,
              })
          );
        }
      };
      function _t(e) {
        const { oChat: t, emoticonStore: r, bPartnerMemberOnlyChat: a } = e;
        return !a ||
          ((null === Ce.k || void 0 === Ce.k ? void 0 : Ce.k.logged_in) &&
            (null === Ce.k || void 0 === Ce.k
              ? void 0
              : Ce.k.is_partner_member))
          ? (null === Ce.k || void 0 === Ce.k ? void 0 : Ce.k.logged_in)
            ? o.createElement(ht, { oChat: t, emoticonStore: r })
            : null
          : o.createElement(pt, null);
      }
      function ht(e) {
        const { oChat: t, emoticonStore: r } = e,
          [a, i] = o.useState(""),
          s = o.useRef(),
          n = o.useCallback(
            (e) => {
              !!e.shiftKey ||
                13 !== e.charCode ||
                (t.m_bRateLimited || (t.SendMessage(a), i("")),
                e.preventDefault());
            },
            [t, a]
          ),
          l = o.useCallback(
            (e, t = !1) => {
              i(a + `ː${e}ː`),
                (null == s ? void 0 : s.current) && s.current.focus();
            },
            [a, s]
          );
        return o.createElement(
          "div",
          { className: Object(it.a)(ot.a.ChatEntryCtn, "ChatEntryCtn") },
          o.createElement(
            "div",
            { className: Object(it.a)(ot.a.ChatEntry, "ChatEntry") },
            o.createElement(
              "form",
              { className: `${He.a.chatEntryControls}` },
              o.createElement("textarea", {
                className: He.a.chatTextarea,
                placeholder: Object(Se.f)("#BroadcastChat_EnterResponse"),
                onKeyPress: n,
                onChange: (e) => i(e.target.value),
                value: a,
                ref: s,
              }),
              Boolean(t.m_bRateLimited) &&
                o.createElement(Bt, {
                  nSeconds: t.m_nRateLimitSeconds,
                  bRateLimited: t.m_bRateLimited,
                }),
              o.createElement(
                "button",
                {
                  className: `${He.a.chatSubmitButton} ${
                    a ? "" : He.a.disabled
                  }`,
                  title: Object(Se.f)("#ChatEntryButton_Submit"),
                  disabled: t.m_bRateLimited || 0 == a.trim().length,
                  onClick: () => {
                    t.SendMessage(a), i("");
                  },
                },
                o.createElement(at.pb, null)
              )
            ),
            o.createElement(
              "div",
              {
                style: { height: "50px" },
                className: `${He.a.chatEntryActionsContainer}`,
              },
              o.createElement(
                "div",
                { className: He.a.chatEntryActionsGroup },
                o.createElement(Je.a, {
                  disabled: !1,
                  OnEmoticonSelected: l,
                  rtLastAckedNewEmoticons: Number.MAX_VALUE,
                  emoticonStore: r,
                  emoticonHoverStore: Ve.a,
                }),
                o.createElement(bt, Object.assign({}, e, { textInputRef: s }))
              )
            )
          )
        );
      }
      function bt(e) {
        var t;
        const { oChat: r, emoticonStore: a, textInputRef: i } = e;
        return r.m_strFlairGroupID &&
          a.flair_list &&
          (null === (t = a.GetFlairListByGroupID(r.m_strFlairGroupID)) ||
          void 0 === t
            ? void 0
            : t.length)
          ? o.createElement(Je.a, {
              disabled: !1,
              OnEmoticonSelected: (e) => {
                r.UpdateChatMessageFlair(e),
                  (null == i ? void 0 : i.current) && i.current.focus();
              },
              rtLastAckedNewEmoticons: Number.MAX_VALUE,
              emoticonStore: a,
              emoticonHoverStore: Ve.a,
              strFlairGroupID: r.m_strFlairGroupID,
              title: Object(Se.f)("#ChatEntryButton_Flair"),
              buttonIcon: o.createElement(at.k, null),
            })
          : null;
      }
      Object(a.b)([c.C], ut.prototype, "m_chat", void 0),
        Object(a.b)([st.a], ut.prototype, "StartChat", null),
        Object(a.b)([st.a], ut.prototype, "HandleScroll", null),
        Object(a.b)([st.a], ut.prototype, "OnContextMenu", null),
        Object(a.b)([st.a], ut.prototype, "RenderUserChatLine", null),
        (ut = Object(a.b)([n.a], ut));
      class Bt extends o.Component {
        render() {
          return o.createElement(
            "div",
            { className: ot.a.TimedProgressBarContainer },
            o.createElement(
              "div",
              { className: ot.a.wrapper },
              o.createElement("div", {
                className: `${ot.a.spinner} ${ot.a.pie}`,
                style: { animationDuration: `${this.props.nSeconds || 0}s` },
              }),
              o.createElement("div", {
                className: `${ot.a.filler} ${ot.a.pie}`,
                style: { animationDuration: `${this.props.nSeconds || 0}s` },
              }),
              o.createElement("div", {
                className: ot.a.mask,
                style: { animationDuration: `${this.props.nSeconds || 0}s` },
              })
            )
          );
        }
      }
      function pt(e) {
        return o.createElement(
          "div",
          { className: ot.a.Description },
          o.createElement(
            "div",
            { className: ot.a.LogInPrompt },
            Object(Se.f)("#Broadcast_PartnerChat_Login")
          ),
          !Ce.k.logged_in &&
            o.createElement(
              Ke.d,
              { onClick: Xe.a, className: Object(it.a)(ot.a.SignInButton) },
              Object(Se.f)("#Login_SignIn")
            )
        );
      }
      var gt = r("trWU"),
        yt = (r("Xhj9"), r("5eAM")),
        ft = r("VQ2A"),
        St = (r("sRB7"), r("b3LC")),
        wt = r("NKJh"),
        Ct = r("zjj+"),
        Mt = r("RQmk"),
        vt = r("dfs5"),
        zt = r("0OaU"),
        Rt = r("dLk7"),
        Ot = r.n(Rt);
      const Ft = Object(n.a)((e) => {
        const { appid: t } = e,
          [r, i] = Object(St.e)(t, 0, !0),
          s = Object(vt.c)();
        Object(o.useEffect)(() => {
          if (!yt.a.BHasAppLinkLoaded(t)) {
            (() =>
              Object(a.a)(void 0, void 0, void 0, function* () {
                return yield yt.a.LoadAppLinkInfo([t]);
              }))();
          }
        }, [t]);
        let n = Ot.a.StoreSaleWidgetContainer_mini,
          c = Ot.a.StoreSaleWidgetImage_mini,
          d = Ot.a.StoreSaleImage_mini;
        Ot.a.StoreSaleWidgetShortDesc_mini;
        const m = yt.a.GetAppLinkInfo(t);
        if (!i || !m)
          return l.a.createElement(
            "div",
            { className: n },
            l.a.createElement(zt.a, { size: "medium" }),
            ";"
          );
        const u = "series" != m.type,
          _ = Object(ft.b)(m.capsule_link, s);
        return m && m.title
          ? l.a.createElement(
              "div",
              { className: n },
              l.a.createElement(
                "div",
                { className: wt.Actions },
                l.a.createElement(
                  "a",
                  { href: _, target: Ce.d.IN_CLIENT ? void 0 : "_blank" },
                  l.a.createElement(
                    Mt.b,
                    { type: "app", id: m.appid },
                    l.a.createElement(
                      "div",
                      { className: c },
                      l.a.createElement("img", { className: d, src: m.capsule })
                    )
                  )
                )
              ),
              l.a.createElement(
                "div",
                { className: wt.StoreSaleBroadcastWidgetRight },
                l.a.createElement(
                  "div",
                  { className: wt.Actions },
                  l.a.createElement(
                    "a",
                    { href: _, target: Ce.d.IN_CLIENT ? void 0 : "_blank" },
                    l.a.createElement(
                      Mt.b,
                      { type: "app", id: m.appid },
                      l.a.createElement(
                        "div",
                        {
                          className: Object(it.a)(
                            wt.StoreSaleWidgetTitle,
                            "StoreSaleWidgetTitle"
                          ),
                        },
                        m.title
                      )
                    )
                  )
                ),
                l.a.createElement(
                  "div",
                  { className: wt.StoreSaleWidgetRelease },
                  m.release
                ),
                u && l.a.createElement(Ct.d, { info: m, bShowDemoButton: !0 })
              )
            )
          : l.a.createElement("div", {
              className: wt.StoreSaleWidgetEmptyContainer,
            });
      });
      r("wogL");
      var Tt = r("boaH"),
        jt = r("nWbB"),
        Wt = (r("Bniq"), r("5L1o")),
        It = r("02Wr"),
        Et = r("MnIK"),
        xt = r("uuth");
      const Pt = (e) => {
        const { onPositionChange: t, onLeave: r } = e,
          a = o.useCallback(
            (e) => (
              void 0 === e.previousPosition &&
                e.currentPosition === xt.a.above &&
                r &&
                r(e),
              t && t(e)
            ),
            [t, r]
          );
        return o.createElement(
          xt.a,
          Object.assign({}, e, { onPositionChange: a })
        );
      };
      r("pKbv"), r("3+zv");
      var Nt = r("uIWk"),
        Ut = r("rKv1"),
        Dt = r.n(Ut);
      const Gt = Object(n.a)((e) => {
        const { event: t } = e,
          r = t.clanSteamID.GetAccountID(),
          i = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
          n = Object(o.useRef)(null),
          [c, d] = Object(o.useState)(
            t ? Nt.a.GetCreatorHome(t.clanSteamID) : null
          );
        if (
          (Object(o.useEffect)(() => {
            const e = s.a.CancelToken.source();
            n.current = e.cancel;
            return (
              Object(a.a)(void 0, void 0, void 0, function* () {
                const t = B.a.InitFromClanID(r),
                  a = yield Nt.a.LoadCreatorHome(t, e);
                e.token.reason || d(a);
              }),
              () => {
                n.current && n.current("BroadcastDropsDisplay: unmounting");
              }
            );
          }, [r]),
          i || !c || !c.BIsLoaded())
        )
          return null;
        const m =
          Ce.d.COMMUNITY_BASE_URL +
          "gid/" +
          t.jsondata.broadcast_item_drops_details_clan_accountid +
          "/partnerevents/view/" +
          t.jsondata.broadcast_item_drops_details_event_gid;
        return l.a.createElement(
          "div",
          { className: Dt.a.item_drop_ctn },
          l.a.createElement(
            "div",
            null,
            Object(Se.f)(
              c.GetName().length > 0
                ? t.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 ==
                  0
                  ? "#SalePage_WatchForDrop_Hours_CreatorNamed"
                  : "#SalePage_WatchForDrop_Minutes_CreatorNamed"
                : t.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 ==
                  0
                ? "#SalePage_WatchForDrop_Hours_Developer"
                : "#SalePage_WatchForDrop_Minutes_Developer",
              t.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 == 0
                ? t.jsondata.broadcast_item_drops_min_watch_time_minutes / 60
                : t.jsondata.broadcast_item_drops_min_watch_time_minutes,
              c.GetName()
            ),
            Boolean(t.jsondata.broadcast_item_drops_details_clan_accountid) &&
              l.a.createElement(
                "a",
                { href: m, target: Ce.d.IN_CLIENT ? "" : "_blank" },
                Object(Se.f)("#SalePage_WatchForDrop_LearnMore")
              )
          )
        );
      });
      var At, Lt;
      const kt = {
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
      };
      let Vt = (At = class extends o.Component {
        constructor() {
          super(...arguments),
            (this.m_cancelSignal = s.a.CancelToken.source()),
            (this.state = {
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
            });
        }
        static IsBroadcastAllowed() {
          return Ce.d.EREALM != Ne.g.k_ESteamRealmChina && !Ce.d.IN_GAMEPADUI;
        }
        componentDidMount() {
          return Object(a.a)(this, void 0, void 0, function* () {
            At.IsBroadcastAllowed() &&
              (yield jt.a
                .Get()
                .LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
              this.m_cancelSignal.token.reason ||
                this.setState({
                  bLoadingPreference: !1,
                  bExpanded: !jt.a
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                  innerStyle: Object.assign(
                    Object.assign({}, this.state.innerStyle),
                    {
                      maxHeight: jt.a
                        .Get()
                        .BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                        ? "0vh"
                        : "100vh",
                    }
                  ),
                }),
              yield this.props.bIsPreview && this.props.accountIDs
                ? jt.a.Get().HintLoadEmbeddablePreviewStreams(this.props)
                : jt.a.Get().HintLoadEmbeddableStreams(this.props),
              this.props.nAppIDVOD &&
                (jt.a
                  .Get()
                  .SetupEmbeddableVOD(this.props, !this.props.bSkipPreRoll),
                this.props.bSkipPreRoll && this.PlayTopNonVOD()),
              window.setTimeout(() => {
                this.m_cancelSignal.token.reason ||
                  this.setState({
                    style: Object.assign(Object.assign({}, this.state.style), {
                      maxHeight: "100vh",
                    }),
                  });
              }, 10));
          });
        }
        componentWillUnmount() {
          this.m_cancelSignal.cancel("BroadcastEmbeddable component unmounted");
        }
        ToggleBroadcastExpandShrink() {
          let e = jt.a.Get().GetPlayReadyStream(this.props);
          const t = Tt.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
          Object(jt.e)(t, this.state.bExpanded ? 2 : 3, e.snr);
          const r = this.state.bExpanded;
          window.setTimeout(
            () =>
              this.setState({
                innerStyle: Object.assign(
                  Object.assign({}, this.state.innerStyle),
                  { maxHeight: r ? "0vh" : "100vh" }
                ),
              }),
            10
          ),
            r ||
              this.setState({ bExpanded: !this.state.bExpanded }, () =>
                jt.a.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded)
              );
        }
        OnShrinkTransitionEnd() {
          "0vh" === this.state.innerStyle.maxHeight &&
            this.setState({ bExpanded: !1 }, () =>
              jt.a.Get().SetEmbeddedStreamCollapsed(!0)
            );
        }
        onStreamSelect(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            this.setState({ bStartMuted: !1 }),
              jt.a.Get().GetPlayReadyStream(this.props).accountid !=
                e.accountid &&
                (yield jt.a.Get().AttemptToPlayStream(this.props, e));
          });
        }
        PlayTopNonVOD() {
          return Object(a.a)(this, void 0, void 0, function* () {
            this.setState({ bStartMuted: !1 });
            const e = jt.a
              .Get()
              .GetStreams(this.props)
              .filter(
                (e) =>
                  !this.props.fnFilterStreams || this.props.fnFilterStreams(e)
              );
            Object(jt.f)(e);
            for (const t of e)
              if (!t.nAppIDVOD)
                return void (yield jt.a
                  .Get()
                  .AttemptToPlayStream(this.props, t));
          });
        }
        ConstructSidePanels(e, t) {
          let r = {
            leftPanel: null,
            rightPanel: null,
            bRightPanelArtworkOrEmpty: !0,
          };
          if (this.props.bWidePlayer) return r;
          const a = jt.a.Get().GetConcurrentStreams(this.props) > 1;
          let i = Tt.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
            s = o.createElement(
              "div",
              { className: Dt.a.rightPanel },
              o.createElement($t, { key: "right" + i, ImgUrl: e.right_panel })
            ),
            n = o.createElement($t, { key: "left" + i, ImgUrl: e.left_panel });
          if (i < 11) {
            const t = ke.b.GetAppIDListForBroadcasterSteamID(e.steamid);
            t && 1 === t.length && (i = t[0]);
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
              ((s = o.createElement(Ft, {
                key: "mini" + e.accountid,
                appid: i,
              })),
              (r.bRightPanelArtworkOrEmpty = !1)),
            a && !t
              ? ((r.leftPanel = o.createElement(Yt, {
                  broadcastEmbedContext: this.props,
                  key: "selector" + i,
                  curStream: e,
                  onStreamSelect: this.onStreamSelect,
                  fnFilterStreams: this.props.fnFilterStreams,
                  bShowCapsuleArt: this.props.bShowCapsuleArt,
                })),
                (r.rightPanel = s))
              : t
              ? ((r.leftPanel = o.createElement("div", null)),
                (r.rightPanel = o.createElement(Xt, {
                  stream: e,
                  orientation: "rightside",
                })),
                (r.bRightPanelArtworkOrEmpty = !1))
              : ((r.leftPanel = n), (r.rightPanel = s)),
            r
          );
        }
        render() {
          if (!At.IsBroadcastAllowed() || this.state.bLoadingPreference)
            return null;
          let e = jt.a.Get().GetPlayReadyStream(this.props);
          if (e) {
            let t = "show" === jt.a.Get().GetChatVisibility();
            const {
              event: r,
              language: a,
              fnRenderBroadcastContext: i,
            } = this.props;
            r &&
              (e = Object.assign(Object.assign({}, e), {
                left_panel: r.GetImageURL(
                  "broadcast_left",
                  a || Object(Ne.k)(Ce.d.LANGUAGE)
                ),
                right_panel: r.GetImageURL(
                  "broadcast_right",
                  a || Object(Ne.k)(Ce.d.LANGUAGE)
                ),
                store_title: r.GetBroadcastTitle(
                  a || Object(Ne.k)(Ce.d.LANGUAGE)
                ),
                broadcast_chat_visibility: r.GetBroadcastChatVisibility(),
              }));
            let s = this.ConstructSidePanels(e, t),
              n = e.store_title ? e.store_title : e.title,
              l = jt.a.Get().GetConcurrentStreams(this.props) > 1;
            const c = () => {
              var t, r;
              e.nAppIDVOD && this.PlayTopNonVOD(),
                null === (r = (t = this.props).fnOnVideoEnd) ||
                  void 0 === r ||
                  r.call(t);
            };
            r && r.jsondata && r.jsondata.broadcast_gradient_inner_color,
              r && r.jsondata && r.jsondata.broadcast_gradient_outer_color;
            return o.createElement(
              o.Fragment,
              null,
              o.createElement(
                "div",
                {
                  className: "broadcast_embed_top_ctn_trgt",
                  style: this.state.style,
                },
                o.createElement(
                  "div",
                  {
                    className: Object(it.a)({
                      [Dt.a.bordered_container]: !0,
                      [Dt.a.Event]: Boolean(r),
                      broadcast_brd_ctn_trgt: !0,
                    }),
                  },
                  o.createElement(
                    "div",
                    {
                      className: Object(it.a)(
                        Dt.a.bordered_title,
                        "bordered_title_trgt"
                      ),
                    },
                    o.createElement(Wt.i, null),
                    n,
                    o.createElement(
                      "div",
                      { className: Dt.a.bordered_corner_container },
                      !this.state.bExpanded &&
                        o.createElement("div", {
                          className: Dt.a.broadcast_settings_icon,
                          "data-tooltip-text": Object(Se.f)(
                            "#StoreBroadcast_Change_store_Broadcast_settings"
                          ),
                          onClick: () =>
                            window.open(
                              `${Ce.d.STORE_BASE_URL}account/preferences/#store_broadcast_settings`
                            ),
                        }),
                      o.createElement("div", {
                        className: this.state.bExpanded
                          ? Dt.a.bordered_corner_expanded
                          : Dt.a.bordered_corner_shrinked,
                        "data-tooltip-text": Object(Se.f)(
                          "#StoreBroadcast_Hide_Tooltip"
                        ),
                        onClick: this.ToggleBroadcastExpandShrink,
                      })
                    ),
                    Boolean(e.gamedata_subtitle) &&
                      o.createElement(
                        "div",
                        { className: Dt.a.bordered_subtitle },
                        e.gamedata_subtitle
                      )
                  ),
                  this.state.bExpanded &&
                    o.createElement(
                      "div",
                      {
                        className: Object(it.a)({
                          [Dt.a.container]: !0,
                          embeddable_ctn_trgt: !0,
                          multistream: l,
                          broadcast_right_panel_simple:
                            s.bRightPanelArtworkOrEmpty,
                          broadcast_chat_expanded: t,
                        }),
                        style: Object.assign({}, this.state.innerStyle),
                        onTransitionEnd: this.OnShrinkTransitionEnd,
                      },
                      s.leftPanel,
                      o.createElement(qt, {
                        stream: e,
                        bStartMuted: this.state.bStartMuted,
                        fnRenderBroadcastContext: i,
                        fnOnVideoEnd: c,
                        bWidePlayer: this.props.bWidePlayer,
                      }),
                      s.rightPanel,
                      this.state.bExpanded &&
                        o.createElement(Ht, { stream: e, bMultistream: l })
                    )
                ),
                Boolean(
                  r && r.jsondata && r.jsondata.broadcast_item_drops_enabled
                ) && o.createElement(Gt, { event: r }),
                this.state.bExpanded &&
                  o.createElement(
                    "div",
                    { className: `${r ? Dt.a.Event : ""}` },
                    o.createElement(Ht, { stream: e, bMultistream: l })
                  ),
                o.createElement("div", { className: Dt.a.clear_div })
              )
            );
          }
          return o.createElement("div", { className: "NoBroadcastAvailable" });
        }
      });
      Object(a.b)([st.a], Vt.prototype, "ToggleBroadcastExpandShrink", null),
        Object(a.b)([st.a], Vt.prototype, "OnShrinkTransitionEnd", null),
        Object(a.b)([st.a], Vt.prototype, "onStreamSelect", null),
        Object(a.b)([st.a], Vt.prototype, "PlayTopNonVOD", null),
        (Vt = At = Object(a.b)([n.a], Vt));
      t.default = Vt;
      class qt extends o.Component {
        constructor(e) {
          super(e),
            (this.m_iVideoContainerRef = o.createRef()),
            (this.state = {
              bPopout: !1,
              bPreventPopup: window.screen.width <= 768,
            });
        }
        CloseBroadcastPopup() {
          const e = Tt.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
            .m_nAppID;
          Object(jt.e)(e, 7, this.props.stream.snr),
            this.setState({ bPopout: !1, bPreventPopup: !0 });
        }
        OnEnter() {
          !this.state.bPreventPopup &&
            this.state.bPopout &&
            this.setState({ bPopout: !1 });
        }
        OnLeave() {
          this.state.bPreventPopup ||
            this.state.bPopout ||
            this.setState({ bPopout: !0 });
        }
        render() {
          return o.createElement(
            "div",
            { className: Dt.a.wrapper },
            o.createElement(
              Pt,
              { onEnter: this.OnEnter, onLeave: this.OnLeave },
              o.createElement(
                "div",
                {
                  className: Object(it.a)({
                    [Dt.a.video_placeholder]: !0,
                    video_placeholder_trgt: !0,
                    [Dt.a.WidePlayer]: this.props.bWidePlayer,
                  }),
                  ref: this.m_iVideoContainerRef,
                },
                o.createElement(
                  "div",
                  {
                    className: this.state.bPopout
                      ? Dt.a.broadcast_floating
                      : Dt.a.video_container,
                  },
                  this.state.bPopout &&
                    o.createElement(Kt, {
                      steamIDBroadcast: this.props.stream.steamid,
                      OnPreventPopup: this.CloseBroadcastPopup,
                    }),
                  o.createElement(
                    "div",
                    { className: Dt.a.BroadcastPlayerContainer },
                    o.createElement(gt.a, {
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
        }
      }
      Object(a.b)([st.a], qt.prototype, "CloseBroadcastPopup", null),
        Object(a.b)([st.a], qt.prototype, "OnEnter", null),
        Object(a.b)([st.a], qt.prototype, "OnLeave", null);
      let Ht = class extends o.Component {
        ConstructBroadcastLink() {
          let e = this.props.stream;
          const t = Tt.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
            .m_nAppID;
          let r = kt.list.find(
            (r) =>
              r.appid == t &&
              (!r.broadcasterAccountID || r.broadcasterAccountID == e.accountid)
          );
          if (r) {
            let e = r.url;
            return (
              (Ce.d.IN_CLIENT ||
                navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
                (e = "steam://openurl/" + e),
              o.createElement(
                "a",
                { href: e },
                Object(Se.f)("#Broadcast_Embed_Watch_With_Frieds_SteamTV")
              )
            );
          }
          {
            let e = this.props.stream.steamid,
              t = Ce.d.COMMUNITY_BASE_URL + "broadcast/watch/" + e;
            return o.createElement(
              "a",
              {
                href: t,
                className: Dt.a.external_link,
                "data-tooltip-text": Object(Se.f)(
                  "#BroadcastWatch_View_Broadcast_Page"
                ),
              },
              o.createElement(at.E, null)
            );
          }
        }
        OnToggleChat(e) {
          e.preventDefault();
          const t = Tt.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
            .m_nAppID;
          Object(jt.e)(
            t,
            "show" === jt.a.Get().GetChatVisibility() ? 5 : 4,
            this.props.stream.snr
          ),
            jt.a.Get().ToggleChatVisibility();
        }
        onWatchBroadcastPage() {
          const e = Tt.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
            .m_nAppID;
          Object(jt.e)(e, 9, this.props.stream.snr);
        }
        render() {
          const e = this.ConstructBroadcastLink(),
            t = "remove" != jt.a.Get().GetChatVisibility(),
            r = "hide" === jt.a.Get().GetChatVisibility();
          let a = Number.parseInt(
            "" +
              Tt.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nViewerCount
          );
          return o.createElement(
            "div",
            { className: Object(it.a)(Dt.a.viewer_bar, "viewer_bar") },
            o.createElement(
              "div",
              { className: Object(it.a)(Dt.a.viewer_count, "viewer_count") },
              o.createElement(at.zb, null),
              a.toLocaleString(Se.e.GetPreferredLocales())
            ),
            o.createElement(
              "div",
              { className: Object(it.a)(Dt.a.viewer_links, "viewer_links") },
              Boolean(t && !r && this.props.bMultistream) &&
                o.createElement(
                  "div",
                  { className: Dt.a.chat_link },
                  o.createElement(
                    "a",
                    {
                      href: "#",
                      className: Dt.a.ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    Object(Se.f)("#sale_three_section_show_streams")
                  )
                ),
              t &&
                o.createElement(
                  "div",
                  { className: Dt.a.chat_link },
                  o.createElement(at.l, null),
                  o.createElement(
                    "a",
                    {
                      href: "#",
                      className: Dt.a.ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    Object(Se.f)(
                      r
                        ? "#sale_three_section_show_chat"
                        : "#sale_three_section_hide_chat"
                    )
                  )
                ),
              t && o.createElement("span", { className: Dt.a.ChatToggle }),
              o.createElement(
                "a",
                {
                  href:
                    Ce.d.STORE_BASE_URL +
                    "account/preferences/#store_broadcast_settings",
                  target: Ce.d.IN_CLIENT ? void 0 : "_blank",
                  className: Dt.a.settings_link,
                  "data-tooltip-text": Object(Se.f)(
                    "#StoreBroadcast_Change_store_Broadcast_settings"
                  ),
                },
                o.createElement(at.fb, null)
              ),
              e
            )
          );
        }
      };
      Object(a.b)([st.a], Ht.prototype, "OnToggleChat", null),
        Object(a.b)([st.a], Ht.prototype, "onWatchBroadcastPage", null),
        (Ht = Object(a.b)([n.a], Ht));
      class $t extends o.Component {
        render() {
          let e = this.props.ImgUrl;
          return o.createElement(
            o.Fragment,
            null,
            e &&
              o.createElement("img", {
                className: Dt.a.side_panels,
                src: this.props.ImgUrl,
              }),
            !e && o.createElement("div", { className: Dt.a.side_panels })
          );
        }
      }
      const Kt = Object(n.a)((e) => {
        const { steamIDBroadcast: t } = e,
          r = Tt.a.GetOrCreateBroadcastInfo(t).m_nAppID,
          a = yt.a.GetAppLinkInfo(r);
        return o.createElement(
          "div",
          { className: [Dt.a.PopOutVideoTitleBar, Dt.a.NoSeslect].join(" ") },
          Boolean(a)
            ? o.createElement(
                Mt.a,
                { type: "app", id: r, className: Dt.a.PopOutVideoTitleText },
                Object(Se.f)("#StoreBroadcast_Detault_popout_Title")
              )
            : o.createElement(
                "div",
                { className: Dt.a.PopOutVideoTitleText },
                Object(Se.f)("#StoreBroadcast_Detault_popout_Title")
              ),
          o.createElement(
            "button",
            {
              className: Dt.a.PopOutVideoCloseButton,
              "data-tooltip-text": Object(Se.f)(
                "#StoreBroadcast_close_broadcast_popup"
              ),
              onClick: e.OnPreventPopup,
            },
            o.createElement(at.Db, null)
          )
        );
      });
      class Yt extends o.Component {
        constructor() {
          super(...arguments), (this.itemRef = o.createRef());
        }
        GetFilteredStreamList() {
          const e = jt.a
            .Get()
            .GetStreams(this.props.broadcastEmbedContext)
            .filter(
              (e) =>
                !this.props.fnFilterStreams || this.props.fnFilterStreams(e)
            );
          return Object(jt.f)(e), e;
        }
        CalculateStreamHeight(e) {
          const t = Tt.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
            r = yt.a.GetAppLinkInfo(t);
          return this.props.bShowCapsuleArt &&
            (null == r ? void 0 : r.header_image_url)
            ? parseInt(Dt.a.strStreamIconCapsuleArtHeight)
            : parseInt(Dt.a.strStreamIconScreenshotArtHeight);
        }
        componentDidMount() {
          if (this.itemRef && this.itemRef.current) {
            const e = this.GetFilteredStreamList();
            let t = 0;
            for (const r of e) {
              if (this.props.curStream.accountid == r.accountid) break;
              t += this.CalculateStreamHeight(r);
            }
            this.itemRef.current.scrollTop = t;
          }
        }
        render() {
          const e = this.GetFilteredStreamList(),
            t = e.map((e) => {
              var t;
              return o.createElement(Jt, {
                key: null !== (t = e.accountid) && void 0 !== t ? t : e.steamid,
                stream: e,
                bSelected: this.props.curStream.accountid == e.accountid,
                onStreamSelect: this.props.onStreamSelect,
                bShowCapsuleArt: this.props.bShowCapsuleArt,
              });
            });
          return o.createElement(
            "div",
            {
              ref: this.itemRef,
              className: Object(it.a)(
                Dt.a.side_panels,
                "side_panels",
                Dt.a.multistream,
                e.length > 3 ? Dt.a.scrollingstreams : ""
              ),
            },
            t
          );
        }
      }
      let Jt = (Lt = class extends o.Component {
        onClick() {
          this.props.onStreamSelect &&
            this.props.onStreamSelect(this.props.stream);
        }
        generateThumbnail(e) {
          var t;
          const { stream: r } = this.props,
            a = this.props.bSelected
              ? Dt.a.stream_icon_selected
              : Dt.a.stream_icon;
          if (e) {
            const e = Tt.a.GetOrCreateBroadcastInfo(r.steamid).m_nAppID,
              i = yt.a.GetAppLinkInfo(
                null !== (t = r.nAppIDVOD) && void 0 !== t ? t : e
              ),
              s = [r.thumbnail_http_address];
            return o.createElement(
              o.Fragment,
              null,
              i &&
                o.createElement("img", {
                  className: Object(it.a)(a, Dt.a.stream_icon_hide_on_hover),
                  src: i.header_image_url,
                }),
              o.createElement(It.b, {
                className: Object(it.a)(a, Dt.a.stream_icon_show_on_hover),
                srcs: s,
              })
            );
          }
          return o.createElement("img", {
            className: a,
            src: r.thumbnail_http_address,
          });
        }
        static GetClassForStreamPriority(e) {
          switch (e) {
            case jt.b.k_eFeatured:
              return Dt.a.stream_featured;
          }
          return null;
        }
        render() {
          var e;
          const { stream: t, bShowCapsuleArt: r } = this.props;
          if (!Object(jt.d)(t)) return null;
          const a = Tt.a.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
            i = yt.a.GetAppLinkInfo(
              null !== (e = t.nAppIDVOD) && void 0 !== e ? e : a
            ),
            s = Boolean(r && (null == i ? void 0 : i.header_image_url)),
            n = Number.parseInt("" + t.viewer_count),
            l = !Number.isNaN(n),
            c = !!t.nAppIDVOD && (null == i ? void 0 : i.title);
          return o.createElement(
            "div",
            {
              className: Object(it.a)(
                Dt.a.stream_icon_and_viewer_container,
                Lt.GetClassForStreamPriority(t.current_selection_priority),
                s && Dt.a.display_capsule_art
              ),
            },
            o.createElement(
              Mt.b,
              { type: "app", id: a },
              o.createElement(
                Et.a,
                {
                  className: Dt.a.stream_icon_container,
                  onClick: this.onClick,
                  rootMargin: "100px 0px 100px 0px",
                },
                this.generateThumbnail(s),
                this.props.bSelected &&
                  o.createElement("div", { className: Dt.a.stream_icon_arrow })
              )
            ),
            o.createElement(
              "div",
              {
                className: Object(it.a)(
                  Dt.a.viewer_count,
                  !l && Dt.a.vod_title
                ),
              },
              l
                ? o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(at.zb, null),
                    " ",
                    n.toLocaleString(Se.e.GetPreferredLocales())
                  )
                : c
            )
          );
        }
      });
      Object(a.b)([st.a], Jt.prototype, "onClick", null),
        (Jt = Lt = Object(a.b)([n.a], Jt));
      let Xt = class extends o.Component {
        render() {
          let e = "below" == this.props.orientation;
          const t = Tt.a.GetBroadcast(this.props.stream.steamid);
          return t
            ? o.createElement(
                "div",
                {
                  className: Object(it.a)(
                    e
                      ? Dt.a.chat_below_container
                      : Dt.a.chat_rightside_container,
                    Dt.a.store_chat_ctn
                  ),
                },
                o.createElement(
                  "div",
                  { className: Dt.a.ChatContainer },
                  o.createElement(ut, {
                    emoticonStore: jt.g,
                    watchLocation: 6,
                    steamID: this.props.stream.steamid,
                    broadcastID: t.m_ulBroadcastID,
                  })
                )
              )
            : null;
        }
      };
      Xt = Object(a.b)([n.a], Xt);
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
