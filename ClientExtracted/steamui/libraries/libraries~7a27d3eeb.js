"use strict";
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [8237],
  {
    98365: (e, t, a) => {
      a.r(t), a.d(t, { default: () => Y });
      var o = a(85556),
        n = a(27378),
        s = a(24105),
        r = a(25854),
        i = a(22435),
        l = a(26721),
        c = a(62923),
        h = a(86064),
        d = a(877),
        m = a(50947),
        p = a(79561),
        g = a(92840);
      const u = ({ group: e, onClick: t }) => {
        const a = e.watching_broadcast_steamid;
        return n.createElement(
          "button",
          {
            className:
              "ChatRoomListGroupItem NoChannels WatchPartyGroup DialogButton watchHowButton",
            onClick: t,
          },
          n.createElement(
            "div",
            { className: "ChatRoomListGroupItem_header" },
            n.createElement(p._P, { group: e, small: !0 }),
            n.createElement(
              "div",
              { className: "groupNameStatusContainer" },
              n.createElement("div", { className: "chatRoomName" }, e.name),
              a &&
                n.createElement(
                  "div",
                  { className: "chatRoomDetails" },
                  (0, h.Xx)("#Broadcast_WatchParty_Viewers_NoneActive"),
                ),
            ),
          ),
        );
      };
      class C extends n.Component {
        CreateWatchParty(e = !1) {
          const {
            browserContext: t,
            ownerWindow: a,
            broadcastAccountId: o,
            initialFriend: r,
          } = this.props;
          this.Close();
          const i = e && r ? [r.accountid] : [];
          !(function (e, t, a, o) {
            (0, l.BR)(
              n.createElement(d.KG, {
                browserContext: e,
                bHideChatNameEntry: !1,
                vecInvitePlayers: o,
                chatViewToReplace: void 0,
                creationOptions: { unBroadcastAccountId: a },
                strTitle: (0, h.Xx)("#Broadcast_CreateWatchParty"),
              }),
              t,
              "CreateChatDialog",
              {
                strTitle: (0, h.Xx)("#Broadcast_CreateWatchParty"),
                popupWidth: 450,
                popupHeight: 600,
              },
              (0, s.Og)(t),
            );
          })(t, a || window, o, i);
        }
        WatchAlone() {
          this.Close();
        }
        UpgradeExisting(e) {
          const {
            broadcastAccountId: t,
            browserContext: a,
            broadcastChannelID: o,
            broadcastTabId: n,
          } = this.props;
          this.Close(),
            o
              ? e.SetChatRoomGroupWatchingBroadcast(void 0, o)
              : e.SetChatRoomGroupWatchingBroadcast(t);
          const s = r.Ul.UIStore.ShowAndOrActivateChatRoomGroup(a, e, !0);
          n && r.Ul.UIStore.CloseTabByID(n),
            this.props.bIsNewSteamTVDialog || s.ShowBroadcast();
        }
        Close() {
          const { closeModal: e } = this.props;
          e && e();
        }
        render() {
          const { closeModal: e, initialFriend: t } = this.props,
            a = r.Ul.ChatStore.currentChatRoomGroups.filter((e) =>
              e.BCanIAssociateBroadcast(),
            ),
            o = t;
          return n.createElement(
            "div",
            { className: "chatModalCover" },
            n.createElement(
              l.e1,
              { onEscKeypress: e },
              n.createElement(
                c.VY,
                { className: "watchPartyDialog" },
                n.createElement(
                  c.uT,
                  null,
                  n.createElement(
                    "div",
                    { className: "watchPartyPrompt" },
                    (0, h.Xx)("#Broadcast_WatchPrompt"),
                  ),
                  n.createElement(
                    c.HV,
                    null,
                    !this.props.bIsNewSteamTVDialog &&
                      n.createElement(
                        c.zx,
                        {
                          svgicon: i.pUF,
                          className: "watchHowButton",
                          onClick: this.WatchAlone,
                        },
                        (0, h.Xx)("#Broadcast_WatchAlone"),
                      ),
                    o &&
                      n.createElement(
                        c.zx,
                        {
                          className: "watchHowButton",
                          onClick: () => this.CreateWatchParty(!0),
                        },
                        n.createElement(g.o2, {
                          friend: o,
                          context: null,
                          bLarge: !1,
                        }),
                        (0, h.kQ)(
                          "#Broadcast_WatchWith",
                          n.createElement(
                            "span",
                            { className: "highlight" },
                            " ",
                            o.display_name,
                          ),
                        ),
                      ),
                    0 !== a.length &&
                      n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(
                          c.__,
                          null,
                          (0, h.Xx)("#Broadcast_WatchWithExistingWatchParty"),
                        ),
                        a.map((e) =>
                          n.createElement(u, {
                            key: e.unique_id,
                            group: e,
                            onClick: () => this.UpgradeExisting(e),
                          }),
                        ),
                      ),
                    n.createElement(
                      c.zx,
                      {
                        className: "watchHowButton newWatchGroup",
                        svgicon: i.k4w,
                        onClick: () => this.CreateWatchParty(!1),
                      },
                      (0, h.Xx)("#Broadcast_LinkBroadcastToGroup_New"),
                    ),
                  ),
                ),
                n.createElement(c.$_, null),
              ),
            ),
          );
        }
      }
      (0, o.gn)([m.ak], C.prototype, "WatchAlone", null),
        (0, o.gn)([m.ak], C.prototype, "Close", null);
      var b = a(79588),
        E = a(50649),
        D = a(37634),
        S = a(36531),
        _ = a(75184),
        f = a.n(_),
        v = a(71111),
        L = a(77079),
        B = a(34656),
        I = a(27903),
        w = a(51723),
        y = a(29442),
        T = a(3061),
        W = a(79509),
        k = a(87653),
        N = a(21180),
        M = a(85164);
      class U {
        constructor() {
          (this.m_iTimeoutLogin = void 0),
            (this.m_eLogonState = 0),
            (this.m_bLogonDialogVisisible = !1),
            (this.m_steamID = void 0),
            (0, b.rC)(this);
        }
        Init(e) {
          (this.m_fnLaunchChat = e),
            (this.m_steamID = M.dk.steamid),
            window.addEventListener("message", this.HandlePostMessage),
            (this.m_reactRoot = D.s(
              document.getElementById("friendslist-container"),
            )),
            this.m_reactRoot.render(n.createElement(P, { app: this })),
            (this.m_iTimeoutLogin = window.setTimeout(() => {
              0 == this.m_eLogonState && (this.m_eLogonState = 1);
            }, 2500));
        }
        LaunchChat() {
          this.m_reactRoot.unmount(),
            window.removeEventListener("message", this.HandlePostMessage),
            window.clearTimeout(this.m_iTimeoutLogin),
            (0, s.yz)(M.dk.steamid),
            this.m_fnLaunchChat();
        }
        GetLoginURL() {
          return `${M.De.STORE_BASE_URL}login/?steamtv`;
        }
        BIsPerformingLogonCheck() {
          return 0 == this.m_eLogonState || 1 == this.m_eLogonState;
        }
        BIsLogonDialogVisible() {
          return this.m_bLogonDialogVisisible;
        }
        ShowLogonDialog() {
          this.m_bLogonDialogVisisible = !0;
        }
        BReadyToRender() {
          return 0 != this.m_eLogonState;
        }
        DismissLogonDialog() {
          this.m_bLogonDialogVisisible = !1;
        }
        GetSteamIDWatched() {
          return this.m_steamID;
        }
        ExtractOrigin(e) {
          return e.replace(/^(https?:\/\/[^/]*).*$/, "$1");
        }
        HandlePostMessage(e) {
          if (
            e.origin != this.ExtractOrigin(M.De.STORE_BASE_URL) &&
            e.origin != this.ExtractOrigin(M.De.CHAT_BASE_URL)
          )
            return void console.warn(
              `Ignoring message from untrusted domain "${e.origin}"`,
            );
          let t = e.data;
          if (t)
            if ("OnLoginButtonClicked" == t.msg)
              console.log("Login button clicked"),
                (this.m_bLogonDialogVisisible = !0);
            else if ("LoginNeeded" == t.command) this.m_eLogonState = 2;
            else if ("LogonComplete" == t.command)
              return void this.LaunchChat();
        }
      }
      (0, o.gn)([b.LO], U.prototype, "m_eLogonState", void 0),
        (0, o.gn)([b.LO], U.prototype, "m_bLogonDialogVisisible", void 0),
        (0, o.gn)([b.LO], U.prototype, "m_steamID", void 0),
        (0, o.gn)([b.aD], U.prototype, "LaunchChat", null),
        (0, o.gn)([b.aD.bound], U.prototype, "HandlePostMessage", null);
      let P = class extends n.Component {
        constructor(e) {
          super(e),
            (this.m_broadcastInfo = null),
            (this.m_broadcastInfo = y.BroadcastWatchStore.StartInfo(
              this.props.app.GetSteamIDWatched(),
            )),
            (this.state = { bChatCollapsed: !1, bTheaterMode: !1 });
        }
        componentWillUnmount() {
          this.m_broadcastInfo &&
            (y.BroadcastWatchStore.StopInfo(this.m_broadcastInfo),
            (this.m_broadcastInfo = null));
        }
        OnShowLogin() {
          this.props.app.ShowLogonDialog();
        }
        ToggleChat() {
          this.setState({ bChatCollapsed: !this.state.bChatCollapsed });
        }
        ToggleTheaterMode() {
          this.setState({ bTheaterMode: !this.state.bTheaterMode });
        }
        render() {
          const e = this.props.app;
          let t = this.m_broadcastInfo,
            a = H();
          return n.createElement(
            x,
            null,
            e.BReadyToRender() &&
              n.createElement(
                "div",
                {
                  className:
                    "StandalonePlayer" +
                    (this.state.bTheaterMode ? " TheaterMode" : ""),
                },
                n.createElement(T.m, {
                  className: "FullpageBroadcastBackdrop",
                  src: t.m_strThumbnailUrl,
                  draggable: !1,
                  duration: 2500,
                }),
                n.createElement(
                  "div",
                  { className: "BroadcastTab" },
                  n.createElement(
                    "div",
                    { className: "StandalonePlayerHeader" },
                    n.createElement(
                      "div",
                      { className: "STV_Logo" },
                      n.createElement(i.hLd, null),
                    ),
                    n.createElement(
                      "div",
                      {
                        className:
                          "BroadcastTab_HeaderRow" +
                          (this.state.bChatCollapsed ? " ChatCollapsed" : ""),
                      },
                      n.createElement(G, { onClick: this.OnShowLogin }),
                      n.createElement(A, {
                        onClick: this.ToggleChat,
                        hideIcon: this.state.bChatCollapsed,
                      }),
                    ),
                  ),
                  n.createElement(
                    F,
                    {
                      steamID: e.GetSteamIDWatched(),
                      watchLocation: a,
                      bHideChat: this.state.bChatCollapsed,
                      onTheaterMode: this.ToggleTheaterMode,
                    },
                    n.createElement(z, { app: e }),
                  ),
                ),
              ),
            n.createElement(O, { app: e }),
          );
        }
      };
      function R() {
        const e = (0, M.ip)("loyalty_webapi_token", "application_config");
        return new w.J(M.De.WEBAPI_BASE_URL, e);
      }
      function x(e) {
        const { children: t } = e,
          a = n.useCallback(
            () =>
              null === r.Ul || void 0 === r.Ul ? void 0 : r.Ul.CMInterface,
            [],
          ),
          o = (0, m.kD)(n.useCallback(() => new I.Z(), [])),
          s = (0, m.kD)(R);
        return n.createElement(
          N.R,
          null,
          n.createElement(
            M.fI,
            null,
            M.L7.logged_in
              ? n.createElement(
                  B.Ub,
                  { useActiveCMInterface: a, useStorage: o },
                  t,
                )
              : n.createElement(
                  B.Ub,
                  { useActiveSteamInterface: s, useStorage: o },
                  t,
                ),
          ),
        );
      }
      (0, o.gn)([m.ak], P.prototype, "OnShowLogin", null),
        (0, o.gn)([m.ak], P.prototype, "ToggleChat", null),
        (0, o.gn)([m.ak], P.prototype, "ToggleTheaterMode", null),
        (P = (0, o.gn)([E.Pi], P));
      let O = (0, E.Pi)(({ app: e }) =>
        e.BIsPerformingLogonCheck()
          ? n.createElement(
              "div",
              null,
              n.createElement("iframe", {
                style: { display: "none" },
                src: e.GetLoginURL(),
              }),
            )
          : null,
      );
      function G(e) {
        return n.createElement(
          "div",
          { className: "BroadcastButton WatchWithFriends", onClick: e.onClick },
          n.createElement(i.lsH, null),
          (0, h.Xx)("#Broadcast_WatchWithFriends"),
        );
      }
      function A(e) {
        return n.createElement(
          "div",
          {
            className: "ToggleBroadcastChat",
            title: (0, h.Xx)("#Broadcast_ToggleChat"),
            onClick: e.onClick,
          },
          n.createElement(i.QlI, { showChat: e.hideIcon }),
        );
      }
      function H() {
        return M.De.STEAM_TV ? 1 : 3;
      }
      let V = class extends n.Component {
        constructor(e) {
          super(e), (this.m_broadcastInfo = null);
          let t = this.props.broadcastView.GetSteamID().ConvertTo64BitString();
          (this.m_broadcastInfo = y.BroadcastWatchStore.StartInfo(t)),
            (this.state = { bChatCollapsed: !1 });
        }
        componentWillUnmount() {
          this.m_broadcastInfo &&
            (y.BroadcastWatchStore.StopInfo(this.m_broadcastInfo),
            (this.m_broadcastInfo = null));
        }
        OnWatchWithFriends() {
          this.props.broadcastView.ShowWatchPromptDialog();
        }
        ToggleChat() {
          this.setState({ bChatCollapsed: !this.state.bChatCollapsed });
        }
        ToggleTheaterMode() {
          r.Ul.UIStore.SetTheaterMode(!r.Ul.UIStore.GetTheaterMode());
        }
        render() {
          const { broadcastView: e, popup: t, style: a } = this.props,
            o = e.GetSteamID().ConvertTo64BitString();
          let s = H();
          const i = e.m_bShowWatchPromptDialog
            ? n.createElement(C, {
                closeModal: () => e.HideWatchPromptDialog(),
                broadcastAccountId: e.GetSteamID().GetAccountID(),
                broadcastTabId: e.GetUniqueID(),
                initialFriend: e.m_watchPromptInitialFriend,
                browserContext: r.D,
                ownerWindow: t,
              })
            : null;
          return n.createElement(
            "div",
            { className: "BroadcastTab", style: a },
            n.createElement(T.m, {
              className: "FullpageBroadcastBackdrop",
              src: this.m_broadcastInfo.m_strThumbnailUrl,
              draggable: !1,
              duration: 2500,
            }),
            n.createElement(
              "div",
              { className: "BroadcastTab_OverBackground" },
              n.createElement(
                "div",
                { className: "BroadcastTabHeaderContainer" },
                n.createElement(
                  "div",
                  {
                    className:
                      "BroadcastTab_HeaderRow" +
                      (this.state.bChatCollapsed ? " ChatCollapsed" : ""),
                  },
                  n.createElement(G, { onClick: this.OnWatchWithFriends }),
                  n.createElement(A, {
                    onClick: this.ToggleChat,
                    hideIcon: this.state.bChatCollapsed,
                  }),
                ),
              ),
              n.createElement(
                F,
                {
                  steamID: o,
                  watchLocation: s,
                  bHideChat: this.state.bChatCollapsed,
                  onTheaterMode: this.ToggleTheaterMode,
                },
                i,
              ),
            ),
          );
        }
      };
      (0, o.gn)([m.ak], V.prototype, "OnWatchWithFriends", null),
        (0, o.gn)([m.ak], V.prototype, "ToggleChat", null),
        (0, o.gn)([m.ak], V.prototype, "ToggleTheaterMode", null),
        (V = (0, o.gn)([E.Pi], V));
      let F = class extends n.Component {
        constructor(e) {
          super(e),
            (this.m_strLocalSteamID = ""),
            (this.m_refBroadcastContainer = n.createRef()),
            (0, b.rC)(this),
            (this.state = { info: null });
        }
        componentDidMount() {
          v.rr.stream["76561198208088121"] && "chinese" === M.De.LANGUAGE
            ? this.OnLocalStreamChange("76561198208088121")
            : v.rr.stream["76561198207552741"] &&
              "russian" === M.De.LANGUAGE &&
              this.OnLocalStreamChange("76561198207552741");
        }
        static getDerivedStateFromProps(e, t) {
          if (!t.info || t.info.m_steamIDBroadcast !== e.steamID) {
            t.info && y.BroadcastWatchStore.StopInfo(t.info);
            return { info: y.BroadcastWatchStore.StartInfo(e.steamID) };
          }
          return null;
        }
        componentWillUnmount() {
          this.state.info && y.BroadcastWatchStore.StopInfo(this.state.info);
        }
        OnLocalStreamChange(e) {
          this.m_strLocalSteamID = e;
        }
        SetMainContentRef(e) {
          this.m_elMainContent = e;
        }
        CalculateBroadcastSectionStyles(e) {
          if (this.props.bHideChat) return { width: "100%", height: "100%" };
          let t, a;
          s.g_FriendsUIDesktopApp &&
            ((t =
              s.g_FriendsUIDesktopApp.UIDisplayPrefs
                .nWatchPartyBroadcastHeightPercentage),
            (a =
              s.g_FriendsUIDesktopApp.UIDisplayPrefs
                .nWatchPartyBroadcastWidthPercentage));
          const o = {};
          if (e) {
            const e = t || 66;
            if (((o.height = `${e}%`), this.m_elMainContent)) {
              const { clientWidth: t, clientHeight: a } = this.m_elMainContent,
                n = (9 / 16) * t + 50,
                s = (0, k.Lh)(e, 1, (n / a) * 100);
              o.height = `${s}%`;
            }
          } else
            (o.width = a ? `${a}%` : "66%"),
              (o.minWidth = a ? `${a}%` : "66%"),
              (o.maxWidth = "calc( 100% - 316px )"),
              (o.overflowY = "auto");
          return o;
        }
        OnGrabberMouseDown(e) {
          let t = e.currentTarget.ownerDocument.defaultView;
          t.addEventListener("mousemove", this.HandleMouseMove),
            t.addEventListener("mouseup", this.UnregisterDragEvents),
            this.setState({ bDraggingChatGrabber: !0 });
        }
        HandleMouseMove(e) {
          e.preventDefault(), e.stopPropagation();
          let t = this.m_refBroadcastContainer.current.getBoundingClientRect(),
            a =
              this.m_refBroadcastContainer.current.parentElement.getBoundingClientRect();
          const o = t.left,
            n = e.clientX,
            r = a.width,
            i = (0, k.Lh)(((n - o) / r) * 100, 1, 100);
          s.g_FriendsUIDesktopApp.SetUIDisplayPref(
            "nWatchPartyBroadcastWidthPercentage",
            i,
          );
        }
        UnregisterDragEvents(e) {
          e.view.removeEventListener("mousemove", this.HandleMouseMove),
            e.view.removeEventListener("mouseup", this.UnregisterDragEvents),
            this.setState({ bDraggingChatGrabber: !1 });
        }
        render() {
          let { steamID: e, children: t } = this.props,
            a = this.m_strLocalSteamID || e,
            o = this.state.info.m_bIsOnline,
            s = null;
          const i = this.CalculateBroadcastSectionStyles(!1);
          (i.flexGrow = this.props.bHideChat ? 1 : null),
            v.rr.bValid && (s = n.createElement(X, { info: v.rr }));
          const l = new U(),
            c = n.createElement(
              "div",
              { className: "LoginDiv" },
              n.createElement(
                "a",
                {
                  onClick: () => l.ShowLogonDialog(),
                  className: f().ChatLoginButton,
                  href: "#",
                },
                (0, h.Xx)("#BroadcastChat_Login"),
              ),
              n.createElement(z, { app: l }),
            ),
            d = y.BroadcastWatchStore.GetBroadcast(a)
              ? y.BroadcastWatchStore.GetBroadcast(a).m_ulBroadcastID
              : "0";
          return n.createElement(
            "div",
            { className: "BroadcastContainer" },
            n.createElement(
              "div",
              {
                className: "BroadcastContainerSection",
                ref: this.m_refBroadcastContainer,
                style: i,
              },
              n.createElement(
                "div",
                { className: "BroadcastContainerSectionVideoContainer" },
                o &&
                  n.createElement(L.default, {
                    key: a,
                    steamIDBroadcast: a,
                    watchLocation: this.props.watchLocation,
                    onTheaterMode: this.props.onTheaterMode,
                  }),
                !o && s,
                n.createElement("div", { className: "videoContainerSizer" }),
              ),
              t,
              n.createElement(
                "div",
                { className: "BroadcastDetailsSection" },
                n.createElement(L.BroadcastDetails, {
                  steamID: a,
                  onLocalStreamChange: this.OnLocalStreamChange,
                  bVerticalBroadcastChat: !0,
                }),
              ),
            ),
            !this.props.bHideChat &&
              n.createElement("div", {
                className: "BroadcastChatDivider horizontal",
                onMouseDown: this.OnGrabberMouseDown,
              }),
            n.createElement(
              "div",
              {
                className: "BroadcastChatDiv",
                style: {
                  display: this.props.bHideChat ? "none" : "flex",
                  flexDirection: "column",
                  width: "100%",
                  minWidth: "300px",
                },
              },
              n.createElement(S.c, {
                emoticonStore: r.Ul ? r.Ul.ChatStore.EmoticonStore : null,
                broadcastID: d,
                steamID: a,
                watchLocation: this.props.watchLocation,
                hidden: this.props.bHideChat,
              }),
              M.L7 && M.L7.logged_in ? null : c,
            ),
          );
        }
      };
      function X(e) {
        let t = `url( "${M.De.CHAT_BASE_URL + e.info.offlineImage}" )`;
        return n.createElement("div", {
          style: { backgroundImage: t },
          className: "BroadcastOffline",
        });
      }
      (0, o.gn)([b.LO], F.prototype, "m_strLocalSteamID", void 0),
        (0, o.gn)([m.ak], F.prototype, "OnLocalStreamChange", null),
        (0, o.gn)([m.ak], F.prototype, "SetMainContentRef", null),
        (0, o.gn)([m.ak], F.prototype, "OnGrabberMouseDown", null),
        (0, o.gn)([m.ak], F.prototype, "HandleMouseMove", null),
        (0, o.gn)([m.ak], F.prototype, "UnregisterDragEvents", null),
        (F = (0, o.gn)([E.Pi], F));
      class $ extends n.Component {
        Dismiss() {
          this.props.app.DismissLogonDialog();
        }
        render() {
          return n.createElement(
            W.e1,
            { onEscKeypress: this.Dismiss },
            n.createElement(
              c.VY,
              { className: "SteamTVLoginDialog" },
              n.createElement("iframe", {
                className: "steamTVLogin",
                src: this.props.app.GetLoginURL(),
              }),
            ),
          );
        }
      }
      (0, o.gn)([m.ak], $.prototype, "Dismiss", null);
      let z = class extends n.Component {
        render() {
          if (!this.props.app.BIsLogonDialogVisible()) return null;
          let e = n.createElement($, { app: this.props.app });
          return n.createElement(
            "div",
            { className: "FullModalOverlay" },
            n.createElement("div", {
              className: "ModalOverlayContent ModalOverlayBackground",
            }),
            n.createElement(
              "div",
              { className: "ModalOverlayContent active" },
              e,
            ),
          );
        }
      };
      z = (0, o.gn)([E.Pi], z);
      var q = a(50937);
      let K = class extends n.Component {
        render() {
          let e = this.props.broadcastView;
          if (!(e && e instanceof q.v)) return null;
          let t = {};
          return (
            this.props.isActive || (t.display = "none"),
            n.createElement(V, {
              style: t,
              broadcastView: e,
              popup: this.props.popup,
            })
          );
        }
      };
      K = (0, o.gn)([E.Pi], K);
      const Y = K;
    },
    73666: (e, t, a) => {
      a.r(t), a.d(t, { default: () => r });
      var o = a(27378),
        n = a(77079),
        s = a(16195);
      const r = o.forwardRef(function (
        {
          steamID: e,
          localSteamID: t,
          watchLocation: a,
          bWebRTC: r,
          style: i,
          onRequestClose: l,
          actions: c,
          onTheaterMode: h,
          onLocalStreamChange: d,
          bVerticalBroadcastChat: m,
        },
        p,
      ) {
        const g = t || e;
        return o.createElement(
          "div",
          {
            ref: p,
            style: Object.assign(
              { display: "flex", flexDirection: "column" },
              i,
            ),
          },
          o.createElement(
            "div",
            { className: "BroadcastSection" },
            o.createElement(n.default, {
              key: g,
              steamIDBroadcast: g,
              watchLocation: a,
              bWebRTC: r,
              onRequestClose: l,
              actions: c,
              onTheaterMode: h,
              onOpenLinkInNewWindow: s.b8,
            }),
            o.createElement("div", { className: "videoContainerSizer" }),
          ),
          o.createElement(
            "div",
            { className: "BroadcastDetailsSection" },
            o.createElement(n.BroadcastDetails, {
              steamID: g,
              onLocalStreamChange: d,
              bVerticalBroadcastChat: m,
            }),
          ),
        );
      });
    },
  },
]);
//# sourceMappingURL=../sourcemaps/libraries/libraries~7a27d3eeb.js.map
