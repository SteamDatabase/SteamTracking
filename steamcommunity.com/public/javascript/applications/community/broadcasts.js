/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [32079],
    {
      65491: (b, _, s) => {
        "use strict";
        s.r(_), s.d(_, { default: () => Wt });
        var t = s(7850),
          H = s(64641),
          O = s(92757),
          q = s(90783),
          w = s(41735),
          T = s.n(w),
          K = s(14947),
          F = s(72604),
          z = s(76559),
          j = s(22950),
          W = s(34592),
          m = s(3166),
          tt = Object.defineProperty,
          et = Object.getOwnPropertyDescriptor,
          at = (i, e, n, r) => {
            for (
              var a = r > 1 ? void 0 : r ? et(e, n) : e, d = i.length - 1, o;
              d >= 0;
              d--
            )
              (o = i[d]) && (a = (r ? o(e, n, a) : o(a)) || a);
            return r && a && tt(e, n, a), a;
          };
        const J = class V {
          constructor() {
            (0, K.Gn)(this);
          }
          static s_Singleton;
          m_steamid;
          m_bShowOnlyVideo = !1;
          m_bShowOnlyChat = !1;
          m_strIFrameParentOrigin;
          m_curDebugInfo = null;
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
          GetIFrameParentOrigin() {
            return this.m_strIFrameParentOrigin;
          }
          async LoadBroadcastDebugInfo(e) {
            let n = m.TS.COMMUNITY_BASE_URL + "broadcast/broadcastdebuginfo",
              r = {
                steamid: this.m_steamid.ConvertTo64BitString(),
                origin: self.origin,
              };
            try {
              let a = await T().get(n, {
                params: r,
                withCredentials: !0,
                cancelToken: e ? e.token : void 0,
              });
              if (e && e.token.reason) return null;
              if (a && a.status == 200 && a.data && a.data.success == F.R)
                return (this.m_curDebugInfo = a.data), this.m_curDebugInfo;
            } catch (a) {
              let d = (0, W.H)(a);
              console.error(
                "LoadBroadcastDebugInfo: Failed " + d.strErrorMsg,
                d,
              );
            }
            return null;
          }
          async UpdateBroadcastSettings(e, n, r) {
            let a =
                m.TS.COMMUNITY_BASE_URL + "broadcast/updatebroadcastsettings",
              d = {
                steamid: this.m_steamid.ConvertTo64BitString(),
                matchid: e,
                title: n,
                sessionid: (0, m.KC)(),
              };
            try {
              let o = await T().get(a, {
                params: d,
                withCredentials: !0,
                cancelToken: r ? r.token : void 0,
              });
              if (r && r.token.reason) return !1;
              if (o && o.status == 200 && o.data && o.data.success == F.R) {
                const v = j.es.GetOrCreateBroadcastInfo(
                  this.m_steamid.ConvertTo64BitString(),
                );
                return (
                  v &&
                    (0, K.h5)(() => {
                      v.m_strTitle = n;
                    }),
                  !0
                );
              }
            } catch (o) {
              let v = (0, W.H)(o);
              console.error(
                "UpdateBroadcastSettings: Failed " + v.strErrorMsg,
                v,
              );
            }
            return !1;
          }
          async StopBroadcast(e) {
            const n = this.m_steamid.ConvertTo64BitString(),
              r = j.es.GetBroadcast(n);
            let a = m.TS.COMMUNITY_BASE_URL + "broadcast/stopbroadcast",
              d = {
                steamid: n,
                broadcastid: r ? r.m_ulBroadcastID : null,
                sessionid: (0, m.KC)(),
              };
            return await this.InternalSendSimpleGetRequest(
              "StopBroadcast",
              a,
              d,
              e,
            );
          }
          async SetBroadcasterRestrictions(e, n, r) {
            const a = this.m_steamid.ConvertTo64BitString(),
              d = j.es.GetBroadcast(a);
            let o =
                m.TS.COMMUNITY_BASE_URL + "broadcast/setbroadcastrestriction",
              v = {
                steamid: a,
                broadcastid: d ? d.m_ulBroadcastID : null,
                type: e,
                days: n,
                sessionid: (0, m.KC)(),
              };
            return await this.InternalSendSimpleGetRequest(
              "SetBroadcasterRestrictions",
              o,
              v,
              r,
            );
          }
          async SetUnBannable(e) {
            const n = this.m_steamid.ConvertTo64BitString(),
              r = j.es.GetBroadcast(n);
            let a = m.TS.COMMUNITY_BASE_URL + "broadcast/unban",
              d = {
                steamid: n,
                broadcastid: r ? r.m_ulBroadcastID : null,
                sessionid: (0, m.KC)(),
              };
            return await this.InternalSendSimpleGetRequest(
              "SetUnBannable",
              a,
              d,
              e,
            );
          }
          async SendUserReportOnBroadcast(e) {
            const n = this.m_steamid.ConvertTo64BitString(),
              r = j.es.GetBroadcast(n);
            let a = m.TS.COMMUNITY_BASE_URL + "broadcast/report",
              d = {
                steamid: n,
                broadcastid: r ? r.m_ulBroadcastID : null,
                description: e,
                sessionid: (0, m.KC)(),
              };
            return await this.InternalSendSimpleGetRequest(
              "SendUserReportOnBroadcast",
              a,
              d,
              null,
            );
          }
          async InternalSendSimpleGetRequest(e, n, r, a) {
            try {
              let d = await T().get(n, {
                params: r,
                withCredentials: !0,
                cancelToken: a ? a.token : void 0,
              });
              if (a && a.token.reason) return !1;
              if (d && d.status == 200 && d.data && d.data.success == F.R)
                return !0;
            } catch (d) {
              let o = (0, W.H)(d);
              console.error(
                `CCommunityBroadcastStore:${e}: Failed ` + o.strErrorMsg,
                o,
              );
            }
            return !1;
          }
          static Get() {
            return (
              V.s_Singleton ||
                ((V.s_Singleton = new V()), V.s_Singleton.Init()),
              V.s_Singleton
            );
          }
          Init() {
            let e = (0, m.Tc)("broadcastsinfo", "application_config");
            this.ValidateStoreDefault(e) &&
              ((this.m_steamid = new z.b(e.steamid)),
              (this.m_bShowOnlyChat = !!e.show_only_chat),
              (this.m_bShowOnlyVideo = !!e.show_only_video),
              (this.m_strIFrameParentOrigin =
                e.iframe_parent_origin || void 0));
          }
          ValidateStoreDefault(e) {
            const n = e;
            return n && typeof n == "object"
              ? typeof n.steamid == "string"
              : !1;
          }
        };
        at([K.sH], J.prototype, "m_curDebugInfo", 2);
        let f = J;
        var R = s(75844),
          u = s(90626),
          L = s(9398),
          st = s(23240),
          $ = s(53120),
          c = s.n($),
          h = s(90711),
          g = s(98112),
          x = s(25317),
          S = s(813),
          l = s(19316),
          p = s(25792),
          N = s(30825),
          Q = s(179),
          nt = s(95695),
          M = s.n(nt),
          lt = s(61431),
          X = s(2801),
          Y = s(88003),
          P = s(36707),
          k = s(82734),
          A = s(18210),
          dt = s(26485),
          gt = s(18057),
          rt = s(19730),
          B = s(17337);
        const ft = (i) => {
            const e = (0, u.useRef)(null),
              [n, r] = (0, u.useState)(null);
            return (
              (0, u.useEffect)(
                () => () => {
                  e.current && e.current("BroadcastDebugSection: unmounting");
                },
                [],
              ),
              (0, t.jsx)(p.tH, {
                children: (0, t.jsxs)("div", {
                  className: (0, P.A)(B.Container),
                  children: [
                    (0, t.jsx)("div", {
                      className: B.Controls,
                      children: (0, t.jsx)(l.$n, {
                        onClick: async () => {
                          e.current && e.current();
                          const a = T().CancelToken.source();
                          (e.current = a.cancel),
                            r(await f.Get().LoadBroadcastDebugInfo(a));
                        },
                        children: "(VO) Load Debug Info",
                      }),
                    }),
                    (0, t.jsx)(p.tH, { children: (0, t.jsx)(xt, { info: n }) }),
                  ],
                }),
              })
            );
          },
          xt = (i) => {
            const { info: e } = i,
              [n, r] = (0, u.useState)(!1);
            if (!e) return null;
            const a = f.Get().GetBroadcasterSteamID().ConvertTo64BitString(),
              d = j.es.GetBroadcast(a);
            return (0, t.jsxs)("div", {
              className: B.DisplaySection,
              children: [
                !!(e.last_error_result && e.last_error_result != F.R) &&
                  (0, t.jsxs)("div", {
                    className: B.SubSection,
                    children: [
                      (0, t.jsx)("div", {
                        className: B.Header,
                        children: "Error",
                      }),
                      (0, t.jsxs)("div", {
                        children: [
                          "EResult: ",
                          e.last_error_result,
                          ", occurred ",
                          e.last_error_time,
                          " - ",
                          (0, t.jsx)(gt.K4, {
                            dateAndTime: e.last_error_time,
                            bSingleLine: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, t.jsxs)("div", {
                  className: B.SubSection,
                  children: [
                    (0, t.jsx)("div", {
                      className: B.Header,
                      children: "Broadcast Setup",
                    }),
                    (0, t.jsxs)("div", {
                      children: ["Broadcaster: ", e.steam_id, ", SteamID: ", a],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "Directory Server: ",
                        e.directory_server,
                        ", SessionID: ",
                        e.broadcast_id,
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "Ingester Server: ",
                        e.relay_server,
                        ", UploadID: ",
                        e.upload_id,
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: ["Origin Server: ", e.origin_server],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "Chat Server: ",
                        e.chat_server,
                        ", chat_id: ",
                        e.chat_id,
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: ["Transcoder Server : ", e.transcode_server],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: B.SubSection,
                  children: [
                    (0, t.jsx)("div", {
                      className: B.Header,
                      children: "Ingester Info",
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "Client: ",
                        e.remote_address,
                        " ",
                        e.is_rtmp ? "(RTMP)" : "(STEAM CLIENT)",
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "Video Config: ",
                        e.upload_height,
                        "x",
                        e.upload_width,
                        "@",
                        e.upload_fps,
                        ", ",
                        e.upload_bandwidth,
                        " kbps ",
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "Audio Config: ",
                        e.upload_audio_channels,
                        "x",
                        e.upload_audio_samplerate,
                        "Hz, ",
                        e.upload_audio_bitrate / 1e3,
                        " kbps ",
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "Upload Stats: ",
                        e.upload_avg_fps,
                        " FPS, ",
                        e.upload_avg_bandwidth,
                        " kbps, ",
                        e.upload_avg_key_interval,
                        " msec key frame interval",
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "Upload Totals: ",
                        e.upload_total_frames_received,
                        " video frames, \xA0",
                        Math.round(
                          (e.upload_current_video_pts -
                            e.upload_first_video_pts) /
                            e.upload_video_timescale,
                        ),
                        " seconds ( ",
                        (0, rt.dm)(e.upload_total_bytes_uploaded || 0, 1),
                        " ) ",
                      ],
                    }),
                  ],
                }),
                !!e.transcode_server &&
                  (0, t.jsxs)("div", {
                    className: B.SubSection,
                    children: [
                      (0, t.jsx)("div", {
                        className: B.Header,
                        children: "Transcoder Info",
                      }),
                      (0, t.jsxs)("div", {
                        children: [
                          "Decoder ( ",
                          e.upload_height,
                          "x",
                          e.upload_width,
                          "@",
                          e.upload_fps,
                          ", ",
                          e.upload_bandwidth,
                          " kbps ) : \xA0",
                          e.transcoder_frames_to_decode,
                          " queued, \xA0",
                          e.transcoder_frames_total_decoded,
                          " decoded",
                        ],
                      }),
                      e.transcoder_streams.map((o) =>
                        (0, t.jsxs)(
                          "div",
                          {
                            children: [
                              "Encoder ",
                              o.representation_id,
                              " ( ",
                              o.height,
                              "x",
                              o.width,
                              "@",
                              o.fps,
                              " ",
                              o.bitrate,
                              " kbps ) : ",
                              o.frames_to_encode,
                              " queued, ",
                              o.frames_total_encoded,
                              " encoded",
                            ],
                          },
                          o.representation_id,
                        ),
                      ),
                    ],
                  }),
                (0, t.jsxs)("div", {
                  className: B.SubSection,
                  children: [
                    (0, t.jsx)("div", {
                      className: B.Header,
                      children: "Origin Info",
                    }),
                    e?.origin_video_streams?.map((o) =>
                      (0, t.jsxs)(
                        "div",
                        {
                          children: [
                            "Video Stream ",
                            o.representation_id,
                            " ( ",
                            o.height,
                            "x",
                            o.width,
                            "@",
                            o.fps,
                            " ",
                            o.bitrate,
                            " kbps ) : \xA0",
                            o.num_frames_queued,
                            " frames queued, \xA0",
                            o.num_segments_received,
                            " segments received, \xA0",
                            o.num_segments_cached * 2,
                            " seconds cached ( ",
                            (0, rt.dm)(o.memory_used, 2),
                            " )",
                          ],
                        },
                        o.representation_id,
                      ),
                    ),
                    "Audio Stream ",
                    e.origin_audio_stream.representation_id,
                    " ( ",
                    e.upload_audio_channels,
                    "x",
                    e.upload_audio_samplerate,
                    "Hz, ",
                    e.upload_audio_bitrate / 1e3,
                    " kbps ) : \xA0",
                    e.origin_audio_stream.num_frames_queued,
                    " frames queued, \xA0",
                    e.origin_audio_stream.num_segments_received,
                    " segments received, \xA0",
                    e.origin_audio_stream.num_segments_cached * 2,
                    " seconds cached ( ",
                    (0, rt.dm)(e.origin_audio_stream.memory_used, 2),
                    " )",
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: B.SubSection,
                  children: [
                    (0, t.jsx)("div", {
                      className: B.Header,
                      children: "Viewer Info",
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "Viewers: ",
                        e.current_viewers,
                        " current (",
                        e.current_anon_viewers,
                        " anonymous), ",
                        e.total_unique_viewers,
                        " total unique, ",
                        e.max_concurrent_viewers,
                        " max concurrent",
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "Average time watched: ",
                        e.average_watch_duration,
                        " seconds",
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "Last Minute: ",
                        e.added_viewers_last_minute,
                        " watch requests, ",
                        e.rejected_viewers_last_minute,
                        " rejected",
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: ["Restrictions: ", e.restriction],
                    }),
                    (0, t.jsx)("div", { children: e.extra_viewer_info }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: B.SubSection,
                  children: [
                    (0, t.jsx)("div", {
                      className: B.Header,
                      children: "Settings",
                    }),
                    (0, t.jsxs)("div", {
                      children: ["is replay? ", e.is_replay],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "is replay local file? ",
                        e.is_replay_local_file,
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: ["is replay clip? ", e.is_replay_clip],
                    }),
                    (0, t.jsxs)("div", {
                      children: ["is capturing VOD? ", e.is_capturing_vod],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "is white listed for store streaming? ",
                        e.is_whitelisted,
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: B.SubSection,
                  children: [
                    (0, t.jsx)("div", {
                      className: B.Header,
                      children: "App Info",
                    }),
                    (0, t.jsxs)("div", { children: ["appid: ", e.app_id] }),
                    (0, t.jsxs)("div", {
                      children: ["app name: ", e.app_name],
                    }),
                    (0, t.jsxs)("div", {
                      children: ["broadcast title: ", e.title],
                    }),
                    (0, t.jsxs)("div", {
                      children: ["thumbnail: ", e.thumbnail_url],
                    }),
                    !!e.thumbnail_url &&
                      (0, t.jsx)("img", { src: e.thumbnail_url }),
                    !!(e.app_id && e.app_id > 0) &&
                      (0, t.jsx)("div", {
                        className: B.AppSummaryWidgetCtn,
                        children: (0, t.jsx)(lt.p, {
                          id: e.app_id,
                          type: "game",
                          bPreferAssetWithoutOverride: !1,
                        }),
                      }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: B.SubSection,
                  children: [
                    (0, t.jsx)("div", {
                      className: B.Header,
                      children: "Manifest Information",
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "Heartbeat Interval: ",
                        d.m_data.heartbeat_interval,
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: ["DASH MPEG Url: ", d.m_data.url],
                    }),
                    (0, t.jsxs)("div", {
                      children: ["HLS Url: ", d.m_data.hls_url],
                    }),
                  ],
                }),
                (0, t.jsx)(l.$n, {
                  onClick: () => r(!n),
                  children: "Toggle Raw Data",
                }),
                !!n &&
                  (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("div", {
                        className: B.SubSection,
                        children: (0, t.jsx)(dt.G, { data: e }),
                      }),
                      (0, t.jsx)("div", {
                        className: B.SubSection,
                        children: (0, t.jsx)(dt.G, { data: d?.m_data || "" }),
                      }),
                    ],
                  }),
              ],
            });
          };
        var D = s(98371),
          Ct = s(46943),
          jt = s(35098),
          ct = s(16971);
        const It = (i) => {
          const e = i.steamid.GetAccountID(),
            { data: n } = (0, jt.hW)(e);
          return (0, t.jsxs)("div", {
            className: ct.AvatarCtn,
            children: [
              (0, t.jsx)("a", {
                href: n.GetCommunityProfileURL(),
                "data-miniprofile": "s" + i.steamid.ConvertTo64BitString(),
                children: (0, t.jsx)(Ct.i8, {
                  persona: n,
                  size: i.size,
                  statusPosition: "bottom",
                }),
              }),
              (0, t.jsxs)("div", {
                className: ct.NameAndProps,
                children: [
                  !!i.bShowName &&
                    (0, t.jsx)("a", {
                      href: n.GetCommunityProfileURL(),
                      "data-miniprofile":
                        "s" + i.steamid.ConvertTo64BitString(),
                      children: n.m_strProfileURL,
                    }),
                  i.children,
                ],
              }),
            ],
          });
        };
        var mt = s(65946),
          ut = s(84676),
          bt = s(86390),
          ht = s(36118),
          At = s(53107),
          vt = s(53113),
          E = s(46699),
          pt = s(71421),
          Dt = s(24642);
        function Tt(i) {
          const { broadcasterSteamID: e } = i,
            n = e.ConvertTo64BitString(),
            [r, a] = (0, mt.q3)(() => {
              const I = j.es.GetOrCreateBroadcastInfo(n);
              let y = I.m_nAppID != j.fO ? I.m_nAppID : 0;
              return [I.m_nViewerCount, y];
            }),
            [d] = (0, ut.t7)(a, { include_assets: !0 });
          let o = d?.GetAssets().GetMainCapsuleURL(),
            v = o && o.length > 0;
          return (0, t.jsx)(p.tH, {
            children: (0, t.jsxs)("div", {
              className: E.ProfileCtn,
              children: [
                v &&
                  (0, t.jsx)("a", {
                    className: E.GameCapsule,
                    href: (0, vt.k2)(
                      d?.GetStorePageURL() || m.TS.STORE_BASE_URL + "app/" + a,
                    ),
                    children: (0, t.jsx)("img", { src: o }),
                  }),
                (0, t.jsxs)("div", {
                  className: E.StreamDetailsCtn,
                  children: [
                    (0, t.jsxs)("div", {
                      className: E.GameAndOptionsCtn,
                      children: [
                        (0, t.jsxs)("div", {
                          className: E.GameAndViewersCtn,
                          children: [
                            (0, t.jsx)(wt, { broadcasterSteamID: e }),
                            (0, t.jsx)("div", {
                              className: E.ViewerCount,
                              children: (0, A.Yp)(
                                "#Broadcast_ViewerCount",
                                (0, Dt.D)(r),
                              ),
                            }),
                          ],
                        }),
                        (0, t.jsx)(yt, { broadcasterSteamID: e }),
                      ],
                    }),
                    (0, t.jsx)(It, {
                      steamid: e,
                      size: "Medium",
                      bShowName: !0,
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        const wt = (0, R.PA)((i) => {
            const { broadcasterSteamID: e } = i,
              n = e.ConvertTo64BitString(),
              [r, a] = (0, mt.q3)(() => {
                const o = j.es.GetOrCreateBroadcastInfo(n);
                let v = o.m_nAppID != j.fO ? o.m_nAppID : 0;
                return [o.m_strAppTitle, v];
              }),
              [d] = (0, ut.t7)(a, { include_assets: !0 });
            return (0, t.jsxs)("div", {
              className: E.BroadcastTitleCtn,
              children: [
                (0, A.we)("#Broadcast_Playing"),
                (0, t.jsx)("a", {
                  href: (0, vt.k2)(
                    d?.GetStorePageURL() || m.TS.STORE_BASE_URL + "app/" + a,
                  ),
                  children: r || d?.GetName(),
                }),
                r?.length > 0 && (0, t.jsxs)("span", { children: [" - ", r] }),
              ],
            });
          }),
          yt = (0, R.PA)((i) => {
            const { broadcasterSteamID: e } = i,
              n = e.ConvertTo64BitString(),
              r = (a) => {
                m.iA.logged_in
                  ? (0, Y.pg)(
                      (0, t.jsx)(Rt, { broadcasterSteamID: e }),
                      (0, k.uX)(a),
                    )
                  : (0, Y.pg)(
                      (0, t.jsx)(X.o0, {
                        strTitle: (0, A.we)("#EventDisplay_Share_NotLoggedIn"),
                        strDescription: (0, A.we)(
                          "#EventDisplay_Share_NotLoggedIn_Description",
                        ),
                        strOKButtonText: (0, A.we)("#MobileLogin_SignIn"),
                        onOK: () => (0, bt.vg)(),
                      }),
                      (0, k.uX)(a),
                    );
              };
            return (0, t.jsxs)("div", {
              className: E.BroadcastUserActionsCtn,
              children: [
                m.iA.steamid != i.broadcasterSteamID.ConvertTo64BitString() &&
                  (0, t.jsx)(l.$n, {
                    onClick: r,
                    children: (0, t.jsx)(pt.he, {
                      toolTipContent: (0, A.we)("#Broadcast_User_Report_ttip"),
                      children: (0, t.jsx)(ht.lNU, {}),
                    }),
                  }),
                (0, t.jsx)(l.$n, {
                  onClick: (a) =>
                    (0, At.EP)(
                      a,
                      "https://help.steampowered.com/faqs/view/548F-BC55-89EB-1BC8",
                    ),
                  children: (0, t.jsx)(pt.he, {
                    toolTipContent: (0, A.we)("#Broadcast_User_FAQ_ttip"),
                    children: (0, t.jsx)(ht.$$j, {}),
                  }),
                }),
              ],
            });
          }),
          Rt = (i) => {
            const [e, n] = (0, u.useState)(""),
              r = async () => {
                await f.Get().SendUserReportOnBroadcast(e),
                  i.closeModal && i.closeModal();
              };
            return (0, t.jsx)(X.o0, {
              strTitle: (0, A.we)("#Broadcast_ReportItem_Title"),
              strDescription: (0, A.we)("#Broadcast_ReportItem_Description"),
              onCancel: i.closeModal,
              bOKDisabled: e.trim().length == 0,
              onOK: r,
              children: (0, t.jsx)("textarea", {
                value: e,
                onChange: (a) => n(a.currentTarget.value),
                rows: 10,
                cols: 80,
              }),
            });
          };
        var Ut = s(30593),
          Bt = s(85599);
        const Nt = (i) => {
            if (!m.iA.is_support) return null;
            const e = (a, d) => {
                (0, Y.pg)(
                  (0, t.jsx)(Et, {
                    broadcastSteamID: i.broadcastSteamID,
                    strAction: d,
                  }),
                  (0, k.uX)(a),
                );
              },
              n = (a) => {
                (0, Y.pg)(
                  (0, t.jsx)(Ot, { steamid: i.broadcastSteamID }),
                  (0, k.uX)(a),
                );
              },
              r =
                "https://steamsupport.valvesoftware.com/account/overview/" +
                i.broadcastSteamID.ConvertTo64BitString();
            return (0, t.jsxs)("div", {
              className: (0, P.A)(Ut.AdminControls, M().ValveOnlyBackground),
              children: [
                (0, t.jsx)("div", { children: "(VO) Support Tools" }),
                (0, t.jsx)(l.$n, {
                  onClick: (a) => e(a, "frontpage"),
                  children: "Remove from Front Page",
                }),
                (0, t.jsx)(l.$n, {
                  onClick: (a) => e(a, "ban"),
                  children: "Ban from Broadcasting",
                }),
                (0, t.jsx)(l.$n, { onClick: n, children: "Make Unbannable" }),
                (0, t.jsx)(l.$n, {
                  onClick: (a) => (0, At.EP)(a, r),
                  children: "Go to Support Page",
                }),
              ],
            });
          },
          Et = (0, R.PA)((i) => {
            const { broadcastSteamID: e, strAction: n } = i,
              [r, a] = (0, u.useState)(1),
              [d, o] = (0, u.useState)(!1),
              [v, I] = (0, u.useState)(!1),
              [y, U] = (0, u.useState)(!1),
              C = (0, u.useRef)(null);
            (0, u.useEffect)(
              () => () => {
                C.current && C.current("BroadcastConfirmBanAction: unmounting");
              },
              [],
            );
            const G = [
                { label: "1 Day", data: 1 },
                { label: "1 Week", data: 7 },
                { label: "1 Month", data: 30 },
                { label: "6 Months", data: 180 },
                { label: "1 Year", data: 365 },
              ],
              Z = () => i.closeModal && i.closeModal(),
              Jt = async () => {
                let ot = !1;
                o(!0);
                try {
                  C.current && C.current();
                  const it = T().CancelToken.source();
                  C.current = it.cancel;
                  let Xt = await f.Get().SetBroadcasterRestrictions(n, r, it);
                  it.token.reason || (Xt = !0);
                } finally {
                  o(!1), I(!0), U(ot);
                }
              };
            return (0, t.jsx)(p.tH, {
              children: (0, t.jsx)(X.x_, {
                onEscKeypress: Z,
                children: (0, t.jsxs)(l.UC, {
                  children: [
                    (0, t.jsx)(l.Y9, {
                      children:
                        n == "frontpage"
                          ? "Remove Broadcast From Front Page"
                          : "Ban from Broadcasting",
                    }),
                    (0, t.jsx)(l.nB, {
                      children: (0, t.jsxs)(l.a3, {
                        children: [
                          (0, t.jsx)("p", {
                            children:
                              n == "frontpage"
                                ? "How long should we prevent the broadcast from appearing in community or store?"
                                : "How long should we prevent the user from Broadcast at all on Steam?",
                          }),
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)(l.m, {
                                rgOptions: G,
                                selectedOption: r,
                                onChange: (ot) => a(ot.data),
                              }),
                              !!d && (0, t.jsx)(Bt.t, {}),
                              !!v &&
                                (0, t.jsx)("div", {
                                  children: y
                                    ? "Successfully Completed Request"
                                    : "Failed to complete request, check browser console and/or try again later",
                                }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsx)(l.wi, {
                      children: v
                        ? (0, t.jsx)(l.jn, {
                            onClick: Z,
                            children: (0, A.we)("#Button_Dismiss"),
                          })
                        : (0, t.jsxs)(l.dR, {
                            children: [
                              (0, t.jsx)(l.$n, {
                                onClick: Z,
                                children: (0, A.we)("#Button_Cancel"),
                              }),
                              (0, t.jsx)(l.jn, {
                                onClick: Jt,
                                children: (0, A.we)("#Button_Confirm"),
                              }),
                            ],
                          }),
                    }),
                  ],
                }),
              }),
            });
          }),
          Ot = (i) => {
            const [e, n] = (0, u.useState)(!1),
              [r, a] = (0, u.useState)(!1),
              [d, o] = (0, u.useState)(!1),
              v = (0, u.useRef)(null);
            (0, u.useEffect)(
              () => () => {
                v.current && v.current("BroadcastMakeUnbannable: unmounting");
              },
              [],
            );
            const I = () => i.closeModal && i.closeModal(),
              y = async () => {
                n(!0);
                let U = !1;
                try {
                  v.current && v.current();
                  const C = T().CancelToken.source();
                  (v.current = C.cancel), (U = await f.Get().SetUnBannable(C));
                } finally {
                  n(!1), a(!0), o(U);
                }
              };
            return (0, t.jsx)(p.tH, {
              children: (0, t.jsx)(X.x_, {
                onEscKeypress: I,
                children: (0, t.jsxs)(l.UC, {
                  children: [
                    (0, t.jsx)(l.Y9, { children: "Make Broadcast Unbannable" }),
                    (0, t.jsx)(l.nB, {
                      children: (0, t.jsxs)(l.a3, {
                        children: [
                          (0, t.jsx)("p", {
                            children:
                              "Prevent automatic, report based banning changes to this strema visibility the stream for 1 week?",
                          }),
                          (0, t.jsxs)("div", {
                            children: [
                              !!e && (0, t.jsx)(Bt.t, {}),
                              !!r &&
                                (0, t.jsx)("div", {
                                  children: d
                                    ? "Successfully Set Unbannable"
                                    : "Failed to make Unbannable",
                                }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsx)(l.wi, {
                      children: r
                        ? (0, t.jsx)(l.jn, {
                            onClick: I,
                            children: (0, A.we)("#Button_Dismiss"),
                          })
                        : (0, t.jsxs)(l.dR, {
                            children: [
                              (0, t.jsx)(l.$n, {
                                onClick: I,
                                children: (0, A.we)("#Button_Cancel"),
                              }),
                              (0, t.jsx)(l.jn, {
                                onClick: y,
                                children: (0, A.we)("#Button_Confirm"),
                              }),
                            ],
                          }),
                    }),
                  ],
                }),
              }),
            });
          };
        var Qt = s(11243),
          Mt = s(75372);
        function Pt() {
          const [i] = (0, u.useState)(
            () => (0, m.Tc)("ewatchlocation", "application_config") || h.nn.CJ,
          );
          return i;
        }
        function Gt(i) {
          const e = f.Get().GetIFrameParentOrigin();
          e &&
            window.parent !== window &&
            window.parent.postMessage({ msg: i }, e);
        }
        function Ht() {
          const [i, e] = (0, u.useState)(
            () =>
              new URLSearchParams(window.location.search).get("broadcastid") ||
              void 0,
          );
          return (
            (0, u.useEffect)(() => {
              const n = f.Get().GetIFrameParentOrigin(),
                r = (a) => {
                  !n ||
                    a.origin !== n ||
                    a.data?.msg !== "OnVideoIFrameBroadcastIDChanged" ||
                    !a.data.broadcastid ||
                    e(String(a.data.broadcastid));
                };
              return (
                window.addEventListener("message", r),
                () => window.removeEventListener("message", r)
              );
            }, []),
            i
          );
        }
        const Ft = (0, R.PA)((i) => {
          const e = f.Get().GetBroadcasterSteamID(),
            n = e?.ConvertTo64BitString(),
            r = Pt(),
            [a, d] = (0, Q.QD)("muted", !0),
            o = j.es.GetBroadcast(n),
            v = j.es.GetOrCreateBroadcastInfo(n),
            I = Ht();
          if (!n) return null;
          let y = o?.m_ulBroadcastID;
          f.Get().BShowOnlyChat() && (y = I);
          let U;
          return (
            f.Get().GetIFrameParentOrigin() &&
              (U = () => Gt("OnLoginButtonClicked")),
            (0, t.jsx)(t.Fragment, {
              children: (0, t.jsxs)("div", {
                className: (0, P.A)(D.BroadcastPage),
                children: [
                  (0, t.jsxs)("div", {
                    className: (0, P.A)(c().BroadcastAndChat),
                    children: [
                      !f.Get().BShowOnlyChat() &&
                        (0, t.jsx)(p.tH, {
                          children: (0, t.jsx)("div", {
                            className: (0, P.A)(c().wrapper),
                            children: (0, t.jsx)("div", {
                              className: (0, P.A)({
                                [c().video_placeholder]: !0,
                                video_placeholder_trgt: !0,
                                [c().NoChat]: f.Get().BShowOnlyVideo(),
                              }),
                              children: (0, t.jsx)("div", {
                                className: c().BroadcastPlayerContainer,
                                children: (0, t.jsx)(p.tH, {
                                  children: (0, t.jsx)(st.default, {
                                    steamIDBroadcast: n,
                                    watchLocation: r,
                                    bStartMuted: a,
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                      !f.Get().BShowOnlyVideo() &&
                        (0, t.jsx)("div", {
                          className: c().detail_chat_ctn,
                          children: (0, t.jsx)("div", {
                            className: c().ChatContainer,
                            children: (0, t.jsx)(p.tH, {
                              children: (0, t.jsx)(L.I, {
                                emoticonStore: x.MX,
                                watchLocation: h.nn.fe,
                                steamID: n,
                                broadcastID: y,
                                onSignIn: U,
                              }),
                            }),
                          }),
                        }),
                    ],
                  }),
                  !f.Get().BShowInIframe() &&
                    (0, t.jsx)(Lt, { broadcasterSteamID: e, broadcastInfo: v }),
                ],
              }),
            })
          );
        });
        function St(i) {
          return i != 0 && i != j.fO;
        }
        const Lt = (0, R.PA)((i) => {
            const { broadcasterSteamID: e, broadcastInfo: n } = i,
              [r, a] = (0, u.useState)(null);
            let d = n.m_nAppID;
            return (
              (0, u.useEffect)(() => {
                const o = async () => {
                  let v = await S.ac.LoadOGGClanInfoForAppID(d);
                  a(v);
                };
                St(d) && o();
              }, [d]),
              (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(Tt, { broadcasterSteamID: e }),
                  (0, t.jsx)(Vt, { steamid: e }),
                  !!m.iA.is_support &&
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)(Nt, { broadcastSteamID: e }),
                        (0, t.jsx)("div", {
                          className: (0, P.A)(
                            M().ValveOnlyBackground,
                            D.DebugCtn,
                          ),
                          children: (0, t.jsx)(ft, {}),
                        }),
                      ],
                    }),
                  St(d) &&
                    (0, t.jsxs)("div", {
                      className: D.GameInfoCtn,
                      children: [
                        (0, t.jsxs)("div", {
                          className: D.GameAboutTitleCtn,
                          children: [
                            (0, t.jsxs)("div", {
                              className: D.GameAboutTitle,
                              children: [
                                " ",
                                (0, A.we)("#Broadcast_About_Game"),
                                " ",
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className: M().EventSectionSpacer,
                              children: "\xA0",
                            }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className: D.GameInfo,
                          children: (0, t.jsx)(lt.p, {
                            id: Number.parseInt(n.m_strAppId),
                            type: "game",
                            bPreferAssetWithoutOverride: !1,
                          }),
                        }),
                      ],
                    }),
                  !!r &&
                    (0, t.jsx)("div", {
                      className: D.RelatedEvents,
                      children: (0, t.jsx)(N.r, {
                        clanAccountID: r.clanAccountID,
                        trackingLocation: g.Tc.My,
                        partnerEventStore: Mt.Av,
                        bViewAllShowInfiniteScroll: !0,
                      }),
                    }),
                ],
              })
            );
          }),
          Vt = (0, R.PA)((i) => {
            const e = (0, u.useRef)(null);
            let n = j.es.GetOrCreateBroadcastInfo(
              i.steamid.ConvertTo64BitString(),
            );
            const [r, a] = (0, u.useState)(n.m_strTitle),
              [d, o] = (0, u.useState)(""),
              [v, I] = (0, u.useState)(null);
            if (
              ((0, u.useEffect)(
                () => (
                  a(n.m_strTitle),
                  () => {
                    e.current && e.current("BroadcastControls: unmounting");
                  }
                ),
                [n.m_strTitle],
              ),
              m.iA.accountid != i.steamid.GetAccountID())
            )
              return null;
            const y = async () => {
                e.current && e.current();
                const C = T().CancelToken.source();
                e.current = C.cancel;
                let G = await f.Get().UpdateBroadcastSettings(d, r, C);
                C.token.reason ||
                  I(
                    (0, A.we)(
                      G
                        ? "#Broadcast_Control_Success"
                        : "#Broadcast_Control_Failure",
                    ),
                  );
              },
              U = (C) => {
                (0, Y.pg)(
                  (0, t.jsx)(X.o0, {
                    strTitle: (0, A.we)("#Broadcast_Control_StopBroadcast"),
                    strDescription: (0, A.we)("#EventEditor_GenericAreYouSure"),
                    onOK: async () => {
                      e.current && e.current();
                      const G = T().CancelToken.source();
                      e.current = G.cancel;
                      let Z = await f.Get().StopBroadcast(G);
                      G.token.reason ||
                        I(
                          (0, A.we)(
                            Z
                              ? "#Broadcast_Control_StopSuccess"
                              : "#Broadcast_Control_StopFailure",
                          ),
                        );
                    },
                  }),
                  (0, k.uX)(C),
                );
              };
            return (0, t.jsxs)("div", {
              className: D.ControlCtn,
              children: [
                (0, t.jsx)("div", {
                  className: D.ControlsTitle,
                  children: (0, A.we)("#Broadcaster_Control_title"),
                }),
                (0, t.jsxs)("div", {
                  className: D.TitleInput,
                  children: [
                    (0, t.jsxs)("div", {
                      className: D.Options,
                      children: [
                        (0, t.jsx)(l.pd, {
                          type: "text",
                          label: (0, A.we)("#Broadcast_title_title"),
                          onChange: (C) => a(C.currentTarget.value || ""),
                          placeholder: (0, A.we)(
                            "#Broadcast_title_placeholder",
                          ),
                          value: r,
                        }),
                        (0, t.jsx)(l.pd, {
                          type: "text",
                          label: (0, A.we)("#Broadcast_Control_matchid"),
                          onChange: (C) => o(C.currentTarget.value || ""),
                          value: d,
                        }),
                        (0, t.jsxs)(l.$n, {
                          onClick: y,
                          children: [
                            (0, A.we)("#Broadcast_save_changes"),
                            (0, t.jsx)(Qt.o, {
                              tooltip: (0, A.we)("#Broadcast_save_title_ttip"),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: D.StopCtn,
                      children: [
                        (0, t.jsx)(l.$n, {
                          onClick: U,
                          children: (0, A.we)(
                            "#Broadcast_Control_StopBroadcast",
                          ),
                        }),
                        !!v && (0, t.jsx)("div", { children: v }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          });
        let Kt = { BroadcastWatch: (i) => `/broadcast/(watch|watchnew)/${i}` };
        function Wt(i) {
          return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsxs)(O.dO, {
              children: [
                (0, t.jsx)(O.qh, {
                  path: Kt.BroadcastWatch(":steamid_or_user_vanity"),
                  render: (e) =>
                    (0, t.jsx)(Ft, {
                      strSteamID: e.match.params.steamid_or_user_vanity,
                    }),
                }),
                (0, t.jsx)(O.qh, { component: q.a }),
              ],
            }),
          });
        }
      },
      46943: (b, _, s) => {
        "use strict";
        s.d(_, { Ul: () => R, i8: () => L });
        var t = s(7850),
          H = s(90626),
          O = s(75844),
          q = s(5858),
          w = s(36707),
          T = s(3166),
          K = s(13465);
        const F =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          z =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
          j =
            s.p +
            "images/applications/community/avatar_default_full.jpg?v=valveisgoodatcaching";
        var W = s(43047),
          m = s.n(W),
          tt = s(71742),
          et = Object.defineProperty,
          at = Object.getOwnPropertyDescriptor,
          J = (c, h, g, x) => {
            for (
              var S = x > 1 ? void 0 : x ? at(h, g) : h, l = c.length - 1, p;
              l >= 0;
              l--
            )
              (p = c[l]) && (S = (x ? p(h, g, S) : p(S)) || S);
            return x && S && et(h, g, S), S;
          };
        function f(c) {
          switch (c) {
            case "X-Small":
            case "Small":
              return F;
            case "Medium":
            case "MediumLarge":
              return z;
            case "Large":
            case "X-Large":
            case "FillArea":
              return j;
            default:
              return (0, tt.z_)(c, `Unhandled size ${c}`), z;
          }
        }
        const R = H.memo(function (h) {
            const {
                strAvatarURL: g,
                size: x = "Medium",
                className: S,
                statusStyle: l,
                statusPosition: p,
                children: N,
                ...Q
              } = h,
              nt = H.useMemo(() => {
                const M = [];
                return g && M.push(g), M.push(f(x)), M;
              }, [g, x]);
            return (0, t.jsxs)("div", {
              className: (0, w.A)(
                m().avatarHolder,
                "avatarHolder",
                "no-drag",
                x,
                S,
              ),
              ...Q,
              children: [
                (0, t.jsx)("div", {
                  className: (0, w.A)(m().avatarStatus, "avatarStatus", p),
                  style: l,
                }),
                (0, t.jsx)(K.c, {
                  className: (0, w.A)(m().avatar, "avatar"),
                  rgSources: nt,
                  draggable: !1,
                }),
                N,
              ],
            });
          }),
          u = H.memo(function (h) {
            const {
              strAvatarURL: g,
              size: x = "Medium",
              className: S,
              statusStyle: l,
              statusPosition: p,
              children: N,
              ...Q
            } = h;
            return (0, t.jsxs)("div", {
              className: (0, w.A)(
                m().avatarHolder,
                "avatarHolder",
                "no-drag",
                x,
                S,
              ),
              ...Q,
              children: [
                (0, t.jsx)("div", {
                  className: (0, w.A)(m().avatarStatus, "avatarStatus", p),
                  style: l,
                }),
                (0, t.jsx)("img", {
                  className: (0, w.A)(m().avatar, "avatar"),
                  src: g,
                  draggable: !1,
                }),
                N,
              ],
            });
          });
        let L = class extends H.Component {
          render() {
            const {
              persona: c,
              size: h = "Medium",
              animatedAvatar: g,
              className: x,
              strBackupAvatarURL: S,
              ...l
            } = this.props;
            let p = "";
            return (
              g && g.image_small && g.image_small.length != 0
                ? (p = T.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + g.image_small)
                : c
                  ? ((p = c.avatar_url_medium),
                    h == "Small" || h == "X-Small"
                      ? (p = c.avatar_url)
                      : (h == "Large" || h == "X-Large" || h == "FillArea") &&
                        (p = c.avatar_url_full))
                  : S && (p = S),
              (0, t.jsx)(R, {
                strAvatarURL: p,
                size: h,
                className: (0, w.A)((0, q.rO)(c), x),
                ...l,
              })
            );
          }
        };
        L = J([O.PA], L);
        const st = (0, O.PA)((c) => {
          const {
            profileItem: h,
            className: g,
            bDisableAnimation: x,
            ...S
          } = c;
          if (!h || !h.image_small || h.image_small.length == 0) return null;
          let l = x ? h.image_large : h.image_small;
          return (
            l || (l = h.image_small),
            l.startsWith("https://") ||
              (l = T.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + l),
            (0, t.jsx)("div", {
              className: (0, w.A)(m().avatarFrame, g, "avatarFrame"),
              ...S,
              children: (0, t.jsx)("img", {
                className: m().avatarFrameImg,
                src: l,
              }),
            })
          );
        });
        let $ = class extends H.Component {
          m_timer;
          constructor(c) {
            super(c),
              (this.state = { bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = 0);
          }
          componentDidMount() {
            this.props.bParentHovered || this.SetupAnimationTimer();
          }
          SetupAnimationTimer() {
            let c = 0;
            switch (this.props.loopDuration) {
              case "Short":
                c = 2500;
                break;
              case "Medium":
                c = 5e3;
                break;
              case "Long":
                c = 1e4;
                break;
            }
            c != 0 &&
              (this.setState({ bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = window.setTimeout(
                () => this.setState({ bAnimate: !1 }),
                c,
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
          componentDidUpdate(c) {
            this.props.loopDuration != c.loopDuration &&
              (this.props.loopDuration == "None"
                ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
                : this.props.loopDuration == "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : (this.setState({ bAnimate: !0 }),
                    this.SetupAnimationTimer())),
              this.props.bParentHovered != c.bParentHovered &&
                (this.props.bParentHovered &&
                this.props.loopDuration != "None" &&
                this.props.loopDuration != "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : this.state.bAnimate && this.SetupAnimationTimer());
          }
          render() {
            let {
              loopDuration: c,
              animatedAvatar: h,
              avatarFrame: g,
              children: x,
              style: S,
              bLimitProfileFrameAnimationTime: l,
              bParentHovered: p,
              ...N
            } = this.props;
            N.onClick && (S = { ...S, cursor: "pointer" });
            const Q = this.state.bAnimate ? (h ?? void 0) : void 0;
            return (0, t.jsx)("div", {
              onMouseEnter: () =>
                this.setState({ bAnimate: this.props.loopDuration != "None" }),
              onMouseLeave: () => this.SetupAnimationTimer(),
              children: (0, t.jsxs)(L, {
                animatedAvatar: Q,
                ...N,
                children: [
                  x,
                  (0, t.jsx)(st, {
                    profileItem: g ?? null,
                    bDisableAnimation: l && !this.state.bAnimate,
                  }),
                ],
              }),
            });
          }
        };
        $ = J([O.PA], $);
      },
      17337: (b) => {
        b.exports = {
          SubSection: "_3Ac4zk8HfCBpJcfDHwJwfg",
          Header: "_2vrXB5mprkP7EUv5iR8us3",
          AppSummaryWidgetCtn: "_35ozIX3OQwwAVHZP2bRufO",
        };
      },
      98371: (b) => {
        b.exports = {
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
      46699: (b) => {
        b.exports = {
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
      30593: (b) => {
        b.exports = { AdminControls: "_3KL0bXxikaWzpb1AY27eH0" };
      },
      16971: (b) => {
        b.exports = {
          AvatarCtn: "_3n3n08bcnphB_5qaSwJDyQ",
          NameAndProps: "_3PljhCwFW7qZ0qu22k7frk",
        };
      },
      43047: (b) => {
        b.exports = {
          narrowWidth: "500px",
          avatarHolder: "nibodjvvrm86uCfnnAn4g",
          avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
          avatar: "_3h-QRJGxnVOIExtHD1R0f2",
          avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
          avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
        };
      },
    },
  ]);
})();
