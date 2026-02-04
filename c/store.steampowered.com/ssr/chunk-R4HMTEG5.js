import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = {
    success: !0,
    result: 1,
  },
  _ = class {
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
        _ == 7 && (_.call_unsupported = !0),
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
      return !this.m_connection.connected_to_client || !this.m_connection.ready
        ? !1
        : this.m_connection.ClientInfo.rgSupportedMessages.indexOf(_) !== -1;
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
        let _ = _.result == 1;
        return this.m_mapCacheSubscribedApp.set(_, _), _;
      });
    }
    OpenFriendsDialog() {
      let _ = {
        message: "OpenFriendsDialog",
      };
      return this.GenericEResultCall(_);
    }
    OpenSteamURL(_, _ = !1) {
      let _ = {
        message: "OpenSteamURL",
        url: _,
      };
      return this.GenericEResultCall(_, _);
    }
    BClientAccountMatches() {
      return _.logged_in
        ? _.accountid == this.m_connection.ClientInfo.unAccountID
        : !0;
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
                  _.success === 1 ? _ : this.FailureResult(_.success),
                ),
        )
        .catch(() => this.FailureResult());
    }
  },
  _ = 27060;
var _ = "127.0.0.1",
  _ = class {
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
      _ !== void 0 && (_.sequenceid = _);
      try {
        return this.m_socket.send(JSON.stringify(_)), !0;
      } catch {
        return !1;
      }
    }
    OnSocketMessage(_) {
      try {
        let _ = JSON.parse(_.data);
        if (_.sequenceid) {
          let _ = this.m_mapWaitingCallbacks.get(_.sequenceid);
          if (_) {
            this.m_mapWaitingCallbacks.delete(_.sequenceid), _.fnCallback(_);
            return;
          }
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
          this.m_socket = new WebSocket(`ws://${_}:${_}/clientsocket/`);
        } catch (_) {
          (this.m_bSecurityException = !0), _(_);
          return;
        }
        (this.m_socket.onerror = (_) => {
          _();
        }),
          (this.m_socket.onmessage = this.OnSocketMessage.bind(this)),
          (this.m_socket.onopen = () => {
            let _ = {
              message: "GetClientInfo",
            };
            this.SendMsgAndAwaitResponse(_)
              .then((_) => {
                _.success == 1
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
  },
  _ = new _();
window.ClientConnectionAPI = _;
var _ = _(_());
var _ = _(_());
function _(_) {
  let { appid: _ } = _,
    _ = `steam://run/${_}`,
    _ = _.useCallback(() => {
      _.OpenSteamURL(_).then((_) => {
        _.success || (window.location.href = _);
      });
    }, [_]);
  return (0, _.jsx)(_, {
    onClick: _,
    children: _.Localize("#PlayGameButton_PlayNow"),
  });
}
export { _ };
