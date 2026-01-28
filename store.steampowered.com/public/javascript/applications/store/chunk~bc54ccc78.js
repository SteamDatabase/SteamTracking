/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6178],
  {
    6469: (e, t, r) => {
      r.d(t, { K: () => c });
      var i = r(41735),
        a = r.n(i),
        s = r(14947),
        n = r(68797),
        o = r(78327),
        m = r(43882);
      class c {
        static s_VODStore;
        m_mapAppToVOD = new Map();
        GetVODForAppID(e) {
          return this.m_mapAppToVOD.get(e);
        }
        async LoadVODForAppID(e, t) {
          if (this.m_mapAppToVOD.has(e)) return this.m_mapAppToVOD.get(e);
          const r = o.TS.STORE_BASE_URL + "video/details/" + e + "/0",
            i = {};
          try {
            let n = await a().get(r, {
              params: i,
              withCredentials: !0,
              cancelToken: t ? t.token : void 0,
            });
            if (t && t.token.reason) return null;
            if (
              n &&
              200 == n.status &&
              n.data &&
              (1 == n.data.success || "ready" == n.data.success)
            ) {
              let t = (0, s.sH)({
                appid: e,
                video_url: n.data.video_url,
                bookmark: n.data.bookmark,
              });
              return (
                n.data.bookmark
                  ? m.t.Get().SetBookmarkForApp(e, n.data.bookmark)
                  : m.t.Get().InitializeBookmarkForApp(e),
                this.m_mapAppToVOD.set(e, t),
                t
              );
            }
          } catch (e) {
            let t = (0, n.H)(e);
            console.error(
              "CVideoOnDemandStore:LoadVODForAppID: Failed " + t.strErrorMsg,
              t,
            );
          }
          return null;
        }
        static Get() {
          return (
            c.s_VODStore || ((c.s_VODStore = new c()), c.s_VODStore.Init()),
            c.s_VODStore
          );
        }
        Init() {}
      }
    },
    43882: (e, t, r) => {
      r.d(t, { M: () => h, t: () => z });
      var i,
        a,
        s,
        n = r(41735),
        o = r.n(n),
        m = r(56545),
        c = r(72034),
        l = r(80613),
        d = r.n(l),
        _ = r(89068);
      class u extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.video_id || _.Sg(u.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  video_id: {
                    n: 1,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                  client_cellid: {
                    n: 2,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = _.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_ClientGetVideoURL_Request";
        }
      }
      class B extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.video_id || _.Sg(B.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  video_id: {
                    n: 1,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                  video_url: {
                    n: 2,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = _.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_ClientGetVideoURL_Response";
        }
      }
      class p extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.encryption_key || _.Sg(p.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  encryption_key: {
                    n: 1,
                    br: _.qM.readBytes,
                    bw: _.gp.writeBytes,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = _.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_UnlockedH264_Notification";
        }
      }
      class g extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.app_id || _.Sg(g.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  app_id: { n: 1, br: _.qM.readUint32, bw: _.gp.writeUint32 },
                  client_cellid: {
                    n: 2,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = _.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFovasVideo_ClientGetOPFSettings_Request";
        }
      }
      class b extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.app_id || _.Sg(b.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  app_id: { n: 1, br: _.qM.readUint32, bw: _.gp.writeUint32 },
                  opf_settings: {
                    n: 2,
                    br: _.qM.readString,
                    bw: _.gp.writeString,
                  },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = _.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFovasVideo_ClientGetOPFSettings_Response";
        }
      }
      class y extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.app_id || _.Sg(y.M()),
            l.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  app_id: { n: 1, br: _.qM.readUint32, bw: _.gp.writeUint32 },
                  playback_position_in_seconds: {
                    n: 2,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  video_track_id: {
                    n: 3,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                  audio_track_id: {
                    n: 4,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                  timedtext_track_id: {
                    n: 5,
                    br: _.qM.readUint64String,
                    bw: _.gp.writeUint64String,
                  },
                  last_modified: {
                    n: 6,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                  hide_from_watch_history: {
                    n: 7,
                    d: !1,
                    br: _.qM.readBool,
                    bw: _.gp.writeBool,
                  },
                  hide_from_library: {
                    n: 8,
                    d: !1,
                    br: _.qM.readBool,
                    bw: _.gp.writeBool,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = _.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "VideoBookmark";
        }
      }
      class M extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.bookmarks || _.Sg(M.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: { bookmarks: { n: 1, c: y, r: !0, q: !0 } },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = _.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_SetVideoBookmark_Notification";
        }
      }
      class k extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.appids || _.Sg(k.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  appids: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: _.qM.readUint32,
                    pbr: _.qM.readPackedUint32,
                    bw: _.gp.writeRepeatedUint32,
                  },
                  updated_since: {
                    n: 2,
                    br: _.qM.readUint32,
                    bw: _.gp.writeUint32,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = _.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GetVideoBookmarks_Request";
        }
      }
      class f extends l.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.bookmarks || _.Sg(f.M()),
            l.Message.initialize(this, e, 0, -1, [1], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { bookmarks: { n: 1, c: y, r: !0, q: !0 } },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = _.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return _.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return _.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (d().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return _.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (d().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          _.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (d().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVideo_GetVideoBookmarks_Response";
        }
      }
      !(function (e) {
        (e.ClientGetVideoURL = function (e, t) {
          return e.SendMsg("Video.ClientGetVideoURL#1", (0, m.I8)(u, t), B, {
            ePrivilege: 1,
          });
        }),
          (e.SetVideoBookmark = function (e, t) {
            return e.SendNotification(
              "Video.SetVideoBookmark#1",
              (0, m.I8)(M, t),
              { ePrivilege: 1 },
            );
          }),
          (e.GetVideoBookmarks = function (e, t) {
            return e.SendMsg("Video.GetVideoBookmarks#1", (0, m.I8)(k, t), f, {
              ePrivilege: 1,
            });
          });
      })(i || (i = {})),
        (function (e) {
          e.NotifyUnlockedH264Handler = {
            name: "VideoClient.NotifyUnlockedH264#1",
            request: p,
          };
        })(a || (a = {})),
        (function (e) {
          e.ClientGetOPFSettings = function (e, t) {
            return e.SendMsg(
              "FovasVideo.ClientGetOPFSettings#1",
              (0, m.I8)(g, t),
              b,
              { ePrivilege: 1 },
            );
          };
        })(s || (s = {}));
      var w = r(68797),
        S = r(78327);
      class z {
        static s_VODStore;
        m_LoadingOAuth = null;
        m_transport;
        m_mapBookmarks = new Map();
        SetBookmarkForApp(e, t) {
          this.ValidateBookmarkData(t)
            ? this.m_mapBookmarks.set(e, y.fromObject(t))
            : this.InitializeBookmarkForApp(e);
        }
        ValidateBookmarkData(e) {
          const t = e;
          return (
            "object" == typeof t &&
            Number.isInteger(t.playback_position_in_seconds) &&
            Number.isInteger(t.app_id)
          );
        }
        InitializeBookmarkForApp(e) {
          if (!this.m_mapBookmarks.has(e)) {
            let t = {
              app_id: e,
              playback_position_in_seconds: 0,
              video_track_id: "0",
              audio_track_id: "0",
              timedtext_track_id: "0",
              hide_from_watch_history: !1,
              hide_from_library: !1,
            };
            this.m_mapBookmarks.set(e, new y(t));
          }
        }
        GetBookmarkPlayTimeInSeconds(e) {
          if (this.m_mapBookmarks.has(e)) {
            let t = this.m_mapBookmarks.get(e).playback_position_in_seconds();
            if (Number.isInteger(t)) return t;
          }
          return 0;
        }
        async SendBookMarkedTimeToServer(e, t, r, a, s) {
          if (!S.iA.logged_in) return;
          if (
            !this.m_transport &&
            (await this.m_LoadingOAuth, !this.m_transport)
          )
            return void console.warn(
              "CVideoBookmarkStore:SetBookMark no auth token / transport",
            );
          const n = m.w.Init(M);
          if (this.m_mapBookmarks.has(e)) {
            let o = this.m_mapBookmarks.get(e),
              m = !1;
            o.app_id() != e && ((m = !0), o.set_app_id(e)),
              o.playback_position_in_seconds() != t &&
                ((m = !0), o.set_playback_position_in_seconds(t)),
              (r = r || "0"),
              o.video_track_id() != r && (o.set_video_track_id(r), (m = !0)),
              (a = a || "0"),
              o.audio_track_id() != a && (o.set_audio_track_id(a), (m = !0)),
              (s = s || "0") != o.timedtext_track_id() &&
                (o.set_timedtext_track_id(s), (m = !0)),
              m &&
                (n.Body().add_bookmarks(o),
                i.SetVideoBookmark(this.m_transport, n));
          }
        }
        static Get() {
          return (
            z.s_VODStore || ((z.s_VODStore = new z()), z.s_VODStore.Init()),
            z.s_VODStore
          );
        }
        Init() {
          S.iA.logged_in && this.LoadWatchVideoOAuthToken();
        }
        async LoadWatchVideoOAuthToken() {
          const e =
              "community" == (0, S.yK)()
                ? S.TS.COMMUNITY_BASE_URL + "actions/ajaxgetwatchvodtoken"
                : S.TS.STORE_BASE_URL + "actions/ajaxgetwatchvodtoken",
            t = {};
          try {
            let r = await o().get(e, { params: t, withCredentials: !0 });
            if (
              r &&
              200 == r.status &&
              r.data &&
              1 == r.data.success &&
              r.data.webapi_token
            )
              return (
                (this.m_transport = new c.D(
                  S.TS.WEBAPI_BASE_URL,
                  r.data.webapi_token,
                ).GetServiceTransport()),
                this.m_transport
              );
          } catch (e) {
            let t = (0, w.H)(e);
            console.error(
              "CVideoBookmarkStore:LoadWatchVideoOAuthToken: Failed " +
                t.strErrorMsg,
              t,
            );
          }
          return null;
        }
      }
      class h {
        m_appid;
        constructor(e) {
          this.m_appid = e;
        }
        async SetBookmark(e, t, r, i) {
          S.iA.logged_in &&
            z
              .Get()
              .SendBookMarkedTimeToServer(this.m_appid, Math.floor(e), t, r, i);
        }
        GetBeginPlaytime() {
          return S.iA.logged_in
            ? z.Get().GetBookmarkPlayTimeInSeconds(this.m_appid)
            : 0;
        }
      }
    },
  },
]);
