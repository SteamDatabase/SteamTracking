/*! This file includes third-party software, governed by the licenses described here: https://steamcommunity.com/public/javascript/webui/clientcom.licenses.txt */

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
!(function(n) {
  var o = {};
  function r(t) {
    if (o[t]) return o[t].exports;
    var e = (o[t] = { i: t, l: !1, exports: {} });
    return n[t].call(e.exports, e, e.exports, r), (e.l = !0), e.exports;
  }
  (r.m = n),
    (r.c = o),
    (r.d = function(t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ""),
    r((r.s = "x0hG"));
})({
  "/7KC": function(t, e, n) {
    "use strict";
    function o(t, e) {
      return (
        (t = Math.ceil(t)),
        (e = Math.floor(e)),
        Math.floor(Math.random() * (e - t + 1)) + t
      );
    }
    function r(t, e, n) {
      return Math.max(e, Math.min(n, t));
    }
    function i(t, e, n, o, r) {
      return o + ((r - o) * (t - e)) / (n - e);
    }
    n.d(e, "b", function() {
      return o;
    }),
      n.d(e, "a", function() {
        return r;
      }),
      n.d(e, "c", function() {
        return i;
      });
  },
  "1n9R": function(t, e, n) {
    "use strict";
    n("mrSG");
    var o = n("/7KC");
    function c() {
      return !!window.document;
    }
    n.d(e, "b", function() {
      return i;
    }),
      n.d(e, "g", function() {
        return u;
      }),
      n.d(e, "a", function() {
        return s;
      }),
      n.d(e, "d", function() {
        return l;
      }),
      n.d(e, "f", function() {
        return p;
      }),
      n.d(e, "e", function() {
        return d;
      }),
      n.d(e, "c", function() {
        return _;
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
        STORE_CDN_URL: "",
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
        PLATFORM: "",
        SNR: "",
        LOCAL_HOSTNAME: "",
        WEBAPI_BASE_URL: "",
        TOKEN_URL: "",
        BUILD_TIMESTAMP: 0,
        PAGE_TIMESTAMP: 0,
        get SESSIONID() {
          return (function() {
            if (!c()) return r || (r = l()), r;
            var t = (function(t) {
              if (!c() || !window.document.cookie) return null;
              var e = document.cookie.match("(^|; )" + t + "=([^;]*)");
              return e && e[2] ? decodeURIComponent(e[2]) : null;
            })("sessionid");
            t || (t = l());
            return t;
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
        is_support: !1,
        short_url: ""
      },
      s = { steamid: "", clanid: 0, listid: 0 },
      a = {
        CLANSTEAMID: "",
        CLANACCOUNTID: 0,
        ANNOUNCEMENT_GID: "",
        IMG_URL: "",
        APPID: 0,
        VANITY_ID: "",
        IS_CREATOR_HOME: !1,
        HEADER_IMAGE: "",
        APP_NAME: "",
        HAS_ADULT_CONTENT: !1,
        HAS_ADULT_CONTENT_SEX: !1,
        HAS_ADULT_CONTENT_VIOLENCE: !1
      },
      f = "webui_config";
    function l() {
      var t = (function() {
        for (var t = "", e = 0; e < 24; e++)
          t += Object(o.b)(0, 35).toString(36);
        return t;
      })();
      return (
        (function(t, e, n, o) {
          if (c()) {
            o || (o = "/");
            var r = "";
            if (void 0 !== n && n) {
              var i = new Date();
              i.setTime(i.getTime() + 864e5 * n),
                (r = "; expires=" + i.toUTCString());
            }
            document.cookie =
              encodeURIComponent(t) +
              "=" +
              encodeURIComponent(e) +
              r +
              ";path=" +
              o;
          }
        })("sessionid", t, 0),
        t
      );
    }
    function p(t) {
      void 0 === t && (t = f);
      var e = d("config", t);
      e && (delete e.SESSIONID, Object.assign(i, e));
      var n = d("userinfo", t);
      n && Object.assign(u, n);
      var o = d("broadcast", t);
      o && Object.assign(s, o);
      var r = d("community", t);
      r && Object.assign(a, r);
    }
    function d(t, e) {
      var n;
      if (
        (void 0 === e && (e = f),
        (n = "string" == typeof e ? document.getElementById(e) : e))
      )
        try {
          return n.hasAttribute("data-" + t)
            ? JSON.parse(n.getAttribute("data-" + t))
            : null;
        } catch (t) {
          console.error("Failed to parse config", t);
        }
      else console.error("Missing config element #", e);
    }
    function _() {
      var t = window.location.href;
      return t.startsWith(i.STORE_BASE_URL)
        ? "store"
        : t.startsWith(i.COMMUNITY_BASE_URL)
        ? "community"
        : t.startsWith(i.PARTNER_BASE_URL)
        ? "partnerweb"
        : t.startsWith(i.HELP_BASE_URL)
        ? "help"
        : t.startsWith(i.STEAMTV_BASE_URL)
        ? "steamtv"
        : "";
    }
  },
  fGPn: function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
      return i;
    }),
      n.d(e, "b", function() {
        return u;
      });
    var o = n("tkkQ"),
      r = { success: !0, result: 1 },
      i = (function() {
        function t() {
          (this.m_connection = new c()),
            (this.m_bAllowAccountMismatch = !1),
            (this.m_mapCacheSubscribedApp = new Map());
        }
        return (
          (t.prototype.FailureResult = function(t) {
            void 0 === t && (t = 2);
            var e = { success: !1, result: t };
            return (
              this.m_connection &&
                !this.m_connection.browser_supported &&
                (e.browser_unsupported = !0),
              this.m_connection &&
                !this.m_connection.connected_to_client &&
                (e.connect_failed = !0),
              7 == t && (e.call_unsupported = !0),
              e
            );
          }),
          (t.prototype.SetAllowAccountMismatch = function(t) {
            this.m_bAllowAccountMismatch = t;
          }),
          (t.prototype.BClientConnected = function() {
            var t = this;
            return this.m_connection.Connect().then(
              function() {
                return r;
              },
              function() {
                return t.FailureResult();
              }
            );
          }),
          (t.prototype.BClientSupportsMessage = function(t) {
            return (
              !(
                !this.m_connection.connected_to_client ||
                !this.m_connection.ready
              ) &&
              -1 !== this.m_connection.ClientInfo.rgSupportedMessages.indexOf(t)
            );
          }),
          (t.prototype.OpenFriendChatDialog = function(t) {
            var e = { message: "ShowFriendChatDialog", steamid: t };
            return this.GenericEResultCall(e);
          }),
          (t.prototype.OpenChatRoomGroupDialog = function(t, e) {
            var n = { message: "ShowChatRoomGroupDialog", chat_group_id: t };
            return e && (n.chat_room_id = e), this.GenericEResultCall(n);
          }),
          (t.prototype.ShowChatRoomGroupInvite = function(t) {
            var e = { message: "ShowChatRoomGroupInvite", invite_code: t };
            return this.GenericEResultCall(e);
          }),
          (t.prototype.OpenJoinGameDialog = function(t) {
            var e = { message: "ShowJoinGameDialog", friend_id: t };
            return this.GenericEResultCall(e);
          }),
          (t.prototype.BIsSubscribedApp = function(n) {
            var o = this;
            if (this.m_mapCacheSubscribedApp.has(n))
              return Promise.resolve(this.m_mapCacheSubscribedApp.get(n));
            var t = { message: "IsSubscribedApp", appid: n };
            return this.GenericEResultCall(t).then(function(t) {
              if (!t.connect_failed) {
                var e = 1 == t.result;
                return o.m_mapCacheSubscribedApp.set(n, e), e;
              }
            });
          }),
          (t.prototype.ViewGameInfoForSteamID = function(t) {
            var e = { message: "ViewGameInfoForSteamID", steamid: t };
            return this.GenericEResultCall(e);
          }),
          (t.prototype.BClientAccountMatches = function() {
            return (
              !o.d.logged_in ||
              o.d.accountid == this.m_connection.ClientInfo.unAccountID
            );
          }),
          (t.prototype.GenericEResultCall = function(t) {
            var e = this;
            return this.m_connection
              .Connect()
              .then(function() {
                return e.m_bAllowAccountMismatch || e.BClientAccountMatches()
                  ? e.m_connection.SendMsgAndAwaitResponse(t).then(function(t) {
                      return 1 === t.success ? r : e.FailureResult(t.success);
                    })
                  : { success: !1, result: 19, account_mismatch: !0 };
              })
              .catch(function() {
                return e.FailureResult();
              });
          }),
          t
        );
      })(),
      c = (function() {
        function t() {
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
          Object.defineProperty(t.prototype, "ClientInfo", {
            get: function() {
              return this.m_ClientInfo;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, "ready", {
            get: function() {
              return this.m_bReady;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, "browser_supported", {
            get: function() {
              return !this.m_bSecurityException;
            },
            enumerable: !0,
            configurable: !0
          }),
          Object.defineProperty(t.prototype, "connected_to_client", {
            get: function() {
              return (
                this.m_socket && this.m_socket.readyState == WebSocket.OPEN
              );
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.prototype.SendMsgAndAwaitResponse = function(o) {
            var r = this;
            return new Promise(function(t, e) {
              var n = r.m_iCallSeq++;
              r.BSendMsg(o, n)
                ? r.m_mapWaitingCallbacks.set(n, {
                    iSeq: n,
                    fnCallback: t,
                    fnError: e
                  })
                : e();
            });
          }),
          (t.prototype.BSendMsg = function(t, e) {
            if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN)
              return !1;
            var n = Object.assign({}, t, {
              universe: o.a.EUNIVERSE,
              accountid: o.d.accountid
            });
            void 0 !== e && (n.sequenceid = e);
            try {
              return this.m_socket.send(JSON.stringify(n)), !0;
            } catch (t) {
              return !1;
            }
          }),
          (t.prototype.OnSocketMessage = function(t) {
            try {
              var e = JSON.parse(t.data);
              if (e.sequenceid) {
                var n = this.m_mapWaitingCallbacks.get(e.sequenceid);
                if (n)
                  return (
                    this.m_mapWaitingCallbacks.delete(e.sequenceid),
                    void n.fnCallback(e)
                  );
              }
            } catch (t) {
              console.error("exception parsing response", t);
            }
          }),
          (t.prototype.Connect = function() {
            var o = this;
            if (this.m_bReady && this.m_socket.readyState == WebSocket.OPEN)
              return Promise.resolve();
            if (this.m_promiseConnect) return this.m_promiseConnect;
            var t = new Promise(function(e, n) {
              try {
                o.m_socket = new WebSocket(
                  "ws://127.0.0.1:27060/clientsocket/"
                );
              } catch (t) {
                return (o.m_bSecurityException = !0), void n(t);
              }
              (o.m_socket.onerror = function(t) {
                n();
              }),
                (o.m_socket.onmessage = o.OnSocketMessage.bind(o)),
                (o.m_socket.onopen = function(t) {
                  o.SendMsgAndAwaitResponse({ message: "GetClientInfo" })
                    .then(function(t) {
                      1 == t.success
                        ? ((o.m_ClientInfo.ulVersion = t.clientversion),
                          (o.m_ClientInfo.bFriendsUIEnabled = !!t.friendsui),
                          (o.m_ClientInfo.unAccountID = t.accountid),
                          t.supported_messages &&
                            (o.m_ClientInfo.rgSupportedMessages =
                              t.supported_messages),
                          e())
                        : n();
                    })
                    .catch(n);
                });
            });
            return (
              (this.m_promiseConnect = t),
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
          t
        );
      })(),
      u = new i();
    window.ClientConnectionAPI = u;
  },
  mrSG: function(t, e, n) {
    "use strict";
    n.d(e, "d", function() {
      return r;
    }),
      n.d(e, "a", function() {
        return i;
      }),
      n.d(e, "f", function() {
        return c;
      }),
      n.d(e, "c", function() {
        return u;
      }),
      n.d(e, "b", function() {
        return s;
      }),
      n.d(e, "e", function() {
        return a;
      }),
      n.d(e, "g", function() {
        return f;
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
    var o = function(t, e) {
      return (o =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(t, e) {
            t.__proto__ = e;
          }) ||
        function(t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        })(t, e);
    };
    function r(t, e) {
      function n() {
        this.constructor = t;
      }
      o(t, e),
        (t.prototype =
          null === e
            ? Object.create(e)
            : ((n.prototype = e.prototype), new n()));
    }
    var i = function() {
      return (i =
        Object.assign ||
        function(t) {
          for (var e, n = 1, o = arguments.length; n < o; n++)
            for (var r in (e = arguments[n]))
              Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          return t;
        }).apply(this, arguments);
    };
    function c(t, e) {
      var n = {};
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) &&
          e.indexOf(o) < 0 &&
          (n[o] = t[o]);
      if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
        var r = 0;
        for (o = Object.getOwnPropertySymbols(t); r < o.length; r++)
          e.indexOf(o[r]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(t, o[r]) &&
            (n[o[r]] = t[o[r]]);
      }
      return n;
    }
    function u(t, e, n, o) {
      var r,
        i = arguments.length,
        c =
          i < 3
            ? e
            : null === o
            ? (o = Object.getOwnPropertyDescriptor(e, n))
            : o;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        c = Reflect.decorate(t, e, n, o);
      else
        for (var u = t.length - 1; 0 <= u; u--)
          (r = t[u]) &&
            (c = (i < 3 ? r(c) : 3 < i ? r(e, n, c) : r(e, n)) || c);
      return 3 < i && c && Object.defineProperty(e, n, c), c;
    }
    function s(i, c, u, s) {
      return new (u || (u = Promise))(function(t, e) {
        function n(t) {
          try {
            r(s.next(t));
          } catch (t) {
            e(t);
          }
        }
        function o(t) {
          try {
            r(s.throw(t));
          } catch (t) {
            e(t);
          }
        }
        function r(e) {
          e.done
            ? t(e.value)
            : new u(function(t) {
                t(e.value);
              }).then(n, o);
        }
        r((s = s.apply(i, c || [])).next());
      });
    }
    function a(n, o) {
      var r,
        i,
        c,
        t,
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
        (t = { next: e(0), throw: e(1), return: e(2) }),
        "function" == typeof Symbol &&
          (t[Symbol.iterator] = function() {
            return this;
          }),
        t
      );
      function e(e) {
        return function(t) {
          return (function(e) {
            if (r) throw new TypeError("Generator is already executing.");
            for (; u; )
              try {
                if (
                  ((r = 1),
                  i &&
                    (c =
                      2 & e[0]
                        ? i.return
                        : e[0]
                        ? i.throw || ((c = i.return) && c.call(i), 0)
                        : i.next) &&
                    !(c = c.call(i, e[1])).done)
                )
                  return c;
                switch (((i = 0), c && (e = [2 & e[0], c.value]), e[0])) {
                  case 0:
                  case 1:
                    c = e;
                    break;
                  case 4:
                    return u.label++, { value: e[1], done: !1 };
                  case 5:
                    u.label++, (i = e[1]), (e = [0]);
                    continue;
                  case 7:
                    (e = u.ops.pop()), u.trys.pop();
                    continue;
                  default:
                    if (
                      !(c = 0 < (c = u.trys).length && c[c.length - 1]) &&
                      (6 === e[0] || 2 === e[0])
                    ) {
                      u = 0;
                      continue;
                    }
                    if (3 === e[0] && (!c || (e[1] > c[0] && e[1] < c[3]))) {
                      u.label = e[1];
                      break;
                    }
                    if (6 === e[0] && u.label < c[1]) {
                      (u.label = c[1]), (c = e);
                      break;
                    }
                    if (c && u.label < c[2]) {
                      (u.label = c[2]), u.ops.push(e);
                      break;
                    }
                    c[2] && u.ops.pop(), u.trys.pop();
                    continue;
                }
                e = o.call(n, u);
              } catch (t) {
                (e = [6, t]), (i = 0);
              } finally {
                r = c = 0;
              }
            if (5 & e[0]) throw e[1];
            return { value: e[0] ? e[1] : void 0, done: !0 };
          })([e, t]);
        };
      }
    }
    function f() {
      for (var t = 0, e = 0, n = arguments.length; e < n; e++)
        t += arguments[e].length;
      var o = Array(t),
        r = 0;
      for (e = 0; e < n; e++)
        for (var i = arguments[e], c = 0, u = i.length; c < u; c++, r++)
          o[r] = i[c];
      return o;
    }
  },
  tkkQ: function(t, e, n) {
    "use strict";
    var o = n("1n9R");
    n.d(e, "a", function() {
      return o.b;
    }),
      n.d(e, "d", function() {
        return o.g;
      }),
      n.d(e, "c", function() {
        return o.f;
      }),
      n.d(e, "b", function() {
        return o.e;
      });
  },
  x0hG: function(t, e, n) {
    "use strict";
    n.r(e);
    var o = n("tkkQ"),
      r = n("fGPn");
    document.addEventListener("DOMContentLoaded", function() {
      Object(o.c)(), (window.ClientConnectionAPI = r.b);
    });
  }
});
