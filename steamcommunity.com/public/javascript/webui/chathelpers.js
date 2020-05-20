/*! This file includes third-party software, governed by the licenses described here: https://steamcommunity.com/public/javascript/webui/chathelpers.licenses.txt */

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "5875712";
!(function(t) {
  function e(e) {
    for (
      var r, c, a = e[0], s = e[1], u = e[2], p = 0, h = [];
      p < a.length;
      p++
    )
      (c = a[p]), i[c] && h.push(i[c][0]), (i[c] = 0);
    for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (t[r] = s[r]);
    for (l && l(e); h.length; ) h.shift()();
    return o.push.apply(o, u || []), n();
  }
  function n() {
    for (var t, e = 0; e < o.length; e++) {
      for (var n = o[e], r = !0, a = 1; a < n.length; a++) {
        var s = n[a];
        0 !== i[s] && (r = !1);
      }
      r && (o.splice(e--, 1), (t = c((c.s = n[0]))));
    }
    return t;
  }
  var r = {},
    i = { 3: 0 },
    o = [];
  function c(e) {
    if (r[e]) return r[e].exports;
    var n = (r[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, c), (n.l = !0), n.exports;
  }
  (c.m = t),
    (c.c = r),
    (c.d = function(t, e, n) {
      c.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (c.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
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
        for (var r in t)
          c.d(
            n,
            r,
            function(e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (c.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return c.d(e, "a", e), e;
    }),
    (c.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (c.p = "");
  var a = (window.webpackJsonp = window.webpackJsonp || []),
    s = a.push.bind(a);
  (a.push = e), (a = a.slice());
  for (var u = 0; u < a.length; u++) e(a[u]);
  var l = s;
  o.push(["qM/t", 0]), n();
})({
  "/7KC": function(t, e, n) {
    "use strict";
    function r(t, e) {
      return (
        (t = Math.ceil(t)),
        (e = Math.floor(e)),
        Math.floor(Math.random() * (e - t + 1)) + t
      );
    }
    function i(t, e, n) {
      return Math.max(e, Math.min(n, t));
    }
    function o(t, e, n, r, i) {
      return r + ((i - r) * (t - e)) / (n - e);
    }
    n.d(e, "b", function() {
      return r;
    }),
      n.d(e, "a", function() {
        return i;
      }),
      n.d(e, "c", function() {
        return o;
      });
  },
  "0N1H": function(t, e, n) {
    "use strict";
    function r(t) {
      return 3 == t || 6 == t;
    }
    function i(t) {
      return 5 == t || 6 == t;
    }
    n.d(e, "b", function() {
      return r;
    }),
      n.d(e, "a", function() {
        return i;
      }),
      n.d(e, "n", function() {
        return o;
      }),
      n.d(e, "o", function() {
        return c;
      }),
      n.d(e, "g", function() {
        return a;
      }),
      n.d(e, "h", function() {
        return s;
      }),
      n.d(e, "m", function() {
        return u;
      }),
      n.d(e, "i", function() {
        return l;
      }),
      n.d(e, "j", function() {
        return p;
      }),
      n.d(e, "l", function() {
        return h;
      }),
      n.d(e, "k", function() {
        return f;
      }),
      n.d(e, "d", function() {
        return m;
      }),
      n.d(e, "f", function() {
        return d;
      }),
      n.d(e, "e", function() {
        return _;
      }),
      n.d(e, "c", function() {
        return v;
      });
    var o = 1,
      c = 4,
      a = 750,
      s = 799,
      u = 7,
      l = 250820,
      p = 330050,
      h = 358510,
      f = 366490,
      m = "18446744073709551615",
      d = 0,
      _ = 2147483647;
    function v(t, e) {
      switch ((void 0 === e && (e = 0), t)) {
        case "english":
          return 0;
        case "german":
          return 1;
        case "french":
          return 2;
        case "italian":
          return 3;
        case "korean":
        case "koreana":
          return 4;
        case "spanish":
          return 5;
        case "schinese":
          return 6;
        case "tchinese":
          return 7;
        case "russian":
          return 8;
        case "thai":
          return 9;
        case "japanese":
          return 10;
        case "portuguese":
          return 11;
        case "polish":
          return 12;
        case "danish":
          return 13;
        case "dutch":
          return 14;
        case "finnish":
          return 15;
        case "norwegian":
          return 16;
        case "swedish":
          return 17;
        case "hungarian":
          return 18;
        case "czech":
          return 19;
        case "romanian":
          return 20;
        case "turkish":
          return 21;
        case "arabic":
          return 25;
        case "brazilian":
          return 22;
        case "bulgarian":
          return 23;
        case "greek":
          return 24;
        case "ukrainian":
          return 26;
        case "latam":
          return 27;
        case "vietnamese":
          return 28;
        default:
          return e;
      }
    }
  },
  "1VtQ": function(t, e, n) {
    "use strict";
    function r(t, e, n) {
      return {
        get: function() {
          var t = n.value.bind(this);
          return (
            this.hasOwnProperty(e) ||
              Object.defineProperty(this, e, { value: t }),
            t
          );
        }
      };
    }
    function i(t, e, n) {
      return [t, e, n];
    }
    n.d(e, "a", function() {
      return r;
    }),
      n.d(e, "b", function() {
        return i;
      });
  },
  "1n9R": function(t, e, n) {
    "use strict";
    n("mrSG");
    var r = n("/7KC");
    function i() {
      return !!window.document;
    }
    n.d(e, "b", function() {
      return c;
    }),
      n.d(e, "h", function() {
        return a;
      }),
      n.d(e, "a", function() {
        return s;
      }),
      n.d(e, "e", function() {
        return p;
      }),
      n.d(e, "g", function() {
        return h;
      }),
      n.d(e, "f", function() {
        return f;
      }),
      n.d(e, "c", function() {
        return m;
      }),
      n.d(e, "d", function() {
        return d;
      });
    var o,
      c = {
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
        LAUNCHER_TYPE: 0,
        LOCAL_HOSTNAME: "",
        WEBAPI_BASE_URL: "",
        TOKEN_URL: "",
        BUILD_TIMESTAMP: 0,
        PAGE_TIMESTAMP: 0,
        get SESSIONID() {
          return (function() {
            if (!i()) return o || (o = p()), o;
            var t = (function(t) {
              if (!i() || !window.document.cookie) return null;
              var e = document.cookie.match("(^|; )" + t + "=([^;]*)");
              return e && e[2] ? decodeURIComponent(e[2]) : null;
            })("sessionid");
            t || (t = p());
            return t;
          })();
        },
        FRIENDSUI_BETA: !1,
        STEAM_TV: !1,
        DEV_MODE: !1,
        OFFLINE_MODE: !1
      },
      a = {
        logged_in: !1,
        steamid: "",
        accountid: 0,
        account_name: "",
        token: void 0,
        token_use_id: void 0,
        webapi_token: "",
        authwgtoken: "",
        is_support: !1,
        is_limited: !1,
        short_url: "",
        country_code: ""
      },
      s = { steamid: "", clanid: 0, listid: 0 },
      u = {
        CLANSTEAMID: "",
        CLANACCOUNTID: 0,
        ANNOUNCEMENT_GID: "",
        IMG_URL: "",
        APPID: 0,
        VANITY_ID: "",
        IS_CREATOR_HOME: !1,
        IS_CURATOR: !1,
        IS_OGG: !1,
        CAN_UPLOAD_IMAGES: !1,
        HEADER_IMAGE: "",
        APP_NAME: "",
        HAS_ADULT_CONTENT: !1,
        HAS_ADULT_CONTENT_SEX: !1,
        HAS_ADULT_CONTENT_VIOLENCE: !1
      },
      l = "webui_config";
    function p() {
      var t = (function() {
        for (var t = "", e = 0; e < 24; e++)
          t += Object(r.b)(0, 35).toString(36);
        return t;
      })();
      return (
        (function(t, e, n, r) {
          if (i()) {
            r || (r = "/");
            var o = "";
            if (void 0 !== n && n) {
              var c = new Date();
              c.setTime(c.getTime() + 864e5 * n),
                (o = "; expires=" + c.toUTCString());
            }
            document.cookie =
              encodeURIComponent(t) +
              "=" +
              encodeURIComponent(e) +
              o +
              ";path=" +
              r;
          }
        })("sessionid", t, 0),
        t
      );
    }
    function h(t) {
      void 0 === t && (t = l);
      var e = {},
        n = f("config", t);
      n && (delete n.SESSIONID, Object.assign(c, n), (e.config = !0));
      var r = f("userinfo", t);
      r && (Object.assign(a, r), (e.userConfig = !0));
      var i = f("broadcast", t);
      i && (Object.assign(s, i), (e.broadcastConfig = !0));
      var o = f("community", t);
      return o && (Object.assign(u, o), (e.communityConfig = !0)), e;
    }
    function f(t, e) {
      var n;
      if (
        (void 0 === e && (e = l),
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
    function m() {
      var t = window.location.href;
      return t.startsWith(c.STORE_BASE_URL)
        ? c.STORE_BASE_URL
        : t.startsWith(c.COMMUNITY_BASE_URL)
        ? c.COMMUNITY_BASE_URL
        : t.startsWith(c.PARTNER_BASE_URL)
        ? c.PARTNER_BASE_URL
        : t.startsWith(c.HELP_BASE_URL)
        ? c.HELP_BASE_URL
        : t.startsWith(c.STEAMTV_BASE_URL)
        ? c.STEAMTV_BASE_URL
        : "";
    }
    function d() {
      var t = window.location.href;
      return t.startsWith(c.STORE_BASE_URL)
        ? "store"
        : t.startsWith(c.COMMUNITY_BASE_URL)
        ? "community"
        : t.startsWith(c.PARTNER_BASE_URL)
        ? "partnerweb"
        : t.startsWith(c.HELP_BASE_URL)
        ? "help"
        : t.startsWith(c.STEAMTV_BASE_URL)
        ? "steamtv"
        : "";
    }
  },
  Ezvv: function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
      return o;
    }),
      n.d(e, "b", function() {
        return a;
      });
    var r = n("1n9R"),
      i = { success: !0, result: 1 },
      o = (function() {
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
                return i;
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
          (t.prototype.BIsSubscribedApp = function(t) {
            var e = this;
            if (this.m_mapCacheSubscribedApp.has(t))
              return Promise.resolve(this.m_mapCacheSubscribedApp.get(t));
            var n = { message: "IsSubscribedApp", appid: t };
            return this.GenericEResultCall(n).then(function(n) {
              if (!n.connect_failed) {
                var r = 1 == n.result;
                return e.m_mapCacheSubscribedApp.set(t, r), r;
              }
            });
          }),
          (t.prototype.ViewGameInfoForSteamID = function(t) {
            var e = { message: "ViewGameInfoForSteamID", steamid: t };
            return this.GenericEResultCall(e);
          }),
          (t.prototype.OpenFriendsDialog = function() {
            return this.GenericEResultCall({ message: "OpenFriendsDialog" });
          }),
          (t.prototype.BClientAccountMatches = function() {
            return (
              !r.h.logged_in ||
              r.h.accountid == this.m_connection.ClientInfo.unAccountID
            );
          }),
          (t.prototype.GenericEResultCall = function(t) {
            var e = this;
            return this.m_connection
              .Connect()
              .then(function() {
                return e.m_bAllowAccountMismatch || e.BClientAccountMatches()
                  ? e.m_connection.SendMsgAndAwaitResponse(t).then(function(t) {
                      return 1 === t.success ? i : e.FailureResult(t.success);
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
          (t.prototype.SendMsgAndAwaitResponse = function(t) {
            var e = this;
            return new Promise(function(n, r) {
              var i = e.m_iCallSeq++;
              e.BSendMsg(t, i)
                ? e.m_mapWaitingCallbacks.set(i, {
                    iSeq: i,
                    fnCallback: n,
                    fnError: r
                  })
                : r();
            });
          }),
          (t.prototype.BSendMsg = function(t, e) {
            if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN)
              return !1;
            var n = Object.assign({}, t, {
              universe: r.b.EUNIVERSE,
              accountid: r.h.accountid
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
            var t = this;
            if (this.m_bReady && this.m_socket.readyState == WebSocket.OPEN)
              return Promise.resolve();
            if (this.m_promiseConnect) return this.m_promiseConnect;
            var e = new Promise(function(e, n) {
              try {
                t.m_socket = new WebSocket(
                  "ws://127.0.0.1:27060/clientsocket/"
                );
              } catch (e) {
                return (t.m_bSecurityException = !0), void n(e);
              }
              (t.m_socket.onerror = function(t) {
                n();
              }),
                (t.m_socket.onmessage = t.OnSocketMessage.bind(t)),
                (t.m_socket.onopen = function(r) {
                  t.SendMsgAndAwaitResponse({ message: "GetClientInfo" })
                    .then(function(r) {
                      1 == r.success
                        ? ((t.m_ClientInfo.ulVersion = r.clientversion),
                          (t.m_ClientInfo.bFriendsUIEnabled = !!r.friendsui),
                          (t.m_ClientInfo.unAccountID = r.accountid),
                          r.supported_messages &&
                            (t.m_ClientInfo.rgSupportedMessages =
                              r.supported_messages),
                          e())
                        : n();
                    })
                    .catch(n);
                });
            });
            return (
              (this.m_promiseConnect = e),
              this.m_promiseConnect
                .then(function() {
                  (t.m_bReady = !0), (t.m_promiseConnect = void 0);
                })
                .catch(function() {
                  (t.m_bClientConnectionFailed = !0),
                    (t.m_promiseConnect = void 0);
                }),
              this.m_promiseConnect
            );
          }),
          t
        );
      })(),
      a = new o();
    window.ClientConnectionAPI = a;
  },
  J0bI: function(t, e, n) {
    "use strict";
    n.d(e, "b", function() {
      return a;
    }),
      n.d(e, "a", function() {
        return s;
      });
    var r = n("mrSG"),
      i = n("2vnA"),
      o = n("0N1H"),
      c = n("tkkQ"),
      a = (function() {
        function t(t) {
          (this.m_bReady = !1),
            (this.m_bValid = !1),
            (this.m_strInviteCode = t);
        }
        return (
          (t.prototype.BIsReady = function() {
            return this.m_bReady;
          }),
          (t.prototype.BIsValid = function() {
            return this.m_bValid;
          }),
          (t.prototype.BIsInviteLink = function() {
            return !!this.m_strInviteCode;
          }),
          (t.prototype.GetInviteCode = function() {
            return this.m_strInviteCode;
          }),
          (t.prototype.BNeverExpires = function() {
            return this.m_rtTimeExpires == o.e;
          }),
          (t.prototype.GetChatRoomGroupID = function() {
            return this.m_ulChatRoomGroupID;
          }),
          (t.prototype.BIsVoiceChatInvite = function() {
            return !!this.m_ulChatID;
          }),
          (t.prototype.GetChatID = function() {
            return this.m_ulChatID;
          }),
          (t.prototype.GetURL = function() {
            return this.m_strInviteCode ? s(this.m_strInviteCode) : null;
          }),
          (t.prototype.BIsUserBanned = function() {
            return this.m_bIsBanned;
          }),
          (t.prototype.GetTimeKickExpires = function() {
            return this.m_rtKickExpires;
          }),
          Object.defineProperty(t.prototype, "time_expires", {
            get: function() {
              return this.m_rtTimeExpires;
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.prototype.InitInvalid = function() {
            (this.m_bValid = !1), (this.m_bReady = !0);
          }),
          (t.prototype.InitDirectInvite = function(t, e, n, r) {
            void 0 === n && (n = !1),
              void 0 === r && (r = void 0),
              (this.m_ulChatRoomGroupID = t),
              (this.m_ulChatID = e),
              (this.m_bIsBanned = n),
              (this.m_rtKickExpires = r),
              (this.m_rtTimeExpires = o.e),
              (this.m_bValid = !0),
              (this.m_bReady = !0);
          }),
          Object(r.c)([i.x], t.prototype, "m_bReady", void 0),
          Object(r.c)([i.g], t.prototype, "InitInvalid", null),
          Object(r.c)([i.g], t.prototype, "InitDirectInvite", null),
          t
        );
      })();
    function s(t) {
      return "public" == c.a.WEB_UNIVERSE
        ? "https://s.team/chat/" + t
        : c.a.COMMUNITY_BASE_URL + "chat/invite/" + t;
    }
  },
  XaMz: function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
      return i;
    });
    var r = n("mrSG");
    function i(t, e) {
      for (var n = [], i = 2; i < arguments.length; i++)
        n[i - 2] = arguments[i];
      console.assert
        ? 0 == n.length
          ? console.assert(!!t, e)
          : console.assert.apply(console, Object(r.g)([!!t, e], n))
        : t || console.warn.apply(console, Object(r.g)([e], n));
    }
  },
  Y3TG: function(t, e, n) {
    "use strict";
    n("vDqi");
  },
  mrSG: function(t, e, n) {
    "use strict";
    n.d(e, "d", function() {
      return i;
    }),
      n.d(e, "a", function() {
        return o;
      }),
      n.d(e, "f", function() {
        return c;
      }),
      n.d(e, "c", function() {
        return a;
      }),
      n.d(e, "b", function() {
        return s;
      }),
      n.d(e, "e", function() {
        return u;
      }),
      n.d(e, "g", function() {
        return l;
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
    var r = function(t, e) {
      return (r =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(t, e) {
            t.__proto__ = e;
          }) ||
        function(t, e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        })(t, e);
    };
    function i(t, e) {
      function n() {
        this.constructor = t;
      }
      r(t, e),
        (t.prototype =
          null === e
            ? Object.create(e)
            : ((n.prototype = e.prototype), new n()));
    }
    var o = function() {
      return (o =
        Object.assign ||
        function(t) {
          for (var e, n = 1, r = arguments.length; n < r; n++)
            for (var i in (e = arguments[n]))
              Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          return t;
        }).apply(this, arguments);
    };
    function c(t, e) {
      var n = {};
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) &&
          e.indexOf(r) < 0 &&
          (n[r] = t[r]);
      if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
          e.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
            (n[r[i]] = t[r[i]]);
      }
      return n;
    }
    function a(t, e, n, r) {
      var i,
        o = arguments.length,
        c =
          o < 3
            ? e
            : null === r
            ? (r = Object.getOwnPropertyDescriptor(e, n))
            : r;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        c = Reflect.decorate(t, e, n, r);
      else
        for (var a = t.length - 1; a >= 0; a--)
          (i = t[a]) &&
            (c = (o < 3 ? i(c) : o > 3 ? i(e, n, c) : i(e, n)) || c);
      return o > 3 && c && Object.defineProperty(e, n, c), c;
    }
    function s(t, e, n, r) {
      return new (n || (n = Promise))(function(i, o) {
        function c(t) {
          try {
            s(r.next(t));
          } catch (t) {
            o(t);
          }
        }
        function a(t) {
          try {
            s(r.throw(t));
          } catch (t) {
            o(t);
          }
        }
        function s(t) {
          t.done
            ? i(t.value)
            : new n(function(e) {
                e(t.value);
              }).then(c, a);
        }
        s((r = r.apply(t, e || [])).next());
      });
    }
    function u(t, e) {
      var n,
        r,
        i,
        o,
        c = {
          label: 0,
          sent: function() {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: [],
          ops: []
        };
      return (
        (o = { next: a(0), throw: a(1), return: a(2) }),
        "function" == typeof Symbol &&
          (o[Symbol.iterator] = function() {
            return this;
          }),
        o
      );
      function a(o) {
        return function(a) {
          return (function(o) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; c; )
              try {
                if (
                  ((n = 1),
                  r &&
                    (i =
                      2 & o[0]
                        ? r.return
                        : o[0]
                        ? r.throw || ((i = r.return) && i.call(r), 0)
                        : r.next) &&
                    !(i = i.call(r, o[1])).done)
                )
                  return i;
                switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                  case 0:
                  case 1:
                    i = o;
                    break;
                  case 4:
                    return c.label++, { value: o[1], done: !1 };
                  case 5:
                    c.label++, (r = o[1]), (o = [0]);
                    continue;
                  case 7:
                    (o = c.ops.pop()), c.trys.pop();
                    continue;
                  default:
                    if (
                      !(i = (i = c.trys).length > 0 && i[i.length - 1]) &&
                      (6 === o[0] || 2 === o[0])
                    ) {
                      c = 0;
                      continue;
                    }
                    if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                      c.label = o[1];
                      break;
                    }
                    if (6 === o[0] && c.label < i[1]) {
                      (c.label = i[1]), (i = o);
                      break;
                    }
                    if (i && c.label < i[2]) {
                      (c.label = i[2]), c.ops.push(o);
                      break;
                    }
                    i[2] && c.ops.pop(), c.trys.pop();
                    continue;
                }
                o = e.call(t, c);
              } catch (t) {
                (o = [6, t]), (r = 0);
              } finally {
                n = i = 0;
              }
            if (5 & o[0]) throw o[1];
            return { value: o[0] ? o[1] : void 0, done: !0 };
          })([o, a]);
        };
      }
    }
    function l() {
      for (var t = 0, e = 0, n = arguments.length; e < n; e++)
        t += arguments[e].length;
      var r = Array(t),
        i = 0;
      for (e = 0; e < n; e++)
        for (var o = arguments[e], c = 0, a = o.length; c < a; c++, i++)
          r[i] = o[c];
      return r;
    }
  },
  oh5H: function(t, e, n) {
    "use strict";
    var r = n("mrSG"),
      i = n("q1tI"),
      o = n("0N1H"),
      c = n("1n9R"),
      a = (n("XaMz"), n("ujHl"));
    n("Gp1o");
    function s(t, e) {
      void 0 === e && (e = !1);
      var n = e ? "#TimeInterval_" : "#TimeSince_";
      return t >= 2 * a.b.PerYear
        ? u(n + "XYears", Math.floor(t / a.b.PerYear))
        : t >= a.b.PerYear
        ? (t -= a.b.PerYear) >= 2 * a.b.PerMonth
          ? u(n + "1YearXMonths", Math.floor(t / a.b.PerMonth))
          : u(n + "1Year")
        : t >= 2 * a.b.PerMonth
        ? u(n + "XMonths", Math.floor(t / a.b.PerMonth))
        : t >= 2 * a.b.PerWeek
        ? u(n + "XWeeks", Math.floor(t / a.b.PerWeek))
        : t >= a.b.PerWeek
        ? u(n + "1Week", Math.floor(t / a.b.PerWeek))
        : t >= 2 * a.b.PerDay
        ? u(n + "XDays", Math.floor(t / a.b.PerDay))
        : t >= a.b.PerDay
        ? (t -= a.b.PerDay) >= 2 * a.b.PerHour
          ? u(n + "1DayXHours", Math.floor(t / a.b.PerHour))
          : u(n + "1Day")
        : t >= 2 * a.b.PerHour
        ? u(n + "XHours", Math.floor(t / a.b.PerHour))
        : t >= a.b.PerHour
        ? (t -= a.b.PerHour) >= 2 * a.b.PerMinute
          ? u(n + "1HourXMinutes", Math.floor(t / a.b.PerMinute))
          : u(n + "1Hour")
        : t >= 2 * a.b.PerMinute
        ? u(n + "XMinutes", Math.floor(t / a.b.PerMinute))
        : t >= a.b.PerMinute
        ? u(n + "1Minute")
        : u(n + "LessThanAMinute");
    }
    new Map(), new Map();
    new Map(), new Map(), new Map(), new Map();
    function u(t) {
      for (var e = [], n = 1; n < arguments.length; n++)
        e[n - 1] = arguments[n];
      var r = f.LocalizeString(t);
      return r
        ? (e.length > 0 &&
            (r = r.replace(/%(?:(\d+)\$)?s/g, function(t, n) {
              if (n <= e.length && n >= 1) {
                var r = e[n - 1];
                return String(null == r ? "" : r);
              }
              return t;
            })),
          r)
        : t;
    }
    function l(t) {
      for (var e = [], n = 1; n < arguments.length; n++)
        e[n - 1] = arguments[n];
      var o = f.LocalizeString(t);
      if (!o) return t;
      for (var c, a = [], s = /(.*?)%(\d+)\$s/g, u = 0; (c = s.exec(o)); ) {
        (u += c[0].length), a.push(c[1]);
        var l = parseInt(c[2]);
        l >= 1 && l <= e.length && a.push(e[l - 1]);
      }
      return (
        a.push(o.substr(u)),
        i.createElement.apply(i, Object(r.g)([i.Fragment, null], a))
      );
    }
    function p(t, e) {
      for (var n = [], i = 2; i < arguments.length; i++)
        n[i - 2] = arguments[i];
      return 1 === e || "1" === e
        ? u.apply(void 0, Object(r.g)([t, e], n))
        : u.apply(void 0, Object(r.g)([t + "_Plural", e], n));
    }
    n.d(e, "c", function() {
      return u;
    }),
      n.d(e, "e", function() {
        return l;
      }),
      n.d(e, "d", function() {
        return p;
      }),
      n.d(e, "a", function() {
        return h;
      }),
      n.d(e, "b", function() {
        return f;
      }),
      n.d(e, "f", function() {
        return s;
      });
    var h = {
      english: "en",
      german: "de",
      french: "fr",
      italian: "it",
      korean: "ko",
      latam: "es-419",
      spanish: "es",
      schinese: "zh-cn",
      tchinese: "zh-tw",
      russian: "ru",
      thai: "th",
      japanese: "ja",
      brazilian: "pt-br",
      portuguese: "pt",
      polish: "pl",
      danish: "da",
      dutch: "nl",
      finnish: "fi",
      norwegian: "no",
      swedish: "sv",
      hungarian: "hu",
      czech: "cs",
      romanian: "ro",
      turkish: "tr",
      arabic: "ar",
      bulgarian: "bg",
      greek: "el",
      ukrainian: "uk",
      vietnamese: "vn"
    };
    var f = new ((function() {
      function t() {
        (this.m_mapTokens = new Map()), (this.m_mapFallbackTokens = new Map());
      }
      return (
        (t.prototype.InitFromObjects = function(t, e, n, i, o) {
          o || this.m_mapTokens.clear();
          var c = Object(r.a)(Object(r.a)({}, n || {}), t),
            a = Object(r.a)(Object(r.a)({}, i || {}), e || {});
          this.AddTokens(c, a);
        }),
        (t.prototype.InitDirect = function(t, e) {
          this.m_mapTokens.clear(),
            this.m_mapFallbackTokens.clear(),
            this.AddTokens(t, e);
        }),
        (t.prototype.AddTokens = function(t, e) {
          var n = this;
          Object.keys(t).forEach(function(e) {
            n.m_mapTokens.set(e, t[e]);
          }),
            e &&
              Object.keys(e).forEach(function(t) {
                n.m_mapTokens.has(t) || n.m_mapTokens.set(t, e[t]),
                  n.m_mapFallbackTokens.set(t, e[t]);
              });
        }),
        (t.prototype.GetPreferredLocales = function() {
          return this.m_rgLocalesToUse
            ? this.m_rgLocalesToUse
            : navigator && navigator.languages
            ? navigator.languages
            : ["en-US"];
        }),
        (t.prototype.GetELanguageFallbackOrder = function() {
          var t = new Array();
          return (
            t.push(Object(o.c)(c.b.LANGUAGE)),
            (c.b.SUPPORTED_LANGUAGES || []).forEach(function(e) {
              e.value != c.b.LANGUAGE && t.push(Object(o.c)(e.value));
            }),
            t
          );
        }),
        (t.prototype.SetPreferredLocales = function(t) {
          this.m_rgLocalesToUse = t;
        }),
        (t.prototype.LocalizeString = function(t) {
          if (!t || 0 == t.length || "#" != t.charAt(0)) return "";
          var e = this.m_mapTokens.get(t.substring(1));
          return void 0 === e ? "" : e;
        }),
        (t.prototype.LocalizeStringFromFallback = function(t) {
          if (!t || 0 == t.length || "#" != t.charAt(0)) return "";
          var e = this.m_mapFallbackTokens.get(t.substring(1));
          return void 0 === e ? "" : e;
        }),
        t
      );
    })())();
    window.LocalizationManager = f;
  },
  "qM/t": function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n("q1tI"),
      i = n("i8i4"),
      o = n("tkkQ"),
      c = n("Ezvv"),
      a = (n("Y3TG"), n("oh5H")),
      s = n("XaMz"),
      u = n("mrSG"),
      l = n("2vnA"),
      p = n("okNM"),
      h = n("J0bI"),
      f = n("s+DT");
    var m = n("1VtQ"),
      d = n("K4CH"),
      _ = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          Object(u.d)(e, t),
          (e.prototype.BIsExpired = function() {
            return v.sm_rtTimeCur >= this.m_rtTimeExpires;
          }),
          (e.prototype.InitFromPHPInviteLinkInfo = function(t) {
            this.m_ulChatID = t.chat_id;
            var e = new f.a(t.steamid_sender);
            e.BIsIndividualAccount() &&
              (this.m_unAccountIDInviter = e.GetAccountID()),
              (this.m_rtTimeExpires = t.time_expires),
              (this.m_bIsBanned = t.banned),
              (this.m_rtKickExpires = t.time_kick_expire),
              t.group_summary &&
                (this.m_ulChatRoomGroupID = t.group_summary.chat_group_id),
              (this.m_bValid = !0),
              (this.m_bReady = !0);
          }),
          Object(u.c)([l.g], e.prototype, "InitFromPHPInviteLinkInfo", null),
          e
        );
      })(h.b),
      v = (function() {
        function t(t) {
          (this.m_bConnectingToClient = !1),
            (this.m_invite = new _(t.strInviteCode)),
            t.Invite
              ? this.m_invite.InitFromPHPInviteLinkInfo(t.Invite)
              : this.m_invite.InitInvalid(),
            (this.m_htmlPreRendered = t.render),
            this.SendInviteToClient();
        }
        return (
          (t.prototype.BIsInviteValid = function() {
            return this.m_invite.BIsValid() && !this.m_invite.BIsExpired();
          }),
          (t.prototype.GetInvite = function() {
            return this.m_invite;
          }),
          (t.prototype.BIsConnectingToClient = function() {
            return this.m_bConnectingToClient;
          }),
          (t.prototype.GetConnectResults = function() {
            return this.m_connectResult;
          }),
          (t.prototype.GetPreRenderedHTML = function() {
            return this.m_htmlPreRendered;
          }),
          (t.prototype.LaunchWebChat = function() {
            !(function(t) {
              var e = window.open("", "SteamWebChat", "");
              if (e) {
                var n = !1;
                try {
                  n = "about:blank" == e.location.href;
                } catch (t) {
                  !0;
                }
                if (n) {
                  if (t) {
                    var r = function(n) {
                      var i = o.a.COMMUNITY_BASE_URL.replace(
                        /(https?:\/\/[^/]*).*$/,
                        "$1"
                      );
                      n.source == e &&
                        "FriendsUIReady" == n.data &&
                        n.origin == i &&
                        (e.postMessage(t, o.a.COMMUNITY_BASE_URL),
                        window.removeEventListener("message", r));
                    };
                    window.addEventListener("message", r);
                  }
                  e.location.href = o.a.COMMUNITY_BASE_URL + "chat/";
                } else t && e.postMessage(t, o.a.COMMUNITY_BASE_URL);
                e.focus();
              }
            })({
              command: "ShowChatRoomGroupInvite",
              invite_code: this.m_invite.GetInviteCode()
            });
          }),
          (t.prototype.LaunchSteamIgnoreAccount = function() {
            c.b.SetAllowAccountMismatch(!0), this.SendInviteToClient();
          }),
          (t.prototype.ForceLaunchSteamClient = function() {
            window.location.href =
              "steam://friends/ShowChatRoomGroupInvite/" +
              this.m_invite.GetInviteCode();
          }),
          (t.prototype.SendInviteToClient = function() {
            var t = this;
            this.m_invite.BIsValid() &&
              !this.m_invite.BIsExpired() &&
              ((this.m_bConnectingToClient = !0),
              c.b
                .ShowChatRoomGroupInvite(this.m_invite.GetInviteCode())
                .then(function(e) {
                  Object(l.A)(function() {
                    (t.m_bConnectingToClient = !1),
                      (t.m_connectResult = e),
                      console.log(e);
                  });
                }));
          }),
          Object(u.c)([l.x], t.prototype, "m_bConnectingToClient", void 0),
          Object(u.c)([l.x], t.prototype, "m_connectResult", void 0),
          t
        );
      })(),
      b = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          Object(u.d)(e, t),
          (e.prototype.render = function() {
            return r.createElement(
              "div",
              { className: "InviteLandingRoot" },
              this.props.controller.BIsInviteValid()
                ? r.createElement(I, { controller: this.props.controller })
                : r.createElement(g, { controller: this.props.controller })
            );
          }),
          (e = Object(u.c)([p.a], e))
        );
      })(r.Component),
      I = (function(t) {
        function e() {
          var e = (null !== t && t.apply(this, arguments)) || this;
          return (e.m_bTriedToLaunchSteam = !1), e;
        }
        return (
          Object(u.d)(e, t),
          (e.prototype.LaunchWebChat = function() {
            this.props.controller.LaunchWebChat();
          }),
          (e.prototype.OpenInSteamIgnoreAccount = function() {
            this.props.controller.LaunchSteamIgnoreAccount();
          }),
          (e.prototype.LaunchSteamClient = function() {
            var t = this;
            this.props.controller.ForceLaunchSteamClient(),
              window.setTimeout(function() {
                t.m_bTriedToLaunchSteam = !0;
              }, 1e3);
          }),
          (e.prototype.IsMobileDevice = function() {
            switch (new d.UAParser(navigator.userAgent).getResult().os.name) {
              case "iOS":
              case "Android":
              case "BlackBerry":
                return !0;
            }
            return !1;
          }),
          (e.prototype.render = function() {
            if (this.props.controller.BIsConnectingToClient())
              return r.createElement(
                "div",
                { className: "ChatMessageInvite RequestingInfo NoColumns" },
                r.createElement(
                  "div",
                  { className: "postedExpiredInvite" },
                  Object(a.c)("#bbcode_invite_requesting_info")
                )
              );
            var t = this.props.controller.GetConnectResults(),
              e = this.props.controller.GetInvite(),
              n = (o.a.COMMUNITY_BASE_URL, this.IsMobileDevice()),
              i = "inviteButton inviteButtonJoinChat";
            return (
              e.BIsVoiceChatInvite() && (i += " inviteButtonJoinVoice"),
              t.success
                ? r.createElement(
                    "div",
                    { className: "ChatMessageInvite NoColumns" },
                    r.createElement(
                      "div",
                      { className: "groupName" },
                      Object(a.c)("#InviteLanding_SentToSteam")
                    ),
                    r.createElement(
                      "div",
                      { className: "inviteLabel" },
                      Object(a.e)(
                        "#InviteLanding_SentToSteam_Desc",
                        r.createElement(
                          "a",
                          {
                            href: "javascript:void(0);",
                            onClick: this.LaunchWebChat
                          },
                          Object(a.c)(
                            "#InviteLanding_SentToSteam_Desc_LaunchWebChat"
                          )
                        )
                      )
                    )
                  )
                : t.account_mismatch
                ? r.createElement(
                    y,
                    { render: this.props.controller.GetPreRenderedHTML() },
                    r.createElement(
                      "div",
                      { className: "inviteLabel" },
                      Object(a.c)("#InviteLanding_AccountMismatch")
                    ),
                    r.createElement(
                      "div",
                      { className: "inviteLabel" },
                      r.createElement(
                        "button",
                        {
                          className: i,
                          type: "button",
                          onClick: this.OpenInSteamIgnoreAccount
                        },
                        Object(a.c)("#InviteLanding_OpenInSteam")
                      ),
                      r.createElement(
                        "button",
                        {
                          className: i,
                          type: "button",
                          onClick: this.LaunchWebChat
                        },
                        Object(a.c)("#InviteLanding_OpenInWebChat")
                      )
                    )
                  )
                : t.call_unsupported
                ? r.createElement(
                    "div",
                    { className: "ChatMessageInvite" },
                    r.createElement(
                      "div",
                      { className: "groupName" },
                      Object(a.c)("#InviteLanding_SentToSteam")
                    ),
                    r.createElement(
                      "div",
                      { className: "inviteLabel" },
                      Object(a.e)(
                        "#InviteLanding_SentToSteam_Desc",
                        r.createElement(
                          "a",
                          {
                            href: "javascript:void(0);",
                            onClick: this.LaunchWebChat
                          },
                          Object(a.c)(
                            "#InviteLanding_SentToSteam_Desc_LaunchWebChat"
                          )
                        )
                      )
                    )
                  )
                : r.createElement(
                    y,
                    { render: this.props.controller.GetPreRenderedHTML() },
                    r.createElement(
                      "div",
                      { className: "inviteLabel inviteLabelButtons" },
                      !n &&
                        r.createElement(
                          "button",
                          {
                            className: i,
                            type: "button",
                            onClick: this.LaunchSteamClient
                          },
                          Object(a.c)("#InviteLanding_OpenInSteam")
                        ),
                      r.createElement(
                        "button",
                        {
                          className: i,
                          type: "button",
                          onClick: this.LaunchWebChat
                        },
                        Object(a.c)("#InviteLanding_OpenInWebChat")
                      )
                    ),
                    this.m_bTriedToLaunchSteam &&
                      r.createElement(
                        "div",
                        { className: "inviteLabel inviteLabelLaunchPrompt" },
                        Object(a.c)("#InviteLanding_OpenInSteam_Help")
                      )
                  )
            );
          }),
          Object(u.c)([l.x], e.prototype, "m_bTriedToLaunchSteam", void 0),
          Object(u.c)([m.a], e.prototype, "LaunchWebChat", null),
          Object(u.c)([m.a], e.prototype, "OpenInSteamIgnoreAccount", null),
          Object(u.c)([m.a], e.prototype, "LaunchSteamClient", null),
          (e = Object(u.c)([p.a], e))
        );
      })(r.Component),
      g = (function(t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          Object(u.d)(e, t),
          (e.prototype.render = function() {
            return r.createElement(
              "div",
              { className: "ChatMessageInvite" },
              r.createElement(
                "div",
                { className: "postedExpiredInvite" },
                Object(a.c)("#InviteLanding_ExpiredOrInvalid")
              )
            );
          }),
          e
        );
      })(r.Component);
    function y(t) {
      return r.createElement(
        "div",
        { className: "ChatMessageInvite" },
        r.createElement("div", {
          className: "leftInviteContainer",
          dangerouslySetInnerHTML: { __html: t.render.strAvatarHTML }
        }),
        r.createElement(
          "div",
          { className: "rightInviteContainer" },
          r.createElement(
            "div",
            { className: "inviteLabel" },
            Object(a.e)(
              "#bbcode_invite_description",
              r.createElement("span", {
                dangerouslySetInnerHTML: {
                  __html: t.render.strInviterNameLinkHTML
                }
              })
            )
          ),
          r.createElement(
            "div",
            { className: "groupName" },
            t.render.strChatRoomGroupName
          ),
          t.children
        )
      );
    }
    window.AssertMsg = s.a;
    var S,
      C,
      E,
      A = new c.a();
    function O(t) {
      var e;
      try {
        e = JSON.parse(t.getAttribute("data-inviteinfo"));
      } catch (t) {}
      v.sm_rtTimeCur = e.rtTimeCur;
      var n = new v(e);
      i.render(r.createElement(b, { controller: n }), t);
    }
    (window.ClientConnectionAPI = A),
      document.addEventListener("DOMContentLoaded", function() {
        Object(o.c)(),
          (function() {
            for (
              var t = document.querySelectorAll(".ChatReactRoot"), e = 0;
              e < t.length;
              e++
            ) {
              var n = t[e],
                r = n.getAttribute("data-component");
              switch (r) {
                case "ChatInvite":
                  O(n);
                  break;
                default:
                  Object(s.a)(!1, 'unknown component: "' + r + '"');
              }
            }
          })();
      }),
      (window.LocalizationReady = function(t, e, n) {
        if ("english" !== e)
          "friendsui" == t ? (S = n) : "shared" == t && (C = n);
        else if ("shared" == t) E = n;
        else {
          var r = void 0,
            i = null,
            o = void 0,
            c = null;
          void 0 !== S ? ((r = S), (i = n)) : (r = n),
            void 0 !== C ? ((o = C), (c = E)) : (o = E),
            a.b.InitFromObjects(r, i, o, c),
            (S = void 0),
            (C = void 0),
            (E = void 0);
        }
      });
  },
  "s+DT": function(t, e, n) {
    "use strict";
    n.d(e, "a", function() {
      return a;
    });
    var r = n("2lpH"),
      i = n.n(r),
      o = n("0N1H"),
      c = n("1n9R"),
      a = (function() {
        function t(e, n, r, o) {
          void 0 === e && (e = 0),
            e instanceof t
              ? (this.m_ulSteamID = e.m_ulSteamID)
              : "string" == typeof e
              ? (this.m_ulSteamID = i.a.fromString(e, !0))
              : n && r && void 0 !== o
              ? this.SetFromComponents(e, o, r, n)
              : (this.m_ulSteamID = e ? i.a.fromNumber(e, !0) : i.a.UZERO);
        }
        return (
          (t.InitFromAccountID = function(e) {
            return new t(Number(e), c.b.EUNIVERSE, 1, o.n);
          }),
          (t.InitFromClanID = function(e) {
            return new t(Number(e), c.b.EUNIVERSE, 7, 0);
          }),
          (t.prototype.GetAccountID = function() {
            return this.m_ulSteamID.getLowBitsUnsigned();
          }),
          (t.prototype.GetInstance = function() {
            return 1048575 & this.m_ulSteamID.getHighBitsUnsigned();
          }),
          (t.prototype.GetAccountType = function() {
            return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
          }),
          (t.prototype.GetUniverse = function() {
            return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
          }),
          (t.prototype.ConvertTo64BitString = function() {
            return this.m_ulSteamID.toString();
          }),
          (t.prototype.Render = function() {
            switch (this.GetAccountType()) {
              case 0:
                return (
                  "[I:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              case 7:
                return (
                  "[g:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              case 4:
                return (
                  "[A:" +
                  this.GetUniverse() +
                  ":" +
                  this.GetAccountID() +
                  ":" +
                  this.GetInstance() +
                  "]"
                );
              case 3:
                return (
                  "[G:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              case 2:
                return (
                  "[M:" +
                  this.GetUniverse() +
                  ":" +
                  this.GetAccountID() +
                  ":" +
                  this.GetInstance() +
                  "]"
                );
              case 5:
                return (
                  "[P:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              case 6:
                return (
                  "[C:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
              default:
                return (
                  "[U:" + this.GetUniverse() + ":" + this.GetAccountID() + "]"
                );
            }
          }),
          (t.prototype.BIsValid = function() {
            var t = this.GetAccountType();
            if (t <= 0 || t >= 11) return !1;
            var e = this.GetUniverse();
            if (e <= 0 || e >= 5) return !1;
            if (1 == t) {
              if (0 == this.GetAccountID() || this.GetInstance() > o.o)
                return !1;
            } else if (7 == t) {
              if (0 == this.GetAccountID() || 0 != this.GetInstance())
                return !1;
            } else if (3 == t && 0 == this.GetAccountID()) return !1;
            return !0;
          }),
          (t.prototype.BIsIndividualAccount = function() {
            return 1 == this.GetAccountType();
          }),
          (t.prototype.BIsClanAccount = function() {
            return 7 == this.GetAccountType();
          }),
          (t.prototype.SetAccountID = function(t) {
            this.m_ulSteamID = new i.a(
              t,
              this.m_ulSteamID.getHighBitsUnsigned(),
              !0
            );
          }),
          (t.prototype.SetInstance = function(t) {
            this.SetFromComponents(
              this.GetAccountID(),
              t,
              this.GetAccountType(),
              this.GetUniverse()
            );
          }),
          (t.prototype.SetAccountType = function(t) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              t,
              this.GetUniverse()
            );
          }),
          (t.prototype.SetUniverse = function(t) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              this.GetAccountType(),
              t
            );
          }),
          (t.prototype.SetFromComponents = function(t, e, n, r) {
            var o = ((255 & r) << 24) + ((15 & n) << 20) + (1048575 & e),
              c = 4294967295 & t;
            this.m_ulSteamID = new i.a(c, o, !0);
          }),
          t
        );
      })();
  },
  tkkQ: function(t, e, n) {
    "use strict";
    var r = n("1n9R");
    n.d(e, "a", function() {
      return r.b;
    }),
      n.d(e, "d", function() {
        return r.h;
      }),
      n.d(e, "c", function() {
        return r.g;
      }),
      n.d(e, "b", function() {
        return r.f;
      });
  },
  ujHl: function(t, e, n) {
    "use strict";
    n.d(e, "b", function() {
      return r;
    }),
      n.d(e, "a", function() {
        return i;
      }),
      n.d(e, "c", function() {
        return o;
      });
    var r = {
      PerYear: 31536e3,
      PerMonth: 2628e3,
      PerWeek: 604800,
      PerDay: 86400,
      PerHour: 3600,
      PerMinute: 60
    };
    function i(t) {
      return new Date(t.getFullYear(), t.getMonth(), 1, 0, 0, 0, 0);
    }
    function o(t) {
      return new Promise(function(e) {
        return setTimeout(e, t);
      });
    }
  }
});
