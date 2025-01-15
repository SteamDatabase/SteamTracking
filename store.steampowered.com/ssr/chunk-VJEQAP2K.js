const CLSTAMP = 9459120;

import { b as Ze } from "./chunk-267RFD4R.js";
import { a as et } from "./chunk-EMSW2G73.js";
import {
  G as Ye,
  a as nt,
  b as i,
  c as o,
  d as p,
  e as l,
  f as u,
  g as _,
  h as d,
  i as c,
  m as Xe,
  n as k,
  r as Je,
  u as g,
  v,
} from "./chunk-T6WVOON4.js";
import { U as H, V as z } from "./chunk-6N5ZMAQM.js";
import { d as $e } from "./chunk-426E7PHQ.js";
import { g as Ke, h as M, j as Ve, l as at, m as T } from "./chunk-I4YNAXHV.js";
import { d as C } from "./chunk-RJVNLONQ.js";
function pt(t) {
  return ["PlayerLinkDetails", t];
}
function lt(t, e) {
  let r =
    typeof e == "number"
      ? Je.InitFromAccountID(e, Ve.EUNIVERSE).ConvertTo64BitString()
      : e;
  return {
    queryKey: pt(r),
    queryFn: async () => (r ? t.load(r) : null),
    enabled: !!r,
  };
}
function Wt(t) {
  let e = Ye(),
    r = Ze(e);
  return $e(lt(r, t));
}
var I = "K1tVsczv3Cw-";
var tt = "N1pGdOcJhsE-";
var F = "AQbn5TKCsiY-";
var S = C(T());
function rt(t) {
  let { children: e, ...r } = t;
  return (0, S.jsx)(H, {
    className: I,
    type: "button",
    ...r,
    children: (0, S.jsx)("span", { children: e }),
  });
}
function Ut(t) {
  let { href: e, children: r } = t;
  return (0, S.jsx)(z, {
    className: I,
    href: e,
    children: (0, S.jsx)("span", { children: r }),
  });
}
function xt(t) {
  let { children: e, ...r } = t;
  return (0, S.jsx)(H, {
    className: F,
    type: "button",
    ...r,
    children: (0, S.jsx)("span", { children: e }),
  });
}
function Ot(t) {
  let { href: e, title: r, children: a } = t;
  return (0, S.jsx)(z, {
    className: F,
    href: e,
    title: r,
    children: (0, S.jsx)("span", { children: a }),
  });
}
function Et(t) {
  let { children: e, ...r } = t;
  return (0, S.jsx)(H, {
    className: tt,
    type: "button",
    ...r,
    children: (0, S.jsx)("span", { children: e }),
  });
}
var st = { success: !0, result: 1 },
  h = class {
    m_connection = new q();
    FailureResult(e = 2) {
      let r = { success: !1, result: e };
      return (
        this.m_connection &&
          !this.m_connection.browser_supported &&
          (r.browser_unsupported = !0),
        this.m_connection &&
          !this.m_connection.connected_to_client &&
          (r.connect_failed = !0),
        e == 7 && (r.call_unsupported = !0),
        r
      );
    }
    BClientConnected() {
      return this.m_connection.Connect().then(
        () => st,
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
      return !this.m_connection.connected_to_client || !this.m_connection.ready
        ? !1
        : this.m_connection.ClientInfo.rgSupportedMessages.indexOf(e) !== -1;
    }
    OpenFriendChatDialog(e) {
      let r = { message: "ShowFriendChatDialog", steamid: e };
      return this.GenericEResultCall(r);
    }
    OpenChatRoomGroupDialog(e, r) {
      let a = { message: "ShowChatRoomGroupDialog", chat_group_id: e };
      return r && (a.chat_room_id = r), this.GenericEResultCall(a);
    }
    ShowChatRoomGroupInvite(e, r = !0) {
      let a = { message: "ShowChatRoomGroupInvite", invite_code: e };
      return this.GenericEResultCall(a, r);
    }
    m_mapCacheSubscribedApp = new Map();
    BIsSubscribedApp(e) {
      if (this.m_mapCacheSubscribedApp.has(e))
        return Promise.resolve(this.m_mapCacheSubscribedApp.get(e));
      let r = { message: "IsSubscribedApp", appid: e };
      return this.GenericEResultCall(r, !0).then((a) => {
        if (a.connect_failed) return;
        let R = a.result == 1;
        return this.m_mapCacheSubscribedApp.set(e, R), R;
      });
    }
    OpenFriendsDialog() {
      let e = { message: "OpenFriendsDialog" };
      return this.GenericEResultCall(e);
    }
    OpenSteamURL(e, r = !1) {
      let a = { message: "OpenSteamURL", url: e };
      return this.GenericEResultCall(a, r);
    }
    BClientAccountMatches() {
      return M.logged_in
        ? M.accountid == this.m_connection.ClientInfo.unAccountID
        : !0;
    }
    GenericEResultCall(e, r = !1) {
      return this.m_connection
        .Connect()
        .then(() =>
          r && !this.BClientAccountMatches()
            ? { success: !1, result: 19, account_mismatch: !0 }
            : this.m_connection
                .SendMsgAndAwaitResponse(e)
                .then((a) =>
                  a.success === 1 ? st : this.FailureResult(a.success),
                ),
        )
        .catch(() => this.FailureResult());
    }
  },
  _t = 27060;
var dt = "127.0.0.1",
  q = class {
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
      return new Promise((r, a) => {
        let R = this.m_iCallSeq++;
        this.BSendMsg(e, R)
          ? this.m_mapWaitingCallbacks.set(R, {
              iSeq: R,
              fnCallback: r,
              fnError: a,
            })
          : a();
      });
    }
    BSendMsg(e, r) {
      if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN)
        return !1;
      let a = Object.assign({}, e, {
        universe: Ke.EUNIVERSE,
        accountid: M.accountid,
      });
      r !== void 0 && (a.sequenceid = r);
      try {
        return this.m_socket.send(JSON.stringify(a)), !0;
      } catch {
        return !1;
      }
    }
    OnSocketMessage(e) {
      try {
        let r = JSON.parse(e.data);
        if (r.sequenceid) {
          let a = this.m_mapWaitingCallbacks.get(r.sequenceid);
          if (a) {
            this.m_mapWaitingCallbacks.delete(r.sequenceid), a.fnCallback(r);
            return;
          }
        }
      } catch (r) {
        console.error("exception parsing response", r);
      }
    }
    Connect() {
      if (this.m_bReady && this.m_socket?.readyState === WebSocket.OPEN)
        return Promise.resolve();
      if (this.m_promiseConnect) return this.m_promiseConnect;
      let e = new Promise((r, a) => {
        try {
          this.m_socket = new WebSocket(`ws://${dt}:${_t}/clientsocket/`);
        } catch (R) {
          (this.m_bSecurityException = !0), a(R);
          return;
        }
        (this.m_socket.onerror = (R) => {
          a();
        }),
          (this.m_socket.onmessage = this.OnSocketMessage.bind(this)),
          (this.m_socket.onopen = () => {
            let R = { message: "GetClientInfo" };
            this.SendMsgAndAwaitResponse(R)
              .then((f) => {
                f.success == 1
                  ? ((this.m_ClientInfo.ulVersion = f.clientversion),
                    (this.m_ClientInfo.bFriendsUIEnabled = !!f.friendsui),
                    (this.m_ClientInfo.unAccountID = f.accountid),
                    f.supported_messages &&
                      (this.m_ClientInfo.rgSupportedMessages =
                        f.supported_messages),
                    r())
                  : a();
              })
              .catch(a);
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
  },
  W = new h();
window.ClientConnectionAPI = W;
var it = C(at());
var ot = C(T());
function Xt(t) {
  let { appid: e } = t,
    r = `steam://run/${e}`,
    a = it.useCallback(() => {
      W.OpenSteamURL(r).then((R) => {
        R.success || (window.location.href = r);
      });
    }, [r]);
  return (0, ot.jsx)(rt, {
    onClick: a,
    children: et.Localize("#PlayGameButton_PlayNow"),
  });
}
var s = C(nt());
var n = s.Message;
var D = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.activation_code || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              activation_code: { n: 1, br: i.readString, bw: o.writeString },
              purchase_platform: { n: 2, br: i.readInt32, bw: o.writeInt32 },
              is_request_from_client: { n: 3, br: i.readBool, bw: o.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_RegisterCDKey_Request";
    }
  },
  A = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.transactionid || c(t.M()),
        n.initialize(this, e, 0, -1, [18], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              transactionid: {
                n: 1,
                br: i.readUint64String,
                bw: o.writeUint64String,
              },
              packageid: { n: 2, br: i.readUint32, bw: o.writeUint32 },
              purchase_status: { n: 3, br: i.readUint32, bw: o.writeUint32 },
              result_detail: { n: 4, br: i.readUint32, bw: o.writeUint32 },
              transaction_time: { n: 5, br: i.readUint32, bw: o.writeUint32 },
              payment_method: { n: 6, br: i.readUint32, bw: o.writeUint32 },
              base_price: {
                n: 7,
                br: i.readUint64String,
                bw: o.writeUint64String,
              },
              total_discount: {
                n: 8,
                br: i.readUint64String,
                bw: o.writeUint64String,
              },
              tax: { n: 9, br: i.readUint64String, bw: o.writeUint64String },
              shipping: {
                n: 10,
                br: i.readUint64String,
                bw: o.writeUint64String,
              },
              currency_code: { n: 11, br: i.readUint32, bw: o.writeUint32 },
              country_code: { n: 12, br: i.readString, bw: o.writeString },
              error_headline: { n: 13, br: i.readString, bw: o.writeString },
              error_string: { n: 14, br: i.readString, bw: o.writeString },
              error_link_text: { n: 15, br: i.readString, bw: o.writeString },
              error_link_url: { n: 16, br: i.readString, bw: o.writeString },
              error_appid: { n: 17, br: i.readUint32, bw: o.writeUint32 },
              line_items: { n: 18, c: U, r: !0, q: !0 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_PurchaseReceiptInfo";
    }
  },
  U = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.packageid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              packageid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              appid: { n: 2, br: i.readUint32, bw: o.writeUint32 },
              line_item_description: {
                n: 3,
                br: i.readString,
                bw: o.writeString,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_PurchaseReceiptInfo_LineItem";
    }
  },
  x = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.purchase_result_details || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              purchase_result_details: {
                n: 1,
                br: i.readInt32,
                bw: o.writeInt32,
              },
              purchase_receipt_info: { n: 2, c: A },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_RegisterCDKey_Response";
    }
  },
  O = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.language || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { language: { n: 1, br: i.readString, bw: o.writeString } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetMostPopularTags_Request";
    }
  },
  E = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.tags || c(t.M()),
        n.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { tags: { n: 1, c: N, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetMostPopularTags_Response";
    }
  },
  N = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.tagid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              tagid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              name: { n: 2, br: i.readString, bw: o.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetMostPopularTags_Response_Tag";
    }
  },
  Q = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.language || c(t.M()),
        n.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              language: { n: 1, br: i.readString, bw: o.writeString },
              tagids: {
                n: 2,
                r: !0,
                q: !0,
                br: i.readUint32,
                pbr: i.readPackedUint32,
                bw: o.writeRepeatedUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetLocalizedNameForTags_Request";
    }
  },
  L = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.tags || c(t.M()),
        n.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { tags: { n: 1, c: K, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetLocalizedNameForTags_Response";
    }
  },
  K = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.tagid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              tagid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              english_name: { n: 2, br: i.readString, bw: o.writeString },
              name: { n: 3, br: i.readString, bw: o.writeString },
              normalized_name: { n: 4, br: i.readString, bw: o.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetLocalizedNameForTags_Response_Tag";
    }
  },
  V = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.language || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              language: { n: 1, br: i.readString, bw: o.writeString },
              have_version_hash: { n: 2, br: i.readString, bw: o.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetTagList_Request";
    }
  },
  $ = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.version_hash || c(t.M()),
        n.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              version_hash: { n: 1, br: i.readString, bw: o.writeString },
              tags: { n: 2, c: X, r: !0, q: !0 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetTagList_Response";
    }
  },
  X = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.tagid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              tagid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              name: { n: 2, br: i.readString, bw: o.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetTagList_Response_Tag";
    }
  },
  B = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.os_win || c(t.M()),
        n.initialize(this, e, 0, -1, [10, 16], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              os_win: { n: 4, br: i.readBool, bw: o.writeBool },
              os_mac: { n: 5, br: i.readBool, bw: o.writeBool },
              os_linux: { n: 6, br: i.readBool, bw: o.writeBool },
              full_controller_support: {
                n: 7,
                br: i.readBool,
                bw: o.writeBool,
              },
              native_steam_controller: {
                n: 8,
                br: i.readBool,
                bw: o.writeBool,
              },
              include_coming_soon: { n: 9, br: i.readBool, bw: o.writeBool },
              excluded_tagids: {
                n: 10,
                r: !0,
                q: !0,
                br: i.readUint32,
                pbr: i.readPackedUint32,
                bw: o.writeRepeatedUint32,
              },
              exclude_early_access: { n: 11, br: i.readBool, bw: o.writeBool },
              exclude_videos: { n: 12, br: i.readBool, bw: o.writeBool },
              exclude_software: { n: 13, br: i.readBool, bw: o.writeBool },
              exclude_dlc: { n: 14, br: i.readBool, bw: o.writeBool },
              exclude_soundtracks: { n: 15, br: i.readBool, bw: o.writeBool },
              featured_tagids: {
                n: 16,
                r: !0,
                q: !0,
                br: i.readUint32,
                pbr: i.readPackedUint32,
                bw: o.writeRepeatedUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStoreDiscoveryQueueSettings";
    }
  },
  J = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.queue_type || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              queue_type: { n: 1, br: i.readEnum, bw: o.writeEnum },
              country_code: { n: 2, br: i.readString, bw: o.writeString },
              rebuild_queue: { n: 3, br: i.readBool, bw: o.writeBool },
              settings_changed: { n: 4, br: i.readBool, bw: o.writeBool },
              settings: { n: 5, c: B },
              rebuild_queue_if_stale: { n: 6, br: i.readBool, bw: o.writeBool },
              ignore_user_preferences: {
                n: 8,
                br: i.readBool,
                bw: o.writeBool,
              },
              no_experimental_results: {
                n: 9,
                br: i.readBool,
                bw: o.writeBool,
              },
              experimental_cohort: {
                n: 10,
                br: i.readUint32,
                bw: o.writeUint32,
              },
              debug_get_solr_query: { n: 11, br: i.readBool, bw: o.writeBool },
              store_page_filter: { n: 12, c: v },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetDiscoveryQueue_Request";
    }
  },
  Y = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appids || c(t.M()),
        n.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appids: {
                n: 1,
                r: !0,
                q: !0,
                br: i.readUint32,
                pbr: i.readPackedUint32,
                bw: o.writeRepeatedUint32,
              },
              country_code: { n: 2, br: i.readString, bw: o.writeString },
              settings: { n: 3, c: B },
              skipped: { n: 4, br: i.readInt32, bw: o.writeInt32 },
              exhausted: { n: 5, br: i.readBool, bw: o.writeBool },
              experimental_cohort: {
                n: 6,
                br: i.readUint32,
                bw: o.writeUint32,
              },
              debug_solr_query: { n: 7, br: i.readString, bw: o.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetDiscoveryQueue_Response";
    }
  },
  Z = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.queue_type || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              queue_type: { n: 1, br: i.readEnum, bw: o.writeEnum },
              store_page_filter: { n: 2, c: v },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetDiscoveryQueueSettings_Request";
    }
  },
  ee = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.country_code || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              country_code: { n: 1, br: i.readString, bw: o.writeString },
              settings: { n: 2, c: B },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetDiscoveryQueueSettings_Response";
    }
  },
  te = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.queue_type || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              queue_type: { n: 1, br: i.readEnum, bw: o.writeEnum },
              appid: { n: 2, br: i.readUint32, bw: o.writeUint32 },
              store_page_filter: { n: 3, c: v },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_SkipDiscoveryQueueItem_Request";
    }
  },
  re = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), n.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_SkipDiscoveryQueueItem_Response";
    }
  },
  se = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              store_appid: { n: 2, br: i.readUint32, bw: o.writeUint32 },
              beta_appid: { n: 3, br: i.readUint32, bw: o.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetUserGameInterestState_Request";
    }
  },
  ie = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.owned || c(t.M()),
        n.initialize(this, e, 0, -1, [5, 6, 7, 8, 10], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              owned: { n: 1, br: i.readBool, bw: o.writeBool },
              wishlist: { n: 2, br: i.readBool, bw: o.writeBool },
              ignored: { n: 3, br: i.readBool, bw: o.writeBool },
              following: { n: 4, br: i.readBool, bw: o.writeBool },
              in_queues: {
                n: 5,
                r: !0,
                q: !0,
                br: i.readEnum,
                pbr: i.readPackedEnum,
                bw: o.writeRepeatedEnum,
              },
              queues_with_skip: {
                n: 6,
                r: !0,
                q: !0,
                br: i.readEnum,
                pbr: i.readPackedEnum,
                bw: o.writeRepeatedEnum,
              },
              queue_items_remaining: {
                n: 7,
                r: !0,
                q: !0,
                br: i.readInt32,
                pbr: i.readPackedInt32,
                bw: o.writeRepeatedInt32,
              },
              queue_items_next_appid: {
                n: 8,
                r: !0,
                q: !0,
                br: i.readUint32,
                pbr: i.readPackedUint32,
                bw: o.writeRepeatedUint32,
              },
              temporarily_owned: { n: 9, br: i.readBool, bw: o.writeBool },
              queues: { n: 10, c: oe, r: !0, q: !0 },
              ignored_reason: { n: 11, br: i.readInt32, bw: o.writeInt32 },
              beta_status: { n: 12, br: i.readEnum, bw: o.writeEnum },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetUserGameInterestState_Response";
    }
  },
  oe = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.type || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              type: { n: 1, br: i.readEnum, bw: o.writeEnum },
              skipped: { n: 2, br: i.readBool, bw: o.writeBool },
              items_remaining: { n: 3, br: i.readInt32, bw: o.writeInt32 },
              next_appid: { n: 4, br: i.readUint32, bw: o.writeUint32 },
              experimental_cohort: {
                n: 5,
                br: i.readUint32,
                bw: o.writeUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetUserGameInterestState_Response_InQueue";
    }
  },
  ae = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              report_type: { n: 2, br: i.readEnum, bw: o.writeEnum },
              report: { n: 3, br: i.readString, bw: o.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_ReportApp_Request";
    }
  },
  ne = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), n.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_ReportApp_Response";
    }
  },
  w = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.primary_language || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              primary_language: { n: 1, br: i.readInt32, bw: o.writeInt32 },
              secondary_languages: {
                n: 2,
                br: i.readUint32,
                bw: o.writeUint32,
              },
              platform_windows: { n: 3, br: i.readBool, bw: o.writeBool },
              platform_mac: { n: 4, br: i.readBool, bw: o.writeBool },
              platform_linux: { n: 5, br: i.readBool, bw: o.writeBool },
              timestamp_updated: { n: 8, br: i.readUint32, bw: o.writeUint32 },
              hide_store_broadcast: { n: 9, br: i.readBool, bw: o.writeBool },
              review_score_preference: {
                n: 10,
                br: i.readEnum,
                bw: o.writeEnum,
              },
              timestamp_content_descriptor_preferences_updated: {
                n: 11,
                br: i.readInt32,
                bw: o.writeInt32,
              },
              provide_deck_feedback: { n: 12, br: i.readEnum, bw: o.writeEnum },
              additional_languages: {
                n: 13,
                br: i.readString,
                bw: o.writeString,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_UserPreferences";
    }
  },
  G = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.tags_to_exclude || c(t.M()),
        n.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { tags_to_exclude: { n: 1, c: pe, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_UserTagPreferences";
    }
  },
  pe = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.tagid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              tagid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              name: { n: 2, br: i.readString, bw: o.writeString },
              timestamp_added: { n: 3, br: i.readUint32, bw: o.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_UserTagPreferences_Tag";
    }
  },
  le = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), n.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetStorePreferences_Request";
    }
  },
  ue = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.preferences || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              preferences: { n: 1, c: w },
              tag_preferences: { n: 2, c: G },
              content_descriptor_preferences: { n: 3, c: k },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetStorePreferences_Response";
    }
  },
  _e = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.num_apps || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              num_apps: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              num_top_friends: { n: 2, br: i.readUint32, bw: o.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetTrendingAppsAmongFriends_Request";
    }
  },
  de = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.trending_apps || c(t.M()),
        n.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { trending_apps: { n: 1, c: ce, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetTrendingAppsAmongFriends_Response";
    }
  },
  ce = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || c(t.M()),
        n.initialize(this, e, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              steamids_top_friends: {
                n: 2,
                r: !0,
                q: !0,
                br: i.readUint64String,
                pbr: i.readPackedUint64String,
                bw: o.writeRepeatedUint64String,
              },
              total_friends: { n: 3, br: i.readUint32, bw: o.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetTrendingAppsAmongFriends_Response_TrendingAppData";
    }
  },
  me = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.packages_to_reserve || c(t.M()),
        n.initialize(this, e, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              packages_to_reserve: {
                n: 1,
                r: !0,
                q: !0,
                br: i.readUint32,
                pbr: i.readPackedUint32,
                bw: o.writeRepeatedUint32,
              },
              packages_to_unreserve: {
                n: 2,
                r: !0,
                q: !0,
                br: i.readUint32,
                pbr: i.readPackedUint32,
                bw: o.writeRepeatedUint32,
              },
              country_code: { n: 3, br: i.readString, bw: o.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_UpdatePackageReservations_Request";
    }
  },
  Pe = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.reservation_status || c(t.M()),
        n.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { reservation_status: { n: 1, c: Xe, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_UpdatePackageReservations_Response";
    }
  },
  j = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.edistributor || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              edistributor: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              product_identifier: { n: 2, br: i.readString, bw: o.writeString },
              start_queue_position: {
                n: 3,
                br: i.readUint32,
                bw: o.writeUint32,
              },
              rtime_estimated_notification: {
                n: 4,
                br: i.readUint32,
                bw: o.writeUint32,
              },
              localization_token: { n: 5, br: i.readString, bw: o.writeString },
              accountid: { n: 6, br: i.readUint32, bw: o.writeUint32 },
              rtime_created: { n: 7, br: i.readUint32, bw: o.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CReservationPositionMessage";
    }
  },
  ge = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.settings || c(t.M()),
        n.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { settings: { n: 1, c: j, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_SetReservationPositionMessage_Request";
    }
  },
  Re = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), n.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_SetReservationPositionMessage_Response";
    }
  },
  Se = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.edistributor || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              edistributor: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              product_identifier: { n: 2, br: i.readString, bw: o.writeString },
              start_queue_position: {
                n: 3,
                br: i.readUint32,
                bw: o.writeUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_DeleteReservationPositionMessage_Request";
    }
  },
  be = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), n.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_DeleteReservationPositionMessage_Response";
    }
  },
  ye = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), n.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetAllReservationPositionMessages_Request";
    }
  },
  fe = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.settings || c(t.M()),
        n.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { settings: { n: 1, c: j, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetAllReservationPositionMessages_Response";
    }
  },
  Ce = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), n.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_ReloadAllReservationPositionMessages_Notification";
    }
  },
  ve = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.accountid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              accountid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              browserid: {
                n: 2,
                br: i.readUint64String,
                bw: o.writeUint64String,
              },
              backfill_source: { n: 3, br: i.readEnum, bw: o.writeEnum },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_MigratePartnerLinkTracking_Notification";
    }
  },
  Be = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              feedback: { n: 2, br: i.readEnum, bw: o.writeEnum },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamDeckCompatibility_SetFeedback_Request";
    }
  },
  Me = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), n.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamDeckCompatibility_SetFeedback_Response";
    }
  },
  Te = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { appid: { n: 1, br: i.readUint32, bw: o.writeUint32 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamDeckCompatibility_ShouldPrompt_Request";
    }
  },
  He = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.prompt || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              prompt: { n: 1, br: i.readBool, bw: o.writeBool },
              feedback_eligible: { n: 2, br: i.readBool, bw: o.writeBool },
              existing_feedback: { n: 3, br: i.readEnum, bw: o.writeEnum },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CSteamDeckCompatibility_ShouldPrompt_Response";
    }
  },
  we = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              demo_appid: { n: 2, br: i.readUint32, bw: o.writeUint32 },
              allow_late_firing: { n: 3, br: i.readBool, bw: o.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetWishlistDemoEmailStatus_Request";
    }
  },
  Ge = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.can_fire || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              can_fire: { n: 1, d: !1, br: i.readBool, bw: o.writeBool },
              time_staged: { n: 2, br: i.readUint32, bw: o.writeUint32 },
              demo_release_date: { n: 3, br: i.readUint32, bw: o.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetWishlistDemoEmailStatus_Response";
    }
  },
  je = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              demo_appid: { n: 2, br: i.readUint32, bw: o.writeUint32 },
              allow_late_firing: { n: 3, br: i.readBool, bw: o.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_QueueWishlistDemoEmailToFire_Request";
    }
  },
  ke = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), n.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return e ? { $jspbMessageInstance: r } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return e;
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {}
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_QueueWishlistDemoEmailToFire_Response";
    }
  },
  ze = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              steamid: {
                n: 1,
                br: i.readFixed64String,
                bw: o.writeFixed64String,
              },
              queue_type: { n: 2, br: i.readEnum, bw: o.writeEnum },
              store_page_filter: { n: 3, c: v },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetDiscoveryQueueSkippedApps_Request";
    }
  },
  Ie = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appids || c(t.M()),
        n.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appids: {
                n: 1,
                r: !0,
                q: !0,
                br: i.readUint32,
                pbr: i.readPackedUint32,
                bw: o.writeRepeatedUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_GetDiscoveryQueueSkippedApps_Response";
    }
  },
  Fe = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.preferences || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              preferences: { n: 1, c: w },
              tag_preferences: { n: 2, c: G },
              content_descriptor_preferences: { n: 3, c: k },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CStore_StorePreferencesChanged_Notification";
    }
  },
  he = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              steamid: {
                n: 2,
                br: i.readFixed64String,
                bw: o.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_RequestInvite_Request";
    }
  },
  qe = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invites_remaining || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              invites_remaining: { n: 1, br: i.readInt32, bw: o.writeInt32 },
              status: { n: 2, br: i.readEnum, bw: o.writeEnum },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_RequestInvite_Response";
    }
  },
  We = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invite_ids || c(t.M()),
        n.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              invite_ids: {
                n: 1,
                r: !0,
                q: !0,
                br: i.readUint64String,
                pbr: i.readPackedUint64String,
                bw: o.writeRepeatedUint64String,
              },
              status: { n: 2, br: i.readEnum, bw: o.writeEnum },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_UpdateInvites_Request";
    }
  },
  De = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invites_updated || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              invites_updated: { n: 1, br: i.readUint32, bw: o.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_UpdateInvites_Response";
    }
  },
  Ae = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invite_id || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              invite_id: {
                n: 1,
                br: i.readUint64String,
                bw: o.writeUint64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_GetInvites_Request";
    }
  },
  Ue = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invites || c(t.M()),
        n.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { invites: { n: 1, c: xe, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_GetInvites_Response";
    }
  },
  xe = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invite_id || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              invite_id: {
                n: 1,
                br: i.readUint64String,
                bw: o.writeUint64String,
              },
              appid: { n: 2, br: i.readUint32, bw: o.writeUint32 },
              steamid_inviter: {
                n: 3,
                br: i.readFixed64String,
                bw: o.writeFixed64String,
              },
              status: { n: 4, br: i.readEnum, bw: o.writeEnum },
              time_created: { n: 5, br: i.readUint32, bw: o.writeUint32 },
              app_name: { n: 6, br: i.readString, bw: o.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_GetInvites_Response_Invite";
    }
  },
  Oe = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { appid: { n: 1, br: i.readUint32, bw: o.writeUint32 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_GetUserStatus_Request";
    }
  },
  Ee = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.results || c(t.M()),
        n.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { results: { n: 1, c: Ne, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_GetUserStatus_Response";
    }
  },
  Ne = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              appid: { n: 1, br: i.readUint32, bw: o.writeUint32 },
              status: { n: 2, br: i.readEnum, bw: o.writeEnum },
              invites_remaining: { n: 3, br: i.readInt32, bw: o.writeInt32 },
              time_joined: { n: 4, br: i.readUint32, bw: o.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_GetUserStatus_Response_AppStatus";
    }
  },
  Qe = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || c(t.M()),
        n.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { appid: { n: 1, br: i.readUint32, bw: o.writeUint32 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_GetInviteOptions_Request";
    }
  },
  Le = class t extends n {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.ineligible_friends || c(t.M()),
        n.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              ineligible_friends: {
                n: 1,
                r: !0,
                q: !0,
                br: i.readUint32,
                pbr: i.readPackedUint32,
                bw: o.writeRepeatedUint32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = p(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, r) {
      return u(t.M(), e, r);
    }
    static fromObject(e) {
      return l(t.M(), e);
    }
    static deserializeBinary(e) {
      let r = new s.BinaryReader(e),
        a = new t();
      return t.deserializeBinaryFromReader(a, r);
    }
    static deserializeBinaryFromReader(e, r) {
      return _(t.MBF(), e, r);
    }
    serializeBinary() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, r) {
      d(t.M(), e, r);
    }
    serializeBase64String() {
      var e = new s.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CPlaytest_GetInviteOptions_Response";
    }
  },
  ct;
((kt) => {
  function t(m, P) {
    return m.SendMsg("Store.RegisterCDKey#1", g(D, P), x, { ePrivilege: 1 });
  }
  kt.RegisterCDKey = t;
  function e(m, P) {
    return m.SendMsg("Store.GetMostPopularTags#1", g(O, P), E, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  kt.GetMostPopularTags = e;
  function r(m, P) {
    return m.SendMsg("Store.GetLocalizedNameForTags#1", g(Q, P), L, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  kt.GetLocalizedNameForTags = r;
  function a(m, P) {
    return m.SendMsg("Store.GetTagList#1", g(V, P), $, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
    });
  }
  kt.GetTagList = a;
  function R(m, P) {
    return m.SendMsg("Store.GetDiscoveryQueue#1", g(J, P), Y, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  kt.GetDiscoveryQueue = R;
  function f(m, P) {
    return m.SendMsg("Store.GetDiscoveryQueueSettings#1", g(Z, P), ee, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  kt.GetDiscoveryQueueSettings = f;
  function b(m, P) {
    return m.SendMsg("Store.SkipDiscoveryQueueItem#1", g(te, P), re, {
      ePrivilege: 1,
    });
  }
  kt.SkipDiscoveryQueueItem = b;
  function y(m, P) {
    return m.SendMsg("Store.GetUserGameInterestState#1", g(se, P), ie, {
      ePrivilege: 1,
    });
  }
  kt.GetUserGameInterestState = y;
  function Rt(m, P) {
    return m.SendMsg("Store.GetDiscoveryQueueSkippedApps#1", g(ze, P), Ie, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  kt.GetDiscoveryQueueSkippedApps = Rt;
  function St(m, P) {
    return m.SendMsg("Store.ReportApp#1", g(ae, P), ne, { ePrivilege: 3 });
  }
  kt.ReportApp = St;
  function bt(m, P) {
    return m.SendMsg("Store.GetStorePreferences#1", g(le, P), ue, {
      ePrivilege: 1,
    });
  }
  kt.GetStorePreferences = bt;
  function yt(m, P) {
    return m.SendMsg("Store.GetTrendingAppsAmongFriends#1", g(_e, P), de, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  kt.GetTrendingAppsAmongFriends = yt;
  function ft(m, P) {
    return m.SendNotification("Store.MigratePartnerLinkTracking#1", g(ve, P), {
      ePrivilege: 1,
    });
  }
  kt.MigratePartnerLinkTracking = ft;
  function Ct(m, P) {
    return m.SendMsg("Store.UpdatePackageReservations#1", g(me, P), Pe, {
      ePrivilege: 1,
    });
  }
  kt.UpdatePackageReservations = Ct;
  function vt(m, P) {
    return m.SendMsg("Store.GetWishlistDemoEmailStatus#1", g(we, P), Ge, {
      ePrivilege: 1,
    });
  }
  kt.GetWishlistDemoEmailStatus = vt;
  function Bt(m, P) {
    return m.SendMsg("Store.QueueWishlistDemoEmailToFire#1", g(je, P), ke, {
      ePrivilege: 1,
    });
  }
  kt.QueueWishlistDemoEmailToFire = Bt;
  function Mt(m, P) {
    return m.SendMsg("Store.SetReservationPositionMessage#1", g(ge, P), Re, {
      ePrivilege: 4,
    });
  }
  kt.SetReservationPositionMessage = Mt;
  function Tt(m, P) {
    return m.SendMsg("Store.DeleteReservationPositionMessage#1", g(Se, P), be, {
      ePrivilege: 4,
    });
  }
  kt.DeleteReservationPositionMessage = Tt;
  function Ht(m, P) {
    return m.SendMsg(
      "Store.GetAllReservationPositionMessages#1",
      g(ye, P),
      fe,
      { bConstMethod: !0, ePrivilege: 4 },
    );
  }
  kt.GetAllReservationPositionMessages = Ht;
  function wt(m, P) {
    return m.SendNotification(
      "Store.ReloadAllReservationPositionMessages#1",
      g(Ce, P),
      { ePrivilege: 4 },
    );
  }
  kt.ReloadAllReservationPositionMessages = wt;
  function Gt(m, P) {
    return m.SendMsg("Store.SetCompatibilityFeedback#1", g(Be, P), Me, {
      ePrivilege: 1,
    });
  }
  kt.SetCompatibilityFeedback = Gt;
  function jt(m, P) {
    return m.SendMsg(
      "Store.ShouldPromptForCompatibilityFeedback#1",
      g(Te, P),
      He,
      { ePrivilege: 1 },
    );
  }
  kt.ShouldPromptForCompatibilityFeedback = jt;
})((ct ||= {}));
var mt;
((e) =>
  (e.NotifyStorePreferencesChangedHandler = {
    name: "StoreClient.NotifyStorePreferencesChanged#1",
    request: Fe,
  }))((mt ||= {}));
var Pt;
((f) => {
  function t(b, y) {
    return b.SendMsg("Playtest.RequestInvite#1", g(he, y), qe, {
      ePrivilege: 1,
    });
  }
  f.RequestInvite = t;
  function e(b, y) {
    return b.SendMsg("Playtest.UpdateInvites#1", g(We, y), De, {
      ePrivilege: 1,
    });
  }
  f.UpdateInvites = e;
  function r(b, y) {
    return b.SendMsg("Playtest.GetInvites#1", g(Ae, y), Ue, { ePrivilege: 1 });
  }
  f.GetInvites = r;
  function a(b, y) {
    return b.SendMsg("Playtest.GetUserStatus#1", g(Oe, y), Ee, {
      ePrivilege: 1,
    });
  }
  f.GetUserStatus = a;
  function R(b, y) {
    return b.SendMsg("Playtest.GetInviteOptions#1", g(Qe, y), Le, {
      ePrivilege: 1,
    });
  }
  f.GetInviteOptions = R;
})((Pt ||= {}));
var pr = "/ZIZ5SFDA.png";
export {
  V as a,
  w as b,
  he as c,
  We as d,
  Ae as e,
  Oe as f,
  Qe as g,
  ct as h,
  Pt as i,
  lt as j,
  Wt as k,
  rt as l,
  Ut as m,
  xt as n,
  Ot as o,
  Et as p,
  Xt as q,
  pr as r,
};
