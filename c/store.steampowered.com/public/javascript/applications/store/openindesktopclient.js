(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8843],
  {
    chunkid: (module) => {
      module.exports = {
        OpenInBannerContainer: "_1EQpm6hAsghyCST7W04m-E",
        OpenInBannerContent: "_13oFTFTjvz0YaOVnWZxyqr",
        ValveOnly: "_3jg5qxP4_hiZYa6-GJDCOp",
        BannerMessage: "_1HSa8QK0U-qQCGObG6XYFT",
        BannerTitle: "_3Xfc_DOo4BUZBmxkSRmD6y",
        BannerButtonContainer: "_1lwkSayKFi-9WCDd6pq5bV",
        BannerButton: "_1jso7z80FWGn42k1HP0_cf",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
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
              : __webpack_require__();
          });
        }
        BSendMsg(_, _) {
          if (!this.m_socket || this.m_socket.readyState != WebSocket.OPEN)
            return !1;
          let _ = Object.assign({}, _, {
            universe: _._.EUNIVERSE,
            accountid: _._.accountid,
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
              this.m_socket = new WebSocket(
                "ws://127.0.0.1:27060/clientsocket/",
              );
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
            !(
              !this.m_connection.connected_to_client || !this.m_connection.ready
            ) &&
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
            !_._.logged_in ||
            _._.accountid == this.m_connection.ClientInfo.unAccountID
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
      window.ClientConnectionAPI = _;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          OpenInDesktopClient: () => _,
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = (0, _._)(function (_) {
          const [_, __webpack_require__] = _.useState(22);
          _.useEffect(() => {
            _._.IN_CLIENT ||
              _._.IN_MOBILE ||
              _._.IN_MOBILE_WEBVIEW ||
              _._.BClientConnectedAndSupportsMessage("OpenSteamURL").then(
                (_) => {
                  __webpack_require__(_ ? 1 : 2);
                },
              );
          }, []);
          const _ = _.useCallback(() => {
            let _ = `${(0, _._)()}//openurl/`;
            const _ = (0, _._)("browserid");
            if (_) {
              const _ = new URL(window.location.href),
                _ = new URLSearchParams(_.search);
              _.set("utm_bid", _),
                (_ += _.origin + _.pathname + "?" + _.toString() + _.hash);
            } else _ += window.location.href;
            1 == _ ? _._.OpenSteamURL(_) : (window.location.href = _);
          }, [_]);
          return _.createElement(
            "div",
            {
              className: _.OpenInBannerContainer,
            },
            _.createElement(
              "div",
              {
                className: _.OpenInBannerContent,
              },
              _.createElement(
                "div",
                {
                  className: _.BannerButtonContainer,
                },
                _.createElement(
                  "div",
                  {
                    onClick: _,
                    className: _.BannerButton,
                  },
                  (0, _._)("#OpenInDesktopAppBanner_OpenAppButton"),
                ),
              ),
              _.createElement(
                "div",
                {
                  className: _.BannerMessage,
                },
                _.createElement(
                  "div",
                  {
                    className: _.BannerTitle,
                  },
                  _.createElement(
                    "b",
                    null,
                    (0, _._)("#OpenInDesktopAppBanner_NotSignedIn"),
                  ),
                  _.createElement("br", null),
                  (0, _._)("#OpenInDesktopAppBanner_Body"),
                ),
              ),
            ),
          );
        }),
        _ = _;
    },
  },
]);
