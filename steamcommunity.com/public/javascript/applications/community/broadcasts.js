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
      r.r(t);
      r("xnZ7"), r("idvb");
      function d(e) {
        var n = Object(p.useRef)(null),
          t = Object(p.useState)(null),
          r = t[0],
          i = t[1];
        return (
          Object(p.useEffect)(function () {
            return function () {
              n.current && n.current("BroadcastDebugSection: unmounting");
            };
          }, []),
          h.a.createElement(
            M.a,
            null,
            h.a.createElement(
              "div",
              { className: Object(O.a)(u.Container) },
              h.a.createElement(
                "div",
                { className: u.Controls },
                h.a.createElement(
                  j.d,
                  {
                    onClick: function () {
                      return Object(y.b)(void 0, void 0, void 0, function () {
                        var t, r;
                        return Object(y.e)(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return (
                                n.current && n.current(),
                                (t = B.a.CancelToken.source()),
                                (n.current = t.cancel),
                                (r = i),
                                [4, g.Get().LoadBroadcastDebugInfo(t)]
                              );
                            case 1:
                              return r.apply(void 0, [e.sent()]), [2];
                          }
                        });
                      });
                    },
                  },
                  "(VO) Load Debug Info"
                )
              ),
              h.a.createElement(M.a, null, h.a.createElement(R, { info: r }))
            )
          )
        );
      }
      function l(r) {
        if (!_.i.is_support) return null;
        function t(e, t) {
          Object(E.d)(
            h.a.createElement(k, {
              broadcastSteamID: r.broadcastSteamID,
              strAction: t,
            }),
            Object(P.n)(e)
          );
        }
        var n =
          "https://steamsupport.valvesoftware.com/account/overview/" +
          r.broadcastSteamID.ConvertTo64BitString();
        return h.a.createElement(
          "div",
          { className: Object(O.a)(x.AdminControls, A.a.ValveOnlyBackground) },
          h.a.createElement("div", null, "(VO) Support Tools"),
          h.a.createElement(
            j.d,
            {
              onClick: function (e) {
                return t(e, "frontpage");
              },
            },
            "Remove from Front Page"
          ),
          h.a.createElement(
            j.d,
            {
              onClick: function (e) {
                return t(e, "ban");
              },
            },
            "Ban from Broadcasting"
          ),
          h.a.createElement(
            j.d,
            {
              onClick: function (e) {
                Object(E.d)(
                  h.a.createElement(q, { steamid: r.broadcastSteamID }),
                  Object(P.n)(e)
                );
              },
            },
            "Make Unbannable"
          ),
          h.a.createElement(
            j.d,
            {
              onClick: function (e) {
                return Object(L.d)(e, n);
              },
            },
            "Go to Support Page"
          )
        );
      }
      var p = r("q1tI"),
        h = r.n(p),
        n = r("Ty5D"),
        i = r("nmPn"),
        y = r("mrSG"),
        a = r("vDqi"),
        B = r.n(a),
        m = r("2vnA"),
        o = r("kLLr"),
        f = r("boaH"),
        b = r("bDQf"),
        _ = r("lkRc"),
        g = (function () {
          function e() {
            this.m_curDebugInfo = null;
          }
          return (
            (e.prototype.GetBroadcasterSteamID = function () {
              return this.m_steamid;
            }),
            (e.prototype.GetDebugInfo = function () {
              return this.m_curDebugInfo;
            }),
            (e.prototype.LoadBroadcastDebugInfo = function (o) {
              return Object(y.b)(this, void 0, void 0, function () {
                var t, r, n, i, a;
                return Object(y.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (t =
                        _.c.COMMUNITY_BASE_URL +
                        "broadcast/broadcastdebuginfo"),
                        (r = {
                          steamid: this.m_steamid.ConvertTo64BitString(),
                          origin: self.origin,
                        }),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          B.a.get(t, {
                            params: r,
                            withCredentials: !0,
                            cancelToken: o ? o.token : void 0,
                          }),
                        ]
                      );
                    case 2:
                      return (
                        (n = e.sent()),
                        o && o.token.reason
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
                        (i = e.sent()),
                        (a = Object(b.a)(i)),
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
            (e.prototype.UpdateBroadcastSettings = function (s, c, u) {
              return Object(y.b)(this, void 0, void 0, function () {
                var t, r, n, i, a, o;
                return Object(y.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (t =
                        _.c.COMMUNITY_BASE_URL +
                        "broadcast/updatebroadcastsettings"),
                        (r = {
                          steamid: this.m_steamid.ConvertTo64BitString(),
                          matchid: s,
                          title: c,
                          sessionid: _.c.SESSIONID,
                        }),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          B.a.get(t, {
                            params: r,
                            withCredentials: !0,
                            cancelToken: u ? u.token : void 0,
                          }),
                        ]
                      );
                    case 2:
                      return (
                        (n = e.sent()),
                        u && u.token.reason
                          ? [2, !1]
                          : n &&
                            200 == n.status &&
                            n.data &&
                            1 == n.data.success
                          ? ((i = f.a.GetOrCreateBroadcastInfo(
                              this.m_steamid.ConvertTo64BitString()
                            )) &&
                              Object(m.G)(function () {
                                i.m_strTitle = c;
                              }),
                            [2, !0])
                          : [3, 4]
                      );
                    case 3:
                      return (
                        (a = e.sent()),
                        (o = Object(b.a)(a)),
                        console.error(
                          "UpdateBroadcastSettings: Failed " + o.strErrorMsg,
                          o
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, !1];
                  }
                });
              });
            }),
            (e.prototype.StopBroadcast = function (a) {
              return Object(y.b)(this, void 0, void 0, function () {
                var t, r, n, i;
                return Object(y.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.m_steamid.ConvertTo64BitString()),
                        (r = f.a.GetBroadcast(t)),
                        (n =
                          _.c.COMMUNITY_BASE_URL + "broadcast/stopbroadcast"),
                        (i = {
                          steamid: t,
                          broadcastid: r ? r.m_ulBroadcastID : null,
                          sessionid: _.c.SESSIONID,
                        }),
                        [
                          4,
                          this.InternalSendSimpleGetRequest(
                            "StopBroadcast",
                            n,
                            i,
                            a
                          ),
                        ]
                      );
                    case 1:
                      return [2, e.sent()];
                  }
                });
              });
            }),
            (e.prototype.SetBroadcasterRestrictions = function (a, o, s) {
              return Object(y.b)(this, void 0, void 0, function () {
                var t, r, n, i;
                return Object(y.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.m_steamid.ConvertTo64BitString()),
                        (r = f.a.GetBroadcast(t)),
                        (n =
                          _.c.COMMUNITY_BASE_URL +
                          "broadcast/setbroadcastrestriction"),
                        (i = {
                          steamid: t,
                          broadcastid: r ? r.m_ulBroadcastID : null,
                          type: a,
                          days: o,
                          sessionid: _.c.SESSIONID,
                        }),
                        [
                          4,
                          this.InternalSendSimpleGetRequest(
                            "SetBroadcasterRestrictions",
                            n,
                            i,
                            s
                          ),
                        ]
                      );
                    case 1:
                      return [2, e.sent()];
                  }
                });
              });
            }),
            (e.prototype.SetUnBannable = function (a) {
              return Object(y.b)(this, void 0, void 0, function () {
                var t, r, n, i;
                return Object(y.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.m_steamid.ConvertTo64BitString()),
                        (r = f.a.GetBroadcast(t)),
                        (n = _.c.COMMUNITY_BASE_URL + "broadcast/unban"),
                        (i = {
                          steamid: t,
                          broadcastid: r ? r.m_ulBroadcastID : null,
                          sessionid: _.c.SESSIONID,
                        }),
                        [
                          4,
                          this.InternalSendSimpleGetRequest(
                            "SetUnBannable",
                            n,
                            i,
                            a
                          ),
                        ]
                      );
                    case 1:
                      return [2, e.sent()];
                  }
                });
              });
            }),
            (e.prototype.SendUserReportOnBroadcast = function (a) {
              return Object(y.b)(this, void 0, void 0, function () {
                var t, r, n, i;
                return Object(y.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.m_steamid.ConvertTo64BitString()),
                        (r = f.a.GetBroadcast(t)),
                        (n = _.c.COMMUNITY_BASE_URL + "broadcast/report"),
                        (i = {
                          steamid: t,
                          broadcastid: r ? r.m_ulBroadcastID : null,
                          description: a,
                          sessionid: _.c.SESSIONID,
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
                      return [2, e.sent()];
                  }
                });
              });
            }),
            (e.prototype.InternalSendSimpleGetRequest = function (i, a, o, s) {
              return Object(y.b)(this, void 0, void 0, function () {
                var t, r, n;
                return Object(y.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        e.trys.push([0, 2, , 3]),
                        [
                          4,
                          B.a.get(a, {
                            params: o,
                            withCredentials: !0,
                            cancelToken: s ? s.token : void 0,
                          }),
                        ]
                      );
                    case 1:
                      return (
                        (t = e.sent()),
                        s && s.token.reason
                          ? [2, !1]
                          : t &&
                            200 == t.status &&
                            t.data &&
                            1 == t.data.success
                          ? [2, !0]
                          : [3, 3]
                      );
                    case 2:
                      return (
                        (r = e.sent()),
                        (n = Object(b.a)(r)),
                        console.error(
                          "CCommunityBroadcastStore:" +
                            i +
                            ": Failed " +
                            n.strErrorMsg,
                          n
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
                e.s_Singleton || (e.s_Singleton = new e()).Init(), e.s_Singleton
              );
            }),
            (e.prototype.Init = function () {
              var e = Object(_.g)("broadcastsinfo", "application_config");
              this.ValidateStoreDefault(e) &&
                (this.m_steamid = new o.a(e.steamid));
            }),
            (e.prototype.ValidateStoreDefault = function (e) {
              return (
                !(!e || "object" != typeof e) && "string" == typeof e.steamid
              );
            }),
            Object(y.c)([m.C], e.prototype, "m_curDebugInfo", void 0),
            e
          );
        })(),
        v = r("eN6m"),
        w = r("trWU"),
        S = r("nWbB"),
        M = r("IjL/"),
        C = r("GiuM"),
        O = r("exH9"),
        s = r("eDP5"),
        j = r("Mgs7"),
        z = r("5L1o"),
        c = r("YLyR"),
        u = r("V9dL"),
        R = function (e) {
          var t = e.info,
            r = Object(p.useState)(!1),
            n = r[0],
            i = r[1];
          if (!t) return null;
          var a = g.Get().GetBroadcasterSteamID().ConvertTo64BitString(),
            o = f.a.GetBroadcast(a);
          return h.a.createElement(
            "div",
            { className: u.DisplaySection },
            Boolean(t.last_error_result && 1 != t.last_error_result) &&
              h.a.createElement(
                "div",
                { className: u.SubSection },
                h.a.createElement("div", { className: u.Header }, "Error"),
                h.a.createElement(
                  "div",
                  null,
                  "EResult: ",
                  t.last_error_result,
                  ", occurred ",
                  t.last_error_time,
                  " - ",
                  h.a.createElement(c.a, {
                    dateAndTime: t.last_error_time,
                    bSingleLine: !0,
                  })
                )
              ),
            h.a.createElement(
              "div",
              { className: u.SubSection },
              h.a.createElement(
                "div",
                { className: u.Header },
                "Broadcast Setup"
              ),
              h.a.createElement(
                "div",
                null,
                "Broadcaster: ",
                t.steam_id,
                ", SteamID: ",
                a
              ),
              h.a.createElement(
                "div",
                null,
                "Broadcast Directory: ",
                t.directory_server,
                ", SessionID: ",
                t.broadcast_id
              ),
              h.a.createElement(
                "div",
                null,
                "Broadcast Ingestor: ",
                t.relay_server,
                ", UploadID: ",
                t.upload_id
              ),
              h.a.createElement(
                "div",
                null,
                "Broadcast Origin: ",
                t.origin_server
              ),
              h.a.createElement("div", null, "Broadcast Chat: ", t.chat_server)
            ),
            h.a.createElement(
              "div",
              { className: u.SubSection },
              h.a.createElement("div", { className: u.Header }, "Upload Info"),
              h.a.createElement(
                "div",
                null,
                "Upload Client: ",
                t.remote_address,
                " ",
                Boolean(t.is_rtmp) ? "(RTMP)" : "(STEAM CLIENT)"
              ),
              h.a.createElement(
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
            h.a.createElement(
              "div",
              { className: u.SubSection },
              h.a.createElement("div", { className: u.Header }, "Viewer Info"),
              h.a.createElement(
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
              h.a.createElement(
                "div",
                null,
                "Average time watched: ",
                t.average_watch_duration,
                " seconds"
              ),
              h.a.createElement(
                "div",
                null,
                "Last Minute: ",
                t.added_viewers_last_minute,
                " watch requests, ",
                t.rejected_viewers_last_minute,
                " rejected"
              ),
              h.a.createElement("div", null, "Restrictions: ", t.restriction)
            ),
            h.a.createElement(
              "div",
              { className: u.SubSection },
              h.a.createElement("div", { className: u.Header }, "Settings"),
              h.a.createElement("div", null, "is replay? ", t.is_replay),
              h.a.createElement(
                "div",
                null,
                "is replay local file? ",
                t.is_replay_local_file
              ),
              h.a.createElement(
                "div",
                null,
                "is replay clip? ",
                t.is_replay_local_file
              ),
              h.a.createElement(
                "div",
                null,
                "is replay clip? ",
                t.is_replay_clip
              ),
              h.a.createElement(
                "div",
                null,
                "is capturing VOD? ",
                t.is_capturing_vod
              ),
              h.a.createElement(
                "div",
                null,
                "is white listed for store streaming? ",
                t.is_whitelisted
              )
            ),
            h.a.createElement(
              "div",
              { className: u.SubSection },
              h.a.createElement("div", { className: u.Header }, "App Info"),
              h.a.createElement("div", null, "appid: ", t.app_id),
              h.a.createElement("div", null, "app name: ", t.app_name),
              h.a.createElement("div", null, "broadcast title: ", t.title),
              h.a.createElement("div", null, "thumbnail: ", t.thumbnail_url),
              Boolean(t.thumbnail_url) &&
                h.a.createElement("img", { src: t.thumbnail_url }),
              Boolean(t.app_id && 0 < t.app_id) &&
                h.a.createElement(
                  "div",
                  { className: u.AppSummaryWidgetCtn },
                  h.a.createElement(z.h, { id: t.app_id, type: "game" })
                )
            ),
            h.a.createElement(
              "div",
              { className: u.SubSection },
              h.a.createElement(
                "div",
                { className: u.Header },
                "Manifest Information"
              ),
              h.a.createElement(
                "div",
                null,
                "Heartbeat Interval: ",
                o.m_data.heartbeat_interval
              ),
              h.a.createElement("div", null, "DASH MPEG Url: ", o.m_data.url),
              h.a.createElement("div", null, "HLS Url: ", o.m_data.hls_url)
            ),
            h.a.createElement(
              j.d,
              {
                onClick: function () {
                  return i(!n);
                },
              },
              "Toggle Raw Data"
            ),
            Boolean(n) &&
              h.a.createElement(
                h.a.Fragment,
                null,
                h.a.createElement(
                  "div",
                  { className: u.SubSection },
                  h.a.createElement(s.b, { data: t })
                ),
                h.a.createElement(
                  "div",
                  { className: u.SubSection },
                  h.a.createElement(s.b, { data: o })
                )
              )
          );
        },
        F = r("m0l2"),
        T = r("TyAF"),
        I = r("rKv1"),
        W = r.n(I),
        U = r("TLQK"),
        E = r("ka0M"),
        N = r("Jqb/"),
        P = r("X3Ds"),
        x = r("Pa9b"),
        G = r("fpVW"),
        A = r.n(G),
        D = r("0OaU"),
        L = r("+d9t"),
        k = Object(T.a)(function (e) {
          e.broadcastSteamID;
          var n = e.strAction,
            t = Object(p.useState)(1),
            i = t[0],
            r = t[1],
            a = Object(p.useState)(!1),
            o = a[0],
            s = a[1],
            c = Object(p.useState)(!1),
            u = c[0],
            d = c[1],
            l = Object(p.useState)(!1),
            m = l[0],
            f = l[1],
            b = Object(p.useRef)(null);
          Object(p.useEffect)(function () {
            return function () {
              b.current && b.current("BroadcastConfirmBanAction: unmounting");
            };
          }, []);
          function _() {
            return e.closeModal && e.closeModal();
          }
          return h.a.createElement(
            M.a,
            null,
            h.a.createElement(
              N.g,
              { onEscKeypress: _ },
              h.a.createElement(
                j.f,
                null,
                h.a.createElement(
                  j.k,
                  null,
                  "Remove Broadcast From Front Page"
                ),
                h.a.createElement(
                  j.b,
                  null,
                  h.a.createElement(
                    j.c,
                    null,
                    h.a.createElement(
                      "p",
                      null,
                      "frontpage" == n
                        ? "How long should we prevent the broadcast from appearing in community or store?"
                        : "How long should we prevent the user from Broadcast at all on Steam?"
                    ),
                    h.a.createElement(
                      "div",
                      null,
                      h.a.createElement(j.h, {
                        rgOptions: [
                          { label: "1 Day", data: 1 },
                          { label: "1 Week", data: 7 },
                          { label: "1 Month", data: 30 },
                          { label: "6 Months", data: 180 },
                          { label: "1 Year", data: 365 },
                        ],
                        selectedOption: i,
                        onChange: function (e) {
                          return r(e.data);
                        },
                      }),
                      Boolean(o) && h.a.createElement(D.a, null, " "),
                      Boolean(u) &&
                        h.a.createElement(
                          "div",
                          null,
                          m
                            ? "Successfully Completed Request"
                            : "Failed to complete request, check browser console and/or try again later"
                        )
                    )
                  )
                ),
                h.a.createElement(
                  j.j,
                  null,
                  u
                    ? h.a.createElement(
                        j.q,
                        { onClick: _ },
                        Object(U.f)("#Button_Dismiss")
                      )
                    : h.a.createElement(
                        j.v,
                        null,
                        h.a.createElement(
                          j.d,
                          { onClick: _ },
                          Object(U.f)("#Button_Cancel")
                        ),
                        h.a.createElement(
                          j.q,
                          {
                            onClick: function () {
                              return Object(y.b)(
                                void 0,
                                void 0,
                                void 0,
                                function () {
                                  var t, r;
                                  return Object(y.e)(this, function (e) {
                                    switch (e.label) {
                                      case 0:
                                        s(!(t = !1)), (e.label = 1);
                                      case 1:
                                        return (
                                          e.trys.push([1, , 3, 4]),
                                          b.current && b.current(),
                                          (r = B.a.CancelToken.source()),
                                          (b.current = r.cancel),
                                          [
                                            4,
                                            g
                                              .Get()
                                              .SetBroadcasterRestrictions(
                                                n,
                                                i,
                                                r
                                              ),
                                          ]
                                        );
                                      case 2:
                                        return (
                                          e.sent(), r.token.reason || 0, [3, 4]
                                        );
                                      case 3:
                                        return s(!1), d(!0), f(t), [7];
                                      case 4:
                                        return [2];
                                    }
                                  });
                                }
                              );
                            },
                          },
                          Object(U.f)("#Button_Confirm")
                        )
                      )
                )
              )
            )
          );
        }),
        q = function (e) {
          var t = Object(p.useState)(!1),
            r = t[0],
            n = t[1],
            i = Object(p.useState)(!1),
            a = i[0],
            o = i[1],
            s = Object(p.useState)(!1),
            c = s[0],
            u = s[1],
            d = Object(p.useRef)(null);
          Object(p.useEffect)(function () {
            return function () {
              d.current && d.current("BroadcastMakeUnbannable: unmounting");
            };
          }, []);
          function l() {
            return e.closeModal && e.closeModal();
          }
          return h.a.createElement(
            M.a,
            null,
            h.a.createElement(
              N.g,
              { onEscKeypress: l },
              h.a.createElement(
                j.f,
                null,
                h.a.createElement(j.k, null, "Make Broadcast Unbannable"),
                h.a.createElement(
                  j.b,
                  null,
                  h.a.createElement(
                    j.c,
                    null,
                    h.a.createElement(
                      "p",
                      null,
                      "Prevent automatic, report based banning changes to this strema visibility the stream for 1 week?"
                    ),
                    h.a.createElement(
                      "div",
                      null,
                      Boolean(r) && h.a.createElement(D.a, null, " "),
                      Boolean(a) &&
                        h.a.createElement(
                          "div",
                          null,
                          c
                            ? "Successfully Set Unbannable"
                            : "Failed to make Unbannable"
                        )
                    )
                  )
                ),
                h.a.createElement(
                  j.j,
                  null,
                  a
                    ? h.a.createElement(
                        j.q,
                        { onClick: l },
                        Object(U.f)("#Button_Dismiss")
                      )
                    : h.a.createElement(
                        j.v,
                        null,
                        h.a.createElement(
                          j.d,
                          { onClick: l },
                          Object(U.f)("#Button_Cancel")
                        ),
                        h.a.createElement(
                          j.q,
                          {
                            onClick: function () {
                              return Object(y.b)(
                                void 0,
                                void 0,
                                void 0,
                                function () {
                                  var t, r;
                                  return Object(y.e)(this, function (e) {
                                    switch (e.label) {
                                      case 0:
                                        n(!0), (t = !1), (e.label = 1);
                                      case 1:
                                        return (
                                          e.trys.push([1, , 3, 4]),
                                          d.current && d.current(),
                                          (r = B.a.CancelToken.source()),
                                          (d.current = r.cancel),
                                          [4, g.Get().SetUnBannable(r)]
                                        );
                                      case 2:
                                        return (t = e.sent()), [3, 4];
                                      case 3:
                                        return n(!1), o(!0), u(t), [7];
                                      case 4:
                                        return [2];
                                    }
                                  });
                                }
                              );
                            },
                          },
                          Object(U.f)("#Button_Confirm")
                        )
                      )
                )
              )
            )
          );
        },
        V = r("jUCX"),
        H = r("Gpul"),
        K = r("Qcoi"),
        Y = r("h5cq");
      function X(e) {
        var t = K.a.GetProfileByAccountID(e.GetAccountID());
        if (t) {
          var r = new V.b(e);
          return (
            (r.m_strPlayerName = t.persona_name),
            (r.m_strAvatarHash = t.avatar_hash),
            (r.m_ePersonaState = t.persona_state),
            r
          );
        }
        return null;
      }
      function J(t) {
        t.steamid.GetAccountID();
        var e = Object(p.useState)(X(t.steamid)),
          r = e[0],
          n = e[1],
          i = Object(p.useState)(K.a.GetProfileURLBySteamID(t.steamid)),
          a = i[0],
          o = i[1],
          s = Object(p.useState)(K.a.GetPersonaNameBySteamID(t.steamid)),
          c = s[0],
          u = s[1];
        return (
          Object(p.useEffect)(
            function () {
              r ||
                Object(y.b)(void 0, void 0, void 0, function () {
                  return Object(y.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          K.a.LoadProfiles([t.steamid.ConvertTo64BitString()]),
                        ];
                      case 1:
                        return (
                          e.sent(),
                          n(X(t.steamid)),
                          o(K.a.GetProfileURLBySteamID(t.steamid)),
                          u(K.a.GetPersonaNameBySteamID(t.steamid)),
                          [2]
                        );
                    }
                  });
                });
            },
            [t.steamid, r]
          ),
          h.a.createElement(
            "div",
            { className: Y.AvatarCtn },
            h.a.createElement(
              "a",
              {
                href: a,
                "data-miniprofile": "s" + t.steamid.ConvertTo64BitString(),
              },
              h.a.createElement(H.b, {
                persona: r,
                size: t.size,
                statusPosition: "bottom",
              })
            ),
            h.a.createElement(
              "div",
              { className: Y.NameAndProps },
              Boolean(t.bShowName) &&
                h.a.createElement(
                  "a",
                  {
                    href: a,
                    "data-miniprofile": "s" + t.steamid.ConvertTo64BitString(),
                  },
                  c
                ),
              t.children
            )
          )
        );
      }
      var $ = r("5eAM"),
        Q = r("BFsE"),
        Z = r("6Y59"),
        ee = r("IzPI"),
        te = r("M7Y6"),
        re = Object(T.a)(function (e) {
          var t = e.broadcasterSteamID,
            r = t.ConvertTo64BitString(),
            n = f.a.GetOrCreateBroadcastInfo(r),
            i = Object(p.useState)(
              $.a.GetAppLinkInfo(Number.parseInt(n.m_strAppId))
            ),
            a = i[0],
            o = i[1];
          return (
            Object(p.useEffect)(
              function () {
                var t = Number.parseInt(n.m_strAppId);
                (!a || a.appid != t) &&
                  0 < t &&
                  Object(y.b)(void 0, void 0, void 0, function () {
                    return Object(y.e)(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4, $.a.LoadAppLinkInfo([t])];
                        case 1:
                          return e.sent(), o($.a.GetAppLinkInfo(t)), [2];
                      }
                    });
                  });
              },
              [n.m_strAppId, a]
            ),
            h.a.createElement(
              M.a,
              null,
              h.a.createElement(
                "div",
                { className: te.ProfileCtn },
                h.a.createElement(
                  "a",
                  {
                    href: Object(ee.e)(
                      _.c.STORE_BASE_URL + (a ? "app/" + a.appid : "")
                    ),
                    className: te.GameCapsule,
                  },
                  h.a.createElement("img", { src: a ? a.capsule : "" })
                ),
                h.a.createElement(
                  "div",
                  { className: te.StreamDetailsCtn },
                  h.a.createElement(
                    "div",
                    { className: te.GameAndOptionsCtn },
                    h.a.createElement(
                      "div",
                      { className: te.GameAndViewersCtn },
                      h.a.createElement(ne, { broadcasterSteamID: t }),
                      h.a.createElement(
                        "div",
                        { className: te.ViewerCount },
                        Object(U.l)(
                          "#Broadcast_ViewerCount",
                          n.m_nViewerCount.toLocaleString()
                        )
                      )
                    ),
                    h.a.createElement(ie, { broadcasterSteamID: t })
                  ),
                  h.a.createElement(J, {
                    steamid: t,
                    size: "Medium",
                    bShowName: !0,
                  })
                )
              )
            )
          );
        }),
        ne = Object(T.a)(function (e) {
          var t = e.broadcasterSteamID.ConvertTo64BitString(),
            r = f.a.GetOrCreateBroadcastInfo(t),
            n = Object(p.useState)(
              $.a.GetAppLinkInfo(Number.parseInt(r.m_strAppId))
            ),
            i = n[0],
            a = n[1];
          return (
            Object(p.useEffect)(
              function () {
                var t = Number.parseInt(r.m_strAppId);
                (!i || i.appid != t) &&
                  0 < t &&
                  Object(y.b)(void 0, void 0, void 0, function () {
                    return Object(y.e)(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4, $.a.LoadAppLinkInfo([t])];
                        case 1:
                          return e.sent(), a($.a.GetAppLinkInfo(t)), [2];
                      }
                    });
                  });
              },
              [r.m_strAppId, i]
            ),
            h.a.createElement(
              "div",
              { className: te.BroadcastTitleCtn },
              Object(U.f)("#Broadcast_Playing"),
              h.a.createElement(
                "a",
                {
                  href: Object(ee.e)(
                    _.c.STORE_BASE_URL + (i ? "app/" + i.appid : "")
                  ),
                },
                Boolean(r.m_strAppTitle) ? r.m_strAppTitle : i ? i.title : ""
              ),
              Boolean(r.m_strTitle && 0 < r.m_strTitle.length) &&
                h.a.createElement("span", null, " - ", r.m_strTitle)
            )
          );
        }),
        ie = Object(T.a)(function (e) {
          var t = e.broadcasterSteamID,
            r = t.ConvertTo64BitString();
          f.a.GetOrCreateBroadcastInfo(r);
          return h.a.createElement(
            "div",
            { className: te.BroadcastUserActionsCtn },
            Boolean(
              _.i.steamid != e.broadcasterSteamID.ConvertTo64BitString()
            ) &&
              h.a.createElement(
                j.d,
                {
                  "data-tooltip-text": Object(U.f)(
                    "#Broadcast_User_Report_ttip"
                  ),
                  onClick: function (e) {
                    _.i.logged_in
                      ? Object(E.d)(
                          h.a.createElement(ae, { broadcasterSteamID: t }),
                          Object(P.n)(e)
                        )
                      : Object(E.d)(
                          h.a.createElement(N.c, {
                            strTitle: Object(U.f)(
                              "#EventDisplay_Share_NotLoggedIn"
                            ),
                            strDescription: Object(U.f)(
                              "#EventDisplay_Share_NotLoggedIn_Description"
                            ),
                            strOKButtonText: Object(U.f)("#MobileLogin_SignIn"),
                            onOK: function () {
                              return Object(Q.a)();
                            },
                          }),
                          Object(P.n)(e)
                        );
                  },
                },
                h.a.createElement(Z.x, null)
              ),
            h.a.createElement(
              j.d,
              {
                "data-tooltip-text": Object(U.f)("#Broadcast_User_FAQ_ttip"),
                onClick: function (e) {
                  return Object(L.d)(
                    e,
                    "https://support.steampowered.com/kb_article.php?ref=6730-TOAK-6497"
                  );
                },
              },
              h.a.createElement(Z.A, null)
            )
          );
        }),
        ae = function (t) {
          var e = Object(p.useState)(""),
            r = e[0],
            n = e[1];
          return h.a.createElement(
            N.c,
            {
              strTitle: Object(U.f)("#Broadcast_ReportItem_Title"),
              strDescription: Object(U.f)("#Broadcast_ReportItem_Description"),
              onCancel: t.closeModal,
              bOKDisabled: 0 == r.trim().length,
              onOK: function () {
                return Object(y.b)(void 0, void 0, void 0, function () {
                  return Object(y.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, g.Get().SendUserReportOnBroadcast(r)];
                      case 1:
                        return e.sent(), t.closeModal && t.closeModal(), [2];
                    }
                  });
                });
              },
            },
            h.a.createElement("textarea", {
              value: r,
              onChange: function (e) {
                return n(e.currentTarget.value);
              },
              rows: 10,
              cols: 80,
            })
          );
        },
        oe = r("SdTr"),
        se = r("6oCP"),
        ce = r("TQGK"),
        ue = Object(T.a)(function (e) {
          var t = g.Get().GetBroadcasterSteamID(),
            r = t.ConvertTo64BitString(),
            n = Object(C.d)("muted", !0),
            i = n[0],
            a = (n[1], f.a.GetBroadcast(r)),
            o = f.a.GetOrCreateBroadcastInfo(r),
            s = Object(p.useState)(null),
            c = s[0],
            u = s[1];
          return (
            Object(p.useEffect)(
              function () {
                Object(y.b)(void 0, void 0, void 0, function () {
                  var t;
                  return Object(y.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          ce.a.LoadOGGClanInfoForAppID(
                            Number.parseInt(o.m_strAppId)
                          ),
                        ];
                      case 1:
                        return (t = e.sent()), u(t), [2];
                    }
                  });
                });
              },
              [o.m_strAppId]
            ),
            h.a.createElement(
              h.a.Fragment,
              null,
              h.a.createElement(
                "div",
                { className: Object(O.a)(F.BroadcastPage) },
                h.a.createElement(
                  "div",
                  { className: Object(O.a)(W.a.BroadcastAndChat) },
                  h.a.createElement(
                    M.a,
                    null,
                    h.a.createElement(
                      "div",
                      { className: Object(O.a)(W.a.wrapper) },
                      h.a.createElement(
                        "div",
                        {
                          className: Object(O.a)(
                            W.a.video_placeholder,
                            "video_placeholder_trgt"
                          ),
                        },
                        h.a.createElement(
                          "div",
                          { className: W.a.BroadcastPlayerContainer },
                          h.a.createElement(
                            M.a,
                            null,
                            h.a.createElement(w.a, {
                              steamIDBroadcast: r,
                              watchLocation: 5,
                              bStartMuted: i,
                            })
                          )
                        )
                      )
                    )
                  ),
                  h.a.createElement(
                    "div",
                    { className: W.a.detail_chat_ctn },
                    h.a.createElement(
                      "div",
                      { className: W.a.ChatContainer },
                      h.a.createElement(
                        M.a,
                        null,
                        h.a.createElement(v.a, {
                          emoticonStore: S.f,
                          watchLocation: 6,
                          steamID: r,
                          broadcastID: a ? a.m_ulBroadcastID : void 0,
                        })
                      )
                    )
                  )
                ),
                h.a.createElement(re, { broadcasterSteamID: t }),
                h.a.createElement(de, { steamid: t }),
                Boolean(_.i.is_support) &&
                  h.a.createElement(
                    "div",
                    null,
                    h.a.createElement(l, { broadcastSteamID: t }),
                    h.a.createElement(
                      "div",
                      {
                        className: Object(O.a)(
                          A.a.ValveOnlyBackground,
                          F.DebugCtn
                        ),
                      },
                      h.a.createElement(d, null)
                    )
                  ),
                Boolean(o.m_strAppId && 7 < Number.parseInt(o.m_strAppId)) &&
                  h.a.createElement(
                    "div",
                    { className: F.GameInfoCtn },
                    h.a.createElement(
                      "div",
                      { className: F.GameAboutTitleCtn },
                      h.a.createElement(
                        "div",
                        { className: F.GameAboutTitle },
                        " ",
                        Object(U.f)("#Broadcast_About_Game"),
                        " "
                      ),
                      h.a.createElement(
                        "div",
                        { className: A.a.EventSectionSpacer },
                        " "
                      )
                    ),
                    h.a.createElement(
                      "div",
                      { className: F.GameInfo },
                      h.a.createElement(z.h, {
                        id: Number.parseInt(o.m_strAppId),
                        type: "game",
                      })
                    )
                  ),
                Boolean(c) &&
                  h.a.createElement(
                    "div",
                    { className: F.RelatedEvents },
                    h.a.createElement(oe.a, {
                      clanAccountID: c.clanAccountID,
                      trackingLocation: 6,
                      partnerEventStore: se.d,
                      bViewAllShowInfiniteScroll: !0,
                    })
                  )
              )
            )
          );
        }),
        de = Object(T.a)(function (e) {
          var n = Object(p.useRef)(null),
            t = f.a.GetOrCreateBroadcastInfo(e.steamid.ConvertTo64BitString()),
            r = Object(p.useState)(t.m_strTitle),
            i = r[0],
            a = r[1],
            o = Object(p.useState)(""),
            s = o[0],
            c = o[1],
            u = Object(p.useState)(null),
            d = u[0],
            l = u[1];
          if (
            (Object(p.useEffect)(
              function () {
                return (
                  a(t.m_strTitle),
                  function () {
                    n.current && n.current("BroadcastControls: unmounting");
                  }
                );
              },
              [t.m_strTitle]
            ),
            _.i.accountid != e.steamid.GetAccountID())
          )
            return null;
          return h.a.createElement(
            "div",
            { className: F.ControlCtn },
            h.a.createElement(
              "div",
              { className: F.ControlsTitle },
              Object(U.f)("#Broadcaster_Control_title")
            ),
            h.a.createElement(
              "div",
              { className: F.TitleInput },
              h.a.createElement(
                "div",
                { className: F.Options },
                h.a.createElement(j.l, {
                  type: "text",
                  label: Object(U.f)("#Broadcast_title_title"),
                  onChange: function (e) {
                    return a(e.currentTarget.value || "");
                  },
                  placeholder: Object(U.f)("#Broadcast_title_placeholder"),
                  value: i,
                }),
                h.a.createElement(j.l, {
                  type: "text",
                  label: Object(U.f)("#Broadcast_Control_matchid"),
                  onChange: function (e) {
                    return c(e.currentTarget.value || "");
                  },
                  value: s,
                }),
                h.a.createElement(
                  j.d,
                  {
                    onClick: function () {
                      return Object(y.b)(void 0, void 0, void 0, function () {
                        var t, r;
                        return Object(y.e)(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return (
                                n.current && n.current(),
                                (t = B.a.CancelToken.source()),
                                (n.current = t.cancel),
                                [4, g.Get().UpdateBroadcastSettings(s, i, t)]
                              );
                            case 1:
                              return (
                                (r = e.sent()),
                                t.token.reason ||
                                  l(
                                    Object(U.f)(
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
                    "data-tooltip-text": Object(U.f)(
                      "#Broadcast_save_title_ttip"
                    ),
                  },
                  Object(U.f)("#Broadcast_save_changes")
                )
              ),
              h.a.createElement(
                "div",
                { className: F.StopCtn },
                h.a.createElement(
                  j.d,
                  {
                    onClick: function (e) {
                      Object(E.d)(
                        h.a.createElement(N.c, {
                          strTitle: Object(U.f)(
                            "#Broadcast_Control_StopBroadcast"
                          ),
                          strDescription: Object(U.f)(
                            "#EventEditor_GenericAreYouSure"
                          ),
                          onOK: function () {
                            return Object(y.b)(
                              void 0,
                              void 0,
                              void 0,
                              function () {
                                var t, r;
                                return Object(y.e)(this, function (e) {
                                  switch (e.label) {
                                    case 0:
                                      return (
                                        n.current && n.current(),
                                        (t = B.a.CancelToken.source()),
                                        (n.current = t.cancel),
                                        [4, g.Get().StopBroadcast(t)]
                                      );
                                    case 1:
                                      return (
                                        (r = e.sent()),
                                        t.token.reason ||
                                          l(
                                            Object(U.f)(
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
                        Object(P.n)(e)
                      );
                    },
                  },
                  Object(U.f)("#Broadcast_Control_StopBroadcast")
                ),
                Boolean(d) && h.a.createElement("div", null, d)
              )
            )
          );
        }),
        le = r("9w6b");
      r.d(t, "default", function () {
        return fe;
      });
      var me = {
        BroadcastWatch: function (e) {
          return "/broadcast/(watch|watchnew)/" + e;
        },
      };
      function fe(e) {
        return (
          Object(p.useEffect)(function () {
            le.a.InitGlobal();
          }, []),
          h.a.createElement(
            h.a.Fragment,
            null,
            h.a.createElement(
              n.e,
              null,
              h.a.createElement(n.c, {
                path: me.BroadcastWatch(":steamid_or_user_vanity"),
                render: function (e) {
                  return h.a.createElement(ue, {
                    strSteamID: e.match.params.steamid_or_user_vanity,
                  });
                },
              }),
              h.a.createElement(n.c, { component: i.b })
            )
          )
        );
      }
    },
    Gpul: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return f;
      }),
        r.d(t, "b", function () {
          return a;
        });
      var c = r("mrSG"),
        u = r("q1tI"),
        n = r("TyAF"),
        s = r("jUCX"),
        d = r("exH9"),
        i = r("WeG9"),
        l = r.n(i),
        m = r("lkRc"),
        f = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(c.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.strAvatarURL,
                r = e.size,
                n = e.className,
                i = e.statusStyle,
                a = e.statusPosition,
                o = e.children,
                s = Object(c.f)(e, [
                  "strAvatarURL",
                  "size",
                  "className",
                  "statusStyle",
                  "statusPosition",
                  "children",
                ]);
              return u.createElement(
                "div",
                Object(c.a)(
                  {
                    className: Object(d.a)(
                      l.a.avatarHolder,
                      "avatarHolder",
                      "no-drag",
                      r || "Medium",
                      n
                    ),
                  },
                  s
                ),
                u.createElement("div", {
                  className: Object(d.a)(l.a.avatarStatus, "avatarStatus", a),
                  style: i,
                }),
                u.createElement("img", {
                  className: Object(d.a)(l.a.avatar, "avatar"),
                  src: t,
                  draggable: !1,
                }),
                o
              );
            }),
            t
          );
        })(u.Component),
        a = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(c.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.persona,
                r = e.size,
                n = e.animatedAvatar,
                i = e.className,
                a = Object(c.f)(e, [
                  "persona",
                  "size",
                  "animatedAvatar",
                  "className",
                ]),
                o = "";
              return (
                n && n.image_small && 0 != n.image_small.length
                  ? (o =
                      m.c.MEDIA_CDN_COMMUNITY_URL + "images/" + n.image_small)
                  : t
                  ? ((o = t.avatar_url_medium),
                    "Small" == r || "X-Small" == r
                      ? (o = t.avatar_url)
                      : ("Large" != r && "X-Large" != r && "FillArea" != r) ||
                        (o = t.avatar_url_full))
                  : ((o =
                      m.c.MEDIA_CDN_COMMUNITY_URL +
                      "images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"),
                    "Small" == r || "X-Small" == r
                      ? (o =
                          m.c.MEDIA_CDN_COMMUNITY_URL +
                          "images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg")
                      : ("Large" != r && "X-Large" != r && "FillArea" != r) ||
                        (o =
                          m.c.MEDIA_CDN_COMMUNITY_URL +
                          "images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg")),
                u.createElement(
                  f,
                  Object(c.a)(
                    {
                      strAvatarURL: o,
                      size: r,
                      className: Object(d.a)(Object(s.c)(t), i),
                    },
                    a
                  )
                )
              );
            }),
            (t = Object(c.c)([n.a], t))
          );
        })(u.Component),
        o = Object(n.a)(function (e) {
          var t = e.profileItem,
            r = e.className,
            n = e.bDisableAnimation,
            i = Object(c.f)(e, [
              "profileItem",
              "className",
              "bDisableAnimation",
            ]);
          if (!t || !t.image_small || 0 == t.image_small.length) return null;
          var a = n ? t.image_large : t.image_small;
          return (
            (a = a || t.image_small).startsWith("https://") ||
              (a = m.c.MEDIA_CDN_COMMUNITY_URL + "images/" + a),
            u.createElement(
              "div",
              Object(c.a)(
                { className: Object(d.a)(l.a.avatarFrame, r, "avatarFrame") },
                i
              ),
              u.createElement("img", { className: l.a.avatarFrameImg, src: a })
            )
          );
        });
      u.Component;
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
      var h = r("mrSG"),
        o = r("2vnA"),
        n = r("TyAF"),
        c = r("q1tI"),
        i = r.n(c),
        s = r("TtDX"),
        a = r("vDqi"),
        y = r.n(a),
        B = r("A5MU"),
        l = r("bxBv"),
        u = r("u2yL"),
        d = r("WBba"),
        m = r("kLLr"),
        f = r("hRO2"),
        b = r("OS8t"),
        _ = f.Message;
      var p = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_id || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      thumbnail_upload_address: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      thumbnail_upload_token: {
                        n: 3,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      thumbnail_interval_seconds: {
                        n: 4,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      heartbeat_interval_seconds: {
                        n: 5,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_BeginBroadcastSession_Response";
            }),
            n
          );
        })(_),
        g = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return _.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CBroadcast_EndBroadcastSession_Response";
            }),
            n
          );
        })(_),
        v = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.upload_token || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      upload_token: {
                        n: 1,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      upload_address: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      broadcast_upload_id: {
                        n: 3,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      enable_replay: {
                        n: 6,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                      http_address: {
                        n: 7,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_StartBroadcastUpload_Response";
            }),
            n
          );
        })(_),
        w = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_id || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      upload_token: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      upload_address: {
                        n: 3,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      http_address: {
                        n: 4,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      broadcast_upload_id: {
                        n: 5,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      heartbeat_interval_seconds: {
                        n: 6,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      is_rtmp: { n: 7, br: b.d.readBool, bw: b.h.writeBool },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_BroadcastUploadStarted_Notification";
            }),
            n
          );
        })(_),
        S = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.gameid || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      gameid: {
                        n: 1,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      title: { n: 2, br: b.d.readString, bw: b.h.writeString },
                      num_viewers: {
                        n: 3,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      permission: {
                        n: 4,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                      is_rtmp: { n: 5, br: b.d.readBool, bw: b.h.writeBool },
                      seconds_delay: {
                        n: 6,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                      is_publisher: {
                        n: 7,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                      thumbnail_url: {
                        n: 8,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      update_interval: {
                        n: 9,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                      is_uploading: {
                        n: 10,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                      duration: {
                        n: 11,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      is_replay: { n: 12, br: b.d.readBool, bw: b.h.writeBool },
                      is_capturing_vod: {
                        n: 13,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                      is_store_whitelisted: {
                        n: 14,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastStatus_Response";
            }),
            n
          );
        })(_),
        M = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.thumbnail_url || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      thumbnail_url: {
                        n: 1,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      update_interval: {
                        n: 2,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                      num_viewers: {
                        n: 3,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                      duration: { n: 4, br: b.d.readInt32, bw: b.h.writeInt32 },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastThumbnail_Response";
            }),
            n
          );
        })(_),
        C = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.response || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      response: { n: 1, br: b.d.readEnum, bw: b.h.writeEnum },
                      mpd_url: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      broadcast_id: {
                        n: 3,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      gameid: {
                        n: 4,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      title: { n: 5, br: b.d.readString, bw: b.h.writeString },
                      num_viewers: {
                        n: 6,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      permission: {
                        n: 7,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                      is_rtmp: { n: 8, br: b.d.readBool, bw: b.h.writeBool },
                      seconds_delay: {
                        n: 9,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                      viewer_token: {
                        n: 10,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      hls_m3u8_master_url: {
                        n: 11,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      heartbeat_interval: {
                        n: 12,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                      thumbnail_url: {
                        n: 13,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      is_webrtc: { n: 14, br: b.d.readBool, bw: b.h.writeBool },
                      webrtc_session_id: {
                        n: 15,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      webrtc_offer_sdp: {
                        n: 16,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      webrtc_turn_server: {
                        n: 17,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      is_replay: { n: 18, br: b.d.readBool, bw: b.h.writeBool },
                      duration: {
                        n: 19,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                      cdn_auth_url_parameters: {
                        n: 20,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_WatchBroadcast_Response";
            }),
            n
          );
        })(_);
      var O = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.success || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      success: { n: 1, br: b.d.readBool, bw: b.h.writeBool },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_InviteToBroadcast_Response";
            }),
            n
          );
        })(_),
        j = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return _.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CBroadcast_SendBroadcastStateToServer_Response";
            }),
            n
          );
        })(_),
        z = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.steamid || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      steamid: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      state: { n: 2, br: b.d.readEnum, bw: b.h.writeEnum },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_BroadcastViewerState_Notification";
            }),
            n
          );
        })(_);
      var R,
        F,
        T,
        I,
        W = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_id || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_WaitingBroadcastViewer_Notification";
            }),
            n
          );
        })(_),
        U = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_id || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      broadcast_relay_id: {
                        n: 2,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      upload_result: {
                        n: 3,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      too_many_poor_uploads: {
                        n: 4,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_StopBroadcastUpload_Notification";
            }),
            n
          );
        })(_),
        E = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_id || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_SessionClosed_Notification";
            }),
            n
          );
        })(_),
        N = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_id || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      num_viewers: {
                        n: 2,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_BroadcastStatus_Notification";
            }),
            n
          );
        })(_),
        P = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_channel_id || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      broadcast_channel_name: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      broadcast_channel_avatar: {
                        n: 3,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_BroadcastChannelLive_Notification";
            }),
            n
          );
        })(_),
        x = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.thumbnail_upload_token || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      thumbnail_upload_token: {
                        n: 1,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      thumbnail_broadcast_session_id: {
                        n: 2,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      thumbnail_data: {
                        n: 3,
                        br: b.d.readBytes,
                        bw: b.h.writeBytes,
                      },
                      thumbnail_width: {
                        n: 4,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      thumbnail_height: {
                        n: 5,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_SendThumbnailToRelay_Notification";
            }),
            n
          );
        })(_),
        G = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcaster_steamid || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcaster_steamid: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_ViewerBroadcastInvite_Notification";
            }),
            n
          );
        })(_),
        A = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.chat_id || b.a(n.M()),
              _.initialize(t, e, 0, -1, [4], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      view_url_template: {
                        n: 3,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      flair_group_ids: {
                        n: 4,
                        r: !0,
                        q: !0,
                        br: b.d.readUint32,
                        bw: b.h.writeRepeatedUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastChatInfo_Response";
            }),
            n
          );
        })(_),
        D = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.chat_id || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      message: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      instance_id: {
                        n: 3,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      language: {
                        n: 4,
                        d: 0,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      country_code: {
                        n: 5,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_PostChatMessage_Request";
            }),
            n
          );
        })(_),
        L = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.persona_name || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      persona_name: {
                        n: 1,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      in_game: { n: 2, br: b.d.readBool, bw: b.h.writeBool },
                      result: { n: 3, br: b.d.readInt32, bw: b.h.writeInt32 },
                      cooldown_time_seconds: {
                        n: 4,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_PostChatMessage_Response";
            }),
            n
          );
        })(_),
        k = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.chat_id || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      flair: { n: 2, br: b.d.readString, bw: b.h.writeString },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_UpdateChatMessageFlair_Request";
            }),
            n
          );
        })(_),
        q = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.result || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      result: { n: 1, br: b.d.readInt32, bw: b.h.writeInt32 },
                      chat_id: {
                        n: 2,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      flair: { n: 3, br: b.d.readString, bw: b.h.writeString },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_UpdateChatMessageFlair_Response";
            }),
            n
          );
        })(_),
        V = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.chat_id || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      user_steamid: {
                        n: 2,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      muted: { n: 3, br: b.d.readBool, bw: b.h.writeBool },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_MuteBroadcastChatUser_Request";
            }),
            n
          );
        })(_),
        H = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return _.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CBroadcast_MuteBroadcastChatUser_Response";
            }),
            n
          );
        })(_),
        K = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.chat_id || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      user_steamid: {
                        n: 2,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_RemoveUserChatText_Request";
            }),
            n
          );
        })(_),
        Y = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return _.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CBroadcast_RemoveUserChatText_Response";
            }),
            n
          );
        })(_),
        X = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.persona_names || b.a(n.M()),
              _.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { persona_names: { n: 1, c: J, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastChatUserNames_Response";
            }),
            n
          );
        })(_),
        J = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.steam_id || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      steam_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      persona: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastChatUserNames_Response_PersonaName";
            }),
            n
          );
        })(_),
        $ = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_clip_id || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_clip_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_StartBuildClip_Response";
            }),
            n
          );
        })(_),
        Q = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return _.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CBroadcast_GetBuildClipStatus_Response";
            }),
            n
          );
        })(_),
        Z = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return _.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CBroadcast_SetClipDetails_Response";
            }),
            n
          );
        })(_),
        ee = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_clip_id || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_clip_id: {
                        n: 1,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      video_id: {
                        n: 2,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      channel_id: {
                        n: 3,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      app_id: { n: 4, br: b.d.readUint32, bw: b.h.writeUint32 },
                      accountid_broadcaster: {
                        n: 5,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      accountid_clipmaker: {
                        n: 6,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      video_description: {
                        n: 7,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      start_time: {
                        n: 8,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      length_milliseconds: {
                        n: 9,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      thumbnail_path: {
                        n: 10,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_GetClipDetails_Response";
            }),
            n
          );
        })(_),
        te = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return _.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CBroadcast_SetRTMPInfo_Response";
            }),
            n
          );
        })(_),
        re = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_permission || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_permission: {
                        n: 1,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                      rtmp_host: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      rtmp_token: {
                        n: 3,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      broadcast_delay: {
                        n: 4,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                      app_id: { n: 5, br: b.d.readUint32, bw: b.h.writeUint32 },
                      required_app_id: {
                        n: 6,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      broadcast_chat_permission: {
                        n: 7,
                        br: b.d.readEnum,
                        bw: b.h.writeEnum,
                      },
                      broadcast_buffer: {
                        n: 8,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                      steamid: {
                        n: 9,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      chat_rate_limit: {
                        n: 10,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      enable_replay: {
                        n: 11,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_GetRTMPInfo_Response";
            }),
            n
          );
        })(_),
        ne = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.upload_stats || b.a(n.M()),
              _.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { upload_stats: { n: 1, c: ie, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastUploadStats_Response";
            }),
            n
          );
        })(_),
        ie = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.upload_result || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      upload_result: {
                        n: 1,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      time_stopped: {
                        n: 2,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      seconds_uploaded: {
                        n: 3,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      max_viewers: {
                        n: 4,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      resolution_x: {
                        n: 5,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      resolution_y: {
                        n: 6,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      avg_bandwidth: {
                        n: 7,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      total_bytes: {
                        n: 8,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      app_id: { n: 9, br: b.d.readUint32, bw: b.h.writeUint32 },
                      total_unique_viewers: {
                        n: 10,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      total_seconds_watched: {
                        n: 11,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      time_started: {
                        n: 12,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      upload_id: {
                        n: 13,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      local_address: {
                        n: 14,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      remote_address: {
                        n: 15,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      frames_per_second: {
                        n: 16,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      num_representations: {
                        n: 17,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      app_name: {
                        n: 18,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      is_replay: { n: 19, br: b.d.readBool, bw: b.h.writeBool },
                      session_id: {
                        n: 20,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastUploadStats_Response_UploadStats";
            }),
            n
          );
        })(_),
        ae = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.viewer_stats || b.a(n.M()),
              _.initialize(t, e, 0, -1, [1, 2], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      viewer_stats: { n: 1, c: oe, r: !0, q: !0 },
                      country_stats: { n: 2, c: se, r: !0, q: !0 },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastViewerStats_Response";
            }),
            n
          );
        })(_),
        oe = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.time || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      time: { n: 1, br: b.d.readUint32, bw: b.h.writeUint32 },
                      num_viewers: {
                        n: 2,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastViewerStats_Response_ViewerStats";
            }),
            n
          );
        })(_),
        se = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.country_code || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      country_code: {
                        n: 1,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      num_viewers: {
                        n: 2,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_GetBroadcastViewerStats_Response_CountryStats";
            }),
            n
          );
        })(_),
        ce = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return _.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CBroadcast_WebRTCStartResult_Response";
            }),
            n
          );
        })(_),
        ue = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return _.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CBroadcast_WebRTCStopped_Response";
            }),
            n
          );
        })(_),
        de = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return _.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CBroadcast_WebRTCSetAnswer_Response";
            }),
            n
          );
        })(_),
        le = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.sdp_mid || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      sdp_mid: {
                        n: 1,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      sdp_mline_index: {
                        n: 2,
                        br: b.d.readInt32,
                        bw: b.h.writeInt32,
                      },
                      candidate: {
                        n: 3,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_WebRTC_Candidate";
            }),
            n
          );
        })(_),
        me = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return _.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CBroadcast_WebRTCAddHostCandidate_Response";
            }),
            n
          );
        })(_),
        fe = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return _.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CBroadcast_WebRTCAddViewerCandidate_Response";
            }),
            n
          );
        })(_),
        be = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.candidate_generation || b.a(n.M()),
              _.initialize(t, e, 0, -1, [2], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      candidate_generation: {
                        n: 1,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      candidates: { n: 2, c: le, r: !0, q: !0 },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_WebRTCGetHostCandidates_Response";
            }),
            n
          );
        })(_),
        _e = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_session_id || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_session_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_WebRTCNeedTURNServer_Notification";
            }),
            n
          );
        })(_),
        pe = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.turn_server || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      turn_server: {
                        n: 1,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_WebRTCLookupTURNServer_Response";
            }),
            n
          );
        })(_),
        he = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_session_id || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_session_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      webrtc_session_id: {
                        n: 2,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      viewer_steamid: {
                        n: 3,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      viewer_token: {
                        n: 4,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_WebRTCStart_Notification";
            }),
            n
          );
        })(_),
        ye = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_session_id || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_session_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      webrtc_session_id: {
                        n: 2,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      answer: { n: 3, br: b.d.readString, bw: b.h.writeString },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_WebRTCSetAnswer_Notification";
            }),
            n
          );
        })(_),
        Be = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_session_id || b.a(n.M()),
              _.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_session_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      webrtc_session_id: {
                        n: 2,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      candidate: { n: 3, c: le },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CBroadcast_WebRTCAddViewerCandidate_Notification";
            }),
            n
          );
        })(_);
      ((F = R = R || {}).BeginBroadcastSession = function (e, t) {
        return e.SendMsg("Broadcast.BeginBroadcastSession#1", t, p, {
          ePrivilege: 1,
        });
      }),
        (F.EndBroadcastSession = function (e, t) {
          return e.SendMsg("Broadcast.EndBroadcastSession#1", t, g, {
            ePrivilege: 1,
          });
        }),
        (F.StartBroadcastUpload = function (e, t) {
          return e.SendMsg("Broadcast.StartBroadcastUpload#1", t, v, {
            ePrivilege: 1,
          });
        }),
        (F.NotifyBroadcastUploadStop = function (e, t) {
          return e.SendNotification(
            "Broadcast.NotifyBroadcastUploadStop#1",
            t,
            { ePrivilege: 1 }
          );
        }),
        (F.WatchBroadcast = function (e, t) {
          return e.SendMsg("Broadcast.WatchBroadcast#1", t, C, {
            ePrivilege: 2,
          });
        }),
        (F.HeartbeatBroadcast = function (e, t) {
          return e.SendNotification("Broadcast.HeartbeatBroadcast#1", t, {
            ePrivilege: 2,
          });
        }),
        (F.StopWatchingBroadcast = function (e, t) {
          return e.SendNotification("Broadcast.StopWatchingBroadcast#1", t, {
            ePrivilege: 2,
          });
        }),
        (F.GetBroadcastStatus = function (e, t) {
          return e.SendMsg("Broadcast.GetBroadcastStatus#1", t, S, {
            ePrivilege: 2,
          });
        }),
        (F.GetBroadcastThumbnail = function (e, t) {
          return e.SendMsg("Broadcast.GetBroadcastThumbnail#1", t, M, {
            ePrivilege: 2,
          });
        }),
        (F.InviteToBroadcast = function (e, t) {
          return e.SendMsg("Broadcast.InviteToBroadcast#1", t, O, {
            ePrivilege: 1,
          });
        }),
        (F.SendBroadcastStateToServer = function (e, t) {
          return e.SendMsg("Broadcast.SendBroadcastStateToServer#1", t, j, {
            ePrivilege: 1,
          });
        }),
        (F.NotifyBroadcastSessionHeartbeat = function (e, t) {
          return e.SendNotification(
            "Broadcast.NotifyBroadcastSessionHeartbeat#1",
            t,
            { ePrivilege: 1 }
          );
        }),
        (F.GetBroadcastChatInfo = function (e, t) {
          return e.SendMsg("Broadcast.GetBroadcastChatInfo#1", t, A, {
            ePrivilege: 2,
          });
        }),
        (F.PostChatMessage = function (e, t) {
          return e.SendMsg("Broadcast.PostChatMessage#1", t, L, {
            ePrivilege: 3,
          });
        }),
        (F.UpdateChatMessageFlair = function (e, t) {
          return e.SendMsg("Broadcast.UpdateChatMessageFlair#1", t, q, {
            ePrivilege: 1,
          });
        }),
        (F.MuteBroadcastChatUser = function (e, t) {
          return e.SendMsg("Broadcast.MuteBroadcastChatUser#1", t, H, {
            ePrivilege: 3,
          });
        }),
        (F.RemoveUserChatText = function (e, t) {
          return e.SendMsg("Broadcast.RemoveUserChatText#1", t, Y, {
            ePrivilege: 3,
          });
        }),
        (F.GetBroadcastChatUserNames = function (e, t) {
          return e.SendMsg("Broadcast.GetBroadcastChatUserNames#1", t, X, {
            ePrivilege: 1,
          });
        }),
        (F.StartBuildClip = function (e, t) {
          return e.SendMsg("Broadcast.StartBuildClip#1", t, $, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (F.GetBuildClipStatus = function (e, t) {
          return e.SendMsg("Broadcast.GetBuildClipStatus#1", t, Q, {
            bConstMethod: !0,
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (F.SetClipDetails = function (e, t) {
          return e.SendMsg("Broadcast.SetClipDetails#1", t, Z, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (F.GetClipDetails = function (e, t) {
          return e.SendMsg("Broadcast.GetClipDetails#1", t, ee, {
            bConstMethod: !0,
            ePrivilege: 0,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (F.SetRTMPInfo = function (e, t) {
          return e.SendMsg("Broadcast.SetRTMPInfo#1", t, te, { ePrivilege: 1 });
        }),
        (F.GetRTMPInfo = function (e, t) {
          return e.SendMsg("Broadcast.GetRTMPInfo#1", t, re, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
        (F.NotifyWebRTCHaveTURNServer = function (e, t) {
          return e.SendNotification(
            "Broadcast.NotifyWebRTCHaveTURNServer#1",
            t,
            { ePrivilege: 1 }
          );
        }),
        (F.WebRTCStartResult = function (e, t) {
          return e.SendMsg("Broadcast.WebRTCStartResult#1", t, ce, {
            ePrivilege: 1,
          });
        }),
        (F.WebRTCStopped = function (e, t) {
          return e.SendMsg("Broadcast.WebRTCStopped#1", t, ue, {
            ePrivilege: 1,
          });
        }),
        (F.WebRTCSetAnswer = function (e, t) {
          return e.SendMsg("Broadcast.WebRTCSetAnswer#1", t, de, {
            ePrivilege: 1,
          });
        }),
        (F.WebRTCLookupTURNServer = function (e, t) {
          return e.SendMsg("Broadcast.WebRTCLookupTURNServer#1", t, pe, {
            ePrivilege: 1,
          });
        }),
        (F.WebRTCAddHostCandidate = function (e, t) {
          return e.SendMsg("Broadcast.WebRTCAddHostCandidate#1", t, me, {
            ePrivilege: 1,
          });
        }),
        (F.WebRTCAddViewerCandidate = function (e, t) {
          return e.SendMsg("Broadcast.WebRTCAddViewerCandidate#1", t, fe, {
            ePrivilege: 1,
          });
        }),
        (F.WebRTCGetHostCandidates = function (e, t) {
          return e.SendMsg("Broadcast.WebRTCGetHostCandidates#1", t, be, {
            ePrivilege: 1,
          });
        }),
        (F.GetBroadcastUploadStats = function (e, t) {
          return e.SendMsg("Broadcast.GetBroadcastUploadStats#1", t, ne, {
            bConstMethod: !0,
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (F.GetBroadcastViewerStats = function (e, t) {
          return e.SendMsg("Broadcast.GetBroadcastViewerStats#1", t, ae, {
            bConstMethod: !0,
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        ((I = T = T || {}).NotifyBroadcastViewerStateHandler = {
          name: "BroadcastClient.NotifyBroadcastViewerState#1",
          request: z,
        }),
        (I.NotifyWaitingBroadcastViewerHandler = {
          name: "BroadcastClient.NotifyWaitingBroadcastViewer#1",
          request: W,
        }),
        (I.NotifyBroadcastUploadStartedHandler = {
          name: "BroadcastClient.NotifyBroadcastUploadStarted#1",
          request: w,
        }),
        (I.NotifyStopBroadcastUploadHandler = {
          name: "BroadcastClient.NotifyStopBroadcastUpload#1",
          request: U,
        }),
        (I.NotifySessionClosedHandler = {
          name: "BroadcastClient.NotifySessionClosed#1",
          request: E,
        }),
        (I.NotifyViewerBroadcastInviteHandler = {
          name: "BroadcastClient.NotifyViewerBroadcastInvite#1",
          request: G,
        }),
        (I.NotifyBroadcastStatusHandler = {
          name: "BroadcastClient.NotifyBroadcastStatus#1",
          request: N,
        }),
        (I.NotifyBroadcastChannelLiveHandler = {
          name: "BroadcastClient.NotifyBroadcastChannelLive#1",
          request: P,
        }),
        (I.SendThumbnailToRelayHandler = {
          name: "BroadcastClient.SendThumbnailToRelay#1",
          request: x,
        }),
        (I.NotifyWebRTCNeedTURNServerHandler = {
          name: "BroadcastClient.NotifyWebRTCNeedTURNServer#1",
          request: _e,
        }),
        (I.NotifyWebRTCStartHandler = {
          name: "BroadcastClient.NotifyWebRTCStart#1",
          request: he,
        }),
        (I.NotifyWebRTCSetAnswerHandler = {
          name: "BroadcastClient.NotifyWebRTCSetAnswer#1",
          request: ye,
        }),
        (I.NotifyWebRTCAddViewerCandidateHandler = {
          name: "BroadcastClient.NotifyWebRTCAddViewerCandidate#1",
          request: Be,
        });
      var ge = f.Message;
      var ve,
        we,
        Se = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_channel_id || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_CreateBroadcastChannel_Response";
            }),
            n
          );
        })(ge),
        Me = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_channel_id || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      unique_name: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      steamid: {
                        n: 3,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelID_Response";
            }),
            n
          );
        })(ge),
        Ce = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return ge.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CSteamTV_SetBroadcastChannelProfile_Response";
            }),
            n
          );
        })(ge),
        Oe = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.unique_name || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      unique_name: {
                        n: 1,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      owner_steamid: {
                        n: 2,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      name: { n: 3, br: b.d.readString, bw: b.h.writeString },
                      language: {
                        n: 4,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      headline: {
                        n: 5,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      summary: {
                        n: 6,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      schedule: {
                        n: 7,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      rules: { n: 8, br: b.d.readString, bw: b.h.writeString },
                      panels: { n: 9, br: b.d.readString, bw: b.h.writeString },
                      is_partnered: {
                        n: 10,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelProfile_Response";
            }),
            n
          );
        })(ge),
        je = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.replace_image_hash || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      replace_image_hash: {
                        n: 1,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_SetBroadcastChannelImage_Response";
            }),
            n
          );
        })(ge),
        ze = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.images || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { images: { n: 1, c: Re, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelImages_Response";
            }),
            n
          );
        })(ge),
        Re = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.image_type || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      image_type: { n: 1, br: b.d.readEnum, bw: b.h.writeEnum },
                      image_path: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      image_index: {
                        n: 3,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelImages_Response_Images";
            }),
            n
          );
        })(ge),
        Fe = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.links || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { links: { n: 1, c: Te, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelLinks_Response";
            }),
            n
          );
        })(ge),
        Te = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.link_index || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      link_index: {
                        n: 1,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      url: { n: 2, br: b.d.readString, bw: b.h.writeString },
                      link_description: {
                        n: 3,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      left: { n: 4, br: b.d.readUint32, bw: b.h.writeUint32 },
                      top: { n: 5, br: b.d.readUint32, bw: b.h.writeUint32 },
                      width: { n: 6, br: b.d.readUint32, bw: b.h.writeUint32 },
                      height: { n: 7, br: b.d.readUint32, bw: b.h.writeUint32 },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelLinks_Response_Links";
            }),
            n
          );
        })(ge),
        Ie = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return ge.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CSteamTV_SetBroadcastChannelLinkRegions_Response";
            }),
            n
          );
        })(ge),
        We = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.is_live || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      is_live: { n: 1, br: b.d.readBool, bw: b.h.writeBool },
                      is_disabled: {
                        n: 2,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                      appid: { n: 3, br: b.d.readUint32, bw: b.h.writeUint32 },
                      viewers: {
                        n: 4,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      views: {
                        n: 5,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      broadcaster_steamid: {
                        n: 6,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      thumbnail_url: {
                        n: 7,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      followers: {
                        n: 8,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      subscribers: {
                        n: 9,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      unique_name: {
                        n: 10,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      broadcast_session_id: {
                        n: 11,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelStatus_Response";
            }),
            n
          );
        })(ge),
        Ue = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_channel_id || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      unique_name: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      name: { n: 3, br: b.d.readString, bw: b.h.writeString },
                      appid: { n: 4, br: b.d.readUint32, bw: b.h.writeUint32 },
                      viewers: {
                        n: 5,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      views: {
                        n: 6,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      thumbnail_url: {
                        n: 7,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      followers: {
                        n: 8,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      headline: {
                        n: 9,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      avatar_url: {
                        n: 10,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      broadcaster_steamid: {
                        n: 11,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      subscribers: {
                        n: 12,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      background_url: {
                        n: 13,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      is_featured: {
                        n: 14,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                      is_disabled: {
                        n: 15,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                      is_live: { n: 16, br: b.d.readBool, bw: b.h.writeBool },
                      language: {
                        n: 17,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      reports: {
                        n: 18,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      is_partnered: {
                        n: 19,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "GetBroadcastChannelEntry";
            }),
            n
          );
        })(ge),
        Ee = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.results || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { results: { n: 1, c: Ue, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetFollowedChannels_Response";
            }),
            n
          );
        })(ge),
        Ne = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.results || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { results: { n: 1, c: Ue, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetSubscribedChannels_Response";
            }),
            n
          );
        })(ge),
        Pe = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.is_followed || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      is_followed: {
                        n: 1,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_FollowBroadcastChannel_Response";
            }),
            n
          );
        })(ge),
        xe = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.is_subscribed || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      is_subscribed: {
                        n: 1,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_SubscribeBroadcastChannel_Response";
            }),
            n
          );
        })(ge),
        Ge = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return ge.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CSteamTV_ReportBroadcastChannel_Response";
            }),
            n
          );
        })(ge),
        Ae = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.is_followed || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      is_followed: {
                        n: 1,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                      is_subscribed: {
                        n: 2,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelInteraction_Response";
            }),
            n
          );
        })(ge),
        De = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.appid || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [5], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      appid: { n: 1, br: b.d.readUint32, bw: b.h.writeUint32 },
                      name: { n: 2, br: b.d.readString, bw: b.h.writeString },
                      image: { n: 3, br: b.d.readString, bw: b.h.writeString },
                      viewers: {
                        n: 4,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      channels: { n: 5, c: Ue, r: !0, q: !0 },
                      release_date: {
                        n: 6,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      developer: {
                        n: 7,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      publisher: {
                        n: 8,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_Game";
            }),
            n
          );
        })(ge),
        Le = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.results || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { results: { n: 1, c: De, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetGames_Response";
            }),
            n
          );
        })(ge),
        ke = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.results || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { results: { n: 1, c: Ue, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetChannels_Response";
            }),
            n
          );
        })(ge),
        qe = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcasters || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { broadcasters: { n: 1, c: Ve, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelBroadcasters_Response";
            }),
            n
          );
        })(ge),
        Ve = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.steamid || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      steamid: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      name: { n: 2, br: b.d.readString, bw: b.h.writeString },
                      rtmp_token: {
                        n: 3,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster";
            }),
            n
          );
        })(ge),
        He = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.issuer_steamid || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      issuer_steamid: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      chatter_steamid: {
                        n: 2,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      time_expires: {
                        n: 3,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      permanent: { n: 4, br: b.d.readBool, bw: b.h.writeBool },
                      name: { n: 5, br: b.d.readString, bw: b.h.writeString },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_ChatBan";
            }),
            n
          );
        })(ge),
        Ke = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_channel_id || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      chatter_steamid: {
                        n: 2,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      duration: {
                        n: 3,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      permanent: { n: 4, br: b.d.readBool, bw: b.h.writeBool },
                      undo: { n: 5, br: b.d.readBool, bw: b.h.writeBool },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_AddChatBan_Request";
            }),
            n
          );
        })(ge),
        Ye = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return ge.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CSteamTV_AddChatBan_Response";
            }),
            n
          );
        })(ge),
        Xe = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.results || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { results: { n: 1, c: He, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetChatBans_Response";
            }),
            n
          );
        })(ge),
        Je = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_channel_id || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      moderator_steamid: {
                        n: 2,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      undo: { n: 3, br: b.d.readBool, bw: b.h.writeBool },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_AddChatModerator_Request";
            }),
            n
          );
        })(ge),
        $e = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return ge.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CSteamTV_AddChatModerator_Response";
            }),
            n
          );
        })(ge),
        Qe = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_channel_id || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetChatModerators_Request";
            }),
            n
          );
        })(ge),
        Ze = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.steamid || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      steamid: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      name: { n: 2, br: b.d.readString, bw: b.h.writeString },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_ChatModerator";
            }),
            n
          );
        })(ge),
        et = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.results || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { results: { n: 1, c: Ze, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetChatModerators_Response";
            }),
            n
          );
        })(ge),
        tt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return ge.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CSteamTV_AddWordBan_Response";
            }),
            n
          );
        })(ge),
        rt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.results || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      results: {
                        n: 1,
                        r: !0,
                        q: !0,
                        br: b.d.readString,
                        bw: b.h.writeRepeatedString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetWordBans_Response";
            }),
            n
          );
        })(ge),
        nt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_channel_id || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_channel_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_JoinChat_Request";
            }),
            n
          );
        })(ge),
        it = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.chat_id || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [3], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      chat_id: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      view_url_template: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      flair_group_ids: {
                        n: 3,
                        r: !0,
                        q: !0,
                        br: b.d.readUint64String,
                        bw: b.h.writeRepeatedUint64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_JoinChat_Response";
            }),
            n
          );
        })(ge),
        at = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.results || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { results: { n: 1, c: Ue, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_Search_Response";
            }),
            n
          );
        })(ge),
        ot = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.stream_live_email || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      stream_live_email: {
                        n: 1,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                      stream_live_notification: {
                        n: 2,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetSteamTVUserSettings_Response";
            }),
            n
          );
        })(ge),
        st = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return ge.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CSteamTV_SetSteamTVUserSettings_Response";
            }),
            n
          );
        })(ge),
        ct = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.results || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { results: { n: 1, c: Ue, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetMyBroadcastChannels_Response";
            }),
            n
          );
        })(ge),
        ut = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcasts || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { broadcasts: { n: 1, c: Ue, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_Takeover";
            }),
            n
          );
        })(ge),
        dt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcasts || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcasts: { n: 1, c: Ue, r: !0, q: !0 },
                      appid: { n: 2, br: b.d.readUint32, bw: b.h.writeUint32 },
                      title: { n: 3, br: b.d.readString, bw: b.h.writeString },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_SingleGame";
            }),
            n
          );
        })(ge),
        lt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.appid || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      appid: { n: 1, br: b.d.readUint32, bw: b.h.writeUint32 },
                      game_name: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      broadcast: { n: 3, c: Ue },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "GameListEntry";
            }),
            n
          );
        })(ge),
        mt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.entries || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      entries: { n: 1, c: lt, r: !0, q: !0 },
                      title: { n: 2, br: b.d.readString, bw: b.h.writeString },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_GameList";
            }),
            n
          );
        })(ge),
        ft = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcasts || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcasts: { n: 1, c: Ue, r: !0, q: !0 },
                      title: { n: 2, br: b.d.readString, bw: b.h.writeString },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_QuickExplore";
            }),
            n
          );
        })(ge),
        bt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcasts || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcasts: { n: 1, c: Ue, r: !0, q: !0 },
                      title: { n: 2, br: b.d.readString, bw: b.h.writeString },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_ConveyorBelt";
            }),
            n
          );
        })(ge),
        _t = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast: { n: 1, c: Ue },
                      title: { n: 2, br: b.d.readString, bw: b.h.writeString },
                      chat_group_id: {
                        n: 3,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_WatchParty";
            }),
            n
          );
        })(ge),
        pt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast: { n: 1, c: Ue },
                      title: { n: 2, br: b.d.readString, bw: b.h.writeString },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_Developer";
            }),
            n
          );
        })(ge),
        ht = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.title || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      title: { n: 1, br: b.d.readString, bw: b.h.writeString },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_HomePageTemplate_Event";
            }),
            n
          );
        })(ge),
        yt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.template_type || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      template_type: {
                        n: 1,
                        br: b.d.readEnum,
                        bw: b.h.writeEnum,
                      },
                      takeover: { n: 2, c: ut },
                      single_game: { n: 3, c: dt },
                      game_list: { n: 4, c: mt },
                      quick_explore: { n: 5, c: ft },
                      conveyor_belt: { n: 6, c: bt },
                      watch_party: { n: 7, c: _t },
                      developer: { n: 8, c: pt },
                      event: { n: 9, c: ht },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_HomePageContentRow";
            }),
            n
          );
        })(ge),
        Bt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.rows || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { rows: { n: 1, c: yt, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetHomePageContents_Response";
            }),
            n
          );
        })(ge),
        gt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.broadcast_clip_id || b.a(n.M()),
              ge.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      broadcast_clip_id: {
                        n: 1,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      channel_id: {
                        n: 2,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                      app_id: { n: 3, br: b.d.readUint32, bw: b.h.writeUint32 },
                      broadcaster_steamid: {
                        n: 4,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      creator_steamid: {
                        n: 5,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      video_description: {
                        n: 6,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                      live_time: {
                        n: 7,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      length_ms: {
                        n: 8,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      thumbnail_path: {
                        n: 9,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_BroadcastClipInfo";
            }),
            n
          );
        })(ge),
        vt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.clips || b.a(n.M()),
              ge.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      clips: { n: 1, c: gt, r: !0, q: !0 },
                      thumbnail_host: {
                        n: 2,
                        br: b.d.readString,
                        bw: b.h.writeString,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CSteamTV_GetBroadcastChannelClips_Response";
            }),
            n
          );
        })(ge);
      ((we = ve = ve || {}).CreateBroadcastChannel = function (e, t) {
        return e.SendMsg("SteamTV.CreateBroadcastChannel#1", t, Se, {
          ePrivilege: 1,
          eWebAPIKeyRequirement: 2,
        });
      }),
        (we.GetBroadcastChannelID = function (e, t) {
          return e.SendMsg("SteamTV.GetBroadcastChannelID#1", t, Me, {
            bConstMethod: !0,
            ePrivilege: 0,
          });
        }),
        (we.SetBroadcastChannelProfile = function (e, t) {
          return e.SendMsg("SteamTV.SetBroadcastChannelProfile#1", t, Ce, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (we.GetBroadcastChannelProfile = function (e, t) {
          return e.SendMsg("SteamTV.GetBroadcastChannelProfile#1", t, Oe, {
            bConstMethod: !0,
            ePrivilege: 0,
          });
        }),
        (we.SetBroadcastChannelImage = function (e, t) {
          return e.SendMsg("SteamTV.SetBroadcastChannelImage#1", t, je, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (we.GetBroadcastChannelImages = function (e, t) {
          return e.SendMsg("SteamTV.GetBroadcastChannelImages#1", t, ze, {
            bConstMethod: !0,
            ePrivilege: 0,
          });
        }),
        (we.SetBroadcastChannelLinkRegions = function (e, t) {
          return e.SendMsg("SteamTV.SetBroadcastChannelLinkRegions#1", t, Ie, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (we.GetBroadcastChannelLinks = function (e, t) {
          return e.SendMsg("SteamTV.GetBroadcastChannelLinks#1", t, Fe, {
            bConstMethod: !0,
            ePrivilege: 0,
          });
        }),
        (we.GetBroadcastChannelBroadcasters = function (e, t) {
          return e.SendMsg("SteamTV.GetBroadcastChannelBroadcasters#1", t, qe, {
            bConstMethod: !0,
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (we.GetFollowedChannels = function (e, t) {
          return e.SendMsg("SteamTV.GetFollowedChannels#1", t, Ee, {
            bConstMethod: !0,
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (we.GetSubscribedChannels = function (e, t) {
          return e.SendMsg("SteamTV.GetSubscribedChannels#1", t, Ne, {
            bConstMethod: !0,
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (we.GetBroadcastChannelStatus = function (e, t) {
          return e.SendMsg("SteamTV.GetBroadcastChannelStatus#1", t, We, {
            bConstMethod: !0,
            ePrivilege: 0,
          });
        }),
        (we.FollowBroadcastChannel = function (e, t) {
          return e.SendMsg("SteamTV.FollowBroadcastChannel#1", t, Pe, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (we.SubscribeBroadcastChannel = function (e, t) {
          return e.SendMsg("SteamTV.SubscribeBroadcastChannel#1", t, xe, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (we.GetBroadcastChannelClips = function (e, t) {
          return e.SendMsg("SteamTV.GetBroadcastChannelClips#1", t, vt, {
            bConstMethod: !0,
            ePrivilege: 0,
          });
        }),
        (we.ReportBroadcastChannel = function (e, t) {
          return e.SendMsg("SteamTV.ReportBroadcastChannel#1", t, Ge, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (we.GetBroadcastChannelInteraction = function (e, t) {
          return e.SendMsg("SteamTV.GetBroadcastChannelInteraction#1", t, Ae, {
            bConstMethod: !0,
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (we.GetGames = function (e, t) {
          return e.SendMsg("SteamTV.GetGames#1", t, Le, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
        (we.GetChannels = function (e, t) {
          return e.SendMsg("SteamTV.GetChannels#1", t, ke, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
        (we.AddChatBan = function (e, t) {
          return e.SendMsg("SteamTV.AddChatBan#1", t, Ye, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (we.GetChatBans = function (e, t) {
          return e.SendMsg("SteamTV.GetChatBans#1", t, Xe, {
            bConstMethod: !0,
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (we.AddChatModerator = function (e, t) {
          return e.SendMsg("SteamTV.AddChatModerator#1", t, $e, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (we.GetChatModerators = function (e, t) {
          return e.SendMsg("SteamTV.GetChatModerators#1", t, et, {
            bConstMethod: !0,
            ePrivilege: 0,
          });
        }),
        (we.AddWordBan = function (e, t) {
          return e.SendMsg("SteamTV.AddWordBan#1", t, tt, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (we.GetWordBans = function (e, t) {
          return e.SendMsg("SteamTV.GetWordBans#1", t, rt, {
            bConstMethod: !0,
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (we.JoinChat = function (e, t) {
          return e.SendMsg("SteamTV.JoinChat#1", t, it, {
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        }),
        (we.Search = function (e, t) {
          return e.SendMsg("SteamTV.Search#1", t, at, {
            bConstMethod: !0,
            ePrivilege: 0,
          });
        }),
        (we.GetSteamTVUserSettings = function (e, t) {
          return e.SendMsg("SteamTV.GetSteamTVUserSettings#1", t, ot, {
            bConstMethod: !0,
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (we.SetSteamTVUserSettings = function (e, t) {
          return e.SendMsg("SteamTV.SetSteamTVUserSettings#1", t, st, {
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (we.GetMyBroadcastChannels = function (e, t) {
          return e.SendMsg("SteamTV.GetMyBroadcastChannels#1", t, ct, {
            bConstMethod: !0,
            ePrivilege: 1,
            eWebAPIKeyRequirement: 2,
          });
        }),
        (we.GetHomePageContents = function (e, t) {
          return e.SendMsg("SteamTV.GetHomePageContents#1", t, Bt, {
            bConstMethod: !0,
            ePrivilege: 2,
            eWebAPIKeyRequirement: 1,
          });
        });
      var wt,
        St,
        Mt = r("qiKp"),
        Ct = r("TLQK"),
        Ot = r("bxiW"),
        jt = r("lkRc"),
        zt = f.Message,
        Rt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.bincremental || b.a(n.M()),
              zt.initialize(t, e, 0, -1, [2], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      bincremental: {
                        n: 1,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                      friends: { n: 2, c: Ft, r: !0, q: !0 },
                      max_friend_count: {
                        n: 3,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      active_friend_count: {
                        n: 4,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      friends_limit_hit: {
                        n: 5,
                        br: b.d.readBool,
                        bw: b.h.writeBool,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CMsgClientFriendsList";
            }),
            n
          );
        })(zt),
        Ft = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.ulfriendid || b.a(n.M()),
              zt.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      ulfriendid: {
                        n: 1,
                        br: b.d.readFixed64String,
                        bw: b.h.writeFixed64String,
                      },
                      efriendrelationship: {
                        n: 2,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CMsgClientFriendsList_Friend";
            }),
            n
          );
        })(zt),
        Tt = f.Message,
        It = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.groupid || b.a(n.M()),
              Tt.initialize(t, e, 0, -1, [3], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      groupid: {
                        n: 1,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      name: { n: 2, br: b.d.readString, bw: b.h.writeString },
                      accountid_members: {
                        n: 3,
                        r: !0,
                        q: !0,
                        br: b.d.readUint32,
                        bw: b.h.writeRepeatedUint32,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CFriendsListCategory";
            }),
            n
          );
        })(Tt),
        Wt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.categories || b.a(n.M()),
              Tt.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { categories: { n: 1, c: It, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CFriendsList_GetCategories_Response";
            }),
            n
          );
        })(Tt),
        Ut = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.accountid || b.a(n.M()),
              Tt.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: {
                      accountid: {
                        n: 1,
                        br: b.d.readUint32,
                        bw: b.h.writeUint32,
                      },
                      clanid: { n: 2, br: b.d.readUint32, bw: b.h.writeUint32 },
                      chat_group_id: {
                        n: 3,
                        br: b.d.readUint64String,
                        bw: b.h.writeUint64String,
                      },
                    },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CFriendsListFavoriteEntry";
            }),
            n
          );
        })(Tt),
        Et = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.favorites || b.a(n.M()),
              Tt.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { favorites: { n: 1, c: Ut, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CFriendsList_GetFavorites_Response";
            }),
            n
          );
        })(Tt),
        Nt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return Tt.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CFriendsList_SetFavorites_Response";
            }),
            n
          );
        })(Tt),
        Pt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.favorites || b.a(n.M()),
              Tt.initialize(t, e, 0, -1, [1], null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { favorites: { n: 1, c: Ut, r: !0, q: !0 } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CFriendsList_FavoritesChanged_Notification";
            }),
            n
          );
        })(Tt),
        xt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return Tt.initialize(t, e, 0, -1, void 0, null), t;
          }
          return (
            Object(h.d)(n, r),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return e ? { $jspbMessageInstance: t } : {};
            }),
            (n.fromObject = function (e) {
              return new n();
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return e;
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {}),
            (n.prototype.getClassName = function () {
              return "CFriendsList_GetFriendsList_Request";
            }),
            n
          );
        })(Tt),
        Gt = (function (r) {
          function n(e) {
            void 0 === e && (e = null);
            var t = r.call(this) || this;
            return (
              n.prototype.friendslist || b.a(n.M()),
              Tt.initialize(t, e, 0, -1, void 0, null),
              t
            );
          }
          return (
            Object(h.d)(n, r),
            (n.M = function () {
              return (
                n.sm_m ||
                  (n.sm_m = {
                    proto: n,
                    fields: { friendslist: { n: 1, c: Rt } },
                  }),
                n.sm_m
              );
            }),
            (n.MBF = function () {
              return n.sm_mbf || (n.sm_mbf = b.e(n.M())), n.sm_mbf;
            }),
            (n.prototype.toObject = function (e) {
              return void 0 === e && (e = !1), n.toObject(e, this);
            }),
            (n.toObject = function (e, t) {
              return b.g(n.M(), e, t);
            }),
            (n.fromObject = function (e) {
              return b.c(n.M(), e);
            }),
            (n.deserializeBinary = function (e) {
              var t = new f.BinaryReader(e),
                r = new n();
              return n.deserializeBinaryFromReader(r, t);
            }),
            (n.deserializeBinaryFromReader = function (e, t) {
              return b.b(n.MBF(), e, t);
            }),
            (n.prototype.serializeBinary = function () {
              var e = new f.BinaryWriter();
              return n.serializeBinaryToWriter(this, e), e.getResultBuffer();
            }),
            (n.serializeBinaryToWriter = function (e, t) {
              b.f(n.M(), e, t);
            }),
            (n.prototype.getClassName = function () {
              return "CFriendsList_GetFriendsList_Response";
            }),
            n
          );
        })(Tt);
      ((St = wt = wt || {}).GetCategories = function (e, t) {
        return e.SendMsg("FriendsList.GetCategories#1", t, Wt, {
          bConstMethod: !0,
          ePrivilege: 1,
        });
      }),
        (St.GetFriendsList = function (e, t) {
          return e.SendMsg("FriendsList.GetFriendsList#1", t, Gt, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
        (St.GetFavorites = function (e, t) {
          return e.SendMsg("FriendsList.GetFavorites#1", t, Et, {
            bConstMethod: !0,
            ePrivilege: 1,
          });
        }),
        (St.SetFavorites = function (e, t) {
          return e.SendMsg("FriendsList.SetFavorites#1", t, Nt, {
            ePrivilege: 1,
          });
        });
      var At = r("oFam"),
        Dt = r("kyHq"),
        Lt = r("uobO"),
        kt = (function () {
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
              (this.m_TextFilterPreferences = new Dt.f());
            var e = new At.a();
            (this.m_TextFilterPreferences.eTextFilterSetting = e.text_filter_setting()),
              (this.m_TextFilterPreferences.bIgnoreFriends = e.text_filter_ignore_friends()),
              (this.m_TextFilterWords = new At.m());
          }
          return (
            (e.prototype.Init = function (t, r, n) {
              return (
                void 0 === t && (t = 0),
                void 0 === r && (r = null),
                void 0 === n && (n = null),
                Object(h.b)(this, void 0, void 0, function () {
                  return Object(h.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (this.m_unAccountID = t),
                          (this.m_Transport = r),
                          (this.m_Storage = n),
                          (this.m_strBannedWords = ""),
                          (this.m_strProfanityWords = ""),
                          (this.m_strCleanWords = ""),
                          [4, this.LoadFilter()]
                        );
                      case 1:
                        return e.sent(), [4, this.LoadTextFilterPreferences()];
                      case 2:
                        return e.sent(), [4, this.LoadTextFilterWords()];
                      case 3:
                        return e.sent(), [4, this.RequestUpdatedSettings()];
                      case 4:
                        return e.sent(), [4, this.RequestFriendsList()];
                      case 5:
                        return e.sent(), [4, this.LoadLanguage(jt.c.LANGUAGE)];
                      case 6:
                        return (
                          e.sent(),
                          "english" === jt.c.LANGUAGE
                            ? [3, 8]
                            : [4, this.LoadLanguage("english")]
                        );
                      case 7:
                        e.sent(), (e.label = 8);
                      case 8:
                        return this.OnFilterDataChanged(), [2];
                    }
                  });
                })
              );
            }),
            (e.prototype.LoadTextFilterPreferences = function () {
              return Object(h.b)(this, void 0, void 0, function () {
                var t;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
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
                      (t = e.sent()) && (this.m_TextFilterPreferences = t),
                        (e.label = 2);
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
              return Object(h.b)(this, void 0, void 0, function () {
                var t;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
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
                      (t = e.sent()) &&
                        (this.m_TextFilterWords = At.m.fromObject(t)),
                        (e.label = 2);
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
              return Object(h.b)(this, void 0, void 0, function () {
                var t, r;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
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
                        (t = e.sent()),
                        [
                          4,
                          this.m_Storage.GetObject(
                            "CTextFilterStore_strCleanPattern"
                          ),
                        ]
                      );
                    case 2:
                      (r = e.sent()),
                        null != t && null != r && this.BRebuildFilter(t, r),
                        (e.label = 3);
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
              return Object(h.b)(this, void 0, void 0, function () {
                var t, r, n, i, a, o, s, c;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      if (((t = new At.a()), 0 === this.m_unAccountID))
                        return [3, 7];
                      e.label = 1;
                    case 1:
                      return (e.trys.push([1, 6, , 7]), this.m_Transport)
                        ? ((r = l.b.Init(At.b)),
                          [
                            4,
                            At.n.GetCommunityPreferences(this.m_Transport, r),
                          ])
                        : [3, 3];
                    case 2:
                      return (
                        (n = e.sent()), (t = n.Body().preferences()), [3, 5]
                      );
                    case 3:
                      return (
                        (s = {
                          sessionid: jt.c.SESSIONID,
                          origin: Object(jt.e)(),
                        }),
                        [
                          4,
                          y.a.get(
                            jt.c.COMMUNITY_BASE_URL +
                              "textfilter/ajaxgetcommunitypreferences",
                            { params: s, withCredentials: !0 }
                          ),
                        ]
                      );
                    case 4:
                      (c = e.sent()),
                        (t = At.a.fromObject(c.data.preferences)),
                        (e.label = 5);
                    case 5:
                      return [3, 7];
                    case 6:
                      return e.sent(), [3, 7];
                    case 7:
                      if (
                        (this.UpdateCommunityPreferences(t),
                        t.text_filter_words_revision() ===
                          this.m_TextFilterWords.text_filter_words_revision())
                      )
                        return [3, 15];
                      if (
                        ((i = new At.m()), 0 === t.text_filter_words_revision())
                      )
                        return [3, 14];
                      e.label = 8;
                    case 8:
                      return (e.trys.push([8, 13, , 14]), this.m_Transport)
                        ? ((a = l.b.Init(At.e)),
                          [4, At.n.GetTextFilterWords(this.m_Transport, a)])
                        : [3, 10];
                    case 9:
                      return (o = e.sent()), (i = o.Body().words()), [3, 12];
                    case 10:
                      return (
                        (s = {
                          sessionid: jt.c.SESSIONID,
                          origin: Object(jt.e)(),
                        }),
                        [
                          4,
                          y.a.get(
                            jt.c.COMMUNITY_BASE_URL +
                              "textfilter/ajaxgettextfiltercustomwords",
                            { params: s, withCredentials: !0 }
                          ),
                        ]
                      );
                    case 11:
                      (c = e.sent()),
                        (i = At.m.fromObject(c.data.words)),
                        (e.label = 12);
                    case 12:
                      return [3, 14];
                    case 13:
                      return e.sent(), [3, 14];
                    case 14:
                      this.UpdateTextFilterWords(i), (e.label = 15);
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
              return Object(h.b)(this, void 0, void 0, function () {
                var t, r, n, i, a;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      if (((t = new Rt()), 0 === this.m_unAccountID))
                        return [3, 7];
                      e.label = 1;
                    case 1:
                      return (e.trys.push([1, 6, , 7]), this.m_Transport)
                        ? ((r = l.b.Init(xt)),
                          [4, wt.GetFriendsList(this.m_Transport, r)])
                        : [3, 3];
                    case 2:
                      return (
                        (n = e.sent()), (t = n.Body().friendslist()), [3, 5]
                      );
                    case 3:
                      return (
                        (i = {
                          sessionid: jt.c.SESSIONID,
                          origin: Object(jt.e)(),
                        }),
                        [
                          4,
                          y.a.get(
                            jt.c.COMMUNITY_BASE_URL +
                              "textfilter/ajaxgetfriendslist",
                            { params: i, withCredentials: !0 }
                          ),
                        ]
                      );
                    case 4:
                      (a = e.sent()),
                        (t = Rt.fromObject(a.data.friendslist)),
                        (e.label = 5);
                    case 5:
                      return [3, 7];
                    case 6:
                      return e.sent(), [3, 7];
                    case 7:
                      return this.SetFriendsList(t), [2];
                  }
                });
              });
            }),
            (e.prototype.SetFriendsList = function (e) {
              e.bincremental() || this.m_mapPlayerCache.clear();
              for (var t = 0, r = e.friends(); t < r.length; t++) {
                var n,
                  i = r[t],
                  a = new m.a(i.ulfriendid());
                a.BIsIndividualAccount() &&
                  ((n = i.efriendrelationship()),
                  this.m_mapPlayerCache.set(a.GetAccountID(), n));
              }
            }),
            (e.prototype.BIsFriend = function (e) {
              return (
                !!this.m_mapPlayerCache.has(e) &&
                3 == this.m_mapPlayerCache.get(e)
              );
            }),
            (e.prototype.LoadLanguage = function (s) {
              return Object(h.b)(this, void 0, void 0, function () {
                var t, r, n, i, a, o;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (t = "1"),
                        (r =
                          jt.c.COMMUNITY_CDN_URL +
                          "textfilter/gettextfilterdictionary?type=banned&language=" +
                          s +
                          "&v=" +
                          t +
                          "&origin=" +
                          Object(jt.e)()),
                        (e.label = 1);
                    case 1:
                      return e.trys.push([1, 3, , 4]), [4, y.a.get(r)];
                    case 2:
                      return (
                        (a = e.sent()),
                        (this.m_strBannedWords += a.data),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (n = e.sent()),
                        console.error(
                          "Failed to load filter dictionary " + r,
                          n
                        ),
                        [3, 4]
                      );
                    case 4:
                      (r =
                        jt.c.COMMUNITY_CDN_URL +
                        "textfilter/gettextfilterdictionary?type=profanity&language=" +
                        s +
                        "&v=" +
                        t +
                        "&origin=" +
                        Object(jt.e)()),
                        (e.label = 5);
                    case 5:
                      return e.trys.push([5, 7, , 8]), [4, y.a.get(r)];
                    case 6:
                      return (
                        (a = e.sent()),
                        (this.m_strProfanityWords += a.data),
                        [3, 8]
                      );
                    case 7:
                      return (
                        (i = e.sent()),
                        console.error(
                          "Failed to load filter dictionary " + r,
                          i
                        ),
                        [3, 8]
                      );
                    case 8:
                      (r =
                        jt.c.COMMUNITY_CDN_URL +
                        "textfilter/gettextfilterdictionary?type=clean_public&language=" +
                        s +
                        "&v=" +
                        t +
                        "&origin=" +
                        Object(jt.e)()),
                        (e.label = 9);
                    case 9:
                      return e.trys.push([9, 11, , 12]), [4, y.a.get(r)];
                    case 10:
                      return (
                        (a = e.sent()),
                        (this.m_strCleanWords += a.data),
                        [3, 12]
                      );
                    case 11:
                      return (
                        (o = e.sent()),
                        console.error(
                          "Failed to load filter dictionary " + r,
                          o
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
              return 0 < t.length ? "\\b(" + t.join("|") + ")\\b" : "";
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
                    Object(Lt.a)().ReportError(
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
                    Object(Lt.a)().ReportError(
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
              return (
                "string" == typeof e && "" !== e
                  ? (n = new m.a(e).GetAccountID())
                  : "number" == typeof e && (n = e),
                !t ||
                n == this.m_unAccountID ||
                (this.m_TextFilterPreferences.bIgnoreFriends &&
                  this.BIsFriend(n))
                  ? t
                  : t.replace(this.m_regexBannedWords, function (e) {
                      return r.m_regexCleanWords &&
                        0 == e.search(r.m_regexCleanWords)
                        ? e
                        : r.CreateProfanityReplacement(e.length);
                    })
              );
            }),
            Object(h.c)([o.C], e.prototype, "m_TextFilterPreferences", void 0),
            Object(h.c)([o.C], e.prototype, "m_mapPlayerCache", void 0),
            Object(h.c)([o.C], e.prototype, "m_regexBannedWords", void 0),
            Object(h.c)([o.C], e.prototype, "m_regexCleanWords", void 0),
            Object(h.c)([o.k], e.prototype, "UpdateCommunityPreferences", null),
            Object(h.c)([o.k], e.prototype, "SetFriendsList", null),
            Object(h.c)([o.k], e.prototype, "BRebuildFilter", null),
            e
          );
        })(),
        qt = (function () {
          function e() {
            this.m_mapChats = new Map();
          }
          return (
            (e.prototype.GetChat = function (e, t) {
              return this.m_mapChats.get(e) || this.m_mapChats.get(t);
            }),
            (e.prototype.GetOrCreateChat = function (e, t) {
              var r = this.GetChat(e, t);
              return r || ((r = new Vt()), this.m_mapChats.set(e || t, r)), r;
            }),
            Object(h.c)([o.C], e.prototype, "m_mapChats", void 0),
            e
          );
        })(),
        Vt = (function () {
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
              (this.m_webAPIInterface = new d.a(
                jt.c.WEBAPI_BASE_URL,
                jt.i.webapi_token
              ));
          }
          return (
            (e.prototype.InitTextFilter = function () {
              this.m_textFilterStore = new kt();
              var e = 0;
              "" !== jt.i.steamid && (e = new m.a(jt.i.steamid).GetAccountID()),
                this.m_textFilterStore.Init(e, null, new u.a());
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
              (this.m_webAPIInterface = new d.a(
                jt.c.WEBAPI_BASE_URL,
                jt.i.webapi_token
              )),
                (this.m_ulBroadcastSteamID = e),
                (this.m_ulBroadcastID = t),
                this.InitTextFilter(),
                this.RequestChatInfo();
            }),
            (e.prototype.StartForChannel = function (e) {
              (this.m_webAPIInterface = new d.a(
                jt.c.WEBAPI_BASE_URL,
                jt.i.webapi_token
              )),
                (this.m_ulBroadcastChannelID = e),
                (this.m_strUserSteamID = jt.i.steamid),
                this.InitTextFilter(),
                this.JoinChannelChat();
            }),
            (e.prototype.Stop = function () {
              this.m_chatScheduledFunc && this.m_chatScheduledFunc.Cancel();
            }),
            (e.prototype.SendMessage = function (u) {
              return Object(h.b)(this, void 0, void 0, function () {
                var t,
                  r,
                  n,
                  i,
                  a,
                  o,
                  s,
                  c = this;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      if (0 == (t = u.trim()).length) return [2];
                      e.label = 1;
                    case 1:
                      return (e.trys.push([1, 6, , 7]),
                      (i = n = r = void 0),
                      this.m_webApiToken)
                        ? ((a = new FormData()).append(
                            "chat_id",
                            this.m_ulChatID
                          ),
                          a.append("message", t),
                          a.append(
                            "instance_id",
                            this.m_unInstanceID.toString()
                          ),
                          [
                            4,
                            y.a.post(
                              jt.c.WEBAPI_BASE_URL +
                                "IBroadcastService/PostChatMessage/v0001?access_token=" +
                                this.m_webApiToken,
                              a
                            ),
                          ])
                        : [3, 3];
                    case 2:
                      return (
                        (n = e.sent()), (i = n.data && n.data.response), [3, 5]
                      );
                    case 3:
                      return (
                        (o = l.b.Init(D)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          message: t,
                          instance_id: this.m_unInstanceID.toString(),
                        }),
                        [
                          4,
                          R.PostChatMessage(
                            this.m_webAPIInterface.GetServiceTransport(),
                            o
                          ),
                        ]
                      );
                    case 4:
                      (r = e.sent()),
                        (i = {
                          result: r.GetEResult(),
                          cooldown_time_seconds: r
                            .Body()
                            .cooldown_time_seconds(),
                          in_game: r.Body().in_game(),
                          persona_name: r.Body().persona_name(),
                        }),
                        (e.label = 5);
                    case 5:
                      return i && i.result && 1 != i.result
                        ? ((s = ""),
                          (s =
                            17 == i.result
                              ? Object(Ct.f)("#BroadcastChat_YouMuted")
                              : 84 == i.result
                              ? Object(Ct.f)(
                                  "#BroadcastChat_Cooldown",
                                  i.cooldown_time_seconds
                                )
                              : Object(Ct.f)(
                                  "#BroadcastChat_FailedToSendMsg",
                                  t
                                )),
                          this.m_rgChatMessages.push({
                            type: B.a.Error,
                            msg: s,
                            client_ts: Number(new Date()),
                            instance_id: this.m_unInstanceID,
                            in_game: i.in_game,
                            persona_name: i.persona_name,
                            steamid: "",
                          }),
                          [2])
                        : (this.m_nRateLimitSeconds ||
                            (this.m_nRateLimitSeconds =
                              i.cooldown_time_seconds),
                          this.m_nRateLimitSeconds &&
                            ((this.m_bRateLimited = !0),
                            setTimeout(function () {
                              return (c.m_bRateLimited = !1);
                            }, 1e3 * this.m_nRateLimitSeconds)),
                          [3, 7]);
                    case 6:
                      return (
                        e.sent(),
                        this.m_rgChatMessages.push({
                          type: B.a.Error,
                          msg: Object(Ct.f)(
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
            (e.prototype.RequestChatInfo = function (a) {
              return Object(h.b)(this, void 0, void 0, function () {
                var t,
                  r,
                  n,
                  i = this;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (this.m_cConsecutiveErrors = 0),
                        (this.m_bReconnecting = !1),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        (t = {
                          steamid: this.m_ulBroadcastSteamID,
                          broadcastid: this.m_ulBroadcastID,
                          sessionid: jt.c.SESSIONID,
                        }),
                        [
                          4,
                          y.a.get(
                            jt.c.CHAT_BASE_URL + "broadcast/getchatinfo",
                            {
                              params: t,
                              withCredentials: !0,
                              cancelToken: null == a ? void 0 : a.token,
                            }
                          ),
                        ]
                      );
                    case 2:
                      return (
                        (r = e.sent()),
                        (a && a.token.reason) ||
                          Object(o.G)(function () {
                            var e = r.data;
                            (i.m_strChatURL = e.view_url_template),
                              (i.m_ulChatID = e.chat_id),
                              (i.m_strFlairGroupID =
                                e.flair_group_ids && e.flair_group_ids[0]),
                              e.blocked &&
                                console.log("User is blocked from chat"),
                              e.steamid && (i.m_strUserSteamID = e.steamid),
                              e.token && (i.m_webApiToken = e.token),
                              e.emoticons && i.SetOwnedEmoticons(e.emoticons),
                              i.m_bHasAddedWelcomeChat ||
                                (i.m_rgChatMessages.push({
                                  type: B.a.Notification,
                                  msg: Object(Ct.f)(
                                    "#BroadcastChat_DefaultMessage"
                                  ),
                                  client_ts: Number(new Date()),
                                  instance_id: i.m_unInstanceID,
                                  in_game: !1,
                                  persona_name: "",
                                  steamid: "",
                                }),
                                (i.m_bHasAddedWelcomeChat = !0)),
                              i.m_mapBroadcastModeratorUsers.clear(),
                              e.moderators_steamid &&
                                e.moderators_steamid.forEach(function (e) {
                                  return i.m_mapBroadcastModeratorUsers.set(
                                    e,
                                    !0
                                  );
                                }),
                              (i.m_chatScheduledFunc = new Mt.b()),
                              i.m_chatScheduledFunc.Schedule(0, i.RequestLoop);
                          }),
                        [3, 4]
                      );
                    case 3:
                      return (
                        (n = e.sent()),
                        console.error(n),
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
              return Object(h.b)(this, void 0, void 0, function () {
                var t, r, n;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        e.trys.push([0, 2, , 3]),
                        (t = l.b.Init(nt)).SetBodyFields({
                          broadcast_channel_id: this.m_ulBroadcastChannelID,
                        }),
                        [
                          4,
                          ve.JoinChat(
                            this.m_webAPIInterface.GetServiceTransport(),
                            t
                          ),
                        ]
                      );
                    case 1:
                      return (r = e.sent()).Body().chat_id &&
                        r.Body().view_url_template
                        ? ((this.m_strChatURL = r.Body().view_url_template()),
                          (this.m_ulChatID = r.Body().chat_id()),
                          (this.m_strFlairGroupID =
                            r.Body().flair_group_ids() &&
                            r.Body().flair_group_ids()[0]),
                          this.FetchChatModerators(),
                          (this.m_rgChatMessages = []),
                          this.m_rgChatMessages.push({
                            type: B.a.Notification,
                            msg: Object(Ct.f)("#BroadcastChat_DefaultMessage"),
                            client_ts: Number(new Date()),
                            instance_id: this.m_unInstanceID,
                            in_game: !1,
                            persona_name: "",
                            steamid: "",
                          }),
                          (this.m_bHasAddedWelcomeChat = !0),
                          (this.m_chatScheduledFunc = new Mt.b()),
                          this.m_chatScheduledFunc.Schedule(
                            0,
                            this.RequestLoop
                          ),
                          [3, 3])
                        : (console.log("Failed to join channel chat"), [2]);
                    case 2:
                      return (
                        (n = e.sent()),
                        console.error(n),
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
              return Object(h.b)(this, void 0, void 0, function () {
                var t, r, n, i;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = l.b.Init(Qe)).SetBodyFields({
                          broadcast_channel_id: this.m_ulBroadcastChannelID,
                        }),
                        [
                          4,
                          ve.GetChatModerators(
                            this.m_webAPIInterface.GetServiceTransport(),
                            t
                          ),
                        ]
                      );
                    case 1:
                      return (
                        (r = e.sent()),
                        (n = r.Body().results()),
                        (i = new Map()),
                        n.forEach(function (e) {
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
              return Object(h.b)(this, void 0, void 0, function () {
                var t,
                  r,
                  n,
                  i,
                  a,
                  o,
                  s,
                  c,
                  u,
                  d,
                  l,
                  m,
                  f,
                  b,
                  _,
                  p = this;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (t = {}),
                        (r = this.m_strChatURL.replace(
                          "{0}",
                          this.m_nNextChatTS.toString()
                        )) == this.m_strChatURL &&
                          0 < this.m_nNextChatTS &&
                          (t.t = this.m_nNextChatTS),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]), [4, y.a.get(r, { params: t })]
                      );
                    case 2:
                      if (
                        ((n = e.sent()),
                        (i = n.data),
                        (this.m_cConsecutiveErrors = 0),
                        (a = i.messages
                          .map(function (e) {
                            return Object(h.a)(Object(h.a)({}, e), {
                              type: B.a.Chat,
                              client_ts: Number(new Date()),
                            });
                          })
                          .filter(function (e) {
                            return !p.IsUserMutedLocally(e.steamid);
                          })),
                        (_ = this.m_rgChatMessages).push.apply(_, a),
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
                            (d =
                              u.muted == this.m_strUserSteamID
                                ? Object(Ct.f)(
                                    "#BroadcastChat_YouMuted",
                                    u.persona_name
                                  )
                                : Object(Ct.f)(
                                    "#BroadcastChat_UserMuted",
                                    u.persona_name
                                  )),
                            this.m_rgChatMessages.push({
                              type: B.a.Notification,
                              msg: d,
                              client_ts: Number(new Date()),
                              instance_id: this.m_unInstanceID,
                              in_game: !1,
                              persona_name: "",
                              steamid: "",
                            });
                      if (i.remove_msgs)
                        for (l = 0, m = i.remove_msgs; l < m.length; l++)
                          (f = m[l]), this.RemoveUserMessagesLocal(f.steamid);
                      if (
                        ((b = 0),
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
                          (b = i.initial_delay);
                      } else {
                        if (i.next_request < this.m_nNextChatTS)
                          return console.log("Next request in past"), [2];
                        (this.m_nFromFirstRequestMS +=
                          i.next_request - this.m_nNextChatTS),
                          (this.m_nNextChatTS = i.next_request),
                          (b =
                            this.m_tsFirstRequest +
                            this.m_nFromFirstRequestMS -
                            performance.now() +
                            this.m_nNudgeFactorMS);
                      }
                      return (
                        this.m_bReconnecting && (this.m_bReconnecting = !1),
                        (this.m_nLastSleepMS = b) < 0 && (b = 0),
                        this.m_chatScheduledFunc.Schedule(b, this.RequestLoop),
                        [3, 4]
                      );
                    case 3:
                      if (
                        (e.sent(),
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
                        4 <= this.m_cConsecutiveErrors)
                      ) {
                        if (null == this.m_tsFirstRequest)
                          return (
                            this.m_rgChatMessages.push({
                              type: B.a.Error,
                              msg: Object(Ct.f)(
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
                2 <= n.length && ":" == n[0]
                  ? t.push(n.substr(1, n.length - 2))
                  : t.push(n);
              }
              var i = ":(" + t.join("|") + "):";
              this.m_regexUserEmoticons = new RegExp(i, "g");
            }),
            (e.prototype.UpdateBroadcastChatModerator = function (i, a, o) {
              return Object(h.b)(this, void 0, void 0, function () {
                var t, r, n;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [3, 6];
                    case 1:
                      return (
                        e.trys.push([1, 4, , 5]),
                        (t = l.b.Init(Je)).SetBodyFields({
                          broadcast_channel_id: this.m_ulBroadcastChannelID,
                          moderator_steamid: i,
                          undo: !a,
                        }),
                        [
                          4,
                          ve.AddChatModerator(
                            this.m_webAPIInterface.GetServiceTransport(),
                            t
                          ),
                        ]
                      );
                    case 2:
                      return (
                        e.sent(),
                        (n = Object(Ct.f)(
                          a
                            ? "#BroadcastChat_AddedModerator"
                            : "#BroadcastChat_RemovedModerator",
                          o
                        )),
                        this.m_rgChatMessages.push({
                          type: B.a.Notification,
                          msg: n,
                        }),
                        [4, this.FetchChatModerators()]
                      );
                    case 3:
                      return e.sent(), [3, 5];
                    case 4:
                      return (
                        e.sent(),
                        (n = Object(Ct.f)(
                          a
                            ? "#BroadcastChat_AddModeratorFailed"
                            : "#BroadcastChat_RemoveModeratorFailed",
                          o
                        )),
                        this.m_rgChatMessages.push({ type: B.a.Error, msg: n }),
                        [3, 5]
                      );
                    case 5:
                      return [3, 10];
                    case 6:
                      (r = new FormData()).append(
                        "broadcaststeamid",
                        this.m_ulBroadcastSteamID
                      ),
                        r.append("moderatorsteamid", i),
                        r.append("bAdd", a ? "1" : "0"),
                        r.append("sessionid", jt.c.SESSIONID),
                        (e.label = 7);
                    case 7:
                      return (
                        e.trys.push([7, 9, , 10]),
                        [
                          4,
                          y.a.post(
                            jt.c.CHAT_BASE_URL +
                              "broadcast/ajaxupdatechannelmod",
                            r
                          ),
                        ]
                      );
                    case 8:
                      return (
                        e.sent(),
                        this.m_mapBroadcastModeratorUsers.set(i, a),
                        (n = Object(Ct.f)(
                          a
                            ? "#BroadcastChat_AddedModerator"
                            : "#BroadcastChat_RemovedModerator",
                          o
                        )),
                        this.m_rgChatMessages.push({
                          type: B.a.Notification,
                          msg: n,
                        }),
                        [3, 10]
                      );
                    case 9:
                      return (
                        e.sent(),
                        (n = Object(Ct.f)(
                          a
                            ? "#BroadcastChat_AddModeratorFailed"
                            : "#BroadcastChat_RemoveModeratorFailed",
                          o
                        )),
                        this.m_rgChatMessages.push({ type: B.a.Error, msg: n }),
                        [3, 10]
                      );
                    case 10:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.UpdateUserChatBan = function (a, o, s, c, u, d) {
              return Object(h.b)(this, void 0, void 0, function () {
                var t, r, n, i;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return ((t = this.m_ulBroadcastSteamID),
                      (r = this.m_strUserSteamID),
                      this.m_ulBroadcastChannelID)
                        ? ((n = l.b.Init(Ke)).SetBodyFields({
                            broadcast_channel_id: this.m_ulBroadcastChannelID,
                            chatter_steamid: a,
                            duration: 3600 * s,
                            permanent: c,
                            undo: d,
                          }),
                          [
                            4,
                            ve.AddChatBan(
                              this.m_webAPIInterface.GetServiceTransport(),
                              n
                            ),
                          ])
                        : [3, 2];
                    case 1:
                      return e.sent(), [3, 6];
                    case 2:
                      (i = new FormData()).append("broadcaststeamid", t),
                        i.append("issuersteamid", r),
                        i.append("chattersteamid", a),
                        i.append("bantype", o),
                        i.append("duration", s.toString()),
                        i.append("perm", c ? "1" : "0"),
                        i.append("sessionid", jt.c.SESSIONID),
                        (e.label = 3);
                    case 3:
                      return (
                        e.trys.push([3, 5, , 6]),
                        [
                          4,
                          y.a.post(
                            jt.c.CHAT_BASE_URL + "broadcast/ajaxupdateusermute",
                            i
                          ),
                        ]
                      );
                    case 4:
                      return (
                        e.sent(),
                        0 == o
                          ? delete this.m_mapMutedUsers[a]
                          : (this.m_mapMutedUsers[a] = u),
                        [3, 6]
                      );
                    case 5:
                      return (
                        e.sent(),
                        console.log("Failed to update mute for " + u),
                        [3, 6]
                      );
                    case 6:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.MuteUserForSession = function (i, a) {
              return Object(h.b)(this, void 0, void 0, function () {
                var t, r, n;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      if (i == this.m_strUserSteamID) return [2];
                      if (this.m_ulBroadcastSteamID == i) return [2];
                      if (
                        ((t =
                          this.m_ulBroadcastSteamID == this.m_strUserSteamID),
                        this.m_mapMutedUsers[i])
                      )
                        return [3, 7];
                      (this.m_mapMutedUsers[i] = a), (e.label = 1);
                    case 1:
                      return (e.trys.push([1, 6, , 7]), this.m_webApiToken)
                        ? ((r = new FormData()).append(
                            "chat_id",
                            this.m_ulChatID
                          ),
                          r.append("user_steamid", i),
                          r.append("muted", "1"),
                          [
                            4,
                            y.a.post(
                              jt.c.WEBAPI_BASE_URL +
                                "IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=" +
                                this.m_webApiToken,
                              r
                            ),
                          ])
                        : [3, 3];
                    case 2:
                      return e.sent(), [3, 5];
                    case 3:
                      return (
                        (n = l.b.Init(V)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          user_steamid: i,
                          muted: !0,
                        }),
                        [
                          4,
                          R.MuteBroadcastChatUser(
                            this.m_webAPIInterface.GetServiceTransport(),
                            n
                          ),
                        ]
                      );
                    case 4:
                      e.sent(), (e.label = 5);
                    case 5:
                      return [3, 7];
                    case 6:
                      return (
                        e.sent(),
                        t &&
                          (this.m_rgChatMessages.push({
                            type: B.a.Error,
                            msg: Object(Ct.f)(
                              "#BroadcastChat_UserMuteFailed",
                              a
                            ),
                            client_ts: Number(new Date()),
                            instance_id: this.m_unInstanceID,
                            in_game: !1,
                            persona_name: "",
                            steamid: "",
                          }),
                          delete this.m_mapMutedUsers[i]),
                        [3, 7]
                      );
                    case 7:
                      return (
                        t ||
                          this.m_rgChatMessages.push({
                            type: B.a.Notification,
                            msg: Object(Ct.f)(
                              "#BroadcastChat_UserMutedLocal",
                              a
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
            (e.prototype.UnmuteUserForSession = function (n, i) {
              return Object(h.b)(this, void 0, void 0, function () {
                var t, r;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      if (n == this.m_strUserSteamID) return [2];
                      if (
                        (this.m_mapMutedUsers[n] &&
                          delete this.m_mapMutedUsers[n],
                        !(this.m_ulBroadcastSteamID == this.m_strUserSteamID))
                      )
                        return [3, 8];
                      e.label = 1;
                    case 1:
                      return (e.trys.push([1, 6, , 7]), this.m_webApiToken)
                        ? ((t = new FormData()).append(
                            "chat_id",
                            this.m_ulChatID
                          ),
                          t.append("user_steamid", n),
                          t.append("muted", "0"),
                          [
                            4,
                            y.a.post(
                              jt.c.WEBAPI_BASE_URL +
                                "IBroadcastService/MuteBroadcastChatUser/v0001/?access_token=" +
                                this.m_webApiToken,
                              t
                            ),
                          ])
                        : [3, 3];
                    case 2:
                      return e.sent(), [3, 5];
                    case 3:
                      return (
                        (r = l.b.Init(V)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          user_steamid: n,
                          muted: !1,
                        }),
                        [
                          4,
                          R.MuteBroadcastChatUser(
                            this.m_webAPIInterface.GetServiceTransport(),
                            r
                          ),
                        ]
                      );
                    case 4:
                      e.sent(), (e.label = 5);
                    case 5:
                      return (
                        this.m_rgChatMessages.push({
                          type: B.a.Notification,
                          msg: Object(Ct.f)(
                            "#BroadcastChat_UserUnmutedLocal",
                            i
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
                        e.sent(),
                        this.m_rgChatMessages.push({
                          type: B.a.Error,
                          msg: Object(Ct.f)(
                            "#BroadcastChat_UserUnmuteFailed",
                            i
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
                        type: B.a.Notification,
                        msg: Object(Ct.f)("#BroadcastChat_UserUnmutedLocal", i),
                        client_ts: Number(new Date()),
                        instance_id: this.m_unInstanceID,
                        in_game: !1,
                        persona_name: "",
                        steamid: "",
                      }),
                        (e.label = 9);
                    case 9:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.RemoveUserMessagesLocal = function (t) {
              this.m_rgChatMessages = this.m_rgChatMessages.filter(function (
                e
              ) {
                return e.steamid !== t;
              });
            }),
            (e.prototype.RemoveUserMessagesServer = function (n, i) {
              return Object(h.b)(this, void 0, void 0, function () {
                var t, r;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      if (n == this.m_strUserSteamID) return [2];
                      e.label = 1;
                    case 1:
                      return (e.trys.push([1, 6, , 7]), this.m_webApiToken)
                        ? ((t = new FormData()).append(
                            "chat_id",
                            this.m_ulChatID
                          ),
                          t.append("user_steamid", n),
                          [
                            4,
                            y.a.post(
                              jt.c.WEBAPI_BASE_URL +
                                "IBroadcastService/RemoveUserChatText/v0001/?access_token=" +
                                this.m_webApiToken,
                              t
                            ),
                          ])
                        : [3, 3];
                    case 2:
                      return e.sent(), [3, 5];
                    case 3:
                      return (
                        (r = l.b.Init(K)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          user_steamid: n,
                        }),
                        [
                          4,
                          R.RemoveUserChatText(
                            this.m_webAPIInterface.GetServiceTransport(),
                            r
                          ),
                        ]
                      );
                    case 4:
                      e.sent(), (e.label = 5);
                    case 5:
                      return [3, 7];
                    case 6:
                      return (
                        e.sent(),
                        this.m_rgChatMessages.push({
                          type: B.a.Error,
                          msg: Object(Ct.f)(
                            "#BroadcastChat_RemoveMessagesFailed",
                            i
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
            (e.prototype.UpdateChatMessageFlair = function (n) {
              return Object(h.b)(this, void 0, void 0, function () {
                var t, r;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return this.m_webApiToken
                        ? ((t = new FormData()).append(
                            "chat_id",
                            this.m_ulChatID
                          ),
                          t.append(
                            "flair",
                            "^" + this.m_strFlairGroupID + "^:" + n + ":"
                          ),
                          [
                            4,
                            y.a.post(
                              jt.c.WEBAPI_BASE_URL +
                                "IBroadcastService/UpdateChatMessageFlair/v0001/?access_token=" +
                                this.m_webApiToken,
                              t
                            ),
                          ])
                        : [3, 2];
                    case 1:
                      return e.sent(), [3, 4];
                    case 2:
                      return (
                        (r = l.b.Init(k)).SetBodyFields({
                          chat_id: this.m_ulChatID,
                          flair: "^" + this.m_strFlairGroupID + "^:" + n + ":",
                        }),
                        [
                          4,
                          R.UpdateChatMessageFlair(
                            this.m_webAPIInterface.GetServiceTransport(),
                            r
                          ),
                        ]
                      );
                    case 3:
                      e.sent(), (e.label = 4);
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
            Object(h.c)(
              [o.C],
              e.prototype,
              "m_mapChannelModeratorUsers",
              void 0
            ),
            Object(h.c)(
              [o.C],
              e.prototype,
              "m_mapBroadcastModeratorUsers",
              void 0
            ),
            Object(h.c)([o.C], e.prototype, "m_nRateLimitSeconds", void 0),
            Object(h.c)([o.C], e.prototype, "m_bRateLimited", void 0),
            Object(h.c)([o.C], e.prototype, "m_rgChatMessages", void 0),
            Object(h.c)([Ot.a], e.prototype, "FetchChatModerators", null),
            Object(h.c)([Ot.a], e.prototype, "RequestLoop", null),
            Object(h.c)([Ot.a], e.prototype, "MuteUserForSession", null),
            e
          );
        })(),
        Ht = new qt();
      window.g_BroadcastChatStore = Ht;
      function Kt() {
        return i.a.createElement(
          "div",
          { className: ir.a.FriendsListInsetShadowCtn },
          i.a.createElement("div", { className: ir.a.FriendListInsetShadowTop })
        );
      }
      function Yt() {
        return i.a.createElement(
          "div",
          { className: ir.a.FriendsListInsetShadowCtn },
          i.a.createElement("div", {
            className: ir.a.FriendListInsetShadowBottom,
          })
        );
      }
      var Xt = r("1BdX"),
        Jt = r("a5LV"),
        $t = r("Z9dU"),
        Qt = r.n($t),
        Zt = r("y+6m"),
        er = r("Gorr"),
        tr = r("0QoN"),
        rr = r("gPCo"),
        nr = r("5znp"),
        ir = r.n(nr),
        ar = r("6Y59"),
        or = r("exH9"),
        sr = r("3sYe"),
        cr = r.n(sr);
      r.d(t, "a", function () {
        return fr;
      });
      var ur = new RegExp("ː([^ː]*)ː", "g"),
        dr =
          (new RegExp("(https?://[^ '\"<>]*)", "gi"),
          new RegExp(
            "^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)",
            "i"
          ));
      function lr(e) {
        var t = e.userType,
          r = e.msg,
          n = e.presenterInfo;
        if ("presenter" === t)
          return c.createElement(
            "span",
            null,
            c.createElement(
              rr.b,
              {
                name: n.name,
                title: n.title,
                photo: n.photo,
                company: n.company,
                bioString: n.bio,
              },
              c.createElement(
                "a",
                {
                  className: Object(or.a)(
                    cr.a.MessageName,
                    cr.a.MessagePresenter
                  ),
                  href: jt.c.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
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
            ? (i = cr.a.MessageBroadcaster)
            : "moderator" === t && (i = cr.a.MessageModerator),
          c.createElement(
            "span",
            null,
            c.createElement(
              "a",
              {
                className: Object(or.a)(cr.a.MessageName, i),
                href: jt.c.COMMUNITY_BASE_URL + "profiles/" + r.steamid,
                "data-miniprofile": "s" + r.steamid,
                target: "_blank",
                rel: "noopener noreferrer",
              },
              r.persona_name
            )
          )
        );
      }
      function mr(e) {
        switch (e.userType) {
          case "presenter":
            return c.createElement(
              "span",
              {
                className: cr.a.RoleFlairContainer,
                "data-tooltip-text": Object(Ct.f)(
                  "#BroadcastChat_Role_Presenter_ttip"
                ),
              },
              c.createElement(ar.g, null)
            );
          case "moderator":
            return c.createElement(
              "span",
              {
                className: cr.a.RoleFlairContainer,
                "data-tooltip-text": Object(Ct.f)(
                  "#BroadcastChat_Role_Moderatorr_ttip"
                ),
              },
              c.createElement(ar.h, null)
            );
          case "broadcaster":
            return c.createElement(
              "span",
              {
                className: cr.a.RoleFlairContainer,
                "data-tooltip-text": Object(Ct.f)(
                  "#BroadcastChat_Role_Broadcaster_ttip"
                ),
              },
              c.createElement(ar.f, null)
            );
          default:
            return null;
        }
      }
      var fr = (function (r) {
          function e(e) {
            var t = r.call(this, e) || this;
            return (
              (t.m_chat = null),
              (t.messagesContainer = c.createRef()),
              (t.textInput = c.createRef()),
              (t.state = { message: "" }),
              t
            );
          }
          return (
            Object(h.d)(e, r),
            (e.prototype.componentDidMount = function () {
              this.StartChat();
            }),
            (e.prototype.componentDidUpdate = function (e) {
              this.m_chat && this.m_chat.m_bAutoScroll && this.ScrollToBottom(),
                (this.props.steamID === e.steamID &&
                  this.props.broadcastID === e.broadcastID &&
                  this.props.broadcastChannelID === e.broadcastChannelID) ||
                  this.StartChat();
            }),
            (e.prototype.componentWillUnmount = function () {
              this.m_chat && this.m_chat.Stop();
            }),
            (e.prototype.StartChat = function () {
              this.m_chat && this.m_chat.Stop(),
                (this.m_chat = Ht.GetOrCreateChat(
                  this.props.broadcastChannelID,
                  this.props.steamID
                )),
                this.props.broadcastChannelID
                  ? this.m_chat.StartForChannel(this.props.broadcastChannelID)
                  : this.props.steamID &&
                    this.props.steamID &&
                    this.props.broadcastID &&
                    (this.m_chat.StartForSteamID(
                      this.props.steamID,
                      this.props.broadcastID
                    ),
                    this.ScrollToBottom());
            }),
            (e.prototype.ChatBoxChange = function (e) {
              this.setState({ message: e.target.value });
            }),
            (e.prototype.ChatBoxKeypress = function (e) {
              !e.shiftKey &&
                13 === e.charCode &&
                (this.SendMessage(), e.preventDefault());
            }),
            (e.prototype.SendMessage = function (e) {
              this.m_chat.m_bRateLimited ||
                (this.m_chat.SendMessage(this.state.message),
                this.setState({ message: "" }),
                e && e.preventDefault());
            }),
            (e.prototype.IsTrustedDomain = function (e) {
              return !!e.match(dr);
            }),
            (e.prototype.AddLinksEmoticons = function (e, t) {
              t && this.m_chat.GetUserEmoticons();
              for (var r = e.split(ur), n = [], i = 0; i < r.length; i += 1)
                i % 2 == 1
                  ? n.push(
                      c.createElement(er.b, {
                        emoticonHoverStore: Jt.b,
                        key: i,
                        emoticon: r[i],
                        large: !0,
                      })
                    )
                  : n.push(r[i]);
              return n;
            }),
            (e.prototype.HandleScroll = function (e) {
              var t =
                e.currentTarget.scrollTop + e.currentTarget.clientHeight >=
                e.currentTarget.scrollHeight - 6;
              this.m_chat && (this.m_chat.m_bAutoScroll = t);
            }),
            (e.prototype.ScrollToBottom = function () {
              this.messagesContainer &&
                this.messagesContainer.current &&
                (this.messagesContainer.current.scrollTop = this.messagesContainer.current.scrollHeight);
            }),
            (e.prototype.OnContextMenu = function (e, t) {
              var r = this;
              if (t.type !== B.a.Chat) return null;
              var n = [],
                i = this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID()),
                a = this.m_chat.BIsUserBroadcastModerator(
                  this.m_chat.GetUserSteamID()
                );
              return (
                (jt.i && jt.i.is_support) || i || a
                  ? n.push(
                      c.createElement(
                        Zt.d,
                        {
                          key: "remove",
                          onSelected: function () {
                            return r.m_chat.RemoveUserMessagesServer(
                              t.steamid,
                              t.persona_name
                            );
                          },
                        },
                        Object(Ct.f)("#BroadcastChat_RemoveMessages")
                      ),
                      c.createElement(
                        Zt.d,
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
                        Object(Ct.f)("#BroadcastChat_half_Mute")
                      ),
                      c.createElement(
                        Zt.d,
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
                        Object(Ct.f)("#BroadcastChat_day_Mute")
                      ),
                      c.createElement(
                        Zt.d,
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
                        Object(Ct.f)("#BroadcastChat_week_Mute")
                      ),
                      c.createElement(
                        Zt.d,
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
                        Object(Ct.f)("#BroadcastChat_perm_Mute")
                      ),
                      c.createElement(
                        Zt.d,
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
                        Object(Ct.f)("#BroadcastChat_Unmute")
                      )
                    )
                  : this.m_chat.IsUserMutedLocally(t.steamid)
                  ? n.push(
                      c.createElement(
                        Zt.d,
                        {
                          key: "unmuteuser",
                          onSelected: function () {
                            return r.m_chat.UnmuteUserForSession(
                              t.steamid,
                              t.persona_name
                            );
                          },
                        },
                        Object(Ct.f)("#BroadcastChat_UnmuteLocal")
                      )
                    )
                  : n.push(
                      c.createElement(
                        Zt.d,
                        {
                          key: "muteuser",
                          onSelected: function () {
                            return r.m_chat.MuteUserForSession(
                              t.steamid,
                              t.persona_name
                            );
                          },
                        },
                        Object(Ct.f)("#BroadcastChat_MuteLocal")
                      )
                    ),
                ((jt.i && jt.i.is_support) ||
                  this.m_chat.IsUserBroadcaster(
                    this.m_chat.GetUserSteamID()
                  )) &&
                  t.steamid &&
                  (this.m_chat.BIsUserBroadcastModerator(t.steamid)
                    ? n.push(
                        c.createElement(
                          Zt.d,
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
                          Object(Ct.f)("#BroadcastChat_Remove_Moderator")
                        )
                      )
                    : n.push(
                        c.createElement(
                          Zt.d,
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
                          Object(Ct.f)("#BroadcastChat_Add_Moderator")
                        )
                      )),
                n.length
                  ? Object(s.a)(
                      c.createElement(
                        Zt.c,
                        null,
                        c.createElement(
                          "div",
                          { className: cr.a.SelectedUserNameCtn },
                          Object(Ct.f)("#BroadcastChat_User"),
                          c.createElement("br", null),
                          c.createElement(
                            "span",
                            { className: cr.a.SelectedUserName },
                            t.persona_name
                          )
                        ),
                        n
                      ),
                      e
                    )
                  : null
              );
            }),
            (e.prototype.OnEmoticonSelected = function (e, t) {
              void 0 === t && (t = !1),
                this.setState({ message: this.state.message + "ː" + e + "ː" }),
                this.textInput &&
                  this.textInput.current &&
                  this.textInput.current.focus();
            }),
            (e.prototype.OnFlairSelected = function (e) {
              this.m_chat.UpdateChatMessageFlair(e),
                this.textInput &&
                  this.textInput.current &&
                  this.textInput.current.focus();
            }),
            (e.prototype.GetTypeClassName = function (e) {
              return e.type === B.a.Notification
                ? cr.a.MessageNotification
                : e.type === B.a.Error
                ? cr.a.MessageError
                : cr.a.MessageChat;
            }),
            (e.prototype.FormatMessage = function (e, t) {
              if (e.type !== B.a.Chat) return e.msg;
              var r = t ? t.FilterText(e.steamid, e.msg) : e.msg;
              return this.AddLinksEmoticons(r, !1);
            }),
            (e.prototype.RenderUserChatLine = function (t, e, r) {
              var n,
                i,
                a = this,
                o = r ? r.get(t.steamid) : void 0,
                s =
                  t.type === B.a.Chat
                    ? ((n = t.steamid),
                      (i = this.m_chat),
                      o
                        ? "presenter"
                        : i.GetBroadcastSteamID() === n
                        ? "broadcaster"
                        : i.BIsUserBroadcastModerator(n)
                        ? "moderator"
                        : "")
                    : "";
              return c.createElement(
                "div",
                {
                  key: t.instance_id + "_" + t.client_ts + "_" + e,
                  className: this.GetTypeClassName(t),
                  onContextMenu: function (e) {
                    return a.OnContextMenu(e, t);
                  },
                },
                t.type === B.a.Chat && c.createElement(mr, { userType: s }),
                t.flair &&
                  c.createElement(
                    "span",
                    { className: cr.a.FlairContainer },
                    this.AddLinksEmoticons(t.flair, !1)
                  ),
                t.type === B.a.Chat &&
                  c.createElement(lr, {
                    userType: s,
                    msg: t,
                    presenterInfo: o,
                  }),
                t.type === B.a.Chat &&
                  this.m_chat.GetBroadcastSteamID() === t.steamid &&
                  c.createElement(
                    "span",
                    {
                      className:
                        cr.a.MessageNotification + " " + cr.a.MessageContents,
                    },
                    " (" + Object(Ct.f)("#BroadcastChat_Broadcaster") + ")"
                  ),
                t.type === B.a.Chat &&
                  this.m_chat.m_mapChannelModeratorUsers.get(t.steamid) &&
                  c.createElement(
                    "span",
                    {
                      className:
                        cr.a.MessageNotification + " " + cr.a.MessageContents,
                    },
                    " (" + Object(Ct.f)("#BroadcastChat_Moderator") + ")"
                  ),
                c.createElement(
                  "span",
                  {
                    className:
                      cr.a.MessageContents +
                      " " +
                      (this.AddLinksEmoticons(t.msg, !1).filter(function (e) {
                        return e && "string" == typeof e;
                      }).length
                        ? ""
                        : cr.a.EmoticonsOnly),
                  },
                  t.type === B.a.Chat ? " : " : "",
                  this.FormatMessage(t, this.m_chat.TextFilterStore)
                )
              );
            }),
            (e.prototype.render = function () {
              var r = this,
                e = this.m_chat ? this.m_chat.m_rgChatMessages : [],
                n = this.m_chat
                  ? Xt.b.GetPresenterMapForBroadcasterSteamID(
                      this.m_chat.GetBroadcastSteamID()
                    )
                  : void 0;
              return c.createElement(
                "div",
                {
                  className: cr.a.ChatPanel,
                  style: this.props.hidden ? { display: "none" } : void 0,
                },
                c.createElement(Kt, null),
                c.createElement(
                  "div",
                  {
                    className: cr.a.ChatMessages + " " + Qt.a.minHeightZero,
                    onScroll: this.HandleScroll,
                    ref: this.messagesContainer,
                  },
                  e.map(function (e, t) {
                    return r.RenderUserChatLine(e, t, n);
                  })
                ),
                c.createElement(Yt, null),
                jt.i && jt.i.logged_in && this.m_chat
                  ? c.createElement(
                      "div",
                      null,
                      c.createElement(
                        "div",
                        {
                          className: Object(or.a)(cr.a.ChatEntry, "ChatEntry"),
                        },
                        c.createElement(
                          "form",
                          { className: "" + Qt.a.chatEntryControls },
                          c.createElement("textarea", {
                            className: Qt.a.chatTextarea,
                            placeholder: Object(Ct.f)(
                              "#BroadcastChat_EnterResponse"
                            ),
                            onKeyPress: this.ChatBoxKeypress,
                            onChange: this.ChatBoxChange,
                            value: this.state.message,
                            ref: this.textInput,
                          }),
                          this.m_chat.m_bRateLimited &&
                            c.createElement(br, {
                              nSeconds: this.m_chat.m_nRateLimitSeconds,
                              bRateLimited: this.m_chat.m_bRateLimited,
                            }),
                          c.createElement(
                            "button",
                            {
                              className:
                                Qt.a.chatSubmitButton +
                                " " +
                                (this.state.message ? "" : Qt.a.disabled),
                              title: Object(Ct.f)("#ChatEntryButton_Submit"),
                              onClick: this.SendMessage,
                            },
                            c.createElement(ar.Y, null)
                          )
                        ),
                        c.createElement(
                          "div",
                          {
                            style: { height: "50px" },
                            className: "" + Qt.a.chatEntryActionsContainer,
                          },
                          c.createElement(
                            "div",
                            { className: Qt.a.chatEntryActionsGroup },
                            c.createElement(tr.a, {
                              disabled: !1,
                              OnEmoticonSelected: this.OnEmoticonSelected,
                              rtLastAckedNewEmoticons: Number.MAX_VALUE,
                              emoticonStore: this.props.emoticonStore,
                              emoticonHoverStore: Jt.b,
                            }),
                            this.m_chat.m_strFlairGroupID &&
                              this.props.emoticonStore.flair_list &&
                              this.props.emoticonStore.GetFlairListByGroupID(
                                this.m_chat.m_strFlairGroupID
                              ).length
                              ? c.createElement(tr.a, {
                                  disabled: !1,
                                  OnEmoticonSelected: this.OnFlairSelected,
                                  rtLastAckedNewEmoticons: Number.MAX_VALUE,
                                  emoticonStore: this.props.emoticonStore,
                                  emoticonHoverStore: Jt.b,
                                  strFlairGroupID: this.m_chat
                                    .m_strFlairGroupID,
                                  title: Object(Ct.f)("#ChatEntryButton_Flair"),
                                  buttonIcon: c.createElement(ar.i, null),
                                })
                              : null
                          )
                        )
                      )
                    )
                  : null
              );
            }),
            Object(h.c)([o.C], e.prototype, "m_chat", void 0),
            Object(h.c)([Ot.a], e.prototype, "StartChat", null),
            Object(h.c)([Ot.a], e.prototype, "ChatBoxChange", null),
            Object(h.c)([Ot.a], e.prototype, "ChatBoxKeypress", null),
            Object(h.c)([Ot.a], e.prototype, "SendMessage", null),
            Object(h.c)([Ot.a], e.prototype, "HandleScroll", null),
            Object(h.c)([Ot.a], e.prototype, "OnContextMenu", null),
            Object(h.c)([Ot.a], e.prototype, "OnEmoticonSelected", null),
            Object(h.c)([Ot.a], e.prototype, "OnFlairSelected", null),
            Object(h.c)([Ot.a], e.prototype, "RenderUserChatLine", null),
            (e = Object(h.c)([n.a], e))
          );
        })(c.Component),
        br = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(h.d)(t, e),
            (t.prototype.render = function () {
              return c.createElement(
                "div",
                { className: cr.a.TimedProgressBarContainer },
                c.createElement(
                  "div",
                  { className: cr.a.wrapper },
                  c.createElement("div", {
                    className: cr.a.spinner + " " + cr.a.pie,
                    style: {
                      animationDuration: (this.props.nSeconds || 0) + "s",
                    },
                  }),
                  c.createElement("div", {
                    className: cr.a.filler + " " + cr.a.pie,
                    style: {
                      animationDuration: (this.props.nSeconds || 0) + "s",
                    },
                  }),
                  c.createElement("div", {
                    className: cr.a.mask,
                    style: {
                      animationDuration: (this.props.nSeconds || 0) + "s",
                    },
                  })
                )
              );
            }),
            t
          );
        })(c.Component);
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
        return d;
      }),
        r.d(t, "b", function () {
          return l;
        });
      var n = r("mrSG"),
        i = r("2vnA"),
        a = r("Gp1o"),
        o = r("qD+2"),
        s = r("TLQK"),
        c = r("lkRc"),
        u = r("8H1D");
      function d(e) {
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
      var l = (function () {
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
            var e = 1e3,
              t = o.a.CMInterface.GetServerRTime32() - this.last_seen_online;
            return (e *= 86400 < t ? 3600 : 7200 < t ? 60 : 15);
          }),
          (e.prototype.GetOfflineStatusTime = function () {
            if (0 == this.last_seen_online)
              return Object(s.f)("#PersonaStateOffline");
            var e = this.GetOfflineStatusUpdateRate();
            (!c.c.IN_MOBILE || e <= 60) && Object(a.c)(e);
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
        Event: "broadcast_embeddable_Event_1A0NY",
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
        video_container: "broadcast_embeddable_video_container_1gbNx",
        viewer_links: "broadcast_embeddable_viewer_links_2EQpO",
        chat_link: "broadcast_embeddable_chat_link_3a0zX",
        settings_link: "broadcast_embeddable_settings_link_1Thke",
        external_link: "broadcast_embeddable_external_link_1n1BM",
        viewer_count: "broadcast_embeddable_viewer_count_1MrTW",
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
        ChatToggle: "broadcast_embeddable_ChatToggle_1tVam",
        BroadcastAndChat: "broadcast_embeddable_BroadcastAndChat_1aJ9y",
        detail_chat_ctn: "broadcast_embeddable_detail_chat_ctn_IaFns",
        ChatEntry: "broadcast_embeddable_ChatEntry_Rs7El",
        rightPanel: "broadcast_embeddable_rightPanel_16MsC",
      };
    },
  },
]);
