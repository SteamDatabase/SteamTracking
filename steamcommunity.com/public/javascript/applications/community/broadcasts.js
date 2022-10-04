/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5436],
  {
    64393: (e) => {
      e.exports = {
        SubSection: "broadcastdebug_SubSection_3Ac4z",
        Header: "broadcastdebug_Header_2vrXB",
        AppSummaryWidgetCtn: "broadcastdebug_AppSummaryWidgetCtn_35ozI",
      };
    },
    63103: (e) => {
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
    87266: (e) => {
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
    96584: (e) => {
      e.exports = { AdminControls: "broadcastsupport_AdminControls_3KL0b" };
    },
    83147: (e) => {
      e.exports = {
        AvatarCtn: "communityavatar_AvatarCtn_3n3n0",
        NameAndProps: "communityavatar_NameAndProps_3Pljh",
      };
    },
    5265: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, { default: () => ve });
      a(69491);
      var n = a(67294),
        r = a(78587),
        o = a(65090),
        l = a(70655),
        s = a(9669),
        c = a.n(s),
        i = a(22188),
        d = (a(54698), a(3389)),
        m = a(52795),
        u = (a(82946), a(93976)),
        _ = a(90666);
      class p {
        constructor() {
          (this.m_bShowOnlyVideo = !1),
            (this.m_bShowOnlyChat = !1),
            (this.m_curDebugInfo = null);
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
              let n = yield c().get(t, {
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
                t
              );
            }
            return null;
          });
        }
        UpdateBroadcastSettings(e, t, a) {
          return (0, l.mG)(this, void 0, void 0, function* () {
            let n =
                _.De.COMMUNITY_BASE_URL + "broadcast/updatebroadcastsettings",
              r = {
                steamid: this.m_steamid.ConvertTo64BitString(),
                matchid: e,
                title: t,
                sessionid: _.De.SESSIONID,
              };
            try {
              let e = yield c().get(n, {
                params: r,
                withCredentials: !0,
                cancelToken: a ? a.token : void 0,
              });
              if (a && a.token.reason) return !1;
              if (e && 200 == e.status && e.data && 1 == e.data.success) {
                const e = m.c9.GetOrCreateBroadcastInfo(
                  this.m_steamid.ConvertTo64BitString()
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
                t
              );
            }
            return !1;
          });
        }
        StopBroadcast(e) {
          return (0, l.mG)(this, void 0, void 0, function* () {
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
              e
            );
          });
        }
        SetBroadcasterRestrictions(e, t, a) {
          return (0, l.mG)(this, void 0, void 0, function* () {
            const n = this.m_steamid.ConvertTo64BitString(),
              r = m.c9.GetBroadcast(n);
            let o =
                _.De.COMMUNITY_BASE_URL + "broadcast/setbroadcastrestriction",
              l = {
                steamid: n,
                broadcastid: r ? r.m_ulBroadcastID : null,
                type: e,
                days: t,
                sessionid: _.De.SESSIONID,
              };
            return yield this.InternalSendSimpleGetRequest(
              "SetBroadcasterRestrictions",
              o,
              l,
              a
            );
          });
        }
        SetUnBannable(e) {
          return (0, l.mG)(this, void 0, void 0, function* () {
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
              e
            );
          });
        }
        SendUserReportOnBroadcast(e) {
          return (0, l.mG)(this, void 0, void 0, function* () {
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
              null
            );
          });
        }
        InternalSendSimpleGetRequest(e, t, a, n) {
          return (0, l.mG)(this, void 0, void 0, function* () {
            try {
              let e = yield c().get(t, {
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
                a
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
      var v = a(29323),
        S = a(85503),
        E = a(63405),
        b = a(17157),
        B = a.n(b),
        C = (a(69765), a(68002), a(28976)),
        f = a(76776),
        h = a(7200),
        g = a(48341),
        I = a(32548),
        y = a(70350),
        D = a(31933),
        G = a(34133),
        A = a.n(G),
        N = a(85732),
        T = a(69472),
        w = a(59650),
        O = a(7573),
        x = a(53622),
        k = a(41311),
        R = (a(26149), a(88254)),
        M = a(96602),
        U = a(64393);
      const L = (e) => {
          const t = (0, n.useRef)(null),
            [a, r] = (0, n.useState)(null);
          return (
            (0, n.useEffect)(
              () => () => {
                t.current && t.current("BroadcastDebugSection: unmounting");
              },
              []
            ),
            n.createElement(
              I.S,
              null,
              n.createElement(
                "div",
                { className: (0, O.Z)(U.Container) },
                n.createElement(
                  "div",
                  { className: U.Controls },
                  n.createElement(
                    g.zx,
                    {
                      onClick: () =>
                        (0, l.mG)(void 0, void 0, void 0, function* () {
                          t.current && t.current();
                          const e = c().CancelToken.source();
                          (t.current = e.cancel),
                            r(yield p.Get().LoadBroadcastDebugInfo(e));
                        }),
                    },
                    "(VO) Load Debug Info"
                  )
                ),
                n.createElement(I.S, null, n.createElement(P, { info: a }))
              )
            )
          );
        },
        P = (e) => {
          const { info: t } = e,
            [a, r] = (0, n.useState)(!1);
          if (!t) return null;
          const o = p.Get().GetBroadcasterSteamID().ConvertTo64BitString(),
            l = m.c9.GetBroadcast(o);
          return n.createElement(
            "div",
            { className: U.DisplaySection },
            Boolean(t.last_error_result && 1 != t.last_error_result) &&
              n.createElement(
                "div",
                { className: U.SubSection },
                n.createElement("div", { className: U.Header }, "Error"),
                n.createElement(
                  "div",
                  null,
                  "EResult: ",
                  t.last_error_result,
                  ", occurred ",
                  t.last_error_time,
                  " - ",
                  n.createElement(M.H6, {
                    dateAndTime: t.last_error_time,
                    bSingleLine: !0,
                  })
                )
              ),
            n.createElement(
              "div",
              { className: U.SubSection },
              n.createElement(
                "div",
                { className: U.Header },
                "Broadcast Setup"
              ),
              n.createElement(
                "div",
                null,
                "Broadcaster: ",
                t.steam_id,
                ", SteamID: ",
                o
              ),
              n.createElement(
                "div",
                null,
                "Broadcast Directory: ",
                t.directory_server,
                ", SessionID: ",
                t.broadcast_id
              ),
              n.createElement(
                "div",
                null,
                "Broadcast Ingestor: ",
                t.relay_server,
                ", UploadID: ",
                t.upload_id
              ),
              n.createElement(
                "div",
                null,
                "Broadcast Origin: ",
                t.origin_server
              ),
              n.createElement("div", null, "Broadcast Chat: ", t.chat_server)
            ),
            n.createElement(
              "div",
              { className: U.SubSection },
              n.createElement("div", { className: U.Header }, "Upload Info"),
              n.createElement(
                "div",
                null,
                "Upload Client: ",
                t.remote_address,
                " ",
                Boolean(t.is_rtmp) ? "(RTMP)" : "(STEAM CLIENT)"
              ),
              n.createElement(
                "div",
                null,
                "Avg Upload: ",
                t.upload_avg_fps,
                " FPS, ",
                t.upload_avg_bandwidth,
                " KBPS, ",
                t.upload_avg_key_interval,
                " MSEC key frame interval"
              )
            ),
            n.createElement(
              "div",
              { className: U.SubSection },
              n.createElement("div", { className: U.Header }, "Viewer Info"),
              n.createElement(
                "div",
                null,
                "Viewers: ",
                t.current_viewers,
                " current (",
                t.current_anon_viewers,
                " anonymous), ",
                t.total_unique_viewers,
                " total unique, ",
                t.max_concurrent_viewers,
                " max concurrent"
              ),
              n.createElement(
                "div",
                null,
                "Average time watched: ",
                t.average_watch_duration,
                " seconds"
              ),
              n.createElement(
                "div",
                null,
                "Last Minute: ",
                t.added_viewers_last_minute,
                " watch requests, ",
                t.rejected_viewers_last_minute,
                " rejected"
              ),
              n.createElement("div", null, "Restrictions: ", t.restriction),
              n.createElement("div", null, t.extra_viewer_info)
            ),
            n.createElement(
              "div",
              { className: U.SubSection },
              n.createElement("div", { className: U.Header }, "Settings"),
              n.createElement("div", null, "is replay? ", t.is_replay),
              n.createElement(
                "div",
                null,
                "is replay local file? ",
                t.is_replay_local_file
              ),
              n.createElement(
                "div",
                null,
                "is replay clip? ",
                t.is_replay_local_file
              ),
              n.createElement(
                "div",
                null,
                "is replay clip? ",
                t.is_replay_clip
              ),
              n.createElement(
                "div",
                null,
                "is capturing VOD? ",
                t.is_capturing_vod
              ),
              n.createElement(
                "div",
                null,
                "is white listed for store streaming? ",
                t.is_whitelisted
              )
            ),
            n.createElement(
              "div",
              { className: U.SubSection },
              n.createElement("div", { className: U.Header }, "App Info"),
              n.createElement("div", null, "appid: ", t.app_id),
              n.createElement("div", null, "app name: ", t.app_name),
              n.createElement("div", null, "broadcast title: ", t.title),
              n.createElement("div", null, "thumbnail: ", t.thumbnail_url),
              Boolean(t.thumbnail_url) &&
                n.createElement("img", { src: t.thumbnail_url }),
              Boolean(t.app_id && t.app_id > 0) &&
                n.createElement(
                  "div",
                  { className: U.AppSummaryWidgetCtn },
                  n.createElement(N.ju, { id: t.app_id, type: "game" })
                )
            ),
            n.createElement(
              "div",
              { className: U.SubSection },
              n.createElement(
                "div",
                { className: U.Header },
                "Manifest Information"
              ),
              n.createElement(
                "div",
                null,
                "Heartbeat Interval: ",
                l.m_data.heartbeat_interval
              ),
              n.createElement("div", null, "DASH MPEG Url: ", l.m_data.url),
              n.createElement("div", null, "HLS Url: ", l.m_data.hls_url)
            ),
            n.createElement(g.zx, { onClick: () => r(!a) }, "Toggle Raw Data"),
            Boolean(a) &&
              n.createElement(
                n.Fragment,
                null,
                n.createElement(
                  "div",
                  { className: U.SubSection },
                  n.createElement(R.G, { data: t })
                ),
                n.createElement(
                  "div",
                  { className: U.SubSection },
                  n.createElement(R.G, { data: l.m_data })
                )
              )
          );
        };
      var V = a(63103),
        X = a(93981),
        z = a(44298),
        F = a(2388),
        H = a(83147);
      function K(e) {
        const t = F.y$.GetProfileByAccountID(e.GetAccountID());
        if (t) {
          let a = new X.Pv(e);
          return (
            (a.m_strPlayerName = t.persona_name),
            (a.m_strAvatarHash = t.avatar_hash),
            (a.m_ePersonaState = t.persona_state),
            a
          );
        }
        return null;
      }
      const q = (e) => {
        e.steamid.GetAccountID();
        const [t, a] = (0, n.useState)(K(e.steamid)),
          [r, o] = (0, n.useState)(F.y$.GetProfileURLBySteamID(e.steamid)),
          [s, c] = (0, n.useState)(F.y$.GetPersonaNameBySteamID(e.steamid));
        return (
          (0, n.useEffect)(() => {
            if (!t) {
              (() =>
                (0, l.mG)(void 0, void 0, void 0, function* () {
                  yield F.y$.LoadProfiles([e.steamid.ConvertTo64BitString()]),
                    a(K(e.steamid)),
                    o(F.y$.GetProfileURLBySteamID(e.steamid)),
                    c(F.y$.GetPersonaNameBySteamID(e.steamid));
                }))();
            }
          }, [e.steamid, t]),
          n.createElement(
            "div",
            { className: H.AvatarCtn },
            n.createElement(
              "a",
              {
                href: r,
                "data-miniprofile": "s" + e.steamid.ConvertTo64BitString(),
              },
              n.createElement(z.vV, {
                persona: t,
                size: e.size,
                statusPosition: "bottom",
              })
            ),
            n.createElement(
              "div",
              { className: H.NameAndProps },
              Boolean(e.bShowName) &&
                n.createElement(
                  "a",
                  {
                    href: r,
                    "data-miniprofile": "s" + e.steamid.ConvertTo64BitString(),
                  },
                  s
                ),
              e.children
            )
          )
        );
      };
      var Y = a(13271),
        Z = a(52114),
        $ = a(9410),
        j = a(95598),
        W = a(72258),
        Q = a(35092),
        J = a(87266);
      function ee(e) {
        const { broadcasterSteamID: t } = e,
          a = t.ConvertTo64BitString(),
          [r, o] = (0, Y.SZ)(() => {
            const e = m.c9.GetOrCreateBroadcastInfo(a);
            return [e.m_nViewerCount, Number.parseInt(e.m_strAppId)];
          }),
          [l] = (0, Z.vs)(o, { include_assets: !0 });
        return n.createElement(
          I.S,
          null,
          n.createElement(
            "div",
            { className: J.ProfileCtn },
            n.createElement(
              "a",
              {
                href: (0, Q.OL)(
                  (null == l ? void 0 : l.GetStorePageURL()) ||
                    _.De.STORE_BASE_URL + "app/" + o
                ),
                className: J.GameCapsule,
              },
              n.createElement("img", {
                src: null == l ? void 0 : l.GetAssets().GetMainCapsuleURL(),
              })
            ),
            n.createElement(
              "div",
              { className: J.StreamDetailsCtn },
              n.createElement(
                "div",
                { className: J.GameAndOptionsCtn },
                n.createElement(
                  "div",
                  { className: J.GameAndViewersCtn },
                  n.createElement(te, { broadcasterSteamID: t }),
                  n.createElement(
                    "div",
                    { className: J.ViewerCount },
                    (0, k.kb)("#Broadcast_ViewerCount", r.toLocaleString())
                  )
                ),
                n.createElement(ae, { broadcasterSteamID: t })
              ),
              n.createElement(q, { steamid: t, size: "Medium", bShowName: !0 })
            )
          )
        );
      }
      const te = (0, v.Pi)((e) => {
          const { broadcasterSteamID: t } = e,
            a = t.ConvertTo64BitString(),
            [r, o] = (0, Y.SZ)(() => {
              const e = m.c9.GetOrCreateBroadcastInfo(a);
              return [e.m_strAppTitle, Number.parseInt(e.m_strAppId)];
            }),
            [l] = (0, Z.vs)(o, { include_assets: !0 });
          return n.createElement(
            "div",
            { className: J.BroadcastTitleCtn },
            (0, k.Xx)("#Broadcast_Playing"),
            n.createElement(
              "a",
              {
                href: (0, Q.OL)(
                  (null == l ? void 0 : l.GetStorePageURL()) ||
                    _.De.STORE_BASE_URL + "app/" + o
                ),
              },
              Boolean(r) ? r : null == l ? void 0 : l.GetName()
            ),
            Boolean((null == r ? void 0 : r.length) > 0) &&
              n.createElement("span", null, " - ", r)
          );
        }),
        ae = (0, v.Pi)((e) => {
          const { broadcasterSteamID: t } = e,
            a = t.ConvertTo64BitString();
          m.c9.GetOrCreateBroadcastInfo(a);
          return n.createElement(
            "div",
            { className: J.BroadcastUserActionsCtn },
            Boolean(
              _.L7.steamid != e.broadcasterSteamID.ConvertTo64BitString()
            ) &&
              n.createElement(
                g.zx,
                {
                  "data-tooltip-text": (0, k.Xx)("#Broadcast_User_Report_ttip"),
                  onClick: (e) => {
                    _.L7.logged_in
                      ? (0, w.AM)(
                          n.createElement(ne, { broadcasterSteamID: t }),
                          (0, x.RA)(e)
                        )
                      : (0, w.AM)(
                          n.createElement(T.uH, {
                            strTitle: (0, k.Xx)(
                              "#EventDisplay_Share_NotLoggedIn"
                            ),
                            strDescription: (0, k.Xx)(
                              "#EventDisplay_Share_NotLoggedIn_Description"
                            ),
                            strOKButtonText: (0, k.Xx)("#MobileLogin_SignIn"),
                            onOK: () => (0, $.Xt)(),
                          }),
                          (0, x.RA)(e)
                        );
                  },
                },
                n.createElement(j.WNf, null)
              ),
            n.createElement(
              g.zx,
              {
                "data-tooltip-text": (0, k.Xx)("#Broadcast_User_FAQ_ttip"),
                onClick: (e) =>
                  (0, W.b8)(
                    e,
                    "https://support.steampowered.com/kb_article.php?ref=6730-TOAK-6497"
                  ),
              },
              n.createElement(j.daM, null)
            )
          );
        }),
        ne = (e) => {
          const [t, a] = (0, n.useState)("");
          return n.createElement(
            T.uH,
            {
              strTitle: (0, k.Xx)("#Broadcast_ReportItem_Title"),
              strDescription: (0, k.Xx)("#Broadcast_ReportItem_Description"),
              onCancel: e.closeModal,
              bOKDisabled: 0 == t.trim().length,
              onOK: () =>
                (0, l.mG)(void 0, void 0, void 0, function* () {
                  yield p.Get().SendUserReportOnBroadcast(t),
                    e.closeModal && e.closeModal();
                }),
            },
            n.createElement("textarea", {
              value: t,
              onChange: (e) => a(e.currentTarget.value),
              rows: 10,
              cols: 80,
            })
          );
        };
      var re = a(96584),
        oe = a(13596);
      const le = (e) => {
          if (!_.L7.is_support) return null;
          const t = (t, a) => {
              (0, w.AM)(
                n.createElement(se, {
                  broadcastSteamID: e.broadcastSteamID,
                  strAction: a,
                }),
                (0, x.RA)(t)
              );
            },
            a =
              "https://steamsupport.valvesoftware.com/account/overview/" +
              e.broadcastSteamID.ConvertTo64BitString();
          return n.createElement(
            "div",
            { className: (0, O.Z)(re.AdminControls, A().ValveOnlyBackground) },
            n.createElement("div", null, "(VO) Support Tools"),
            n.createElement(
              g.zx,
              { onClick: (e) => t(e, "frontpage") },
              "Remove from Front Page"
            ),
            n.createElement(
              g.zx,
              { onClick: (e) => t(e, "ban") },
              "Ban from Broadcasting"
            ),
            n.createElement(
              g.zx,
              {
                onClick: (t) => {
                  (0, w.AM)(
                    n.createElement(ce, { steamid: e.broadcastSteamID }),
                    (0, x.RA)(t)
                  );
                },
              },
              "Make Unbannable"
            ),
            n.createElement(
              g.zx,
              { onClick: (e) => (0, W.b8)(e, a) },
              "Go to Support Page"
            )
          );
        },
        se = (0, v.Pi)((e) => {
          const { broadcastSteamID: t, strAction: a } = e,
            [r, o] = (0, n.useState)(1),
            [s, i] = (0, n.useState)(!1),
            [d, m] = (0, n.useState)(!1),
            [u, _] = (0, n.useState)(!1),
            v = (0, n.useRef)(null);
          (0, n.useEffect)(
            () => () => {
              v.current && v.current("BroadcastConfirmBanAction: unmounting");
            },
            []
          );
          const S = () => e.closeModal && e.closeModal();
          return n.createElement(
            I.S,
            null,
            n.createElement(
              T.e1,
              { onEscKeypress: S },
              n.createElement(
                g.VY,
                null,
                n.createElement(g.h4, null, "Remove Broadcast From Front Page"),
                n.createElement(
                  g.uT,
                  null,
                  n.createElement(
                    g.Ac,
                    null,
                    n.createElement(
                      "p",
                      null,
                      "frontpage" == a
                        ? "How long should we prevent the broadcast from appearing in community or store?"
                        : "How long should we prevent the user from Broadcast at all on Steam?"
                    ),
                    n.createElement(
                      "div",
                      null,
                      n.createElement(g.ry, {
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
                      Boolean(s) && n.createElement(oe.V, null, " "),
                      Boolean(d) &&
                        n.createElement(
                          "div",
                          null,
                          u
                            ? "Successfully Completed Request"
                            : "Failed to complete request, check browser console and/or try again later"
                        )
                    )
                  )
                ),
                n.createElement(
                  g.$_,
                  null,
                  d
                    ? n.createElement(
                        g.KM,
                        { onClick: S },
                        (0, k.Xx)("#Button_Dismiss")
                      )
                    : n.createElement(
                        g.Uq,
                        null,
                        n.createElement(
                          g.zx,
                          { onClick: S },
                          (0, k.Xx)("#Button_Cancel")
                        ),
                        n.createElement(
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
                                    .SetBroadcasterRestrictions(a, r, e);
                                  e.token.reason || (t = !0);
                                } finally {
                                  i(!1), m(!0), _(t);
                                }
                              }),
                          },
                          (0, k.Xx)("#Button_Confirm")
                        )
                      )
                )
              )
            )
          );
        }),
        ce = (e) => {
          const [t, a] = (0, n.useState)(!1),
            [r, o] = (0, n.useState)(!1),
            [s, i] = (0, n.useState)(!1),
            d = (0, n.useRef)(null);
          (0, n.useEffect)(
            () => () => {
              d.current && d.current("BroadcastMakeUnbannable: unmounting");
            },
            []
          );
          const m = () => e.closeModal && e.closeModal();
          return n.createElement(
            I.S,
            null,
            n.createElement(
              T.e1,
              { onEscKeypress: m },
              n.createElement(
                g.VY,
                null,
                n.createElement(g.h4, null, "Make Broadcast Unbannable"),
                n.createElement(
                  g.uT,
                  null,
                  n.createElement(
                    g.Ac,
                    null,
                    n.createElement(
                      "p",
                      null,
                      "Prevent automatic, report based banning changes to this strema visibility the stream for 1 week?"
                    ),
                    n.createElement(
                      "div",
                      null,
                      Boolean(t) && n.createElement(oe.V, null, " "),
                      Boolean(r) &&
                        n.createElement(
                          "div",
                          null,
                          s
                            ? "Successfully Set Unbannable"
                            : "Failed to make Unbannable"
                        )
                    )
                  )
                ),
                n.createElement(
                  g.$_,
                  null,
                  r
                    ? n.createElement(
                        g.KM,
                        { onClick: m },
                        (0, k.Xx)("#Button_Dismiss")
                      )
                    : n.createElement(
                        g.Uq,
                        null,
                        n.createElement(
                          g.zx,
                          { onClick: m },
                          (0, k.Xx)("#Button_Cancel")
                        ),
                        n.createElement(
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
                          (0, k.Xx)("#Button_Confirm")
                        )
                      )
                )
              )
            )
          );
        },
        ie = (0, v.Pi)((e) => {
          const t = p.Get().GetBroadcasterSteamID(),
            a = t.ConvertTo64BitString(),
            [r, o] = (0, D.Ar)("muted", !0),
            l = m.c9.GetBroadcast(a),
            s = m.c9.GetOrCreateBroadcastInfo(a);
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(
              "div",
              { className: (0, O.Z)(V.BroadcastPage) },
              n.createElement(
                "div",
                { className: (0, O.Z)(B().BroadcastAndChat) },
                Boolean(!p.Get().BShowOnlyChat()) &&
                  n.createElement(
                    I.S,
                    null,
                    n.createElement(
                      "div",
                      { className: (0, O.Z)(B().wrapper) },
                      n.createElement(
                        "div",
                        {
                          className: (0, O.Z)({
                            [B().video_placeholder]: !0,
                            video_placeholder_trgt: !0,
                            [B().NoChat]: p.Get().BShowOnlyVideo(),
                          }),
                        },
                        n.createElement(
                          "div",
                          { className: B().BroadcastPlayerContainer },
                          n.createElement(
                            I.S,
                            null,
                            n.createElement(E.default, {
                              steamIDBroadcast: a,
                              watchLocation: 5,
                              bStartMuted: r,
                            })
                          )
                        )
                      )
                    )
                  ),
                Boolean(!p.Get().BShowOnlyVideo()) &&
                  n.createElement(
                    "div",
                    { className: B().detail_chat_ctn },
                    n.createElement(
                      "div",
                      { className: B().ChatContainer },
                      n.createElement(
                        I.S,
                        null,
                        n.createElement(S.c, {
                          emoticonStore: C.D$,
                          watchLocation: 6,
                          steamID: a,
                          broadcastID: l ? l.m_ulBroadcastID : void 0,
                        })
                      )
                    )
                  )
              ),
              Boolean(!p.Get().BShowInIframe()) &&
                n.createElement(de, { broadcasterSteamID: t, broadcastInfo: s })
            )
          );
        }),
        de = (0, v.Pi)((e) => {
          const { broadcasterSteamID: t, broadcastInfo: a } = e,
            [r, o] = (0, n.useState)(null);
          return (
            (0, n.useEffect)(() => {
              (0, l.mG)(void 0, void 0, void 0, function* () {
                let e = yield f.sV.LoadOGGClanInfoForAppID(
                  Number.parseInt(a.m_strAppId)
                );
                o(e);
              });
            }, [a.m_strAppId]),
            n.createElement(
              n.Fragment,
              null,
              n.createElement(ee, { broadcasterSteamID: t }),
              n.createElement(me, { steamid: t }),
              Boolean(_.L7.is_support) &&
                n.createElement(
                  "div",
                  null,
                  n.createElement(le, { broadcastSteamID: t }),
                  n.createElement(
                    "div",
                    {
                      className: (0, O.Z)(A().ValveOnlyBackground, V.DebugCtn),
                    },
                    n.createElement(L, null)
                  )
                ),
              Boolean(a.m_strAppId && Number.parseInt(a.m_strAppId) > 7) &&
                n.createElement(
                  "div",
                  { className: V.GameInfoCtn },
                  n.createElement(
                    "div",
                    { className: V.GameAboutTitleCtn },
                    n.createElement(
                      "div",
                      { className: V.GameAboutTitle },
                      " ",
                      (0, k.Xx)("#Broadcast_About_Game"),
                      " "
                    ),
                    n.createElement(
                      "div",
                      { className: A().EventSectionSpacer },
                      " "
                    )
                  ),
                  n.createElement(
                    "div",
                    { className: V.GameInfo },
                    n.createElement(N.ju, {
                      id: Number.parseInt(a.m_strAppId),
                      type: "game",
                    })
                  )
                ),
              Boolean(r) &&
                n.createElement(
                  "div",
                  { className: V.RelatedEvents },
                  n.createElement(y._G, {
                    clanAccountID: r.clanAccountID,
                    trackingLocation: 6,
                    partnerEventStore: h.j1,
                    bViewAllShowInfiniteScroll: !0,
                  })
                )
            )
          );
        }),
        me = (0, v.Pi)((e) => {
          const t = (0, n.useRef)(null);
          let a = m.c9.GetOrCreateBroadcastInfo(
            e.steamid.ConvertTo64BitString()
          );
          const [r, o] = (0, n.useState)(a.m_strTitle),
            [s, i] = (0, n.useState)(""),
            [d, u] = (0, n.useState)(null);
          if (
            ((0, n.useEffect)(
              () => (
                o(a.m_strTitle),
                () => {
                  t.current && t.current("BroadcastControls: unmounting");
                }
              ),
              [a.m_strTitle]
            ),
            _.L7.accountid != e.steamid.GetAccountID())
          )
            return null;
          return n.createElement(
            "div",
            { className: V.ControlCtn },
            n.createElement(
              "div",
              { className: V.ControlsTitle },
              (0, k.Xx)("#Broadcaster_Control_title")
            ),
            n.createElement(
              "div",
              { className: V.TitleInput },
              n.createElement(
                "div",
                { className: V.Options },
                n.createElement(g.II, {
                  type: "text",
                  label: (0, k.Xx)("#Broadcast_title_title"),
                  onChange: (e) => o(e.currentTarget.value || ""),
                  placeholder: (0, k.Xx)("#Broadcast_title_placeholder"),
                  value: r,
                }),
                n.createElement(g.II, {
                  type: "text",
                  label: (0, k.Xx)("#Broadcast_Control_matchid"),
                  onChange: (e) => i(e.currentTarget.value || ""),
                  value: s,
                }),
                n.createElement(
                  g.zx,
                  {
                    onClick: () =>
                      (0, l.mG)(void 0, void 0, void 0, function* () {
                        t.current && t.current();
                        const e = c().CancelToken.source();
                        t.current = e.cancel;
                        let a = yield p.Get().UpdateBroadcastSettings(s, r, e);
                        e.token.reason ||
                          u(
                            (0, k.Xx)(
                              a
                                ? "#Broadcast_Control_Success"
                                : "#Broadcast_Control_Failure"
                            )
                          );
                      }),
                    "data-tooltip-text": (0, k.Xx)(
                      "#Broadcast_save_title_ttip"
                    ),
                  },
                  (0, k.Xx)("#Broadcast_save_changes")
                )
              ),
              n.createElement(
                "div",
                { className: V.StopCtn },
                n.createElement(
                  g.zx,
                  {
                    onClick: (e) => {
                      (0, w.AM)(
                        n.createElement(T.uH, {
                          strTitle: (0, k.Xx)(
                            "#Broadcast_Control_StopBroadcast"
                          ),
                          strDescription: (0, k.Xx)(
                            "#EventEditor_GenericAreYouSure"
                          ),
                          onOK: () =>
                            (0, l.mG)(void 0, void 0, void 0, function* () {
                              t.current && t.current();
                              const e = c().CancelToken.source();
                              t.current = e.cancel;
                              let a = yield p.Get().StopBroadcast(e);
                              e.token.reason ||
                                u(
                                  (0, k.Xx)(
                                    a
                                      ? "#Broadcast_Control_StopSuccess"
                                      : "#Broadcast_Control_StopFailure"
                                  )
                                );
                            }),
                        }),
                        (0, x.RA)(e)
                      );
                    },
                  },
                  (0, k.Xx)("#Broadcast_Control_StopBroadcast")
                ),
                Boolean(d) && n.createElement("div", null, d)
              )
            )
          );
        });
      var ue = a(9915),
        _e = a(27991);
      let pe = (e) => `/broadcast/(watch|watchnew)/${e}`;
      function ve(e) {
        const [t, a] = n.useState(!0);
        return (
          (0, n.useEffect)(() => {
            t && ((0, _e.nf)(null), ue.cb.InitGlobal().then(() => a(!1)));
          }, [t]),
          t
            ? n.createElement(oe.V, {
                string: (0, k.Xx)("#Loading"),
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
                    path: pe(":steamid_or_user_vanity"),
                    render: (e) =>
                      n.createElement(ie, {
                        strSteamID: e.match.params.steamid_or_user_vanity,
                      }),
                  }),
                  n.createElement(r.AW, { component: o.R })
                )
              )
        );
      }
    },
  },
]);
