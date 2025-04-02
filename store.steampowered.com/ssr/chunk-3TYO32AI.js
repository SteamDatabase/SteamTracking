const CLSTAMP = 9650136;

import { b as S } from "./chunk-V5BPBZD6.js";
import { A as P } from "./chunk-LO42DGM4.js";
import { H as y, r as R } from "./chunk-UKYUA5SV.js";
import { y as u, z as p } from "./chunk-E3DFKZCX.js";
import { e as g } from "./chunk-6XJQQZ7Z.js";
import { i as f, j as c, l as _, o as l } from "./chunk-C37XGPEG.js";
import { a as v } from "./chunk-4HQPZ5LY.js";
import { d as a } from "./chunk-HHDRG5ZJ.js";
function E(o) {
  return ["PlayerLinkDetails", o];
}
function F(o, t) {
  let e =
    typeof t == "number"
      ? R.InitFromAccountID(t, _.EUNIVERSE).ConvertTo64BitString()
      : t;
  return {
    queryKey: E(e),
    queryFn: async () => (e ? o.load(e) : null),
    enabled: !!e,
  };
}
function T(o) {
  let t = y(),
    e = S(t);
  return g(F(e, o));
}
var m = "K1tVsczv3Cw-";
var I = "N1pGdOcJhsE-";
var d = "AQbn5TKCsiY-";
var i = a(l());
function B(o) {
  let { children: t, ...e } = o;
  return (0, i.jsx)(u, {
    className: m,
    type: "button",
    ...e,
    children: (0, i.jsx)("span", { children: t }),
  });
}
function V(o) {
  let { href: t, children: e } = o;
  return (0, i.jsx)(p, {
    className: m,
    href: t,
    children: (0, i.jsx)("span", { children: e }),
  });
}
function Q(o) {
  let { children: t, ...e } = o;
  return (0, i.jsx)(u, {
    className: d,
    type: "button",
    ...e,
    children: (0, i.jsx)("span", { children: t }),
  });
}
function z(o) {
  let { href: t, title: e, children: n } = o;
  return (0, i.jsx)(p, {
    className: d,
    href: t,
    title: e,
    children: (0, i.jsx)("span", { children: n }),
  });
}
function J(o) {
  let { children: t, ...e } = o;
  return (0, i.jsx)(u, {
    className: I,
    type: "button",
    ...e,
    children: (0, i.jsx)("span", { children: t }),
  });
}
var k = { success: !0, result: 1 },
  h = class {
    m_connection = new b();
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
        () => k,
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
      return c.logged_in
        ? c.accountid == this.m_connection.ClientInfo.unAccountID
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
                  n.success === 1 ? k : this.FailureResult(n.success),
                ),
        )
        .catch(() => this.FailureResult());
    }
  },
  w = 27060;
var O = "127.0.0.1",
  b = class {
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
        universe: f.EUNIVERSE,
        accountid: c.accountid,
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
          this.m_socket = new WebSocket(`ws://${O}:${w}/clientsocket/`);
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
              .then((r) => {
                r.success == 1
                  ? ((this.m_ClientInfo.ulVersion = r.clientversion),
                    (this.m_ClientInfo.bFriendsUIEnabled = !!r.friendsui),
                    (this.m_ClientInfo.unAccountID = r.accountid),
                    r.supported_messages &&
                      (this.m_ClientInfo.rgSupportedMessages =
                        r.supported_messages),
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
  C = new h();
window.ClientConnectionAPI = C;
var G = a(v());
var A = a(l());
function ee(o) {
  let { appid: t } = o,
    e = `steam://run/${t}`,
    n = G.useCallback(() => {
      C.OpenSteamURL(e).then((s) => {
        s.success || (window.location.href = e);
      });
    }, [e]);
  return (0, A.jsx)(B, {
    onClick: n,
    children: P.Localize("#PlayGameButton_PlayNow"),
  });
}
var oe = "/ZIZ5SFDA.png";
export {
  F as a,
  T as b,
  B as c,
  V as d,
  Q as e,
  z as f,
  J as g,
  ee as h,
  oe as i,
};
