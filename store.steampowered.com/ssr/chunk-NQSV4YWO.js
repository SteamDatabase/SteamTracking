import { b as _ } from "./chunk-TYINKWDO.js";
import { a as g } from "./chunk-2L7EQBXL.js";
import { a as f } from "./chunk-FSCHESZ2.js";
import { r as h, w as b } from "./chunk-UEJUJHOQ.js";
import { e as C } from "./chunk-AGB23OGL.js";
import { j as p, k as r, m, p as d } from "./chunk-AOJZQCTP.js";
import { a as I } from "./chunk-FE3UJBDM.js";
import { e as a } from "./chunk-O6NXYQVQ.js";
function P(i) {
  return ["PlayerLinkDetails", i];
}
function k(i, t) {
  let e =
    typeof t == "number"
      ? h.InitFromAccountID(t, m.EUNIVERSE).ConvertTo64BitString()
      : t;
  return {
    queryKey: P(e),
    queryFn: async () => (e ? i.load(e) : null),
    enabled: !!e,
  };
}
function q(i) {
  let t = b(),
    e = _(t);
  return C(k(e, i));
}
var R = { success: !0, result: 1 },
  l = class {
    m_connection = new c();
    FailureResult(t = 2) {
      let e = { success: !1, result: t };
      return (
        this.m_connection &&
          !this.m_connection.browser_supported &&
          (e.browser_unsupported = !0),
        this.m_connection &&
          !this.m_connection.connected_to_client &&
          (e.connect_failed = !0),
        t == 7 && (e.call_unsupported = !0),
        e
      );
    }
    BClientConnected() {
      return this.m_connection.Connect().then(
        () => R,
        () => this.FailureResult(),
      );
    }
    BClientConnectedAndSupportsMessage(t) {
      return this.m_connection
        .Connect()
        .then(() => this.BClientSupportsMessage(t))
        .catch(() => !1);
    }
    BClientSupportsMessage(t) {
      return !this.m_connection.connected_to_client || !this.m_connection.ready
        ? !1
        : this.m_connection.ClientInfo.rgSupportedMessages.indexOf(t) !== -1;
    }
    OpenFriendChatDialog(t) {
      let e = { message: "ShowFriendChatDialog", steamid: t };
      return this.GenericEResultCall(e);
    }
    OpenChatRoomGroupDialog(t, e) {
      let n = { message: "ShowChatRoomGroupDialog", chat_group_id: t };
      return e && (n.chat_room_id = e), this.GenericEResultCall(n);
    }
    ShowChatRoomGroupInvite(t, e = !0) {
      let n = { message: "ShowChatRoomGroupInvite", invite_code: t };
      return this.GenericEResultCall(n, e);
    }
    m_mapCacheSubscribedApp = new Map();
    BIsSubscribedApp(t) {
      if (this.m_mapCacheSubscribedApp.has(t))
        return Promise.resolve(this.m_mapCacheSubscribedApp.get(t));
      let e = { message: "IsSubscribedApp", appid: t };
      return this.GenericEResultCall(e, !0).then((n) => {
        if (n.connect_failed) return;
        let s = n.result == 1;
        return this.m_mapCacheSubscribedApp.set(t, s), s;
      });
    }
    OpenFriendsDialog() {
      let t = { message: "OpenFriendsDialog" };
      return this.GenericEResultCall(t);
    }
    OpenSteamURL(t, e = !1) {
      let n = { message: "OpenSteamURL", url: t };
      return this.GenericEResultCall(n, e);
    }
    BClientAccountMatches() {
      return r.logged_in
        ? r.accountid == this.m_connection.ClientInfo.unAccountID
        : !0;
    }
    GenericEResultCall(t, e = !1) {
      return this.m_connection
        .Connect()
        .then(() =>
          e && !this.BClientAccountMatches()
            ? { success: !1, result: 19, account_mismatch: !0 }
            : this.m_connection
                .SendMsgAndAwaitResponse(t)
                .then((n) =>
                  n.success === 1 ? R : this.FailureResult(n.success),
                ),
        )
        .catch(() => this.FailureResult());
    }
  },
  D = 27060;
var v = "127.0.0.1",
  c = class {
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
    SendMsgAndAwaitResponse(t) {
      return new Promise((e, n) => {
        let s = this.m_iCallSeq++;
        this.BSendMsg(t, s)
          ? this.m_mapWaitingCallbacks.set(s, {
              iSeq: s,
              fnCallback: e,
              fnError: n,
            })
          : n();
      });
    }
    BSendMsg(t, e) {
      if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN)
        return !1;
      let n = Object.assign({}, t, {
        universe: p.EUNIVERSE,
        accountid: r.accountid,
      });
      e !== void 0 && (n.sequenceid = e);
      try {
        return this.m_socket.send(JSON.stringify(n)), !0;
      } catch {
        return !1;
      }
    }
    OnSocketMessage(t) {
      try {
        let e = JSON.parse(t.data);
        if (e.sequenceid) {
          let n = this.m_mapWaitingCallbacks.get(e.sequenceid);
          if (n) {
            this.m_mapWaitingCallbacks.delete(e.sequenceid), n.fnCallback(e);
            return;
          }
        }
      } catch (e) {
        console.error("exception parsing response", e);
      }
    }
    Connect() {
      if (this.m_bReady && this.m_socket?.readyState === WebSocket.OPEN)
        return Promise.resolve();
      if (this.m_promiseConnect) return this.m_promiseConnect;
      let t = new Promise((e, n) => {
        try {
          this.m_socket = new WebSocket(`ws://${v}:${D}/clientsocket/`);
        } catch (s) {
          (this.m_bSecurityException = !0), n(s);
          return;
        }
        (this.m_socket.onerror = (s) => {
          n();
        }),
          (this.m_socket.onmessage = this.OnSocketMessage.bind(this)),
          (this.m_socket.onopen = () => {
            let s = { message: "GetClientInfo" };
            this.SendMsgAndAwaitResponse(s)
              .then((o) => {
                o.success == 1
                  ? ((this.m_ClientInfo.ulVersion = o.clientversion),
                    (this.m_ClientInfo.bFriendsUIEnabled = !!o.friendsui),
                    (this.m_ClientInfo.unAccountID = o.accountid),
                    o.supported_messages &&
                      (this.m_ClientInfo.rgSupportedMessages =
                        o.supported_messages),
                    e())
                  : n();
              })
              .catch(n);
          });
      });
      return (
        (this.m_promiseConnect = t),
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
  u = new l();
window.ClientConnectionAPI = u;
var S = a(I());
var y = a(d());
function x(i) {
  let { appid: t } = i,
    e = `steam://run/${t}`,
    n = S.useCallback(() => {
      u.OpenSteamURL(e).then((s) => {
        s.success || (window.location.href = e);
      });
    }, [e]);
  return (0, y.jsx)(g, {
    onClick: n,
    children: f.Localize("#PlayGameButton_PlayNow"),
  });
}
var V = "/ZIZ5SFDA.png";
export { k as a, q as b, x as c, V as d };
