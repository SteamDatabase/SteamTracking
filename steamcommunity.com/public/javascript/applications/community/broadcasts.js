/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    "8zUZ": function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "default", function () {
          return be;
        });
      a("xnZ7"), a("idvb");
      var r = a("q1tI"),
        n = a.n(r),
        o = a("Ty5D"),
        c = a("nmPn"),
        i = a("mrSG"),
        s = a("vDqi"),
        l = a.n(s),
        d = a("2vnA"),
        m = a("kLLr"),
        u = a("boaH"),
        _ = a("bDQf"),
        b = a("lkRc"),
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
              return Object(i.b)(this, void 0, void 0, function () {
                var t, a, r, n, o;
                return Object(i.e)(this, function (c) {
                  switch (c.label) {
                    case 0:
                      (t =
                        b.c.COMMUNITY_BASE_URL +
                        "broadcast/broadcastdebuginfo"),
                        (a = {
                          steamid: this.m_steamid.ConvertTo64BitString(),
                          origin: self.origin,
                        }),
                        (c.label = 1);
                    case 1:
                      return (
                        c.trys.push([1, 3, , 4]),
                        [
                          4,
                          l.a.get(t, {
                            params: a,
                            withCredentials: !0,
                            cancelToken: e ? e.token : void 0,
                          }),
                        ]
                      );
                    case 2:
                      return (
                        (r = c.sent()),
                        e && e.token.reason
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
                        (n = c.sent()),
                        (o = Object(_.c)(n)),
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
            (e.prototype.UpdateBroadcastSettings = function (e, t, a) {
              return Object(i.b)(this, void 0, void 0, function () {
                var r, n, o, c, s, m;
                return Object(i.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      (r =
                        b.c.COMMUNITY_BASE_URL +
                        "broadcast/updatebroadcastsettings"),
                        (n = {
                          steamid: this.m_steamid.ConvertTo64BitString(),
                          matchid: e,
                          title: t,
                          sessionid: b.c.SESSIONID,
                        }),
                        (i.label = 1);
                    case 1:
                      return (
                        i.trys.push([1, 3, , 4]),
                        [
                          4,
                          l.a.get(r, {
                            params: n,
                            withCredentials: !0,
                            cancelToken: a ? a.token : void 0,
                          }),
                        ]
                      );
                    case 2:
                      return (
                        (o = i.sent()),
                        a && a.token.reason
                          ? [2, !1]
                          : o &&
                            200 == o.status &&
                            o.data &&
                            1 == o.data.success
                          ? ((c = u.a.GetOrCreateBroadcastInfo(
                              this.m_steamid.ConvertTo64BitString()
                            )) &&
                              Object(d.G)(function () {
                                c.m_strTitle = t;
                              }),
                            [2, !0])
                          : [3, 4]
                      );
                    case 3:
                      return (
                        (s = i.sent()),
                        (m = Object(_.c)(s)),
                        console.error(
                          "UpdateBroadcastSettings: Failed " + m.strErrorMsg,
                          m
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
              return Object(i.b)(this, void 0, void 0, function () {
                var t, a, r, n;
                return Object(i.e)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return (
                        (t = this.m_steamid.ConvertTo64BitString()),
                        (a = u.a.GetBroadcast(t)),
                        (r =
                          b.c.COMMUNITY_BASE_URL + "broadcast/stopbroadcast"),
                        (n = {
                          steamid: t,
                          broadcastid: a ? a.m_ulBroadcastID : null,
                          sessionid: b.c.SESSIONID,
                        }),
                        [
                          4,
                          this.InternalSendSimpleGetRequest(
                            "StopBroadcast",
                            r,
                            n,
                            e
                          ),
                        ]
                      );
                    case 1:
                      return [2, o.sent()];
                  }
                });
              });
            }),
            (e.prototype.SetBroadcasterRestrictions = function (e, t, a) {
              return Object(i.b)(this, void 0, void 0, function () {
                var r, n, o, c;
                return Object(i.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (r = this.m_steamid.ConvertTo64BitString()),
                        (n = u.a.GetBroadcast(r)),
                        (o =
                          b.c.COMMUNITY_BASE_URL +
                          "broadcast/setbroadcastrestriction"),
                        (c = {
                          steamid: r,
                          broadcastid: n ? n.m_ulBroadcastID : null,
                          type: e,
                          days: t,
                          sessionid: b.c.SESSIONID,
                        }),
                        [
                          4,
                          this.InternalSendSimpleGetRequest(
                            "SetBroadcasterRestrictions",
                            o,
                            c,
                            a
                          ),
                        ]
                      );
                    case 1:
                      return [2, i.sent()];
                  }
                });
              });
            }),
            (e.prototype.SetUnBannable = function (e) {
              return Object(i.b)(this, void 0, void 0, function () {
                var t, a, r, n;
                return Object(i.e)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return (
                        (t = this.m_steamid.ConvertTo64BitString()),
                        (a = u.a.GetBroadcast(t)),
                        (r = b.c.COMMUNITY_BASE_URL + "broadcast/unban"),
                        (n = {
                          steamid: t,
                          broadcastid: a ? a.m_ulBroadcastID : null,
                          sessionid: b.c.SESSIONID,
                        }),
                        [
                          4,
                          this.InternalSendSimpleGetRequest(
                            "SetUnBannable",
                            r,
                            n,
                            e
                          ),
                        ]
                      );
                    case 1:
                      return [2, o.sent()];
                  }
                });
              });
            }),
            (e.prototype.SendUserReportOnBroadcast = function (e) {
              return Object(i.b)(this, void 0, void 0, function () {
                var t, a, r, n;
                return Object(i.e)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return (
                        (t = this.m_steamid.ConvertTo64BitString()),
                        (a = u.a.GetBroadcast(t)),
                        (r = b.c.COMMUNITY_BASE_URL + "broadcast/report"),
                        (n = {
                          steamid: t,
                          broadcastid: a ? a.m_ulBroadcastID : null,
                          description: e,
                          sessionid: b.c.SESSIONID,
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
                      return [2, o.sent()];
                  }
                });
              });
            }),
            (e.prototype.InternalSendSimpleGetRequest = function (e, t, a, r) {
              return Object(i.b)(this, void 0, void 0, function () {
                var n, o, c;
                return Object(i.e)(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        i.trys.push([0, 2, , 3]),
                        [
                          4,
                          l.a.get(t, {
                            params: a,
                            withCredentials: !0,
                            cancelToken: r ? r.token : void 0,
                          }),
                        ]
                      );
                    case 1:
                      return (
                        (n = i.sent()),
                        r && r.token.reason
                          ? [2, !1]
                          : n &&
                            200 == n.status &&
                            n.data &&
                            1 == n.data.success
                          ? [2, !0]
                          : [3, 3]
                      );
                    case 2:
                      return (
                        (o = i.sent()),
                        (c = Object(_.c)(o)),
                        console.error(
                          "CCommunityBroadcastStore:" +
                            e +
                            ": Failed " +
                            c.strErrorMsg,
                          c
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
              var e = Object(b.g)("broadcastsinfo", "application_config");
              this.ValidateStoreDefault(e) &&
                ((this.m_steamid = new m.a(e.steamid)),
                (this.m_bShowOnlyChat = Boolean(e.show_only_chat)),
                (this.m_bShowOnlyVideo = Boolean(e.show_only_video)));
            }),
            (e.prototype.ValidateStoreDefault = function (e) {
              return (
                !(!e || "object" != typeof e) && "string" == typeof e.steamid
              );
            }),
            Object(i.c)([d.C], e.prototype, "m_curDebugInfo", void 0),
            e
          );
        })(),
        f = a("TyAF"),
        v = a("eN6m"),
        h = a("trWU"),
        O = a("rKv1"),
        S = a.n(O),
        g = a("nWbB"),
        y = a("TQGK"),
        E = a("6oCP"),
        C = a("Mgs7"),
        I = a("IjL/"),
        j = a("SdTr"),
        B = a("GiuM"),
        A = a("fpVW"),
        P = a.n(A),
        G = a("5L1o"),
        w = a("Jqb/"),
        N = a("ka0M"),
        D = a("exH9"),
        T = a("X3Ds"),
        R = a("TLQK"),
        L = a("eDP5"),
        k = a("YLyR"),
        M = a("V9dL"),
        U = function (e) {
          var t = Object(r.useRef)(null),
            a = Object(r.useState)(null),
            o = a[0],
            c = a[1];
          return (
            Object(r.useEffect)(function () {
              return function () {
                t.current && t.current("BroadcastDebugSection: unmounting");
              };
            }, []),
            n.a.createElement(
              I.a,
              null,
              n.a.createElement(
                "div",
                { className: Object(D.a)(M.Container) },
                n.a.createElement(
                  "div",
                  { className: M.Controls },
                  n.a.createElement(
                    C.d,
                    {
                      onClick: function () {
                        return Object(i.b)(void 0, void 0, void 0, function () {
                          var e, a;
                          return Object(i.e)(this, function (r) {
                            switch (r.label) {
                              case 0:
                                return (
                                  t.current && t.current(),
                                  (e = l.a.CancelToken.source()),
                                  (t.current = e.cancel),
                                  (a = c),
                                  [4, p.Get().LoadBroadcastDebugInfo(e)]
                                );
                              case 1:
                                return a.apply(void 0, [r.sent()]), [2];
                            }
                          });
                        });
                      },
                    },
                    "(VO) Load Debug Info"
                  )
                ),
                n.a.createElement(I.a, null, n.a.createElement(F, { info: o }))
              )
            )
          );
        },
        F = function (e) {
          var t = e.info,
            a = Object(r.useState)(!1),
            o = a[0],
            c = a[1];
          if (!t) return null;
          var i = p.Get().GetBroadcasterSteamID().ConvertTo64BitString(),
            s = u.a.GetBroadcast(i);
          return n.a.createElement(
            "div",
            { className: M.DisplaySection },
            Boolean(t.last_error_result && 1 != t.last_error_result) &&
              n.a.createElement(
                "div",
                { className: M.SubSection },
                n.a.createElement("div", { className: M.Header }, "Error"),
                n.a.createElement(
                  "div",
                  null,
                  "EResult: ",
                  t.last_error_result,
                  ", occurred ",
                  t.last_error_time,
                  " - ",
                  n.a.createElement(k.a, {
                    dateAndTime: t.last_error_time,
                    bSingleLine: !0,
                  })
                )
              ),
            n.a.createElement(
              "div",
              { className: M.SubSection },
              n.a.createElement(
                "div",
                { className: M.Header },
                "Broadcast Setup"
              ),
              n.a.createElement(
                "div",
                null,
                "Broadcaster: ",
                t.steam_id,
                ", SteamID: ",
                i
              ),
              n.a.createElement(
                "div",
                null,
                "Broadcast Directory: ",
                t.directory_server,
                ", SessionID: ",
                t.broadcast_id
              ),
              n.a.createElement(
                "div",
                null,
                "Broadcast Ingestor: ",
                t.relay_server,
                ", UploadID: ",
                t.upload_id
              ),
              n.a.createElement(
                "div",
                null,
                "Broadcast Origin: ",
                t.origin_server
              ),
              n.a.createElement("div", null, "Broadcast Chat: ", t.chat_server)
            ),
            n.a.createElement(
              "div",
              { className: M.SubSection },
              n.a.createElement("div", { className: M.Header }, "Upload Info"),
              n.a.createElement(
                "div",
                null,
                "Upload Client: ",
                t.remote_address,
                " ",
                Boolean(t.is_rtmp) ? "(RTMP)" : "(STEAM CLIENT)"
              ),
              n.a.createElement(
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
            n.a.createElement(
              "div",
              { className: M.SubSection },
              n.a.createElement("div", { className: M.Header }, "Viewer Info"),
              n.a.createElement(
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
              n.a.createElement(
                "div",
                null,
                "Average time watched: ",
                t.average_watch_duration,
                " seconds"
              ),
              n.a.createElement(
                "div",
                null,
                "Last Minute: ",
                t.added_viewers_last_minute,
                " watch requests, ",
                t.rejected_viewers_last_minute,
                " rejected"
              ),
              n.a.createElement("div", null, "Restrictions: ", t.restriction)
            ),
            n.a.createElement(
              "div",
              { className: M.SubSection },
              n.a.createElement("div", { className: M.Header }, "Settings"),
              n.a.createElement("div", null, "is replay? ", t.is_replay),
              n.a.createElement(
                "div",
                null,
                "is replay local file? ",
                t.is_replay_local_file
              ),
              n.a.createElement(
                "div",
                null,
                "is replay clip? ",
                t.is_replay_local_file
              ),
              n.a.createElement(
                "div",
                null,
                "is replay clip? ",
                t.is_replay_clip
              ),
              n.a.createElement(
                "div",
                null,
                "is capturing VOD? ",
                t.is_capturing_vod
              ),
              n.a.createElement(
                "div",
                null,
                "is white listed for store streaming? ",
                t.is_whitelisted
              )
            ),
            n.a.createElement(
              "div",
              { className: M.SubSection },
              n.a.createElement("div", { className: M.Header }, "App Info"),
              n.a.createElement("div", null, "appid: ", t.app_id),
              n.a.createElement("div", null, "app name: ", t.app_name),
              n.a.createElement("div", null, "broadcast title: ", t.title),
              n.a.createElement("div", null, "thumbnail: ", t.thumbnail_url),
              Boolean(t.thumbnail_url) &&
                n.a.createElement("img", { src: t.thumbnail_url }),
              Boolean(t.app_id && t.app_id > 0) &&
                n.a.createElement(
                  "div",
                  { className: M.AppSummaryWidgetCtn },
                  n.a.createElement(G.o, { id: t.app_id, type: "game" })
                )
            ),
            n.a.createElement(
              "div",
              { className: M.SubSection },
              n.a.createElement(
                "div",
                { className: M.Header },
                "Manifest Information"
              ),
              n.a.createElement(
                "div",
                null,
                "Heartbeat Interval: ",
                s.m_data.heartbeat_interval
              ),
              n.a.createElement("div", null, "DASH MPEG Url: ", s.m_data.url),
              n.a.createElement("div", null, "HLS Url: ", s.m_data.hls_url)
            ),
            n.a.createElement(
              C.d,
              {
                onClick: function () {
                  return c(!o);
                },
              },
              "Toggle Raw Data"
            ),
            Boolean(o) &&
              n.a.createElement(
                n.a.Fragment,
                null,
                n.a.createElement(
                  "div",
                  { className: M.SubSection },
                  n.a.createElement(L.b, { data: t })
                ),
                n.a.createElement(
                  "div",
                  { className: M.SubSection },
                  n.a.createElement(L.b, { data: s.m_data })
                )
              )
          );
        },
        z = a("m0l2"),
        V = a("jUCX"),
        H = a("Gpul"),
        x = a("Qcoi"),
        Y = a("h5cq");
      function q(e) {
        var t = x.a.GetProfileByAccountID(e.GetAccountID());
        if (t) {
          var a = new V.b(e);
          return (
            (a.m_strPlayerName = t.persona_name),
            (a.m_strAvatarHash = t.avatar_hash),
            (a.m_ePersonaState = t.persona_state),
            a
          );
        }
        return null;
      }
      var K = function (e) {
          e.steamid.GetAccountID();
          var t = Object(r.useState)(q(e.steamid)),
            a = t[0],
            o = t[1],
            c = Object(r.useState)(x.a.GetProfileURLBySteamID(e.steamid)),
            s = c[0],
            l = c[1],
            d = Object(r.useState)(x.a.GetPersonaNameBySteamID(e.steamid)),
            m = d[0],
            u = d[1];
          return (
            Object(r.useEffect)(
              function () {
                if (!a) {
                  Object(i.b)(void 0, void 0, void 0, function () {
                    return Object(i.e)(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [
                            4,
                            x.a.LoadProfiles([
                              e.steamid.ConvertTo64BitString(),
                            ]),
                          ];
                        case 1:
                          return (
                            t.sent(),
                            o(q(e.steamid)),
                            l(x.a.GetProfileURLBySteamID(e.steamid)),
                            u(x.a.GetPersonaNameBySteamID(e.steamid)),
                            [2]
                          );
                      }
                    });
                  });
                }
              },
              [e.steamid, a]
            ),
            n.a.createElement(
              "div",
              { className: Y.AvatarCtn },
              n.a.createElement(
                "a",
                {
                  href: s,
                  "data-miniprofile": "s" + e.steamid.ConvertTo64BitString(),
                },
                n.a.createElement(H.b, {
                  persona: a,
                  size: e.size,
                  statusPosition: "bottom",
                })
              ),
              n.a.createElement(
                "div",
                { className: Y.NameAndProps },
                Boolean(e.bShowName) &&
                  n.a.createElement(
                    "a",
                    {
                      href: s,
                      "data-miniprofile":
                        "s" + e.steamid.ConvertTo64BitString(),
                    },
                    m
                  ),
                e.children
              )
            )
          );
        },
        W = a("5eAM"),
        X = a("BFsE"),
        Q = a("6Y59"),
        J = a("+d9t"),
        Z = a("IzPI"),
        $ = a("M7Y6"),
        ee = Object(f.a)(function (e) {
          var t = e.broadcasterSteamID,
            a = t.ConvertTo64BitString(),
            o = u.a.GetOrCreateBroadcastInfo(a),
            c = Object(r.useState)(
              W.a.GetAppLinkInfo(Number.parseInt(o.m_strAppId))
            ),
            s = c[0],
            l = c[1];
          return (
            Object(r.useEffect)(
              function () {
                var e = Number.parseInt(o.m_strAppId);
                if ((!s || s.appid != e) && e > 0) {
                  Object(i.b)(void 0, void 0, void 0, function () {
                    return Object(i.e)(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [4, W.a.LoadAppLinkInfo([e])];
                        case 1:
                          return t.sent(), l(W.a.GetAppLinkInfo(e)), [2];
                      }
                    });
                  });
                }
              },
              [o.m_strAppId, s]
            ),
            n.a.createElement(
              I.a,
              null,
              n.a.createElement(
                "div",
                { className: $.ProfileCtn },
                n.a.createElement(
                  "a",
                  {
                    href: Object(Z.f)(
                      b.c.STORE_BASE_URL + (s ? "app/" + s.appid : "")
                    ),
                    className: $.GameCapsule,
                  },
                  n.a.createElement("img", { src: s ? s.capsule : "" })
                ),
                n.a.createElement(
                  "div",
                  { className: $.StreamDetailsCtn },
                  n.a.createElement(
                    "div",
                    { className: $.GameAndOptionsCtn },
                    n.a.createElement(
                      "div",
                      { className: $.GameAndViewersCtn },
                      n.a.createElement(te, { broadcasterSteamID: t }),
                      n.a.createElement(
                        "div",
                        { className: $.ViewerCount },
                        Object(R.l)(
                          "#Broadcast_ViewerCount",
                          o.m_nViewerCount.toLocaleString()
                        )
                      )
                    ),
                    n.a.createElement(ae, { broadcasterSteamID: t })
                  ),
                  n.a.createElement(K, {
                    steamid: t,
                    size: "Medium",
                    bShowName: !0,
                  })
                )
              )
            )
          );
        }),
        te = Object(f.a)(function (e) {
          var t = e.broadcasterSteamID.ConvertTo64BitString(),
            a = u.a.GetOrCreateBroadcastInfo(t),
            o = Object(r.useState)(
              W.a.GetAppLinkInfo(Number.parseInt(a.m_strAppId))
            ),
            c = o[0],
            s = o[1];
          return (
            Object(r.useEffect)(
              function () {
                var e = Number.parseInt(a.m_strAppId);
                if ((!c || c.appid != e) && e > 0) {
                  Object(i.b)(void 0, void 0, void 0, function () {
                    return Object(i.e)(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [4, W.a.LoadAppLinkInfo([e])];
                        case 1:
                          return t.sent(), s(W.a.GetAppLinkInfo(e)), [2];
                      }
                    });
                  });
                }
              },
              [a.m_strAppId, c]
            ),
            n.a.createElement(
              "div",
              { className: $.BroadcastTitleCtn },
              Object(R.f)("#Broadcast_Playing"),
              n.a.createElement(
                "a",
                {
                  href: Object(Z.f)(
                    b.c.STORE_BASE_URL + (c ? "app/" + c.appid : "")
                  ),
                },
                Boolean(a.m_strAppTitle) ? a.m_strAppTitle : c ? c.title : ""
              ),
              Boolean(a.m_strTitle && a.m_strTitle.length > 0) &&
                n.a.createElement("span", null, " - ", a.m_strTitle)
            )
          );
        }),
        ae = Object(f.a)(function (e) {
          var t = e.broadcasterSteamID,
            a = t.ConvertTo64BitString();
          u.a.GetOrCreateBroadcastInfo(a);
          return n.a.createElement(
            "div",
            { className: $.BroadcastUserActionsCtn },
            Boolean(
              b.i.steamid != e.broadcasterSteamID.ConvertTo64BitString()
            ) &&
              n.a.createElement(
                C.d,
                {
                  "data-tooltip-text": Object(R.f)(
                    "#Broadcast_User_Report_ttip"
                  ),
                  onClick: function (e) {
                    b.i.logged_in
                      ? Object(N.d)(
                          n.a.createElement(re, { broadcasterSteamID: t }),
                          Object(T.m)(e)
                        )
                      : Object(N.d)(
                          n.a.createElement(w.d, {
                            strTitle: Object(R.f)(
                              "#EventDisplay_Share_NotLoggedIn"
                            ),
                            strDescription: Object(R.f)(
                              "#EventDisplay_Share_NotLoggedIn_Description"
                            ),
                            strOKButtonText: Object(R.f)("#MobileLogin_SignIn"),
                            onOK: function () {
                              return Object(X.a)();
                            },
                          }),
                          Object(T.m)(e)
                        );
                  },
                },
                n.a.createElement(Q.x, null)
              ),
            n.a.createElement(
              C.d,
              {
                "data-tooltip-text": Object(R.f)("#Broadcast_User_FAQ_ttip"),
                onClick: function (e) {
                  return Object(J.d)(
                    e,
                    "https://support.steampowered.com/kb_article.php?ref=6730-TOAK-6497"
                  );
                },
              },
              n.a.createElement(Q.A, null)
            )
          );
        }),
        re = function (e) {
          var t = Object(r.useState)(""),
            a = t[0],
            o = t[1];
          return n.a.createElement(
            w.d,
            {
              strTitle: Object(R.f)("#Broadcast_ReportItem_Title"),
              strDescription: Object(R.f)("#Broadcast_ReportItem_Description"),
              onCancel: e.closeModal,
              bOKDisabled: 0 == a.trim().length,
              onOK: function () {
                return Object(i.b)(void 0, void 0, void 0, function () {
                  return Object(i.e)(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, p.Get().SendUserReportOnBroadcast(a)];
                      case 1:
                        return t.sent(), e.closeModal && e.closeModal(), [2];
                    }
                  });
                });
              },
            },
            n.a.createElement("textarea", {
              value: a,
              onChange: function (e) {
                return o(e.currentTarget.value);
              },
              rows: 10,
              cols: 80,
            })
          );
        },
        ne = a("Pa9b"),
        oe = a("0OaU"),
        ce = function (e) {
          if (!b.i.is_support) return null;
          var t = function (t, a) {
              Object(N.d)(
                n.a.createElement(ie, {
                  broadcastSteamID: e.broadcastSteamID,
                  strAction: a,
                }),
                Object(T.m)(t)
              );
            },
            a =
              "https://steamsupport.valvesoftware.com/account/overview/" +
              e.broadcastSteamID.ConvertTo64BitString();
          return n.a.createElement(
            "div",
            {
              className: Object(D.a)(ne.AdminControls, P.a.ValveOnlyBackground),
            },
            n.a.createElement("div", null, "(VO) Support Tools"),
            n.a.createElement(
              C.d,
              {
                onClick: function (e) {
                  return t(e, "frontpage");
                },
              },
              "Remove from Front Page"
            ),
            n.a.createElement(
              C.d,
              {
                onClick: function (e) {
                  return t(e, "ban");
                },
              },
              "Ban from Broadcasting"
            ),
            n.a.createElement(
              C.d,
              {
                onClick: function (t) {
                  Object(N.d)(
                    n.a.createElement(se, { steamid: e.broadcastSteamID }),
                    Object(T.m)(t)
                  );
                },
              },
              "Make Unbannable"
            ),
            n.a.createElement(
              C.d,
              {
                onClick: function (e) {
                  return Object(J.d)(e, a);
                },
              },
              "Go to Support Page"
            )
          );
        },
        ie = Object(f.a)(function (e) {
          e.broadcastSteamID;
          var t = e.strAction,
            a = Object(r.useState)(1),
            o = a[0],
            c = a[1],
            s = Object(r.useState)(!1),
            d = s[0],
            m = s[1],
            u = Object(r.useState)(!1),
            _ = u[0],
            b = u[1],
            f = Object(r.useState)(!1),
            v = f[0],
            h = f[1],
            O = Object(r.useRef)(null);
          Object(r.useEffect)(function () {
            return function () {
              O.current && O.current("BroadcastConfirmBanAction: unmounting");
            };
          }, []);
          var S = function () {
            return e.closeModal && e.closeModal();
          };
          return n.a.createElement(
            I.a,
            null,
            n.a.createElement(
              w.h,
              { onEscKeypress: S },
              n.a.createElement(
                C.f,
                null,
                n.a.createElement(
                  C.l,
                  null,
                  "Remove Broadcast From Front Page"
                ),
                n.a.createElement(
                  C.b,
                  null,
                  n.a.createElement(
                    C.c,
                    null,
                    n.a.createElement(
                      "p",
                      null,
                      "frontpage" == t
                        ? "How long should we prevent the broadcast from appearing in community or store?"
                        : "How long should we prevent the user from Broadcast at all on Steam?"
                    ),
                    n.a.createElement(
                      "div",
                      null,
                      n.a.createElement(C.i, {
                        rgOptions: [
                          { label: "1 Day", data: 1 },
                          { label: "1 Week", data: 7 },
                          { label: "1 Month", data: 30 },
                          { label: "6 Months", data: 180 },
                          { label: "1 Year", data: 365 },
                        ],
                        selectedOption: o,
                        onChange: function (e) {
                          return c(e.data);
                        },
                      }),
                      Boolean(d) && n.a.createElement(oe.a, null, " "),
                      Boolean(_) &&
                        n.a.createElement(
                          "div",
                          null,
                          v
                            ? "Successfully Completed Request"
                            : "Failed to complete request, check browser console and/or try again later"
                        )
                    )
                  )
                ),
                n.a.createElement(
                  C.k,
                  null,
                  _
                    ? n.a.createElement(
                        C.r,
                        { onClick: S },
                        Object(R.f)("#Button_Dismiss")
                      )
                    : n.a.createElement(
                        C.w,
                        null,
                        n.a.createElement(
                          C.d,
                          { onClick: S },
                          Object(R.f)("#Button_Cancel")
                        ),
                        n.a.createElement(
                          C.r,
                          {
                            onClick: function () {
                              return Object(i.b)(
                                void 0,
                                void 0,
                                void 0,
                                function () {
                                  var e, a;
                                  return Object(i.e)(this, function (r) {
                                    switch (r.label) {
                                      case 0:
                                        (e = !1), m(!0), (r.label = 1);
                                      case 1:
                                        return (
                                          r.trys.push([1, , 3, 4]),
                                          O.current && O.current(),
                                          (a = l.a.CancelToken.source()),
                                          (O.current = a.cancel),
                                          [
                                            4,
                                            p
                                              .Get()
                                              .SetBroadcasterRestrictions(
                                                t,
                                                o,
                                                a
                                              ),
                                          ]
                                        );
                                      case 2:
                                        return (
                                          r.sent(), a.token.reason || !0, [3, 4]
                                        );
                                      case 3:
                                        return m(!1), b(!0), h(e), [7];
                                      case 4:
                                        return [2];
                                    }
                                  });
                                }
                              );
                            },
                          },
                          Object(R.f)("#Button_Confirm")
                        )
                      )
                )
              )
            )
          );
        }),
        se = function (e) {
          var t = Object(r.useState)(!1),
            a = t[0],
            o = t[1],
            c = Object(r.useState)(!1),
            s = c[0],
            d = c[1],
            m = Object(r.useState)(!1),
            u = m[0],
            _ = m[1],
            b = Object(r.useRef)(null);
          Object(r.useEffect)(function () {
            return function () {
              b.current && b.current("BroadcastMakeUnbannable: unmounting");
            };
          }, []);
          var f = function () {
            return e.closeModal && e.closeModal();
          };
          return n.a.createElement(
            I.a,
            null,
            n.a.createElement(
              w.h,
              { onEscKeypress: f },
              n.a.createElement(
                C.f,
                null,
                n.a.createElement(C.l, null, "Make Broadcast Unbannable"),
                n.a.createElement(
                  C.b,
                  null,
                  n.a.createElement(
                    C.c,
                    null,
                    n.a.createElement(
                      "p",
                      null,
                      "Prevent automatic, report based banning changes to this strema visibility the stream for 1 week?"
                    ),
                    n.a.createElement(
                      "div",
                      null,
                      Boolean(a) && n.a.createElement(oe.a, null, " "),
                      Boolean(s) &&
                        n.a.createElement(
                          "div",
                          null,
                          u
                            ? "Successfully Set Unbannable"
                            : "Failed to make Unbannable"
                        )
                    )
                  )
                ),
                n.a.createElement(
                  C.k,
                  null,
                  s
                    ? n.a.createElement(
                        C.r,
                        { onClick: f },
                        Object(R.f)("#Button_Dismiss")
                      )
                    : n.a.createElement(
                        C.w,
                        null,
                        n.a.createElement(
                          C.d,
                          { onClick: f },
                          Object(R.f)("#Button_Cancel")
                        ),
                        n.a.createElement(
                          C.r,
                          {
                            onClick: function () {
                              return Object(i.b)(
                                void 0,
                                void 0,
                                void 0,
                                function () {
                                  var e, t;
                                  return Object(i.e)(this, function (a) {
                                    switch (a.label) {
                                      case 0:
                                        o(!0), (e = !1), (a.label = 1);
                                      case 1:
                                        return (
                                          a.trys.push([1, , 3, 4]),
                                          b.current && b.current(),
                                          (t = l.a.CancelToken.source()),
                                          (b.current = t.cancel),
                                          [4, p.Get().SetUnBannable(t)]
                                        );
                                      case 2:
                                        return (e = a.sent()), [3, 4];
                                      case 3:
                                        return o(!1), d(!0), _(e), [7];
                                      case 4:
                                        return [2];
                                    }
                                  });
                                }
                              );
                            },
                          },
                          Object(R.f)("#Button_Confirm")
                        )
                      )
                )
              )
            )
          );
        },
        le = Object(f.a)(function (e) {
          var t,
            a = p.Get().GetBroadcasterSteamID(),
            r = a.ConvertTo64BitString(),
            o = Object(B.d)("muted", !0),
            c = o[0],
            i = (o[1], u.a.GetBroadcast(r)),
            s = u.a.GetOrCreateBroadcastInfo(r);
          return n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement(
              "div",
              { className: Object(D.a)(z.BroadcastPage) },
              n.a.createElement(
                "div",
                { className: Object(D.a)(S.a.BroadcastAndChat) },
                Boolean(!p.Get().BShowOnlyChat()) &&
                  n.a.createElement(
                    I.a,
                    null,
                    n.a.createElement(
                      "div",
                      { className: Object(D.a)(S.a.wrapper) },
                      n.a.createElement(
                        "div",
                        {
                          className: Object(D.a)(
                            ((t = {}),
                            (t[S.a.video_placeholder] = !0),
                            (t.video_placeholder_trgt = !0),
                            (t[S.a.NoChat] = p.Get().BShowOnlyVideo()),
                            t)
                          ),
                        },
                        n.a.createElement(
                          "div",
                          { className: S.a.BroadcastPlayerContainer },
                          n.a.createElement(
                            I.a,
                            null,
                            n.a.createElement(h.a, {
                              steamIDBroadcast: r,
                              watchLocation: 5,
                              bStartMuted: c,
                            })
                          )
                        )
                      )
                    )
                  ),
                Boolean(!p.Get().BShowOnlyVideo()) &&
                  n.a.createElement(
                    "div",
                    { className: S.a.detail_chat_ctn },
                    n.a.createElement(
                      "div",
                      { className: S.a.ChatContainer },
                      n.a.createElement(
                        I.a,
                        null,
                        n.a.createElement(v.a, {
                          emoticonStore: g.f,
                          watchLocation: 6,
                          steamID: r,
                          broadcastID: i ? i.m_ulBroadcastID : void 0,
                        })
                      )
                    )
                  )
              ),
              Boolean(!p.Get().BShowInIframe()) &&
                n.a.createElement(de, {
                  broadcasterSteamID: a,
                  broadcastInfo: s,
                })
            )
          );
        }),
        de = Object(f.a)(function (e) {
          var t = e.broadcasterSteamID,
            a = e.broadcastInfo,
            o = Object(r.useState)(null),
            c = o[0],
            s = o[1];
          return (
            Object(r.useEffect)(
              function () {
                Object(i.b)(void 0, void 0, void 0, function () {
                  var e;
                  return Object(i.e)(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [
                          4,
                          y.a.LoadOGGClanInfoForAppID(
                            Number.parseInt(a.m_strAppId)
                          ),
                        ];
                      case 1:
                        return (e = t.sent()), s(e), [2];
                    }
                  });
                });
              },
              [a.m_strAppId]
            ),
            n.a.createElement(
              n.a.Fragment,
              null,
              n.a.createElement(ee, { broadcasterSteamID: t }),
              n.a.createElement(me, { steamid: t }),
              Boolean(b.i.is_support) &&
                n.a.createElement(
                  "div",
                  null,
                  n.a.createElement(ce, { broadcastSteamID: t }),
                  n.a.createElement(
                    "div",
                    {
                      className: Object(D.a)(
                        P.a.ValveOnlyBackground,
                        z.DebugCtn
                      ),
                    },
                    n.a.createElement(U, null)
                  )
                ),
              Boolean(a.m_strAppId && Number.parseInt(a.m_strAppId) > 7) &&
                n.a.createElement(
                  "div",
                  { className: z.GameInfoCtn },
                  n.a.createElement(
                    "div",
                    { className: z.GameAboutTitleCtn },
                    n.a.createElement(
                      "div",
                      { className: z.GameAboutTitle },
                      " ",
                      Object(R.f)("#Broadcast_About_Game"),
                      " "
                    ),
                    n.a.createElement(
                      "div",
                      { className: P.a.EventSectionSpacer },
                      " "
                    )
                  ),
                  n.a.createElement(
                    "div",
                    { className: z.GameInfo },
                    n.a.createElement(G.o, {
                      id: Number.parseInt(a.m_strAppId),
                      type: "game",
                    })
                  )
                ),
              Boolean(c) &&
                n.a.createElement(
                  "div",
                  { className: z.RelatedEvents },
                  n.a.createElement(j.a, {
                    clanAccountID: c.clanAccountID,
                    trackingLocation: 6,
                    partnerEventStore: E.d,
                    bViewAllShowInfiniteScroll: !0,
                  })
                )
            )
          );
        }),
        me = Object(f.a)(function (e) {
          var t = Object(r.useRef)(null),
            a = u.a.GetOrCreateBroadcastInfo(e.steamid.ConvertTo64BitString()),
            o = Object(r.useState)(a.m_strTitle),
            c = o[0],
            s = o[1],
            d = Object(r.useState)(""),
            m = d[0],
            _ = d[1],
            f = Object(r.useState)(null),
            v = f[0],
            h = f[1];
          if (
            (Object(r.useEffect)(
              function () {
                return (
                  s(a.m_strTitle),
                  function () {
                    t.current && t.current("BroadcastControls: unmounting");
                  }
                );
              },
              [a.m_strTitle]
            ),
            b.i.accountid != e.steamid.GetAccountID())
          )
            return null;
          return n.a.createElement(
            "div",
            { className: z.ControlCtn },
            n.a.createElement(
              "div",
              { className: z.ControlsTitle },
              Object(R.f)("#Broadcaster_Control_title")
            ),
            n.a.createElement(
              "div",
              { className: z.TitleInput },
              n.a.createElement(
                "div",
                { className: z.Options },
                n.a.createElement(C.m, {
                  type: "text",
                  label: Object(R.f)("#Broadcast_title_title"),
                  onChange: function (e) {
                    return s(e.currentTarget.value || "");
                  },
                  placeholder: Object(R.f)("#Broadcast_title_placeholder"),
                  value: c,
                }),
                n.a.createElement(C.m, {
                  type: "text",
                  label: Object(R.f)("#Broadcast_Control_matchid"),
                  onChange: function (e) {
                    return _(e.currentTarget.value || "");
                  },
                  value: m,
                }),
                n.a.createElement(
                  C.d,
                  {
                    onClick: function () {
                      return Object(i.b)(void 0, void 0, void 0, function () {
                        var e, a;
                        return Object(i.e)(this, function (r) {
                          switch (r.label) {
                            case 0:
                              return (
                                t.current && t.current(),
                                (e = l.a.CancelToken.source()),
                                (t.current = e.cancel),
                                [4, p.Get().UpdateBroadcastSettings(m, c, e)]
                              );
                            case 1:
                              return (
                                (a = r.sent()),
                                e.token.reason ||
                                  h(
                                    Object(R.f)(
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
                    "data-tooltip-text": Object(R.f)(
                      "#Broadcast_save_title_ttip"
                    ),
                  },
                  Object(R.f)("#Broadcast_save_changes")
                )
              ),
              n.a.createElement(
                "div",
                { className: z.StopCtn },
                n.a.createElement(
                  C.d,
                  {
                    onClick: function (e) {
                      Object(N.d)(
                        n.a.createElement(w.d, {
                          strTitle: Object(R.f)(
                            "#Broadcast_Control_StopBroadcast"
                          ),
                          strDescription: Object(R.f)(
                            "#EventEditor_GenericAreYouSure"
                          ),
                          onOK: function () {
                            return Object(i.b)(
                              void 0,
                              void 0,
                              void 0,
                              function () {
                                var e, a;
                                return Object(i.e)(this, function (r) {
                                  switch (r.label) {
                                    case 0:
                                      return (
                                        t.current && t.current(),
                                        (e = l.a.CancelToken.source()),
                                        (t.current = e.cancel),
                                        [4, p.Get().StopBroadcast(e)]
                                      );
                                    case 1:
                                      return (
                                        (a = r.sent()),
                                        e.token.reason ||
                                          h(
                                            Object(R.f)(
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
                        Object(T.m)(e)
                      );
                    },
                  },
                  Object(R.f)("#Broadcast_Control_StopBroadcast")
                ),
                Boolean(v) && n.a.createElement("div", null, v)
              )
            )
          );
        }),
        ue = a("9w6b"),
        _e = function (e) {
          return "/broadcast/(watch|watchnew)/" + e;
        };
      function be(e) {
        return (
          Object(r.useEffect)(function () {
            ue.a.InitGlobal();
          }, []),
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement(
              o.e,
              null,
              n.a.createElement(o.c, {
                path: _e(":steamid_or_user_vanity"),
                render: function (e) {
                  return n.a.createElement(le, {
                    strSteamID: e.match.params.steamid_or_user_vanity,
                  });
                },
              }),
              n.a.createElement(o.c, { component: c.b })
            )
          )
        );
      }
    },
    Gpul: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return m;
      }),
        a.d(t, "b", function () {
          return u;
        });
      var r = a("mrSG"),
        n = a("q1tI"),
        o = a("TyAF"),
        c = a("jUCX"),
        i = a("exH9"),
        s = a("WeG9"),
        l = a.n(s),
        d = a("lkRc"),
        m = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.strAvatarURL,
                a = e.size,
                o = e.className,
                c = e.statusStyle,
                s = e.statusPosition,
                d = e.children,
                m = Object(r.f)(e, [
                  "strAvatarURL",
                  "size",
                  "className",
                  "statusStyle",
                  "statusPosition",
                  "children",
                ]);
              return n.createElement(
                "div",
                Object(r.a)(
                  {
                    className: Object(i.a)(
                      l.a.avatarHolder,
                      "avatarHolder",
                      "no-drag",
                      a || "Medium",
                      o
                    ),
                  },
                  m
                ),
                n.createElement("div", {
                  className: Object(i.a)(l.a.avatarStatus, "avatarStatus", s),
                  style: c,
                }),
                n.createElement("img", {
                  className: Object(i.a)(l.a.avatar, "avatar"),
                  src: t,
                  draggable: !1,
                }),
                d
              );
            }),
            t
          );
        })(n.Component),
        u = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.d)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.persona,
                a = e.size,
                o = e.animatedAvatar,
                s = e.className,
                l = Object(r.f)(e, [
                  "persona",
                  "size",
                  "animatedAvatar",
                  "className",
                ]),
                u = "";
              return (
                o && o.image_small && 0 != o.image_small.length
                  ? (u =
                      d.c.MEDIA_CDN_COMMUNITY_URL + "images/" + o.image_small)
                  : t
                  ? ((u = t.avatar_url_medium),
                    "Small" == a || "X-Small" == a
                      ? (u = t.avatar_url)
                      : ("Large" != a && "X-Large" != a && "FillArea" != a) ||
                        (u = t.avatar_url_full))
                  : ((u =
                      d.c.MEDIA_CDN_COMMUNITY_URL +
                      "images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"),
                    "Small" == a || "X-Small" == a
                      ? (u =
                          d.c.MEDIA_CDN_COMMUNITY_URL +
                          "images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg")
                      : ("Large" != a && "X-Large" != a && "FillArea" != a) ||
                        (u =
                          d.c.MEDIA_CDN_COMMUNITY_URL +
                          "images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg")),
                n.createElement(
                  m,
                  Object(r.a)(
                    {
                      strAvatarURL: u,
                      size: a,
                      className: Object(i.a)(Object(c.c)(t), s),
                    },
                    l
                  )
                )
              );
            }),
            (t = Object(r.c)([o.a], t))
          );
        })(n.Component),
        _ = Object(o.a)(function (e) {
          var t = e.profileItem,
            a = e.className,
            o = e.bDisableAnimation,
            c = Object(r.f)(e, [
              "profileItem",
              "className",
              "bDisableAnimation",
            ]);
          if (!t || !t.image_small || 0 == t.image_small.length) return null;
          var s = o ? t.image_large : t.image_small;
          return (
            s || (s = t.image_small),
            s.startsWith("https://") ||
              (s = d.c.MEDIA_CDN_COMMUNITY_URL + "images/" + s),
            n.createElement(
              "div",
              Object(r.a)(
                { className: Object(i.a)(l.a.avatarFrame, a, "avatarFrame") },
                c
              ),
              n.createElement("img", { className: l.a.avatarFrameImg, src: s })
            )
          );
        });
      n.Component;
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
        return d;
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
            var e = 3600,
              t = 1e3,
              a = c.a.CMInterface.GetServerRTime32() - this.last_seen_online;
            return (t *= a > 86400 ? e : a > 7200 ? 60 : 15);
          }),
          (e.prototype.GetOfflineStatusTime = function () {
            if (0 == this.last_seen_online)
              return Object(i.f)("#PersonaStateOffline");
            var e = this.GetOfflineStatusUpdateRate();
            (!s.c.IN_MOBILE || e <= 60) && Object(o.b)(e);
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
    rKv1: function (e, t, a) {
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
