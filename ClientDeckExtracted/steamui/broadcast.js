/* Third-party software licenses can be found at licenses.txt */
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
        "duration-app-launch": "800ms",
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
          return Gt;
        });
      var a = r("mrSG"),
        i = r("vDqi"),
        s = r.n(i),
        n = r("TyAF"),
        o = r("aoTL"),
        l = r("q1tI"),
        c = r.n(l),
        d = r("2vnA"),
        m = r("TtDX"),
        u = r("kdZy"),
        _ = r("A5MU"),
        h = (r("mgoM"), r("bxBv")),
        b = r("u2yL"),
        p = r("WBba"),
        g = r("kLLr"),
        B = r("hRO2"),
        y = r("OS8t");
      const S = B.Message;
      class f extends S {
        constructor(e = null) {
          super(),
            f.prototype.broadcast_channel_id || y.a(f.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: y.d.readFixed64String,
                    bw: y.h.writeFixed64String,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = y.e(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(f.M(), e, t);
        }
        static fromObject(e) {
          return y.c(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_CreateBroadcastChannel_Response";
        }
      }
      class w extends S {
        constructor(e = null) {
          super(),
            w.prototype.broadcast_channel_id || y.a(w.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
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
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = y.e(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(w.M(), e, t);
        }
        static fromObject(e) {
          return y.c(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelID_Response";
        }
      }
      class C extends S {
        constructor(e = null) {
          super(), S.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new C();
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SetBroadcastChannelProfile_Response";
        }
      }
      class M extends S {
        constructor(e = null) {
          super(),
            M.prototype.unique_name || y.a(M.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
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
                  language: { n: 4, br: y.d.readString, bw: y.h.writeString },
                  headline: { n: 5, br: y.d.readString, bw: y.h.writeString },
                  summary: { n: 6, br: y.d.readString, bw: y.h.writeString },
                  schedule: { n: 7, br: y.d.readString, bw: y.h.writeString },
                  rules: { n: 8, br: y.d.readString, bw: y.h.writeString },
                  panels: { n: 9, br: y.d.readString, bw: y.h.writeString },
                  is_partnered: { n: 10, br: y.d.readBool, bw: y.h.writeBool },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = y.e(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(M.M(), e, t);
        }
        static fromObject(e) {
          return y.c(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelProfile_Response";
        }
      }
      class v extends S {
        constructor(e = null) {
          super(),
            v.prototype.replace_image_hash || y.a(v.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  replace_image_hash: {
                    n: 1,
                    br: y.d.readString,
                    bw: y.h.writeString,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = y.e(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(v.M(), e, t);
        }
        static fromObject(e) {
          return y.c(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SetBroadcastChannelImage_Response";
        }
      }
      class O extends S {
        constructor(e = null) {
          super(),
            O.prototype.images || y.a(O.M()),
            S.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: { images: { n: 1, c: R, r: !0, q: !0 } },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = y.e(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(O.M(), e, t);
        }
        static fromObject(e) {
          return y.c(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelImages_Response";
        }
      }
      class R extends S {
        constructor(e = null) {
          super(),
            R.prototype.image_type || y.a(R.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  image_type: { n: 1, br: y.d.readEnum, bw: y.h.writeEnum },
                  image_path: { n: 2, br: y.d.readString, bw: y.h.writeString },
                  image_index: {
                    n: 3,
                    br: y.d.readUint32,
                    bw: y.h.writeUint32,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = y.e(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(R.M(), e, t);
        }
        static fromObject(e) {
          return y.c(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelImages_Response_Images";
        }
      }
      class z extends S {
        constructor(e = null) {
          super(),
            z.prototype.links || y.a(z.M()),
            S.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: { links: { n: 1, c: T, r: !0, q: !0 } },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = y.e(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(z.M(), e, t);
        }
        static fromObject(e) {
          return y.c(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelLinks_Response";
        }
      }
      class T extends S {
        constructor(e = null) {
          super(),
            T.prototype.link_index || y.a(T.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  link_index: { n: 1, br: y.d.readUint32, bw: y.h.writeUint32 },
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
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = y.e(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(T.M(), e, t);
        }
        static fromObject(e) {
          return y.c(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelLinks_Response_Links";
        }
      }
      class F extends S {
        constructor(e = null) {
          super(), S.initialize(this, e, 0, -1, void 0, null);
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
          let t = new B.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SetBroadcastChannelLinkRegions_Response";
        }
      }
      class j extends S {
        constructor(e = null) {
          super(),
            j.prototype.is_live || y.a(j.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  is_live: { n: 1, br: y.d.readBool, bw: y.h.writeBool },
                  is_disabled: { n: 2, br: y.d.readBool, bw: y.h.writeBool },
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
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = y.e(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(j.M(), e, t);
        }
        static fromObject(e) {
          return y.c(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelStatus_Response";
        }
      }
      class W extends S {
        constructor(e = null) {
          super(),
            W.prototype.broadcast_channel_id || y.a(W.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
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
                  headline: { n: 9, br: y.d.readString, bw: y.h.writeString },
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
                  is_featured: { n: 14, br: y.d.readBool, bw: y.h.writeBool },
                  is_disabled: { n: 15, br: y.d.readBool, bw: y.h.writeBool },
                  is_live: { n: 16, br: y.d.readBool, bw: y.h.writeBool },
                  language: { n: 17, br: y.d.readString, bw: y.h.writeString },
                  reports: { n: 18, br: y.d.readUint32, bw: y.h.writeUint32 },
                  is_partnered: { n: 19, br: y.d.readBool, bw: y.h.writeBool },
                },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = y.e(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(W.M(), e, t);
        }
        static fromObject(e) {
          return y.c(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "GetBroadcastChannelEntry";
        }
      }
      class I extends S {
        constructor(e = null) {
          super(),
            I.prototype.results || y.a(I.M()),
            S.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: { results: { n: 1, c: W, r: !0, q: !0 } },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = y.e(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(I.M(), e, t);
        }
        static fromObject(e) {
          return y.c(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetFollowedChannels_Response";
        }
      }
      class E extends S {
        constructor(e = null) {
          super(),
            E.prototype.results || y.a(E.M()),
            S.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: { results: { n: 1, c: W, r: !0, q: !0 } },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = y.e(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(E.M(), e, t);
        }
        static fromObject(e) {
          return y.c(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetSubscribedChannels_Response";
        }
      }
      class x extends S {
        constructor(e = null) {
          super(),
            x.prototype.is_followed || y.a(x.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  is_followed: { n: 1, br: y.d.readBool, bw: y.h.writeBool },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = y.e(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(x.M(), e, t);
        }
        static fromObject(e) {
          return y.c(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_FollowBroadcastChannel_Response";
        }
      }
      class P extends S {
        constructor(e = null) {
          super(),
            P.prototype.is_subscribed || y.a(P.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: {
                  is_subscribed: { n: 1, br: y.d.readBool, bw: y.h.writeBool },
                },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = y.e(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(P.M(), e, t);
        }
        static fromObject(e) {
          return y.c(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SubscribeBroadcastChannel_Response";
        }
      }
      class N extends S {
        constructor(e = null) {
          super(), S.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new N();
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_ReportBroadcastChannel_Response";
        }
      }
      class U extends S {
        constructor(e = null) {
          super(),
            U.prototype.is_followed || y.a(U.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  is_followed: { n: 1, br: y.d.readBool, bw: y.h.writeBool },
                  is_subscribed: { n: 2, br: y.d.readBool, bw: y.h.writeBool },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = y.e(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(U.M(), e, t);
        }
        static fromObject(e) {
          return y.c(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelInteraction_Response";
        }
      }
      class A extends S {
        constructor(e = null) {
          super(),
            A.prototype.appid || y.a(A.M()),
            S.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
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
                  developer: { n: 7, br: y.d.readString, bw: y.h.writeString },
                  publisher: { n: 8, br: y.d.readString, bw: y.h.writeString },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = y.e(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(A.M(), e, t);
        }
        static fromObject(e) {
          return y.c(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_Game";
        }
      }
      class D extends S {
        constructor(e = null) {
          super(),
            D.prototype.results || y.a(D.M()),
            S.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: { results: { n: 1, c: A, r: !0, q: !0 } },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = y.e(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(D.M(), e, t);
        }
        static fromObject(e) {
          return y.c(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetGames_Response";
        }
      }
      class G extends S {
        constructor(e = null) {
          super(),
            G.prototype.results || y.a(G.M()),
            S.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: { results: { n: 1, c: W, r: !0, q: !0 } },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = y.e(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(G.M(), e, t);
        }
        static fromObject(e) {
          return y.c(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetChannels_Response";
        }
      }
      class L extends S {
        constructor(e = null) {
          super(),
            L.prototype.broadcasters || y.a(L.M()),
            S.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: { broadcasters: { n: 1, c: k, r: !0, q: !0 } },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = y.e(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(L.M(), e, t);
        }
        static fromObject(e) {
          return y.c(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelBroadcasters_Response";
        }
      }
      class k extends S {
        constructor(e = null) {
          super(),
            k.prototype.steamid || y.a(k.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  steamid: {
                    n: 1,
                    br: y.d.readFixed64String,
                    bw: y.h.writeFixed64String,
                  },
                  name: { n: 2, br: y.d.readString, bw: y.h.writeString },
                  rtmp_token: { n: 3, br: y.d.readString, bw: y.h.writeString },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = y.e(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(k.M(), e, t);
        }
        static fromObject(e) {
          return y.c(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster";
        }
      }
      class V extends S {
        constructor(e = null) {
          super(),
            V.prototype.issuer_steamid || y.a(V.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
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
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = y.e(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(V.M(), e, t);
        }
        static fromObject(e) {
          return y.c(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_ChatBan";
        }
      }
      class q extends S {
        constructor(e = null) {
          super(),
            q.prototype.broadcast_channel_id || y.a(q.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            q.sm_m ||
              (q.sm_m = {
                proto: q,
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
                  duration: { n: 3, br: y.d.readUint32, bw: y.h.writeUint32 },
                  permanent: { n: 4, br: y.d.readBool, bw: y.h.writeBool },
                  undo: { n: 5, br: y.d.readBool, bw: y.h.writeBool },
                },
              }),
            q.sm_m
          );
        }
        static MBF() {
          return q.sm_mbf || (q.sm_mbf = y.e(q.M())), q.sm_mbf;
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(q.M(), e, t);
        }
        static fromObject(e) {
          return y.c(q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(q.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AddChatBan_Request";
        }
      }
      class H extends S {
        constructor(e = null) {
          super(), S.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new H();
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AddChatBan_Response";
        }
      }
      class $ extends S {
        constructor(e = null) {
          super(),
            $.prototype.results || y.a($.M()),
            S.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            $.sm_m ||
              ($.sm_m = {
                proto: $,
                fields: { results: { n: 1, c: V, r: !0, q: !0 } },
              }),
            $.sm_m
          );
        }
        static MBF() {
          return $.sm_mbf || ($.sm_mbf = y.e($.M())), $.sm_mbf;
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g($.M(), e, t);
        }
        static fromObject(e) {
          return y.c($.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b($.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f($.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetChatBans_Response";
        }
      }
      class K extends S {
        constructor(e = null) {
          super(), S.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return K.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new K();
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AddChatModerator_Response";
        }
      }
      class Y extends S {
        constructor(e = null) {
          super(),
            Y.prototype.broadcast_channel_id || y.a(Y.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: y.d.readFixed64String,
                    bw: y.h.writeFixed64String,
                  },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = y.e(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(Y.M(), e, t);
        }
        static fromObject(e) {
          return y.c(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetChatModerators_Request";
        }
      }
      class J extends S {
        constructor(e = null) {
          super(),
            J.prototype.steamid || y.a(J.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  steamid: {
                    n: 1,
                    br: y.d.readFixed64String,
                    bw: y.h.writeFixed64String,
                  },
                  name: { n: 2, br: y.d.readString, bw: y.h.writeString },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = y.e(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(J.M(), e, t);
        }
        static fromObject(e) {
          return y.c(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_ChatModerator";
        }
      }
      class Q extends S {
        constructor(e = null) {
          super(),
            Q.prototype.results || y.a(Q.M()),
            S.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: { results: { n: 1, c: J, r: !0, q: !0 } },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = y.e(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(Q.M(), e, t);
        }
        static fromObject(e) {
          return y.c(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetChatModerators_Response";
        }
      }
      class X extends S {
        constructor(e = null) {
          super(), S.initialize(this, e, 0, -1, void 0, null);
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
          let t = new B.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AddWordBan_Response";
        }
      }
      class Z extends S {
        constructor(e = null) {
          super(),
            Z.prototype.results || y.a(Z.M()),
            S.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
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
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = y.e(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(Z.M(), e, t);
        }
        static fromObject(e) {
          return y.c(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetWordBans_Response";
        }
      }
      class ee extends S {
        constructor(e = null) {
          super(),
            ee.prototype.broadcast_channel_id || y.a(ee.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: y.d.readFixed64String,
                    bw: y.h.writeFixed64String,
                  },
                },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = y.e(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(ee.M(), e, t);
        }
        static fromObject(e) {
          return y.c(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_JoinChat_Request";
        }
      }
      class te extends S {
        constructor(e = null) {
          super(),
            te.prototype.chat_id || y.a(te.M()),
            S.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
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
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = y.e(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(te.M(), e, t);
        }
        static fromObject(e) {
          return y.c(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_JoinChat_Response";
        }
      }
      class re extends S {
        constructor(e = null) {
          super(),
            re.prototype.results || y.a(re.M()),
            S.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: { results: { n: 1, c: W, r: !0, q: !0 } },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = y.e(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(re.M(), e, t);
        }
        static fromObject(e) {
          return y.c(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_Search_Response";
        }
      }
      class ae extends S {
        constructor(e = null) {
          super(),
            ae.prototype.stream_live_email || y.a(ae.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
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
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = y.e(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(ae.M(), e, t);
        }
        static fromObject(e) {
          return y.c(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetSteamTVUserSettings_Response";
        }
      }
      class ie extends S {
        constructor(e = null) {
          super(), S.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new ie();
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SetSteamTVUserSettings_Response";
        }
      }
      class se extends S {
        constructor(e = null) {
          super(),
            se.prototype.results || y.a(se.M()),
            S.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: { results: { n: 1, c: W, r: !0, q: !0 } },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = y.e(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(se.M(), e, t);
        }
        static fromObject(e) {
          return y.c(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetMyBroadcastChannels_Response";
        }
      }
      class ne extends S {
        constructor(e = null) {
          super(),
            ne.prototype.broadcasts || y.a(ne.M()),
            S.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: { broadcasts: { n: 1, c: W, r: !0, q: !0 } },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = y.e(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(ne.M(), e, t);
        }
        static fromObject(e) {
          return y.c(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_Takeover";
        }
      }
      class oe extends S {
        constructor(e = null) {
          super(),
            oe.prototype.broadcasts || y.a(oe.M()),
            S.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  broadcasts: { n: 1, c: W, r: !0, q: !0 },
                  appid: { n: 2, br: y.d.readUint32, bw: y.h.writeUint32 },
                  title: { n: 3, br: y.d.readString, bw: y.h.writeString },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = y.e(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(oe.M(), e, t);
        }
        static fromObject(e) {
          return y.c(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_SingleGame";
        }
      }
      class le extends S {
        constructor(e = null) {
          super(),
            le.prototype.appid || y.a(le.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  appid: { n: 1, br: y.d.readUint32, bw: y.h.writeUint32 },
                  game_name: { n: 2, br: y.d.readString, bw: y.h.writeString },
                  broadcast: { n: 3, c: W },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = y.e(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(le.M(), e, t);
        }
        static fromObject(e) {
          return y.c(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "GameListEntry";
        }
      }
      class ce extends S {
        constructor(e = null) {
          super(),
            ce.prototype.entries || y.a(ce.M()),
            S.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  entries: { n: 1, c: le, r: !0, q: !0 },
                  title: { n: 2, br: y.d.readString, bw: y.h.writeString },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = y.e(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(ce.M(), e, t);
        }
        static fromObject(e) {
          return y.c(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_GameList";
        }
      }
      class de extends S {
        constructor(e = null) {
          super(),
            de.prototype.broadcasts || y.a(de.M()),
            S.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  broadcasts: { n: 1, c: W, r: !0, q: !0 },
                  title: { n: 2, br: y.d.readString, bw: y.h.writeString },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = y.e(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(de.M(), e, t);
        }
        static fromObject(e) {
          return y.c(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_QuickExplore";
        }
      }
      class me extends S {
        constructor(e = null) {
          super(),
            me.prototype.broadcasts || y.a(me.M()),
            S.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: {
                  broadcasts: { n: 1, c: W, r: !0, q: !0 },
                  title: { n: 2, br: y.d.readString, bw: y.h.writeString },
                },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = y.e(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(me.M(), e, t);
        }
        static fromObject(e) {
          return y.c(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_ConveyorBelt";
        }
      }
      class ue extends S {
        constructor(e = null) {
          super(),
            ue.prototype.broadcast || y.a(ue.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
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
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = y.e(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(ue.M(), e, t);
        }
        static fromObject(e) {
          return y.c(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_WatchParty";
        }
      }
      class _e extends S {
        constructor(e = null) {
          super(),
            _e.prototype.broadcast || y.a(_e.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  broadcast: { n: 1, c: W },
                  title: { n: 2, br: y.d.readString, bw: y.h.writeString },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = y.e(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(_e.M(), e, t);
        }
        static fromObject(e) {
          return y.c(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_Developer";
        }
      }
      class he extends S {
        constructor(e = null) {
          super(),
            he.prototype.title || y.a(he.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  title: { n: 1, br: y.d.readString, bw: y.h.writeString },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = y.e(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(he.M(), e, t);
        }
        static fromObject(e) {
          return y.c(he.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(he.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(he.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_Event";
        }
      }
      class be extends S {
        constructor(e = null) {
          super(),
            be.prototype.template_type || y.a(be.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            be.sm_m ||
              (be.sm_m = {
                proto: be,
                fields: {
                  template_type: { n: 1, br: y.d.readEnum, bw: y.h.writeEnum },
                  takeover: { n: 2, c: ne },
                  single_game: { n: 3, c: oe },
                  game_list: { n: 4, c: ce },
                  quick_explore: { n: 5, c: de },
                  conveyor_belt: { n: 6, c: me },
                  watch_party: { n: 7, c: ue },
                  developer: { n: 8, c: _e },
                  event: { n: 9, c: he },
                },
              }),
            be.sm_m
          );
        }
        static MBF() {
          return be.sm_mbf || (be.sm_mbf = y.e(be.M())), be.sm_mbf;
        }
        toObject(e = !1) {
          return be.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(be.M(), e, t);
        }
        static fromObject(e) {
          return y.c(be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new be();
          return be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(be.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageContentRow";
        }
      }
      class pe extends S {
        constructor(e = null) {
          super(),
            pe.prototype.rows || y.a(pe.M()),
            S.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            pe.sm_m ||
              (pe.sm_m = {
                proto: pe,
                fields: { rows: { n: 1, c: be, r: !0, q: !0 } },
              }),
            pe.sm_m
          );
        }
        static MBF() {
          return pe.sm_mbf || (pe.sm_mbf = y.e(pe.M())), pe.sm_mbf;
        }
        toObject(e = !1) {
          return pe.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(pe.M(), e, t);
        }
        static fromObject(e) {
          return y.c(pe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new pe();
          return pe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(pe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(pe.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return pe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetHomePageContents_Response";
        }
      }
      class ge extends S {
        constructor(e = null) {
          super(),
            ge.prototype.broadcast_clip_id || y.a(ge.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ge.sm_m ||
              (ge.sm_m = {
                proto: ge,
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
                  live_time: { n: 7, br: y.d.readUint32, bw: y.h.writeUint32 },
                  length_ms: { n: 8, br: y.d.readUint32, bw: y.h.writeUint32 },
                  thumbnail_path: {
                    n: 9,
                    br: y.d.readString,
                    bw: y.h.writeString,
                  },
                },
              }),
            ge.sm_m
          );
        }
        static MBF() {
          return ge.sm_mbf || (ge.sm_mbf = y.e(ge.M())), ge.sm_mbf;
        }
        toObject(e = !1) {
          return ge.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(ge.M(), e, t);
        }
        static fromObject(e) {
          return y.c(ge.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new ge();
          return ge.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(ge.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(ge.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return ge.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_BroadcastClipInfo";
        }
      }
      class Be extends S {
        constructor(e = null) {
          super(),
            Be.prototype.clips || y.a(Be.M()),
            S.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Be.sm_m ||
              (Be.sm_m = {
                proto: Be,
                fields: {
                  clips: { n: 1, c: ge, r: !0, q: !0 },
                  thumbnail_host: {
                    n: 2,
                    br: y.d.readString,
                    bw: y.h.writeString,
                  },
                },
              }),
            Be.sm_m
          );
        }
        static MBF() {
          return Be.sm_mbf || (Be.sm_mbf = y.e(Be.M())), Be.sm_mbf;
        }
        toObject(e = !1) {
          return Be.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(Be.M(), e, t);
        }
        static fromObject(e) {
          return y.c(Be.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new Be();
          return Be.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(Be.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(Be.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return Be.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelClips_Response";
        }
      }
      class ye extends S {
        constructor(e = null) {
          super(),
            ye.prototype.aggregation_delay_ms || y.a(ye.M()),
            S.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ye.sm_m ||
              (ye.sm_m = {
                proto: ye,
                fields: {
                  aggregation_delay_ms: {
                    n: 1,
                    br: y.d.readUint32,
                    bw: y.h.writeUint32,
                  },
                },
              }),
            ye.sm_m
          );
        }
        static MBF() {
          return ye.sm_mbf || (ye.sm_mbf = y.e(ye.M())), ye.sm_mbf;
        }
        toObject(e = !1) {
          return ye.toObject(e, this);
        }
        static toObject(e, t) {
          return y.g(ye.M(), e, t);
        }
        static fromObject(e) {
          return y.c(ye.M(), e);
        }
        static deserializeBinary(e) {
          let t = new B.BinaryReader(e),
            r = new ye();
          return ye.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return y.b(ye.MBF(), e, t);
        }
        serializeBinary() {
          var e = new B.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          y.f(ye.M(), e, t);
        }
        serializeBase64String() {
          var e = new B.BinaryWriter();
          return ye.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AppCheer_Response";
        }
      }
      var Se;
      !(function (e) {
        (e.CreateBroadcastChannel = function (e, t) {
          return e.SendMsg("SteamTV.CreateBroadcastChannel#1", t, f, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
          (e.GetBroadcastChannelID = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelID#1", t, w, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelProfile = function (e, t) {
            return e.SendMsg("SteamTV.SetBroadcastChannelProfile#1", t, C, {
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
            return e.SendMsg("SteamTV.SetBroadcastChannelImage#1", t, v, {
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
            return e.SendMsg("SteamTV.GetBroadcastChannelStatus#1", t, j, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.FollowBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.FollowBroadcastChannel#1", t, x, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SubscribeBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.SubscribeBroadcastChannel#1", t, P, {
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
            return e.SendMsg("SteamTV.ReportBroadcastChannel#1", t, N, {
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
            return e.SendMsg("SteamTV.AddChatBan#1", t, H, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetChatBans = function (e, t) {
            return e.SendMsg("SteamTV.GetChatBans#1", t, $, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.AddChatModerator = function (e, t) {
            return e.SendMsg("SteamTV.AddChatModerator#1", t, K, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetChatModerators = function (e, t) {
            return e.SendMsg("SteamTV.GetChatModerators#1", t, Q, {
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
            return e.SendMsg("SteamTV.GetWordBans#1", t, Z, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.JoinChat = function (e, t) {
            return e.SendMsg("SteamTV.JoinChat#1", t, te, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.Search = function (e, t) {
            return e.SendMsg("SteamTV.Search#1", t, re, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.GetSteamTVUserSettings = function (e, t) {
            return e.SendMsg("SteamTV.GetSteamTVUserSettings#1", t, ae, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SetSteamTVUserSettings = function (e, t) {
            return e.SendMsg("SteamTV.SetSteamTVUserSettings#1", t, ie, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetMyBroadcastChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetMyBroadcastChannels#1", t, se, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetHomePageContents = function (e, t) {
            return e.SendMsg("SteamTV.GetHomePageContents#1", t, pe, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.AppCheer = function (e, t) {
            return e.SendMsg("SteamTV.AppCheer#1", t, ye, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(Se || (Se = {}));
      r("AiWL");
      var fe = r("qiKp"),
        we = r("TLQK"),
        Ce = r("XxJJ"),
        Me = r("lkRc"),
        ve = r("JnZK"),
        Oe = r("oFam"),
        Re = r("2ErG"),
        ze = (r("75qM"), r("65aj")),
        Te = r("uobO");
      class Fe {
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
            (this.m_TextFilterPreferences = new ze.K());
          {
            let e = new Oe.b();
            (this.m_TextFilterPreferences.eTextFilterSetting = e.text_filter_setting()),
              (this.m_TextFilterPreferences.bIgnoreFriends = e.text_filter_ignore_friends());
          }
          this.m_TextFilterWords = new Oe.q();
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
              yield this.LoadLanguage(Me.c.LANGUAGE),
              "english" !== Me.c.LANGUAGE &&
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
              e && (this.m_TextFilterWords = Oe.q.fromObject(e));
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
            let e = new Oe.b();
            if (0 !== this.m_unAccountID)
              try {
                if (this.m_Transport) {
                  let t = h.b.Init(Oe.e);
                  e = (yield Oe.s.GetCommunityPreferences(this.m_Transport, t))
                    .Body()
                    .preferences();
                } else {
                  let t = { sessionid: Me.c.SESSIONID, origin: Object(Me.d)() };
                  const r = yield s.a.get(
                    Me.c.COMMUNITY_BASE_URL +
                      "textfilter/ajaxgetcommunitypreferences",
                    { params: t, withCredentials: !0 }
                  );
                  e = Oe.b.fromObject(r.data.preferences);
                }
              } catch (e) {}
            if (
              (this.UpdateCommunityPreferences(e),
              e.text_filter_words_revision() !==
                this.m_TextFilterWords.text_filter_words_revision())
            ) {
              let t = new Oe.q();
              if (0 !== e.text_filter_words_revision())
                try {
                  if (this.m_Transport) {
                    let e = h.b.Init(Oe.l);
                    t = (yield Oe.s.GetTextFilterWords(this.m_Transport, e))
                      .Body()
                      .words();
                  } else {
                    let e = {
                      sessionid: Me.c.SESSIONID,
                      origin: Object(Me.d)(),
                    };
                    const r = yield s.a.get(
                      Me.c.COMMUNITY_BASE_URL +
                        "textfilter/ajaxgettextfiltercustomwords",
                      { params: e, withCredentials: !0 }
                    );
                    t = Oe.q.fromObject(r.data.words);
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
            let e = new Re.c();
            if (0 !== this.m_unAccountID)
              try {
                if (this.m_Transport) {
                  let t = h.b.Init(ve.b);
                  e = (yield ve.d.GetFriendsList(this.m_Transport, t))
                    .Body()
                    .friendslist();
                } else {
                  let t = { sessionid: Me.c.SESSIONID, origin: Object(Me.d)() };
                  const r = yield s.a.get(
                    Me.c.COMMUNITY_BASE_URL + "textfilter/ajaxgetfriendslist",
                    { params: t, withCredentials: !0 }
                  );
                  e = Re.c.fromObject(r.data.friendslist);
                }
              } catch (e) {}
            this.SetFriendsList(e);
          });
        }
        SetFriendsList(e) {
          e.bincremental() || this.m_mapPlayerCache.clear();
          for (let t of e.friends()) {
            let e = new g.a(t.ulfriendid());
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
              Me.c.COMMUNITY_CDN_URL
            }textfilter/gettextfilterdictionary?type=banned&language=${e}&v=1&origin=${Object(
              Me.d
            )()}`;
            try {
              const e = yield s.a.get(t);
              this.m_strBannedWords += e.data;
            } catch (e) {
              console.error("Failed to load filter dictionary " + t, e);
            }
            t = `${
              Me.c.COMMUNITY_CDN_URL
            }textfilter/gettextfilterdictionary?type=profanity&language=${e}&v=1&origin=${Object(
              Me.d
            )()}`;
            try {
              const e = yield s.a.get(t);
              this.m_strProfanityWords += e.data;
            } catch (e) {
              console.error("Failed to load filter dictionary " + t, e);
            }
            t = `${
              Me.c.COMMUNITY_CDN_URL
            }textfilter/gettextfilterdictionary?type=clean_public&language=${e}&v=1&origin=${Object(
              Me.d
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
                Object(Te.a)().ReportError(
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
                Object(Te.a)().ReportError(
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
            r = new g.a(e).GetAccountID();
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
      Object(a.b)([d.C], Fe.prototype, "m_TextFilterPreferences", void 0),
        Object(a.b)([d.C], Fe.prototype, "m_mapPlayerCache", void 0),
        Object(a.b)([d.C], Fe.prototype, "m_regexBannedWords", void 0),
        Object(a.b)([d.C], Fe.prototype, "m_regexCleanWords", void 0),
        Object(a.b)([d.k], Fe.prototype, "UpdateCommunityPreferences", null),
        Object(a.b)([d.k], Fe.prototype, "SetFriendsList", null),
        Object(a.b)([d.k], Fe.prototype, "BRebuildFilter", null);
      class je {
        constructor() {
          this.m_mapChats = new Map();
        }
        GetChat(e, t) {
          return this.m_mapChats.get(e) || this.m_mapChats.get(t);
        }
        GetOrCreateChat(e, t) {
          let r = this.GetChat(e, t);
          return r || ((r = new We()), this.m_mapChats.set(e || t, r)), r;
        }
      }
      Object(a.b)([d.C], je.prototype, "m_mapChats", void 0);
      class We {
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
            (this.m_webAPIInterface = new p.a(
              Me.c.WEBAPI_BASE_URL,
              Me.g.webapi_token
            ));
        }
        InitTextFilter() {
          this.m_textFilterStore = new Fe();
          let e = 0;
          if ("" !== Me.g.steamid) {
            e = new g.a(Me.g.steamid).GetAccountID();
          }
          this.m_textFilterStore.Init(e, null, new b.a());
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
          (this.m_webAPIInterface = new p.a(
            Me.c.WEBAPI_BASE_URL,
            Me.g.webapi_token
          )),
            (this.m_ulBroadcastSteamID = e),
            (this.m_ulBroadcastID = t),
            this.InitTextFilter(),
            this.RequestChatInfo();
        }
        StartForChannel(e) {
          (this.m_webAPIInterface = new p.a(
            Me.c.WEBAPI_BASE_URL,
            Me.g.webapi_token
          )),
            (this.m_ulBroadcastChannelID = e),
            (this.m_strUserSteamID = Me.g.steamid),
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
                      `${Me.c.WEBAPI_BASE_URL}IBroadcastService/PostChatMessage/v0001?access_token=${this.m_webApiToken}`,
                      e
                    )),
                    (a = r.data && r.data.response);
                } else {
                  const r = h.b.Init(u.c);
                  r.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    message: t,
                    instance_id: this.m_unInstanceID.toString(),
                  }),
                    (e = yield u.a.PostChatMessage(
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
                        ? Object(we.g)("#BroadcastChat_YouMuted")
                        : 84 == a.result
                        ? Object(we.g)(
                            "#BroadcastChat_Cooldown",
                            a.cooldown_time_seconds
                          )
                        : Object(we.g)("#BroadcastChat_FailedToSendMsg", t)),
                    void this.m_rgChatMessages.push({
                      type: _.a.Error,
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
                  type: _.a.Error,
                  msg: Object(we.g)("#BroadcastChat_FailedToSendMsg", t),
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
                  sessionid: Me.c.SESSIONID,
                },
                r = yield s.a.get(
                  `${Me.c.CHAT_BASE_URL}broadcast/getchatinfo`,
                  {
                    params: t,
                    withCredentials: !0,
                    cancelToken: null == e ? void 0 : e.token,
                  }
                );
              (e && e.token.reason) ||
                Object(d.G)(() => {
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
                        type: _.a.Notification,
                        msg: Object(we.g)("#BroadcastChat_DefaultMessage"),
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
              const e = h.b.Init(ee);
              e.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
              });
              let t = yield Se.JoinChat(
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
                  type: _.a.Notification,
                  msg: Object(we.g)("#BroadcastChat_DefaultMessage"),
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
            const e = h.b.Init(Y);
            e.SetBodyFields({
              broadcast_channel_id: this.m_ulBroadcastChannelID,
            });
            const t = (yield Se.GetChatModerators(
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
                    type: _.a.Chat,
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
                      ? Object(we.g)("#BroadcastChat_YouMuted", e.persona_name)
                      : Object(we.g)(
                          "#BroadcastChat_UserMuted",
                          e.persona_name
                        );
                  this.m_rgChatMessages.push({
                    type: _.a.Notification,
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
                    type: _.a.Error,
                    msg: Object(we.g)("#BroadcastChat_UnableToJoinChat"),
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
                a.append("sessionid", Me.c.SESSIONID);
              try {
                yield s.a.post(
                  `${Me.c.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`,
                  a
                ),
                  this.m_mapBroadcastModeratorUsers.set(e, t);
                const i = Object(we.g)(
                  t
                    ? "#BroadcastChat_AddedModerator"
                    : "#BroadcastChat_RemovedModerator",
                  r
                );
                this.m_rgChatMessages.push({ type: _.a.Notification, msg: i });
              } catch (e) {
                const a = Object(we.g)(
                  t
                    ? "#BroadcastChat_AddModeratorFailed"
                    : "#BroadcastChat_RemoveModeratorFailed",
                  r
                );
                this.m_rgChatMessages.push({ type: _.a.Error, msg: a });
              }
            }
          });
        }
        UpdateUserChatBan(e, t, r, i, n, o) {
          return Object(a.a)(this, void 0, void 0, function* () {
            const a = this.m_ulBroadcastSteamID,
              l = this.m_strUserSteamID;
            if (this.m_ulBroadcastChannelID) {
              const t = h.b.Init(q);
              t.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
                chatter_steamid: e,
                duration: 3600 * r,
                permanent: i,
                undo: o,
              }),
                yield Se.AddChatBan(
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
                o.append("sessionid", Me.c.SESSIONID);
              try {
                yield s.a.post(
                  `${Me.c.CHAT_BASE_URL}broadcast/ajaxupdateusermute`,
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
                      `${Me.c.WEBAPI_BASE_URL}IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=${this.m_webApiToken}`,
                      t
                    );
                } else {
                  const t = h.b.Init(u.b);
                  t.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    user_steamid: e,
                    muted: !0,
                  }),
                    yield u.a.MuteBroadcastChatUser(
                      this.m_webAPIInterface.GetServiceTransport(),
                      t
                    );
                }
              } catch (a) {
                r &&
                  (this.m_rgChatMessages.push({
                    type: _.a.Error,
                    msg: Object(we.g)("#BroadcastChat_UserMuteFailed", t),
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
                type: _.a.Notification,
                msg: Object(we.g)("#BroadcastChat_UserMutedLocal", t),
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
                      `${Me.c.WEBAPI_BASE_URL}IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=${this.m_webApiToken}`,
                      t
                    );
                } else {
                  const t = h.b.Init(u.b);
                  t.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    user_steamid: e,
                    muted: !1,
                  }),
                    yield u.a.MuteBroadcastChatUser(
                      this.m_webAPIInterface.GetServiceTransport(),
                      t
                    );
                }
                this.m_rgChatMessages.push({
                  type: _.a.Notification,
                  msg: Object(we.g)("#BroadcastChat_UserUnmutedLocal", t),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              } catch (e) {
                this.m_rgChatMessages.push({
                  type: _.a.Error,
                  msg: Object(we.g)("#BroadcastChat_UserUnmuteFailed", t),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
            else
              this.m_rgChatMessages.push({
                type: _.a.Notification,
                msg: Object(we.g)("#BroadcastChat_UserUnmutedLocal", t),
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
                      `${Me.c.WEBAPI_BASE_URL}IBroadcastService/RemoveUserChatText/v0001/?access_token=${this.m_webApiToken}`,
                      t
                    );
                } else {
                  const t = h.b.Init(u.d);
                  t.SetBodyFields({
                    chat_id: this.m_ulChatID,
                    user_steamid: e,
                  }),
                    yield u.a.RemoveUserChatText(
                      this.m_webAPIInterface.GetServiceTransport(),
                      t
                    );
                }
              } catch (e) {
                this.m_rgChatMessages.push({
                  type: _.a.Error,
                  msg: Object(we.g)("#BroadcastChat_RemoveMessagesFailed", t),
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
                  `${Me.c.WEBAPI_BASE_URL}IBroadcastService/UpdateChatMessageFlair/v0001/?access_token=${this.m_webApiToken}`,
                  t
                );
            } else {
              const t = h.b.Init(u.e);
              t.SetBodyFields({
                chat_id: this.m_ulChatID,
                flair: `^${this.m_strFlairGroupID}^:${e}:`,
              }),
                yield u.a.UpdateChatMessageFlair(
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
      Object(a.b)([d.C], We.prototype, "m_mapChannelModeratorUsers", void 0),
        Object(a.b)(
          [d.C],
          We.prototype,
          "m_mapBroadcastModeratorUsers",
          void 0
        ),
        Object(a.b)([d.C], We.prototype, "m_nRateLimitSeconds", void 0),
        Object(a.b)([d.C], We.prototype, "m_bRateLimited", void 0),
        Object(a.b)([d.C], We.prototype, "m_rgChatMessages", void 0),
        Object(a.b)([Ce.a], We.prototype, "FetchChatModerators", null),
        Object(a.b)([Ce.a], We.prototype, "RequestLoop", null),
        Object(a.b)([Ce.a], We.prototype, "MuteUserForSession", null);
      const Ie = new je();
      window.g_BroadcastChatStore = Ie;
      var Ee = r("1BdX"),
        xe = (r("wUwH"), r("a5LV")),
        Pe = r("Z9dU"),
        Ne = r.n(Pe),
        Ue = r("y+6m"),
        Ae = r("Mgs7"),
        De = r("Gorr"),
        Ge = r("0QoN"),
        Le = r("BFsE"),
        ke = r("gPCo"),
        Ve = r("5znp"),
        qe = r.n(Ve);
      const He = () =>
          c.a.createElement(
            "div",
            { className: qe.a.FriendsListInsetShadowCtn },
            c.a.createElement("div", {
              className: qe.a.FriendListInsetShadowTop,
            })
          ),
        $e = () =>
          c.a.createElement(
            "div",
            { className: qe.a.FriendsListInsetShadowCtn },
            c.a.createElement("div", {
              className: qe.a.FriendListInsetShadowBottom,
            })
          );
      var Ke = r("6Y59"),
        Ye = r("exH9"),
        Je = r("opsS"),
        Qe = r("3sYe"),
        Xe = r.n(Qe);
      const Ze = new RegExp("ː([^ː]*)ː", "g"),
        et =
          (new RegExp("(https?://[^ '\"<>]*)", "gi"),
          new RegExp(
            "^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)",
            "i"
          ));
      const tt = (e) => {
          const { userType: t, msg: r, presenterInfo: a } = e;
          if ("presenter" === t)
            return l.createElement(
              "span",
              null,
              l.createElement(
                ke.b,
                {
                  name: a.name,
                  title: a.title,
                  photo: a.photo,
                  company: a.company,
                  bioString: a.bio,
                },
                l.createElement(
                  "a",
                  {
                    className: Object(Ye.a)(
                      Xe.a.MessageName,
                      Xe.a.MessagePresenter
                    ),
                    href: Me.c.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
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
                ? (e = Xe.a.MessageBroadcaster)
                : "moderator" === t && (e = Xe.a.MessageModerator),
              l.createElement(
                "span",
                null,
                l.createElement(
                  "a",
                  {
                    className: Object(Ye.a)(Xe.a.MessageName, e),
                    href: Me.c.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
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
        rt = (e) => {
          switch (e.userType) {
            case "presenter":
              return l.createElement(
                "span",
                {
                  className: Xe.a.RoleFlairContainer,
                  "data-tooltip-text": Object(we.g)(
                    "#BroadcastChat_Role_Presenter_ttip"
                  ),
                },
                l.createElement(Ke.i, null)
              );
            case "moderator":
              return l.createElement(
                "span",
                {
                  className: Xe.a.RoleFlairContainer,
                  "data-tooltip-text": Object(we.g)(
                    "#BroadcastChat_Role_Moderatorr_ttip"
                  ),
                },
                l.createElement(Ke.j, null)
              );
            case "broadcaster":
              return l.createElement(
                "span",
                {
                  className: Xe.a.RoleFlairContainer,
                  "data-tooltip-text": Object(we.g)(
                    "#BroadcastChat_Role_Broadcaster_ttip"
                  ),
                },
                l.createElement(Ke.h, null)
              );
            default:
              return null;
          }
        };
      let at = class extends l.Component {
        constructor() {
          super(...arguments),
            (this.m_chat = null),
            (this.messagesContainer = l.createRef());
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
            (this.m_chat = Ie.GetOrCreateChat(
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
          return !!e.match(et);
        }
        AddLinksEmoticons(e, t) {
          let r = Ze;
          t && (r = this.m_chat.GetUserEmoticons());
          let a = e.split(Ze);
          const i = [];
          for (let e = 0; e < a.length; e += 1)
            e % 2 == 1
              ? i.push(
                  l.createElement(De.d, {
                    emoticonHoverStore: xe.b,
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
          if (t.type !== _.a.Chat) return null;
          const r = [],
            a = this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID()),
            i = this.m_chat.BIsUserBroadcastModerator(
              this.m_chat.GetUserSteamID()
            );
          if (
            ((Me.g && Me.g.is_support) || a || i
              ? r.push(
                  l.createElement(
                    Ue.e,
                    {
                      key: "remove",
                      onSelected: () =>
                        this.m_chat.RemoveUserMessagesServer(
                          t.steamid,
                          t.persona_name
                        ),
                    },
                    Object(we.g)("#BroadcastChat_RemoveMessages")
                  ),
                  l.createElement(
                    Ue.e,
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
                    Object(we.g)("#BroadcastChat_half_Mute")
                  ),
                  l.createElement(
                    Ue.e,
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
                    Object(we.g)("#BroadcastChat_day_Mute")
                  ),
                  l.createElement(
                    Ue.e,
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
                    Object(we.g)("#BroadcastChat_week_Mute")
                  ),
                  l.createElement(
                    Ue.e,
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
                    Object(we.g)("#BroadcastChat_perm_Mute")
                  ),
                  l.createElement(
                    Ue.e,
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
                    Object(we.g)("#BroadcastChat_Unmute")
                  )
                )
              : this.m_chat.IsUserMutedLocally(t.steamid)
              ? r.push(
                  l.createElement(
                    Ue.e,
                    {
                      key: "unmuteuser",
                      onSelected: () =>
                        this.m_chat.UnmuteUserForSession(
                          t.steamid,
                          t.persona_name
                        ),
                    },
                    Object(we.g)("#BroadcastChat_UnmuteLocal")
                  )
                )
              : r.push(
                  l.createElement(
                    Ue.e,
                    {
                      key: "muteuser",
                      onSelected: () =>
                        this.m_chat.MuteUserForSession(
                          t.steamid,
                          t.persona_name
                        ),
                    },
                    Object(we.g)("#BroadcastChat_MuteLocal")
                  )
                ),
            ((Me.g && Me.g.is_support) ||
              this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID())) &&
              t.steamid)
          ) {
            this.m_chat.BIsUserBroadcastModerator(t.steamid)
              ? r.push(
                  l.createElement(
                    Ue.e,
                    {
                      key: "removemod",
                      onSelected: () =>
                        this.m_chat.UpdateBroadcastChatModerator(
                          t.steamid,
                          !1,
                          t.persona_name
                        ),
                    },
                    Object(we.g)("#BroadcastChat_Remove_Moderator")
                  )
                )
              : r.push(
                  l.createElement(
                    Ue.e,
                    {
                      key: "addmod",
                      onSelected: () =>
                        this.m_chat.UpdateBroadcastChatModerator(
                          t.steamid,
                          !0,
                          t.persona_name
                        ),
                    },
                    Object(we.g)("#BroadcastChat_Add_Moderator")
                  )
                );
          }
          return r.length
            ? Object(m.a)(
                l.createElement(
                  Ue.c,
                  null,
                  l.createElement(
                    "div",
                    { className: Xe.a.SelectedUserNameCtn },
                    Object(we.g)("#BroadcastChat_User"),
                    l.createElement("br", null),
                    l.createElement(
                      "span",
                      { className: Xe.a.SelectedUserName },
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
          return e.type === _.a.Notification
            ? Xe.a.MessageNotification
            : e.type === _.a.Error
            ? Xe.a.MessageError
            : Xe.a.MessageChat;
        }
        FormatMessage(e, t) {
          if (e.type === _.a.Chat) {
            let r = t ? t.FilterText(e.steamid, e.msg) : e.msg;
            return this.AddLinksEmoticons(r, !1);
          }
          return e.msg;
        }
        RenderUserChatLine(e, t, r) {
          let a = r ? r.get(e.steamid) : void 0;
          const i =
            e.type === _.a.Chat
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
          return l.createElement(
            "div",
            {
              key: e.instance_id + "_" + e.client_ts + "_" + t,
              className: this.GetTypeClassName(e),
              onContextMenu: (t) => this.OnContextMenu(t, e),
            },
            e.type === _.a.Chat && l.createElement(rt, { userType: i }),
            e.flair &&
              l.createElement(
                "span",
                { className: Xe.a.FlairContainer },
                this.AddLinksEmoticons(e.flair, !1)
              ),
            e.type === _.a.Chat &&
              l.createElement(tt, { userType: i, msg: e, presenterInfo: a }),
            e.type === _.a.Chat &&
              this.m_chat.GetBroadcastSteamID() === e.steamid &&
              l.createElement(
                "span",
                {
                  className: `${Xe.a.MessageNotification} ${Xe.a.MessageContents}`,
                },
                ` (${Object(we.g)("#BroadcastChat_Broadcaster")})`
              ),
            e.type === _.a.Chat &&
              this.m_chat.m_mapChannelModeratorUsers.get(e.steamid) &&
              l.createElement(
                "span",
                {
                  className: `${Xe.a.MessageNotification} ${Xe.a.MessageContents}`,
                },
                ` (${Object(we.g)("#BroadcastChat_Moderator")})`
              ),
            l.createElement(
              "span",
              {
                className: `${Xe.a.MessageContents} ${
                  this.AddLinksEmoticons(e.msg, !1).filter(
                    (e) => e && "string" == typeof e
                  ).length
                    ? ""
                    : Xe.a.EmoticonsOnly
                }`,
              },
              e.type === _.a.Chat ? " : " : "",
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
              ? Ee.b.GetPresenterMapForBroadcasterSteamID(
                  this.m_chat.GetBroadcastSteamID()
                )
              : void 0;
          return l.createElement(
            "div",
            {
              className: Object(Ye.a)(Xe.a.ChatPanel, "ChatPanel"),
              style: e ? { display: "none" } : void 0,
            },
            r &&
              !!this.m_chat &&
              l.createElement(it, {
                oChat: this.m_chat,
                emoticonStore: this.props.emoticonStore,
                bPartnerMemberOnlyChat: t,
              }),
            l.createElement(He, null),
            l.createElement(
              "div",
              {
                className: Object(Ye.a)(
                  `${Xe.a.ChatMessages} ${Ne.a.minHeightZero}`,
                  "ChatMessages"
                ),
                onScroll: this.HandleScroll,
                ref: this.messagesContainer,
              },
              i.map((e, t) => this.RenderUserChatLine(e, t, s))
            ),
            l.createElement($e, null),
            !r &&
              !!this.m_chat &&
              l.createElement(it, {
                oChat: this.m_chat,
                emoticonStore: this.props.emoticonStore,
                bPartnerMemberOnlyChat: t,
              })
          );
        }
      };
      function it(e) {
        const { oChat: t, emoticonStore: r, bPartnerMemberOnlyChat: a } = e;
        return !a ||
          ((null === Me.g || void 0 === Me.g ? void 0 : Me.g.logged_in) &&
            (null === Me.g || void 0 === Me.g
              ? void 0
              : Me.g.is_partner_member))
          ? (null === Me.g || void 0 === Me.g ? void 0 : Me.g.logged_in)
            ? l.createElement(st, { oChat: t, emoticonStore: r })
            : null
          : l.createElement(lt, null);
      }
      function st(e) {
        const { oChat: t, emoticonStore: r } = e,
          [a, i] = l.useState(""),
          s = l.useRef(),
          n = l.useCallback(
            (e) => {
              !!e.shiftKey ||
                13 !== e.charCode ||
                (t.m_bRateLimited || (t.SendMessage(a), i("")),
                e.preventDefault());
            },
            [t, a]
          ),
          o = l.useCallback(
            (e, t = !1) => {
              i(a + `ː${e}ː`),
                (null == s ? void 0 : s.current) && s.current.focus();
            },
            [a, s]
          );
        return l.createElement(
          "div",
          { className: Object(Ye.a)(Xe.a.ChatEntryCtn, "ChatEntryCtn") },
          l.createElement(
            "div",
            { className: Object(Ye.a)(Xe.a.ChatEntry, "ChatEntry") },
            l.createElement(
              "form",
              { className: `${Ne.a.chatEntryControls}` },
              l.createElement("textarea", {
                className: Ne.a.chatTextarea,
                placeholder: Object(we.g)("#BroadcastChat_EnterResponse"),
                onKeyPress: n,
                onChange: (e) => i(e.target.value),
                value: a,
                ref: s,
              }),
              Boolean(t.m_bRateLimited) &&
                l.createElement(ot, {
                  nSeconds: t.m_nRateLimitSeconds,
                  bRateLimited: t.m_bRateLimited,
                }),
              l.createElement(
                "button",
                {
                  className: `${Ne.a.chatSubmitButton} ${
                    a ? "" : Ne.a.disabled
                  }`,
                  title: Object(we.g)("#ChatEntryButton_Submit"),
                  disabled: t.m_bRateLimited || 0 == a.trim().length,
                  onClick: () => {
                    t.SendMessage(a), i("");
                  },
                },
                l.createElement(Ke.zb, null)
              )
            ),
            l.createElement(
              "div",
              {
                style: { height: "50px" },
                className: `${Ne.a.chatEntryActionsContainer}`,
              },
              l.createElement(
                "div",
                { className: Ne.a.chatEntryActionsGroup },
                l.createElement(Ge.a, {
                  disabled: !1,
                  OnEmoticonSelected: o,
                  rtLastAckedNewEmoticons: Number.MAX_VALUE,
                  emoticonStore: r,
                  emoticonHoverStore: xe.b,
                }),
                l.createElement(nt, Object.assign({}, e, { textInputRef: s }))
              )
            )
          )
        );
      }
      function nt(e) {
        var t;
        const { oChat: r, emoticonStore: a, textInputRef: i } = e;
        return r.m_strFlairGroupID &&
          a.flair_list &&
          (null === (t = a.GetFlairListByGroupID(r.m_strFlairGroupID)) ||
          void 0 === t
            ? void 0
            : t.length)
          ? l.createElement(Ge.a, {
              disabled: !1,
              OnEmoticonSelected: (e) => {
                r.UpdateChatMessageFlair(e),
                  (null == i ? void 0 : i.current) && i.current.focus();
              },
              rtLastAckedNewEmoticons: Number.MAX_VALUE,
              emoticonStore: a,
              emoticonHoverStore: xe.b,
              strFlairGroupID: r.m_strFlairGroupID,
              title: Object(we.g)("#ChatEntryButton_Flair"),
              buttonIcon: l.createElement(Ke.l, null),
            })
          : null;
      }
      Object(a.b)([d.C], at.prototype, "m_chat", void 0),
        Object(a.b)([Je.b], at.prototype, "StartChat", null),
        Object(a.b)([Je.b], at.prototype, "HandleScroll", null),
        Object(a.b)([Je.b], at.prototype, "OnContextMenu", null),
        Object(a.b)([Je.b], at.prototype, "RenderUserChatLine", null),
        (at = Object(a.b)([n.a], at));
      class ot extends l.Component {
        render() {
          return l.createElement(
            "div",
            { className: Xe.a.TimedProgressBarContainer },
            l.createElement(
              "div",
              { className: Xe.a.wrapper },
              l.createElement("div", {
                className: `${Xe.a.spinner} ${Xe.a.pie}`,
                style: { animationDuration: `${this.props.nSeconds || 0}s` },
              }),
              l.createElement("div", {
                className: `${Xe.a.filler} ${Xe.a.pie}`,
                style: { animationDuration: `${this.props.nSeconds || 0}s` },
              }),
              l.createElement("div", {
                className: Xe.a.mask,
                style: { animationDuration: `${this.props.nSeconds || 0}s` },
              })
            )
          );
        }
      }
      function lt(e) {
        return l.createElement(
          "div",
          { className: Xe.a.Description },
          l.createElement(
            "div",
            { className: Xe.a.LogInPrompt },
            Object(we.g)("#Broadcast_PartnerChat_Login")
          ),
          !Me.g.logged_in &&
            l.createElement(
              Ae.j,
              { onClick: Le.a, className: Object(Ye.a)(Xe.a.SignInButton) },
              Object(we.g)("#Login_SignIn")
            )
        );
      }
      var ct = r("trWU"),
        dt = r("VQ2A"),
        mt = (r("sRB7"), r("b3LC")),
        ut = r("NKJh"),
        _t = r("zjj+"),
        ht = r("RQmk"),
        bt = r("dfs5"),
        pt = r("0OaU"),
        gt = r("dLk7"),
        Bt = r.n(gt);
      const yt = Object(n.a)((e) => {
        const { appid: t } = e,
          r = Object(bt.c)(),
          a = Object(l.useRef)({ include_assets: !0, include_release: !0 }),
          [i, s] = Object(mt.b)(t, a.current);
        let n = Bt.a.StoreSaleWidgetContainer_mini,
          o = Bt.a.StoreSaleWidgetImage_mini,
          d = Bt.a.StoreSaleImage_mini;
        if (!i && 2 != s)
          return c.a.createElement(
            "div",
            { className: n },
            c.a.createElement(pt.a, { size: "medium" }),
            ";"
          );
        if (2 == s || !i.GetName())
          return c.a.createElement("div", {
            className: ut.StoreSaleWidgetEmptyContainer,
          });
        const m = 8 != i.GetAppType(),
          u = Object(dt.b)(i.GetStorePageURL(), r);
        return c.a.createElement(
          "div",
          { className: n },
          c.a.createElement(
            "div",
            { className: ut.Actions },
            c.a.createElement(
              "a",
              { href: u, target: Me.c.IN_CLIENT ? void 0 : "_blank" },
              c.a.createElement(
                ht.b,
                { type: "app", id: t },
                c.a.createElement(
                  "div",
                  { className: o },
                  c.a.createElement("img", {
                    className: d,
                    src: i.GetAssets().GetSmallCapsuleURL(),
                  })
                )
              )
            )
          ),
          c.a.createElement(
            "div",
            { className: ut.StoreSaleBroadcastWidgetRight },
            c.a.createElement(
              "div",
              { className: ut.Actions },
              c.a.createElement(
                "a",
                { href: u, target: Me.c.IN_CLIENT ? void 0 : "_blank" },
                c.a.createElement(
                  ht.b,
                  { type: "app", id: t },
                  c.a.createElement(
                    "div",
                    {
                      className: Object(Ye.a)(
                        ut.StoreSaleWidgetTitle,
                        "StoreSaleWidgetTitle"
                      ),
                    },
                    i.GetName()
                  )
                )
              )
            ),
            c.a.createElement(
              "div",
              { className: ut.StoreSaleWidgetRelease },
              i.GetFormattedSteamReleaseDate()
            ),
            Boolean(m) &&
              c.a.createElement(_t.c, {
                info: { id: t, type: "game" },
                bShowDemoButton: !0,
              })
          )
        );
      });
      r("wogL");
      var St = r("boaH"),
        ft = r("nWbB"),
        wt = (r("Bniq"), r("5L1o")),
        Ct = r("02Wr"),
        Mt = r("MnIK"),
        vt = r("uuth");
      const Ot = (e) => {
        const { onPositionChange: t, onLeave: r } = e,
          a = l.useCallback(
            (e) => (
              void 0 === e.previousPosition &&
                e.currentPosition === vt.a.above &&
                r &&
                r(e),
              t && t(e)
            ),
            [t, r]
          );
        return l.createElement(
          vt.a,
          Object.assign({}, e, { onPositionChange: a })
        );
      };
      r("pKbv"), r("3+zv");
      var Rt = r("uIWk"),
        zt = r("rKv1"),
        Tt = r.n(zt);
      const Ft = Object(n.a)((e) => {
        const { event: t } = e,
          r = t.clanSteamID.GetAccountID(),
          i = !t || !t.jsondata || !t.jsondata.broadcast_item_drops_enabled,
          n = Object(l.useRef)(null),
          [o, d] = Object(l.useState)(
            t ? Rt.a.GetCreatorHome(t.clanSteamID) : null
          );
        if (
          (Object(l.useEffect)(() => {
            const e = s.a.CancelToken.source();
            n.current = e.cancel;
            return (
              Object(a.a)(void 0, void 0, void 0, function* () {
                const t = g.a.InitFromClanID(r),
                  a = yield Rt.a.LoadCreatorHome(t, e);
                e.token.reason || d(a);
              }),
              () => {
                n.current && n.current("BroadcastDropsDisplay: unmounting");
              }
            );
          }, [r]),
          i || !o || !o.BIsLoaded())
        )
          return null;
        const m =
          Me.c.COMMUNITY_BASE_URL +
          "gid/" +
          t.jsondata.broadcast_item_drops_details_clan_accountid +
          "/partnerevents/view/" +
          t.jsondata.broadcast_item_drops_details_event_gid;
        return c.a.createElement(
          "div",
          { className: Tt.a.item_drop_ctn },
          c.a.createElement(
            "div",
            null,
            Object(we.g)(
              o.GetName().length > 0
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
              o.GetName()
            ),
            Boolean(t.jsondata.broadcast_item_drops_details_clan_accountid) &&
              c.a.createElement(
                "a",
                { href: m, target: Me.c.IN_CLIENT ? "" : "_blank" },
                Object(we.g)("#SalePage_WatchForDrop_LearnMore")
              )
          )
        );
      });
      var jt = r("C4Nl"),
        Wt = r("iO5U");
      r("X2UP"), r("r64O");
      function It(e) {
        Wt.a.BIsInitialized() ||
          Wt.a.Initialize(new p.a(Me.c.WEBAPI_BASE_URL, e));
      }
      var Et,
        xt = r("S6U1");
      r("3u1e");
      const Pt = {
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
      let Nt = (Et = class extends c.a.Component {
        constructor() {
          super(...arguments),
            (this.m_cancelSignal = s.a.CancelToken.source()),
            (this.m_bMarkedUsabilitySeen = !1),
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
          return Me.c.EREALM != ze.z.k_ESteamRealmChina && !Me.c.IN_GAMEPADUI;
        }
        componentDidMount() {
          return Object(a.a)(this, void 0, void 0, function* () {
            Et.IsBroadcastAllowed() &&
              (It(null),
              yield ft.a
                .Get()
                .LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
              this.m_cancelSignal.token.reason ||
                this.setState({
                  bLoadingPreference: !1,
                  bExpanded: !ft.a
                    .Get()
                    .BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                  innerStyle: Object.assign(
                    Object.assign({}, this.state.innerStyle),
                    {
                      maxHeight: ft.a
                        .Get()
                        .BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                        ? "0vh"
                        : "100vh",
                    }
                  ),
                }),
              yield this.props.bIsPreview &&
              this.props.accountIDs &&
              !this.props.event.BUsesContentHubForItemSource()
                ? ft.a.Get().HintLoadEmbeddablePreviewStreams(this.props)
                : ft.a.Get().HintLoadEmbeddableStreams(this.props),
              this.props.nAppIDVOD &&
                (ft.a
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
          let e = ft.a.Get().GetPlayReadyStream(this.props);
          const t = this.state.bExpanded,
            r = St.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID;
          Object(ft.e)(r, t ? 2 : 3, e.snr),
            t && Object(xt.a)() && Object(xt.a)().AddEvent(1005),
            window.setTimeout(
              () =>
                this.setState({
                  innerStyle: Object.assign(
                    Object.assign({}, this.state.innerStyle),
                    { maxHeight: t ? "0vh" : "100vh" }
                  ),
                }),
              10
            ),
            t ||
              this.setState({ bExpanded: !this.state.bExpanded }, () =>
                ft.a.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded)
              );
        }
        OnShrinkTransitionEnd() {
          "0vh" === this.state.innerStyle.maxHeight &&
            this.setState({ bExpanded: !1 }, () =>
              ft.a.Get().SetEmbeddedStreamCollapsed(!0)
            );
        }
        onStreamSelect(e) {
          return Object(a.a)(this, void 0, void 0, function* () {
            this.setState({ bStartMuted: !1 }),
              ft.a.Get().GetPlayReadyStream(this.props).accountid !=
                e.accountid &&
                (yield ft.a.Get().AttemptToPlayStream(this.props, e));
          });
        }
        PlayTopNonVOD() {
          return Object(a.a)(this, void 0, void 0, function* () {
            this.setState({ bStartMuted: !1 });
            const e = ft.a
              .Get()
              .GetStreams(this.props)
              .filter(
                (e) =>
                  !this.props.fnFilterStreams || this.props.fnFilterStreams(e)
              );
            Object(ft.f)(e);
            for (const t of e)
              if (!t.nAppIDVOD)
                return void (yield ft.a
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
          const a = ft.a.Get().GetConcurrentStreams(this.props) > 1;
          let i = St.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID,
            s = c.a.createElement(
              "div",
              { className: Tt.a.rightPanel },
              c.a.createElement(Dt, { key: "right" + i, ImgUrl: e.right_panel })
            ),
            n = c.a.createElement(Dt, {
              key: "left" + i,
              ImgUrl: e.left_panel,
            });
          if (i < 11) {
            const t = Ee.b.GetAppIDListForBroadcasterSteamID(e.steamid);
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
              ((s = c.a.createElement(yt, {
                key: "mini" + e.accountid,
                appid: i,
              })),
              (r.bRightPanelArtworkOrEmpty = !1)),
            a && !t
              ? ((r.leftPanel = c.a.createElement(kt, {
                  broadcastEmbedContext: this.props,
                  key: "selector" + i,
                  curStream: e,
                  onStreamSelect: this.onStreamSelect,
                  fnFilterStreams: this.props.fnFilterStreams,
                  bShowCapsuleArt: this.props.bShowCapsuleArt,
                })),
                (r.rightPanel = s))
              : t
              ? ((r.leftPanel = c.a.createElement("div", null)),
                (r.rightPanel = c.a.createElement(Ht, {
                  stream: e,
                  orientation: "rightside",
                })),
                (r.bRightPanelArtworkOrEmpty = !1))
              : ((r.leftPanel = n), (r.rightPanel = s)),
            r
          );
        }
        MarkBroadcastSeen() {
          this.m_bMarkedUsabilitySeen ||
            ((this.m_bMarkedUsabilitySeen = !0),
            Object(xt.a)() && Object(xt.a)().AddEvent(1004));
        }
        render() {
          if (!Et.IsBroadcastAllowed() || this.state.bLoadingPreference)
            return null;
          let e = ft.a.Get().GetPlayReadyStream(this.props);
          if (e) {
            this.MarkBroadcastSeen();
            let t = "show" === ft.a.Get().GetChatVisibility();
            const {
              event: r,
              language: a,
              fnRenderBroadcastContext: i,
            } = this.props;
            r &&
              (e = Object.assign(Object.assign({}, e), {
                left_panel: r.GetImageURL(
                  "broadcast_left",
                  a || Object(ze.H)(Me.c.LANGUAGE)
                ),
                right_panel: r.GetImageURL(
                  "broadcast_right",
                  a || Object(ze.H)(Me.c.LANGUAGE)
                ),
                store_title: r.GetBroadcastTitle(
                  a || Object(ze.H)(Me.c.LANGUAGE)
                ),
                broadcast_chat_visibility: r.GetBroadcastChatVisibility(),
              }));
            let s = this.ConstructSidePanels(e, t),
              n = e.store_title ? e.store_title : e.title,
              o = ft.a.Get().GetConcurrentStreams(this.props) > 1;
            const l = () => {
              var t, r;
              e.nAppIDVOD && this.PlayTopNonVOD(),
                null === (r = (t = this.props).fnOnVideoEnd) ||
                  void 0 === r ||
                  r.call(t);
            };
            r && r.jsondata && r.jsondata.broadcast_gradient_inner_color,
              r && r.jsondata && r.jsondata.broadcast_gradient_outer_color;
            return c.a.createElement(
              c.a.Fragment,
              null,
              c.a.createElement(
                "div",
                {
                  className: "broadcast_embed_top_ctn_trgt",
                  style: this.state.style,
                },
                c.a.createElement(
                  "div",
                  {
                    className: Object(Ye.a)({
                      [Tt.a.bordered_container]: !0,
                      [Tt.a.Event]: Boolean(r),
                      broadcast_brd_ctn_trgt: !0,
                    }),
                  },
                  c.a.createElement(
                    "div",
                    {
                      className: Object(Ye.a)(
                        Tt.a.bordered_title,
                        "bordered_title_trgt"
                      ),
                    },
                    c.a.createElement(wt.h, null),
                    n,
                    c.a.createElement(
                      "div",
                      { className: Tt.a.bordered_corner_container },
                      !this.state.bExpanded &&
                        c.a.createElement("div", {
                          className: Tt.a.broadcast_settings_icon,
                          "data-tooltip-text": Object(we.g)(
                            "#StoreBroadcast_Change_store_Broadcast_settings"
                          ),
                          onClick: () =>
                            window.open(
                              `${Me.c.STORE_BASE_URL}account/preferences/#store_broadcast_settings`
                            ),
                        }),
                      c.a.createElement("div", {
                        className: this.state.bExpanded
                          ? Tt.a.bordered_corner_expanded
                          : Tt.a.bordered_corner_shrinked,
                        "data-tooltip-text": Object(we.g)(
                          "#StoreBroadcast_Hide_Tooltip"
                        ),
                        onClick: this.ToggleBroadcastExpandShrink,
                      })
                    ),
                    Boolean(e.gamedata_subtitle) &&
                      c.a.createElement(
                        "div",
                        { className: Tt.a.bordered_subtitle },
                        e.gamedata_subtitle
                      )
                  ),
                  this.state.bExpanded &&
                    c.a.createElement(
                      "div",
                      {
                        className: Object(Ye.a)({
                          [Tt.a.container]: !0,
                          embeddable_ctn_trgt: !0,
                          multistream: o,
                          broadcast_right_panel_simple:
                            s.bRightPanelArtworkOrEmpty,
                          broadcast_chat_expanded: t,
                        }),
                        style: Object.assign({}, this.state.innerStyle),
                        onTransitionEnd: this.OnShrinkTransitionEnd,
                      },
                      s.leftPanel,
                      c.a.createElement(Ut, {
                        stream: e,
                        bStartMuted: this.state.bStartMuted,
                        fnRenderBroadcastContext: i,
                        fnOnVideoEnd: l,
                        bWidePlayer: this.props.bWidePlayer,
                      }),
                      s.rightPanel,
                      this.state.bExpanded &&
                        c.a.createElement(At, { stream: e, bMultistream: o })
                    )
                ),
                Boolean(
                  r && r.jsondata && r.jsondata.broadcast_item_drops_enabled
                ) && c.a.createElement(Ft, { event: r }),
                this.state.bExpanded &&
                  c.a.createElement(
                    "div",
                    { className: `${r ? Tt.a.Event : ""}` },
                    c.a.createElement(At, { stream: e, bMultistream: o })
                  ),
                c.a.createElement("div", { className: Tt.a.clear_div })
              )
            );
          }
          return c.a.createElement("div", {
            className: "NoBroadcastAvailable",
          });
        }
      });
      Object(a.b)([Je.b], Nt.prototype, "ToggleBroadcastExpandShrink", null),
        Object(a.b)([Je.b], Nt.prototype, "OnShrinkTransitionEnd", null),
        Object(a.b)([Je.b], Nt.prototype, "onStreamSelect", null),
        Object(a.b)([Je.b], Nt.prototype, "PlayTopNonVOD", null),
        (Nt = Et = Object(a.b)([n.a], Nt));
      t.default = Nt;
      class Ut extends c.a.Component {
        constructor(e) {
          super(e),
            (this.m_iVideoContainerRef = c.a.createRef()),
            (this.state = {
              bPopout: !1,
              bPreventPopup: window.screen.width <= 768,
            });
        }
        CloseBroadcastPopup() {
          const e = St.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
            .m_nAppID;
          Object(ft.e)(e, 7, this.props.stream.snr),
            Object(xt.a)() && Object(xt.a)().AddEvent(1006),
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
          return c.a.createElement(
            "div",
            { className: Tt.a.wrapper },
            c.a.createElement(
              Ot,
              { onEnter: this.OnEnter, onLeave: this.OnLeave },
              c.a.createElement(
                "div",
                {
                  className: Object(Ye.a)({
                    [Tt.a.video_placeholder]: !0,
                    video_placeholder_trgt: !0,
                    [Tt.a.WidePlayer]: this.props.bWidePlayer,
                  }),
                  ref: this.m_iVideoContainerRef,
                },
                c.a.createElement(
                  "div",
                  {
                    className: this.state.bPopout
                      ? Tt.a.broadcast_floating
                      : Tt.a.video_container,
                  },
                  this.state.bPopout &&
                    c.a.createElement(Gt, {
                      steamIDBroadcast: this.props.stream.steamid,
                      OnPreventPopup: this.CloseBroadcastPopup,
                    }),
                  c.a.createElement(
                    "div",
                    { className: Tt.a.BroadcastPlayerContainer },
                    c.a.createElement(ct.a, {
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
      Object(a.b)([Je.b], Ut.prototype, "CloseBroadcastPopup", null),
        Object(a.b)([Je.b], Ut.prototype, "OnEnter", null),
        Object(a.b)([Je.b], Ut.prototype, "OnLeave", null);
      let At = class extends c.a.Component {
        ConstructBroadcastLink() {
          let e = this.props.stream;
          const t = St.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
            .m_nAppID;
          let r = Pt.list.find(
            (r) =>
              r.appid == t &&
              (!r.broadcasterAccountID || r.broadcasterAccountID == e.accountid)
          );
          if (r) {
            let e = r.url;
            return (
              (Me.c.IN_CLIENT ||
                navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
                (e = "steam://openurl/" + e),
              c.a.createElement(
                "a",
                { href: e },
                Object(we.g)("#Broadcast_Embed_Watch_With_Frieds_SteamTV")
              )
            );
          }
          {
            let e = this.props.stream.steamid,
              t = Me.c.COMMUNITY_BASE_URL + "broadcast/watch/" + e;
            return c.a.createElement(
              "a",
              {
                href: t,
                className: Tt.a.external_link,
                "data-tooltip-text": Object(we.g)(
                  "#BroadcastWatch_View_Broadcast_Page"
                ),
              },
              c.a.createElement(Ke.D, null)
            );
          }
        }
        OnToggleChat(e) {
          e.preventDefault();
          const t = St.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
            .m_nAppID;
          Object(ft.e)(
            t,
            "show" === ft.a.Get().GetChatVisibility() ? 5 : 4,
            this.props.stream.snr
          ),
            ft.a.Get().ToggleChatVisibility();
        }
        onWatchBroadcastPage() {
          const e = St.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
            .m_nAppID;
          Object(ft.e)(e, 9, this.props.stream.snr);
        }
        render() {
          const e = this.ConstructBroadcastLink(),
            t = "remove" != ft.a.Get().GetChatVisibility(),
            r = "hide" === ft.a.Get().GetChatVisibility();
          let a = Number.parseInt(
            "" +
              St.a.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                .m_nViewerCount
          );
          return c.a.createElement(
            "div",
            { className: Object(Ye.a)(Tt.a.viewer_bar, "viewer_bar") },
            c.a.createElement(
              "div",
              { className: Object(Ye.a)(Tt.a.viewer_count, "viewer_count") },
              c.a.createElement(Ke.Ib, null),
              a.toLocaleString(we.f.GetPreferredLocales())
            ),
            c.a.createElement(
              "div",
              { className: Object(Ye.a)(Tt.a.viewer_links, "viewer_links") },
              Boolean(t && !r && this.props.bMultistream) &&
                c.a.createElement(
                  "div",
                  { className: Tt.a.chat_link },
                  c.a.createElement(
                    "a",
                    {
                      href: "#",
                      className: Tt.a.ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    Object(we.g)("#sale_three_section_show_streams")
                  )
                ),
              t &&
                c.a.createElement(
                  "div",
                  { className: Tt.a.chat_link },
                  c.a.createElement(Ke.m, null),
                  c.a.createElement(
                    "a",
                    {
                      href: "#",
                      className: Tt.a.ChatToggle,
                      onClick: this.OnToggleChat,
                    },
                    Object(we.g)(
                      r
                        ? "#sale_three_section_show_chat"
                        : "#sale_three_section_hide_chat"
                    )
                  )
                ),
              t && c.a.createElement("span", { className: Tt.a.ChatToggle }),
              c.a.createElement(
                "a",
                {
                  href:
                    Me.c.STORE_BASE_URL +
                    "account/preferences/#store_broadcast_settings",
                  target: Me.c.IN_CLIENT ? void 0 : "_blank",
                  className: Tt.a.settings_link,
                  "data-tooltip-text": Object(we.g)(
                    "#StoreBroadcast_Change_store_Broadcast_settings"
                  ),
                },
                c.a.createElement(Ke.mb, null)
              ),
              e
            )
          );
        }
      };
      Object(a.b)([Je.b], At.prototype, "OnToggleChat", null),
        Object(a.b)([Je.b], At.prototype, "onWatchBroadcastPage", null),
        (At = Object(a.b)([n.a], At));
      class Dt extends c.a.Component {
        render() {
          let e = this.props.ImgUrl;
          return c.a.createElement(
            c.a.Fragment,
            null,
            e &&
              c.a.createElement("img", {
                className: Tt.a.side_panels,
                src: this.props.ImgUrl,
              }),
            !e && c.a.createElement("div", { className: Tt.a.side_panels })
          );
        }
      }
      const Gt = Object(n.a)((e) => {
        const { steamIDBroadcast: t } = e,
          r = St.a.GetOrCreateBroadcastInfo(t).m_nAppID,
          [a] = Object(mt.b)(r, {});
        return c.a.createElement(
          "div",
          { className: [Tt.a.PopOutVideoTitleBar, Tt.a.NoSeslect].join(" ") },
          Boolean(a)
            ? c.a.createElement(
                ht.a,
                { type: "app", id: r, className: Tt.a.PopOutVideoTitleText },
                Object(we.g)("#StoreBroadcast_Detault_popout_Title")
              )
            : c.a.createElement(
                "div",
                { className: Tt.a.PopOutVideoTitleText },
                Object(we.g)("#StoreBroadcast_Detault_popout_Title")
              ),
          c.a.createElement(
            "button",
            {
              className: Tt.a.PopOutVideoCloseButton,
              "data-tooltip-text": Object(we.g)(
                "#StoreBroadcast_close_broadcast_popup"
              ),
              onClick: e.OnPreventPopup,
            },
            c.a.createElement(Ke.Nb, null)
          )
        );
      });
      function Lt(e, t) {
        var r;
        const a = St.a.GetOrCreateBroadcastInfo(t.steamid).m_nAppID,
          i = jt.a.Get().GetApp(a);
        return e &&
          (null === (r = null == i ? void 0 : i.GetAssets()) || void 0 === r
            ? void 0
            : r.GetHeaderURL())
          ? parseInt(Tt.a.strStreamIconCapsuleArtHeight)
          : parseInt(Tt.a.strStreamIconScreenshotArtHeight);
      }
      function kt(e) {
        const {
            curStream: t,
            onStreamSelect: r,
            fnFilterStreams: a,
            bShowCapsuleArt: i,
            broadcastEmbedContext: s,
          } = e,
          n = Object(l.useRef)(),
          o = Object(l.useMemo)(() => {
            const e = ft.a
              .Get()
              .GetStreams(s)
              .filter((e) => !a || a(e));
            return Object(ft.f)(e), e;
          }, [s, a]);
        return (
          Object(l.useEffect)(() => {
            if (n && n.current) {
              const e = o
                .map((e) => St.a.GetOrCreateBroadcastInfo(e.steamid).m_nAppID)
                .filter(Boolean);
              jt.a
                .Get()
                .QueueMultipleAppRequests(e, { include_assets: !0 })
                .then(() => {
                  if (n.current) {
                    let e = 0;
                    for (const r of o) {
                      if (t.accountid == r.accountid) break;
                      e += Lt(i, r);
                    }
                    n.current.scrollTop = e;
                  }
                });
            }
          }, [o, i, t.accountid, n]),
          c.a.createElement(
            "div",
            {
              ref: n,
              className: Object(Ye.a)({
                [Tt.a.side_panels]: !0,
                side_panels: !0,
                [Tt.a.multistream]: !0,
                [Tt.a.scrollingstreams]: o.length > 3,
              }),
            },
            o.map((e) => {
              var a;
              return c.a.createElement(Vt, {
                key: null !== (a = e.accountid) && void 0 !== a ? a : e.steamid,
                stream: e,
                bSelected: t.accountid == e.accountid,
                onStreamSelect: r,
                bShowCapsuleArt: i,
              });
            })
          )
        );
      }
      function Vt(e) {
        var t;
        const {
            onStreamSelect: r,
            bSelected: a,
            stream: i,
            bShowCapsuleArt: s,
          } = e,
          n = Object(o.d)(
            () => St.a.GetOrCreateBroadcastInfo(i.steamid).m_nAppID
          ),
          [l] = Object(mt.b)(
            null !== (t = i.nAppIDVOD) && void 0 !== t ? t : n,
            { include_assets: !0 }
          );
        if (!Object(ft.d)(i)) return null;
        const d = s && (null == l ? void 0 : l.GetAssets().GetHeaderURL()),
          m = Number.parseInt("" + i.viewer_count),
          u = !Number.isNaN(m),
          _ = !!i.nAppIDVOD && (null == l ? void 0 : l.GetName());
        return c.a.createElement(
          "div",
          {
            className: Object(Ye.a)({
              [Tt.a.stream_icon_and_viewer_container]: !0,
              [Tt.a.stream_featured]:
                i.current_selection_priority == ft.b.k_eFeatured,
              [Tt.a.display_capsule_art]: Boolean(d),
            }),
          },
          c.a.createElement(
            ht.b,
            { type: "app", id: n },
            c.a.createElement(
              Mt.a,
              {
                className: Tt.a.stream_icon_container,
                onClick: () => r && r(i),
                rootMargin: "100px 0px 100px 0px",
              },
              c.a.createElement(qt, {
                strThumbnail: i.thumbnail_http_address,
                bSelected: a,
                strCapsuleArtURL: d,
              }),
              a &&
                c.a.createElement("div", { className: Tt.a.stream_icon_arrow })
            )
          ),
          c.a.createElement(
            "div",
            {
              className: Object(Ye.a)(Tt.a.viewer_count, !u && Tt.a.vod_title),
            },
            u
              ? c.a.createElement(
                  c.a.Fragment,
                  null,
                  c.a.createElement(Ke.Ib, null),
                  " ",
                  m.toLocaleString(we.f.GetPreferredLocales())
                )
              : _
          )
        );
      }
      function qt(e) {
        const { strCapsuleArtURL: t, strThumbnail: r, bSelected: a } = e,
          i = a ? Tt.a.stream_icon_selected : Tt.a.stream_icon;
        if (t) {
          const e = [t];
          return c.a.createElement(
            c.a.Fragment,
            null,
            c.a.createElement("img", {
              className: Object(Ye.a)(i, Tt.a.stream_icon_hide_on_hover),
              src: t,
            }),
            c.a.createElement(Ct.b, {
              className: Object(Ye.a)(i, Tt.a.stream_icon_show_on_hover),
              srcs: e,
            })
          );
        }
        return c.a.createElement("img", { className: i, src: r });
      }
      function Ht(e) {
        const { stream: t, orientation: r } = e,
          a = "below" == r,
          i = Object(o.d)(() => St.a.GetBroadcast(t.steamid));
        return i
          ? c.a.createElement(
              "div",
              {
                className: Object(Ye.a)({
                  [Tt.a.chat_below_container]: a,
                  [Tt.a.chat_rightside_container]: !a,
                  [Tt.a.store_chat_ctn]: !0,
                }),
              },
              c.a.createElement(
                "div",
                { className: Tt.a.ChatContainer },
                c.a.createElement(at, {
                  emoticonStore: ft.g,
                  watchLocation: 6,
                  steamID: t.steamid,
                  broadcastID: i.m_ulBroadcastID,
                })
              )
            )
          : null;
      }
    },
    "bQ+M": function (e, t, r) {
      "use strict";
      r.r(t);
      var a = r("mrSG"),
        i = r("q1tI"),
        s = r("6Y59"),
        n = (r("65aj"), r("TyAF")),
        o = r("2vnA"),
        l = r("ionH"),
        c = r("TLQK"),
        d = r("kLLr"),
        m = r("opsS"),
        u = (r("kdZy"), r("Fq2z")),
        _ = r("QIS/"),
        h = r.n(_),
        b = (r("x76A"), r("trWU")),
        p = r("exH9");
      let g = class extends i.Component {
        constructor(e) {
          super(e),
            (this.m_playerRef = i.createRef()),
            (this.m_hRegisterForGameActionStart = null),
            (this.m_hRegisterForGameActionStart = SteamClient.Apps.RegisterForGameActionStart(
              this.onGameActionStart
            )),
            SteamClient.Apps.GetGameActionForApp(
              this.props.overview.GetGameID(),
              this.onGameActionStart
            ),
            (this.state = { broadcast: null, bPlaying: !1 });
        }
        componentDidMount() {
          this.RefreshAndSelectBroadcast();
        }
        RefreshAndSelectBroadcast() {
          this.m_dispose ||
            (this.m_dispose = Object(o.l)(() => {
              let e =
                  l.a.GetBroadcastList(this.props.overview.appid).broadcasts ||
                  [],
                t = this.state.broadcast;
              t && (t = e.find((e) => e.unAccountId == t.unAccountId)),
                !t && e.length > 0 && (t = e[0]),
                this.state.broadcast != t && this.setState({ broadcast: t });
            }));
        }
        componentDidUpdate(e) {
          e.overview.appid != this.props.overview.appid &&
            (this.setState({ broadcast: null, bPlaying: !1 }),
            this.m_dispose && (this.m_dispose(), (this.m_dispose = null)),
            this.RefreshAndSelectBroadcast());
        }
        componentWillUnmount() {
          this.m_hRegisterForGameActionStart &&
            this.m_hRegisterForGameActionStart.unregister(),
            this.m_dispose && (this.m_dispose(), (this.m_dispose = null));
        }
        onGameActionStart(e, t, r) {
          t == this.props.overview.GetGameID() &&
            0 != e &&
            "LaunchApp" == r &&
            this.m_playerRef.current &&
            this.m_playerRef.current.StopPlaybackTillUserInput();
        }
        GetBroadcastURL(e) {
          return (
            `steam://openurl_external/${u.c.GetCommunityURL()}broadcast/watch/` +
            e
          );
        }
        OnClickPlay() {
          this.setState({ bPlaying: !0 });
        }
        render() {
          let e = this.state.broadcast;
          if (!e) return null;
          let t = d.a.InitFromAccountID(e.unAccountId),
            r = this.state.bPlaying,
            a = "GameDetailsPlayer";
          return (
            this.props.isTheaterMode && (a += " TheaterMode"),
            i.createElement(
              "div",
              { className: h.a.BroadcastBox },
              !r &&
                i.createElement(B, {
                  img: e.strThumbnailURL,
                  onClick: this.OnClickPlay,
                }),
              r &&
                i.createElement(
                  "div",
                  { className: h.a.BroadcastPlayer },
                  i.createElement(b.a, {
                    ref: this.m_playerRef,
                    steamIDBroadcast: t.ConvertTo64BitString(),
                    watchLocation: 6,
                    onTheaterMode: this.props.onTheaterMode,
                    bStartMuted: !1,
                    bStartPaused: !1,
                    classes: a,
                  })
                ),
              !this.props.isTheaterMode &&
                i.createElement(
                  "a",
                  {
                    href: this.GetBroadcastURL(t.ConvertTo64BitString()),
                    className: h.a.ViewBroadcastOnWeb,
                  },
                  Object(c.g)("#AppDetails_Broadcast_ViewOnWeb")
                )
            )
          );
        }
      };
      function B(e) {
        let t = Object(p.a)(
          "BroadcastVideoUserInputNeeded",
          h.a.PlayButtonWrapper
        );
        return i.createElement(
          "div",
          { className: h.a.BroadcastThumbnail, onClick: e.onClick },
          i.createElement("img", { src: e.img }),
          i.createElement(
            "div",
            { className: t },
            i.createElement(s.ab, null),
            i.createElement(
              "span",
              null,
              Object(c.g)("#DASHPlayerControls_ClickToPlay")
            )
          )
        );
      }
      Object(a.b)([m.b], g.prototype, "onGameActionStart", null),
        Object(a.b)([m.b], g.prototype, "GetBroadcastURL", null),
        Object(a.b)([m.b], g.prototype, "OnClickPlay", null),
        (g = Object(a.b)([n.a], g)),
        (t.default = g);
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
//# sourceMappingURL=broadcast.js.map
