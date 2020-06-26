/*! This file includes third-party software, governed by the licenses described here: https://steamcommunity.com/public/javascript/webui/chathelpers.licenses.txt */

/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "5953604";
!(function(e) {
  function t(t) {
    for (
      var r, c, a = t[0], u = t[1], s = t[2], d = 0, h = [];
      d < a.length;
      d++
    )
      (c = a[d]),
        Object.prototype.hasOwnProperty.call(i, c) && i[c] && h.push(i[c][0]),
        (i[c] = 0);
    for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
    for (l && l(t); h.length; ) h.shift()();
    return o.push.apply(o, s || []), n();
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], r = !0, a = 1; a < n.length; a++) {
        var u = n[a];
        0 !== i[u] && (r = !1);
      }
      r && (o.splice(t--, 1), (e = c((c.s = n[0]))));
    }
    return e;
  }
  var r = {},
    i = { 4: 0 },
    o = [];
  function c(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, c), (n.l = !0), n.exports;
  }
  (c.m = e),
    (c.c = r),
    (c.d = function(e, t, n) {
      c.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (c.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function(e, t) {
      if ((1 & t && (e = c(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (c.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          c.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
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
  var a = (window.webpackJsonp = window.webpackJsonp || []),
    u = a.push.bind(a);
  (a.push = t), (a = a.slice());
  for (var s = 0; s < a.length; s++) t(a[s]);
  var l = u;
  o.push(["qM/t", 0]), n();
})({
  "/7KC": function(e, t, n) {
    "use strict";
    function r(e, t) {
      return (
        (e = Math.ceil(e)),
        (t = Math.floor(t)),
        Math.floor(Math.random() * (t - e + 1)) + e
      );
    }
    function i(e, t, n) {
      return Math.max(t, Math.min(n, e));
    }
    function o(e, t, n, r, i) {
      return r + ((i - r) * (e - t)) / (n - t);
    }
    n.d(t, "b", function() {
      return r;
    }),
      n.d(t, "a", function() {
        return i;
      }),
      n.d(t, "c", function() {
        return o;
      });
  },
  "0N1H": function(e, t, n) {
    "use strict";
    function r(e) {
      return 3 == e || 6 == e;
    }
    function i(e) {
      return 5 == e || 6 == e;
    }
    n.d(t, "b", function() {
      return r;
    }),
      n.d(t, "a", function() {
        return i;
      }),
      n.d(t, "p", function() {
        return o;
      }),
      n.d(t, "q", function() {
        return c;
      }),
      n.d(t, "i", function() {
        return a;
      }),
      n.d(t, "j", function() {
        return u;
      }),
      n.d(t, "o", function() {
        return s;
      }),
      n.d(t, "k", function() {
        return l;
      }),
      n.d(t, "l", function() {
        return d;
      }),
      n.d(t, "n", function() {
        return h;
      }),
      n.d(t, "m", function() {
        return f;
      }),
      n.d(t, "f", function() {
        return p;
      }),
      n.d(t, "h", function() {
        return m;
      }),
      n.d(t, "g", function() {
        return _;
      }),
      n.d(t, "d", function() {
        return v;
      }),
      n.d(t, "c", function() {
        return g;
      }),
      n.d(t, "e", function() {
        return b;
      });
    var o = 1,
      c = 4,
      a = 750,
      u = 799,
      s = 7,
      l = 250820,
      d = 330050,
      h = 358510,
      f = 366490,
      p = "18446744073709551615",
      m = 0,
      _ = 2147483647;
    function v(e, t) {
      switch ((void 0 === t && (t = "en"), e)) {
        case 0:
          return "en";
        case 1:
          return "de";
        case 2:
          return "fr";
        case 3:
          return "it";
        case 4:
          return "ko";
        case 5:
          return "es";
        case 6:
          return "zn-cn";
        case 7:
          return "zn-tw";
        case 8:
          return "ru";
        case 9:
          return "th";
        case 10:
          return "ja";
        case 11:
          return "pt";
        case 12:
          return "pl";
        case 13:
          return "da";
        case 14:
          return "nl";
        case 15:
          return "fi";
        case 16:
          return "no";
        case 17:
          return "sv";
        case 18:
          return "hu";
        case 19:
          return "cs";
        case 20:
          return "ro";
        case 21:
          return "tr";
        case 25:
          return "ar";
        case 22:
          return "pt-br";
        case 23:
          return "bg";
        case 24:
          return "el";
        case 26:
          return "uk";
        case 27:
          return "es-419";
        case 28:
          return "vn";
        default:
          return t;
      }
    }
    function g(e, t) {
      switch ((void 0 === t && (t = ""), e)) {
        case 0:
          return "english";
        case 1:
          return "german";
        case 2:
          return "french";
        case 3:
          return "italian";
        case 4:
          return "korean";
        case 5:
          return "spanish";
        case 6:
          return "schinese";
        case 7:
          return "tchinese";
        case 8:
          return "russian";
        case 9:
          return "thai";
        case 10:
          return "japanese";
        case 11:
          return "portuguese";
        case 12:
          return "polish";
        case 13:
          return "danish";
        case 14:
          return "dutch";
        case 15:
          return "finnish";
        case 16:
          return "norwegian";
        case 17:
          return "swedish";
        case 18:
          return "hungarian";
        case 19:
          return "czech";
        case 20:
          return "romanian";
        case 21:
          return "turkish";
        case 25:
          return "arabic";
        case 22:
          return "brazilian";
        case 23:
          return "bulgarian";
        case 24:
          return "greek";
        case 26:
          return "ukrainian";
        case 27:
          return "latam";
        case 28:
          return "vietnamese";
        default:
          return t;
      }
    }
    function b(e, t) {
      switch ((void 0 === t && (t = 0), e)) {
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
          return t;
      }
    }
  },
  "1VtQ": function(e, t, n) {
    "use strict";
    function r(e, t, n) {
      return {
        get: function() {
          var e = n.value.bind(this);
          return (
            this.hasOwnProperty(t) ||
              Object.defineProperty(this, t, { value: e }),
            e
          );
        }
      };
    }
    function i(e, t, n) {
      return [e, t, n];
    }
    n.d(t, "a", function() {
      return r;
    }),
      n.d(t, "b", function() {
        return i;
      });
  },
  "1n9R": function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
      return c;
    }),
      n.d(t, "i", function() {
        return a;
      }),
      n.d(t, "a", function() {
        return u;
      }),
      n.d(t, "b", function() {
        return s;
      }),
      n.d(t, "f", function() {
        return l;
      }),
      n.d(t, "h", function() {
        return d;
      }),
      n.d(t, "g", function() {
        return h;
      }),
      n.d(t, "d", function() {
        return f;
      }),
      n.d(t, "e", function() {
        return p;
      });
    n("mrSG");
    var r,
      i = n("/7KC"),
      o = n("YlSc"),
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
        BASE_URL_STORE_CDN_ASSETS: "",
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
            if (!Object(o.a)()) return r || (r = l()), r;
            var e = Object(o.b)("sessionid");
            e || (e = l());
            return e;
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
      u = { steamid: "", clanid: 0, listid: 0 },
      s = {
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
      };
    function l() {
      var e = (function() {
        for (var e = "", t = 0; t < 24; t++)
          e += Object(i.b)(0, 35).toString(36);
        return e;
      })();
      return Object(o.c)("sessionid", e, 0), e;
    }
    function d(e) {
      void 0 === e && (e = "webui_config");
      var t = {},
        n = h("config", e);
      n && (delete n.SESSIONID, Object.assign(c, n), (t.config = !0));
      var r = h("userinfo", e);
      r && (Object.assign(a, r), (t.userConfig = !0));
      var i = h("broadcast", e);
      i && (Object.assign(u, i), (t.broadcastConfig = !0));
      var o = h("community", e);
      return o && (Object.assign(s, o), (t.communityConfig = !0)), t;
    }
    function h(e, t) {
      var n;
      if (
        (void 0 === t && (t = "webui_config"),
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
    function f() {
      var e = window.location.href;
      return e.startsWith(c.STORE_BASE_URL)
        ? c.STORE_BASE_URL
        : e.startsWith(c.COMMUNITY_BASE_URL)
        ? c.COMMUNITY_BASE_URL
        : e.startsWith(c.PARTNER_BASE_URL)
        ? c.PARTNER_BASE_URL
        : e.startsWith(c.HELP_BASE_URL)
        ? c.HELP_BASE_URL
        : e.startsWith(c.STEAMTV_BASE_URL)
        ? c.STEAMTV_BASE_URL
        : "";
    }
    function p() {
      var e = window.location.href;
      return e.startsWith(c.STORE_BASE_URL)
        ? "store"
        : e.startsWith(c.COMMUNITY_BASE_URL)
        ? "community"
        : e.startsWith(c.PARTNER_BASE_URL)
        ? "partnerweb"
        : e.startsWith(c.HELP_BASE_URL)
        ? "help"
        : e.startsWith(c.STEAMTV_BASE_URL)
        ? "steamtv"
        : "";
    }
  },
  Ezvv: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return o;
    }),
      n.d(t, "b", function() {
        return a;
      });
    var r = n("1n9R"),
      i = { success: !0, result: 1 },
      o = (function() {
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
          (e.prototype.BIsSubscribedApp = function(e) {
            var t = this;
            if (this.m_mapCacheSubscribedApp.has(e))
              return Promise.resolve(this.m_mapCacheSubscribedApp.get(e));
            var n = { message: "IsSubscribedApp", appid: e };
            return this.GenericEResultCall(n).then(function(n) {
              if (!n.connect_failed) {
                var r = 1 == n.result;
                return t.m_mapCacheSubscribedApp.set(e, r), r;
              }
            });
          }),
          (e.prototype.ViewGameInfoForSteamID = function(e) {
            var t = { message: "ViewGameInfoForSteamID", steamid: e };
            return this.GenericEResultCall(t);
          }),
          (e.prototype.OpenFriendsDialog = function() {
            return this.GenericEResultCall({ message: "OpenFriendsDialog" });
          }),
          (e.prototype.BClientAccountMatches = function() {
            return (
              !r.i.logged_in ||
              r.i.accountid == this.m_connection.ClientInfo.unAccountID
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
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "ready", {
            get: function() {
              return this.m_bReady;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "browser_supported", {
            get: function() {
              return !this.m_bSecurityException;
            },
            enumerable: !1,
            configurable: !0
          }),
          Object.defineProperty(e.prototype, "connected_to_client", {
            get: function() {
              return (
                this.m_socket && this.m_socket.readyState == WebSocket.OPEN
              );
            },
            enumerable: !1,
            configurable: !0
          }),
          (e.prototype.SendMsgAndAwaitResponse = function(e) {
            var t = this;
            return new Promise(function(n, r) {
              var i = t.m_iCallSeq++;
              t.BSendMsg(e, i)
                ? t.m_mapWaitingCallbacks.set(i, {
                    iSeq: i,
                    fnCallback: n,
                    fnError: r
                  })
                : r();
            });
          }),
          (e.prototype.BSendMsg = function(e, t) {
            if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN)
              return !1;
            var n = Object.assign({}, e, {
              universe: r.c.EUNIVERSE,
              accountid: r.i.accountid
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
                (e.m_socket.onopen = function(r) {
                  e.SendMsgAndAwaitResponse({ message: "GetClientInfo" })
                    .then(function(r) {
                      1 == r.success
                        ? ((e.m_ClientInfo.ulVersion = r.clientversion),
                          (e.m_ClientInfo.bFriendsUIEnabled = !!r.friendsui),
                          (e.m_ClientInfo.unAccountID = r.accountid),
                          r.supported_messages &&
                            (e.m_ClientInfo.rgSupportedMessages =
                              r.supported_messages),
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
      a = new o();
    window.ClientConnectionAPI = a;
  },
  J0bI: function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
      return a;
    }),
      n.d(t, "a", function() {
        return u;
      });
    var r = n("mrSG"),
      i = n("2vnA"),
      o = n("0N1H"),
      c = n("tkkQ"),
      a = (function() {
        function e(e) {
          (this.m_bReady = !1),
            (this.m_bValid = !1),
            (this.m_strInviteCode = e);
        }
        return (
          (e.prototype.BIsReady = function() {
            return this.m_bReady;
          }),
          (e.prototype.BIsValid = function() {
            return this.m_bValid;
          }),
          (e.prototype.BIsInviteLink = function() {
            return !!this.m_strInviteCode;
          }),
          (e.prototype.GetInviteCode = function() {
            return this.m_strInviteCode;
          }),
          (e.prototype.BNeverExpires = function() {
            return this.m_rtTimeExpires == o.g;
          }),
          (e.prototype.GetChatRoomGroupID = function() {
            return this.m_ulChatRoomGroupID;
          }),
          (e.prototype.BIsVoiceChatInvite = function() {
            return !!this.m_ulChatID;
          }),
          (e.prototype.GetChatID = function() {
            return this.m_ulChatID;
          }),
          (e.prototype.GetURL = function() {
            return this.m_strInviteCode ? u(this.m_strInviteCode) : null;
          }),
          (e.prototype.BIsUserBanned = function() {
            return this.m_bIsBanned;
          }),
          (e.prototype.GetTimeKickExpires = function() {
            return this.m_rtKickExpires;
          }),
          Object.defineProperty(e.prototype, "time_expires", {
            get: function() {
              return this.m_rtTimeExpires;
            },
            enumerable: !1,
            configurable: !0
          }),
          (e.prototype.InitInvalid = function() {
            (this.m_bValid = !1), (this.m_bReady = !0);
          }),
          (e.prototype.InitDirectInvite = function(e, t, n, r) {
            void 0 === n && (n = !1),
              void 0 === r && (r = void 0),
              (this.m_ulChatRoomGroupID = e),
              (this.m_ulChatID = t),
              (this.m_bIsBanned = n),
              (this.m_rtKickExpires = r),
              (this.m_rtTimeExpires = o.g),
              (this.m_bValid = !0),
              (this.m_bReady = !0);
          }),
          Object(r.c)([i.z], e.prototype, "m_bReady", void 0),
          Object(r.c)([i.i], e.prototype, "InitInvalid", null),
          Object(r.c)([i.i], e.prototype, "InitDirectInvite", null),
          e
        );
      })();
    function u(e) {
      return "public" == c.a.WEB_UNIVERSE
        ? "https://s.team/chat/" + e
        : c.a.COMMUNITY_BASE_URL + "chat/invite/" + e;
    }
  },
  Kcgk: function(e, t, n) {
    "use strict";
    n.d(t, "h", function() {
      return c;
    }),
      n.d(t, "d", function() {
        return a;
      }),
      n.d(t, "e", function() {
        return u;
      }),
      n.d(t, "f", function() {
        return l;
      }),
      n.d(t, "g", function() {
        return f;
      }),
      n.d(t, "a", function() {
        return p;
      }),
      n.d(t, "c", function() {
        return b;
      }),
      n.d(t, "b", function() {
        return I;
      });
    var r = n("oh5H"),
      i = n("ujHl"),
      o = n("Gp1o");
    function c(e, t) {
      void 0 === t && (t = !1);
      var n = t ? "#TimeInterval_" : "#TimeSince_";
      return e >= 2 * i.d.PerYear
        ? Object(r.d)(n + "XYears", Math.floor(e / i.d.PerYear))
        : e >= i.d.PerYear
        ? (e -= i.d.PerYear) >= 2 * i.d.PerMonth
          ? Object(r.d)(n + "1YearXMonths", Math.floor(e / i.d.PerMonth))
          : Object(r.d)(n + "1Year")
        : e >= 2 * i.d.PerMonth
        ? Object(r.d)(n + "XMonths", Math.floor(e / i.d.PerMonth))
        : e >= 2 * i.d.PerWeek
        ? Object(r.d)(n + "XWeeks", Math.floor(e / i.d.PerWeek))
        : e >= i.d.PerWeek
        ? Object(r.d)(n + "1Week", Math.floor(e / i.d.PerWeek))
        : e >= 2 * i.d.PerDay
        ? Object(r.d)(n + "XDays", Math.floor(e / i.d.PerDay))
        : e >= i.d.PerDay
        ? (e -= i.d.PerDay) >= 2 * i.d.PerHour
          ? Object(r.d)(n + "1DayXHours", Math.floor(e / i.d.PerHour))
          : Object(r.d)(n + "1Day")
        : e >= 2 * i.d.PerHour
        ? Object(r.d)(n + "XHours", Math.floor(e / i.d.PerHour))
        : e >= i.d.PerHour
        ? (e -= i.d.PerHour) >= 2 * i.d.PerMinute
          ? Object(r.d)(n + "1HourXMinutes", Math.floor(e / i.d.PerMinute))
          : Object(r.d)(n + "1Hour")
        : e >= 2 * i.d.PerMinute
        ? Object(r.d)(n + "XMinutes", Math.floor(e / i.d.PerMinute))
        : e >= i.d.PerMinute
        ? Object(r.d)(n + "1Minute")
        : Object(r.d)(n + "LessThanAMinute");
    }
    function a(e, t) {
      var n = {
        weekday: "short",
        month: "long",
        day: "numeric",
        year: t ? void 0 : "numeric"
      };
      return new Date(1e3 * e).toLocaleDateString(r.c.GetPreferredLocales(), n);
    }
    function u(e) {
      return new Date(1e3 * e).toLocaleTimeString(r.c.GetPreferredLocales(), {
        hour: "numeric",
        minute: "numeric"
      });
    }
    var s = new Map();
    function l(e) {
      var t = new Date(1e3 * e),
        n = r.c.GetPreferredLocales(),
        i = (function(e) {
          var t = s.get(e);
          if (!0 === t || !1 === t) return t;
          var n = new Date();
          return (
            n.setHours(15),
            (t =
              n.toLocaleTimeString(e, { hour: "numeric" }) ==
              n.toLocaleTimeString(e, { hour: "numeric", hour12: !1 })),
            s.set(e, t),
            t
          );
        })(n[0]);
      return t.toLocaleTimeString(
        n,
        i
          ? { hour: "numeric", minute: "numeric" }
          : { hour: "numeric", hour12: !0 }
      );
    }
    var d = new Map(),
      h = new Map();
    function f(e, t) {
      var n = new Date(),
        i = new Date(1e3 * e);
      if (i.getFullYear() != n.getFullYear())
        return (function(e) {
          var t = new Date(1e3 * e),
            n = t.setHours(0, 0, 0, 0),
            i = d.get(n);
          return (
            i ||
            ((i = t.toLocaleDateString(r.c.GetPreferredLocales(), {
              year: "numeric",
              month: "short",
              day: "numeric"
            })),
            d.set(n, i),
            i)
          );
        })(e);
      o.b(new Date().setHours(24, 0, 0, 0) - n.getTime());
      var c = new Date();
      if ((c.setHours(0, 0, 0, 0), i >= c)) {
        if ((c.setDate(c.getDate() + 1), i < c))
          return Object(r.d)("#Time_Today");
        if ((c.setDate(c.getDate() + 1), i < c))
          return Object(r.d)("#Time_Tomorrow");
      } else if ((c.setDate(c.getDate() - 1), i >= c))
        return Object(r.d)("#Time_Yesterday");
      var a = { month: t ? "long" : "short", day: "numeric" },
        u = i.setHours(0, 0, 0, 0) + a.month,
        s = h.get(u);
      return (
        s ||
        ((s = i.toLocaleDateString(r.c.GetPreferredLocales(), a)),
        h.set(u, s),
        s)
      );
    }
    function p(e) {
      var t = new Date(1e3 * e),
        n = new Date();
      if (t > n)
        return (
          o.b(t.getTime() - n.getTime()),
          t.getFullYear() == n.getFullYear() ? y(t) : S(t)
        );
      o.b(new Date().setHours(24, 0, 0, 0) - n.getTime());
      var c = new Date();
      if ((c.setHours(0, 0, 0, 0), t >= c)) return Object(r.d)("#Time_Today");
      if ((c.setDate(c.getDate() - 1), t >= c))
        return Object(r.d)("#Time_Yesterday");
      if ((c.setDate(c.getDate() - 5), t >= c))
        return Object(r.d)("#TimeSince_ThisWeek");
      var a = new Date(c);
      if (
        (c.setDate(c.getDate() - 21),
        t >= c ||
          (t.getMonth() == n.getMonth() && t.getFullYear() == n.getFullYear()))
      ) {
        var u =
          Math.floor((a.valueOf() - t.valueOf()) / (1e3 * i.d.PerWeek)) + 1;
        return 1 == u
          ? Object(r.d)("#TimeSince_1Week")
          : Object(r.d)("#TimeSince_XWeeks", u);
      }
      return t.getFullYear() == n.getFullYear() ? y(t) : S(t);
    }
    var m = new Map(),
      _ = new Map(),
      v = (new Map(), new Map()),
      g = new Map();
    function b(e, t) {
      void 0 === t && (t = !1);
      var n = e.getDate() + 31 * (e.getMonth() + 12 * e.getFullYear()),
        i = g.get(n);
      return (
        i ||
        ((i = e.toLocaleDateString(r.c.GetPreferredLocales(), {
          weekday: "long",
          day: "numeric",
          month: t ? "long" : "short"
        })),
        g.set(n, i),
        i)
      );
    }
    function I(e) {
      var t = m.get(e.getDay());
      return (
        t ||
        ((t = e.toLocaleDateString(r.c.GetPreferredLocales(), {
          weekday: "long"
        })),
        m.set(e.getDay(), t),
        t)
      );
    }
    function y(e) {
      var t = _.get(e.getMonth());
      return (
        t ||
        ((t = e.toLocaleDateString(r.c.GetPreferredLocales(), {
          month: "long"
        })),
        _.set(e.getMonth(), t),
        t)
      );
    }
    function S(e) {
      var t = e.getMonth() + 12 * e.getFullYear(),
        n = v.get(t);
      return (
        n ||
        ((n = e.toLocaleDateString(r.c.GetPreferredLocales(), {
          month: "long",
          year: "numeric"
        })),
        v.set(t, n),
        n)
      );
    }
  },
  XaMz: function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return i;
    });
    var r = n("mrSG");
    function i(e, t) {
      for (var n = [], i = 2; i < arguments.length; i++)
        n[i - 2] = arguments[i];
      console.assert
        ? 0 == n.length
          ? console.assert(!!e, t)
          : console.assert.apply(console, Object(r.g)([!!e, t], n))
        : e || console.warn.apply(console, Object(r.g)([t], n));
    }
  },
  Y3TG: function(e, t, n) {
    "use strict";
    n("vDqi");
  },
  YlSc: function(e, t, n) {
    "use strict";
    function r(e) {
      if (!o() || !window.document.cookie) return null;
      var t = document.cookie.match("(^|; )" + e + "=([^;]*)");
      return t && t[2] ? decodeURIComponent(t[2]) : null;
    }
    function i(e, t, n, r) {
      if (o()) {
        r || (r = "/");
        var i = "";
        if (void 0 !== n && n) {
          var c = new Date();
          c.setTime(c.getTime() + 864e5 * n),
            (i = "; expires=" + c.toUTCString());
        }
        document.cookie =
          encodeURIComponent(e) +
          "=" +
          encodeURIComponent(t) +
          i +
          ";path=" +
          r;
      }
    }
    function o() {
      return !!window.document;
    }
    n.d(t, "b", function() {
      return r;
    }),
      n.d(t, "c", function() {
        return i;
      }),
      n.d(t, "a", function() {
        return o;
      });
  },
  mrSG: function(e, t, n) {
    "use strict";
    n.d(t, "d", function() {
      return i;
    }),
      n.d(t, "a", function() {
        return o;
      }),
      n.d(t, "f", function() {
        return c;
      }),
      n.d(t, "c", function() {
        return a;
      }),
      n.d(t, "b", function() {
        return u;
      }),
      n.d(t, "e", function() {
        return s;
      }),
      n.d(t, "g", function() {
        return l;
      });
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
    var r = function(e, t) {
      return (r =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(e, t) {
            e.__proto__ = t;
          }) ||
        function(e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(e, t);
    };
    function i(e, t) {
      function n() {
        this.constructor = e;
      }
      r(e, t),
        (e.prototype =
          null === t
            ? Object.create(t)
            : ((n.prototype = t.prototype), new n()));
    }
    var o = function() {
      return (o =
        Object.assign ||
        function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }).apply(this, arguments);
    };
    function c(e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
            (n[r[i]] = e[r[i]]);
      }
      return n;
    }
    function a(e, t, n, r) {
      var i,
        o = arguments.length,
        c =
          o < 3
            ? t
            : null === r
            ? (r = Object.getOwnPropertyDescriptor(t, n))
            : r;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        c = Reflect.decorate(e, t, n, r);
      else
        for (var a = e.length - 1; a >= 0; a--)
          (i = e[a]) &&
            (c = (o < 3 ? i(c) : o > 3 ? i(t, n, c) : i(t, n)) || c);
      return o > 3 && c && Object.defineProperty(t, n, c), c;
    }
    function u(e, t, n, r) {
      return new (n || (n = Promise))(function(i, o) {
        function c(e) {
          try {
            u(r.next(e));
          } catch (e) {
            o(e);
          }
        }
        function a(e) {
          try {
            u(r.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function u(e) {
          var t;
          e.done
            ? i(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function(e) {
                    e(t);
                  })).then(c, a);
        }
        u((r = r.apply(e, t || [])).next());
      });
    }
    function s(e, t) {
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
                      !((i = c.trys),
                      (i = i.length > 0 && i[i.length - 1]) ||
                        (6 !== o[0] && 2 !== o[0]))
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
                o = t.call(e, c);
              } catch (e) {
                (o = [6, e]), (r = 0);
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
      for (var e = 0, t = 0, n = arguments.length; t < n; t++)
        e += arguments[t].length;
      var r = Array(e),
        i = 0;
      for (t = 0; t < n; t++)
        for (var o = arguments[t], c = 0, a = o.length; c < a; c++, i++)
          r[i] = o[c];
      return r;
    }
  },
  oh5H: function(e, t, n) {
    "use strict";
    n.d(t, "d", function() {
      return u;
    }),
      n.d(t, "k", function() {
        return s;
      }),
      n.d(t, "i", function() {
        return l;
      }),
      n.d(t, "b", function() {
        return d;
      }),
      n.d(t, "a", function() {
        return h;
      }),
      n.d(t, "c", function() {
        return f;
      });
    var r = n("mrSG"),
      i = n("q1tI"),
      o = n("0N1H"),
      c = n("1n9R"),
      a = (n("XaMz"), n("Kcgk"));
    function u(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      var r = f.LocalizeString(e);
      return r
        ? (t.length > 0 &&
            (r = r.replace(/%(?:(\d+)\$)?s/g, function(e, n) {
              if (n <= t.length && n >= 1) {
                var r = t[n - 1];
                return String(null == r ? "" : r);
              }
              return e;
            })),
          r)
        : e;
    }
    function s(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      var o = f.LocalizeString(e);
      if (!o) return e;
      for (var c, a = [], u = /(.*?)%(\d+)\$s/g, s = 0; (c = u.exec(o)); ) {
        (s += c[0].length), a.push(c[1]);
        var l = parseInt(c[2]);
        l >= 1 && l <= t.length && a.push(t[l - 1]);
      }
      return (
        a.push(o.substr(s)),
        i.createElement.apply(i, Object(r.g)([i.Fragment, null], a))
      );
    }
    function l(e, t) {
      for (var n = [], i = 2; i < arguments.length; i++)
        n[i - 2] = arguments[i];
      return 1 === t || "1" === t
        ? u.apply(void 0, Object(r.g)([e, t], n))
        : u.apply(void 0, Object(r.g)([e + "_Plural", t], n));
    }
    n.d(t, "e", function() {
      return a.a;
    }),
      n.d(t, "f", function() {
        return a.b;
      }),
      n.d(t, "h", function() {
        return a.d;
      }),
      n.d(t, "j", function() {
        return a.e;
      }),
      n.d(t, "l", function() {
        return a.g;
      }),
      n.d(t, "m", function() {
        return a.h;
      }),
      n.d(t, "g", function() {
        return a.c;
      });
    var d = {
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
    function h() {
      var e = "koreana" == c.c.LANGUAGE ? "korean" : c.c.LANGUAGE;
      return d[e] || null;
    }
    var f = new ((function() {
      function e() {
        (this.m_mapTokens = new Map()), (this.m_mapFallbackTokens = new Map());
      }
      return (
        (e.prototype.InitFromObjects = function(e, t, n, i, o) {
          o || this.m_mapTokens.clear();
          var c = Object(r.a)(Object(r.a)({}, n || {}), e),
            a = Object(r.a)(Object(r.a)({}, i || {}), t || {});
          this.AddTokens(c, a);
        }),
        (e.prototype.InitDirect = function(e, t) {
          this.m_mapTokens.clear(),
            this.m_mapFallbackTokens.clear(),
            this.AddTokens(e, t);
        }),
        (e.prototype.AddTokens = function(e, t) {
          var n = this;
          Object.keys(e).forEach(function(t) {
            n.m_mapTokens.set(t, e[t]);
          }),
            t &&
              Object.keys(t).forEach(function(e) {
                n.m_mapTokens.has(e) || n.m_mapTokens.set(e, t[e]),
                  n.m_mapFallbackTokens.set(e, t[e]);
              });
        }),
        (e.prototype.GetPreferredLocales = function() {
          return this.m_rgLocalesToUse
            ? this.m_rgLocalesToUse
            : navigator && navigator.languages
            ? navigator.languages
            : ["en-US"];
        }),
        (e.prototype.GetELanguageFallbackOrder = function() {
          var e = new Array();
          return (
            e.push(Object(o.e)(c.c.LANGUAGE)),
            (c.c.SUPPORTED_LANGUAGES || []).forEach(function(t) {
              t.value != c.c.LANGUAGE && e.push(Object(o.e)(t.value));
            }),
            e
          );
        }),
        (e.prototype.SetPreferredLocales = function(e) {
          this.m_rgLocalesToUse = e;
        }),
        (e.prototype.LocalizeString = function(e) {
          if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
          var t = this.m_mapTokens.get(e.substring(1));
          return void 0 === t ? "" : t;
        }),
        (e.prototype.LocalizeStringFromFallback = function(e) {
          if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
          var t = this.m_mapFallbackTokens.get(e.substring(1));
          return void 0 === t ? "" : t;
        }),
        e
      );
    })())();
    window.LocalizationManager = f;
  },
  "qM/t": function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("q1tI"),
      i = n("i8i4"),
      o = n("tkkQ"),
      c = n("Ezvv"),
      a = (n("Y3TG"), n("oh5H")),
      u = n("XaMz"),
      s = n("mrSG"),
      l = n("2vnA"),
      d = n("okNM"),
      h = n("J0bI"),
      f = n("s+DT");
    var p = n("1VtQ"),
      m = n("K4CH"),
      _ = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(s.d)(t, e),
          (t.prototype.BIsExpired = function() {
            return v.sm_rtTimeCur >= this.m_rtTimeExpires;
          }),
          (t.prototype.InitFromPHPInviteLinkInfo = function(e) {
            this.m_ulChatID = e.chat_id;
            var t = new f.a(e.steamid_sender);
            t.BIsIndividualAccount() &&
              (this.m_unAccountIDInviter = t.GetAccountID()),
              (this.m_rtTimeExpires = e.time_expires),
              (this.m_bIsBanned = e.banned),
              (this.m_rtKickExpires = e.time_kick_expire),
              e.group_summary &&
                (this.m_ulChatRoomGroupID = e.group_summary.chat_group_id),
              (this.m_bValid = !0),
              (this.m_bReady = !0);
          }),
          Object(s.c)([l.i], t.prototype, "InitFromPHPInviteLinkInfo", null),
          t
        );
      })(h.b),
      v = (function() {
        function e(e) {
          (this.m_bConnectingToClient = !1),
            (this.m_invite = new _(e.strInviteCode)),
            e.Invite
              ? this.m_invite.InitFromPHPInviteLinkInfo(e.Invite)
              : this.m_invite.InitInvalid(),
            (this.m_htmlPreRendered = e.render),
            this.SendInviteToClient();
        }
        return (
          (e.prototype.BIsInviteValid = function() {
            return this.m_invite.BIsValid() && !this.m_invite.BIsExpired();
          }),
          (e.prototype.GetInvite = function() {
            return this.m_invite;
          }),
          (e.prototype.BIsConnectingToClient = function() {
            return this.m_bConnectingToClient;
          }),
          (e.prototype.GetConnectResults = function() {
            return this.m_connectResult;
          }),
          (e.prototype.GetPreRenderedHTML = function() {
            return this.m_htmlPreRendered;
          }),
          (e.prototype.LaunchWebChat = function() {
            !(function(e) {
              var t = window.open("", "SteamWebChat", "");
              if (t) {
                var n = !1;
                try {
                  n = "about:blank" == t.location.href;
                } catch (e) {
                  !0;
                }
                if (n) {
                  if (e) {
                    var r = function(n) {
                      var i = o.a.COMMUNITY_BASE_URL.replace(
                        /(https?:\/\/[^/]*).*$/,
                        "$1"
                      );
                      n.source == t &&
                        "FriendsUIReady" == n.data &&
                        n.origin == i &&
                        (t.postMessage(e, o.a.COMMUNITY_BASE_URL),
                        window.removeEventListener("message", r));
                    };
                    window.addEventListener("message", r);
                  }
                  t.location.href = o.a.COMMUNITY_BASE_URL + "chat/";
                } else e && t.postMessage(e, o.a.COMMUNITY_BASE_URL);
                t.focus();
              }
            })({
              command: "ShowChatRoomGroupInvite",
              invite_code: this.m_invite.GetInviteCode()
            });
          }),
          (e.prototype.LaunchSteamIgnoreAccount = function() {
            c.b.SetAllowAccountMismatch(!0), this.SendInviteToClient();
          }),
          (e.prototype.ForceLaunchSteamClient = function() {
            window.location.href =
              "steam://friends/ShowChatRoomGroupInvite/" +
              this.m_invite.GetInviteCode();
          }),
          (e.prototype.SendInviteToClient = function() {
            var e = this;
            this.m_invite.BIsValid() &&
              !this.m_invite.BIsExpired() &&
              ((this.m_bConnectingToClient = !0),
              c.b
                .ShowChatRoomGroupInvite(this.m_invite.GetInviteCode())
                .then(function(t) {
                  Object(l.D)(function() {
                    (e.m_bConnectingToClient = !1),
                      (e.m_connectResult = t),
                      console.log(t);
                  });
                }));
          }),
          Object(s.c)([l.z], e.prototype, "m_bConnectingToClient", void 0),
          Object(s.c)([l.z], e.prototype, "m_connectResult", void 0),
          e
        );
      })(),
      g = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(s.d)(t, e),
          (t.prototype.render = function() {
            return r.createElement(
              "div",
              { className: "InviteLandingRoot" },
              this.props.controller.BIsInviteValid()
                ? r.createElement(b, { controller: this.props.controller })
                : r.createElement(I, { controller: this.props.controller })
            );
          }),
          (t = Object(s.c)([d.a], t))
        );
      })(r.Component),
      b = (function(e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (t.m_bTriedToLaunchSteam = !1), t;
        }
        return (
          Object(s.d)(t, e),
          (t.prototype.LaunchWebChat = function() {
            this.props.controller.LaunchWebChat();
          }),
          (t.prototype.OpenInSteamIgnoreAccount = function() {
            this.props.controller.LaunchSteamIgnoreAccount();
          }),
          (t.prototype.LaunchSteamClient = function() {
            var e = this;
            this.props.controller.ForceLaunchSteamClient(),
              window.setTimeout(function() {
                e.m_bTriedToLaunchSteam = !0;
              }, 1e3);
          }),
          (t.prototype.IsMobileDevice = function() {
            switch (new m.UAParser(navigator.userAgent).getResult().os.name) {
              case "iOS":
              case "Android":
              case "BlackBerry":
                return !0;
            }
            return !1;
          }),
          (t.prototype.render = function() {
            if (this.props.controller.BIsConnectingToClient())
              return r.createElement(
                "div",
                { className: "ChatMessageInvite RequestingInfo NoColumns" },
                r.createElement(
                  "div",
                  { className: "postedExpiredInvite" },
                  Object(a.d)("#bbcode_invite_requesting_info")
                )
              );
            var e = this.props.controller.GetConnectResults(),
              t = this.props.controller.GetInvite(),
              n = (o.a.COMMUNITY_BASE_URL, this.IsMobileDevice()),
              i = "inviteButton inviteButtonJoinChat";
            return (
              t.BIsVoiceChatInvite() && (i += " inviteButtonJoinVoice"),
              e.success
                ? r.createElement(
                    "div",
                    { className: "ChatMessageInvite NoColumns" },
                    r.createElement(
                      "div",
                      { className: "groupName" },
                      Object(a.d)("#InviteLanding_SentToSteam")
                    ),
                    r.createElement(
                      "div",
                      { className: "inviteLabel" },
                      Object(a.k)(
                        "#InviteLanding_SentToSteam_Desc",
                        r.createElement(
                          "a",
                          {
                            href: "javascript:void(0);",
                            onClick: this.LaunchWebChat
                          },
                          Object(a.d)(
                            "#InviteLanding_SentToSteam_Desc_LaunchWebChat"
                          )
                        )
                      )
                    )
                  )
                : e.account_mismatch
                ? r.createElement(
                    y,
                    { render: this.props.controller.GetPreRenderedHTML() },
                    r.createElement(
                      "div",
                      { className: "inviteLabel" },
                      Object(a.d)("#InviteLanding_AccountMismatch")
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
                        Object(a.d)("#InviteLanding_OpenInSteam")
                      ),
                      r.createElement(
                        "button",
                        {
                          className: i,
                          type: "button",
                          onClick: this.LaunchWebChat
                        },
                        Object(a.d)("#InviteLanding_OpenInWebChat")
                      )
                    )
                  )
                : e.call_unsupported
                ? r.createElement(
                    "div",
                    { className: "ChatMessageInvite" },
                    r.createElement(
                      "div",
                      { className: "groupName" },
                      Object(a.d)("#InviteLanding_SentToSteam")
                    ),
                    r.createElement(
                      "div",
                      { className: "inviteLabel" },
                      Object(a.k)(
                        "#InviteLanding_SentToSteam_Desc",
                        r.createElement(
                          "a",
                          {
                            href: "javascript:void(0);",
                            onClick: this.LaunchWebChat
                          },
                          Object(a.d)(
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
                          Object(a.d)("#InviteLanding_OpenInSteam")
                        ),
                      r.createElement(
                        "button",
                        {
                          className: i,
                          type: "button",
                          onClick: this.LaunchWebChat
                        },
                        Object(a.d)("#InviteLanding_OpenInWebChat")
                      )
                    ),
                    this.m_bTriedToLaunchSteam &&
                      r.createElement(
                        "div",
                        { className: "inviteLabel inviteLabelLaunchPrompt" },
                        Object(a.d)("#InviteLanding_OpenInSteam_Help")
                      )
                  )
            );
          }),
          Object(s.c)([l.z], t.prototype, "m_bTriedToLaunchSteam", void 0),
          Object(s.c)([p.a], t.prototype, "LaunchWebChat", null),
          Object(s.c)([p.a], t.prototype, "OpenInSteamIgnoreAccount", null),
          Object(s.c)([p.a], t.prototype, "LaunchSteamClient", null),
          (t = Object(s.c)([d.a], t))
        );
      })(r.Component),
      I = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Object(s.d)(t, e),
          (t.prototype.render = function() {
            return r.createElement(
              "div",
              { className: "ChatMessageInvite" },
              r.createElement(
                "div",
                { className: "postedExpiredInvite" },
                Object(a.d)("#InviteLanding_ExpiredOrInvalid")
              )
            );
          }),
          t
        );
      })(r.Component);
    function y(e) {
      return r.createElement(
        "div",
        { className: "ChatMessageInvite" },
        r.createElement("div", {
          className: "leftInviteContainer",
          dangerouslySetInnerHTML: { __html: e.render.strAvatarHTML }
        }),
        r.createElement(
          "div",
          { className: "rightInviteContainer" },
          r.createElement(
            "div",
            { className: "inviteLabel" },
            Object(a.k)(
              "#bbcode_invite_description",
              r.createElement("span", {
                dangerouslySetInnerHTML: {
                  __html: e.render.strInviterNameLinkHTML
                }
              })
            )
          ),
          r.createElement(
            "div",
            { className: "groupName" },
            e.render.strChatRoomGroupName
          ),
          e.children
        )
      );
    }
    window.AssertMsg = u.a;
    var S,
      C,
      E,
      O = new c.a();
    function A(e) {
      var t;
      try {
        t = JSON.parse(e.getAttribute("data-inviteinfo"));
      } catch (e) {}
      v.sm_rtTimeCur = t.rtTimeCur;
      var n = new v(t);
      i.render(r.createElement(g, { controller: n }), e);
    }
    (window.ClientConnectionAPI = O),
      document.addEventListener("DOMContentLoaded", function() {
        Object(o.c)(),
          (function() {
            for (
              var e = document.querySelectorAll(".ChatReactRoot"), t = 0;
              t < e.length;
              t++
            ) {
              var n = e[t],
                r = n.getAttribute("data-component");
              switch (r) {
                case "ChatInvite":
                  A(n);
                  break;
                default:
                  Object(u.a)(!1, 'unknown component: "' + r + '"');
              }
            }
          })();
      }),
      (window.LocalizationReady = function(e, t, n) {
        if ("english" !== t)
          "friendsui" == e ? (S = n) : "shared" == e && (C = n);
        else if ("shared" == e) E = n;
        else {
          var r = void 0,
            i = null,
            o = void 0,
            c = null;
          void 0 !== S ? ((r = S), (i = n)) : (r = n),
            void 0 !== C ? ((o = C), (c = E)) : (o = E),
            a.c.InitFromObjects(r, i, o, c),
            (S = void 0),
            (C = void 0),
            (E = void 0);
        }
      });
  },
  "s+DT": function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
      return a;
    });
    var r = n("2lpH"),
      i = n.n(r),
      o = n("0N1H"),
      c = n("1n9R"),
      a = (function() {
        function e(t, n, r, o) {
          void 0 === t && (t = 0),
            t instanceof e
              ? (this.m_ulSteamID = t.m_ulSteamID)
              : "string" == typeof t
              ? (this.m_ulSteamID = i.a.fromString(t, !0))
              : n && r && void 0 !== o
              ? this.SetFromComponents(t, o, r, n)
              : (this.m_ulSteamID = t ? i.a.fromNumber(t, !0) : i.a.UZERO);
        }
        return (
          (e.InitFromAccountID = function(t) {
            return new e(Number(t), c.c.EUNIVERSE, 1, o.p);
          }),
          (e.InitFromClanID = function(t) {
            return new e(Number(t), c.c.EUNIVERSE, 7, 0);
          }),
          (e.prototype.GetAccountID = function() {
            return this.m_ulSteamID.getLowBitsUnsigned();
          }),
          (e.prototype.GetInstance = function() {
            return 1048575 & this.m_ulSteamID.getHighBitsUnsigned();
          }),
          (e.prototype.GetAccountType = function() {
            return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
          }),
          (e.prototype.GetUniverse = function() {
            return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
          }),
          (e.prototype.ConvertTo64BitString = function() {
            return this.m_ulSteamID.toString();
          }),
          (e.prototype.Render = function() {
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
          (e.prototype.BIsValid = function() {
            var e = this.GetAccountType();
            if (e <= 0 || e >= 11) return !1;
            var t = this.GetUniverse();
            if (t <= 0 || t >= 5) return !1;
            if (1 == e) {
              if (0 == this.GetAccountID() || this.GetInstance() > o.q)
                return !1;
            } else if (7 == e) {
              if (0 == this.GetAccountID() || 0 != this.GetInstance())
                return !1;
            } else if (3 == e && 0 == this.GetAccountID()) return !1;
            return !0;
          }),
          (e.prototype.BIsIndividualAccount = function() {
            return 1 == this.GetAccountType();
          }),
          (e.prototype.BIsClanAccount = function() {
            return 7 == this.GetAccountType();
          }),
          (e.prototype.SetAccountID = function(e) {
            this.m_ulSteamID = new i.a(
              e,
              this.m_ulSteamID.getHighBitsUnsigned(),
              !0
            );
          }),
          (e.prototype.SetInstance = function(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              e,
              this.GetAccountType(),
              this.GetUniverse()
            );
          }),
          (e.prototype.SetAccountType = function(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              e,
              this.GetUniverse()
            );
          }),
          (e.prototype.SetUniverse = function(e) {
            this.SetFromComponents(
              this.GetAccountID(),
              this.GetInstance(),
              this.GetAccountType(),
              e
            );
          }),
          (e.prototype.SetFromComponents = function(e, t, n, r) {
            var o = ((255 & r) << 24) + ((15 & n) << 20) + (1048575 & t),
              c = 4294967295 & e;
            this.m_ulSteamID = new i.a(c, o, !0);
          }),
          e
        );
      })();
  },
  tkkQ: function(e, t, n) {
    "use strict";
    var r = n("1n9R");
    n.d(t, "a", function() {
      return r.c;
    }),
      n.d(t, "d", function() {
        return r.i;
      }),
      n.d(t, "c", function() {
        return r.h;
      }),
      n.d(t, "b", function() {
        return r.g;
      });
  },
  ujHl: function(e, t, n) {
    "use strict";
    n.d(t, "d", function() {
      return r;
    }),
      n.d(t, "a", function() {
        return i;
      }),
      n.d(t, "b", function() {
        return o;
      }),
      n.d(t, "c", function() {
        return c;
      }),
      n.d(t, "e", function() {
        return a;
      });
    var r = {
      PerYear: 31536e3,
      PerMonth: 2628e3,
      PerWeek: 604800,
      PerDay: 86400,
      PerHour: 3600,
      PerMinute: 60
    };
    function i(e, t) {
      return (
        e.getFullYear() == t.getFullYear() &&
        e.getMonth() == t.getMonth() &&
        e.getDate() == t.getDate()
      );
    }
    function o(e, t) {
      return e.getFullYear() == t.getFullYear();
    }
    function c(e) {
      return new Date(e.getFullYear(), e.getMonth(), 1, 0, 0, 0, 0);
    }
    function a(e) {
      return new Promise(function(t) {
        return setTimeout(t, e);
      });
    }
  }
});
