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
        narrowWidth: "500px",
        avatarHolder: "nibodjvvrm86uCfnnAn4g",
        avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
        avatar: "_3h-QRJGxnVOIExtHD1R0f2",
        avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
        avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
      };
    },
    35261: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => ge });
      var s = a(7850),
        r = (a(64641), a(92757)),
        n = a(97058),
        i = a(41735),
        o = a.n(i),
        l = a(34629),
        d = a(14947),
        c = a(37085),
        m = a(17720),
        u = a(54728),
        h = a(68797),
        p = a(78327);
      class A {
        constructor() {
          (this.m_bShowOnlyVideo = !1),
            (this.m_bShowOnlyChat = !1),
            (this.m_curDebugInfo = null),
            (0, d.Gn)(this);
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
            let s = await o().get(t, {
              params: a,
              withCredentials: !0,
              cancelToken: e ? e.token : void 0,
            });
            if (e && e.token.reason) return null;
            if (s && 200 == s.status && s.data && s.data.success == c.R)
              return (this.m_curDebugInfo = s.data), this.m_curDebugInfo;
          } catch (e) {
            let t = (0, h.H)(e);
            console.error("LoadBroadcastDebugInfo: Failed " + t.strErrorMsg, t);
          }
          return null;
        }
        async UpdateBroadcastSettings(e, t, a) {
          let s = p.TS.COMMUNITY_BASE_URL + "broadcast/updatebroadcastsettings",
            r = {
              steamid: this.m_steamid.ConvertTo64BitString(),
              matchid: e,
              title: t,
              sessionid: (0, p.KC)(),
            };
          try {
            let e = await o().get(s, {
              params: r,
              withCredentials: !0,
              cancelToken: a ? a.token : void 0,
            });
            if (a && a.token.reason) return !1;
            if (e && 200 == e.status && e.data && e.data.success == c.R) {
              const e = u.es.GetOrCreateBroadcastInfo(
                this.m_steamid.ConvertTo64BitString(),
              );
              return (
                e &&
                  (0, d.h5)(() => {
                    e.m_strTitle = t;
                  }),
                !0
              );
            }
          } catch (e) {
            let t = (0, h.H)(e);
            console.error(
              "UpdateBroadcastSettings: Failed " + t.strErrorMsg,
              t,
            );
          }
          return !1;
        }
        async StopBroadcast(e) {
          const t = this.m_steamid.ConvertTo64BitString(),
            a = u.es.GetBroadcast(t);
          let s = p.TS.COMMUNITY_BASE_URL + "broadcast/stopbroadcast",
            r = {
              steamid: t,
              broadcastid: a ? a.m_ulBroadcastID : null,
              sessionid: (0, p.KC)(),
            };
          return await this.InternalSendSimpleGetRequest(
            "StopBroadcast",
            s,
            r,
            e,
          );
        }
        async SetBroadcasterRestrictions(e, t, a) {
          const s = this.m_steamid.ConvertTo64BitString(),
            r = u.es.GetBroadcast(s);
          let n = p.TS.COMMUNITY_BASE_URL + "broadcast/setbroadcastrestriction",
            i = {
              steamid: s,
              broadcastid: r ? r.m_ulBroadcastID : null,
              type: e,
              days: t,
              sessionid: (0, p.KC)(),
            };
          return await this.InternalSendSimpleGetRequest(
            "SetBroadcasterRestrictions",
            n,
            i,
            a,
          );
        }
        async SetUnBannable(e) {
          const t = this.m_steamid.ConvertTo64BitString(),
            a = u.es.GetBroadcast(t);
          let s = p.TS.COMMUNITY_BASE_URL + "broadcast/unban",
            r = {
              steamid: t,
              broadcastid: a ? a.m_ulBroadcastID : null,
              sessionid: (0, p.KC)(),
            };
          return await this.InternalSendSimpleGetRequest(
            "SetUnBannable",
            s,
            r,
            e,
          );
        }
        async SendUserReportOnBroadcast(e) {
          const t = this.m_steamid.ConvertTo64BitString(),
            a = u.es.GetBroadcast(t);
          let s = p.TS.COMMUNITY_BASE_URL + "broadcast/report",
            r = {
              steamid: t,
              broadcastid: a ? a.m_ulBroadcastID : null,
              description: e,
              sessionid: (0, p.KC)(),
            };
          return await this.InternalSendSimpleGetRequest(
            "SendUserReportOnBroadcast",
            s,
            r,
            null,
          );
        }
        async InternalSendSimpleGetRequest(e, t, a, s) {
          try {
            let e = await o().get(t, {
              params: a,
              withCredentials: !0,
              cancelToken: s ? s.token : void 0,
            });
            if (s && s.token.reason) return !1;
            if (e && 200 == e.status && e.data && e.data.success == c.R)
              return !0;
          } catch (t) {
            let a = (0, h.H)(t);
            console.error(
              `CCommunityBroadcastStore:${e}: Failed ` + a.strErrorMsg,
              a,
            );
          }
          return !1;
        }
        static Get() {
          return (
            A.s_Singleton || ((A.s_Singleton = new A()), A.s_Singleton.Init()),
            A.s_Singleton
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
      (0, l.Cg)([d.sH], A.prototype, "m_curDebugInfo", void 0);
      var _ = a(75844),
        B = a(90626),
        v = a(39606),
        S = a(67397),
        g = a(53120),
        x = a.n(g),
        j = a(55815),
        C = a(43261),
        f = a(34010),
        b = a(4796),
        w = a(68255),
        I = a(84811),
        D = a(87057),
        T = a(95034),
        E = a(95695),
        N = a.n(E),
        y = a(41399),
        Q = a(9154),
        U = a(738),
        R = a(52038),
        k = a(56011),
        G = a(61859),
        H = a(14932),
        M = a(34121),
        O = a(82227),
        P = a(17337);
      const F = (e) => {
          const t = (0, B.useRef)(null),
            [a, r] = (0, B.useState)(null);
          return (
            (0, B.useEffect)(
              () => () => {
                t.current && t.current("BroadcastDebugSection: unmounting");
              },
              [],
            ),
            (0, s.jsx)(I.tH, {
              children: (0, s.jsxs)("div", {
                className: (0, R.A)(P.Container),
                children: [
                  (0, s.jsx)("div", {
                    className: P.Controls,
                    children: (0, s.jsx)(w.$n, {
                      onClick: async () => {
                        t.current && t.current();
                        const e = o().CancelToken.source();
                        (t.current = e.cancel),
                          r(await A.Get().LoadBroadcastDebugInfo(e));
                      },
                      children: "(VO) Load Debug Info",
                    }),
                  }),
                  (0, s.jsx)(I.tH, { children: (0, s.jsx)(L, { info: a }) }),
                ],
              }),
            })
          );
        },
        L = (e) => {
          var t;
          const { info: a } = e,
            [r, n] = (0, B.useState)(!1);
          if (!a) return null;
          const i = A.Get().GetBroadcasterSteamID().ConvertTo64BitString(),
            o = u.es.GetBroadcast(i);
          return (0, s.jsxs)("div", {
            className: P.DisplaySection,
            children: [
              Boolean(a.last_error_result && a.last_error_result != c.R) &&
                (0, s.jsxs)("div", {
                  className: P.SubSection,
                  children: [
                    (0, s.jsx)("div", {
                      className: P.Header,
                      children: "Error",
                    }),
                    (0, s.jsxs)("div", {
                      children: [
                        "EResult: ",
                        a.last_error_result,
                        ", occurred ",
                        a.last_error_time,
                        " - ",
                        (0, s.jsx)(M.K4, {
                          dateAndTime: a.last_error_time,
                          bSingleLine: !0,
                        }),
                      ],
                    }),
                  ],
                }),
              (0, s.jsxs)("div", {
                className: P.SubSection,
                children: [
                  (0, s.jsx)("div", {
                    className: P.Header,
                    children: "Broadcast Setup",
                  }),
                  (0, s.jsxs)("div", {
                    children: ["Broadcaster: ", a.steam_id, ", SteamID: ", i],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "Directory Server: ",
                      a.directory_server,
                      ", SessionID: ",
                      a.broadcast_id,
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "Ingester Server: ",
                      a.relay_server,
                      ", UploadID: ",
                      a.upload_id,
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: ["Origin Server: ", a.origin_server],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "Chat Server: ",
                      a.chat_server,
                      ", chat_id: ",
                      a.chat_id,
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: ["Transcoder Server : ", a.transcode_server],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: P.SubSection,
                children: [
                  (0, s.jsx)("div", {
                    className: P.Header,
                    children: "Ingester Info",
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "Client: ",
                      a.remote_address,
                      " ",
                      Boolean(a.is_rtmp) ? "(RTMP)" : "(STEAM CLIENT)",
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "Video Config: ",
                      a.upload_height,
                      "x",
                      a.upload_width,
                      "@",
                      a.upload_fps,
                      ", ",
                      a.upload_bandwidth,
                      " kbps ",
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "Audio Config: ",
                      a.upload_audio_channels,
                      "x",
                      a.upload_audio_samplerate,
                      "Hz, ",
                      a.upload_audio_bitrate / 1e3,
                      " kbps ",
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "Upload Stats: ",
                      a.upload_avg_fps,
                      " FPS, ",
                      a.upload_avg_bandwidth,
                      " kbps, ",
                      a.upload_avg_key_interval,
                      " msec key frame interval",
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "Upload Totals: ",
                      a.upload_total_frames_received,
                      " video frames,  ",
                      Math.round(
                        (a.upload_current_video_pts -
                          a.upload_first_video_pts) /
                          a.upload_video_timescale,
                      ),
                      " seconds ( ",
                      (0, O.dm)(a.upload_total_bytes_uploaded || 0, 1),
                      " ) ",
                    ],
                  }),
                ],
              }),
              Boolean(a.transcode_server) &&
                (0, s.jsxs)("div", {
                  className: P.SubSection,
                  children: [
                    (0, s.jsx)("div", {
                      className: P.Header,
                      children: "Transcoder Info",
                    }),
                    (0, s.jsxs)("div", {
                      children: [
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
                      ],
                    }),
                    a.transcoder_streams.map((e) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          children: [
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
                          ],
                        },
                        e.representation_id,
                      ),
                    ),
                  ],
                }),
              (0, s.jsxs)("div", {
                className: P.SubSection,
                children: [
                  (0, s.jsx)("div", {
                    className: P.Header,
                    children: "Origin Info",
                  }),
                  null === (t = null == a ? void 0 : a.origin_video_streams) ||
                  void 0 === t
                    ? void 0
                    : t.map((e) =>
                        (0, s.jsxs)(
                          "div",
                          {
                            children: [
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
                              (0, O.dm)(e.memory_used, 2),
                              " )",
                            ],
                          },
                          e.representation_id,
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
                  (0, O.dm)(a.origin_audio_stream.memory_used, 2),
                  " )",
                ],
              }),
              (0, s.jsxs)("div", {
                className: P.SubSection,
                children: [
                  (0, s.jsx)("div", {
                    className: P.Header,
                    children: "Viewer Info",
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "Viewers: ",
                      a.current_viewers,
                      " current (",
                      a.current_anon_viewers,
                      " anonymous), ",
                      a.total_unique_viewers,
                      " total unique, ",
                      a.max_concurrent_viewers,
                      " max concurrent",
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "Average time watched: ",
                      a.average_watch_duration,
                      " seconds",
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "Last Minute: ",
                      a.added_viewers_last_minute,
                      " watch requests, ",
                      a.rejected_viewers_last_minute,
                      " rejected",
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: ["Restrictions: ", a.restriction],
                  }),
                  (0, s.jsx)("div", { children: a.extra_viewer_info }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: P.SubSection,
                children: [
                  (0, s.jsx)("div", {
                    className: P.Header,
                    children: "Settings",
                  }),
                  (0, s.jsxs)("div", {
                    children: ["is replay? ", a.is_replay],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "is replay local file? ",
                      a.is_replay_local_file,
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: ["is replay clip? ", a.is_replay_clip],
                  }),
                  (0, s.jsxs)("div", {
                    children: ["is capturing VOD? ", a.is_capturing_vod],
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "is white listed for store streaming? ",
                      a.is_whitelisted,
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: P.SubSection,
                children: [
                  (0, s.jsx)("div", {
                    className: P.Header,
                    children: "App Info",
                  }),
                  (0, s.jsxs)("div", { children: ["appid: ", a.app_id] }),
                  (0, s.jsxs)("div", { children: ["app name: ", a.app_name] }),
                  (0, s.jsxs)("div", {
                    children: ["broadcast title: ", a.title],
                  }),
                  (0, s.jsxs)("div", {
                    children: ["thumbnail: ", a.thumbnail_url],
                  }),
                  Boolean(a.thumbnail_url) &&
                    (0, s.jsx)("img", { src: a.thumbnail_url }),
                  Boolean(a.app_id && a.app_id > 0) &&
                    (0, s.jsx)("div", {
                      className: P.AppSummaryWidgetCtn,
                      children: (0, s.jsx)(y.p, {
                        id: a.app_id,
                        type: "game",
                        bPreferAssetWithoutOverride: !1,
                      }),
                    }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: P.SubSection,
                children: [
                  (0, s.jsx)("div", {
                    className: P.Header,
                    children: "Manifest Information",
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      "Heartbeat Interval: ",
                      o.m_data.heartbeat_interval,
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    children: ["DASH MPEG Url: ", o.m_data.url],
                  }),
                  (0, s.jsxs)("div", {
                    children: ["HLS Url: ", o.m_data.hls_url],
                  }),
                ],
              }),
              (0, s.jsx)(w.$n, {
                onClick: () => n(!r),
                children: "Toggle Raw Data",
              }),
              Boolean(r) &&
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)("div", {
                      className: P.SubSection,
                      children: (0, s.jsx)(H.G, { data: a }),
                    }),
                    (0, s.jsx)("div", {
                      className: P.SubSection,
                      children: (0, s.jsx)(H.G, {
                        data: (null == o ? void 0 : o.m_data) || "",
                      }),
                    }),
                  ],
                }),
            ],
          });
        };
      var K = a(98371),
        V = a(1035),
        J = a(41471),
        W = a(16971);
      const q = (e) => {
        const t = e.steamid.GetAccountID(),
          { data: a } = (0, J.hW)(t);
        return (0, s.jsxs)("div", {
          className: W.AvatarCtn,
          children: [
            (0, s.jsx)("a", {
              href: a.GetCommunityProfileURL(),
              "data-miniprofile": "s" + e.steamid.ConvertTo64BitString(),
              children: (0, s.jsx)(V.i8, {
                persona: a,
                size: e.size,
                statusPosition: "bottom",
              }),
            }),
            (0, s.jsxs)("div", {
              className: W.NameAndProps,
              children: [
                Boolean(e.bShowName) &&
                  (0, s.jsx)("a", {
                    href: a.GetCommunityProfileURL(),
                    "data-miniprofile": "s" + e.steamid.ConvertTo64BitString(),
                    children: a.m_strProfileURL,
                  }),
                e.children,
              ],
            }),
          ],
        });
      };
      var X = a(65946),
        Y = a(55263),
        Z = a(82477),
        z = a(12155),
        $ = a(51272),
        ee = a(61336),
        te = a(46699),
        ae = a(32754),
        se = a(6083);
      function re(e) {
        const { broadcasterSteamID: t } = e,
          a = t.ConvertTo64BitString(),
          [r, n] = (0, X.q3)(() => {
            const e = u.es.GetOrCreateBroadcastInfo(a);
            let t = e.m_nAppID != u.fO ? e.m_nAppID : 0;
            return [e.m_nViewerCount, t];
          }),
          [i] = (0, Y.t7)(n, { include_assets: !0 });
        let o = null == i ? void 0 : i.GetAssets().GetMainCapsuleURL(),
          l = o && o.length > 0;
        return (0, s.jsx)(I.tH, {
          children: (0, s.jsxs)("div", {
            className: te.ProfileCtn,
            children: [
              l &&
                (0, s.jsx)("a", {
                  className: te.GameCapsule,
                  href: (0, ee.k2)(
                    (null == i ? void 0 : i.GetStorePageURL()) ||
                      p.TS.STORE_BASE_URL + "app/" + n,
                  ),
                  children: (0, s.jsx)("img", { src: o }),
                }),
              (0, s.jsxs)("div", {
                className: te.StreamDetailsCtn,
                children: [
                  (0, s.jsxs)("div", {
                    className: te.GameAndOptionsCtn,
                    children: [
                      (0, s.jsxs)("div", {
                        className: te.GameAndViewersCtn,
                        children: [
                          (0, s.jsx)(ne, { broadcasterSteamID: t }),
                          (0, s.jsx)("div", {
                            className: te.ViewerCount,
                            children: (0, G.Yp)(
                              "#Broadcast_ViewerCount",
                              (0, se.D)(r),
                            ),
                          }),
                        ],
                      }),
                      (0, s.jsx)(ie, { broadcasterSteamID: t }),
                    ],
                  }),
                  (0, s.jsx)(q, { steamid: t, size: "Medium", bShowName: !0 }),
                ],
              }),
            ],
          }),
        });
      }
      const ne = (0, _.PA)((e) => {
          const { broadcasterSteamID: t } = e,
            a = t.ConvertTo64BitString(),
            [r, n] = (0, X.q3)(() => {
              const e = u.es.GetOrCreateBroadcastInfo(a);
              let t = e.m_nAppID != u.fO ? e.m_nAppID : 0;
              return [e.m_strAppTitle, t];
            }),
            [i] = (0, Y.t7)(n, { include_assets: !0 });
          return (0, s.jsxs)("div", {
            className: te.BroadcastTitleCtn,
            children: [
              (0, G.we)("#Broadcast_Playing"),
              (0, s.jsx)("a", {
                href: (0, ee.k2)(
                  (null == i ? void 0 : i.GetStorePageURL()) ||
                    p.TS.STORE_BASE_URL + "app/" + n,
                ),
                children: Boolean(r) ? r : null == i ? void 0 : i.GetName(),
              }),
              Boolean((null == r ? void 0 : r.length) > 0) &&
                (0, s.jsxs)("span", { children: [" - ", r] }),
            ],
          });
        }),
        ie = (0, _.PA)((e) => {
          const { broadcasterSteamID: t } = e;
          t.ConvertTo64BitString();
          return (0, s.jsxs)("div", {
            className: te.BroadcastUserActionsCtn,
            children: [
              Boolean(
                p.iA.steamid != e.broadcasterSteamID.ConvertTo64BitString(),
              ) &&
                (0, s.jsx)(w.$n, {
                  onClick: (e) => {
                    p.iA.logged_in
                      ? (0, U.pg)(
                          (0, s.jsx)(oe, { broadcasterSteamID: t }),
                          (0, k.uX)(e),
                        )
                      : (0, U.pg)(
                          (0, s.jsx)(Q.o0, {
                            strTitle: (0, G.we)(
                              "#EventDisplay_Share_NotLoggedIn",
                            ),
                            strDescription: (0, G.we)(
                              "#EventDisplay_Share_NotLoggedIn_Description",
                            ),
                            strOKButtonText: (0, G.we)("#MobileLogin_SignIn"),
                            onOK: () => (0, Z.vg)(),
                          }),
                          (0, k.uX)(e),
                        );
                  },
                  children: (0, s.jsx)(ae.he, {
                    toolTipContent: (0, G.we)("#Broadcast_User_Report_ttip"),
                    children: (0, s.jsx)(z.lNU, {}),
                  }),
                }),
              (0, s.jsx)(w.$n, {
                onClick: (e) =>
                  (0, $.EP)(
                    e,
                    "https://help.steampowered.com/faqs/view/548F-BC55-89EB-1BC8",
                  ),
                children: (0, s.jsx)(ae.he, {
                  toolTipContent: (0, G.we)("#Broadcast_User_FAQ_ttip"),
                  children: (0, s.jsx)(z.$$j, {}),
                }),
              }),
            ],
          });
        }),
        oe = (e) => {
          const [t, a] = (0, B.useState)("");
          return (0, s.jsx)(Q.o0, {
            strTitle: (0, G.we)("#Broadcast_ReportItem_Title"),
            strDescription: (0, G.we)("#Broadcast_ReportItem_Description"),
            onCancel: e.closeModal,
            bOKDisabled: 0 == t.trim().length,
            onOK: async () => {
              await A.Get().SendUserReportOnBroadcast(t),
                e.closeModal && e.closeModal();
            },
            children: (0, s.jsx)("textarea", {
              value: t,
              onChange: (e) => a(e.currentTarget.value),
              rows: 10,
              cols: 80,
            }),
          });
        };
      var le = a(30593),
        de = a(22797);
      const ce = (e) => {
          if (!p.iA.is_support) return null;
          const t = (t, a) => {
              (0, U.pg)(
                (0, s.jsx)(me, {
                  broadcastSteamID: e.broadcastSteamID,
                  strAction: a,
                }),
                (0, k.uX)(t),
              );
            },
            a =
              "https://steamsupport.valvesoftware.com/account/overview/" +
              e.broadcastSteamID.ConvertTo64BitString();
          return (0, s.jsxs)("div", {
            className: (0, R.A)(le.AdminControls, N().ValveOnlyBackground),
            children: [
              (0, s.jsx)("div", { children: "(VO) Support Tools" }),
              (0, s.jsx)(w.$n, {
                onClick: (e) => t(e, "frontpage"),
                children: "Remove from Front Page",
              }),
              (0, s.jsx)(w.$n, {
                onClick: (e) => t(e, "ban"),
                children: "Ban from Broadcasting",
              }),
              (0, s.jsx)(w.$n, {
                onClick: (t) => {
                  (0, U.pg)(
                    (0, s.jsx)(ue, { steamid: e.broadcastSteamID }),
                    (0, k.uX)(t),
                  );
                },
                children: "Make Unbannable",
              }),
              (0, s.jsx)(w.$n, {
                onClick: (e) => (0, $.EP)(e, a),
                children: "Go to Support Page",
              }),
            ],
          });
        },
        me = (0, _.PA)((e) => {
          const { broadcastSteamID: t, strAction: a } = e,
            [r, n] = (0, B.useState)(1),
            [i, l] = (0, B.useState)(!1),
            [d, c] = (0, B.useState)(!1),
            [m, u] = (0, B.useState)(!1),
            h = (0, B.useRef)(null);
          (0, B.useEffect)(
            () => () => {
              h.current && h.current("BroadcastConfirmBanAction: unmounting");
            },
            [],
          );
          const p = () => e.closeModal && e.closeModal();
          return (0, s.jsx)(I.tH, {
            children: (0, s.jsx)(Q.x_, {
              onEscKeypress: p,
              children: (0, s.jsxs)(w.UC, {
                children: [
                  (0, s.jsx)(w.Y9, {
                    children:
                      "frontpage" == a
                        ? "Remove Broadcast From Front Page"
                        : "Ban from Broadcasting",
                  }),
                  (0, s.jsx)(w.nB, {
                    children: (0, s.jsxs)(w.a3, {
                      children: [
                        (0, s.jsx)("p", {
                          children:
                            "frontpage" == a
                              ? "How long should we prevent the broadcast from appearing in community or store?"
                              : "How long should we prevent the user from Broadcast at all on Steam?",
                        }),
                        (0, s.jsxs)("div", {
                          children: [
                            (0, s.jsx)(w.m, {
                              rgOptions: [
                                { label: "1 Day", data: 1 },
                                { label: "1 Week", data: 7 },
                                { label: "1 Month", data: 30 },
                                { label: "6 Months", data: 180 },
                                { label: "1 Year", data: 365 },
                              ],
                              selectedOption: r,
                              onChange: (e) => n(e.data),
                            }),
                            Boolean(i) && (0, s.jsx)(de.t, {}),
                            Boolean(d) &&
                              (0, s.jsx)("div", {
                                children: m
                                  ? "Successfully Completed Request"
                                  : "Failed to complete request, check browser console and/or try again later",
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)(w.wi, {
                    children: d
                      ? (0, s.jsx)(w.jn, {
                          onClick: p,
                          children: (0, G.we)("#Button_Dismiss"),
                        })
                      : (0, s.jsxs)(w.dR, {
                          children: [
                            (0, s.jsx)(w.$n, {
                              onClick: p,
                              children: (0, G.we)("#Button_Cancel"),
                            }),
                            (0, s.jsx)(w.jn, {
                              onClick: async () => {
                                l(!0);
                                try {
                                  h.current && h.current();
                                  const e = o().CancelToken.source();
                                  h.current = e.cancel;
                                  let t =
                                    await A.Get().SetBroadcasterRestrictions(
                                      a,
                                      r,
                                      e,
                                    );
                                  e.token.reason || (t = !0);
                                } finally {
                                  l(!1), c(!0), u(false);
                                }
                              },
                              children: (0, G.we)("#Button_Confirm"),
                            }),
                          ],
                        }),
                  }),
                ],
              }),
            }),
          });
        }),
        ue = (e) => {
          const [t, a] = (0, B.useState)(!1),
            [r, n] = (0, B.useState)(!1),
            [i, l] = (0, B.useState)(!1),
            d = (0, B.useRef)(null);
          (0, B.useEffect)(
            () => () => {
              d.current && d.current("BroadcastMakeUnbannable: unmounting");
            },
            [],
          );
          const c = () => e.closeModal && e.closeModal();
          return (0, s.jsx)(I.tH, {
            children: (0, s.jsx)(Q.x_, {
              onEscKeypress: c,
              children: (0, s.jsxs)(w.UC, {
                children: [
                  (0, s.jsx)(w.Y9, { children: "Make Broadcast Unbannable" }),
                  (0, s.jsx)(w.nB, {
                    children: (0, s.jsxs)(w.a3, {
                      children: [
                        (0, s.jsx)("p", {
                          children:
                            "Prevent automatic, report based banning changes to this strema visibility the stream for 1 week?",
                        }),
                        (0, s.jsxs)("div", {
                          children: [
                            Boolean(t) && (0, s.jsx)(de.t, {}),
                            Boolean(r) &&
                              (0, s.jsx)("div", {
                                children: i
                                  ? "Successfully Set Unbannable"
                                  : "Failed to make Unbannable",
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)(w.wi, {
                    children: r
                      ? (0, s.jsx)(w.jn, {
                          onClick: c,
                          children: (0, G.we)("#Button_Dismiss"),
                        })
                      : (0, s.jsxs)(w.dR, {
                          children: [
                            (0, s.jsx)(w.$n, {
                              onClick: c,
                              children: (0, G.we)("#Button_Cancel"),
                            }),
                            (0, s.jsx)(w.jn, {
                              onClick: async () => {
                                a(!0);
                                let e = !1;
                                try {
                                  d.current && d.current();
                                  const t = o().CancelToken.source();
                                  (d.current = t.cancel),
                                    (e = await A.Get().SetUnBannable(t));
                                } finally {
                                  a(!1), n(!0), l(e);
                                }
                              },
                              children: (0, G.we)("#Button_Confirm"),
                            }),
                          ],
                        }),
                  }),
                ],
              }),
            }),
          });
        };
      var he = a(26408),
        pe = a(25888);
      const Ae = (0, _.PA)((e) => {
        const t = A.Get().GetBroadcasterSteamID(),
          a = null == t ? void 0 : t.ConvertTo64BitString(),
          r = (function () {
            const [e] = (0, B.useState)(
              () =>
                (0, p.Tc)("ewatchlocation", "application_config") || j.nn.CJ,
            );
            return e;
          })(),
          [n, i] = (0, T.QD)("muted", !0),
          o = u.es.GetBroadcast(a),
          l = u.es.GetOrCreateBroadcastInfo(a);
        return a
          ? (0, s.jsx)(s.Fragment, {
              children: (0, s.jsxs)("div", {
                className: (0, R.A)(K.BroadcastPage),
                children: [
                  (0, s.jsxs)("div", {
                    className: (0, R.A)(x().BroadcastAndChat),
                    children: [
                      Boolean(!A.Get().BShowOnlyChat()) &&
                        (0, s.jsx)(I.tH, {
                          children: (0, s.jsx)("div", {
                            className: (0, R.A)(x().wrapper),
                            children: (0, s.jsx)("div", {
                              className: (0, R.A)({
                                [x().video_placeholder]: !0,
                                video_placeholder_trgt: !0,
                                [x().NoChat]: A.Get().BShowOnlyVideo(),
                              }),
                              children: (0, s.jsx)("div", {
                                className: x().BroadcastPlayerContainer,
                                children: (0, s.jsx)(I.tH, {
                                  children: (0, s.jsx)(S.default, {
                                    steamIDBroadcast: a,
                                    watchLocation: r,
                                    bStartMuted: n,
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                      Boolean(!A.Get().BShowOnlyVideo()) &&
                        (0, s.jsx)("div", {
                          className: x().detail_chat_ctn,
                          children: (0, s.jsx)("div", {
                            className: x().ChatContainer,
                            children: (0, s.jsx)(I.tH, {
                              children: (0, s.jsx)(v.I, {
                                emoticonStore: f.MX,
                                watchLocation: j.nn.fe,
                                steamID: a,
                                broadcastID: o ? o.m_ulBroadcastID : void 0,
                              }),
                            }),
                          }),
                        }),
                    ],
                  }),
                  Boolean(!A.Get().BShowInIframe()) &&
                    (0, s.jsx)(Be, { broadcasterSteamID: t, broadcastInfo: l }),
                ],
              }),
            })
          : null;
      });
      function _e(e) {
        return 0 != e && e != u.fO;
      }
      const Be = (0, _.PA)((e) => {
          const { broadcasterSteamID: t, broadcastInfo: a } = e,
            [r, n] = (0, B.useState)(null);
          let i = a.m_nAppID;
          return (
            (0, B.useEffect)(() => {
              _e(i) &&
                (async () => {
                  let e = await b.ac.LoadOGGClanInfoForAppID(i);
                  n(e);
                })();
            }, [i]),
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(re, { broadcasterSteamID: t }),
                (0, s.jsx)(ve, { steamid: t }),
                Boolean(p.iA.is_support) &&
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)(ce, { broadcastSteamID: t }),
                      (0, s.jsx)("div", {
                        className: (0, R.A)(
                          N().ValveOnlyBackground,
                          K.DebugCtn,
                        ),
                        children: (0, s.jsx)(F, {}),
                      }),
                    ],
                  }),
                _e(i) &&
                  (0, s.jsxs)("div", {
                    className: K.GameInfoCtn,
                    children: [
                      (0, s.jsxs)("div", {
                        className: K.GameAboutTitleCtn,
                        children: [
                          (0, s.jsxs)("div", {
                            className: K.GameAboutTitle,
                            children: [
                              " ",
                              (0, G.we)("#Broadcast_About_Game"),
                              " ",
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className: N().EventSectionSpacer,
                            children: " ",
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: K.GameInfo,
                        children: (0, s.jsx)(y.p, {
                          id: Number.parseInt(a.m_strAppId),
                          type: "game",
                          bPreferAssetWithoutOverride: !1,
                        }),
                      }),
                    ],
                  }),
                Boolean(r) &&
                  (0, s.jsx)("div", {
                    className: K.RelatedEvents,
                    children: (0, s.jsx)(D.r, {
                      clanAccountID: r.clanAccountID,
                      trackingLocation: C.Tc.My,
                      partnerEventStore: pe.Av,
                      bViewAllShowInfiniteScroll: !0,
                    }),
                  }),
              ],
            })
          );
        }),
        ve = (0, _.PA)((e) => {
          const t = (0, B.useRef)(null);
          let a = u.es.GetOrCreateBroadcastInfo(
            e.steamid.ConvertTo64BitString(),
          );
          const [r, n] = (0, B.useState)(a.m_strTitle),
            [i, l] = (0, B.useState)(""),
            [d, c] = (0, B.useState)(null);
          if (
            ((0, B.useEffect)(
              () => (
                n(a.m_strTitle),
                () => {
                  t.current && t.current("BroadcastControls: unmounting");
                }
              ),
              [a.m_strTitle],
            ),
            p.iA.accountid != e.steamid.GetAccountID())
          )
            return null;
          return (0, s.jsxs)("div", {
            className: K.ControlCtn,
            children: [
              (0, s.jsx)("div", {
                className: K.ControlsTitle,
                children: (0, G.we)("#Broadcaster_Control_title"),
              }),
              (0, s.jsxs)("div", {
                className: K.TitleInput,
                children: [
                  (0, s.jsxs)("div", {
                    className: K.Options,
                    children: [
                      (0, s.jsx)(w.pd, {
                        type: "text",
                        label: (0, G.we)("#Broadcast_title_title"),
                        onChange: (e) => n(e.currentTarget.value || ""),
                        placeholder: (0, G.we)("#Broadcast_title_placeholder"),
                        value: r,
                      }),
                      (0, s.jsx)(w.pd, {
                        type: "text",
                        label: (0, G.we)("#Broadcast_Control_matchid"),
                        onChange: (e) => l(e.currentTarget.value || ""),
                        value: i,
                      }),
                      (0, s.jsxs)(w.$n, {
                        onClick: async () => {
                          t.current && t.current();
                          const e = o().CancelToken.source();
                          t.current = e.cancel;
                          let a = await A.Get().UpdateBroadcastSettings(
                            i,
                            r,
                            e,
                          );
                          e.token.reason ||
                            c(
                              (0, G.we)(
                                a
                                  ? "#Broadcast_Control_Success"
                                  : "#Broadcast_Control_Failure",
                              ),
                            );
                        },
                        children: [
                          (0, G.we)("#Broadcast_save_changes"),
                          (0, s.jsx)(he.o, {
                            tooltip: (0, G.we)("#Broadcast_save_title_ttip"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: K.StopCtn,
                    children: [
                      (0, s.jsx)(w.$n, {
                        onClick: (e) => {
                          (0, U.pg)(
                            (0, s.jsx)(Q.o0, {
                              strTitle: (0, G.we)(
                                "#Broadcast_Control_StopBroadcast",
                              ),
                              strDescription: (0, G.we)(
                                "#EventEditor_GenericAreYouSure",
                              ),
                              onOK: async () => {
                                t.current && t.current();
                                const e = o().CancelToken.source();
                                t.current = e.cancel;
                                let a = await A.Get().StopBroadcast(e);
                                e.token.reason ||
                                  c(
                                    (0, G.we)(
                                      a
                                        ? "#Broadcast_Control_StopSuccess"
                                        : "#Broadcast_Control_StopFailure",
                                    ),
                                  );
                              },
                            }),
                            (0, k.uX)(e),
                          );
                        },
                        children: (0, G.we)("#Broadcast_Control_StopBroadcast"),
                      }),
                      Boolean(d) && (0, s.jsx)("div", { children: d }),
                    ],
                  }),
                ],
              }),
            ],
          });
        });
      let Se = { BroadcastWatch: (e) => `/broadcast/(watch|watchnew)/${e}` };
      function ge(e) {
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsxs)(r.dO, {
            children: [
              (0, s.jsx)(r.qh, {
                path: Se.BroadcastWatch(":steamid_or_user_vanity"),
                render: (e) =>
                  (0, s.jsx)(Ae, {
                    strSteamID: e.match.params.steamid_or_user_vanity,
                  }),
              }),
              (0, s.jsx)(r.qh, { component: n.a }),
            ],
          }),
        });
      }
    },
    1035: (e, t, a) => {
      "use strict";
      a.d(t, { Ul: () => _, i8: () => B });
      var s = a(34629),
        r = a(7850),
        n = a(90626),
        i = a(75844),
        o = a(10622),
        l = a(52038),
        d = a(78327),
        c = a(3088);
      const m =
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
        u =
          a.p +
          "images/applications/community/avatar_default_full.jpg?v=valveisgoodatcaching";
      var h = a(43047),
        p = a.n(h),
        A = a(81393);
      const _ = n.memo(function (e) {
        const {
            strAvatarURL: t,
            size: a = "Medium",
            className: s,
            statusStyle: i,
            statusPosition: o,
            children: d,
            ...h
          } = e,
          _ = n.useMemo(() => {
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
                      return u;
                    default:
                      return (0, A.z_)(e, `Unhandled size ${e}`), m;
                  }
                })(a),
              ),
              e
            );
          }, [t, a]);
        return (0, r.jsxs)("div", {
          className: (0, l.A)(
            p().avatarHolder,
            "avatarHolder",
            "no-drag",
            a,
            s,
          ),
          ...h,
          children: [
            (0, r.jsx)("div", {
              className: (0, l.A)(p().avatarStatus, "avatarStatus", o),
              style: i,
            }),
            (0, r.jsx)(c.c, {
              className: (0, l.A)(p().avatar, "avatar"),
              rgSources: _,
              draggable: !1,
            }),
            d,
          ],
        });
      });
      let B = class extends n.Component {
        render() {
          const {
            persona: e,
            size: t = "Medium",
            animatedAvatar: a,
            className: s,
            strBackupAvatarURL: n,
            ...i
          } = this.props;
          let c = "";
          return (
            a && a.image_small && 0 != a.image_small.length
              ? (c = d.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + a.image_small)
              : e
                ? ((c = e.avatar_url_medium),
                  "Small" == t || "X-Small" == t
                    ? (c = e.avatar_url)
                    : ("Large" != t && "X-Large" != t && "FillArea" != t) ||
                      (c = e.avatar_url_full))
                : n && (c = n),
            (0, r.jsx)(_, {
              strAvatarURL: c,
              size: t,
              className: (0, l.A)((0, o.rO)(e), s),
              ...i,
            })
          );
        }
      };
      B = (0, s.Cg)([i.PA], B);
      const v = (0, i.PA)((e) => {
        const { profileItem: t, className: a, bDisableAnimation: s, ...n } = e;
        if (!t || !t.image_small || 0 == t.image_small.length) return null;
        let i = s ? t.image_large : t.image_small;
        return (
          i || (i = t.image_small),
          i.startsWith("https://") ||
            (i = d.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + i),
          (0, r.jsx)("div", {
            className: (0, l.A)(p().avatarFrame, a, "avatarFrame"),
            ...n,
            children: (0, r.jsx)("img", {
              className: p().avatarFrameImg,
              src: i,
            }),
          })
        );
      });
      let S = class extends n.Component {
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
            children: s,
            style: n,
            bLimitProfileFrameAnimationTime: i,
            bParentHovered: o,
            ...l
          } = this.props;
          l.onClick && (n = { ...n, cursor: "pointer" });
          const d = this.state.bAnimate && null != t ? t : void 0;
          return (0, r.jsx)("div", {
            onMouseEnter: () =>
              this.setState({ bAnimate: "None" != this.props.loopDuration }),
            onMouseLeave: () => this.SetupAnimationTimer(),
            children: (0, r.jsxs)(B, {
              animatedAvatar: d,
              ...l,
              children: [
                s,
                (0, r.jsx)(v, {
                  profileItem: null != a ? a : null,
                  bDisableAnimation: i && !this.state.bAnimate,
                }),
              ],
            }),
          });
        }
      };
      S = (0, s.Cg)([i.PA], S);
    },
  },
]);
