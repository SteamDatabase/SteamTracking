/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
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
    "8zUZ": function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "default", function () {
          return Be;
        });
      r("xnZ7"), r("idvb");
      var a = r("q1tI"),
        i = r.n(a),
        s = r("EC67"),
        n = r("nmPn"),
        o = r("mrSG"),
        l = r("vDqi"),
        c = r.n(l),
        d = r("2vnA"),
        m = (r("65aj"), r("kLLr")),
        u = r("boaH"),
        _ = (r("AiWL"), r("OS6B")),
        h = r("lkRc");
      class b {
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
          return Object(o.a)(this, void 0, void 0, function* () {
            let t = h.c.COMMUNITY_BASE_URL + "broadcast/broadcastdebuginfo",
              r = {
                steamid: this.m_steamid.ConvertTo64BitString(),
                origin: self.origin,
              };
            try {
              let a = yield c.a.get(t, {
                params: r,
                withCredentials: !0,
                cancelToken: e ? e.token : void 0,
              });
              if (e && e.token.reason) return null;
              if (a && 200 == a.status && a.data && 1 == a.data.success)
                return (this.m_curDebugInfo = a.data), this.m_curDebugInfo;
            } catch (e) {
              let t = Object(_.a)(e);
              console.error(
                "LoadBroadcastDebugInfo: Failed " + t.strErrorMsg,
                t
              );
            }
            return null;
          });
        }
        UpdateBroadcastSettings(e, t, r) {
          return Object(o.a)(this, void 0, void 0, function* () {
            let a =
                h.c.COMMUNITY_BASE_URL + "broadcast/updatebroadcastsettings",
              i = {
                steamid: this.m_steamid.ConvertTo64BitString(),
                matchid: e,
                title: t,
                sessionid: h.c.SESSIONID,
              };
            try {
              let e = yield c.a.get(a, {
                params: i,
                withCredentials: !0,
                cancelToken: r ? r.token : void 0,
              });
              if (r && r.token.reason) return !1;
              if (e && 200 == e.status && e.data && 1 == e.data.success) {
                const e = u.a.GetOrCreateBroadcastInfo(
                  this.m_steamid.ConvertTo64BitString()
                );
                return (
                  e &&
                    Object(d.G)(() => {
                      e.m_strTitle = t;
                    }),
                  !0
                );
              }
            } catch (e) {
              let t = Object(_.a)(e);
              console.error(
                "UpdateBroadcastSettings: Failed " + t.strErrorMsg,
                t
              );
            }
            return !1;
          });
        }
        StopBroadcast(e) {
          return Object(o.a)(this, void 0, void 0, function* () {
            const t = this.m_steamid.ConvertTo64BitString(),
              r = u.a.GetBroadcast(t);
            let a = h.c.COMMUNITY_BASE_URL + "broadcast/stopbroadcast",
              i = {
                steamid: t,
                broadcastid: r ? r.m_ulBroadcastID : null,
                sessionid: h.c.SESSIONID,
              };
            return yield this.InternalSendSimpleGetRequest(
              "StopBroadcast",
              a,
              i,
              e
            );
          });
        }
        SetBroadcasterRestrictions(e, t, r) {
          return Object(o.a)(this, void 0, void 0, function* () {
            const a = this.m_steamid.ConvertTo64BitString(),
              i = u.a.GetBroadcast(a);
            let s =
                h.c.COMMUNITY_BASE_URL + "broadcast/setbroadcastrestriction",
              n = {
                steamid: a,
                broadcastid: i ? i.m_ulBroadcastID : null,
                type: e,
                days: t,
                sessionid: h.c.SESSIONID,
              };
            return yield this.InternalSendSimpleGetRequest(
              "SetBroadcasterRestrictions",
              s,
              n,
              r
            );
          });
        }
        SetUnBannable(e) {
          return Object(o.a)(this, void 0, void 0, function* () {
            const t = this.m_steamid.ConvertTo64BitString(),
              r = u.a.GetBroadcast(t);
            let a = h.c.COMMUNITY_BASE_URL + "broadcast/unban",
              i = {
                steamid: t,
                broadcastid: r ? r.m_ulBroadcastID : null,
                sessionid: h.c.SESSIONID,
              };
            return yield this.InternalSendSimpleGetRequest(
              "SetUnBannable",
              a,
              i,
              e
            );
          });
        }
        SendUserReportOnBroadcast(e) {
          return Object(o.a)(this, void 0, void 0, function* () {
            const t = this.m_steamid.ConvertTo64BitString(),
              r = u.a.GetBroadcast(t);
            let a = h.c.COMMUNITY_BASE_URL + "broadcast/report",
              i = {
                steamid: t,
                broadcastid: r ? r.m_ulBroadcastID : null,
                description: e,
                sessionid: h.c.SESSIONID,
              };
            return yield this.InternalSendSimpleGetRequest(
              "SendUserReportOnBroadcast",
              a,
              i,
              null
            );
          });
        }
        InternalSendSimpleGetRequest(e, t, r, a) {
          return Object(o.a)(this, void 0, void 0, function* () {
            try {
              let e = yield c.a.get(t, {
                params: r,
                withCredentials: !0,
                cancelToken: a ? a.token : void 0,
              });
              if (a && a.token.reason) return !1;
              if (e && 200 == e.status && e.data && 1 == e.data.success)
                return !0;
            } catch (t) {
              let r = Object(_.a)(t);
              console.error(
                `CCommunityBroadcastStore:${e}: Failed ` + r.strErrorMsg,
                r
              );
            }
            return !1;
          });
        }
        static Get() {
          return (
            b.s_Singleton || ((b.s_Singleton = new b()), b.s_Singleton.Init()),
            b.s_Singleton
          );
        }
        Init() {
          let e = Object(h.f)("broadcastsinfo", "application_config");
          this.ValidateStoreDefault(e) &&
            ((this.m_steamid = new m.a(e.steamid)),
            (this.m_bShowOnlyChat = Boolean(e.show_only_chat)),
            (this.m_bShowOnlyVideo = Boolean(e.show_only_video)));
        }
        ValidateStoreDefault(e) {
          return !(!e || "object" != typeof e) && "string" == typeof e.steamid;
        }
      }
      Object(o.b)([d.C], b.prototype, "m_curDebugInfo", void 0);
      var B = r("TyAF"),
        g = r("eN6m"),
        p = r("trWU"),
        f = r("rKv1"),
        y = r.n(f),
        S = (r("kdZy"), r("MUT6"), r("nWbB")),
        C = r("TQGK"),
        w = r("6oCP"),
        v = r("Mgs7"),
        M = r("IjL/"),
        A = r("SdTr"),
        R = r("GiuM"),
        F = r("fpVW"),
        O = r.n(F),
        z = r("5L1o"),
        j = r("Jqb/"),
        T = r("ka0M"),
        I = r("exH9"),
        E = r("X3Ds"),
        W = r("TLQK"),
        U = (r("mgoM"), r("eDP5")),
        P = r("YLyR"),
        D = r("V9dL");
      const N = (e) => {
          const t = Object(a.useRef)(null),
            [r, s] = Object(a.useState)(null);
          return (
            Object(a.useEffect)(
              () => () => {
                t.current && t.current("BroadcastDebugSection: unmounting");
              },
              []
            ),
            i.a.createElement(
              M.a,
              null,
              i.a.createElement(
                "div",
                { className: Object(I.a)(D.Container) },
                i.a.createElement(
                  "div",
                  { className: D.Controls },
                  i.a.createElement(
                    v.f,
                    {
                      onClick: () =>
                        Object(o.a)(void 0, void 0, void 0, function* () {
                          t.current && t.current();
                          const e = c.a.CancelToken.source();
                          (t.current = e.cancel),
                            s(yield b.Get().LoadBroadcastDebugInfo(e));
                        }),
                    },
                    "(VO) Load Debug Info"
                  )
                ),
                i.a.createElement(M.a, null, i.a.createElement(x, { info: r }))
              )
            )
          );
        },
        x = (e) => {
          const { info: t } = e,
            [r, s] = Object(a.useState)(!1);
          if (!t) return null;
          const n = b.Get().GetBroadcasterSteamID().ConvertTo64BitString(),
            o = u.a.GetBroadcast(n);
          return i.a.createElement(
            "div",
            { className: D.DisplaySection },
            Boolean(t.last_error_result && 1 != t.last_error_result) &&
              i.a.createElement(
                "div",
                { className: D.SubSection },
                i.a.createElement("div", { className: D.Header }, "Error"),
                i.a.createElement(
                  "div",
                  null,
                  "EResult: ",
                  t.last_error_result,
                  ", occurred ",
                  t.last_error_time,
                  " - ",
                  i.a.createElement(P.a, {
                    dateAndTime: t.last_error_time,
                    bSingleLine: !0,
                  })
                )
              ),
            i.a.createElement(
              "div",
              { className: D.SubSection },
              i.a.createElement(
                "div",
                { className: D.Header },
                "Broadcast Setup"
              ),
              i.a.createElement(
                "div",
                null,
                "Broadcaster: ",
                t.steam_id,
                ", SteamID: ",
                n
              ),
              i.a.createElement(
                "div",
                null,
                "Broadcast Directory: ",
                t.directory_server,
                ", SessionID: ",
                t.broadcast_id
              ),
              i.a.createElement(
                "div",
                null,
                "Broadcast Ingestor: ",
                t.relay_server,
                ", UploadID: ",
                t.upload_id
              ),
              i.a.createElement(
                "div",
                null,
                "Broadcast Origin: ",
                t.origin_server
              ),
              i.a.createElement("div", null, "Broadcast Chat: ", t.chat_server)
            ),
            i.a.createElement(
              "div",
              { className: D.SubSection },
              i.a.createElement("div", { className: D.Header }, "Upload Info"),
              i.a.createElement(
                "div",
                null,
                "Upload Client: ",
                t.remote_address,
                " ",
                Boolean(t.is_rtmp) ? "(RTMP)" : "(STEAM CLIENT)"
              ),
              i.a.createElement(
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
            i.a.createElement(
              "div",
              { className: D.SubSection },
              i.a.createElement("div", { className: D.Header }, "Viewer Info"),
              i.a.createElement(
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
              i.a.createElement(
                "div",
                null,
                "Average time watched: ",
                t.average_watch_duration,
                " seconds"
              ),
              i.a.createElement(
                "div",
                null,
                "Last Minute: ",
                t.added_viewers_last_minute,
                " watch requests, ",
                t.rejected_viewers_last_minute,
                " rejected"
              ),
              i.a.createElement("div", null, "Restrictions: ", t.restriction),
              i.a.createElement("div", null, t.extra_viewer_info)
            ),
            i.a.createElement(
              "div",
              { className: D.SubSection },
              i.a.createElement("div", { className: D.Header }, "Settings"),
              i.a.createElement("div", null, "is replay? ", t.is_replay),
              i.a.createElement(
                "div",
                null,
                "is replay local file? ",
                t.is_replay_local_file
              ),
              i.a.createElement(
                "div",
                null,
                "is replay clip? ",
                t.is_replay_local_file
              ),
              i.a.createElement(
                "div",
                null,
                "is replay clip? ",
                t.is_replay_clip
              ),
              i.a.createElement(
                "div",
                null,
                "is capturing VOD? ",
                t.is_capturing_vod
              ),
              i.a.createElement(
                "div",
                null,
                "is white listed for store streaming? ",
                t.is_whitelisted
              )
            ),
            i.a.createElement(
              "div",
              { className: D.SubSection },
              i.a.createElement("div", { className: D.Header }, "App Info"),
              i.a.createElement("div", null, "appid: ", t.app_id),
              i.a.createElement("div", null, "app name: ", t.app_name),
              i.a.createElement("div", null, "broadcast title: ", t.title),
              i.a.createElement("div", null, "thumbnail: ", t.thumbnail_url),
              Boolean(t.thumbnail_url) &&
                i.a.createElement("img", { src: t.thumbnail_url }),
              Boolean(t.app_id && t.app_id > 0) &&
                i.a.createElement(
                  "div",
                  { className: D.AppSummaryWidgetCtn },
                  i.a.createElement(z.j, { id: t.app_id, type: "game" })
                )
            ),
            i.a.createElement(
              "div",
              { className: D.SubSection },
              i.a.createElement(
                "div",
                { className: D.Header },
                "Manifest Information"
              ),
              i.a.createElement(
                "div",
                null,
                "Heartbeat Interval: ",
                o.m_data.heartbeat_interval
              ),
              i.a.createElement("div", null, "DASH MPEG Url: ", o.m_data.url),
              i.a.createElement("div", null, "HLS Url: ", o.m_data.hls_url)
            ),
            i.a.createElement(v.f, { onClick: () => s(!r) }, "Toggle Raw Data"),
            Boolean(r) &&
              i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(
                  "div",
                  { className: D.SubSection },
                  i.a.createElement(U.b, { data: t })
                ),
                i.a.createElement(
                  "div",
                  { className: D.SubSection },
                  i.a.createElement(U.b, { data: o.m_data })
                )
              )
          );
        };
      var G = r("m0l2"),
        L = r("jUCX"),
        K = r("Gpul"),
        k = r("Qcoi"),
        V = r("h5cq");
      function Q(e) {
        const t = k.a.GetProfileByAccountID(e.GetAccountID());
        if (t) {
          let r = new L.b(e);
          return (
            (r.m_strPlayerName = t.persona_name),
            (r.m_strAvatarHash = t.avatar_hash),
            (r.m_ePersonaState = t.persona_state),
            r
          );
        }
        return null;
      }
      const q = (e) => {
        e.steamid.GetAccountID();
        const [t, r] = Object(a.useState)(Q(e.steamid)),
          [s, n] = Object(a.useState)(k.a.GetProfileURLBySteamID(e.steamid)),
          [l, c] = Object(a.useState)(k.a.GetPersonaNameBySteamID(e.steamid));
        return (
          Object(a.useEffect)(() => {
            if (!t) {
              (() =>
                Object(o.a)(void 0, void 0, void 0, function* () {
                  yield k.a.LoadProfiles([e.steamid.ConvertTo64BitString()]),
                    r(Q(e.steamid)),
                    n(k.a.GetProfileURLBySteamID(e.steamid)),
                    c(k.a.GetPersonaNameBySteamID(e.steamid));
                }))();
            }
          }, [e.steamid, t]),
          i.a.createElement(
            "div",
            { className: V.AvatarCtn },
            i.a.createElement(
              "a",
              {
                href: s,
                "data-miniprofile": "s" + e.steamid.ConvertTo64BitString(),
              },
              i.a.createElement(K.b, {
                persona: t,
                size: e.size,
                statusPosition: "bottom",
              })
            ),
            i.a.createElement(
              "div",
              { className: V.NameAndProps },
              Boolean(e.bShowName) &&
                i.a.createElement(
                  "a",
                  {
                    href: s,
                    "data-miniprofile": "s" + e.steamid.ConvertTo64BitString(),
                  },
                  l
                ),
              e.children
            )
          )
        );
      };
      var H = r("aoTL"),
        J = r("b3LC"),
        X = r("BFsE"),
        Z = r("6Y59"),
        Y = r("+d9t"),
        $ = r("IzPI"),
        ee = r("M7Y6");
      function te(e) {
        const { broadcasterSteamID: t } = e,
          r = t.ConvertTo64BitString(),
          [a, s] = Object(H.d)(() => {
            const e = u.a.GetOrCreateBroadcastInfo(r);
            return [e.m_nViewerCount, Number.parseInt(e.m_strAppId)];
          }),
          [n] = Object(J.b)(s, { include_assets: !0 });
        return i.a.createElement(
          M.a,
          null,
          i.a.createElement(
            "div",
            { className: ee.ProfileCtn },
            i.a.createElement(
              "a",
              {
                href: Object($.g)(
                  (null == n ? void 0 : n.GetStorePageURL()) ||
                    h.c.STORE_BASE_URL + "app/" + s
                ),
                className: ee.GameCapsule,
              },
              i.a.createElement("img", {
                src: null == n ? void 0 : n.GetAssets().GetMainCapsuleURL(),
              })
            ),
            i.a.createElement(
              "div",
              { className: ee.StreamDetailsCtn },
              i.a.createElement(
                "div",
                { className: ee.GameAndOptionsCtn },
                i.a.createElement(
                  "div",
                  { className: ee.GameAndViewersCtn },
                  i.a.createElement(re, { broadcasterSteamID: t }),
                  i.a.createElement(
                    "div",
                    { className: ee.ViewerCount },
                    Object(W.l)("#Broadcast_ViewerCount", a.toLocaleString())
                  )
                ),
                i.a.createElement(ae, { broadcasterSteamID: t })
              ),
              i.a.createElement(q, {
                steamid: t,
                size: "Medium",
                bShowName: !0,
              })
            )
          )
        );
      }
      const re = Object(B.a)((e) => {
          const { broadcasterSteamID: t } = e,
            r = t.ConvertTo64BitString(),
            [a, s] = Object(H.d)(() => {
              const e = u.a.GetOrCreateBroadcastInfo(r);
              return [e.m_strAppTitle, Number.parseInt(e.m_strAppId)];
            }),
            [n] = Object(J.b)(s, { include_assets: !0 });
          return i.a.createElement(
            "div",
            { className: ee.BroadcastTitleCtn },
            Object(W.f)("#Broadcast_Playing"),
            i.a.createElement(
              "a",
              {
                href: Object($.g)(
                  (null == n ? void 0 : n.GetStorePageURL()) ||
                    h.c.STORE_BASE_URL + "app/" + s
                ),
              },
              Boolean(a) ? a : null == n ? void 0 : n.GetName()
            ),
            Boolean((null == a ? void 0 : a.length) > 0) &&
              i.a.createElement("span", null, " - ", a)
          );
        }),
        ae = Object(B.a)((e) => {
          const { broadcasterSteamID: t } = e,
            r = t.ConvertTo64BitString();
          u.a.GetOrCreateBroadcastInfo(r);
          return i.a.createElement(
            "div",
            { className: ee.BroadcastUserActionsCtn },
            Boolean(
              h.h.steamid != e.broadcasterSteamID.ConvertTo64BitString()
            ) &&
              i.a.createElement(
                v.f,
                {
                  "data-tooltip-text": Object(W.f)(
                    "#Broadcast_User_Report_ttip"
                  ),
                  onClick: (e) => {
                    h.h.logged_in
                      ? Object(T.d)(
                          i.a.createElement(ie, { broadcasterSteamID: t }),
                          Object(E.o)(e)
                        )
                      : Object(T.d)(
                          i.a.createElement(j.e, {
                            strTitle: Object(W.f)(
                              "#EventDisplay_Share_NotLoggedIn"
                            ),
                            strDescription: Object(W.f)(
                              "#EventDisplay_Share_NotLoggedIn_Description"
                            ),
                            strOKButtonText: Object(W.f)("#MobileLogin_SignIn"),
                            onOK: () => Object(X.a)(),
                          }),
                          Object(E.o)(e)
                        );
                  },
                },
                i.a.createElement(Z.B, null)
              ),
            i.a.createElement(
              v.f,
              {
                "data-tooltip-text": Object(W.f)("#Broadcast_User_FAQ_ttip"),
                onClick: (e) =>
                  Object(Y.e)(
                    e,
                    "https://support.steampowered.com/kb_article.php?ref=6730-TOAK-6497"
                  ),
              },
              i.a.createElement(Z.F, null)
            )
          );
        }),
        ie = (e) => {
          const [t, r] = Object(a.useState)("");
          return i.a.createElement(
            j.e,
            {
              strTitle: Object(W.f)("#Broadcast_ReportItem_Title"),
              strDescription: Object(W.f)("#Broadcast_ReportItem_Description"),
              onCancel: e.closeModal,
              bOKDisabled: 0 == t.trim().length,
              onOK: () =>
                Object(o.a)(void 0, void 0, void 0, function* () {
                  yield b.Get().SendUserReportOnBroadcast(t),
                    e.closeModal && e.closeModal();
                }),
            },
            i.a.createElement("textarea", {
              value: t,
              onChange: (e) => r(e.currentTarget.value),
              rows: 10,
              cols: 80,
            })
          );
        };
      var se = r("Pa9b"),
        ne = r("0OaU");
      const oe = (e) => {
          if (!h.h.is_support) return null;
          const t = (t, r) => {
              Object(T.d)(
                i.a.createElement(le, {
                  broadcastSteamID: e.broadcastSteamID,
                  strAction: r,
                }),
                Object(E.o)(t)
              );
            },
            r =
              "https://steamsupport.valvesoftware.com/account/overview/" +
              e.broadcastSteamID.ConvertTo64BitString();
          return i.a.createElement(
            "div",
            {
              className: Object(I.a)(se.AdminControls, O.a.ValveOnlyBackground),
            },
            i.a.createElement("div", null, "(VO) Support Tools"),
            i.a.createElement(
              v.f,
              { onClick: (e) => t(e, "frontpage") },
              "Remove from Front Page"
            ),
            i.a.createElement(
              v.f,
              { onClick: (e) => t(e, "ban") },
              "Ban from Broadcasting"
            ),
            i.a.createElement(
              v.f,
              {
                onClick: (t) => {
                  Object(T.d)(
                    i.a.createElement(ce, { steamid: e.broadcastSteamID }),
                    Object(E.o)(t)
                  );
                },
              },
              "Make Unbannable"
            ),
            i.a.createElement(
              v.f,
              { onClick: (e) => Object(Y.e)(e, r) },
              "Go to Support Page"
            )
          );
        },
        le = Object(B.a)((e) => {
          const { broadcastSteamID: t, strAction: r } = e,
            [s, n] = Object(a.useState)(1),
            [l, d] = Object(a.useState)(!1),
            [m, u] = Object(a.useState)(!1),
            [_, h] = Object(a.useState)(!1),
            B = Object(a.useRef)(null);
          Object(a.useEffect)(
            () => () => {
              B.current && B.current("BroadcastConfirmBanAction: unmounting");
            },
            []
          );
          const g = () => e.closeModal && e.closeModal();
          return i.a.createElement(
            M.a,
            null,
            i.a.createElement(
              j.i,
              { onEscKeypress: g },
              i.a.createElement(
                v.h,
                null,
                i.a.createElement(
                  v.z,
                  null,
                  "Remove Broadcast From Front Page"
                ),
                i.a.createElement(
                  v.d,
                  null,
                  i.a.createElement(
                    v.e,
                    null,
                    i.a.createElement(
                      "p",
                      null,
                      "frontpage" == r
                        ? "How long should we prevent the broadcast from appearing in community or store?"
                        : "How long should we prevent the user from Broadcast at all on Steam?"
                    ),
                    i.a.createElement(
                      "div",
                      null,
                      i.a.createElement(v.n, {
                        rgOptions: [
                          { label: "1 Day", data: 1 },
                          { label: "1 Week", data: 7 },
                          { label: "1 Month", data: 30 },
                          { label: "6 Months", data: 180 },
                          { label: "1 Year", data: 365 },
                        ],
                        selectedOption: s,
                        onChange: (e) => n(e.data),
                      }),
                      Boolean(l) && i.a.createElement(ne.a, null, " "),
                      Boolean(m) &&
                        i.a.createElement(
                          "div",
                          null,
                          _
                            ? "Successfully Completed Request"
                            : "Failed to complete request, check browser console and/or try again later"
                        )
                    )
                  )
                ),
                i.a.createElement(
                  v.r,
                  null,
                  m
                    ? i.a.createElement(
                        v.G,
                        { onClick: g },
                        Object(W.f)("#Button_Dismiss")
                      )
                    : i.a.createElement(
                        v.N,
                        null,
                        i.a.createElement(
                          v.f,
                          { onClick: g },
                          Object(W.f)("#Button_Cancel")
                        ),
                        i.a.createElement(
                          v.G,
                          {
                            onClick: () =>
                              Object(o.a)(void 0, void 0, void 0, function* () {
                                d(!0);
                                try {
                                  B.current && B.current();
                                  const e = c.a.CancelToken.source();
                                  B.current = e.cancel;
                                  let t = yield b
                                    .Get()
                                    .SetBroadcasterRestrictions(r, s, e);
                                  e.token.reason || (t = !0);
                                } finally {
                                  d(!1), u(!0), h(t);
                                }
                              }),
                          },
                          Object(W.f)("#Button_Confirm")
                        )
                      )
                )
              )
            )
          );
        }),
        ce = (e) => {
          const [t, r] = Object(a.useState)(!1),
            [s, n] = Object(a.useState)(!1),
            [l, d] = Object(a.useState)(!1),
            m = Object(a.useRef)(null);
          Object(a.useEffect)(
            () => () => {
              m.current && m.current("BroadcastMakeUnbannable: unmounting");
            },
            []
          );
          const u = () => e.closeModal && e.closeModal();
          return i.a.createElement(
            M.a,
            null,
            i.a.createElement(
              j.i,
              { onEscKeypress: u },
              i.a.createElement(
                v.h,
                null,
                i.a.createElement(v.z, null, "Make Broadcast Unbannable"),
                i.a.createElement(
                  v.d,
                  null,
                  i.a.createElement(
                    v.e,
                    null,
                    i.a.createElement(
                      "p",
                      null,
                      "Prevent automatic, report based banning changes to this strema visibility the stream for 1 week?"
                    ),
                    i.a.createElement(
                      "div",
                      null,
                      Boolean(t) && i.a.createElement(ne.a, null, " "),
                      Boolean(s) &&
                        i.a.createElement(
                          "div",
                          null,
                          l
                            ? "Successfully Set Unbannable"
                            : "Failed to make Unbannable"
                        )
                    )
                  )
                ),
                i.a.createElement(
                  v.r,
                  null,
                  s
                    ? i.a.createElement(
                        v.G,
                        { onClick: u },
                        Object(W.f)("#Button_Dismiss")
                      )
                    : i.a.createElement(
                        v.N,
                        null,
                        i.a.createElement(
                          v.f,
                          { onClick: u },
                          Object(W.f)("#Button_Cancel")
                        ),
                        i.a.createElement(
                          v.G,
                          {
                            onClick: () =>
                              Object(o.a)(void 0, void 0, void 0, function* () {
                                r(!0);
                                let e = !1;
                                try {
                                  m.current && m.current();
                                  const t = c.a.CancelToken.source();
                                  (m.current = t.cancel),
                                    (e = yield b.Get().SetUnBannable(t));
                                } finally {
                                  r(!1), n(!0), d(e);
                                }
                              }),
                          },
                          Object(W.f)("#Button_Confirm")
                        )
                      )
                )
              )
            )
          );
        },
        de = Object(B.a)((e) => {
          const t = b.Get().GetBroadcasterSteamID(),
            r = t.ConvertTo64BitString(),
            [a, s] = Object(R.d)("muted", !0),
            n = u.a.GetBroadcast(r),
            o = u.a.GetOrCreateBroadcastInfo(r);
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              "div",
              { className: Object(I.a)(G.BroadcastPage) },
              i.a.createElement(
                "div",
                { className: Object(I.a)(y.a.BroadcastAndChat) },
                Boolean(!b.Get().BShowOnlyChat()) &&
                  i.a.createElement(
                    M.a,
                    null,
                    i.a.createElement(
                      "div",
                      { className: Object(I.a)(y.a.wrapper) },
                      i.a.createElement(
                        "div",
                        {
                          className: Object(I.a)({
                            [y.a.video_placeholder]: !0,
                            video_placeholder_trgt: !0,
                            [y.a.NoChat]: b.Get().BShowOnlyVideo(),
                          }),
                        },
                        i.a.createElement(
                          "div",
                          { className: y.a.BroadcastPlayerContainer },
                          i.a.createElement(
                            M.a,
                            null,
                            i.a.createElement(p.a, {
                              steamIDBroadcast: r,
                              watchLocation: 5,
                              bStartMuted: a,
                            })
                          )
                        )
                      )
                    )
                  ),
                Boolean(!b.Get().BShowOnlyVideo()) &&
                  i.a.createElement(
                    "div",
                    { className: y.a.detail_chat_ctn },
                    i.a.createElement(
                      "div",
                      { className: y.a.ChatContainer },
                      i.a.createElement(
                        M.a,
                        null,
                        i.a.createElement(g.a, {
                          emoticonStore: S.g,
                          watchLocation: 6,
                          steamID: r,
                          broadcastID: n ? n.m_ulBroadcastID : void 0,
                        })
                      )
                    )
                  )
              ),
              Boolean(!b.Get().BShowInIframe()) &&
                i.a.createElement(me, {
                  broadcasterSteamID: t,
                  broadcastInfo: o,
                })
            )
          );
        }),
        me = Object(B.a)((e) => {
          const { broadcasterSteamID: t, broadcastInfo: r } = e,
            [s, n] = Object(a.useState)(null);
          return (
            Object(a.useEffect)(() => {
              Object(o.a)(void 0, void 0, void 0, function* () {
                let e = yield C.a.LoadOGGClanInfoForAppID(
                  Number.parseInt(r.m_strAppId)
                );
                n(e);
              });
            }, [r.m_strAppId]),
            i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(te, { broadcasterSteamID: t }),
              i.a.createElement(ue, { steamid: t }),
              Boolean(h.h.is_support) &&
                i.a.createElement(
                  "div",
                  null,
                  i.a.createElement(oe, { broadcastSteamID: t }),
                  i.a.createElement(
                    "div",
                    {
                      className: Object(I.a)(
                        O.a.ValveOnlyBackground,
                        G.DebugCtn
                      ),
                    },
                    i.a.createElement(N, null)
                  )
                ),
              Boolean(r.m_strAppId && Number.parseInt(r.m_strAppId) > 7) &&
                i.a.createElement(
                  "div",
                  { className: G.GameInfoCtn },
                  i.a.createElement(
                    "div",
                    { className: G.GameAboutTitleCtn },
                    i.a.createElement(
                      "div",
                      { className: G.GameAboutTitle },
                      " ",
                      Object(W.f)("#Broadcast_About_Game"),
                      " "
                    ),
                    i.a.createElement(
                      "div",
                      { className: O.a.EventSectionSpacer },
                      " "
                    )
                  ),
                  i.a.createElement(
                    "div",
                    { className: G.GameInfo },
                    i.a.createElement(z.j, {
                      id: Number.parseInt(r.m_strAppId),
                      type: "game",
                    })
                  )
                ),
              Boolean(s) &&
                i.a.createElement(
                  "div",
                  { className: G.RelatedEvents },
                  i.a.createElement(A.a, {
                    clanAccountID: s.clanAccountID,
                    trackingLocation: 6,
                    partnerEventStore: w.b,
                    bViewAllShowInfiniteScroll: !0,
                  })
                )
            )
          );
        }),
        ue = Object(B.a)((e) => {
          const t = Object(a.useRef)(null);
          let r = u.a.GetOrCreateBroadcastInfo(
            e.steamid.ConvertTo64BitString()
          );
          const [s, n] = Object(a.useState)(r.m_strTitle),
            [l, d] = Object(a.useState)(""),
            [m, _] = Object(a.useState)(null);
          if (
            (Object(a.useEffect)(
              () => (
                n(r.m_strTitle),
                () => {
                  t.current && t.current("BroadcastControls: unmounting");
                }
              ),
              [r.m_strTitle]
            ),
            h.h.accountid != e.steamid.GetAccountID())
          )
            return null;
          return i.a.createElement(
            "div",
            { className: G.ControlCtn },
            i.a.createElement(
              "div",
              { className: G.ControlsTitle },
              Object(W.f)("#Broadcaster_Control_title")
            ),
            i.a.createElement(
              "div",
              { className: G.TitleInput },
              i.a.createElement(
                "div",
                { className: G.Options },
                i.a.createElement(v.A, {
                  type: "text",
                  label: Object(W.f)("#Broadcast_title_title"),
                  onChange: (e) => n(e.currentTarget.value || ""),
                  placeholder: Object(W.f)("#Broadcast_title_placeholder"),
                  value: s,
                }),
                i.a.createElement(v.A, {
                  type: "text",
                  label: Object(W.f)("#Broadcast_Control_matchid"),
                  onChange: (e) => d(e.currentTarget.value || ""),
                  value: l,
                }),
                i.a.createElement(
                  v.f,
                  {
                    onClick: () =>
                      Object(o.a)(void 0, void 0, void 0, function* () {
                        t.current && t.current();
                        const e = c.a.CancelToken.source();
                        t.current = e.cancel;
                        let r = yield b.Get().UpdateBroadcastSettings(l, s, e);
                        e.token.reason ||
                          _(
                            Object(W.f)(
                              r
                                ? "#Broadcast_Control_Success"
                                : "#Broadcast_Control_Failure"
                            )
                          );
                      }),
                    "data-tooltip-text": Object(W.f)(
                      "#Broadcast_save_title_ttip"
                    ),
                  },
                  Object(W.f)("#Broadcast_save_changes")
                )
              ),
              i.a.createElement(
                "div",
                { className: G.StopCtn },
                i.a.createElement(
                  v.f,
                  {
                    onClick: (e) => {
                      Object(T.d)(
                        i.a.createElement(j.e, {
                          strTitle: Object(W.f)(
                            "#Broadcast_Control_StopBroadcast"
                          ),
                          strDescription: Object(W.f)(
                            "#EventEditor_GenericAreYouSure"
                          ),
                          onOK: () =>
                            Object(o.a)(void 0, void 0, void 0, function* () {
                              t.current && t.current();
                              const e = c.a.CancelToken.source();
                              t.current = e.cancel;
                              let r = yield b.Get().StopBroadcast(e);
                              e.token.reason ||
                                _(
                                  Object(W.f)(
                                    r
                                      ? "#Broadcast_Control_StopSuccess"
                                      : "#Broadcast_Control_StopFailure"
                                  )
                                );
                            }),
                        }),
                        Object(E.o)(e)
                      );
                    },
                  },
                  Object(W.f)("#Broadcast_Control_StopBroadcast")
                ),
                Boolean(m) && i.a.createElement("div", null, m)
              )
            )
          );
        });
      var _e = r("9w6b"),
        he = r("hKFG");
      let be = (e) => `/broadcast/(watch|watchnew)/${e}`;
      function Be(e) {
        const [t, r] = i.a.useState(!0);
        return (
          Object(a.useEffect)(() => {
            t && (Object(he.a)(null), _e.a.InitGlobal().then(() => r(!1)));
          }, [t]),
          t
            ? i.a.createElement(ne.a, {
                string: Object(W.f)("#Loading"),
                position: "center",
                size: "medium",
              })
            : i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(
                  s.e,
                  null,
                  i.a.createElement(s.c, {
                    path: be(":steamid_or_user_vanity"),
                    render: (e) =>
                      i.a.createElement(de, {
                        strSteamID: e.match.params.steamid_or_user_vanity,
                      }),
                  }),
                  i.a.createElement(s.c, { component: n.b })
                )
              )
        );
      }
    },
    FDY8: function (e, t) {
      e.exports =
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==";
    },
    Gpul: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return p;
      }),
        r.d(t, "b", function () {
          return f;
        });
      var a = r("mrSG"),
        i = r("q1tI"),
        s = r("TyAF"),
        n = r("jUCX"),
        o = r("exH9"),
        l = (r("oFam"), r("lkRc")),
        c = r("UxvL"),
        d = r("XxJu"),
        m = r.n(d),
        u = r("FDY8"),
        _ = r.n(u),
        h = r("dFOy"),
        b = r.n(h),
        B = r("WeG9"),
        g = r.n(B);
      class p extends i.Component {
        render() {
          const e = this.props,
            {
              strAvatarURL: t,
              size: r,
              className: s,
              statusStyle: n,
              statusPosition: l,
              children: d,
            } = e,
            u = Object(a.c)(e, [
              "strAvatarURL",
              "size",
              "className",
              "statusStyle",
              "statusPosition",
              "children",
            ]),
            h = [];
          return (
            t && h.push(t),
            h.push(
              (function (e) {
                switch (e) {
                  case "X-Small":
                  case "Small":
                    return m.a;
                  case "Medium":
                  case "MediumLarge":
                    return _.a;
                  case "Large":
                  case "X-Large":
                  case "FillArea":
                    return b.a;
                }
              })(r)
            ),
            i.createElement(
              "div",
              Object.assign(
                {
                  className: Object(o.a)(
                    g.a.avatarHolder,
                    "avatarHolder",
                    "no-drag",
                    r || "Medium",
                    s
                  ),
                },
                u
              ),
              i.createElement("div", {
                className: Object(o.a)(g.a.avatarStatus, "avatarStatus", l),
                style: n,
              }),
              i.createElement(c.a, {
                className: Object(o.a)(g.a.avatar, "avatar"),
                rgSources: h,
                draggable: !1,
              }),
              d
            )
          );
        }
      }
      let f = class extends i.Component {
        render() {
          const e = this.props,
            { persona: t, size: r, animatedAvatar: s, className: c } = e,
            d = Object(a.c)(e, [
              "persona",
              "size",
              "animatedAvatar",
              "className",
            ]);
          let m = "";
          return (
            s && s.image_small && 0 != s.image_small.length
              ? (m = l.c.MEDIA_CDN_COMMUNITY_URL + "images/" + s.image_small)
              : t &&
                ((m = t.avatar_url_medium),
                "Small" == r || "X-Small" == r
                  ? (m = t.avatar_url)
                  : ("Large" != r && "X-Large" != r && "FillArea" != r) ||
                    (m = t.avatar_url_full)),
            i.createElement(
              p,
              Object.assign(
                {
                  strAvatarURL: m,
                  size: r,
                  className: Object(o.a)(Object(n.c)(t), c),
                },
                d
              )
            )
          );
        }
      };
      f = Object(a.b)([s.a], f);
      const y = Object(s.a)((e) => {
        const { profileItem: t, className: r, bDisableAnimation: s } = e,
          n = Object(a.c)(e, ["profileItem", "className", "bDisableAnimation"]);
        if (!t || !t.image_small || 0 == t.image_small.length) return null;
        let c = s ? t.image_large : t.image_small;
        return (
          c || (c = t.image_small),
          c.startsWith("https://") ||
            (c = l.c.MEDIA_CDN_COMMUNITY_URL + "images/" + c),
          i.createElement(
            "div",
            Object.assign(
              { className: Object(o.a)(g.a.avatarFrame, r, "avatarFrame") },
              n
            ),
            i.createElement("img", { className: g.a.avatarFrameImg, src: c })
          )
        );
      });
      let S = class extends i.Component {
        constructor(e) {
          super(e),
            (this.state = { bAnimate: "None" != this.props.loopDuration }),
            (this.m_timer = 0);
        }
        componentDidMount() {
          this.SetupAnimationTimer();
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
            (this.m_timer = window.setTimeout(
              () => this.setState({ bAnimate: !1 }),
              e
            ));
        }
        StopAnimationTimer() {
          this.m_timer &&
            (window.clearTimeout(this.m_timer), (this.m_timer = 0));
        }
        componentWillUnmount() {
          this.StopAnimationTimer();
        }
        componentDidUpdate(e) {
          this.props.loopDuration != e.loopDuration &&
            ("None" == this.props.loopDuration
              ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
              : "Infinite" == this.props.loopDuration &&
                (this.setState({ bAnimate: !0 }), this.StopAnimationTimer()));
        }
        render() {
          let e = this.props,
            {
              loopDuration: t,
              animatedAvatar: r,
              avatarFrame: s,
              children: n,
              style: o,
            } = e,
            l = Object(a.c)(e, [
              "loopDuration",
              "animatedAvatar",
              "avatarFrame",
              "children",
              "style",
            ]);
          return (
            l.onClick &&
              (o = Object.assign(Object.assign({}, o), { cursor: "pointer" })),
            this.state.bAnimate || (r = null),
            i.createElement(
              f,
              Object.assign({ animatedAvatar: r }, l),
              n,
              i.createElement(y, {
                profileItem: s,
                bDisableAnimation: "None" === this.props.loopDuration,
              })
            )
          );
        }
      };
      S = Object(a.b)([s.a], S);
    },
    M7Y6: function (e, t, r) {
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
    Pa9b: function (e, t, r) {
      e.exports = { AdminControls: "broadcastsupport_AdminControls_3KL0b" };
    },
    V9dL: function (e, t, r) {
      e.exports = {
        SubSection: "broadcastdebug_SubSection_3Ac4z",
        Header: "broadcastdebug_Header_2vrXB",
        AppSummaryWidgetCtn: "broadcastdebug_AppSummaryWidgetCtn_35ozI",
      };
    },
    WeG9: function (e, t, r) {
      e.exports = {
        avatarHolder: "steamavatar_avatarHolder_nibod",
        avatarStatus: "steamavatar_avatarStatus_3xUpb",
        avatar: "steamavatar_avatar_3h-QR",
        avatarFrame: "steamavatar_avatarFrame_X_mJE",
        avatarFrameImg: "steamavatar_avatarFrameImg_3fM0F",
      };
    },
    XxJu: function (e, t) {
      e.exports =
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=";
    },
    dFOy: function (e, t) {
      e.exports =
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAuAC4AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8V1G9u4dQuYobmeONJWVVWQgAAn3qt/aN9/z+3P/AH9b/GjVv+Qre/8AXZ//AEI1VoAtf2jff8/tz/39b/Gj+0b7/n9uf+/rf41VooAtf2jff8/tz/39b/Gj+0b7/n9uf+/rf41VooAtf2jff8/tz/39b/Gj+0b7/n9uf+/rf41VooAtf2jff8/tz/39b/Gj+0b7/n9uf+/rf41VooAtf2jff8/tz/39b/Gj+0b7/n9uf+/rf41VooAtf2jff8/tz/39b/Gj+0b7/n9uf+/rf41VooAtf2jff8/tz/39b/Gj+0b7/n9uf+/rf41VooAtf2jff8/tz/39b/Gj+0b7/n9uf+/rf41VooAtf2jff8/tz/39b/Gj+0b7/n9uf+/rf41VooAtf2jff8/tz/39b/Gj+0b7/n9uf+/rf41VooA09OvbubULaKa5nkjeVVZWkJBBI96KraT/AMhWy/67J/6EKKADVv8AkK3v/XZ//QjVWrWrf8hW9/67P/6Eaq0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAFrSf+QrZf8AXZP/AEIUUaT/AMhWy/67J/6EKKADVv8AkK3v/XZ//QjVWrWrf8hW9/67P/6Eaq0AFFFFABRRRQAUUUUAFFFbXhTwvq/irURZaJaPO4wZHPCRD1Zuw/U9s0AYtFfSHhn4AaZBEkniPUZru4xkxWuI4we43EFm+vFdavwc8CqoB0QsR1Ju58n/AMfoA+QqK+oNc+Avhu8jJ0q5vdOmx8vzCZPxVuT+BFeJ+PfhvrvgxvNvYhc6cThbyDJTPYMMZU/Xj0JoA4uiiigAooooAKKKKACiiigC1pP/ACFbL/rsn/oQoo0n/kK2X/XZP/QhRQAat/yFb3/rs/8A6Eaq1a1b/kK3v/XZ/wD0I1VoAKKKKACiiigAooooA2/Bnhy78V+I7TSbH5XmbLyEZESDlmP0/U8V9leEvDeneFdFh03SYQkSAF3IG+V8YLMe5OP6DivK/wBmHQUt9B1HXJE/f3cv2eMntGgBOPqx/wDHa9toAKK8U+N/xSu/D96dA8OOkd+EDXNyQGMIIyFUf3sHOSOAeOengNx4k1y4nM8+sai8xOd7XLk5+uaAPumo7mCK6t5Le5ijmglUq8cigqwIwQR3FfMvww+Mep6Vfw2Pii5kv9KkIUzyktLAem4t1ZfUHJ9PQ/TqOrorowZSAwKnII65BoA+S/jX8P8A/hDtZS605SdFvWPlA5JhfvGT6dwT2+ma82r7S+Kugp4i8B6tZFd0yRGeA9xIg3Lj0zgj6Gvi2gAooooAKKKKACiiigC1pP8AyFbL/rsn/oQoo0n/AJCtl/12T/0IUUAGrf8AIVvf+uz/APoRqrVrVv8AkK3v/XZ//QjVWgAooooAKKKKACiiigD64+A9xbRfCrRVeaFHJnLAsAc+e/Xn0xXffbbX/n5h/wC+x/jXwTRQBr+ML5tS8V6xeu28z3crg5yMFjgA+mOKyKKKACvtP4UzTz/Djw89znzPsaLk9SoGFP5AV8ofD/wpd+MfEtvplqCsRO+4mA4hjBG5vr2A7mvtSxtYbGyt7S1QJBBGsUaDoqKAAP0oAlZQylWAZWGCDyCK+Aq+5PGurpoXhLV9Sdgpt7Z2UnjL4wg/Fior4boAKKKKACiiigAooooAtaT/AMhWy/67J/6EKKNJ/wCQrZf9dk/9CFFABq3/ACFb3/rs/wD6Eaq1a1b/AJCt7/12f/0I1VoAKKKKACiiigAooooAKKKKACpbW3mu7qG3tY3luJXEccaDJdieAB3OTUVfQ/7O3gHyIl8V6tD+9kUiwjccqveXHqeg9snuKAPQvhR4Jh8FeG0gcI+p3GJLuVecvjhQf7q5x78nvXa0V5r8bfHw8I6H9j0+T/idXyFYsdYU6GQ+/Ye/PY0Aec/tFeOk1K8HhjTJN1taybruRTw8ozhB7Lnn3/3a8RpWYsxZiWZjkk8kn1NJQAUUUUAFFFFABRRRQBa0n/kK2X/XZP8A0IUUaT/yFbL/AK7J/wChCigA1b/kK3v/AF2f/wBCNVatat/yFb3/AK7P/wChGqtABRRRQAUUUUAFFFFABRRRQB0Pw+0NfEnjTSNJkz5NxMPNA6mNQWcA+u1TX23FGkMSRxIEjRQqqowFAGAAOwxXyV+z2P8Ai6Wm/wDXKb/0W1fW9AGN4w8RWfhXw9datqBzFCvyoDgyueFUe5P5DntXxd4n1298Sa5darqUm+4uH3EDOEHQKo7ADivdf2qbt00vw9ZhiElmmmK9iUVQCf8Avs187UAFFFFABRRRQAUUUUAFFFFAFrSf+QrZf9dk/wDQhRRpP/IVsv8Arsn/AKEKKADVv+Qre/8AXZ//AEI1Vq1q3/IVvf8Ars//AKEaq0AFFFFABRRRQAUUUUAFFFFAHdfBTVrHRfiFY3uq3MdtaJHMGlk4AJjIH6mvpX/hZfg3/oYbH/vo/wCFfGFFAHs/7RvibRvEX/CPf2JqMN75H2jzfLJOzd5W3PH+ya8YoooAKKKKACiiigAooooAKKKKALWk/wDIVsv+uyf+hCijSf8AkK2X/XZP/QhRQAat/wAhW9/67P8A+hGqtWtW/wCQre/9dn/9CNVaACiiigAooooAKKKKACiiigD0P4BwQ3PxN0+K5ijljMcxKSKGB/dkjivqv+xdK/6Blj/4Dr/hXyf8DL+z034kWFzqN3b2lsscwaWeQRoCYyACxIA5r6g/4TXwt/0Muif+DCL/AOKoA8Y/aisrSz/4Rn7JbQwbvtW7y0C7v9VjOBz1rwivb/2l9a0rWP8AhHP7I1Oxv/K+0+Z9luFl2Z8rG7aTjOD19K8QoAKKKKACiiigAooooAKKKKALWk/8hWy/67J/6EKKNJ/5Ctl/12T/ANCFFABq3/IVvf8Ars//AKEaq1a1b/kK3v8A12f/ANCNVaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigC1pP/IVsv+uyf+hCijSf+QrZf9dk/wDQhRQAat/yFb3/AK7P/wChGqtWtW/5Ct7/ANdn/wDQjVWgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAtaT/yFbL/rsn/oQoo0n/kK2X/XZP8A0IUUAWdRsrubULmWG2nkjeVmVljJBBJ9qrf2dff8+Vz/AN+m/wAKKKAD+zr7/nyuf+/Tf4Uf2dff8+Vz/wB+m/woooAP7Ovv+fK5/wC/Tf4Uf2dff8+Vz/36b/CiigA/s6+/58rn/v03+FH9nX3/AD5XP/fpv8KKKAD+zr7/AJ8rn/v03+FH9nX3/Plc/wDfpv8ACiigA/s6+/58rn/v03+FH9nX3/Plc/8Afpv8KKKAD+zr7/nyuf8Av03+FH9nX3/Plc/9+m/woooAP7Ovv+fK5/79N/hR/Z19/wA+Vz/36b/CiigA/s6+/wCfK5/79N/hR/Z19/z5XP8A36b/AAoooAP7Ovv+fK5/79N/hR/Z19/z5XP/AH6b/CiigA/s6+/58rn/AL9N/hR/Z19/z5XP/fpv8KKKALOnWV3DqFtLNbTxxpKrMzRkAAEe1FFFAH//2Q==";
    },
    eN6m: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return U;
      });
      var a = r("mrSG"),
        i = r("2vnA"),
        s = r("TyAF"),
        n = r("q1tI"),
        o = r.n(n),
        l = r("TtDX"),
        c = (r("kdZy"), r("gfUn")),
        d = r("1BdX"),
        m = (r("wUwH"), r("a5LV")),
        u = (r("gJzY"), r("Z9dU")),
        _ = r.n(u),
        h = r("y+6m"),
        b = r("Mgs7"),
        B = r("Gorr"),
        g = r("0QoN"),
        p = r("BFsE"),
        f = r("gPCo"),
        y = r("5znp"),
        S = r.n(y);
      const C = () =>
          o.a.createElement(
            "div",
            { className: S.a.FriendsListInsetShadowCtn },
            o.a.createElement("div", {
              className: S.a.FriendListInsetShadowTop,
            })
          ),
        w = () =>
          o.a.createElement(
            "div",
            { className: S.a.FriendsListInsetShadowCtn },
            o.a.createElement("div", {
              className: S.a.FriendListInsetShadowBottom,
            })
          );
      var v = r("6Y59"),
        M = r("exH9"),
        A = r("TLQK"),
        R = r("opsS"),
        F = r("lkRc"),
        O = r("3sYe"),
        z = r.n(O),
        j = r("A5MU");
      const T = new RegExp("ː([^ː]*)ː", "g"),
        I =
          (new RegExp("(https?://[^ '\"<>]*)", "gi"),
          new RegExp(
            "^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)",
            "i"
          ));
      const E = (e) => {
          const { userType: t, msg: r, presenterInfo: a } = e;
          if ("presenter" === t)
            return n.createElement(
              "span",
              null,
              n.createElement(
                f.b,
                {
                  name: a.name,
                  title: a.title,
                  photo: a.photo,
                  company: a.company,
                  bioString: a.bio,
                },
                n.createElement(
                  "a",
                  {
                    className: Object(M.a)(
                      z.a.MessageName,
                      z.a.MessagePresenter
                    ),
                    href: F.c.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
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
                ? (e = z.a.MessageBroadcaster)
                : "moderator" === t && (e = z.a.MessageModerator),
              n.createElement(
                "span",
                null,
                n.createElement(
                  "a",
                  {
                    className: Object(M.a)(z.a.MessageName, e),
                    href: F.c.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
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
        W = (e) => {
          switch (e.userType) {
            case "presenter":
              return n.createElement(
                "span",
                {
                  className: z.a.RoleFlairContainer,
                  "data-tooltip-text": Object(A.f)(
                    "#BroadcastChat_Role_Presenter_ttip"
                  ),
                },
                n.createElement(v.h, null)
              );
            case "moderator":
              return n.createElement(
                "span",
                {
                  className: z.a.RoleFlairContainer,
                  "data-tooltip-text": Object(A.f)(
                    "#BroadcastChat_Role_Moderatorr_ttip"
                  ),
                },
                n.createElement(v.i, null)
              );
            case "broadcaster":
              return n.createElement(
                "span",
                {
                  className: z.a.RoleFlairContainer,
                  "data-tooltip-text": Object(A.f)(
                    "#BroadcastChat_Role_Broadcaster_ttip"
                  ),
                },
                n.createElement(v.g, null)
              );
            default:
              return null;
          }
        };
      let U = class extends n.Component {
        constructor() {
          super(...arguments),
            (this.m_chat = null),
            (this.messagesContainer = n.createRef());
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
            (this.m_chat = c.a.GetOrCreateChat(
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
          return !!e.match(I);
        }
        AddLinksEmoticons(e, t) {
          let r = T;
          t && (r = this.m_chat.GetUserEmoticons());
          let a = e.split(T);
          const i = [];
          for (let e = 0; e < a.length; e += 1)
            e % 2 == 1
              ? i.push(
                  n.createElement(B.b, {
                    emoticonHoverStore: m.b,
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
          if (t.type !== j.a.Chat) return null;
          const r = [],
            a = this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID()),
            i = this.m_chat.BIsUserBroadcastModerator(
              this.m_chat.GetUserSteamID()
            );
          if (
            ((F.h && F.h.is_support) || a || i
              ? r.push(
                  n.createElement(
                    h.d,
                    {
                      key: "remove",
                      onSelected: () =>
                        this.m_chat.RemoveUserMessagesServer(
                          t.steamid,
                          t.persona_name
                        ),
                    },
                    Object(A.f)("#BroadcastChat_RemoveMessages")
                  ),
                  n.createElement(
                    h.d,
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
                    Object(A.f)("#BroadcastChat_half_Mute")
                  ),
                  n.createElement(
                    h.d,
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
                    Object(A.f)("#BroadcastChat_day_Mute")
                  ),
                  n.createElement(
                    h.d,
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
                    Object(A.f)("#BroadcastChat_week_Mute")
                  ),
                  n.createElement(
                    h.d,
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
                    Object(A.f)("#BroadcastChat_perm_Mute")
                  ),
                  n.createElement(
                    h.d,
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
                    Object(A.f)("#BroadcastChat_Unmute")
                  )
                )
              : this.m_chat.IsUserMutedLocally(t.steamid)
              ? r.push(
                  n.createElement(
                    h.d,
                    {
                      key: "unmuteuser",
                      onSelected: () =>
                        this.m_chat.UnmuteUserForSession(
                          t.steamid,
                          t.persona_name
                        ),
                    },
                    Object(A.f)("#BroadcastChat_UnmuteLocal")
                  )
                )
              : r.push(
                  n.createElement(
                    h.d,
                    {
                      key: "muteuser",
                      onSelected: () =>
                        this.m_chat.MuteUserForSession(
                          t.steamid,
                          t.persona_name
                        ),
                    },
                    Object(A.f)("#BroadcastChat_MuteLocal")
                  )
                ),
            ((F.h && F.h.is_support) ||
              this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID())) &&
              t.steamid)
          ) {
            this.m_chat.BIsUserBroadcastModerator(t.steamid)
              ? r.push(
                  n.createElement(
                    h.d,
                    {
                      key: "removemod",
                      onSelected: () =>
                        this.m_chat.UpdateBroadcastChatModerator(
                          t.steamid,
                          !1,
                          t.persona_name
                        ),
                    },
                    Object(A.f)("#BroadcastChat_Remove_Moderator")
                  )
                )
              : r.push(
                  n.createElement(
                    h.d,
                    {
                      key: "addmod",
                      onSelected: () =>
                        this.m_chat.UpdateBroadcastChatModerator(
                          t.steamid,
                          !0,
                          t.persona_name
                        ),
                    },
                    Object(A.f)("#BroadcastChat_Add_Moderator")
                  )
                );
          }
          return r.length
            ? Object(l.a)(
                n.createElement(
                  h.c,
                  null,
                  n.createElement(
                    "div",
                    { className: z.a.SelectedUserNameCtn },
                    Object(A.f)("#BroadcastChat_User"),
                    n.createElement("br", null),
                    n.createElement(
                      "span",
                      { className: z.a.SelectedUserName },
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
          return e.type === j.a.Notification
            ? z.a.MessageNotification
            : e.type === j.a.Error
            ? z.a.MessageError
            : z.a.MessageChat;
        }
        FormatMessage(e, t) {
          if (e.type === j.a.Chat) {
            let r = t ? t.FilterText(e.steamid, e.msg) : e.msg;
            return this.AddLinksEmoticons(r, !1);
          }
          return e.msg;
        }
        RenderUserChatLine(e, t, r) {
          let a = r ? r.get(e.steamid) : void 0;
          const i =
            e.type === j.a.Chat
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
          return n.createElement(
            "div",
            {
              key: e.instance_id + "_" + e.client_ts + "_" + t,
              className: this.GetTypeClassName(e),
              onContextMenu: (t) => this.OnContextMenu(t, e),
            },
            e.type === j.a.Chat && n.createElement(W, { userType: i }),
            e.flair &&
              n.createElement(
                "span",
                { className: z.a.FlairContainer },
                this.AddLinksEmoticons(e.flair, !1)
              ),
            e.type === j.a.Chat &&
              n.createElement(E, { userType: i, msg: e, presenterInfo: a }),
            e.type === j.a.Chat &&
              this.m_chat.GetBroadcastSteamID() === e.steamid &&
              n.createElement(
                "span",
                {
                  className: `${z.a.MessageNotification} ${z.a.MessageContents}`,
                },
                ` (${Object(A.f)("#BroadcastChat_Broadcaster")})`
              ),
            e.type === j.a.Chat &&
              this.m_chat.m_mapChannelModeratorUsers.get(e.steamid) &&
              n.createElement(
                "span",
                {
                  className: `${z.a.MessageNotification} ${z.a.MessageContents}`,
                },
                ` (${Object(A.f)("#BroadcastChat_Moderator")})`
              ),
            n.createElement(
              "span",
              {
                className: `${z.a.MessageContents} ${
                  this.AddLinksEmoticons(e.msg, !1).filter(
                    (e) => e && "string" == typeof e
                  ).length
                    ? ""
                    : z.a.EmoticonsOnly
                }`,
              },
              e.type === j.a.Chat ? " : " : "",
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
              ? d.b.GetPresenterMapForBroadcasterSteamID(
                  this.m_chat.GetBroadcastSteamID()
                )
              : void 0;
          return n.createElement(
            "div",
            {
              className: Object(M.a)(z.a.ChatPanel, "ChatPanel"),
              style: e ? { display: "none" } : void 0,
            },
            r &&
              !!this.m_chat &&
              n.createElement(P, {
                oChat: this.m_chat,
                emoticonStore: this.props.emoticonStore,
                bPartnerMemberOnlyChat: t,
              }),
            n.createElement(C, null),
            n.createElement(
              "div",
              {
                className: Object(M.a)(
                  `${z.a.ChatMessages} ${_.a.minHeightZero}`,
                  "ChatMessages"
                ),
                onScroll: this.HandleScroll,
                ref: this.messagesContainer,
              },
              i.map((e, t) => this.RenderUserChatLine(e, t, s))
            ),
            n.createElement(w, null),
            !r &&
              !!this.m_chat &&
              n.createElement(P, {
                oChat: this.m_chat,
                emoticonStore: this.props.emoticonStore,
                bPartnerMemberOnlyChat: t,
              })
          );
        }
      };
      function P(e) {
        const { oChat: t, emoticonStore: r, bPartnerMemberOnlyChat: a } = e;
        return !a ||
          ((null === F.h || void 0 === F.h ? void 0 : F.h.logged_in) &&
            (null === F.h || void 0 === F.h ? void 0 : F.h.is_partner_member))
          ? (null === F.h || void 0 === F.h ? void 0 : F.h.logged_in)
            ? n.createElement(D, { oChat: t, emoticonStore: r })
            : null
          : n.createElement(G, null);
      }
      function D(e) {
        const { oChat: t, emoticonStore: r } = e,
          [a, i] = n.useState(""),
          s = n.useRef(),
          o = n.useCallback(
            (e) => {
              !!e.shiftKey ||
                13 !== e.charCode ||
                (t.m_bRateLimited || (t.SendMessage(a), i("")),
                e.preventDefault());
            },
            [t, a]
          ),
          l = n.useCallback(
            (e, t = !1) => {
              i(a + `ː${e}ː`),
                (null == s ? void 0 : s.current) && s.current.focus();
            },
            [a, s]
          );
        return n.createElement(
          "div",
          { className: Object(M.a)(z.a.ChatEntryCtn, "ChatEntryCtn") },
          n.createElement(
            "div",
            { className: Object(M.a)(z.a.ChatEntry, "ChatEntry") },
            n.createElement(
              "form",
              { className: `${_.a.chatEntryControls}` },
              n.createElement("textarea", {
                className: _.a.chatTextarea,
                placeholder: Object(A.f)("#BroadcastChat_EnterResponse"),
                onKeyPress: o,
                onChange: (e) => i(e.target.value),
                value: a,
                ref: s,
              }),
              Boolean(t.m_bRateLimited) &&
                n.createElement(x, {
                  nSeconds: t.m_nRateLimitSeconds,
                  bRateLimited: t.m_bRateLimited,
                }),
              n.createElement(
                "button",
                {
                  className: `${_.a.chatSubmitButton} ${a ? "" : _.a.disabled}`,
                  title: Object(A.f)("#ChatEntryButton_Submit"),
                  disabled: t.m_bRateLimited || 0 == a.trim().length,
                  onClick: () => {
                    t.SendMessage(a), i("");
                  },
                },
                n.createElement(v.mb, null)
              )
            ),
            n.createElement(
              "div",
              {
                style: { height: "50px" },
                className: `${_.a.chatEntryActionsContainer}`,
              },
              n.createElement(
                "div",
                { className: _.a.chatEntryActionsGroup },
                n.createElement(g.a, {
                  disabled: !1,
                  OnEmoticonSelected: l,
                  rtLastAckedNewEmoticons: Number.MAX_VALUE,
                  emoticonStore: r,
                  emoticonHoverStore: m.b,
                }),
                n.createElement(N, Object.assign({}, e, { textInputRef: s }))
              )
            )
          )
        );
      }
      function N(e) {
        var t;
        const { oChat: r, emoticonStore: a, textInputRef: i } = e;
        return r.m_strFlairGroupID &&
          a.flair_list &&
          (null === (t = a.GetFlairListByGroupID(r.m_strFlairGroupID)) ||
          void 0 === t
            ? void 0
            : t.length)
          ? n.createElement(g.a, {
              disabled: !1,
              OnEmoticonSelected: (e) => {
                r.UpdateChatMessageFlair(e),
                  (null == i ? void 0 : i.current) && i.current.focus();
              },
              rtLastAckedNewEmoticons: Number.MAX_VALUE,
              emoticonStore: a,
              emoticonHoverStore: m.b,
              strFlairGroupID: r.m_strFlairGroupID,
              title: Object(A.f)("#ChatEntryButton_Flair"),
              buttonIcon: n.createElement(v.j, null),
            })
          : null;
      }
      Object(a.b)([i.C], U.prototype, "m_chat", void 0),
        Object(a.b)([R.b], U.prototype, "StartChat", null),
        Object(a.b)([R.b], U.prototype, "HandleScroll", null),
        Object(a.b)([R.b], U.prototype, "OnContextMenu", null),
        Object(a.b)([R.b], U.prototype, "RenderUserChatLine", null),
        (U = Object(a.b)([s.a], U));
      class x extends n.Component {
        render() {
          return n.createElement(
            "div",
            { className: z.a.TimedProgressBarContainer },
            n.createElement(
              "div",
              { className: z.a.wrapper },
              n.createElement("div", {
                className: `${z.a.spinner} ${z.a.pie}`,
                style: { animationDuration: `${this.props.nSeconds || 0}s` },
              }),
              n.createElement("div", {
                className: `${z.a.filler} ${z.a.pie}`,
                style: { animationDuration: `${this.props.nSeconds || 0}s` },
              }),
              n.createElement("div", {
                className: z.a.mask,
                style: { animationDuration: `${this.props.nSeconds || 0}s` },
              })
            )
          );
        }
      }
      function G(e) {
        return n.createElement(
          "div",
          { className: z.a.Description },
          n.createElement(
            "div",
            { className: z.a.LogInPrompt },
            Object(A.f)("#Broadcast_PartnerChat_Login")
          ),
          !F.h.logged_in &&
            n.createElement(
              b.f,
              { onClick: p.a, className: Object(M.a)(z.a.SignInButton) },
              Object(A.f)("#Login_SignIn")
            )
        );
      }
    },
    gJzY: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return O;
      });
      var a = r("mrSG"),
        i = r("2vnA"),
        s = r("vDqi"),
        n = r.n(s),
        o = r("bxBv"),
        l = r("hRO2"),
        c = r("OS8t");
      const d = l.Message;
      class m extends d {
        constructor(e = null) {
          super(),
            m.prototype.bincremental || c.a(m.M()),
            d.initialize(this, e, 0, -1, [2], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  bincremental: { n: 1, br: c.d.readBool, bw: c.h.writeBool },
                  friends: { n: 2, c: u, r: !0, q: !0 },
                  max_friend_count: {
                    n: 3,
                    br: c.d.readUint32,
                    bw: c.h.writeUint32,
                  },
                  active_friend_count: {
                    n: 4,
                    br: c.d.readUint32,
                    bw: c.h.writeUint32,
                  },
                  friends_limit_hit: {
                    n: 5,
                    br: c.d.readBool,
                    bw: c.h.writeBool,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = c.e(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return c.g(m.M(), e, t);
        }
        static fromObject(e) {
          return c.c(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.b(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.f(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientFriendsList";
        }
      }
      class u extends d {
        constructor(e = null) {
          super(),
            u.prototype.ulfriendid || c.a(u.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  ulfriendid: {
                    n: 1,
                    br: c.d.readFixed64String,
                    bw: c.h.writeFixed64String,
                  },
                  efriendrelationship: {
                    n: 2,
                    br: c.d.readUint32,
                    bw: c.h.writeUint32,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = c.e(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return c.g(u.M(), e, t);
        }
        static fromObject(e) {
          return c.c(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.b(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.f(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CMsgClientFriendsList_Friend";
        }
      }
      const _ = l.Message;
      class h extends _ {
        constructor(e = null) {
          super(),
            h.prototype.groupid || c.a(h.M()),
            _.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  groupid: { n: 1, br: c.d.readUint32, bw: c.h.writeUint32 },
                  name: { n: 2, br: c.d.readString, bw: c.h.writeString },
                  accountid_members: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: c.d.readUint32,
                    bw: c.h.writeRepeatedUint32,
                  },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = c.e(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return c.g(h.M(), e, t);
        }
        static fromObject(e) {
          return c.c(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.b(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.f(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsListCategory";
        }
      }
      class b extends _ {
        constructor(e = null) {
          super(),
            b.prototype.categories || c.a(b.M()),
            _.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: { categories: { n: 1, c: h, r: !0, q: !0 } },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = c.e(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return c.g(b.M(), e, t);
        }
        static fromObject(e) {
          return c.c(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.b(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.f(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetCategories_Response";
        }
      }
      class B extends _ {
        constructor(e = null) {
          super(),
            B.prototype.accountid || c.a(B.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  accountid: { n: 1, br: c.d.readUint32, bw: c.h.writeUint32 },
                  clanid: { n: 2, br: c.d.readUint32, bw: c.h.writeUint32 },
                  chat_group_id: {
                    n: 3,
                    br: c.d.readUint64String,
                    bw: c.h.writeUint64String,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = c.e(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return c.g(B.M(), e, t);
        }
        static fromObject(e) {
          return c.c(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.b(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.f(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsListFavoriteEntry";
        }
      }
      class g extends _ {
        constructor(e = null) {
          super(),
            g.prototype.favorites || c.a(g.M()),
            _.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: { favorites: { n: 1, c: B, r: !0, q: !0 } },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = c.e(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return c.g(g.M(), e, t);
        }
        static fromObject(e) {
          return c.c(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.b(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.f(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFavorites_Response";
        }
      }
      class p extends _ {
        constructor(e = null) {
          super(), _.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new p();
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_SetFavorites_Response";
        }
      }
      class f extends _ {
        constructor(e = null) {
          super(),
            f.prototype.favorites || c.a(f.M()),
            _.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: { favorites: { n: 1, c: B, r: !0, q: !0 } },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = c.e(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return c.g(f.M(), e, t);
        }
        static fromObject(e) {
          return c.c(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.b(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.f(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_FavoritesChanged_Notification";
        }
      }
      class y extends _ {
        constructor(e = null) {
          super(), _.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new y();
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFriendsList_Request";
        }
      }
      class S extends _ {
        constructor(e = null) {
          super(),
            S.prototype.friendslist || c.a(S.M()),
            _.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = { proto: S, fields: { friendslist: { n: 1, c: m } } }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = c.e(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return c.g(S.M(), e, t);
        }
        static fromObject(e) {
          return c.c(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new l.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return c.b(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new l.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          c.f(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new l.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CFriendsList_GetFriendsList_Response";
        }
      }
      var C, w;
      !(function (e) {
        (e.GetCategories = function (e, t) {
          return e.SendMsg("FriendsList.GetCategories#1", t, b, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
          (e.GetFriendsList = function (e, t) {
            return e.SendMsg("FriendsList.GetFriendsList#1", t, S, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.GetFavorites#1", t, g, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.SetFavorites#1", t, p, {
              ePrivilege: 1,
            });
          });
      })(C || (C = {})),
        (function (e) {
          e.FavoritesChangedHandler = {
            name: "FriendsListClient.FavoritesChanged#1",
            request: f,
          };
        })(w || (w = {}));
      var v = r("oFam"),
        M = r("kLLr"),
        A = r("lkRc"),
        R = (r("mgoM"), r("75qM"), r("65aj")),
        F = r("uobO");
      r("AiWL");
      class O {
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
            (this.m_TextFilterPreferences = new R.TextFilterPreferences());
          {
            let e = new v.a();
            (this.m_TextFilterPreferences.eTextFilterSetting = e.text_filter_setting()),
              (this.m_TextFilterPreferences.bIgnoreFriends = e.text_filter_ignore_friends());
          }
          this.m_TextFilterWords = new v.n();
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
              yield this.LoadLanguage(A.c.LANGUAGE),
              "english" !== A.c.LANGUAGE &&
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
              e && (this.m_TextFilterWords = v.n.fromObject(e));
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
            let e = new v.a();
            if (0 !== this.m_unAccountID)
              try {
                if (this.m_Transport) {
                  let t = o.b.Init(v.b);
                  e = (yield v.o.GetCommunityPreferences(this.m_Transport, t))
                    .Body()
                    .preferences();
                } else {
                  let t = { sessionid: A.c.SESSIONID, origin: Object(A.d)() };
                  const r = yield n.a.get(
                    A.c.COMMUNITY_BASE_URL +
                      "textfilter/ajaxgetcommunitypreferences",
                    { params: t, withCredentials: !0 }
                  );
                  e = v.a.fromObject(r.data.preferences);
                }
              } catch (e) {}
            if (
              (this.UpdateCommunityPreferences(e),
              e.text_filter_words_revision() !==
                this.m_TextFilterWords.text_filter_words_revision())
            ) {
              let t = new v.n();
              if (0 !== e.text_filter_words_revision())
                try {
                  if (this.m_Transport) {
                    let e = o.b.Init(v.e);
                    t = (yield v.o.GetTextFilterWords(this.m_Transport, e))
                      .Body()
                      .words();
                  } else {
                    let e = { sessionid: A.c.SESSIONID, origin: Object(A.d)() };
                    const r = yield n.a.get(
                      A.c.COMMUNITY_BASE_URL +
                        "textfilter/ajaxgettextfiltercustomwords",
                      { params: e, withCredentials: !0 }
                    );
                    t = v.n.fromObject(r.data.words);
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
            let e = new m();
            if (0 !== this.m_unAccountID)
              try {
                if (this.m_Transport) {
                  let t = o.b.Init(y);
                  e = (yield C.GetFriendsList(this.m_Transport, t))
                    .Body()
                    .friendslist();
                } else {
                  let t = { sessionid: A.c.SESSIONID, origin: Object(A.d)() };
                  const r = yield n.a.get(
                    A.c.COMMUNITY_BASE_URL + "textfilter/ajaxgetfriendslist",
                    { params: t, withCredentials: !0 }
                  );
                  e = m.fromObject(r.data.friendslist);
                }
              } catch (e) {}
            this.SetFriendsList(e);
          });
        }
        SetFriendsList(e) {
          e.bincremental() || this.m_mapPlayerCache.clear();
          for (let t of e.friends()) {
            let e = new M.a(t.ulfriendid());
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
              A.c.COMMUNITY_CDN_URL
            }textfilter/gettextfilterdictionary?type=banned&language=${e}&v=1&origin=${Object(
              A.d
            )()}`;
            try {
              const e = yield n.a.get(t);
              this.m_strBannedWords += e.data;
            } catch (e) {
              console.error("Failed to load filter dictionary " + t, e);
            }
            t = `${
              A.c.COMMUNITY_CDN_URL
            }textfilter/gettextfilterdictionary?type=profanity&language=${e}&v=1&origin=${Object(
              A.d
            )()}`;
            try {
              const e = yield n.a.get(t);
              this.m_strProfanityWords += e.data;
            } catch (e) {
              console.error("Failed to load filter dictionary " + t, e);
            }
            t = `${
              A.c.COMMUNITY_CDN_URL
            }textfilter/gettextfilterdictionary?type=clean_public&language=${e}&v=1&origin=${Object(
              A.d
            )()}`;
            try {
              const e = yield n.a.get(t);
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
                Object(F.a)().ReportError(
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
                Object(F.a)().ReportError(
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
            r = new M.a(e).GetAccountID();
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
      Object(a.b)([i.C], O.prototype, "m_TextFilterPreferences", void 0),
        Object(a.b)([i.C], O.prototype, "m_mapPlayerCache", void 0),
        Object(a.b)([i.C], O.prototype, "m_regexBannedWords", void 0),
        Object(a.b)([i.C], O.prototype, "m_regexCleanWords", void 0),
        Object(a.b)([i.k], O.prototype, "UpdateCommunityPreferences", null),
        Object(a.b)([i.k], O.prototype, "SetFriendsList", null),
        Object(a.b)([i.k], O.prototype, "BRebuildFilter", null);
    },
    gfUn: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return we;
      });
      var a = r("mrSG"),
        i = r("vDqi"),
        s = r.n(i),
        n = r("2vnA"),
        o = r("A5MU"),
        l = (r("mgoM"), r("bxBv")),
        c = r("u2yL"),
        d = r("WBba"),
        m = r("kLLr"),
        u = r("kdZy"),
        _ = r("hRO2"),
        h = r("OS8t");
      const b = _.Message;
      class B extends b {
        constructor(e = null) {
          super(),
            B.prototype.broadcast_channel_id || h.a(B.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = h.e(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(B.M(), e, t);
        }
        static fromObject(e) {
          return h.c(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_CreateBroadcastChannel_Response";
        }
      }
      class g extends b {
        constructor(e = null) {
          super(),
            g.prototype.broadcast_channel_id || h.a(g.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  unique_name: {
                    n: 2,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  steamid: {
                    n: 3,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = h.e(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(g.M(), e, t);
        }
        static fromObject(e) {
          return h.c(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelID_Response";
        }
      }
      class p extends b {
        constructor(e = null) {
          super(), b.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new p();
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SetBroadcastChannelProfile_Response";
        }
      }
      class f extends b {
        constructor(e = null) {
          super(),
            f.prototype.unique_name || h.a(f.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  unique_name: {
                    n: 1,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  owner_steamid: {
                    n: 2,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  name: { n: 3, br: h.d.readString, bw: h.h.writeString },
                  language: { n: 4, br: h.d.readString, bw: h.h.writeString },
                  headline: { n: 5, br: h.d.readString, bw: h.h.writeString },
                  summary: { n: 6, br: h.d.readString, bw: h.h.writeString },
                  schedule: { n: 7, br: h.d.readString, bw: h.h.writeString },
                  rules: { n: 8, br: h.d.readString, bw: h.h.writeString },
                  panels: { n: 9, br: h.d.readString, bw: h.h.writeString },
                  is_partnered: { n: 10, br: h.d.readBool, bw: h.h.writeBool },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = h.e(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(f.M(), e, t);
        }
        static fromObject(e) {
          return h.c(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelProfile_Response";
        }
      }
      class y extends b {
        constructor(e = null) {
          super(),
            y.prototype.replace_image_hash || h.a(y.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  replace_image_hash: {
                    n: 1,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = h.e(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(y.M(), e, t);
        }
        static fromObject(e) {
          return h.c(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SetBroadcastChannelImage_Response";
        }
      }
      class S extends b {
        constructor(e = null) {
          super(),
            S.prototype.images || h.a(S.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: { images: { n: 1, c: C, r: !0, q: !0 } },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = h.e(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(S.M(), e, t);
        }
        static fromObject(e) {
          return h.c(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelImages_Response";
        }
      }
      class C extends b {
        constructor(e = null) {
          super(),
            C.prototype.image_type || h.a(C.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  image_type: { n: 1, br: h.d.readEnum, bw: h.h.writeEnum },
                  image_path: { n: 2, br: h.d.readString, bw: h.h.writeString },
                  image_index: {
                    n: 3,
                    br: h.d.readUint32,
                    bw: h.h.writeUint32,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = h.e(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(C.M(), e, t);
        }
        static fromObject(e) {
          return h.c(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelImages_Response_Images";
        }
      }
      class w extends b {
        constructor(e = null) {
          super(),
            w.prototype.links || h.a(w.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: { links: { n: 1, c: v, r: !0, q: !0 } },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = h.e(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(w.M(), e, t);
        }
        static fromObject(e) {
          return h.c(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelLinks_Response";
        }
      }
      class v extends b {
        constructor(e = null) {
          super(),
            v.prototype.link_index || h.a(v.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  link_index: { n: 1, br: h.d.readUint32, bw: h.h.writeUint32 },
                  url: { n: 2, br: h.d.readString, bw: h.h.writeString },
                  link_description: {
                    n: 3,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  left: { n: 4, br: h.d.readUint32, bw: h.h.writeUint32 },
                  top: { n: 5, br: h.d.readUint32, bw: h.h.writeUint32 },
                  width: { n: 6, br: h.d.readUint32, bw: h.h.writeUint32 },
                  height: { n: 7, br: h.d.readUint32, bw: h.h.writeUint32 },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = h.e(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(v.M(), e, t);
        }
        static fromObject(e) {
          return h.c(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelLinks_Response_Links";
        }
      }
      class M extends b {
        constructor(e = null) {
          super(), b.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new M();
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SetBroadcastChannelLinkRegions_Response";
        }
      }
      class A extends b {
        constructor(e = null) {
          super(),
            A.prototype.is_live || h.a(A.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  is_live: { n: 1, br: h.d.readBool, bw: h.h.writeBool },
                  is_disabled: { n: 2, br: h.d.readBool, bw: h.h.writeBool },
                  appid: { n: 3, br: h.d.readUint32, bw: h.h.writeUint32 },
                  viewers: {
                    n: 4,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  views: {
                    n: 5,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  broadcaster_steamid: {
                    n: 6,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  thumbnail_url: {
                    n: 7,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  followers: {
                    n: 8,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  subscribers: {
                    n: 9,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  unique_name: {
                    n: 10,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  broadcast_session_id: {
                    n: 11,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = h.e(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(A.M(), e, t);
        }
        static fromObject(e) {
          return h.c(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelStatus_Response";
        }
      }
      class R extends b {
        constructor(e = null) {
          super(),
            R.prototype.broadcast_channel_id || h.a(R.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  unique_name: {
                    n: 2,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  name: { n: 3, br: h.d.readString, bw: h.h.writeString },
                  appid: { n: 4, br: h.d.readUint32, bw: h.h.writeUint32 },
                  viewers: {
                    n: 5,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  views: {
                    n: 6,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  thumbnail_url: {
                    n: 7,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  followers: {
                    n: 8,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  headline: { n: 9, br: h.d.readString, bw: h.h.writeString },
                  avatar_url: {
                    n: 10,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  broadcaster_steamid: {
                    n: 11,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  subscribers: {
                    n: 12,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  background_url: {
                    n: 13,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  is_featured: { n: 14, br: h.d.readBool, bw: h.h.writeBool },
                  is_disabled: { n: 15, br: h.d.readBool, bw: h.h.writeBool },
                  is_live: { n: 16, br: h.d.readBool, bw: h.h.writeBool },
                  language: { n: 17, br: h.d.readString, bw: h.h.writeString },
                  reports: { n: 18, br: h.d.readUint32, bw: h.h.writeUint32 },
                  is_partnered: { n: 19, br: h.d.readBool, bw: h.h.writeBool },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = h.e(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(R.M(), e, t);
        }
        static fromObject(e) {
          return h.c(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "GetBroadcastChannelEntry";
        }
      }
      class F extends b {
        constructor(e = null) {
          super(),
            F.prototype.results || h.a(F.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: { results: { n: 1, c: R, r: !0, q: !0 } },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = h.e(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(F.M(), e, t);
        }
        static fromObject(e) {
          return h.c(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetFollowedChannels_Response";
        }
      }
      class O extends b {
        constructor(e = null) {
          super(),
            O.prototype.results || h.a(O.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: { results: { n: 1, c: R, r: !0, q: !0 } },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = h.e(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(O.M(), e, t);
        }
        static fromObject(e) {
          return h.c(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetSubscribedChannels_Response";
        }
      }
      class z extends b {
        constructor(e = null) {
          super(),
            z.prototype.is_followed || h.a(z.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  is_followed: { n: 1, br: h.d.readBool, bw: h.h.writeBool },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = h.e(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(z.M(), e, t);
        }
        static fromObject(e) {
          return h.c(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_FollowBroadcastChannel_Response";
        }
      }
      class j extends b {
        constructor(e = null) {
          super(),
            j.prototype.is_subscribed || h.a(j.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            j.sm_m ||
              (j.sm_m = {
                proto: j,
                fields: {
                  is_subscribed: { n: 1, br: h.d.readBool, bw: h.h.writeBool },
                },
              }),
            j.sm_m
          );
        }
        static MBF() {
          return j.sm_mbf || (j.sm_mbf = h.e(j.M())), j.sm_mbf;
        }
        toObject(e = !1) {
          return j.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(j.M(), e, t);
        }
        static fromObject(e) {
          return h.c(j.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new j();
          return j.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(j.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(j.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return j.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SubscribeBroadcastChannel_Response";
        }
      }
      class T extends b {
        constructor(e = null) {
          super(), b.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new T();
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_ReportBroadcastChannel_Response";
        }
      }
      class I extends b {
        constructor(e = null) {
          super(),
            I.prototype.is_followed || h.a(I.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            I.sm_m ||
              (I.sm_m = {
                proto: I,
                fields: {
                  is_followed: { n: 1, br: h.d.readBool, bw: h.h.writeBool },
                  is_subscribed: { n: 2, br: h.d.readBool, bw: h.h.writeBool },
                },
              }),
            I.sm_m
          );
        }
        static MBF() {
          return I.sm_mbf || (I.sm_mbf = h.e(I.M())), I.sm_mbf;
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(I.M(), e, t);
        }
        static fromObject(e) {
          return h.c(I.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(I.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(I.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelInteraction_Response";
        }
      }
      class E extends b {
        constructor(e = null) {
          super(),
            E.prototype.appid || h.a(E.M()),
            b.initialize(this, e, 0, -1, [5], null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  appid: { n: 1, br: h.d.readUint32, bw: h.h.writeUint32 },
                  name: { n: 2, br: h.d.readString, bw: h.h.writeString },
                  image: { n: 3, br: h.d.readString, bw: h.h.writeString },
                  viewers: {
                    n: 4,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  channels: { n: 5, c: R, r: !0, q: !0 },
                  release_date: {
                    n: 6,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  developer: { n: 7, br: h.d.readString, bw: h.h.writeString },
                  publisher: { n: 8, br: h.d.readString, bw: h.h.writeString },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = h.e(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(E.M(), e, t);
        }
        static fromObject(e) {
          return h.c(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_Game";
        }
      }
      class W extends b {
        constructor(e = null) {
          super(),
            W.prototype.results || h.a(W.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            W.sm_m ||
              (W.sm_m = {
                proto: W,
                fields: { results: { n: 1, c: E, r: !0, q: !0 } },
              }),
            W.sm_m
          );
        }
        static MBF() {
          return W.sm_mbf || (W.sm_mbf = h.e(W.M())), W.sm_mbf;
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(W.M(), e, t);
        }
        static fromObject(e) {
          return h.c(W.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(W.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(W.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetGames_Response";
        }
      }
      class U extends b {
        constructor(e = null) {
          super(),
            U.prototype.results || h.a(U.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: { results: { n: 1, c: R, r: !0, q: !0 } },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = h.e(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(U.M(), e, t);
        }
        static fromObject(e) {
          return h.c(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetChannels_Response";
        }
      }
      class P extends b {
        constructor(e = null) {
          super(),
            P.prototype.broadcasters || h.a(P.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: { broadcasters: { n: 1, c: D, r: !0, q: !0 } },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = h.e(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(P.M(), e, t);
        }
        static fromObject(e) {
          return h.c(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelBroadcasters_Response";
        }
      }
      class D extends b {
        constructor(e = null) {
          super(),
            D.prototype.steamid || h.a(D.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  steamid: {
                    n: 1,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  name: { n: 2, br: h.d.readString, bw: h.h.writeString },
                  rtmp_token: { n: 3, br: h.d.readString, bw: h.h.writeString },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = h.e(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(D.M(), e, t);
        }
        static fromObject(e) {
          return h.c(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster";
        }
      }
      class N extends b {
        constructor(e = null) {
          super(),
            N.prototype.issuer_steamid || h.a(N.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  issuer_steamid: {
                    n: 1,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  chatter_steamid: {
                    n: 2,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  time_expires: {
                    n: 3,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  permanent: { n: 4, br: h.d.readBool, bw: h.h.writeBool },
                  name: { n: 5, br: h.d.readString, bw: h.h.writeString },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = h.e(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(N.M(), e, t);
        }
        static fromObject(e) {
          return h.c(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_ChatBan";
        }
      }
      class x extends b {
        constructor(e = null) {
          super(),
            x.prototype.broadcast_channel_id || h.a(x.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  chatter_steamid: {
                    n: 2,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  duration: { n: 3, br: h.d.readUint32, bw: h.h.writeUint32 },
                  permanent: { n: 4, br: h.d.readBool, bw: h.h.writeBool },
                  undo: { n: 5, br: h.d.readBool, bw: h.h.writeBool },
                },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = h.e(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(x.M(), e, t);
        }
        static fromObject(e) {
          return h.c(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AddChatBan_Request";
        }
      }
      class G extends b {
        constructor(e = null) {
          super(), b.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new G();
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AddChatBan_Response";
        }
      }
      class L extends b {
        constructor(e = null) {
          super(),
            L.prototype.results || h.a(L.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: { results: { n: 1, c: N, r: !0, q: !0 } },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = h.e(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(L.M(), e, t);
        }
        static fromObject(e) {
          return h.c(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetChatBans_Response";
        }
      }
      class K extends b {
        constructor(e = null) {
          super(), b.initialize(this, e, 0, -1, void 0, null);
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
          let t = new _.BinaryReader(e),
            r = new K();
          return K.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return K.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AddChatModerator_Response";
        }
      }
      class k extends b {
        constructor(e = null) {
          super(),
            k.prototype.broadcast_channel_id || h.a(k.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = h.e(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(k.M(), e, t);
        }
        static fromObject(e) {
          return h.c(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetChatModerators_Request";
        }
      }
      class V extends b {
        constructor(e = null) {
          super(),
            V.prototype.steamid || h.a(V.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  steamid: {
                    n: 1,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  name: { n: 2, br: h.d.readString, bw: h.h.writeString },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = h.e(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(V.M(), e, t);
        }
        static fromObject(e) {
          return h.c(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_ChatModerator";
        }
      }
      class Q extends b {
        constructor(e = null) {
          super(),
            Q.prototype.results || h.a(Q.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Q.sm_m ||
              (Q.sm_m = {
                proto: Q,
                fields: { results: { n: 1, c: V, r: !0, q: !0 } },
              }),
            Q.sm_m
          );
        }
        static MBF() {
          return Q.sm_mbf || (Q.sm_mbf = h.e(Q.M())), Q.sm_mbf;
        }
        toObject(e = !1) {
          return Q.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(Q.M(), e, t);
        }
        static fromObject(e) {
          return h.c(Q.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new Q();
          return Q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(Q.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(Q.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return Q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetChatModerators_Response";
        }
      }
      class q extends b {
        constructor(e = null) {
          super(), b.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return q.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new q();
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new q();
          return q.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return q.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AddWordBan_Response";
        }
      }
      class H extends b {
        constructor(e = null) {
          super(),
            H.prototype.results || h.a(H.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  results: {
                    n: 1,
                    r: !0,
                    q: !0,
                    br: h.d.readString,
                    bw: h.h.writeRepeatedString,
                  },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = h.e(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(H.M(), e, t);
        }
        static fromObject(e) {
          return h.c(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetWordBans_Response";
        }
      }
      class J extends b {
        constructor(e = null) {
          super(),
            J.prototype.broadcast_channel_id || h.a(J.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            J.sm_m ||
              (J.sm_m = {
                proto: J,
                fields: {
                  broadcast_channel_id: {
                    n: 1,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                },
              }),
            J.sm_m
          );
        }
        static MBF() {
          return J.sm_mbf || (J.sm_mbf = h.e(J.M())), J.sm_mbf;
        }
        toObject(e = !1) {
          return J.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(J.M(), e, t);
        }
        static fromObject(e) {
          return h.c(J.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new J();
          return J.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(J.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(J.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return J.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_JoinChat_Request";
        }
      }
      class X extends b {
        constructor(e = null) {
          super(),
            X.prototype.chat_id || h.a(X.M()),
            b.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            X.sm_m ||
              (X.sm_m = {
                proto: X,
                fields: {
                  chat_id: {
                    n: 1,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  view_url_template: {
                    n: 2,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  flair_group_ids: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: h.d.readUint64String,
                    bw: h.h.writeRepeatedUint64String,
                  },
                },
              }),
            X.sm_m
          );
        }
        static MBF() {
          return X.sm_mbf || (X.sm_mbf = h.e(X.M())), X.sm_mbf;
        }
        toObject(e = !1) {
          return X.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(X.M(), e, t);
        }
        static fromObject(e) {
          return h.c(X.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new X();
          return X.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(X.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(X.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return X.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_JoinChat_Response";
        }
      }
      class Z extends b {
        constructor(e = null) {
          super(),
            Z.prototype.results || h.a(Z.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            Z.sm_m ||
              (Z.sm_m = {
                proto: Z,
                fields: { results: { n: 1, c: R, r: !0, q: !0 } },
              }),
            Z.sm_m
          );
        }
        static MBF() {
          return Z.sm_mbf || (Z.sm_mbf = h.e(Z.M())), Z.sm_mbf;
        }
        toObject(e = !1) {
          return Z.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(Z.M(), e, t);
        }
        static fromObject(e) {
          return h.c(Z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new Z();
          return Z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(Z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(Z.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return Z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_Search_Response";
        }
      }
      class Y extends b {
        constructor(e = null) {
          super(),
            Y.prototype.stream_live_email || h.a(Y.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            Y.sm_m ||
              (Y.sm_m = {
                proto: Y,
                fields: {
                  stream_live_email: {
                    n: 1,
                    br: h.d.readBool,
                    bw: h.h.writeBool,
                  },
                  stream_live_notification: {
                    n: 2,
                    br: h.d.readBool,
                    bw: h.h.writeBool,
                  },
                },
              }),
            Y.sm_m
          );
        }
        static MBF() {
          return Y.sm_mbf || (Y.sm_mbf = h.e(Y.M())), Y.sm_mbf;
        }
        toObject(e = !1) {
          return Y.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(Y.M(), e, t);
        }
        static fromObject(e) {
          return h.c(Y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new Y();
          return Y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(Y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(Y.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return Y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetSteamTVUserSettings_Response";
        }
      }
      class $ extends b {
        constructor(e = null) {
          super(), b.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return $.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new $();
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new $();
          return $.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return $.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_SetSteamTVUserSettings_Response";
        }
      }
      class ee extends b {
        constructor(e = null) {
          super(),
            ee.prototype.results || h.a(ee.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ee.sm_m ||
              (ee.sm_m = {
                proto: ee,
                fields: { results: { n: 1, c: R, r: !0, q: !0 } },
              }),
            ee.sm_m
          );
        }
        static MBF() {
          return ee.sm_mbf || (ee.sm_mbf = h.e(ee.M())), ee.sm_mbf;
        }
        toObject(e = !1) {
          return ee.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(ee.M(), e, t);
        }
        static fromObject(e) {
          return h.c(ee.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new ee();
          return ee.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(ee.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(ee.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return ee.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetMyBroadcastChannels_Response";
        }
      }
      class te extends b {
        constructor(e = null) {
          super(),
            te.prototype.broadcasts || h.a(te.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            te.sm_m ||
              (te.sm_m = {
                proto: te,
                fields: { broadcasts: { n: 1, c: R, r: !0, q: !0 } },
              }),
            te.sm_m
          );
        }
        static MBF() {
          return te.sm_mbf || (te.sm_mbf = h.e(te.M())), te.sm_mbf;
        }
        toObject(e = !1) {
          return te.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(te.M(), e, t);
        }
        static fromObject(e) {
          return h.c(te.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new te();
          return te.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(te.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(te.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return te.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_Takeover";
        }
      }
      class re extends b {
        constructor(e = null) {
          super(),
            re.prototype.broadcasts || h.a(re.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            re.sm_m ||
              (re.sm_m = {
                proto: re,
                fields: {
                  broadcasts: { n: 1, c: R, r: !0, q: !0 },
                  appid: { n: 2, br: h.d.readUint32, bw: h.h.writeUint32 },
                  title: { n: 3, br: h.d.readString, bw: h.h.writeString },
                },
              }),
            re.sm_m
          );
        }
        static MBF() {
          return re.sm_mbf || (re.sm_mbf = h.e(re.M())), re.sm_mbf;
        }
        toObject(e = !1) {
          return re.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(re.M(), e, t);
        }
        static fromObject(e) {
          return h.c(re.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new re();
          return re.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(re.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(re.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return re.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_SingleGame";
        }
      }
      class ae extends b {
        constructor(e = null) {
          super(),
            ae.prototype.appid || h.a(ae.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ae.sm_m ||
              (ae.sm_m = {
                proto: ae,
                fields: {
                  appid: { n: 1, br: h.d.readUint32, bw: h.h.writeUint32 },
                  game_name: { n: 2, br: h.d.readString, bw: h.h.writeString },
                  broadcast: { n: 3, c: R },
                },
              }),
            ae.sm_m
          );
        }
        static MBF() {
          return ae.sm_mbf || (ae.sm_mbf = h.e(ae.M())), ae.sm_mbf;
        }
        toObject(e = !1) {
          return ae.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(ae.M(), e, t);
        }
        static fromObject(e) {
          return h.c(ae.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new ae();
          return ae.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(ae.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(ae.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return ae.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "GameListEntry";
        }
      }
      class ie extends b {
        constructor(e = null) {
          super(),
            ie.prototype.entries || h.a(ie.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ie.sm_m ||
              (ie.sm_m = {
                proto: ie,
                fields: {
                  entries: { n: 1, c: ae, r: !0, q: !0 },
                  title: { n: 2, br: h.d.readString, bw: h.h.writeString },
                },
              }),
            ie.sm_m
          );
        }
        static MBF() {
          return ie.sm_mbf || (ie.sm_mbf = h.e(ie.M())), ie.sm_mbf;
        }
        toObject(e = !1) {
          return ie.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(ie.M(), e, t);
        }
        static fromObject(e) {
          return h.c(ie.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new ie();
          return ie.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(ie.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(ie.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return ie.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_GameList";
        }
      }
      class se extends b {
        constructor(e = null) {
          super(),
            se.prototype.broadcasts || h.a(se.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            se.sm_m ||
              (se.sm_m = {
                proto: se,
                fields: {
                  broadcasts: { n: 1, c: R, r: !0, q: !0 },
                  title: { n: 2, br: h.d.readString, bw: h.h.writeString },
                },
              }),
            se.sm_m
          );
        }
        static MBF() {
          return se.sm_mbf || (se.sm_mbf = h.e(se.M())), se.sm_mbf;
        }
        toObject(e = !1) {
          return se.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(se.M(), e, t);
        }
        static fromObject(e) {
          return h.c(se.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new se();
          return se.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(se.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(se.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return se.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_QuickExplore";
        }
      }
      class ne extends b {
        constructor(e = null) {
          super(),
            ne.prototype.broadcasts || h.a(ne.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            ne.sm_m ||
              (ne.sm_m = {
                proto: ne,
                fields: {
                  broadcasts: { n: 1, c: R, r: !0, q: !0 },
                  title: { n: 2, br: h.d.readString, bw: h.h.writeString },
                },
              }),
            ne.sm_m
          );
        }
        static MBF() {
          return ne.sm_mbf || (ne.sm_mbf = h.e(ne.M())), ne.sm_mbf;
        }
        toObject(e = !1) {
          return ne.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(ne.M(), e, t);
        }
        static fromObject(e) {
          return h.c(ne.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new ne();
          return ne.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(ne.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(ne.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return ne.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_ConveyorBelt";
        }
      }
      class oe extends b {
        constructor(e = null) {
          super(),
            oe.prototype.broadcast || h.a(oe.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            oe.sm_m ||
              (oe.sm_m = {
                proto: oe,
                fields: {
                  broadcast: { n: 1, c: R },
                  title: { n: 2, br: h.d.readString, bw: h.h.writeString },
                  chat_group_id: {
                    n: 3,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                },
              }),
            oe.sm_m
          );
        }
        static MBF() {
          return oe.sm_mbf || (oe.sm_mbf = h.e(oe.M())), oe.sm_mbf;
        }
        toObject(e = !1) {
          return oe.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(oe.M(), e, t);
        }
        static fromObject(e) {
          return h.c(oe.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new oe();
          return oe.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(oe.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(oe.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return oe.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_WatchParty";
        }
      }
      class le extends b {
        constructor(e = null) {
          super(),
            le.prototype.broadcast || h.a(le.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            le.sm_m ||
              (le.sm_m = {
                proto: le,
                fields: {
                  broadcast: { n: 1, c: R },
                  title: { n: 2, br: h.d.readString, bw: h.h.writeString },
                },
              }),
            le.sm_m
          );
        }
        static MBF() {
          return le.sm_mbf || (le.sm_mbf = h.e(le.M())), le.sm_mbf;
        }
        toObject(e = !1) {
          return le.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(le.M(), e, t);
        }
        static fromObject(e) {
          return h.c(le.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new le();
          return le.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(le.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(le.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return le.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_Developer";
        }
      }
      class ce extends b {
        constructor(e = null) {
          super(),
            ce.prototype.title || h.a(ce.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ce.sm_m ||
              (ce.sm_m = {
                proto: ce,
                fields: {
                  title: { n: 1, br: h.d.readString, bw: h.h.writeString },
                },
              }),
            ce.sm_m
          );
        }
        static MBF() {
          return ce.sm_mbf || (ce.sm_mbf = h.e(ce.M())), ce.sm_mbf;
        }
        toObject(e = !1) {
          return ce.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(ce.M(), e, t);
        }
        static fromObject(e) {
          return h.c(ce.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new ce();
          return ce.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(ce.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(ce.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return ce.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageTemplate_Event";
        }
      }
      class de extends b {
        constructor(e = null) {
          super(),
            de.prototype.template_type || h.a(de.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            de.sm_m ||
              (de.sm_m = {
                proto: de,
                fields: {
                  template_type: { n: 1, br: h.d.readEnum, bw: h.h.writeEnum },
                  takeover: { n: 2, c: te },
                  single_game: { n: 3, c: re },
                  game_list: { n: 4, c: ie },
                  quick_explore: { n: 5, c: se },
                  conveyor_belt: { n: 6, c: ne },
                  watch_party: { n: 7, c: oe },
                  developer: { n: 8, c: le },
                  event: { n: 9, c: ce },
                },
              }),
            de.sm_m
          );
        }
        static MBF() {
          return de.sm_mbf || (de.sm_mbf = h.e(de.M())), de.sm_mbf;
        }
        toObject(e = !1) {
          return de.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(de.M(), e, t);
        }
        static fromObject(e) {
          return h.c(de.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new de();
          return de.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(de.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(de.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return de.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_HomePageContentRow";
        }
      }
      class me extends b {
        constructor(e = null) {
          super(),
            me.prototype.rows || h.a(me.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            me.sm_m ||
              (me.sm_m = {
                proto: me,
                fields: { rows: { n: 1, c: de, r: !0, q: !0 } },
              }),
            me.sm_m
          );
        }
        static MBF() {
          return me.sm_mbf || (me.sm_mbf = h.e(me.M())), me.sm_mbf;
        }
        toObject(e = !1) {
          return me.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(me.M(), e, t);
        }
        static fromObject(e) {
          return h.c(me.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new me();
          return me.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(me.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(me.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return me.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetHomePageContents_Response";
        }
      }
      class ue extends b {
        constructor(e = null) {
          super(),
            ue.prototype.broadcast_clip_id || h.a(ue.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            ue.sm_m ||
              (ue.sm_m = {
                proto: ue,
                fields: {
                  broadcast_clip_id: {
                    n: 1,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  channel_id: {
                    n: 2,
                    br: h.d.readUint64String,
                    bw: h.h.writeUint64String,
                  },
                  app_id: { n: 3, br: h.d.readUint32, bw: h.h.writeUint32 },
                  broadcaster_steamid: {
                    n: 4,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  creator_steamid: {
                    n: 5,
                    br: h.d.readFixed64String,
                    bw: h.h.writeFixed64String,
                  },
                  video_description: {
                    n: 6,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                  live_time: { n: 7, br: h.d.readUint32, bw: h.h.writeUint32 },
                  length_ms: { n: 8, br: h.d.readUint32, bw: h.h.writeUint32 },
                  thumbnail_path: {
                    n: 9,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                },
              }),
            ue.sm_m
          );
        }
        static MBF() {
          return ue.sm_mbf || (ue.sm_mbf = h.e(ue.M())), ue.sm_mbf;
        }
        toObject(e = !1) {
          return ue.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(ue.M(), e, t);
        }
        static fromObject(e) {
          return h.c(ue.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new ue();
          return ue.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(ue.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(ue.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return ue.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_BroadcastClipInfo";
        }
      }
      class _e extends b {
        constructor(e = null) {
          super(),
            _e.prototype.clips || h.a(_e.M()),
            b.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            _e.sm_m ||
              (_e.sm_m = {
                proto: _e,
                fields: {
                  clips: { n: 1, c: ue, r: !0, q: !0 },
                  thumbnail_host: {
                    n: 2,
                    br: h.d.readString,
                    bw: h.h.writeString,
                  },
                },
              }),
            _e.sm_m
          );
        }
        static MBF() {
          return _e.sm_mbf || (_e.sm_mbf = h.e(_e.M())), _e.sm_mbf;
        }
        toObject(e = !1) {
          return _e.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(_e.M(), e, t);
        }
        static fromObject(e) {
          return h.c(_e.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new _e();
          return _e.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(_e.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(_e.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return _e.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_GetBroadcastChannelClips_Response";
        }
      }
      class he extends b {
        constructor(e = null) {
          super(),
            he.prototype.aggregation_delay_ms || h.a(he.M()),
            b.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            he.sm_m ||
              (he.sm_m = {
                proto: he,
                fields: {
                  aggregation_delay_ms: {
                    n: 1,
                    br: h.d.readUint32,
                    bw: h.h.writeUint32,
                  },
                },
              }),
            he.sm_m
          );
        }
        static MBF() {
          return he.sm_mbf || (he.sm_mbf = h.e(he.M())), he.sm_mbf;
        }
        toObject(e = !1) {
          return he.toObject(e, this);
        }
        static toObject(e, t) {
          return h.g(he.M(), e, t);
        }
        static fromObject(e) {
          return h.c(he.M(), e);
        }
        static deserializeBinary(e) {
          let t = new _.BinaryReader(e),
            r = new he();
          return he.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return h.b(he.MBF(), e, t);
        }
        serializeBinary() {
          var e = new _.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          h.f(he.M(), e, t);
        }
        serializeBase64String() {
          var e = new _.BinaryWriter();
          return he.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CSteamTV_AppCheer_Response";
        }
      }
      var be;
      !(function (e) {
        (e.CreateBroadcastChannel = function (e, t) {
          return e.SendMsg("SteamTV.CreateBroadcastChannel#1", t, B, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
          (e.GetBroadcastChannelID = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelID#1", t, g, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelProfile = function (e, t) {
            return e.SendMsg("SteamTV.SetBroadcastChannelProfile#1", t, p, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelProfile = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelProfile#1", t, f, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelImage = function (e, t) {
            return e.SendMsg("SteamTV.SetBroadcastChannelImage#1", t, y, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelImages = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelImages#1", t, S, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelLinkRegions = function (e, t) {
            return e.SendMsg("SteamTV.SetBroadcastChannelLinkRegions#1", t, M, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelLinks = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelLinks#1", t, w, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.GetBroadcastChannelBroadcasters = function (e, t) {
            return e.SendMsg(
              "SteamTV.GetBroadcastChannelBroadcasters#1",
              t,
              P,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 }
            );
          }),
          (e.GetFollowedChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetFollowedChannels#1", t, F, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetSubscribedChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetSubscribedChannels#1", t, O, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelStatus = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelStatus#1", t, A, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.FollowBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.FollowBroadcastChannel#1", t, z, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SubscribeBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.SubscribeBroadcastChannel#1", t, j, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelClips = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelClips#1", t, _e, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.ReportBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.ReportBroadcastChannel#1", t, T, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelInteraction = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelInteraction#1", t, I, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetGames = function (e, t) {
            return e.SendMsg("SteamTV.GetGames#1", t, W, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetChannels#1", t, U, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.AddChatBan = function (e, t) {
            return e.SendMsg("SteamTV.AddChatBan#1", t, G, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetChatBans = function (e, t) {
            return e.SendMsg("SteamTV.GetChatBans#1", t, L, {
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
            return e.SendMsg("SteamTV.AddWordBan#1", t, q, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetWordBans = function (e, t) {
            return e.SendMsg("SteamTV.GetWordBans#1", t, H, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.JoinChat = function (e, t) {
            return e.SendMsg("SteamTV.JoinChat#1", t, X, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.Search = function (e, t) {
            return e.SendMsg("SteamTV.Search#1", t, Z, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.GetSteamTVUserSettings = function (e, t) {
            return e.SendMsg("SteamTV.GetSteamTVUserSettings#1", t, Y, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SetSteamTVUserSettings = function (e, t) {
            return e.SendMsg("SteamTV.SetSteamTVUserSettings#1", t, $, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetMyBroadcastChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetMyBroadcastChannels#1", t, ee, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetHomePageContents = function (e, t) {
            return e.SendMsg("SteamTV.GetHomePageContents#1", t, me, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.AppCheer = function (e, t) {
            return e.SendMsg("SteamTV.AppCheer#1", t, he, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(be || (be = {}));
      r("AiWL");
      var Be = r("qiKp"),
        ge = r("TLQK"),
        pe = r("XxJJ"),
        fe = r("lkRc"),
        ye = r("gJzY");
      class Se {
        constructor() {
          this.m_mapChats = new Map();
        }
        GetChat(e, t) {
          return this.m_mapChats.get(e) || this.m_mapChats.get(t);
        }
        GetOrCreateChat(e, t) {
          let r = this.GetChat(e, t);
          return r || ((r = new Ce()), this.m_mapChats.set(e || t, r)), r;
        }
      }
      Object(a.b)([n.C], Se.prototype, "m_mapChats", void 0);
      class Ce {
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
            (this.m_webAPIInterface = new d.a(
              fe.c.WEBAPI_BASE_URL,
              fe.h.webapi_token
            ));
        }
        InitTextFilter() {
          this.m_textFilterStore = new ye.a();
          let e = 0;
          if ("" !== fe.h.steamid) {
            e = new m.a(fe.h.steamid).GetAccountID();
          }
          this.m_textFilterStore.Init(e, null, new c.a());
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
          (this.m_webAPIInterface = new d.a(
            fe.c.WEBAPI_BASE_URL,
            fe.h.webapi_token
          )),
            (this.m_ulBroadcastSteamID = e),
            (this.m_ulBroadcastID = t),
            this.InitTextFilter(),
            this.RequestChatInfo();
        }
        StartForChannel(e) {
          (this.m_webAPIInterface = new d.a(
            fe.c.WEBAPI_BASE_URL,
            fe.h.webapi_token
          )),
            (this.m_ulBroadcastChannelID = e),
            (this.m_strUserSteamID = fe.h.steamid),
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
                      `${fe.c.WEBAPI_BASE_URL}IBroadcastService/PostChatMessage/v0001?access_token=${this.m_webApiToken}`,
                      e
                    )),
                    (a = r.data && r.data.response);
                } else {
                  const r = l.b.Init(u.c);
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
                        ? Object(ge.f)("#BroadcastChat_YouMuted")
                        : 84 == a.result
                        ? Object(ge.f)(
                            "#BroadcastChat_Cooldown",
                            a.cooldown_time_seconds
                          )
                        : Object(ge.f)("#BroadcastChat_FailedToSendMsg", t)),
                    void this.m_rgChatMessages.push({
                      type: o.a.Error,
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
                  type: o.a.Error,
                  msg: Object(ge.f)("#BroadcastChat_FailedToSendMsg", t),
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
                  sessionid: fe.c.SESSIONID,
                },
                r = yield s.a.get(
                  `${fe.c.CHAT_BASE_URL}broadcast/getchatinfo`,
                  {
                    params: t,
                    withCredentials: !0,
                    cancelToken: null == e ? void 0 : e.token,
                  }
                );
              (e && e.token.reason) ||
                Object(n.G)(() => {
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
                        type: o.a.Notification,
                        msg: Object(ge.f)("#BroadcastChat_DefaultMessage"),
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
                    (this.m_chatScheduledFunc = new Be.b()),
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
              const e = l.b.Init(J);
              e.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
              });
              let t = yield be.JoinChat(
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
                  type: o.a.Notification,
                  msg: Object(ge.f)("#BroadcastChat_DefaultMessage"),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                }),
                (this.m_bHasAddedWelcomeChat = !0),
                (this.m_chatScheduledFunc = new Be.b()),
                this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
            } catch (e) {
              console.error(e), console.log("Failed to join chat!");
            }
          });
        }
        FetchChatModerators() {
          return Object(a.a)(this, void 0, void 0, function* () {
            const e = l.b.Init(k);
            e.SetBodyFields({
              broadcast_channel_id: this.m_ulBroadcastChannelID,
            });
            const t = (yield be.GetChatModerators(
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
                    type: o.a.Chat,
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
                      ? Object(ge.f)("#BroadcastChat_YouMuted", e.persona_name)
                      : Object(ge.f)(
                          "#BroadcastChat_UserMuted",
                          e.persona_name
                        );
                  this.m_rgChatMessages.push({
                    type: o.a.Notification,
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
                    type: o.a.Error,
                    msg: Object(ge.f)("#BroadcastChat_UnableToJoinChat"),
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
                a.append("sessionid", fe.c.SESSIONID);
              try {
                yield s.a.post(
                  `${fe.c.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`,
                  a
                ),
                  this.m_mapBroadcastModeratorUsers.set(e, t);
                const i = Object(ge.f)(
                  t
                    ? "#BroadcastChat_AddedModerator"
                    : "#BroadcastChat_RemovedModerator",
                  r
                );
                this.m_rgChatMessages.push({ type: o.a.Notification, msg: i });
              } catch (e) {
                const a = Object(ge.f)(
                  t
                    ? "#BroadcastChat_AddModeratorFailed"
                    : "#BroadcastChat_RemoveModeratorFailed",
                  r
                );
                this.m_rgChatMessages.push({ type: o.a.Error, msg: a });
              }
            }
          });
        }
        UpdateUserChatBan(e, t, r, i, n, o) {
          return Object(a.a)(this, void 0, void 0, function* () {
            const a = this.m_ulBroadcastSteamID,
              c = this.m_strUserSteamID;
            if (this.m_ulBroadcastChannelID) {
              const t = l.b.Init(x);
              t.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
                chatter_steamid: e,
                duration: 3600 * r,
                permanent: i,
                undo: o,
              }),
                yield be.AddChatBan(
                  this.m_webAPIInterface.GetServiceTransport(),
                  t
                );
            } else {
              const o = new FormData();
              o.append("broadcaststeamid", a),
                o.append("issuersteamid", c),
                o.append("chattersteamid", e),
                o.append("bantype", t),
                o.append("duration", r.toString()),
                o.append("perm", i ? "1" : "0"),
                o.append("sessionid", fe.c.SESSIONID);
              try {
                yield s.a.post(
                  `${fe.c.CHAT_BASE_URL}broadcast/ajaxupdateusermute`,
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
                      `${fe.c.WEBAPI_BASE_URL}IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=${this.m_webApiToken}`,
                      t
                    );
                } else {
                  const t = l.b.Init(u.b);
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
                    type: o.a.Error,
                    msg: Object(ge.f)("#BroadcastChat_UserMuteFailed", t),
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
                type: o.a.Notification,
                msg: Object(ge.f)("#BroadcastChat_UserMutedLocal", t),
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
                      `${fe.c.WEBAPI_BASE_URL}IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=${this.m_webApiToken}`,
                      t
                    );
                } else {
                  const t = l.b.Init(u.b);
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
                  type: o.a.Notification,
                  msg: Object(ge.f)("#BroadcastChat_UserUnmutedLocal", t),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              } catch (e) {
                this.m_rgChatMessages.push({
                  type: o.a.Error,
                  msg: Object(ge.f)("#BroadcastChat_UserUnmuteFailed", t),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
            else
              this.m_rgChatMessages.push({
                type: o.a.Notification,
                msg: Object(ge.f)("#BroadcastChat_UserUnmutedLocal", t),
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
                      `${fe.c.WEBAPI_BASE_URL}IBroadcastService/RemoveUserChatText/v0001/?access_token=${this.m_webApiToken}`,
                      t
                    );
                } else {
                  const t = l.b.Init(u.d);
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
                  type: o.a.Error,
                  msg: Object(ge.f)("#BroadcastChat_RemoveMessagesFailed", t),
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
                  `${fe.c.WEBAPI_BASE_URL}IBroadcastService/UpdateChatMessageFlair/v0001/?access_token=${this.m_webApiToken}`,
                  t
                );
            } else {
              const t = l.b.Init(u.e);
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
      Object(a.b)([n.C], Ce.prototype, "m_mapChannelModeratorUsers", void 0),
        Object(a.b)(
          [n.C],
          Ce.prototype,
          "m_mapBroadcastModeratorUsers",
          void 0
        ),
        Object(a.b)([n.C], Ce.prototype, "m_nRateLimitSeconds", void 0),
        Object(a.b)([n.C], Ce.prototype, "m_bRateLimited", void 0),
        Object(a.b)([n.C], Ce.prototype, "m_rgChatMessages", void 0),
        Object(a.b)([pe.a], Ce.prototype, "FetchChatModerators", null),
        Object(a.b)([pe.a], Ce.prototype, "RequestLoop", null),
        Object(a.b)([pe.a], Ce.prototype, "MuteUserForSession", null);
      const we = new Se();
      window.g_BroadcastChatStore = we;
    },
    h5cq: function (e, t, r) {
      e.exports = {
        AvatarCtn: "communityavatar_AvatarCtn_3n3n0",
        NameAndProps: "communityavatar_NameAndProps_3Pljh",
      };
    },
    hKFG: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return n;
      });
      r("mrSG");
      var a = r("iO5U"),
        i = (r("q1tI"), r("WBba")),
        s = (r("C4Nl"), r("X2UP"), r("r64O"), r("lkRc"));
      function n(e) {
        a.a.BIsInitialized() || a.a.Initialize(new i.a(s.c.WEBAPI_BASE_URL, e));
      }
    },
    jUCX: function (e, t, r) {
      "use strict";
      r.d(t, "c", function () {
        return d;
      }),
        r.d(t, "b", function () {
          return m;
        });
      var a = r("mrSG"),
        i = r("2vnA"),
        s = r("Gp1o"),
        n = r("qD+2"),
        o = r("TLQK"),
        l = (r("65aj"), r("li7h"), r("lkRc")),
        c = (r("kLLr"), r("8H1D"));
      function d(e) {
        let t = "offline";
        return (
          e &&
            (e.is_ingame
              ? (t = "ingame")
              : e.m_broadcastAccountId
              ? (t = "watchingbroadcast")
              : e.is_online && (t = "online"),
            e.is_awayOrSnooze && (t += " awayOrSnooze")),
          t
        );
      }
      r.d(t, "a", function () {
        return c.a;
      });
      class m {
        constructor(e) {
          (this.m_bInitialized = !1),
            (this.m_ePersonaState = 0),
            (this.m_unGamePlayedAppID = 0),
            (this.m_gameid = "0"),
            (this.m_unPersonaStateFlags = 0),
            (this.m_strPlayerName = ""),
            (this.m_strAvatarHash = c.b),
            (this.m_rtLastSeenOnline = 0),
            (this.m_strGameExtraInfo = ""),
            (this.m_unGameServerIP = 0),
            (this.m_unGameServerPort = 0),
            (this.m_game_lobby_id = ""),
            (this.m_bPlayerNamePending = !1),
            (this.m_bAvatarPending = !1),
            (this.m_mapRichPresence = i.C.map()),
            (this.m_bNameInitialized = !1),
            (this.m_bStatusInitialized = !1),
            (this.m_steamid = e);
        }
        Reset() {
          (this.m_ePersonaState = 0),
            (this.m_unGamePlayedAppID = 0),
            (this.m_gameid = "0"),
            (this.m_strGameExtraInfo = ""),
            (this.m_unGameServerIP = 0),
            (this.m_unGameServerPort = 0),
            (this.m_game_lobby_id = ""),
            this.m_mapRichPresence.clear(),
            (this.m_broadcastId = void 0),
            (this.m_broadcastAccountId = void 0),
            (this.m_broadcastAppId = void 0),
            (this.m_broadcastViewerCount = void 0),
            (this.m_strBroadcastTitle = void 0);
        }
        GetAccountID() {
          return this.m_steamid.GetAccountID();
        }
        get is_online() {
          return 0 != this.m_ePersonaState && 7 != this.m_ePersonaState;
        }
        get is_ingame() {
          return (
            this.is_online &&
            (0 != this.m_unGamePlayedAppID || "0" != this.m_gameid)
          );
        }
        get is_watchingbroadcast() {
          return !!this.m_broadcastAccountId;
        }
        get is_in_nonsteam_game() {
          return 0 == this.m_unGamePlayedAppID && "0" != this.m_gameid;
        }
        get is_in_joinable_game() {
          return (
            this.has_joinable_game_flag ||
            this.is_in_valid_lobby ||
            this.has_server_ip
          );
        }
        get has_joinable_game_flag() {
          return 0 != (2 & this.m_unPersonaStateFlags);
        }
        get connect_string() {
          return this.m_mapRichPresence.get("connect");
        }
        get is_in_valid_lobby() {
          return this.m_game_lobby_id && "0" != this.m_game_lobby_id;
        }
        get has_server_ip() {
          return 0 != this.m_unGameServerIP;
        }
        get is_awayOrSnooze() {
          return 3 == this.m_ePersonaState || 4 == this.m_ePersonaState;
        }
        HasStateFlag(e) {
          return 0 != (this.m_unPersonaStateFlags & e);
        }
        get last_seen_online() {
          return this.m_rtLastSeenOnline;
        }
        ClearStateOnDisconnect() {
          0 != this.m_ePersonaState && this.Reset();
        }
        get is_golden() {
          return this.HasStateFlag(4);
        }
        GetCurrentGameName() {
          return this.m_strGameExtraInfo
            ? this.m_strGameExtraInfo
            : this.m_unGamePlayedAppID
            ? n.a.GetAppInfo(this.m_unGamePlayedAppID).name
            : "";
        }
        GetCurrentGameIconURL() {
          return this.m_unGamePlayedAppID
            ? n.a.GetAppInfo(this.m_unGamePlayedAppID).icon_url
            : "";
        }
        GetCurrentGameLogoURL() {
          return this.m_unGamePlayedAppID
            ? n.a.GetAppInfo(this.m_unGamePlayedAppID).logo_url
            : "";
        }
        GetBroadcastGameLogoURL() {
          return this.m_broadcastAppId
            ? n.a.GetAppInfo(this.m_broadcastAppId).logo_url
            : "";
        }
        BIsAppInfoReady() {
          return (
            !this.m_unGamePlayedAppID ||
            n.a.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
          );
        }
        HasCurrentGameRichPresence() {
          return this.m_mapRichPresence.has("steam_display");
        }
        GetCurrentGameRichPresence() {
          if (this.HasCurrentGameRichPresence()) {
            let e = n.a.GetRichPresenceLoc(this.m_unGamePlayedAppID);
            if (e) {
              let t = this.m_mapRichPresence.get("steam_display");
              return e.Localize(t, this.m_mapRichPresence);
            }
          } else if (this.HasStateFlag(8))
            return Object(o.f)("#PersonaStateRemotePlayTogether");
          return "";
        }
        GetOfflineStatusUpdateRate() {
          if (0 == this.last_seen_online) return 3e4;
          const e = 3600;
          let t = 1e3;
          const r = n.a.CMInterface.GetServerRTime32() - this.last_seen_online;
          return (t *= r > 86400 ? e : r > 7200 ? 60 : 15), t;
        }
        GetOfflineStatusTime() {
          if (0 == this.last_seen_online)
            return Object(o.f)("#PersonaStateOffline");
          let e = this.GetOfflineStatusUpdateRate();
          (!l.c.IN_MOBILE || e <= 60) && Object(s.b)(e);
          let t = n.a.CMInterface.GetServerRTime32() - this.last_seen_online;
          return t < 60
            ? Object(o.f)("#PersonaStateLastSeen_JustNow")
            : Object(o.f)("#PersonaStateLastSeen", Object(o.p)(t));
        }
        GetLocalizedOnlineStatus() {
          switch (this.m_ePersonaState) {
            case 0:
            case 7:
              return this.GetOfflineStatusTime();
            case 1:
              return Object(o.f)("#PersonaStateOnline");
            case 2:
              return Object(o.f)("#PersonaStateBusy");
            case 3:
              return Object(o.f)("#PersonaStateAway");
            case 4:
              return Object(o.f)("#PersonaStateSnooze");
            case 5:
              return Object(o.f)("#PersonaStateLookingToTrade");
            case 6:
              return Object(o.f)("#PersonaStateLookingToPlay");
            default:
              return "";
          }
        }
        get has_public_party_beacon() {
          return this.m_mapRichPresence.has("__beacon") && this.is_ingame;
        }
        get player_group() {
          return this.m_mapRichPresence.has("steam_player_group")
            ? this.m_mapRichPresence.get("steam_player_group")
            : "";
        }
        get player_group_size() {
          return this.m_mapRichPresence.has("steam_player_group_size")
            ? Number.parseInt(
                this.m_mapRichPresence.get("steam_player_group_size")
              )
            : 0;
        }
        get online_state() {
          return this.is_online
            ? this.is_ingame
              ? "in-game"
              : this.m_broadcastAccountId
              ? "watchingbroadcast"
              : "online"
            : "offline";
        }
        BHasAvatarSet() {
          return this.m_strAvatarHash != c.b;
        }
        get avatar_url() {
          return Object(c.a)(this.m_strAvatarHash);
        }
        get avatar_url_medium() {
          return Object(c.a)(this.m_strAvatarHash, "medium");
        }
        get avatar_url_full() {
          return Object(c.a)(this.m_strAvatarHash, "full");
        }
        static SortStatusComparator(e, t, r) {
          if (t.has_public_party_beacon) {
            if (!r.has_public_party_beacon) return -1;
          } else {
            if (r.has_public_party_beacon) return 1;
            if (t.is_ingame) {
              if (!r.is_ingame) return -1;
              if (!e) return 0;
              if (t.is_awayOrSnooze) {
                if (!r.is_awayOrSnooze) return 1;
              } else if (r.is_awayOrSnooze) return -1;
            } else if (r.is_ingame) return 1;
          }
          if (t.is_online) {
            if (!r.is_online) return -1;
          } else if (r.is_online) return 1;
          if (e)
            if (t.is_awayOrSnooze) {
              if (!r.is_awayOrSnooze) return 1;
            } else if (r.is_awayOrSnooze) return -1;
          return 0;
        }
      }
      Object(a.b)([i.C], m.prototype, "m_bInitialized", void 0),
        Object(a.b)([i.C], m.prototype, "m_ePersonaState", void 0),
        Object(a.b)([i.C], m.prototype, "m_unGamePlayedAppID", void 0),
        Object(a.b)([i.C], m.prototype, "m_gameid", void 0),
        Object(a.b)([i.C], m.prototype, "m_unPersonaStateFlags", void 0),
        Object(a.b)([i.C], m.prototype, "m_strPlayerName", void 0),
        Object(a.b)([i.C], m.prototype, "m_strAvatarHash", void 0),
        Object(a.b)([i.C], m.prototype, "m_rtLastSeenOnline", void 0),
        Object(a.b)([i.C], m.prototype, "m_strGameExtraInfo", void 0),
        Object(a.b)([i.C], m.prototype, "m_unGameServerIP", void 0),
        Object(a.b)([i.C], m.prototype, "m_unGameServerPort", void 0),
        Object(a.b)([i.C], m.prototype, "m_game_lobby_id", void 0),
        Object(a.b)([i.C], m.prototype, "m_bPlayerNamePending", void 0),
        Object(a.b)([i.C], m.prototype, "m_bAvatarPending", void 0),
        Object(a.b)([i.C], m.prototype, "m_broadcastId", void 0),
        Object(a.b)([i.C], m.prototype, "m_broadcastAccountId", void 0),
        Object(a.b)([i.C], m.prototype, "m_broadcastAppId", void 0),
        Object(a.b)([i.C], m.prototype, "m_broadcastViewerCount", void 0),
        Object(a.b)([i.C], m.prototype, "m_strBroadcastTitle", void 0),
        Object(a.b)([i.C], m.prototype, "m_bCommunityBanned", void 0);
    },
    m0l2: function (e, t, r) {
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
