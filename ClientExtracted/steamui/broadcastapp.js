"use strict";
(() => {
  (self.webpackChunksteamui = self.webpackChunksteamui || []).push([
    [7653],
    {
      87570: (J, b, r) => {
        r.r(b), r.d(b, { default: () => H });
        var a = r(62540),
          m = r(63696),
          f = r(74436),
          g = r(55239),
          B = r(42095),
          M = r(12302),
          u = r(50777),
          p = r(7727),
          A = r(64932),
          d = r(71262),
          O = r(69871),
          N = r(20447),
          V = "10986482",
          E = Object.defineProperty,
          R = Object.getOwnPropertyDescriptor,
          W = (t, e, o, s) => {
            for (
              var n = s > 1 ? void 0 : s ? R(e, o) : e, i = t.length - 1, c;
              i >= 0;
              i--
            )
              (c = t[i]) && (n = (s ? c(e, o, n) : c(n)) || n);
            return s && n && E(e, o, n), n;
          };
        const G = ({ group: t, onClick: e }) => {
          const o = t.watching_broadcast_steamid;
          return (0, a.jsx)("button", {
            className:
              "ChatRoomListGroupItem NoChannels WatchPartyGroup DialogButton watchHowButton",
            onClick: e,
            children: (0, a.jsxs)("div", {
              className: "ChatRoomListGroupItem_header",
              children: [
                (0, a.jsx)(O.I, { group: t, small: !0 }),
                (0, a.jsxs)("div", {
                  className: "groupNameStatusContainer",
                  children: [
                    (0, a.jsx)("div", {
                      className: "chatRoomName",
                      children: t.name,
                    }),
                    o &&
                      (0, a.jsx)("div", {
                        className: "chatRoomDetails",
                        children: (0, p.we)(
                          "#Broadcast_WatchParty_Viewers_NoneActive",
                        ),
                      }),
                  ],
                }),
              ],
            }),
          });
        };
        class T extends m.Component {
          CreateWatchParty(e = !1) {
            const {
              browserContext: o,
              ownerWindow: s,
              broadcastAccountId: n,
              initialFriend: i,
            } = this.props;
            this.Close();
            const c = e && i ? [i.accountid] : [];
            U(o, s || window, n, c);
          }
          WatchAlone() {
            this.Close();
          }
          UpgradeExisting(e) {
            const {
              broadcastAccountId: o,
              browserContext: s,
              broadcastChannelID: n,
              broadcastTabId: i,
            } = this.props;
            this.Close(),
              n
                ? e.SetChatRoomGroupWatchingBroadcast(void 0, n)
                : e.SetChatRoomGroupWatchingBroadcast(o);
            const c = g.xm.UIStore.ShowAndOrActivateChatRoomGroup(s, e, !0);
            i && g.xm.UIStore.CloseTabByID(i),
              this.props.bIsNewSteamTVDialog || c.ShowBroadcast();
          }
          Close() {
            const { closeModal: e } = this.props;
            e && e();
          }
          render() {
            const { closeModal: e, initialFriend: o } = this.props,
              n = g.xm.ChatStore.currentChatRoomGroups.filter((c) =>
                c.BCanIAssociateBroadcast(),
              ),
              i = o;
            return (0, a.jsx)("div", {
              className: "chatModalCover",
              children: (0, a.jsx)(M.x_, {
                onEscKeypress: e,
                children: (0, a.jsxs)(u.UC, {
                  className: "watchPartyDialog",
                  children: [
                    (0, a.jsxs)(u.nB, {
                      children: [
                        (0, a.jsx)("div", {
                          className: "watchPartyPrompt",
                          children: (0, p.we)("#Broadcast_WatchPrompt"),
                        }),
                        (0, a.jsxs)(u.xz, {
                          children: [
                            !this.props.bIsNewSteamTVDialog &&
                              (0, a.jsx)(u.$n, {
                                svgicon: B.Gv$,
                                className: "watchHowButton",
                                onClick: this.WatchAlone,
                                children: (0, p.we)("#Broadcast_WatchAlone"),
                              }),
                            i &&
                              (0, a.jsxs)(u.$n, {
                                className: "watchHowButton",
                                onClick: () => this.CreateWatchParty(!0),
                                children: [
                                  (0, a.jsx)(N.gv, {
                                    friend: i,
                                    context: null,
                                    bLarge: !1,
                                  }),
                                  (0, p.PP)(
                                    "#Broadcast_WatchWith",
                                    (0, a.jsxs)("span", {
                                      className: "highlight",
                                      children: [" ", i.display_name],
                                    }),
                                  ),
                                ],
                              }),
                            n.length !== 0 &&
                              (0, a.jsxs)(m.Fragment, {
                                children: [
                                  (0, a.jsx)(u.JU, {
                                    children: (0, p.we)(
                                      "#Broadcast_WatchWithExistingWatchParty",
                                    ),
                                  }),
                                  n.map((c) =>
                                    (0, a.jsx)(
                                      G,
                                      {
                                        group: c,
                                        onClick: () => this.UpgradeExisting(c),
                                      },
                                      c.unique_id,
                                    ),
                                  ),
                                ],
                              }),
                            (0, a.jsx)(u.$n, {
                              className: "watchHowButton newWatchGroup",
                              svgicon: B.u9R,
                              onClick: () => this.CreateWatchParty(!1),
                              children: (0, p.we)(
                                "#Broadcast_LinkBroadcastToGroup_New",
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)(u.wi, {}),
                  ],
                }),
              }),
            });
          }
        }
        W([d.oI], T.prototype, "WatchAlone", 1),
          W([d.oI], T.prototype, "Close", 1);
        function U(t, e, o, s) {
          (0, M.HT)(
            (0, a.jsx)(A.zw, {
              browserContext: t,
              bHideChatNameEntry: !1,
              vecInvitePlayers: s,
              chatViewToReplace: void 0,
              creationOptions: { unBroadcastAccountId: o },
              strTitle: (0, p.we)("#Broadcast_CreateWatchParty"),
            }),
            e,
            "CreateChatDialog",
            {
              strTitle: (0, p.we)("#Broadcast_CreateWatchParty"),
              popupWidth: 450,
              popupHeight: 600,
            },
            (0, f.h8)(e),
          );
        }
        var x = r(45510),
          S = r(89193),
          D = r(41230),
          k = r(7470),
          _ = r(10242),
          q = r(89454),
          tt = r.n(q),
          y = r(3519),
          F = r(44613),
          $ = r(60925),
          at = r(37075),
          et = r(80358),
          st = r(79853),
          v = r(56604),
          z = r(28614),
          K = r(23365),
          ot = r(40208),
          h = r(6739),
          nt = r(83906),
          rt = r(33926),
          St = "10986482",
          it = Object.defineProperty,
          ct = Object.getOwnPropertyDescriptor,
          l = (t, e, o, s) => {
            for (
              var n = s > 1 ? void 0 : s ? ct(e, o) : e, i = t.length - 1, c;
              i >= 0;
              i--
            )
              (c = t[i]) && (n = (s ? c(e, o, n) : c(n)) || n);
            return s && n && it(e, o, n), n;
          };
        const lt = 2500;
        var dt = ((t) => (
          (t[(t.Checking = 0)] = "Checking"),
          (t[(t.CheckTimedOut = 1)] = "CheckTimedOut"),
          (t[(t.NotLoggedIn = 2)] = "NotLoggedIn"),
          t
        ))(dt || {});
        class w {
          constructor() {
            (0, S.Gn)(this);
          }
          m_fnLaunchChat;
          m_iTimeoutLogin = void 0;
          m_eLogonState = 0;
          m_steamID = void 0;
          m_reactRoot;
          Init(e) {
            (this.m_fnLaunchChat = e),
              (this.m_steamID = h.GP.steamid),
              window.addEventListener("message", this.HandlePostMessage),
              (this.m_reactRoot = k.createRoot(
                document.getElementById("friendslist-container"),
              )),
              this.m_reactRoot.render(m.createElement(P, { app: this })),
              (this.m_iTimeoutLogin = window.setTimeout(() => {
                this.m_eLogonState == 0 && (this.m_eLogonState = 1);
              }, lt));
          }
          LaunchChat() {
            this.m_reactRoot.unmount(),
              window.removeEventListener("message", this.HandlePostMessage),
              window.clearTimeout(this.m_iTimeoutLogin),
              (0, f.xT)(h.GP.steamid),
              this.m_fnLaunchChat();
          }
          GetLoginURL() {
            return `${h.TS.STORE_BASE_URL}login/?steamtv`;
          }
          BIsPerformingLogonCheck() {
            return this.m_eLogonState == 0 || this.m_eLogonState == 1;
          }
          BReadyToRender() {
            return this.m_eLogonState != 0;
          }
          GetSteamIDWatched() {
            return this.m_steamID;
          }
          ExtractOrigin(e) {
            return e.replace(/^(https?:\/\/[^/]*).*$/, "$1");
          }
          HandlePostMessage(e) {
            if (
              e.origin != this.ExtractOrigin(h.TS.STORE_BASE_URL) &&
              e.origin != this.ExtractOrigin(h.TS.CHAT_BASE_URL)
            ) {
              console.warn(
                `Ignoring message from untrusted domain "${e.origin}"`,
              );
              return;
            }
            let o = e.data;
            if (o) {
              if (o.msg == "OnLoginButtonClicked")
                console.log("Login button clicked"),
                  (window.location.href = Y());
              else if (o.command == "LoginNeeded") this.m_eLogonState = 2;
              else if (o.command == "LogonComplete") {
                this.LaunchChat();
                return;
              }
            }
          }
        }
        l([S.sH], w.prototype, "m_eLogonState", 2),
          l([S.sH], w.prototype, "m_steamID", 2),
          l([S.XI], w.prototype, "LaunchChat", 1),
          l([S.XI.bound], w.prototype, "HandlePostMessage", 1);
        let P = class extends m.Component {
          m_broadcastInfo = null;
          constructor(t) {
            super(t),
              (this.m_broadcastInfo = v.BroadcastWatchStore.StartInfo(
                this.props.app.GetSteamIDWatched(),
              )),
              (this.state = { bChatCollapsed: !1, bTheaterMode: !1 });
          }
          componentWillUnmount() {
            this.m_broadcastInfo &&
              (v.BroadcastWatchStore.StopInfo(this.m_broadcastInfo),
              (this.m_broadcastInfo = null));
          }
          ToggleChat() {
            this.setState({ bChatCollapsed: !this.state.bChatCollapsed });
          }
          ToggleTheaterMode() {
            this.setState({ bTheaterMode: !this.state.bTheaterMode });
          }
          render() {
            const t = this.props.app;
            let e = this.m_broadcastInfo,
              o = Z();
            const s = () => (window.location.href = Y());
            return (0, a.jsxs)(mt, {
              children: [
                t.BReadyToRender() &&
                  (0, a.jsxs)("div", {
                    className:
                      "StandalonePlayer" +
                      (this.state.bTheaterMode ? " TheaterMode" : ""),
                    children: [
                      (0, a.jsx)(z.y, {
                        className: "FullpageBroadcastBackdrop",
                        src: e.m_strThumbnailUrl,
                        draggable: !1,
                        duration: 2500,
                      }),
                      (0, a.jsxs)("div", {
                        className: "BroadcastTab",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "StandalonePlayerHeader",
                            children: [
                              (0, a.jsx)("div", {
                                className: "STV_Logo",
                                children: (0, a.jsx)(B.P7C, {}),
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "BroadcastTab_HeaderRow" +
                                  (this.state.bChatCollapsed
                                    ? " ChatCollapsed"
                                    : ""),
                                children: [
                                  (0, a.jsx)(Q, { onClick: s }),
                                  (0, a.jsx)(X, {
                                    onClick: this.ToggleChat,
                                    hideIcon: this.state.bChatCollapsed,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsx)(C, {
                            steamID: t.GetSteamIDWatched(),
                            watchLocation: o,
                            bHideChat: this.state.bChatCollapsed,
                            onTheaterMode: this.ToggleTheaterMode,
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, a.jsx)(pt, { app: t }),
              ],
            });
          }
        };
        l([d.oI], P.prototype, "ToggleChat", 1),
          l([d.oI], P.prototype, "ToggleTheaterMode", 1),
          (P = l([D.PA], P));
        function ht() {
          const t = (0, h.Fd)("loyalty_webapi_token", "application_config");
          return new st.D(h.TS.WEBAPI_BASE_URL, t);
        }
        function mt(t) {
          const { children: e } = t,
            o = m.useCallback(() => g.xm?.CMInterface, []),
            s = (0, d.bs)(m.useCallback(() => new at.A(), [])),
            n = (0, d.bs)(ht);
          return (0, a.jsx)(ot.s, {
            children: (0, a.jsx)(h.ss, {
              children: (0, a.jsx)(nt.EO, {
                children: h.iA.logged_in
                  ? (0, a.jsx)($.VQ, {
                      useActiveCMInterface: o,
                      useStorage: s,
                      children: e,
                    })
                  : (0, a.jsx)($.VQ, {
                      useActiveSteamInterface: n,
                      useStorage: s,
                      children: e,
                    }),
              }),
            }),
          });
        }
        let pt = (0, D.PA)(({ app: t }) =>
          t.BIsPerformingLogonCheck()
            ? (0, a.jsx)("div", {
                children: (0, a.jsx)("iframe", {
                  style: { display: "none" },
                  src: t.GetLoginURL(),
                }),
              })
            : null,
        );
        function Q(t) {
          return (0, a.jsxs)("div", {
            className: "BroadcastButton WatchWithFriends",
            onClick: t.onClick,
            children: [
              (0, a.jsx)(B.y_e, {}),
              (0, p.we)("#Broadcast_WatchWithFriends"),
            ],
          });
        }
        function X(t) {
          return (0, a.jsx)("div", {
            className: "ToggleBroadcastChat",
            title: (0, p.we)("#Broadcast_ToggleChat"),
            onClick: t.onClick,
            children: (0, a.jsx)(B.K7s, { showChat: t.hideIcon }),
          });
        }
        function Z() {
          return rt.K.STEAM_TV ? x.nn.GN : x.nn.WR;
        }
        let I = class extends m.Component {
          m_broadcastInfo = null;
          constructor(t) {
            super(t);
            let e = this.props.broadcastView
              .GetSteamID()
              .ConvertTo64BitString();
            (this.m_broadcastInfo = v.BroadcastWatchStore.StartInfo(e)),
              (this.state = { bChatCollapsed: !1 });
          }
          componentWillUnmount() {
            this.m_broadcastInfo &&
              (v.BroadcastWatchStore.StopInfo(this.m_broadcastInfo),
              (this.m_broadcastInfo = null));
          }
          OnWatchWithFriends() {
            this.props.broadcastView.ShowWatchPromptDialog();
          }
          ToggleChat() {
            this.setState({ bChatCollapsed: !this.state.bChatCollapsed });
          }
          ToggleTheaterMode() {
            g.xm.UIStore.SetTheaterMode(!g.xm.UIStore.GetTheaterMode());
          }
          render() {
            const { broadcastView: t, popup: e, style: o } = this.props,
              s = t.GetSteamID().ConvertTo64BitString();
            let n = Z();
            const i = t.m_bShowWatchPromptDialog
              ? (0, a.jsx)(T, {
                  closeModal: () => t.HideWatchPromptDialog(),
                  broadcastAccountId: t.GetSteamID().GetAccountID(),
                  broadcastTabId: t.GetUniqueID(),
                  initialFriend: t.m_watchPromptInitialFriend,
                  browserContext: et.m,
                  ownerWindow: e,
                })
              : null;
            return (0, a.jsxs)("div", {
              className: "BroadcastTab",
              style: o,
              children: [
                (0, a.jsx)(z.y, {
                  className: "FullpageBroadcastBackdrop",
                  src: this.m_broadcastInfo.m_strThumbnailUrl,
                  draggable: !1,
                  duration: 2500,
                }),
                (0, a.jsxs)("div", {
                  className: "BroadcastTab_OverBackground",
                  children: [
                    (0, a.jsx)("div", {
                      className: "BroadcastTabHeaderContainer",
                      children: (0, a.jsxs)("div", {
                        className:
                          "BroadcastTab_HeaderRow" +
                          (this.state.bChatCollapsed ? " ChatCollapsed" : ""),
                        children: [
                          (0, a.jsx)(Q, { onClick: this.OnWatchWithFriends }),
                          (0, a.jsx)(X, {
                            onClick: this.ToggleChat,
                            hideIcon: this.state.bChatCollapsed,
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)(C, {
                      steamID: s,
                      watchLocation: n,
                      bHideChat: this.state.bChatCollapsed,
                      onTheaterMode: this.ToggleTheaterMode,
                      children: i,
                    }),
                  ],
                }),
              ],
            });
          }
        };
        l([d.oI], I.prototype, "OnWatchWithFriends", 1),
          l([d.oI], I.prototype, "ToggleChat", 1),
          l([d.oI], I.prototype, "ToggleTheaterMode", 1),
          (I = l([D.PA], I));
        let C = class extends m.Component {
          m_strLocalSteamID = "";
          m_refBroadcastContainer = m.createRef();
          m_elMainContent;
          constructor(t) {
            super(t), (0, S.Gn)(this), (this.state = { info: null });
          }
          componentDidMount() {
            y.td.stream["76561198208088121"] && h.TS.LANGUAGE === "chinese"
              ? this.OnLocalStreamChange("76561198208088121")
              : y.td.stream["76561198207552741"] &&
                h.TS.LANGUAGE === "russian" &&
                this.OnLocalStreamChange("76561198207552741");
          }
          static getDerivedStateFromProps(t, e) {
            return !e.info || e.info.m_steamIDBroadcast !== t.steamID
              ? (e.info && v.BroadcastWatchStore.StopInfo(e.info),
                { info: v.BroadcastWatchStore.StartInfo(t.steamID) })
              : null;
          }
          componentWillUnmount() {
            this.state.info && v.BroadcastWatchStore.StopInfo(this.state.info);
          }
          OnLocalStreamChange(t) {
            this.m_strLocalSteamID = t;
          }
          SetMainContentRef(t) {
            this.m_elMainContent = t;
          }
          CalculateBroadcastSectionStyles(t) {
            if (this.props.bHideChat) return { width: "100%", height: "100%" };
            let e, o;
            f.ZM &&
              ((e = f.ZM.UIDisplayPrefs.nWatchPartyBroadcastHeightPercentage),
              (o = f.ZM.UIDisplayPrefs.nWatchPartyBroadcastWidthPercentage));
            const s = {};
            if (t) {
              const n = e || 66;
              if (((s.height = `${n}%`), this.m_elMainContent)) {
                const { clientWidth: i, clientHeight: c } =
                    this.m_elMainContent,
                  j = (9 / 16) * i + 50,
                  L = (0, K.OQ)(n, 1, (j / c) * 100);
                s.height = `${L}%`;
              }
            } else
              (s.width = o ? `${o}%` : "66%"),
                (s.minWidth = o ? `${o}%` : "66%"),
                (s.maxWidth = "calc( 100% - 316px )"),
                (s.overflowY = "auto");
            return s;
          }
          OnGrabberMouseDown(t) {
            let e = t.currentTarget.ownerDocument.defaultView;
            e.addEventListener("mousemove", this.HandleMouseMove),
              e.addEventListener("mouseup", this.UnregisterDragEvents),
              this.setState({ bDraggingChatGrabber: !0 });
          }
          HandleMouseMove(t) {
            t.preventDefault(), t.stopPropagation();
            let e =
                this.m_refBroadcastContainer.current.getBoundingClientRect(),
              o =
                this.m_refBroadcastContainer.current.parentElement.getBoundingClientRect();
            const s = !1,
              n = s ? e.top : e.left,
              i = s ? t.clientY : t.clientX,
              c = s ? o.height : o.width,
              j = (0, K.OQ)(((i - n) / c) * 100, 1, 100),
              L = s
                ? "nWatchPartyBroadcastHeightPercentage"
                : "nWatchPartyBroadcastWidthPercentage";
            f.ZM.SetUIDisplayPref(L, j);
          }
          UnregisterDragEvents(t) {
            t.view.removeEventListener("mousemove", this.HandleMouseMove),
              t.view.removeEventListener("mouseup", this.UnregisterDragEvents),
              this.setState({ bDraggingChatGrabber: !1 });
          }
          render() {
            let { steamID: t, children: e } = this.props,
              s = this.m_strLocalSteamID || t,
              n = this.state.info.m_bIsOnline,
              i = null;
            const c = this.CalculateBroadcastSectionStyles(!1);
            (c.flexGrow = this.props.bHideChat ? 1 : null),
              y.td.bValid && (i = (0, a.jsx)(gt, { info: y.td }));
            const j = (0, a.jsx)("div", {
                className: "LoginDiv",
                children: (0, a.jsx)("a", {
                  className: tt().ChatLoginButton,
                  href: `${h.TS.STORE_BASE_URL}login?steamtv=1&allow_password=1`,
                  children: (0, p.we)("#BroadcastChat_Login"),
                }),
              }),
              L = v.BroadcastWatchStore.GetBroadcast(s)
                ? v.BroadcastWatchStore.GetBroadcast(s).m_ulBroadcastID
                : "0";
            return (0, a.jsxs)("div", {
              className: "BroadcastContainer",
              children: [
                (0, a.jsxs)("div", {
                  className: "BroadcastContainerSection",
                  ref: this.m_refBroadcastContainer,
                  style: c,
                  children: [
                    (0, a.jsxs)("div", {
                      className: "BroadcastContainerSectionVideoContainer",
                      children: [
                        n &&
                          (0, a.jsx)(
                            F.default,
                            {
                              steamIDBroadcast: s,
                              watchLocation: this.props.watchLocation,
                              onTheaterMode: this.props.onTheaterMode,
                            },
                            s,
                          ),
                        !n && i,
                        (0, a.jsx)("div", { className: "videoContainerSizer" }),
                      ],
                    }),
                    e,
                    (0, a.jsx)("div", {
                      className: "BroadcastDetailsSection",
                      children: (0, a.jsx)(F.BroadcastDetails, {
                        steamID: s,
                        onLocalStreamChange: this.OnLocalStreamChange,
                        bVerticalBroadcastChat: !0,
                      }),
                    }),
                  ],
                }),
                !this.props.bHideChat &&
                  (0, a.jsx)("div", {
                    className: "BroadcastChatDivider horizontal",
                    onMouseDown: this.OnGrabberMouseDown,
                  }),
                (0, a.jsxs)("div", {
                  className: "BroadcastChatDiv",
                  style: {
                    display: this.props.bHideChat ? "none" : "flex",
                    flexDirection: "column",
                    width: "100%",
                    minWidth: "300px",
                  },
                  children: [
                    (0, a.jsx)(_.I, {
                      emoticonStore: g.xm ? g.xm.ChatStore.EmoticonStore : null,
                      broadcastID: L,
                      steamID: s,
                      watchLocation: this.props.watchLocation,
                      hidden: this.props.bHideChat,
                    }),
                    h.iA && h.iA.logged_in ? null : j,
                  ],
                }),
              ],
            });
          }
        };
        l([S.sH], C.prototype, "m_strLocalSteamID", 2),
          l([d.oI], C.prototype, "OnLocalStreamChange", 1),
          l([d.oI], C.prototype, "SetMainContentRef", 1),
          l([d.oI], C.prototype, "OnGrabberMouseDown", 1),
          l([d.oI], C.prototype, "HandleMouseMove", 1),
          l([d.oI], C.prototype, "UnregisterDragEvents", 1),
          (C = l([D.PA], C));
        function gt(t) {
          let e = `url( "${h.TS.CHAT_BASE_URL + t.info.offlineImage}" )`;
          return (0, a.jsx)("div", {
            style: { backgroundImage: e },
            className: "BroadcastOffline",
          });
        }
        function Y() {
          return `${h.TS.STORE_BASE_URL}login?steamtv=1`;
        }
        var ut = r(22182),
          Bt = "10986482",
          Ct = Object.defineProperty,
          ft = Object.getOwnPropertyDescriptor,
          vt = (t, e, o, s) => {
            for (
              var n = s > 1 ? void 0 : s ? ft(e, o) : e, i = t.length - 1, c;
              i >= 0;
              i--
            )
              (c = t[i]) && (n = (s ? c(e, o, n) : c(n)) || n);
            return s && n && Ct(e, o, n), n;
          };
        let H = class extends m.Component {
          render() {
            let t = this.props.broadcastView;
            if (!t || !(t instanceof ut.w)) return null;
            let e = {};
            return (
              this.props.isActive || (e.display = "none"),
              (0, a.jsx)(I, {
                style: e,
                broadcastView: t,
                popup: this.props.popup,
              })
            );
          }
        };
        H = vt([D.PA], H);
      },
      22758: (J, b, r) => {
        r.r(b), r.d(b, { default: () => u });
        var a = r(62540),
          m = r(63696),
          f = r(44613),
          g = r(28644),
          B = "10986482";
        const u = m.forwardRef(function (
          {
            steamID: A,
            localSteamID: d,
            watchLocation: O,
            bWebRTC: N,
            style: V,
            onRequestClose: E,
            actions: R,
            onTheaterMode: W,
            onLocalStreamChange: G,
            bVerticalBroadcastChat: T,
          },
          U,
        ) {
          const x = d || A;
          return (0, a.jsxs)("div", {
            ref: U,
            style: { display: "flex", flexDirection: "column", ...V },
            children: [
              (0, a.jsxs)("div", {
                className: "BroadcastSection",
                children: [
                  (0, a.jsx)(
                    f.default,
                    {
                      steamIDBroadcast: x,
                      watchLocation: O,
                      bWebRTC: N,
                      onRequestClose: E,
                      actions: R,
                      onTheaterMode: W,
                      onOpenLinkInNewWindow: g.EP,
                    },
                    x,
                  ),
                  (0, a.jsx)("div", { className: "videoContainerSizer" }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "BroadcastDetailsSection",
                children: (0, a.jsx)(f.BroadcastDetails, {
                  steamID: x,
                  onLocalStreamChange: G,
                  bVerticalBroadcastChat: T,
                }),
              }),
            ],
          });
        });
      },
    },
  ]);
})();
//# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-rel-steamui/build/client/steamui/sourcemaps/broadcastapp.js.map
