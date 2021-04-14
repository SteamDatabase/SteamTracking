/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    "8zUZ": function (e, t, a) {
      "use strict";
      a.r(t);
      a("xnZ7"), a("idvb");
      function c(e) {
        var r = Object(f.useRef)(null),
          t = Object(f.useState)(null),
          a = t[0],
          n = t[1];
        return (
          Object(f.useEffect)(function () {
            return function () {
              r.current && r.current("BroadcastDebugSection: unmounting");
            };
          }, []),
          v.a.createElement(
            C.a,
            null,
            v.a.createElement(
              "div",
              { className: Object(T.a)(k.Container) },
              v.a.createElement(
                "div",
                { className: k.Controls },
                v.a.createElement(
                  I.d,
                  {
                    onClick: function () {
                      return Object(h.b)(void 0, void 0, void 0, function () {
                        var t, a;
                        return Object(h.e)(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return (
                                r.current && r.current(),
                                (t = O.a.CancelToken.source()),
                                (r.current = t.cancel),
                                (a = n),
                                [4, S.Get().LoadBroadcastDebugInfo(t)]
                              );
                            case 1:
                              return a.apply(void 0, [e.sent()]), [2];
                          }
                        });
                      });
                    },
                  },
                  "(VO) Load Debug Info"
                )
              ),
              v.a.createElement(C.a, null, v.a.createElement(F, { info: a }))
            )
          )
        );
      }
      var f = a("q1tI"),
        v = a.n(f),
        r = a("Ty5D"),
        n = a("nmPn"),
        h = a("mrSG"),
        o = a("vDqi"),
        O = a.n(o),
        u = a("2vnA"),
        i = a("kLLr"),
        d = a("boaH"),
        m = a("bDQf"),
        p = a("lkRc"),
        S = (function () {
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
            (e.prototype.LoadBroadcastDebugInfo = function (c) {
              return Object(h.b)(this, void 0, void 0, function () {
                var t, a, r, n, o;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (t =
                        p.c.COMMUNITY_BASE_URL +
                        "broadcast/broadcastdebuginfo"),
                        (a = {
                          steamid: this.m_steamid.ConvertTo64BitString(),
                          origin: self.origin,
                        }),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          O.a.get(t, {
                            params: a,
                            withCredentials: !0,
                            cancelToken: c ? c.token : void 0,
                          }),
                        ]
                      );
                    case 2:
                      return (
                        (r = e.sent()),
                        c && c.token.reason
                          ? [2, null]
                          : r &&
                            200 == r.status &&
                            r.data &&
                            1 == r.data.success
                          ? ((this.m_curDebugInfo = r.data),
                            [2, this.m_curDebugInfo])
                          : [3, 4]
                      );
                    case 3:
                      return (
                        (n = e.sent()),
                        (o = Object(m.a)(n)),
                        console.error(
                          "LoadBroadcastDebugInfo: Failed " + o.strErrorMsg,
                          o
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, null];
                  }
                });
              });
            }),
            (e.prototype.UpdateBroadcastSettings = function (i, s, l) {
              return Object(h.b)(this, void 0, void 0, function () {
                var t, a, r, n, o, c;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      (t =
                        p.c.COMMUNITY_BASE_URL +
                        "broadcast/updatebroadcastsettings"),
                        (a = {
                          steamid: this.m_steamid.ConvertTo64BitString(),
                          matchid: i,
                          title: s,
                          sessionid: p.c.SESSIONID,
                        }),
                        (e.label = 1);
                    case 1:
                      return (
                        e.trys.push([1, 3, , 4]),
                        [
                          4,
                          O.a.get(t, {
                            params: a,
                            withCredentials: !0,
                            cancelToken: l ? l.token : void 0,
                          }),
                        ]
                      );
                    case 2:
                      return (
                        (r = e.sent()),
                        l && l.token.reason
                          ? [2, !1]
                          : r &&
                            200 == r.status &&
                            r.data &&
                            1 == r.data.success
                          ? ((n = d.a.GetOrCreateBroadcastInfo(
                              this.m_steamid.ConvertTo64BitString()
                            )) &&
                              Object(u.G)(function () {
                                n.m_strTitle = s;
                              }),
                            [2, !0])
                          : [3, 4]
                      );
                    case 3:
                      return (
                        (o = e.sent()),
                        (c = Object(m.a)(o)),
                        console.error(
                          "UpdateBroadcastSettings: Failed " + c.strErrorMsg,
                          c
                        ),
                        [3, 4]
                      );
                    case 4:
                      return [2, !1];
                  }
                });
              });
            }),
            (e.prototype.StopBroadcast = function (o) {
              return Object(h.b)(this, void 0, void 0, function () {
                var t, a, r, n;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.m_steamid.ConvertTo64BitString()),
                        (a = d.a.GetBroadcast(t)),
                        (r =
                          p.c.COMMUNITY_BASE_URL + "broadcast/stopbroadcast"),
                        (n = {
                          steamid: t,
                          broadcastid: a ? a.m_ulBroadcastID : null,
                          sessionid: p.c.SESSIONID,
                        }),
                        [
                          4,
                          this.InternalSendSimpleGetRequest(
                            "StopBroadcast",
                            r,
                            n,
                            o
                          ),
                        ]
                      );
                    case 1:
                      return [2, e.sent()];
                  }
                });
              });
            }),
            (e.prototype.SetBroadcasterRestrictions = function (o, c, i) {
              return Object(h.b)(this, void 0, void 0, function () {
                var t, a, r, n;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.m_steamid.ConvertTo64BitString()),
                        (a = d.a.GetBroadcast(t)),
                        (r =
                          p.c.COMMUNITY_BASE_URL +
                          "broadcast/setbroadcastrestriction"),
                        (n = {
                          steamid: t,
                          broadcastid: a ? a.m_ulBroadcastID : null,
                          type: o,
                          days: c,
                          sessionid: p.c.SESSIONID,
                        }),
                        [
                          4,
                          this.InternalSendSimpleGetRequest(
                            "SetBroadcasterRestrictions",
                            r,
                            n,
                            i
                          ),
                        ]
                      );
                    case 1:
                      return [2, e.sent()];
                  }
                });
              });
            }),
            (e.prototype.SetUnBannable = function (o) {
              return Object(h.b)(this, void 0, void 0, function () {
                var t, a, r, n;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.m_steamid.ConvertTo64BitString()),
                        (a = d.a.GetBroadcast(t)),
                        (r = p.c.COMMUNITY_BASE_URL + "broadcast/unban"),
                        (n = {
                          steamid: t,
                          broadcastid: a ? a.m_ulBroadcastID : null,
                          sessionid: p.c.SESSIONID,
                        }),
                        [
                          4,
                          this.InternalSendSimpleGetRequest(
                            "SetUnBannable",
                            r,
                            n,
                            o
                          ),
                        ]
                      );
                    case 1:
                      return [2, e.sent()];
                  }
                });
              });
            }),
            (e.prototype.SendUserReportOnBroadcast = function (o) {
              return Object(h.b)(this, void 0, void 0, function () {
                var t, a, r, n;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = this.m_steamid.ConvertTo64BitString()),
                        (a = d.a.GetBroadcast(t)),
                        (r = p.c.COMMUNITY_BASE_URL + "broadcast/report"),
                        (n = {
                          steamid: t,
                          broadcastid: a ? a.m_ulBroadcastID : null,
                          description: o,
                          sessionid: p.c.SESSIONID,
                        }),
                        [
                          4,
                          this.InternalSendSimpleGetRequest(
                            "SendUserReportOnBroadcast",
                            r,
                            n,
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
            (e.prototype.InternalSendSimpleGetRequest = function (n, o, c, i) {
              return Object(h.b)(this, void 0, void 0, function () {
                var t, a, r;
                return Object(h.e)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        e.trys.push([0, 2, , 3]),
                        [
                          4,
                          O.a.get(o, {
                            params: c,
                            withCredentials: !0,
                            cancelToken: i ? i.token : void 0,
                          }),
                        ]
                      );
                    case 1:
                      return (
                        (t = e.sent()),
                        i && i.token.reason
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
                        (a = e.sent()),
                        (r = Object(m.a)(a)),
                        console.error(
                          "CCommunityBroadcastStore:" +
                            n +
                            ": Failed " +
                            r.strErrorMsg,
                          r
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
              var e = Object(p.g)("broadcastsinfo", "application_config");
              this.ValidateStoreDefault(e) &&
                ((this.m_steamid = new i.a(e.steamid)),
                (this.m_bShowOnlyChat = Boolean(e.show_only_chat)),
                (this.m_bShowOnlyVideo = Boolean(e.show_only_video)));
            }),
            (e.prototype.ValidateStoreDefault = function (e) {
              return (
                !(!e || "object" != typeof e) && "string" == typeof e.steamid
              );
            }),
            Object(h.c)([u.C], e.prototype, "m_curDebugInfo", void 0),
            e
          );
        })(),
        s = a("TyAF"),
        l = a("eN6m"),
        b = a("trWU"),
        _ = a("rKv1"),
        g = a.n(_),
        y = a("nWbB"),
        E = a("TQGK"),
        j = a("6oCP"),
        I = a("Mgs7"),
        C = a("IjL/"),
        B = a("SdTr"),
        A = a("GiuM"),
        G = a("fpVW"),
        P = a.n(G),
        D = a("5L1o"),
        N = a("Jqb/"),
        w = a("ka0M"),
        T = a("exH9"),
        R = a("X3Ds"),
        L = a("TLQK"),
        M = a("eDP5"),
        U = a("YLyR"),
        k = a("V9dL"),
        F = function (e) {
          var t = e.info,
            a = Object(f.useState)(!1),
            r = a[0],
            n = a[1];
          if (!t) return null;
          var o = S.Get().GetBroadcasterSteamID().ConvertTo64BitString(),
            c = d.a.GetBroadcast(o);
          return v.a.createElement(
            "div",
            { className: k.DisplaySection },
            Boolean(t.last_error_result && 1 != t.last_error_result) &&
              v.a.createElement(
                "div",
                { className: k.SubSection },
                v.a.createElement("div", { className: k.Header }, "Error"),
                v.a.createElement(
                  "div",
                  null,
                  "EResult: ",
                  t.last_error_result,
                  ", occurred ",
                  t.last_error_time,
                  " - ",
                  v.a.createElement(U.a, {
                    dateAndTime: t.last_error_time,
                    bSingleLine: !0,
                  })
                )
              ),
            v.a.createElement(
              "div",
              { className: k.SubSection },
              v.a.createElement(
                "div",
                { className: k.Header },
                "Broadcast Setup"
              ),
              v.a.createElement(
                "div",
                null,
                "Broadcaster: ",
                t.steam_id,
                ", SteamID: ",
                o
              ),
              v.a.createElement(
                "div",
                null,
                "Broadcast Directory: ",
                t.directory_server,
                ", SessionID: ",
                t.broadcast_id
              ),
              v.a.createElement(
                "div",
                null,
                "Broadcast Ingestor: ",
                t.relay_server,
                ", UploadID: ",
                t.upload_id
              ),
              v.a.createElement(
                "div",
                null,
                "Broadcast Origin: ",
                t.origin_server
              ),
              v.a.createElement("div", null, "Broadcast Chat: ", t.chat_server)
            ),
            v.a.createElement(
              "div",
              { className: k.SubSection },
              v.a.createElement("div", { className: k.Header }, "Upload Info"),
              v.a.createElement(
                "div",
                null,
                "Upload Client: ",
                t.remote_address,
                " ",
                Boolean(t.is_rtmp) ? "(RTMP)" : "(STEAM CLIENT)"
              ),
              v.a.createElement(
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
            v.a.createElement(
              "div",
              { className: k.SubSection },
              v.a.createElement("div", { className: k.Header }, "Viewer Info"),
              v.a.createElement(
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
              v.a.createElement(
                "div",
                null,
                "Average time watched: ",
                t.average_watch_duration,
                " seconds"
              ),
              v.a.createElement(
                "div",
                null,
                "Last Minute: ",
                t.added_viewers_last_minute,
                " watch requests, ",
                t.rejected_viewers_last_minute,
                " rejected"
              ),
              v.a.createElement("div", null, "Restrictions: ", t.restriction)
            ),
            v.a.createElement(
              "div",
              { className: k.SubSection },
              v.a.createElement("div", { className: k.Header }, "Settings"),
              v.a.createElement("div", null, "is replay? ", t.is_replay),
              v.a.createElement(
                "div",
                null,
                "is replay local file? ",
                t.is_replay_local_file
              ),
              v.a.createElement(
                "div",
                null,
                "is replay clip? ",
                t.is_replay_local_file
              ),
              v.a.createElement(
                "div",
                null,
                "is replay clip? ",
                t.is_replay_clip
              ),
              v.a.createElement(
                "div",
                null,
                "is capturing VOD? ",
                t.is_capturing_vod
              ),
              v.a.createElement(
                "div",
                null,
                "is white listed for store streaming? ",
                t.is_whitelisted
              )
            ),
            v.a.createElement(
              "div",
              { className: k.SubSection },
              v.a.createElement("div", { className: k.Header }, "App Info"),
              v.a.createElement("div", null, "appid: ", t.app_id),
              v.a.createElement("div", null, "app name: ", t.app_name),
              v.a.createElement("div", null, "broadcast title: ", t.title),
              v.a.createElement("div", null, "thumbnail: ", t.thumbnail_url),
              Boolean(t.thumbnail_url) &&
                v.a.createElement("img", { src: t.thumbnail_url }),
              Boolean(t.app_id && 0 < t.app_id) &&
                v.a.createElement(
                  "div",
                  { className: k.AppSummaryWidgetCtn },
                  v.a.createElement(D.h, { id: t.app_id, type: "game" })
                )
            ),
            v.a.createElement(
              "div",
              { className: k.SubSection },
              v.a.createElement(
                "div",
                { className: k.Header },
                "Manifest Information"
              ),
              v.a.createElement(
                "div",
                null,
                "Heartbeat Interval: ",
                c.m_data.heartbeat_interval
              ),
              v.a.createElement("div", null, "DASH MPEG Url: ", c.m_data.url),
              v.a.createElement("div", null, "HLS Url: ", c.m_data.hls_url)
            ),
            v.a.createElement(
              I.d,
              {
                onClick: function () {
                  return n(!r);
                },
              },
              "Toggle Raw Data"
            ),
            Boolean(r) &&
              v.a.createElement(
                v.a.Fragment,
                null,
                v.a.createElement(
                  "div",
                  { className: k.SubSection },
                  v.a.createElement(M.b, { data: t })
                ),
                v.a.createElement(
                  "div",
                  { className: k.SubSection },
                  v.a.createElement(M.b, { data: c.m_data })
                )
              )
          );
        },
        z = a("m0l2"),
        H = a("jUCX"),
        V = a("Gpul"),
        x = a("Qcoi"),
        q = a("h5cq");
      function Y(e) {
        var t = x.a.GetProfileByAccountID(e.GetAccountID());
        if (t) {
          var a = new H.b(e);
          return (
            (a.m_strPlayerName = t.persona_name),
            (a.m_strAvatarHash = t.avatar_hash),
            (a.m_ePersonaState = t.persona_state),
            a
          );
        }
        return null;
      }
      function K(t) {
        t.steamid.GetAccountID();
        var e = Object(f.useState)(Y(t.steamid)),
          a = e[0],
          r = e[1],
          n = Object(f.useState)(x.a.GetProfileURLBySteamID(t.steamid)),
          o = n[0],
          c = n[1],
          i = Object(f.useState)(x.a.GetPersonaNameBySteamID(t.steamid)),
          s = i[0],
          l = i[1];
        return (
          Object(f.useEffect)(
            function () {
              a ||
                Object(h.b)(void 0, void 0, void 0, function () {
                  return Object(h.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          x.a.LoadProfiles([t.steamid.ConvertTo64BitString()]),
                        ];
                      case 1:
                        return (
                          e.sent(),
                          r(Y(t.steamid)),
                          c(x.a.GetProfileURLBySteamID(t.steamid)),
                          l(x.a.GetPersonaNameBySteamID(t.steamid)),
                          [2]
                        );
                    }
                  });
                });
            },
            [t.steamid, a]
          ),
          v.a.createElement(
            "div",
            { className: q.AvatarCtn },
            v.a.createElement(
              "a",
              {
                href: o,
                "data-miniprofile": "s" + t.steamid.ConvertTo64BitString(),
              },
              v.a.createElement(V.b, {
                persona: a,
                size: t.size,
                statusPosition: "bottom",
              })
            ),
            v.a.createElement(
              "div",
              { className: q.NameAndProps },
              Boolean(t.bShowName) &&
                v.a.createElement(
                  "a",
                  {
                    href: o,
                    "data-miniprofile": "s" + t.steamid.ConvertTo64BitString(),
                  },
                  s
                ),
              t.children
            )
          )
        );
      }
      function W(a) {
        if (!p.i.is_support) return null;
        function t(e, t) {
          Object(w.d)(
            v.a.createElement(ie, {
              broadcastSteamID: a.broadcastSteamID,
              strAction: t,
            }),
            Object(R.l)(e)
          );
        }
        var r =
          "https://steamsupport.valvesoftware.com/account/overview/" +
          a.broadcastSteamID.ConvertTo64BitString();
        return v.a.createElement(
          "div",
          { className: Object(T.a)(oe.AdminControls, P.a.ValveOnlyBackground) },
          v.a.createElement("div", null, "(VO) Support Tools"),
          v.a.createElement(
            I.d,
            {
              onClick: function (e) {
                return t(e, "frontpage");
              },
            },
            "Remove from Front Page"
          ),
          v.a.createElement(
            I.d,
            {
              onClick: function (e) {
                return t(e, "ban");
              },
            },
            "Ban from Broadcasting"
          ),
          v.a.createElement(
            I.d,
            {
              onClick: function (e) {
                Object(w.d)(
                  v.a.createElement(se, { steamid: a.broadcastSteamID }),
                  Object(R.l)(e)
                );
              },
            },
            "Make Unbannable"
          ),
          v.a.createElement(
            I.d,
            {
              onClick: function (e) {
                return Object(Z.d)(e, r);
              },
            },
            "Go to Support Page"
          )
        );
      }
      var X = a("5eAM"),
        Q = a("BFsE"),
        J = a("6Y59"),
        Z = a("+d9t"),
        $ = a("IzPI"),
        ee = a("M7Y6"),
        te = Object(s.a)(function (e) {
          var t = e.broadcasterSteamID,
            a = t.ConvertTo64BitString(),
            r = d.a.GetOrCreateBroadcastInfo(a),
            n = Object(f.useState)(
              X.a.GetAppLinkInfo(Number.parseInt(r.m_strAppId))
            ),
            o = n[0],
            c = n[1];
          return (
            Object(f.useEffect)(
              function () {
                var t = Number.parseInt(r.m_strAppId);
                (!o || o.appid != t) &&
                  0 < t &&
                  Object(h.b)(void 0, void 0, void 0, function () {
                    return Object(h.e)(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4, X.a.LoadAppLinkInfo([t])];
                        case 1:
                          return e.sent(), c(X.a.GetAppLinkInfo(t)), [2];
                      }
                    });
                  });
              },
              [r.m_strAppId, o]
            ),
            v.a.createElement(
              C.a,
              null,
              v.a.createElement(
                "div",
                { className: ee.ProfileCtn },
                v.a.createElement(
                  "a",
                  {
                    href: Object($.e)(
                      p.c.STORE_BASE_URL + (o ? "app/" + o.appid : "")
                    ),
                    className: ee.GameCapsule,
                  },
                  v.a.createElement("img", { src: o ? o.capsule : "" })
                ),
                v.a.createElement(
                  "div",
                  { className: ee.StreamDetailsCtn },
                  v.a.createElement(
                    "div",
                    { className: ee.GameAndOptionsCtn },
                    v.a.createElement(
                      "div",
                      { className: ee.GameAndViewersCtn },
                      v.a.createElement(ae, { broadcasterSteamID: t }),
                      v.a.createElement(
                        "div",
                        { className: ee.ViewerCount },
                        Object(L.l)(
                          "#Broadcast_ViewerCount",
                          r.m_nViewerCount.toLocaleString()
                        )
                      )
                    ),
                    v.a.createElement(re, { broadcasterSteamID: t })
                  ),
                  v.a.createElement(K, {
                    steamid: t,
                    size: "Medium",
                    bShowName: !0,
                  })
                )
              )
            )
          );
        }),
        ae = Object(s.a)(function (e) {
          var t = e.broadcasterSteamID.ConvertTo64BitString(),
            a = d.a.GetOrCreateBroadcastInfo(t),
            r = Object(f.useState)(
              X.a.GetAppLinkInfo(Number.parseInt(a.m_strAppId))
            ),
            n = r[0],
            o = r[1];
          return (
            Object(f.useEffect)(
              function () {
                var t = Number.parseInt(a.m_strAppId);
                (!n || n.appid != t) &&
                  0 < t &&
                  Object(h.b)(void 0, void 0, void 0, function () {
                    return Object(h.e)(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return [4, X.a.LoadAppLinkInfo([t])];
                        case 1:
                          return e.sent(), o(X.a.GetAppLinkInfo(t)), [2];
                      }
                    });
                  });
              },
              [a.m_strAppId, n]
            ),
            v.a.createElement(
              "div",
              { className: ee.BroadcastTitleCtn },
              Object(L.f)("#Broadcast_Playing"),
              v.a.createElement(
                "a",
                {
                  href: Object($.e)(
                    p.c.STORE_BASE_URL + (n ? "app/" + n.appid : "")
                  ),
                },
                Boolean(a.m_strAppTitle) ? a.m_strAppTitle : n ? n.title : ""
              ),
              Boolean(a.m_strTitle && 0 < a.m_strTitle.length) &&
                v.a.createElement("span", null, " - ", a.m_strTitle)
            )
          );
        }),
        re = Object(s.a)(function (e) {
          var t = e.broadcasterSteamID,
            a = t.ConvertTo64BitString();
          d.a.GetOrCreateBroadcastInfo(a);
          return v.a.createElement(
            "div",
            { className: ee.BroadcastUserActionsCtn },
            Boolean(
              p.i.steamid != e.broadcasterSteamID.ConvertTo64BitString()
            ) &&
              v.a.createElement(
                I.d,
                {
                  "data-tooltip-text": Object(L.f)(
                    "#Broadcast_User_Report_ttip"
                  ),
                  onClick: function (e) {
                    p.i.logged_in
                      ? Object(w.d)(
                          v.a.createElement(ne, { broadcasterSteamID: t }),
                          Object(R.l)(e)
                        )
                      : Object(w.d)(
                          v.a.createElement(N.d, {
                            strTitle: Object(L.f)(
                              "#EventDisplay_Share_NotLoggedIn"
                            ),
                            strDescription: Object(L.f)(
                              "#EventDisplay_Share_NotLoggedIn_Description"
                            ),
                            strOKButtonText: Object(L.f)("#MobileLogin_SignIn"),
                            onOK: function () {
                              return Object(Q.a)();
                            },
                          }),
                          Object(R.l)(e)
                        );
                  },
                },
                v.a.createElement(J.x, null)
              ),
            v.a.createElement(
              I.d,
              {
                "data-tooltip-text": Object(L.f)("#Broadcast_User_FAQ_ttip"),
                onClick: function (e) {
                  return Object(Z.d)(
                    e,
                    "https://support.steampowered.com/kb_article.php?ref=6730-TOAK-6497"
                  );
                },
              },
              v.a.createElement(J.A, null)
            )
          );
        }),
        ne = function (t) {
          var e = Object(f.useState)(""),
            a = e[0],
            r = e[1];
          return v.a.createElement(
            N.d,
            {
              strTitle: Object(L.f)("#Broadcast_ReportItem_Title"),
              strDescription: Object(L.f)("#Broadcast_ReportItem_Description"),
              onCancel: t.closeModal,
              bOKDisabled: 0 == a.trim().length,
              onOK: function () {
                return Object(h.b)(void 0, void 0, void 0, function () {
                  return Object(h.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, S.Get().SendUserReportOnBroadcast(a)];
                      case 1:
                        return e.sent(), t.closeModal && t.closeModal(), [2];
                    }
                  });
                });
              },
            },
            v.a.createElement("textarea", {
              value: a,
              onChange: function (e) {
                return r(e.currentTarget.value);
              },
              rows: 10,
              cols: 80,
            })
          );
        },
        oe = a("Pa9b"),
        ce = a("0OaU"),
        ie = Object(s.a)(function (e) {
          e.broadcastSteamID;
          var r = e.strAction,
            t = Object(f.useState)(1),
            n = t[0],
            a = t[1],
            o = Object(f.useState)(!1),
            c = o[0],
            i = o[1],
            s = Object(f.useState)(!1),
            l = s[0],
            u = s[1],
            m = Object(f.useState)(!1),
            d = m[0],
            p = m[1],
            b = Object(f.useRef)(null);
          Object(f.useEffect)(function () {
            return function () {
              b.current && b.current("BroadcastConfirmBanAction: unmounting");
            };
          }, []);
          function _() {
            return e.closeModal && e.closeModal();
          }
          return v.a.createElement(
            C.a,
            null,
            v.a.createElement(
              N.h,
              { onEscKeypress: _ },
              v.a.createElement(
                I.f,
                null,
                v.a.createElement(
                  I.l,
                  null,
                  "Remove Broadcast From Front Page"
                ),
                v.a.createElement(
                  I.b,
                  null,
                  v.a.createElement(
                    I.c,
                    null,
                    v.a.createElement(
                      "p",
                      null,
                      "frontpage" == r
                        ? "How long should we prevent the broadcast from appearing in community or store?"
                        : "How long should we prevent the user from Broadcast at all on Steam?"
                    ),
                    v.a.createElement(
                      "div",
                      null,
                      v.a.createElement(I.i, {
                        rgOptions: [
                          { label: "1 Day", data: 1 },
                          { label: "1 Week", data: 7 },
                          { label: "1 Month", data: 30 },
                          { label: "6 Months", data: 180 },
                          { label: "1 Year", data: 365 },
                        ],
                        selectedOption: n,
                        onChange: function (e) {
                          return a(e.data);
                        },
                      }),
                      Boolean(c) && v.a.createElement(ce.a, null, " "),
                      Boolean(l) &&
                        v.a.createElement(
                          "div",
                          null,
                          d
                            ? "Successfully Completed Request"
                            : "Failed to complete request, check browser console and/or try again later"
                        )
                    )
                  )
                ),
                v.a.createElement(
                  I.k,
                  null,
                  l
                    ? v.a.createElement(
                        I.r,
                        { onClick: _ },
                        Object(L.f)("#Button_Dismiss")
                      )
                    : v.a.createElement(
                        I.w,
                        null,
                        v.a.createElement(
                          I.d,
                          { onClick: _ },
                          Object(L.f)("#Button_Cancel")
                        ),
                        v.a.createElement(
                          I.r,
                          {
                            onClick: function () {
                              return Object(h.b)(
                                void 0,
                                void 0,
                                void 0,
                                function () {
                                  var t, a;
                                  return Object(h.e)(this, function (e) {
                                    switch (e.label) {
                                      case 0:
                                        i(!(t = !1)), (e.label = 1);
                                      case 1:
                                        return (
                                          e.trys.push([1, , 3, 4]),
                                          b.current && b.current(),
                                          (a = O.a.CancelToken.source()),
                                          (b.current = a.cancel),
                                          [
                                            4,
                                            S.Get().SetBroadcasterRestrictions(
                                              r,
                                              n,
                                              a
                                            ),
                                          ]
                                        );
                                      case 2:
                                        return (
                                          e.sent(), a.token.reason || 0, [3, 4]
                                        );
                                      case 3:
                                        return i(!1), u(!0), p(t), [7];
                                      case 4:
                                        return [2];
                                    }
                                  });
                                }
                              );
                            },
                          },
                          Object(L.f)("#Button_Confirm")
                        )
                      )
                )
              )
            )
          );
        }),
        se = function (e) {
          var t = Object(f.useState)(!1),
            a = t[0],
            r = t[1],
            n = Object(f.useState)(!1),
            o = n[0],
            c = n[1],
            i = Object(f.useState)(!1),
            s = i[0],
            l = i[1],
            u = Object(f.useRef)(null);
          Object(f.useEffect)(function () {
            return function () {
              u.current && u.current("BroadcastMakeUnbannable: unmounting");
            };
          }, []);
          function m() {
            return e.closeModal && e.closeModal();
          }
          return v.a.createElement(
            C.a,
            null,
            v.a.createElement(
              N.h,
              { onEscKeypress: m },
              v.a.createElement(
                I.f,
                null,
                v.a.createElement(I.l, null, "Make Broadcast Unbannable"),
                v.a.createElement(
                  I.b,
                  null,
                  v.a.createElement(
                    I.c,
                    null,
                    v.a.createElement(
                      "p",
                      null,
                      "Prevent automatic, report based banning changes to this strema visibility the stream for 1 week?"
                    ),
                    v.a.createElement(
                      "div",
                      null,
                      Boolean(a) && v.a.createElement(ce.a, null, " "),
                      Boolean(o) &&
                        v.a.createElement(
                          "div",
                          null,
                          s
                            ? "Successfully Set Unbannable"
                            : "Failed to make Unbannable"
                        )
                    )
                  )
                ),
                v.a.createElement(
                  I.k,
                  null,
                  o
                    ? v.a.createElement(
                        I.r,
                        { onClick: m },
                        Object(L.f)("#Button_Dismiss")
                      )
                    : v.a.createElement(
                        I.w,
                        null,
                        v.a.createElement(
                          I.d,
                          { onClick: m },
                          Object(L.f)("#Button_Cancel")
                        ),
                        v.a.createElement(
                          I.r,
                          {
                            onClick: function () {
                              return Object(h.b)(
                                void 0,
                                void 0,
                                void 0,
                                function () {
                                  var t, a;
                                  return Object(h.e)(this, function (e) {
                                    switch (e.label) {
                                      case 0:
                                        r(!0), (t = !1), (e.label = 1);
                                      case 1:
                                        return (
                                          e.trys.push([1, , 3, 4]),
                                          u.current && u.current(),
                                          (a = O.a.CancelToken.source()),
                                          (u.current = a.cancel),
                                          [4, S.Get().SetUnBannable(a)]
                                        );
                                      case 2:
                                        return (t = e.sent()), [3, 4];
                                      case 3:
                                        return r(!1), c(!0), l(t), [7];
                                      case 4:
                                        return [2];
                                    }
                                  });
                                }
                              );
                            },
                          },
                          Object(L.f)("#Button_Confirm")
                        )
                      )
                )
              )
            )
          );
        },
        le = Object(s.a)(function (e) {
          var t,
            a = S.Get().GetBroadcasterSteamID(),
            r = a.ConvertTo64BitString(),
            n = Object(A.d)("muted", !0),
            o = n[0],
            c = (n[1], d.a.GetBroadcast(r)),
            i = d.a.GetOrCreateBroadcastInfo(r);
          return v.a.createElement(
            v.a.Fragment,
            null,
            v.a.createElement(
              "div",
              { className: Object(T.a)(z.BroadcastPage) },
              v.a.createElement(
                "div",
                { className: Object(T.a)(g.a.BroadcastAndChat) },
                Boolean(!S.Get().BShowOnlyChat()) &&
                  v.a.createElement(
                    C.a,
                    null,
                    v.a.createElement(
                      "div",
                      { className: Object(T.a)(g.a.wrapper) },
                      v.a.createElement(
                        "div",
                        {
                          className: Object(T.a)(
                            (((t = {})[g.a.video_placeholder] = !0),
                            (t.video_placeholder_trgt = !0),
                            (t[g.a.NoChat] = S.Get().BShowOnlyVideo()),
                            t)
                          ),
                        },
                        v.a.createElement(
                          "div",
                          { className: g.a.BroadcastPlayerContainer },
                          v.a.createElement(
                            C.a,
                            null,
                            v.a.createElement(b.a, {
                              steamIDBroadcast: r,
                              watchLocation: 5,
                              bStartMuted: o,
                            })
                          )
                        )
                      )
                    )
                  ),
                Boolean(!S.Get().BShowOnlyVideo()) &&
                  v.a.createElement(
                    "div",
                    { className: g.a.detail_chat_ctn },
                    v.a.createElement(
                      "div",
                      { className: g.a.ChatContainer },
                      v.a.createElement(
                        C.a,
                        null,
                        v.a.createElement(l.a, {
                          emoticonStore: y.f,
                          watchLocation: 6,
                          steamID: r,
                          broadcastID: c ? c.m_ulBroadcastID : void 0,
                        })
                      )
                    )
                  )
              ),
              Boolean(!S.Get().BShowInIframe()) &&
                v.a.createElement(ue, {
                  broadcasterSteamID: a,
                  broadcastInfo: i,
                })
            )
          );
        }),
        ue = Object(s.a)(function (e) {
          var t = e.broadcasterSteamID,
            a = e.broadcastInfo,
            r = Object(f.useState)(null),
            n = r[0],
            o = r[1];
          return (
            Object(f.useEffect)(
              function () {
                Object(h.b)(void 0, void 0, void 0, function () {
                  var t;
                  return Object(h.e)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          E.a.LoadOGGClanInfoForAppID(
                            Number.parseInt(a.m_strAppId)
                          ),
                        ];
                      case 1:
                        return (t = e.sent()), o(t), [2];
                    }
                  });
                });
              },
              [a.m_strAppId]
            ),
            v.a.createElement(
              v.a.Fragment,
              null,
              v.a.createElement(te, { broadcasterSteamID: t }),
              v.a.createElement(me, { steamid: t }),
              Boolean(p.i.is_support) &&
                v.a.createElement(
                  "div",
                  null,
                  v.a.createElement(W, { broadcastSteamID: t }),
                  v.a.createElement(
                    "div",
                    {
                      className: Object(T.a)(
                        P.a.ValveOnlyBackground,
                        z.DebugCtn
                      ),
                    },
                    v.a.createElement(c, null)
                  )
                ),
              Boolean(a.m_strAppId && 7 < Number.parseInt(a.m_strAppId)) &&
                v.a.createElement(
                  "div",
                  { className: z.GameInfoCtn },
                  v.a.createElement(
                    "div",
                    { className: z.GameAboutTitleCtn },
                    v.a.createElement(
                      "div",
                      { className: z.GameAboutTitle },
                      " ",
                      Object(L.f)("#Broadcast_About_Game"),
                      " "
                    ),
                    v.a.createElement(
                      "div",
                      { className: P.a.EventSectionSpacer },
                      " "
                    )
                  ),
                  v.a.createElement(
                    "div",
                    { className: z.GameInfo },
                    v.a.createElement(D.h, {
                      id: Number.parseInt(a.m_strAppId),
                      type: "game",
                    })
                  )
                ),
              Boolean(n) &&
                v.a.createElement(
                  "div",
                  { className: z.RelatedEvents },
                  v.a.createElement(B.a, {
                    clanAccountID: n.clanAccountID,
                    trackingLocation: 6,
                    partnerEventStore: j.d,
                    bViewAllShowInfiniteScroll: !0,
                  })
                )
            )
          );
        }),
        me = Object(s.a)(function (e) {
          var r = Object(f.useRef)(null),
            t = d.a.GetOrCreateBroadcastInfo(e.steamid.ConvertTo64BitString()),
            a = Object(f.useState)(t.m_strTitle),
            n = a[0],
            o = a[1],
            c = Object(f.useState)(""),
            i = c[0],
            s = c[1],
            l = Object(f.useState)(null),
            u = l[0],
            m = l[1];
          if (
            (Object(f.useEffect)(
              function () {
                return (
                  o(t.m_strTitle),
                  function () {
                    r.current && r.current("BroadcastControls: unmounting");
                  }
                );
              },
              [t.m_strTitle]
            ),
            p.i.accountid != e.steamid.GetAccountID())
          )
            return null;
          return v.a.createElement(
            "div",
            { className: z.ControlCtn },
            v.a.createElement(
              "div",
              { className: z.ControlsTitle },
              Object(L.f)("#Broadcaster_Control_title")
            ),
            v.a.createElement(
              "div",
              { className: z.TitleInput },
              v.a.createElement(
                "div",
                { className: z.Options },
                v.a.createElement(I.m, {
                  type: "text",
                  label: Object(L.f)("#Broadcast_title_title"),
                  onChange: function (e) {
                    return o(e.currentTarget.value || "");
                  },
                  placeholder: Object(L.f)("#Broadcast_title_placeholder"),
                  value: n,
                }),
                v.a.createElement(I.m, {
                  type: "text",
                  label: Object(L.f)("#Broadcast_Control_matchid"),
                  onChange: function (e) {
                    return s(e.currentTarget.value || "");
                  },
                  value: i,
                }),
                v.a.createElement(
                  I.d,
                  {
                    onClick: function () {
                      return Object(h.b)(void 0, void 0, void 0, function () {
                        var t, a;
                        return Object(h.e)(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return (
                                r.current && r.current(),
                                (t = O.a.CancelToken.source()),
                                (r.current = t.cancel),
                                [4, S.Get().UpdateBroadcastSettings(i, n, t)]
                              );
                            case 1:
                              return (
                                (a = e.sent()),
                                t.token.reason ||
                                  m(
                                    Object(L.f)(
                                      a
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
                    "data-tooltip-text": Object(L.f)(
                      "#Broadcast_save_title_ttip"
                    ),
                  },
                  Object(L.f)("#Broadcast_save_changes")
                )
              ),
              v.a.createElement(
                "div",
                { className: z.StopCtn },
                v.a.createElement(
                  I.d,
                  {
                    onClick: function (e) {
                      Object(w.d)(
                        v.a.createElement(N.d, {
                          strTitle: Object(L.f)(
                            "#Broadcast_Control_StopBroadcast"
                          ),
                          strDescription: Object(L.f)(
                            "#EventEditor_GenericAreYouSure"
                          ),
                          onOK: function () {
                            return Object(h.b)(
                              void 0,
                              void 0,
                              void 0,
                              function () {
                                var t, a;
                                return Object(h.e)(this, function (e) {
                                  switch (e.label) {
                                    case 0:
                                      return (
                                        r.current && r.current(),
                                        (t = O.a.CancelToken.source()),
                                        (r.current = t.cancel),
                                        [4, S.Get().StopBroadcast(t)]
                                      );
                                    case 1:
                                      return (
                                        (a = e.sent()),
                                        t.token.reason ||
                                          m(
                                            Object(L.f)(
                                              a
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
                        Object(R.l)(e)
                      );
                    },
                  },
                  Object(L.f)("#Broadcast_Control_StopBroadcast")
                ),
                Boolean(u) && v.a.createElement("div", null, u)
              )
            )
          );
        }),
        de = a("9w6b");
      a.d(t, "default", function () {
        return be;
      });
      var pe = {
        BroadcastWatch: function (e) {
          return "/broadcast/(watch|watchnew)/" + e;
        },
      };
      function be(e) {
        return (
          Object(f.useEffect)(function () {
            de.a.InitGlobal();
          }, []),
          v.a.createElement(
            v.a.Fragment,
            null,
            v.a.createElement(
              r.e,
              null,
              v.a.createElement(r.c, {
                path: pe.BroadcastWatch(":steamid_or_user_vanity"),
                render: function (e) {
                  return v.a.createElement(le, {
                    strSteamID: e.match.params.steamid_or_user_vanity,
                  });
                },
              }),
              v.a.createElement(r.c, { component: n.b })
            )
          )
        );
      }
    },
    Gpul: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return p;
      }),
        a.d(t, "b", function () {
          return o;
        });
      var s = a("mrSG"),
        l = a("q1tI"),
        r = a("TyAF"),
        i = a("jUCX"),
        u = a("exH9"),
        n = a("WeG9"),
        m = a.n(n),
        d = a("lkRc"),
        p = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(s.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.strAvatarURL,
                a = e.size,
                r = e.className,
                n = e.statusStyle,
                o = e.statusPosition,
                c = e.children,
                i = Object(s.f)(e, [
                  "strAvatarURL",
                  "size",
                  "className",
                  "statusStyle",
                  "statusPosition",
                  "children",
                ]);
              return l.createElement(
                "div",
                Object(s.a)(
                  {
                    className: Object(u.a)(
                      m.a.avatarHolder,
                      "avatarHolder",
                      "no-drag",
                      a || "Medium",
                      r
                    ),
                  },
                  i
                ),
                l.createElement("div", {
                  className: Object(u.a)(m.a.avatarStatus, "avatarStatus", o),
                  style: n,
                }),
                l.createElement("img", {
                  className: Object(u.a)(m.a.avatar, "avatar"),
                  src: t,
                  draggable: !1,
                }),
                c
              );
            }),
            t
          );
        })(l.Component),
        o = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(s.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.persona,
                a = e.size,
                r = e.animatedAvatar,
                n = e.className,
                o = Object(s.f)(e, [
                  "persona",
                  "size",
                  "animatedAvatar",
                  "className",
                ]),
                c = "";
              return (
                r && r.image_small && 0 != r.image_small.length
                  ? (c =
                      d.c.MEDIA_CDN_COMMUNITY_URL + "images/" + r.image_small)
                  : t
                  ? ((c = t.avatar_url_medium),
                    "Small" == a || "X-Small" == a
                      ? (c = t.avatar_url)
                      : ("Large" != a && "X-Large" != a && "FillArea" != a) ||
                        (c = t.avatar_url_full))
                  : ((c =
                      d.c.MEDIA_CDN_COMMUNITY_URL +
                      "images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"),
                    "Small" == a || "X-Small" == a
                      ? (c =
                          d.c.MEDIA_CDN_COMMUNITY_URL +
                          "images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg")
                      : ("Large" != a && "X-Large" != a && "FillArea" != a) ||
                        (c =
                          d.c.MEDIA_CDN_COMMUNITY_URL +
                          "images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg")),
                l.createElement(
                  p,
                  Object(s.a)(
                    {
                      strAvatarURL: c,
                      size: a,
                      className: Object(u.a)(Object(i.c)(t), n),
                    },
                    o
                  )
                )
              );
            }),
            (t = Object(s.c)([r.a], t))
          );
        })(l.Component),
        c = Object(r.a)(function (e) {
          var t = e.profileItem,
            a = e.className,
            r = e.bDisableAnimation,
            n = Object(s.f)(e, [
              "profileItem",
              "className",
              "bDisableAnimation",
            ]);
          if (!t || !t.image_small || 0 == t.image_small.length) return null;
          var o = r ? t.image_large : t.image_small;
          return (
            (o = o || t.image_small).startsWith("https://") ||
              (o = d.c.MEDIA_CDN_COMMUNITY_URL + "images/" + o),
            l.createElement(
              "div",
              Object(s.a)(
                { className: Object(u.a)(m.a.avatarFrame, a, "avatarFrame") },
                n
              ),
              l.createElement("img", { className: m.a.avatarFrameImg, src: o })
            )
          );
        });
      l.Component;
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
    WeG9: function (e, t, a) {
      e.exports = {
        avatarHolder: "steamavatar_avatarHolder_nibod",
        avatarStatus: "steamavatar_avatarStatus_3xUpb",
        avatar: "steamavatar_avatar_3h-QR",
        avatarFrame: "steamavatar_avatarFrame_X_mJE",
        avatarFrameImg: "steamavatar_avatarFrameImg_3fM0F",
      };
    },
    h5cq: function (e, t, a) {
      e.exports = {
        AvatarCtn: "communityavatar_AvatarCtn_3n3n0",
        NameAndProps: "communityavatar_NameAndProps_3Pljh",
      };
    },
    jUCX: function (e, t, a) {
      "use strict";
      a.d(t, "c", function () {
        return u;
      }),
        a.d(t, "b", function () {
          return m;
        });
      var r = a("mrSG"),
        n = a("2vnA"),
        o = a("Gp1o"),
        c = a("qD+2"),
        i = a("TLQK"),
        s = a("lkRc"),
        l = a("8H1D");
      function u(e) {
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
      a.d(t, "a", function () {
        return l.a;
      });
      var m = (function () {
        function e(e) {
          (this.m_bInitialized = !1),
            (this.m_ePersonaState = 0),
            (this.m_unGamePlayedAppID = 0),
            (this.m_gameid = "0"),
            (this.m_unPersonaStateFlags = 0),
            (this.m_strPlayerName = ""),
            (this.m_strAvatarHash = l.b),
            (this.m_rtLastSeenOnline = 0),
            (this.m_strGameExtraInfo = ""),
            (this.m_unGameServerIP = 0),
            (this.m_unGameServerPort = 0),
            (this.m_game_lobby_id = ""),
            (this.m_bPlayerNamePending = !1),
            (this.m_bAvatarPending = !1),
            (this.m_mapRichPresence = n.C.map()),
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
              ? c.a.GetAppInfo(this.m_unGamePlayedAppID).name
              : "";
          }),
          (e.prototype.GetCurrentGameIconURL = function () {
            return this.m_unGamePlayedAppID
              ? c.a.GetAppInfo(this.m_unGamePlayedAppID).icon_url
              : "";
          }),
          (e.prototype.GetCurrentGameLogoURL = function () {
            return this.m_unGamePlayedAppID
              ? c.a.GetAppInfo(this.m_unGamePlayedAppID).logo_url
              : "";
          }),
          (e.prototype.GetBroadcastGameLogoURL = function () {
            return this.m_broadcastAppId
              ? c.a.GetAppInfo(this.m_broadcastAppId).logo_url
              : "";
          }),
          (e.prototype.BIsAppInfoReady = function () {
            return (
              !this.m_unGamePlayedAppID ||
              c.a.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
            );
          }),
          (e.prototype.HasCurrentGameRichPresence = function () {
            return this.m_mapRichPresence.has("steam_display");
          }),
          (e.prototype.GetCurrentGameRichPresence = function () {
            if (this.HasCurrentGameRichPresence()) {
              var e = c.a.GetRichPresenceLoc(this.m_unGamePlayedAppID);
              if (e) {
                var t = this.m_mapRichPresence.get("steam_display");
                return e.Localize(t, this.m_mapRichPresence);
              }
            } else if (this.HasStateFlag(8))
              return Object(i.f)("#PersonaStateRemotePlayTogether");
            return "";
          }),
          (e.prototype.GetOfflineStatusUpdateRate = function () {
            if (0 == this.last_seen_online) return 3e4;
            var e = 1e3,
              t = c.a.CMInterface.GetServerRTime32() - this.last_seen_online;
            return (e *= 86400 < t ? 3600 : 7200 < t ? 60 : 15);
          }),
          (e.prototype.GetOfflineStatusTime = function () {
            if (0 == this.last_seen_online)
              return Object(i.f)("#PersonaStateOffline");
            var e = this.GetOfflineStatusUpdateRate();
            (!s.c.IN_MOBILE || e <= 60) && Object(o.c)(e);
            var t = c.a.CMInterface.GetServerRTime32() - this.last_seen_online;
            return t < 60
              ? Object(i.f)("#PersonaStateLastSeen_JustNow")
              : Object(i.f)("#PersonaStateLastSeen", Object(i.q)(t));
          }),
          (e.prototype.GetLocalizedOnlineStatus = function () {
            switch (this.m_ePersonaState) {
              case 0:
              case 7:
                return this.GetOfflineStatusTime();
              case 1:
                return Object(i.f)("#PersonaStateOnline");
              case 2:
                return Object(i.f)("#PersonaStateBusy");
              case 3:
                return Object(i.f)("#PersonaStateAway");
              case 4:
                return Object(i.f)("#PersonaStateSnooze");
              case 5:
                return Object(i.f)("#PersonaStateLookingToTrade");
              case 6:
                return Object(i.f)("#PersonaStateLookingToPlay");
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
            return this.m_strAvatarHash != l.b;
          }),
          Object.defineProperty(e.prototype, "avatar_url", {
            get: function () {
              return Object(l.a)(this.m_strAvatarHash);
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "avatar_url_medium", {
            get: function () {
              return Object(l.a)(this.m_strAvatarHash, "medium");
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "avatar_url_full", {
            get: function () {
              return Object(l.a)(this.m_strAvatarHash, "full");
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.SortStatusComparator = function (e, t, a) {
            if (t.has_public_party_beacon) {
              if (!a.has_public_party_beacon) return -1;
            } else {
              if (a.has_public_party_beacon) return 1;
              if (t.is_ingame) {
                if (!a.is_ingame) return -1;
                if (!e) return 0;
                if (t.is_awayOrSnooze) {
                  if (!a.is_awayOrSnooze) return 1;
                } else if (a.is_awayOrSnooze) return -1;
              } else if (a.is_ingame) return 1;
            }
            if (t.is_online) {
              if (!a.is_online) return -1;
            } else if (a.is_online) return 1;
            if (e)
              if (t.is_awayOrSnooze) {
                if (!a.is_awayOrSnooze) return 1;
              } else if (a.is_awayOrSnooze) return -1;
            return 0;
          }),
          Object(r.c)([n.C], e.prototype, "m_bInitialized", void 0),
          Object(r.c)([n.C], e.prototype, "m_ePersonaState", void 0),
          Object(r.c)([n.C], e.prototype, "m_unGamePlayedAppID", void 0),
          Object(r.c)([n.C], e.prototype, "m_gameid", void 0),
          Object(r.c)([n.C], e.prototype, "m_unPersonaStateFlags", void 0),
          Object(r.c)([n.C], e.prototype, "m_strPlayerName", void 0),
          Object(r.c)([n.C], e.prototype, "m_strAvatarHash", void 0),
          Object(r.c)([n.C], e.prototype, "m_rtLastSeenOnline", void 0),
          Object(r.c)([n.C], e.prototype, "m_strGameExtraInfo", void 0),
          Object(r.c)([n.C], e.prototype, "m_unGameServerIP", void 0),
          Object(r.c)([n.C], e.prototype, "m_unGameServerPort", void 0),
          Object(r.c)([n.C], e.prototype, "m_game_lobby_id", void 0),
          Object(r.c)([n.C], e.prototype, "m_bPlayerNamePending", void 0),
          Object(r.c)([n.C], e.prototype, "m_bAvatarPending", void 0),
          Object(r.c)([n.C], e.prototype, "m_broadcastId", void 0),
          Object(r.c)([n.C], e.prototype, "m_broadcastAccountId", void 0),
          Object(r.c)([n.C], e.prototype, "m_broadcastAppId", void 0),
          Object(r.c)([n.C], e.prototype, "m_broadcastViewerCount", void 0),
          Object(r.c)([n.C], e.prototype, "m_strBroadcastTitle", void 0),
          Object(r.c)([n.C], e.prototype, "m_bCommunityBanned", void 0),
          e
        );
      })();
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
