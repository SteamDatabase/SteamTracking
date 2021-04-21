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
        u = a("2vnA"),
        m = a("kLLr"),
        d = a("boaH"),
        p = a("bDQf"),
        b = a("lkRc"),
        _ = (function () {
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
                        (o = Object(p.a)(n)),
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
                          ? ((c = d.a.GetOrCreateBroadcastInfo(
                              this.m_steamid.ConvertTo64BitString()
                            )) &&
                              Object(u.G)(function () {
                                c.m_strTitle = t;
                              }),
                            [2, !0])
                          : [3, 4]
                      );
                    case 3:
                      return (
                        (s = i.sent()),
                        (m = Object(p.a)(s)),
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
                        (a = d.a.GetBroadcast(t)),
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
                        (n = d.a.GetBroadcast(r)),
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
                        (a = d.a.GetBroadcast(t)),
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
                        (a = d.a.GetBroadcast(t)),
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
                        (c = Object(p.a)(o)),
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
            Object(i.c)([u.C], e.prototype, "m_curDebugInfo", void 0),
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
        j = a("Mgs7"),
        I = a("IjL/"),
        C = a("SdTr"),
        B = a("GiuM"),
        A = a("fpVW"),
        G = a.n(A),
        P = a("5L1o"),
        D = a("Jqb/"),
        N = a("ka0M"),
        w = a("exH9"),
        T = a("X3Ds"),
        R = a("TLQK"),
        L = a("eDP5"),
        M = a("YLyR"),
        U = a("V9dL"),
        k = function (e) {
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
                { className: Object(w.a)(U.Container) },
                n.a.createElement(
                  "div",
                  { className: U.Controls },
                  n.a.createElement(
                    j.d,
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
                                  [4, _.Get().LoadBroadcastDebugInfo(e)]
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
          var i = _.Get().GetBroadcasterSteamID().ConvertTo64BitString(),
            s = d.a.GetBroadcast(i);
          return n.a.createElement(
            "div",
            { className: U.DisplaySection },
            Boolean(t.last_error_result && 1 != t.last_error_result) &&
              n.a.createElement(
                "div",
                { className: U.SubSection },
                n.a.createElement("div", { className: U.Header }, "Error"),
                n.a.createElement(
                  "div",
                  null,
                  "EResult: ",
                  t.last_error_result,
                  ", occurred ",
                  t.last_error_time,
                  " - ",
                  n.a.createElement(M.a, {
                    dateAndTime: t.last_error_time,
                    bSingleLine: !0,
                  })
                )
              ),
            n.a.createElement(
              "div",
              { className: U.SubSection },
              n.a.createElement(
                "div",
                { className: U.Header },
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
              { className: U.SubSection },
              n.a.createElement("div", { className: U.Header }, "Upload Info"),
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
              { className: U.SubSection },
              n.a.createElement("div", { className: U.Header }, "Viewer Info"),
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
              { className: U.SubSection },
              n.a.createElement("div", { className: U.Header }, "Settings"),
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
              { className: U.SubSection },
              n.a.createElement("div", { className: U.Header }, "App Info"),
              n.a.createElement("div", null, "appid: ", t.app_id),
              n.a.createElement("div", null, "app name: ", t.app_name),
              n.a.createElement("div", null, "broadcast title: ", t.title),
              n.a.createElement("div", null, "thumbnail: ", t.thumbnail_url),
              Boolean(t.thumbnail_url) &&
                n.a.createElement("img", { src: t.thumbnail_url }),
              Boolean(t.app_id && t.app_id > 0) &&
                n.a.createElement(
                  "div",
                  { className: U.AppSummaryWidgetCtn },
                  n.a.createElement(P.h, { id: t.app_id, type: "game" })
                )
            ),
            n.a.createElement(
              "div",
              { className: U.SubSection },
              n.a.createElement(
                "div",
                { className: U.Header },
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
              j.d,
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
                  { className: U.SubSection },
                  n.a.createElement(L.b, { data: t })
                ),
                n.a.createElement(
                  "div",
                  { className: U.SubSection },
                  n.a.createElement(L.b, { data: s.m_data })
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
      var K = function (e) {
          e.steamid.GetAccountID();
          var t = Object(r.useState)(Y(e.steamid)),
            a = t[0],
            o = t[1],
            c = Object(r.useState)(x.a.GetProfileURLBySteamID(e.steamid)),
            s = c[0],
            l = c[1],
            u = Object(r.useState)(x.a.GetPersonaNameBySteamID(e.steamid)),
            m = u[0],
            d = u[1];
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
                            o(Y(e.steamid)),
                            l(x.a.GetProfileURLBySteamID(e.steamid)),
                            d(x.a.GetPersonaNameBySteamID(e.steamid)),
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
              { className: q.AvatarCtn },
              n.a.createElement(
                "a",
                {
                  href: s,
                  "data-miniprofile": "s" + e.steamid.ConvertTo64BitString(),
                },
                n.a.createElement(V.b, {
                  persona: a,
                  size: e.size,
                  statusPosition: "bottom",
                })
              ),
              n.a.createElement(
                "div",
                { className: q.NameAndProps },
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
        X = a("5eAM"),
        Q = a("BFsE"),
        W = a("6Y59"),
        J = a("+d9t"),
        Z = a("IzPI"),
        $ = a("M7Y6"),
        ee = Object(f.a)(function (e) {
          var t = e.broadcasterSteamID,
            a = t.ConvertTo64BitString(),
            o = d.a.GetOrCreateBroadcastInfo(a),
            c = Object(r.useState)(
              X.a.GetAppLinkInfo(Number.parseInt(o.m_strAppId))
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
                          return [4, X.a.LoadAppLinkInfo([e])];
                        case 1:
                          return t.sent(), l(X.a.GetAppLinkInfo(e)), [2];
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
                    href: Object(Z.e)(
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
            a = d.a.GetOrCreateBroadcastInfo(t),
            o = Object(r.useState)(
              X.a.GetAppLinkInfo(Number.parseInt(a.m_strAppId))
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
                          return [4, X.a.LoadAppLinkInfo([e])];
                        case 1:
                          return t.sent(), s(X.a.GetAppLinkInfo(e)), [2];
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
                  href: Object(Z.e)(
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
          d.a.GetOrCreateBroadcastInfo(a);
          return n.a.createElement(
            "div",
            { className: $.BroadcastUserActionsCtn },
            Boolean(
              b.i.steamid != e.broadcasterSteamID.ConvertTo64BitString()
            ) &&
              n.a.createElement(
                j.d,
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
                          n.a.createElement(D.d, {
                            strTitle: Object(R.f)(
                              "#EventDisplay_Share_NotLoggedIn"
                            ),
                            strDescription: Object(R.f)(
                              "#EventDisplay_Share_NotLoggedIn_Description"
                            ),
                            strOKButtonText: Object(R.f)("#MobileLogin_SignIn"),
                            onOK: function () {
                              return Object(Q.a)();
                            },
                          }),
                          Object(T.m)(e)
                        );
                  },
                },
                n.a.createElement(W.x, null)
              ),
            n.a.createElement(
              j.d,
              {
                "data-tooltip-text": Object(R.f)("#Broadcast_User_FAQ_ttip"),
                onClick: function (e) {
                  return Object(J.d)(
                    e,
                    "https://support.steampowered.com/kb_article.php?ref=6730-TOAK-6497"
                  );
                },
              },
              n.a.createElement(W.A, null)
            )
          );
        }),
        re = function (e) {
          var t = Object(r.useState)(""),
            a = t[0],
            o = t[1];
          return n.a.createElement(
            D.d,
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
                        return [4, _.Get().SendUserReportOnBroadcast(a)];
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
              className: Object(w.a)(ne.AdminControls, G.a.ValveOnlyBackground),
            },
            n.a.createElement("div", null, "(VO) Support Tools"),
            n.a.createElement(
              j.d,
              {
                onClick: function (e) {
                  return t(e, "frontpage");
                },
              },
              "Remove from Front Page"
            ),
            n.a.createElement(
              j.d,
              {
                onClick: function (e) {
                  return t(e, "ban");
                },
              },
              "Ban from Broadcasting"
            ),
            n.a.createElement(
              j.d,
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
              j.d,
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
            u = s[0],
            m = s[1],
            d = Object(r.useState)(!1),
            p = d[0],
            b = d[1],
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
              D.h,
              { onEscKeypress: S },
              n.a.createElement(
                j.f,
                null,
                n.a.createElement(
                  j.l,
                  null,
                  "Remove Broadcast From Front Page"
                ),
                n.a.createElement(
                  j.b,
                  null,
                  n.a.createElement(
                    j.c,
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
                      n.a.createElement(j.i, {
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
                      Boolean(u) && n.a.createElement(oe.a, null, " "),
                      Boolean(p) &&
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
                  j.k,
                  null,
                  p
                    ? n.a.createElement(
                        j.r,
                        { onClick: S },
                        Object(R.f)("#Button_Dismiss")
                      )
                    : n.a.createElement(
                        j.w,
                        null,
                        n.a.createElement(
                          j.d,
                          { onClick: S },
                          Object(R.f)("#Button_Cancel")
                        ),
                        n.a.createElement(
                          j.r,
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
                                            _.Get().SetBroadcasterRestrictions(
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
            u = c[1],
            m = Object(r.useState)(!1),
            d = m[0],
            p = m[1],
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
              D.h,
              { onEscKeypress: f },
              n.a.createElement(
                j.f,
                null,
                n.a.createElement(j.l, null, "Make Broadcast Unbannable"),
                n.a.createElement(
                  j.b,
                  null,
                  n.a.createElement(
                    j.c,
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
                          d
                            ? "Successfully Set Unbannable"
                            : "Failed to make Unbannable"
                        )
                    )
                  )
                ),
                n.a.createElement(
                  j.k,
                  null,
                  s
                    ? n.a.createElement(
                        j.r,
                        { onClick: f },
                        Object(R.f)("#Button_Dismiss")
                      )
                    : n.a.createElement(
                        j.w,
                        null,
                        n.a.createElement(
                          j.d,
                          { onClick: f },
                          Object(R.f)("#Button_Cancel")
                        ),
                        n.a.createElement(
                          j.r,
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
                                          [4, _.Get().SetUnBannable(t)]
                                        );
                                      case 2:
                                        return (e = a.sent()), [3, 4];
                                      case 3:
                                        return o(!1), u(!0), p(e), [7];
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
            a = _.Get().GetBroadcasterSteamID(),
            r = a.ConvertTo64BitString(),
            o = Object(B.d)("muted", !0),
            c = o[0],
            i = (o[1], d.a.GetBroadcast(r)),
            s = d.a.GetOrCreateBroadcastInfo(r);
          return n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement(
              "div",
              { className: Object(w.a)(z.BroadcastPage) },
              n.a.createElement(
                "div",
                { className: Object(w.a)(S.a.BroadcastAndChat) },
                Boolean(!_.Get().BShowOnlyChat()) &&
                  n.a.createElement(
                    I.a,
                    null,
                    n.a.createElement(
                      "div",
                      { className: Object(w.a)(S.a.wrapper) },
                      n.a.createElement(
                        "div",
                        {
                          className: Object(w.a)(
                            ((t = {}),
                            (t[S.a.video_placeholder] = !0),
                            (t.video_placeholder_trgt = !0),
                            (t[S.a.NoChat] = _.Get().BShowOnlyVideo()),
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
                Boolean(!_.Get().BShowOnlyVideo()) &&
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
              Boolean(!_.Get().BShowInIframe()) &&
                n.a.createElement(ue, {
                  broadcasterSteamID: a,
                  broadcastInfo: s,
                })
            )
          );
        }),
        ue = Object(f.a)(function (e) {
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
                      className: Object(w.a)(
                        G.a.ValveOnlyBackground,
                        z.DebugCtn
                      ),
                    },
                    n.a.createElement(k, null)
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
                      { className: G.a.EventSectionSpacer },
                      " "
                    )
                  ),
                  n.a.createElement(
                    "div",
                    { className: z.GameInfo },
                    n.a.createElement(P.h, {
                      id: Number.parseInt(a.m_strAppId),
                      type: "game",
                    })
                  )
                ),
              Boolean(c) &&
                n.a.createElement(
                  "div",
                  { className: z.RelatedEvents },
                  n.a.createElement(C.a, {
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
            a = d.a.GetOrCreateBroadcastInfo(e.steamid.ConvertTo64BitString()),
            o = Object(r.useState)(a.m_strTitle),
            c = o[0],
            s = o[1],
            u = Object(r.useState)(""),
            m = u[0],
            p = u[1],
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
                n.a.createElement(j.m, {
                  type: "text",
                  label: Object(R.f)("#Broadcast_title_title"),
                  onChange: function (e) {
                    return s(e.currentTarget.value || "");
                  },
                  placeholder: Object(R.f)("#Broadcast_title_placeholder"),
                  value: c,
                }),
                n.a.createElement(j.m, {
                  type: "text",
                  label: Object(R.f)("#Broadcast_Control_matchid"),
                  onChange: function (e) {
                    return p(e.currentTarget.value || "");
                  },
                  value: m,
                }),
                n.a.createElement(
                  j.d,
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
                                [4, _.Get().UpdateBroadcastSettings(m, c, e)]
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
                  j.d,
                  {
                    onClick: function (e) {
                      Object(N.d)(
                        n.a.createElement(D.d, {
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
                                        [4, _.Get().StopBroadcast(e)]
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
        de = a("9w6b"),
        pe = function (e) {
          return "/broadcast/(watch|watchnew)/" + e;
        };
      function be(e) {
        return (
          Object(r.useEffect)(function () {
            de.a.InitGlobal();
          }, []),
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement(
              o.e,
              null,
              n.a.createElement(o.c, {
                path: pe(":steamid_or_user_vanity"),
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
          return d;
        });
      var r = a("mrSG"),
        n = a("q1tI"),
        o = a("TyAF"),
        c = a("jUCX"),
        i = a("exH9"),
        s = a("WeG9"),
        l = a.n(s),
        u = a("lkRc"),
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
                u = e.children,
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
                u
              );
            }),
            t
          );
        })(n.Component),
        d = (function (e) {
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
                d = "";
              return (
                o && o.image_small && 0 != o.image_small.length
                  ? (d =
                      u.c.MEDIA_CDN_COMMUNITY_URL + "images/" + o.image_small)
                  : t
                  ? ((d = t.avatar_url_medium),
                    "Small" == a || "X-Small" == a
                      ? (d = t.avatar_url)
                      : ("Large" != a && "X-Large" != a && "FillArea" != a) ||
                        (d = t.avatar_url_full))
                  : ((d =
                      u.c.MEDIA_CDN_COMMUNITY_URL +
                      "images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_medium.jpg"),
                    "Small" == a || "X-Small" == a
                      ? (d =
                          u.c.MEDIA_CDN_COMMUNITY_URL +
                          "images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg")
                      : ("Large" != a && "X-Large" != a && "FillArea" != a) ||
                        (d =
                          u.c.MEDIA_CDN_COMMUNITY_URL +
                          "images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg")),
                n.createElement(
                  m,
                  Object(r.a)(
                    {
                      strAvatarURL: d,
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
        p = Object(o.a)(function (e) {
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
              (s = u.c.MEDIA_CDN_COMMUNITY_URL + "images/" + s),
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
            var e = 3600,
              t = 1e3,
              a = c.a.CMInterface.GetServerRTime32() - this.last_seen_online;
            return (t *= a > 86400 ? e : a > 7200 ? 60 : 15);
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
