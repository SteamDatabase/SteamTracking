/*! This file includes third-party software, governed by the licenses described here: https://steamcommunity.com/public/javascript/webui/clientcom.licenses.txt */

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
webpackJsonp(
  [6],
  {
    "4/7o": function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n("m5yx"),
        i = n("PVtO");
      document.addEventListener("DOMContentLoaded", function() {
        Object(o.c)(), (window.ClientConnectionAPI = i.b);
      });
    },
    PVtO: function(e, t, n) {
      "use strict";
      n.d(t, "a", function() {
        return c;
      }),
        n.d(t, "b", function() {
          return s;
        });
      var o = n("m5yx"),
        i = { success: !0, result: 1 },
        c = (function() {
          function e() {
            (this.m_connection = new r()),
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
                -1 !==
                  this.m_connection.ClientInfo.rgSupportedMessages.indexOf(e)
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
            (e.prototype.BIsSubscribedApp = function(e) {
              var t = this;
              if (this.m_mapCacheSubscribedApp.has(e))
                return Promise.resolve(this.m_mapCacheSubscribedApp.get(e));
              var n = { message: "IsSubscribedApp", appid: e };
              return this.GenericEResultCall(n).then(function(n) {
                if (!n.connect_failed) {
                  var o = 1 == n.result;
                  return t.m_mapCacheSubscribedApp.set(e, o), o;
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
                    ? t.m_connection
                        .SendMsgAndAwaitResponse(e)
                        .then(function(e) {
                          return 1 === e.success
                            ? i
                            : t.FailureResult(e.success);
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
        r = (function() {
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
            (e.prototype.SendMsgAndAwaitResponse = function(e) {
              var t = this;
              return new Promise(function(n, o) {
                var i = t.m_iCallSeq++;
                t.BSendMsg(e, i)
                  ? t.m_mapWaitingCallbacks.set(i, {
                      iSeq: i,
                      fnCallback: n,
                      fnError: o
                    })
                  : o();
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
              var e = this;
              if (this.m_bReady && this.m_socket.readyState == WebSocket.OPEN)
                return Promise.resolve();
              if (this.m_promiseConnect) return this.m_promiseConnect;
              var t = new Promise(function(t, n) {
                try {
                  e.m_socket = new WebSocket(
                    "ws://127.0.0.1:27060/clientsocket/"
                  );
                } catch (t) {
                  return (e.m_bSecurityException = !0), void n(t);
                }
                (e.m_socket.onerror = function(e) {
                  n();
                }),
                  (e.m_socket.onmessage = e.OnSocketMessage.bind(e)),
                  (e.m_socket.onopen = function(o) {
                    var i = { message: "GetClientInfo" };
                    e
                      .SendMsgAndAwaitResponse(i)
                      .then(function(o) {
                        1 == o.success
                          ? ((e.m_ClientInfo.ulVersion = o.clientversion),
                            (e.m_ClientInfo.bFriendsUIEnabled = !!o.friendsui),
                            (e.m_ClientInfo.unAccountID = o.accountid),
                            o.supported_messages &&
                              (e.m_ClientInfo.rgSupportedMessages =
                                o.supported_messages),
                            t())
                          : n();
                      })
                      .catch(n);
                  });
              });
              return (
                (this.m_promiseConnect = t),
                this.m_promiseConnect
                  .then(function() {
                    (e.m_bReady = !0), (e.m_promiseConnect = void 0);
                  })
                  .catch(function() {
                    (e.m_bClientConnectionFailed = !0),
                      (e.m_promiseConnect = void 0);
                  }),
                this.m_promiseConnect
              );
            }),
            e
          );
        })(),
        s = new c();
      window.ClientConnectionAPI = s;
    },
    m5yx: function(e, t, n) {
      "use strict";
      function o() {
        var e = i("config");
        e && Object.assign(c, e);
        var t = i("userinfo");
        t && Object.assign(r, t), (n.p = c.CDN_URL);
      }
      function i(e, t) {
        void 0 === t && (t = s);
        var n = document.getElementById(t);
        if (n)
          try {
            return JSON.parse(n.getAttribute("data-" + e) || "");
          } catch (e) {
            console.error("Failed to parse config", e);
          }
        else console.error("Missing config element #" + t);
      }
      n.d(t, "a", function() {
        return c;
      }),
        n.d(t, "d", function() {
          return r;
        }),
        (t.c = o),
        (t.b = i);
      var c = {
          EUNIVERSE: 0,
          WEB_UNIVERSE: "",
          LANGUAGE: "english",
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
          IN_CLIENT: !1,
          USE_POPUPS: !1,
          IN_MOBILE: !1,
          WEBAPI_BASE_URL: "",
          TOKEN_URL: "",
          SESSIONID: "",
          BUILD_TIMESTAMP: 0,
          FRIENDSUI_BETA: !1,
          STEAM_TV: !1
        },
        r = {
          logged_in: !1,
          steamid: "",
          accountid: 0,
          account_name: "",
          token: void 0,
          token_use_id: void 0
        },
        s = "webui_config";
    }
  },
  ["4/7o"]
);
