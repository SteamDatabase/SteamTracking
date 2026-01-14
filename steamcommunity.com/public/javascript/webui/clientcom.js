/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
var CLSTAMP = "10363496";
(() => {
  "use strict";
  function e(e) {
    if (!t() || !window.document.cookie) return null;
    const n = document.cookie.match("(^|; )" + e + "=([^;]*)");
    return n && n[2] ? decodeURIComponent(n[2]) : null;
  }
  function t() {
    return !!window.document;
  }
  const n = {
      EUNIVERSE: 0,
      WEB_UNIVERSE: "",
      LANGUAGE: "english",
      SUPPORTED_LANGUAGES: [],
      COUNTRY: "",
      AVATAR_BASE_URL: "",
      MEDIA_CDN_COMMUNITY_URL: "",
      MEDIA_CDN_URL: "",
      CLAN_CDN_ASSET_URL: "",
      COMMUNITY_ASSETS_BASE_URL: "",
      VIDEO_CDN_URL: "",
      COMMUNITY_CDN_URL: "",
      COMMUNITY_CDN_ASSET_URL: "",
      BASE_URL_SHARED_CDN: "",
      STORE_CDN_URL: "",
      PUBLIC_SHARED_URL: "",
      COMMUNITY_BASE_URL: "",
      CHAT_BASE_URL: "",
      STORE_BASE_URL: "",
      STORE_CHECKOUT_BASE_URL: "",
      LOGIN_BASE_URL: "",
      SUPPORT_BASE_URL: "",
      STORE_ICON_BASE_URL: "",
      STORE_ITEM_BASE_URL: "",
      IMG_URL: "",
      STEAMTV_BASE_URL: "",
      HELP_BASE_URL: "",
      PARTNER_BASE_URL: "",
      STATS_BASE_URL: "",
      INTERNAL_STATS_BASE_URL: "",
      BASE_URL_STORE_CDN_ASSETS: "",
      IN_CLIENT: !1,
      USE_POPUPS: !1,
      IN_MOBILE: !1,
      IN_MOBILE_WEBVIEW: !1,
      IN_TENFOOT: !1,
      PLATFORM: "",
      SNR: "",
      LAUNCHER_TYPE: 0,
      EREALM: 0,
      IN_CHROMEOS: !1,
      TESLA: !1,
      LOCAL_HOSTNAME: "",
      WEBAPI_BASE_URL: "",
      TOKEN_URL: "",
      BUILD_TIMESTAMP: 0,
      PAGE_TIMESTAMP: 0,
      FROM_WEB: !1,
      WEBSITE_ID: "Unknown",
      get SESSIONID() {
        return (function () {
          if (!t()) return _ || (_ = a()), _;
          let n = e("sessionid");
          n || (n = a());
          return n;
        })();
      },
      FRIENDSUI_BETA: !1,
      STEAM_TV: !1,
      DEV_MODE: !1,
      IN_STEAMUI: !1,
      IN_GAMEPADUI: !1,
      IN_STEAMUI_SHARED_CONTEXT: !1,
      FORCED_DISPLAY_MODE: void 0,
      ON_DECK: !1,
      ON_FRAME: !1,
      ON_STEAMOS: !1,
      IN_GAMESCOPE: !1,
      IN_LOGIN: !1,
      IN_LOGIN_REFRESH: !1,
      USE_LONGEST_LOC_STRING: !1,
      SILENT_STARTUP: !1,
      CLIENT_SESSION: 0,
    },
    i = {
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
      is_partner_member: !1,
      is_valve_email: !1,
      short_url: "",
      country_code: "",
      excluded_content_descriptors: [3, 4, 1],
    },
    s = { steamid: "", clanid: 0, listid: 0 },
    o = {
      CLANSTEAMID: "",
      CLANACCOUNTID: 0,
      APPID: 0,
      VANITY_ID: "",
      IS_CREATOR_HOME: !1,
      IS_CURATOR: !1,
      IS_OGG: !1,
      CAN_UPLOAD_IMAGES: !1,
      IS_VALVE_GROUP: !1,
      IS_ALLOWED_SC: !1,
    },
    c = { ANNOUNCEMENT_GID: "", TAKEOVER_ANNOUNCEMENT_GID: "" },
    r = "webui_config";
  let _;
  function a() {
    const e = (function () {
      let e = "";
      for (let i = 0; i < 24; i++)
        e += ((t = 0),
        (n = 35),
        (t = Math.ceil(t)),
        (n = Math.floor(n)),
        Math.floor(Math.random() * (n - t + 1)) + t).toString(36);
      var t, n;
      return e;
    })();
    return (
      (function (e, n, i, s) {
        if (!t()) return;
        s || (s = "/");
        let o = "";
        if (void 0 !== i && i) {
          const e = new Date();
          e.setTime(e.getTime() + 864e5 * i),
            (o = "; expires=" + e.toUTCString());
        }
        document.cookie =
          encodeURIComponent(e) +
          "=" +
          encodeURIComponent(n) +
          o +
          ";path=" +
          s;
      })("sessionid", e, 0),
      e
    );
  }
  function u(_ = r) {
    const a = {},
      u = S("config", _);
    u && (delete u.SESSIONID, Object.assign(n, u), (a.config = !0));
    const m = S("userinfo", _);
    m &&
      (Object.assign(i, m),
      (a.userConfig = !0),
      i.is_support &&
        (function () {
          let n = null;
          t() && (n = e(d));
          return Boolean(n && 1 === Number.parseInt(n));
        })() &&
        (i.is_support = !1));
    const C = S("broadcast", _);
    C && (Object.assign(s, C), (a.broadcastConfig = !0));
    const h = S("community", _);
    h && (Object.assign(o, h), (a.communityConfig = !0));
    const A = S("event", _);
    return (
      A && (Object.assign(c, A), (a.eventConfig = !0)),
      (E = !0),
      l.forEach((e) => e()),
      a
    );
  }
  let l = new Set(),
    E = !1;
  function S(e, t = r) {
    return m(e, t, !0);
  }
  function m(e, t = r, n) {
    let s;
    if (
      ((s =
        "string" == typeof t
          ? {
              NODE_ENV: "production",
              STEAM_BUILD: "buildbot",
              VALVE_BUILD: "false",
            }.MOBILE_BUILD
            ? null
            : document.getElementById(t)
          : t),
      s)
    )
      try {
        if (s.hasAttribute("data-" + e)) {
          return JSON.parse(s.getAttribute("data-" + e));
        }
        return null;
      } catch (e) {
        console.error(
          "Failed to parse config for " +
            i.steamid +
            " (" +
            window.location.href +
            ")",
          e,
        );
      }
    else n && console.error("Missing config element #", t);
  }
  const d = "presentation_mode";
  let C = { success: !0, result: 1 };
  class h {
    m_mapWaitingCallbacks = new Map();
    m_socket;
    m_iCallSeq = 1;
    m_bReady = !1;
    m_bClientConnectionFailed = !1;
    m_bSecurityException = !1;
    m_promiseConnect;
    m_ClientInfo = {
      ulVersion: "",
      bFriendsUIEnabled: !1,
      unAccountID: 0,
      rgSupportedMessages: [],
    };
    constructor() {}
    get ClientInfo() {
      return this.m_ClientInfo;
    }
    get ready() {
      return this.m_bReady;
    }
    get browser_supported() {
      return !this.m_bSecurityException;
    }
    get connected_to_client() {
      return !!this.m_socket && this.m_socket.readyState == WebSocket.OPEN;
    }
    SendMsgAndAwaitResponse(e) {
      return new Promise((t, n) => {
        let i = this.m_iCallSeq++;
        this.BSendMsg(e, i)
          ? this.m_mapWaitingCallbacks.set(i, {
              iSeq: i,
              fnCallback: t,
              fnError: n,
            })
          : n();
      });
    }
    BSendMsg(e, t) {
      if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN)
        return !1;
      let s = Object.assign({}, e, {
        universe: n.EUNIVERSE,
        accountid: i.accountid,
      });
      void 0 !== t && (s.sequenceid = t);
      try {
        return this.m_socket.send(JSON.stringify(s)), !0;
      } catch (e) {
        return !1;
      }
    }
    OnSocketMessage(e) {
      try {
        let t = JSON.parse(e.data);
        if (t.sequenceid) {
          let e = this.m_mapWaitingCallbacks.get(t.sequenceid);
          if (e)
            return (
              this.m_mapWaitingCallbacks.delete(t.sequenceid),
              void e.fnCallback(t)
            );
        }
      } catch (e) {
        console.error("exception parsing response", e);
      }
    }
    Connect() {
      if (this.m_bReady && this.m_socket?.readyState === WebSocket.OPEN)
        return Promise.resolve();
      if (this.m_promiseConnect) return this.m_promiseConnect;
      let e = new Promise((e, t) => {
        try {
          this.m_socket = new WebSocket("ws://127.0.0.1:27060/clientsocket/");
        } catch (e) {
          return (this.m_bSecurityException = !0), void t(e);
        }
        (this.m_socket.onerror = (e) => {
          t();
        }),
          (this.m_socket.onmessage = this.OnSocketMessage.bind(this)),
          (this.m_socket.onopen = () => {
            this.SendMsgAndAwaitResponse({ message: "GetClientInfo" })
              .then((n) => {
                1 == n.success
                  ? ((this.m_ClientInfo.ulVersion = n.clientversion),
                    (this.m_ClientInfo.bFriendsUIEnabled = !!n.friendsui),
                    (this.m_ClientInfo.unAccountID = n.accountid),
                    n.supported_messages &&
                      (this.m_ClientInfo.rgSupportedMessages =
                        n.supported_messages),
                    e())
                  : t();
              })
              .catch(t);
          });
      });
      return (
        (this.m_promiseConnect = e),
        this.m_promiseConnect
          .then(() => {
            (this.m_bReady = !0), (this.m_promiseConnect = void 0);
          })
          .catch(() => {
            (this.m_bClientConnectionFailed = !0),
              (this.m_promiseConnect = void 0);
          }),
        this.m_promiseConnect
      );
    }
  }
  let A = new (class {
    m_connection = new h();
    FailureResult(e = 2) {
      let t = { success: !1, result: e };
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
    }
    BClientConnected() {
      return this.m_connection.Connect().then(
        () => C,
        () => this.FailureResult(),
      );
    }
    BClientConnectedAndSupportsMessage(e) {
      return this.m_connection
        .Connect()
        .then(() => this.BClientSupportsMessage(e))
        .catch(() => !1);
    }
    BClientSupportsMessage(e) {
      return (
        !(!this.m_connection.connected_to_client || !this.m_connection.ready) &&
        -1 !== this.m_connection.ClientInfo.rgSupportedMessages.indexOf(e)
      );
    }
    OpenFriendChatDialog(e) {
      let t = { message: "ShowFriendChatDialog", steamid: e };
      return this.GenericEResultCall(t);
    }
    OpenChatRoomGroupDialog(e, t) {
      let n = { message: "ShowChatRoomGroupDialog", chat_group_id: e };
      return t && (n.chat_room_id = t), this.GenericEResultCall(n);
    }
    ShowChatRoomGroupInvite(e, t = !0) {
      let n = { message: "ShowChatRoomGroupInvite", invite_code: e };
      return this.GenericEResultCall(n, t);
    }
    m_mapCacheSubscribedApp = new Map();
    BIsSubscribedApp(e) {
      if (this.m_mapCacheSubscribedApp.has(e))
        return Promise.resolve(this.m_mapCacheSubscribedApp.get(e));
      let t = { message: "IsSubscribedApp", appid: e };
      return this.GenericEResultCall(t, !0).then((t) => {
        if (t.connect_failed) return;
        let n = 1 == t.result;
        return this.m_mapCacheSubscribedApp.set(e, n), n;
      });
    }
    OpenFriendsDialog() {
      return this.GenericEResultCall({ message: "OpenFriendsDialog" });
    }
    OpenSteamURL(e, t = !1) {
      let n = { message: "OpenSteamURL", url: e };
      return this.GenericEResultCall(n, t);
    }
    BClientAccountMatches() {
      return (
        !i.logged_in || i.accountid == this.m_connection.ClientInfo.unAccountID
      );
    }
    GenericEResultCall(e, t = !1) {
      return this.m_connection
        .Connect()
        .then(() =>
          t && !this.BClientAccountMatches()
            ? { success: !1, result: 19, account_mismatch: !0 }
            : this.m_connection
                .SendMsgAndAwaitResponse(e)
                .then((e) =>
                  1 === e.success ? C : this.FailureResult(e.success),
                ),
        )
        .catch(() => this.FailureResult());
    }
  })();
  (window.ClientConnectionAPI = A),
    document.addEventListener("DOMContentLoaded", function () {
      u(), (window.ClientConnectionAPI = A);
    });
})();
