/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    "8zUZ": function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "default", function () {
          return ve;
        });
      a("xnZ7"), a("idvb");
      var n = a("q1tI"),
        r = a.n(n),
        o = a("EC67"),
        l = a("nmPn"),
        c = a("mrSG"),
        s = a("vDqi"),
        i = a.n(s),
        d = a("2vnA"),
        m = (a("65aj"), a("kLLr")),
        u = a("boaH"),
        b = (a("AiWL"), a("OS6B")),
        _ = a("lkRc");
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
          return Object(c.a)(this, void 0, void 0, function* () {
            let t = _.c.COMMUNITY_BASE_URL + "broadcast/broadcastdebuginfo",
              a = {
                steamid: this.m_steamid.ConvertTo64BitString(),
                origin: self.origin,
              };
            try {
              let n = yield i.a.get(t, {
                params: a,
                withCredentials: !0,
                cancelToken: e ? e.token : void 0,
              });
              if (e && e.token.reason) return null;
              if (n && 200 == n.status && n.data && 1 == n.data.success)
                return (this.m_curDebugInfo = n.data), this.m_curDebugInfo;
            } catch (e) {
              let t = Object(b.a)(e);
              console.error(
                "LoadBroadcastDebugInfo: Failed " + t.strErrorMsg,
                t
              );
            }
            return null;
          });
        }
        UpdateBroadcastSettings(e, t, a) {
          return Object(c.a)(this, void 0, void 0, function* () {
            let n =
                _.c.COMMUNITY_BASE_URL + "broadcast/updatebroadcastsettings",
              r = {
                steamid: this.m_steamid.ConvertTo64BitString(),
                matchid: e,
                title: t,
                sessionid: _.c.SESSIONID,
              };
            try {
              let e = yield i.a.get(n, {
                params: r,
                withCredentials: !0,
                cancelToken: a ? a.token : void 0,
              });
              if (a && a.token.reason) return !1;
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
              let t = Object(b.a)(e);
              console.error(
                "UpdateBroadcastSettings: Failed " + t.strErrorMsg,
                t
              );
            }
            return !1;
          });
        }
        StopBroadcast(e) {
          return Object(c.a)(this, void 0, void 0, function* () {
            const t = this.m_steamid.ConvertTo64BitString(),
              a = u.a.GetBroadcast(t);
            let n = _.c.COMMUNITY_BASE_URL + "broadcast/stopbroadcast",
              r = {
                steamid: t,
                broadcastid: a ? a.m_ulBroadcastID : null,
                sessionid: _.c.SESSIONID,
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
          return Object(c.a)(this, void 0, void 0, function* () {
            const n = this.m_steamid.ConvertTo64BitString(),
              r = u.a.GetBroadcast(n);
            let o =
                _.c.COMMUNITY_BASE_URL + "broadcast/setbroadcastrestriction",
              l = {
                steamid: n,
                broadcastid: r ? r.m_ulBroadcastID : null,
                type: e,
                days: t,
                sessionid: _.c.SESSIONID,
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
          return Object(c.a)(this, void 0, void 0, function* () {
            const t = this.m_steamid.ConvertTo64BitString(),
              a = u.a.GetBroadcast(t);
            let n = _.c.COMMUNITY_BASE_URL + "broadcast/unban",
              r = {
                steamid: t,
                broadcastid: a ? a.m_ulBroadcastID : null,
                sessionid: _.c.SESSIONID,
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
          return Object(c.a)(this, void 0, void 0, function* () {
            const t = this.m_steamid.ConvertTo64BitString(),
              a = u.a.GetBroadcast(t);
            let n = _.c.COMMUNITY_BASE_URL + "broadcast/report",
              r = {
                steamid: t,
                broadcastid: a ? a.m_ulBroadcastID : null,
                description: e,
                sessionid: _.c.SESSIONID,
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
          return Object(c.a)(this, void 0, void 0, function* () {
            try {
              let e = yield i.a.get(t, {
                params: a,
                withCredentials: !0,
                cancelToken: n ? n.token : void 0,
              });
              if (n && n.token.reason) return !1;
              if (e && 200 == e.status && e.data && 1 == e.data.success)
                return !0;
            } catch (t) {
              let a = Object(b.a)(t);
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
          let e = Object(_.f)("broadcastsinfo", "application_config");
          this.ValidateStoreDefault(e) &&
            ((this.m_steamid = new m.a(e.steamid)),
            (this.m_bShowOnlyChat = Boolean(e.show_only_chat)),
            (this.m_bShowOnlyVideo = Boolean(e.show_only_video)));
        }
        ValidateStoreDefault(e) {
          return !(!e || "object" != typeof e) && "string" == typeof e.steamid;
        }
      }
      Object(c.b)([d.C], p.prototype, "m_curDebugInfo", void 0);
      var v = a("TyAF"),
        E = a("eN6m"),
        S = a("trWU"),
        f = a("rKv1"),
        O = a.n(f),
        B = (a("kdZy"), a("MUT6"), a("nWbB")),
        C = a("TQGK"),
        g = a("6oCP"),
        h = a("Mgs7"),
        I = a("IjL/"),
        j = a("SdTr"),
        y = a("GiuM"),
        D = a("fpVW"),
        G = a.n(D),
        N = a("5L1o"),
        A = a("7Q8g"),
        T = a("ka0M"),
        w = a("exH9"),
        k = a("X3Ds"),
        U = a("TLQK"),
        M = (a("mgoM"), a("eDP5")),
        R = a("YLyR"),
        L = a("V9dL");
      const P = (e) => {
          const t = Object(n.useRef)(null),
            [a, o] = Object(n.useState)(null);
          return (
            Object(n.useEffect)(
              () => () => {
                t.current && t.current("BroadcastDebugSection: unmounting");
              },
              []
            ),
            r.a.createElement(
              I.a,
              null,
              r.a.createElement(
                "div",
                { className: Object(w.a)(L.Container) },
                r.a.createElement(
                  "div",
                  { className: L.Controls },
                  r.a.createElement(
                    h.e,
                    {
                      onClick: () =>
                        Object(c.a)(void 0, void 0, void 0, function* () {
                          t.current && t.current();
                          const e = i.a.CancelToken.source();
                          (t.current = e.cancel),
                            o(yield p.Get().LoadBroadcastDebugInfo(e));
                        }),
                    },
                    "(VO) Load Debug Info"
                  )
                ),
                r.a.createElement(I.a, null, r.a.createElement(V, { info: a }))
              )
            )
          );
        },
        V = (e) => {
          const { info: t } = e,
            [a, o] = Object(n.useState)(!1);
          if (!t) return null;
          const l = p.Get().GetBroadcasterSteamID().ConvertTo64BitString(),
            c = u.a.GetBroadcast(l);
          return r.a.createElement(
            "div",
            { className: L.DisplaySection },
            Boolean(t.last_error_result && 1 != t.last_error_result) &&
              r.a.createElement(
                "div",
                { className: L.SubSection },
                r.a.createElement("div", { className: L.Header }, "Error"),
                r.a.createElement(
                  "div",
                  null,
                  "EResult: ",
                  t.last_error_result,
                  ", occurred ",
                  t.last_error_time,
                  " - ",
                  r.a.createElement(R.a, {
                    dateAndTime: t.last_error_time,
                    bSingleLine: !0,
                  })
                )
              ),
            r.a.createElement(
              "div",
              { className: L.SubSection },
              r.a.createElement(
                "div",
                { className: L.Header },
                "Broadcast Setup"
              ),
              r.a.createElement(
                "div",
                null,
                "Broadcaster: ",
                t.steam_id,
                ", SteamID: ",
                l
              ),
              r.a.createElement(
                "div",
                null,
                "Broadcast Directory: ",
                t.directory_server,
                ", SessionID: ",
                t.broadcast_id
              ),
              r.a.createElement(
                "div",
                null,
                "Broadcast Ingestor: ",
                t.relay_server,
                ", UploadID: ",
                t.upload_id
              ),
              r.a.createElement(
                "div",
                null,
                "Broadcast Origin: ",
                t.origin_server
              ),
              r.a.createElement("div", null, "Broadcast Chat: ", t.chat_server)
            ),
            r.a.createElement(
              "div",
              { className: L.SubSection },
              r.a.createElement("div", { className: L.Header }, "Upload Info"),
              r.a.createElement(
                "div",
                null,
                "Upload Client: ",
                t.remote_address,
                " ",
                Boolean(t.is_rtmp) ? "(RTMP)" : "(STEAM CLIENT)"
              ),
              r.a.createElement(
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
            r.a.createElement(
              "div",
              { className: L.SubSection },
              r.a.createElement("div", { className: L.Header }, "Viewer Info"),
              r.a.createElement(
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
              r.a.createElement(
                "div",
                null,
                "Average time watched: ",
                t.average_watch_duration,
                " seconds"
              ),
              r.a.createElement(
                "div",
                null,
                "Last Minute: ",
                t.added_viewers_last_minute,
                " watch requests, ",
                t.rejected_viewers_last_minute,
                " rejected"
              ),
              r.a.createElement("div", null, "Restrictions: ", t.restriction),
              r.a.createElement("div", null, t.extra_viewer_info)
            ),
            r.a.createElement(
              "div",
              { className: L.SubSection },
              r.a.createElement("div", { className: L.Header }, "Settings"),
              r.a.createElement("div", null, "is replay? ", t.is_replay),
              r.a.createElement(
                "div",
                null,
                "is replay local file? ",
                t.is_replay_local_file
              ),
              r.a.createElement(
                "div",
                null,
                "is replay clip? ",
                t.is_replay_local_file
              ),
              r.a.createElement(
                "div",
                null,
                "is replay clip? ",
                t.is_replay_clip
              ),
              r.a.createElement(
                "div",
                null,
                "is capturing VOD? ",
                t.is_capturing_vod
              ),
              r.a.createElement(
                "div",
                null,
                "is white listed for store streaming? ",
                t.is_whitelisted
              )
            ),
            r.a.createElement(
              "div",
              { className: L.SubSection },
              r.a.createElement("div", { className: L.Header }, "App Info"),
              r.a.createElement("div", null, "appid: ", t.app_id),
              r.a.createElement("div", null, "app name: ", t.app_name),
              r.a.createElement("div", null, "broadcast title: ", t.title),
              r.a.createElement("div", null, "thumbnail: ", t.thumbnail_url),
              Boolean(t.thumbnail_url) &&
                r.a.createElement("img", { src: t.thumbnail_url }),
              Boolean(t.app_id && t.app_id > 0) &&
                r.a.createElement(
                  "div",
                  { className: L.AppSummaryWidgetCtn },
                  r.a.createElement(N.e, { id: t.app_id, type: "game" })
                )
            ),
            r.a.createElement(
              "div",
              { className: L.SubSection },
              r.a.createElement(
                "div",
                { className: L.Header },
                "Manifest Information"
              ),
              r.a.createElement(
                "div",
                null,
                "Heartbeat Interval: ",
                c.m_data.heartbeat_interval
              ),
              r.a.createElement("div", null, "DASH MPEG Url: ", c.m_data.url),
              r.a.createElement("div", null, "HLS Url: ", c.m_data.hls_url)
            ),
            r.a.createElement(h.e, { onClick: () => o(!a) }, "Toggle Raw Data"),
            Boolean(a) &&
              r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  "div",
                  { className: L.SubSection },
                  r.a.createElement(M.b, { data: t })
                ),
                r.a.createElement(
                  "div",
                  { className: L.SubSection },
                  r.a.createElement(M.b, { data: c.m_data })
                )
              )
          );
        };
      var F = a("m0l2"),
        x = a("jUCX"),
        q = a("Gpul"),
        H = a("Qcoi"),
        K = a("h5cq");
      function Y(e) {
        const t = H.a.GetProfileByAccountID(e.GetAccountID());
        if (t) {
          let a = new x.b(e);
          return (
            (a.m_strPlayerName = t.persona_name),
            (a.m_strAvatarHash = t.avatar_hash),
            (a.m_ePersonaState = t.persona_state),
            a
          );
        }
        return null;
      }
      const z = (e) => {
        e.steamid.GetAccountID();
        const [t, a] = Object(n.useState)(Y(e.steamid)),
          [o, l] = Object(n.useState)(H.a.GetProfileURLBySteamID(e.steamid)),
          [s, i] = Object(n.useState)(H.a.GetPersonaNameBySteamID(e.steamid));
        return (
          Object(n.useEffect)(() => {
            if (!t) {
              (() =>
                Object(c.a)(void 0, void 0, void 0, function* () {
                  yield H.a.LoadProfiles([e.steamid.ConvertTo64BitString()]),
                    a(Y(e.steamid)),
                    l(H.a.GetProfileURLBySteamID(e.steamid)),
                    i(H.a.GetPersonaNameBySteamID(e.steamid));
                }))();
            }
          }, [e.steamid, t]),
          r.a.createElement(
            "div",
            { className: K.AvatarCtn },
            r.a.createElement(
              "a",
              {
                href: o,
                "data-miniprofile": "s" + e.steamid.ConvertTo64BitString(),
              },
              r.a.createElement(q.b, {
                persona: t,
                size: e.size,
                statusPosition: "bottom",
              })
            ),
            r.a.createElement(
              "div",
              { className: K.NameAndProps },
              Boolean(e.bShowName) &&
                r.a.createElement(
                  "a",
                  {
                    href: o,
                    "data-miniprofile": "s" + e.steamid.ConvertTo64BitString(),
                  },
                  s
                ),
              e.children
            )
          )
        );
      };
      var Q = a("aoTL"),
        W = a("b3LC"),
        X = a("BFsE"),
        Z = a("6Y59"),
        J = a("+d9t"),
        $ = a("IzPI"),
        ee = a("M7Y6");
      function te(e) {
        const { broadcasterSteamID: t } = e,
          a = t.ConvertTo64BitString(),
          [n, o] = Object(Q.d)(() => {
            const e = u.a.GetOrCreateBroadcastInfo(a);
            return [e.m_nViewerCount, Number.parseInt(e.m_strAppId)];
          }),
          [l] = Object(W.b)(o, { include_assets: !0 });
        return r.a.createElement(
          I.a,
          null,
          r.a.createElement(
            "div",
            { className: ee.ProfileCtn },
            r.a.createElement(
              "a",
              {
                href: Object($.g)(
                  (null == l ? void 0 : l.GetStorePageURL()) ||
                    _.c.STORE_BASE_URL + "app/" + o
                ),
                className: ee.GameCapsule,
              },
              r.a.createElement("img", {
                src: null == l ? void 0 : l.GetAssets().GetMainCapsuleURL(),
              })
            ),
            r.a.createElement(
              "div",
              { className: ee.StreamDetailsCtn },
              r.a.createElement(
                "div",
                { className: ee.GameAndOptionsCtn },
                r.a.createElement(
                  "div",
                  { className: ee.GameAndViewersCtn },
                  r.a.createElement(ae, { broadcasterSteamID: t }),
                  r.a.createElement(
                    "div",
                    { className: ee.ViewerCount },
                    Object(U.m)("#Broadcast_ViewerCount", n.toLocaleString())
                  )
                ),
                r.a.createElement(ne, { broadcasterSteamID: t })
              ),
              r.a.createElement(z, {
                steamid: t,
                size: "Medium",
                bShowName: !0,
              })
            )
          )
        );
      }
      const ae = Object(v.a)((e) => {
          const { broadcasterSteamID: t } = e,
            a = t.ConvertTo64BitString(),
            [n, o] = Object(Q.d)(() => {
              const e = u.a.GetOrCreateBroadcastInfo(a);
              return [e.m_strAppTitle, Number.parseInt(e.m_strAppId)];
            }),
            [l] = Object(W.b)(o, { include_assets: !0 });
          return r.a.createElement(
            "div",
            { className: ee.BroadcastTitleCtn },
            Object(U.f)("#Broadcast_Playing"),
            r.a.createElement(
              "a",
              {
                href: Object($.g)(
                  (null == l ? void 0 : l.GetStorePageURL()) ||
                    _.c.STORE_BASE_URL + "app/" + o
                ),
              },
              Boolean(n) ? n : null == l ? void 0 : l.GetName()
            ),
            Boolean((null == n ? void 0 : n.length) > 0) &&
              r.a.createElement("span", null, " - ", n)
          );
        }),
        ne = Object(v.a)((e) => {
          const { broadcasterSteamID: t } = e,
            a = t.ConvertTo64BitString();
          u.a.GetOrCreateBroadcastInfo(a);
          return r.a.createElement(
            "div",
            { className: ee.BroadcastUserActionsCtn },
            Boolean(
              _.i.steamid != e.broadcasterSteamID.ConvertTo64BitString()
            ) &&
              r.a.createElement(
                h.e,
                {
                  "data-tooltip-text": Object(U.f)(
                    "#Broadcast_User_Report_ttip"
                  ),
                  onClick: (e) => {
                    _.i.logged_in
                      ? Object(T.d)(
                          r.a.createElement(re, { broadcasterSteamID: t }),
                          Object(k.o)(e)
                        )
                      : Object(T.d)(
                          r.a.createElement(A.e, {
                            strTitle: Object(U.f)(
                              "#EventDisplay_Share_NotLoggedIn"
                            ),
                            strDescription: Object(U.f)(
                              "#EventDisplay_Share_NotLoggedIn_Description"
                            ),
                            strOKButtonText: Object(U.f)("#MobileLogin_SignIn"),
                            onOK: () => Object(X.a)(),
                          }),
                          Object(k.o)(e)
                        );
                  },
                },
                r.a.createElement(Z.B, null)
              ),
            r.a.createElement(
              h.e,
              {
                "data-tooltip-text": Object(U.f)("#Broadcast_User_FAQ_ttip"),
                onClick: (e) =>
                  Object(J.d)(
                    e,
                    "https://support.steampowered.com/kb_article.php?ref=6730-TOAK-6497"
                  ),
              },
              r.a.createElement(Z.F, null)
            )
          );
        }),
        re = (e) => {
          const [t, a] = Object(n.useState)("");
          return r.a.createElement(
            A.e,
            {
              strTitle: Object(U.f)("#Broadcast_ReportItem_Title"),
              strDescription: Object(U.f)("#Broadcast_ReportItem_Description"),
              onCancel: e.closeModal,
              bOKDisabled: 0 == t.trim().length,
              onOK: () =>
                Object(c.a)(void 0, void 0, void 0, function* () {
                  yield p.Get().SendUserReportOnBroadcast(t),
                    e.closeModal && e.closeModal();
                }),
            },
            r.a.createElement("textarea", {
              value: t,
              onChange: (e) => a(e.currentTarget.value),
              rows: 10,
              cols: 80,
            })
          );
        };
      var oe = a("Pa9b"),
        le = a("0OaU");
      const ce = (e) => {
          if (!_.i.is_support) return null;
          const t = (t, a) => {
              Object(T.d)(
                r.a.createElement(se, {
                  broadcastSteamID: e.broadcastSteamID,
                  strAction: a,
                }),
                Object(k.o)(t)
              );
            },
            a =
              "https://steamsupport.valvesoftware.com/account/overview/" +
              e.broadcastSteamID.ConvertTo64BitString();
          return r.a.createElement(
            "div",
            {
              className: Object(w.a)(oe.AdminControls, G.a.ValveOnlyBackground),
            },
            r.a.createElement("div", null, "(VO) Support Tools"),
            r.a.createElement(
              h.e,
              { onClick: (e) => t(e, "frontpage") },
              "Remove from Front Page"
            ),
            r.a.createElement(
              h.e,
              { onClick: (e) => t(e, "ban") },
              "Ban from Broadcasting"
            ),
            r.a.createElement(
              h.e,
              {
                onClick: (t) => {
                  Object(T.d)(
                    r.a.createElement(ie, { steamid: e.broadcastSteamID }),
                    Object(k.o)(t)
                  );
                },
              },
              "Make Unbannable"
            ),
            r.a.createElement(
              h.e,
              { onClick: (e) => Object(J.d)(e, a) },
              "Go to Support Page"
            )
          );
        },
        se = Object(v.a)((e) => {
          const { broadcastSteamID: t, strAction: a } = e,
            [o, l] = Object(n.useState)(1),
            [s, d] = Object(n.useState)(!1),
            [m, u] = Object(n.useState)(!1),
            [b, _] = Object(n.useState)(!1),
            v = Object(n.useRef)(null);
          Object(n.useEffect)(
            () => () => {
              v.current && v.current("BroadcastConfirmBanAction: unmounting");
            },
            []
          );
          const E = () => e.closeModal && e.closeModal();
          return r.a.createElement(
            I.a,
            null,
            r.a.createElement(
              A.i,
              { onEscKeypress: E },
              r.a.createElement(
                h.g,
                null,
                r.a.createElement(
                  h.z,
                  null,
                  "Remove Broadcast From Front Page"
                ),
                r.a.createElement(
                  h.c,
                  null,
                  r.a.createElement(
                    h.d,
                    null,
                    r.a.createElement(
                      "p",
                      null,
                      "frontpage" == a
                        ? "How long should we prevent the broadcast from appearing in community or store?"
                        : "How long should we prevent the user from Broadcast at all on Steam?"
                    ),
                    r.a.createElement(
                      "div",
                      null,
                      r.a.createElement(h.m, {
                        rgOptions: [
                          { label: "1 Day", data: 1 },
                          { label: "1 Week", data: 7 },
                          { label: "1 Month", data: 30 },
                          { label: "6 Months", data: 180 },
                          { label: "1 Year", data: 365 },
                        ],
                        selectedOption: o,
                        onChange: (e) => l(e.data),
                      }),
                      Boolean(s) && r.a.createElement(le.a, null, " "),
                      Boolean(m) &&
                        r.a.createElement(
                          "div",
                          null,
                          b
                            ? "Successfully Completed Request"
                            : "Failed to complete request, check browser console and/or try again later"
                        )
                    )
                  )
                ),
                r.a.createElement(
                  h.q,
                  null,
                  m
                    ? r.a.createElement(
                        h.G,
                        { onClick: E },
                        Object(U.f)("#Button_Dismiss")
                      )
                    : r.a.createElement(
                        h.O,
                        null,
                        r.a.createElement(
                          h.e,
                          { onClick: E },
                          Object(U.f)("#Button_Cancel")
                        ),
                        r.a.createElement(
                          h.G,
                          {
                            onClick: () =>
                              Object(c.a)(void 0, void 0, void 0, function* () {
                                d(!0);
                                try {
                                  v.current && v.current();
                                  const e = i.a.CancelToken.source();
                                  v.current = e.cancel;
                                  let t = yield p
                                    .Get()
                                    .SetBroadcasterRestrictions(a, o, e);
                                  e.token.reason || (t = !0);
                                } finally {
                                  d(!1), u(!0), _(t);
                                }
                              }),
                          },
                          Object(U.f)("#Button_Confirm")
                        )
                      )
                )
              )
            )
          );
        }),
        ie = (e) => {
          const [t, a] = Object(n.useState)(!1),
            [o, l] = Object(n.useState)(!1),
            [s, d] = Object(n.useState)(!1),
            m = Object(n.useRef)(null);
          Object(n.useEffect)(
            () => () => {
              m.current && m.current("BroadcastMakeUnbannable: unmounting");
            },
            []
          );
          const u = () => e.closeModal && e.closeModal();
          return r.a.createElement(
            I.a,
            null,
            r.a.createElement(
              A.i,
              { onEscKeypress: u },
              r.a.createElement(
                h.g,
                null,
                r.a.createElement(h.z, null, "Make Broadcast Unbannable"),
                r.a.createElement(
                  h.c,
                  null,
                  r.a.createElement(
                    h.d,
                    null,
                    r.a.createElement(
                      "p",
                      null,
                      "Prevent automatic, report based banning changes to this strema visibility the stream for 1 week?"
                    ),
                    r.a.createElement(
                      "div",
                      null,
                      Boolean(t) && r.a.createElement(le.a, null, " "),
                      Boolean(o) &&
                        r.a.createElement(
                          "div",
                          null,
                          s
                            ? "Successfully Set Unbannable"
                            : "Failed to make Unbannable"
                        )
                    )
                  )
                ),
                r.a.createElement(
                  h.q,
                  null,
                  o
                    ? r.a.createElement(
                        h.G,
                        { onClick: u },
                        Object(U.f)("#Button_Dismiss")
                      )
                    : r.a.createElement(
                        h.O,
                        null,
                        r.a.createElement(
                          h.e,
                          { onClick: u },
                          Object(U.f)("#Button_Cancel")
                        ),
                        r.a.createElement(
                          h.G,
                          {
                            onClick: () =>
                              Object(c.a)(void 0, void 0, void 0, function* () {
                                a(!0);
                                let e = !1;
                                try {
                                  m.current && m.current();
                                  const t = i.a.CancelToken.source();
                                  (m.current = t.cancel),
                                    (e = yield p.Get().SetUnBannable(t));
                                } finally {
                                  a(!1), l(!0), d(e);
                                }
                              }),
                          },
                          Object(U.f)("#Button_Confirm")
                        )
                      )
                )
              )
            )
          );
        },
        de = Object(v.a)((e) => {
          const t = p.Get().GetBroadcasterSteamID(),
            a = t.ConvertTo64BitString(),
            [n, o] = Object(y.d)("muted", !0),
            l = u.a.GetBroadcast(a),
            c = u.a.GetOrCreateBroadcastInfo(a);
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "div",
              { className: Object(w.a)(F.BroadcastPage) },
              r.a.createElement(
                "div",
                { className: Object(w.a)(O.a.BroadcastAndChat) },
                Boolean(!p.Get().BShowOnlyChat()) &&
                  r.a.createElement(
                    I.a,
                    null,
                    r.a.createElement(
                      "div",
                      { className: Object(w.a)(O.a.wrapper) },
                      r.a.createElement(
                        "div",
                        {
                          className: Object(w.a)({
                            [O.a.video_placeholder]: !0,
                            video_placeholder_trgt: !0,
                            [O.a.NoChat]: p.Get().BShowOnlyVideo(),
                          }),
                        },
                        r.a.createElement(
                          "div",
                          { className: O.a.BroadcastPlayerContainer },
                          r.a.createElement(
                            I.a,
                            null,
                            r.a.createElement(S.default, {
                              steamIDBroadcast: a,
                              watchLocation: 5,
                              bStartMuted: n,
                            })
                          )
                        )
                      )
                    )
                  ),
                Boolean(!p.Get().BShowOnlyVideo()) &&
                  r.a.createElement(
                    "div",
                    { className: O.a.detail_chat_ctn },
                    r.a.createElement(
                      "div",
                      { className: O.a.ChatContainer },
                      r.a.createElement(
                        I.a,
                        null,
                        r.a.createElement(E.a, {
                          emoticonStore: B.g,
                          watchLocation: 6,
                          steamID: a,
                          broadcastID: l ? l.m_ulBroadcastID : void 0,
                        })
                      )
                    )
                  )
              ),
              Boolean(!p.Get().BShowInIframe()) &&
                r.a.createElement(me, {
                  broadcasterSteamID: t,
                  broadcastInfo: c,
                })
            )
          );
        }),
        me = Object(v.a)((e) => {
          const { broadcasterSteamID: t, broadcastInfo: a } = e,
            [o, l] = Object(n.useState)(null);
          return (
            Object(n.useEffect)(() => {
              Object(c.a)(void 0, void 0, void 0, function* () {
                let e = yield C.a.LoadOGGClanInfoForAppID(
                  Number.parseInt(a.m_strAppId)
                );
                l(e);
              });
            }, [a.m_strAppId]),
            r.a.createElement(
              r.a.Fragment,
              null,
              r.a.createElement(te, { broadcasterSteamID: t }),
              r.a.createElement(ue, { steamid: t }),
              Boolean(_.i.is_support) &&
                r.a.createElement(
                  "div",
                  null,
                  r.a.createElement(ce, { broadcastSteamID: t }),
                  r.a.createElement(
                    "div",
                    {
                      className: Object(w.a)(
                        G.a.ValveOnlyBackground,
                        F.DebugCtn
                      ),
                    },
                    r.a.createElement(P, null)
                  )
                ),
              Boolean(a.m_strAppId && Number.parseInt(a.m_strAppId) > 7) &&
                r.a.createElement(
                  "div",
                  { className: F.GameInfoCtn },
                  r.a.createElement(
                    "div",
                    { className: F.GameAboutTitleCtn },
                    r.a.createElement(
                      "div",
                      { className: F.GameAboutTitle },
                      " ",
                      Object(U.f)("#Broadcast_About_Game"),
                      " "
                    ),
                    r.a.createElement(
                      "div",
                      { className: G.a.EventSectionSpacer },
                      " "
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: F.GameInfo },
                    r.a.createElement(N.e, {
                      id: Number.parseInt(a.m_strAppId),
                      type: "game",
                    })
                  )
                ),
              Boolean(o) &&
                r.a.createElement(
                  "div",
                  { className: F.RelatedEvents },
                  r.a.createElement(j.a, {
                    clanAccountID: o.clanAccountID,
                    trackingLocation: 6,
                    partnerEventStore: g.b,
                    bViewAllShowInfiniteScroll: !0,
                  })
                )
            )
          );
        }),
        ue = Object(v.a)((e) => {
          const t = Object(n.useRef)(null);
          let a = u.a.GetOrCreateBroadcastInfo(
            e.steamid.ConvertTo64BitString()
          );
          const [o, l] = Object(n.useState)(a.m_strTitle),
            [s, d] = Object(n.useState)(""),
            [m, b] = Object(n.useState)(null);
          if (
            (Object(n.useEffect)(
              () => (
                l(a.m_strTitle),
                () => {
                  t.current && t.current("BroadcastControls: unmounting");
                }
              ),
              [a.m_strTitle]
            ),
            _.i.accountid != e.steamid.GetAccountID())
          )
            return null;
          return r.a.createElement(
            "div",
            { className: F.ControlCtn },
            r.a.createElement(
              "div",
              { className: F.ControlsTitle },
              Object(U.f)("#Broadcaster_Control_title")
            ),
            r.a.createElement(
              "div",
              { className: F.TitleInput },
              r.a.createElement(
                "div",
                { className: F.Options },
                r.a.createElement(h.A, {
                  type: "text",
                  label: Object(U.f)("#Broadcast_title_title"),
                  onChange: (e) => l(e.currentTarget.value || ""),
                  placeholder: Object(U.f)("#Broadcast_title_placeholder"),
                  value: o,
                }),
                r.a.createElement(h.A, {
                  type: "text",
                  label: Object(U.f)("#Broadcast_Control_matchid"),
                  onChange: (e) => d(e.currentTarget.value || ""),
                  value: s,
                }),
                r.a.createElement(
                  h.e,
                  {
                    onClick: () =>
                      Object(c.a)(void 0, void 0, void 0, function* () {
                        t.current && t.current();
                        const e = i.a.CancelToken.source();
                        t.current = e.cancel;
                        let a = yield p.Get().UpdateBroadcastSettings(s, o, e);
                        e.token.reason ||
                          b(
                            Object(U.f)(
                              a
                                ? "#Broadcast_Control_Success"
                                : "#Broadcast_Control_Failure"
                            )
                          );
                      }),
                    "data-tooltip-text": Object(U.f)(
                      "#Broadcast_save_title_ttip"
                    ),
                  },
                  Object(U.f)("#Broadcast_save_changes")
                )
              ),
              r.a.createElement(
                "div",
                { className: F.StopCtn },
                r.a.createElement(
                  h.e,
                  {
                    onClick: (e) => {
                      Object(T.d)(
                        r.a.createElement(A.e, {
                          strTitle: Object(U.f)(
                            "#Broadcast_Control_StopBroadcast"
                          ),
                          strDescription: Object(U.f)(
                            "#EventEditor_GenericAreYouSure"
                          ),
                          onOK: () =>
                            Object(c.a)(void 0, void 0, void 0, function* () {
                              t.current && t.current();
                              const e = i.a.CancelToken.source();
                              t.current = e.cancel;
                              let a = yield p.Get().StopBroadcast(e);
                              e.token.reason ||
                                b(
                                  Object(U.f)(
                                    a
                                      ? "#Broadcast_Control_StopSuccess"
                                      : "#Broadcast_Control_StopFailure"
                                  )
                                );
                            }),
                        }),
                        Object(k.o)(e)
                      );
                    },
                  },
                  Object(U.f)("#Broadcast_Control_StopBroadcast")
                ),
                Boolean(m) && r.a.createElement("div", null, m)
              )
            )
          );
        });
      var be = a("9w6b"),
        _e = a("hKFG");
      let pe = (e) => `/broadcast/(watch|watchnew)/${e}`;
      function ve(e) {
        const [t, a] = r.a.useState(!0);
        return (
          Object(n.useEffect)(() => {
            t && (Object(_e.a)(null), be.a.InitGlobal().then(() => a(!1)));
          }, [t]),
          t
            ? r.a.createElement(le.a, {
                string: Object(U.f)("#Loading"),
                position: "center",
                size: "medium",
              })
            : r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  o.e,
                  null,
                  r.a.createElement(o.c, {
                    path: pe(":steamid_or_user_vanity"),
                    render: (e) =>
                      r.a.createElement(de, {
                        strSteamID: e.match.params.steamid_or_user_vanity,
                      }),
                  }),
                  r.a.createElement(o.c, { component: l.b })
                )
              )
        );
      }
    },
    M7Y6: function (e, t, a) {
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
    Pa9b: function (e, t, a) {
      e.exports = { AdminControls: "broadcastsupport_AdminControls_3KL0b" };
    },
    V9dL: function (e, t, a) {
      e.exports = {
        SubSection: "broadcastdebug_SubSection_3Ac4z",
        Header: "broadcastdebug_Header_2vrXB",
        AppSummaryWidgetCtn: "broadcastdebug_AppSummaryWidgetCtn_35ozI",
      };
    },
    h5cq: function (e, t, a) {
      e.exports = {
        AvatarCtn: "communityavatar_AvatarCtn_3n3n0",
        NameAndProps: "communityavatar_NameAndProps_3Pljh",
      };
    },
    m0l2: function (e, t, a) {
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
  },
]);
