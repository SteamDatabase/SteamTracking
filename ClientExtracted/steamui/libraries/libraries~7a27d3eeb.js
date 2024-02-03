"use strict";
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [8237],
  {
    98365: (e, t, a) => {
      a.r(t), a.d(t, { default: () => q });
      var o = a(85556),
        n = a(27378),
        s = a(37634),
        r = a(50947),
        i = a(85164),
        l = a(79588),
        c = a(50649),
        h = a(29442),
        d = a(62923),
        m = a(22435),
        p = a(77079),
        g = a(36531),
        u = a(26721),
        C = a(86064),
        b = a(25854),
        E = a(24105),
        D = a(877),
        S = a(79561),
        v = a(92840);
      const _ = ({ group: e, onClick: t }) => {
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
            n.createElement(S._P, { group: e, small: !0 }),
            n.createElement(
              "div",
              { className: "groupNameStatusContainer" },
              n.createElement("div", { className: "chatRoomName" }, e.name),
              a &&
                n.createElement(
                  "div",
                  { className: "chatRoomDetails" },
                  (0, C.Xx)("#Broadcast_WatchParty_Viewers_NoneActive"),
                ),
            ),
          ),
        );
      };
      class f extends n.Component {
        CreateWatchParty(e = !1) {
          const {
            browserContext: t,
            ownerWindow: a,
            broadcastAccountId: o,
            initialFriend: s,
          } = this.props;
          this.Close();
          const r = e && s ? [s.accountid] : [];
          !(function (e, t, a, o) {
            (0, u.BR)(
              n.createElement(D.KG, {
                browserContext: e,
                bHideChatNameEntry: !1,
                vecInvitePlayers: o,
                chatViewToReplace: void 0,
                creationOptions: { unBroadcastAccountId: a },
                strTitle: (0, C.Xx)("#Broadcast_CreateWatchParty"),
              }),
              t,
              "CreateChatDialog",
              {
                strTitle: (0, C.Xx)("#Broadcast_CreateWatchParty"),
                popupWidth: 450,
                popupHeight: 600,
              },
              (0, E.Og)(t),
            );
          })(t, a || window, o, r);
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
          const s = b.Ul.UIStore.ShowAndOrActivateChatRoomGroup(a, e, !0);
          n && b.Ul.UIStore.CloseTabByID(n),
            this.props.bIsNewSteamTVDialog || s.ShowBroadcast();
        }
        Close() {
          const { closeModal: e } = this.props;
          e && e();
        }
        render() {
          const { closeModal: e, initialFriend: t } = this.props,
            a = b.Ul.ChatStore.currentChatRoomGroups.filter((e) =>
              e.BCanIAssociateBroadcast(),
            ),
            o = t;
          return n.createElement(
            "div",
            { className: "chatModalCover" },
            n.createElement(
              u.e1,
              { onEscKeypress: e },
              n.createElement(
                d.VY,
                { className: "watchPartyDialog" },
                n.createElement(
                  d.uT,
                  null,
                  n.createElement(
                    "div",
                    { className: "watchPartyPrompt" },
                    (0, C.Xx)("#Broadcast_WatchPrompt"),
                  ),
                  n.createElement(
                    d.HV,
                    null,
                    !this.props.bIsNewSteamTVDialog &&
                      n.createElement(
                        d.zx,
                        {
                          svgicon: m.pUF,
                          className: "watchHowButton",
                          onClick: this.WatchAlone,
                        },
                        (0, C.Xx)("#Broadcast_WatchAlone"),
                      ),
                    o &&
                      n.createElement(
                        d.zx,
                        {
                          className: "watchHowButton",
                          onClick: () => this.CreateWatchParty(!0),
                        },
                        n.createElement(v.o2, {
                          friend: o,
                          context: null,
                          bLarge: !1,
                        }),
                        (0, C.kQ)(
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
                          d.__,
                          null,
                          (0, C.Xx)("#Broadcast_WatchWithExistingWatchParty"),
                        ),
                        a.map((e) =>
                          n.createElement(_, {
                            key: e.unique_id,
                            group: e,
                            onClick: () => this.UpgradeExisting(e),
                          }),
                        ),
                      ),
                    n.createElement(
                      d.zx,
                      {
                        className: "watchHowButton newWatchGroup",
                        svgicon: m.k4w,
                        onClick: () => this.CreateWatchParty(!1),
                      },
                      (0, C.Xx)("#Broadcast_LinkBroadcastToGroup_New"),
                    ),
                  ),
                ),
                n.createElement(d.$_, null),
              ),
            ),
          );
        }
      }
      (0, o.gn)([r.ak], f.prototype, "WatchAlone", null),
        (0, o.gn)([r.ak], f.prototype, "Close", null);
      var L = a(3061),
        B = a(71111),
        I = a(87653),
        w = a(75184),
        T = a.n(w),
        y = a(79509),
        W = a(34656),
        k = a(27903),
        N = a(21180);
      class M {
        constructor() {
          (this.m_iTimeoutLogin = void 0),
            (this.m_eLogonState = 0),
            (this.m_bLogonDialogVisisible = !1),
            (this.m_steamID = void 0),
            (0, l.rC)(this);
        }
        Init(e) {
          (this.m_fnLaunchChat = e),
            (this.m_steamID = i.dk.steamid),
            window.addEventListener("message", this.HandlePostMessage),
            (this.m_reactRoot = s.s(
              document.getElementById("friendslist-container"),
            )),
            this.m_reactRoot.render(n.createElement(U, { app: this })),
            (this.m_iTimeoutLogin = window.setTimeout(() => {
              0 == this.m_eLogonState && (this.m_eLogonState = 1);
            }, 2500));
        }
        LaunchChat() {
          this.m_reactRoot.unmount(),
            window.removeEventListener("message", this.HandlePostMessage),
            window.clearTimeout(this.m_iTimeoutLogin),
            (0, E.yz)(i.dk.steamid),
            this.m_fnLaunchChat();
        }
        GetLoginURL() {
          return `${i.De.STORE_BASE_URL}login/?steamtv`;
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
            e.origin != this.ExtractOrigin(i.De.STORE_BASE_URL) &&
            e.origin != this.ExtractOrigin(i.De.CHAT_BASE_URL)
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
      (0, o.gn)([l.LO], M.prototype, "m_eLogonState", void 0),
        (0, o.gn)([l.LO], M.prototype, "m_bLogonDialogVisisible", void 0),
        (0, o.gn)([l.LO], M.prototype, "m_steamID", void 0),
        (0, o.gn)([l.aD], M.prototype, "LaunchChat", null),
        (0, o.gn)([l.aD.bound], M.prototype, "HandlePostMessage", null);
      let U = class extends n.Component {
        constructor(e) {
          super(e),
            (this.m_broadcastInfo = null),
            (this.m_broadcastInfo = h.BroadcastWatchStore.StartInfo(
              this.props.app.GetSteamIDWatched(),
            )),
            (this.state = { bChatCollapsed: !1, bTheaterMode: !1 });
        }
        componentWillUnmount() {
          this.m_broadcastInfo &&
            (h.BroadcastWatchStore.StopInfo(this.m_broadcastInfo),
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
            a = G();
          return n.createElement(
            P,
            null,
            e.BReadyToRender() &&
              n.createElement(
                "div",
                {
                  className:
                    "StandalonePlayer" +
                    (this.state.bTheaterMode ? " TheaterMode" : ""),
                },
                n.createElement(L.m, {
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
                      n.createElement(m.hLd, null),
                    ),
                    n.createElement(
                      "div",
                      {
                        className:
                          "BroadcastTab_HeaderRow" +
                          (this.state.bChatCollapsed ? " ChatCollapsed" : ""),
                      },
                      n.createElement(R, { onClick: this.OnShowLogin }),
                      n.createElement(O, {
                        onClick: this.ToggleChat,
                        hideIcon: this.state.bChatCollapsed,
                      }),
                    ),
                  ),
                  n.createElement(
                    A,
                    {
                      steamID: e.GetSteamIDWatched(),
                      watchLocation: a,
                      bHideChat: this.state.bChatCollapsed,
                      onTheaterMode: this.ToggleTheaterMode,
                    },
                    n.createElement(X, { app: e }),
                  ),
                ),
              ),
            n.createElement(x, { app: e }),
          );
        }
      };
      function P(e) {
        const { children: t } = e,
          a = n.useCallback(
            () =>
              null === b.Ul || void 0 === b.Ul ? void 0 : b.Ul.CMInterface,
            [],
          ),
          o = (0, r.kD)(n.useCallback(() => new k.Z(), []));
        return n.createElement(
          N.R,
          null,
          n.createElement(
            i.fI,
            null,
            n.createElement(
              W.Ub,
              { useActiveCMInterface: a, useStorage: o },
              t,
            ),
          ),
        );
      }
      (0, o.gn)([r.ak], U.prototype, "OnShowLogin", null),
        (0, o.gn)([r.ak], U.prototype, "ToggleChat", null),
        (0, o.gn)([r.ak], U.prototype, "ToggleTheaterMode", null),
        (U = (0, o.gn)([c.Pi], U));
      let x = (0, c.Pi)(({ app: e }) =>
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
      function R(e) {
        return n.createElement(
          "div",
          { className: "BroadcastButton WatchWithFriends", onClick: e.onClick },
          n.createElement(m.lsH, null),
          (0, C.Xx)("#Broadcast_WatchWithFriends"),
        );
      }
      function O(e) {
        return n.createElement(
          "div",
          {
            className: "ToggleBroadcastChat",
            title: (0, C.Xx)("#Broadcast_ToggleChat"),
            onClick: e.onClick,
          },
          n.createElement(m.QlI, { showChat: e.hideIcon }),
        );
      }
      function G() {
        return i.De.STEAM_TV ? 1 : 3;
      }
      let H = class extends n.Component {
        constructor(e) {
          super(e), (this.m_broadcastInfo = null);
          let t = this.props.broadcastView.GetSteamID().ConvertTo64BitString();
          (this.m_broadcastInfo = h.BroadcastWatchStore.StartInfo(t)),
            (this.state = { bChatCollapsed: !1 });
        }
        componentWillUnmount() {
          this.m_broadcastInfo &&
            (h.BroadcastWatchStore.StopInfo(this.m_broadcastInfo),
            (this.m_broadcastInfo = null));
        }
        OnWatchWithFriends() {
          this.props.broadcastView.ShowWatchPromptDialog();
        }
        ToggleChat() {
          this.setState({ bChatCollapsed: !this.state.bChatCollapsed });
        }
        ToggleTheaterMode() {
          b.Ul.UIStore.SetTheaterMode(!b.Ul.UIStore.GetTheaterMode());
        }
        render() {
          const { broadcastView: e, popup: t, style: a } = this.props,
            o = e.GetSteamID().ConvertTo64BitString();
          let s = G();
          const r = e.m_bShowWatchPromptDialog
            ? n.createElement(f, {
                closeModal: () => e.HideWatchPromptDialog(),
                broadcastAccountId: e.GetSteamID().GetAccountID(),
                broadcastTabId: e.GetUniqueID(),
                initialFriend: e.m_watchPromptInitialFriend,
                browserContext: b.D,
                ownerWindow: t,
              })
            : null;
          return n.createElement(
            "div",
            { className: "BroadcastTab", style: a },
            n.createElement(L.m, {
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
                  n.createElement(R, { onClick: this.OnWatchWithFriends }),
                  n.createElement(O, {
                    onClick: this.ToggleChat,
                    hideIcon: this.state.bChatCollapsed,
                  }),
                ),
              ),
              n.createElement(
                A,
                {
                  steamID: o,
                  watchLocation: s,
                  bHideChat: this.state.bChatCollapsed,
                  onTheaterMode: this.ToggleTheaterMode,
                },
                r,
              ),
            ),
          );
        }
      };
      (0, o.gn)([r.ak], H.prototype, "OnWatchWithFriends", null),
        (0, o.gn)([r.ak], H.prototype, "ToggleChat", null),
        (0, o.gn)([r.ak], H.prototype, "ToggleTheaterMode", null),
        (H = (0, o.gn)([c.Pi], H));
      let A = class extends n.Component {
        constructor(e) {
          super(e),
            (this.m_strLocalSteamID = ""),
            (this.m_refBroadcastContainer = n.createRef()),
            (0, l.rC)(this),
            (this.state = { info: null });
        }
        componentDidMount() {
          B.rr.stream["76561198208088121"] && "chinese" === i.De.LANGUAGE
            ? this.OnLocalStreamChange("76561198208088121")
            : B.rr.stream["76561198207552741"] &&
              "russian" === i.De.LANGUAGE &&
              this.OnLocalStreamChange("76561198207552741");
        }
        static getDerivedStateFromProps(e, t) {
          if (!t.info || t.info.m_steamIDBroadcast !== e.steamID) {
            t.info && h.BroadcastWatchStore.StopInfo(t.info);
            return { info: h.BroadcastWatchStore.StartInfo(e.steamID) };
          }
          return null;
        }
        componentWillUnmount() {
          this.state.info && h.BroadcastWatchStore.StopInfo(this.state.info);
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
          E.g_FriendsUIDesktopApp &&
            ((t =
              E.g_FriendsUIDesktopApp.UIDisplayPrefs
                .nWatchPartyBroadcastHeightPercentage),
            (a =
              E.g_FriendsUIDesktopApp.UIDisplayPrefs
                .nWatchPartyBroadcastWidthPercentage));
          const o = {};
          if (e) {
            const e = t || 66;
            if (((o.height = `${e}%`), this.m_elMainContent)) {
              const { clientWidth: t, clientHeight: a } = this.m_elMainContent,
                n = (9 / 16) * t + 50,
                s = (0, I.Lh)(e, 1, (n / a) * 100);
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
            s = a.width,
            r = (0, I.Lh)(((n - o) / s) * 100, 1, 100);
          E.g_FriendsUIDesktopApp.SetUIDisplayPref(
            "nWatchPartyBroadcastWidthPercentage",
            r,
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
          const r = this.CalculateBroadcastSectionStyles(!1);
          (r.flexGrow = this.props.bHideChat ? 1 : null),
            B.rr.bValid && (s = n.createElement(V, { info: B.rr }));
          const l = new M(),
            c = n.createElement(
              "div",
              { className: "LoginDiv" },
              n.createElement(
                "a",
                {
                  onClick: () => l.ShowLogonDialog(),
                  className: T().ChatLoginButton,
                  href: "javascript:void(0);",
                },
                (0, C.Xx)("#BroadcastChat_Login"),
              ),
              n.createElement(X, { app: l }),
            ),
            d = h.BroadcastWatchStore.GetBroadcast(a)
              ? h.BroadcastWatchStore.GetBroadcast(a).m_ulBroadcastID
              : "0";
          return n.createElement(
            "div",
            { className: "BroadcastContainer" },
            n.createElement(
              "div",
              {
                className: "BroadcastContainerSection",
                ref: this.m_refBroadcastContainer,
                style: r,
              },
              n.createElement(
                "div",
                { className: "BroadcastContainerSectionVideoContainer" },
                o &&
                  n.createElement(p.default, {
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
                n.createElement(p.BroadcastDetails, {
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
              n.createElement(g.c, {
                emoticonStore: b.Ul ? b.Ul.ChatStore.EmoticonStore : null,
                broadcastID: d,
                steamID: a,
                watchLocation: this.props.watchLocation,
                hidden: this.props.bHideChat,
              }),
              i.L7 && i.L7.logged_in ? null : c,
            ),
          );
        }
      };
      function V(e) {
        let t = `url( "${i.De.CHAT_BASE_URL + e.info.offlineImage}" )`;
        return n.createElement("div", {
          style: { backgroundImage: t },
          className: "BroadcastOffline",
        });
      }
      (0, o.gn)([l.LO], A.prototype, "m_strLocalSteamID", void 0),
        (0, o.gn)([r.ak], A.prototype, "OnLocalStreamChange", null),
        (0, o.gn)([r.ak], A.prototype, "SetMainContentRef", null),
        (0, o.gn)([r.ak], A.prototype, "OnGrabberMouseDown", null),
        (0, o.gn)([r.ak], A.prototype, "HandleMouseMove", null),
        (0, o.gn)([r.ak], A.prototype, "UnregisterDragEvents", null),
        (A = (0, o.gn)([c.Pi], A));
      class F extends n.Component {
        Dismiss() {
          this.props.app.DismissLogonDialog();
        }
        render() {
          return n.createElement(
            y.e1,
            { onEscKeypress: this.Dismiss },
            n.createElement(
              d.VY,
              { className: "SteamTVLoginDialog" },
              n.createElement("iframe", {
                className: "steamTVLogin",
                src: this.props.app.GetLoginURL(),
              }),
            ),
          );
        }
      }
      (0, o.gn)([r.ak], F.prototype, "Dismiss", null);
      let X = class extends n.Component {
        render() {
          if (!this.props.app.BIsLogonDialogVisible()) return null;
          let e = n.createElement(F, { app: this.props.app });
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
      X = (0, o.gn)([c.Pi], X);
      var $ = a(50937);
      let z = class extends n.Component {
        render() {
          let e = this.props.broadcastView;
          if (!(e && e instanceof $.v)) return null;
          let t = {};
          return (
            this.props.isActive || (t.display = "none"),
            n.createElement(H, {
              style: t,
              broadcastView: e,
              popup: this.props.popup,
            })
          );
        }
      };
      z = (0, o.gn)([c.Pi], z);
      const q = z;
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
