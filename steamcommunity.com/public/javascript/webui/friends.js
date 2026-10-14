/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./broadcastapp.js?contenthash=BrXPi6OD",
      "./rolldown-runtime.js?contenthash=DJ-tr2kv",
      "./localization.js?contenthash=Br1tNTwO",
      "./shared_dialog.js?contenthash=XShelZHx",
      "./webpackinit.js?contenthash=DGcw2nWL",
      "../../css/webui/shared_dialog2.css?contenthash=Cdtc2j7x",
      "./friendsui_desktopapp.js?contenthash=-UKzBiFP",
      "./defaultappheader.js?contenthash=DQleaHiO",
      "./broadcastwatchstore.js?contenthash=DP2g9Lbd",
      "../../css/webui/defaultappheader.css?contenthash=DwpeiF5o",
      "../../css/webui/friendsui_desktopapp.css?contenthash=CQUAR_ZK",
      "./broadcastplayer.js?contenthash=BvrqjcJF",
      "../../css/webui/broadcastplayer.css?contenthash=D30QnQM5",
      "../../css/webui/broadcastapp.css?contenthash=DLwrs7u4",
    ]),
) => i.map((i) => d[i]);
/* Third-party software licenses can be found at licenses.txt */
import { o as e, t } from "./rolldown-runtime.js?contenthash=DJ-tr2kv";
import { t as n } from "./_rolldown_dynamic_import_helper.js?contenthash=CTnqBgWP";
import {
  At as r,
  B as i,
  Bn as a,
  Bt as o,
  Ct as s,
  En as c,
  H as l,
  I as u,
  J as d,
  Ot as f,
  T as p,
  Vt as m,
  W as h,
  Wt as g,
  a as _,
  b as v,
  kn as y,
  kt as b,
  n as x,
  on as S,
  q as C,
  sn as w,
  w as T,
} from "./localization.js?contenthash=Br1tNTwO";
import { Qs as E } from "./shared_dialog.js?contenthash=XShelZHx";
import {
  A as ee,
  C as te,
  D as ne,
  E as D,
  O,
  S as k,
  T as A,
  d as j,
  k as re,
  n as ie,
  o as ae,
  r as M,
  t as oe,
  w as se,
  x as ce,
  y as le,
} from "./friendsui_desktopapp.js?contenthash=-UKzBiFP";
import { c as N } from "./defaultappheader.js?contenthash=DQleaHiO";
import { l as P, u as ue } from "./webpackinit.js?contenthash=DGcw2nWL";
import {
  E as de,
  w as fe,
} from "./broadcastwatchstore.js?contenthash=DP2g9Lbd";
function pe(e) {
  return `unknown EMsg ( ` + e + ` )`;
}
var F = e(fe()),
  me = class {
    m_bRunOnce = !1;
    m_ClientConnectionCallbacks = new y();
    m_mapServerTypeCallbacks = new Map();
    constructor(e = !1) {
      this.m_bRunOnce = e;
    }
    RunCallbacks(e, ...t) {
      e === void 0
        ? (this.m_ClientConnectionCallbacks.Dispatch(...t),
          this.m_bRunOnce &&
            this.m_ClientConnectionCallbacks.ClearAllCallbacks())
        : this.m_mapServerTypeCallbacks.has(e) &&
          (this.m_mapServerTypeCallbacks.get(e).Dispatch(...t),
          this.m_bRunOnce && this.m_mapServerTypeCallbacks.delete(e));
    }
    RunAllCallbacks(e, ...t) {
      this.RunCallbacks(void 0, ...t),
        e.forEach((e) => this.RunCallbacks(e, ...t));
    }
    AddCallback(e, t) {
      let n = this.m_ClientConnectionCallbacks;
      return (
        t !== void 0 &&
          (this.m_mapServerTypeCallbacks.has(t) ||
            this.m_mapServerTypeCallbacks.set(t, new y()),
          (n = this.m_mapServerTypeCallbacks.get(t))),
        n.Register(e)
      );
    }
  };
function he(e, t) {
  return () => {
    try {
      e();
    } catch (e) {
      console.error(`Error in ${t} callback:`, e);
    }
  };
}
function I(e, t) {
  return (...n) => {
    try {
      e(...n);
    } catch (e) {
      console.error(`Error in ${t} callback:`, e);
    }
  };
}
var L = class {
  m_steamid = new P();
  m_bLoggedOn = !1;
  m_bCompletedInitialConnect = !1;
  m_unAccountFlags = 0;
  m_strIPCountry = ``;
  m_strPersonaName = ``;
  m_rtReconnectThrottleStart = 0;
  m_rtReconnectThrottleExpiration = 0;
  m_bConnected = !1;
  m_bConnectionFailed = !1;
  m_ServiceTransport;
  m_onConnect;
  m_setConnectedServers = new Set();
  m_callbacksOnConnectOneTime = new me(!0);
  m_callbacksOnConnect = new me();
  m_callbacksOnDisconnect = new me();
  m_callbacksOnDisconnectOneTime = new me(!0);
  m_bForceDisconnect = !1;
  m_bPerformedInitialClockAdjustment = !1;
  m_nWallClockDriftMS = 0;
  m_nPerfClockServerMSOffset = new Date().getTime() - performance.now();
  m_messageHandlers = new le();
  constructor() {
    C(this),
      (this.m_ServiceTransport = {
        SendMsg: (e, t, n) => (
          (t.GetEMsg() === void 0 || t.GetEMsg() != 9804) && t.SetEMsg(151),
          t.Hdr().set_target_job_name(e),
          this.SendMsgAndAwaitResponse(t, n)
        ),
        SendNotification: (e, t) => (
          (t.GetEMsg() === void 0 || t.GetEMsg() != 9804) && t.SetEMsg(151),
          t.Hdr().set_target_job_name(e),
          this.Send(t)
        ),
        MakeReady: this.MakeReady.bind(this),
      }),
      window &&
        window.addEventListener &&
        window.addEventListener(`unload`, (e) => {
          this.ForceDisconnect();
        });
  }
  get steamid() {
    return this.m_steamid;
  }
  get logged_on() {
    return this.m_bLoggedOn;
  }
  get persona_name() {
    return this.m_strPersonaName;
  }
  get messageHandlers() {
    return this.m_messageHandlers;
  }
  get rtReconnectThrottleStart() {
    return this.m_rtReconnectThrottleStart;
  }
  get rtReconnectThrottleExpiration() {
    return this.m_rtReconnectThrottleExpiration;
  }
  BDisconnected() {
    return !this.logged_on && this.m_steamid.BIsValid();
  }
  BConnectedToServer(e) {
    return e === void 0 ? this.m_bLoggedOn : this.m_setConnectedServers.has(e);
  }
  get has_completed_initial_connect() {
    return this.m_bCompletedInitialConnect;
  }
  get account_flags() {
    return this.m_unAccountFlags;
  }
  GetServiceTransport() {
    return this.m_ServiceTransport;
  }
  GetAnonymousServiceTransport() {
    return this.m_ServiceTransport;
  }
  MakeReady() {
    return SteamClient.User.Connect();
  }
  RunWhenLoggedOn(e, t) {
    let n = he(e, `RunWhenLoggedOn`);
    this.BConnectedToServer(t)
      ? n()
      : this.m_callbacksOnConnectOneTime.AddCallback(n, t);
  }
  WaitUntilLoggedOn() {
    return new Promise((e) => this.RunWhenLoggedOn(e));
  }
  AddOnLogonCallback(e, t) {
    let n = () => {
      try {
        let n = e();
        n && this.m_callbacksOnDisconnectOneTime.AddCallback(n, t);
      } catch (e) {
        console.error(`Error in AddOnLogonCallback callback:`, e);
      }
    };
    return (
      this.BConnectedToServer(t) && n(),
      this.m_callbacksOnConnect.AddCallback(n, t)
    );
  }
  AddOnDisconnectCallback(e, t) {
    let n = I(e, `AddOnDisconnectCallback`);
    return this.m_callbacksOnDisconnect.AddCallback(n, t);
  }
  ForceDisconnect() {
    (this.m_bForceDisconnect = !0), this.Disconnect();
  }
  Send(e) {
    return this.BIsConnected()
      ? (this.DEBUG_LogCMInterfaceActivity(e, `send`), this.SendInternal(e))
      : !1;
  }
  BInternalShouldDispatchMessage(e) {
    return !0;
  }
  ResolveAwaitWithTransportError(e, t, n, r) {
    let i = m.Init(t);
    i.Hdr().set_eresult(2),
      i.Hdr().set_transport_error(n),
      r && i.Hdr().set_error_message(r),
      e(i);
  }
  DispatchMessage(e) {
    try {
      if (!this.BInternalShouldDispatchMessage(e)) return;
      e.BIsValid()
        ? this.m_messageHandlers.DispatchMsgToHandlers(e, (t) => {
            t.Hdr().set_jobid_target(e.Hdr().jobid_source()), this.Send(t);
          }) || this.DEBUG_LogCMInterfaceActivity(e, `receive`, !1)
        : console.error(
            `CMInterface RECV could not parse message of type ` +
              pe(e.GetEMsg()) +
              ` ` +
              e.GetEMsg(),
          );
    } catch (t) {
      console.error(
        `CMInterface RECV exception thrown while processing message of type ${pe(e.GetEMsg())}`,
        t,
      ),
        e.DEBUG_LogToConsole();
    }
  }
  BIsConnected() {
    return this.m_bConnected;
  }
  OnConnect() {
    (this.m_bConnected = !0),
      (this.m_bConnectionFailed = !1),
      (this.m_bForceDisconnect = !1);
  }
  OnLoggedOn() {
    (this.m_bCompletedInitialConnect = !0),
      this.InternalAdjustClock(),
      this.m_callbacksOnConnect.RunAllCallbacks(this.m_setConnectedServers),
      this.m_callbacksOnConnectOneTime.RunAllCallbacks(
        this.m_setConnectedServers,
      );
  }
  OnDisconnect() {
    (this.m_bConnected = !1),
      (this.m_bConnectionFailed = !0),
      (this.m_onConnect = void 0),
      (this.m_bLoggedOn = !1),
      (this.m_unAccountFlags = 0),
      (this.m_strIPCountry = ``),
      this.RunOnDisconnectCallbacks(
        this.m_setConnectedServers,
        this.m_bForceDisconnect,
      ),
      this.m_setConnectedServers.clear();
  }
  RunOnDisconnectCallbacks(e, t) {
    e instanceof Set
      ? (this.m_callbacksOnDisconnect.RunAllCallbacks(e, t),
        this.m_callbacksOnDisconnectOneTime.RunAllCallbacks(e, t))
      : (this.m_callbacksOnDisconnect.RunCallbacks(e, t),
        this.m_callbacksOnDisconnectOneTime.RunCallbacks(e, t));
  }
  ClientServersAvailableHandler = this.m_messageHandlers.RegisterEMessageAction(
    w,
    te,
    (e) => {
      let t = new Set(this.m_setConnectedServers);
      for (let n of e.Body().server_types_available()) {
        let e = n.server();
        e !== void 0 &&
          (this.m_bLoggedOn &&
            (!this.m_setConnectedServers.has(e) || n.changed()) &&
            (n.changed() &&
              this.m_setConnectedServers.has(e) &&
              this.RunOnDisconnectCallbacks(e, !1),
            this.m_callbacksOnConnect.RunCallbacks(e),
            this.m_callbacksOnConnectOneTime.RunCallbacks(e)),
          this.m_setConnectedServers.add(e),
          t.delete(e));
      }
      t.forEach((e) => {
        this.m_setConnectedServers.delete(e),
          this.m_bLoggedOn && this.RunOnDisconnectCallbacks(e, !1);
      });
    },
  );
  DEBUG_LogCMInterfaceActivity(e, t, n = !0) {}
  DEBUG_LogMessage(e, ...t) {}
  async InternalAdjustClock() {
    let e = m.Init(re, S);
    return (
      e
        .Body()
        .set_client_request_timestamp(Math.floor(performance.now()).toString()),
      this.SendMsgAndAwaitResponse(e, ee).then((e) => {
        let t = performance.now(),
          n = new Date(),
          r = parseInt(e.Body().client_request_timestamp()),
          i = parseInt(e.Body().server_timestamp_ms()) - ((t - r) >> 1);
        return (
          i && !isNaN(i) && t && !isNaN(t)
            ? ((this.m_bPerformedInitialClockAdjustment = !0),
              (this.m_nPerfClockServerMSOffset = i - t),
              (this.m_nWallClockDriftMS = n.getTime() - i))
            : a(
                !1,
                `Error computing server time, server echo: ${r} server time ${i}`,
              ),
          !0
        );
      })
    );
  }
  BPerformedInitialClockAdjustment() {
    return this.m_bPerformedInitialClockAdjustment;
  }
  GetServerTimeMS() {
    return performance.now() + this.m_nPerfClockServerMSOffset;
  }
  GetServerRTime32() {
    return Math.floor(
      (performance.now() + this.m_nPerfClockServerMSOffset) / 1e3,
    );
  }
  RTime32ToDate(e) {
    return new Date(e * 1e3 + this.m_nWallClockDriftMS);
  }
};
u([d], L.prototype, `m_steamid`, void 0),
  u([d], L.prototype, `m_bLoggedOn`, void 0),
  u([d], L.prototype, `m_bCompletedInitialConnect`, void 0),
  u([d], L.prototype, `m_unAccountFlags`, void 0),
  u([d], L.prototype, `m_strIPCountry`, void 0),
  u([d], L.prototype, `m_strPersonaName`, void 0),
  u([d], L.prototype, `m_rtReconnectThrottleStart`, void 0),
  u([d], L.prototype, `m_rtReconnectThrottleExpiration`, void 0),
  u([d], L.prototype, `m_bConnected`, void 0),
  u([d], L.prototype, `m_bPerformedInitialClockAdjustment`, void 0),
  u([i], L.prototype, `DispatchMessage`, null),
  u([i], L.prototype, `OnDisconnect`, null);
var R = class extends L {
  m_hSharedConnection;
  m_hEMsgRegistrationObserver;
  m_setEMsgHandlers = new Set();
  m_setServiceMethodHandlers = new Set();
  constructor() {
    super(),
      C(this),
      E(`User.RegisterForConnectionAttemptsThrottled`) &&
        SteamClient.User.RegisterForConnectionAttemptsThrottled(
          this.OnConnectionAttemptThrottled,
        );
  }
  SendMsgAndAwaitResponse(e, t) {
    return new Promise((n, r) => {
      if (this.m_hSharedConnection) {
        this.DEBUG_LogCMInterfaceActivity(e, `send`);
        let r = F.fromByteArray(e.Serialize());
        E(`SharedConnection.SendMsgAndAwaitBinaryResponse`)
          ? SteamClient.SharedConnection.SendMsgAndAwaitBinaryResponse(
              this.m_hSharedConnection,
              r,
            )
              .then((e) => {
                let r = new g(e),
                  i = m.InitFromPacket(t, r);
                this.DEBUG_LogCMInterfaceActivity(i, `receive`, !0),
                  i.BIsValid()
                    ? n(i)
                    : this.ResolveAwaitWithTransportError(
                        n,
                        t,
                        102,
                        `Failed to parse response from server`,
                      );
              })
              .catch((e) => {
                this.ResolveAwaitWithTransportError(n, t, 2, e);
              })
          : SteamClient.SharedConnection.SendMsgAndAwaitResponse(
              this.m_hSharedConnection,
              r,
            )
              .then((e) => {
                let r = new g(F.toByteArray(e)),
                  i = m.InitFromPacket(t, r);
                this.DEBUG_LogCMInterfaceActivity(i, `receive`, !0),
                  i.BIsValid()
                    ? n(i)
                    : this.ResolveAwaitWithTransportError(
                        n,
                        t,
                        102,
                        `Failed to parse response from server`,
                      );
              })
              .catch((e) => {
                this.ResolveAwaitWithTransportError(n, t, 2, e);
              });
      } else
        this.ResolveAwaitWithTransportError(
          n,
          t,
          102,
          `Shared connection handle is empty, dropping traffic`,
        ),
          console.warn(`Shared connection handle is empty, dropping traffic`);
    });
  }
  SendInternal(e) {
    let t = F.fromByteArray(e.Serialize());
    return (
      SteamClient.SharedConnection.SendMsg(this.m_hSharedConnection, t), !0
    );
  }
  OnMsgRecvd(e) {
    let t = new g(e),
      n = o.InitHeaderFromPacket(t);
    this.DispatchMessage(n);
  }
  OnLogonInfoChanged(e) {
    this.DEBUG_LogMessage(`Login info from client: `, e),
      (this.m_bLoggedOn = e.bLoggedOn),
      (b.EUNIVERSE = e.eUniverse),
      (b.MEDIA_CDN_COMMUNITY_URL = e.strCommunityImagesURL),
      (b.COUNTRY = e.strUserCountry),
      e.strSteamid
        ? ((this.m_steamid = new P(e.strSteamid)),
          (this.m_strPersonaName = e.strPersonaName),
          (r.logged_in = e.bLoggedOn),
          (r.steamid = e.strSteamid),
          (r.accountid = this.m_steamid.GetAccountID()),
          (r.account_name = e.strAccountName))
        : this.m_steamid.GetAccountID() != 0 && (this.m_steamid = new P()),
      this.m_bLoggedOn
        ? (this.m_bConnected || this.OnConnect(), this.OnLoggedOn())
        : this.OnDisconnect();
  }
  Connect() {
    return this.m_hSharedConnection
      ? Promise.resolve()
      : (this.m_onConnect = new Promise((e, t) => {
          SteamClient.SharedConnection.AllocateSharedConnection()
            .then((n) => {
              n
                ? (this.OnSharedConnectionEstablished(n),
                  this.DEBUG_LogMessage(
                    `obtained handle `,
                    this.m_hSharedConnection,
                  ),
                  this.OnConnect(),
                  e())
                : t();
            })
            .catch(t);
        }));
  }
  OnSharedConnectionEstablished(e) {
    (this.m_hSharedConnection = e),
      this.m_setEMsgHandlers.clear(),
      this.m_setServiceMethodHandlers.clear(),
      this.m_hEMsgRegistrationObserver && this.m_hEMsgRegistrationObserver(),
      (this.m_hEMsgRegistrationObserver = l(() => {
        if (this.m_hSharedConnection) {
          for (let e of this.m_messageHandlers.emsg_list)
            this.m_setEMsgHandlers.has(e) ||
              (this.m_setEMsgHandlers.add(e),
              SteamClient.SharedConnection.SubscribeToEMsg(
                this.m_hSharedConnection,
                e,
              ));
          for (let e of this.m_messageHandlers.servicemethod_list)
            this.m_setServiceMethodHandlers.has(e) ||
              (this.m_setServiceMethodHandlers.add(e),
              SteamClient.SharedConnection.SubscribeToClientServiceMethod(
                this.m_hSharedConnection,
                e,
              ));
        }
      }));
    let t = !1;
    SteamClient.SharedConnection.RegisterOnLogonInfoChanged(
      this.m_hSharedConnection,
      (e) => {
        this.OnLogonInfoChanged(e),
          t ||
            ((t = !0),
            E(`SharedConnection.RegisterOnBinaryMessageReceived`)
              ? SteamClient.SharedConnection.RegisterOnBinaryMessageReceived(
                  this.m_hSharedConnection,
                  this.OnMsgRecvd.bind(this),
                )
              : SteamClient.SharedConnection.RegisterOnMessageReceived(
                  this.m_hSharedConnection,
                  (e) => this.OnMsgRecvd(F.toByteArray(e)),
                ));
      },
    );
  }
  OnConnect() {
    super.OnConnect();
  }
  Disconnect() {
    if (this.m_hSharedConnection) {
      let e = m.Init(se, 716);
      e.Body().set_persona_state(0),
        e.Body().set_persona_set_by_user(!1),
        this.Send(e),
        SteamClient.SharedConnection.Close(this.m_hSharedConnection),
        this.OnSharedConnectionClosed();
    }
  }
  OnSharedConnectionClosed() {
    super.OnDisconnect(),
      (this.m_hSharedConnection = void 0),
      this.m_setEMsgHandlers.clear(),
      (this.m_hEMsgRegistrationObserver &&=
        (this.m_hEMsgRegistrationObserver(), void 0));
  }
  SendHeartbeat() {}
  ClearHeartbeatInterval() {}
  ResetHeartbeatInterval() {}
  OnConnectionAttemptThrottled(e) {
    e.rtCooldownExpiration == 0
      ? (this.m_rtReconnectThrottleStart = 0)
      : this.m_rtReconnectThrottleStart == 0 &&
        (this.m_rtReconnectThrottleStart = v()),
      (this.m_rtReconnectThrottleExpiration = e.rtCooldownExpiration);
  }
};
u([i], R.prototype, `OnLogonInfoChanged`, null),
  u([i.bound], R.prototype, `OnConnectionAttemptThrottled`, null);
var z = t((e) => {
    var t =
      typeof Uint8Array < `u` &&
      typeof Uint16Array < `u` &&
      typeof Int32Array < `u`;
    function n(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    (e.assign = function (e) {
      for (var t = Array.prototype.slice.call(arguments, 1); t.length; ) {
        var r = t.shift();
        if (r) {
          if (typeof r != `object`) throw TypeError(r + `must be non-object`);
          for (var i in r) n(r, i) && (e[i] = r[i]);
        }
      }
      return e;
    }),
      (e.shrinkBuf = function (e, t) {
        return e.length === t
          ? e
          : e.subarray
            ? e.subarray(0, t)
            : ((e.length = t), e);
      });
    var r = {
        arraySet: function (e, t, n, r, i) {
          if (t.subarray && e.subarray) {
            e.set(t.subarray(n, n + r), i);
            return;
          }
          for (var a = 0; a < r; a++) e[i + a] = t[n + a];
        },
        flattenChunks: function (e) {
          var t,
            n,
            r = 0,
            i,
            a,
            o;
          for (t = 0, n = e.length; t < n; t++) r += e[t].length;
          for (o = new Uint8Array(r), i = 0, t = 0, n = e.length; t < n; t++)
            (a = e[t]), o.set(a, i), (i += a.length);
          return o;
        },
      },
      i = {
        arraySet: function (e, t, n, r, i) {
          for (var a = 0; a < r; a++) e[i + a] = t[n + a];
        },
        flattenChunks: function (e) {
          return [].concat.apply([], e);
        },
      };
    (e.setTyped = function (t) {
      t
        ? ((e.Buf8 = Uint8Array),
          (e.Buf16 = Uint16Array),
          (e.Buf32 = Int32Array),
          e.assign(e, r))
        : ((e.Buf8 = Array),
          (e.Buf16 = Array),
          (e.Buf32 = Array),
          e.assign(e, i));
    }),
      e.setTyped(t);
  }),
  ge = t((e) => {
    var t = z(),
      n = 4,
      r = 0,
      i = 1,
      a = 2;
    function o(e) {
      for (var t = e.length; --t >= 0; ) e[t] = 0;
    }
    var s = 0,
      c = 1,
      l = 2,
      u = 3,
      d = 258,
      f = 29,
      p = 256,
      m = p + 1 + f,
      h = 30,
      g = 19,
      _ = 2 * m + 1,
      v = 15,
      y = 16,
      b = 7,
      x = 256,
      S = 16,
      C = 17,
      w = 18,
      T = [
        0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4,
        5, 5, 5, 5, 0,
      ],
      E = [
        0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
        10, 11, 11, 12, 12, 13, 13,
      ],
      ee = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
      te = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      ne = 512,
      D = Array((m + 2) * 2);
    o(D);
    var O = Array(h * 2);
    o(O);
    var k = Array(ne);
    o(k);
    var A = Array(d - u + 1);
    o(A);
    var j = Array(f);
    o(j);
    var re = Array(h);
    o(re);
    function ie(e, t, n, r, i) {
      (this.static_tree = e),
        (this.extra_bits = t),
        (this.extra_base = n),
        (this.elems = r),
        (this.max_length = i),
        (this.has_stree = e && e.length);
    }
    var ae, M, oe;
    function se(e, t) {
      (this.dyn_tree = e), (this.max_code = 0), (this.stat_desc = t);
    }
    function ce(e) {
      return e < 256 ? k[e] : k[256 + (e >>> 7)];
    }
    function le(e, t) {
      (e.pending_buf[e.pending++] = t & 255),
        (e.pending_buf[e.pending++] = (t >>> 8) & 255);
    }
    function N(e, t, n) {
      e.bi_valid > y - n
        ? ((e.bi_buf |= (t << e.bi_valid) & 65535),
          le(e, e.bi_buf),
          (e.bi_buf = t >> (y - e.bi_valid)),
          (e.bi_valid += n - y))
        : ((e.bi_buf |= (t << e.bi_valid) & 65535), (e.bi_valid += n));
    }
    function P(e, t, n) {
      N(e, n[t * 2], n[t * 2 + 1]);
    }
    function ue(e, t) {
      var n = 0;
      do (n |= e & 1), (e >>>= 1), (n <<= 1);
      while (--t > 0);
      return n >>> 1;
    }
    function de(e) {
      e.bi_valid === 16
        ? (le(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0))
        : e.bi_valid >= 8 &&
          ((e.pending_buf[e.pending++] = e.bi_buf & 255),
          (e.bi_buf >>= 8),
          (e.bi_valid -= 8));
    }
    function fe(e, t) {
      var n = t.dyn_tree,
        r = t.max_code,
        i = t.stat_desc.static_tree,
        a = t.stat_desc.has_stree,
        o = t.stat_desc.extra_bits,
        s = t.stat_desc.extra_base,
        c = t.stat_desc.max_length,
        l,
        u,
        d,
        f,
        p,
        m,
        h = 0;
      for (f = 0; f <= v; f++) e.bl_count[f] = 0;
      for (n[e.heap[e.heap_max] * 2 + 1] = 0, l = e.heap_max + 1; l < _; l++)
        (u = e.heap[l]),
          (f = n[n[u * 2 + 1] * 2 + 1] + 1),
          f > c && ((f = c), h++),
          (n[u * 2 + 1] = f),
          !(u > r) &&
            (e.bl_count[f]++,
            (p = 0),
            u >= s && (p = o[u - s]),
            (m = n[u * 2]),
            (e.opt_len += m * (f + p)),
            a && (e.static_len += m * (i[u * 2 + 1] + p)));
      if (h !== 0) {
        do {
          for (f = c - 1; e.bl_count[f] === 0; ) f--;
          e.bl_count[f]--, (e.bl_count[f + 1] += 2), e.bl_count[c]--, (h -= 2);
        } while (h > 0);
        for (f = c; f !== 0; f--)
          for (u = e.bl_count[f]; u !== 0; )
            (d = e.heap[--l]),
              !(d > r) &&
                (n[d * 2 + 1] !== f &&
                  ((e.opt_len += (f - n[d * 2 + 1]) * n[d * 2]),
                  (n[d * 2 + 1] = f)),
                u--);
      }
    }
    function pe(e, t, n) {
      for (var r = Array(v + 1), i = 0, a = 1, o; a <= v; a++)
        r[a] = i = (i + n[a - 1]) << 1;
      for (o = 0; o <= t; o++) {
        var s = e[o * 2 + 1];
        s !== 0 && (e[o * 2] = ue(r[s]++, s));
      }
    }
    function F() {
      var e,
        t,
        n,
        r,
        i,
        a = Array(v + 1);
      for (n = 0, r = 0; r < f - 1; r++)
        for (j[r] = n, e = 0; e < 1 << T[r]; e++) A[n++] = r;
      for (A[n - 1] = r, i = 0, r = 0; r < 16; r++)
        for (re[r] = i, e = 0; e < 1 << E[r]; e++) k[i++] = r;
      for (i >>= 7; r < h; r++)
        for (re[r] = i << 7, e = 0; e < 1 << (E[r] - 7); e++) k[256 + i++] = r;
      for (t = 0; t <= v; t++) a[t] = 0;
      for (e = 0; e <= 143; ) (D[e * 2 + 1] = 8), e++, a[8]++;
      for (; e <= 255; ) (D[e * 2 + 1] = 9), e++, a[9]++;
      for (; e <= 279; ) (D[e * 2 + 1] = 7), e++, a[7]++;
      for (; e <= 287; ) (D[e * 2 + 1] = 8), e++, a[8]++;
      for (pe(D, m + 1, a), e = 0; e < h; e++)
        (O[e * 2 + 1] = 5), (O[e * 2] = ue(e, 5));
      (ae = new ie(D, T, p + 1, m, v)),
        (M = new ie(O, E, 0, h, v)),
        (oe = new ie([], ee, 0, g, b));
    }
    function me(e) {
      for (var t = 0; t < m; t++) e.dyn_ltree[t * 2] = 0;
      for (t = 0; t < h; t++) e.dyn_dtree[t * 2] = 0;
      for (t = 0; t < g; t++) e.bl_tree[t * 2] = 0;
      (e.dyn_ltree[x * 2] = 1),
        (e.opt_len = e.static_len = 0),
        (e.last_lit = e.matches = 0);
    }
    function he(e) {
      e.bi_valid > 8
        ? le(e, e.bi_buf)
        : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf),
        (e.bi_buf = 0),
        (e.bi_valid = 0);
    }
    function I(e, n, r, i) {
      he(e),
        i && (le(e, r), le(e, ~r)),
        t.arraySet(e.pending_buf, e.window, n, r, e.pending),
        (e.pending += r);
    }
    function L(e, t, n, r) {
      var i = t * 2,
        a = n * 2;
      return e[i] < e[a] || (e[i] === e[a] && r[t] <= r[n]);
    }
    function R(e, t, n) {
      for (
        var r = e.heap[n], i = n << 1;
        i <= e.heap_len &&
        (i < e.heap_len && L(t, e.heap[i + 1], e.heap[i], e.depth) && i++,
        !L(t, r, e.heap[i], e.depth));
      )
        (e.heap[n] = e.heap[i]), (n = i), (i <<= 1);
      e.heap[n] = r;
    }
    function ge(e, t, n) {
      var r,
        i,
        a = 0,
        o,
        s;
      if (e.last_lit !== 0)
        do
          (r =
            (e.pending_buf[e.d_buf + a * 2] << 8) |
            e.pending_buf[e.d_buf + a * 2 + 1]),
            (i = e.pending_buf[e.l_buf + a]),
            a++,
            r === 0
              ? P(e, i, t)
              : ((o = A[i]),
                P(e, o + p + 1, t),
                (s = T[o]),
                s !== 0 && ((i -= j[o]), N(e, i, s)),
                r--,
                (o = ce(r)),
                P(e, o, n),
                (s = E[o]),
                s !== 0 && ((r -= re[o]), N(e, r, s)));
        while (a < e.last_lit);
      P(e, x, t);
    }
    function B(e, t) {
      var n = t.dyn_tree,
        r = t.stat_desc.static_tree,
        i = t.stat_desc.has_stree,
        a = t.stat_desc.elems,
        o,
        s,
        c = -1,
        l;
      for (e.heap_len = 0, e.heap_max = _, o = 0; o < a; o++)
        n[o * 2] === 0
          ? (n[o * 2 + 1] = 0)
          : ((e.heap[++e.heap_len] = c = o), (e.depth[o] = 0));
      for (; e.heap_len < 2; )
        (l = e.heap[++e.heap_len] = c < 2 ? ++c : 0),
          (n[l * 2] = 1),
          (e.depth[l] = 0),
          e.opt_len--,
          i && (e.static_len -= r[l * 2 + 1]);
      for (t.max_code = c, o = e.heap_len >> 1; o >= 1; o--) R(e, n, o);
      l = a;
      do
        (o = e.heap[1]),
          (e.heap[1] = e.heap[e.heap_len--]),
          R(e, n, 1),
          (s = e.heap[1]),
          (e.heap[--e.heap_max] = o),
          (e.heap[--e.heap_max] = s),
          (n[l * 2] = n[o * 2] + n[s * 2]),
          (e.depth[l] =
            (e.depth[o] >= e.depth[s] ? e.depth[o] : e.depth[s]) + 1),
          (n[o * 2 + 1] = n[s * 2 + 1] = l),
          (e.heap[1] = l++),
          R(e, n, 1);
      while (e.heap_len >= 2);
      (e.heap[--e.heap_max] = e.heap[1]), fe(e, t), pe(n, c, e.bl_count);
    }
    function _e(e, t, n) {
      var r,
        i = -1,
        a,
        o = t[1],
        s = 0,
        c = 7,
        l = 4;
      for (
        o === 0 && ((c = 138), (l = 3)), t[(n + 1) * 2 + 1] = 65535, r = 0;
        r <= n;
        r++
      )
        (a = o),
          (o = t[(r + 1) * 2 + 1]),
          !(++s < c && a === o) &&
            (s < l
              ? (e.bl_tree[a * 2] += s)
              : a === 0
                ? s <= 10
                  ? e.bl_tree[C * 2]++
                  : e.bl_tree[w * 2]++
                : (a !== i && e.bl_tree[a * 2]++, e.bl_tree[S * 2]++),
            (s = 0),
            (i = a),
            o === 0
              ? ((c = 138), (l = 3))
              : a === o
                ? ((c = 6), (l = 3))
                : ((c = 7), (l = 4)));
    }
    function V(e, t, n) {
      var r,
        i = -1,
        a,
        o = t[1],
        s = 0,
        c = 7,
        l = 4;
      for (o === 0 && ((c = 138), (l = 3)), r = 0; r <= n; r++)
        if (((a = o), (o = t[(r + 1) * 2 + 1]), !(++s < c && a === o))) {
          if (s < l)
            do P(e, a, e.bl_tree);
            while (--s !== 0);
          else
            a === 0
              ? s <= 10
                ? (P(e, C, e.bl_tree), N(e, s - 3, 3))
                : (P(e, w, e.bl_tree), N(e, s - 11, 7))
              : (a !== i && (P(e, a, e.bl_tree), s--),
                P(e, S, e.bl_tree),
                N(e, s - 3, 2));
          (s = 0),
            (i = a),
            o === 0
              ? ((c = 138), (l = 3))
              : a === o
                ? ((c = 6), (l = 3))
                : ((c = 7), (l = 4));
        }
    }
    function H(e) {
      var t;
      for (
        _e(e, e.dyn_ltree, e.l_desc.max_code),
          _e(e, e.dyn_dtree, e.d_desc.max_code),
          B(e, e.bl_desc),
          t = g - 1;
        t >= 3 && e.bl_tree[te[t] * 2 + 1] === 0;
        t--
      );
      return (e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t;
    }
    function U(e, t, n, r) {
      var i;
      for (N(e, t - 257, 5), N(e, n - 1, 5), N(e, r - 4, 4), i = 0; i < r; i++)
        N(e, e.bl_tree[te[i] * 2 + 1], 3);
      V(e, e.dyn_ltree, t - 1), V(e, e.dyn_dtree, n - 1);
    }
    function W(e) {
      for (var t = 4093624447, n = 0; n <= 31; n++, t >>>= 1)
        if (t & 1 && e.dyn_ltree[n * 2] !== 0) return r;
      if (
        e.dyn_ltree[18] !== 0 ||
        e.dyn_ltree[20] !== 0 ||
        e.dyn_ltree[26] !== 0
      )
        return i;
      for (n = 32; n < p; n++) if (e.dyn_ltree[n * 2] !== 0) return i;
      return r;
    }
    var ve = !1;
    function G(e) {
      (ve ||= (F(), !0)),
        (e.l_desc = new se(e.dyn_ltree, ae)),
        (e.d_desc = new se(e.dyn_dtree, M)),
        (e.bl_desc = new se(e.bl_tree, oe)),
        (e.bi_buf = 0),
        (e.bi_valid = 0),
        me(e);
    }
    function K(e, t, n, r) {
      N(e, (s << 1) + +!!r, 3), I(e, t, n, !0);
    }
    function ye(e) {
      N(e, c << 1, 3), P(e, x, D), de(e);
    }
    function be(e, t, r, i) {
      var o,
        s,
        u = 0;
      e.level > 0
        ? (e.strm.data_type === a && (e.strm.data_type = W(e)),
          B(e, e.l_desc),
          B(e, e.d_desc),
          (u = H(e)),
          (o = (e.opt_len + 3 + 7) >>> 3),
          (s = (e.static_len + 3 + 7) >>> 3),
          s <= o && (o = s))
        : (o = s = r + 5),
        r + 4 <= o && t !== -1
          ? K(e, t, r, i)
          : e.strategy === n || s === o
            ? (N(e, (c << 1) + +!!i, 3), ge(e, D, O))
            : (N(e, (l << 1) + +!!i, 3),
              U(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, u + 1),
              ge(e, e.dyn_ltree, e.dyn_dtree)),
        me(e),
        i && he(e);
    }
    function q(e, t, n) {
      return (
        (e.pending_buf[e.d_buf + e.last_lit * 2] = (t >>> 8) & 255),
        (e.pending_buf[e.d_buf + e.last_lit * 2 + 1] = t & 255),
        (e.pending_buf[e.l_buf + e.last_lit] = n & 255),
        e.last_lit++,
        t === 0
          ? e.dyn_ltree[n * 2]++
          : (e.matches++,
            t--,
            e.dyn_ltree[(A[n] + p + 1) * 2]++,
            e.dyn_dtree[ce(t) * 2]++),
        e.last_lit === e.lit_bufsize - 1
      );
    }
    (e._tr_init = G),
      (e._tr_stored_block = K),
      (e._tr_flush_block = be),
      (e._tr_tally = q),
      (e._tr_align = ye);
  }),
  B = t((e, t) => {
    function n(e, t, n, r) {
      for (
        var i = (e & 65535) | 0, a = ((e >>> 16) & 65535) | 0, o = 0;
        n !== 0;
      ) {
        (o = n > 2e3 ? 2e3 : n), (n -= o);
        do (i = (i + t[r++]) | 0), (a = (a + i) | 0);
        while (--o);
        (i %= 65521), (a %= 65521);
      }
      return i | (a << 16) | 0;
    }
    t.exports = n;
  }),
  _e = t((e, t) => {
    function n() {
      for (var e, t = [], n = 0; n < 256; n++) {
        e = n;
        for (var r = 0; r < 8; r++)
          e = e & 1 ? 3988292384 ^ (e >>> 1) : e >>> 1;
        t[n] = e;
      }
      return t;
    }
    var r = n();
    function i(e, t, n, i) {
      var a = r,
        o = i + n;
      e ^= -1;
      for (var s = i; s < o; s++) e = (e >>> 8) ^ a[(e ^ t[s]) & 255];
      return e ^ -1;
    }
    t.exports = i;
  }),
  V = t((e, t) => {
    t.exports = {
      2: `need dictionary`,
      1: `stream end`,
      0: ``,
      "-1": `file error`,
      "-2": `stream error`,
      "-3": `data error`,
      "-4": `insufficient memory`,
      "-5": `buffer error`,
      "-6": `incompatible version`,
    };
  }),
  H = t((e) => {
    var t = z(),
      n = ge(),
      r = B(),
      i = _e(),
      a = V(),
      o = 0,
      s = 1,
      c = 3,
      l = 4,
      u = 5,
      d = 0,
      f = 1,
      p = -2,
      m = -3,
      h = -5,
      g = -1,
      _ = 1,
      v = 2,
      y = 3,
      b = 4,
      x = 0,
      S = 2,
      C = 8,
      w = 9,
      T = 15,
      E = 8,
      ee = 286,
      te = 30,
      ne = 19,
      D = 2 * ee + 1,
      O = 15,
      k = 3,
      A = 258,
      j = A + k + 1,
      re = 32,
      ie = 42,
      ae = 69,
      M = 73,
      oe = 91,
      se = 103,
      ce = 113,
      le = 666,
      N = 1,
      P = 2,
      ue = 3,
      de = 4,
      fe = 3;
    function pe(e, t) {
      return (e.msg = a[t]), t;
    }
    function F(e) {
      return (e << 1) - (e > 4 ? 9 : 0);
    }
    function me(e) {
      for (var t = e.length; --t >= 0; ) e[t] = 0;
    }
    function he(e) {
      var n = e.state,
        r = n.pending;
      r > e.avail_out && (r = e.avail_out),
        r !== 0 &&
          (t.arraySet(e.output, n.pending_buf, n.pending_out, r, e.next_out),
          (e.next_out += r),
          (n.pending_out += r),
          (e.total_out += r),
          (e.avail_out -= r),
          (n.pending -= r),
          n.pending === 0 && (n.pending_out = 0));
    }
    function I(e, t) {
      n._tr_flush_block(
        e,
        e.block_start >= 0 ? e.block_start : -1,
        e.strstart - e.block_start,
        t,
      ),
        (e.block_start = e.strstart),
        he(e.strm);
    }
    function L(e, t) {
      e.pending_buf[e.pending++] = t;
    }
    function R(e, t) {
      (e.pending_buf[e.pending++] = (t >>> 8) & 255),
        (e.pending_buf[e.pending++] = t & 255);
    }
    function H(e, n, a, o) {
      var s = e.avail_in;
      return (
        s > o && (s = o),
        s === 0
          ? 0
          : ((e.avail_in -= s),
            t.arraySet(n, e.input, e.next_in, s, a),
            e.state.wrap === 1
              ? (e.adler = r(e.adler, n, s, a))
              : e.state.wrap === 2 && (e.adler = i(e.adler, n, s, a)),
            (e.next_in += s),
            (e.total_in += s),
            s)
      );
    }
    function U(e, t) {
      var n = e.max_chain_length,
        r = e.strstart,
        i,
        a,
        o = e.prev_length,
        s = e.nice_match,
        c = e.strstart > e.w_size - j ? e.strstart - (e.w_size - j) : 0,
        l = e.window,
        u = e.w_mask,
        d = e.prev,
        f = e.strstart + A,
        p = l[r + o - 1],
        m = l[r + o];
      e.prev_length >= e.good_match && (n >>= 2),
        s > e.lookahead && (s = e.lookahead);
      do
        if (
          ((i = t),
          l[i + o] === m &&
            l[i + o - 1] === p &&
            l[i] === l[r] &&
            l[++i] === l[r + 1])
        ) {
          (r += 2), i++;
          do;
          while (
            l[++r] === l[++i] &&
            l[++r] === l[++i] &&
            l[++r] === l[++i] &&
            l[++r] === l[++i] &&
            l[++r] === l[++i] &&
            l[++r] === l[++i] &&
            l[++r] === l[++i] &&
            l[++r] === l[++i] &&
            r < f
          );
          if (((a = A - (f - r)), (r = f - A), a > o)) {
            if (((e.match_start = t), (o = a), a >= s)) break;
            (p = l[r + o - 1]), (m = l[r + o]);
          }
        }
      while ((t = d[t & u]) > c && --n !== 0);
      return o <= e.lookahead ? o : e.lookahead;
    }
    function W(e) {
      var n = e.w_size,
        r,
        i,
        a,
        o,
        s;
      do {
        if (
          ((o = e.window_size - e.lookahead - e.strstart),
          e.strstart >= n + (n - j))
        ) {
          t.arraySet(e.window, e.window, n, n, 0),
            (e.match_start -= n),
            (e.strstart -= n),
            (e.block_start -= n),
            (i = e.hash_size),
            (r = i);
          do (a = e.head[--r]), (e.head[r] = a >= n ? a - n : 0);
          while (--i);
          (i = n), (r = i);
          do (a = e.prev[--r]), (e.prev[r] = a >= n ? a - n : 0);
          while (--i);
          o += n;
        }
        if (e.strm.avail_in === 0) break;
        if (
          ((i = H(e.strm, e.window, e.strstart + e.lookahead, o)),
          (e.lookahead += i),
          e.lookahead + e.insert >= k)
        )
          for (
            s = e.strstart - e.insert,
              e.ins_h = e.window[s],
              e.ins_h =
                ((e.ins_h << e.hash_shift) ^ e.window[s + 1]) & e.hash_mask;
            e.insert &&
            ((e.ins_h =
              ((e.ins_h << e.hash_shift) ^ e.window[s + k - 1]) & e.hash_mask),
            (e.prev[s & e.w_mask] = e.head[e.ins_h]),
            (e.head[e.ins_h] = s),
            s++,
            e.insert--,
            !(e.lookahead + e.insert < k));
          );
      } while (e.lookahead < j && e.strm.avail_in !== 0);
    }
    function ve(e, t) {
      var n = 65535;
      for (n > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5); ; ) {
        if (e.lookahead <= 1) {
          if ((W(e), e.lookahead === 0 && t === o)) return N;
          if (e.lookahead === 0) break;
        }
        (e.strstart += e.lookahead), (e.lookahead = 0);
        var r = e.block_start + n;
        if (
          ((e.strstart === 0 || e.strstart >= r) &&
            ((e.lookahead = e.strstart - r),
            (e.strstart = r),
            I(e, !1),
            e.strm.avail_out === 0)) ||
          (e.strstart - e.block_start >= e.w_size - j &&
            (I(e, !1), e.strm.avail_out === 0))
        )
          return N;
      }
      return (
        (e.insert = 0),
        t === l
          ? (I(e, !0), e.strm.avail_out === 0 ? ue : de)
          : (e.strstart > e.block_start && (I(e, !1), e.strm.avail_out), N)
      );
    }
    function G(e, t) {
      for (var r, i; ; ) {
        if (e.lookahead < j) {
          if ((W(e), e.lookahead < j && t === o)) return N;
          if (e.lookahead === 0) break;
        }
        if (
          ((r = 0),
          e.lookahead >= k &&
            ((e.ins_h =
              ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + k - 1]) &
              e.hash_mask),
            (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
            (e.head[e.ins_h] = e.strstart)),
          r !== 0 &&
            e.strstart - r <= e.w_size - j &&
            (e.match_length = U(e, r)),
          e.match_length >= k)
        ) {
          if (
            ((i = n._tr_tally(
              e,
              e.strstart - e.match_start,
              e.match_length - k,
            )),
            (e.lookahead -= e.match_length),
            e.match_length <= e.max_lazy_match && e.lookahead >= k)
          ) {
            e.match_length--;
            do
              e.strstart++,
                (e.ins_h =
                  ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + k - 1]) &
                  e.hash_mask),
                (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
                (e.head[e.ins_h] = e.strstart);
            while (--e.match_length !== 0);
            e.strstart++;
          } else
            (e.strstart += e.match_length),
              (e.match_length = 0),
              (e.ins_h = e.window[e.strstart]),
              (e.ins_h =
                ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 1]) &
                e.hash_mask);
        } else
          (i = n._tr_tally(e, 0, e.window[e.strstart])),
            e.lookahead--,
            e.strstart++;
        if (i && (I(e, !1), e.strm.avail_out === 0)) return N;
      }
      return (
        (e.insert = e.strstart < k - 1 ? e.strstart : k - 1),
        t === l
          ? (I(e, !0), e.strm.avail_out === 0 ? ue : de)
          : e.last_lit && (I(e, !1), e.strm.avail_out === 0)
            ? N
            : P
      );
    }
    function K(e, t) {
      for (var r, i, a; ; ) {
        if (e.lookahead < j) {
          if ((W(e), e.lookahead < j && t === o)) return N;
          if (e.lookahead === 0) break;
        }
        if (
          ((r = 0),
          e.lookahead >= k &&
            ((e.ins_h =
              ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + k - 1]) &
              e.hash_mask),
            (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
            (e.head[e.ins_h] = e.strstart)),
          (e.prev_length = e.match_length),
          (e.prev_match = e.match_start),
          (e.match_length = k - 1),
          r !== 0 &&
            e.prev_length < e.max_lazy_match &&
            e.strstart - r <= e.w_size - j &&
            ((e.match_length = U(e, r)),
            e.match_length <= 5 &&
              (e.strategy === _ ||
                (e.match_length === k && e.strstart - e.match_start > 4096)) &&
              (e.match_length = k - 1)),
          e.prev_length >= k && e.match_length <= e.prev_length)
        ) {
          (a = e.strstart + e.lookahead - k),
            (i = n._tr_tally(
              e,
              e.strstart - 1 - e.prev_match,
              e.prev_length - k,
            )),
            (e.lookahead -= e.prev_length - 1),
            (e.prev_length -= 2);
          do
            ++e.strstart <= a &&
              ((e.ins_h =
                ((e.ins_h << e.hash_shift) ^ e.window[e.strstart + k - 1]) &
                e.hash_mask),
              (r = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h]),
              (e.head[e.ins_h] = e.strstart));
          while (--e.prev_length !== 0);
          if (
            ((e.match_available = 0),
            (e.match_length = k - 1),
            e.strstart++,
            i && (I(e, !1), e.strm.avail_out === 0))
          )
            return N;
        } else if (e.match_available) {
          if (
            ((i = n._tr_tally(e, 0, e.window[e.strstart - 1])),
            i && I(e, !1),
            e.strstart++,
            e.lookahead--,
            e.strm.avail_out === 0)
          )
            return N;
        } else (e.match_available = 1), e.strstart++, e.lookahead--;
      }
      return (
        (e.match_available &&=
          ((i = n._tr_tally(e, 0, e.window[e.strstart - 1])), 0)),
        (e.insert = e.strstart < k - 1 ? e.strstart : k - 1),
        t === l
          ? (I(e, !0), e.strm.avail_out === 0 ? ue : de)
          : e.last_lit && (I(e, !1), e.strm.avail_out === 0)
            ? N
            : P
      );
    }
    function ye(e, t) {
      for (var r, i, a, s, c = e.window; ; ) {
        if (e.lookahead <= A) {
          if ((W(e), e.lookahead <= A && t === o)) return N;
          if (e.lookahead === 0) break;
        }
        if (
          ((e.match_length = 0),
          e.lookahead >= k &&
            e.strstart > 0 &&
            ((a = e.strstart - 1),
            (i = c[a]),
            i === c[++a] && i === c[++a] && i === c[++a]))
        ) {
          s = e.strstart + A;
          do;
          while (
            i === c[++a] &&
            i === c[++a] &&
            i === c[++a] &&
            i === c[++a] &&
            i === c[++a] &&
            i === c[++a] &&
            i === c[++a] &&
            i === c[++a] &&
            a < s
          );
          (e.match_length = A - (s - a)),
            e.match_length > e.lookahead && (e.match_length = e.lookahead);
        }
        if (
          (e.match_length >= k
            ? ((r = n._tr_tally(e, 1, e.match_length - k)),
              (e.lookahead -= e.match_length),
              (e.strstart += e.match_length),
              (e.match_length = 0))
            : ((r = n._tr_tally(e, 0, e.window[e.strstart])),
              e.lookahead--,
              e.strstart++),
          r && (I(e, !1), e.strm.avail_out === 0))
        )
          return N;
      }
      return (
        (e.insert = 0),
        t === l
          ? (I(e, !0), e.strm.avail_out === 0 ? ue : de)
          : e.last_lit && (I(e, !1), e.strm.avail_out === 0)
            ? N
            : P
      );
    }
    function be(e, t) {
      for (var r; ; ) {
        if (e.lookahead === 0 && (W(e), e.lookahead === 0)) {
          if (t === o) return N;
          break;
        }
        if (
          ((e.match_length = 0),
          (r = n._tr_tally(e, 0, e.window[e.strstart])),
          e.lookahead--,
          e.strstart++,
          r && (I(e, !1), e.strm.avail_out === 0))
        )
          return N;
      }
      return (
        (e.insert = 0),
        t === l
          ? (I(e, !0), e.strm.avail_out === 0 ? ue : de)
          : e.last_lit && (I(e, !1), e.strm.avail_out === 0)
            ? N
            : P
      );
    }
    function q(e, t, n, r, i) {
      (this.good_length = e),
        (this.max_lazy = t),
        (this.nice_length = n),
        (this.max_chain = r),
        (this.func = i);
    }
    var J = [
      new q(0, 0, 0, 0, ve),
      new q(4, 4, 8, 4, G),
      new q(4, 5, 16, 8, G),
      new q(4, 6, 32, 32, G),
      new q(4, 4, 16, 16, K),
      new q(8, 16, 32, 32, K),
      new q(8, 16, 128, 128, K),
      new q(8, 32, 128, 256, K),
      new q(32, 128, 258, 1024, K),
      new q(32, 258, 258, 4096, K),
    ];
    function xe(e) {
      (e.window_size = 2 * e.w_size),
        me(e.head),
        (e.max_lazy_match = J[e.level].max_lazy),
        (e.good_match = J[e.level].good_length),
        (e.nice_match = J[e.level].nice_length),
        (e.max_chain_length = J[e.level].max_chain),
        (e.strstart = 0),
        (e.block_start = 0),
        (e.lookahead = 0),
        (e.insert = 0),
        (e.match_length = e.prev_length = k - 1),
        (e.match_available = 0),
        (e.ins_h = 0);
    }
    function Se() {
      (this.strm = null),
        (this.status = 0),
        (this.pending_buf = null),
        (this.pending_buf_size = 0),
        (this.pending_out = 0),
        (this.pending = 0),
        (this.wrap = 0),
        (this.gzhead = null),
        (this.gzindex = 0),
        (this.method = C),
        (this.last_flush = -1),
        (this.w_size = 0),
        (this.w_bits = 0),
        (this.w_mask = 0),
        (this.window = null),
        (this.window_size = 0),
        (this.prev = null),
        (this.head = null),
        (this.ins_h = 0),
        (this.hash_size = 0),
        (this.hash_bits = 0),
        (this.hash_mask = 0),
        (this.hash_shift = 0),
        (this.block_start = 0),
        (this.match_length = 0),
        (this.prev_match = 0),
        (this.match_available = 0),
        (this.strstart = 0),
        (this.match_start = 0),
        (this.lookahead = 0),
        (this.prev_length = 0),
        (this.max_chain_length = 0),
        (this.max_lazy_match = 0),
        (this.level = 0),
        (this.strategy = 0),
        (this.good_match = 0),
        (this.nice_match = 0),
        (this.dyn_ltree = new t.Buf16(D * 2)),
        (this.dyn_dtree = new t.Buf16((2 * te + 1) * 2)),
        (this.bl_tree = new t.Buf16((2 * ne + 1) * 2)),
        me(this.dyn_ltree),
        me(this.dyn_dtree),
        me(this.bl_tree),
        (this.l_desc = null),
        (this.d_desc = null),
        (this.bl_desc = null),
        (this.bl_count = new t.Buf16(O + 1)),
        (this.heap = new t.Buf16(2 * ee + 1)),
        me(this.heap),
        (this.heap_len = 0),
        (this.heap_max = 0),
        (this.depth = new t.Buf16(2 * ee + 1)),
        me(this.depth),
        (this.l_buf = 0),
        (this.lit_bufsize = 0),
        (this.last_lit = 0),
        (this.d_buf = 0),
        (this.opt_len = 0),
        (this.static_len = 0),
        (this.matches = 0),
        (this.insert = 0),
        (this.bi_buf = 0),
        (this.bi_valid = 0);
    }
    function Y(e) {
      var t;
      return !e || !e.state
        ? pe(e, p)
        : ((e.total_in = e.total_out = 0),
          (e.data_type = S),
          (t = e.state),
          (t.pending = 0),
          (t.pending_out = 0),
          t.wrap < 0 && (t.wrap = -t.wrap),
          (t.status = t.wrap ? ie : ce),
          (e.adler = t.wrap === 2 ? 0 : 1),
          (t.last_flush = o),
          n._tr_init(t),
          d);
    }
    function X(e) {
      var t = Y(e);
      return t === d && xe(e.state), t;
    }
    function Z(e, t) {
      return !e || !e.state || e.state.wrap !== 2
        ? p
        : ((e.state.gzhead = t), d);
    }
    function Ce(e, n, r, i, a, o) {
      if (!e) return p;
      var s = 1;
      if (
        (n === g && (n = 6),
        i < 0 ? ((s = 0), (i = -i)) : i > 15 && ((s = 2), (i -= 16)),
        a < 1 ||
          a > w ||
          r !== C ||
          i < 8 ||
          i > 15 ||
          n < 0 ||
          n > 9 ||
          o < 0 ||
          o > b)
      )
        return pe(e, p);
      i === 8 && (i = 9);
      var c = new Se();
      return (
        (e.state = c),
        (c.strm = e),
        (c.wrap = s),
        (c.gzhead = null),
        (c.w_bits = i),
        (c.w_size = 1 << c.w_bits),
        (c.w_mask = c.w_size - 1),
        (c.hash_bits = a + 7),
        (c.hash_size = 1 << c.hash_bits),
        (c.hash_mask = c.hash_size - 1),
        (c.hash_shift = ~~((c.hash_bits + k - 1) / k)),
        (c.window = new t.Buf8(c.w_size * 2)),
        (c.head = new t.Buf16(c.hash_size)),
        (c.prev = new t.Buf16(c.w_size)),
        (c.lit_bufsize = 1 << (a + 6)),
        (c.pending_buf_size = c.lit_bufsize * 4),
        (c.pending_buf = new t.Buf8(c.pending_buf_size)),
        (c.d_buf = 1 * c.lit_bufsize),
        (c.l_buf = 3 * c.lit_bufsize),
        (c.level = n),
        (c.strategy = o),
        (c.method = r),
        X(e)
      );
    }
    function we(e, t) {
      return Ce(e, t, C, T, E, x);
    }
    function Q(e, t) {
      var r, a, m, g;
      if (!e || !e.state || t > u || t < 0) return e ? pe(e, p) : p;
      if (
        ((a = e.state),
        !e.output ||
          (!e.input && e.avail_in !== 0) ||
          (a.status === le && t !== l))
      )
        return pe(e, e.avail_out === 0 ? h : p);
      if (
        ((a.strm = e), (r = a.last_flush), (a.last_flush = t), a.status === ie)
      ) {
        if (a.wrap === 2)
          (e.adler = 0),
            L(a, 31),
            L(a, 139),
            L(a, 8),
            a.gzhead
              ? (L(
                  a,
                  +!!a.gzhead.text +
                    (a.gzhead.hcrc ? 2 : 0) +
                    (a.gzhead.extra ? 4 : 0) +
                    (a.gzhead.name ? 8 : 0) +
                    (a.gzhead.comment ? 16 : 0),
                ),
                L(a, a.gzhead.time & 255),
                L(a, (a.gzhead.time >> 8) & 255),
                L(a, (a.gzhead.time >> 16) & 255),
                L(a, (a.gzhead.time >> 24) & 255),
                L(
                  a,
                  a.level === 9 ? 2 : a.strategy >= v || a.level < 2 ? 4 : 0,
                ),
                L(a, a.gzhead.os & 255),
                a.gzhead.extra &&
                  a.gzhead.extra.length &&
                  (L(a, a.gzhead.extra.length & 255),
                  L(a, (a.gzhead.extra.length >> 8) & 255)),
                a.gzhead.hcrc &&
                  (e.adler = i(e.adler, a.pending_buf, a.pending, 0)),
                (a.gzindex = 0),
                (a.status = ae))
              : (L(a, 0),
                L(a, 0),
                L(a, 0),
                L(a, 0),
                L(a, 0),
                L(
                  a,
                  a.level === 9 ? 2 : a.strategy >= v || a.level < 2 ? 4 : 0,
                ),
                L(a, fe),
                (a.status = ce));
        else {
          var _ = (C + ((a.w_bits - 8) << 4)) << 8,
            b = -1;
          (b =
            a.strategy >= v || a.level < 2
              ? 0
              : a.level < 6
                ? 1
                : a.level === 6
                  ? 2
                  : 3),
            (_ |= b << 6),
            a.strstart !== 0 && (_ |= re),
            (_ += 31 - (_ % 31)),
            (a.status = ce),
            R(a, _),
            a.strstart !== 0 && (R(a, e.adler >>> 16), R(a, e.adler & 65535)),
            (e.adler = 1);
        }
      }
      if (a.status === ae) {
        if (a.gzhead.extra) {
          for (
            m = a.pending;
            a.gzindex < (a.gzhead.extra.length & 65535) &&
            !(
              a.pending === a.pending_buf_size &&
              (a.gzhead.hcrc &&
                a.pending > m &&
                (e.adler = i(e.adler, a.pending_buf, a.pending - m, m)),
              he(e),
              (m = a.pending),
              a.pending === a.pending_buf_size)
            );
          )
            L(a, a.gzhead.extra[a.gzindex] & 255), a.gzindex++;
          a.gzhead.hcrc &&
            a.pending > m &&
            (e.adler = i(e.adler, a.pending_buf, a.pending - m, m)),
            a.gzindex === a.gzhead.extra.length &&
              ((a.gzindex = 0), (a.status = M));
        } else a.status = M;
      }
      if (a.status === M) {
        if (a.gzhead.name) {
          m = a.pending;
          do {
            if (
              a.pending === a.pending_buf_size &&
              (a.gzhead.hcrc &&
                a.pending > m &&
                (e.adler = i(e.adler, a.pending_buf, a.pending - m, m)),
              he(e),
              (m = a.pending),
              a.pending === a.pending_buf_size)
            ) {
              g = 1;
              break;
            }
            (g =
              a.gzindex < a.gzhead.name.length
                ? a.gzhead.name.charCodeAt(a.gzindex++) & 255
                : 0),
              L(a, g);
          } while (g !== 0);
          a.gzhead.hcrc &&
            a.pending > m &&
            (e.adler = i(e.adler, a.pending_buf, a.pending - m, m)),
            g === 0 && ((a.gzindex = 0), (a.status = oe));
        } else a.status = oe;
      }
      if (a.status === oe) {
        if (a.gzhead.comment) {
          m = a.pending;
          do {
            if (
              a.pending === a.pending_buf_size &&
              (a.gzhead.hcrc &&
                a.pending > m &&
                (e.adler = i(e.adler, a.pending_buf, a.pending - m, m)),
              he(e),
              (m = a.pending),
              a.pending === a.pending_buf_size)
            ) {
              g = 1;
              break;
            }
            (g =
              a.gzindex < a.gzhead.comment.length
                ? a.gzhead.comment.charCodeAt(a.gzindex++) & 255
                : 0),
              L(a, g);
          } while (g !== 0);
          a.gzhead.hcrc &&
            a.pending > m &&
            (e.adler = i(e.adler, a.pending_buf, a.pending - m, m)),
            g === 0 && (a.status = se);
        } else a.status = se;
      }
      if (
        (a.status === se &&
          (a.gzhead.hcrc
            ? (a.pending + 2 > a.pending_buf_size && he(e),
              a.pending + 2 <= a.pending_buf_size &&
                (L(a, e.adler & 255),
                L(a, (e.adler >> 8) & 255),
                (e.adler = 0),
                (a.status = ce)))
            : (a.status = ce)),
        a.pending !== 0)
      ) {
        if ((he(e), e.avail_out === 0)) return (a.last_flush = -1), d;
      } else if (e.avail_in === 0 && F(t) <= F(r) && t !== l) return pe(e, h);
      if (a.status === le && e.avail_in !== 0) return pe(e, h);
      if (
        e.avail_in !== 0 ||
        a.lookahead !== 0 ||
        (t !== o && a.status !== le)
      ) {
        var x =
          a.strategy === v
            ? be(a, t)
            : a.strategy === y
              ? ye(a, t)
              : J[a.level].func(a, t);
        if (((x === ue || x === de) && (a.status = le), x === N || x === ue))
          return e.avail_out === 0 && (a.last_flush = -1), d;
        if (
          x === P &&
          (t === s
            ? n._tr_align(a)
            : t !== u &&
              (n._tr_stored_block(a, 0, 0, !1),
              t === c &&
                (me(a.head),
                a.lookahead === 0 &&
                  ((a.strstart = 0), (a.block_start = 0), (a.insert = 0)))),
          he(e),
          e.avail_out === 0)
        )
          return (a.last_flush = -1), d;
      }
      return t === l
        ? a.wrap <= 0
          ? f
          : (a.wrap === 2
              ? (L(a, e.adler & 255),
                L(a, (e.adler >> 8) & 255),
                L(a, (e.adler >> 16) & 255),
                L(a, (e.adler >> 24) & 255),
                L(a, e.total_in & 255),
                L(a, (e.total_in >> 8) & 255),
                L(a, (e.total_in >> 16) & 255),
                L(a, (e.total_in >> 24) & 255))
              : (R(a, e.adler >>> 16), R(a, e.adler & 65535)),
            he(e),
            a.wrap > 0 && (a.wrap = -a.wrap),
            a.pending === 0 ? f : d)
        : d;
    }
    function Te(e) {
      var t;
      return !e || !e.state
        ? p
        : ((t = e.state.status),
          t !== ie &&
          t !== ae &&
          t !== M &&
          t !== oe &&
          t !== se &&
          t !== ce &&
          t !== le
            ? pe(e, p)
            : ((e.state = null), t === ce ? pe(e, m) : d));
    }
    function $(e, n) {
      var i = n.length,
        a,
        o,
        s,
        c,
        l,
        u,
        f,
        m;
      if (
        !e ||
        !e.state ||
        ((a = e.state),
        (c = a.wrap),
        c === 2 || (c === 1 && a.status !== ie) || a.lookahead)
      )
        return p;
      for (
        c === 1 && (e.adler = r(e.adler, n, i, 0)),
          a.wrap = 0,
          i >= a.w_size &&
            (c === 0 &&
              (me(a.head),
              (a.strstart = 0),
              (a.block_start = 0),
              (a.insert = 0)),
            (m = new t.Buf8(a.w_size)),
            t.arraySet(m, n, i - a.w_size, a.w_size, 0),
            (n = m),
            (i = a.w_size)),
          l = e.avail_in,
          u = e.next_in,
          f = e.input,
          e.avail_in = i,
          e.next_in = 0,
          e.input = n,
          W(a);
        a.lookahead >= k;
      ) {
        (o = a.strstart), (s = a.lookahead - (k - 1));
        do
          (a.ins_h =
            ((a.ins_h << a.hash_shift) ^ a.window[o + k - 1]) & a.hash_mask),
            (a.prev[o & a.w_mask] = a.head[a.ins_h]),
            (a.head[a.ins_h] = o),
            o++;
        while (--s);
        (a.strstart = o), (a.lookahead = k - 1), W(a);
      }
      return (
        (a.strstart += a.lookahead),
        (a.block_start = a.strstart),
        (a.insert = a.lookahead),
        (a.lookahead = 0),
        (a.match_length = a.prev_length = k - 1),
        (a.match_available = 0),
        (e.next_in = u),
        (e.input = f),
        (e.avail_in = l),
        (a.wrap = c),
        d
      );
    }
    (e.deflateInit = we),
      (e.deflateInit2 = Ce),
      (e.deflateReset = X),
      (e.deflateResetKeep = Y),
      (e.deflateSetHeader = Z),
      (e.deflate = Q),
      (e.deflateEnd = Te),
      (e.deflateSetDictionary = $),
      (e.deflateInfo = `pako deflate (from Nodeca project)`);
  }),
  U = t((e) => {
    var t = z(),
      n = !0,
      r = !0;
    try {
      String.fromCharCode.apply(null, [0]);
    } catch {
      n = !1;
    }
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch {
      r = !1;
    }
    for (var i = new t.Buf8(256), a = 0; a < 256; a++)
      i[a] =
        a >= 252
          ? 6
          : a >= 248
            ? 5
            : a >= 240
              ? 4
              : a >= 224
                ? 3
                : a >= 192
                  ? 2
                  : 1;
    (i[254] = i[254] = 1),
      (e.string2buf = function (e) {
        var n,
          r,
          i,
          a,
          o,
          s = e.length,
          c = 0;
        for (a = 0; a < s; a++)
          (r = e.charCodeAt(a)),
            (r & 64512) == 55296 &&
              a + 1 < s &&
              ((i = e.charCodeAt(a + 1)),
              (i & 64512) == 56320 &&
                ((r = 65536 + ((r - 55296) << 10) + (i - 56320)), a++)),
            (c += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4);
        for (n = new t.Buf8(c), o = 0, a = 0; o < c; a++)
          (r = e.charCodeAt(a)),
            (r & 64512) == 55296 &&
              a + 1 < s &&
              ((i = e.charCodeAt(a + 1)),
              (i & 64512) == 56320 &&
                ((r = 65536 + ((r - 55296) << 10) + (i - 56320)), a++)),
            r < 128
              ? (n[o++] = r)
              : r < 2048
                ? ((n[o++] = 192 | (r >>> 6)), (n[o++] = 128 | (r & 63)))
                : r < 65536
                  ? ((n[o++] = 224 | (r >>> 12)),
                    (n[o++] = 128 | ((r >>> 6) & 63)),
                    (n[o++] = 128 | (r & 63)))
                  : ((n[o++] = 240 | (r >>> 18)),
                    (n[o++] = 128 | ((r >>> 12) & 63)),
                    (n[o++] = 128 | ((r >>> 6) & 63)),
                    (n[o++] = 128 | (r & 63)));
        return n;
      });
    function o(e, i) {
      if (i < 65534 && ((e.subarray && r) || (!e.subarray && n)))
        return String.fromCharCode.apply(null, t.shrinkBuf(e, i));
      for (var a = ``, o = 0; o < i; o++) a += String.fromCharCode(e[o]);
      return a;
    }
    (e.buf2binstring = function (e) {
      return o(e, e.length);
    }),
      (e.binstring2buf = function (e) {
        for (var n = new t.Buf8(e.length), r = 0, i = n.length; r < i; r++)
          n[r] = e.charCodeAt(r);
        return n;
      }),
      (e.buf2string = function (e, t) {
        var n,
          r,
          a,
          s,
          c = t || e.length,
          l = Array(c * 2);
        for (r = 0, n = 0; n < c; ) {
          if (((a = e[n++]), a < 128)) {
            l[r++] = a;
            continue;
          }
          if (((s = i[a]), s > 4)) {
            (l[r++] = 65533), (n += s - 1);
            continue;
          }
          for (a &= s === 2 ? 31 : s === 3 ? 15 : 7; s > 1 && n < c; )
            (a = (a << 6) | (e[n++] & 63)), s--;
          if (s > 1) {
            l[r++] = 65533;
            continue;
          }
          a < 65536
            ? (l[r++] = a)
            : ((a -= 65536),
              (l[r++] = 55296 | ((a >> 10) & 1023)),
              (l[r++] = 56320 | (a & 1023)));
        }
        return o(l, r);
      }),
      (e.utf8border = function (e, t) {
        var n;
        for (
          t ||= e.length, t > e.length && (t = e.length), n = t - 1;
          n >= 0 && (e[n] & 192) == 128;
        )
          n--;
        return n < 0 || n === 0 ? t : n + i[e[n]] > t ? n : t;
      });
  }),
  W = t((e, t) => {
    function n() {
      (this.input = null),
        (this.next_in = 0),
        (this.avail_in = 0),
        (this.total_in = 0),
        (this.output = null),
        (this.next_out = 0),
        (this.avail_out = 0),
        (this.total_out = 0),
        (this.msg = ``),
        (this.state = null),
        (this.data_type = 2),
        (this.adler = 0);
    }
    t.exports = n;
  }),
  ve = t((e) => {
    var t = H(),
      n = z(),
      r = U(),
      i = V(),
      a = W(),
      o = Object.prototype.toString,
      s = 0,
      c = 4,
      l = 0,
      u = 1,
      d = 2,
      f = -1,
      p = 0,
      m = 8;
    function h(e) {
      if (!(this instanceof h)) return new h(e);
      this.options = n.assign(
        {
          level: f,
          method: m,
          chunkSize: 16384,
          windowBits: 15,
          memLevel: 8,
          strategy: p,
          to: ``,
        },
        e || {},
      );
      var s = this.options;
      s.raw && s.windowBits > 0
        ? (s.windowBits = -s.windowBits)
        : s.gzip &&
          s.windowBits > 0 &&
          s.windowBits < 16 &&
          (s.windowBits += 16),
        (this.err = 0),
        (this.msg = ``),
        (this.ended = !1),
        (this.chunks = []),
        (this.strm = new a()),
        (this.strm.avail_out = 0);
      var c = t.deflateInit2(
        this.strm,
        s.level,
        s.method,
        s.windowBits,
        s.memLevel,
        s.strategy,
      );
      if (c !== l) throw Error(i[c]);
      if ((s.header && t.deflateSetHeader(this.strm, s.header), s.dictionary)) {
        var u =
          typeof s.dictionary == `string`
            ? r.string2buf(s.dictionary)
            : o.call(s.dictionary) === `[object ArrayBuffer]`
              ? new Uint8Array(s.dictionary)
              : s.dictionary;
        if (((c = t.deflateSetDictionary(this.strm, u)), c !== l))
          throw Error(i[c]);
        this._dict_set = !0;
      }
    }
    (h.prototype.push = function (e, i) {
      var a = this.strm,
        f = this.options.chunkSize,
        p,
        m;
      if (this.ended) return !1;
      (m = i === ~~i ? i : i === !0 ? c : s),
        (a.input =
          typeof e == `string`
            ? r.string2buf(e)
            : o.call(e) === `[object ArrayBuffer]`
              ? new Uint8Array(e)
              : e),
        (a.next_in = 0),
        (a.avail_in = a.input.length);
      do {
        if (
          (a.avail_out === 0 &&
            ((a.output = new n.Buf8(f)), (a.next_out = 0), (a.avail_out = f)),
          (p = t.deflate(a, m)),
          p !== u && p !== l)
        )
          return this.onEnd(p), (this.ended = !0), !1;
        (a.avail_out === 0 || (a.avail_in === 0 && (m === c || m === d))) &&
          (this.options.to === `string`
            ? this.onData(r.buf2binstring(n.shrinkBuf(a.output, a.next_out)))
            : this.onData(n.shrinkBuf(a.output, a.next_out)));
      } while ((a.avail_in > 0 || a.avail_out === 0) && p !== u);
      return m === c
        ? ((p = t.deflateEnd(this.strm)),
          this.onEnd(p),
          (this.ended = !0),
          p === l)
        : m !== d || (this.onEnd(l), (a.avail_out = 0), !0);
    }),
      (h.prototype.onData = function (e) {
        this.chunks.push(e);
      }),
      (h.prototype.onEnd = function (e) {
        e === l &&
          (this.result =
            this.options.to === `string`
              ? this.chunks.join(``)
              : n.flattenChunks(this.chunks)),
          (this.chunks = []),
          (this.err = e),
          (this.msg = this.strm.msg);
      });
    function g(e, t) {
      var n = new h(t);
      if ((n.push(e, !0), n.err)) throw n.msg || i[n.err];
      return n.result;
    }
    function _(e, t) {
      return (t ||= {}), (t.raw = !0), g(e, t);
    }
    function v(e, t) {
      return (t ||= {}), (t.gzip = !0), g(e, t);
    }
    (e.Deflate = h), (e.deflate = g), (e.deflateRaw = _), (e.gzip = v);
  }),
  G = t((e, t) => {
    t.exports = function (e, t) {
      var n = e.state,
        r = e.next_in,
        i,
        a,
        o,
        s,
        c,
        l,
        u,
        d,
        f,
        p,
        m,
        h,
        g,
        _,
        v,
        y,
        b,
        x,
        S,
        C,
        w,
        T = e.input,
        E;
      (i = r + (e.avail_in - 5)),
        (a = e.next_out),
        (E = e.output),
        (o = a - (t - e.avail_out)),
        (s = a + (e.avail_out - 257)),
        (c = n.dmax),
        (l = n.wsize),
        (u = n.whave),
        (d = n.wnext),
        (f = n.window),
        (p = n.hold),
        (m = n.bits),
        (h = n.lencode),
        (g = n.distcode),
        (_ = (1 << n.lenbits) - 1),
        (v = (1 << n.distbits) - 1);
      top: do {
        m < 15 && ((p += T[r++] << m), (m += 8), (p += T[r++] << m), (m += 8)),
          (y = h[p & _]);
        dolen: for (;;) {
          if (
            ((b = y >>> 24),
            (p >>>= b),
            (m -= b),
            (b = (y >>> 16) & 255),
            b === 0)
          )
            E[a++] = y & 65535;
          else if (b & 16) {
            (x = y & 65535),
              (b &= 15),
              b &&
                (m < b && ((p += T[r++] << m), (m += 8)),
                (x += p & ((1 << b) - 1)),
                (p >>>= b),
                (m -= b)),
              m < 15 &&
                ((p += T[r++] << m), (m += 8), (p += T[r++] << m), (m += 8)),
              (y = g[p & v]);
            dodist: for (;;) {
              if (
                ((b = y >>> 24),
                (p >>>= b),
                (m -= b),
                (b = (y >>> 16) & 255),
                b & 16)
              ) {
                if (
                  ((S = y & 65535),
                  (b &= 15),
                  m < b &&
                    ((p += T[r++] << m),
                    (m += 8),
                    m < b && ((p += T[r++] << m), (m += 8))),
                  (S += p & ((1 << b) - 1)),
                  S > c)
                ) {
                  (e.msg = `invalid distance too far back`), (n.mode = 30);
                  break top;
                }
                if (((p >>>= b), (m -= b), (b = a - o), S > b)) {
                  if (((b = S - b), b > u && n.sane)) {
                    (e.msg = `invalid distance too far back`), (n.mode = 30);
                    break top;
                  }
                  if (((C = 0), (w = f), d === 0)) {
                    if (((C += l - b), b < x)) {
                      x -= b;
                      do E[a++] = f[C++];
                      while (--b);
                      (C = a - S), (w = E);
                    }
                  } else if (d < b) {
                    if (((C += l + d - b), (b -= d), b < x)) {
                      x -= b;
                      do E[a++] = f[C++];
                      while (--b);
                      if (((C = 0), d < x)) {
                        (b = d), (x -= b);
                        do E[a++] = f[C++];
                        while (--b);
                        (C = a - S), (w = E);
                      }
                    }
                  } else if (((C += d - b), b < x)) {
                    x -= b;
                    do E[a++] = f[C++];
                    while (--b);
                    (C = a - S), (w = E);
                  }
                  for (; x > 2; )
                    (E[a++] = w[C++]),
                      (E[a++] = w[C++]),
                      (E[a++] = w[C++]),
                      (x -= 3);
                  x && ((E[a++] = w[C++]), x > 1 && (E[a++] = w[C++]));
                } else {
                  C = a - S;
                  do
                    (E[a++] = E[C++]),
                      (E[a++] = E[C++]),
                      (E[a++] = E[C++]),
                      (x -= 3);
                  while (x > 2);
                  x && ((E[a++] = E[C++]), x > 1 && (E[a++] = E[C++]));
                }
              } else if (b & 64) {
                (e.msg = `invalid distance code`), (n.mode = 30);
                break top;
              } else {
                y = g[(y & 65535) + (p & ((1 << b) - 1))];
                continue dodist;
              }
              break;
            }
          } else if (!(b & 64)) {
            y = h[(y & 65535) + (p & ((1 << b) - 1))];
            continue dolen;
          } else if (b & 32) {
            n.mode = 12;
            break top;
          } else {
            (e.msg = `invalid literal/length code`), (n.mode = 30);
            break top;
          }
          break;
        }
      } while (r < i && a < s);
      (x = m >> 3),
        (r -= x),
        (m -= x << 3),
        (p &= (1 << m) - 1),
        (e.next_in = r),
        (e.next_out = a),
        (e.avail_in = r < i ? 5 + (i - r) : 5 - (r - i)),
        (e.avail_out = a < s ? 257 + (s - a) : 257 - (a - s)),
        (n.hold = p),
        (n.bits = m);
    };
  }),
  K = t((e, t) => {
    var n = z(),
      r = 15,
      i = 852,
      a = 592,
      o = 0,
      s = 1,
      c = 2,
      l = [
        3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59,
        67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
      ],
      u = [
        16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19,
        19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
      ],
      d = [
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
        513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577,
        0, 0,
      ],
      f = [
        16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23,
        24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
      ];
    t.exports = function (e, t, p, m, h, g, _, v) {
      var y = v.bits,
        b = 0,
        x = 0,
        S = 0,
        C = 0,
        w = 0,
        T = 0,
        E = 0,
        ee = 0,
        te = 0,
        ne = 0,
        D,
        O,
        k,
        A,
        j,
        re = null,
        ie = 0,
        ae,
        M = new n.Buf16(r + 1),
        oe = new n.Buf16(r + 1),
        se = null,
        ce = 0,
        le,
        N,
        P;
      for (b = 0; b <= r; b++) M[b] = 0;
      for (x = 0; x < m; x++) M[t[p + x]]++;
      for (w = y, C = r; C >= 1 && M[C] === 0; C--);
      if ((w > C && (w = C), C === 0))
        return (h[g++] = 20971520), (h[g++] = 20971520), (v.bits = 1), 0;
      for (S = 1; S < C && M[S] === 0; S++);
      for (w < S && (w = S), ee = 1, b = 1; b <= r; b++)
        if (((ee <<= 1), (ee -= M[b]), ee < 0)) return -1;
      if (ee > 0 && (e === o || C !== 1)) return -1;
      for (oe[1] = 0, b = 1; b < r; b++) oe[b + 1] = oe[b] + M[b];
      for (x = 0; x < m; x++) t[p + x] !== 0 && (_[oe[t[p + x]]++] = x);
      if (
        (e === o
          ? ((re = se = _), (ae = 19))
          : e === s
            ? ((re = l), (ie -= 257), (se = u), (ce -= 257), (ae = 256))
            : ((re = d), (se = f), (ae = -1)),
        (ne = 0),
        (x = 0),
        (b = S),
        (j = g),
        (T = w),
        (E = 0),
        (k = -1),
        (te = 1 << w),
        (A = te - 1),
        (e === s && te > i) || (e === c && te > a))
      )
        return 1;
      for (;;) {
        (le = b - E),
          _[x] < ae
            ? ((N = 0), (P = _[x]))
            : _[x] > ae
              ? ((N = se[ce + _[x]]), (P = re[ie + _[x]]))
              : ((N = 96), (P = 0)),
          (D = 1 << (b - E)),
          (O = 1 << T),
          (S = O);
        do (O -= D), (h[j + (ne >> E) + O] = (le << 24) | (N << 16) | P | 0);
        while (O !== 0);
        for (D = 1 << (b - 1); ne & D; ) D >>= 1;
        if (
          (D === 0 ? (ne = 0) : ((ne &= D - 1), (ne += D)), x++, --M[b] === 0)
        ) {
          if (b === C) break;
          b = t[p + _[x]];
        }
        if (b > w && (ne & A) !== k) {
          for (
            E === 0 && (E = w), j += S, T = b - E, ee = 1 << T;
            T + E < C && ((ee -= M[T + E]), !(ee <= 0));
          )
            T++, (ee <<= 1);
          if (((te += 1 << T), (e === s && te > i) || (e === c && te > a)))
            return 1;
          (k = ne & A), (h[k] = (w << 24) | (T << 16) | (j - g) | 0);
        }
      }
      return (
        ne !== 0 && (h[j + ne] = ((b - E) << 24) | 4194304), (v.bits = w), 0
      );
    };
  }),
  ye = t((e) => {
    var t = z(),
      n = B(),
      r = _e(),
      i = G(),
      a = K(),
      o = 0,
      s = 1,
      c = 2,
      l = 4,
      u = 5,
      d = 6,
      f = 0,
      p = 1,
      m = 2,
      h = -2,
      g = -3,
      _ = -4,
      v = -5,
      y = 8,
      b = 1,
      x = 2,
      S = 3,
      C = 4,
      w = 5,
      T = 6,
      E = 7,
      ee = 8,
      te = 9,
      ne = 10,
      D = 11,
      O = 12,
      k = 13,
      A = 14,
      j = 15,
      re = 16,
      ie = 17,
      ae = 18,
      M = 19,
      oe = 20,
      se = 21,
      ce = 22,
      le = 23,
      N = 24,
      P = 25,
      ue = 26,
      de = 27,
      fe = 28,
      pe = 29,
      F = 30,
      me = 31,
      he = 32,
      I = 852,
      L = 592,
      R = 15;
    function ge(e) {
      return (
        ((e >>> 24) & 255) +
        ((e >>> 8) & 65280) +
        ((e & 65280) << 8) +
        ((e & 255) << 24)
      );
    }
    function V() {
      (this.mode = 0),
        (this.last = !1),
        (this.wrap = 0),
        (this.havedict = !1),
        (this.flags = 0),
        (this.dmax = 0),
        (this.check = 0),
        (this.total = 0),
        (this.head = null),
        (this.wbits = 0),
        (this.wsize = 0),
        (this.whave = 0),
        (this.wnext = 0),
        (this.window = null),
        (this.hold = 0),
        (this.bits = 0),
        (this.length = 0),
        (this.offset = 0),
        (this.extra = 0),
        (this.lencode = null),
        (this.distcode = null),
        (this.lenbits = 0),
        (this.distbits = 0),
        (this.ncode = 0),
        (this.nlen = 0),
        (this.ndist = 0),
        (this.have = 0),
        (this.next = null),
        (this.lens = new t.Buf16(320)),
        (this.work = new t.Buf16(288)),
        (this.lendyn = null),
        (this.distdyn = null),
        (this.sane = 0),
        (this.back = 0),
        (this.was = 0);
    }
    function H(e) {
      var n;
      return !e || !e.state
        ? h
        : ((n = e.state),
          (e.total_in = e.total_out = n.total = 0),
          (e.msg = ``),
          n.wrap && (e.adler = n.wrap & 1),
          (n.mode = b),
          (n.last = 0),
          (n.havedict = 0),
          (n.dmax = 32768),
          (n.head = null),
          (n.hold = 0),
          (n.bits = 0),
          (n.lencode = n.lendyn = new t.Buf32(I)),
          (n.distcode = n.distdyn = new t.Buf32(L)),
          (n.sane = 1),
          (n.back = -1),
          f);
    }
    function U(e) {
      var t;
      return !e || !e.state
        ? h
        : ((t = e.state), (t.wsize = 0), (t.whave = 0), (t.wnext = 0), H(e));
    }
    function W(e, t) {
      var n, r;
      return !e ||
        !e.state ||
        ((r = e.state),
        t < 0 ? ((n = 0), (t = -t)) : ((n = (t >> 4) + 1), t < 48 && (t &= 15)),
        t && (t < 8 || t > 15))
        ? h
        : (r.window !== null && r.wbits !== t && (r.window = null),
          (r.wrap = n),
          (r.wbits = t),
          U(e));
    }
    function ve(e, t) {
      var n, r;
      return e
        ? ((r = new V()),
          (e.state = r),
          (r.window = null),
          (n = W(e, t)),
          n !== f && (e.state = null),
          n)
        : h;
    }
    function ye(e) {
      return ve(e, R);
    }
    var be = !0,
      q,
      J;
    function xe(e) {
      if (be) {
        var n;
        for (q = new t.Buf32(512), J = new t.Buf32(32), n = 0; n < 144; )
          e.lens[n++] = 8;
        for (; n < 256; ) e.lens[n++] = 9;
        for (; n < 280; ) e.lens[n++] = 7;
        for (; n < 288; ) e.lens[n++] = 8;
        for (a(s, e.lens, 0, 288, q, 0, e.work, { bits: 9 }), n = 0; n < 32; )
          e.lens[n++] = 5;
        a(c, e.lens, 0, 32, J, 0, e.work, { bits: 5 }), (be = !1);
      }
      (e.lencode = q), (e.lenbits = 9), (e.distcode = J), (e.distbits = 5);
    }
    function Se(e, n, r, i) {
      var a,
        o = e.state;
      return (
        o.window === null &&
          ((o.wsize = 1 << o.wbits),
          (o.wnext = 0),
          (o.whave = 0),
          (o.window = new t.Buf8(o.wsize))),
        i >= o.wsize
          ? (t.arraySet(o.window, n, r - o.wsize, o.wsize, 0),
            (o.wnext = 0),
            (o.whave = o.wsize))
          : ((a = o.wsize - o.wnext),
            a > i && (a = i),
            t.arraySet(o.window, n, r - i, a, o.wnext),
            (i -= a),
            i
              ? (t.arraySet(o.window, n, r - i, i, 0),
                (o.wnext = i),
                (o.whave = o.wsize))
              : ((o.wnext += a),
                o.wnext === o.wsize && (o.wnext = 0),
                o.whave < o.wsize && (o.whave += a))),
        0
      );
    }
    function Y(e, I) {
      var L,
        R,
        z,
        B,
        _e,
        V,
        H,
        U,
        W,
        ve,
        G,
        K,
        ye,
        be,
        q = 0,
        J,
        Y,
        X,
        Z,
        Ce,
        we,
        Q,
        Te,
        $ = new t.Buf8(4),
        Ee,
        De,
        Oe = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
      if (!e || !e.state || !e.output || (!e.input && e.avail_in !== 0))
        return h;
      (L = e.state),
        L.mode === O && (L.mode = k),
        (_e = e.next_out),
        (z = e.output),
        (H = e.avail_out),
        (B = e.next_in),
        (R = e.input),
        (V = e.avail_in),
        (U = L.hold),
        (W = L.bits),
        (ve = V),
        (G = H),
        (Te = f);
      inf_leave: for (;;)
        switch (L.mode) {
          case b:
            if (L.wrap === 0) {
              L.mode = k;
              break;
            }
            for (; W < 16; ) {
              if (V === 0) break inf_leave;
              V--, (U += R[B++] << W), (W += 8);
            }
            if (L.wrap & 2 && U === 35615) {
              (L.check = 0),
                ($[0] = U & 255),
                ($[1] = (U >>> 8) & 255),
                (L.check = r(L.check, $, 2, 0)),
                (U = 0),
                (W = 0),
                (L.mode = x);
              break;
            }
            if (
              ((L.flags = 0),
              L.head && (L.head.done = !1),
              !(L.wrap & 1) || (((U & 255) << 8) + (U >> 8)) % 31)
            ) {
              (e.msg = `incorrect header check`), (L.mode = F);
              break;
            }
            if ((U & 15) !== y) {
              (e.msg = `unknown compression method`), (L.mode = F);
              break;
            }
            if (((U >>>= 4), (W -= 4), (Q = (U & 15) + 8), L.wbits === 0))
              L.wbits = Q;
            else if (Q > L.wbits) {
              (e.msg = `invalid window size`), (L.mode = F);
              break;
            }
            (L.dmax = 1 << Q),
              (e.adler = L.check = 1),
              (L.mode = U & 512 ? ne : O),
              (U = 0),
              (W = 0);
            break;
          case x:
            for (; W < 16; ) {
              if (V === 0) break inf_leave;
              V--, (U += R[B++] << W), (W += 8);
            }
            if (((L.flags = U), (L.flags & 255) !== y)) {
              (e.msg = `unknown compression method`), (L.mode = F);
              break;
            }
            if (L.flags & 57344) {
              (e.msg = `unknown header flags set`), (L.mode = F);
              break;
            }
            L.head && (L.head.text = (U >> 8) & 1),
              L.flags & 512 &&
                (($[0] = U & 255),
                ($[1] = (U >>> 8) & 255),
                (L.check = r(L.check, $, 2, 0))),
              (U = 0),
              (W = 0),
              (L.mode = S);
          case S:
            for (; W < 32; ) {
              if (V === 0) break inf_leave;
              V--, (U += R[B++] << W), (W += 8);
            }
            L.head && (L.head.time = U),
              L.flags & 512 &&
                (($[0] = U & 255),
                ($[1] = (U >>> 8) & 255),
                ($[2] = (U >>> 16) & 255),
                ($[3] = (U >>> 24) & 255),
                (L.check = r(L.check, $, 4, 0))),
              (U = 0),
              (W = 0),
              (L.mode = C);
          case C:
            for (; W < 16; ) {
              if (V === 0) break inf_leave;
              V--, (U += R[B++] << W), (W += 8);
            }
            L.head && ((L.head.xflags = U & 255), (L.head.os = U >> 8)),
              L.flags & 512 &&
                (($[0] = U & 255),
                ($[1] = (U >>> 8) & 255),
                (L.check = r(L.check, $, 2, 0))),
              (U = 0),
              (W = 0),
              (L.mode = w);
          case w:
            if (L.flags & 1024) {
              for (; W < 16; ) {
                if (V === 0) break inf_leave;
                V--, (U += R[B++] << W), (W += 8);
              }
              (L.length = U),
                L.head && (L.head.extra_len = U),
                L.flags & 512 &&
                  (($[0] = U & 255),
                  ($[1] = (U >>> 8) & 255),
                  (L.check = r(L.check, $, 2, 0))),
                (U = 0),
                (W = 0);
            } else L.head && (L.head.extra = null);
            L.mode = T;
          case T:
            if (
              L.flags & 1024 &&
              ((K = L.length),
              K > V && (K = V),
              K &&
                (L.head &&
                  ((Q = L.head.extra_len - L.length),
                  L.head.extra || (L.head.extra = Array(L.head.extra_len)),
                  t.arraySet(L.head.extra, R, B, K, Q)),
                L.flags & 512 && (L.check = r(L.check, R, K, B)),
                (V -= K),
                (B += K),
                (L.length -= K)),
              L.length)
            )
              break inf_leave;
            (L.length = 0), (L.mode = E);
          case E:
            if (L.flags & 2048) {
              if (V === 0) break inf_leave;
              K = 0;
              do
                (Q = R[B + K++]),
                  L.head &&
                    Q &&
                    L.length < 65536 &&
                    (L.head.name += String.fromCharCode(Q));
              while (Q && K < V);
              if (
                (L.flags & 512 && (L.check = r(L.check, R, K, B)),
                (V -= K),
                (B += K),
                Q)
              )
                break inf_leave;
            } else L.head && (L.head.name = null);
            (L.length = 0), (L.mode = ee);
          case ee:
            if (L.flags & 4096) {
              if (V === 0) break inf_leave;
              K = 0;
              do
                (Q = R[B + K++]),
                  L.head &&
                    Q &&
                    L.length < 65536 &&
                    (L.head.comment += String.fromCharCode(Q));
              while (Q && K < V);
              if (
                (L.flags & 512 && (L.check = r(L.check, R, K, B)),
                (V -= K),
                (B += K),
                Q)
              )
                break inf_leave;
            } else L.head && (L.head.comment = null);
            L.mode = te;
          case te:
            if (L.flags & 512) {
              for (; W < 16; ) {
                if (V === 0) break inf_leave;
                V--, (U += R[B++] << W), (W += 8);
              }
              if (U !== (L.check & 65535)) {
                (e.msg = `header crc mismatch`), (L.mode = F);
                break;
              }
              (U = 0), (W = 0);
            }
            L.head && ((L.head.hcrc = (L.flags >> 9) & 1), (L.head.done = !0)),
              (e.adler = L.check = 0),
              (L.mode = O);
            break;
          case ne:
            for (; W < 32; ) {
              if (V === 0) break inf_leave;
              V--, (U += R[B++] << W), (W += 8);
            }
            (e.adler = L.check = ge(U)), (U = 0), (W = 0), (L.mode = D);
          case D:
            if (L.havedict === 0)
              return (
                (e.next_out = _e),
                (e.avail_out = H),
                (e.next_in = B),
                (e.avail_in = V),
                (L.hold = U),
                (L.bits = W),
                m
              );
            (e.adler = L.check = 1), (L.mode = O);
          case O:
            if (I === u || I === d) break inf_leave;
          case k:
            if (L.last) {
              (U >>>= W & 7), (W -= W & 7), (L.mode = de);
              break;
            }
            for (; W < 3; ) {
              if (V === 0) break inf_leave;
              V--, (U += R[B++] << W), (W += 8);
            }
            switch (((L.last = U & 1), (U >>>= 1), --W, U & 3)) {
              case 0:
                L.mode = A;
                break;
              case 1:
                if ((xe(L), (L.mode = oe), I === d)) {
                  (U >>>= 2), (W -= 2);
                  break inf_leave;
                }
                break;
              case 2:
                L.mode = ie;
                break;
              case 3:
                (e.msg = `invalid block type`), (L.mode = F);
            }
            (U >>>= 2), (W -= 2);
            break;
          case A:
            for (U >>>= W & 7, W -= W & 7; W < 32; ) {
              if (V === 0) break inf_leave;
              V--, (U += R[B++] << W), (W += 8);
            }
            if ((U & 65535) != ((U >>> 16) ^ 65535)) {
              (e.msg = `invalid stored block lengths`), (L.mode = F);
              break;
            }
            if (
              ((L.length = U & 65535), (U = 0), (W = 0), (L.mode = j), I === d)
            )
              break inf_leave;
          case j:
            L.mode = re;
          case re:
            if (((K = L.length), K)) {
              if ((K > V && (K = V), K > H && (K = H), K === 0))
                break inf_leave;
              t.arraySet(z, R, B, K, _e),
                (V -= K),
                (B += K),
                (H -= K),
                (_e += K),
                (L.length -= K);
              break;
            }
            L.mode = O;
            break;
          case ie:
            for (; W < 14; ) {
              if (V === 0) break inf_leave;
              V--, (U += R[B++] << W), (W += 8);
            }
            if (
              ((L.nlen = (U & 31) + 257),
              (U >>>= 5),
              (W -= 5),
              (L.ndist = (U & 31) + 1),
              (U >>>= 5),
              (W -= 5),
              (L.ncode = (U & 15) + 4),
              (U >>>= 4),
              (W -= 4),
              L.nlen > 286 || L.ndist > 30)
            ) {
              (e.msg = `too many length or distance symbols`), (L.mode = F);
              break;
            }
            (L.have = 0), (L.mode = ae);
          case ae:
            for (; L.have < L.ncode; ) {
              for (; W < 3; ) {
                if (V === 0) break inf_leave;
                V--, (U += R[B++] << W), (W += 8);
              }
              (L.lens[Oe[L.have++]] = U & 7), (U >>>= 3), (W -= 3);
            }
            for (; L.have < 19; ) L.lens[Oe[L.have++]] = 0;
            if (
              ((L.lencode = L.lendyn),
              (L.lenbits = 7),
              (Ee = { bits: L.lenbits }),
              (Te = a(o, L.lens, 0, 19, L.lencode, 0, L.work, Ee)),
              (L.lenbits = Ee.bits),
              Te)
            ) {
              (e.msg = `invalid code lengths set`), (L.mode = F);
              break;
            }
            (L.have = 0), (L.mode = M);
          case M:
            for (; L.have < L.nlen + L.ndist; ) {
              for (
                ;
                (q = L.lencode[U & ((1 << L.lenbits) - 1)]),
                  (J = q >>> 24),
                  (Y = (q >>> 16) & 255),
                  (X = q & 65535),
                  !(J <= W);
              ) {
                if (V === 0) break inf_leave;
                V--, (U += R[B++] << W), (W += 8);
              }
              if (X < 16) (U >>>= J), (W -= J), (L.lens[L.have++] = X);
              else {
                if (X === 16) {
                  for (De = J + 2; W < De; ) {
                    if (V === 0) break inf_leave;
                    V--, (U += R[B++] << W), (W += 8);
                  }
                  if (((U >>>= J), (W -= J), L.have === 0)) {
                    (e.msg = `invalid bit length repeat`), (L.mode = F);
                    break;
                  }
                  (Q = L.lens[L.have - 1]),
                    (K = 3 + (U & 3)),
                    (U >>>= 2),
                    (W -= 2);
                } else if (X === 17) {
                  for (De = J + 3; W < De; ) {
                    if (V === 0) break inf_leave;
                    V--, (U += R[B++] << W), (W += 8);
                  }
                  (U >>>= J),
                    (W -= J),
                    (Q = 0),
                    (K = 3 + (U & 7)),
                    (U >>>= 3),
                    (W -= 3);
                } else {
                  for (De = J + 7; W < De; ) {
                    if (V === 0) break inf_leave;
                    V--, (U += R[B++] << W), (W += 8);
                  }
                  (U >>>= J),
                    (W -= J),
                    (Q = 0),
                    (K = 11 + (U & 127)),
                    (U >>>= 7),
                    (W -= 7);
                }
                if (L.have + K > L.nlen + L.ndist) {
                  (e.msg = `invalid bit length repeat`), (L.mode = F);
                  break;
                }
                for (; K--; ) L.lens[L.have++] = Q;
              }
            }
            if (L.mode === F) break;
            if (L.lens[256] === 0) {
              (e.msg = `invalid code -- missing end-of-block`), (L.mode = F);
              break;
            }
            if (
              ((L.lenbits = 9),
              (Ee = { bits: L.lenbits }),
              (Te = a(s, L.lens, 0, L.nlen, L.lencode, 0, L.work, Ee)),
              (L.lenbits = Ee.bits),
              Te)
            ) {
              (e.msg = `invalid literal/lengths set`), (L.mode = F);
              break;
            }
            if (
              ((L.distbits = 6),
              (L.distcode = L.distdyn),
              (Ee = { bits: L.distbits }),
              (Te = a(c, L.lens, L.nlen, L.ndist, L.distcode, 0, L.work, Ee)),
              (L.distbits = Ee.bits),
              Te)
            ) {
              (e.msg = `invalid distances set`), (L.mode = F);
              break;
            }
            if (((L.mode = oe), I === d)) break inf_leave;
          case oe:
            L.mode = se;
          case se:
            if (V >= 6 && H >= 258) {
              (e.next_out = _e),
                (e.avail_out = H),
                (e.next_in = B),
                (e.avail_in = V),
                (L.hold = U),
                (L.bits = W),
                i(e, G),
                (_e = e.next_out),
                (z = e.output),
                (H = e.avail_out),
                (B = e.next_in),
                (R = e.input),
                (V = e.avail_in),
                (U = L.hold),
                (W = L.bits),
                L.mode === O && (L.back = -1);
              break;
            }
            for (
              L.back = 0;
              (q = L.lencode[U & ((1 << L.lenbits) - 1)]),
                (J = q >>> 24),
                (Y = (q >>> 16) & 255),
                (X = q & 65535),
                !(J <= W);
            ) {
              if (V === 0) break inf_leave;
              V--, (U += R[B++] << W), (W += 8);
            }
            if (Y && !(Y & 240)) {
              for (
                Z = J, Ce = Y, we = X;
                (q = L.lencode[we + ((U & ((1 << (Z + Ce)) - 1)) >> Z)]),
                  (J = q >>> 24),
                  (Y = (q >>> 16) & 255),
                  (X = q & 65535),
                  !(Z + J <= W);
              ) {
                if (V === 0) break inf_leave;
                V--, (U += R[B++] << W), (W += 8);
              }
              (U >>>= Z), (W -= Z), (L.back += Z);
            }
            if (
              ((U >>>= J), (W -= J), (L.back += J), (L.length = X), Y === 0)
            ) {
              L.mode = ue;
              break;
            }
            if (Y & 32) {
              (L.back = -1), (L.mode = O);
              break;
            }
            if (Y & 64) {
              (e.msg = `invalid literal/length code`), (L.mode = F);
              break;
            }
            (L.extra = Y & 15), (L.mode = ce);
          case ce:
            if (L.extra) {
              for (De = L.extra; W < De; ) {
                if (V === 0) break inf_leave;
                V--, (U += R[B++] << W), (W += 8);
              }
              (L.length += U & ((1 << L.extra) - 1)),
                (U >>>= L.extra),
                (W -= L.extra),
                (L.back += L.extra);
            }
            (L.was = L.length), (L.mode = le);
          case le:
            for (
              ;
              (q = L.distcode[U & ((1 << L.distbits) - 1)]),
                (J = q >>> 24),
                (Y = (q >>> 16) & 255),
                (X = q & 65535),
                !(J <= W);
            ) {
              if (V === 0) break inf_leave;
              V--, (U += R[B++] << W), (W += 8);
            }
            if (!(Y & 240)) {
              for (
                Z = J, Ce = Y, we = X;
                (q = L.distcode[we + ((U & ((1 << (Z + Ce)) - 1)) >> Z)]),
                  (J = q >>> 24),
                  (Y = (q >>> 16) & 255),
                  (X = q & 65535),
                  !(Z + J <= W);
              ) {
                if (V === 0) break inf_leave;
                V--, (U += R[B++] << W), (W += 8);
              }
              (U >>>= Z), (W -= Z), (L.back += Z);
            }
            if (((U >>>= J), (W -= J), (L.back += J), Y & 64)) {
              (e.msg = `invalid distance code`), (L.mode = F);
              break;
            }
            (L.offset = X), (L.extra = Y & 15), (L.mode = N);
          case N:
            if (L.extra) {
              for (De = L.extra; W < De; ) {
                if (V === 0) break inf_leave;
                V--, (U += R[B++] << W), (W += 8);
              }
              (L.offset += U & ((1 << L.extra) - 1)),
                (U >>>= L.extra),
                (W -= L.extra),
                (L.back += L.extra);
            }
            if (L.offset > L.dmax) {
              (e.msg = `invalid distance too far back`), (L.mode = F);
              break;
            }
            L.mode = P;
          case P:
            if (H === 0) break inf_leave;
            if (((K = G - H), L.offset > K)) {
              if (((K = L.offset - K), K > L.whave && L.sane)) {
                (e.msg = `invalid distance too far back`), (L.mode = F);
                break;
              }
              K > L.wnext
                ? ((K -= L.wnext), (ye = L.wsize - K))
                : (ye = L.wnext - K),
                K > L.length && (K = L.length),
                (be = L.window);
            } else (be = z), (ye = _e - L.offset), (K = L.length);
            K > H && (K = H), (H -= K), (L.length -= K);
            do z[_e++] = be[ye++];
            while (--K);
            L.length === 0 && (L.mode = se);
            break;
          case ue:
            if (H === 0) break inf_leave;
            (z[_e++] = L.length), H--, (L.mode = se);
            break;
          case de:
            if (L.wrap) {
              for (; W < 32; ) {
                if (V === 0) break inf_leave;
                V--, (U |= R[B++] << W), (W += 8);
              }
              if (
                ((G -= H),
                (e.total_out += G),
                (L.total += G),
                G &&
                  (e.adler = L.check =
                    L.flags
                      ? r(L.check, z, G, _e - G)
                      : n(L.check, z, G, _e - G)),
                (G = H),
                (L.flags ? U : ge(U)) !== L.check)
              ) {
                (e.msg = `incorrect data check`), (L.mode = F);
                break;
              }
              (U = 0), (W = 0);
            }
            L.mode = fe;
          case fe:
            if (L.wrap && L.flags) {
              for (; W < 32; ) {
                if (V === 0) break inf_leave;
                V--, (U += R[B++] << W), (W += 8);
              }
              if (U !== (L.total & 4294967295)) {
                (e.msg = `incorrect length check`), (L.mode = F);
                break;
              }
              (U = 0), (W = 0);
            }
            L.mode = pe;
          case pe:
            Te = p;
            break inf_leave;
          case F:
            Te = g;
            break inf_leave;
          case me:
            return _;
          case he:
          default:
            return h;
        }
      return (
        (e.next_out = _e),
        (e.avail_out = H),
        (e.next_in = B),
        (e.avail_in = V),
        (L.hold = U),
        (L.bits = W),
        (L.wsize ||
          (G !== e.avail_out && L.mode < F && (L.mode < de || I !== l))) &&
        Se(e, e.output, e.next_out, G - e.avail_out)
          ? ((L.mode = me), _)
          : ((ve -= e.avail_in),
            (G -= e.avail_out),
            (e.total_in += ve),
            (e.total_out += G),
            (L.total += G),
            L.wrap &&
              G &&
              (e.adler = L.check =
                L.flags
                  ? r(L.check, z, G, e.next_out - G)
                  : n(L.check, z, G, e.next_out - G)),
            (e.data_type =
              L.bits +
              (L.last ? 64 : 0) +
              (L.mode === O ? 128 : 0) +
              (L.mode === oe || L.mode === j ? 256 : 0)),
            ((ve === 0 && G === 0) || I === l) && Te === f && (Te = v),
            Te)
      );
    }
    function X(e) {
      if (!e || !e.state) return h;
      var t = e.state;
      return (t.window &&= null), (e.state = null), f;
    }
    function Z(e, t) {
      var n;
      return !e || !e.state || ((n = e.state), !(n.wrap & 2))
        ? h
        : ((n.head = t), (t.done = !1), f);
    }
    function Ce(e, t) {
      var r = t.length,
        i,
        a,
        o;
      return !e || !e.state || ((i = e.state), i.wrap !== 0 && i.mode !== D)
        ? h
        : i.mode === D && ((a = 1), (a = n(a, t, r, 0)), a !== i.check)
          ? g
          : ((o = Se(e, t, r, r)),
            o ? ((i.mode = me), _) : ((i.havedict = 1), f));
    }
    (e.inflateReset = U),
      (e.inflateReset2 = W),
      (e.inflateResetKeep = H),
      (e.inflateInit = ye),
      (e.inflateInit2 = ve),
      (e.inflate = Y),
      (e.inflateEnd = X),
      (e.inflateGetHeader = Z),
      (e.inflateSetDictionary = Ce),
      (e.inflateInfo = `pako inflate (from Nodeca project)`);
  }),
  be = t((e, t) => {
    t.exports = {
      Z_NO_FLUSH: 0,
      Z_PARTIAL_FLUSH: 1,
      Z_SYNC_FLUSH: 2,
      Z_FULL_FLUSH: 3,
      Z_FINISH: 4,
      Z_BLOCK: 5,
      Z_TREES: 6,
      Z_OK: 0,
      Z_STREAM_END: 1,
      Z_NEED_DICT: 2,
      Z_ERRNO: -1,
      Z_STREAM_ERROR: -2,
      Z_DATA_ERROR: -3,
      Z_BUF_ERROR: -5,
      Z_NO_COMPRESSION: 0,
      Z_BEST_SPEED: 1,
      Z_BEST_COMPRESSION: 9,
      Z_DEFAULT_COMPRESSION: -1,
      Z_FILTERED: 1,
      Z_HUFFMAN_ONLY: 2,
      Z_RLE: 3,
      Z_FIXED: 4,
      Z_DEFAULT_STRATEGY: 0,
      Z_BINARY: 0,
      Z_TEXT: 1,
      Z_UNKNOWN: 2,
      Z_DEFLATED: 8,
    };
  }),
  q = t((e, t) => {
    function n() {
      (this.text = 0),
        (this.time = 0),
        (this.xflags = 0),
        (this.os = 0),
        (this.extra = null),
        (this.extra_len = 0),
        (this.name = ``),
        (this.comment = ``),
        (this.hcrc = 0),
        (this.done = !1);
    }
    t.exports = n;
  }),
  J = t((e) => {
    var t = ye(),
      n = z(),
      r = U(),
      i = be(),
      a = V(),
      o = W(),
      s = q(),
      c = Object.prototype.toString;
    function l(e) {
      if (!(this instanceof l)) return new l(e);
      this.options = n.assign(
        { chunkSize: 16384, windowBits: 0, to: `` },
        e || {},
      );
      var u = this.options;
      u.raw &&
        u.windowBits >= 0 &&
        u.windowBits < 16 &&
        ((u.windowBits = -u.windowBits),
        u.windowBits === 0 && (u.windowBits = -15)),
        u.windowBits >= 0 &&
          u.windowBits < 16 &&
          !(e && e.windowBits) &&
          (u.windowBits += 32),
        u.windowBits > 15 &&
          u.windowBits < 48 &&
          (u.windowBits & 15 || (u.windowBits |= 15)),
        (this.err = 0),
        (this.msg = ``),
        (this.ended = !1),
        (this.chunks = []),
        (this.strm = new o()),
        (this.strm.avail_out = 0);
      var d = t.inflateInit2(this.strm, u.windowBits);
      if (
        d !== i.Z_OK ||
        ((this.header = new s()),
        t.inflateGetHeader(this.strm, this.header),
        u.dictionary &&
          (typeof u.dictionary == `string`
            ? (u.dictionary = r.string2buf(u.dictionary))
            : c.call(u.dictionary) === `[object ArrayBuffer]` &&
              (u.dictionary = new Uint8Array(u.dictionary)),
          u.raw &&
            ((d = t.inflateSetDictionary(this.strm, u.dictionary)),
            d !== i.Z_OK)))
      )
        throw Error(a[d]);
    }
    (l.prototype.push = function (e, a) {
      var o = this.strm,
        s = this.options.chunkSize,
        l = this.options.dictionary,
        u,
        d,
        f,
        p,
        m,
        h = !1;
      if (this.ended) return !1;
      (d = a === ~~a ? a : a === !0 ? i.Z_FINISH : i.Z_NO_FLUSH),
        (o.input =
          typeof e == `string`
            ? r.binstring2buf(e)
            : c.call(e) === `[object ArrayBuffer]`
              ? new Uint8Array(e)
              : e),
        (o.next_in = 0),
        (o.avail_in = o.input.length);
      do {
        if (
          (o.avail_out === 0 &&
            ((o.output = new n.Buf8(s)), (o.next_out = 0), (o.avail_out = s)),
          (u = t.inflate(o, i.Z_NO_FLUSH)),
          u === i.Z_NEED_DICT &&
            l &&
            (u = t.inflateSetDictionary(this.strm, l)),
          u === i.Z_BUF_ERROR && h === !0 && ((u = i.Z_OK), (h = !1)),
          u !== i.Z_STREAM_END && u !== i.Z_OK)
        )
          return this.onEnd(u), (this.ended = !0), !1;
        o.next_out &&
          (o.avail_out === 0 ||
            u === i.Z_STREAM_END ||
            (o.avail_in === 0 && (d === i.Z_FINISH || d === i.Z_SYNC_FLUSH))) &&
          (this.options.to === `string`
            ? ((f = r.utf8border(o.output, o.next_out)),
              (p = o.next_out - f),
              (m = r.buf2string(o.output, f)),
              (o.next_out = p),
              (o.avail_out = s - p),
              p && n.arraySet(o.output, o.output, f, p, 0),
              this.onData(m))
            : this.onData(n.shrinkBuf(o.output, o.next_out))),
          o.avail_in === 0 && o.avail_out === 0 && (h = !0);
      } while ((o.avail_in > 0 || o.avail_out === 0) && u !== i.Z_STREAM_END);
      return (
        u === i.Z_STREAM_END && (d = i.Z_FINISH),
        d === i.Z_FINISH
          ? ((u = t.inflateEnd(this.strm)),
            this.onEnd(u),
            (this.ended = !0),
            u === i.Z_OK)
          : d !== i.Z_SYNC_FLUSH || (this.onEnd(i.Z_OK), (o.avail_out = 0), !0)
      );
    }),
      (l.prototype.onData = function (e) {
        this.chunks.push(e);
      }),
      (l.prototype.onEnd = function (e) {
        e === i.Z_OK &&
          (this.result =
            this.options.to === `string`
              ? this.chunks.join(``)
              : n.flattenChunks(this.chunks)),
          (this.chunks = []),
          (this.err = e),
          (this.msg = this.strm.msg);
      });
    function u(e, t) {
      var n = new l(t);
      if ((n.push(e, !0), n.err)) throw n.msg || a[n.err];
      return n.result;
    }
    function d(e, t) {
      return (t ||= {}), (t.raw = !0), u(e, t);
    }
    (e.Inflate = l), (e.inflate = u), (e.inflateRaw = d), (e.ungzip = u);
  }),
  xe = e(
    t((e, t) => {
      var n = z().assign,
        r = ve(),
        i = J(),
        a = be(),
        o = {};
      n(o, r, i, a), (t.exports = o);
    })(),
  ),
  Se = e(ue()),
  Y = 1e4,
  X = 604800,
  Z = 18e3,
  Ce = 1e3,
  we = 4,
  Q = 400,
  Te = 12e3,
  $ = 20,
  Ee = 1e4,
  De = 80,
  Oe = 60,
  ke = 140,
  Ae = 100,
  je = 350,
  Me = 275,
  Ne = class {
    m_CMList = { rgCMList: [], rtLastLoaded: 0 };
    m_Storage;
    m_InitPromise;
    Init(e) {
      (this.m_Storage = e), (this.m_InitPromise = this.LoadFromCache());
    }
    async LoadFromCache() {
      if (this.m_InitPromise) return this.m_InitPromise;
      let e = await this.m_Storage.GetObject(this.GetLocalStorageKey());
      return Ie(e)
        ? ((this.m_CMList = e), this.m_CMList)
        : ((this.m_CMList = { rgCMList: [], rtLastLoaded: 0 }),
          this.WriteCMListToLocalStorage(),
          this.m_CMList);
    }
    async GetBestCMsToConnectTo() {
      try {
        let e = await this.LoadFromCache();
        (!e.rgCMList.length || Date.now() / 1e3 - e.rtLastLoaded > X) &&
          ((this.m_CMList = await this.GetCMListFromWebAPI()),
          this.WriteCMListToLocalStorage());
      } catch (e) {
        console.error(
          `There was a problem loading CM list. Attempting to use stale data. ${e}`,
        );
      }
      return this.PingCMs();
    }
    RecordCMDisconnected(e) {
      (e.nConnectFailures = (e.nConnectFailures || 0) + 1),
        (e.msPing = 2 ** 53 - 1),
        (e.nCMLoad = 2 ** 53 - 1),
        this.WriteCMListToLocalStorage();
    }
    BuildCMWebSocketURL(e) {
      return `wss://` + this.FixDevHost(e) + `/cmsocket/`;
    }
    FixDevHost(e) {
      return b.EUNIVERSE, e;
    }
    GetLocalStorageKey() {
      return `CCMList_` + b.EUNIVERSE;
    }
    WriteCMListToLocalStorage() {
      this.m_Storage.StoreObject(this.GetLocalStorageKey(), this.m_CMList);
    }
    async GetCMListFromWebAPI() {
      try {
        let e = await Fe(Pe, Y)(),
          t = this.m_CMList.rgCMList.reduce(
            (e, t) => ({ ...e, [t.strHost]: t }),
            {},
          );
        return {
          rgCMList: e.map((e) => ({ ...(t[e.strHost] || {}), ...e })),
          rtLastLoaded: new Date().getTime() / 1e3,
        };
      } catch {
        throw Error(`Failed to load CM List from webapi`);
      }
    }
    PingCMs() {
      let e = new Date().getTime() / 1e3 - Z,
        t = [],
        n = {};
      for (let r of this.m_CMList.rgCMList) {
        let i = Le(r),
          a = !i || r.rtLastCheck < e;
        a && t.length < $ && t.push(r),
          (!a || b.IN_MOBILE) && i && i < Ee && (n[r.strHost] = r);
      }
      `${t.length}`;
      let r = !1;
      return new Promise((e, i) => {
        let o = `immediate`,
          s,
          c,
          l = (t) => {
            if ((a(!r, `fnPingingComplete called a second time`), !r)) {
              let n = Object.keys(t)
                .map((e) => t[e])
                .sort((e, t) => Le(e) - Le(t));
              if (
                (`${n.length}${n.length ? n[0].strHost : `none`}`,
                (r = !0),
                this.WriteCMListToLocalStorage(),
                s && window.clearTimeout(s),
                c && window.clearTimeout(c),
                n.length)
              )
                return e(n);
              let a = this.GetCMWithFewestDisconnects();
              if (a) return e([a]);
              i(`No CMs available`);
            }
          };
        (t.length === 0 ||
          Object.keys(n).some((e) => this.BCMOkToUse(n[e], o)) ||
          (b.IN_MOBILE && Object.keys(n).length)) &&
          (Object.keys(n).length && b.IN_MOBILE, l(n)),
          r ||
            ((s = window.setTimeout(() => {
              (o = `timeout`),
                !r &&
                  Object.keys(n).some((e) => this.BCMOkToUse(n[e], o)) &&
                  l(n);
            }, Q)),
            (c = window.setTimeout(() => {
              (o = `seriouslytimeout`), l(n);
            }, Te)));
        let u = 0,
          d = 0,
          f,
          p = (e) => {
            !r && this.BCMOkToUse(e, o)
              ? l({ [e.strHost]: e })
              : (n[e.strHost] = e),
              (r || !f()) &&
                --d == 0 &&
                (r
                  ? this.WriteCMListToLocalStorage()
                  : this.BCMOkToUse(e, `seriouslytimeout`)
                    ? l({ [e.strHost]: e })
                    : ((n[e.strHost] = e), l(n)));
          };
        f = () => {
          if (u < t.length) {
            let e = t[u++];
            return (
              this.PingCM(e).then(() => {
                p(e);
              }),
              !0
            );
          }
          return !1;
        };
        for (let e = 0; e < we; e++) f() && d++;
      });
    }
    GetCMWithFewestDisconnects() {
      if (!this.m_CMList.rgCMList.length) return;
      let e = this.m_CMList.rgCMList[0],
        t = 1;
      for (; e.nConnectFailures > 0 && t < this.m_CMList.rgCMList.length; ) {
        let n = this.m_CMList.rgCMList[t++];
        (!n.nConnectFailures || n.nConnectFailures < e.nConnectFailures) &&
          (e = n);
      }
      return `` + (e ? this.FixDevHost(e.strHost) : `none!`), e;
    }
    BCMOkToUse(e, t) {
      if (!e) return !1;
      let n = e.msPing + e.nCMLoad;
      return n < De && e.msPing < Oe
        ? !0
        : t === `immediate`
          ? !1
          : (n < ke && e.msPing < Ae) ||
            (t !== `timeout` && n < je && e.msPing < Me);
    }
    async PingCM(e) {
      let t = `https://` + this.FixDevHost(e.strHost) + `/cmping/`;
      `${t}`;
      let n = performance.now(),
        r = Se.default.CancelToken.source(),
        i = window.setTimeout(() => {
          `${e.strHost}`, r.cancel();
        }, Ce);
      try {
        let a = await Se.default.head(t, { cancelToken: r.token });
        `${e.strHost}`, window.clearTimeout(i);
        let o = performance.now() - n,
          s = a.headers[`x-steam-cmload`]
            ? parseInt(a.headers[`x-steam-cmload`])
            : void 0;
        `${e.strHost}${o}${s}`, (e.msPing = o), (e.nCMLoad = s);
      } catch (t) {
        Se.default.isCancel(t) ? `${e.strHost}` : window.clearTimeout(i),
          (e.msPing = Ee),
          (e.nCMLoad = 0);
      }
      return (e.rtLastCheck = new Date().getTime() / 1e3), e.msPing;
    }
  };
async function Pe() {
  let e = `${b.WEBAPI_BASE_URL}ISteamDirectory/GetCMListForConnect/v1/?cellid=0&cmtype=websockets&origin=${self.origin}`;
  `${e}`;
  let t = (await Se.default.get(e)).data,
    n = (t && t.response && t.response.serverlist) || [];
  return (
    `${n.length}`, n.map((e, t) => ({ strHost: e.endpoint, nPriority: t }))
  );
}
function Fe(e, t) {
  return () =>
    new Promise((n, r) => {
      let i = !1,
        a = window.setTimeout(() => {
          (i = !0), r(Error(`Timed out`));
        }, t);
      e().then(
        (e) => {
          i || (clearTimeout(a), n(e));
        },
        (e) => {
          i || (clearTimeout(a), r(e));
        },
      );
    });
}
function Ie(e) {
  return (
    e &&
    typeof e == `object` &&
    Array.isArray(e.rgCMList) &&
    typeof e.rtLastLoaded == `number`
  );
}
function Le(e) {
  return (e.msPing || 0) + (e.nCMLoad || 0);
}
var Re = 3,
  ze = class extends L {
    m_Session = {
      m_bWaitingForLogonResponse: !1,
      m_nSessionID: 0,
      m_eResultLogonSuccess: 2,
      m_nSessionIDLast: 0,
      m_nClientInstanceID: `0`,
    };
    m_Socket;
    m_SocketCMHost;
    m_bLoadingCMList = !1;
    m_iIntervalHeartbeat;
    m_iCallSeq = 1;
    m_mapWaitingCallbacks = new Map();
    m_CMList = new Ne();
    constructor(e) {
      super(), C(this), this.m_CMList.Init(e);
    }
    BIsConnected() {
      return this.m_Socket && this.m_Socket.readyState == WebSocket.OPEN;
    }
    Connect() {
      return (
        (this.m_onConnect ||=
          (console.log(`Loading CM List`),
          (this.m_bConnected = !1),
          (this.m_bLoggedOn = !1),
          (this.m_bForceDisconnect = !1),
          (this.m_Session.m_bWaitingForLogonResponse = !0),
          (this.m_bLoadingCMList = !0),
          this.m_CMList
            .GetBestCMsToConnectTo()
            .then(
              (e) => (
                (this.m_bLoadingCMList = !1),
                new Promise((t, n) => {
                  let r = 0,
                    i = !1;
                  e.slice(0, Re).forEach((e, a, o) =>
                    this.AttemptHostConnect(e).then(
                      (n) => {
                        i
                          ? n.close(4e3)
                          : ((i = !0),
                            (this.m_Socket = n),
                            (this.m_SocketCMHost = e),
                            (this.m_bConnected = !0),
                            this.OnConnect(),
                            t());
                      },
                      () => {
                        console.log(
                          `Failed to connect to CM ${a + 1} of ${o.length}: ${e.strHost}`,
                        ),
                          r++,
                          r === o.length &&
                            (console.log(
                              `Failed to connect to all ${o.length} best CMs`,
                            ),
                            n());
                      },
                    ),
                  );
                })
              ),
            )
            .catch((e) => {
              throw ((this.m_bLoadingCMList = !1), this.OnDisconnect(), e);
            }))),
        this.m_onConnect
      );
    }
    AttemptHostConnect(e) {
      console.log(`Attempting to connect to host ${e.strHost}`);
      let t = new WebSocket(this.m_CMList.BuildCMWebSocketURL(e.strHost));
      return (
        (t.binaryType = `arraybuffer`),
        (t.onmessage = (e) => {
          let t = new g(e.data),
            n = o.InitHeaderFromPacket(t);
          n.GetEMsg() == 1
            ? this.DecodeAndDispatchMultiMsg(m.InitFromMsg(c, n))
            : this.DispatchMessage(n);
        }),
        new Promise((n, r) => {
          let i = !1,
            o = 3e3,
            s = window.setTimeout(() => {
              console.warn(
                `Socket connection timed out after ${o}ms: ${e.strHost}`,
              ),
                (i = !0),
                t.close(4e3),
                this.m_CMList.RecordCMDisconnected(e),
                r();
            }, o);
          (t.onopen = () => {
            console.log(`Connected socket to host ${e.strHost}`),
              a(!i, `Socket connection was opened after timing out.`),
              i || window.clearTimeout(s),
              n(t);
          }),
            (t.onerror = (t) => {
              i ||
                (window.clearTimeout(s),
                a(!1, `Socket connect failed`, t),
                console.log(t),
                t.message ? console.log(t.message) : console.log(`No message`),
                this.m_CMList.RecordCMDisconnected(e),
                r());
            });
        })
      );
    }
    get session() {
      return this.m_Session;
    }
    ClearHeartbeatInterval() {
      this.m_iIntervalHeartbeat &&=
        (window.clearInterval(this.m_iIntervalHeartbeat), void 0);
    }
    ResetHeartbeatInterval() {
      this.ClearHeartbeatInterval(),
        (this.m_iIntervalHeartbeat = window.setInterval(
          () => this.SendHeartbeat(),
          27e3,
        ));
    }
    SendHeartbeat() {
      let e = m.Init(ne, 703);
      this.Send(e);
    }
    OnConnect() {
      super.OnConnect(),
        this.m_Socket &&
          ((this.m_Socket.onerror = (e) => {}),
          this.ResetHeartbeatInterval(),
          (this.m_Socket.onclose = (e) => {
            this.OnDisconnect();
          }));
    }
    Disconnect() {
      this.m_Socket && this.m_Socket.close();
    }
    OnDisconnect() {
      (this.m_Socket = void 0),
        (this.m_SocketCMHost = void 0),
        (this.m_onConnect = void 0),
        this.ClearHeartbeatInterval(),
        super.OnDisconnect();
    }
    SendMsgAndAwaitResponse(e, t) {
      return new Promise((n, r) => {
        let i = this.m_iCallSeq++;
        e.Hdr().set_jobid_source(`` + i),
          this.Send(e)
            ? this.m_mapWaitingCallbacks.set(i, {
                iSeq: i,
                msgClass: t,
                fnCallback: n,
              })
            : this.ResolveAwaitWithTransportError(
                n,
                t,
                2,
                `Web socket not connected`,
              );
      });
    }
    SendInternal(e) {
      return this.m_Socket
        ? (this.m_steamid.BIsValid() &&
            e.Hdr().set_steamid(this.m_steamid.ConvertTo64BitString()),
          this.m_Session.m_nSessionID &&
            e.Hdr().set_client_sessionid(this.m_Session.m_nSessionID),
          this.m_Socket.send(e.Serialize()),
          e.GetEMsg() != 703 && this.ResetHeartbeatInterval(),
          !0)
        : !1;
    }
    BInternalShouldDispatchMessage(e) {
      if (
        e.BIsValid() &&
        e.Hdr().jobid_target() &&
        e.Hdr().jobid_target() !== `18446744073709551615`
      ) {
        let t = parseInt(e.Hdr().jobid_target());
        if (this.m_mapWaitingCallbacks.has(t)) {
          let n = this.m_mapWaitingCallbacks.get(t);
          if (n) {
            let r = m.InitFromMsg(n.msgClass, e);
            this.DEBUG_LogCMInterfaceActivity(r, `receive`, !0),
              r.BIsValid()
                ? n.fnCallback(r)
                : this.ResolveAwaitWithTransportError(
                    n.fnCallback,
                    n.msgClass,
                    102,
                    `Failed to parse response from server`,
                  ),
              this.m_mapWaitingCallbacks.delete(t);
          }
          return !1;
        }
        this.DEBUG_LogCMInterfaceActivity(e, `receive`, !1);
      }
      return !0;
    }
    LogOnResponseHandler = this.messageHandlers.RegisterEMessageAction(
      751,
      O,
      (e) => {
        let t = e.Body().eresult();
        (this.m_Session.m_bWaitingForLogonResponse = !1),
          (this.m_Session.m_eResultLogonSuccess = t),
          t == 1
            ? ((this.m_steamid = new P(e.Body().client_supplied_steamid())),
              (this.m_bLoggedOn = !0),
              (this.m_Session.m_nSessionID = e.Hdr().client_sessionid()),
              (this.m_Session.m_nSessionIDLast = this.m_Session.m_nSessionID),
              (this.m_Session.m_nClientInstanceID = e
                .Body()
                .client_instance_id()),
              this.OnLoggedOn())
            : (console.warn(
                `Received error code from LogOnResponse, disconnecting. EResult=`,
                e.Body().eresult(),
              ),
              t == 48 &&
                this.m_CMList.RecordCMDisconnected(this.m_SocketCMHost),
              this.Disconnect());
      },
    );
    ClientAccountInfoHandler = this.messageHandlers.RegisterEMessageAction(
      768,
      D,
      (e) => {
        (this.m_unAccountFlags = e.Body().account_flags() || 0),
          (this.m_strIPCountry = e.Body().ip_country() || ``),
          (this.m_strPersonaName = e.Body().persona_name() || ``);
      },
    );
    DecodeAndDispatchMultiMsg(e) {
      let t = e.Body().message_body();
      if (!t) return;
      e.Body().size_unzipped() && (t = xe.inflate(t));
      let n = new g(t);
      for (; n.GetCountBytesRemaining() > 0; ) {
        let e = n.GetUint32(),
          t = o.InitHeaderFromPacket(new g(n.GetPacket(), n.TellGet(), e));
        this.DispatchMessage(t), n.SeekGetCurrent(e);
      }
    }
  };
u([i], ze.prototype, `DecodeAndDispatchMultiMsg`, null),
  h({ enforceActions: `never` }),
  (window.AssertMsg = a);
function Be() {
  let e = new oe(!1),
    t,
    n = null,
    i = (t = new ze(e.Storage));
  j.Get().SetCMInterface(t),
    (n = new A(i, b.EREALM)),
    n.PerformInitialLogon(r),
    e.Init(t, !1, n),
    ae(
      e.FriendStore,
      e.ChatStore,
      document.getElementById(`friendslist-container`),
    );
}
async function Ve() {
  ie();
  let { CBroadcastApp: e } = await p(
    async () => {
      let { CBroadcastApp: e } = await import(
        `./broadcastapp.js?contenthash=BrXPi6OD`
      );
      return { CBroadcastApp: e };
    },
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
    import.meta.url,
  );
  new e().Init(() => {
    window.location.reload();
  });
}
document.addEventListener(`DOMContentLoaded`, async function () {
  s(), k(), await He(b.LANGUAGE);
  let e = !0;
  f.steamid && de(f.steamid),
    !b.IN_CLIENT &&
      ce.STEAM_TV &&
      (r.logged_in ? M(f.steamid) : ((e = !1), Ve())),
    N.SetNavEventParams(`steamclient`, ce.STEAM_TV ? `steamtv` : `friendsui`),
    e && Be();
});
async function He(e) {
  let t = x.GetLanguageFallback(e),
    r = e === t,
    [i, a] = await Promise.all([
      n(
        Object.assign({
          "../localization/friendsui_arabic.json": () =>
            p(
              () => import(`./friendsui_arabic.js?contenthash=D50npDjR`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_brazilian.json": () =>
            p(
              () => import(`./friendsui_brazilian.js?contenthash=pvyQsUlZ`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_bulgarian.json": () =>
            p(
              () => import(`./friendsui_bulgarian.js?contenthash=D31_kaXc`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_czech.json": () =>
            p(
              () => import(`./friendsui_czech.js?contenthash=DZUFfG-h`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_danish.json": () =>
            p(
              () => import(`./friendsui_danish.js?contenthash=BgW143sf`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_dutch.json": () =>
            p(
              () => import(`./friendsui_dutch.js?contenthash=Oz1dxKub`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_english.json": () =>
            p(
              () => import(`./friendsui_english.js?contenthash=ClJW6Wca`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_finnish.json": () =>
            p(
              () => import(`./friendsui_finnish.js?contenthash=CmxZ8MOI`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_french.json": () =>
            p(
              () => import(`./friendsui_french.js?contenthash=Dpe4fOza`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_german.json": () =>
            p(
              () => import(`./friendsui_german.js?contenthash=Cwwt8H0x`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_greek.json": () =>
            p(
              () => import(`./friendsui_greek.js?contenthash=CMWU6SjD`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_hungarian.json": () =>
            p(
              () => import(`./friendsui_hungarian.js?contenthash=DiUNpLQ-`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_indonesian.json": () =>
            p(
              () => import(`./friendsui_indonesian.js?contenthash=Y9D1hIus`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_italian.json": () =>
            p(
              () => import(`./friendsui_italian.js?contenthash=ClTymPYq`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_japanese.json": () =>
            p(
              () => import(`./friendsui_japanese.js?contenthash=AaBGMYwD`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_koreana.json": () =>
            p(
              () => import(`./friendsui_koreana.js?contenthash=DD-SW52I`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_latam.json": () =>
            p(
              () => import(`./friendsui_latam.js?contenthash=DeTqZtgQ`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_malay.json": () =>
            p(
              () => import(`./friendsui_malay.js?contenthash=D5ILfRAB`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_norwegian.json": () =>
            p(
              () => import(`./friendsui_norwegian.js?contenthash=C_37mX8t`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_polish.json": () =>
            p(
              () => import(`./friendsui_polish.js?contenthash=Avupht_Z`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_portuguese.json": () =>
            p(
              () => import(`./friendsui_portuguese.js?contenthash=CqB9Q5TD`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_romanian.json": () =>
            p(
              () => import(`./friendsui_romanian.js?contenthash=DVtIiRWA`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_russian.json": () =>
            p(
              () => import(`./friendsui_russian.js?contenthash=DbOAtRRo`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_sc_schinese.json": () =>
            p(
              () => import(`./friendsui_sc_schinese.js?contenthash=CP_BnaQW`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_schinese.json": () =>
            p(
              () => import(`./friendsui_schinese.js?contenthash=CrmZAQSk`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_spanish.json": () =>
            p(
              () => import(`./friendsui_spanish.js?contenthash=BvzNUnmV`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_swedish.json": () =>
            p(
              () => import(`./friendsui_swedish.js?contenthash=DmGppAkf`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_tchinese.json": () =>
            p(
              () => import(`./friendsui_tchinese.js?contenthash=C6MeSZx4`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_thai.json": () =>
            p(
              () => import(`./friendsui_thai.js?contenthash=Bp5sipsi`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_turkish.json": () =>
            p(
              () => import(`./friendsui_turkish.js?contenthash=cSvgHtQG`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_ukrainian.json": () =>
            p(
              () => import(`./friendsui_ukrainian.js?contenthash=B_a5q3yx`),
              [],
              import.meta.url,
            ),
          "../localization/friendsui_vietnamese.json": () =>
            p(
              () => import(`./friendsui_vietnamese.js?contenthash=BokVGROU`),
              [],
              import.meta.url,
            ),
        }),
        `../localization/friendsui_${e}.json`,
        3,
      ),
      r
        ? {}
        : n(
            Object.assign({
              "../localization/friendsui_arabic.json": () =>
                p(
                  () => import(`./friendsui_arabic.js?contenthash=D50npDjR`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_brazilian.json": () =>
                p(
                  () => import(`./friendsui_brazilian.js?contenthash=pvyQsUlZ`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_bulgarian.json": () =>
                p(
                  () => import(`./friendsui_bulgarian.js?contenthash=D31_kaXc`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_czech.json": () =>
                p(
                  () => import(`./friendsui_czech.js?contenthash=DZUFfG-h`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_danish.json": () =>
                p(
                  () => import(`./friendsui_danish.js?contenthash=BgW143sf`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_dutch.json": () =>
                p(
                  () => import(`./friendsui_dutch.js?contenthash=Oz1dxKub`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_english.json": () =>
                p(
                  () => import(`./friendsui_english.js?contenthash=ClJW6Wca`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_finnish.json": () =>
                p(
                  () => import(`./friendsui_finnish.js?contenthash=CmxZ8MOI`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_french.json": () =>
                p(
                  () => import(`./friendsui_french.js?contenthash=Dpe4fOza`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_german.json": () =>
                p(
                  () => import(`./friendsui_german.js?contenthash=Cwwt8H0x`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_greek.json": () =>
                p(
                  () => import(`./friendsui_greek.js?contenthash=CMWU6SjD`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_hungarian.json": () =>
                p(
                  () => import(`./friendsui_hungarian.js?contenthash=DiUNpLQ-`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_indonesian.json": () =>
                p(
                  () =>
                    import(`./friendsui_indonesian.js?contenthash=Y9D1hIus`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_italian.json": () =>
                p(
                  () => import(`./friendsui_italian.js?contenthash=ClTymPYq`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_japanese.json": () =>
                p(
                  () => import(`./friendsui_japanese.js?contenthash=AaBGMYwD`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_koreana.json": () =>
                p(
                  () => import(`./friendsui_koreana.js?contenthash=DD-SW52I`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_latam.json": () =>
                p(
                  () => import(`./friendsui_latam.js?contenthash=DeTqZtgQ`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_malay.json": () =>
                p(
                  () => import(`./friendsui_malay.js?contenthash=D5ILfRAB`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_norwegian.json": () =>
                p(
                  () => import(`./friendsui_norwegian.js?contenthash=C_37mX8t`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_polish.json": () =>
                p(
                  () => import(`./friendsui_polish.js?contenthash=Avupht_Z`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_portuguese.json": () =>
                p(
                  () =>
                    import(`./friendsui_portuguese.js?contenthash=CqB9Q5TD`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_romanian.json": () =>
                p(
                  () => import(`./friendsui_romanian.js?contenthash=DVtIiRWA`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_russian.json": () =>
                p(
                  () => import(`./friendsui_russian.js?contenthash=DbOAtRRo`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_sc_schinese.json": () =>
                p(
                  () =>
                    import(`./friendsui_sc_schinese.js?contenthash=CP_BnaQW`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_schinese.json": () =>
                p(
                  () => import(`./friendsui_schinese.js?contenthash=CrmZAQSk`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_spanish.json": () =>
                p(
                  () => import(`./friendsui_spanish.js?contenthash=BvzNUnmV`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_swedish.json": () =>
                p(
                  () => import(`./friendsui_swedish.js?contenthash=DmGppAkf`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_tchinese.json": () =>
                p(
                  () => import(`./friendsui_tchinese.js?contenthash=C6MeSZx4`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_thai.json": () =>
                p(
                  () => import(`./friendsui_thai.js?contenthash=Bp5sipsi`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_turkish.json": () =>
                p(
                  () => import(`./friendsui_turkish.js?contenthash=cSvgHtQG`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_ukrainian.json": () =>
                p(
                  () => import(`./friendsui_ukrainian.js?contenthash=B_a5q3yx`),
                  [],
                  import.meta.url,
                ),
              "../localization/friendsui_vietnamese.json": () =>
                p(
                  () =>
                    import(`./friendsui_vietnamese.js?contenthash=BokVGROU`),
                  [],
                  import.meta.url,
                ),
            }),
            `../localization/friendsui_${t}.json`,
            3,
          ),
      T.Ready(),
    ]);
  _.AddTokens(i, a);
}
