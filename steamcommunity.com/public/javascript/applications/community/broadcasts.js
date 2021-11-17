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
          return be;
        });
      r("xnZ7"), r("idvb");
      var n = r("q1tI"),
        i = r.n(n),
        a = r("EC67"),
        o = r("nmPn"),
        s = r("mrSG"),
        c = r("vDqi"),
        u = r.n(c),
        l = r("2vnA"),
        d = r("kLLr"),
        m = r("boaH"),
        f = r("OS6B"),
        b = r("lkRc"),
        p = (function () {
          function e() {
            (this.m_bShowOnlyVideo = !1),
              (this.m_bShowOnlyChat = !1),
              (this.m_curDebugInfo = null);
          }
          return (
            (e.prototype.GetBroadcasterSteamID = function () {
              return this.m_steamid;
            }),
            (e.prototype.GetDebugInfo = function () {
              return this.m_curDebugInfo;
            }),
            (e.prototype.BShowOnlyVideo = function () {
              return this.m_bShowOnlyVideo;
            }),
            (e.prototype.BShowOnlyChat = function () {
              return this.m_bShowOnlyChat;
            }),
            (e.prototype.BShowInIframe = function () {
              return this.m_bShowOnlyChat || this.m_bShowOnlyVideo;
            }),
            (e.prototype.LoadBroadcastDebugInfo = function (e) {
              return Object(s.b)(this, void 0, void 0, function () {
                var t, r, n, i, a;
                return Object(s.e)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      (t =
                        b.c.COMMUNITY_BASE_URL +
                        "broadcast/broadcastdebuginfo"),
                        (r = {
                          steamid: this.m_steamid.ConvertTo64BitString(),
                          origin: self.origin,
                        }),
                        (o.label = 1);
                    case 1:
                      return (
                        o.trys.push([1, 3, , 4]),
                        [
                          4,
                          u.a.get(t, {
                            params: r,
                            withCredentials: !0,
                            cancelToken: e ? e.token : void 0,
                          }),
                        ]
                      );
                    case 2:
                      return (
                        (n = o.sent()),
                        e && e.token.reason
                          ? [2, null]
                          : n &&
                            200 == n.status &&
                            n.data &&
                            1 == n.data.success
                          ? ((this.m_curDebugInfo = n.data),
                            [2, this.m_curDebugInfo])
                          : [3, 4]
                      );
                    case 3:
                      return (
                        (i = o.sent()),
                        (a = Object(f.a)(i)),
                        console.error(
                          "LoadBroadcastDebugInfo: Failed " + a.strErrorMsg,
                          a
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, null];
                  }
                });
              });
            }),
            (e.prototype.UpdateBroadcastSettings = function (e, t, r) {
              return Object(s.b)(this, void 0, void 0, function () {
                var n, i, a, o, c, d;
                return Object(s.e)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      (n =
                        b.c.COMMUNITY_BASE_URL +
                        "broadcast/updatebroadcastsettings"),
                        (i = {
                          steamid: this.m_steamid.ConvertTo64BitString(),
                          matchid: e,
                          title: t,
                          sessionid: b.c.SESSIONID,
                        }),
                        (s.label = 1);
                    case 1:
                      return (
                        s.trys.push([1, 3, , 4]),
                        [
                          4,
                          u.a.get(n, {
                            params: i,
                            withCredentials: !0,
                            cancelToken: r ? r.token : void 0,
                          }),
                        ]
                      );
                    case 2:
                      return (
                        (a = s.sent()),
                        r && r.token.reason
                          ? [2, !1]
                          : a &&
                            200 == a.status &&
                            a.data &&
                            1 == a.data.success
                          ? ((o = m.a.GetOrCreateBroadcastInfo(
                              this.m_steamid.ConvertTo64BitString()
                            )) &&
                              Object(l.G)(function () {
                                o.m_strTitle = t;
                              }),
                            [2, !0])
                          : [3, 4]
                      );
                    case 3:
                      return (
                        (c = s.sent()),
                        (d = Object(f.a)(c)),
                        console.error(
                          "UpdateBroadcastSettings: Failed " + d.strErrorMsg,
                          d
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, !1];
                  }
                });
              });
            }),
            (e.prototype.StopBroadcast = function (e) {
              return Object(s.b)(this, void 0, void 0, function () {
                var t, r, n, i;
                return Object(s.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (t = this.m_steamid.ConvertTo64BitString()),
                        (r = m.a.GetBroadcast(t)),
                        (n =
                          b.c.COMMUNITY_BASE_URL + "broadcast/stopbroadcast"),
                        (i = {
                          steamid: t,
                          broadcastid: r ? r.m_ulBroadcastID : null,
                          sessionid: b.c.SESSIONID,
                        }),
                        [
                          4,
                          this.InternalSendSimpleGetRequest(
                            "StopBroadcast",
                            n,
                            i,
                            e
                          ),
                        ]
                      );
                    case 1:
                      return [2, a.sent()];
                  }
                });
              });
            }),
            (e.prototype.SetBroadcasterRestrictions = function (e, t, r) {
              return Object(s.b)(this, void 0, void 0, function () {
                var n, i, a, o;
                return Object(s.e)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return (
                        (n = this.m_steamid.ConvertTo64BitString()),
                        (i = m.a.GetBroadcast(n)),
                        (a =
                          b.c.COMMUNITY_BASE_URL +
                          "broadcast/setbroadcastrestriction"),
                        (o = {
                          steamid: n,
                          broadcastid: i ? i.m_ulBroadcastID : null,
                          type: e,
                          days: t,
                          sessionid: b.c.SESSIONID,
                        }),
                        [
                          4,
                          this.InternalSendSimpleGetRequest(
                            "SetBroadcasterRestrictions",
                            a,
                            o,
                            r
                          ),
                        ]
                      );
                    case 1:
                      return [2, s.sent()];
                  }
                });
              });
            }),
            (e.prototype.SetUnBannable = function (e) {
              return Object(s.b)(this, void 0, void 0, function () {
                var t, r, n, i;
                return Object(s.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (t = this.m_steamid.ConvertTo64BitString()),
                        (r = m.a.GetBroadcast(t)),
                        (n = b.c.COMMUNITY_BASE_URL + "broadcast/unban"),
                        (i = {
                          steamid: t,
                          broadcastid: r ? r.m_ulBroadcastID : null,
                          sessionid: b.c.SESSIONID,
                        }),
                        [
                          4,
                          this.InternalSendSimpleGetRequest(
                            "SetUnBannable",
                            n,
                            i,
                            e
                          ),
                        ]
                      );
                    case 1:
                      return [2, a.sent()];
                  }
                });
              });
            }),
            (e.prototype.SendUserReportOnBroadcast = function (e) {
              return Object(s.b)(this, void 0, void 0, function () {
                var t, r, n, i;
                return Object(s.e)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (t = this.m_steamid.ConvertTo64BitString()),
                        (r = m.a.GetBroadcast(t)),
                        (n = b.c.COMMUNITY_BASE_URL + "broadcast/report"),
                        (i = {
                          steamid: t,
                          broadcastid: r ? r.m_ulBroadcastID : null,
                          description: e,
                          sessionid: b.c.SESSIONID,
                        }),
                        [
                          4,
                          this.InternalSendSimpleGetRequest(
                            "SendUserReportOnBroadcast",
                            n,
                            i,
                            null
                          ),
                        ]
                      );
                    case 1:
                      return [2, a.sent()];
                  }
                });
              });
            }),
            (e.prototype.InternalSendSimpleGetRequest = function (e, t, r, n) {
              return Object(s.b)(this, void 0, void 0, function () {
                var i, a, o;
                return Object(s.e)(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return (
                        s.trys.push([0, 2, , 3]),
                        [
                          4,
                          u.a.get(t, {
                            params: r,
                            withCredentials: !0,
                            cancelToken: n ? n.token : void 0,
                          }),
                        ]
                      );
                    case 1:
                      return (
                        (i = s.sent()),
                        n && n.token.reason
                          ? [2, !1]
                          : i &&
                            200 == i.status &&
                            i.data &&
                            1 == i.data.success
                          ? [2, !0]
                          : [3, 3]
                      );
                    case 2:
                      return (
                        (a = s.sent()),
                        (o = Object(f.a)(a)),
                        console.error(
                          "CCommunityBroadcastStore:" +
                            e +
                            ": Failed " +
                            o.strErrorMsg,
                          o
                        ),
                        [3, 3]
                      );
                    case 3:
                      return [2, !1];
                  }
                });
              });
            }),
            (e.Get = function () {
              return (
                e.s_Singleton ||
                  ((e.s_Singleton = new e()), e.s_Singleton.Init()),
                e.s_Singleton
              );
            }),
            (e.prototype.Init = function () {
              var e = Object(b.f)("broadcastsinfo", "application_config");
              this.ValidateStoreDefault(e) &&
                ((this.m_steamid = new d.a(e.steamid)),
                (this.m_bShowOnlyChat = Boolean(e.show_only_chat)),
                (this.m_bShowOnlyVideo = Boolean(e.show_only_video)));
            }),
            (e.prototype.ValidateStoreDefault = function (e) {
              return (
                !(!e || "object" != typeof e) && "string" == typeof e.steamid
              );
            }),
            Object(s.c)([l.C], e.prototype, "m_curDebugInfo", void 0),
            e
          );
        })(),
        _ = r("TyAF"),
        h = r("eN6m"),
        B = r("trWU"),
        y = r("rKv1"),
        g = r.n(y),
        v = r("nWbB"),
        S = r("TQGK"),
        w = r("6oCP"),
        M = r("Mgs7"),
        z = r("IjL/"),
        C = r("SdTr"),
        O = r("GiuM"),
        R = r("fpVW"),
        j = r.n(R),
        F = r("5L1o"),
        T = r("Jqb/"),
        W = r("ka0M"),
        I = r("exH9"),
        U = r("X3Ds"),
        E = r("TLQK"),
        N = r("eDP5"),
        P = r("YLyR"),
        x = r("V9dL"),
        G = function (e) {
          var t = Object(n.useRef)(null),
            r = Object(n.useState)(null),
            a = r[0],
            o = r[1];
          return (
            Object(n.useEffect)(function () {
              return function () {
                t.current && t.current("BroadcastDebugSection: unmounting");
              };
            }, []),
            i.a.createElement(
              z.a,
              null,
              i.a.createElement(
                "div",
                { className: Object(I.a)(x.Container) },
                i.a.createElement(
                  "div",
                  { className: x.Controls },
                  i.a.createElement(
                    M.d,
                    {
                      onClick: function () {
                        return Object(s.b)(void 0, void 0, void 0, function () {
                          var e, r;
                          return Object(s.e)(this, function (n) {
                            switch (n.label) {
                              case 0:
                                return (
                                  t.current && t.current(),
                                  (e = u.a.CancelToken.source()),
                                  (t.current = e.cancel),
                                  (r = o),
                                  [4, p.Get().LoadBroadcastDebugInfo(e)]
                                );
                              case 1:
                                return r.apply(void 0, [n.sent()]), [2];
                            }
                          });
                        });
                      },
                    },
                    "(VO) Load Debug Info"
                  )
                ),
                i.a.createElement(z.a, null, i.a.createElement(A, { info: a }))
              )
            )
          );
        },
        A = function (e) {
          var t = e.info,
            r = Object(n.useState)(!1),
            a = r[0],
            o = r[1];
          if (!t) return null;
          var s = p.Get().GetBroadcasterSteamID().ConvertTo64BitString(),
            c = m.a.GetBroadcast(s);
          return i.a.createElement(
            "div",
            { className: x.DisplaySection },
            Boolean(t.last_error_result && 1 != t.last_error_result) &&
              i.a.createElement(
                "div",
                { className: x.SubSection },
                i.a.createElement("div", { className: x.Header }, "Error"),
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
              { className: x.SubSection },
              i.a.createElement(
                "div",
                { className: x.Header },
                "Broadcast Setup"
              ),
              i.a.createElement(
                "div",
                null,
                "Broadcaster: ",
                t.steam_id,
                ", SteamID: ",
                s
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
              { className: x.SubSection },
              i.a.createElement("div", { className: x.Header }, "Upload Info"),
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
              { className: x.SubSection },
              i.a.createElement("div", { className: x.Header }, "Viewer Info"),
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
              i.a.createElement("div", null, "Restrictions: ", t.restriction)
            ),
            i.a.createElement(
              "div",
              { className: x.SubSection },
              i.a.createElement("div", { className: x.Header }, "Settings"),
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
              { className: x.SubSection },
              i.a.createElement("div", { className: x.Header }, "App Info"),
              i.a.createElement("div", null, "appid: ", t.app_id),
              i.a.createElement("div", null, "app name: ", t.app_name),
              i.a.createElement("div", null, "broadcast title: ", t.title),
              i.a.createElement("div", null, "thumbnail: ", t.thumbnail_url),
              Boolean(t.thumbnail_url) &&
                i.a.createElement("img", { src: t.thumbnail_url }),
              Boolean(t.app_id && t.app_id > 0) &&
                i.a.createElement(
                  "div",
                  { className: x.AppSummaryWidgetCtn },
                  i.a.createElement(F.m, { id: t.app_id, type: "game" })
                )
            ),
            i.a.createElement(
              "div",
              { className: x.SubSection },
              i.a.createElement(
                "div",
                { className: x.Header },
                "Manifest Information"
              ),
              i.a.createElement(
                "div",
                null,
                "Heartbeat Interval: ",
                c.m_data.heartbeat_interval
              ),
              i.a.createElement("div", null, "DASH MPEG Url: ", c.m_data.url),
              i.a.createElement("div", null, "HLS Url: ", c.m_data.hls_url)
            ),
            i.a.createElement(
              M.d,
              {
                onClick: function () {
                  return o(!a);
                },
              },
              "Toggle Raw Data"
            ),
            Boolean(a) &&
              i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(
                  "div",
                  { className: x.SubSection },
                  i.a.createElement(N.b, { data: t })
                ),
                i.a.createElement(
                  "div",
                  { className: x.SubSection },
                  i.a.createElement(N.b, { data: c.m_data })
                )
              )
          );
        },
        D = r("m0l2"),
        L = r("jUCX"),
        k = r("Gpul"),
        V = r("Qcoi"),
        q = r("h5cq");
      function H(e) {
        var t = V.a.GetProfileByAccountID(e.GetAccountID());
        if (t) {
          var r = new L.b(e);
          return (
            (r.m_strPlayerName = t.persona_name),
            (r.m_strAvatarHash = t.avatar_hash),
            (r.m_ePersonaState = t.persona_state),
            r
          );
        }
        return null;
      }
      var K = function (e) {
          e.steamid.GetAccountID();
          var t = Object(n.useState)(H(e.steamid)),
            r = t[0],
            a = t[1],
            o = Object(n.useState)(V.a.GetProfileURLBySteamID(e.steamid)),
            c = o[0],
            u = o[1],
            l = Object(n.useState)(V.a.GetPersonaNameBySteamID(e.steamid)),
            d = l[0],
            m = l[1];
          return (
            Object(n.useEffect)(
              function () {
                if (!r) {
                  Object(s.b)(void 0, void 0, void 0, function () {
                    return Object(s.e)(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [
                            4,
                            V.a.LoadProfiles([
                              e.steamid.ConvertTo64BitString(),
                            ]),
                          ];
                        case 1:
                          return (
                            t.sent(),
                            a(H(e.steamid)),
                            u(V.a.GetProfileURLBySteamID(e.steamid)),
                            m(V.a.GetPersonaNameBySteamID(e.steamid)),
                            [2]
                          );
                      }
                    });
                  });
                }
              },
              [e.steamid, r]
            ),
            i.a.createElement(
              "div",
              { className: q.AvatarCtn },
              i.a.createElement(
                "a",
                {
                  href: c,
                  "data-miniprofile": "s" + e.steamid.ConvertTo64BitString(),
                },
                i.a.createElement(k.b, {
                  persona: r,
                  size: e.size,
                  statusPosition: "bottom",
                })
              ),
              i.a.createElement(
                "div",
                { className: q.NameAndProps },
                Boolean(e.bShowName) &&
                  i.a.createElement(
                    "a",
                    {
                      href: c,
                      "data-miniprofile":
                        "s" + e.steamid.ConvertTo64BitString(),
                    },
                    d
                  ),
                e.children
              )
            )
          );
        },
        Y = r("5eAM"),
        J = r("BFsE"),
        X = r("6Y59"),
        $ = r("+d9t"),
        Q = r("IzPI"),
        Z = r("M7Y6"),
        ee = Object(_.a)(function (e) {
          var t = e.broadcasterSteamID,
            r = t.ConvertTo64BitString(),
            a = m.a.GetOrCreateBroadcastInfo(r),
            o = Object(n.useState)(
              Y.a.GetAppLinkInfo(Number.parseInt(a.m_strAppId))
            ),
            c = o[0],
            u = o[1];
          return (
            Object(n.useEffect)(
              function () {
                var e = Number.parseInt(a.m_strAppId);
                if ((!c || c.appid != e) && e > 0) {
                  Object(s.b)(void 0, void 0, void 0, function () {
                    return Object(s.e)(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [4, Y.a.LoadAppLinkInfo([e])];
                        case 1:
                          return t.sent(), u(Y.a.GetAppLinkInfo(e)), [2];
                      }
                    });
                  });
                }
              },
              [a.m_strAppId, c]
            ),
            i.a.createElement(
              z.a,
              null,
              i.a.createElement(
                "div",
                { className: Z.ProfileCtn },
                i.a.createElement(
                  "a",
                  {
                    href: Object(Q.g)(
                      b.c.STORE_BASE_URL + (c ? "app/" + c.appid : "")
                    ),
                    className: Z.GameCapsule,
                  },
                  i.a.createElement("img", { src: c ? c.capsule : "" })
                ),
                i.a.createElement(
                  "div",
                  { className: Z.StreamDetailsCtn },
                  i.a.createElement(
                    "div",
                    { className: Z.GameAndOptionsCtn },
                    i.a.createElement(
                      "div",
                      { className: Z.GameAndViewersCtn },
                      i.a.createElement(te, { broadcasterSteamID: t }),
                      i.a.createElement(
                        "div",
                        { className: Z.ViewerCount },
                        Object(E.l)(
                          "#Broadcast_ViewerCount",
                          a.m_nViewerCount.toLocaleString()
                        )
                      )
                    ),
                    i.a.createElement(re, { broadcasterSteamID: t })
                  ),
                  i.a.createElement(K, {
                    steamid: t,
                    size: "Medium",
                    bShowName: !0,
                  })
                )
              )
            )
          );
        }),
        te = Object(_.a)(function (e) {
          var t = e.broadcasterSteamID.ConvertTo64BitString(),
            r = m.a.GetOrCreateBroadcastInfo(t),
            a = Object(n.useState)(
              Y.a.GetAppLinkInfo(Number.parseInt(r.m_strAppId))
            ),
            o = a[0],
            c = a[1];
          return (
            Object(n.useEffect)(
              function () {
                var e = Number.parseInt(r.m_strAppId);
                if ((!o || o.appid != e) && e > 0) {
                  Object(s.b)(void 0, void 0, void 0, function () {
                    return Object(s.e)(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [4, Y.a.LoadAppLinkInfo([e])];
                        case 1:
                          return t.sent(), c(Y.a.GetAppLinkInfo(e)), [2];
                      }
                    });
                  });
                }
              },
              [r.m_strAppId, o]
            ),
            i.a.createElement(
              "div",
              { className: Z.BroadcastTitleCtn },
              Object(E.f)("#Broadcast_Playing"),
              i.a.createElement(
                "a",
                {
                  href: Object(Q.g)(
                    b.c.STORE_BASE_URL + (o ? "app/" + o.appid : "")
                  ),
                },
                Boolean(r.m_strAppTitle) ? r.m_strAppTitle : o ? o.title : ""
              ),
              Boolean(r.m_strTitle && r.m_strTitle.length > 0) &&
                i.a.createElement("span", null, " - ", r.m_strTitle)
            )
          );
        }),
        re = Object(_.a)(function (e) {
          var t = e.broadcasterSteamID,
            r = t.ConvertTo64BitString();
          m.a.GetOrCreateBroadcastInfo(r);
          return i.a.createElement(
            "div",
            { className: Z.BroadcastUserActionsCtn },
            Boolean(
              b.h.steamid != e.broadcasterSteamID.ConvertTo64BitString()
            ) &&
              i.a.createElement(
                M.d,
                {
                  "data-tooltip-text": Object(E.f)(
                    "#Broadcast_User_Report_ttip"
                  ),
                  onClick: function (e) {
                    b.h.logged_in
                      ? Object(W.d)(
                          i.a.createElement(ne, { broadcasterSteamID: t }),
                          Object(U.m)(e)
                        )
                      : Object(W.d)(
                          i.a.createElement(T.d, {
                            strTitle: Object(E.f)(
                              "#EventDisplay_Share_NotLoggedIn"
                            ),
                            strDescription: Object(E.f)(
                              "#EventDisplay_Share_NotLoggedIn_Description"
                            ),
                            strOKButtonText: Object(E.f)("#MobileLogin_SignIn"),
                            onOK: function () {
                              return Object(J.a)();
                            },
                          }),
                          Object(U.m)(e)
                        );
                  },
                },
                i.a.createElement(X.B, null)
              ),
            i.a.createElement(
              M.d,
              {
                "data-tooltip-text": Object(E.f)("#Broadcast_User_FAQ_ttip"),
                onClick: function (e) {
                  return Object($.d)(
                    e,
                    "https://support.steampowered.com/kb_article.php?ref=6730-TOAK-6497"
                  );
                },
              },
              i.a.createElement(X.F, null)
            )
          );
        }),
        ne = function (e) {
          var t = Object(n.useState)(""),
            r = t[0],
            a = t[1];
          return i.a.createElement(
            T.d,
            {
              strTitle: Object(E.f)("#Broadcast_ReportItem_Title"),
              strDescription: Object(E.f)("#Broadcast_ReportItem_Description"),
              onCancel: e.closeModal,
              bOKDisabled: 0 == r.trim().length,
              onOK: function () {
                return Object(s.b)(void 0, void 0, void 0, function () {
                  return Object(s.e)(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, p.Get().SendUserReportOnBroadcast(r)];
                      case 1:
                        return t.sent(), e.closeModal && e.closeModal(), [2];
                    }
                  });
                });
              },
            },
            i.a.createElement("textarea", {
              value: r,
              onChange: function (e) {
                return a(e.currentTarget.value);
              },
              rows: 10,
              cols: 80,
            })
          );
        },
        ie = r("Pa9b"),
        ae = r("0OaU"),
        oe = function (e) {
          if (!b.h.is_support) return null;
          var t = function (t, r) {
              Object(W.d)(
                i.a.createElement(se, {
                  broadcastSteamID: e.broadcastSteamID,
                  strAction: r,
                }),
                Object(U.m)(t)
              );
            },
            r =
              "https://steamsupport.valvesoftware.com/account/overview/" +
              e.broadcastSteamID.ConvertTo64BitString();
          return i.a.createElement(
            "div",
            {
              className: Object(I.a)(ie.AdminControls, j.a.ValveOnlyBackground),
            },
            i.a.createElement("div", null, "(VO) Support Tools"),
            i.a.createElement(
              M.d,
              {
                onClick: function (e) {
                  return t(e, "frontpage");
                },
              },
              "Remove from Front Page"
            ),
            i.a.createElement(
              M.d,
              {
                onClick: function (e) {
                  return t(e, "ban");
                },
              },
              "Ban from Broadcasting"
            ),
            i.a.createElement(
              M.d,
              {
                onClick: function (t) {
                  Object(W.d)(
                    i.a.createElement(ce, { steamid: e.broadcastSteamID }),
                    Object(U.m)(t)
                  );
                },
              },
              "Make Unbannable"
            ),
            i.a.createElement(
              M.d,
              {
                onClick: function (e) {
                  return Object($.d)(e, r);
                },
              },
              "Go to Support Page"
            )
          );
        },
        se = Object(_.a)(function (e) {
          e.broadcastSteamID;
          var t = e.strAction,
            r = Object(n.useState)(1),
            a = r[0],
            o = r[1],
            c = Object(n.useState)(!1),
            l = c[0],
            d = c[1],
            m = Object(n.useState)(!1),
            f = m[0],
            b = m[1],
            _ = Object(n.useState)(!1),
            h = _[0],
            B = _[1],
            y = Object(n.useRef)(null);
          Object(n.useEffect)(function () {
            return function () {
              y.current && y.current("BroadcastConfirmBanAction: unmounting");
            };
          }, []);
          var g = function () {
            return e.closeModal && e.closeModal();
          };
          return i.a.createElement(
            z.a,
            null,
            i.a.createElement(
              T.h,
              { onEscKeypress: g },
              i.a.createElement(
                M.f,
                null,
                i.a.createElement(
                  M.k,
                  null,
                  "Remove Broadcast From Front Page"
                ),
                i.a.createElement(
                  M.b,
                  null,
                  i.a.createElement(
                    M.c,
                    null,
                    i.a.createElement(
                      "p",
                      null,
                      "frontpage" == t
                        ? "How long should we prevent the broadcast from appearing in community or store?"
                        : "How long should we prevent the user from Broadcast at all on Steam?"
                    ),
                    i.a.createElement(
                      "div",
                      null,
                      i.a.createElement(M.h, {
                        rgOptions: [
                          { label: "1 Day", data: 1 },
                          { label: "1 Week", data: 7 },
                          { label: "1 Month", data: 30 },
                          { label: "6 Months", data: 180 },
                          { label: "1 Year", data: 365 },
                        ],
                        selectedOption: a,
                        onChange: function (e) {
                          return o(e.data);
                        },
                      }),
                      Boolean(l) && i.a.createElement(ae.a, null, " "),
                      Boolean(f) &&
                        i.a.createElement(
                          "div",
                          null,
                          h
                            ? "Successfully Completed Request"
                            : "Failed to complete request, check browser console and/or try again later"
                        )
                    )
                  )
                ),
                i.a.createElement(
                  M.j,
                  null,
                  f
                    ? i.a.createElement(
                        M.q,
                        { onClick: g },
                        Object(E.f)("#Button_Dismiss")
                      )
                    : i.a.createElement(
                        M.v,
                        null,
                        i.a.createElement(
                          M.d,
                          { onClick: g },
                          Object(E.f)("#Button_Cancel")
                        ),
                        i.a.createElement(
                          M.q,
                          {
                            onClick: function () {
                              return Object(s.b)(
                                void 0,
                                void 0,
                                void 0,
                                function () {
                                  var e, r;
                                  return Object(s.e)(this, function (n) {
                                    switch (n.label) {
                                      case 0:
                                        (e = !1), d(!0), (n.label = 1);
                                      case 1:
                                        return (
                                          n.trys.push([1, , 3, 4]),
                                          y.current && y.current(),
                                          (r = u.a.CancelToken.source()),
                                          (y.current = r.cancel),
                                          [
                                            4,
                                            p
                                              .Get()
                                              .SetBroadcasterRestrictions(
                                                t,
                                                a,
                                                r
                                              ),
                                          ]
                                        );
                                      case 2:
                                        return (
                                          n.sent(), r.token.reason || !0, [3, 4]
                                        );
                                      case 3:
                                        return d(!1), b(!0), B(e), [7];
                                      case 4:
                                        return [2];
                                    }
                                  });
                                }
                              );
                            },
                          },
                          Object(E.f)("#Button_Confirm")
                        )
                      )
                )
              )
            )
          );
        }),
        ce = function (e) {
          var t = Object(n.useState)(!1),
            r = t[0],
            a = t[1],
            o = Object(n.useState)(!1),
            c = o[0],
            l = o[1],
            d = Object(n.useState)(!1),
            m = d[0],
            f = d[1],
            b = Object(n.useRef)(null);
          Object(n.useEffect)(function () {
            return function () {
              b.current && b.current("BroadcastMakeUnbannable: unmounting");
            };
          }, []);
          var _ = function () {
            return e.closeModal && e.closeModal();
          };
          return i.a.createElement(
            z.a,
            null,
            i.a.createElement(
              T.h,
              { onEscKeypress: _ },
              i.a.createElement(
                M.f,
                null,
                i.a.createElement(M.k, null, "Make Broadcast Unbannable"),
                i.a.createElement(
                  M.b,
                  null,
                  i.a.createElement(
                    M.c,
                    null,
                    i.a.createElement(
                      "p",
                      null,
                      "Prevent automatic, report based banning changes to this strema visibility the stream for 1 week?"
                    ),
                    i.a.createElement(
                      "div",
                      null,
                      Boolean(r) && i.a.createElement(ae.a, null, " "),
                      Boolean(c) &&
                        i.a.createElement(
                          "div",
                          null,
                          m
                            ? "Successfully Set Unbannable"
                            : "Failed to make Unbannable"
                        )
                    )
                  )
                ),
                i.a.createElement(
                  M.j,
                  null,
                  c
                    ? i.a.createElement(
                        M.q,
                        { onClick: _ },
                        Object(E.f)("#Button_Dismiss")
                      )
                    : i.a.createElement(
                        M.v,
                        null,
                        i.a.createElement(
                          M.d,
                          { onClick: _ },
                          Object(E.f)("#Button_Cancel")
                        ),
                        i.a.createElement(
                          M.q,
                          {
                            onClick: function () {
                              return Object(s.b)(
                                void 0,
                                void 0,
                                void 0,
                                function () {
                                  var e, t;
                                  return Object(s.e)(this, function (r) {
                                    switch (r.label) {
                                      case 0:
                                        a(!0), (e = !1), (r.label = 1);
                                      case 1:
                                        return (
                                          r.trys.push([1, , 3, 4]),
                                          b.current && b.current(),
                                          (t = u.a.CancelToken.source()),
                                          (b.current = t.cancel),
                                          [4, p.Get().SetUnBannable(t)]
                                        );
                                      case 2:
                                        return (e = r.sent()), [3, 4];
                                      case 3:
                                        return a(!1), l(!0), f(e), [7];
                                      case 4:
                                        return [2];
                                    }
                                  });
                                }
                              );
                            },
                          },
                          Object(E.f)("#Button_Confirm")
                        )
                      )
                )
              )
            )
          );
        },
        ue = Object(_.a)(function (e) {
          var t,
            r = p.Get().GetBroadcasterSteamID(),
            n = r.ConvertTo64BitString(),
            a = Object(O.d)("muted", !0),
            o = a[0],
            s = (a[1], m.a.GetBroadcast(n)),
            c = m.a.GetOrCreateBroadcastInfo(n);
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              "div",
              { className: Object(I.a)(D.BroadcastPage) },
              i.a.createElement(
                "div",
                { className: Object(I.a)(g.a.BroadcastAndChat) },
                Boolean(!p.Get().BShowOnlyChat()) &&
                  i.a.createElement(
                    z.a,
                    null,
                    i.a.createElement(
                      "div",
                      { className: Object(I.a)(g.a.wrapper) },
                      i.a.createElement(
                        "div",
                        {
                          className: Object(I.a)(
                            ((t = {}),
                            (t[g.a.video_placeholder] = !0),
                            (t.video_placeholder_trgt = !0),
                            (t[g.a.NoChat] = p.Get().BShowOnlyVideo()),
                            t)
                          ),
                        },
                        i.a.createElement(
                          "div",
                          { className: g.a.BroadcastPlayerContainer },
                          i.a.createElement(
                            z.a,
                            null,
                            i.a.createElement(B.a, {
                              steamIDBroadcast: n,
                              watchLocation: 5,
                              bStartMuted: o,
                            })
                          )
                        )
                      )
                    )
                  ),
                Boolean(!p.Get().BShowOnlyVideo()) &&
                  i.a.createElement(
                    "div",
                    { className: g.a.detail_chat_ctn },
                    i.a.createElement(
                      "div",
                      { className: g.a.ChatContainer },
                      i.a.createElement(
                        z.a,
                        null,
                        i.a.createElement(h.a, {
                          emoticonStore: v.g,
                          watchLocation: 6,
                          steamID: n,
                          broadcastID: s ? s.m_ulBroadcastID : void 0,
                        })
                      )
                    )
                  )
              ),
              Boolean(!p.Get().BShowInIframe()) &&
                i.a.createElement(le, {
                  broadcasterSteamID: r,
                  broadcastInfo: c,
                })
            )
          );
        }),
        le = Object(_.a)(function (e) {
          var t = e.broadcasterSteamID,
            r = e.broadcastInfo,
            a = Object(n.useState)(null),
            o = a[0],
            c = a[1];
          return (
            Object(n.useEffect)(
              function () {
                Object(s.b)(void 0, void 0, void 0, function () {
                  var e;
                  return Object(s.e)(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [
                          4,
                          S.a.LoadOGGClanInfoForAppID(
                            Number.parseInt(r.m_strAppId)
                          ),
                        ];
                      case 1:
                        return (e = t.sent()), c(e), [2];
                    }
                  });
                });
              },
              [r.m_strAppId]
            ),
            i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(ee, { broadcasterSteamID: t }),
              i.a.createElement(de, { steamid: t }),
              Boolean(b.h.is_support) &&
                i.a.createElement(
                  "div",
                  null,
                  i.a.createElement(oe, { broadcastSteamID: t }),
                  i.a.createElement(
                    "div",
                    {
                      className: Object(I.a)(
                        j.a.ValveOnlyBackground,
                        D.DebugCtn
                      ),
                    },
                    i.a.createElement(G, null)
                  )
                ),
              Boolean(r.m_strAppId && Number.parseInt(r.m_strAppId) > 7) &&
                i.a.createElement(
                  "div",
                  { className: D.GameInfoCtn },
                  i.a.createElement(
                    "div",
                    { className: D.GameAboutTitleCtn },
                    i.a.createElement(
                      "div",
                      { className: D.GameAboutTitle },
                      " ",
                      Object(E.f)("#Broadcast_About_Game"),
                      " "
                    ),
                    i.a.createElement(
                      "div",
                      { className: j.a.EventSectionSpacer },
                      " "
                    )
                  ),
                  i.a.createElement(
                    "div",
                    { className: D.GameInfo },
                    i.a.createElement(F.m, {
                      id: Number.parseInt(r.m_strAppId),
                      type: "game",
                    })
                  )
                ),
              Boolean(o) &&
                i.a.createElement(
                  "div",
                  { className: D.RelatedEvents },
                  i.a.createElement(C.a, {
                    clanAccountID: o.clanAccountID,
                    trackingLocation: 6,
                    partnerEventStore: w.d,
                    bViewAllShowInfiniteScroll: !0,
                  })
                )
            )
          );
        }),
        de = Object(_.a)(function (e) {
          var t = Object(n.useRef)(null),
            r = m.a.GetOrCreateBroadcastInfo(e.steamid.ConvertTo64BitString()),
            a = Object(n.useState)(r.m_strTitle),
            o = a[0],
            c = a[1],
            l = Object(n.useState)(""),
            d = l[0],
            f = l[1],
            _ = Object(n.useState)(null),
            h = _[0],
            B = _[1];
          if (
            (Object(n.useEffect)(
              function () {
                return (
                  c(r.m_strTitle),
                  function () {
                    t.current && t.current("BroadcastControls: unmounting");
                  }
                );
              },
              [r.m_strTitle]
            ),
            b.h.accountid != e.steamid.GetAccountID())
          )
            return null;
          return i.a.createElement(
            "div",
            { className: D.ControlCtn },
            i.a.createElement(
              "div",
              { className: D.ControlsTitle },
              Object(E.f)("#Broadcaster_Control_title")
            ),
            i.a.createElement(
              "div",
              { className: D.TitleInput },
              i.a.createElement(
                "div",
                { className: D.Options },
                i.a.createElement(M.l, {
                  type: "text",
                  label: Object(E.f)("#Broadcast_title_title"),
                  onChange: function (e) {
                    return c(e.currentTarget.value || "");
                  },
                  placeholder: Object(E.f)("#Broadcast_title_placeholder"),
                  value: o,
                }),
                i.a.createElement(M.l, {
                  type: "text",
                  label: Object(E.f)("#Broadcast_Control_matchid"),
                  onChange: function (e) {
                    return f(e.currentTarget.value || "");
                  },
                  value: d,
                }),
                i.a.createElement(
                  M.d,
                  {
                    onClick: function () {
                      return Object(s.b)(void 0, void 0, void 0, function () {
                        var e, r;
                        return Object(s.e)(this, function (n) {
                          switch (n.label) {
                            case 0:
                              return (
                                t.current && t.current(),
                                (e = u.a.CancelToken.source()),
                                (t.current = e.cancel),
                                [4, p.Get().UpdateBroadcastSettings(d, o, e)]
                              );
                            case 1:
                              return (
                                (r = n.sent()),
                                e.token.reason ||
                                  B(
                                    Object(E.f)(
                                      r
                                        ? "#Broadcast_Control_Success"
                                        : "#Broadcast_Control_Failure"
                                    )
                                  ),
                                [2]
                              );
                          }
                        });
                      });
                    },
                    "data-tooltip-text": Object(E.f)(
                      "#Broadcast_save_title_ttip"
                    ),
                  },
                  Object(E.f)("#Broadcast_save_changes")
                )
              ),
              i.a.createElement(
                "div",
                { className: D.StopCtn },
                i.a.createElement(
                  M.d,
                  {
                    onClick: function (e) {
                      Object(W.d)(
                        i.a.createElement(T.d, {
                          strTitle: Object(E.f)(
                            "#Broadcast_Control_StopBroadcast"
                          ),
                          strDescription: Object(E.f)(
                            "#EventEditor_GenericAreYouSure"
                          ),
                          onOK: function () {
                            return Object(s.b)(
                              void 0,
                              void 0,
                              void 0,
                              function () {
                                var e, r;
                                return Object(s.e)(this, function (n) {
                                  switch (n.label) {
                                    case 0:
                                      return (
                                        t.current && t.current(),
                                        (e = u.a.CancelToken.source()),
                                        (t.current = e.cancel),
                                        [4, p.Get().StopBroadcast(e)]
                                      );
                                    case 1:
                                      return (
                                        (r = n.sent()),
                                        e.token.reason ||
                                          B(
                                            Object(E.f)(
                                              r
                                                ? "#Broadcast_Control_StopSuccess"
                                                : "#Broadcast_Control_StopFailure"
                                            )
                                          ),
                                        [2]
                                      );
                                  }
                                });
                              }
                            );
                          },
                        }),
                        Object(U.m)(e)
                      );
                    },
                  },
                  Object(E.f)("#Broadcast_Control_StopBroadcast")
                ),
                Boolean(h) && i.a.createElement("div", null, h)
              )
            )
          );
        }),
        me = r("9w6b"),
        fe = function (e) {
          return "/broadcast/(watch|watchnew)/" + e;
        };
      function be(e) {
        return (
          Object(n.useEffect)(function () {
            me.a.InitGlobal();
          }, []),
          i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              a.e,
              null,
              i.a.createElement(a.c, {
                path: fe(":steamid_or_user_vanity"),
                render: function (e) {
                  return i.a.createElement(ue, {
                    strSteamID: e.match.params.steamid_or_user_vanity,
                  });
                },
              }),
              i.a.createElement(a.c, { component: o.b })
            )
          )
        );
      }
    },
    Gpul: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return d;
      }),
        r.d(t, "b", function () {
          return m;
        });
      var n = r("mrSG"),
        i = r("q1tI"),
        a = r("TyAF"),
        o = r("jUCX"),
        s = r("exH9"),
        c = r("WeG9"),
        u = r.n(c),
        l = r("lkRc"),
        d = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.strAvatarURL,
                r = e.size,
                a = e.className,
                o = e.statusStyle,
                c = e.statusPosition,
                l = e.children,
                d = Object(n.f)(e, [
                  "strAvatarURL",
                  "size",
                  "className",
                  "statusStyle",
                  "statusPosition",
                  "children",
                ]);
              return i.createElement(
                "div",
                Object(n.a)(
                  {
                    className: Object(s.a)(
                      u.a.avatarHolder,
                      "avatarHolder",
                      "no-drag",
                      r || "Medium",
                      a
                    ),
                  },
                  d
                ),
                i.createElement("div", {
                  className: Object(s.a)(u.a.avatarStatus, "avatarStatus", c),
                  style: o,
                }),
                i.createElement("img", {
                  className: Object(s.a)(u.a.avatar, "avatar"),
                  src: t,
                  draggable: !1,
                }),
                l
              );
            }),
            t
          );
        })(i.Component),
        m = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.persona,
                r = e.size,
                a = e.animatedAvatar,
                c = e.className,
                u = Object(n.f)(e, [
                  "persona",
                  "size",
                  "animatedAvatar",
                  "className",
                ]),
                m = "";
              return (
                a && a.image_small && 0 != a.image_small.length
                  ? (m =
                      l.c.MEDIA_CDN_COMMUNITY_URL + "images/" + a.image_small)
                  : t
                  ? ((m = t.avatar_url_medium),
                    "Small" == r || "X-Small" == r
                      ? (m = t.avatar_url)
                      : ("Large" != r && "X-Large" != r && "FillArea" != r) ||
                        (m = t.avatar_url_full))
                  : ((m =
                      l.c.MEDIA_CDN_COMMUNITY_URL +
                      "images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"),
                    "Small" == r || "X-Small" == r
                      ? (m =
                          l.c.MEDIA_CDN_COMMUNITY_URL +
                          "images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg")
                      : ("Large" != r && "X-Large" != r && "FillArea" != r) ||
                        (m =
                          l.c.MEDIA_CDN_COMMUNITY_URL +
                          "images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg")),
                i.createElement(
                  d,
                  Object(n.a)(
                    {
                      strAvatarURL: m,
                      size: r,
                      className: Object(s.a)(Object(o.c)(t), c),
                    },
                    u
                  )
                )
              );
            }),
            (t = Object(n.c)([a.a], t))
          );
        })(i.Component),
        f = Object(a.a)(function (e) {
          var t = e.profileItem,
            r = e.className,
            a = e.bDisableAnimation,
            o = Object(n.f)(e, [
              "profileItem",
              "className",
              "bDisableAnimation",
            ]);
          if (!t || !t.image_small || 0 == t.image_small.length) return null;
          var c = a ? t.image_large : t.image_small;
          return (
            c || (c = t.image_small),
            c.startsWith("https://") ||
              (c = l.c.MEDIA_CDN_COMMUNITY_URL + "images/" + c),
            i.createElement(
              "div",
              Object(n.a)(
                { className: Object(s.a)(u.a.avatarFrame, r, "avatarFrame") },
                o
              ),
              i.createElement("img", { className: u.a.avatarFrameImg, src: c })
            )
          );
        });
      i.Component;
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
    eN6m: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return br;
      });
      var n = r("mrSG"),
        i = r("2vnA"),
        a = r("TyAF"),
        o = r("q1tI"),
        s = r.n(o),
        c = r("TtDX"),
        u = r("vDqi"),
        l = r.n(u),
        d = r("A5MU"),
        m = r("bxBv"),
        f = r("u2yL"),
        b = r("WBba"),
        p = r("kLLr"),
        _ = r("hRO2"),
        h = r("OS8t"),
        B = _.Message;
      var y = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_id || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      thumbnail_upload_address: {
                        n: 2,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      thumbnail_upload_token: {
                        n: 3,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      thumbnail_interval_seconds: {
                        n: 4,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      heartbeat_interval_seconds: {
                        n: 5,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_BeginBroadcastSession_Response";
            }),
            t
          );
        })(B),
        g = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_EndBroadcastSession_Response";
            }),
            t
          );
        })(B),
        v = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.upload_token || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      upload_token: {
                        n: 1,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      upload_address: {
                        n: 2,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      broadcast_upload_id: {
                        n: 3,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      enable_replay: {
                        n: 6,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                      http_address: {
                        n: 7,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_StartBroadcastUpload_Response";
            }),
            t
          );
        })(B),
        S = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_id || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      upload_token: {
                        n: 2,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      upload_address: {
                        n: 3,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      http_address: {
                        n: 4,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      broadcast_upload_id: {
                        n: 5,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      heartbeat_interval_seconds: {
                        n: 6,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      is_rtmp: { n: 7, br: h.d.readBool, bw: h.h.writeBool },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_BroadcastUploadStarted_Notification";
            }),
            t
          );
        })(B),
        w = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.gameid || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      gameid: {
                        n: 1,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      title: { n: 2, br: h.d.readString, bw: h.h.writeString },
                      num_viewers: {
                        n: 3,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      permission: {
                        n: 4,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                      is_rtmp: { n: 5, br: h.d.readBool, bw: h.h.writeBool },
                      seconds_delay: {
                        n: 6,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                      is_publisher: {
                        n: 7,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                      thumbnail_url: {
                        n: 8,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      update_interval: {
                        n: 9,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                      is_uploading: {
                        n: 10,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                      duration: {
                        n: 11,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      is_replay: { n: 12, br: h.d.readBool, bw: h.h.writeBool },
                      is_capturing_vod: {
                        n: 13,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                      is_store_whitelisted: {
                        n: 14,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastStatus_Response";
            }),
            t
          );
        })(B),
        M = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.thumbnail_url || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      thumbnail_url: {
                        n: 1,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      update_interval: {
                        n: 2,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                      num_viewers: {
                        n: 3,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                      duration: { n: 4, br: h.d.readInt32, bw: h.h.writeInt32 },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastThumbnail_Response";
            }),
            t
          );
        })(B),
        z = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.response || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      response: { n: 1, br: h.d.readEnum, bw: h.h.writeEnum },
                      mpd_url: {
                        n: 2,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      broadcast_id: {
                        n: 3,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      gameid: {
                        n: 4,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      title: { n: 5, br: h.d.readString, bw: h.h.writeString },
                      num_viewers: {
                        n: 6,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      permission: {
                        n: 7,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                      is_rtmp: { n: 8, br: h.d.readBool, bw: h.h.writeBool },
                      seconds_delay: {
                        n: 9,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                      viewer_token: {
                        n: 10,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      hls_m3u8_master_url: {
                        n: 11,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      heartbeat_interval: {
                        n: 12,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                      thumbnail_url: {
                        n: 13,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      is_webrtc: { n: 14, br: h.d.readBool, bw: h.h.writeBool },
                      webrtc_session_id: {
                        n: 15,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      webrtc_offer_sdp: {
                        n: 16,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      webrtc_turn_server: {
                        n: 17,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      is_replay: { n: 18, br: h.d.readBool, bw: h.h.writeBool },
                      duration: {
                        n: 19,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                      cdn_auth_url_parameters: {
                        n: 20,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WatchBroadcast_Response";
            }),
            t
          );
        })(B);
      var C = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.success || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      success: { n: 1, br: h.d.readBool, bw: h.h.writeBool },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_InviteToBroadcast_Response";
            }),
            t
          );
        })(B),
        O = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_SendBroadcastStateToServer_Response";
            }),
            t
          );
        })(B),
        R = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.steamid || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      state: { n: 2, br: h.d.readEnum, bw: h.h.writeEnum },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_BroadcastViewerState_Notification";
            }),
            t
          );
        })(B);
      var j,
        F,
        T = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_id || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WaitingBroadcastViewer_Notification";
            }),
            t
          );
        })(B),
        W = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_id || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      broadcast_relay_id: {
                        n: 2,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      upload_result: {
                        n: 3,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      too_many_poor_uploads: {
                        n: 4,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_StopBroadcastUpload_Notification";
            }),
            t
          );
        })(B),
        I = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_id || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_SessionClosed_Notification";
            }),
            t
          );
        })(B),
        U = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_id || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      num_viewers: {
                        n: 2,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_BroadcastStatus_Notification";
            }),
            t
          );
        })(B),
        E = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      broadcast_channel_name: {
                        n: 2,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      broadcast_channel_avatar: {
                        n: 3,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_BroadcastChannelLive_Notification";
            }),
            t
          );
        })(B),
        N = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.thumbnail_upload_token || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      thumbnail_upload_token: {
                        n: 1,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      thumbnail_broadcast_session_id: {
                        n: 2,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      thumbnail_data: {
                        n: 3,
                        br: h.d.readBytes,
                        bw: h.h.writeBytes,
                      },
                      thumbnail_width: {
                        n: 4,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      thumbnail_height: {
                        n: 5,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_SendThumbnailToRelay_Notification";
            }),
            t
          );
        })(B),
        P = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcaster_steamid || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcaster_steamid: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_ViewerBroadcastInvite_Notification";
            }),
            t
          );
        })(B),
        x = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.chat_id || h.a(t.M()),
              B.initialize(n, r, 0, -1, [4], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      view_url_template: {
                        n: 3,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      flair_group_ids: {
                        n: 4,
                        r: !0,
                        q: !0,
                        br: h.d.readUint32,
                        bw: h.h.writeRepeatedUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastChatInfo_Response";
            }),
            t
          );
        })(B),
        G = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.chat_id || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      message: {
                        n: 2,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      instance_id: {
                        n: 3,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      language: {
                        n: 4,
                        d: 0,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      country_code: {
                        n: 5,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_PostChatMessage_Request";
            }),
            t
          );
        })(B),
        A = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.persona_name || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      persona_name: {
                        n: 1,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      in_game: { n: 2, br: h.d.readBool, bw: h.h.writeBool },
                      result: { n: 3, br: h.d.readInt32, bw: h.h.writeInt32 },
                      cooldown_time_seconds: {
                        n: 4,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_PostChatMessage_Response";
            }),
            t
          );
        })(B),
        D = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.chat_id || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      flair: { n: 2, br: h.d.readString, bw: h.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_UpdateChatMessageFlair_Request";
            }),
            t
          );
        })(B),
        L = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.result || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      result: { n: 1, br: h.d.readInt32, bw: h.h.writeInt32 },
                      chat_id: {
                        n: 2,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      flair: { n: 3, br: h.d.readString, bw: h.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_UpdateChatMessageFlair_Response";
            }),
            t
          );
        })(B),
        k = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.chat_id || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      user_steamid: {
                        n: 2,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      muted: { n: 3, br: h.d.readBool, bw: h.h.writeBool },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_MuteBroadcastChatUser_Request";
            }),
            t
          );
        })(B),
        V = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_MuteBroadcastChatUser_Response";
            }),
            t
          );
        })(B),
        q = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.chat_id || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      user_steamid: {
                        n: 2,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_RemoveUserChatText_Request";
            }),
            t
          );
        })(B),
        H = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_RemoveUserChatText_Response";
            }),
            t
          );
        })(B),
        K = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.persona_names || h.a(t.M()),
              B.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { persona_names: { n: 1, c: Y, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastChatUserNames_Response";
            }),
            t
          );
        })(B),
        Y = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.steam_id || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steam_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      persona: {
                        n: 2,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastChatUserNames_Response_PersonaName";
            }),
            t
          );
        })(B),
        J = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_clip_id || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_clip_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_StartBuildClip_Response";
            }),
            t
          );
        })(B),
        X = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBuildClipStatus_Response";
            }),
            t
          );
        })(B),
        $ = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_SetClipDetails_Response";
            }),
            t
          );
        })(B),
        Q = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_clip_id || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_clip_id: {
                        n: 1,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      video_id: {
                        n: 2,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      channel_id: {
                        n: 3,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      app_id: { n: 4, br: h.d.readUint32, bw: h.h.writeUint32 },
                      accountid_broadcaster: {
                        n: 5,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      accountid_clipmaker: {
                        n: 6,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      video_description: {
                        n: 7,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      start_time: {
                        n: 8,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      length_milliseconds: {
                        n: 9,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      thumbnail_path: {
                        n: 10,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetClipDetails_Response";
            }),
            t
          );
        })(B),
        Z = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_SetRTMPInfo_Response";
            }),
            t
          );
        })(B),
        ee = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_permission || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_permission: {
                        n: 1,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                      rtmp_host: {
                        n: 2,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      rtmp_token: {
                        n: 3,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      broadcast_delay: {
                        n: 4,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                      app_id: { n: 5, br: h.d.readUint32, bw: h.h.writeUint32 },
                      required_app_id: {
                        n: 6,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      broadcast_chat_permission: {
                        n: 7,
                        br: h.d.readEnum,
                        bw: h.h.writeEnum,
                      },
                      broadcast_buffer: {
                        n: 8,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                      steamid: {
                        n: 9,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      chat_rate_limit: {
                        n: 10,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      enable_replay: {
                        n: 11,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                      is_partner_chat_only: {
                        n: 12,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetRTMPInfo_Response";
            }),
            t
          );
        })(B),
        te = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.upload_stats || h.a(t.M()),
              B.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { upload_stats: { n: 1, c: re, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastUploadStats_Response";
            }),
            t
          );
        })(B),
        re = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.upload_result || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      upload_result: {
                        n: 1,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      time_stopped: {
                        n: 2,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      seconds_uploaded: {
                        n: 3,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      max_viewers: {
                        n: 4,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      resolution_x: {
                        n: 5,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      resolution_y: {
                        n: 6,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      avg_bandwidth: {
                        n: 7,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      total_bytes: {
                        n: 8,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      app_id: { n: 9, br: h.d.readUint32, bw: h.h.writeUint32 },
                      total_unique_viewers: {
                        n: 10,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      total_seconds_watched: {
                        n: 11,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      time_started: {
                        n: 12,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      upload_id: {
                        n: 13,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      local_address: {
                        n: 14,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      remote_address: {
                        n: 15,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      frames_per_second: {
                        n: 16,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      num_representations: {
                        n: 17,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      app_name: {
                        n: 18,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      is_replay: { n: 19, br: h.d.readBool, bw: h.h.writeBool },
                      session_id: {
                        n: 20,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastUploadStats_Response_UploadStats";
            }),
            t
          );
        })(B),
        ne = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.viewer_stats || h.a(t.M()),
              B.initialize(n, r, 0, -1, [1, 2], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      viewer_stats: { n: 1, c: ie, r: !0, q: !0 },
                      country_stats: { n: 2, c: ae, r: !0, q: !0 },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastViewerStats_Response";
            }),
            t
          );
        })(B),
        ie = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.time || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      time: { n: 1, br: h.d.readUint32, bw: h.h.writeUint32 },
                      num_viewers: {
                        n: 2,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastViewerStats_Response_ViewerStats";
            }),
            t
          );
        })(B),
        ae = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.country_code || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      country_code: {
                        n: 1,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      num_viewers: {
                        n: 2,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastViewerStats_Response_CountryStats";
            }),
            t
          );
        })(B),
        oe = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCStartResult_Response";
            }),
            t
          );
        })(B),
        se = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCStopped_Response";
            }),
            t
          );
        })(B),
        ce = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCSetAnswer_Response";
            }),
            t
          );
        })(B),
        ue = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.sdp_mid || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      sdp_mid: {
                        n: 1,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      sdp_mline_index: {
                        n: 2,
                        br: h.d.readInt32,
                        bw: h.h.writeInt32,
                      },
                      candidate: {
                        n: 3,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTC_Candidate";
            }),
            t
          );
        })(B),
        le = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCAddHostCandidate_Response";
            }),
            t
          );
        })(B),
        de = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return B.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCAddViewerCandidate_Response";
            }),
            t
          );
        })(B),
        me = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.candidate_generation || h.a(t.M()),
              B.initialize(n, r, 0, -1, [2], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      candidate_generation: {
                        n: 1,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      candidates: { n: 2, c: ue, r: !0, q: !0 },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCGetHostCandidates_Response";
            }),
            t
          );
        })(B),
        fe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_session_id || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_session_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCNeedTURNServer_Notification";
            }),
            t
          );
        })(B),
        be = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.turn_server || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      turn_server: {
                        n: 1,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCLookupTURNServer_Response";
            }),
            t
          );
        })(B),
        pe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_session_id || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_session_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      webrtc_session_id: {
                        n: 2,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      viewer_steamid: {
                        n: 3,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      viewer_token: {
                        n: 4,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCStart_Notification";
            }),
            t
          );
        })(B),
        _e = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_session_id || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_session_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      webrtc_session_id: {
                        n: 2,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      answer: { n: 3, br: h.d.readString, bw: h.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCSetAnswer_Notification";
            }),
            t
          );
        })(B),
        he = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_session_id || h.a(t.M()),
              B.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_session_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      webrtc_session_id: {
                        n: 2,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      candidate: { n: 3, c: ue },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CBroadcast_WebRTCAddViewerCandidate_Notification";
            }),
            t
          );
        })(B);
      !(function (e) {
        (e.BeginBroadcastSession = function (e, t) {
          return e.SendMsg("Broadcast.BeginBroadcastSession#1", t, y, {
            ePrivilege: 1,
          });
        }),
          (e.EndBroadcastSession = function (e, t) {
            return e.SendMsg("Broadcast.EndBroadcastSession#1", t, g, {
              ePrivilege: 1,
            });
          }),
          (e.StartBroadcastUpload = function (e, t) {
            return e.SendMsg("Broadcast.StartBroadcastUpload#1", t, v, {
              ePrivilege: 1,
            });
          }),
          (e.NotifyBroadcastUploadStop = function (e, t) {
            return e.SendNotification(
              "Broadcast.NotifyBroadcastUploadStop#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.WatchBroadcast = function (e, t) {
            return e.SendMsg("Broadcast.WatchBroadcast#1", t, z, {
              ePrivilege: 2,
            });
          }),
          (e.HeartbeatBroadcast = function (e, t) {
            return e.SendNotification("Broadcast.HeartbeatBroadcast#1", t, {
              ePrivilege: 2,
            });
          }),
          (e.StopWatchingBroadcast = function (e, t) {
            return e.SendNotification("Broadcast.StopWatchingBroadcast#1", t, {
              ePrivilege: 2,
            });
          }),
          (e.GetBroadcastStatus = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastStatus#1", t, w, {
              ePrivilege: 2,
            });
          }),
          (e.GetBroadcastThumbnail = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastThumbnail#1", t, M, {
              ePrivilege: 2,
            });
          }),
          (e.InviteToBroadcast = function (e, t) {
            return e.SendMsg("Broadcast.InviteToBroadcast#1", t, C, {
              ePrivilege: 1,
            });
          }),
          (e.SendBroadcastStateToServer = function (e, t) {
            return e.SendMsg("Broadcast.SendBroadcastStateToServer#1", t, O, {
              ePrivilege: 1,
            });
          }),
          (e.NotifyBroadcastSessionHeartbeat = function (e, t) {
            return e.SendNotification(
              "Broadcast.NotifyBroadcastSessionHeartbeat#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.GetBroadcastChatInfo = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastChatInfo#1", t, x, {
              ePrivilege: 2,
            });
          }),
          (e.PostChatMessage = function (e, t) {
            return e.SendMsg("Broadcast.PostChatMessage#1", t, A, {
              ePrivilege: 3,
            });
          }),
          (e.UpdateChatMessageFlair = function (e, t) {
            return e.SendMsg("Broadcast.UpdateChatMessageFlair#1", t, L, {
              ePrivilege: 1,
            });
          }),
          (e.MuteBroadcastChatUser = function (e, t) {
            return e.SendMsg("Broadcast.MuteBroadcastChatUser#1", t, V, {
              ePrivilege: 3,
            });
          }),
          (e.RemoveUserChatText = function (e, t) {
            return e.SendMsg("Broadcast.RemoveUserChatText#1", t, H, {
              ePrivilege: 3,
            });
          }),
          (e.GetBroadcastChatUserNames = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastChatUserNames#1", t, K, {
              ePrivilege: 1,
            });
          }),
          (e.StartBuildClip = function (e, t) {
            return e.SendMsg("Broadcast.StartBuildClip#1", t, J, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBuildClipStatus = function (e, t) {
            return e.SendMsg("Broadcast.GetBuildClipStatus#1", t, X, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SetClipDetails = function (e, t) {
            return e.SendMsg("Broadcast.SetClipDetails#1", t, $, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetClipDetails = function (e, t) {
            return e.SendMsg("Broadcast.GetClipDetails#1", t, Q, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SetRTMPInfo = function (e, t) {
            return e.SendMsg("Broadcast.SetRTMPInfo#1", t, Z, {
              ePrivilege: 1,
            });
          }),
          (e.GetRTMPInfo = function (e, t) {
            return e.SendMsg("Broadcast.GetRTMPInfo#1", t, ee, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.NotifyWebRTCHaveTURNServer = function (e, t) {
            return e.SendNotification(
              "Broadcast.NotifyWebRTCHaveTURNServer#1",
              t,
              { ePrivilege: 1 }
            );
          }),
          (e.WebRTCStartResult = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCStartResult#1", t, oe, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCStopped = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCStopped#1", t, se, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCSetAnswer = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCSetAnswer#1", t, ce, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCLookupTURNServer = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCLookupTURNServer#1", t, be, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCAddHostCandidate = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCAddHostCandidate#1", t, le, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCAddViewerCandidate = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCAddViewerCandidate#1", t, de, {
              ePrivilege: 1,
            });
          }),
          (e.WebRTCGetHostCandidates = function (e, t) {
            return e.SendMsg("Broadcast.WebRTCGetHostCandidates#1", t, me, {
              ePrivilege: 1,
            });
          }),
          (e.GetBroadcastUploadStats = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastUploadStats#1", t, te, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastViewerStats = function (e, t) {
            return e.SendMsg("Broadcast.GetBroadcastViewerStats#1", t, ne, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          });
      })(j || (j = {})),
        (function (e) {
          (e.NotifyBroadcastViewerStateHandler = {
            name: "BroadcastClient.NotifyBroadcastViewerState#1",
            request: R,
          }),
            (e.NotifyWaitingBroadcastViewerHandler = {
              name: "BroadcastClient.NotifyWaitingBroadcastViewer#1",
              request: T,
            }),
            (e.NotifyBroadcastUploadStartedHandler = {
              name: "BroadcastClient.NotifyBroadcastUploadStarted#1",
              request: S,
            }),
            (e.NotifyStopBroadcastUploadHandler = {
              name: "BroadcastClient.NotifyStopBroadcastUpload#1",
              request: W,
            }),
            (e.NotifySessionClosedHandler = {
              name: "BroadcastClient.NotifySessionClosed#1",
              request: I,
            }),
            (e.NotifyViewerBroadcastInviteHandler = {
              name: "BroadcastClient.NotifyViewerBroadcastInvite#1",
              request: P,
            }),
            (e.NotifyBroadcastStatusHandler = {
              name: "BroadcastClient.NotifyBroadcastStatus#1",
              request: U,
            }),
            (e.NotifyBroadcastChannelLiveHandler = {
              name: "BroadcastClient.NotifyBroadcastChannelLive#1",
              request: E,
            }),
            (e.SendThumbnailToRelayHandler = {
              name: "BroadcastClient.SendThumbnailToRelay#1",
              request: N,
            }),
            (e.NotifyWebRTCNeedTURNServerHandler = {
              name: "BroadcastClient.NotifyWebRTCNeedTURNServer#1",
              request: fe,
            }),
            (e.NotifyWebRTCStartHandler = {
              name: "BroadcastClient.NotifyWebRTCStart#1",
              request: pe,
            }),
            (e.NotifyWebRTCSetAnswerHandler = {
              name: "BroadcastClient.NotifyWebRTCSetAnswer#1",
              request: _e,
            }),
            (e.NotifyWebRTCAddViewerCandidateHandler = {
              name: "BroadcastClient.NotifyWebRTCAddViewerCandidate#1",
              request: he,
            });
        })(F || (F = {}));
      var Be = _.Message;
      var ye,
        ge = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || h.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_CreateBroadcastChannel_Response";
            }),
            t
          );
        })(Be),
        ve = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || h.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
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
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelID_Response";
            }),
            t
          );
        })(Be),
        Se = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return Be.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_SetBroadcastChannelProfile_Response";
            }),
            t
          );
        })(Be),
        we = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.unique_name || h.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
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
                      language: {
                        n: 4,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      headline: {
                        n: 5,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      summary: {
                        n: 6,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      schedule: {
                        n: 7,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      rules: { n: 8, br: h.d.readString, bw: h.h.writeString },
                      panels: { n: 9, br: h.d.readString, bw: h.h.writeString },
                      is_partnered: {
                        n: 10,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelProfile_Response";
            }),
            t
          );
        })(Be),
        Me = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.replace_image_hash || h.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      replace_image_hash: {
                        n: 1,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_SetBroadcastChannelImage_Response";
            }),
            t
          );
        })(Be),
        ze = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.images || h.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { images: { n: 1, c: Ce, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelImages_Response";
            }),
            t
          );
        })(Be),
        Ce = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.image_type || h.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      image_type: { n: 1, br: h.d.readEnum, bw: h.h.writeEnum },
                      image_path: {
                        n: 2,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      image_index: {
                        n: 3,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelImages_Response_Images";
            }),
            t
          );
        })(Be),
        Oe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.links || h.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { links: { n: 1, c: Re, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelLinks_Response";
            }),
            t
          );
        })(Be),
        Re = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.link_index || h.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      link_index: {
                        n: 1,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
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
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelLinks_Response_Links";
            }),
            t
          );
        })(Be),
        je = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return Be.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_SetBroadcastChannelLinkRegions_Response";
            }),
            t
          );
        })(Be),
        Fe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.is_live || h.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      is_live: { n: 1, br: h.d.readBool, bw: h.h.writeBool },
                      is_disabled: {
                        n: 2,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
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
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelStatus_Response";
            }),
            t
          );
        })(Be),
        Te = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || h.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
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
                      headline: {
                        n: 9,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
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
                      is_featured: {
                        n: 14,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                      is_disabled: {
                        n: 15,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                      is_live: { n: 16, br: h.d.readBool, bw: h.h.writeBool },
                      language: {
                        n: 17,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      reports: {
                        n: 18,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      is_partnered: {
                        n: 19,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "GetBroadcastChannelEntry";
            }),
            t
          );
        })(Be),
        We = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || h.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: Te, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetFollowedChannels_Response";
            }),
            t
          );
        })(Be),
        Ie = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || h.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: Te, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetSubscribedChannels_Response";
            }),
            t
          );
        })(Be),
        Ue = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.is_followed || h.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      is_followed: {
                        n: 1,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_FollowBroadcastChannel_Response";
            }),
            t
          );
        })(Be),
        Ee = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.is_subscribed || h.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      is_subscribed: {
                        n: 1,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_SubscribeBroadcastChannel_Response";
            }),
            t
          );
        })(Be),
        Ne = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return Be.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_ReportBroadcastChannel_Response";
            }),
            t
          );
        })(Be),
        Pe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.is_followed || h.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      is_followed: {
                        n: 1,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                      is_subscribed: {
                        n: 2,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelInteraction_Response";
            }),
            t
          );
        })(Be),
        xe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.appid || h.a(t.M()),
              Be.initialize(n, r, 0, -1, [5], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      appid: { n: 1, br: h.d.readUint32, bw: h.h.writeUint32 },
                      name: { n: 2, br: h.d.readString, bw: h.h.writeString },
                      image: { n: 3, br: h.d.readString, bw: h.h.writeString },
                      viewers: {
                        n: 4,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                      channels: { n: 5, c: Te, r: !0, q: !0 },
                      release_date: {
                        n: 6,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      developer: {
                        n: 7,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      publisher: {
                        n: 8,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_Game";
            }),
            t
          );
        })(Be),
        Ge = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || h.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: xe, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetGames_Response";
            }),
            t
          );
        })(Be),
        Ae = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || h.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: Te, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetChannels_Response";
            }),
            t
          );
        })(Be),
        De = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcasters || h.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { broadcasters: { n: 1, c: Le, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelBroadcasters_Response";
            }),
            t
          );
        })(Be),
        Le = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.steamid || h.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      name: { n: 2, br: h.d.readString, bw: h.h.writeString },
                      rtmp_token: {
                        n: 3,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster";
            }),
            t
          );
        })(Be),
        ke = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.issuer_steamid || h.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
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
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_ChatBan";
            }),
            t
          );
        })(Be),
        Ve = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || h.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
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
                      duration: {
                        n: 3,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      permanent: { n: 4, br: h.d.readBool, bw: h.h.writeBool },
                      undo: { n: 5, br: h.d.readBool, bw: h.h.writeBool },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AddChatBan_Request";
            }),
            t
          );
        })(Be),
        qe = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return Be.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AddChatBan_Response";
            }),
            t
          );
        })(Be),
        He = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || h.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: ke, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetChatBans_Response";
            }),
            t
          );
        })(Be),
        Ke = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || h.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      moderator_steamid: {
                        n: 2,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      undo: { n: 3, br: h.d.readBool, bw: h.h.writeBool },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AddChatModerator_Request";
            }),
            t
          );
        })(Be),
        Ye = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return Be.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AddChatModerator_Response";
            }),
            t
          );
        })(Be),
        Je = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || h.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetChatModerators_Request";
            }),
            t
          );
        })(Be),
        Xe = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.steamid || h.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      steamid: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      name: { n: 2, br: h.d.readString, bw: h.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_ChatModerator";
            }),
            t
          );
        })(Be),
        $e = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || h.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: Xe, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetChatModerators_Response";
            }),
            t
          );
        })(Be),
        Qe = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return Be.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AddWordBan_Response";
            }),
            t
          );
        })(Be),
        Ze = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || h.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
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
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetWordBans_Response";
            }),
            t
          );
        })(Be),
        et = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_channel_id || h.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_JoinChat_Request";
            }),
            t
          );
        })(Be),
        tt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.chat_id || h.a(t.M()),
              Be.initialize(n, r, 0, -1, [3], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
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
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_JoinChat_Response";
            }),
            t
          );
        })(Be),
        rt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || h.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: Te, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_Search_Response";
            }),
            t
          );
        })(Be),
        nt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.stream_live_email || h.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
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
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetSteamTVUserSettings_Response";
            }),
            t
          );
        })(Be),
        it = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return Be.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_SetSteamTVUserSettings_Response";
            }),
            t
          );
        })(Be),
        at = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.results || h.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { results: { n: 1, c: Te, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetMyBroadcastChannels_Response";
            }),
            t
          );
        })(Be),
        ot = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcasts || h.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { broadcasts: { n: 1, c: Te, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_Takeover";
            }),
            t
          );
        })(Be),
        st = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcasts || h.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcasts: { n: 1, c: Te, r: !0, q: !0 },
                      appid: { n: 2, br: h.d.readUint32, bw: h.h.writeUint32 },
                      title: { n: 3, br: h.d.readString, bw: h.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_SingleGame";
            }),
            t
          );
        })(Be),
        ct = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.appid || h.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      appid: { n: 1, br: h.d.readUint32, bw: h.h.writeUint32 },
                      game_name: {
                        n: 2,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                      broadcast: { n: 3, c: Te },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "GameListEntry";
            }),
            t
          );
        })(Be),
        ut = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.entries || h.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      entries: { n: 1, c: ct, r: !0, q: !0 },
                      title: { n: 2, br: h.d.readString, bw: h.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_GameList";
            }),
            t
          );
        })(Be),
        lt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcasts || h.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcasts: { n: 1, c: Te, r: !0, q: !0 },
                      title: { n: 2, br: h.d.readString, bw: h.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_QuickExplore";
            }),
            t
          );
        })(Be),
        dt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcasts || h.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcasts: { n: 1, c: Te, r: !0, q: !0 },
                      title: { n: 2, br: h.d.readString, bw: h.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_ConveyorBelt";
            }),
            t
          );
        })(Be),
        mt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast || h.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast: { n: 1, c: Te },
                      title: { n: 2, br: h.d.readString, bw: h.h.writeString },
                      chat_group_id: {
                        n: 3,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_WatchParty";
            }),
            t
          );
        })(Be),
        ft = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast || h.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      broadcast: { n: 1, c: Te },
                      title: { n: 2, br: h.d.readString, bw: h.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_Developer";
            }),
            t
          );
        })(Be),
        bt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.title || h.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      title: { n: 1, br: h.d.readString, bw: h.h.writeString },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_Event";
            }),
            t
          );
        })(Be),
        pt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.template_type || h.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      template_type: {
                        n: 1,
                        br: h.d.readEnum,
                        bw: h.h.writeEnum,
                      },
                      takeover: { n: 2, c: ot },
                      single_game: { n: 3, c: st },
                      game_list: { n: 4, c: ut },
                      quick_explore: { n: 5, c: lt },
                      conveyor_belt: { n: 6, c: dt },
                      watch_party: { n: 7, c: mt },
                      developer: { n: 8, c: ft },
                      event: { n: 9, c: bt },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_HomePageContentRow";
            }),
            t
          );
        })(Be),
        _t = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.rows || h.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { rows: { n: 1, c: pt, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetHomePageContents_Response";
            }),
            t
          );
        })(Be),
        ht = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.broadcast_clip_id || h.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
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
                      live_time: {
                        n: 7,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      length_ms: {
                        n: 8,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      thumbnail_path: {
                        n: 9,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_BroadcastClipInfo";
            }),
            t
          );
        })(Be),
        Bt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.clips || h.a(t.M()),
              Be.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      clips: { n: 1, c: ht, r: !0, q: !0 },
                      thumbnail_host: {
                        n: 2,
                        br: h.d.readString,
                        bw: h.h.writeString,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelClips_Response";
            }),
            t
          );
        })(Be),
        yt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.aggregation_delay_ms || h.a(t.M()),
              Be.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      aggregation_delay_ms: {
                        n: 1,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CSteamTV_AppCheer_Response";
            }),
            t
          );
        })(Be);
      !(function (e) {
        (e.CreateBroadcastChannel = function (e, t) {
          return e.SendMsg("SteamTV.CreateBroadcastChannel#1", t, ge, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
          (e.GetBroadcastChannelID = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelID#1", t, ve, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelProfile = function (e, t) {
            return e.SendMsg("SteamTV.SetBroadcastChannelProfile#1", t, Se, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelProfile = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelProfile#1", t, we, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelImage = function (e, t) {
            return e.SendMsg("SteamTV.SetBroadcastChannelImage#1", t, Me, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelImages = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelImages#1", t, ze, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.SetBroadcastChannelLinkRegions = function (e, t) {
            return e.SendMsg(
              "SteamTV.SetBroadcastChannelLinkRegions#1",
              t,
              je,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 }
            );
          }),
          (e.GetBroadcastChannelLinks = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelLinks#1", t, Oe, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.GetBroadcastChannelBroadcasters = function (e, t) {
            return e.SendMsg(
              "SteamTV.GetBroadcastChannelBroadcasters#1",
              t,
              De,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 }
            );
          }),
          (e.GetFollowedChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetFollowedChannels#1", t, We, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetSubscribedChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetSubscribedChannels#1", t, Ie, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelStatus = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelStatus#1", t, Fe, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.FollowBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.FollowBroadcastChannel#1", t, Ue, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SubscribeBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.SubscribeBroadcastChannel#1", t, Ee, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelClips = function (e, t) {
            return e.SendMsg("SteamTV.GetBroadcastChannelClips#1", t, Bt, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.ReportBroadcastChannel = function (e, t) {
            return e.SendMsg("SteamTV.ReportBroadcastChannel#1", t, Ne, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetBroadcastChannelInteraction = function (e, t) {
            return e.SendMsg(
              "SteamTV.GetBroadcastChannelInteraction#1",
              t,
              Pe,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 }
            );
          }),
          (e.GetGames = function (e, t) {
            return e.SendMsg("SteamTV.GetGames#1", t, Ge, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.GetChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetChannels#1", t, Ae, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.AddChatBan = function (e, t) {
            return e.SendMsg("SteamTV.AddChatBan#1", t, qe, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetChatBans = function (e, t) {
            return e.SendMsg("SteamTV.GetChatBans#1", t, He, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.AddChatModerator = function (e, t) {
            return e.SendMsg("SteamTV.AddChatModerator#1", t, Ye, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetChatModerators = function (e, t) {
            return e.SendMsg("SteamTV.GetChatModerators#1", t, $e, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.AddWordBan = function (e, t) {
            return e.SendMsg("SteamTV.AddWordBan#1", t, Qe, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetWordBans = function (e, t) {
            return e.SendMsg("SteamTV.GetWordBans#1", t, Ze, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.JoinChat = function (e, t) {
            return e.SendMsg("SteamTV.JoinChat#1", t, tt, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.Search = function (e, t) {
            return e.SendMsg("SteamTV.Search#1", t, rt, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }),
          (e.GetSteamTVUserSettings = function (e, t) {
            return e.SendMsg("SteamTV.GetSteamTVUserSettings#1", t, nt, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.SetSteamTVUserSettings = function (e, t) {
            return e.SendMsg("SteamTV.SetSteamTVUserSettings#1", t, it, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetMyBroadcastChannels = function (e, t) {
            return e.SendMsg("SteamTV.GetMyBroadcastChannels#1", t, at, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }),
          (e.GetHomePageContents = function (e, t) {
            return e.SendMsg("SteamTV.GetHomePageContents#1", t, _t, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (e.AppCheer = function (e, t) {
            return e.SendMsg("SteamTV.AppCheer#1", t, yt, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          });
      })(ye || (ye = {}));
      var gt,
        vt,
        St = r("qiKp"),
        wt = r("TLQK"),
        Mt = r("XxJJ"),
        zt = r("lkRc"),
        Ct = _.Message,
        Ot = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.bincremental || h.a(t.M()),
              Ct.initialize(n, r, 0, -1, [2], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      bincremental: {
                        n: 1,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                      friends: { n: 2, c: Rt, r: !0, q: !0 },
                      max_friend_count: {
                        n: 3,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      active_friend_count: {
                        n: 4,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      friends_limit_hit: {
                        n: 5,
                        br: h.d.readBool,
                        bw: h.h.writeBool,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CMsgClientFriendsList";
            }),
            t
          );
        })(Ct),
        Rt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.ulfriendid || h.a(t.M()),
              Ct.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      ulfriendid: {
                        n: 1,
                        br: h.d.readFixed64String,
                        bw: h.h.writeFixed64String,
                      },
                      efriendrelationship: {
                        n: 2,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CMsgClientFriendsList_Friend";
            }),
            t
          );
        })(Ct),
        jt = _.Message,
        Ft = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.groupid || h.a(t.M()),
              jt.initialize(n, r, 0, -1, [3], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      groupid: {
                        n: 1,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      name: { n: 2, br: h.d.readString, bw: h.h.writeString },
                      accountid_members: {
                        n: 3,
                        r: !0,
                        q: !0,
                        br: h.d.readUint32,
                        bw: h.h.writeRepeatedUint32,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsListCategory";
            }),
            t
          );
        })(jt),
        Tt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.categories || h.a(t.M()),
              jt.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { categories: { n: 1, c: Ft, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_GetCategories_Response";
            }),
            t
          );
        })(jt),
        Wt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.accountid || h.a(t.M()),
              jt.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: {
                      accountid: {
                        n: 1,
                        br: h.d.readUint32,
                        bw: h.h.writeUint32,
                      },
                      clanid: { n: 2, br: h.d.readUint32, bw: h.h.writeUint32 },
                      chat_group_id: {
                        n: 3,
                        br: h.d.readUint64String,
                        bw: h.h.writeUint64String,
                      },
                    },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsListFavoriteEntry";
            }),
            t
          );
        })(jt),
        It = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.favorites || h.a(t.M()),
              jt.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { favorites: { n: 1, c: Wt, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_GetFavorites_Response";
            }),
            t
          );
        })(jt),
        Ut = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return jt.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_SetFavorites_Response";
            }),
            t
          );
        })(jt),
        Et = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.favorites || h.a(t.M()),
              jt.initialize(n, r, 0, -1, [1], null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { favorites: { n: 1, c: Wt, r: !0, q: !0 } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_FavoritesChanged_Notification";
            }),
            t
          );
        })(jt),
        Nt = (function (e) {
          function t(t) {
            void 0 === t && (t = null);
            var r = e.call(this) || this;
            return jt.initialize(r, t, 0, -1, void 0, null), r;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (t.fromObject = function (e) {
              return new t();
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, t) {}),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_GetFriendsList_Request";
            }),
            t
          );
        })(jt),
        Pt = (function (e) {
          function t(r) {
            void 0 === r && (r = null);
            var n = e.call(this) || this;
            return (
              t.prototype.friendslist || h.a(t.M()),
              jt.initialize(n, r, 0, -1, void 0, null),
              n
            );
          }
          return (
            Object(n.d)(t, e),
            (t.M = function () {
              return (
                t.sm_m ||
                  (t.sm_m = {
                    proto: t,
                    fields: { friendslist: { n: 1, c: Ot } },
                  }),
                t.sm_m
              );
            }),
            (t.MBF = function () {
              return t.sm_mbf || (t.sm_mbf = h.e(t.M())), t.sm_mbf;
            }),
            (t.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), t.toObject(e, this);
            }),
            (t.toObject = function (e, r) {
              return h.g(t.M(), e, r);
            }),
            (t.fromObject = function (e) {
              return h.c(t.M(), e);
            }),
            (t.deserializeBinary = function (e) {
              var r = new _.BinaryReader(e),
                n = new t();
              return t.deserializeBinaryFromReader(n, r);
            }),
            (t.deserializeBinaryFromReader = function (e, r) {
              return h.b(t.MBF(), e, r);
            }),
            (t.prototype.serializeBinary = function () {
              var e = new _.BinaryWriter();
              return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (t.serializeBinaryToWriter = function (e, r) {
              h.f(t.M(), e, r);
            }),
            (t.prototype.serializeBase64String = function () {
              var e = new _.BinaryWriter();
              return (
                t.serializeBinaryToWriter(this, e), e.getResultBase64String()
              );
            }),
            (t.prototype.getClassName = function () {
              return "CFriendsList_GetFriendsList_Response";
            }),
            t
          );
        })(jt);
      !(function (e) {
        (e.GetCategories = function (e, t) {
          return e.SendMsg("FriendsList.GetCategories#1", t, Tt, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
          (e.GetFriendsList = function (e, t) {
            return e.SendMsg("FriendsList.GetFriendsList#1", t, Pt, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.GetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.GetFavorites#1", t, It, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (e.SetFavorites = function (e, t) {
            return e.SendMsg("FriendsList.SetFavorites#1", t, Ut, {
              ePrivilege: 1,
            });
          });
      })(gt || (gt = {})),
        (function (e) {
          e.FavoritesChangedHandler = {
            name: "FriendsListClient.FavoritesChanged#1",
            request: Et,
          };
        })(vt || (vt = {}));
      var xt = r("oFam"),
        Gt = r("kyHq"),
        At = r("uobO"),
        Dt = (function () {
          function e() {
            (this.m_mapPlayerCache = new Map()),
              (this.m_strBannedWords = ""),
              (this.m_strProfanityWords = ""),
              (this.m_strCleanWords = ""),
              (this.m_strBannedPattern = ""),
              (this.m_strCleanPattern = ""),
              (this.m_regexBannedWords = null),
              (this.m_regexCleanWords = null),
              (this.m_bShownFilterTip = !1),
              (this.m_TextFilterPreferences = new Gt.j());
            var e = new xt.a();
            (this.m_TextFilterPreferences.eTextFilterSetting = e.text_filter_setting()),
              (this.m_TextFilterPreferences.bIgnoreFriends = e.text_filter_ignore_friends()),
              (this.m_TextFilterWords = new xt.n());
          }
          return (
            (e.prototype.Init = function (e, t, r) {
              return (
                void 0 === e && (e = 0),
                void 0 === t && (t = null),
                void 0 === r && (r = null),
                Object(n.b)(this, void 0, void 0, function () {
                  return Object(n.e)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          (this.m_unAccountID = e),
                          (this.m_Transport = t),
                          (this.m_Storage = r),
                          (this.m_strBannedWords = ""),
                          (this.m_strProfanityWords = ""),
                          (this.m_strCleanWords = ""),
                          [4, this.LoadFilter()]
                        );
                      case 1:
                        return n.sent(), [4, this.LoadTextFilterPreferences()];
                      case 2:
                        return n.sent(), [4, this.LoadTextFilterWords()];
                      case 3:
                        return n.sent(), [4, this.RequestUpdatedSettings()];
                      case 4:
                        return n.sent(), [4, this.RequestFriendsList()];
                      case 5:
                        return n.sent(), [4, this.LoadLanguage(zt.c.LANGUAGE)];
                      case 6:
                        return (
                          n.sent(),
                          "english" === zt.c.LANGUAGE
                            ? [3, 8]
                            : [4, this.LoadLanguage("english")]
                        );
                      case 7:
                        n.sent(), (n.label = 8);
                      case 8:
                        return this.OnFilterDataChanged(), [2];
                    }
                  });
                })
              );
            }),
            (e.prototype.LoadTextFilterPreferences = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e;
                return Object(n.e)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return this.m_Storage
                        ? [
                            4,
                            this.m_Storage.GetObject(
                              "CTextFilterStore_TextFilterPreferences"
                            ),
                          ]
                        : [3, 2];
                    case 1:
                      (e = t.sent()) && (this.m_TextFilterPreferences = e),
                        (t.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.SaveTextFilterPreferences = function () {
              this.m_Storage &&
                this.m_Storage.StoreObject(
                  "CTextFilterStore_TextFilterPreferences",
                  this.m_TextFilterPreferences
                );
            }),
            (e.prototype.LoadTextFilterWords = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e;
                return Object(n.e)(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return this.m_Storage
                        ? [
                            4,
                            this.m_Storage.GetObject(
                              "CTextFilterStore_TextFilterWords"
                            ),
                          ]
                        : [3, 2];
                    case 1:
                      (e = t.sent()) &&
                        (this.m_TextFilterWords = xt.n.fromObject(e)),
                        (t.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.SaveTextFilterWords = function () {
              this.m_Storage &&
                this.m_Storage.StoreObject(
                  "CTextFilterStore_TextFilterWords",
                  this.m_TextFilterWords.toObject()
                );
            }),
            (e.prototype.LoadFilter = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e, t;
                return Object(n.e)(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return this.m_Storage
                        ? [
                            4,
                            this.m_Storage.GetObject(
                              "CTextFilterStore_strBannedPattern"
                            ),
                          ]
                        : [3, 3];
                    case 1:
                      return (
                        (e = r.sent()),
                        [
                          4,
                          this.m_Storage.GetObject(
                            "CTextFilterStore_strCleanPattern"
                          ),
                        ]
                      );
                    case 2:
                      (t = r.sent()),
                        null != e && null != t && this.BRebuildFilter(e, t),
                        (r.label = 3);
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.SaveFilter = function () {
              this.m_Storage &&
                (this.m_Storage.StoreObject(
                  "CTextFilterStore_strBannedPattern",
                  this.m_strBannedPattern
                ),
                this.m_Storage.StoreObject(
                  "CTextFilterStore_strCleanPattern",
                  this.m_strCleanPattern
                ));
            }),
            (e.prototype.RequestUpdatedSettings = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e, t, r, i, a, o, s, c;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (((e = new xt.a()), 0 === this.m_unAccountID))
                        return [3, 7];
                      n.label = 1;
                    case 1:
                      return (
                        n.trys.push([1, 6, , 7]),
                        this.m_Transport
                          ? ((t = m.b.Init(xt.b)),
                            [
                              4,
                              xt.o.GetCommunityPreferences(this.m_Transport, t),
                            ])
                          : [3, 3]
                      );
                    case 2:
                      return (
                        (r = n.sent()), (e = r.Body().preferences()), [3, 5]
                      );
                    case 3:
                      return (
                        (s = {
                          sessionid: zt.c.SESSIONID,
                          origin: Object(zt.d)(),
                        }),
                        [
                          4,
                          l.a.get(
                            zt.c.COMMUNITY_BASE_URL +
                              "textfilter/ajaxgetcommunitypreferences",
                            { params: s, withCredentials: !0 }
                          ),
                        ]
                      );
                    case 4:
                      (c = n.sent()),
                        (e = xt.a.fromObject(c.data.preferences)),
                        (n.label = 5);
                    case 5:
                      return [3, 7];
                    case 6:
                      return n.sent(), [3, 7];
                    case 7:
                      if (
                        (this.UpdateCommunityPreferences(e),
                        e.text_filter_words_revision() ===
                          this.m_TextFilterWords.text_filter_words_revision())
                      )
                        return [3, 15];
                      if (
                        ((i = new xt.n()), 0 === e.text_filter_words_revision())
                      )
                        return [3, 14];
                      n.label = 8;
                    case 8:
                      return (
                        n.trys.push([8, 13, , 14]),
                        this.m_Transport
                          ? ((a = m.b.Init(xt.e)),
                            [4, xt.o.GetTextFilterWords(this.m_Transport, a)])
                          : [3, 10]
                      );
                    case 9:
                      return (o = n.sent()), (i = o.Body().words()), [3, 12];
                    case 10:
                      return (
                        (s = {
                          sessionid: zt.c.SESSIONID,
                          origin: Object(zt.d)(),
                        }),
                        [
                          4,
                          l.a.get(
                            zt.c.COMMUNITY_BASE_URL +
                              "textfilter/ajaxgettextfiltercustomwords",
                            { params: s, withCredentials: !0 }
                          ),
                        ]
                      );
                    case 11:
                      (c = n.sent()),
                        (i = xt.n.fromObject(c.data.words)),
                        (n.label = 12);
                    case 12:
                      return [3, 14];
                    case 13:
                      return n.sent(), [3, 14];
                    case 14:
                      this.UpdateTextFilterWords(i), (n.label = 15);
                    case 15:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.UpdateCommunityPreferences = function (e) {
              var t = !1;
              e.text_filter_setting() !==
                this.m_TextFilterPreferences.eTextFilterSetting &&
                ((this.m_TextFilterPreferences.eTextFilterSetting = e.text_filter_setting()),
                (t = !0)),
                e.text_filter_ignore_friends() !==
                  this.m_TextFilterPreferences.bIgnoreFriends &&
                  ((this.m_TextFilterPreferences.bIgnoreFriends = e.text_filter_ignore_friends()),
                  (t = !0)),
                t && this.SaveTextFilterPreferences();
            }),
            Object.defineProperty(e.prototype, "TextFilterPreferences", {
              get: function () {
                return this.m_TextFilterPreferences;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.UpdateTextFilterWords = function (e) {
              (this.m_TextFilterWords = e), this.SaveTextFilterWords();
            }),
            (e.prototype.RequestFriendsList = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e, t, r, i, a;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (((e = new Ot()), 0 === this.m_unAccountID))
                        return [3, 7];
                      n.label = 1;
                    case 1:
                      return (
                        n.trys.push([1, 6, , 7]),
                        this.m_Transport
                          ? ((t = m.b.Init(Nt)),
                            [4, gt.GetFriendsList(this.m_Transport, t)])
                          : [3, 3]
                      );
                    case 2:
                      return (
                        (r = n.sent()), (e = r.Body().friendslist()), [3, 5]
                      );
                    case 3:
                      return (
                        (i = {
                          sessionid: zt.c.SESSIONID,
                          origin: Object(zt.d)(),
                        }),
                        [
                          4,
                          l.a.get(
                            zt.c.COMMUNITY_BASE_URL +
                              "textfilter/ajaxgetfriendslist",
                            { params: i, withCredentials: !0 }
                          ),
                        ]
                      );
                    case 4:
                      (a = n.sent()),
                        (e = Ot.fromObject(a.data.friendslist)),
                        (n.label = 5);
                    case 5:
                      return [3, 7];
                    case 6:
                      return n.sent(), [3, 7];
                    case 7:
                      return this.SetFriendsList(e), [2];
                  }
                });
              });
            }),
            (e.prototype.SetFriendsList = function (e) {
              e.bincremental() || this.m_mapPlayerCache.clear();
              for (var t = 0, r = e.friends(); t < r.length; t++) {
                var n = r[t],
                  i = new p.a(n.ulfriendid());
                if (i.BIsIndividualAccount()) {
                  var a = n.efriendrelationship();
                  this.m_mapPlayerCache.set(i.GetAccountID(), a);
                }
              }
            }),
            (e.prototype.BIsFriend = function (e) {
              return (
                !!this.m_mapPlayerCache.has(e) &&
                3 == this.m_mapPlayerCache.get(e)
              );
            }),
            (e.prototype.LoadLanguage = function (e) {
              return Object(n.b)(this, void 0, void 0, function () {
                var t, r, i, a, o, s;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      (t = "1"),
                        (r =
                          zt.c.COMMUNITY_CDN_URL +
                          "textfilter/gettextfilterdictionary?type=banned&language=" +
                          e +
                          "&v=" +
                          t +
                          "&origin=" +
                          Object(zt.d)()),
                        (n.label = 1);
                    case 1:
                      return n.trys.push([1, 3, , 4]), [4, l.a.get(r)];
                    case 2:
                      return (
                        (o = n.sent()),
                        (this.m_strBannedWords += o.data),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (i = n.sent()),
                        console.error(
                          "Failed to load filter dictionary " + r,
                          i
                        ),
                        [3, 4]
                      );
                    case 4:
                      (r =
                        zt.c.COMMUNITY_CDN_URL +
                        "textfilter/gettextfilterdictionary?type=profanity&language=" +
                        e +
                        "&v=" +
                        t +
                        "&origin=" +
                        Object(zt.d)()),
                        (n.label = 5);
                    case 5:
                      return n.trys.push([5, 7, , 8]), [4, l.a.get(r)];
                    case 6:
                      return (
                        (o = n.sent()),
                        (this.m_strProfanityWords += o.data),
                        [3, 8]
                      );
                    case 7:
                      return (
                        (a = n.sent()),
                        console.error(
                          "Failed to load filter dictionary " + r,
                          a
                        ),
                        [3, 8]
                      );
                    case 8:
                      (r =
                        zt.c.COMMUNITY_CDN_URL +
                        "textfilter/gettextfilterdictionary?type=clean_public&language=" +
                        e +
                        "&v=" +
                        t +
                        "&origin=" +
                        Object(zt.d)()),
                        (n.label = 9);
                    case 9:
                      return n.trys.push([9, 11, , 12]), [4, l.a.get(r)];
                    case 10:
                      return (
                        (o = n.sent()),
                        (this.m_strCleanWords += o.data),
                        [3, 12]
                      );
                    case 11:
                      return (
                        (s = n.sent()),
                        console.error(
                          "Failed to load filter dictionary " + r,
                          s
                        ),
                        [3, 12]
                      );
                    case 12:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.AppendPattern = function (e, t) {
              return "" !== t && ("" !== e && (e += "|"), (e += t)), e;
            }),
            (e.prototype.CreatePattern = function (e) {
              var t = e.filter(function (e) {
                return "" !== e;
              });
              return t.length > 0 ? "\\b(" + t.join("|") + ")\\b" : "";
            }),
            (e.prototype.OnFilterDataChanged = function () {
              var e = new RegExp(/\s*[\r\n]+\s*/g),
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
                (r = (r = this.m_strCleanWords.split(e)).concat(
                  this.m_TextFilterWords.text_filter_custom_clean_words()
                ));
              var n = this.CreatePattern(t),
                i = this.CreatePattern(r);
              "" != i && (i = "^(" + i + ")$"),
                this.BRebuildFilter(n, i) && this.SaveFilter();
            }),
            (e.prototype.BRebuildFilter = function (e, t) {
              if (e === this.m_strBannedPattern && t === this.m_strCleanPattern)
                return !1;
              if (((this.m_regexBannedWords = null), "" !== e))
                try {
                  this.m_regexBannedWords = new RegExp(e, "ugi");
                } catch (e) {
                  console.warn("Couldn't compile textfilter bannedwords regex"),
                    Object(At.a)().ReportError(
                      new Error(
                        "Couldn't compile textfilter bannedwords regex: " + e
                      )
                    );
                }
              if (((this.m_regexCleanWords = null), "" !== t))
                try {
                  this.m_regexCleanWords = new RegExp(t, "ugi");
                } catch (e) {
                  console.warn("Couldn't compile textfilter cleanwords regex"),
                    Object(At.a)().ReportError(
                      new Error(
                        "Couldn't compile textfilter cleanwords regex: " + e
                      )
                    );
                }
              return (
                (this.m_strBannedPattern = e), (this.m_strCleanPattern = t), !0
              );
            }),
            (e.prototype.CreateProfanityReplacement = function (e) {
              return "♥".repeat(e);
            }),
            (e.prototype.BHasFilter = function () {
              return null != this.m_regexBannedWords;
            }),
            (e.prototype.BShownFilterTip = function () {
              return this.m_bShownFilterTip;
            }),
            (e.prototype.SetFilterTipShown = function (e) {
              this.m_bShownFilterTip = e;
            }),
            (e.prototype.FilterText = function (e, t) {
              var r = this;
              if (!this.m_regexBannedWords) return t;
              var n = 0;
              "string" == typeof e && "" !== e
                ? (n = new p.a(e).GetAccountID())
                : "number" == typeof e && (n = e);
              return !t ||
                n == this.m_unAccountID ||
                (this.m_TextFilterPreferences.bIgnoreFriends &&
                  this.BIsFriend(n))
                ? t
                : t.replace(this.m_regexBannedWords, function (e) {
                    return r.m_regexCleanWords &&
                      0 == e.search(r.m_regexCleanWords)
                      ? e
                      : r.CreateProfanityReplacement(e.length);
                  });
            }),
            Object(n.c)([i.C], e.prototype, "m_TextFilterPreferences", void 0),
            Object(n.c)([i.C], e.prototype, "m_mapPlayerCache", void 0),
            Object(n.c)([i.C], e.prototype, "m_regexBannedWords", void 0),
            Object(n.c)([i.C], e.prototype, "m_regexCleanWords", void 0),
            Object(n.c)([i.k], e.prototype, "UpdateCommunityPreferences", null),
            Object(n.c)([i.k], e.prototype, "SetFriendsList", null),
            Object(n.c)([i.k], e.prototype, "BRebuildFilter", null),
            e
          );
        })(),
        Lt = (function () {
          function e() {
            this.m_mapChats = new Map();
          }
          return (
            (e.prototype.GetChat = function (e, t) {
              return this.m_mapChats.get(e) || this.m_mapChats.get(t);
            }),
            (e.prototype.GetOrCreateChat = function (e, t) {
              var r = this.GetChat(e, t);
              return r || ((r = new kt()), this.m_mapChats.set(e || t, r)), r;
            }),
            Object(n.c)([i.C], e.prototype, "m_mapChats", void 0),
            e
          );
        })(),
        kt = (function () {
          function e() {
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
              (this.m_webAPIInterface = new b.a(
                zt.c.WEBAPI_BASE_URL,
                zt.h.webapi_token
              ));
          }
          return (
            (e.prototype.InitTextFilter = function () {
              this.m_textFilterStore = new Dt();
              var e = 0;
              "" !== zt.h.steamid && (e = new p.a(zt.h.steamid).GetAccountID());
              this.m_textFilterStore.Init(e, null, new f.a());
            }),
            Object.defineProperty(e.prototype, "TextFilterStore", {
              get: function () {
                return this.m_textFilterStore;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.GetBroadcastSteamID = function () {
              return this.m_ulBroadcastSteamID;
            }),
            (e.prototype.GetUserSteamID = function () {
              return this.m_strUserSteamID;
            }),
            (e.prototype.StartForSteamID = function (e, t) {
              (this.m_webAPIInterface = new b.a(
                zt.c.WEBAPI_BASE_URL,
                zt.h.webapi_token
              )),
                (this.m_ulBroadcastSteamID = e),
                (this.m_ulBroadcastID = t),
                this.InitTextFilter(),
                this.RequestChatInfo();
            }),
            (e.prototype.StartForChannel = function (e) {
              (this.m_webAPIInterface = new b.a(
                zt.c.WEBAPI_BASE_URL,
                zt.h.webapi_token
              )),
                (this.m_ulBroadcastChannelID = e),
                (this.m_strUserSteamID = zt.h.steamid),
                this.InitTextFilter(),
                this.JoinChannelChat();
            }),
            (e.prototype.Stop = function () {
              this.m_chatScheduledFunc && this.m_chatScheduledFunc.Cancel();
            }),
            (e.prototype.SendMessage = function (e) {
              return Object(n.b)(this, void 0, void 0, function () {
                var t,
                  r,
                  i,
                  a,
                  o,
                  s,
                  c,
                  u = this;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (0 == (t = e.trim()).length) return [2];
                      n.label = 1;
                    case 1:
                      return (
                        n.trys.push([1, 6, , 7]),
                        (r = void 0),
                        (i = void 0),
                        (a = void 0),
                        this.m_webApiToken
                          ? ((o = new FormData()).append(
                              "chat_id",
                              this.m_ulChatID
                            ),
                            o.append("message", t),
                            o.append(
                              "instance_id",
                              this.m_unInstanceID.toString()
                            ),
                            [
                              4,
                              l.a.post(
                                zt.c.WEBAPI_BASE_URL +
                                  "IBroadcastService/PostChatMessage/v0001?access_token=" +
                                  this.m_webApiToken,
                                o
                              ),
                            ])
                          : [3, 3]
                      );
                    case 2:
                      return (
                        (i = n.sent()), (a = i.data && i.data.response), [3, 5]
                      );
                    case 3:
                      return (
                        (s = m.b.Init(G)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          message: t,
                          instance_id: this.m_unInstanceID.toString(),
                        }),
                        [
                          4,
                          j.PostChatMessage(
                            this.m_webAPIInterface.GetServiceTransport(),
                            s
                          ),
                        ]
                      );
                    case 4:
                      (r = n.sent()),
                        (a = {
                          result: r.GetEResult(),
                          cooldown_time_seconds: r
                            .Body()
                            .cooldown_time_seconds(),
                          in_game: r.Body().in_game(),
                          persona_name: r.Body().persona_name(),
                        }),
                        (n.label = 5);
                    case 5:
                      return a && a.result && 1 != a.result
                        ? ((c = ""),
                          (c =
                            17 == a.result
                              ? Object(wt.f)("#BroadcastChat_YouMuted")
                              : 84 == a.result
                              ? Object(wt.f)(
                                  "#BroadcastChat_Cooldown",
                                  a.cooldown_time_seconds
                                )
                              : Object(wt.f)(
                                  "#BroadcastChat_FailedToSendMsg",
                                  t
                                )),
                          this.m_rgChatMessages.push({
                            type: d.a.Error,
                            msg: c,
                            client_ts: Number(new Date()),
                            instance_id: this.m_unInstanceID,
                            in_game: a.in_game,
                            persona_name: a.persona_name,
                            steamid: "",
                          }),
                          [2])
                        : (this.m_nRateLimitSeconds ||
                            (this.m_nRateLimitSeconds =
                              a.cooldown_time_seconds),
                          this.m_nRateLimitSeconds &&
                            ((this.m_bRateLimited = !0),
                            setTimeout(function () {
                              return (u.m_bRateLimited = !1);
                            }, 1e3 * this.m_nRateLimitSeconds)),
                          [3, 7]);
                    case 6:
                      return (
                        n.sent(),
                        this.m_rgChatMessages.push({
                          type: d.a.Error,
                          msg: Object(wt.f)(
                            "#BroadcastChat_FailedToSendMsg",
                            t
                          ),
                          client_ts: Number(new Date()),
                          instance_id: this.m_unInstanceID,
                          in_game: !1,
                          persona_name: "",
                          steamid: "",
                        }),
                        [3, 7]
                      );
                    case 7:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.RequestChatInfo = function (e) {
              return Object(n.b)(this, void 0, void 0, function () {
                var t,
                  r,
                  a,
                  o = this;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      (this.m_cConsecutiveErrors = 0),
                        (this.m_bReconnecting = !1),
                        (n.label = 1);
                    case 1:
                      return (
                        n.trys.push([1, 3, , 4]),
                        (t = {
                          steamid: this.m_ulBroadcastSteamID,
                          broadcastid: this.m_ulBroadcastID,
                          sessionid: zt.c.SESSIONID,
                        }),
                        [
                          4,
                          l.a.get(
                            zt.c.CHAT_BASE_URL + "broadcast/getchatinfo",
                            {
                              params: t,
                              withCredentials: !0,
                              cancelToken: null == e ? void 0 : e.token,
                            }
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (r = n.sent()),
                        (e && e.token.reason) ||
                          Object(i.G)(function () {
                            var e = r.data;
                            (o.m_strChatURL = e.view_url_template),
                              (o.m_ulChatID = e.chat_id),
                              (o.m_strFlairGroupID =
                                e.flair_group_ids && e.flair_group_ids[0]),
                              e.blocked &&
                                console.log("User is blocked from chat"),
                              e.steamid && (o.m_strUserSteamID = e.steamid),
                              e.token && (o.m_webApiToken = e.token),
                              e.emoticons && o.SetOwnedEmoticons(e.emoticons),
                              o.m_bHasAddedWelcomeChat ||
                                (o.m_rgChatMessages.push({
                                  type: d.a.Notification,
                                  msg: Object(wt.f)(
                                    "#BroadcastChat_DefaultMessage"
                                  ),
                                  client_ts: Number(new Date()),
                                  instance_id: o.m_unInstanceID,
                                  in_game: !1,
                                  persona_name: "",
                                  steamid: "",
                                }),
                                (o.m_bHasAddedWelcomeChat = !0)),
                              o.m_mapBroadcastModeratorUsers.clear(),
                              e.moderators_steamid &&
                                e.moderators_steamid.forEach(function (e) {
                                  return o.m_mapBroadcastModeratorUsers.set(
                                    e,
                                    !0
                                  );
                                }),
                              (o.m_chatScheduledFunc = new St.b()),
                              o.m_chatScheduledFunc.Schedule(0, o.RequestLoop);
                          }),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (a = n.sent()),
                        console.error(a),
                        console.log("Failed to get chat info!"),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.JoinChannelChat = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e, t, r;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        n.trys.push([0, 2, , 3]),
                        (e = m.b.Init(et)).SetBodyFields({
                          broadcast_channel_id: this.m_ulBroadcastChannelID,
                        }),
                        [
                          4,
                          ye.JoinChat(
                            this.m_webAPIInterface.GetServiceTransport(),
                            e
                          ),
                        ]
                      );
                    case 1:
                      return (t = n.sent()).Body().chat_id &&
                        t.Body().view_url_template
                        ? ((this.m_strChatURL = t.Body().view_url_template()),
                          (this.m_ulChatID = t.Body().chat_id()),
                          (this.m_strFlairGroupID =
                            t.Body().flair_group_ids() &&
                            t.Body().flair_group_ids()[0]),
                          this.FetchChatModerators(),
                          (this.m_rgChatMessages = []),
                          this.m_rgChatMessages.push({
                            type: d.a.Notification,
                            msg: Object(wt.f)("#BroadcastChat_DefaultMessage"),
                            client_ts: Number(new Date()),
                            instance_id: this.m_unInstanceID,
                            in_game: !1,
                            persona_name: "",
                            steamid: "",
                          }),
                          (this.m_bHasAddedWelcomeChat = !0),
                          (this.m_chatScheduledFunc = new St.b()),
                          this.m_chatScheduledFunc.Schedule(
                            0,
                            this.RequestLoop
                          ),
                          [3, 3])
                        : (console.log("Failed to join channel chat"), [2]);
                    case 2:
                      return (
                        (r = n.sent()),
                        console.error(r),
                        console.log("Failed to join chat!"),
                        [3, 3]
                      );
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.FetchChatModerators = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e, t, r, i;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (e = m.b.Init(Je)).SetBodyFields({
                          broadcast_channel_id: this.m_ulBroadcastChannelID,
                        }),
                        [
                          4,
                          ye.GetChatModerators(
                            this.m_webAPIInterface.GetServiceTransport(),
                            e
                          ),
                        ]
                      );
                    case 1:
                      return (
                        (t = n.sent()),
                        (r = t.Body().results()),
                        (i = new Map()),
                        r.forEach(function (e) {
                          i.set(e.steamid(), !0);
                        }),
                        (this.m_mapChannelModeratorUsers = i),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.RequestLoop = function () {
              return Object(n.b)(this, void 0, void 0, function () {
                var e,
                  t,
                  r,
                  i,
                  a,
                  o,
                  s,
                  c,
                  u,
                  m,
                  f,
                  b,
                  p,
                  _,
                  h,
                  B = this;
                return Object(n.e)(this, function (y) {
                  switch (y.label) {
                    case 0:
                      (e = {}),
                        (t = this.m_strChatURL.replace(
                          "{0}",
                          this.m_nNextChatTS.toString()
                        )) == this.m_strChatURL &&
                          this.m_nNextChatTS > 0 &&
                          (e.t = this.m_nNextChatTS),
                        (y.label = 1);
                    case 1:
                      return (
                        y.trys.push([1, 3, , 4]), [4, l.a.get(t, { params: e })]
                      );
                    case 2:
                      if (
                        ((r = y.sent()),
                        (i = r.data),
                        (this.m_cConsecutiveErrors = 0),
                        (a = i.messages
                          .map(function (e) {
                            return Object(n.a)(Object(n.a)({}, e), {
                              type: d.a.Chat,
                              client_ts: Number(new Date()),
                            });
                          })
                          .filter(function (e) {
                            return !B.IsUserMutedLocally(e.steamid);
                          })),
                        (h = this.m_rgChatMessages).push.apply(h, a),
                        (o = this.m_bAutoScroll ? 150 : 300),
                        this.m_rgChatMessages.length > o &&
                          this.m_rgChatMessages.splice(
                            0,
                            this.m_rgChatMessages.length - o
                          ),
                        i.muted)
                      )
                        for (s = 0, c = i.muted; s < c.length; s++)
                          (u = c[s]),
                            (m =
                              u.muted == this.m_strUserSteamID
                                ? Object(wt.f)(
                                    "#BroadcastChat_YouMuted",
                                    u.persona_name
                                  )
                                : Object(wt.f)(
                                    "#BroadcastChat_UserMuted",
                                    u.persona_name
                                  )),
                            this.m_rgChatMessages.push({
                              type: d.a.Notification,
                              msg: m,
                              client_ts: Number(new Date()),
                              instance_id: this.m_unInstanceID,
                              in_game: !1,
                              persona_name: "",
                              steamid: "",
                            });
                      if (i.remove_msgs)
                        for (f = 0, b = i.remove_msgs; f < b.length; f++)
                          (p = b[f]), this.RemoveUserMessagesLocal(p.steamid);
                      if (
                        ((_ = 0),
                        null == this.m_tsFirstRequest ||
                          0 == this.m_nNextChatTS ||
                          i.initial_delay)
                      ) {
                        if ("undefined" === i.initial_delay)
                          return (
                            console.log(
                              "Need initial_delay to know when to request first chat message"
                            ),
                            [2]
                          );
                        (this.m_tsFirstRequest =
                          performance.now() + i.initial_delay),
                          (this.m_nFromFirstRequestMS = 0),
                          (this.m_nNextChatTS = i.next_request),
                          (_ = i.initial_delay);
                      } else {
                        if (i.next_request < this.m_nNextChatTS)
                          return console.log("Next request in past"), [2];
                        (this.m_nFromFirstRequestMS +=
                          i.next_request - this.m_nNextChatTS),
                          (this.m_nNextChatTS = i.next_request),
                          (_ =
                            this.m_tsFirstRequest +
                            this.m_nFromFirstRequestMS -
                            performance.now() +
                            this.m_nNudgeFactorMS);
                      }
                      return (
                        this.m_bReconnecting && (this.m_bReconnecting = !1),
                        (this.m_nLastSleepMS = _),
                        _ < 0 && (_ = 0),
                        this.m_chatScheduledFunc.Schedule(_, this.RequestLoop),
                        [3, 4]
                      );
                    case 3:
                      if (
                        (y.sent(),
                        console.log(
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
                          return (
                            this.m_rgChatMessages.push({
                              type: d.a.Error,
                              msg: Object(wt.f)(
                                "#BroadcastChat_UnableToJoinChat"
                              ),
                              client_ts: Number(new Date()),
                              instance_id: this.m_unInstanceID,
                              in_game: !1,
                              persona_name: "",
                              steamid: "",
                            }),
                            [2]
                          );
                        (this.m_cConsecutiveErrors = 0),
                          (this.m_bReconnecting = !0),
                          this.SyncChat();
                      }
                      return (
                        this.m_chatScheduledFunc.Schedule(
                          500,
                          this.RequestLoop
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.GetUserEmoticons = function () {
              return this.m_regexUserEmoticons;
            }),
            (e.prototype.SetOwnedEmoticons = function (e) {
              for (var t = [], r = 0; r < e.length; r++) {
                var n = e[r];
                n.length >= 2 && ":" == n[0]
                  ? t.push(n.substr(1, n.length - 2))
                  : t.push(n);
              }
              var i = ":(" + t.join("|") + "):";
              this.m_regexUserEmoticons = new RegExp(i, "g");
            }),
            (e.prototype.UpdateBroadcastChatModerator = function (e, t, r) {
              return Object(n.b)(this, void 0, void 0, function () {
                var i, a, o;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [3, 6];
                    case 1:
                      return (
                        n.trys.push([1, 4, , 5]),
                        (i = m.b.Init(Ke)).SetBodyFields({
                          broadcast_channel_id: this.m_ulBroadcastChannelID,
                          moderator_steamid: e,
                          undo: !t,
                        }),
                        [
                          4,
                          ye.AddChatModerator(
                            this.m_webAPIInterface.GetServiceTransport(),
                            i
                          ),
                        ]
                      );
                    case 2:
                      return (
                        n.sent(),
                        (o = Object(wt.f)(
                          t
                            ? "#BroadcastChat_AddedModerator"
                            : "#BroadcastChat_RemovedModerator",
                          r
                        )),
                        this.m_rgChatMessages.push({
                          type: d.a.Notification,
                          msg: o,
                        }),
                        [4, this.FetchChatModerators()]
                      );
                    case 3:
                      return n.sent(), [3, 5];
                    case 4:
                      return (
                        n.sent(),
                        (o = Object(wt.f)(
                          t
                            ? "#BroadcastChat_AddModeratorFailed"
                            : "#BroadcastChat_RemoveModeratorFailed",
                          r
                        )),
                        this.m_rgChatMessages.push({ type: d.a.Error, msg: o }),
                        [3, 5]
                      );
                    case 5:
                      return [3, 10];
                    case 6:
                      (a = new FormData()).append(
                        "broadcaststeamid",
                        this.m_ulBroadcastSteamID
                      ),
                        a.append("moderatorsteamid", e),
                        a.append("bAdd", t ? "1" : "0"),
                        a.append("sessionid", zt.c.SESSIONID),
                        (n.label = 7);
                    case 7:
                      return (
                        n.trys.push([7, 9, , 10]),
                        [
                          4,
                          l.a.post(
                            zt.c.CHAT_BASE_URL +
                              "broadcast/ajaxupdatechannelmod",
                            a
                          ),
                        ]
                      );
                    case 8:
                      return (
                        n.sent(),
                        this.m_mapBroadcastModeratorUsers.set(e, t),
                        (o = Object(wt.f)(
                          t
                            ? "#BroadcastChat_AddedModerator"
                            : "#BroadcastChat_RemovedModerator",
                          r
                        )),
                        this.m_rgChatMessages.push({
                          type: d.a.Notification,
                          msg: o,
                        }),
                        [3, 10]
                      );
                    case 9:
                      return (
                        n.sent(),
                        (o = Object(wt.f)(
                          t
                            ? "#BroadcastChat_AddModeratorFailed"
                            : "#BroadcastChat_RemoveModeratorFailed",
                          r
                        )),
                        this.m_rgChatMessages.push({ type: d.a.Error, msg: o }),
                        [3, 10]
                      );
                    case 10:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.UpdateUserChatBan = function (e, t, r, i, a, o) {
              return Object(n.b)(this, void 0, void 0, function () {
                var s, c, u, d;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (s = this.m_ulBroadcastSteamID),
                        (c = this.m_strUserSteamID),
                        this.m_ulBroadcastChannelID
                          ? ((u = m.b.Init(Ve)).SetBodyFields({
                              broadcast_channel_id: this.m_ulBroadcastChannelID,
                              chatter_steamid: e,
                              duration: 3600 * r,
                              permanent: i,
                              undo: o,
                            }),
                            [
                              4,
                              ye.AddChatBan(
                                this.m_webAPIInterface.GetServiceTransport(),
                                u
                              ),
                            ])
                          : [3, 2]
                      );
                    case 1:
                      return n.sent(), [3, 6];
                    case 2:
                      (d = new FormData()).append("broadcaststeamid", s),
                        d.append("issuersteamid", c),
                        d.append("chattersteamid", e),
                        d.append("bantype", t),
                        d.append("duration", r.toString()),
                        d.append("perm", i ? "1" : "0"),
                        d.append("sessionid", zt.c.SESSIONID),
                        (n.label = 3);
                    case 3:
                      return (
                        n.trys.push([3, 5, , 6]),
                        [
                          4,
                          l.a.post(
                            zt.c.CHAT_BASE_URL + "broadcast/ajaxupdateusermute",
                            d
                          ),
                        ]
                      );
                    case 4:
                      return (
                        n.sent(),
                        0 == t
                          ? delete this.m_mapMutedUsers[e]
                          : (this.m_mapMutedUsers[e] = a),
                        [3, 6]
                      );
                    case 5:
                      return (
                        n.sent(),
                        console.log("Failed to update mute for " + a),
                        [3, 6]
                      );
                    case 6:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.MuteUserForSession = function (e, t) {
              return Object(n.b)(this, void 0, void 0, function () {
                var r, i, a;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (e == this.m_strUserSteamID) return [2];
                      if (this.m_ulBroadcastSteamID == e) return [2];
                      if (
                        ((r =
                          this.m_ulBroadcastSteamID == this.m_strUserSteamID),
                        this.m_mapMutedUsers[e])
                      )
                        return [3, 7];
                      (this.m_mapMutedUsers[e] = t), (n.label = 1);
                    case 1:
                      return (
                        n.trys.push([1, 6, , 7]),
                        this.m_webApiToken
                          ? ((i = new FormData()).append(
                              "chat_id",
                              this.m_ulChatID
                            ),
                            i.append("user_steamid", e),
                            i.append("muted", "1"),
                            [
                              4,
                              l.a.post(
                                zt.c.WEBAPI_BASE_URL +
                                  "IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=" +
                                  this.m_webApiToken,
                                i
                              ),
                            ])
                          : [3, 3]
                      );
                    case 2:
                      return n.sent(), [3, 5];
                    case 3:
                      return (
                        (a = m.b.Init(k)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          user_steamid: e,
                          muted: !0,
                        }),
                        [
                          4,
                          j.MuteBroadcastChatUser(
                            this.m_webAPIInterface.GetServiceTransport(),
                            a
                          ),
                        ]
                      );
                    case 4:
                      n.sent(), (n.label = 5);
                    case 5:
                      return [3, 7];
                    case 6:
                      return (
                        n.sent(),
                        r &&
                          (this.m_rgChatMessages.push({
                            type: d.a.Error,
                            msg: Object(wt.f)(
                              "#BroadcastChat_UserMuteFailed",
                              t
                            ),
                            client_ts: Number(new Date()),
                            instance_id: this.m_unInstanceID,
                            in_game: !1,
                            persona_name: "",
                            steamid: "",
                          }),
                          delete this.m_mapMutedUsers[e]),
                        [3, 7]
                      );
                    case 7:
                      return (
                        r ||
                          this.m_rgChatMessages.push({
                            type: d.a.Notification,
                            msg: Object(wt.f)(
                              "#BroadcastChat_UserMutedLocal",
                              t
                            ),
                            client_ts: Number(new Date()),
                            instance_id: this.m_unInstanceID,
                            in_game: !1,
                            persona_name: "",
                            steamid: "",
                          }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.UnmuteUserForSession = function (e, t) {
              return Object(n.b)(this, void 0, void 0, function () {
                var r, i;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (e == this.m_strUserSteamID) return [2];
                      if (
                        (this.m_mapMutedUsers[e] &&
                          delete this.m_mapMutedUsers[e],
                        !(this.m_ulBroadcastSteamID == this.m_strUserSteamID))
                      )
                        return [3, 8];
                      n.label = 1;
                    case 1:
                      return (
                        n.trys.push([1, 6, , 7]),
                        this.m_webApiToken
                          ? ((r = new FormData()).append(
                              "chat_id",
                              this.m_ulChatID
                            ),
                            r.append("user_steamid", e),
                            r.append("muted", "0"),
                            [
                              4,
                              l.a.post(
                                zt.c.WEBAPI_BASE_URL +
                                  "IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=" +
                                  this.m_webApiToken,
                                r
                              ),
                            ])
                          : [3, 3]
                      );
                    case 2:
                      return n.sent(), [3, 5];
                    case 3:
                      return (
                        (i = m.b.Init(k)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          user_steamid: e,
                          muted: !1,
                        }),
                        [
                          4,
                          j.MuteBroadcastChatUser(
                            this.m_webAPIInterface.GetServiceTransport(),
                            i
                          ),
                        ]
                      );
                    case 4:
                      n.sent(), (n.label = 5);
                    case 5:
                      return (
                        this.m_rgChatMessages.push({
                          type: d.a.Notification,
                          msg: Object(wt.f)(
                            "#BroadcastChat_UserUnmutedLocal",
                            t
                          ),
                          client_ts: Number(new Date()),
                          instance_id: this.m_unInstanceID,
                          in_game: !1,
                          persona_name: "",
                          steamid: "",
                        }),
                        [3, 7]
                      );
                    case 6:
                      return (
                        n.sent(),
                        this.m_rgChatMessages.push({
                          type: d.a.Error,
                          msg: Object(wt.f)(
                            "#BroadcastChat_UserUnmuteFailed",
                            t
                          ),
                          client_ts: Number(new Date()),
                          instance_id: this.m_unInstanceID,
                          in_game: !1,
                          persona_name: "",
                          steamid: "",
                        }),
                        [3, 7]
                      );
                    case 7:
                      return [3, 9];
                    case 8:
                      this.m_rgChatMessages.push({
                        type: d.a.Notification,
                        msg: Object(wt.f)("#BroadcastChat_UserUnmutedLocal", t),
                        client_ts: Number(new Date()),
                        instance_id: this.m_unInstanceID,
                        in_game: !1,
                        persona_name: "",
                        steamid: "",
                      }),
                        (n.label = 9);
                    case 9:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.RemoveUserMessagesLocal = function (e) {
              this.m_rgChatMessages = this.m_rgChatMessages.filter(function (
                t
              ) {
                return t.steamid !== e;
              });
            }),
            (e.prototype.RemoveUserMessagesServer = function (e, t) {
              return Object(n.b)(this, void 0, void 0, function () {
                var r, i;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      if (e == this.m_strUserSteamID) return [2];
                      n.label = 1;
                    case 1:
                      return (
                        n.trys.push([1, 6, , 7]),
                        this.m_webApiToken
                          ? ((r = new FormData()).append(
                              "chat_id",
                              this.m_ulChatID
                            ),
                            r.append("user_steamid", e),
                            [
                              4,
                              l.a.post(
                                zt.c.WEBAPI_BASE_URL +
                                  "IBroadcastService/RemoveUserChatText/v0001/?access_token=" +
                                  this.m_webApiToken,
                                r
                              ),
                            ])
                          : [3, 3]
                      );
                    case 2:
                      return n.sent(), [3, 5];
                    case 3:
                      return (
                        (i = m.b.Init(q)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          user_steamid: e,
                        }),
                        [
                          4,
                          j.RemoveUserChatText(
                            this.m_webAPIInterface.GetServiceTransport(),
                            i
                          ),
                        ]
                      );
                    case 4:
                      n.sent(), (n.label = 5);
                    case 5:
                      return [3, 7];
                    case 6:
                      return (
                        n.sent(),
                        this.m_rgChatMessages.push({
                          type: d.a.Error,
                          msg: Object(wt.f)(
                            "#BroadcastChat_RemoveMessagesFailed",
                            t
                          ),
                          client_ts: Number(new Date()),
                          instance_id: this.m_unInstanceID,
                          in_game: !1,
                          persona_name: "",
                          steamid: "",
                        }),
                        [3, 7]
                      );
                    case 7:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.UpdateChatMessageFlair = function (e) {
              return Object(n.b)(this, void 0, void 0, function () {
                var t, r;
                return Object(n.e)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return this.m_webApiToken
                        ? ((t = new FormData()).append(
                            "chat_id",
                            this.m_ulChatID
                          ),
                          t.append(
                            "flair",
                            "^" + this.m_strFlairGroupID + "^:" + e + ":"
                          ),
                          [
                            4,
                            l.a.post(
                              zt.c.WEBAPI_BASE_URL +
                                "IBroadcastService/UpdateChatMessageFlair/v0001/?access_token=" +
                                this.m_webApiToken,
                              t
                            ),
                          ])
                        : [3, 2];
                    case 1:
                      return n.sent(), [3, 4];
                    case 2:
                      return (
                        (r = m.b.Init(D)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          flair: "^" + this.m_strFlairGroupID + "^:" + e + ":",
                        }),
                        [
                          4,
                          j.UpdateChatMessageFlair(
                            this.m_webAPIInterface.GetServiceTransport(),
                            r
                          ),
                        ]
                      );
                    case 3:
                      n.sent(), (n.label = 4);
                    case 4:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.IsUserMutedLocally = function (e) {
              return Boolean(this.m_mapMutedUsers[e]);
            }),
            (e.prototype.BIsUserBroadcastModerator = function (e) {
              return this.m_mapBroadcastModeratorUsers.has(e);
            }),
            (e.prototype.IsUserBroadcaster = function (e) {
              return e === this.m_ulBroadcastSteamID;
            }),
            (e.prototype.SyncChat = function () {
              (this.m_tsFirstRequest = null),
                (this.m_nFromFirstRequestMS = 0),
                (this.m_nNextChatTS = 0),
                (this.m_rgChatMessages = []);
            }),
            Object(n.c)(
              [i.C],
              e.prototype,
              "m_mapChannelModeratorUsers",
              void 0
            ),
            Object(n.c)(
              [i.C],
              e.prototype,
              "m_mapBroadcastModeratorUsers",
              void 0
            ),
            Object(n.c)([i.C], e.prototype, "m_nRateLimitSeconds", void 0),
            Object(n.c)([i.C], e.prototype, "m_bRateLimited", void 0),
            Object(n.c)([i.C], e.prototype, "m_rgChatMessages", void 0),
            Object(n.c)([Mt.a], e.prototype, "FetchChatModerators", null),
            Object(n.c)([Mt.a], e.prototype, "RequestLoop", null),
            Object(n.c)([Mt.a], e.prototype, "MuteUserForSession", null),
            e
          );
        })(),
        Vt = new Lt();
      window.g_BroadcastChatStore = Vt;
      var qt = r("1BdX"),
        Ht = r("a5LV"),
        Kt = r("Z9dU"),
        Yt = r.n(Kt),
        Jt = r("y+6m"),
        Xt = r("Mgs7"),
        $t = r("Gorr"),
        Qt = r("0QoN"),
        Zt = r("BFsE"),
        er = r("gPCo"),
        tr = r("5znp"),
        rr = r.n(tr),
        nr = function () {
          return s.a.createElement(
            "div",
            { className: rr.a.FriendsListInsetShadowCtn },
            s.a.createElement("div", {
              className: rr.a.FriendListInsetShadowTop,
            })
          );
        },
        ir = function () {
          return s.a.createElement(
            "div",
            { className: rr.a.FriendsListInsetShadowCtn },
            s.a.createElement("div", {
              className: rr.a.FriendListInsetShadowBottom,
            })
          );
        },
        ar = r("6Y59"),
        or = r("exH9"),
        sr = r("opsS"),
        cr = r("3sYe"),
        ur = r.n(cr),
        lr = new RegExp("ː([^ː]*)ː", "g"),
        dr =
          (new RegExp("(https?://[^ '\"<>]*)", "gi"),
          new RegExp(
            "^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)",
            "i"
          ));
      var mr = function (e) {
          var t = e.userType,
            r = e.msg,
            n = e.presenterInfo;
          if ("presenter" === t)
            return o.createElement(
              "span",
              null,
              o.createElement(
                er.b,
                {
                  name: n.name,
                  title: n.title,
                  photo: n.photo,
                  company: n.company,
                  bioString: n.bio,
                },
                o.createElement(
                  "a",
                  {
                    className: Object(or.a)(
                      ur.a.MessageName,
                      ur.a.MessagePresenter
                    ),
                    href: zt.c.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  r.persona_name
                )
              )
            );
          var i = null;
          return (
            "broadcaster" === t
              ? (i = ur.a.MessageBroadcaster)
              : "moderator" === t && (i = ur.a.MessageModerator),
            o.createElement(
              "span",
              null,
              o.createElement(
                "a",
                {
                  className: Object(or.a)(ur.a.MessageName, i),
                  href: zt.c.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
                  "data-miniprofile": "s" + r.steamid,
                  target: "_blank",
                  rel: "noopener noreferrer",
                },
                r.persona_name
              )
            )
          );
        },
        fr = function (e) {
          switch (e.userType) {
            case "presenter":
              return o.createElement(
                "span",
                {
                  className: ur.a.RoleFlairContainer,
                  "data-tooltip-text": Object(wt.f)(
                    "#BroadcastChat_Role_Presenter_ttip"
                  ),
                },
                o.createElement(ar.h, null)
              );
            case "moderator":
              return o.createElement(
                "span",
                {
                  className: ur.a.RoleFlairContainer,
                  "data-tooltip-text": Object(wt.f)(
                    "#BroadcastChat_Role_Moderatorr_ttip"
                  ),
                },
                o.createElement(ar.i, null)
              );
            case "broadcaster":
              return o.createElement(
                "span",
                {
                  className: ur.a.RoleFlairContainer,
                  "data-tooltip-text": Object(wt.f)(
                    "#BroadcastChat_Role_Broadcaster_ttip"
                  ),
                },
                o.createElement(ar.g, null)
              );
            default:
              return null;
          }
        },
        br = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.m_chat = null), (t.messagesContainer = o.createRef()), t;
          }
          return (
            Object(n.d)(t, e),
            (t.prototype.componentDidMount = function () {
              this.StartChat();
            }),
            (t.prototype.componentDidUpdate = function (e) {
              this.m_chat &&
                this.m_chat.m_bAutoScroll &&
                this.ScrollToNewestMessages(),
                (this.props.steamID === e.steamID &&
                  this.props.broadcastID === e.broadcastID &&
                  this.props.broadcastChannelID === e.broadcastChannelID) ||
                  this.StartChat();
            }),
            (t.prototype.componentWillUnmount = function () {
              this.m_chat && this.m_chat.Stop();
            }),
            (t.prototype.StartChat = function () {
              if (
                (this.m_chat && this.m_chat.Stop(),
                (this.m_chat = Vt.GetOrCreateChat(
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
                var e = this.props.broadcastID || "0";
                this.m_chat.StartForSteamID(this.props.steamID, e),
                  this.ScrollToNewestMessages();
              }
            }),
            (t.prototype.IsTrustedDomain = function (e) {
              return !!e.match(dr);
            }),
            (t.prototype.AddLinksEmoticons = function (e, t) {
              t && this.m_chat.GetUserEmoticons();
              for (var r = e.split(lr), n = [], i = 0; i < r.length; i += 1)
                i % 2 == 1
                  ? n.push(
                      o.createElement($t.b, {
                        emoticonHoverStore: Ht.b,
                        key: i,
                        emoticon: r[i],
                        large: !0,
                      })
                    )
                  : n.push(r[i]);
              return n;
            }),
            (t.prototype.HandleScroll = function (e) {
              var t = this.props.bInvertLayout
                ? e.currentTarget.scrollTop < 6
                : e.currentTarget.scrollTop + e.currentTarget.clientHeight >=
                  e.currentTarget.scrollHeight - 6;
              this.m_chat && (this.m_chat.m_bAutoScroll = t);
            }),
            (t.prototype.ScrollToNewestMessages = function () {
              this.messagesContainer &&
                this.messagesContainer.current &&
                (this.messagesContainer.current.scrollTop = this.props
                  .bInvertLayout
                  ? 0
                  : this.messagesContainer.current.scrollHeight);
            }),
            (t.prototype.OnContextMenu = function (e, t) {
              var r = this;
              if (t.type !== d.a.Chat) return null;
              var n = [],
                i = this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID()),
                a = this.m_chat.BIsUserBroadcastModerator(
                  this.m_chat.GetUserSteamID()
                );
              ((zt.h && zt.h.is_support) || i || a
                ? n.push(
                    o.createElement(
                      Jt.d,
                      {
                        key: "remove",
                        onSelected: function () {
                          return r.m_chat.RemoveUserMessagesServer(
                            t.steamid,
                            t.persona_name
                          );
                        },
                      },
                      Object(wt.f)("#BroadcastChat_RemoveMessages")
                    ),
                    o.createElement(
                      Jt.d,
                      {
                        key: "updatebanh",
                        onSelected: function () {
                          return r.m_chat.UpdateUserChatBan(
                            t.steamid,
                            1,
                            12,
                            !1,
                            t.persona_name
                          );
                        },
                      },
                      Object(wt.f)("#BroadcastChat_half_Mute")
                    ),
                    o.createElement(
                      Jt.d,
                      {
                        key: "updateband",
                        onSelected: function () {
                          return r.m_chat.UpdateUserChatBan(
                            t.steamid,
                            1,
                            24,
                            !1,
                            t.persona_name
                          );
                        },
                      },
                      Object(wt.f)("#BroadcastChat_day_Mute")
                    ),
                    o.createElement(
                      Jt.d,
                      {
                        key: "updatebanw",
                        onSelected: function () {
                          return r.m_chat.UpdateUserChatBan(
                            t.steamid,
                            1,
                            168,
                            !1,
                            t.persona_name
                          );
                        },
                      },
                      Object(wt.f)("#BroadcastChat_week_Mute")
                    ),
                    o.createElement(
                      Jt.d,
                      {
                        key: "updatebanp",
                        onSelected: function () {
                          return r.m_chat.UpdateUserChatBan(
                            t.steamid,
                            1,
                            0,
                            !0,
                            t.persona_name
                          );
                        },
                      },
                      Object(wt.f)("#BroadcastChat_perm_Mute")
                    ),
                    o.createElement(
                      Jt.d,
                      {
                        key: "removeban",
                        onSelected: function () {
                          return r.m_chat.UpdateUserChatBan(
                            t.steamid,
                            0,
                            0,
                            !1,
                            t.persona_name,
                            !0
                          );
                        },
                      },
                      Object(wt.f)("#BroadcastChat_Unmute")
                    )
                  )
                : this.m_chat.IsUserMutedLocally(t.steamid)
                ? n.push(
                    o.createElement(
                      Jt.d,
                      {
                        key: "unmuteuser",
                        onSelected: function () {
                          return r.m_chat.UnmuteUserForSession(
                            t.steamid,
                            t.persona_name
                          );
                        },
                      },
                      Object(wt.f)("#BroadcastChat_UnmuteLocal")
                    )
                  )
                : n.push(
                    o.createElement(
                      Jt.d,
                      {
                        key: "muteuser",
                        onSelected: function () {
                          return r.m_chat.MuteUserForSession(
                            t.steamid,
                            t.persona_name
                          );
                        },
                      },
                      Object(wt.f)("#BroadcastChat_MuteLocal")
                    )
                  ),
              (zt.h && zt.h.is_support) ||
                this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID())) &&
                t.steamid &&
                (this.m_chat.BIsUserBroadcastModerator(t.steamid)
                  ? n.push(
                      o.createElement(
                        Jt.d,
                        {
                          key: "removemod",
                          onSelected: function () {
                            return r.m_chat.UpdateBroadcastChatModerator(
                              t.steamid,
                              !1,
                              t.persona_name
                            );
                          },
                        },
                        Object(wt.f)("#BroadcastChat_Remove_Moderator")
                      )
                    )
                  : n.push(
                      o.createElement(
                        Jt.d,
                        {
                          key: "addmod",
                          onSelected: function () {
                            return r.m_chat.UpdateBroadcastChatModerator(
                              t.steamid,
                              !0,
                              t.persona_name
                            );
                          },
                        },
                        Object(wt.f)("#BroadcastChat_Add_Moderator")
                      )
                    ));
              return n.length
                ? Object(c.a)(
                    o.createElement(
                      Jt.c,
                      null,
                      o.createElement(
                        "div",
                        { className: ur.a.SelectedUserNameCtn },
                        Object(wt.f)("#BroadcastChat_User"),
                        o.createElement("br", null),
                        o.createElement(
                          "span",
                          { className: ur.a.SelectedUserName },
                          t.persona_name
                        )
                      ),
                      n
                    ),
                    e
                  )
                : null;
            }),
            (t.prototype.GetTypeClassName = function (e) {
              return e.type === d.a.Notification
                ? ur.a.MessageNotification
                : e.type === d.a.Error
                ? ur.a.MessageError
                : ur.a.MessageChat;
            }),
            (t.prototype.FormatMessage = function (e, t) {
              if (e.type === d.a.Chat) {
                var r = t ? t.FilterText(e.steamid, e.msg) : e.msg;
                return this.AddLinksEmoticons(r, !1);
              }
              return e.msg;
            }),
            (t.prototype.RenderUserChatLine = function (e, t, r) {
              var n = this,
                i = r ? r.get(e.steamid) : void 0,
                a =
                  e.type === d.a.Chat
                    ? (function (e, t, r) {
                        return r
                          ? "presenter"
                          : t.GetBroadcastSteamID() === e
                          ? "broadcaster"
                          : t.BIsUserBroadcastModerator(e)
                          ? "moderator"
                          : "";
                      })(e.steamid, this.m_chat, i)
                    : "";
              return o.createElement(
                "div",
                {
                  key: e.instance_id + "_" + e.client_ts + "_" + t,
                  className: this.GetTypeClassName(e),
                  onContextMenu: function (t) {
                    return n.OnContextMenu(t, e);
                  },
                },
                e.type === d.a.Chat && o.createElement(fr, { userType: a }),
                e.flair &&
                  o.createElement(
                    "span",
                    { className: ur.a.FlairContainer },
                    this.AddLinksEmoticons(e.flair, !1)
                  ),
                e.type === d.a.Chat &&
                  o.createElement(mr, {
                    userType: a,
                    msg: e,
                    presenterInfo: i,
                  }),
                e.type === d.a.Chat &&
                  this.m_chat.GetBroadcastSteamID() === e.steamid &&
                  o.createElement(
                    "span",
                    {
                      className:
                        ur.a.MessageNotification + " " + ur.a.MessageContents,
                    },
                    " (" + Object(wt.f)("#BroadcastChat_Broadcaster") + ")"
                  ),
                e.type === d.a.Chat &&
                  this.m_chat.m_mapChannelModeratorUsers.get(e.steamid) &&
                  o.createElement(
                    "span",
                    {
                      className:
                        ur.a.MessageNotification + " " + ur.a.MessageContents,
                    },
                    " (" + Object(wt.f)("#BroadcastChat_Moderator") + ")"
                  ),
                o.createElement(
                  "span",
                  {
                    className:
                      ur.a.MessageContents +
                      " " +
                      (this.AddLinksEmoticons(e.msg, !1).filter(function (e) {
                        return e && "string" == typeof e;
                      }).length
                        ? ""
                        : ur.a.EmoticonsOnly),
                  },
                  e.type === d.a.Chat ? " : " : "",
                  this.FormatMessage(e, this.m_chat.TextFilterStore)
                )
              );
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                r = t.hidden,
                n = t.bPartnerMemberOnlyChat,
                i = t.bInvertLayout,
                a = this.m_chat ? this.m_chat.m_rgChatMessages : [],
                s = i ? a.reverse() : a,
                c = this.m_chat
                  ? qt.b.GetPresenterMapForBroadcasterSteamID(
                      this.m_chat.GetBroadcastSteamID()
                    )
                  : void 0;
              return o.createElement(
                "div",
                {
                  className: Object(or.a)(ur.a.ChatPanel, "ChatPanel"),
                  style: r ? { display: "none" } : void 0,
                },
                i &&
                  !!this.m_chat &&
                  o.createElement(pr, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: n,
                  }),
                o.createElement(nr, null),
                o.createElement(
                  "div",
                  {
                    className: Object(or.a)(
                      ur.a.ChatMessages + " " + Yt.a.minHeightZero,
                      "ChatMessages"
                    ),
                    onScroll: this.HandleScroll,
                    ref: this.messagesContainer,
                  },
                  s.map(function (t, r) {
                    return e.RenderUserChatLine(t, r, c);
                  })
                ),
                o.createElement(ir, null),
                !i &&
                  !!this.m_chat &&
                  o.createElement(pr, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: n,
                  })
              );
            }),
            Object(n.c)([i.C], t.prototype, "m_chat", void 0),
            Object(n.c)([sr.a], t.prototype, "StartChat", null),
            Object(n.c)([sr.a], t.prototype, "HandleScroll", null),
            Object(n.c)([sr.a], t.prototype, "OnContextMenu", null),
            Object(n.c)([sr.a], t.prototype, "RenderUserChatLine", null),
            (t = Object(n.c)([a.a], t))
          );
        })(o.Component);
      function pr(e) {
        var t = e.oChat,
          r = e.emoticonStore;
        return !e.bPartnerMemberOnlyChat ||
          ((null === zt.h || void 0 === zt.h ? void 0 : zt.h.logged_in) &&
            (null === zt.h || void 0 === zt.h
              ? void 0
              : zt.h.is_partner_member))
          ? (null === zt.h || void 0 === zt.h ? void 0 : zt.h.logged_in)
            ? o.createElement(_r, { oChat: t, emoticonStore: r })
            : null
          : o.createElement(yr, null);
      }
      function _r(e) {
        var t = e.oChat,
          r = e.emoticonStore,
          i = o.useState(""),
          a = i[0],
          s = i[1],
          c = o.useRef(),
          u = o.useCallback(
            function (e) {
              !!e.shiftKey ||
                13 !== e.charCode ||
                (t.m_bRateLimited || (t.SendMessage(a), s("")),
                e.preventDefault());
            },
            [t, a]
          ),
          l = o.useCallback(
            function (e, t) {
              void 0 === t && (t = !1),
                s(a + "ː" + e + "ː"),
                (null == c ? void 0 : c.current) && c.current.focus();
            },
            [a, c]
          );
        return o.createElement(
          "div",
          { className: Object(or.a)(ur.a.ChatEntryCtn, "ChatEntryCtn") },
          o.createElement(
            "div",
            { className: Object(or.a)(ur.a.ChatEntry, "ChatEntry") },
            o.createElement(
              "form",
              { className: "" + Yt.a.chatEntryControls },
              o.createElement("textarea", {
                className: Yt.a.chatTextarea,
                placeholder: Object(wt.f)("#BroadcastChat_EnterResponse"),
                onKeyPress: u,
                onChange: function (e) {
                  return s(e.target.value);
                },
                value: a,
                ref: c,
              }),
              Boolean(t.m_bRateLimited) &&
                o.createElement(Br, {
                  nSeconds: t.m_nRateLimitSeconds,
                  bRateLimited: t.m_bRateLimited,
                }),
              o.createElement(
                "button",
                {
                  className:
                    Yt.a.chatSubmitButton + " " + (a ? "" : Yt.a.disabled),
                  title: Object(wt.f)("#ChatEntryButton_Submit"),
                  disabled: t.m_bRateLimited || 0 == a.trim().length,
                  onClick: function () {
                    t.SendMessage(a), s("");
                  },
                },
                o.createElement(ar.ib, null)
              )
            ),
            o.createElement(
              "div",
              {
                style: { height: "50px" },
                className: "" + Yt.a.chatEntryActionsContainer,
              },
              o.createElement(
                "div",
                { className: Yt.a.chatEntryActionsGroup },
                o.createElement(Qt.a, {
                  disabled: !1,
                  OnEmoticonSelected: l,
                  rtLastAckedNewEmoticons: Number.MAX_VALUE,
                  emoticonStore: r,
                  emoticonHoverStore: Ht.b,
                }),
                o.createElement(hr, Object(n.a)({}, e, { textInputRef: c }))
              )
            )
          )
        );
      }
      function hr(e) {
        var t,
          r = e.oChat,
          n = e.emoticonStore,
          i = e.textInputRef;
        return r.m_strFlairGroupID &&
          n.flair_list &&
          (null === (t = n.GetFlairListByGroupID(r.m_strFlairGroupID)) ||
          void 0 === t
            ? void 0
            : t.length)
          ? o.createElement(Qt.a, {
              disabled: !1,
              OnEmoticonSelected: function (e) {
                r.UpdateChatMessageFlair(e),
                  (null == i ? void 0 : i.current) && i.current.focus();
              },
              rtLastAckedNewEmoticons: Number.MAX_VALUE,
              emoticonStore: n,
              emoticonHoverStore: Ht.b,
              strFlairGroupID: r.m_strFlairGroupID,
              title: Object(wt.f)("#ChatEntryButton_Flair"),
              buttonIcon: o.createElement(ar.j, null),
            })
          : null;
      }
      var Br = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(n.d)(t, e),
          (t.prototype.render = function () {
            return o.createElement(
              "div",
              { className: ur.a.TimedProgressBarContainer },
              o.createElement(
                "div",
                { className: ur.a.wrapper },
                o.createElement("div", {
                  className: ur.a.spinner + " " + ur.a.pie,
                  style: {
                    animationDuration: (this.props.nSeconds || 0) + "s",
                  },
                }),
                o.createElement("div", {
                  className: ur.a.filler + " " + ur.a.pie,
                  style: {
                    animationDuration: (this.props.nSeconds || 0) + "s",
                  },
                }),
                o.createElement("div", {
                  className: ur.a.mask,
                  style: {
                    animationDuration: (this.props.nSeconds || 0) + "s",
                  },
                })
              )
            );
          }),
          t
        );
      })(o.Component);
      function yr(e) {
        return o.createElement(
          "div",
          { className: ur.a.Description },
          o.createElement(
            "div",
            { className: ur.a.LogInPrompt },
            Object(wt.f)("#Broadcast_PartnerChat_Login")
          ),
          !zt.h.logged_in &&
            o.createElement(
              Xt.d,
              { onClick: Zt.a, className: Object(or.a)(ur.a.SignInButton) },
              Object(wt.f)("#Login_SignIn")
            )
        );
      }
    },
    h5cq: function (e, t, r) {
      e.exports = {
        AvatarCtn: "communityavatar_AvatarCtn_3n3n0",
        NameAndProps: "communityavatar_NameAndProps_3Pljh",
      };
    },
    jUCX: function (e, t, r) {
      "use strict";
      r.d(t, "c", function () {
        return l;
      }),
        r.d(t, "b", function () {
          return d;
        });
      var n = r("mrSG"),
        i = r("2vnA"),
        a = r("Gp1o"),
        o = r("qD+2"),
        s = r("TLQK"),
        c = r("lkRc"),
        u = r("8H1D");
      function l(e) {
        var t = "offline";
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
        return u.a;
      });
      var d = (function () {
        function e(e) {
          (this.m_bInitialized = !1),
            (this.m_ePersonaState = 0),
            (this.m_unGamePlayedAppID = 0),
            (this.m_gameid = "0"),
            (this.m_unPersonaStateFlags = 0),
            (this.m_strPlayerName = ""),
            (this.m_strAvatarHash = u.b),
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
        return (
          (e.prototype.Reset = function () {
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
          }),
          (e.prototype.GetAccountID = function () {
            return this.m_steamid.GetAccountID();
          }),
          Object.defineProperty(e.prototype, "is_online", {
            get: function () {
              return 0 != this.m_ePersonaState && 7 != this.m_ePersonaState;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "is_ingame", {
            get: function () {
              return (
                this.is_online &&
                (0 != this.m_unGamePlayedAppID || "0" != this.m_gameid)
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "is_watchingbroadcast", {
            get: function () {
              return !!this.m_broadcastAccountId;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "is_in_nonsteam_game", {
            get: function () {
              return 0 == this.m_unGamePlayedAppID && "0" != this.m_gameid;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "is_in_joinable_game", {
            get: function () {
              return (
                this.has_joinable_game_flag ||
                this.is_in_valid_lobby ||
                this.has_server_ip
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "has_joinable_game_flag", {
            get: function () {
              return 0 != (2 & this.m_unPersonaStateFlags);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "connect_string", {
            get: function () {
              return this.m_mapRichPresence.get("connect");
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "is_in_valid_lobby", {
            get: function () {
              return this.m_game_lobby_id && "0" != this.m_game_lobby_id;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "has_server_ip", {
            get: function () {
              return 0 != this.m_unGameServerIP;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "is_awayOrSnooze", {
            get: function () {
              return 3 == this.m_ePersonaState || 4 == this.m_ePersonaState;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.HasStateFlag = function (e) {
            return 0 != (this.m_unPersonaStateFlags & e);
          }),
          Object.defineProperty(e.prototype, "last_seen_online", {
            get: function () {
              return this.m_rtLastSeenOnline;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.ClearStateOnDisconnect = function () {
            0 != this.m_ePersonaState && this.Reset();
          }),
          Object.defineProperty(e.prototype, "is_golden", {
            get: function () {
              return this.HasStateFlag(4);
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.GetCurrentGameName = function () {
            return this.m_strGameExtraInfo
              ? this.m_strGameExtraInfo
              : this.m_unGamePlayedAppID
              ? o.a.GetAppInfo(this.m_unGamePlayedAppID).name
              : "";
          }),
          (e.prototype.GetCurrentGameIconURL = function () {
            return this.m_unGamePlayedAppID
              ? o.a.GetAppInfo(this.m_unGamePlayedAppID).icon_url
              : "";
          }),
          (e.prototype.GetCurrentGameLogoURL = function () {
            return this.m_unGamePlayedAppID
              ? o.a.GetAppInfo(this.m_unGamePlayedAppID).logo_url
              : "";
          }),
          (e.prototype.GetBroadcastGameLogoURL = function () {
            return this.m_broadcastAppId
              ? o.a.GetAppInfo(this.m_broadcastAppId).logo_url
              : "";
          }),
          (e.prototype.BIsAppInfoReady = function () {
            return (
              !this.m_unGamePlayedAppID ||
              o.a.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
            );
          }),
          (e.prototype.HasCurrentGameRichPresence = function () {
            return this.m_mapRichPresence.has("steam_display");
          }),
          (e.prototype.GetCurrentGameRichPresence = function () {
            if (this.HasCurrentGameRichPresence()) {
              var e = o.a.GetRichPresenceLoc(this.m_unGamePlayedAppID);
              if (e) {
                var t = this.m_mapRichPresence.get("steam_display");
                return e.Localize(t, this.m_mapRichPresence);
              }
            } else if (this.HasStateFlag(8))
              return Object(s.f)("#PersonaStateRemotePlayTogether");
            return "";
          }),
          (e.prototype.GetOfflineStatusUpdateRate = function () {
            if (0 == this.last_seen_online) return 3e4;
            var e = 3600,
              t = 1e3,
              r = o.a.CMInterface.GetServerRTime32() - this.last_seen_online;
            return (t *= r > 86400 ? e : r > 7200 ? 60 : 15);
          }),
          (e.prototype.GetOfflineStatusTime = function () {
            if (0 == this.last_seen_online)
              return Object(s.f)("#PersonaStateOffline");
            var e = this.GetOfflineStatusUpdateRate();
            (!c.c.IN_MOBILE || e <= 60) && Object(a.b)(e);
            var t = o.a.CMInterface.GetServerRTime32() - this.last_seen_online;
            return t < 60
              ? Object(s.f)("#PersonaStateLastSeen_JustNow")
              : Object(s.f)("#PersonaStateLastSeen", Object(s.q)(t));
          }),
          (e.prototype.GetLocalizedOnlineStatus = function () {
            switch (this.m_ePersonaState) {
              case 0:
              case 7:
                return this.GetOfflineStatusTime();
              case 1:
                return Object(s.f)("#PersonaStateOnline");
              case 2:
                return Object(s.f)("#PersonaStateBusy");
              case 3:
                return Object(s.f)("#PersonaStateAway");
              case 4:
                return Object(s.f)("#PersonaStateSnooze");
              case 5:
                return Object(s.f)("#PersonaStateLookingToTrade");
              case 6:
                return Object(s.f)("#PersonaStateLookingToPlay");
              default:
                return "";
            }
          }),
          Object.defineProperty(e.prototype, "has_public_party_beacon", {
            get: function () {
              return this.m_mapRichPresence.has("__beacon") && this.is_ingame;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "player_group", {
            get: function () {
              return this.m_mapRichPresence.has("steam_player_group")
                ? this.m_mapRichPresence.get("steam_player_group")
                : "";
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "player_group_size", {
            get: function () {
              return this.m_mapRichPresence.has("steam_player_group_size")
                ? Number.parseInt(
                    this.m_mapRichPresence.get("steam_player_group_size")
                  )
                : 0;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "online_state", {
            get: function () {
              return this.is_online
                ? this.is_ingame
                  ? "in-game"
                  : this.m_broadcastAccountId
                  ? "watchingbroadcast"
                  : "online"
                : "offline";
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.BHasAvatarSet = function () {
            return this.m_strAvatarHash != u.b;
          }),
          Object.defineProperty(e.prototype, "avatar_url", {
            get: function () {
              return Object(u.a)(this.m_strAvatarHash);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "avatar_url_medium", {
            get: function () {
              return Object(u.a)(this.m_strAvatarHash, "medium");
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "avatar_url_full", {
            get: function () {
              return Object(u.a)(this.m_strAvatarHash, "full");
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.SortStatusComparator = function (e, t, r) {
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
          }),
          Object(n.c)([i.C], e.prototype, "m_bInitialized", void 0),
          Object(n.c)([i.C], e.prototype, "m_ePersonaState", void 0),
          Object(n.c)([i.C], e.prototype, "m_unGamePlayedAppID", void 0),
          Object(n.c)([i.C], e.prototype, "m_gameid", void 0),
          Object(n.c)([i.C], e.prototype, "m_unPersonaStateFlags", void 0),
          Object(n.c)([i.C], e.prototype, "m_strPlayerName", void 0),
          Object(n.c)([i.C], e.prototype, "m_strAvatarHash", void 0),
          Object(n.c)([i.C], e.prototype, "m_rtLastSeenOnline", void 0),
          Object(n.c)([i.C], e.prototype, "m_strGameExtraInfo", void 0),
          Object(n.c)([i.C], e.prototype, "m_unGameServerIP", void 0),
          Object(n.c)([i.C], e.prototype, "m_unGameServerPort", void 0),
          Object(n.c)([i.C], e.prototype, "m_game_lobby_id", void 0),
          Object(n.c)([i.C], e.prototype, "m_bPlayerNamePending", void 0),
          Object(n.c)([i.C], e.prototype, "m_bAvatarPending", void 0),
          Object(n.c)([i.C], e.prototype, "m_broadcastId", void 0),
          Object(n.c)([i.C], e.prototype, "m_broadcastAccountId", void 0),
          Object(n.c)([i.C], e.prototype, "m_broadcastAppId", void 0),
          Object(n.c)([i.C], e.prototype, "m_broadcastViewerCount", void 0),
          Object(n.c)([i.C], e.prototype, "m_strBroadcastTitle", void 0),
          Object(n.c)([i.C], e.prototype, "m_bCommunityBanned", void 0),
          e
        );
      })();
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
