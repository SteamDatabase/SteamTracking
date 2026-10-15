/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [32079],
    {
      65491: (b, z, n) => {
        "use strict";
        n.r(z), n.d(z, { default: () => Wt });
        var t = n(7850),
          V = n(64641),
          N = n(92757),
          at = n(90783),
          O = n(41735),
          T = n.n(O),
          K = n(14947),
          P = n(72604),
          $ = n(76559),
          x = n(22950),
          W = n(34592),
          v = n(3166),
          st = Object.defineProperty,
          q = Object.getOwnPropertyDescriptor,
          nt = (i, a, e, r) => {
            for (
              var s = r > 1 ? void 0 : r ? q(a, e) : a, o = i.length - 1, c;
              o >= 0;
              o--
            )
              (c = i[o]) && (s = (r ? c(a, e, s) : c(s)) || s);
            return r && s && st(a, e, s), s;
          };
        const tt = class L {
          constructor() {
            (this.m_bShowOnlyVideo = !1),
              (this.m_bShowOnlyChat = !1),
              (this.m_curDebugInfo = null),
              (0, K.Gn)(this);
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
          GetIFrameParentOrigin() {
            return this.m_strIFrameParentOrigin;
          }
          async LoadBroadcastDebugInfo(a) {
            let e = v.TS.COMMUNITY_BASE_URL + "broadcast/broadcastdebuginfo",
              r = {
                steamid: this.m_steamid.ConvertTo64BitString(),
                origin: self.origin,
              };
            try {
              let s = await T().get(e, {
                params: r,
                withCredentials: !0,
                cancelToken: a ? a.token : void 0,
              });
              if (a && a.token.reason) return null;
              if (s && s.status == 200 && s.data && s.data.success == P.R)
                return (this.m_curDebugInfo = s.data), this.m_curDebugInfo;
            } catch (s) {
              let o = (0, W.H)(s);
              console.error(
                "LoadBroadcastDebugInfo: Failed " + o.strErrorMsg,
                o,
              );
            }
            return null;
          }
          async UpdateBroadcastSettings(a, e, r) {
            let s =
                v.TS.COMMUNITY_BASE_URL + "broadcast/updatebroadcastsettings",
              o = {
                steamid: this.m_steamid.ConvertTo64BitString(),
                matchid: a,
                title: e,
                sessionid: (0, v.KC)(),
              };
            try {
              let c = await T().get(s, {
                params: o,
                withCredentials: !0,
                cancelToken: r ? r.token : void 0,
              });
              if (r && r.token.reason) return !1;
              if (c && c.status == 200 && c.data && c.data.success == P.R) {
                const d = x.es.GetOrCreateBroadcastInfo(
                  this.m_steamid.ConvertTo64BitString(),
                );
                return (
                  d &&
                    (0, K.h5)(() => {
                      d.m_strTitle = e;
                    }),
                  !0
                );
              }
            } catch (c) {
              let d = (0, W.H)(c);
              console.error(
                "UpdateBroadcastSettings: Failed " + d.strErrorMsg,
                d,
              );
            }
            return !1;
          }
          async StopBroadcast(a) {
            const e = this.m_steamid.ConvertTo64BitString(),
              r = x.es.GetBroadcast(e);
            let s = v.TS.COMMUNITY_BASE_URL + "broadcast/stopbroadcast",
              o = {
                steamid: e,
                broadcastid: r ? r.m_ulBroadcastID : null,
                sessionid: (0, v.KC)(),
              };
            return await this.InternalSendSimpleGetRequest(
              "StopBroadcast",
              s,
              o,
              a,
            );
          }
          async SetBroadcasterRestrictions(a, e, r) {
            const s = this.m_steamid.ConvertTo64BitString(),
              o = x.es.GetBroadcast(s);
            let c =
                v.TS.COMMUNITY_BASE_URL + "broadcast/setbroadcastrestriction",
              d = {
                steamid: s,
                broadcastid: o ? o.m_ulBroadcastID : null,
                type: a,
                days: e,
                sessionid: (0, v.KC)(),
              };
            return await this.InternalSendSimpleGetRequest(
              "SetBroadcasterRestrictions",
              c,
              d,
              r,
            );
          }
          async SetUnBannable(a) {
            const e = this.m_steamid.ConvertTo64BitString(),
              r = x.es.GetBroadcast(e);
            let s = v.TS.COMMUNITY_BASE_URL + "broadcast/unban",
              o = {
                steamid: e,
                broadcastid: r ? r.m_ulBroadcastID : null,
                sessionid: (0, v.KC)(),
              };
            return await this.InternalSendSimpleGetRequest(
              "SetUnBannable",
              s,
              o,
              a,
            );
          }
          async SendUserReportOnBroadcast(a) {
            const e = this.m_steamid.ConvertTo64BitString(),
              r = x.es.GetBroadcast(e);
            let s = v.TS.COMMUNITY_BASE_URL + "broadcast/report",
              o = {
                steamid: e,
                broadcastid: r ? r.m_ulBroadcastID : null,
                description: a,
                sessionid: (0, v.KC)(),
              };
            return await this.InternalSendSimpleGetRequest(
              "SendUserReportOnBroadcast",
              s,
              o,
              null,
            );
          }
          async InternalSendSimpleGetRequest(a, e, r, s) {
            try {
              let o = await T().get(e, {
                params: r,
                withCredentials: !0,
                cancelToken: s ? s.token : void 0,
              });
              if (s && s.token.reason) return !1;
              if (o && o.status == 200 && o.data && o.data.success == P.R)
                return !0;
            } catch (o) {
              let c = (0, W.H)(o);
              console.error(
                `CCommunityBroadcastStore:${a}: Failed ` + c.strErrorMsg,
                c,
              );
            }
            return !1;
          }
          static Get() {
            return (
              L.s_Singleton ||
                ((L.s_Singleton = new L()), L.s_Singleton.Init()),
              L.s_Singleton
            );
          }
          Init() {
            let a = (0, v.Tc)("broadcastsinfo", "application_config");
            this.ValidateStoreDefault(a) &&
              ((this.m_steamid = new $.b(a.steamid)),
              (this.m_bShowOnlyChat = !!a.show_only_chat),
              (this.m_bShowOnlyVideo = !!a.show_only_video),
              (this.m_strIFrameParentOrigin =
                a.iframe_parent_origin || void 0));
          }
          ValidateStoreDefault(a) {
            const e = a;
            return e && typeof e == "object"
              ? typeof e.steamid == "string"
              : !1;
          }
        };
        nt([K.sH], tt.prototype, "m_curDebugInfo", 2);
        let g = tt;
        var U = n(75844),
          h = n(90626),
          et = n(9398),
          G = n(23240),
          rt = n(53120),
          w = n.n(rt),
          m = n(90711),
          u = n(98112),
          B = n(25317),
          C = n(813),
          l = n(19316),
          p = n(25792),
          j = n(30825),
          H = n(179),
          J = n(95695),
          X = n.n(J),
          F = n(61431),
          Y = n(2801),
          _ = n(88003),
          Q = n(36707),
          Z = n(82734),
          A = n(18210),
          dt = n(26485),
          gt = n(18057),
          ot = n(19730),
          f = n(17337);
        const St = (i) => {
            const a = (0, h.useRef)(null),
              [e, r] = (0, h.useState)(null);
            return (
              (0, h.useEffect)(
                () => () => {
                  a.current && a.current("BroadcastDebugSection: unmounting");
                },
                [],
              ),
              (0, t.jsx)(p.tH, {
                children: (0, t.jsxs)("div", {
                  className: (0, Q.A)(f.Container),
                  children: [
                    (0, t.jsx)("div", {
                      className: f.Controls,
                      children: (0, t.jsx)(l.$n, {
                        onClick: async () => {
                          a.current && a.current();
                          const s = T().CancelToken.source();
                          (a.current = s.cancel),
                            r(await g.Get().LoadBroadcastDebugInfo(s));
                        },
                        children: "(VO) Load Debug Info",
                      }),
                    }),
                    (0, t.jsx)(p.tH, { children: (0, t.jsx)(xt, { info: e }) }),
                  ],
                }),
              })
            );
          },
          xt = (i) => {
            var a;
            const { info: e } = i,
              [r, s] = (0, h.useState)(!1);
            if (!e) return null;
            const o = g.Get().GetBroadcasterSteamID().ConvertTo64BitString(),
              c = x.es.GetBroadcast(o);
            return (0, t.jsxs)("div", {
              className: f.DisplaySection,
              children: [
                !!(e.last_error_result && e.last_error_result != P.R) &&
                  (0, t.jsxs)("div", {
                    className: f.SubSection,
                    children: [
                      (0, t.jsx)("div", {
                        className: f.Header,
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
                  className: f.SubSection,
                  children: [
                    (0, t.jsx)("div", {
                      className: f.Header,
                      children: "Broadcast Setup",
                    }),
                    (0, t.jsxs)("div", {
                      children: ["Broadcaster: ", e.steam_id, ", SteamID: ", o],
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
                  className: f.SubSection,
                  children: [
                    (0, t.jsx)("div", {
                      className: f.Header,
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
                        (0, ot.dm)(e.upload_total_bytes_uploaded || 0, 1),
                        " ) ",
                      ],
                    }),
                  ],
                }),
                !!e.transcode_server &&
                  (0, t.jsxs)("div", {
                    className: f.SubSection,
                    children: [
                      (0, t.jsx)("div", {
                        className: f.Header,
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
                      e.transcoder_streams.map((d) =>
                        (0, t.jsxs)(
                          "div",
                          {
                            children: [
                              "Encoder ",
                              d.representation_id,
                              " ( ",
                              d.height,
                              "x",
                              d.width,
                              "@",
                              d.fps,
                              " ",
                              d.bitrate,
                              " kbps ) : ",
                              d.frames_to_encode,
                              " queued, ",
                              d.frames_total_encoded,
                              " encoded",
                            ],
                          },
                          d.representation_id,
                        ),
                      ),
                    ],
                  }),
                (0, t.jsxs)("div", {
                  className: f.SubSection,
                  children: [
                    (0, t.jsx)("div", {
                      className: f.Header,
                      children: "Origin Info",
                    }),
                    (a = e == null ? void 0 : e.origin_video_streams) == null
                      ? void 0
                      : a.map((d) =>
                          (0, t.jsxs)(
                            "div",
                            {
                              children: [
                                "Video Stream ",
                                d.representation_id,
                                " ( ",
                                d.height,
                                "x",
                                d.width,
                                "@",
                                d.fps,
                                " ",
                                d.bitrate,
                                " kbps ) : \xA0",
                                d.num_frames_queued,
                                " frames queued, \xA0",
                                d.num_segments_received,
                                " segments received, \xA0",
                                d.num_segments_cached * 2,
                                " seconds cached ( ",
                                (0, ot.dm)(d.memory_used, 2),
                                " )",
                              ],
                            },
                            d.representation_id,
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
                    (0, ot.dm)(e.origin_audio_stream.memory_used, 2),
                    " )",
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: f.SubSection,
                  children: [
                    (0, t.jsx)("div", {
                      className: f.Header,
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
                  className: f.SubSection,
                  children: [
                    (0, t.jsx)("div", {
                      className: f.Header,
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
                  className: f.SubSection,
                  children: [
                    (0, t.jsx)("div", {
                      className: f.Header,
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
                        className: f.AppSummaryWidgetCtn,
                        children: (0, t.jsx)(F.p, {
                          id: e.app_id,
                          type: "game",
                          bPreferAssetWithoutOverride: !1,
                        }),
                      }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: f.SubSection,
                  children: [
                    (0, t.jsx)("div", {
                      className: f.Header,
                      children: "Manifest Information",
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        "Heartbeat Interval: ",
                        c.m_data.heartbeat_interval,
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: ["DASH MPEG Url: ", c.m_data.url],
                    }),
                    (0, t.jsxs)("div", {
                      children: ["HLS Url: ", c.m_data.hls_url],
                    }),
                  ],
                }),
                (0, t.jsx)(l.$n, {
                  onClick: () => s(!r),
                  children: "Toggle Raw Data",
                }),
                !!r &&
                  (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("div", {
                        className: f.SubSection,
                        children: (0, t.jsx)(dt.G, { data: e }),
                      }),
                      (0, t.jsx)("div", {
                        className: f.SubSection,
                        children: (0, t.jsx)(dt.G, {
                          data: (c == null ? void 0 : c.m_data) || "",
                        }),
                      }),
                    ],
                  }),
              ],
            });
          };
        var D = n(98371),
          Ct = n(46943),
          jt = n(35098),
          ct = n(16971);
        const It = (i) => {
          const a = i.steamid.GetAccountID(),
            { data: e } = (0, jt.hW)(a);
          return (0, t.jsxs)("div", {
            className: ct.AvatarCtn,
            children: [
              (0, t.jsx)("a", {
                href: e.GetCommunityProfileURL(),
                "data-miniprofile": "s" + i.steamid.ConvertTo64BitString(),
                children: (0, t.jsx)(Ct.i8, {
                  persona: e,
                  size: i.size,
                  statusPosition: "bottom",
                }),
              }),
              (0, t.jsxs)("div", {
                className: ct.NameAndProps,
                children: [
                  !!i.bShowName &&
                    (0, t.jsx)("a", {
                      href: e.GetCommunityProfileURL(),
                      "data-miniprofile":
                        "s" + i.steamid.ConvertTo64BitString(),
                      children: e.m_strProfileURL,
                    }),
                  i.children,
                ],
              }),
            ],
          });
        };
        var mt = n(65946),
          ut = n(84676),
          bt = n(86390),
          ht = n(36118),
          At = n(53107),
          vt = n(53113),
          E = n(46699),
          pt = n(71421),
          Dt = n(24642);
        function Tt(i) {
          const { broadcasterSteamID: a } = i,
            e = a.ConvertTo64BitString(),
            [r, s] = (0, mt.q3)(() => {
              const I = x.es.GetOrCreateBroadcastInfo(e);
              let R = I.m_nAppID != x.fO ? I.m_nAppID : 0;
              return [I.m_nViewerCount, R];
            }),
            [o] = (0, ut.t7)(s, { include_assets: !0 });
          let c = o == null ? void 0 : o.GetAssets().GetMainCapsuleURL(),
            d = c && c.length > 0;
          return (0, t.jsx)(p.tH, {
            children: (0, t.jsxs)("div", {
              className: E.ProfileCtn,
              children: [
                d &&
                  (0, t.jsx)("a", {
                    className: E.GameCapsule,
                    href: (0, vt.k2)(
                      (o == null ? void 0 : o.GetStorePageURL()) ||
                        v.TS.STORE_BASE_URL + "app/" + s,
                    ),
                    children: (0, t.jsx)("img", { src: c }),
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
                            (0, t.jsx)(wt, { broadcasterSteamID: a }),
                            (0, t.jsx)("div", {
                              className: E.ViewerCount,
                              children: (0, A.Yp)(
                                "#Broadcast_ViewerCount",
                                (0, Dt.D)(r),
                              ),
                            }),
                          ],
                        }),
                        (0, t.jsx)(Rt, { broadcasterSteamID: a }),
                      ],
                    }),
                    (0, t.jsx)(It, {
                      steamid: a,
                      size: "Medium",
                      bShowName: !0,
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        const wt = (0, U.PA)((i) => {
            const { broadcasterSteamID: a } = i,
              e = a.ConvertTo64BitString(),
              [r, s] = (0, mt.q3)(() => {
                const c = x.es.GetOrCreateBroadcastInfo(e);
                let d = c.m_nAppID != x.fO ? c.m_nAppID : 0;
                return [c.m_strAppTitle, d];
              }),
              [o] = (0, ut.t7)(s, { include_assets: !0 });
            return (0, t.jsxs)("div", {
              className: E.BroadcastTitleCtn,
              children: [
                (0, A.we)("#Broadcast_Playing"),
                (0, t.jsx)("a", {
                  href: (0, vt.k2)(
                    (o == null ? void 0 : o.GetStorePageURL()) ||
                      v.TS.STORE_BASE_URL + "app/" + s,
                  ),
                  children: r || (o == null ? void 0 : o.GetName()),
                }),
                (r == null ? void 0 : r.length) > 0 &&
                  (0, t.jsxs)("span", { children: [" - ", r] }),
              ],
            });
          }),
          Rt = (0, U.PA)((i) => {
            const { broadcasterSteamID: a } = i,
              e = a.ConvertTo64BitString(),
              r = (s) => {
                v.iA.logged_in
                  ? (0, _.pg)(
                      (0, t.jsx)(yt, { broadcasterSteamID: a }),
                      (0, Z.uX)(s),
                    )
                  : (0, _.pg)(
                      (0, t.jsx)(Y.o0, {
                        strTitle: (0, A.we)("#EventDisplay_Share_NotLoggedIn"),
                        strDescription: (0, A.we)(
                          "#EventDisplay_Share_NotLoggedIn_Description",
                        ),
                        strOKButtonText: (0, A.we)("#MobileLogin_SignIn"),
                        onOK: () => (0, bt.vg)(),
                      }),
                      (0, Z.uX)(s),
                    );
              };
            return (0, t.jsxs)("div", {
              className: E.BroadcastUserActionsCtn,
              children: [
                v.iA.steamid != i.broadcasterSteamID.ConvertTo64BitString() &&
                  (0, t.jsx)(l.$n, {
                    onClick: r,
                    children: (0, t.jsx)(pt.he, {
                      toolTipContent: (0, A.we)("#Broadcast_User_Report_ttip"),
                      children: (0, t.jsx)(ht.lNU, {}),
                    }),
                  }),
                (0, t.jsx)(l.$n, {
                  onClick: (s) =>
                    (0, At.EP)(
                      s,
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
          yt = (i) => {
            const [a, e] = (0, h.useState)(""),
              r = async () => {
                await g.Get().SendUserReportOnBroadcast(a),
                  i.closeModal && i.closeModal();
              };
            return (0, t.jsx)(Y.o0, {
              strTitle: (0, A.we)("#Broadcast_ReportItem_Title"),
              strDescription: (0, A.we)("#Broadcast_ReportItem_Description"),
              onCancel: i.closeModal,
              bOKDisabled: a.trim().length == 0,
              onOK: r,
              children: (0, t.jsx)("textarea", {
                value: a,
                onChange: (s) => e(s.currentTarget.value),
                rows: 10,
                cols: 80,
              }),
            });
          };
        var Ut = n(30593),
          Bt = n(85599);
        const Et = (i) => {
            if (!v.iA.is_support) return null;
            const a = (s, o) => {
                (0, _.pg)(
                  (0, t.jsx)(Nt, {
                    broadcastSteamID: i.broadcastSteamID,
                    strAction: o,
                  }),
                  (0, Z.uX)(s),
                );
              },
              e = (s) => {
                (0, _.pg)(
                  (0, t.jsx)(Ot, { steamid: i.broadcastSteamID }),
                  (0, Z.uX)(s),
                );
              },
              r =
                "https://steamsupport.valvesoftware.com/account/overview/" +
                i.broadcastSteamID.ConvertTo64BitString();
            return (0, t.jsxs)("div", {
              className: (0, Q.A)(Ut.AdminControls, X().ValveOnlyBackground),
              children: [
                (0, t.jsx)("div", { children: "(VO) Support Tools" }),
                (0, t.jsx)(l.$n, {
                  onClick: (s) => a(s, "frontpage"),
                  children: "Remove from Front Page",
                }),
                (0, t.jsx)(l.$n, {
                  onClick: (s) => a(s, "ban"),
                  children: "Ban from Broadcasting",
                }),
                (0, t.jsx)(l.$n, { onClick: e, children: "Make Unbannable" }),
                (0, t.jsx)(l.$n, {
                  onClick: (s) => (0, At.EP)(s, r),
                  children: "Go to Support Page",
                }),
              ],
            });
          },
          Nt = (0, U.PA)((i) => {
            const { broadcastSteamID: a, strAction: e } = i,
              [r, s] = (0, h.useState)(1),
              [o, c] = (0, h.useState)(!1),
              [d, I] = (0, h.useState)(!1),
              [R, y] = (0, h.useState)(!1),
              S = (0, h.useRef)(null);
            (0, h.useEffect)(
              () => () => {
                S.current && S.current("BroadcastConfirmBanAction: unmounting");
              },
              [],
            );
            const M = [
                { label: "1 Day", data: 1 },
                { label: "1 Week", data: 7 },
                { label: "1 Month", data: 30 },
                { label: "6 Months", data: 180 },
                { label: "1 Year", data: 365 },
              ],
              k = () => i.closeModal && i.closeModal(),
              Jt = async () => {
                let it = !1;
                c(!0);
                try {
                  S.current && S.current();
                  const lt = T().CancelToken.source();
                  S.current = lt.cancel;
                  let Xt = await g.Get().SetBroadcasterRestrictions(e, r, lt);
                  lt.token.reason || (Xt = !0);
                } finally {
                  c(!1), I(!0), y(it);
                }
              };
            return (0, t.jsx)(p.tH, {
              children: (0, t.jsx)(Y.x_, {
                onEscKeypress: k,
                children: (0, t.jsxs)(l.UC, {
                  children: [
                    (0, t.jsx)(l.Y9, {
                      children:
                        e == "frontpage"
                          ? "Remove Broadcast From Front Page"
                          : "Ban from Broadcasting",
                    }),
                    (0, t.jsx)(l.nB, {
                      children: (0, t.jsxs)(l.a3, {
                        children: [
                          (0, t.jsx)("p", {
                            children:
                              e == "frontpage"
                                ? "How long should we prevent the broadcast from appearing in community or store?"
                                : "How long should we prevent the user from Broadcast at all on Steam?",
                          }),
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)(l.m, {
                                rgOptions: M,
                                selectedOption: r,
                                onChange: (it) => s(it.data),
                              }),
                              !!o && (0, t.jsx)(Bt.t, {}),
                              !!d &&
                                (0, t.jsx)("div", {
                                  children: R
                                    ? "Successfully Completed Request"
                                    : "Failed to complete request, check browser console and/or try again later",
                                }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, t.jsx)(l.wi, {
                      children: d
                        ? (0, t.jsx)(l.jn, {
                            onClick: k,
                            children: (0, A.we)("#Button_Dismiss"),
                          })
                        : (0, t.jsxs)(l.dR, {
                            children: [
                              (0, t.jsx)(l.$n, {
                                onClick: k,
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
            const [a, e] = (0, h.useState)(!1),
              [r, s] = (0, h.useState)(!1),
              [o, c] = (0, h.useState)(!1),
              d = (0, h.useRef)(null);
            (0, h.useEffect)(
              () => () => {
                d.current && d.current("BroadcastMakeUnbannable: unmounting");
              },
              [],
            );
            const I = () => i.closeModal && i.closeModal(),
              R = async () => {
                e(!0);
                let y = !1;
                try {
                  d.current && d.current();
                  const S = T().CancelToken.source();
                  (d.current = S.cancel), (y = await g.Get().SetUnBannable(S));
                } finally {
                  e(!1), s(!0), c(y);
                }
              };
            return (0, t.jsx)(p.tH, {
              children: (0, t.jsx)(Y.x_, {
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
                              !!a && (0, t.jsx)(Bt.t, {}),
                              !!r &&
                                (0, t.jsx)("div", {
                                  children: o
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
                                onClick: R,
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
        var Qt = n(11243),
          Mt = n(75372);
        function Pt() {
          const [i] = (0, h.useState)(
            () => (0, v.Tc)("ewatchlocation", "application_config") || m.nn.CJ,
          );
          return i;
        }
        function Gt(i) {
          const a = g.Get().GetIFrameParentOrigin();
          a &&
            window.parent !== window &&
            window.parent.postMessage({ msg: i }, a);
        }
        function Ht() {
          const [i, a] = (0, h.useState)(
            () =>
              new URLSearchParams(window.location.search).get("broadcastid") ||
              void 0,
          );
          return (
            (0, h.useEffect)(() => {
              const e = g.Get().GetIFrameParentOrigin(),
                r = (s) => {
                  var o;
                  !e ||
                    s.origin !== e ||
                    ((o = s.data) == null ? void 0 : o.msg) !==
                      "OnVideoIFrameBroadcastIDChanged" ||
                    !s.data.broadcastid ||
                    a(String(s.data.broadcastid));
                };
              return (
                window.addEventListener("message", r),
                () => window.removeEventListener("message", r)
              );
            }, []),
            i
          );
        }
        const Ft = (0, U.PA)((i) => {
          const a = g.Get().GetBroadcasterSteamID(),
            e = a == null ? void 0 : a.ConvertTo64BitString(),
            r = Pt(),
            [s, o] = (0, H.QD)("muted", !0),
            c = x.es.GetBroadcast(e),
            d = x.es.GetOrCreateBroadcastInfo(e),
            I = Ht();
          if (!e) return null;
          let R = c == null ? void 0 : c.m_ulBroadcastID;
          g.Get().BShowOnlyChat() && (R = I);
          let y;
          return (
            g.Get().GetIFrameParentOrigin() &&
              (y = () => Gt("OnLoginButtonClicked")),
            (0, t.jsx)(t.Fragment, {
              children: (0, t.jsxs)("div", {
                className: (0, Q.A)(D.BroadcastPage),
                children: [
                  (0, t.jsxs)("div", {
                    className: (0, Q.A)(w().BroadcastAndChat),
                    children: [
                      !g.Get().BShowOnlyChat() &&
                        (0, t.jsx)(p.tH, {
                          children: (0, t.jsx)("div", {
                            className: (0, Q.A)(w().wrapper),
                            children: (0, t.jsx)("div", {
                              className: (0, Q.A)({
                                [w().video_placeholder]: !0,
                                video_placeholder_trgt: !0,
                                [w().NoChat]: g.Get().BShowOnlyVideo(),
                              }),
                              children: (0, t.jsx)("div", {
                                className: w().BroadcastPlayerContainer,
                                children: (0, t.jsx)(p.tH, {
                                  children: (0, t.jsx)(G.default, {
                                    steamIDBroadcast: e,
                                    watchLocation: r,
                                    bStartMuted: s,
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                      !g.Get().BShowOnlyVideo() &&
                        (0, t.jsx)("div", {
                          className: w().detail_chat_ctn,
                          children: (0, t.jsx)("div", {
                            className: w().ChatContainer,
                            children: (0, t.jsx)(p.tH, {
                              children: (0, t.jsx)(et.I, {
                                emoticonStore: B.MX,
                                watchLocation: m.nn.fe,
                                steamID: e,
                                broadcastID: R,
                                onSignIn: y,
                              }),
                            }),
                          }),
                        }),
                    ],
                  }),
                  !g.Get().BShowInIframe() &&
                    (0, t.jsx)(Lt, { broadcasterSteamID: a, broadcastInfo: d }),
                ],
              }),
            })
          );
        });
        function ft(i) {
          return i != 0 && i != x.fO;
        }
        const Lt = (0, U.PA)((i) => {
            const { broadcasterSteamID: a, broadcastInfo: e } = i,
              [r, s] = (0, h.useState)(null);
            let o = e.m_nAppID;
            return (
              (0, h.useEffect)(() => {
                const c = async () => {
                  let d = await C.ac.LoadOGGClanInfoForAppID(o);
                  s(d);
                };
                ft(o) && c();
              }, [o]),
              (0, t.jsxs)(t.Fragment, {
                children: [
                  (0, t.jsx)(Tt, { broadcasterSteamID: a }),
                  (0, t.jsx)(Vt, { steamid: a }),
                  !!v.iA.is_support &&
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)(Et, { broadcastSteamID: a }),
                        (0, t.jsx)("div", {
                          className: (0, Q.A)(
                            X().ValveOnlyBackground,
                            D.DebugCtn,
                          ),
                          children: (0, t.jsx)(St, {}),
                        }),
                      ],
                    }),
                  ft(o) &&
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
                              className: X().EventSectionSpacer,
                              children: "\xA0",
                            }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className: D.GameInfo,
                          children: (0, t.jsx)(F.p, {
                            id: Number.parseInt(e.m_strAppId),
                            type: "game",
                            bPreferAssetWithoutOverride: !1,
                          }),
                        }),
                      ],
                    }),
                  !!r &&
                    (0, t.jsx)("div", {
                      className: D.RelatedEvents,
                      children: (0, t.jsx)(j.r, {
                        clanAccountID: r.clanAccountID,
                        trackingLocation: u.Tc.My,
                        partnerEventStore: Mt.Av,
                        bViewAllShowInfiniteScroll: !0,
                      }),
                    }),
                ],
              })
            );
          }),
          Vt = (0, U.PA)((i) => {
            const a = (0, h.useRef)(null);
            let e = x.es.GetOrCreateBroadcastInfo(
              i.steamid.ConvertTo64BitString(),
            );
            const [r, s] = (0, h.useState)(e.m_strTitle),
              [o, c] = (0, h.useState)(""),
              [d, I] = (0, h.useState)(null);
            if (
              ((0, h.useEffect)(
                () => (
                  s(e.m_strTitle),
                  () => {
                    a.current && a.current("BroadcastControls: unmounting");
                  }
                ),
                [e.m_strTitle],
              ),
              v.iA.accountid != i.steamid.GetAccountID())
            )
              return null;
            const R = async () => {
                a.current && a.current();
                const S = T().CancelToken.source();
                a.current = S.cancel;
                let M = await g.Get().UpdateBroadcastSettings(o, r, S);
                S.token.reason ||
                  I(
                    (0, A.we)(
                      M
                        ? "#Broadcast_Control_Success"
                        : "#Broadcast_Control_Failure",
                    ),
                  );
              },
              y = (S) => {
                (0, _.pg)(
                  (0, t.jsx)(Y.o0, {
                    strTitle: (0, A.we)("#Broadcast_Control_StopBroadcast"),
                    strDescription: (0, A.we)("#EventEditor_GenericAreYouSure"),
                    onOK: async () => {
                      a.current && a.current();
                      const M = T().CancelToken.source();
                      a.current = M.cancel;
                      let k = await g.Get().StopBroadcast(M);
                      M.token.reason ||
                        I(
                          (0, A.we)(
                            k
                              ? "#Broadcast_Control_StopSuccess"
                              : "#Broadcast_Control_StopFailure",
                          ),
                        );
                    },
                  }),
                  (0, Z.uX)(S),
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
                          onChange: (S) => s(S.currentTarget.value || ""),
                          placeholder: (0, A.we)(
                            "#Broadcast_title_placeholder",
                          ),
                          value: r,
                        }),
                        (0, t.jsx)(l.pd, {
                          type: "text",
                          label: (0, A.we)("#Broadcast_Control_matchid"),
                          onChange: (S) => c(S.currentTarget.value || ""),
                          value: o,
                        }),
                        (0, t.jsxs)(l.$n, {
                          onClick: R,
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
                          onClick: y,
                          children: (0, A.we)(
                            "#Broadcast_Control_StopBroadcast",
                          ),
                        }),
                        !!d && (0, t.jsx)("div", { children: d }),
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
            children: (0, t.jsxs)(N.dO, {
              children: [
                (0, t.jsx)(N.qh, {
                  path: Kt.BroadcastWatch(":steamid_or_user_vanity"),
                  render: (a) =>
                    (0, t.jsx)(Ft, {
                      strSteamID: a.match.params.steamid_or_user_vanity,
                    }),
                }),
                (0, t.jsx)(N.qh, { component: at.a }),
              ],
            }),
          });
        }
      },
      46943: (b, z, n) => {
        "use strict";
        n.d(z, { Ul: () => et, i8: () => G });
        var t = n(7850),
          V = n(90626),
          N = n(75844),
          at = n(5858),
          O = n(36707),
          T = n(3166),
          K = n(13465);
        const P =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          $ =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
          x =
            n.p +
            "images/applications/community/avatar_default_full.jpg?v=valveisgoodatcaching";
        var W = n(43047),
          v = n.n(W),
          st = n(71742),
          q = Object.defineProperty,
          nt = Object.getOwnPropertyDescriptor,
          tt = (m, u, B) =>
            u in m
              ? q(m, u, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: B,
                })
              : (m[u] = B),
          g = (m, u, B, C) => {
            for (
              var l = C > 1 ? void 0 : C ? nt(u, B) : u, p = m.length - 1, j;
              p >= 0;
              p--
            )
              (j = m[p]) && (l = (C ? j(u, B, l) : j(l)) || l);
            return C && l && q(u, B, l), l;
          },
          U = (m, u, B) => tt(m, typeof u != "symbol" ? u + "" : u, B);
        function h(m) {
          switch (m) {
            case "X-Small":
            case "Small":
              return P;
            case "Medium":
            case "MediumLarge":
              return $;
            case "Large":
            case "X-Large":
            case "FillArea":
              return x;
            default:
              return (0, st.z_)(m, `Unhandled size ${m}`), $;
          }
        }
        const et = V.memo(function (u) {
          const {
              strAvatarURL: B,
              size: C = "Medium",
              className: l,
              statusStyle: p,
              statusPosition: j,
              children: H,
              ...J
            } = u,
            X = V.useMemo(() => {
              const F = [];
              return B && F.push(B), F.push(h(C)), F;
            }, [B, C]);
          return (0, t.jsxs)("div", {
            className: (0, O.A)(
              v().avatarHolder,
              "avatarHolder",
              "no-drag",
              C,
              l,
            ),
            ...J,
            children: [
              (0, t.jsx)("div", {
                className: (0, O.A)(v().avatarStatus, "avatarStatus", j),
                style: p,
              }),
              (0, t.jsx)(K.c, {
                className: (0, O.A)(v().avatar, "avatar"),
                rgSources: X,
                draggable: !1,
              }),
              H,
            ],
          });
        });
        let G = class extends V.Component {
          render() {
            const {
              persona: m,
              size: u = "Medium",
              animatedAvatar: B,
              className: C,
              strBackupAvatarURL: l,
              ...p
            } = this.props;
            let j = "";
            return (
              B && B.image_small && B.image_small.length != 0
                ? (j = T.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + B.image_small)
                : m
                  ? ((j = m.avatar_url_medium),
                    u == "Small" || u == "X-Small"
                      ? (j = m.avatar_url)
                      : (u == "Large" || u == "X-Large" || u == "FillArea") &&
                        (j = m.avatar_url_full))
                  : l && (j = l),
              (0, t.jsx)(et, {
                strAvatarURL: j,
                size: u,
                className: (0, O.A)((0, at.rO)(m), C),
                ...p,
              })
            );
          }
        };
        G = g([N.PA], G);
        const rt = (0, N.PA)((m) => {
          const {
            profileItem: u,
            className: B,
            bDisableAnimation: C,
            ...l
          } = m;
          if (!u || !u.image_small || u.image_small.length == 0) return null;
          let p = C ? u.image_large : u.image_small;
          return (
            p || (p = u.image_small),
            p.startsWith("https://") ||
              (p = T.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + p),
            (0, t.jsx)("div", {
              className: (0, O.A)(v().avatarFrame, B, "avatarFrame"),
              ...l,
              children: (0, t.jsx)("img", {
                className: v().avatarFrameImg,
                src: p,
              }),
            })
          );
        });
        let w = class extends V.Component {
          constructor(m) {
            super(m),
              U(this, "m_timer"),
              (this.state = { bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = 0);
          }
          componentDidMount() {
            this.props.bParentHovered || this.SetupAnimationTimer();
          }
          SetupAnimationTimer() {
            let m = 0;
            switch (this.props.loopDuration) {
              case "Short":
                m = 2500;
                break;
              case "Medium":
                m = 5e3;
                break;
              case "Long":
                m = 1e4;
                break;
            }
            m != 0 &&
              (this.setState({ bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = window.setTimeout(
                () => this.setState({ bAnimate: !1 }),
                m,
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
          componentDidUpdate(m) {
            this.props.loopDuration != m.loopDuration &&
              (this.props.loopDuration == "None"
                ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
                : this.props.loopDuration == "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : (this.setState({ bAnimate: !0 }),
                    this.SetupAnimationTimer())),
              this.props.bParentHovered != m.bParentHovered &&
                (this.props.bParentHovered &&
                this.props.loopDuration != "None" &&
                this.props.loopDuration != "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : this.state.bAnimate && this.SetupAnimationTimer());
          }
          render() {
            let {
              loopDuration: m,
              animatedAvatar: u,
              avatarFrame: B,
              children: C,
              style: l,
              bLimitProfileFrameAnimationTime: p,
              bParentHovered: j,
              ...H
            } = this.props;
            H.onClick && (l = { ...l, cursor: "pointer" });
            const J = this.state.bAnimate && u != null ? u : void 0;
            return (0, t.jsx)("div", {
              onMouseEnter: () =>
                this.setState({ bAnimate: this.props.loopDuration != "None" }),
              onMouseLeave: () => this.SetupAnimationTimer(),
              children: (0, t.jsxs)(G, {
                animatedAvatar: J,
                ...H,
                children: [
                  C,
                  (0, t.jsx)(rt, {
                    profileItem: B != null ? B : null,
                    bDisableAnimation: p && !this.state.bAnimate,
                  }),
                ],
              }),
            });
          }
        };
        w = g([N.PA], w);
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
