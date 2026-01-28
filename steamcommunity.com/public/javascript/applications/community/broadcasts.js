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
    35261: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => ve });
      a(64641);
      var n = a(90626),
        r = a(92757),
        l = a(97058),
        o = a(41735),
        s = a.n(o),
        c = a(34629),
        i = a(14947),
        d = a(17720),
        m = a(54728),
        u = a(68797),
        _ = a(78327);
      class p {
        constructor() {
          (this.m_bShowOnlyVideo = !1),
            (this.m_bShowOnlyChat = !1),
            (this.m_curDebugInfo = null),
            (0, i.Gn)(this);
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
          let t = _.TS.COMMUNITY_BASE_URL + "broadcast/broadcastdebuginfo",
            a = {
              steamid: this.m_steamid.ConvertTo64BitString(),
              origin: self.origin,
            };
          try {
            let n = await s().get(t, {
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
          let n = _.TS.COMMUNITY_BASE_URL + "broadcast/updatebroadcastsettings",
            r = {
              steamid: this.m_steamid.ConvertTo64BitString(),
              matchid: e,
              title: t,
              sessionid: _.TS.SESSIONID,
            };
          try {
            let e = await s().get(n, {
              params: r,
              withCredentials: !0,
              cancelToken: a ? a.token : void 0,
            });
            if (a && a.token.reason) return !1;
            if (e && 200 == e.status && e.data && 1 == e.data.success) {
              const e = m.es.GetOrCreateBroadcastInfo(
                this.m_steamid.ConvertTo64BitString(),
              );
              return (
                e &&
                  (0, i.h5)(() => {
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
            a = m.es.GetBroadcast(t);
          let n = _.TS.COMMUNITY_BASE_URL + "broadcast/stopbroadcast",
            r = {
              steamid: t,
              broadcastid: a ? a.m_ulBroadcastID : null,
              sessionid: _.TS.SESSIONID,
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
            r = m.es.GetBroadcast(n);
          let l = _.TS.COMMUNITY_BASE_URL + "broadcast/setbroadcastrestriction",
            o = {
              steamid: n,
              broadcastid: r ? r.m_ulBroadcastID : null,
              type: e,
              days: t,
              sessionid: _.TS.SESSIONID,
            };
          return await this.InternalSendSimpleGetRequest(
            "SetBroadcasterRestrictions",
            l,
            o,
            a,
          );
        }
        async SetUnBannable(e) {
          const t = this.m_steamid.ConvertTo64BitString(),
            a = m.es.GetBroadcast(t);
          let n = _.TS.COMMUNITY_BASE_URL + "broadcast/unban",
            r = {
              steamid: t,
              broadcastid: a ? a.m_ulBroadcastID : null,
              sessionid: _.TS.SESSIONID,
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
            a = m.es.GetBroadcast(t);
          let n = _.TS.COMMUNITY_BASE_URL + "broadcast/report",
            r = {
              steamid: t,
              broadcastid: a ? a.m_ulBroadcastID : null,
              description: e,
              sessionid: _.TS.SESSIONID,
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
            let e = await s().get(t, {
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
            p.s_Singleton || ((p.s_Singleton = new p()), p.s_Singleton.Init()),
            p.s_Singleton
          );
        }
        Init() {
          let e = (0, _.Tc)("broadcastsinfo", "application_config");
          this.ValidateStoreDefault(e) &&
            ((this.m_steamid = new d.b(e.steamid)),
            (this.m_bShowOnlyChat = Boolean(e.show_only_chat)),
            (this.m_bShowOnlyVideo = Boolean(e.show_only_video)));
        }
        ValidateStoreDefault(e) {
          return !(!e || "object" != typeof e) && "string" == typeof e.steamid;
        }
      }
      (0, c.Cg)([i.sH], p.prototype, "m_curDebugInfo", void 0);
      var E = a(75844),
        S = a(39606),
        v = a(72224),
        h = a(53120),
        g = a.n(h),
        B = a(34010),
        C = a(4796),
        b = a(68255),
        f = a(84811),
        w = a(35685),
        I = a(95034),
        y = a(95695),
        D = a.n(y),
        T = a(41399),
        N = a(9154),
        A = a(738),
        k = a(52038),
        O = a(56011),
        G = a(61859),
        R = a(14932),
        U = a(76684),
        M = a(82227),
        H = a(17337);
      const P = (e) => {
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
              f.tH,
              null,
              n.createElement(
                "div",
                { className: (0, k.A)(H.Container) },
                n.createElement(
                  "div",
                  { className: H.Controls },
                  n.createElement(
                    b.$n,
                    {
                      onClick: async () => {
                        t.current && t.current();
                        const e = s().CancelToken.source();
                        (t.current = e.cancel),
                          r(await p.Get().LoadBroadcastDebugInfo(e));
                      },
                    },
                    "(VO) Load Debug Info",
                  ),
                ),
                n.createElement(f.tH, null, n.createElement(V, { info: a })),
              ),
            )
          );
        },
        V = (e) => {
          var t;
          const { info: a } = e,
            [r, l] = (0, n.useState)(!1);
          if (!a) return null;
          const o = p.Get().GetBroadcasterSteamID().ConvertTo64BitString(),
            s = m.es.GetBroadcast(o);
          return n.createElement(
            "div",
            { className: H.DisplaySection },
            Boolean(a.last_error_result && 1 != a.last_error_result) &&
              n.createElement(
                "div",
                { className: H.SubSection },
                n.createElement("div", { className: H.Header }, "Error"),
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
              { className: H.SubSection },
              n.createElement(
                "div",
                { className: H.Header },
                "Broadcast Setup",
              ),
              n.createElement(
                "div",
                null,
                "Broadcaster: ",
                a.steam_id,
                ", SteamID: ",
                o,
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
              { className: H.SubSection },
              n.createElement("div", { className: H.Header }, "Ingester Info"),
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
                (0, M.dm)(a.upload_total_bytes_uploaded || 0, 1),
                " ) ",
              ),
            ),
            Boolean(a.transcode_server) &&
              n.createElement(
                "div",
                { className: H.SubSection },
                n.createElement(
                  "div",
                  { className: H.Header },
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
              { className: H.SubSection },
              n.createElement("div", { className: H.Header }, "Origin Info"),
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
                      (0, M.dm)(e.memory_used, 2),
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
              (0, M.dm)(a.origin_audio_stream.memory_used, 2),
              " )",
            ),
            n.createElement(
              "div",
              { className: H.SubSection },
              n.createElement("div", { className: H.Header }, "Viewer Info"),
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
              { className: H.SubSection },
              n.createElement("div", { className: H.Header }, "Settings"),
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
              { className: H.SubSection },
              n.createElement("div", { className: H.Header }, "App Info"),
              n.createElement("div", null, "appid: ", a.app_id),
              n.createElement("div", null, "app name: ", a.app_name),
              n.createElement("div", null, "broadcast title: ", a.title),
              n.createElement("div", null, "thumbnail: ", a.thumbnail_url),
              Boolean(a.thumbnail_url) &&
                n.createElement("img", { src: a.thumbnail_url }),
              Boolean(a.app_id && a.app_id > 0) &&
                n.createElement(
                  "div",
                  { className: H.AppSummaryWidgetCtn },
                  n.createElement(T.p, {
                    id: a.app_id,
                    type: "game",
                    bPreferAssetWithoutOverride: !1,
                  }),
                ),
            ),
            n.createElement(
              "div",
              { className: H.SubSection },
              n.createElement(
                "div",
                { className: H.Header },
                "Manifest Information",
              ),
              n.createElement(
                "div",
                null,
                "Heartbeat Interval: ",
                s.m_data.heartbeat_interval,
              ),
              n.createElement("div", null, "DASH MPEG Url: ", s.m_data.url),
              n.createElement("div", null, "HLS Url: ", s.m_data.hls_url),
            ),
            n.createElement(b.$n, { onClick: () => l(!r) }, "Toggle Raw Data"),
            Boolean(r) &&
              n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  "div",
                  { className: H.SubSection },
                  n.createElement(R.G, { data: a }),
                ),
                n.createElement(
                  "div",
                  { className: H.SubSection },
                  n.createElement(R.G, {
                    data: (null == s ? void 0 : s.m_data) || "",
                  }),
                ),
              ),
          );
        };
      var L = a(98371),
        q = a(1035),
        x = a(41471),
        F = a(16971);
      const Y = (e) => {
        const t = e.steamid.GetAccountID(),
          { data: a } = (0, x.hW)(t);
        return n.createElement(
          "div",
          { className: F.AvatarCtn },
          n.createElement(
            "a",
            {
              href: a.GetCommunityProfileURL(),
              "data-miniprofile": "s" + e.steamid.ConvertTo64BitString(),
            },
            n.createElement(q.i8, {
              persona: a,
              size: e.size,
              statusPosition: "bottom",
            }),
          ),
          n.createElement(
            "div",
            { className: F.NameAndProps },
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
      var X = a(65946),
        W = a(55263),
        $ = a(82477),
        z = a(12155),
        K = a(51272),
        j = a(61336),
        Q = a(46699),
        J = a(32754),
        Z = a(6083);
      function ee(e) {
        const { broadcasterSteamID: t } = e,
          a = t.ConvertTo64BitString(),
          [r, l] = (0, X.q3)(() => {
            const e = m.es.GetOrCreateBroadcastInfo(a);
            let t = e.m_nAppID != m.fO ? e.m_nAppID : 0;
            return [e.m_nViewerCount, t];
          }),
          [o] = (0, W.t7)(l, { include_assets: !0 });
        let s = null == o ? void 0 : o.GetAssets().GetMainCapsuleURL(),
          c = s && s.length > 0;
        return n.createElement(
          f.tH,
          null,
          n.createElement(
            "div",
            { className: Q.ProfileCtn },
            c &&
              n.createElement(
                "a",
                {
                  className: Q.GameCapsule,
                  href: (0, j.k2)(
                    (null == o ? void 0 : o.GetStorePageURL()) ||
                      _.TS.STORE_BASE_URL + "app/" + l,
                  ),
                },
                n.createElement("img", { src: s }),
              ),
            n.createElement(
              "div",
              { className: Q.StreamDetailsCtn },
              n.createElement(
                "div",
                { className: Q.GameAndOptionsCtn },
                n.createElement(
                  "div",
                  { className: Q.GameAndViewersCtn },
                  n.createElement(te, { broadcasterSteamID: t }),
                  n.createElement(
                    "div",
                    { className: Q.ViewerCount },
                    (0, G.Yp)("#Broadcast_ViewerCount", (0, Z.D)(r)),
                  ),
                ),
                n.createElement(ae, { broadcasterSteamID: t }),
              ),
              n.createElement(Y, { steamid: t, size: "Medium", bShowName: !0 }),
            ),
          ),
        );
      }
      const te = (0, E.PA)((e) => {
          const { broadcasterSteamID: t } = e,
            a = t.ConvertTo64BitString(),
            [r, l] = (0, X.q3)(() => {
              const e = m.es.GetOrCreateBroadcastInfo(a);
              let t = e.m_nAppID != m.fO ? e.m_nAppID : 0;
              return [e.m_strAppTitle, t];
            }),
            [o] = (0, W.t7)(l, { include_assets: !0 });
          return n.createElement(
            "div",
            { className: Q.BroadcastTitleCtn },
            (0, G.we)("#Broadcast_Playing"),
            n.createElement(
              "a",
              {
                href: (0, j.k2)(
                  (null == o ? void 0 : o.GetStorePageURL()) ||
                    _.TS.STORE_BASE_URL + "app/" + l,
                ),
              },
              Boolean(r) ? r : null == o ? void 0 : o.GetName(),
            ),
            Boolean((null == r ? void 0 : r.length) > 0) &&
              n.createElement("span", null, " - ", r),
          );
        }),
        ae = (0, E.PA)((e) => {
          const { broadcasterSteamID: t } = e;
          t.ConvertTo64BitString();
          return n.createElement(
            "div",
            { className: Q.BroadcastUserActionsCtn },
            Boolean(
              _.iA.steamid != e.broadcasterSteamID.ConvertTo64BitString(),
            ) &&
              n.createElement(
                b.$n,
                {
                  onClick: (e) => {
                    _.iA.logged_in
                      ? (0, A.pg)(
                          n.createElement(ne, { broadcasterSteamID: t }),
                          (0, O.uX)(e),
                        )
                      : (0, A.pg)(
                          n.createElement(N.o0, {
                            strTitle: (0, G.we)(
                              "#EventDisplay_Share_NotLoggedIn",
                            ),
                            strDescription: (0, G.we)(
                              "#EventDisplay_Share_NotLoggedIn_Description",
                            ),
                            strOKButtonText: (0, G.we)("#MobileLogin_SignIn"),
                            onOK: () => (0, $.vg)(),
                          }),
                          (0, O.uX)(e),
                        );
                  },
                },
                n.createElement(
                  J.he,
                  { toolTipContent: (0, G.we)("#Broadcast_User_Report_ttip") },
                  n.createElement(z.lNU, null),
                ),
              ),
            n.createElement(
              b.$n,
              {
                onClick: (e) =>
                  (0, K.EP)(
                    e,
                    "https://help.steampowered.com/faqs/view/548F-BC55-89EB-1BC8",
                  ),
              },
              n.createElement(
                J.he,
                { toolTipContent: (0, G.we)("#Broadcast_User_FAQ_ttip") },
                n.createElement(z.$$j, null),
              ),
            ),
          );
        }),
        ne = (e) => {
          const [t, a] = (0, n.useState)("");
          return n.createElement(
            N.o0,
            {
              strTitle: (0, G.we)("#Broadcast_ReportItem_Title"),
              strDescription: (0, G.we)("#Broadcast_ReportItem_Description"),
              onCancel: e.closeModal,
              bOKDisabled: 0 == t.trim().length,
              onOK: async () => {
                await p.Get().SendUserReportOnBroadcast(t),
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
      var re = a(30593),
        le = a(22797);
      const oe = (e) => {
          if (!_.iA.is_support) return null;
          const t = (t, a) => {
              (0, A.pg)(
                n.createElement(se, {
                  broadcastSteamID: e.broadcastSteamID,
                  strAction: a,
                }),
                (0, O.uX)(t),
              );
            },
            a =
              "https://steamsupport.valvesoftware.com/account/overview/" +
              e.broadcastSteamID.ConvertTo64BitString();
          return n.createElement(
            "div",
            { className: (0, k.A)(re.AdminControls, D().ValveOnlyBackground) },
            n.createElement("div", null, "(VO) Support Tools"),
            n.createElement(
              b.$n,
              { onClick: (e) => t(e, "frontpage") },
              "Remove from Front Page",
            ),
            n.createElement(
              b.$n,
              { onClick: (e) => t(e, "ban") },
              "Ban from Broadcasting",
            ),
            n.createElement(
              b.$n,
              {
                onClick: (t) => {
                  (0, A.pg)(
                    n.createElement(ce, { steamid: e.broadcastSteamID }),
                    (0, O.uX)(t),
                  );
                },
              },
              "Make Unbannable",
            ),
            n.createElement(
              b.$n,
              { onClick: (e) => (0, K.EP)(e, a) },
              "Go to Support Page",
            ),
          );
        },
        se = (0, E.PA)((e) => {
          const { broadcastSteamID: t, strAction: a } = e,
            [r, l] = (0, n.useState)(1),
            [o, c] = (0, n.useState)(!1),
            [i, d] = (0, n.useState)(!1),
            [m, u] = (0, n.useState)(!1),
            _ = (0, n.useRef)(null);
          (0, n.useEffect)(
            () => () => {
              _.current && _.current("BroadcastConfirmBanAction: unmounting");
            },
            [],
          );
          const E = () => e.closeModal && e.closeModal();
          return n.createElement(
            f.tH,
            null,
            n.createElement(
              N.x_,
              { onEscKeypress: E },
              n.createElement(
                b.UC,
                null,
                n.createElement(
                  b.Y9,
                  null,
                  "frontpage" == a
                    ? "Remove Broadcast From Front Page"
                    : "Ban from Broadcasting",
                ),
                n.createElement(
                  b.nB,
                  null,
                  n.createElement(
                    b.a3,
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
                      n.createElement(b.m, {
                        rgOptions: [
                          { label: "1 Day", data: 1 },
                          { label: "1 Week", data: 7 },
                          { label: "1 Month", data: 30 },
                          { label: "6 Months", data: 180 },
                          { label: "1 Year", data: 365 },
                        ],
                        selectedOption: r,
                        onChange: (e) => l(e.data),
                      }),
                      Boolean(o) && n.createElement(le.t, null),
                      Boolean(i) &&
                        n.createElement(
                          "div",
                          null,
                          m
                            ? "Successfully Completed Request"
                            : "Failed to complete request, check browser console and/or try again later",
                        ),
                    ),
                  ),
                ),
                n.createElement(
                  b.wi,
                  null,
                  i
                    ? n.createElement(
                        b.jn,
                        { onClick: E },
                        (0, G.we)("#Button_Dismiss"),
                      )
                    : n.createElement(
                        b.dR,
                        null,
                        n.createElement(
                          b.$n,
                          { onClick: E },
                          (0, G.we)("#Button_Cancel"),
                        ),
                        n.createElement(
                          b.jn,
                          {
                            onClick: async () => {
                              c(!0);
                              try {
                                _.current && _.current();
                                const e = s().CancelToken.source();
                                _.current = e.cancel;
                                let t = await p
                                  .Get()
                                  .SetBroadcasterRestrictions(a, r, e);
                                e.token.reason || (t = !0);
                              } finally {
                                c(!1), d(!0), u(false);
                              }
                            },
                          },
                          (0, G.we)("#Button_Confirm"),
                        ),
                      ),
                ),
              ),
            ),
          );
        }),
        ce = (e) => {
          const [t, a] = (0, n.useState)(!1),
            [r, l] = (0, n.useState)(!1),
            [o, c] = (0, n.useState)(!1),
            i = (0, n.useRef)(null);
          (0, n.useEffect)(
            () => () => {
              i.current && i.current("BroadcastMakeUnbannable: unmounting");
            },
            [],
          );
          const d = () => e.closeModal && e.closeModal();
          return n.createElement(
            f.tH,
            null,
            n.createElement(
              N.x_,
              { onEscKeypress: d },
              n.createElement(
                b.UC,
                null,
                n.createElement(b.Y9, null, "Make Broadcast Unbannable"),
                n.createElement(
                  b.nB,
                  null,
                  n.createElement(
                    b.a3,
                    null,
                    n.createElement(
                      "p",
                      null,
                      "Prevent automatic, report based banning changes to this strema visibility the stream for 1 week?",
                    ),
                    n.createElement(
                      "div",
                      null,
                      Boolean(t) && n.createElement(le.t, null),
                      Boolean(r) &&
                        n.createElement(
                          "div",
                          null,
                          o
                            ? "Successfully Set Unbannable"
                            : "Failed to make Unbannable",
                        ),
                    ),
                  ),
                ),
                n.createElement(
                  b.wi,
                  null,
                  r
                    ? n.createElement(
                        b.jn,
                        { onClick: d },
                        (0, G.we)("#Button_Dismiss"),
                      )
                    : n.createElement(
                        b.dR,
                        null,
                        n.createElement(
                          b.$n,
                          { onClick: d },
                          (0, G.we)("#Button_Cancel"),
                        ),
                        n.createElement(
                          b.jn,
                          {
                            onClick: async () => {
                              a(!0);
                              let e = !1;
                              try {
                                i.current && i.current();
                                const t = s().CancelToken.source();
                                (i.current = t.cancel),
                                  (e = await p.Get().SetUnBannable(t));
                              } finally {
                                a(!1), l(!0), c(e);
                              }
                            },
                          },
                          (0, G.we)("#Button_Confirm"),
                        ),
                      ),
                ),
              ),
            ),
          );
        };
      var ie = a(26408),
        de = a(25918);
      const me = (0, E.PA)((e) => {
        const t = p.Get().GetBroadcasterSteamID(),
          a = null == t ? void 0 : t.ConvertTo64BitString(),
          r = (function () {
            const [e] = (0, n.useState)(
              () => (0, _.Tc)("ewatchlocation", "application_config") || 5,
            );
            return e;
          })(),
          [l, o] = (0, I.QD)("muted", !0),
          s = m.es.GetBroadcast(a),
          c = m.es.GetOrCreateBroadcastInfo(a);
        return a
          ? n.createElement(
              n.Fragment,
              null,
              n.createElement(
                "div",
                { className: (0, k.A)(L.BroadcastPage) },
                n.createElement(
                  "div",
                  { className: (0, k.A)(g().BroadcastAndChat) },
                  Boolean(!p.Get().BShowOnlyChat()) &&
                    n.createElement(
                      f.tH,
                      null,
                      n.createElement(
                        "div",
                        { className: (0, k.A)(g().wrapper) },
                        n.createElement(
                          "div",
                          {
                            className: (0, k.A)({
                              [g().video_placeholder]: !0,
                              video_placeholder_trgt: !0,
                              [g().NoChat]: p.Get().BShowOnlyVideo(),
                            }),
                          },
                          n.createElement(
                            "div",
                            { className: g().BroadcastPlayerContainer },
                            n.createElement(
                              f.tH,
                              null,
                              n.createElement(v.default, {
                                steamIDBroadcast: a,
                                watchLocation: r,
                                bStartMuted: l,
                              }),
                            ),
                          ),
                        ),
                      ),
                    ),
                  Boolean(!p.Get().BShowOnlyVideo()) &&
                    n.createElement(
                      "div",
                      { className: g().detail_chat_ctn },
                      n.createElement(
                        "div",
                        { className: g().ChatContainer },
                        n.createElement(
                          f.tH,
                          null,
                          n.createElement(S.I, {
                            emoticonStore: B.MX,
                            watchLocation: 6,
                            steamID: a,
                            broadcastID: s ? s.m_ulBroadcastID : void 0,
                          }),
                        ),
                      ),
                    ),
                ),
                Boolean(!p.Get().BShowInIframe()) &&
                  n.createElement(_e, {
                    broadcasterSteamID: t,
                    broadcastInfo: c,
                  }),
              ),
            )
          : null;
      });
      function ue(e) {
        return 0 != e && e != m.fO;
      }
      const _e = (0, E.PA)((e) => {
          const { broadcasterSteamID: t, broadcastInfo: a } = e,
            [r, l] = (0, n.useState)(null);
          let o = a.m_nAppID;
          return (
            (0, n.useEffect)(() => {
              ue(o) &&
                (async () => {
                  let e = await C.ac.LoadOGGClanInfoForAppID(o);
                  l(e);
                })();
            }, [o]),
            n.createElement(
              n.Fragment,
              null,
              n.createElement(ee, { broadcasterSteamID: t }),
              n.createElement(pe, { steamid: t }),
              Boolean(_.iA.is_support) &&
                n.createElement(
                  "div",
                  null,
                  n.createElement(oe, { broadcastSteamID: t }),
                  n.createElement(
                    "div",
                    {
                      className: (0, k.A)(D().ValveOnlyBackground, L.DebugCtn),
                    },
                    n.createElement(P, null),
                  ),
                ),
              ue(o) &&
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
                      (0, G.we)("#Broadcast_About_Game"),
                      " ",
                    ),
                    n.createElement(
                      "div",
                      { className: D().EventSectionSpacer },
                      " ",
                    ),
                  ),
                  n.createElement(
                    "div",
                    { className: L.GameInfo },
                    n.createElement(T.p, {
                      id: Number.parseInt(a.m_strAppId),
                      type: "game",
                      bPreferAssetWithoutOverride: !1,
                    }),
                  ),
                ),
              Boolean(r) &&
                n.createElement(
                  "div",
                  { className: L.RelatedEvents },
                  n.createElement(w.rN, {
                    clanAccountID: r.clanAccountID,
                    trackingLocation: 6,
                    partnerEventStore: de.Av,
                    bViewAllShowInfiniteScroll: !0,
                  }),
                ),
            )
          );
        }),
        pe = (0, E.PA)((e) => {
          const t = (0, n.useRef)(null);
          let a = m.es.GetOrCreateBroadcastInfo(
            e.steamid.ConvertTo64BitString(),
          );
          const [r, l] = (0, n.useState)(a.m_strTitle),
            [o, c] = (0, n.useState)(""),
            [i, d] = (0, n.useState)(null);
          if (
            ((0, n.useEffect)(
              () => (
                l(a.m_strTitle),
                () => {
                  t.current && t.current("BroadcastControls: unmounting");
                }
              ),
              [a.m_strTitle],
            ),
            _.iA.accountid != e.steamid.GetAccountID())
          )
            return null;
          return n.createElement(
            "div",
            { className: L.ControlCtn },
            n.createElement(
              "div",
              { className: L.ControlsTitle },
              (0, G.we)("#Broadcaster_Control_title"),
            ),
            n.createElement(
              "div",
              { className: L.TitleInput },
              n.createElement(
                "div",
                { className: L.Options },
                n.createElement(b.pd, {
                  type: "text",
                  label: (0, G.we)("#Broadcast_title_title"),
                  onChange: (e) => l(e.currentTarget.value || ""),
                  placeholder: (0, G.we)("#Broadcast_title_placeholder"),
                  value: r,
                }),
                n.createElement(b.pd, {
                  type: "text",
                  label: (0, G.we)("#Broadcast_Control_matchid"),
                  onChange: (e) => c(e.currentTarget.value || ""),
                  value: o,
                }),
                n.createElement(
                  b.$n,
                  {
                    onClick: async () => {
                      t.current && t.current();
                      const e = s().CancelToken.source();
                      t.current = e.cancel;
                      let a = await p.Get().UpdateBroadcastSettings(o, r, e);
                      e.token.reason ||
                        d(
                          (0, G.we)(
                            a
                              ? "#Broadcast_Control_Success"
                              : "#Broadcast_Control_Failure",
                          ),
                        );
                    },
                  },
                  (0, G.we)("#Broadcast_save_changes"),
                  n.createElement(ie.o, {
                    tooltip: (0, G.we)("#Broadcast_save_title_ttip"),
                  }),
                ),
              ),
              n.createElement(
                "div",
                { className: L.StopCtn },
                n.createElement(
                  b.$n,
                  {
                    onClick: (e) => {
                      (0, A.pg)(
                        n.createElement(N.o0, {
                          strTitle: (0, G.we)(
                            "#Broadcast_Control_StopBroadcast",
                          ),
                          strDescription: (0, G.we)(
                            "#EventEditor_GenericAreYouSure",
                          ),
                          onOK: async () => {
                            t.current && t.current();
                            const e = s().CancelToken.source();
                            t.current = e.cancel;
                            let a = await p.Get().StopBroadcast(e);
                            e.token.reason ||
                              d(
                                (0, G.we)(
                                  a
                                    ? "#Broadcast_Control_StopSuccess"
                                    : "#Broadcast_Control_StopFailure",
                                ),
                              );
                          },
                        }),
                        (0, O.uX)(e),
                      );
                    },
                  },
                  (0, G.we)("#Broadcast_Control_StopBroadcast"),
                ),
                Boolean(i) && n.createElement("div", null, i),
              ),
            ),
          );
        });
      var Ee = a(60746);
      let Se = { BroadcastWatch: (e) => `/broadcast/(watch|watchnew)/${e}` };
      function ve(e) {
        const [t, a] = n.useState(!0);
        return (
          (0, n.useEffect)(() => {
            t && Ee.KN.InitGlobal().then(() => a(!1));
          }, [t]),
          t
            ? n.createElement(le.t, {
                string: (0, G.we)("#Loading"),
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
                    path: Se.BroadcastWatch(":steamid_or_user_vanity"),
                    render: (e) =>
                      n.createElement(me, {
                        strSteamID: e.match.params.steamid_or_user_vanity,
                      }),
                  }),
                  n.createElement(r.qh, { component: l.a }),
                ),
              )
        );
      }
    },
  },
]);
