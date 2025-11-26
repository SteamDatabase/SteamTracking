var CLSTAMP = "steamdb";
(() => {
  "use strict";
  function _(_) {
    if (!_() || !window.document.cookie) return null;
    const _ = document.cookie.match("(^|; )" + _ + "=([^;]*)");
    return _ && _[2] ? decodeURIComponent(_[2]) : null;
  }
  function _() {
    return !!window.document;
  }
  const _ = {
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
          if (!_()) return _ || (_ = _()), _;
          let _ = _("sessionid");
          _ || (_ = _());
          return _;
        })();
      },
      FRIENDSUI_BETA: !1,
      STEAM_TV: !1,
      DEV_MODE: !1,
      IN_STEAMUI: !1,
      IN_GAMEPADUI: !1,
      IN_STEAMUI_SHARED_CONTEXT: !1,
      DECK_DISPLAY_MODE: !1,
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
    _ = {
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
    _ = {
      steamid: "",
      clanid: 0,
      listid: 0,
    },
    _ = {
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
    _ = {
      ANNOUNCEMENT_GID: "",
      TAKEOVER_ANNOUNCEMENT_GID: "",
    },
    _ = "webui_config";
  let _;
  function _() {
    const _ = (function () {
      let _ = "";
      for (let _ = 0; _ < 24; _++)
        _ += ((_ = 0),
        (_ = 35),
        (_ = Math.ceil(_)),
        (_ = Math.floor(_)),
        Math.floor(Math.random() * (_ - _ + 1)) + _).toString(36);
      var _, _;
      return _;
    })();
    return (
      (function (_, _, _, _) {
        if (!_()) return;
        _ || (_ = "/");
        let _ = "";
        if (void 0 !== _ && _) {
          const _ = new Date();
          _.setTime(_.getTime() + 864e5 * _),
            (_ = "; expires=" + _.toUTCString());
        }
        document.cookie =
          encodeURIComponent(_) +
          "=" +
          encodeURIComponent(_) +
          _ +
          ";path=" +
          _;
      })("sessionid", _, 0),
      _
    );
  }
  function _(_ = _) {
    const _ = {},
      _ = _("config", _);
    _ && (delete _.SESSIONID, Object.assign(_, _), (_.config = !0));
    const _ = _("userinfo", _);
    _ &&
      (Object.assign(_, _),
      (_.userConfig = !0),
      _.is_support &&
        (function () {
          let _ = null;
          _() && (_ = _(_));
          return Boolean(_ && 1 === Number.parseInt(_));
        })() &&
        (_.is_support = !1));
    const _ = _("broadcast", _);
    _ && (Object.assign(_, _), (_.broadcastConfig = !0));
    const _ = _("community", _);
    _ && (Object.assign(_, _), (_.communityConfig = !0));
    const _ = _("event", _);
    return (
      _ && (Object.assign(_, _), (_.eventConfig = !0)),
      (_ = !0),
      _.forEach((_) => _()),
      _
    );
  }
  let _ = new Set(),
    _ = !1;
  function _(_, _ = _) {
    return _(_, _, !0);
  }
  function _(_, _ = _, _) {
    let _;
    if (
      ((_ =
        "string" == typeof _
          ? {
              NODE_ENV: "production",
              STEAM_BUILD: "buildbot",
              VALVE_BUILD: "false",
            }.MOBILE_BUILD
            ? null
            : document.getElementById(_)
          : _),
      _)
    )
      try {
        if (_.hasAttribute("data-" + _)) {
          return JSON.parse(_.getAttribute("data-" + _));
        }
        return null;
      } catch (_) {
        console.error(
          "Failed to parse config for " +
            _.steamid +
            " (" +
            window.location.href +
            ")",
          _,
        );
      }
    else _ && console.error("Missing config element #", _);
  }
  const _ = "presentation_mode";
  let _ = {
    success: !0,
    result: 1,
  };
  class _ {
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
    SendMsgAndAwaitResponse(_) {
      return new Promise((_, _) => {
        let _ = this.m_iCallSeq++;
        this.BSendMsg(_, _)
          ? this.m_mapWaitingCallbacks.set(_, {
              iSeq: _,
              fnCallback: _,
              fnError: _,
            })
          : _();
      });
    }
    BSendMsg(_, _) {
      if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN)
        return !1;
      let _ = Object.assign({}, _, {
        universe: _.EUNIVERSE,
        accountid: _.accountid,
      });
      void 0 !== _ && (_.sequenceid = _);
      try {
        return this.m_socket.send(JSON.stringify(_)), !0;
      } catch (_) {
        return !1;
      }
    }
    OnSocketMessage(_) {
      try {
        let _ = JSON.parse(_.data);
        if (_.sequenceid) {
          let _ = this.m_mapWaitingCallbacks.get(_.sequenceid);
          if (_)
            return (
              this.m_mapWaitingCallbacks.delete(_.sequenceid),
              void _.fnCallback(_)
            );
        }
      } catch (_) {
        console.error("exception parsing response", _);
      }
    }
    Connect() {
      if (this.m_bReady && this.m_socket?.readyState === WebSocket.OPEN)
        return Promise.resolve();
      if (this.m_promiseConnect) return this.m_promiseConnect;
      let _ = new Promise((_, _) => {
        try {
          this.m_socket = new WebSocket("ws://127.0.0.1:27060/clientsocket/");
        } catch (_) {
          return (this.m_bSecurityException = !0), void _(_);
        }
        (this.m_socket.onerror = (_) => {
          _();
        }),
          (this.m_socket.onmessage = this.OnSocketMessage.bind(this)),
          (this.m_socket.onopen = () => {
            this.SendMsgAndAwaitResponse({
              message: "GetClientInfo",
            })
              .then((_) => {
                1 == _.success
                  ? ((this.m_ClientInfo.ulVersion = _.clientversion),
                    (this.m_ClientInfo.bFriendsUIEnabled = !!_.friendsui),
                    (this.m_ClientInfo.unAccountID = _.accountid),
                    _.supported_messages &&
                      (this.m_ClientInfo.rgSupportedMessages =
                        _.supported_messages),
                    _())
                  : _();
              })
              .catch(_);
          });
      });
      return (
        (this.m_promiseConnect = _),
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
  let _ = new (class {
    m_connection = new _();
    FailureResult(_ = 2) {
      let _ = {
        success: !1,
        result: _,
      };
      return (
        this.m_connection &&
          !this.m_connection.browser_supported &&
          (_.browser_unsupported = !0),
        this.m_connection &&
          !this.m_connection.connected_to_client &&
          (_.connect_failed = !0),
        7 == _ && (_.call_unsupported = !0),
        _
      );
    }
    BClientConnected() {
      return this.m_connection.Connect().then(
        () => _,
        () => this.FailureResult(),
      );
    }
    BClientConnectedAndSupportsMessage(_) {
      return this.m_connection
        .Connect()
        .then(() => this.BClientSupportsMessage(_))
        .catch(() => !1);
    }
    BClientSupportsMessage(_) {
      return (
        !(!this.m_connection.connected_to_client || !this.m_connection.ready) &&
        -1 !== this.m_connection.ClientInfo.rgSupportedMessages.indexOf(_)
      );
    }
    OpenFriendChatDialog(_) {
      let _ = {
        message: "ShowFriendChatDialog",
        steamid: _,
      };
      return this.GenericEResultCall(_);
    }
    OpenChatRoomGroupDialog(_, _) {
      let _ = {
        message: "ShowChatRoomGroupDialog",
        chat_group_id: _,
      };
      return _ && (_.chat_room_id = _), this.GenericEResultCall(_);
    }
    ShowChatRoomGroupInvite(_, _ = !0) {
      let _ = {
        message: "ShowChatRoomGroupInvite",
        invite_code: _,
      };
      return this.GenericEResultCall(_, _);
    }
    m_mapCacheSubscribedApp = new Map();
    BIsSubscribedApp(_) {
      if (this.m_mapCacheSubscribedApp.has(_))
        return Promise.resolve(this.m_mapCacheSubscribedApp.get(_));
      let _ = {
        message: "IsSubscribedApp",
        appid: _,
      };
      return this.GenericEResultCall(_, !0).then((_) => {
        if (_.connect_failed) return;
        let _ = 1 == _.result;
        return this.m_mapCacheSubscribedApp.set(_, _), _;
      });
    }
    OpenFriendsDialog() {
      return this.GenericEResultCall({
        message: "OpenFriendsDialog",
      });
    }
    OpenSteamURL(_, _ = !1) {
      let _ = {
        message: "OpenSteamURL",
        url: _,
      };
      return this.GenericEResultCall(_, _);
    }
    BClientAccountMatches() {
      return (
        !_.logged_in || _.accountid == this.m_connection.ClientInfo.unAccountID
      );
    }
    GenericEResultCall(_, _ = !1) {
      return this.m_connection
        .Connect()
        .then(() =>
          _ && !this.BClientAccountMatches()
            ? {
                success: !1,
                result: 19,
                account_mismatch: !0,
              }
            : this.m_connection
                .SendMsgAndAwaitResponse(_)
                .then((_) =>
                  1 === _.success ? _ : this.FailureResult(_.success),
                ),
        )
        .catch(() => this.FailureResult());
    }
  })();
  (window.ClientConnectionAPI = _),
    document.addEventListener("DOMContentLoaded", function () {
      _(), (window.ClientConnectionAPI = _);
    });
})();
