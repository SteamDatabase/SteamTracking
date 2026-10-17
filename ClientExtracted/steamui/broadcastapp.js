"use strict";
(() => {
  (self.webpackChunksteamui = self.webpackChunksteamui || []).push([
    [7653],
    {
      87570: (Y, b, r) => {
        r.r(b), r.d(b, { default: () => H });
        var a = r(62540),
          p = r(63696),
          C = r(74436),
          g = r(55239),
          B = r(42095),
          L = r(12302),
          f = r(50777),
          m = r(7727),
          O = r(64932),
          d = r(71262),
          N = r(69871),
          A = r(20447),
          E = Object.defineProperty,
          R = Object.getOwnPropertyDescriptor,
          y = (t, e, s, o) => {
            for (
              var n = o > 1 ? void 0 : o ? R(e, s) : e, i = t.length - 1, c;
              i >= 0;
              i--
            )
              (c = t[i]) && (n = (o ? c(e, s, n) : c(n)) || n);
            return o && n && E(e, s, n), n;
          };
        const G = ({ group: t, onClick: e }) => {
          const s = t.watching_broadcast_steamid;
          return (0, a.jsx)("button", {
            className:
              "ChatRoomListGroupItem NoChannels WatchPartyGroup DialogButton watchHowButton",
            onClick: e,
            children: (0, a.jsxs)("div", {
              className: "ChatRoomListGroupItem_header",
              children: [
                (0, a.jsx)(N.I, { group: t, small: !0 }),
                (0, a.jsxs)("div", {
                  className: "groupNameStatusContainer",
                  children: [
                    (0, a.jsx)("div", {
                      className: "chatRoomName",
                      children: t.name,
                    }),
                    s &&
                      (0, a.jsx)("div", {
                        className: "chatRoomDetails",
                        children: (0, m.we)(
                          "#Broadcast_WatchParty_Viewers_NoneActive",
                        ),
                      }),
                  ],
                }),
              ],
            }),
          });
        };
        class D extends p.Component {
          CreateWatchParty(e = !1) {
            const {
              browserContext: s,
              ownerWindow: o,
              broadcastAccountId: n,
              initialFriend: i,
            } = this.props;
            this.Close();
            const c = e && i ? [i.accountid] : [];
            U(s, o || window, n, c);
          }
          WatchAlone() {
            this.Close();
          }
          UpgradeExisting(e) {
            const {
              broadcastAccountId: s,
              browserContext: o,
              broadcastChannelID: n,
              broadcastTabId: i,
            } = this.props;
            this.Close(),
              n
                ? e.SetChatRoomGroupWatchingBroadcast(void 0, n)
                : e.SetChatRoomGroupWatchingBroadcast(s);
            const c = g.xm.UIStore.ShowAndOrActivateChatRoomGroup(o, e, !0);
            i && g.xm.UIStore.CloseTabByID(i),
              this.props.bIsNewSteamTVDialog || c.ShowBroadcast();
          }
          Close() {
            const { closeModal: e } = this.props;
            e && e();
          }
          render() {
            const { closeModal: e, initialFriend: s } = this.props,
              n = g.xm.ChatStore.currentChatRoomGroups.filter((c) =>
                c.BCanIAssociateBroadcast(),
              ),
              i = s;
            return (0, a.jsx)("div", {
              className: "chatModalCover",
              children: (0, a.jsx)(L.x_, {
                onEscKeypress: e,
                children: (0, a.jsxs)(f.UC, {
                  className: "watchPartyDialog",
                  children: [
                    (0, a.jsxs)(f.nB, {
                      children: [
                        (0, a.jsx)("div", {
                          className: "watchPartyPrompt",
                          children: (0, m.we)("#Broadcast_WatchPrompt"),
                        }),
                        (0, a.jsxs)(f.xz, {
                          children: [
                            !this.props.bIsNewSteamTVDialog &&
                              (0, a.jsx)(f.$n, {
                                svgicon: B.Gv$,
                                className: "watchHowButton",
                                onClick: this.WatchAlone,
                                children: (0, m.we)("#Broadcast_WatchAlone"),
                              }),
                            i &&
                              (0, a.jsxs)(f.$n, {
                                className: "watchHowButton",
                                onClick: () => this.CreateWatchParty(!0),
                                children: [
                                  (0, a.jsx)(A.gv, {
                                    friend: i,
                                    context: null,
                                    bLarge: !1,
                                  }),
                                  (0, m.PP)(
                                    "#Broadcast_WatchWith",
                                    (0, a.jsxs)("span", {
                                      className: "highlight",
                                      children: [" ", i.display_name],
                                    }),
                                  ),
                                ],
                              }),
                            n.length !== 0 &&
                              (0, a.jsxs)(p.Fragment, {
                                children: [
                                  (0, a.jsx)(f.JU, {
                                    children: (0, m.we)(
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
                            (0, a.jsx)(f.$n, {
                              className: "watchHowButton newWatchGroup",
                              svgicon: B.u9R,
                              onClick: () => this.CreateWatchParty(!1),
                              children: (0, m.we)(
                                "#Broadcast_LinkBroadcastToGroup_New",
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)(f.wi, {}),
                  ],
                }),
              }),
            });
          }
        }
        y([d.oI], D.prototype, "WatchAlone", 1),
          y([d.oI], D.prototype, "Close", 1);
        function U(t, e, s, o) {
          (0, L.HT)(
            (0, a.jsx)(O.zw, {
              browserContext: t,
              bHideChatNameEntry: !1,
              vecInvitePlayers: o,
              chatViewToReplace: void 0,
              creationOptions: { unBroadcastAccountId: s },
              strTitle: (0, m.we)("#Broadcast_CreateWatchParty"),
            }),
            e,
            "CreateChatDialog",
            {
              strTitle: (0, m.we)("#Broadcast_CreateWatchParty"),
              popupWidth: 450,
              popupHeight: 600,
            },
            (0, C.h8)(e),
          );
        }
        var x = r(45510),
          S = r(89193),
          T = r(41230),
          J = r(7470),
          k = r(10242),
          _ = r(89454),
          q = r.n(_),
          w = r(3519),
          V = r(44613),
          F = r(60925),
          tt = r(37075),
          at = r(80358),
          et = r(43175),
          v = r(85778),
          $ = r(28614),
          z = r(23365),
          ot = r(40208),
          h = r(6739),
          st = r(83906),
          nt = r(33926),
          rt = Object.defineProperty,
          it = Object.getOwnPropertyDescriptor,
          l = (t, e, s, o) => {
            for (
              var n = o > 1 ? void 0 : o ? it(e, s) : e, i = t.length - 1, c;
              i >= 0;
              i--
            )
              (c = t[i]) && (n = (o ? c(e, s, n) : c(n)) || n);
            return o && n && rt(e, s, n), n;
          };
        const ct = 2500;
        var lt = ((t) => (
          (t[(t.Checking = 0)] = "Checking"),
          (t[(t.CheckTimedOut = 1)] = "CheckTimedOut"),
          (t[(t.NotLoggedIn = 2)] = "NotLoggedIn"),
          t
        ))(lt || {});
        class M {
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
              (this.m_reactRoot = J.createRoot(
                document.getElementById("friendslist-container"),
              )),
              this.m_reactRoot.render(p.createElement(j, { app: this })),
              (this.m_iTimeoutLogin = window.setTimeout(() => {
                this.m_eLogonState == 0 && (this.m_eLogonState = 1);
              }, ct));
          }
          LaunchChat() {
            this.m_reactRoot.unmount(),
              window.removeEventListener("message", this.HandlePostMessage),
              window.clearTimeout(this.m_iTimeoutLogin),
              (0, C.xT)(h.GP.steamid),
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
            let s = e.data;
            if (s) {
              if (s.msg == "OnLoginButtonClicked")
                console.log("Login button clicked"),
                  (window.location.href = Z());
              else if (s.command == "LoginNeeded") this.m_eLogonState = 2;
              else if (s.command == "LogonComplete") {
                this.LaunchChat();
                return;
              }
            }
          }
        }
        l([S.sH], M.prototype, "m_eLogonState", 2),
          l([S.sH], M.prototype, "m_steamID", 2),
          l([S.XI], M.prototype, "LaunchChat", 1),
          l([S.XI.bound], M.prototype, "HandlePostMessage", 1);
        let j = class extends p.Component {
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
              s = X();
            const o = () => (window.location.href = Z());
            return (0, a.jsxs)(ht, {
              children: [
                t.BReadyToRender() &&
                  (0, a.jsxs)("div", {
                    className:
                      "StandalonePlayer" +
                      (this.state.bTheaterMode ? " TheaterMode" : ""),
                    children: [
                      (0, a.jsx)($.y, {
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
                                  (0, a.jsx)(K, { onClick: o }),
                                  (0, a.jsx)(Q, {
                                    onClick: this.ToggleChat,
                                    hideIcon: this.state.bChatCollapsed,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsx)(u, {
                            steamID: t.GetSteamIDWatched(),
                            watchLocation: s,
                            bHideChat: this.state.bChatCollapsed,
                            onTheaterMode: this.ToggleTheaterMode,
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, a.jsx)(mt, { app: t }),
              ],
            });
          }
        };
        l([d.oI], j.prototype, "ToggleChat", 1),
          l([d.oI], j.prototype, "ToggleTheaterMode", 1),
          (j = l([T.PA], j));
        function dt() {
          const t = (0, h.Fd)("loyalty_webapi_token", "application_config");
          return new et.D(h.TS.WEBAPI_BASE_URL, t);
        }
        function ht(t) {
          const { children: e } = t,
            s = p.useCallback(() => g.xm?.CMInterface, []),
            o = (0, d.bs)(p.useCallback(() => new tt.A(), [])),
            n = (0, d.bs)(dt);
          return (0, a.jsx)(ot.s, {
            children: (0, a.jsx)(h.ss, {
              children: (0, a.jsx)(st.EO, {
                children: h.iA.logged_in
                  ? (0, a.jsx)(F.VQ, {
                      useActiveCMInterface: s,
                      useStorage: o,
                      children: e,
                    })
                  : (0, a.jsx)(F.VQ, {
                      useActiveSteamInterface: n,
                      useStorage: o,
                      children: e,
                    }),
              }),
            }),
          });
        }
        let mt = (0, T.PA)(({ app: t }) =>
          t.BIsPerformingLogonCheck()
            ? (0, a.jsx)("div", {
                children: (0, a.jsx)("iframe", {
                  style: { display: "none" },
                  src: t.GetLoginURL(),
                }),
              })
            : null,
        );
        function K(t) {
          return (0, a.jsxs)("div", {
            className: "BroadcastButton WatchWithFriends",
            onClick: t.onClick,
            children: [
              (0, a.jsx)(B.y_e, {}),
              (0, m.we)("#Broadcast_WatchWithFriends"),
            ],
          });
        }
        function Q(t) {
          return (0, a.jsx)("div", {
            className: "ToggleBroadcastChat",
            title: (0, m.we)("#Broadcast_ToggleChat"),
            onClick: t.onClick,
            children: (0, a.jsx)(B.K7s, { showChat: t.hideIcon }),
          });
        }
        function X() {
          return nt.K.STEAM_TV ? x.nn.GN : x.nn.WR;
        }
        let I = class extends p.Component {
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
            const { broadcastView: t, popup: e, style: s } = this.props,
              o = t.GetSteamID().ConvertTo64BitString();
            let n = X();
            const i = t.m_bShowWatchPromptDialog
              ? (0, a.jsx)(D, {
                  closeModal: () => t.HideWatchPromptDialog(),
                  broadcastAccountId: t.GetSteamID().GetAccountID(),
                  broadcastTabId: t.GetUniqueID(),
                  initialFriend: t.m_watchPromptInitialFriend,
                  browserContext: at.m,
                  ownerWindow: e,
                })
              : null;
            return (0, a.jsxs)("div", {
              className: "BroadcastTab",
              style: s,
              children: [
                (0, a.jsx)($.y, {
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
                          (0, a.jsx)(K, { onClick: this.OnWatchWithFriends }),
                          (0, a.jsx)(Q, {
                            onClick: this.ToggleChat,
                            hideIcon: this.state.bChatCollapsed,
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)(u, {
                      steamID: o,
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
          (I = l([T.PA], I));
        let u = class extends p.Component {
          m_strLocalSteamID = "";
          m_refBroadcastContainer = p.createRef();
          m_elMainContent;
          constructor(t) {
            super(t), (0, S.Gn)(this), (this.state = { info: null });
          }
          componentDidMount() {
            w.td.stream["76561198208088121"] && h.TS.LANGUAGE === "chinese"
              ? this.OnLocalStreamChange("76561198208088121")
              : w.td.stream["76561198207552741"] &&
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
            let e, s;
            C.ZM &&
              ((e = C.ZM.UIDisplayPrefs.nWatchPartyBroadcastHeightPercentage),
              (s = C.ZM.UIDisplayPrefs.nWatchPartyBroadcastWidthPercentage));
            const o = {};
            if (t) {
              const n = e || 66;
              if (((o.height = `${n}%`), this.m_elMainContent)) {
                const { clientWidth: i, clientHeight: c } =
                    this.m_elMainContent,
                  P = (9 / 16) * i + 50,
                  W = (0, z.OQ)(n, 1, (P / c) * 100);
                o.height = `${W}%`;
              }
            } else
              (o.width = s ? `${s}%` : "66%"),
                (o.minWidth = s ? `${s}%` : "66%"),
                (o.maxWidth = "calc( 100% - 316px )"),
                (o.overflowY = "auto");
            return o;
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
              s =
                this.m_refBroadcastContainer.current.parentElement.getBoundingClientRect();
            const o = !1,
              n = o ? e.top : e.left,
              i = o ? t.clientY : t.clientX,
              c = o ? s.height : s.width,
              P = (0, z.OQ)(((i - n) / c) * 100, 1, 100),
              W = o
                ? "nWatchPartyBroadcastHeightPercentage"
                : "nWatchPartyBroadcastWidthPercentage";
            C.ZM.SetUIDisplayPref(W, P);
          }
          UnregisterDragEvents(t) {
            t.view.removeEventListener("mousemove", this.HandleMouseMove),
              t.view.removeEventListener("mouseup", this.UnregisterDragEvents),
              this.setState({ bDraggingChatGrabber: !1 });
          }
          render() {
            let { steamID: t, children: e } = this.props,
              o = this.m_strLocalSteamID || t,
              n = this.state.info.m_bIsOnline,
              i = null;
            const c = this.CalculateBroadcastSectionStyles(!1);
            (c.flexGrow = this.props.bHideChat ? 1 : null),
              w.td.bValid && (i = (0, a.jsx)(pt, { info: w.td }));
            const P = (0, a.jsx)("div", {
                className: "LoginDiv",
                children: (0, a.jsx)("a", {
                  className: q().ChatLoginButton,
                  href: `${h.TS.STORE_BASE_URL}login?steamtv=1&allow_password=1`,
                  children: (0, m.we)("#BroadcastChat_Login"),
                }),
              }),
              W = v.BroadcastWatchStore.GetBroadcast(o)
                ? v.BroadcastWatchStore.GetBroadcast(o).m_ulBroadcastID
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
                            V.default,
                            {
                              steamIDBroadcast: o,
                              watchLocation: this.props.watchLocation,
                              onTheaterMode: this.props.onTheaterMode,
                            },
                            o,
                          ),
                        !n && i,
                        (0, a.jsx)("div", { className: "videoContainerSizer" }),
                      ],
                    }),
                    e,
                    (0, a.jsx)("div", {
                      className: "BroadcastDetailsSection",
                      children: (0, a.jsx)(V.BroadcastDetails, {
                        steamID: o,
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
                    (0, a.jsx)(k.I, {
                      emoticonStore: g.xm ? g.xm.ChatStore.EmoticonStore : null,
                      broadcastID: W,
                      steamID: o,
                      watchLocation: this.props.watchLocation,
                      hidden: this.props.bHideChat,
                    }),
                    h.iA && h.iA.logged_in ? null : P,
                  ],
                }),
              ],
            });
          }
        };
        l([S.sH], u.prototype, "m_strLocalSteamID", 2),
          l([d.oI], u.prototype, "OnLocalStreamChange", 1),
          l([d.oI], u.prototype, "SetMainContentRef", 1),
          l([d.oI], u.prototype, "OnGrabberMouseDown", 1),
          l([d.oI], u.prototype, "HandleMouseMove", 1),
          l([d.oI], u.prototype, "UnregisterDragEvents", 1),
          (u = l([T.PA], u));
        function pt(t) {
          let e = `url( "${h.TS.CHAT_BASE_URL + t.info.offlineImage}" )`;
          return (0, a.jsx)("div", {
            style: { backgroundImage: e },
            className: "BroadcastOffline",
          });
        }
        function Z() {
          return `${h.TS.STORE_BASE_URL}login?steamtv=1`;
        }
        var gt = r(22182),
          ut = Object.defineProperty,
          Ct = Object.getOwnPropertyDescriptor,
          ft = (t, e, s, o) => {
            for (
              var n = o > 1 ? void 0 : o ? Ct(e, s) : e, i = t.length - 1, c;
              i >= 0;
              i--
            )
              (c = t[i]) && (n = (o ? c(e, s, n) : c(n)) || n);
            return o && n && ut(e, s, n), n;
          };
        let H = class extends p.Component {
          render() {
            let t = this.props.broadcastView;
            if (!t || !(t instanceof gt.w)) return null;
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
        H = ft([T.PA], H);
      },
      22758: (Y, b, r) => {
        r.r(b), r.d(b, { default: () => L });
        var a = r(62540),
          p = r(63696),
          C = r(44613),
          g = r(28644);
        const L = p.forwardRef(function (
          {
            steamID: m,
            localSteamID: O,
            watchLocation: d,
            bWebRTC: N,
            style: A,
            onRequestClose: E,
            actions: R,
            onTheaterMode: y,
            onLocalStreamChange: G,
            bVerticalBroadcastChat: D,
          },
          U,
        ) {
          const x = O || m;
          return (0, a.jsxs)("div", {
            ref: U,
            style: { display: "flex", flexDirection: "column", ...A },
            children: [
              (0, a.jsxs)("div", {
                className: "BroadcastSection",
                children: [
                  (0, a.jsx)(
                    C.default,
                    {
                      steamIDBroadcast: x,
                      watchLocation: d,
                      bWebRTC: N,
                      onRequestClose: E,
                      actions: R,
                      onTheaterMode: y,
                      onOpenLinkInNewWindow: g.EP,
                    },
                    x,
                  ),
                  (0, a.jsx)("div", { className: "videoContainerSizer" }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "BroadcastDetailsSection",
                children: (0, a.jsx)(C.BroadcastDetails, {
                  steamID: x,
                  onLocalStreamChange: G,
                  bVerticalBroadcastChat: D,
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
