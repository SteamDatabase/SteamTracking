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
      n.d(t, { W: () => c });
      var s = n(37085),
        i = n(30470);
      let o = { success: !0, result: s.d.k_EResultOK };
      class r {
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
            universe: i.TS.EUNIVERSE,
            accountid: i.iA.accountid,
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
                    n.success == s.d.k_EResultOK
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
      let c = new (class {
        m_connection = new r();
        FailureResult(e = s.d.k_EResultFail) {
          let t = { success: !1, result: e };
          return (
            this.m_connection &&
              !this.m_connection.browser_supported &&
              (t.browser_unsupported = !0),
            this.m_connection &&
              !this.m_connection.connected_to_client &&
              (t.connect_failed = !0),
            e == s.d.k_EResultInvalidProtocolVer && (t.call_unsupported = !0),
            t
          );
        }
        BClientConnected() {
          return this.m_connection.Connect().then(
            () => o,
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
            let n = t.result == s.d.k_EResultOK;
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
            !i.iA.logged_in ||
            i.iA.accountid == this.m_connection.ClientInfo.unAccountID
          );
        }
        GenericEResultCall(e, t = !1) {
          return this.m_connection
            .Connect()
            .then(() =>
              t && !this.BClientAccountMatches()
                ? {
                    success: !1,
                    result: s.d.k_EResultInvalidSteamID,
                    account_mismatch: !0,
                  }
                : this.m_connection
                    .SendMsgAndAwaitResponse(e)
                    .then((e) =>
                      e.success === s.d.k_EResultOK
                        ? o
                        : this.FailureResult(e.success),
                    ),
            )
            .catch(() => this.FailureResult());
        }
      })();
      window.ClientConnectionAPI = c;
    },
    71009: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { OpenInDesktopClient: () => p, default: () => h });
      var s = n(37085),
        i = n(90626),
        o = n(30470),
        r = n(84811),
        c = n(62381),
        a = n(97824),
        l = n(78327),
        u = n(2627),
        m = n(61859);
      const p = (0, r.Nr)(function (e) {
          const [t, n] = i.useState(s.d.k_EResultPending);
          i.useEffect(() => {
            o.TS.IN_CLIENT ||
              o.TS.IN_MOBILE ||
              o.TS.IN_MOBILE_WEBVIEW ||
              c.W.BClientConnectedAndSupportsMessage("OpenSteamURL").then(
                (e) => {
                  n(e ? s.d.k_EResultOK : s.d.k_EResultFail);
                },
              );
          }, []);
          const r = i.useCallback(() => {
            let e = `${(0, l.yl)()}//openurl/`;
            const n = (0, u.VY)("browserid");
            if (n) {
              const t = new URL(window.location.href),
                s = new URLSearchParams(t.search);
              s.set("utm_bid", n),
                (e += t.origin + t.pathname + "?" + s.toString() + t.hash);
            } else e += window.location.href;
            t == s.d.k_EResultOK
              ? c.W.OpenSteamURL(e)
              : (window.location.href = e);
          }, [t]);
          return i.createElement(
            "div",
            { className: a.OpenInBannerContainer },
            i.createElement(
              "div",
              { className: a.OpenInBannerContent },
              i.createElement(
                "div",
                { className: a.BannerButtonContainer },
                i.createElement(
                  "div",
                  { onClick: r, className: a.BannerButton },
                  (0, m.we)("#OpenInDesktopAppBanner_OpenAppButton"),
                ),
              ),
              i.createElement(
                "div",
                { className: a.BannerMessage },
                i.createElement(
                  "div",
                  { className: a.BannerTitle },
                  i.createElement(
                    "b",
                    null,
                    (0, m.we)("#OpenInDesktopAppBanner_NotSignedIn"),
                  ),
                  i.createElement("br", null),
                  (0, m.we)("#OpenInDesktopAppBanner_Body"),
                ),
              ),
            ),
          );
        }),
        h = p;
    },
  },
]);
