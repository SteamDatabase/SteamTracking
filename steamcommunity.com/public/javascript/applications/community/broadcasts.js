/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5436],
  {
    63024: (e) => {
      e.exports = {
        SubSection: "broadcastdebug_SubSection_3Ac4z",
        Header: "broadcastdebug_Header_2vrXB",
        AppSummaryWidgetCtn: "broadcastdebug_AppSummaryWidgetCtn_35ozI",
      };
    },
    8845: (e) => {
      e.exports = {
        BroadcastPage: "broadcastplayer_BroadcastPage_3IVNU",
        ChatAndVideoContainer: "broadcastplayer_ChatAndVideoContainer_3T2Xh",
        PlayerContainer: "broadcastplayer_PlayerContainer_1YtbI",
        ControlCtn: "broadcastplayer_ControlCtn_3NMuA",
        ControlsTitle: "broadcastplayer_ControlsTitle_2gpZb",
        TitleInput: "broadcastplayer_TitleInput_2hXPK",
        Options: "broadcastplayer_Options_1zp3Y",
        StopCtn: "broadcastplayer_StopCtn_3swF9",
        GameInfoCtn: "broadcastplayer_GameInfoCtn_4stlZ",
        GameInfo: "broadcastplayer_GameInfo_3LaZv",
        GameAboutTitleCtn: "broadcastplayer_GameAboutTitleCtn_3CMlO",
        GameAboutTitle: "broadcastplayer_GameAboutTitle_2RJzu",
        RelatedEvents: "broadcastplayer_RelatedEvents_2RjLr",
        DebugCtn: "broadcastplayer_DebugCtn_FKW0z",
      };
    },
    421: (e) => {
      e.exports = {
        ProfileCtn: "broadcastprofile_ProfileCtn__qonR",
        GameAndOptionsCtn: "broadcastprofile_GameAndOptionsCtn_Qo4I3",
        GameAndViewersCtn: "broadcastprofile_GameAndViewersCtn_XQo2J",
        BroadcastTitleCtn: "broadcastprofile_BroadcastTitleCtn_1R6Q5",
        StreamDetailsCtn: "broadcastprofile_StreamDetailsCtn_11FAt",
        ViewerCount: "broadcastprofile_ViewerCount_2skQ1",
        BroadcastUserActionsCtn:
          "broadcastprofile_BroadcastUserActionsCtn_1MeMB",
        GameCapsule: "broadcastprofile_GameCapsule_1oJMx",
      };
    },
    27842: (e) => {
      e.exports = { AdminControls: "broadcastsupport_AdminControls_3KL0b" };
    },
    52248: (e) => {
      e.exports = {
        AvatarCtn: "communityavatar_AvatarCtn_3n3n0",
        NameAndProps: "communityavatar_NameAndProps_3Pljh",
      };
    },
    5870: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => _e });
      a(7765);
      var r = a(47427),
        n = a(8285),
        o = a(69406),
        l = a(85556),
        s = a(80751),
        c = a.n(s),
        i = a(54842),
        d = a(35427),
        m = a(64730),
        u = a(16649),
        _ = a(37563);
      class p {
        constructor() {
          (this.m_bShowOnlyVideo = !1),
            (this.m_bShowOnlyChat = !1),
            (this.m_curDebugInfo = null),
            (0, i.rC)(this);
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
          return (0, l.mG)(this, void 0, void 0, function* () {
            let t = _.De.COMMUNITY_BASE_URL + "broadcast/broadcastdebuginfo",
              a = {
                steamid: this.m_steamid.ConvertTo64BitString(),
                origin: self.origin,
              };
            try {
              let r = yield c().get(t, {
                params: a,
                withCredentials: !0,
                cancelToken: e ? e.token : void 0,
              });
              if (e && e.token.reason) return null;
              if (r && 200 == r.status && r.data && 1 == r.data.success)
                return (this.m_curDebugInfo = r.data), this.m_curDebugInfo;
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
          return (0, l.mG)(this, void 0, void 0, function* () {
            let r =
                _.De.COMMUNITY_BASE_URL + "broadcast/updatebroadcastsettings",
              n = {
                steamid: this.m_steamid.ConvertTo64BitString(),
                matchid: e,
                title: t,
                sessionid: _.De.SESSIONID,
              };
            try {
              let e = yield c().get(r, {
                params: n,
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
                    (0, i.z)(() => {
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
          return (0, l.mG)(this, void 0, void 0, function* () {
            const t = this.m_steamid.ConvertTo64BitString(),
              a = m.c9.GetBroadcast(t);
            let r = _.De.COMMUNITY_BASE_URL + "broadcast/stopbroadcast",
              n = {
                steamid: t,
                broadcastid: a ? a.m_ulBroadcastID : null,
                sessionid: _.De.SESSIONID,
              };
            return yield this.InternalSendSimpleGetRequest(
              "StopBroadcast",
              r,
              n,
              e,
            );
          });
        }
        SetBroadcasterRestrictions(e, t, a) {
          return (0, l.mG)(this, void 0, void 0, function* () {
            const r = this.m_steamid.ConvertTo64BitString(),
              n = m.c9.GetBroadcast(r);
            let o =
                _.De.COMMUNITY_BASE_URL + "broadcast/setbroadcastrestriction",
              l = {
                steamid: r,
                broadcastid: n ? n.m_ulBroadcastID : null,
                type: e,
                days: t,
                sessionid: _.De.SESSIONID,
              };
            return yield this.InternalSendSimpleGetRequest(
              "SetBroadcasterRestrictions",
              o,
              l,
              a,
            );
          });
        }
        SetUnBannable(e) {
          return (0, l.mG)(this, void 0, void 0, function* () {
            const t = this.m_steamid.ConvertTo64BitString(),
              a = m.c9.GetBroadcast(t);
            let r = _.De.COMMUNITY_BASE_URL + "broadcast/unban",
              n = {
                steamid: t,
                broadcastid: a ? a.m_ulBroadcastID : null,
                sessionid: _.De.SESSIONID,
              };
            return yield this.InternalSendSimpleGetRequest(
              "SetUnBannable",
              r,
              n,
              e,
            );
          });
        }
        SendUserReportOnBroadcast(e) {
          return (0, l.mG)(this, void 0, void 0, function* () {
            const t = this.m_steamid.ConvertTo64BitString(),
              a = m.c9.GetBroadcast(t);
            let r = _.De.COMMUNITY_BASE_URL + "broadcast/report",
              n = {
                steamid: t,
                broadcastid: a ? a.m_ulBroadcastID : null,
                description: e,
                sessionid: _.De.SESSIONID,
              };
            return yield this.InternalSendSimpleGetRequest(
              "SendUserReportOnBroadcast",
              r,
              n,
              null,
            );
          });
        }
        InternalSendSimpleGetRequest(e, t, a, r) {
          return (0, l.mG)(this, void 0, void 0, function* () {
            try {
              let e = yield c().get(t, {
                params: a,
                withCredentials: !0,
                cancelToken: r ? r.token : void 0,
              });
              if (r && r.token.reason) return !1;
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
            p.s_Singleton || ((p.s_Singleton = new p()), p.s_Singleton.Init()),
            p.s_Singleton
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
      (0, l.gn)([i.LO], p.prototype, "m_curDebugInfo", void 0);
      var v = a(27605),
        E = a(6399),
        S = a(58331),
        b = a(84426),
        C = a.n(b),
        h = a(36453),
        B = a(93243),
        f = a(82071),
        g = a(1485),
        I = a(10162),
        y = a(32144),
        D = a(71472),
        G = a(71741),
        A = a.n(G),
        N = a(85884),
        w = a(50898),
        T = a(90069),
        k = a(13129),
        x = a(50423),
        O = a(31846),
        R = a(71630),
        M = a(24827),
        U = a(24549),
        V = a(63024);
      const L = (e) => {
          const t = (0, r.useRef)(null),
            [a, n] = (0, r.useState)(null);
          return (
            (0, r.useEffect)(
              () => () => {
                t.current && t.current("BroadcastDebugSection: unmounting");
              },
              [],
            ),
            r.createElement(
              I.SV,
              null,
              r.createElement(
                "div",
                { className: (0, k.Z)(V.Container) },
                r.createElement(
                  "div",
                  { className: V.Controls },
                  r.createElement(
                    g.zx,
                    {
                      onClick: () =>
                        (0, l.mG)(void 0, void 0, void 0, function* () {
                          t.current && t.current();
                          const e = c().CancelToken.source();
                          (t.current = e.cancel),
                            n(yield p.Get().LoadBroadcastDebugInfo(e));
                        }),
                    },
                    "(VO) Load Debug Info",
                  ),
                ),
                r.createElement(I.SV, null, r.createElement(P, { info: a })),
              ),
            )
          );
        },
        P = (e) => {
          var t;
          const { info: a } = e,
            [n, o] = (0, r.useState)(!1);
          if (!a) return null;
          const l = p.Get().GetBroadcasterSteamID().ConvertTo64BitString(),
            s = m.c9.GetBroadcast(l);
          return r.createElement(
            "div",
            { className: V.DisplaySection },
            Boolean(a.last_error_result && 1 != a.last_error_result) &&
              r.createElement(
                "div",
                { className: V.SubSection },
                r.createElement("div", { className: V.Header }, "Error"),
                r.createElement(
                  "div",
                  null,
                  "EResult: ",
                  a.last_error_result,
                  ", occurred ",
                  a.last_error_time,
                  " - ",
                  r.createElement(M.H6, {
                    dateAndTime: a.last_error_time,
                    bSingleLine: !0,
                  }),
                ),
              ),
            r.createElement(
              "div",
              { className: V.SubSection },
              r.createElement(
                "div",
                { className: V.Header },
                "Broadcast Setup",
              ),
              r.createElement(
                "div",
                null,
                "Broadcaster: ",
                a.steam_id,
                ", SteamID: ",
                l,
              ),
              r.createElement(
                "div",
                null,
                "Directory Server: ",
                a.directory_server,
                ", SessionID: ",
                a.broadcast_id,
              ),
              r.createElement(
                "div",
                null,
                "Ingester Server: ",
                a.relay_server,
                ", UploadID: ",
                a.upload_id,
              ),
              r.createElement("div", null, "Origin Server: ", a.origin_server),
              r.createElement(
                "div",
                null,
                "Chat Server: ",
                a.chat_server,
                ", chat_id: ",
                a.chat_id,
              ),
              r.createElement(
                "div",
                null,
                "Transcoder Server : ",
                a.transcode_server,
              ),
            ),
            r.createElement(
              "div",
              { className: V.SubSection },
              r.createElement("div", { className: V.Header }, "Ingester Info"),
              r.createElement(
                "div",
                null,
                "Client: ",
                a.remote_address,
                " ",
                Boolean(a.is_rtmp) ? "(RTMP)" : "(STEAM CLIENT)",
              ),
              r.createElement(
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
              r.createElement(
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
              r.createElement(
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
              r.createElement(
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
                (0, U.l)(a.upload_total_bytes_uploaded || 0, 1),
                " ) ",
              ),
            ),
            Boolean(a.transcode_server) &&
              r.createElement(
                "div",
                { className: V.SubSection },
                r.createElement(
                  "div",
                  { className: V.Header },
                  "Transcoder Info",
                ),
                r.createElement(
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
                  r.createElement(
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
            r.createElement(
              "div",
              { className: V.SubSection },
              r.createElement("div", { className: V.Header }, "Origin Info"),
              null === (t = null == a ? void 0 : a.origin_video_streams) ||
                void 0 === t
                ? void 0
                : t.map((e) =>
                    r.createElement(
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
                      (0, U.l)(e.memory_used, 2),
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
              (0, U.l)(a.origin_audio_stream.memory_used, 2),
              " )",
            ),
            r.createElement(
              "div",
              { className: V.SubSection },
              r.createElement("div", { className: V.Header }, "Viewer Info"),
              r.createElement(
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
              r.createElement(
                "div",
                null,
                "Average time watched: ",
                a.average_watch_duration,
                " seconds",
              ),
              r.createElement(
                "div",
                null,
                "Last Minute: ",
                a.added_viewers_last_minute,
                " watch requests, ",
                a.rejected_viewers_last_minute,
                " rejected",
              ),
              r.createElement("div", null, "Restrictions: ", a.restriction),
              r.createElement("div", null, a.extra_viewer_info),
            ),
            r.createElement(
              "div",
              { className: V.SubSection },
              r.createElement("div", { className: V.Header }, "Settings"),
              r.createElement("div", null, "is replay? ", a.is_replay),
              r.createElement(
                "div",
                null,
                "is replay local file? ",
                a.is_replay_local_file,
              ),
              r.createElement(
                "div",
                null,
                "is replay clip? ",
                a.is_replay_clip,
              ),
              r.createElement(
                "div",
                null,
                "is capturing VOD? ",
                a.is_capturing_vod,
              ),
              r.createElement(
                "div",
                null,
                "is white listed for store streaming? ",
                a.is_whitelisted,
              ),
            ),
            r.createElement(
              "div",
              { className: V.SubSection },
              r.createElement("div", { className: V.Header }, "App Info"),
              r.createElement("div", null, "appid: ", a.app_id),
              r.createElement("div", null, "app name: ", a.app_name),
              r.createElement("div", null, "broadcast title: ", a.title),
              r.createElement("div", null, "thumbnail: ", a.thumbnail_url),
              Boolean(a.thumbnail_url) &&
                r.createElement("img", { src: a.thumbnail_url }),
              Boolean(a.app_id && a.app_id > 0) &&
                r.createElement(
                  "div",
                  { className: V.AppSummaryWidgetCtn },
                  r.createElement(N.ju, { id: a.app_id, type: "game" }),
                ),
            ),
            r.createElement(
              "div",
              { className: V.SubSection },
              r.createElement(
                "div",
                { className: V.Header },
                "Manifest Information",
              ),
              r.createElement(
                "div",
                null,
                "Heartbeat Interval: ",
                s.m_data.heartbeat_interval,
              ),
              r.createElement("div", null, "DASH MPEG Url: ", s.m_data.url),
              r.createElement("div", null, "HLS Url: ", s.m_data.hls_url),
            ),
            r.createElement(g.zx, { onClick: () => o(!n) }, "Toggle Raw Data"),
            Boolean(n) &&
              r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  "div",
                  { className: V.SubSection },
                  r.createElement(R.G, { data: a }),
                ),
                r.createElement(
                  "div",
                  { className: V.SubSection },
                  r.createElement(R.G, {
                    data: (null == s ? void 0 : s.m_data) || "",
                  }),
                ),
              ),
          );
        };
      var X = a(8845),
        z = a(38605),
        H = a(51915),
        F = a(52248);
      const q = (e) => {
        const t = e.steamid.GetAccountID(),
          { data: a } = (0, H.p2)(t);
        return r.createElement(
          "div",
          { className: F.AvatarCtn },
          r.createElement(
            "a",
            {
              href: a.GetCommunityProfileURL(),
              "data-miniprofile": "s" + e.steamid.ConvertTo64BitString(),
            },
            r.createElement(z.vV, {
              persona: a,
              size: e.size,
              statusPosition: "bottom",
            }),
          ),
          r.createElement(
            "div",
            { className: F.NameAndProps },
            Boolean(e.bShowName) &&
              r.createElement(
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
      var K = a(30750),
        Y = a(80886),
        Z = a(80212),
        W = a(62613),
        j = a(14609),
        Q = a(13499),
        $ = a(421);
      function J(e) {
        const { broadcasterSteamID: t } = e,
          a = t.ConvertTo64BitString(),
          [n, o] = (0, K.SZ)(() => {
            const e = m.c9.GetOrCreateBroadcastInfo(a);
            return [e.m_nViewerCount, Number.parseInt(e.m_strAppId)];
          }),
          [l] = (0, Y.vs)(o, { include_assets: !0 });
        let s = null == l ? void 0 : l.GetAssets().GetMainCapsuleURL(),
          c = s && s.length > 0;
        return r.createElement(
          I.SV,
          null,
          r.createElement(
            "div",
            { className: $.ProfileCtn },
            c &&
              r.createElement(
                "a",
                {
                  className: $.GameCapsule,
                  href: (0, Q.OL)(
                    (null == l ? void 0 : l.GetStorePageURL()) ||
                      _.De.STORE_BASE_URL + "app/" + o,
                  ),
                },
                r.createElement("img", { src: s }),
              ),
            r.createElement(
              "div",
              { className: $.StreamDetailsCtn },
              r.createElement(
                "div",
                { className: $.GameAndOptionsCtn },
                r.createElement(
                  "div",
                  { className: $.GameAndViewersCtn },
                  r.createElement(ee, { broadcasterSteamID: t }),
                  r.createElement(
                    "div",
                    { className: $.ViewerCount },
                    (0, O.kb)("#Broadcast_ViewerCount", n.toLocaleString()),
                  ),
                ),
                r.createElement(te, { broadcasterSteamID: t }),
              ),
              r.createElement(q, { steamid: t, size: "Medium", bShowName: !0 }),
            ),
          ),
        );
      }
      const ee = (0, v.Pi)((e) => {
          const { broadcasterSteamID: t } = e,
            a = t.ConvertTo64BitString(),
            [n, o] = (0, K.SZ)(() => {
              const e = m.c9.GetOrCreateBroadcastInfo(a);
              return [e.m_strAppTitle, Number.parseInt(e.m_strAppId)];
            }),
            [l] = (0, Y.vs)(o, { include_assets: !0 });
          return r.createElement(
            "div",
            { className: $.BroadcastTitleCtn },
            (0, O.Xx)("#Broadcast_Playing"),
            r.createElement(
              "a",
              {
                href: (0, Q.OL)(
                  (null == l ? void 0 : l.GetStorePageURL()) ||
                    _.De.STORE_BASE_URL + "app/" + o,
                ),
              },
              Boolean(n) ? n : null == l ? void 0 : l.GetName(),
            ),
            Boolean((null == n ? void 0 : n.length) > 0) &&
              r.createElement("span", null, " - ", n),
          );
        }),
        te = (0, v.Pi)((e) => {
          const { broadcasterSteamID: t } = e,
            a = t.ConvertTo64BitString();
          m.c9.GetOrCreateBroadcastInfo(a);
          return r.createElement(
            "div",
            { className: $.BroadcastUserActionsCtn },
            Boolean(
              _.L7.steamid != e.broadcasterSteamID.ConvertTo64BitString(),
            ) &&
              r.createElement(
                g.zx,
                {
                  "data-tooltip-text": (0, O.Xx)("#Broadcast_User_Report_ttip"),
                  onClick: (e) => {
                    _.L7.logged_in
                      ? (0, T.AM)(
                          r.createElement(ae, { broadcasterSteamID: t }),
                          (0, x.RA)(e),
                        )
                      : (0, T.AM)(
                          r.createElement(w.uH, {
                            strTitle: (0, O.Xx)(
                              "#EventDisplay_Share_NotLoggedIn",
                            ),
                            strDescription: (0, O.Xx)(
                              "#EventDisplay_Share_NotLoggedIn_Description",
                            ),
                            strOKButtonText: (0, O.Xx)("#MobileLogin_SignIn"),
                            onOK: () => (0, Z.X)(),
                          }),
                          (0, x.RA)(e),
                        );
                  },
                },
                r.createElement(W.WNf, null),
              ),
            r.createElement(
              g.zx,
              {
                "data-tooltip-text": (0, O.Xx)("#Broadcast_User_FAQ_ttip"),
                onClick: (e) =>
                  (0, j.b8)(
                    e,
                    "https://support.steampowered.com/kb_article.php?ref=6730-TOAK-6497",
                  ),
              },
              r.createElement(W.daM, null),
            ),
          );
        }),
        ae = (e) => {
          const [t, a] = (0, r.useState)("");
          return r.createElement(
            w.uH,
            {
              strTitle: (0, O.Xx)("#Broadcast_ReportItem_Title"),
              strDescription: (0, O.Xx)("#Broadcast_ReportItem_Description"),
              onCancel: e.closeModal,
              bOKDisabled: 0 == t.trim().length,
              onOK: () =>
                (0, l.mG)(void 0, void 0, void 0, function* () {
                  yield p.Get().SendUserReportOnBroadcast(t),
                    e.closeModal && e.closeModal();
                }),
            },
            r.createElement("textarea", {
              value: t,
              onChange: (e) => a(e.currentTarget.value),
              rows: 10,
              cols: 80,
            }),
          );
        };
      var re = a(27842),
        ne = a(46882);
      const oe = (e) => {
          if (!_.L7.is_support) return null;
          const t = (t, a) => {
              (0, T.AM)(
                r.createElement(le, {
                  broadcastSteamID: e.broadcastSteamID,
                  strAction: a,
                }),
                (0, x.RA)(t),
              );
            },
            a =
              "https://steamsupport.valvesoftware.com/account/overview/" +
              e.broadcastSteamID.ConvertTo64BitString();
          return r.createElement(
            "div",
            { className: (0, k.Z)(re.AdminControls, A().ValveOnlyBackground) },
            r.createElement("div", null, "(VO) Support Tools"),
            r.createElement(
              g.zx,
              { onClick: (e) => t(e, "frontpage") },
              "Remove from Front Page",
            ),
            r.createElement(
              g.zx,
              { onClick: (e) => t(e, "ban") },
              "Ban from Broadcasting",
            ),
            r.createElement(
              g.zx,
              {
                onClick: (t) => {
                  (0, T.AM)(
                    r.createElement(se, { steamid: e.broadcastSteamID }),
                    (0, x.RA)(t),
                  );
                },
              },
              "Make Unbannable",
            ),
            r.createElement(
              g.zx,
              { onClick: (e) => (0, j.b8)(e, a) },
              "Go to Support Page",
            ),
          );
        },
        le = (0, v.Pi)((e) => {
          const { broadcastSteamID: t, strAction: a } = e,
            [n, o] = (0, r.useState)(1),
            [s, i] = (0, r.useState)(!1),
            [d, m] = (0, r.useState)(!1),
            [u, _] = (0, r.useState)(!1),
            v = (0, r.useRef)(null);
          (0, r.useEffect)(
            () => () => {
              v.current && v.current("BroadcastConfirmBanAction: unmounting");
            },
            [],
          );
          const E = () => e.closeModal && e.closeModal();
          return r.createElement(
            I.SV,
            null,
            r.createElement(
              w.e1,
              { onEscKeypress: E },
              r.createElement(
                g.VY,
                null,
                r.createElement(g.h4, null, "Remove Broadcast From Front Page"),
                r.createElement(
                  g.uT,
                  null,
                  r.createElement(
                    g.Ac,
                    null,
                    r.createElement(
                      "p",
                      null,
                      "frontpage" == a
                        ? "How long should we prevent the broadcast from appearing in community or store?"
                        : "How long should we prevent the user from Broadcast at all on Steam?",
                    ),
                    r.createElement(
                      "div",
                      null,
                      r.createElement(g.ry, {
                        rgOptions: [
                          { label: "1 Day", data: 1 },
                          { label: "1 Week", data: 7 },
                          { label: "1 Month", data: 30 },
                          { label: "6 Months", data: 180 },
                          { label: "1 Year", data: 365 },
                        ],
                        selectedOption: n,
                        onChange: (e) => o(e.data),
                      }),
                      Boolean(s) && r.createElement(ne.V, null),
                      Boolean(d) &&
                        r.createElement(
                          "div",
                          null,
                          u
                            ? "Successfully Completed Request"
                            : "Failed to complete request, check browser console and/or try again later",
                        ),
                    ),
                  ),
                ),
                r.createElement(
                  g.$_,
                  null,
                  d
                    ? r.createElement(
                        g.KM,
                        { onClick: E },
                        (0, O.Xx)("#Button_Dismiss"),
                      )
                    : r.createElement(
                        g.Uq,
                        null,
                        r.createElement(
                          g.zx,
                          { onClick: E },
                          (0, O.Xx)("#Button_Cancel"),
                        ),
                        r.createElement(
                          g.KM,
                          {
                            onClick: () =>
                              (0, l.mG)(void 0, void 0, void 0, function* () {
                                i(!0);
                                try {
                                  v.current && v.current();
                                  const e = c().CancelToken.source();
                                  v.current = e.cancel;
                                  let t = yield p
                                    .Get()
                                    .SetBroadcasterRestrictions(a, n, e);
                                  e.token.reason || (t = !0);
                                } finally {
                                  i(!1), m(!0), _(false);
                                }
                              }),
                          },
                          (0, O.Xx)("#Button_Confirm"),
                        ),
                      ),
                ),
              ),
            ),
          );
        }),
        se = (e) => {
          const [t, a] = (0, r.useState)(!1),
            [n, o] = (0, r.useState)(!1),
            [s, i] = (0, r.useState)(!1),
            d = (0, r.useRef)(null);
          (0, r.useEffect)(
            () => () => {
              d.current && d.current("BroadcastMakeUnbannable: unmounting");
            },
            [],
          );
          const m = () => e.closeModal && e.closeModal();
          return r.createElement(
            I.SV,
            null,
            r.createElement(
              w.e1,
              { onEscKeypress: m },
              r.createElement(
                g.VY,
                null,
                r.createElement(g.h4, null, "Make Broadcast Unbannable"),
                r.createElement(
                  g.uT,
                  null,
                  r.createElement(
                    g.Ac,
                    null,
                    r.createElement(
                      "p",
                      null,
                      "Prevent automatic, report based banning changes to this strema visibility the stream for 1 week?",
                    ),
                    r.createElement(
                      "div",
                      null,
                      Boolean(t) && r.createElement(ne.V, null),
                      Boolean(n) &&
                        r.createElement(
                          "div",
                          null,
                          s
                            ? "Successfully Set Unbannable"
                            : "Failed to make Unbannable",
                        ),
                    ),
                  ),
                ),
                r.createElement(
                  g.$_,
                  null,
                  n
                    ? r.createElement(
                        g.KM,
                        { onClick: m },
                        (0, O.Xx)("#Button_Dismiss"),
                      )
                    : r.createElement(
                        g.Uq,
                        null,
                        r.createElement(
                          g.zx,
                          { onClick: m },
                          (0, O.Xx)("#Button_Cancel"),
                        ),
                        r.createElement(
                          g.KM,
                          {
                            onClick: () =>
                              (0, l.mG)(void 0, void 0, void 0, function* () {
                                a(!0);
                                let e = !1;
                                try {
                                  d.current && d.current();
                                  const t = c().CancelToken.source();
                                  (d.current = t.cancel),
                                    (e = yield p.Get().SetUnBannable(t));
                                } finally {
                                  a(!1), o(!0), i(e);
                                }
                              }),
                          },
                          (0, O.Xx)("#Button_Confirm"),
                        ),
                      ),
                ),
              ),
            ),
          );
        },
        ce = (0, v.Pi)((e) => {
          const t = p.Get().GetBroadcasterSteamID(),
            a = t.ConvertTo64BitString(),
            [n, o] = (0, D.Ar)("muted", !0),
            l = m.c9.GetBroadcast(a),
            s = m.c9.GetOrCreateBroadcastInfo(a);
          return r.createElement(
            r.Fragment,
            null,
            r.createElement(
              "div",
              { className: (0, k.Z)(X.BroadcastPage) },
              r.createElement(
                "div",
                { className: (0, k.Z)(C().BroadcastAndChat) },
                Boolean(!p.Get().BShowOnlyChat()) &&
                  r.createElement(
                    I.SV,
                    null,
                    r.createElement(
                      "div",
                      { className: (0, k.Z)(C().wrapper) },
                      r.createElement(
                        "div",
                        {
                          className: (0, k.Z)({
                            [C().video_placeholder]: !0,
                            video_placeholder_trgt: !0,
                            [C().NoChat]: p.Get().BShowOnlyVideo(),
                          }),
                        },
                        r.createElement(
                          "div",
                          { className: C().BroadcastPlayerContainer },
                          r.createElement(
                            I.SV,
                            null,
                            r.createElement(S.default, {
                              steamIDBroadcast: a,
                              watchLocation: 5,
                              bStartMuted: n,
                            }),
                          ),
                        ),
                      ),
                    ),
                  ),
                Boolean(!p.Get().BShowOnlyVideo()) &&
                  r.createElement(
                    "div",
                    { className: C().detail_chat_ctn },
                    r.createElement(
                      "div",
                      { className: C().ChatContainer },
                      r.createElement(
                        I.SV,
                        null,
                        r.createElement(E.c, {
                          emoticonStore: h.D$,
                          watchLocation: 6,
                          steamID: a,
                          broadcastID: l ? l.m_ulBroadcastID : void 0,
                        }),
                      ),
                    ),
                  ),
              ),
              Boolean(!p.Get().BShowInIframe()) &&
                r.createElement(ie, {
                  broadcasterSteamID: t,
                  broadcastInfo: s,
                }),
            ),
          );
        }),
        ie = (0, v.Pi)((e) => {
          const { broadcasterSteamID: t, broadcastInfo: a } = e,
            [n, o] = (0, r.useState)(null);
          return (
            (0, r.useEffect)(() => {
              (0, l.mG)(void 0, void 0, void 0, function* () {
                let e = yield B.sV.LoadOGGClanInfoForAppID(
                  Number.parseInt(a.m_strAppId),
                );
                o(e);
              });
            }, [a.m_strAppId]),
            r.createElement(
              r.Fragment,
              null,
              r.createElement(J, { broadcasterSteamID: t }),
              r.createElement(de, { steamid: t }),
              Boolean(_.L7.is_support) &&
                r.createElement(
                  "div",
                  null,
                  r.createElement(oe, { broadcastSteamID: t }),
                  r.createElement(
                    "div",
                    {
                      className: (0, k.Z)(A().ValveOnlyBackground, X.DebugCtn),
                    },
                    r.createElement(L, null),
                  ),
                ),
              Boolean(a.m_strAppId && Number.parseInt(a.m_strAppId) > 7) &&
                r.createElement(
                  "div",
                  { className: X.GameInfoCtn },
                  r.createElement(
                    "div",
                    { className: X.GameAboutTitleCtn },
                    r.createElement(
                      "div",
                      { className: X.GameAboutTitle },
                      " ",
                      (0, O.Xx)("#Broadcast_About_Game"),
                      " ",
                    ),
                    r.createElement(
                      "div",
                      { className: A().EventSectionSpacer },
                      " ",
                    ),
                  ),
                  r.createElement(
                    "div",
                    { className: X.GameInfo },
                    r.createElement(N.ju, {
                      id: Number.parseInt(a.m_strAppId),
                      type: "game",
                    }),
                  ),
                ),
              Boolean(n) &&
                r.createElement(
                  "div",
                  { className: X.RelatedEvents },
                  r.createElement(y._G, {
                    clanAccountID: n.clanAccountID,
                    trackingLocation: 6,
                    partnerEventStore: f.j1,
                    bViewAllShowInfiniteScroll: !0,
                  }),
                ),
            )
          );
        }),
        de = (0, v.Pi)((e) => {
          const t = (0, r.useRef)(null);
          let a = m.c9.GetOrCreateBroadcastInfo(
            e.steamid.ConvertTo64BitString(),
          );
          const [n, o] = (0, r.useState)(a.m_strTitle),
            [s, i] = (0, r.useState)(""),
            [d, u] = (0, r.useState)(null);
          if (
            ((0, r.useEffect)(
              () => (
                o(a.m_strTitle),
                () => {
                  t.current && t.current("BroadcastControls: unmounting");
                }
              ),
              [a.m_strTitle],
            ),
            _.L7.accountid != e.steamid.GetAccountID())
          )
            return null;
          return r.createElement(
            "div",
            { className: X.ControlCtn },
            r.createElement(
              "div",
              { className: X.ControlsTitle },
              (0, O.Xx)("#Broadcaster_Control_title"),
            ),
            r.createElement(
              "div",
              { className: X.TitleInput },
              r.createElement(
                "div",
                { className: X.Options },
                r.createElement(g.II, {
                  type: "text",
                  label: (0, O.Xx)("#Broadcast_title_title"),
                  onChange: (e) => o(e.currentTarget.value || ""),
                  placeholder: (0, O.Xx)("#Broadcast_title_placeholder"),
                  value: n,
                }),
                r.createElement(g.II, {
                  type: "text",
                  label: (0, O.Xx)("#Broadcast_Control_matchid"),
                  onChange: (e) => i(e.currentTarget.value || ""),
                  value: s,
                }),
                r.createElement(
                  g.zx,
                  {
                    onClick: () =>
                      (0, l.mG)(void 0, void 0, void 0, function* () {
                        t.current && t.current();
                        const e = c().CancelToken.source();
                        t.current = e.cancel;
                        let a = yield p.Get().UpdateBroadcastSettings(s, n, e);
                        e.token.reason ||
                          u(
                            (0, O.Xx)(
                              a
                                ? "#Broadcast_Control_Success"
                                : "#Broadcast_Control_Failure",
                            ),
                          );
                      }),
                    "data-tooltip-text": (0, O.Xx)(
                      "#Broadcast_save_title_ttip",
                    ),
                  },
                  (0, O.Xx)("#Broadcast_save_changes"),
                ),
              ),
              r.createElement(
                "div",
                { className: X.StopCtn },
                r.createElement(
                  g.zx,
                  {
                    onClick: (e) => {
                      (0, T.AM)(
                        r.createElement(w.uH, {
                          strTitle: (0, O.Xx)(
                            "#Broadcast_Control_StopBroadcast",
                          ),
                          strDescription: (0, O.Xx)(
                            "#EventEditor_GenericAreYouSure",
                          ),
                          onOK: () =>
                            (0, l.mG)(void 0, void 0, void 0, function* () {
                              t.current && t.current();
                              const e = c().CancelToken.source();
                              t.current = e.cancel;
                              let a = yield p.Get().StopBroadcast(e);
                              e.token.reason ||
                                u(
                                  (0, O.Xx)(
                                    a
                                      ? "#Broadcast_Control_StopSuccess"
                                      : "#Broadcast_Control_StopFailure",
                                  ),
                                );
                            }),
                        }),
                        (0, x.RA)(e),
                      );
                    },
                  },
                  (0, O.Xx)("#Broadcast_Control_StopBroadcast"),
                ),
                Boolean(d) && r.createElement("div", null, d),
              ),
            ),
          );
        });
      var me = a(42855);
      let ue = { BroadcastWatch: (e) => `/broadcast/(watch|watchnew)/${e}` };
      function _e(e) {
        const [t, a] = r.useState(!0);
        return (
          (0, r.useEffect)(() => {
            t && me.cb.InitGlobal().then(() => a(!1));
          }, [t]),
          t
            ? r.createElement(ne.V, {
                string: (0, O.Xx)("#Loading"),
                position: "center",
                size: "medium",
              })
            : r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  n.rs,
                  null,
                  r.createElement(n.AW, {
                    path: ue.BroadcastWatch(":steamid_or_user_vanity"),
                    render: (e) =>
                      r.createElement(ce, {
                        strSteamID: e.match.params.steamid_or_user_vanity,
                      }),
                  }),
                  r.createElement(n.AW, { component: o.R }),
                ),
              )
        );
      }
    },
  },
]);
