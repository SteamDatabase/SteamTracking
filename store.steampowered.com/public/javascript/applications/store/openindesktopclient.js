/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4118],
  {
    89484: (e) => {
      e.exports = {
        OpenInBannerContainer: "_3YOPN-YurHpxmijm6fw0W2",
        OpenInBannerContent: "_2gX86rIwUFoOU9D_YtfPsQ",
        ValveOnly: "_279gTwJyCp3f0wCT_04PZ1",
        BannerMessage: "_2_QgZ0KdLRqOboc7dL93zp",
        BannerBody: "_1MvwzmZWZ0gKckaXdcu_Pz",
        BannerButtonContainer: "U5d0i5qNqrLVUrEBeVc1I",
        BannerButton: "_2EVpuvZsHbK9GiVjknSF77",
      };
    },
    43390: (e, t, n) => {
      "use strict";
      n.d(t, { F: () => c });
      var s = n(65255);
      let i = { success: !0, result: 1 };
      class o {
        constructor() {
          (this.m_mapWaitingCallbacks = new Map()),
            (this.m_iCallSeq = 1),
            (this.m_bReady = !1),
            (this.m_bClientConnectionFailed = !1),
            (this.m_bSecurityException = !1),
            (this.m_ClientInfo = {
              ulVersion: "",
              bFriendsUIEnabled: !1,
              unAccountID: 0,
              rgSupportedMessages: [],
            });
        }
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
          return this.m_socket && this.m_socket.readyState == WebSocket.OPEN;
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
            universe: s.De.EUNIVERSE,
            accountid: s.L7.accountid,
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
          if (this.m_bReady && this.m_socket.readyState == WebSocket.OPEN)
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
      let c = new (class {
        constructor() {
          (this.m_connection = new o()),
            (this.m_bAllowAccountMismatch = !1),
            (this.m_mapCacheSubscribedApp = new Map());
        }
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
        SetAllowAccountMismatch(e) {
          this.m_bAllowAccountMismatch = e;
        }
        BClientConnected() {
          return this.m_connection.Connect().then(
            () => i,
            () => this.FailureResult(),
          );
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
        ShowChatRoomGroupInvite(e) {
          let t = { message: "ShowChatRoomGroupInvite", invite_code: e };
          return this.GenericEResultCall(t);
        }
        BIsSubscribedApp(e) {
          if (this.m_mapCacheSubscribedApp.has(e))
            return Promise.resolve(this.m_mapCacheSubscribedApp.get(e));
          let t = { message: "IsSubscribedApp", appid: e };
          return this.GenericEResultCall(t).then((t) => {
            if (t.connect_failed) return;
            let n = 1 == t.result;
            return this.m_mapCacheSubscribedApp.set(e, n), n;
          });
        }
        OpenFriendsDialog() {
          return this.GenericEResultCall({ message: "OpenFriendsDialog" });
        }
        OpenSteamURL(e) {
          let t = { message: "OpenSteamURL", url: e };
          return this.GenericEResultCall(t);
        }
        BClientAccountMatches() {
          return (
            !s.L7.logged_in ||
            s.L7.accountid == this.m_connection.ClientInfo.unAccountID
          );
        }
        GenericEResultCall(e) {
          return this.m_connection
            .Connect()
            .then(() =>
              this.m_bAllowAccountMismatch || this.BClientAccountMatches()
                ? this.m_connection
                    .SendMsgAndAwaitResponse(e)
                    .then((e) =>
                      1 === e.success ? i : this.FailureResult(e.success),
                    )
                : { success: !1, result: 19, account_mismatch: !0 },
            )
            .catch(() => this.FailureResult());
        }
      })();
      window.ClientConnectionAPI = c;
    },
    74479: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { OpenInDesktopClient: () => a, default: () => l });
      var s = n(47427),
        i = n(65255),
        o = n(10162),
        c = n(43390),
        r = n(89484);
      const a = (0, o.AP)(function (e) {
          const [t, n] = s.useState(22);
          s.useEffect(() => {
            i.De.IN_CLIENT ||
              i.De.IN_MOBILE ||
              i.De.IN_MOBILE_WEBVIEW ||
              c.F.BClientConnected().then((e) => {
                e.success &&
                2 != e.result &&
                c.F.BClientSupportsMessage("OpenSteamURL")
                  ? n(1)
                  : n(2);
              });
          }, []);
          const o = s.useCallback(() => {
            const e = "steam://openurl/" + window.location.href;
            1 == t ? c.F.OpenSteamURL(e) : (window.location.href = e);
          }, [t]);
          return s.createElement(
            "div",
            { className: r.OpenInBannerContainer },
            s.createElement("div", { className: r.ValveOnly }, "Valve Only"),
            s.createElement(
              "div",
              { className: r.OpenInBannerContent },
              s.createElement(
                "div",
                { className: r.BannerButtonContainer },
                s.createElement(
                  "div",
                  { onClick: o, className: r.BannerButton },
                  "Open in Desktop App",
                ),
                !1,
              ),
              s.createElement(
                "div",
                { className: r.BannerMessage },
                s.createElement(
                  "div",
                  { className: r.BannerTitle },
                  "Open this page in the Steam App to wishlist, follow, purchase and see recommendations",
                ),
              ),
            ),
          );
        }),
        l = a;
    },
  },
]);
