/*! This file includes third-party software, governed by the licenses described here: https://steamcommunity.com/public/javascript/webui/clientcom.licenses.txt */

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
!(function(u) {
  function e(e) {
    for (
      var t, n, o = e[0], i = e[1], r = e[2], c = 0, s = [];
      c < o.length;
      c++
    )
      (n = o[c]), l[n] && s.push(l[n][0]), (l[n] = 0);
    for (t in i) Object.prototype.hasOwnProperty.call(i, t) && (u[t] = i[t]);
    for (d && d(e); s.length; ) s.shift()();
    return p.push.apply(p, r || []), a();
  }
  function a() {
    for (var e, t = 0; t < p.length; t++) {
      for (var n = p[t], o = !0, i = 1; i < n.length; i++) {
        var r = n[i];
        0 !== l[r] && (o = !1);
      }
      o && (p.splice(t--, 1), (e = c((c.s = n[0]))));
    }
    return e;
  }
  var n = {},
    l = { 3: 0 },
    p = [];
  function c(e) {
    if (n[e]) return n[e].exports;
    var t = (n[e] = { i: e, l: !1, exports: {} });
    return u[e].call(t.exports, t, t.exports, c), (t.l = !0), t.exports;
  }
  (c.m = u),
    (c.c = n),
    (c.d = function(e, t, n) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (c.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function(t, e) {
      if ((1 & e && (t = c(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (c.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          c.d(
            n,
            o,
            function(e) {
              return t[e];
            }.bind(null, o)
          );
      return n;
    }),
    (c.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return c.d(t, "a", t), t;
    }),
    (c.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = "");
  var t = (window.webpackJsonp = window.webpackJsonp || []),
    o = t.push.bind(t);
  (t.push = e), (t = t.slice());
  for (var i = 0; i < t.length; i++) e(t[i]);
  var d = o;
  p.push(["x0hG", 0]), a();
})({
  "1n9R": function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return o;
    }),
      n.d(t, "e", function() {
        return i;
      }),
      n.d(t, "a", function() {
        return r;
      }),
      n.d(t, "d", function() {
        return s;
      }),
      n.d(t, "c", function() {
        return u;
      });
    n("mrSG");
    var o = {
        EUNIVERSE: 0,
        WEB_UNIVERSE: "",
        LANGUAGE: "english",
        SUPPORTED_LANGUAGES: [],
        COUNTRY: "",
        CDN_URL: "",
        MEDIA_CDN_COMMUNITY_URL: "",
        MEDIA_CDN_URL: "",
        COMMUNITY_CDN_URL: "",
        COMMUNITY_CDN_ASSET_URL: "",
        PUBLIC_SHARED_URL: "",
        COMMUNITY_BASE_URL: "",
        CHAT_BASE_URL: "",
        STORE_BASE_URL: "",
        STORE_ICON_BASE_URL: "",
        IMG_URL: "",
        STEAMTV_BASE_URL: "",
        HELP_BASE_URL: "",
        IN_CLIENT: !1,
        USE_POPUPS: !1,
        IN_MOBILE: !1,
        IN_TENFOOT: !1,
        WEBAPI_BASE_URL: "",
        TOKEN_URL: "",
        SESSIONID: "",
        BUILD_TIMESTAMP: 0,
        FRIENDSUI_BETA: !1,
        STEAM_TV: !1
      },
      i = {
        logged_in: !1,
        steamid: "",
        accountid: 0,
        account_name: "",
        token: void 0,
        token_use_id: void 0,
        webapi_token: "",
        authwgtoken: ""
      },
      r = { steamid: "", authwgtoken: "" },
      c = "webui_config";
    function s(e) {
      void 0 === e && (e = c);
      var t = u("config", e);
      t && Object.assign(o, t);
      var n = u("userinfo", e);
      n && Object.assign(i, n);
    }
    function u(e, t) {
      void 0 === t && (t = c);
      var n = document.getElementById(t);
      if (n)
        try {
          return JSON.parse(n.getAttribute("data-" + e) || "");
        } catch (e) {
          console.error("Failed to parse config", e);
        }
      else console.error("Missing config element #" + t);
    }
  },
  fGPn: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return r;
    }),
      n.d(t, "b", function() {
        return s;
      });
    var o = n("tkkQ"),
      i = { success: !0, result: 1 },
      r = (function() {
        function e() {
          (this.m_connection = new c()),
            (this.m_bAllowAccountMismatch = !1),
            (this.m_mapCacheSubscribedApp = new Map());
        }
        return (
          (e.prototype.FailureResult = function(e) {
            void 0 === e && (e = 2);
            var t = { success: !1, result: e };
            return (
              this.m_connection &&
                !this.m_connection.browser_supported &&
                (t.browser_unsupported = !0),
              this.m_connection &&
                !this.m_connection.connected_to_client &&
                (t.connect_failed = !0),
              7 == e && (t.call_unsupported = !0),
              t
            );
          }),
          (e.prototype.SetAllowAccountMismatch = function(e) {
            this.m_bAllowAccountMismatch = e;
          }),
          (e.prototype.BClientConnected = function() {
            var e = this;
            return this.m_connection.Connect().then(
              function() {
                return i;
              },
              function() {
                return e.FailureResult();
              }
            );
          }),
          (e.prototype.BClientSupportsMessage = function(e) {
            return (
              !(
                !this.m_connection.connected_to_client ||
                !this.m_connection.ready
              ) &&
              -1 !== this.m_connection.ClientInfo.rgSupportedMessages.indexOf(e)
            );
          }),
          (e.prototype.OpenFriendChatDialog = function(e) {
            var t = { message: "ShowFriendChatDialog", steamid: e };
            return this.GenericEResultCall(t);
          }),
          (e.prototype.OpenChatRoomGroupDialog = function(e, t) {
            var n = { message: "ShowChatRoomGroupDialog", chat_group_id: e };
            return t && (n.chat_room_id = t), this.GenericEResultCall(n);
          }),
          (e.prototype.ShowChatRoomGroupInvite = function(e) {
            var t = { message: "ShowChatRoomGroupInvite", invite_code: e };
            return this.GenericEResultCall(t);
          }),
          (e.prototype.OpenJoinGameDialog = function(e) {
            var t = { message: "ShowJoinGameDialog", friend_id: e };
            return this.GenericEResultCall(t);
          }),
          (e.prototype.BIsSubscribedApp = function(n) {
            var o = this;
            if (this.m_mapCacheSubscribedApp.has(n))
              return Promise.resolve(this.m_mapCacheSubscribedApp.get(n));
            var e = { message: "IsSubscribedApp", appid: n };
            return this.GenericEResultCall(e).then(function(e) {
              if (!e.connect_failed) {
                var t = 1 == e.result;
                return o.m_mapCacheSubscribedApp.set(n, t), t;
              }
            });
          }),
          (e.prototype.ViewGameInfoForSteamID = function(e) {
            var t = { message: "ViewGameInfoForSteamID", steamid: e };
            return this.GenericEResultCall(t);
          }),
          (e.prototype.BClientAccountMatches = function() {
            return (
              !o.d.logged_in ||
              o.d.accountid == this.m_connection.ClientInfo.unAccountID
            );
          }),
          (e.prototype.GenericEResultCall = function(e) {
            var t = this;
            return this.m_connection
              .Connect()
              .then(function() {
                return t.m_bAllowAccountMismatch || t.BClientAccountMatches()
                  ? t.m_connection.SendMsgAndAwaitResponse(e).then(function(e) {
                      return 1 === e.success ? i : t.FailureResult(e.success);
                    })
                  : { success: !1, result: 19, account_mismatch: !0 };
              })
              .catch(function() {
                return t.FailureResult();
              });
          }),
          e
        );
      })(),
      c = (function() {
        function e() {
          (this.m_mapWaitingCallbacks = new Map()),
            (this.m_iCallSeq = 1),
            (this.m_bReady = !1),
            (this.m_bClientConnectionFailed = !1),
            (this.m_bSecurityException = !1),
            (this.m_ClientInfo = {
              ulVersion: "",
              bFriendsUIEnabled: !1,
              unAccountID: 0,
              rgSupportedMessages: []
            });
        }
        return (
          Object.defineProperty(e.prototype, "ClientInfo", {
            get: function() {
              return this.m_ClientInfo;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "ready", {
            get: function() {
              return this.m_bReady;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "browser_supported", {
            get: function() {
              return !this.m_bSecurityException;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "connected_to_client", {
            get: function() {
              return (
                this.m_socket && this.m_socket.readyState == WebSocket.OPEN
              );
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.SendMsgAndAwaitResponse = function(o) {
            var i = this;
            return new Promise(function(e, t) {
              var n = i.m_iCallSeq++;
              i.BSendMsg(o, n)
                ? i.m_mapWaitingCallbacks.set(n, {
                    iSeq: n,
                    fnCallback: e,
                    fnError: t
                  })
                : t();
            });
          }),
          (e.prototype.BSendMsg = function(e, t) {
            if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN)
              return !1;
            var n = Object.assign({}, e, {
              universe: o.a.EUNIVERSE,
              accountid: o.d.accountid
            });
            void 0 !== t && (n.sequenceid = t);
            try {
              return this.m_socket.send(JSON.stringify(n)), !0;
            } catch (e) {
              return !1;
            }
          }),
          (e.prototype.OnSocketMessage = function(e) {
            try {
              var t = JSON.parse(e.data);
              if (t.sequenceid) {
                var n = this.m_mapWaitingCallbacks.get(t.sequenceid);
                if (n)
                  return (
                    this.m_mapWaitingCallbacks.delete(t.sequenceid),
                    void n.fnCallback(t)
                  );
              }
            } catch (e) {
              console.error("exception parsing response", e);
            }
          }),
          (e.prototype.Connect = function() {
            var o = this;
            if (this.m_bReady && this.m_socket.readyState == WebSocket.OPEN)
              return Promise.resolve();
            if (this.m_promiseConnect) return this.m_promiseConnect;
            var e = new Promise(function(t, n) {
              try {
                o.m_socket = new WebSocket(
                  "ws://127.0.0.1:27060/clientsocket/"
                );
              } catch (e) {
                return (o.m_bSecurityException = !0), void n(e);
              }
              (o.m_socket.onerror = function(e) {
                n();
              }),
                (o.m_socket.onmessage = o.OnSocketMessage.bind(o)),
                (o.m_socket.onopen = function(e) {
                  o.SendMsgAndAwaitResponse({ message: "GetClientInfo" })
                    .then(function(e) {
                      1 == e.success
                        ? ((o.m_ClientInfo.ulVersion = e.clientversion),
                          (o.m_ClientInfo.bFriendsUIEnabled = !!e.friendsui),
                          (o.m_ClientInfo.unAccountID = e.accountid),
                          e.supported_messages &&
                            (o.m_ClientInfo.rgSupportedMessages =
                              e.supported_messages),
                          t())
                        : n();
                    })
                    .catch(n);
                });
            });
            return (
              (this.m_promiseConnect = e),
              this.m_promiseConnect
                .then(function() {
                  (o.m_bReady = !0), (o.m_promiseConnect = void 0);
                })
                .catch(function() {
                  (o.m_bClientConnectionFailed = !0),
                    (o.m_promiseConnect = void 0);
                }),
              this.m_promiseConnect
            );
          }),
          e
        );
      })(),
      s = new r();
    window.ClientConnectionAPI = s;
  },
  tkkQ: function(e, t, n) {
    "use strict";
    var o = n("1n9R");
    n.d(t, "a", function() {
      return o.b;
    }),
      n.d(t, "d", function() {
        return o.e;
      }),
      n.d(t, "c", function() {
        return o.d;
      }),
      n.d(t, "b", function() {
        return o.c;
      });
  },
  x0hG: function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n("tkkQ"),
      i = n("fGPn");
    document.addEventListener("DOMContentLoaded", function() {
      Object(o.c)(), (window.ClientConnectionAPI = i.b);
    });
  }
});
