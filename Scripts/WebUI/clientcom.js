/*! This file includes third-party software, governed by the licenses described here: https://steamcommunity.com/public/javascript/webui/clientcom.licenses.txt */

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
!(function(n) {
  var o = {};
  function r(e) {
    if (o[e]) return o[e].exports;
    var t = (o[e] = { i: e, l: !1, exports: {} });
    return n[e].call(t.exports, t, t.exports, r), (t.l = !0), t.exports;
  }
  (r.m = n),
    (r.c = o),
    (r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function(t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          r.d(
            n,
            o,
            function(e) {
              return t[e];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = "x0hG"));
})({
  "/7KC": function(e, t, n) {
    "use strict";
    function o(e, t) {
      return (
        (e = Math.ceil(e)),
        (t = Math.floor(t)),
        Math.floor(Math.random() * (t - e + 1)) + e
      );
    }
    function r(e, t, n) {
      return Math.max(t, Math.min(n, e));
    }
    function i(e, t, n, o, r) {
      return o + ((r - o) * (e - t)) / (n - t);
    }
    n.d(t, "b", function() {
      return o;
    }),
      n.d(t, "a", function() {
        return r;
      }),
      n.d(t, "c", function() {
        return i;
      });
  },
  "1n9R": function(e, t, n) {
    "use strict";
    n("mrSG");
    var o = n("/7KC");
    function c() {
      return !!window.document;
    }
    n.d(t, "b", function() {
      return i;
    }),
      n.d(t, "f", function() {
        return u;
      }),
      n.d(t, "a", function() {
        return s;
      }),
      n.d(t, "c", function() {
        return f;
      }),
      n.d(t, "e", function() {
        return l;
      }),
      n.d(t, "d", function() {
        return p;
      });
    var r,
      i = {
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
        PARTNER_BASE_URL: "",
        IN_CLIENT: !1,
        USE_POPUPS: !1,
        IN_MOBILE: !1,
        IN_TENFOOT: !1,
        WEBAPI_BASE_URL: "",
        TOKEN_URL: "",
        BUILD_TIMESTAMP: 0,
        PAGE_TIMESTAMP: 0,
        get SESSIONID() {
          return (function() {
            if (!c()) return r || (r = f()), r;
            var e = (function(e) {
              if (!c() || !window.document.cookie) return null;
              var t = document.cookie.match("(^|; )" + e + "=([^;]*)");
              return t && t[2] ? decodeURIComponent(t[2]) : null;
            })("sessionid");
            e || (e = f());
            return e;
          })();
        },
        FRIENDSUI_BETA: !1,
        STEAM_TV: !1,
        DEV_MODE: !1,
        OFFLINE_MODE: !1
      },
      u = {
        logged_in: !1,
        steamid: "",
        accountid: 0,
        account_name: "",
        token: void 0,
        token_use_id: void 0,
        webapi_token: "",
        authwgtoken: "",
        is_support: !1
      },
      s = { steamid: "", clanid: "", listid: 0 },
      a = "webui_config";
    function f() {
      var e = (function() {
        for (var e = "", t = 0; t < 24; t++)
          e += Object(o.b)(0, 35).toString(36);
        return e;
      })();
      return (
        (function(e, t, n, o) {
          if (c()) {
            o || (o = "/");
            var r = "";
            if (void 0 !== n && n) {
              var i = new Date();
              i.setTime(i.getTime() + 864e5 * n),
                (r = "; expires=" + i.toUTCString());
            }
            document.cookie =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(t) +
              r +
              ";path=" +
              o;
          }
        })("sessionid", e, 0),
        e
      );
    }
    function l(e) {
      void 0 === e && (e = a);
      var t = p("config", e);
      t && (delete t.SESSIONID, Object.assign(i, t));
      var n = p("userinfo", e);
      n && Object.assign(u, n);
      var o = p("broadcast", e);
      o && Object.assign(s, o);
    }
    function p(e, t) {
      var n;
      if (
        (void 0 === t && (t = a),
        (n = "string" == typeof t ? document.getElementById(t) : t))
      )
        try {
          return n.hasAttribute("data-" + e)
            ? JSON.parse(n.getAttribute("data-" + e))
            : null;
        } catch (e) {
          console.error("Failed to parse config", e);
        }
      else console.error("Missing config element #", t);
    }
  },
  fGPn: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    }),
      n.d(t, "b", function() {
        return u;
      });
    var o = n("tkkQ"),
      r = { success: !0, result: 1 },
      i = (function() {
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
                return r;
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
                      return 1 === e.success ? r : t.FailureResult(e.success);
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
            var r = this;
            return new Promise(function(e, t) {
              var n = r.m_iCallSeq++;
              r.BSendMsg(o, n)
                ? r.m_mapWaitingCallbacks.set(n, {
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
      u = new i();
    window.ClientConnectionAPI = u;
  },
  mrSG: function(e, t, n) {
    "use strict";
    n.d(t, "d", function() {
      return r;
    }),
      n.d(t, "a", function() {
        return i;
      }),
      n.d(t, "f", function() {
        return c;
      }),
      n.d(t, "c", function() {
        return u;
      }),
      n.d(t, "b", function() {
        return s;
      }),
      n.d(t, "e", function() {
        return a;
      });
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
    var o = function(e, t) {
      return (o =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(e, t) {
            e.__proto__ = t;
          }) ||
        function(e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(e, t);
    };
    function r(e, t) {
      function n() {
        this.constructor = e;
      }
      o(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((n.prototype = t.prototype), new n()));
    }
    var i = function() {
      return (i =
        Object.assign ||
        function(e) {
          for (var t, n = 1, o = arguments.length; n < o; n++)
            for (var r in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e;
        }).apply(this, arguments);
    };
    function c(e, t) {
      var n = {};
      for (var o in e)
        Object.prototype.hasOwnProperty.call(e, o) &&
          t.indexOf(o) < 0 &&
          (n[o] = e[o]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var r = 0;
        for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
          t.indexOf(o[r]) < 0 && (n[o[r]] = e[o[r]]);
      }
      return n;
    }
    function u(e, t, n, o) {
      var r,
        i = arguments.length,
        c =
          i < 3
            ? t
            : null === o
            ? (o = Object.getOwnPropertyDescriptor(t, n))
            : o;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        c = Reflect.decorate(e, t, n, o);
      else
        for (var u = e.length - 1; 0 <= u; u--)
          (r = e[u]) &&
            (c = (i < 3 ? r(c) : 3 < i ? r(t, n, c) : r(t, n)) || c);
      return 3 < i && c && Object.defineProperty(t, n, c), c;
    }
    function s(i, c, u, s) {
      return new (u || (u = Promise))(function(e, t) {
        function n(e) {
          try {
            r(s.next(e));
          } catch (e) {
            t(e);
          }
        }
        function o(e) {
          try {
            r(s.throw(e));
          } catch (e) {
            t(e);
          }
        }
        function r(t) {
          t.done
            ? e(t.value)
            : new u(function(e) {
                e(t.value);
              }).then(n, o);
        }
        r((s = s.apply(i, c || [])).next());
      });
    }
    function a(n, o) {
      var r,
        i,
        c,
        e,
        u = {
          label: 0,
          sent: function() {
            if (1 & c[0]) throw c[1];
            return c[1];
          },
          trys: [],
          ops: []
        };
      return (
        (e = { next: t(0), throw: t(1), return: t(2) }),
        "function" == typeof Symbol &&
          (e[Symbol.iterator] = function() {
            return this;
          }),
        e
      );
      function t(t) {
        return function(e) {
          return (function(t) {
            if (r) throw new TypeError("Generator is already executing.");
            for (; u; )
              try {
                if (
                  ((r = 1),
                  i &&
                    (c =
                      2 & t[0]
                        ? i.return
                        : t[0]
                        ? i.throw || ((c = i.return) && c.call(i), 0)
                        : i.next) &&
                    !(c = c.call(i, t[1])).done)
                )
                  return c;
                switch (((i = 0), c && (t = [2 & t[0], c.value]), t[0])) {
                  case 0:
                  case 1:
                    c = t;
                    break;
                  case 4:
                    return u.label++, { value: t[1], done: !1 };
                  case 5:
                    u.label++, (i = t[1]), (t = [0]);
                    continue;
                  case 7:
                    (t = u.ops.pop()), u.trys.pop();
                    continue;
                  default:
                    if (
                      !(c = 0 < (c = u.trys).length && c[c.length - 1]) &&
                      (6 === t[0] || 2 === t[0])
                    ) {
                      u = 0;
                      continue;
                    }
                    if (3 === t[0] && (!c || (t[1] > c[0] && t[1] < c[3]))) {
                      u.label = t[1];
                      break;
                    }
                    if (6 === t[0] && u.label < c[1]) {
                      (u.label = c[1]), (c = t);
                      break;
                    }
                    if (c && u.label < c[2]) {
                      (u.label = c[2]), u.ops.push(t);
                      break;
                    }
                    c[2] && u.ops.pop(), u.trys.pop();
                    continue;
                }
                t = o.call(n, u);
              } catch (e) {
                (t = [6, e]), (i = 0);
              } finally {
                r = c = 0;
              }
            if (5 & t[0]) throw t[1];
            return { value: t[0] ? t[1] : void 0, done: !0 };
          })([t, e]);
        };
      }
    }
  },
  tkkQ: function(e, t, n) {
    "use strict";
    var o = n("1n9R");
    n.d(t, "a", function() {
      return o.b;
    }),
      n.d(t, "d", function() {
        return o.f;
      }),
      n.d(t, "c", function() {
        return o.e;
      }),
      n.d(t, "b", function() {
        return o.d;
      });
  },
  x0hG: function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n("tkkQ"),
      r = n("fGPn");
    document.addEventListener("DOMContentLoaded", function() {
      Object(o.c)(), (window.ClientConnectionAPI = r.b);
    });
  }
});
