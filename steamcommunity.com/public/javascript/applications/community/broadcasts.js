/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2079],
  {
    17337: (e) => {
      e.exports = {
        SubSection: "_3Ac4zk8HfCBpJcfDHwJwfg",
        Header: "_2vrXB5mprkP7EUv5iR8us3",
        AppSummaryWidgetCtn: "_35ozIX3OQwwAVHZP2bRufO",
      };
    },
    98371: (e) => {
      e.exports = {
        BroadcastPage: "_3IVNUsV5MmxvVS3iAXgvah",
        ChatAndVideoContainer: "_3T2XhjHO-dGHFcW8wuOjPy",
        PlayerContainer: "_1YtbIC-J77gSgwSKsT5fi6",
        ControlCtn: "_3NMuAFkwI2iBEQ0Xc65_vU",
        ControlsTitle: "_2gpZbx7qR5ehVb4ZyjSePO",
        TitleInput: "_2hXPK8xeIJv-TaWiO-axvZ",
        Options: "_1zp3YgxRk_19JEyx47Y3i0",
        StopCtn: "_3swF91W-Cz8khVEz54YOq_",
        GameInfoCtn: "_4stlZwCqqseNCH-QLOQER",
        GameInfo: "_3LaZv8YHg2VjZ_HhcZ7bpk",
        GameAboutTitleCtn: "_3CMlOE34UtaORvJyHk5EGa",
        GameAboutTitle: "_2RJzuglNdpYTXg51KXQnOn",
        RelatedEvents: "_2RjLr7PFg6CZiul6cV6z_I",
        DebugCtn: "FKW0z5NevNCuD5xXlFgY5",
      };
    },
    46699: (e) => {
      e.exports = {
        ProfileCtn: "_qonROBlfDEqgHmEnTXf3",
        GameAndOptionsCtn: "Qo4I3mYF0bFBK2epQsXG2",
        GameAndViewersCtn: "XQo2J9u8ebB9kBJWDwPNW",
        BroadcastTitleCtn: "_1R6Q5E3iChq6o6-dvC9wVB",
        StreamDetailsCtn: "_11FAt4TX08YfslIrMg2DVM",
        ViewerCount: "_2skQ1ea4HbEWoM-0eRZQJ2",
        BroadcastUserActionsCtn: "_1MeMBOgHJbg6D0H83lpxWS",
        GameCapsule: "_1oJMxM2S4G0iIY4g7hHqVh",
      };
    },
    30593: (e) => {
      e.exports = { AdminControls: "_3KL0bXxikaWzpb1AY27eH0" };
    },
    16971: (e) => {
      e.exports = {
        AvatarCtn: "_3n3n08bcnphB_5qaSwJDyQ",
        NameAndProps: "_3PljhCwFW7qZ0qu22k7frk",
      };
    },
    43047: (e) => {
      e.exports = {
        avatarHolder: "nibodjvvrm86uCfnnAn4g",
        avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
        avatar: "_3h-QRJGxnVOIExtHD1R0f2",
        avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
        avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
      };
    },
    33924: (e) => {
      e.exports = {
        "duration-app-launch": "800ms",
        OtherEventsCtn: "_9H6b5yfaxlmcnHvkqtwDK",
        OtherEvents_MainImageCtn: "_2qyLPxO8_nkczRvFiaju8N",
        OtherEvents: "_16DzRvjcqFcYr0NYcWmTrg",
        OtherEvents_EventCtn: "_1MwNf8slOG9lOvAeOshmuu",
        OtherEvents_MainImage: "_3_wKbXvT7_y5YkrtadL0I6",
        OtherEvents_BGImage: "_2pPj9UWoWM6h318uBN0-8X",
        OtherEvents_ContentCtn: "_22jEpNTfml-w_aRJV-fKDm",
        OtherEvents_TextCtn: "_3-EtNa1Nr_737K0kglkT9C",
        OtherEvents_TextTitle: "_2jc1DpJ_WzFtigRh5qDWce",
        UpcomingCtn: "_2CXrGPtlQh-j3aSa6XsQDI",
        OtherEvents_SubTitle: "_1Swox5XYdeesack-J7fNLH",
        HoversEnabled: "_3o6M87A6T172WsUE6MNvdW",
        PartnerEventRowCapsule_MainImage: "bC2Zkx7FlANno4SW8FwB-",
        EventSummaryContainer: "_2GYp44BuZLfKRQdeILTDC3",
        EventSummaryText: "ENbI1gFgvIca6HSKAbfiJ",
        EventSummaryType: "_11JXznGoylLSEmZXZbgcsq",
        HorizontalEvent: "_1ruRSreC31IK4kUGUcSRDK",
        HorizontalSummary: "_2bTWamVtbFnHovwqhlrxiV",
        HorizontalTitle: "B9-wlbaW3NhZ3FQPArnkW",
        HorizontalDescriptionCtn: "_3CQtWw7qMAWImOwd8J5xHi",
        HorizontalDescription: "_2hPZwxDYhaY3SllhjeFqb_",
        AppCapsuleImage: "_3OzV3h4jW1bkLmB6TqbYmo",
        AppCapsuleCtn: "_16au-uWHggl6G731aw_eHt",
        AppCapsuleImageHover: "IeC3X0McKdGC79BsC3VvM",
        AppCapsulePrice: "_2-l2M5GPuxKFwV8h1tc_fH",
      };
    },
    58632: (e) => {
      "use strict";
      var t,
        a = (function () {
          function e(e, t) {
            if ("function" != typeof e)
              throw new TypeError(
                "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: " +
                  e +
                  ".",
              );
            (this._batchLoadFn = e),
              (this._maxBatchSize = (function (e) {
                var t = !e || !1 !== e.batch;
                if (!t) return 1;
                var a = e && e.maxBatchSize;
                if (void 0 === a) return 1 / 0;
                if ("number" != typeof a || a < 1)
                  throw new TypeError(
                    "maxBatchSize must be a positive number: " + a,
                  );
                return a;
              })(t)),
              (this._batchScheduleFn = (function (e) {
                var t = e && e.batchScheduleFn;
                if (void 0 === t) return n;
                if ("function" != typeof t)
                  throw new TypeError(
                    "batchScheduleFn must be a function: " + t,
                  );
                return t;
              })(t)),
              (this._cacheKeyFn = (function (e) {
                var t = e && e.cacheKeyFn;
                if (void 0 === t)
                  return function (e) {
                    return e;
                  };
                if ("function" != typeof t)
                  throw new TypeError("cacheKeyFn must be a function: " + t);
                return t;
              })(t)),
              (this._cacheMap = (function (e) {
                var t = !e || !1 !== e.cache;
                if (!t) return null;
                var a = e && e.cacheMap;
                if (void 0 === a) return new Map();
                if (null !== a) {
                  var n = ["get", "set", "delete", "clear"].filter(
                    function (e) {
                      return a && "function" != typeof a[e];
                    },
                  );
                  if (0 !== n.length)
                    throw new TypeError(
                      "Custom cacheMap missing methods: " + n.join(", "),
                    );
                }
                return a;
              })(t)),
              (this._batch = null),
              (this.name = (function (e) {
                if (e && e.name) return e.name;
                return null;
              })(t));
          }
          var t = e.prototype;
          return (
            (t.load = function (e) {
              if (null == e)
                throw new TypeError(
                  "The loader.load() function must be called with a value, but got: " +
                    String(e) +
                    ".",
                );
              var t = (function (e) {
                  var t = e._batch;
                  if (
                    null !== t &&
                    !t.hasDispatched &&
                    t.keys.length < e._maxBatchSize
                  )
                    return t;
                  var a = { hasDispatched: !1, keys: [], callbacks: [] };
                  return (
                    (e._batch = a),
                    e._batchScheduleFn(function () {
                      !(function (e, t) {
                        if (((t.hasDispatched = !0), 0 === t.keys.length))
                          return void o(t);
                        var a;
                        try {
                          a = e._batchLoadFn(t.keys);
                        } catch (a) {
                          return r(
                            e,
                            t,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: " +
                                String(a) +
                                ".",
                            ),
                          );
                        }
                        if (!a || "function" != typeof a.then)
                          return r(
                            e,
                            t,
                            new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: " +
                                String(a) +
                                ".",
                            ),
                          );
                        a.then(function (e) {
                          if (!s(e))
                            throw new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: " +
                                String(e) +
                                ".",
                            );
                          if (e.length !== t.keys.length)
                            throw new TypeError(
                              "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.\n\nKeys:\n" +
                                String(t.keys) +
                                "\n\nValues:\n" +
                                String(e),
                            );
                          o(t);
                          for (var a = 0; a < t.callbacks.length; a++) {
                            var n = e[a];
                            n instanceof Error
                              ? t.callbacks[a].reject(n)
                              : t.callbacks[a].resolve(n);
                          }
                        }).catch(function (a) {
                          r(e, t, a);
                        });
                      })(e, a);
                    }),
                    a
                  );
                })(this),
                a = this._cacheMap,
                n = this._cacheKeyFn(e);
              if (a) {
                var i = a.get(n);
                if (i) {
                  var l = t.cacheHits || (t.cacheHits = []);
                  return new Promise(function (e) {
                    l.push(function () {
                      e(i);
                    });
                  });
                }
              }
              t.keys.push(e);
              var c = new Promise(function (e, a) {
                t.callbacks.push({ resolve: e, reject: a });
              });
              return a && a.set(n, c), c;
            }),
            (t.loadMany = function (e) {
              if (!s(e))
                throw new TypeError(
                  "The loader.loadMany() function must be called with Array<key> but got: " +
                    e +
                    ".",
                );
              for (var t = [], a = 0; a < e.length; a++)
                t.push(
                  this.load(e[a]).catch(function (e) {
                    return e;
                  }),
                );
              return Promise.all(t);
            }),
            (t.clear = function (e) {
              var t = this._cacheMap;
              if (t) {
                var a = this._cacheKeyFn(e);
                t.delete(a);
              }
              return this;
            }),
            (t.clearAll = function () {
              var e = this._cacheMap;
              return e && e.clear(), this;
            }),
            (t.prime = function (e, t) {
              var a = this._cacheMap;
              if (a) {
                var n,
                  r = this._cacheKeyFn(e);
                if (void 0 === a.get(r))
                  t instanceof Error
                    ? (n = Promise.reject(t)).catch(function () {})
                    : (n = Promise.resolve(t)),
                    a.set(r, n);
              }
              return this;
            }),
            e
          );
        })(),
        n =
          "object" == typeof process && "function" == typeof process.nextTick
            ? function (e) {
                t || (t = Promise.resolve()),
                  t.then(function () {
                    process.nextTick(e);
                  });
              }
            : "function" == typeof setImmediate
              ? function (e) {
                  setImmediate(e);
                }
              : function (e) {
                  setTimeout(e);
                };
      function r(e, t, a) {
        o(t);
        for (var n = 0; n < t.keys.length; n++)
          e.clear(t.keys[n]), t.callbacks[n].reject(a);
      }
      function o(e) {
        if (e.cacheHits)
          for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
      }
      function s(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          "number" == typeof e.length &&
          (0 === e.length ||
            (e.length > 0 &&
              Object.prototype.hasOwnProperty.call(e, e.length - 1)))
        );
      }
      e.exports = a;
    },
    35261: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => pe });
      a(64641);
      var n = a(90626),
        r = a(92757),
        o = a(97058),
        s = a(41735),
        i = a.n(s),
        l = a(34629),
        c = a(14947),
        m = a(17720),
        d = a(54728),
        u = a(68797),
        p = a(78327);
      class v {
        constructor() {
          (this.m_bShowOnlyVideo = !1),
            (this.m_bShowOnlyChat = !1),
            (this.m_curDebugInfo = null),
            (0, c.Gn)(this);
        }
        GetBroadcasterSteamID() {
          return this.m_steamid;
        }
        GetDebugInfo() {
          return this.m_curDebugInfo;
        }
        BShowOnlyVideo() {
          return this.m_bShowOnlyVideo;
        }
        BShowOnlyChat() {
          return this.m_bShowOnlyChat;
        }
        BShowInIframe() {
          return this.m_bShowOnlyChat || this.m_bShowOnlyVideo;
        }
        async LoadBroadcastDebugInfo(e) {
          let t = p.TS.COMMUNITY_BASE_URL + "broadcast/broadcastdebuginfo",
            a = {
              steamid: this.m_steamid.ConvertTo64BitString(),
              origin: self.origin,
            };
          try {
            let n = await i().get(t, {
              params: a,
              withCredentials: !0,
              cancelToken: e ? e.token : void 0,
            });
            if (e && e.token.reason) return null;
            if (n && 200 == n.status && n.data && 1 == n.data.success)
              return (this.m_curDebugInfo = n.data), this.m_curDebugInfo;
          } catch (e) {
            let t = (0, u.H)(e);
            console.error("LoadBroadcastDebugInfo: Failed " + t.strErrorMsg, t);
          }
          return null;
        }
        async UpdateBroadcastSettings(e, t, a) {
          let n = p.TS.COMMUNITY_BASE_URL + "broadcast/updatebroadcastsettings",
            r = {
              steamid: this.m_steamid.ConvertTo64BitString(),
              matchid: e,
              title: t,
              sessionid: p.TS.SESSIONID,
            };
          try {
            let e = await i().get(n, {
              params: r,
              withCredentials: !0,
              cancelToken: a ? a.token : void 0,
            });
            if (a && a.token.reason) return !1;
            if (e && 200 == e.status && e.data && 1 == e.data.success) {
              const e = d.es.GetOrCreateBroadcastInfo(
                this.m_steamid.ConvertTo64BitString(),
              );
              return (
                e &&
                  (0, c.h5)(() => {
                    e.m_strTitle = t;
                  }),
                !0
              );
            }
          } catch (e) {
            let t = (0, u.H)(e);
            console.error(
              "UpdateBroadcastSettings: Failed " + t.strErrorMsg,
              t,
            );
          }
          return !1;
        }
        async StopBroadcast(e) {
          const t = this.m_steamid.ConvertTo64BitString(),
            a = d.es.GetBroadcast(t);
          let n = p.TS.COMMUNITY_BASE_URL + "broadcast/stopbroadcast",
            r = {
              steamid: t,
              broadcastid: a ? a.m_ulBroadcastID : null,
              sessionid: p.TS.SESSIONID,
            };
          return await this.InternalSendSimpleGetRequest(
            "StopBroadcast",
            n,
            r,
            e,
          );
        }
        async SetBroadcasterRestrictions(e, t, a) {
          const n = this.m_steamid.ConvertTo64BitString(),
            r = d.es.GetBroadcast(n);
          let o = p.TS.COMMUNITY_BASE_URL + "broadcast/setbroadcastrestriction",
            s = {
              steamid: n,
              broadcastid: r ? r.m_ulBroadcastID : null,
              type: e,
              days: t,
              sessionid: p.TS.SESSIONID,
            };
          return await this.InternalSendSimpleGetRequest(
            "SetBroadcasterRestrictions",
            o,
            s,
            a,
          );
        }
        async SetUnBannable(e) {
          const t = this.m_steamid.ConvertTo64BitString(),
            a = d.es.GetBroadcast(t);
          let n = p.TS.COMMUNITY_BASE_URL + "broadcast/unban",
            r = {
              steamid: t,
              broadcastid: a ? a.m_ulBroadcastID : null,
              sessionid: p.TS.SESSIONID,
            };
          return await this.InternalSendSimpleGetRequest(
            "SetUnBannable",
            n,
            r,
            e,
          );
        }
        async SendUserReportOnBroadcast(e) {
          const t = this.m_steamid.ConvertTo64BitString(),
            a = d.es.GetBroadcast(t);
          let n = p.TS.COMMUNITY_BASE_URL + "broadcast/report",
            r = {
              steamid: t,
              broadcastid: a ? a.m_ulBroadcastID : null,
              description: e,
              sessionid: p.TS.SESSIONID,
            };
          return await this.InternalSendSimpleGetRequest(
            "SendUserReportOnBroadcast",
            n,
            r,
            null,
          );
        }
        async InternalSendSimpleGetRequest(e, t, a, n) {
          try {
            let e = await i().get(t, {
              params: a,
              withCredentials: !0,
              cancelToken: n ? n.token : void 0,
            });
            if (n && n.token.reason) return !1;
            if (e && 200 == e.status && e.data && 1 == e.data.success)
              return !0;
          } catch (t) {
            let a = (0, u.H)(t);
            console.error(
              `CCommunityBroadcastStore:${e}: Failed ` + a.strErrorMsg,
              a,
            );
          }
          return !1;
        }
        static Get() {
          return (
            v.s_Singleton || ((v.s_Singleton = new v()), v.s_Singleton.Init()),
            v.s_Singleton
          );
        }
        Init() {
          let e = (0, p.Tc)("broadcastsinfo", "application_config");
          this.ValidateStoreDefault(e) &&
            ((this.m_steamid = new m.b(e.steamid)),
            (this.m_bShowOnlyChat = Boolean(e.show_only_chat)),
            (this.m_bShowOnlyVideo = Boolean(e.show_only_video)));
        }
        ValidateStoreDefault(e) {
          return !(!e || "object" != typeof e) && "string" == typeof e.steamid;
        }
      }
      (0, l.Cg)([c.sH], v.prototype, "m_curDebugInfo", void 0);
      var E = a(75844),
        h = a(39606),
        _ = a(72224),
        A = a(53120),
        S = a.n(A),
        f = a(34010),
        g = a(4796),
        B = a(91254),
        C = a(7068),
        b = a(84811),
        I = a(35685),
        w = a(95034),
        D = a(95695),
        y = a.n(D),
        T = a(45359),
        N = a(21273),
        k = a(738),
        G = a(52038),
        P = a(56011),
        M = a(61859),
        R = a(14932),
        U = a(76684),
        H = a(82227),
        O = a(17337);
      const F = (e) => {
          const t = (0, n.useRef)(null),
            [a, r] = (0, n.useState)(null);
          return (
            (0, n.useEffect)(
              () => () => {
                t.current && t.current("BroadcastDebugSection: unmounting");
              },
              [],
            ),
            n.createElement(
              b.tH,
              null,
              n.createElement(
                "div",
                { className: (0, G.A)(O.Container) },
                n.createElement(
                  "div",
                  { className: O.Controls },
                  n.createElement(
                    C.$n,
                    {
                      onClick: async () => {
                        t.current && t.current();
                        const e = i().CancelToken.source();
                        (t.current = e.cancel),
                          r(await v.Get().LoadBroadcastDebugInfo(e));
                      },
                    },
                    "(VO) Load Debug Info",
                  ),
                ),
                n.createElement(b.tH, null, n.createElement(Q, { info: a })),
              ),
            )
          );
        },
        Q = (e) => {
          var t;
          const { info: a } = e,
            [r, o] = (0, n.useState)(!1);
          if (!a) return null;
          const s = v.Get().GetBroadcasterSteamID().ConvertTo64BitString(),
            i = d.es.GetBroadcast(s);
          return n.createElement(
            "div",
            { className: O.DisplaySection },
            Boolean(a.last_error_result && 1 != a.last_error_result) &&
              n.createElement(
                "div",
                { className: O.SubSection },
                n.createElement("div", { className: O.Header }, "Error"),
                n.createElement(
                  "div",
                  null,
                  "EResult: ",
                  a.last_error_result,
                  ", occurred ",
                  a.last_error_time,
                  " - ",
                  n.createElement(U.K4, {
                    dateAndTime: a.last_error_time,
                    bSingleLine: !0,
                  }),
                ),
              ),
            n.createElement(
              "div",
              { className: O.SubSection },
              n.createElement(
                "div",
                { className: O.Header },
                "Broadcast Setup",
              ),
              n.createElement(
                "div",
                null,
                "Broadcaster: ",
                a.steam_id,
                ", SteamID: ",
                s,
              ),
              n.createElement(
                "div",
                null,
                "Directory Server: ",
                a.directory_server,
                ", SessionID: ",
                a.broadcast_id,
              ),
              n.createElement(
                "div",
                null,
                "Ingester Server: ",
                a.relay_server,
                ", UploadID: ",
                a.upload_id,
              ),
              n.createElement("div", null, "Origin Server: ", a.origin_server),
              n.createElement(
                "div",
                null,
                "Chat Server: ",
                a.chat_server,
                ", chat_id: ",
                a.chat_id,
              ),
              n.createElement(
                "div",
                null,
                "Transcoder Server : ",
                a.transcode_server,
              ),
            ),
            n.createElement(
              "div",
              { className: O.SubSection },
              n.createElement("div", { className: O.Header }, "Ingester Info"),
              n.createElement(
                "div",
                null,
                "Client: ",
                a.remote_address,
                " ",
                Boolean(a.is_rtmp) ? "(RTMP)" : "(STEAM CLIENT)",
              ),
              n.createElement(
                "div",
                null,
                "Video Config: ",
                a.upload_height,
                "x",
                a.upload_width,
                "@",
                a.upload_fps,
                ", ",
                a.upload_bandwidth,
                " kbps ",
              ),
              n.createElement(
                "div",
                null,
                "Audio Config: ",
                a.upload_audio_channels,
                "x",
                a.upload_audio_samplerate,
                "Hz, ",
                a.upload_audio_bitrate / 1e3,
                " kbps ",
              ),
              n.createElement(
                "div",
                null,
                "Upload Stats: ",
                a.upload_avg_fps,
                " FPS, ",
                a.upload_avg_bandwidth,
                " kbps, ",
                a.upload_avg_key_interval,
                " msec key frame interval",
              ),
              n.createElement(
                "div",
                null,
                "Upload Totals: ",
                a.upload_total_frames_received,
                " video frames,  ",
                Math.round(
                  (a.upload_current_video_pts - a.upload_first_video_pts) /
                    a.upload_video_timescale,
                ),
                " seconds ( ",
                (0, H.dm)(a.upload_total_bytes_uploaded || 0, 1),
                " ) ",
              ),
            ),
            Boolean(a.transcode_server) &&
              n.createElement(
                "div",
                { className: O.SubSection },
                n.createElement(
                  "div",
                  { className: O.Header },
                  "Transcoder Info",
                ),
                n.createElement(
                  "div",
                  null,
                  "Decoder ( ",
                  a.upload_height,
                  "x",
                  a.upload_width,
                  "@",
                  a.upload_fps,
                  ", ",
                  a.upload_bandwidth,
                  " kbps ) :  ",
                  a.transcoder_frames_to_decode,
                  " queued,  ",
                  a.transcoder_frames_total_decoded,
                  " decoded",
                ),
                a.transcoder_streams.map((e) =>
                  n.createElement(
                    "div",
                    { key: e.representation_id },
                    "Encoder ",
                    e.representation_id,
                    " ( ",
                    e.height,
                    "x",
                    e.width,
                    "@",
                    e.fps,
                    " ",
                    e.bitrate,
                    " kbps ) : ",
                    e.frames_to_encode,
                    " queued, ",
                    e.frames_total_encoded,
                    " encoded",
                  ),
                ),
              ),
            n.createElement(
              "div",
              { className: O.SubSection },
              n.createElement("div", { className: O.Header }, "Origin Info"),
              null === (t = null == a ? void 0 : a.origin_video_streams) ||
                void 0 === t
                ? void 0
                : t.map((e) =>
                    n.createElement(
                      "div",
                      { key: e.representation_id },
                      "Video Stream ",
                      e.representation_id,
                      " ( ",
                      e.height,
                      "x",
                      e.width,
                      "@",
                      e.fps,
                      " ",
                      e.bitrate,
                      " kbps ) :  ",
                      e.num_frames_queued,
                      " frames queued,  ",
                      e.num_segments_received,
                      " segments received,  ",
                      2 * e.num_segments_cached,
                      " seconds cached ( ",
                      (0, H.dm)(e.memory_used, 2),
                      " )",
                    ),
                  ),
              "Audio Stream ",
              a.origin_audio_stream.representation_id,
              " ( ",
              a.upload_audio_channels,
              "x",
              a.upload_audio_samplerate,
              "Hz, ",
              a.upload_audio_bitrate / 1e3,
              " kbps ) :  ",
              a.origin_audio_stream.num_frames_queued,
              " frames queued,  ",
              a.origin_audio_stream.num_segments_received,
              " segments received,  ",
              2 * a.origin_audio_stream.num_segments_cached,
              " seconds cached ( ",
              (0, H.dm)(a.origin_audio_stream.memory_used, 2),
              " )",
            ),
            n.createElement(
              "div",
              { className: O.SubSection },
              n.createElement("div", { className: O.Header }, "Viewer Info"),
              n.createElement(
                "div",
                null,
                "Viewers: ",
                a.current_viewers,
                " current (",
                a.current_anon_viewers,
                " anonymous), ",
                a.total_unique_viewers,
                " total unique, ",
                a.max_concurrent_viewers,
                " max concurrent",
              ),
              n.createElement(
                "div",
                null,
                "Average time watched: ",
                a.average_watch_duration,
                " seconds",
              ),
              n.createElement(
                "div",
                null,
                "Last Minute: ",
                a.added_viewers_last_minute,
                " watch requests, ",
                a.rejected_viewers_last_minute,
                " rejected",
              ),
              n.createElement("div", null, "Restrictions: ", a.restriction),
              n.createElement("div", null, a.extra_viewer_info),
            ),
            n.createElement(
              "div",
              { className: O.SubSection },
              n.createElement("div", { className: O.Header }, "Settings"),
              n.createElement("div", null, "is replay? ", a.is_replay),
              n.createElement(
                "div",
                null,
                "is replay local file? ",
                a.is_replay_local_file,
              ),
              n.createElement(
                "div",
                null,
                "is replay clip? ",
                a.is_replay_clip,
              ),
              n.createElement(
                "div",
                null,
                "is capturing VOD? ",
                a.is_capturing_vod,
              ),
              n.createElement(
                "div",
                null,
                "is white listed for store streaming? ",
                a.is_whitelisted,
              ),
            ),
            n.createElement(
              "div",
              { className: O.SubSection },
              n.createElement("div", { className: O.Header }, "App Info"),
              n.createElement("div", null, "appid: ", a.app_id),
              n.createElement("div", null, "app name: ", a.app_name),
              n.createElement("div", null, "broadcast title: ", a.title),
              n.createElement("div", null, "thumbnail: ", a.thumbnail_url),
              Boolean(a.thumbnail_url) &&
                n.createElement("img", { src: a.thumbnail_url }),
              Boolean(a.app_id && a.app_id > 0) &&
                n.createElement(
                  "div",
                  { className: O.AppSummaryWidgetCtn },
                  n.createElement(T.pb, { id: a.app_id, type: "game" }),
                ),
            ),
            n.createElement(
              "div",
              { className: O.SubSection },
              n.createElement(
                "div",
                { className: O.Header },
                "Manifest Information",
              ),
              n.createElement(
                "div",
                null,
                "Heartbeat Interval: ",
                i.m_data.heartbeat_interval,
              ),
              n.createElement("div", null, "DASH MPEG Url: ", i.m_data.url),
              n.createElement("div", null, "HLS Url: ", i.m_data.hls_url),
            ),
            n.createElement(C.$n, { onClick: () => o(!r) }, "Toggle Raw Data"),
            Boolean(r) &&
              n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  "div",
                  { className: O.SubSection },
                  n.createElement(R.G, { data: a }),
                ),
                n.createElement(
                  "div",
                  { className: O.SubSection },
                  n.createElement(R.G, {
                    data: (null == i ? void 0 : i.m_data) || "",
                  }),
                ),
              ),
          );
        };
      var L = a(98371),
        x = a(1035),
        W = a(41471),
        K = a(16971);
      const V = (e) => {
        const t = e.steamid.GetAccountID(),
          { data: a } = (0, W.hW)(t);
        return n.createElement(
          "div",
          { className: K.AvatarCtn },
          n.createElement(
            "a",
            {
              href: a.GetCommunityProfileURL(),
              "data-miniprofile": "s" + e.steamid.ConvertTo64BitString(),
            },
            n.createElement(x.i8, {
              persona: a,
              size: e.size,
              statusPosition: "bottom",
            }),
          ),
          n.createElement(
            "div",
            { className: K.NameAndProps },
            Boolean(e.bShowName) &&
              n.createElement(
                "a",
                {
                  href: a.GetCommunityProfileURL(),
                  "data-miniprofile": "s" + e.steamid.ConvertTo64BitString(),
                },
                a.m_strProfileURL,
              ),
            e.children,
          ),
        );
      };
      var j = a(65946),
        q = a(55263),
        J = a(82477),
        X = a(12155),
        z = a(51272),
        Y = a(61336),
        Z = a(46699);
      function $(e) {
        const { broadcasterSteamID: t } = e,
          a = t.ConvertTo64BitString(),
          [r, o] = (0, j.q3)(() => {
            const e = d.es.GetOrCreateBroadcastInfo(a);
            return [e.m_nViewerCount, Number.parseInt(e.m_strAppId)];
          }),
          [s] = (0, q.t7)(o, { include_assets: !0 });
        let i = null == s ? void 0 : s.GetAssets().GetMainCapsuleURL(),
          l = i && i.length > 0;
        return n.createElement(
          b.tH,
          null,
          n.createElement(
            "div",
            { className: Z.ProfileCtn },
            l &&
              n.createElement(
                "a",
                {
                  className: Z.GameCapsule,
                  href: (0, Y.k2)(
                    (null == s ? void 0 : s.GetStorePageURL()) ||
                      p.TS.STORE_BASE_URL + "app/" + o,
                  ),
                },
                n.createElement("img", { src: i }),
              ),
            n.createElement(
              "div",
              { className: Z.StreamDetailsCtn },
              n.createElement(
                "div",
                { className: Z.GameAndOptionsCtn },
                n.createElement(
                  "div",
                  { className: Z.GameAndViewersCtn },
                  n.createElement(ee, { broadcasterSteamID: t }),
                  n.createElement(
                    "div",
                    { className: Z.ViewerCount },
                    (0, M.Yp)("#Broadcast_ViewerCount", r.toLocaleString()),
                  ),
                ),
                n.createElement(te, { broadcasterSteamID: t }),
              ),
              n.createElement(V, { steamid: t, size: "Medium", bShowName: !0 }),
            ),
          ),
        );
      }
      const ee = (0, E.PA)((e) => {
          const { broadcasterSteamID: t } = e,
            a = t.ConvertTo64BitString(),
            [r, o] = (0, j.q3)(() => {
              const e = d.es.GetOrCreateBroadcastInfo(a);
              return [e.m_strAppTitle, Number.parseInt(e.m_strAppId)];
            }),
            [s] = (0, q.t7)(o, { include_assets: !0 });
          return n.createElement(
            "div",
            { className: Z.BroadcastTitleCtn },
            (0, M.we)("#Broadcast_Playing"),
            n.createElement(
              "a",
              {
                href: (0, Y.k2)(
                  (null == s ? void 0 : s.GetStorePageURL()) ||
                    p.TS.STORE_BASE_URL + "app/" + o,
                ),
              },
              Boolean(r) ? r : null == s ? void 0 : s.GetName(),
            ),
            Boolean((null == r ? void 0 : r.length) > 0) &&
              n.createElement("span", null, " - ", r),
          );
        }),
        te = (0, E.PA)((e) => {
          const { broadcasterSteamID: t } = e,
            a = t.ConvertTo64BitString();
          d.es.GetOrCreateBroadcastInfo(a);
          return n.createElement(
            "div",
            { className: Z.BroadcastUserActionsCtn },
            Boolean(
              p.iA.steamid != e.broadcasterSteamID.ConvertTo64BitString(),
            ) &&
              n.createElement(
                C.$n,
                {
                  "data-tooltip-text": (0, M.we)("#Broadcast_User_Report_ttip"),
                  onClick: (e) => {
                    p.iA.logged_in
                      ? (0, k.pg)(
                          n.createElement(ae, { broadcasterSteamID: t }),
                          (0, P.uX)(e),
                        )
                      : (0, k.pg)(
                          n.createElement(N.o0, {
                            strTitle: (0, M.we)(
                              "#EventDisplay_Share_NotLoggedIn",
                            ),
                            strDescription: (0, M.we)(
                              "#EventDisplay_Share_NotLoggedIn_Description",
                            ),
                            strOKButtonText: (0, M.we)("#MobileLogin_SignIn"),
                            onOK: () => (0, J.vg)(),
                          }),
                          (0, P.uX)(e),
                        );
                  },
                },
                n.createElement(X.lNU, null),
              ),
            n.createElement(
              C.$n,
              {
                "data-tooltip-text": (0, M.we)("#Broadcast_User_FAQ_ttip"),
                onClick: (e) =>
                  (0, z.EP)(
                    e,
                    "https://support.steampowered.com/kb_article.php?ref=6730-TOAK-6497",
                  ),
              },
              n.createElement(X.$$j, null),
            ),
          );
        }),
        ae = (e) => {
          const [t, a] = (0, n.useState)("");
          return n.createElement(
            N.o0,
            {
              strTitle: (0, M.we)("#Broadcast_ReportItem_Title"),
              strDescription: (0, M.we)("#Broadcast_ReportItem_Description"),
              onCancel: e.closeModal,
              bOKDisabled: 0 == t.trim().length,
              onOK: async () => {
                await v.Get().SendUserReportOnBroadcast(t),
                  e.closeModal && e.closeModal();
              },
            },
            n.createElement("textarea", {
              value: t,
              onChange: (e) => a(e.currentTarget.value),
              rows: 10,
              cols: 80,
            }),
          );
        };
      var ne = a(30593),
        re = a(22797);
      const oe = (e) => {
          if (!p.iA.is_support) return null;
          const t = (t, a) => {
              (0, k.pg)(
                n.createElement(se, {
                  broadcastSteamID: e.broadcastSteamID,
                  strAction: a,
                }),
                (0, P.uX)(t),
              );
            },
            a =
              "https://steamsupport.valvesoftware.com/account/overview/" +
              e.broadcastSteamID.ConvertTo64BitString();
          return n.createElement(
            "div",
            { className: (0, G.A)(ne.AdminControls, y().ValveOnlyBackground) },
            n.createElement("div", null, "(VO) Support Tools"),
            n.createElement(
              C.$n,
              { onClick: (e) => t(e, "frontpage") },
              "Remove from Front Page",
            ),
            n.createElement(
              C.$n,
              { onClick: (e) => t(e, "ban") },
              "Ban from Broadcasting",
            ),
            n.createElement(
              C.$n,
              {
                onClick: (t) => {
                  (0, k.pg)(
                    n.createElement(ie, { steamid: e.broadcastSteamID }),
                    (0, P.uX)(t),
                  );
                },
              },
              "Make Unbannable",
            ),
            n.createElement(
              C.$n,
              { onClick: (e) => (0, z.EP)(e, a) },
              "Go to Support Page",
            ),
          );
        },
        se = (0, E.PA)((e) => {
          const { broadcastSteamID: t, strAction: a } = e,
            [r, o] = (0, n.useState)(1),
            [s, l] = (0, n.useState)(!1),
            [c, m] = (0, n.useState)(!1),
            [d, u] = (0, n.useState)(!1),
            p = (0, n.useRef)(null);
          (0, n.useEffect)(
            () => () => {
              p.current && p.current("BroadcastConfirmBanAction: unmounting");
            },
            [],
          );
          const E = () => e.closeModal && e.closeModal();
          return n.createElement(
            b.tH,
            null,
            n.createElement(
              N.x_,
              { onEscKeypress: E },
              n.createElement(
                C.UC,
                null,
                n.createElement(C.Y9, null, "Remove Broadcast From Front Page"),
                n.createElement(
                  C.nB,
                  null,
                  n.createElement(
                    C.a3,
                    null,
                    n.createElement(
                      "p",
                      null,
                      "frontpage" == a
                        ? "How long should we prevent the broadcast from appearing in community or store?"
                        : "How long should we prevent the user from Broadcast at all on Steam?",
                    ),
                    n.createElement(
                      "div",
                      null,
                      n.createElement(C.m, {
                        rgOptions: [
                          { label: "1 Day", data: 1 },
                          { label: "1 Week", data: 7 },
                          { label: "1 Month", data: 30 },
                          { label: "6 Months", data: 180 },
                          { label: "1 Year", data: 365 },
                        ],
                        selectedOption: r,
                        onChange: (e) => o(e.data),
                      }),
                      Boolean(s) && n.createElement(re.t, null),
                      Boolean(c) &&
                        n.createElement(
                          "div",
                          null,
                          d
                            ? "Successfully Completed Request"
                            : "Failed to complete request, check browser console and/or try again later",
                        ),
                    ),
                  ),
                ),
                n.createElement(
                  C.wi,
                  null,
                  c
                    ? n.createElement(
                        C.jn,
                        { onClick: E },
                        (0, M.we)("#Button_Dismiss"),
                      )
                    : n.createElement(
                        C.dR,
                        null,
                        n.createElement(
                          C.$n,
                          { onClick: E },
                          (0, M.we)("#Button_Cancel"),
                        ),
                        n.createElement(
                          C.jn,
                          {
                            onClick: async () => {
                              l(!0);
                              try {
                                p.current && p.current();
                                const e = i().CancelToken.source();
                                p.current = e.cancel;
                                let t = await v
                                  .Get()
                                  .SetBroadcasterRestrictions(a, r, e);
                                e.token.reason || (t = !0);
                              } finally {
                                l(!1), m(!0), u(false);
                              }
                            },
                          },
                          (0, M.we)("#Button_Confirm"),
                        ),
                      ),
                ),
              ),
            ),
          );
        }),
        ie = (e) => {
          const [t, a] = (0, n.useState)(!1),
            [r, o] = (0, n.useState)(!1),
            [s, l] = (0, n.useState)(!1),
            c = (0, n.useRef)(null);
          (0, n.useEffect)(
            () => () => {
              c.current && c.current("BroadcastMakeUnbannable: unmounting");
            },
            [],
          );
          const m = () => e.closeModal && e.closeModal();
          return n.createElement(
            b.tH,
            null,
            n.createElement(
              N.x_,
              { onEscKeypress: m },
              n.createElement(
                C.UC,
                null,
                n.createElement(C.Y9, null, "Make Broadcast Unbannable"),
                n.createElement(
                  C.nB,
                  null,
                  n.createElement(
                    C.a3,
                    null,
                    n.createElement(
                      "p",
                      null,
                      "Prevent automatic, report based banning changes to this strema visibility the stream for 1 week?",
                    ),
                    n.createElement(
                      "div",
                      null,
                      Boolean(t) && n.createElement(re.t, null),
                      Boolean(r) &&
                        n.createElement(
                          "div",
                          null,
                          s
                            ? "Successfully Set Unbannable"
                            : "Failed to make Unbannable",
                        ),
                    ),
                  ),
                ),
                n.createElement(
                  C.wi,
                  null,
                  r
                    ? n.createElement(
                        C.jn,
                        { onClick: m },
                        (0, M.we)("#Button_Dismiss"),
                      )
                    : n.createElement(
                        C.dR,
                        null,
                        n.createElement(
                          C.$n,
                          { onClick: m },
                          (0, M.we)("#Button_Cancel"),
                        ),
                        n.createElement(
                          C.jn,
                          {
                            onClick: async () => {
                              a(!0);
                              let e = !1;
                              try {
                                c.current && c.current();
                                const t = i().CancelToken.source();
                                (c.current = t.cancel),
                                  (e = await v.Get().SetUnBannable(t));
                              } finally {
                                a(!1), o(!0), l(e);
                              }
                            },
                          },
                          (0, M.we)("#Button_Confirm"),
                        ),
                      ),
                ),
              ),
            ),
          );
        };
      const le = (0, E.PA)((e) => {
          const t = v.Get().GetBroadcasterSteamID(),
            a = null == t ? void 0 : t.ConvertTo64BitString(),
            r = (function () {
              const [e] = (0, n.useState)(
                () => (0, p.Tc)("ewatchlocation", "application_config") || 5,
              );
              return e;
            })(),
            [o, s] = (0, w.QD)("muted", !0),
            i = d.es.GetBroadcast(a),
            l = d.es.GetOrCreateBroadcastInfo(a);
          return a
            ? n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  "div",
                  { className: (0, G.A)(L.BroadcastPage) },
                  n.createElement(
                    "div",
                    { className: (0, G.A)(S().BroadcastAndChat) },
                    Boolean(!v.Get().BShowOnlyChat()) &&
                      n.createElement(
                        b.tH,
                        null,
                        n.createElement(
                          "div",
                          { className: (0, G.A)(S().wrapper) },
                          n.createElement(
                            "div",
                            {
                              className: (0, G.A)({
                                [S().video_placeholder]: !0,
                                video_placeholder_trgt: !0,
                                [S().NoChat]: v.Get().BShowOnlyVideo(),
                              }),
                            },
                            n.createElement(
                              "div",
                              { className: S().BroadcastPlayerContainer },
                              n.createElement(
                                b.tH,
                                null,
                                n.createElement(_.default, {
                                  steamIDBroadcast: a,
                                  watchLocation: r,
                                  bStartMuted: o,
                                }),
                              ),
                            ),
                          ),
                        ),
                      ),
                    Boolean(!v.Get().BShowOnlyVideo()) &&
                      n.createElement(
                        "div",
                        { className: S().detail_chat_ctn },
                        n.createElement(
                          "div",
                          { className: S().ChatContainer },
                          n.createElement(
                            b.tH,
                            null,
                            n.createElement(h.I, {
                              emoticonStore: f.MX,
                              watchLocation: 6,
                              steamID: a,
                              broadcastID: i ? i.m_ulBroadcastID : void 0,
                            }),
                          ),
                        ),
                      ),
                  ),
                  Boolean(!v.Get().BShowInIframe()) &&
                    n.createElement(ce, {
                      broadcasterSteamID: t,
                      broadcastInfo: l,
                    }),
                ),
              )
            : null;
        }),
        ce = (0, E.PA)((e) => {
          const { broadcasterSteamID: t, broadcastInfo: a } = e,
            [r, o] = (0, n.useState)(null);
          return (
            (0, n.useEffect)(() => {
              (async () => {
                let e = await g.ac.LoadOGGClanInfoForAppID(
                  Number.parseInt(a.m_strAppId),
                );
                o(e);
              })();
            }, [a.m_strAppId]),
            n.createElement(
              n.Fragment,
              null,
              n.createElement($, { broadcasterSteamID: t }),
              n.createElement(me, { steamid: t }),
              Boolean(p.iA.is_support) &&
                n.createElement(
                  "div",
                  null,
                  n.createElement(oe, { broadcastSteamID: t }),
                  n.createElement(
                    "div",
                    {
                      className: (0, G.A)(y().ValveOnlyBackground, L.DebugCtn),
                    },
                    n.createElement(F, null),
                  ),
                ),
              Boolean(a.m_strAppId && Number.parseInt(a.m_strAppId) > 7) &&
                n.createElement(
                  "div",
                  { className: L.GameInfoCtn },
                  n.createElement(
                    "div",
                    { className: L.GameAboutTitleCtn },
                    n.createElement(
                      "div",
                      { className: L.GameAboutTitle },
                      " ",
                      (0, M.we)("#Broadcast_About_Game"),
                      " ",
                    ),
                    n.createElement(
                      "div",
                      { className: y().EventSectionSpacer },
                      " ",
                    ),
                  ),
                  n.createElement(
                    "div",
                    { className: L.GameInfo },
                    n.createElement(T.pb, {
                      id: Number.parseInt(a.m_strAppId),
                      type: "game",
                    }),
                  ),
                ),
              Boolean(r) &&
                n.createElement(
                  "div",
                  { className: L.RelatedEvents },
                  n.createElement(I.rN, {
                    clanAccountID: r.clanAccountID,
                    trackingLocation: 6,
                    partnerEventStore: B.O3,
                    bViewAllShowInfiniteScroll: !0,
                  }),
                ),
            )
          );
        }),
        me = (0, E.PA)((e) => {
          const t = (0, n.useRef)(null);
          let a = d.es.GetOrCreateBroadcastInfo(
            e.steamid.ConvertTo64BitString(),
          );
          const [r, o] = (0, n.useState)(a.m_strTitle),
            [s, l] = (0, n.useState)(""),
            [c, m] = (0, n.useState)(null);
          if (
            ((0, n.useEffect)(
              () => (
                o(a.m_strTitle),
                () => {
                  t.current && t.current("BroadcastControls: unmounting");
                }
              ),
              [a.m_strTitle],
            ),
            p.iA.accountid != e.steamid.GetAccountID())
          )
            return null;
          return n.createElement(
            "div",
            { className: L.ControlCtn },
            n.createElement(
              "div",
              { className: L.ControlsTitle },
              (0, M.we)("#Broadcaster_Control_title"),
            ),
            n.createElement(
              "div",
              { className: L.TitleInput },
              n.createElement(
                "div",
                { className: L.Options },
                n.createElement(C.pd, {
                  type: "text",
                  label: (0, M.we)("#Broadcast_title_title"),
                  onChange: (e) => o(e.currentTarget.value || ""),
                  placeholder: (0, M.we)("#Broadcast_title_placeholder"),
                  value: r,
                }),
                n.createElement(C.pd, {
                  type: "text",
                  label: (0, M.we)("#Broadcast_Control_matchid"),
                  onChange: (e) => l(e.currentTarget.value || ""),
                  value: s,
                }),
                n.createElement(
                  C.$n,
                  {
                    onClick: async () => {
                      t.current && t.current();
                      const e = i().CancelToken.source();
                      t.current = e.cancel;
                      let a = await v.Get().UpdateBroadcastSettings(s, r, e);
                      e.token.reason ||
                        m(
                          (0, M.we)(
                            a
                              ? "#Broadcast_Control_Success"
                              : "#Broadcast_Control_Failure",
                          ),
                        );
                    },
                    "data-tooltip-text": (0, M.we)(
                      "#Broadcast_save_title_ttip",
                    ),
                  },
                  (0, M.we)("#Broadcast_save_changes"),
                ),
              ),
              n.createElement(
                "div",
                { className: L.StopCtn },
                n.createElement(
                  C.$n,
                  {
                    onClick: (e) => {
                      (0, k.pg)(
                        n.createElement(N.o0, {
                          strTitle: (0, M.we)(
                            "#Broadcast_Control_StopBroadcast",
                          ),
                          strDescription: (0, M.we)(
                            "#EventEditor_GenericAreYouSure",
                          ),
                          onOK: async () => {
                            t.current && t.current();
                            const e = i().CancelToken.source();
                            t.current = e.cancel;
                            let a = await v.Get().StopBroadcast(e);
                            e.token.reason ||
                              m(
                                (0, M.we)(
                                  a
                                    ? "#Broadcast_Control_StopSuccess"
                                    : "#Broadcast_Control_StopFailure",
                                ),
                              );
                          },
                        }),
                        (0, P.uX)(e),
                      );
                    },
                  },
                  (0, M.we)("#Broadcast_Control_StopBroadcast"),
                ),
                Boolean(c) && n.createElement("div", null, c),
              ),
            ),
          );
        });
      var de = a(60746);
      let ue = { BroadcastWatch: (e) => `/broadcast/(watch|watchnew)/${e}` };
      function pe(e) {
        const [t, a] = n.useState(!0);
        return (
          (0, n.useEffect)(() => {
            t && de.KN.InitGlobal().then(() => a(!1));
          }, [t]),
          t
            ? n.createElement(re.t, {
                string: (0, M.we)("#Loading"),
                position: "center",
                size: "medium",
              })
            : n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  r.dO,
                  null,
                  n.createElement(r.qh, {
                    path: ue.BroadcastWatch(":steamid_or_user_vanity"),
                    render: (e) =>
                      n.createElement(le, {
                        strSteamID: e.match.params.steamid_or_user_vanity,
                      }),
                  }),
                  n.createElement(r.qh, { component: o.a }),
                ),
              )
        );
      }
    },
    1035: (e, t, a) => {
      "use strict";
      a.d(t, { Ul: () => E, i8: () => h });
      var n = a(34629),
        r = a(90626),
        o = a(75844),
        s = a(10622),
        i = a(52038),
        l = a(78327),
        c = a(3088);
      const m =
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
        d =
          a.p +
          "images/applications/community/avatar_default_full.jpg?v=valveisgoodatcaching";
      var u = a(43047),
        p = a.n(u),
        v = a(81393);
      const E = r.memo(function (e) {
        const {
            strAvatarURL: t,
            size: a = "Medium",
            className: n,
            statusStyle: o,
            statusPosition: s,
            children: l,
            ...u
          } = e,
          E = r.useMemo(() => {
            const e = [];
            return (
              t && e.push(t),
              e.push(
                (function (e) {
                  switch (e) {
                    case "X-Small":
                    case "Small":
                      return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=";
                    case "Medium":
                    case "MediumLarge":
                      return m;
                    case "Large":
                    case "X-Large":
                    case "FillArea":
                      return d;
                    default:
                      return (0, v.z)(e, `Unhandled size ${e}`), m;
                  }
                })(a),
              ),
              e
            );
          }, [t, a]);
        return r.createElement(
          "div",
          {
            className: (0, i.A)(
              p().avatarHolder,
              "avatarHolder",
              "no-drag",
              a,
              n,
            ),
            ...u,
          },
          r.createElement("div", {
            className: (0, i.A)(p().avatarStatus, "avatarStatus", s),
            style: o,
          }),
          r.createElement(c.c, {
            className: (0, i.A)(p().avatar, "avatar"),
            rgSources: E,
            draggable: !1,
          }),
          l,
        );
      });
      let h = class extends r.Component {
        render() {
          const {
            persona: e,
            size: t = "Medium",
            animatedAvatar: a,
            className: n,
            ...o
          } = this.props;
          let c = "";
          return (
            a && a.image_small && 0 != a.image_small.length
              ? (c = l.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + a.image_small)
              : e &&
                ((c = e.avatar_url_medium),
                "Small" == t || "X-Small" == t
                  ? (c = e.avatar_url)
                  : ("Large" != t && "X-Large" != t && "FillArea" != t) ||
                    (c = e.avatar_url_full)),
            r.createElement(E, {
              strAvatarURL: c,
              size: t,
              className: (0, i.A)((0, s.rO)(e), n),
              ...o,
            })
          );
        }
      };
      h = (0, n.Cg)([o.PA], h);
      const _ = (0, o.PA)((e) => {
        const { profileItem: t, className: a, bDisableAnimation: n, ...o } = e;
        if (!t || !t.image_small || 0 == t.image_small.length) return null;
        let s = n ? t.image_large : t.image_small;
        return (
          s || (s = t.image_small),
          s.startsWith("https://") ||
            (s = l.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + s),
          r.createElement(
            "div",
            { className: (0, i.A)(p().avatarFrame, a, "avatarFrame"), ...o },
            r.createElement("img", { className: p().avatarFrameImg, src: s }),
          )
        );
      });
      let A = class extends r.Component {
        constructor(e) {
          super(e),
            (this.state = { bAnimate: "None" != this.props.loopDuration }),
            (this.m_timer = 0);
        }
        componentDidMount() {
          this.props.bParentHovered || this.SetupAnimationTimer();
        }
        SetupAnimationTimer() {
          let e = 0;
          switch (this.props.loopDuration) {
            case "Short":
              e = 2500;
              break;
            case "Medium":
              e = 5e3;
              break;
            case "Long":
              e = 1e4;
          }
          0 != e &&
            (this.setState({ bAnimate: "None" != this.props.loopDuration }),
            (this.m_timer = window.setTimeout(
              () => this.setState({ bAnimate: !1 }),
              e,
            )));
        }
        StopAnimationTimer() {
          this.m_timer &&
            (window.clearTimeout(this.m_timer), (this.m_timer = 0));
        }
        onHover() {
          this.SetupAnimationTimer();
        }
        componentWillUnmount() {
          this.StopAnimationTimer();
        }
        componentDidUpdate(e) {
          this.props.loopDuration != e.loopDuration &&
            ("None" == this.props.loopDuration
              ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
              : "Infinite" == this.props.loopDuration
                ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                : (this.setState({ bAnimate: !0 }),
                  this.SetupAnimationTimer())),
            this.props.bParentHovered != e.bParentHovered &&
              (this.props.bParentHovered &&
              "None" != this.props.loopDuration &&
              "Infinite" != this.props.loopDuration
                ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                : this.state.bAnimate && this.SetupAnimationTimer());
        }
        render() {
          let {
            loopDuration: e,
            animatedAvatar: t,
            avatarFrame: a,
            children: n,
            style: o,
            bLimitProfileFrameAnimationTime: s,
            bParentHovered: i,
            ...l
          } = this.props;
          return (
            l.onClick && (o = { ...o, cursor: "pointer" }),
            this.state.bAnimate || (t = null),
            r.createElement(
              "div",
              {
                onMouseEnter: () =>
                  this.setState({
                    bAnimate: "None" != this.props.loopDuration,
                  }),
                onMouseLeave: () => this.SetupAnimationTimer(),
              },
              r.createElement(
                h,
                { animatedAvatar: t, ...l },
                n,
                r.createElement(_, {
                  profileItem: a,
                  bDisableAnimation: s && !this.state.bAnimate,
                }),
              ),
            )
          );
        }
      };
      A = (0, n.Cg)([o.PA], A);
    },
    60727: (e, t, a) => {
      "use strict";
      a.d(t, { l: () => c, m: () => l });
      var n = a(34629),
        r = a(14947),
        o = a(17720),
        s = a(44165),
        i = a(91254);
      class l {
        constructor() {
          (this.m_mapBroadcasterSteamIDToEvents = new Map()),
            (this.m_mapBroadcasterSteamIDData = new Map()),
            (0, r.Gn)(this);
        }
        static GetBBCodeParam(e, t, a = "") {
          const n = new RegExp(`\\W${t}\\W*=\\W*\\"(.*?)\\"`, "gmi").exec(e);
          return n ? n[1] : a;
        }
        static ParseCalendarEventPresentersFromText(e) {
          const t = /\[\W*speaker(\W[\s\S]*?)\]([\s\S]*?)\[\W*\/speaker\W*\]/gi,
            a = new Array();
          for (;;) {
            const n = t.exec(e);
            if (null === n) break;
            const r = n[1],
              s = n[2],
              i = l.GetBBCodeParam(r, "steamid"),
              c = {
                steamID: i ? new o.b(i) : void 0,
                name: l.GetBBCodeParam(r, "name"),
                title: l.GetBBCodeParam(r, "title"),
                company: l.GetBBCodeParam(r, "company"),
                photo: l.GetBBCodeParam(r, "photo"),
                bio: s,
              };
            a.push(c);
          }
          return a;
        }
        static ParseEventModelPresenters(e, t) {
          const a = e.GetDescriptionWithFallback(t);
          return l.ParseCalendarEventPresentersFromText(a);
        }
        static ParseEventAppReferencesFromText(e) {
          const t = /\/\/store\.steampowered\.com\/app\/(\d+)/gi,
            a = new Set();
          for (;;) {
            const n = t.exec(e);
            if (null === n) break;
            const r = n[1];
            a.add(Number(r));
          }
          return a;
        }
        static ParseEventModelAppReferences(e, t) {
          var a;
          const n = e.GetDescriptionWithFallback(t),
            r = l.ParseEventAppReferencesFromText(n);
          if (
            null === (a = e.jsondata) || void 0 === a
              ? void 0
              : a.referenced_appids
          )
            for (const t of e.jsondata.referenced_appids) r.add(t);
          return r;
        }
        async BuildBroadcasterSteamIDToActiveEventMap(e) {
          const t = s.HD.GetTimeNowWithOverride(),
            a = e.GetCalendarItemsInTimeRange(t - 3600, t);
          for (const e of a.rgCalendarItems)
            i.O3.QueueLoadPartnerEvent(e.clanid, e.unique_id);
          const n = a.rgCalendarItems.map((e) =>
              i.O3.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                o.b.InitFromClanID(e.clanid),
                e.unique_id,
                0,
              ),
            ),
            r = await Promise.all(n),
            l = new Map();
          for (const e of r)
            if (e && !(e.endTime && e.endTime < t))
              for (const t of e.GetBroadcastWhitelistAsSteamIDs())
                l.has(t) ? l.get(t).push(e) : l.set(t, [e]);
          return l;
        }
        IsBroadcasterAlreadyBound(e, t) {
          const a = this.m_mapBroadcasterSteamIDToEvents.get(e),
            n = a ? a.length : 0;
          if ((t ? t.length : 0) != n) return !1;
          for (let e = 0; e < n; e++) if (a[e] != t[e].GID) return !1;
          return !0;
        }
        static BuildSteamIDToPresenterMapFromEventList(e, t) {
          let a = new Map();
          for (const n of e) {
            if (!n) continue;
            const e = l.ParseEventModelPresenters(n, t);
            for (const t of e)
              t.steamID && a.set(t.steamID.ConvertTo64BitString(), t);
          }
          return a;
        }
        RemoveCachedDataIfNotInMap(e) {
          const t = new Array();
          this.m_mapBroadcasterSteamIDToEvents.forEach((a, n) => {
            e.has(n) || t.push(n);
          }),
            t.forEach((e) => {
              this.m_mapBroadcasterSteamIDData.delete(e),
                this.m_mapBroadcasterSteamIDToEvents.delete(e);
            });
        }
        static BuildAppIDRefsForEventList(e, t) {
          const a = new Set();
          for (const n of e) {
            l.ParseEventModelAppReferences(n, t).forEach((e) => a.add(e));
          }
          return Array.from(a);
        }
        UpdateCachedDataFromEvents(e, t) {
          e.forEach((e, a) => {
            if (this.IsBroadcasterAlreadyBound(a, e)) return;
            const n = {
              m_mapPresenters: l.BuildSteamIDToPresenterMapFromEventList(e, t),
              m_rgAppIDs: l.BuildAppIDRefsForEventList(e, t),
            };
            this.m_mapBroadcasterSteamIDData.set(a, n),
              this.m_mapBroadcasterSteamIDToEvents.set(
                a,
                e.map((e) => e.GID),
              );
          });
        }
        async SynchronizeEventsWithBroadcasts(e, t) {
          const a = await this.BuildBroadcasterSteamIDToActiveEventMap(e);
          this.RemoveCachedDataIfNotInMap(a),
            this.UpdateCachedDataFromEvents(a, t);
        }
        GetPresenterMapForBroadcasterSteamID(e) {
          var t;
          return null === (t = this.m_mapBroadcasterSteamIDData.get(e)) ||
            void 0 === t
            ? void 0
            : t.m_mapPresenters;
        }
        GetAppIDListForBroadcasterSteamID(e) {
          var t;
          return null === (t = this.m_mapBroadcasterSteamIDData.get(e)) ||
            void 0 === t
            ? void 0
            : t.m_rgAppIDs;
        }
      }
      (0, n.Cg)([r.sH], l.prototype, "m_mapBroadcasterSteamIDData", void 0);
      const c = new l();
    },
    35685: (e, t, a) => {
      "use strict";
      a.d(t, { kH: () => x, rN: () => O, uY: () => Q, zA: () => L });
      var n = a(22837),
        r = a(41735),
        o = a.n(r),
        s = a(75844),
        i = a(65946),
        l = a(90626),
        c = a(57876),
        m = a(32381),
        d = a(40094),
        u = a(70078),
        p = a(17720),
        v = a(71138),
        E = a(4796),
        h = a(46067),
        _ = a(60746),
        A = a(55263),
        S = a(8107),
        f = a(3919),
        g = a(95695),
        B = a.n(g),
        C = a(72860),
        b = a(76684),
        I = a(12155),
        w = a(32630),
        D = a(62490),
        y = a(52038),
        T = a(61859),
        N = a(78327),
        k = a(84811),
        G = a(22797),
        P = a(33924),
        M = a.n(P),
        R = a(29863),
        U = a(18654),
        H = a.n(U);
      const O = (0, s.PA)((e) => {
          const {
              clanAccountID: t,
              gidAnnouncement: a,
              partnerEventStore: n,
              trackingLocation: r,
              bViewAllShowInfiniteScroll: s,
            } = e,
            i = p.b.InitFromClanID(t),
            c = (0, l.useRef)(null),
            [u, v] = (0, l.useState)(null),
            [h, A] = (0, l.useState)(!0),
            [g, C] = (0, l.useState)(!1);
          if (
            ((0, l.useEffect)(
              () => (
                (async () => {
                  c.current &&
                    c.current("PartnerEventRow Initializng new mount");
                  const e = o().CancelToken.source();
                  c.current = e.cancel;
                  const s = p.b.InitFromClanID(t);
                  await E.ac.LoadClanInfoForClanSteamID(s);
                  let i = await n.LoadAdjacentPartnerEventsByAnnouncement(
                    a,
                    s,
                    null,
                    4,
                    4,
                    void 0,
                    e,
                  );
                  if (!e.token.reason) {
                    i = i || [];
                    let e = i
                      .filter((e) => e.GetAnnouncementGID() != a)
                      .map((e) => e.AnnouncementGID);
                    D.fW(e);
                    const t = e
                      .slice(0, 3)
                      .map((e) => n.GetClanEventFromAnnouncementGID(e));
                    if ((v(t), A(!1), r)) {
                      let e = _.KN.Get().GetTracker(),
                        o = !1;
                      if (n.BHasClanAnnouncementGID(a)) {
                        let t = n.GetClanEventFromAnnouncementGID(a);
                        t &&
                          t.BIsPartnerEvent() &&
                          t.BIsVisibleEvent() &&
                          (e.MarkEventRead(
                            t.GID,
                            t.clanSteamID.GetAccountID(),
                            r,
                          ),
                          (o = !0));
                      }
                      t.length > 0 &&
                        (i
                          .filter((e) => e.BIsPartnerEvent())
                          .forEach((t) =>
                            e.MarkEventShown(
                              t.GID,
                              t.clanSteamID.GetAccountID(),
                              r,
                            ),
                          ),
                        (o = !0)),
                        o && e.Flush();
                    }
                  }
                })(),
                () => {
                  c.current && c.current("PartnerEventRow: unmounting");
                }
              ),
              [t, a, n, r],
            ),
            h)
          )
            return l.createElement(G.t, { position: "center", size: "medium" });
          if (0 == u.length) return l.createElement("div", null);
          const b = E.ac.GetClanInfoByClanAccountID(t);
          return l.createElement(
            k.tH,
            null,
            l.createElement(
              "div",
              { className: (0, y.A)(M().OtherEventsCtn, "OtherEventsCtn") },
              l.createElement(
                "div",
                { className: B().EventSectionTitleCtn },
                l.createElement(
                  "div",
                  {
                    className: (0, y.A)(
                      B().EventSectionTitle,
                      "EventSectionTitle",
                    ),
                  },
                  (0, T.PP)("#EventBrowse_MoreEventsTitle", b.group_name),
                  " ",
                ),
                l.createElement(
                  "div",
                  { className: B().EventSectionSpacer },
                  " ",
                ),
                s
                  ? l.createElement(
                      "div",
                      {
                        className: B().EventSectionMoreBtn,
                        onClick: () => C(!0),
                      },
                      (0, T.we)("#EventBrowse_MoreEventsBtn"),
                    )
                  : l.createElement(
                      f.tj,
                      {
                        eventModel: u[0],
                        route: f.PH.k_eViewWebSiteHub,
                        className: B().EventSectionMoreBtn,
                      },
                      (0, T.we)("#EventBrowse_MoreEventsBtn"),
                    ),
              ),
              l.createElement(
                m.Z,
                {
                  className: M().OtherEvents,
                  "flow-children": "column",
                  navEntryPreferPosition: d.iU.PREFERRED_CHILD,
                },
                u.map((e) =>
                  l.createElement(Q, { key: e.AnnouncementGID, event: e }),
                ),
              ),
              Boolean(g) &&
                l.createElement(S.N, {
                  appid: u[0].appid,
                  clanSteamID: i,
                  announcementGID: u[0].AnnouncementGID,
                  closeModal: () => C(!1),
                  partnerEventStore: n,
                }),
            ),
          );
        }),
        F = 30;
      function Q(e) {
        const {
            event: t,
            imageURLOverride: a,
            bShowAssociatedApp: r,
            langOverride: o,
            onClick: s,
            eEventRount: c,
            bHidePrices: m,
          } = e,
          [d, p, E, _, S, g, B, C] = (0, i.q3)(() => {
            const e = o || (0, n.sf)(N.TS.LANGUAGE),
              r = Boolean(void 0 !== a)
                ? a
                : t.GetImageURLWithFallback("capsule", e, v.wI.capsule_main),
              s = Boolean(void 0 !== a)
                ? a
                : t.GetImageURLWithFallback("capsule", e, v.wI.full);
            return [
              t.appid,
              r,
              t.GetNameWithFallback(e) || "",
              t.GetCategoryAsString(),
              t.GetSummaryWithFallback(e),
              (0, u.j3)(r),
              (0, u.j3)(s),
              t.GetSubTitleWithLanguageFallback(e) || "",
            ];
          }),
          [I] = (0, A.t7)(d, { include_assets: !0, include_screenshots: !0 }),
          [w, D] = (0, l.useState)(void 0);
        if (
          ((0, l.useEffect)(() => {
            const e = new Image();
            (e.src = p),
              (e.onload = () => {
                D(g);
              }),
              (e.onerror = () => {
                D(B);
              });
          }, [g, p, B]),
          !t)
        )
          return l.createElement("div", {
            className: M().OtherEvents_EventCtn,
          });
        if (!I && d)
          return l.createElement(G.t, {
            className: M().OtherEvents_EventCtn,
            size: "small",
            position: "center",
            string: (0, T.we)("#Loading"),
          });
        const k = (0, h.v0)().GetStoreInitializationTimestamp().getTime() / 1e3,
          P = t ? t.GetStartTimeAndDateUnixSeconds() : 0;
        let R = C;
        return (
          C && (C.length > F || E.length > F) && (R = void 0),
          l.createElement(
            l.Fragment,
            null,
            l.createElement(
              f.tj,
              {
                className: (0, y.A)(
                  M().OtherEvents_EventCtn,
                  "OtherEvents_EventCtn",
                  M().HoversEnabled,
                ),
                eventModel: t,
                route: c || f.PH.k_eView,
                onClick: s,
                preferredFocus: !0,
              },
              l.createElement(
                "div",
                { className: M().EventSummaryContainer },
                l.createElement("div", { className: M().EventSummaryType }, _),
                l.createElement("div", { className: M().EventSummaryText }, S),
              ),
              l.createElement("div", {
                className: M().OtherEvents_BGImage,
                style: {
                  backgroundColor: "#ffffff",
                  backgroundImage: w ? `url(${w})` : "none",
                },
              }),
              l.createElement(
                "div",
                { className: M().OtherEvents_ContentCtn },
                l.createElement(
                  "div",
                  { className: M().OtherEvents_MainImageCtn },
                  l.createElement("img", {
                    src: w || p,
                    className: M().OtherEvents_MainImage,
                  }),
                ),
                l.createElement(
                  "div",
                  { className: M().OtherEvents_TextCtn },
                  l.createElement(
                    "div",
                    { className: M().OtherEvents_TextTitle },
                    E,
                  ),
                  Boolean(R) &&
                    l.createElement(
                      "div",
                      { className: M().OtherEvents_SubTitle },
                      R,
                    ),
                  Boolean(P > k)
                    ? l.createElement(
                        "div",
                        { className: (0, y.A)(M().UpcomingCtn, "UpcomingCtn") },
                        l.createElement(b.K4, {
                          bSingleLine: !0,
                          dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                        }),
                      )
                    : l.createElement(b.K4, {
                        bSingleLine: !0,
                        bOnlyDate: !0,
                        dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                      }),
                ),
              ),
            ),
            Boolean(r && t.appid) &&
              l.createElement(L, { appid: t.appid, bHidePrice: m }),
          )
        );
      }
      function L(e) {
        const { appid: t, bHidePrice: a } = e,
          [n] = (0, A.t7)(t, c.Xh),
          r = (0, w.n9)(),
          o = (0, N.Qn)();
        if (!n) return null;
        const s = n.GetBestPurchaseOption(),
          i = (null == s ? void 0 : s.hide_discount_pct_for_compliance) && !0;
        return l.createElement(
          m.Z,
          {
            className: (0, y.A)(M().AppCapsuleCtn, "AppCapsuleCtn"),
            ...(0, C.S)(n, r, o),
          },
          l.createElement(
            R.Qf,
            {
              item: { type: "game", id: t },
              hoverProps: {
                direction: "overlay",
                style: { minWidth: "320px" },
              },
            },
            l.createElement("img", {
              className: M().AppCapsuleImage,
              src: n.GetAssets().GetSmallCapsuleURL(),
            }),
          ),
          Boolean(!a && !n.BIsFree()) &&
            l.createElement(
              "span",
              {
                className: (0, y.A)(
                  M().AppCapsulePrice,
                  Boolean(null == s ? void 0 : s.discount_pct)
                    ? H().Discounted
                    : "",
                ),
              },
              Boolean((null == s ? void 0 : s.discount_pct) && i) &&
                l.createElement(
                  "div",
                  { className: H().DiscountIconCtn },
                  l.createElement(I.XH_, null),
                ),
              Boolean((null == s ? void 0 : s.discount_pct) && !i) &&
                l.createElement(
                  "span",
                  { className: H().StoreSaleDiscountBox },
                  `-${null == s ? void 0 : s.discount_pct}%`,
                ),
              Boolean(s.final_price_in_cents) &&
                l.createElement(
                  "span",
                  { className: H().StoreSalePriceBox },
                  s.formatted_final_price,
                ),
            ),
        );
      }
      function x(e) {
        const { event: t, imageURLOverride: a, onClick: r } = e,
          o = (0, n.sf)(N.TS.LANGUAGE),
          [s, c, m] = (0, i.q3)(() =>
            t
              ? [
                  void 0 !== a
                    ? a
                    : t.GetImageURLWithFallback(
                        "capsule",
                        o,
                        v.wI.capsule_main,
                      ),
                  t.GetNameWithFallback(o),
                  t.GetCategoryAsString(),
                ]
              : [void 0, void 0, void 0],
          );
        return t
          ? l.createElement(
              f.tj,
              {
                className: M().OtherEvents_EventCtn + " " + M().HorizontalEvent,
                eventModel: t,
                route: f.PH.k_eView,
                onClick: r,
              },
              l.createElement(
                "div",
                { className: M().OtherEvents_ContentCtn },
                l.createElement(
                  "div",
                  { className: M().OtherEvents_MainImageCtn },
                  l.createElement("img", {
                    src: s,
                    className: M().OtherEvents_MainImage,
                  }),
                ),
              ),
              l.createElement(
                "div",
                { className: M().OtherEvents_TextCtn },
                l.createElement(
                  "div",
                  { className: M().HorizontalDescriptionCtn },
                  l.createElement(
                    "div",
                    { className: M().HorizontalDescription },
                    m,
                  ),
                  l.createElement(b.K4, {
                    bSingleLine: !0,
                    dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                  }),
                ),
                l.createElement("div", { className: M().HorizontalTitle }, c),
              ),
            )
          : l.createElement("div", { className: M().OtherEvents_EventCtn });
      }
    },
    95034: (e, t, a) => {
      "use strict";
      a.d(t, { Bm: () => i, QD: () => l, f3: () => o, ip: () => c });
      var n = a(90626),
        r = a(92757);
      function o(e, t) {
        let a;
        "string" == typeof e
          ? (a = e)
          : "location" in e
            ? (a = e.location.search)
            : "search" in e && (a = e.search);
        const n = new URLSearchParams(a.substring(1));
        if (n.has(t)) {
          const e = n.getAll(t);
          return e[e.length - 1];
        }
      }
      const s = (e) => null != e;
      function i(e, t, a, n = !1) {
        const r = new URLSearchParams(e.location.search.substring(1));
        r.delete(t),
          s(a) && r.append(t, a),
          n
            ? e.replace(`?${r.toString()}`, { ...e.location.state })
            : e.push(`?${r.toString()}`);
      }
      function l(e, t) {
        const a = (0, r.W6)(),
          l = (0, r.zy)(),
          c = (0, n.useMemo)(() => {
            const a = o(l.search, e);
            return s(a)
              ? s(t)
                ? "boolean" == typeof t
                  ? t.constructor("false" !== a)
                  : t.constructor(a)
                : a
              : t;
          }, [l.search, e, t]),
          m = (0, n.useCallback)(
            (t) => {
              i(a, e, s(t) ? String(t) : null);
            },
            [a, e],
          );
        return [c, m];
      }
      function c(e, t, a = !1) {
        const n = new URLSearchParams(e.location.search.substring(1));
        for (const e in t)
          if (t.hasOwnProperty(e)) {
            const a = t[e];
            n.delete(e), s(a) && n.append(e, a);
          }
        a
          ? e.replace(`?${n.toString()}`, { ...e.location.state })
          : e.push(`?${n.toString()}`);
      }
    },
  },
]);
