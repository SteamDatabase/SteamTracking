/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    "1TsT": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return s;
      });
      var n = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      var r = void 0;
      function o() {
        return (
          void 0 === r &&
            (r = (function () {
              if (!n) return !1;
              if (
                !window.addEventListener ||
                !window.removeEventListener ||
                !Object.defineProperty
              )
                return !1;
              var e = !1;
              try {
                var t = Object.defineProperty({}, "passive", {
                    get: function () {
                      e = !0;
                    },
                  }),
                  a = function () {};
                window.addEventListener("testPassiveEventSupport", a, t),
                  window.removeEventListener("testPassiveEventSupport", a, t);
              } catch (e) {}
              return e;
            })()),
          r
        );
      }
      function l(e) {
        e.handlers === e.nextHandlers && (e.nextHandlers = e.handlers.slice());
      }
      function c(e) {
        (this.target = e), (this.events = {});
      }
      (c.prototype.getEventHandlers = function (e, t) {
        var a,
          n =
            String(e) +
            " " +
            String(
              (a = t)
                ? !0 === a
                  ? 100
                  : (a.capture << 0) + (a.passive << 1) + (a.once << 2)
                : 0
            );
        return (
          this.events[n] ||
            ((this.events[n] = { handlers: [], handleEvent: void 0 }),
            (this.events[n].nextHandlers = this.events[n].handlers)),
          this.events[n]
        );
      }),
        (c.prototype.handleEvent = function (e, t, a) {
          var n = this.getEventHandlers(e, t);
          (n.handlers = n.nextHandlers),
            n.handlers.forEach(function (e) {
              e && e(a);
            });
        }),
        (c.prototype.add = function (e, t, a) {
          var n = this,
            r = this.getEventHandlers(e, a);
          l(r),
            0 === r.nextHandlers.length &&
              ((r.handleEvent = this.handleEvent.bind(this, e, a)),
              this.target.addEventListener(e, r.handleEvent, a)),
            r.nextHandlers.push(t);
          var o = !0;
          return function () {
            if (o) {
              (o = !1), l(r);
              var c = r.nextHandlers.indexOf(t);
              r.nextHandlers.splice(c, 1),
                0 === r.nextHandlers.length &&
                  (n.target &&
                    n.target.removeEventListener(e, r.handleEvent, a),
                  (r.handleEvent = void 0));
            }
          };
        });
      var i = "__consolidated_events_handlers__";
      function s(e, t, a, n) {
        e[i] || (e[i] = new c(e));
        var r = (function (e) {
          if (e) return o() ? e : !!e.capture;
        })(n);
        return e[i].add(t, a, r);
      }
    },
    "8zUZ": function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "default", function () {
          return _e;
        });
      a("xnZ7"), a("idvb");
      var n = a("q1tI"),
        r = a.n(n),
        o = a("EC67"),
        l = a("nmPn"),
        c = a("mrSG"),
        i = a("vDqi"),
        s = a.n(i),
        d = a("2vnA"),
        u = (a("65aj"), a("kLLr")),
        m = a("boaH"),
        v = (a("AiWL"), a("OS6B")),
        p = a("lkRc");
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
          return Object(c.a)(this, void 0, void 0, function* () {
            let t = p.c.COMMUNITY_BASE_URL + "broadcast/broadcastdebuginfo",
              a = {
                steamid: this.m_steamid.ConvertTo64BitString(),
                origin: self.origin,
              };
            try {
              let n = yield s.a.get(t, {
                params: a,
                withCredentials: !0,
                cancelToken: e ? e.token : void 0,
              });
              if (e && e.token.reason) return null;
              if (n && 200 == n.status && n.data && 1 == n.data.success)
                return (this.m_curDebugInfo = n.data), this.m_curDebugInfo;
            } catch (e) {
              let t = Object(v.a)(e);
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
                p.c.COMMUNITY_BASE_URL + "broadcast/updatebroadcastsettings",
              r = {
                steamid: this.m_steamid.ConvertTo64BitString(),
                matchid: e,
                title: t,
                sessionid: p.c.SESSIONID,
              };
            try {
              let e = yield s.a.get(n, {
                params: r,
                withCredentials: !0,
                cancelToken: a ? a.token : void 0,
              });
              if (a && a.token.reason) return !1;
              if (e && 200 == e.status && e.data && 1 == e.data.success) {
                const e = m.a.GetOrCreateBroadcastInfo(
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
              let t = Object(v.a)(e);
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
              a = m.a.GetBroadcast(t);
            let n = p.c.COMMUNITY_BASE_URL + "broadcast/stopbroadcast",
              r = {
                steamid: t,
                broadcastid: a ? a.m_ulBroadcastID : null,
                sessionid: p.c.SESSIONID,
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
              r = m.a.GetBroadcast(n);
            let o =
                p.c.COMMUNITY_BASE_URL + "broadcast/setbroadcastrestriction",
              l = {
                steamid: n,
                broadcastid: r ? r.m_ulBroadcastID : null,
                type: e,
                days: t,
                sessionid: p.c.SESSIONID,
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
              a = m.a.GetBroadcast(t);
            let n = p.c.COMMUNITY_BASE_URL + "broadcast/unban",
              r = {
                steamid: t,
                broadcastid: a ? a.m_ulBroadcastID : null,
                sessionid: p.c.SESSIONID,
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
              a = m.a.GetBroadcast(t);
            let n = p.c.COMMUNITY_BASE_URL + "broadcast/report",
              r = {
                steamid: t,
                broadcastid: a ? a.m_ulBroadcastID : null,
                description: e,
                sessionid: p.c.SESSIONID,
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
              let e = yield s.a.get(t, {
                params: a,
                withCredentials: !0,
                cancelToken: n ? n.token : void 0,
              });
              if (n && n.token.reason) return !1;
              if (e && 200 == e.status && e.data && 1 == e.data.success)
                return !0;
            } catch (t) {
              let a = Object(v.a)(t);
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
            b.s_Singleton || ((b.s_Singleton = new b()), b.s_Singleton.Init()),
            b.s_Singleton
          );
        }
        Init() {
          let e = Object(p.g)("broadcastsinfo", "application_config");
          this.ValidateStoreDefault(e) &&
            ((this.m_steamid = new u.a(e.steamid)),
            (this.m_bShowOnlyChat = Boolean(e.show_only_chat)),
            (this.m_bShowOnlyVideo = Boolean(e.show_only_video)));
        }
        ValidateStoreDefault(e) {
          return !(!e || "object" != typeof e) && "string" == typeof e.steamid;
        }
      }
      Object(c.b)([d.C], b.prototype, "m_curDebugInfo", void 0);
      var _ = a("TyAF"),
        E = a("eN6m"),
        f = a("trWU"),
        h = a("rKv1"),
        S = a.n(h),
        O = (a("kdZy"), a("MUT6"), a("nWbB")),
        C = a("TQGK"),
        g = a("6oCP"),
        w = a("Mgs7"),
        B = a("IjL/"),
        y = a("SdTr"),
        I = a("GiuM"),
        j = a("fpVW"),
        T = a.n(j),
        N = a("5L1o"),
        A = a("7Q8g"),
        D = a("ka0M"),
        G = a("exH9"),
        k = a("X3Ds"),
        L = a("TLQK"),
        P = (a("mgoM"), a("eDP5")),
        R = a("YLyR"),
        M = a("V9dL");
      const U = (e) => {
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
              B.a,
              null,
              r.a.createElement(
                "div",
                { className: Object(G.a)(M.Container) },
                r.a.createElement(
                  "div",
                  { className: M.Controls },
                  r.a.createElement(
                    w.e,
                    {
                      onClick: () =>
                        Object(c.a)(void 0, void 0, void 0, function* () {
                          t.current && t.current();
                          const e = s.a.CancelToken.source();
                          (t.current = e.cancel),
                            o(yield b.Get().LoadBroadcastDebugInfo(e));
                        }),
                    },
                    "(VO) Load Debug Info"
                  )
                ),
                r.a.createElement(B.a, null, r.a.createElement(x, { info: a }))
              )
            )
          );
        },
        x = (e) => {
          const { info: t } = e,
            [a, o] = Object(n.useState)(!1);
          if (!t) return null;
          const l = b.Get().GetBroadcasterSteamID().ConvertTo64BitString(),
            c = m.a.GetBroadcast(l);
          return r.a.createElement(
            "div",
            { className: M.DisplaySection },
            Boolean(t.last_error_result && 1 != t.last_error_result) &&
              r.a.createElement(
                "div",
                { className: M.SubSection },
                r.a.createElement("div", { className: M.Header }, "Error"),
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
              { className: M.SubSection },
              r.a.createElement(
                "div",
                { className: M.Header },
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
              { className: M.SubSection },
              r.a.createElement("div", { className: M.Header }, "Upload Info"),
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
              { className: M.SubSection },
              r.a.createElement("div", { className: M.Header }, "Viewer Info"),
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
              { className: M.SubSection },
              r.a.createElement("div", { className: M.Header }, "Settings"),
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
              { className: M.SubSection },
              r.a.createElement("div", { className: M.Header }, "App Info"),
              r.a.createElement("div", null, "appid: ", t.app_id),
              r.a.createElement("div", null, "app name: ", t.app_name),
              r.a.createElement("div", null, "broadcast title: ", t.title),
              r.a.createElement("div", null, "thumbnail: ", t.thumbnail_url),
              Boolean(t.thumbnail_url) &&
                r.a.createElement("img", { src: t.thumbnail_url }),
              Boolean(t.app_id && t.app_id > 0) &&
                r.a.createElement(
                  "div",
                  { className: M.AppSummaryWidgetCtn },
                  r.a.createElement(N.d, { id: t.app_id, type: "game" })
                )
            ),
            r.a.createElement(
              "div",
              { className: M.SubSection },
              r.a.createElement(
                "div",
                { className: M.Header },
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
            r.a.createElement(w.e, { onClick: () => o(!a) }, "Toggle Raw Data"),
            Boolean(a) &&
              r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  "div",
                  { className: M.SubSection },
                  r.a.createElement(P.b, { data: t })
                ),
                r.a.createElement(
                  "div",
                  { className: M.SubSection },
                  r.a.createElement(P.b, { data: c.m_data })
                )
              )
          );
        };
      var H = a("m0l2"),
        F = a("jUCX"),
        z = a("Gpul"),
        V = a("Qcoi"),
        W = a("h5cq");
      function q(e) {
        const t = V.a.GetProfileByAccountID(e.GetAccountID());
        if (t) {
          let a = new F.b(e);
          return (
            (a.m_strPlayerName = t.persona_name),
            (a.m_strAvatarHash = t.avatar_hash),
            (a.m_ePersonaState = t.persona_state),
            a
          );
        }
        return null;
      }
      const K = (e) => {
        e.steamid.GetAccountID();
        const [t, a] = Object(n.useState)(q(e.steamid)),
          [o, l] = Object(n.useState)(V.a.GetProfileURLBySteamID(e.steamid)),
          [i, s] = Object(n.useState)(V.a.GetPersonaNameBySteamID(e.steamid));
        return (
          Object(n.useEffect)(() => {
            if (!t) {
              (() =>
                Object(c.a)(void 0, void 0, void 0, function* () {
                  yield V.a.LoadProfiles([e.steamid.ConvertTo64BitString()]),
                    a(q(e.steamid)),
                    l(V.a.GetProfileURLBySteamID(e.steamid)),
                    s(V.a.GetPersonaNameBySteamID(e.steamid));
                }))();
            }
          }, [e.steamid, t]),
          r.a.createElement(
            "div",
            { className: W.AvatarCtn },
            r.a.createElement(
              "a",
              {
                href: o,
                "data-miniprofile": "s" + e.steamid.ConvertTo64BitString(),
              },
              r.a.createElement(z.b, {
                persona: t,
                size: e.size,
                statusPosition: "bottom",
              })
            ),
            r.a.createElement(
              "div",
              { className: W.NameAndProps },
              Boolean(e.bShowName) &&
                r.a.createElement(
                  "a",
                  {
                    href: o,
                    "data-miniprofile": "s" + e.steamid.ConvertTo64BitString(),
                  },
                  i
                ),
              e.children
            )
          )
        );
      };
      var Y = a("aoTL"),
        Q = a("b3LC"),
        X = a("BFsE"),
        Z = a("6Y59"),
        J = a("+d9t"),
        $ = a("IzPI"),
        ee = a("M7Y6");
      function te(e) {
        const { broadcasterSteamID: t } = e,
          a = t.ConvertTo64BitString(),
          [n, o] = Object(Y.d)(() => {
            const e = m.a.GetOrCreateBroadcastInfo(a);
            return [e.m_nViewerCount, Number.parseInt(e.m_strAppId)];
          }),
          [l] = Object(Q.b)(o, { include_assets: !0 });
        return r.a.createElement(
          B.a,
          null,
          r.a.createElement(
            "div",
            { className: ee.ProfileCtn },
            r.a.createElement(
              "a",
              {
                href: Object($.g)(
                  (null == l ? void 0 : l.GetStorePageURL()) ||
                    p.c.STORE_BASE_URL + "app/" + o
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
                    Object(L.n)("#Broadcast_ViewerCount", n.toLocaleString())
                  )
                ),
                r.a.createElement(ne, { broadcasterSteamID: t })
              ),
              r.a.createElement(K, {
                steamid: t,
                size: "Medium",
                bShowName: !0,
              })
            )
          )
        );
      }
      const ae = Object(_.a)((e) => {
          const { broadcasterSteamID: t } = e,
            a = t.ConvertTo64BitString(),
            [n, o] = Object(Y.d)(() => {
              const e = m.a.GetOrCreateBroadcastInfo(a);
              return [e.m_strAppTitle, Number.parseInt(e.m_strAppId)];
            }),
            [l] = Object(Q.b)(o, { include_assets: !0 });
          return r.a.createElement(
            "div",
            { className: ee.BroadcastTitleCtn },
            Object(L.f)("#Broadcast_Playing"),
            r.a.createElement(
              "a",
              {
                href: Object($.g)(
                  (null == l ? void 0 : l.GetStorePageURL()) ||
                    p.c.STORE_BASE_URL + "app/" + o
                ),
              },
              Boolean(n) ? n : null == l ? void 0 : l.GetName()
            ),
            Boolean((null == n ? void 0 : n.length) > 0) &&
              r.a.createElement("span", null, " - ", n)
          );
        }),
        ne = Object(_.a)((e) => {
          const { broadcasterSteamID: t } = e,
            a = t.ConvertTo64BitString();
          m.a.GetOrCreateBroadcastInfo(a);
          return r.a.createElement(
            "div",
            { className: ee.BroadcastUserActionsCtn },
            Boolean(
              p.j.steamid != e.broadcasterSteamID.ConvertTo64BitString()
            ) &&
              r.a.createElement(
                w.e,
                {
                  "data-tooltip-text": Object(L.f)(
                    "#Broadcast_User_Report_ttip"
                  ),
                  onClick: (e) => {
                    p.j.logged_in
                      ? Object(D.d)(
                          r.a.createElement(re, { broadcasterSteamID: t }),
                          Object(k.o)(e)
                        )
                      : Object(D.d)(
                          r.a.createElement(A.e, {
                            strTitle: Object(L.f)(
                              "#EventDisplay_Share_NotLoggedIn"
                            ),
                            strDescription: Object(L.f)(
                              "#EventDisplay_Share_NotLoggedIn_Description"
                            ),
                            strOKButtonText: Object(L.f)("#MobileLogin_SignIn"),
                            onOK: () => Object(X.a)(),
                          }),
                          Object(k.o)(e)
                        );
                  },
                },
                r.a.createElement(Z.D, null)
              ),
            r.a.createElement(
              w.e,
              {
                "data-tooltip-text": Object(L.f)("#Broadcast_User_FAQ_ttip"),
                onClick: (e) =>
                  Object(J.d)(
                    e,
                    "https://support.steampowered.com/kb_article.php?ref=6730-TOAK-6497"
                  ),
              },
              r.a.createElement(Z.I, null)
            )
          );
        }),
        re = (e) => {
          const [t, a] = Object(n.useState)("");
          return r.a.createElement(
            A.e,
            {
              strTitle: Object(L.f)("#Broadcast_ReportItem_Title"),
              strDescription: Object(L.f)("#Broadcast_ReportItem_Description"),
              onCancel: e.closeModal,
              bOKDisabled: 0 == t.trim().length,
              onOK: () =>
                Object(c.a)(void 0, void 0, void 0, function* () {
                  yield b.Get().SendUserReportOnBroadcast(t),
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
          if (!p.j.is_support) return null;
          const t = (t, a) => {
              Object(D.d)(
                r.a.createElement(ie, {
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
              className: Object(G.a)(oe.AdminControls, T.a.ValveOnlyBackground),
            },
            r.a.createElement("div", null, "(VO) Support Tools"),
            r.a.createElement(
              w.e,
              { onClick: (e) => t(e, "frontpage") },
              "Remove from Front Page"
            ),
            r.a.createElement(
              w.e,
              { onClick: (e) => t(e, "ban") },
              "Ban from Broadcasting"
            ),
            r.a.createElement(
              w.e,
              {
                onClick: (t) => {
                  Object(D.d)(
                    r.a.createElement(se, { steamid: e.broadcastSteamID }),
                    Object(k.o)(t)
                  );
                },
              },
              "Make Unbannable"
            ),
            r.a.createElement(
              w.e,
              { onClick: (e) => Object(J.d)(e, a) },
              "Go to Support Page"
            )
          );
        },
        ie = Object(_.a)((e) => {
          const { broadcastSteamID: t, strAction: a } = e,
            [o, l] = Object(n.useState)(1),
            [i, d] = Object(n.useState)(!1),
            [u, m] = Object(n.useState)(!1),
            [v, p] = Object(n.useState)(!1),
            _ = Object(n.useRef)(null);
          Object(n.useEffect)(
            () => () => {
              _.current && _.current("BroadcastConfirmBanAction: unmounting");
            },
            []
          );
          const E = () => e.closeModal && e.closeModal();
          return r.a.createElement(
            B.a,
            null,
            r.a.createElement(
              A.i,
              { onEscKeypress: E },
              r.a.createElement(
                w.g,
                null,
                r.a.createElement(
                  w.z,
                  null,
                  "Remove Broadcast From Front Page"
                ),
                r.a.createElement(
                  w.c,
                  null,
                  r.a.createElement(
                    w.d,
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
                      r.a.createElement(w.m, {
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
                      Boolean(i) && r.a.createElement(le.a, null, " "),
                      Boolean(u) &&
                        r.a.createElement(
                          "div",
                          null,
                          v
                            ? "Successfully Completed Request"
                            : "Failed to complete request, check browser console and/or try again later"
                        )
                    )
                  )
                ),
                r.a.createElement(
                  w.q,
                  null,
                  u
                    ? r.a.createElement(
                        w.G,
                        { onClick: E },
                        Object(L.f)("#Button_Dismiss")
                      )
                    : r.a.createElement(
                        w.O,
                        null,
                        r.a.createElement(
                          w.e,
                          { onClick: E },
                          Object(L.f)("#Button_Cancel")
                        ),
                        r.a.createElement(
                          w.G,
                          {
                            onClick: () =>
                              Object(c.a)(void 0, void 0, void 0, function* () {
                                d(!0);
                                try {
                                  _.current && _.current();
                                  const e = s.a.CancelToken.source();
                                  _.current = e.cancel;
                                  let t = yield b
                                    .Get()
                                    .SetBroadcasterRestrictions(a, o, e);
                                  e.token.reason || (t = !0);
                                } finally {
                                  d(!1), m(!0), p(t);
                                }
                              }),
                          },
                          Object(L.f)("#Button_Confirm")
                        )
                      )
                )
              )
            )
          );
        }),
        se = (e) => {
          const [t, a] = Object(n.useState)(!1),
            [o, l] = Object(n.useState)(!1),
            [i, d] = Object(n.useState)(!1),
            u = Object(n.useRef)(null);
          Object(n.useEffect)(
            () => () => {
              u.current && u.current("BroadcastMakeUnbannable: unmounting");
            },
            []
          );
          const m = () => e.closeModal && e.closeModal();
          return r.a.createElement(
            B.a,
            null,
            r.a.createElement(
              A.i,
              { onEscKeypress: m },
              r.a.createElement(
                w.g,
                null,
                r.a.createElement(w.z, null, "Make Broadcast Unbannable"),
                r.a.createElement(
                  w.c,
                  null,
                  r.a.createElement(
                    w.d,
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
                          i
                            ? "Successfully Set Unbannable"
                            : "Failed to make Unbannable"
                        )
                    )
                  )
                ),
                r.a.createElement(
                  w.q,
                  null,
                  o
                    ? r.a.createElement(
                        w.G,
                        { onClick: m },
                        Object(L.f)("#Button_Dismiss")
                      )
                    : r.a.createElement(
                        w.O,
                        null,
                        r.a.createElement(
                          w.e,
                          { onClick: m },
                          Object(L.f)("#Button_Cancel")
                        ),
                        r.a.createElement(
                          w.G,
                          {
                            onClick: () =>
                              Object(c.a)(void 0, void 0, void 0, function* () {
                                a(!0);
                                let e = !1;
                                try {
                                  u.current && u.current();
                                  const t = s.a.CancelToken.source();
                                  (u.current = t.cancel),
                                    (e = yield b.Get().SetUnBannable(t));
                                } finally {
                                  a(!1), l(!0), d(e);
                                }
                              }),
                          },
                          Object(L.f)("#Button_Confirm")
                        )
                      )
                )
              )
            )
          );
        },
        de = Object(_.a)((e) => {
          const t = b.Get().GetBroadcasterSteamID(),
            a = t.ConvertTo64BitString(),
            [n, o] = Object(I.d)("muted", !0),
            l = m.a.GetBroadcast(a),
            c = m.a.GetOrCreateBroadcastInfo(a);
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "div",
              { className: Object(G.a)(H.BroadcastPage) },
              r.a.createElement(
                "div",
                { className: Object(G.a)(S.a.BroadcastAndChat) },
                Boolean(!b.Get().BShowOnlyChat()) &&
                  r.a.createElement(
                    B.a,
                    null,
                    r.a.createElement(
                      "div",
                      { className: Object(G.a)(S.a.wrapper) },
                      r.a.createElement(
                        "div",
                        {
                          className: Object(G.a)({
                            [S.a.video_placeholder]: !0,
                            video_placeholder_trgt: !0,
                            [S.a.NoChat]: b.Get().BShowOnlyVideo(),
                          }),
                        },
                        r.a.createElement(
                          "div",
                          { className: S.a.BroadcastPlayerContainer },
                          r.a.createElement(
                            B.a,
                            null,
                            r.a.createElement(f.default, {
                              steamIDBroadcast: a,
                              watchLocation: 5,
                              bStartMuted: n,
                            })
                          )
                        )
                      )
                    )
                  ),
                Boolean(!b.Get().BShowOnlyVideo()) &&
                  r.a.createElement(
                    "div",
                    { className: S.a.detail_chat_ctn },
                    r.a.createElement(
                      "div",
                      { className: S.a.ChatContainer },
                      r.a.createElement(
                        B.a,
                        null,
                        r.a.createElement(E.a, {
                          emoticonStore: O.g,
                          watchLocation: 6,
                          steamID: a,
                          broadcastID: l ? l.m_ulBroadcastID : void 0,
                        })
                      )
                    )
                  )
              ),
              Boolean(!b.Get().BShowInIframe()) &&
                r.a.createElement(ue, {
                  broadcasterSteamID: t,
                  broadcastInfo: c,
                })
            )
          );
        }),
        ue = Object(_.a)((e) => {
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
              r.a.createElement(me, { steamid: t }),
              Boolean(p.j.is_support) &&
                r.a.createElement(
                  "div",
                  null,
                  r.a.createElement(ce, { broadcastSteamID: t }),
                  r.a.createElement(
                    "div",
                    {
                      className: Object(G.a)(
                        T.a.ValveOnlyBackground,
                        H.DebugCtn
                      ),
                    },
                    r.a.createElement(U, null)
                  )
                ),
              Boolean(a.m_strAppId && Number.parseInt(a.m_strAppId) > 7) &&
                r.a.createElement(
                  "div",
                  { className: H.GameInfoCtn },
                  r.a.createElement(
                    "div",
                    { className: H.GameAboutTitleCtn },
                    r.a.createElement(
                      "div",
                      { className: H.GameAboutTitle },
                      " ",
                      Object(L.f)("#Broadcast_About_Game"),
                      " "
                    ),
                    r.a.createElement(
                      "div",
                      { className: T.a.EventSectionSpacer },
                      " "
                    )
                  ),
                  r.a.createElement(
                    "div",
                    { className: H.GameInfo },
                    r.a.createElement(N.d, {
                      id: Number.parseInt(a.m_strAppId),
                      type: "game",
                    })
                  )
                ),
              Boolean(o) &&
                r.a.createElement(
                  "div",
                  { className: H.RelatedEvents },
                  r.a.createElement(y.a, {
                    clanAccountID: o.clanAccountID,
                    trackingLocation: 6,
                    partnerEventStore: g.b,
                    bViewAllShowInfiniteScroll: !0,
                  })
                )
            )
          );
        }),
        me = Object(_.a)((e) => {
          const t = Object(n.useRef)(null);
          let a = m.a.GetOrCreateBroadcastInfo(
            e.steamid.ConvertTo64BitString()
          );
          const [o, l] = Object(n.useState)(a.m_strTitle),
            [i, d] = Object(n.useState)(""),
            [u, v] = Object(n.useState)(null);
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
            p.j.accountid != e.steamid.GetAccountID())
          )
            return null;
          return r.a.createElement(
            "div",
            { className: H.ControlCtn },
            r.a.createElement(
              "div",
              { className: H.ControlsTitle },
              Object(L.f)("#Broadcaster_Control_title")
            ),
            r.a.createElement(
              "div",
              { className: H.TitleInput },
              r.a.createElement(
                "div",
                { className: H.Options },
                r.a.createElement(w.A, {
                  type: "text",
                  label: Object(L.f)("#Broadcast_title_title"),
                  onChange: (e) => l(e.currentTarget.value || ""),
                  placeholder: Object(L.f)("#Broadcast_title_placeholder"),
                  value: o,
                }),
                r.a.createElement(w.A, {
                  type: "text",
                  label: Object(L.f)("#Broadcast_Control_matchid"),
                  onChange: (e) => d(e.currentTarget.value || ""),
                  value: i,
                }),
                r.a.createElement(
                  w.e,
                  {
                    onClick: () =>
                      Object(c.a)(void 0, void 0, void 0, function* () {
                        t.current && t.current();
                        const e = s.a.CancelToken.source();
                        t.current = e.cancel;
                        let a = yield b.Get().UpdateBroadcastSettings(i, o, e);
                        e.token.reason ||
                          v(
                            Object(L.f)(
                              a
                                ? "#Broadcast_Control_Success"
                                : "#Broadcast_Control_Failure"
                            )
                          );
                      }),
                    "data-tooltip-text": Object(L.f)(
                      "#Broadcast_save_title_ttip"
                    ),
                  },
                  Object(L.f)("#Broadcast_save_changes")
                )
              ),
              r.a.createElement(
                "div",
                { className: H.StopCtn },
                r.a.createElement(
                  w.e,
                  {
                    onClick: (e) => {
                      Object(D.d)(
                        r.a.createElement(A.e, {
                          strTitle: Object(L.f)(
                            "#Broadcast_Control_StopBroadcast"
                          ),
                          strDescription: Object(L.f)(
                            "#EventEditor_GenericAreYouSure"
                          ),
                          onOK: () =>
                            Object(c.a)(void 0, void 0, void 0, function* () {
                              t.current && t.current();
                              const e = s.a.CancelToken.source();
                              t.current = e.cancel;
                              let a = yield b.Get().StopBroadcast(e);
                              e.token.reason ||
                                v(
                                  Object(L.f)(
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
                  Object(L.f)("#Broadcast_Control_StopBroadcast")
                ),
                Boolean(u) && r.a.createElement("div", null, u)
              )
            )
          );
        });
      var ve = a("9w6b"),
        pe = a("hKFG");
      let be = (e) => `/broadcast/(watch|watchnew)/${e}`;
      function _e(e) {
        const [t, a] = r.a.useState(!0);
        return (
          Object(n.useEffect)(() => {
            t && (Object(pe.a)(null), ve.a.InitGlobal().then(() => a(!1)));
          }, [t]),
          t
            ? r.a.createElement(le.a, {
                string: Object(L.f)("#Loading"),
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
                    path: be(":steamid_or_user_vanity"),
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
    SdTr: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return M;
      }),
        a.d(t, "b", function () {
          return U;
        }),
        a.d(t, "c", function () {
          return H;
        });
      var n = a("mrSG"),
        r = (a("35zc"), a("vDqi")),
        o = a.n(r),
        l = a("TyAF"),
        c = a("aoTL"),
        i = a("q1tI"),
        s = a.n(i),
        d = a("mgoM"),
        u = (a("65aj"), a("qDk6")),
        m = a("j+5p"),
        v = a("3+zv"),
        p = a("kLLr"),
        b = (a("MUT6"), a("U+Q5")),
        _ = a("TQGK"),
        E = a("WF3T"),
        f = a("9w6b"),
        h = (a("6oCP"), a("b3LC")),
        S = a("r3N9"),
        O = a("mB/g"),
        C = a("fpVW"),
        g = a.n(C),
        w = a("Hmrm"),
        B = a("YLyR"),
        y = a("dfs5"),
        I = a("Kw0F"),
        j = a("exH9"),
        T = a("TLQK"),
        N = a("lkRc"),
        A = a("IjL/"),
        D = a("0OaU"),
        G = a("XsxU"),
        k = a.n(G),
        L = a("NKJh"),
        P = a.n(L),
        R = a("RQmk");
      const M = Object(l.a)((e) => {
        const {
            clanAccountID: t,
            gidAnnouncement: a,
            partnerEventStore: r,
            trackingLocation: l,
            bViewAllShowInfiniteScroll: c,
          } = e,
          d = p.a.InitFromClanID(t),
          v = Object(i.useRef)(null),
          [b, E] = Object(i.useState)(null),
          [h, C] = Object(i.useState)(!0),
          [w, B] = Object(i.useState)(!1);
        if (
          (Object(i.useEffect)(
            () => (
              Object(n.a)(void 0, void 0, void 0, function* () {
                v.current && v.current("PartnerEventRow Initializng new mount");
                const e = o.a.CancelToken.source();
                v.current = e.cancel;
                const n = p.a.InitFromClanID(t);
                yield _.a.LoadClanInfoForClanSteamID(n);
                let c = yield r.LoadAdjacentPartnerEventsByAnnouncement(
                  a,
                  n,
                  null,
                  4,
                  4,
                  void 0,
                  e
                );
                if (!e.token.reason) {
                  c = c || [];
                  let e = c
                    .filter((e) => e.GetAnnouncementGID() != a)
                    .map((e) => e.AnnouncementGID);
                  I.f(e);
                  const t = e
                    .slice(0, 3)
                    .map((e) => r.GetClanEventFromAnnouncementGID(e));
                  if ((E(t), C(!1), l)) {
                    let e = f.a.Get().GetTracker(),
                      n = !1;
                    if (r.BHasClanAnnouncementGID(a)) {
                      let t = r.GetClanEventFromAnnouncementGID(a);
                      t &&
                        t.BIsPartnerEvent() &&
                        t.BIsVisibleEvent() &&
                        (e.MarkEventRead(
                          t.GID,
                          t.clanSteamID.GetAccountID(),
                          l
                        ),
                        (n = !0));
                    }
                    t.length > 0 &&
                      (c
                        .filter((e) => e.BIsPartnerEvent())
                        .forEach((t) =>
                          e.MarkEventShown(
                            t.GID,
                            t.clanSteamID.GetAccountID(),
                            l
                          )
                        ),
                      (n = !0)),
                      n && e.Flush();
                  }
                }
              }),
              () => {
                v.current && v.current("PartnerEventRow: unmounting");
              }
            ),
            [t, a, r, l]
          ),
          h)
        )
          return s.a.createElement(D.a, { position: "center", size: "medium" });
        if (0 == b.length) return s.a.createElement("div", null);
        const y = _.a.GetClanInfoByClanAccountID(t);
        return s.a.createElement(
          A.a,
          null,
          s.a.createElement(
            "div",
            { className: Object(j.a)(k.a.OtherEventsCtn, "OtherEventsCtn") },
            s.a.createElement(
              "div",
              { className: g.a.EventSectionTitleCtn },
              s.a.createElement(
                "div",
                {
                  className: Object(j.a)(
                    g.a.EventSectionTitle,
                    "EventSectionTitle"
                  ),
                },
                Object(T.o)("#EventBrowse_MoreEventsTitle", y.group_name),
                " "
              ),
              s.a.createElement(
                "div",
                { className: g.a.EventSectionSpacer },
                " "
              ),
              c
                ? s.a.createElement(
                    "div",
                    {
                      className: g.a.EventSectionMoreBtn,
                      onClick: () => B(!0),
                    },
                    Object(T.f)("#EventBrowse_MoreEventsBtn")
                  )
                : s.a.createElement(
                    O.c,
                    {
                      eventModel: b[0],
                      route: O.a.k_eViewWebSiteHub,
                      className: g.a.EventSectionMoreBtn,
                    },
                    Object(T.f)("#EventBrowse_MoreEventsBtn")
                  )
            ),
            s.a.createElement(
              u.a,
              {
                className: k.a.OtherEvents,
                "flow-children": "column",
                navEntryPreferPosition: m.d.PREFERRED_CHILD,
              },
              b.map((e) =>
                s.a.createElement(U, { key: e.AnnouncementGID, event: e })
              )
            ),
            Boolean(w) &&
              s.a.createElement(S.a, {
                appid: b[0].appid,
                clanSteamID: d,
                announcementGID: b[0].AnnouncementGID,
                closeModal: () => B(!1),
                partnerEventStore: r,
              })
          )
        );
      });
      function U(e) {
        const {
            event: t,
            imageURLOverride: a,
            bShowAssociatedApp: n,
            langOverride: r,
            onClick: o,
          } = e,
          [l, i, u, m, p, _, f, S] =
            (Object(y.c)(),
            Object(c.d)(() => {
              const e = r || Object(d.f)(N.c.LANGUAGE),
                n = Boolean(void 0 !== a)
                  ? a
                  : t.GetImageURLWithFallback("capsule", e, b.c.capsule_main);
              return [
                e,
                t.appid,
                n,
                t.GetNameWithFallback(e) || "",
                t.GetCategoryAsString(),
                t.GetSummaryWithFallback(e),
                Object(v.x)(n),
                t.GetSubTitleWithLanguageFallback(e) || "",
              ];
            })),
          [C, g] = Object(h.b)(i, {
            include_assets: !0,
            include_screenshots: !0,
          });
        if (!t)
          return s.a.createElement("div", {
            className: k.a.OtherEvents_EventCtn,
          });
        if (!C && i)
          return s.a.createElement(D.a, {
            size: "small",
            position: "center",
            string: Object(T.f)("#Loading"),
          });
        const w =
            Object(E.b)().GetStoreInitializationTimestamp().getTime() / 1e3,
          I = t ? t.GetStartTimeAndDateUnixSeconds() : "";
        let A = S;
        return (
          S && (S.length > 30 || m.length > 30) && (A = void 0),
          s.a.createElement(
            s.a.Fragment,
            null,
            s.a.createElement(
              O.c,
              {
                className: Object(j.a)(
                  k.a.OtherEvents_EventCtn,
                  k.a.HoversEnabled
                ),
                eventModel: t,
                route: O.a.k_eView,
                onClick: o,
                preferredFocus: !0,
              },
              s.a.createElement(
                "div",
                { className: k.a.EventSummaryContainer },
                s.a.createElement(
                  "div",
                  { className: k.a.EventSummaryType },
                  p
                ),
                s.a.createElement("div", { className: k.a.EventSummaryText }, _)
              ),
              s.a.createElement("div", {
                className: k.a.OtherEvents_BGImage,
                style: {
                  backgroundColor: "#ffffff",
                  backgroundImage: `url(${f})`,
                },
              }),
              s.a.createElement(
                "div",
                { className: k.a.OtherEvents_ContentCtn },
                s.a.createElement(
                  "div",
                  { className: k.a.OtherEvents_MainImageCtn },
                  s.a.createElement("img", {
                    src: u,
                    className: k.a.OtherEvents_MainImage,
                  })
                ),
                s.a.createElement(
                  "div",
                  { className: k.a.OtherEvents_TextCtn },
                  s.a.createElement(
                    "div",
                    { className: k.a.OtherEvents_TextTitle },
                    m
                  ),
                  Boolean(A) &&
                    s.a.createElement(
                      "div",
                      { className: k.a.OtherEvents_SubTitle },
                      A
                    ),
                  Boolean(I > w)
                    ? s.a.createElement(
                        "div",
                        { className: k.a.UpcomingCtn },
                        s.a.createElement(B.a, {
                          bSingleLine: !0,
                          dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                        })
                      )
                    : s.a.createElement(B.a, {
                        bSingleLine: !0,
                        bOnlyDate: !0,
                        dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                      })
                )
              )
            ),
            Boolean(n && t.appid) && s.a.createElement(x, { appid: t.appid })
          )
        );
      }
      function x(e) {
        const { appid: t } = e,
          [a] = Object(h.b)(t, { include_assets: !0, include_release: !0 }),
          n = Object(y.c)();
        if (!a) return null;
        const r = a.GetBestPurchaseOption();
        return s.a.createElement(
          u.a,
          Object.assign(
            { className: Object(j.a)(k.a.AppCapsuleCtn, "AppCapsuleCtn") },
            Object(w.a)(a, n)
          ),
          s.a.createElement(
            R.a,
            { type: "app", id: t, hoverClassName: k.a.AppCapsuleImageHover },
            s.a.createElement("img", {
              className: k.a.AppCapsuleImage,
              src: a.GetAssets().GetSmallCapsuleURL(),
            })
          ),
          s.a.createElement(
            "span",
            { className: k.a.AppCapsulePrice },
            Boolean(null == r ? void 0 : r.discount_pct) &&
              s.a.createElement(
                "span",
                { className: P.a.StoreSaleDiscountBox },
                `-${null == r ? void 0 : r.discount_pct}%`
              ),
            !a.BIsFree() &&
              r.final_price_in_cents &&
              s.a.createElement(
                "span",
                { className: P.a.StoreSalePriceBox },
                r.formatted_final_price
              )
          )
        );
      }
      function H(e) {
        const { event: t, imageURLOverride: a, onClick: n } = e,
          r = Object(d.f)(N.c.LANGUAGE),
          [o, l, i] = Object(c.d)(() =>
            t
              ? [
                  void 0 !== a
                    ? a
                    : t.GetImageURLWithFallback("capsule", r, b.c.capsule_main),
                  t.GetNameWithFallback(r),
                  t.GetCategoryAsString(),
                ]
              : [void 0, void 0, void 0]
          );
        return t
          ? s.a.createElement(
              O.c,
              {
                className: k.a.OtherEvents_EventCtn + " " + k.a.HorizontalEvent,
                eventModel: t,
                route: O.a.k_eView,
                onClick: n,
              },
              s.a.createElement(
                "div",
                { className: k.a.OtherEvents_ContentCtn },
                s.a.createElement(
                  "div",
                  { className: k.a.OtherEvents_MainImageCtn },
                  s.a.createElement("img", {
                    src: o,
                    className: k.a.OtherEvents_MainImage,
                  })
                )
              ),
              s.a.createElement(
                "div",
                { className: k.a.OtherEvents_TextCtn },
                s.a.createElement(
                  "div",
                  { className: k.a.HorizontalDescriptionCtn },
                  s.a.createElement(
                    "div",
                    { className: k.a.HorizontalDescription },
                    i
                  ),
                  s.a.createElement(B.a, {
                    bSingleLine: !0,
                    dateAndTime: t.GetStartTimeAndDateUnixSeconds(),
                  })
                ),
                s.a.createElement("div", { className: k.a.HorizontalTitle }, l)
              )
            )
          : s.a.createElement("div", { className: k.a.OtherEvents_EventCtn });
      }
    },
    V9dL: function (e, t, a) {
      e.exports = {
        SubSection: "broadcastdebug_SubSection_3Ac4z",
        Header: "broadcastdebug_Header_2vrXB",
        AppSummaryWidgetCtn: "broadcastdebug_AppSummaryWidgetCtn_35ozI",
      };
    },
    XsxU: function (e, t, a) {
      e.exports = {
        "duration-app-launch": "800ms",
        OtherEventsCtn: "eventrow_OtherEventsCtn_9H6b5",
        OtherEvents_MainImageCtn: "eventrow_OtherEvents_MainImageCtn_2qyLP",
        OtherEvents: "eventrow_OtherEvents_16DzR",
        OtherEvents_EventCtn: "eventrow_OtherEvents_EventCtn_1MwNf",
        OtherEvents_MainImage: "eventrow_OtherEvents_MainImage_3_wKb",
        OtherEvents_BGImage: "eventrow_OtherEvents_BGImage_2pPj9",
        OtherEvents_ContentCtn: "eventrow_OtherEvents_ContentCtn_22jEp",
        OtherEvents_TextCtn: "eventrow_OtherEvents_TextCtn_3-EtN",
        OtherEvents_TextTitle: "eventrow_OtherEvents_TextTitle_2jc1D",
        UpcomingCtn: "eventrow_UpcomingCtn_2CXrG",
        OtherEvents_SubTitle: "eventrow_OtherEvents_SubTitle_1Swox",
        HoversEnabled: "eventrow_HoversEnabled_3o6M8",
        PartnerEventRowCapsule_MainImage:
          "eventrow_PartnerEventRowCapsule_MainImage_bC2Zk",
        EventSummaryContainer: "eventrow_EventSummaryContainer_2GYp4",
        EventSummaryText: "eventrow_EventSummaryText_ENbI1",
        EventSummaryType: "eventrow_EventSummaryType_11JXz",
        HorizontalEvent: "eventrow_HorizontalEvent_1ruRS",
        HorizontalSummary: "eventrow_HorizontalSummary_2bTWa",
        HorizontalTitle: "eventrow_HorizontalTitle_B9-wl",
        HorizontalDescriptionCtn: "eventrow_HorizontalDescriptionCtn_3CQtW",
        HorizontalDescription: "eventrow_HorizontalDescription_2hPZw",
        AppCapsuleImage: "eventrow_AppCapsuleImage_3OzV3",
        AppCapsuleCtn: "eventrow_AppCapsuleCtn_16au-",
        AppCapsuleImageHover: "eventrow_AppCapsuleImageHover_IeC3X",
        AppCapsulePrice: "eventrow_AppCapsulePrice_2-l2M",
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
    uuth: function (e, t, a) {
      "use strict";
      (function (e) {
        a.d(t, "a", function () {
          return C;
        });
        var n = a("1TsT"),
          r = (a("17x9"), a("q1tI")),
          o = a.n(r),
          l = a("TOwV");
        function c(e, t) {
          for (var a = 0; a < t.length; a++) {
            var n = t[a];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        function i(e) {
          return (i = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        function s(e, t) {
          return (s =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        function d(e, t) {
          return !t || ("object" != typeof t && "function" != typeof t)
            ? (function (e) {
                if (void 0 === e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return e;
              })(e)
            : t;
        }
        function u(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Date.prototype.toString.call(
                  Reflect.construct(Date, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var a,
              n = i(e);
            if (t) {
              var r = i(this).constructor;
              a = Reflect.construct(n, arguments, r);
            } else a = n.apply(this, arguments);
            return d(this, a);
          };
        }
        function m(e, t) {
          var a,
            n =
              ((a = e),
              !isNaN(parseFloat(a)) && isFinite(a)
                ? parseFloat(a)
                : "px" === a.slice(-2)
                ? parseFloat(a.slice(0, -2))
                : void 0);
          if ("number" == typeof n) return n;
          var r = (function (e) {
            if ("%" === e.slice(-1)) return parseFloat(e.slice(0, -1)) / 100;
          })(e);
          return "number" == typeof r ? r * t : void 0;
        }
        var v = "above",
          p = "inside",
          b = "below",
          _ = "invisible";
        function E(e) {
          return "string" == typeof e.type;
        }
        var f;
        var h = [];
        function S(e) {
          h.push(e),
            f ||
              (f = setTimeout(function () {
                var e;
                for (f = null; (e = h.shift()); ) e();
              }, 0));
          var t = !0;
          return function () {
            if (t) {
              t = !1;
              var a = h.indexOf(e);
              -1 !== a &&
                (h.splice(a, 1),
                !h.length && f && (clearTimeout(f), (f = null)));
            }
          };
        }
        var O = {
            debug: !1,
            scrollableAncestor: void 0,
            children: void 0,
            topOffset: "0px",
            bottomOffset: "0px",
            horizontal: !1,
            onEnter: function () {},
            onLeave: function () {},
            onPositionChange: function () {},
            fireOnRapidScroll: !0,
          },
          C = (function (t) {
            !(function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                t && s(e, t);
            })(f, t);
            var a,
              r,
              i,
              d = u(f);
            function f(e) {
              var t;
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, f),
                ((t = d.call(this, e)).refElement = function (e) {
                  t._ref = e;
                }),
                t
              );
            }
            return (
              (a = f),
              (r = [
                {
                  key: "componentDidMount",
                  value: function () {
                    var e = this;
                    f.getWindow() &&
                      (this.cancelOnNextTick = S(function () {
                        e.cancelOnNextTick = null;
                        var t = e.props,
                          a = t.children;
                        t.debug,
                          (function (e, t) {
                            if (e && !E(e) && !t)
                              throw new Error(
                                "<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info."
                              );
                          })(a, e._ref),
                          (e._handleScroll = e._handleScroll.bind(e)),
                          (e.scrollableAncestor = e._findScrollableAncestor()),
                          (e.scrollEventListenerUnsubscribe = Object(n.a)(
                            e.scrollableAncestor,
                            "scroll",
                            e._handleScroll,
                            { passive: !0 }
                          )),
                          (e.resizeEventListenerUnsubscribe = Object(n.a)(
                            window,
                            "resize",
                            e._handleScroll,
                            { passive: !0 }
                          )),
                          e._handleScroll(null);
                      }));
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function () {
                    var e = this;
                    f.getWindow() &&
                      this.scrollableAncestor &&
                      (this.cancelOnNextTick ||
                        (this.cancelOnNextTick = S(function () {
                          (e.cancelOnNextTick = null), e._handleScroll(null);
                        })));
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    f.getWindow() &&
                      (this.scrollEventListenerUnsubscribe &&
                        this.scrollEventListenerUnsubscribe(),
                      this.resizeEventListenerUnsubscribe &&
                        this.resizeEventListenerUnsubscribe(),
                      this.cancelOnNextTick && this.cancelOnNextTick());
                  },
                },
                {
                  key: "_findScrollableAncestor",
                  value: function () {
                    var t = this.props,
                      a = t.horizontal,
                      n = t.scrollableAncestor;
                    if (n)
                      return (function (t) {
                        return "window" === t ? e.window : t;
                      })(n);
                    for (var r = this._ref; r.parentNode; ) {
                      if ((r = r.parentNode) === document.body) return window;
                      var o = window.getComputedStyle(r),
                        l =
                          (a
                            ? o.getPropertyValue("overflow-x")
                            : o.getPropertyValue("overflow-y")) ||
                          o.getPropertyValue("overflow");
                      if ("auto" === l || "scroll" === l || "overlay" === l)
                        return r;
                    }
                    return window;
                  },
                },
                {
                  key: "_handleScroll",
                  value: function (e) {
                    if (this._ref) {
                      var t = this._getBounds(),
                        a = (function (e) {
                          return e.viewportBottom - e.viewportTop == 0
                            ? _
                            : (e.viewportTop <= e.waypointTop &&
                                e.waypointTop <= e.viewportBottom) ||
                              (e.viewportTop <= e.waypointBottom &&
                                e.waypointBottom <= e.viewportBottom) ||
                              (e.waypointTop <= e.viewportTop &&
                                e.viewportBottom <= e.waypointBottom)
                            ? p
                            : e.viewportBottom < e.waypointTop
                            ? b
                            : e.waypointTop < e.viewportTop
                            ? v
                            : _;
                        })(t),
                        n = this._previousPosition,
                        r = this.props,
                        o = (r.debug, r.onPositionChange),
                        l = r.onEnter,
                        c = r.onLeave,
                        i = r.fireOnRapidScroll;
                      if (((this._previousPosition = a), n !== a)) {
                        var s = {
                          currentPosition: a,
                          previousPosition: n,
                          event: e,
                          waypointTop: t.waypointTop,
                          waypointBottom: t.waypointBottom,
                          viewportTop: t.viewportTop,
                          viewportBottom: t.viewportBottom,
                        };
                        o.call(this, s),
                          a === p
                            ? l.call(this, s)
                            : n === p && c.call(this, s),
                          i &&
                            ((n === b && a === v) || (n === v && a === b)) &&
                            (l.call(this, {
                              currentPosition: p,
                              previousPosition: n,
                              event: e,
                              waypointTop: t.waypointTop,
                              waypointBottom: t.waypointBottom,
                              viewportTop: t.viewportTop,
                              viewportBottom: t.viewportBottom,
                            }),
                            c.call(this, {
                              currentPosition: a,
                              previousPosition: p,
                              event: e,
                              waypointTop: t.waypointTop,
                              waypointBottom: t.waypointBottom,
                              viewportTop: t.viewportTop,
                              viewportBottom: t.viewportBottom,
                            }));
                      }
                    }
                  },
                },
                {
                  key: "_getBounds",
                  value: function () {
                    var e,
                      t,
                      a = this.props,
                      n = a.horizontal,
                      r = (a.debug, this._ref.getBoundingClientRect()),
                      o = r.left,
                      l = r.top,
                      c = r.right,
                      i = r.bottom,
                      s = n ? o : l,
                      d = n ? c : i;
                    this.scrollableAncestor === window
                      ? ((e = n ? window.innerWidth : window.innerHeight),
                        (t = 0))
                      : ((e = n
                          ? this.scrollableAncestor.offsetWidth
                          : this.scrollableAncestor.offsetHeight),
                        (t = n
                          ? this.scrollableAncestor.getBoundingClientRect().left
                          : this.scrollableAncestor.getBoundingClientRect()
                              .top));
                    var u = this.props,
                      v = u.bottomOffset;
                    return {
                      waypointTop: s,
                      waypointBottom: d,
                      viewportTop: t + m(u.topOffset, e),
                      viewportBottom: t + e - m(v, e),
                    };
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this,
                      t = this.props.children;
                    return t
                      ? E(t) || Object(l.isForwardRef)(t)
                        ? o.a.cloneElement(t, {
                            ref: function (a) {
                              e.refElement(a),
                                t.ref &&
                                  ("function" == typeof t.ref
                                    ? t.ref(a)
                                    : (t.ref.current = a));
                            },
                          })
                        : o.a.cloneElement(t, { innerRef: this.refElement })
                      : o.a.createElement("span", {
                          ref: this.refElement,
                          style: { fontSize: 0 },
                        });
                  },
                },
              ]) && c(a.prototype, r),
              i && c(a, i),
              f
            );
          })(o.a.PureComponent);
        (C.above = v),
          (C.below = b),
          (C.inside = p),
          (C.invisible = _),
          (C.getWindow = function () {
            if ("undefined" != typeof window) return window;
          }),
          (C.defaultProps = O),
          (C.displayName = "Waypoint");
      }.call(this, a("yLpj")));
    },
  },
]);
