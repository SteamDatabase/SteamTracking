/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8843],
  {
    97824: (e) => {
      e.exports = {
        OpenInBannerContainer: "_1EQpm6hAsghyCST7W04m-E",
        OpenInBannerContent: "_13oFTFTjvz0YaOVnWZxyqr",
        ValveOnly: "_3jg5qxP4_hiZYa6-GJDCOp",
        BannerMessage: "_1HSa8QK0U-qQCGObG6XYFT",
        BannerTitle: "_3Xfc_DOo4BUZBmxkSRmD6y",
        BannerButtonContainer: "_1lwkSayKFi-9WCDd6pq5bV",
        BannerButton: "_1jso7z80FWGn42k1HP0_cf",
      };
    },
    62381: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => r });
      var s = n(30470);
      let i = { success: !0, result: 1 };
      class o {
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
            let s = this.m_iCallSeq++;
            this.BSendMsg(e, s)
              ? this.m_mapWaitingCallbacks.set(s, {
                  iSeq: s,
                  fnCallback: t,
                  fnError: n,
                })
              : n();
          });
        }
        BSendMsg(e, t) {
          if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN)
            return !1;
          let n = Object.assign({}, e, {
            universe: s.TS.EUNIVERSE,
            accountid: s.iA.accountid,
          });
          void 0 !== t && (n.sequenceid = t);
          try {
            return this.m_socket.send(JSON.stringify(n)), !0;
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
              this.m_socket = new WebSocket(
                "ws://127.0.0.1:27060/clientsocket/",
              );
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
      let r = new (class {
        m_connection = new o();
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
            () => i,
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
            !(
              !this.m_connection.connected_to_client || !this.m_connection.ready
            ) &&
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
            !s.iA.logged_in ||
            s.iA.accountid == this.m_connection.ClientInfo.unAccountID
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
                      1 === e.success ? i : this.FailureResult(e.success),
                    ),
            )
            .catch(() => this.FailureResult());
        }
      })();
      window.ClientConnectionAPI = r;
    },
    71009: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { OpenInDesktopClient: () => m, default: () => p });
      var s = n(90626),
        i = n(30470),
        o = n(84811),
        r = n(62381),
        c = n(97824),
        a = n(78327),
        l = n(2627),
        u = n(61859);
      const m = (0, o.Nr)(function (e) {
          const [t, n] = s.useState(22);
          s.useEffect(() => {
            i.TS.IN_CLIENT ||
              i.TS.IN_MOBILE ||
              i.TS.IN_MOBILE_WEBVIEW ||
              r.W.BClientConnectedAndSupportsMessage("OpenSteamURL").then(
                (e) => {
                  n(e ? 1 : 2);
                },
              );
          }, []);
          const o = s.useCallback(() => {
            let e = `${(0, a.yl)()}//openurl/`;
            const n = (0, l.VY)("browserid");
            if (n) {
              const t = new URL(window.location.href),
                s = new URLSearchParams(t.search);
              s.set("utm_bid", n),
                (e += t.origin + t.pathname + "?" + s.toString() + t.hash);
            } else e += window.location.href;
            1 == t ? r.W.OpenSteamURL(e) : (window.location.href = e);
          }, [t]);
          return s.createElement(
            "div",
            { className: c.OpenInBannerContainer },
            s.createElement(
              "div",
              { className: c.OpenInBannerContent },
              s.createElement(
                "div",
                { className: c.BannerButtonContainer },
                s.createElement(
                  "div",
                  { onClick: o, className: c.BannerButton },
                  (0, u.we)("#OpenInDesktopAppBanner_OpenAppButton"),
                ),
              ),
              s.createElement(
                "div",
                { className: c.BannerMessage },
                s.createElement(
                  "div",
                  { className: c.BannerTitle },
                  s.createElement(
                    "b",
                    null,
                    (0, u.we)("#OpenInDesktopAppBanner_NotSignedIn"),
                  ),
                  s.createElement("br", null),
                  (0, u.we)("#OpenInDesktopAppBanner_Body"),
                ),
              ),
            ),
          );
        }),
        p = m;
    },
  },
]);
