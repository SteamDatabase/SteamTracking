/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5436],
  {
    63024: (e) => {
      e.exports = {
        SubSection: "_3Ac4zk8HfCBpJcfDHwJwfg",
        Header: "_2vrXB5mprkP7EUv5iR8us3",
        AppSummaryWidgetCtn: "_35ozIX3OQwwAVHZP2bRufO",
      };
    },
    8845: (e) => {
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
    421: (e) => {
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
    27842: (e) => {
      e.exports = { AdminControls: "_3KL0bXxikaWzpb1AY27eH0" };
    },
    52248: (e) => {
      e.exports = {
        AvatarCtn: "_3n3n08bcnphB_5qaSwJDyQ",
        NameAndProps: "_3PljhCwFW7qZ0qu22k7frk",
      };
    },
    5870: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => _e });
      a(7765);
      var n = a(47427),
        r = a(8285),
        l = a(69406),
        o = a(85556),
        s = a(80751),
        i = a.n(s),
        c = a(54842),
        d = a(35427),
        m = a(64730),
        u = a(16649),
        _ = a(37563);
      class v {
        constructor() {
          (this.m_bShowOnlyVideo = !1),
            (this.m_bShowOnlyChat = !1),
            (this.m_curDebugInfo = null),
            (0, c.rC)(this);
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
        LoadBroadcastDebugInfo(e) {
          return (0, o.mG)(this, void 0, void 0, function* () {
            let t = _.De.COMMUNITY_BASE_URL + "broadcast/broadcastdebuginfo",
              a = {
                steamid: this.m_steamid.ConvertTo64BitString(),
                origin: self.origin,
              };
            try {
              let n = yield i().get(t, {
                params: a,
                withCredentials: !0,
                cancelToken: e ? e.token : void 0,
              });
              if (e && e.token.reason) return null;
              if (n && 200 == n.status && n.data && 1 == n.data.success)
                return (this.m_curDebugInfo = n.data), this.m_curDebugInfo;
            } catch (e) {
              let t = (0, u.l)(e);
              console.error(
                "LoadBroadcastDebugInfo: Failed " + t.strErrorMsg,
                t,
              );
            }
            return null;
          });
        }
        UpdateBroadcastSettings(e, t, a) {
          return (0, o.mG)(this, void 0, void 0, function* () {
            let n =
                _.De.COMMUNITY_BASE_URL + "broadcast/updatebroadcastsettings",
              r = {
                steamid: this.m_steamid.ConvertTo64BitString(),
                matchid: e,
                title: t,
                sessionid: _.De.SESSIONID,
              };
            try {
              let e = yield i().get(n, {
                params: r,
                withCredentials: !0,
                cancelToken: a ? a.token : void 0,
              });
              if (a && a.token.reason) return !1;
              if (e && 200 == e.status && e.data && 1 == e.data.success) {
                const e = m.c9.GetOrCreateBroadcastInfo(
                  this.m_steamid.ConvertTo64BitString(),
                );
                return (
                  e &&
                    (0, c.z)(() => {
                      e.m_strTitle = t;
                    }),
                  !0
                );
              }
            } catch (e) {
              let t = (0, u.l)(e);
              console.error(
                "UpdateBroadcastSettings: Failed " + t.strErrorMsg,
                t,
              );
            }
            return !1;
          });
        }
        StopBroadcast(e) {
          return (0, o.mG)(this, void 0, void 0, function* () {
            const t = this.m_steamid.ConvertTo64BitString(),
              a = m.c9.GetBroadcast(t);
            let n = _.De.COMMUNITY_BASE_URL + "broadcast/stopbroadcast",
              r = {
                steamid: t,
                broadcastid: a ? a.m_ulBroadcastID : null,
                sessionid: _.De.SESSIONID,
              };
            return yield this.InternalSendSimpleGetRequest(
              "StopBroadcast",
              n,
              r,
              e,
            );
          });
        }
        SetBroadcasterRestrictions(e, t, a) {
          return (0, o.mG)(this, void 0, void 0, function* () {
            const n = this.m_steamid.ConvertTo64BitString(),
              r = m.c9.GetBroadcast(n);
            let l =
                _.De.COMMUNITY_BASE_URL + "broadcast/setbroadcastrestriction",
              o = {
                steamid: n,
                broadcastid: r ? r.m_ulBroadcastID : null,
                type: e,
                days: t,
                sessionid: _.De.SESSIONID,
              };
            return yield this.InternalSendSimpleGetRequest(
              "SetBroadcasterRestrictions",
              l,
              o,
              a,
            );
          });
        }
        SetUnBannable(e) {
          return (0, o.mG)(this, void 0, void 0, function* () {
            const t = this.m_steamid.ConvertTo64BitString(),
              a = m.c9.GetBroadcast(t);
            let n = _.De.COMMUNITY_BASE_URL + "broadcast/unban",
              r = {
                steamid: t,
                broadcastid: a ? a.m_ulBroadcastID : null,
                sessionid: _.De.SESSIONID,
              };
            return yield this.InternalSendSimpleGetRequest(
              "SetUnBannable",
              n,
              r,
              e,
            );
          });
        }
        SendUserReportOnBroadcast(e) {
          return (0, o.mG)(this, void 0, void 0, function* () {
            const t = this.m_steamid.ConvertTo64BitString(),
              a = m.c9.GetBroadcast(t);
            let n = _.De.COMMUNITY_BASE_URL + "broadcast/report",
              r = {
                steamid: t,
                broadcastid: a ? a.m_ulBroadcastID : null,
                description: e,
                sessionid: _.De.SESSIONID,
              };
            return yield this.InternalSendSimpleGetRequest(
              "SendUserReportOnBroadcast",
              n,
              r,
              null,
            );
          });
        }
        InternalSendSimpleGetRequest(e, t, a, n) {
          return (0, o.mG)(this, void 0, void 0, function* () {
            try {
              let e = yield i().get(t, {
                params: a,
                withCredentials: !0,
                cancelToken: n ? n.token : void 0,
              });
              if (n && n.token.reason) return !1;
              if (e && 200 == e.status && e.data && 1 == e.data.success)
                return !0;
            } catch (t) {
              let a = (0, u.l)(t);
              console.error(
                `CCommunityBroadcastStore:${e}: Failed ` + a.strErrorMsg,
                a,
              );
            }
            return !1;
          });
        }
        static Get() {
          return (
            v.s_Singleton || ((v.s_Singleton = new v()), v.s_Singleton.Init()),
            v.s_Singleton
          );
        }
        Init() {
          let e = (0, _.kQ)("broadcastsinfo", "application_config");
          this.ValidateStoreDefault(e) &&
            ((this.m_steamid = new d.K(e.steamid)),
            (this.m_bShowOnlyChat = Boolean(e.show_only_chat)),
            (this.m_bShowOnlyVideo = Boolean(e.show_only_video)));
        }
        ValidateStoreDefault(e) {
          return !(!e || "object" != typeof e) && "string" == typeof e.steamid;
        }
      }
      (0, o.gn)([c.LO], v.prototype, "m_curDebugInfo", void 0);
      var p = a(27605),
        E = a(6399),
        S = a(58331),
        h = a(84426),
        g = a.n(h),
        b = a(36453),
        B = a(93243),
        C = a(82071),
        f = a(1485),
        I = a(10162),
        D = a(32144),
        y = a(71472),
        N = a(71741),
        w = a.n(N),
        G = a(85884),
        A = a(50898),
        k = a(90069),
        T = a(13129),
        O = a(50423),
        x = a(31846),
        R = a(71630),
        M = a(24827),
        V = a(24549),
        U = a(63024);
      const L = (e) => {
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
              I.SV,
              null,
              n.createElement(
                "div",
                { className: (0, T.Z)(U.Container) },
                n.createElement(
                  "div",
                  { className: U.Controls },
                  n.createElement(
                    f.zx,
                    {
                      onClick: () =>
                        (0, o.mG)(void 0, void 0, void 0, function* () {
                          t.current && t.current();
                          const e = i().CancelToken.source();
                          (t.current = e.cancel),
                            r(yield v.Get().LoadBroadcastDebugInfo(e));
                        }),
                    },
                    "(VO) Load Debug Info",
                  ),
                ),
                n.createElement(I.SV, null, n.createElement(X, { info: a })),
              ),
            )
          );
        },
        X = (e) => {
          var t;
          const { info: a } = e,
            [r, l] = (0, n.useState)(!1);
          if (!a) return null;
          const o = v.Get().GetBroadcasterSteamID().ConvertTo64BitString(),
            s = m.c9.GetBroadcast(o);
          return n.createElement(
            "div",
            { className: U.DisplaySection },
            Boolean(a.last_error_result && 1 != a.last_error_result) &&
              n.createElement(
                "div",
                { className: U.SubSection },
                n.createElement("div", { className: U.Header }, "Error"),
                n.createElement(
                  "div",
                  null,
                  "EResult: ",
                  a.last_error_result,
                  ", occurred ",
                  a.last_error_time,
                  " - ",
                  n.createElement(M.H6, {
                    dateAndTime: a.last_error_time,
                    bSingleLine: !0,
                  }),
                ),
              ),
            n.createElement(
              "div",
              { className: U.SubSection },
              n.createElement(
                "div",
                { className: U.Header },
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
              { className: U.SubSection },
              n.createElement("div", { className: U.Header }, "Ingester Info"),
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
                (0, V.l)(a.upload_total_bytes_uploaded || 0, 1),
                " ) ",
              ),
            ),
            Boolean(a.transcode_server) &&
              n.createElement(
                "div",
                { className: U.SubSection },
                n.createElement(
                  "div",
                  { className: U.Header },
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
              { className: U.SubSection },
              n.createElement("div", { className: U.Header }, "Origin Info"),
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
                      (0, V.l)(e.memory_used, 2),
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
              (0, V.l)(a.origin_audio_stream.memory_used, 2),
              " )",
            ),
            n.createElement(
              "div",
              { className: U.SubSection },
              n.createElement("div", { className: U.Header }, "Viewer Info"),
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
              { className: U.SubSection },
              n.createElement("div", { className: U.Header }, "Settings"),
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
              { className: U.SubSection },
              n.createElement("div", { className: U.Header }, "App Info"),
              n.createElement("div", null, "appid: ", a.app_id),
              n.createElement("div", null, "app name: ", a.app_name),
              n.createElement("div", null, "broadcast title: ", a.title),
              n.createElement("div", null, "thumbnail: ", a.thumbnail_url),
              Boolean(a.thumbnail_url) &&
                n.createElement("img", { src: a.thumbnail_url }),
              Boolean(a.app_id && a.app_id > 0) &&
                n.createElement(
                  "div",
                  { className: U.AppSummaryWidgetCtn },
                  n.createElement(G.ju, { id: a.app_id, type: "game" }),
                ),
            ),
            n.createElement(
              "div",
              { className: U.SubSection },
              n.createElement(
                "div",
                { className: U.Header },
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
            n.createElement(f.zx, { onClick: () => l(!r) }, "Toggle Raw Data"),
            Boolean(r) &&
              n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  "div",
                  { className: U.SubSection },
                  n.createElement(R.G, { data: a }),
                ),
                n.createElement(
                  "div",
                  { className: U.SubSection },
                  n.createElement(R.G, {
                    data: (null == s ? void 0 : s.m_data) || "",
                  }),
                ),
              ),
          );
        };
      var H = a(8845),
        P = a(38605),
        q = a(51915),
        z = a(52248);
      const F = (e) => {
        const t = e.steamid.GetAccountID(),
          { data: a } = (0, q.p2)(t);
        return n.createElement(
          "div",
          { className: z.AvatarCtn },
          n.createElement(
            "a",
            {
              href: a.GetCommunityProfileURL(),
              "data-miniprofile": "s" + e.steamid.ConvertTo64BitString(),
            },
            n.createElement(P.vV, {
              persona: a,
              size: e.size,
              statusPosition: "bottom",
            }),
          ),
          n.createElement(
            "div",
            { className: z.NameAndProps },
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
      var Y = a(30750),
        Z = a(80886),
        K = a(80212),
        W = a(62613),
        Q = a(14609),
        J = a(13499),
        j = a(421);
      function $(e) {
        const { broadcasterSteamID: t } = e,
          a = t.ConvertTo64BitString(),
          [r, l] = (0, Y.SZ)(() => {
            const e = m.c9.GetOrCreateBroadcastInfo(a);
            return [e.m_nViewerCount, Number.parseInt(e.m_strAppId)];
          }),
          [o] = (0, Z.vs)(l, { include_assets: !0 });
        let s = null == o ? void 0 : o.GetAssets().GetMainCapsuleURL(),
          i = s && s.length > 0;
        return n.createElement(
          I.SV,
          null,
          n.createElement(
            "div",
            { className: j.ProfileCtn },
            i &&
              n.createElement(
                "a",
                {
                  className: j.GameCapsule,
                  href: (0, J.OL)(
                    (null == o ? void 0 : o.GetStorePageURL()) ||
                      _.De.STORE_BASE_URL + "app/" + l,
                  ),
                },
                n.createElement("img", { src: s }),
              ),
            n.createElement(
              "div",
              { className: j.StreamDetailsCtn },
              n.createElement(
                "div",
                { className: j.GameAndOptionsCtn },
                n.createElement(
                  "div",
                  { className: j.GameAndViewersCtn },
                  n.createElement(ee, { broadcasterSteamID: t }),
                  n.createElement(
                    "div",
                    { className: j.ViewerCount },
                    (0, x.kb)("#Broadcast_ViewerCount", r.toLocaleString()),
                  ),
                ),
                n.createElement(te, { broadcasterSteamID: t }),
              ),
              n.createElement(F, { steamid: t, size: "Medium", bShowName: !0 }),
            ),
          ),
        );
      }
      const ee = (0, p.Pi)((e) => {
          const { broadcasterSteamID: t } = e,
            a = t.ConvertTo64BitString(),
            [r, l] = (0, Y.SZ)(() => {
              const e = m.c9.GetOrCreateBroadcastInfo(a);
              return [e.m_strAppTitle, Number.parseInt(e.m_strAppId)];
            }),
            [o] = (0, Z.vs)(l, { include_assets: !0 });
          return n.createElement(
            "div",
            { className: j.BroadcastTitleCtn },
            (0, x.Xx)("#Broadcast_Playing"),
            n.createElement(
              "a",
              {
                href: (0, J.OL)(
                  (null == o ? void 0 : o.GetStorePageURL()) ||
                    _.De.STORE_BASE_URL + "app/" + l,
                ),
              },
              Boolean(r) ? r : null == o ? void 0 : o.GetName(),
            ),
            Boolean((null == r ? void 0 : r.length) > 0) &&
              n.createElement("span", null, " - ", r),
          );
        }),
        te = (0, p.Pi)((e) => {
          const { broadcasterSteamID: t } = e,
            a = t.ConvertTo64BitString();
          m.c9.GetOrCreateBroadcastInfo(a);
          return n.createElement(
            "div",
            { className: j.BroadcastUserActionsCtn },
            Boolean(
              _.L7.steamid != e.broadcasterSteamID.ConvertTo64BitString(),
            ) &&
              n.createElement(
                f.zx,
                {
                  "data-tooltip-text": (0, x.Xx)("#Broadcast_User_Report_ttip"),
                  onClick: (e) => {
                    _.L7.logged_in
                      ? (0, k.AM)(
                          n.createElement(ae, { broadcasterSteamID: t }),
                          (0, O.RA)(e),
                        )
                      : (0, k.AM)(
                          n.createElement(A.uH, {
                            strTitle: (0, x.Xx)(
                              "#EventDisplay_Share_NotLoggedIn",
                            ),
                            strDescription: (0, x.Xx)(
                              "#EventDisplay_Share_NotLoggedIn_Description",
                            ),
                            strOKButtonText: (0, x.Xx)("#MobileLogin_SignIn"),
                            onOK: () => (0, K.X)(),
                          }),
                          (0, O.RA)(e),
                        );
                  },
                },
                n.createElement(W.WNf, null),
              ),
            n.createElement(
              f.zx,
              {
                "data-tooltip-text": (0, x.Xx)("#Broadcast_User_FAQ_ttip"),
                onClick: (e) =>
                  (0, Q.b8)(
                    e,
                    "https://support.steampowered.com/kb_article.php?ref=6730-TOAK-6497",
                  ),
              },
              n.createElement(W.daM, null),
            ),
          );
        }),
        ae = (e) => {
          const [t, a] = (0, n.useState)("");
          return n.createElement(
            A.uH,
            {
              strTitle: (0, x.Xx)("#Broadcast_ReportItem_Title"),
              strDescription: (0, x.Xx)("#Broadcast_ReportItem_Description"),
              onCancel: e.closeModal,
              bOKDisabled: 0 == t.trim().length,
              onOK: () =>
                (0, o.mG)(void 0, void 0, void 0, function* () {
                  yield v.Get().SendUserReportOnBroadcast(t),
                    e.closeModal && e.closeModal();
                }),
            },
            n.createElement("textarea", {
              value: t,
              onChange: (e) => a(e.currentTarget.value),
              rows: 10,
              cols: 80,
            }),
          );
        };
      var ne = a(27842),
        re = a(46882);
      const le = (e) => {
          if (!_.L7.is_support) return null;
          const t = (t, a) => {
              (0, k.AM)(
                n.createElement(oe, {
                  broadcastSteamID: e.broadcastSteamID,
                  strAction: a,
                }),
                (0, O.RA)(t),
              );
            },
            a =
              "https://steamsupport.valvesoftware.com/account/overview/" +
              e.broadcastSteamID.ConvertTo64BitString();
          return n.createElement(
            "div",
            { className: (0, T.Z)(ne.AdminControls, w().ValveOnlyBackground) },
            n.createElement("div", null, "(VO) Support Tools"),
            n.createElement(
              f.zx,
              { onClick: (e) => t(e, "frontpage") },
              "Remove from Front Page",
            ),
            n.createElement(
              f.zx,
              { onClick: (e) => t(e, "ban") },
              "Ban from Broadcasting",
            ),
            n.createElement(
              f.zx,
              {
                onClick: (t) => {
                  (0, k.AM)(
                    n.createElement(se, { steamid: e.broadcastSteamID }),
                    (0, O.RA)(t),
                  );
                },
              },
              "Make Unbannable",
            ),
            n.createElement(
              f.zx,
              { onClick: (e) => (0, Q.b8)(e, a) },
              "Go to Support Page",
            ),
          );
        },
        oe = (0, p.Pi)((e) => {
          const { broadcastSteamID: t, strAction: a } = e,
            [r, l] = (0, n.useState)(1),
            [s, c] = (0, n.useState)(!1),
            [d, m] = (0, n.useState)(!1),
            [u, _] = (0, n.useState)(!1),
            p = (0, n.useRef)(null);
          (0, n.useEffect)(
            () => () => {
              p.current && p.current("BroadcastConfirmBanAction: unmounting");
            },
            [],
          );
          const E = () => e.closeModal && e.closeModal();
          return n.createElement(
            I.SV,
            null,
            n.createElement(
              A.e1,
              { onEscKeypress: E },
              n.createElement(
                f.VY,
                null,
                n.createElement(f.h4, null, "Remove Broadcast From Front Page"),
                n.createElement(
                  f.uT,
                  null,
                  n.createElement(
                    f.Ac,
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
                      n.createElement(f.ry, {
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
                      Boolean(s) && n.createElement(re.V, null),
                      Boolean(d) &&
                        n.createElement(
                          "div",
                          null,
                          u
                            ? "Successfully Completed Request"
                            : "Failed to complete request, check browser console and/or try again later",
                        ),
                    ),
                  ),
                ),
                n.createElement(
                  f.$_,
                  null,
                  d
                    ? n.createElement(
                        f.KM,
                        { onClick: E },
                        (0, x.Xx)("#Button_Dismiss"),
                      )
                    : n.createElement(
                        f.Uq,
                        null,
                        n.createElement(
                          f.zx,
                          { onClick: E },
                          (0, x.Xx)("#Button_Cancel"),
                        ),
                        n.createElement(
                          f.KM,
                          {
                            onClick: () =>
                              (0, o.mG)(void 0, void 0, void 0, function* () {
                                c(!0);
                                try {
                                  p.current && p.current();
                                  const e = i().CancelToken.source();
                                  p.current = e.cancel;
                                  let t = yield v
                                    .Get()
                                    .SetBroadcasterRestrictions(a, r, e);
                                  e.token.reason || (t = !0);
                                } finally {
                                  c(!1), m(!0), _(false);
                                }
                              }),
                          },
                          (0, x.Xx)("#Button_Confirm"),
                        ),
                      ),
                ),
              ),
            ),
          );
        }),
        se = (e) => {
          const [t, a] = (0, n.useState)(!1),
            [r, l] = (0, n.useState)(!1),
            [s, c] = (0, n.useState)(!1),
            d = (0, n.useRef)(null);
          (0, n.useEffect)(
            () => () => {
              d.current && d.current("BroadcastMakeUnbannable: unmounting");
            },
            [],
          );
          const m = () => e.closeModal && e.closeModal();
          return n.createElement(
            I.SV,
            null,
            n.createElement(
              A.e1,
              { onEscKeypress: m },
              n.createElement(
                f.VY,
                null,
                n.createElement(f.h4, null, "Make Broadcast Unbannable"),
                n.createElement(
                  f.uT,
                  null,
                  n.createElement(
                    f.Ac,
                    null,
                    n.createElement(
                      "p",
                      null,
                      "Prevent automatic, report based banning changes to this strema visibility the stream for 1 week?",
                    ),
                    n.createElement(
                      "div",
                      null,
                      Boolean(t) && n.createElement(re.V, null),
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
                  f.$_,
                  null,
                  r
                    ? n.createElement(
                        f.KM,
                        { onClick: m },
                        (0, x.Xx)("#Button_Dismiss"),
                      )
                    : n.createElement(
                        f.Uq,
                        null,
                        n.createElement(
                          f.zx,
                          { onClick: m },
                          (0, x.Xx)("#Button_Cancel"),
                        ),
                        n.createElement(
                          f.KM,
                          {
                            onClick: () =>
                              (0, o.mG)(void 0, void 0, void 0, function* () {
                                a(!0);
                                let e = !1;
                                try {
                                  d.current && d.current();
                                  const t = i().CancelToken.source();
                                  (d.current = t.cancel),
                                    (e = yield v.Get().SetUnBannable(t));
                                } finally {
                                  a(!1), l(!0), c(e);
                                }
                              }),
                          },
                          (0, x.Xx)("#Button_Confirm"),
                        ),
                      ),
                ),
              ),
            ),
          );
        };
      const ie = (0, p.Pi)((e) => {
          const t = v.Get().GetBroadcasterSteamID(),
            a = null == t ? void 0 : t.ConvertTo64BitString(),
            r = (function () {
              const [e] = (0, n.useState)(
                () => (0, _.kQ)("ewatchlocation", "application_config") || 5,
              );
              return e;
            })(),
            [l, o] = (0, y.Ar)("muted", !0),
            s = m.c9.GetBroadcast(a),
            i = m.c9.GetOrCreateBroadcastInfo(a);
          return a
            ? n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  "div",
                  { className: (0, T.Z)(H.BroadcastPage) },
                  n.createElement(
                    "div",
                    { className: (0, T.Z)(g().BroadcastAndChat) },
                    Boolean(!v.Get().BShowOnlyChat()) &&
                      n.createElement(
                        I.SV,
                        null,
                        n.createElement(
                          "div",
                          { className: (0, T.Z)(g().wrapper) },
                          n.createElement(
                            "div",
                            {
                              className: (0, T.Z)({
                                [g().video_placeholder]: !0,
                                video_placeholder_trgt: !0,
                                [g().NoChat]: v.Get().BShowOnlyVideo(),
                              }),
                            },
                            n.createElement(
                              "div",
                              { className: g().BroadcastPlayerContainer },
                              n.createElement(
                                I.SV,
                                null,
                                n.createElement(S.default, {
                                  steamIDBroadcast: a,
                                  watchLocation: r,
                                  bStartMuted: l,
                                }),
                              ),
                            ),
                          ),
                        ),
                      ),
                    Boolean(!v.Get().BShowOnlyVideo()) &&
                      n.createElement(
                        "div",
                        { className: g().detail_chat_ctn },
                        n.createElement(
                          "div",
                          { className: g().ChatContainer },
                          n.createElement(
                            I.SV,
                            null,
                            n.createElement(E.c, {
                              emoticonStore: b.D$,
                              watchLocation: 6,
                              steamID: a,
                              broadcastID: s ? s.m_ulBroadcastID : void 0,
                            }),
                          ),
                        ),
                      ),
                  ),
                  Boolean(!v.Get().BShowInIframe()) &&
                    n.createElement(ce, {
                      broadcasterSteamID: t,
                      broadcastInfo: i,
                    }),
                ),
              )
            : null;
        }),
        ce = (0, p.Pi)((e) => {
          const { broadcasterSteamID: t, broadcastInfo: a } = e,
            [r, l] = (0, n.useState)(null);
          return (
            (0, n.useEffect)(() => {
              (0, o.mG)(void 0, void 0, void 0, function* () {
                let e = yield B.sV.LoadOGGClanInfoForAppID(
                  Number.parseInt(a.m_strAppId),
                );
                l(e);
              });
            }, [a.m_strAppId]),
            n.createElement(
              n.Fragment,
              null,
              n.createElement($, { broadcasterSteamID: t }),
              n.createElement(de, { steamid: t }),
              Boolean(_.L7.is_support) &&
                n.createElement(
                  "div",
                  null,
                  n.createElement(le, { broadcastSteamID: t }),
                  n.createElement(
                    "div",
                    {
                      className: (0, T.Z)(w().ValveOnlyBackground, H.DebugCtn),
                    },
                    n.createElement(L, null),
                  ),
                ),
              Boolean(a.m_strAppId && Number.parseInt(a.m_strAppId) > 7) &&
                n.createElement(
                  "div",
                  { className: H.GameInfoCtn },
                  n.createElement(
                    "div",
                    { className: H.GameAboutTitleCtn },
                    n.createElement(
                      "div",
                      { className: H.GameAboutTitle },
                      " ",
                      (0, x.Xx)("#Broadcast_About_Game"),
                      " ",
                    ),
                    n.createElement(
                      "div",
                      { className: w().EventSectionSpacer },
                      " ",
                    ),
                  ),
                  n.createElement(
                    "div",
                    { className: H.GameInfo },
                    n.createElement(G.ju, {
                      id: Number.parseInt(a.m_strAppId),
                      type: "game",
                    }),
                  ),
                ),
              Boolean(r) &&
                n.createElement(
                  "div",
                  { className: H.RelatedEvents },
                  n.createElement(D._G, {
                    clanAccountID: r.clanAccountID,
                    trackingLocation: 6,
                    partnerEventStore: C.j1,
                    bViewAllShowInfiniteScroll: !0,
                  }),
                ),
            )
          );
        }),
        de = (0, p.Pi)((e) => {
          const t = (0, n.useRef)(null);
          let a = m.c9.GetOrCreateBroadcastInfo(
            e.steamid.ConvertTo64BitString(),
          );
          const [r, l] = (0, n.useState)(a.m_strTitle),
            [s, c] = (0, n.useState)(""),
            [d, u] = (0, n.useState)(null);
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
            _.L7.accountid != e.steamid.GetAccountID())
          )
            return null;
          return n.createElement(
            "div",
            { className: H.ControlCtn },
            n.createElement(
              "div",
              { className: H.ControlsTitle },
              (0, x.Xx)("#Broadcaster_Control_title"),
            ),
            n.createElement(
              "div",
              { className: H.TitleInput },
              n.createElement(
                "div",
                { className: H.Options },
                n.createElement(f.II, {
                  type: "text",
                  label: (0, x.Xx)("#Broadcast_title_title"),
                  onChange: (e) => l(e.currentTarget.value || ""),
                  placeholder: (0, x.Xx)("#Broadcast_title_placeholder"),
                  value: r,
                }),
                n.createElement(f.II, {
                  type: "text",
                  label: (0, x.Xx)("#Broadcast_Control_matchid"),
                  onChange: (e) => c(e.currentTarget.value || ""),
                  value: s,
                }),
                n.createElement(
                  f.zx,
                  {
                    onClick: () =>
                      (0, o.mG)(void 0, void 0, void 0, function* () {
                        t.current && t.current();
                        const e = i().CancelToken.source();
                        t.current = e.cancel;
                        let a = yield v.Get().UpdateBroadcastSettings(s, r, e);
                        e.token.reason ||
                          u(
                            (0, x.Xx)(
                              a
                                ? "#Broadcast_Control_Success"
                                : "#Broadcast_Control_Failure",
                            ),
                          );
                      }),
                    "data-tooltip-text": (0, x.Xx)(
                      "#Broadcast_save_title_ttip",
                    ),
                  },
                  (0, x.Xx)("#Broadcast_save_changes"),
                ),
              ),
              n.createElement(
                "div",
                { className: H.StopCtn },
                n.createElement(
                  f.zx,
                  {
                    onClick: (e) => {
                      (0, k.AM)(
                        n.createElement(A.uH, {
                          strTitle: (0, x.Xx)(
                            "#Broadcast_Control_StopBroadcast",
                          ),
                          strDescription: (0, x.Xx)(
                            "#EventEditor_GenericAreYouSure",
                          ),
                          onOK: () =>
                            (0, o.mG)(void 0, void 0, void 0, function* () {
                              t.current && t.current();
                              const e = i().CancelToken.source();
                              t.current = e.cancel;
                              let a = yield v.Get().StopBroadcast(e);
                              e.token.reason ||
                                u(
                                  (0, x.Xx)(
                                    a
                                      ? "#Broadcast_Control_StopSuccess"
                                      : "#Broadcast_Control_StopFailure",
                                  ),
                                );
                            }),
                        }),
                        (0, O.RA)(e),
                      );
                    },
                  },
                  (0, x.Xx)("#Broadcast_Control_StopBroadcast"),
                ),
                Boolean(d) && n.createElement("div", null, d),
              ),
            ),
          );
        });
      var me = a(42855);
      let ue = { BroadcastWatch: (e) => `/broadcast/(watch|watchnew)/${e}` };
      function _e(e) {
        const [t, a] = n.useState(!0);
        return (
          (0, n.useEffect)(() => {
            t && me.cb.InitGlobal().then(() => a(!1));
          }, [t]),
          t
            ? n.createElement(re.V, {
                string: (0, x.Xx)("#Loading"),
                position: "center",
                size: "medium",
              })
            : n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  r.rs,
                  null,
                  n.createElement(r.AW, {
                    path: ue.BroadcastWatch(":steamid_or_user_vanity"),
                    render: (e) =>
                      n.createElement(ie, {
                        strSteamID: e.match.params.steamid_or_user_vanity,
                      }),
                  }),
                  n.createElement(r.AW, { component: l.R }),
                ),
              )
        );
      }
    },
  },
]);
