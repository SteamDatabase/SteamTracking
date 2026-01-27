"use strict";
(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [7653],
  {
    31711: (e, t, a) => {
      a.r(t), a.d(t, { default: () => X });
      var o = a(34629),
        n = a(63696),
        s = a(52912),
        r = a(58490),
        i = a(50376),
        c = a(13869),
        l = a(64608),
        d = a(46108),
        h = a(69649),
        m = a(51115),
        u = a(53414),
        p = a(98829);
      const g = ({ group: e, onClick: t }) => {
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
            n.createElement(u.I, { group: e, small: !0 }),
            n.createElement(
              "div",
              { className: "groupNameStatusContainer" },
              n.createElement("div", { className: "chatRoomName" }, e.name),
              a &&
                n.createElement(
                  "div",
                  { className: "chatRoomDetails" },
                  (0, d.we)("#Broadcast_WatchParty_Viewers_NoneActive"),
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
            (0, c.HT)(
              n.createElement(h.zw, {
                browserContext: e,
                bHideChatNameEntry: !1,
                vecInvitePlayers: o,
                chatViewToReplace: void 0,
                creationOptions: { unBroadcastAccountId: a },
                strTitle: (0, d.we)("#Broadcast_CreateWatchParty"),
              }),
              t,
              "CreateChatDialog",
              {
                strTitle: (0, d.we)("#Broadcast_CreateWatchParty"),
                popupWidth: 450,
                popupHeight: 600,
              },
              (0, s.h8)(t),
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
          const s = r.xm.UIStore.ShowAndOrActivateChatRoomGroup(a, e, !0);
          n && r.xm.UIStore.CloseTabByID(n),
            this.props.bIsNewSteamTVDialog || s.ShowBroadcast();
        }
        Close() {
          const { closeModal: e } = this.props;
          e && e();
        }
        render() {
          const { closeModal: e, initialFriend: t } = this.props,
            a = r.xm.ChatStore.currentChatRoomGroups.filter((e) =>
              e.BCanIAssociateBroadcast(),
            ),
            o = t;
          return n.createElement(
            "div",
            { className: "chatModalCover" },
            n.createElement(
              c.x_,
              { onEscKeypress: e },
              n.createElement(
                l.UC,
                { className: "watchPartyDialog" },
                n.createElement(
                  l.nB,
                  null,
                  n.createElement(
                    "div",
                    { className: "watchPartyPrompt" },
                    (0, d.we)("#Broadcast_WatchPrompt"),
                  ),
                  n.createElement(
                    l.xz,
                    null,
                    !this.props.bIsNewSteamTVDialog &&
                      n.createElement(
                        l.$n,
                        {
                          svgicon: i.Gv$,
                          className: "watchHowButton",
                          onClick: this.WatchAlone,
                        },
                        (0, d.we)("#Broadcast_WatchAlone"),
                      ),
                    o &&
                      n.createElement(
                        l.$n,
                        {
                          className: "watchHowButton",
                          onClick: () => this.CreateWatchParty(!0),
                        },
                        n.createElement(p.gv, {
                          friend: o,
                          context: null,
                          bLarge: !1,
                        }),
                        (0, d.PP)(
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
                          l.JU,
                          null,
                          (0, d.we)("#Broadcast_WatchWithExistingWatchParty"),
                        ),
                        a.map((e) =>
                          n.createElement(g, {
                            key: e.unique_id,
                            group: e,
                            onClick: () => this.UpgradeExisting(e),
                          }),
                        ),
                      ),
                    n.createElement(
                      l.$n,
                      {
                        className: "watchHowButton newWatchGroup",
                        svgicon: i.u9R,
                        onClick: () => this.CreateWatchParty(!1),
                      },
                      (0, d.we)("#Broadcast_LinkBroadcastToGroup_New"),
                    ),
                  ),
                ),
                n.createElement(l.wi, null),
              ),
            ),
          );
        }
      }
      (0, o.Cg)([m.oI], C.prototype, "WatchAlone", null),
        (0, o.Cg)([m.oI], C.prototype, "Close", null);
      var E = a(89193),
        S = a(41230),
        I = a(7470),
        b = a(56654),
        f = a(89454),
        _ = a.n(f),
        w = a(21866),
        B = a(72993),
        v = a(46382),
        T = a(73870),
        L = a(17385),
        D = a(31222),
        y = a(23024),
        W = a(27337),
        M = a(49412),
        N = a(21371),
        P = a(72476),
        R = a(91435);
      class A {
        constructor() {
          (0, E.Gn)(this);
        }
        m_fnLaunchChat;
        m_iTimeoutLogin = void 0;
        m_eLogonState = 0;
        m_steamID = void 0;
        m_reactRoot;
        Init(e) {
          (this.m_fnLaunchChat = e),
            (this.m_steamID = P.GP.steamid),
            window.addEventListener("message", this.HandlePostMessage),
            (this.m_reactRoot = I.createRoot(
              document.getElementById("friendslist-container"),
            )),
            this.m_reactRoot.render(n.createElement(G, { app: this })),
            (this.m_iTimeoutLogin = window.setTimeout(() => {
              0 == this.m_eLogonState && (this.m_eLogonState = 1);
            }, 2500));
        }
        LaunchChat() {
          this.m_reactRoot.unmount(),
            window.removeEventListener("message", this.HandlePostMessage),
            window.clearTimeout(this.m_iTimeoutLogin),
            (0, s.xT)(P.GP.steamid),
            this.m_fnLaunchChat();
        }
        GetLoginURL() {
          return `${P.TS.STORE_BASE_URL}login/?steamtv`;
        }
        BIsPerformingLogonCheck() {
          return 0 == this.m_eLogonState || 1 == this.m_eLogonState;
        }
        BReadyToRender() {
          return 0 != this.m_eLogonState;
        }
        GetSteamIDWatched() {
          return this.m_steamID;
        }
        ExtractOrigin(e) {
          return e.replace(/^(https?:\/\/[^/]*).*$/, "$1");
        }
        HandlePostMessage(e) {
          if (
            e.origin != this.ExtractOrigin(P.TS.STORE_BASE_URL) &&
            e.origin != this.ExtractOrigin(P.TS.CHAT_BASE_URL)
          )
            return void console.warn(
              `Ignoring message from untrusted domain "${e.origin}"`,
            );
          let t = e.data;
          if (t)
            if ("OnLoginButtonClicked" == t.msg)
              console.log("Login button clicked"), (window.location.href = q());
            else if ("LoginNeeded" == t.command) this.m_eLogonState = 2;
            else if ("LogonComplete" == t.command)
              return void this.LaunchChat();
        }
      }
      (0, o.Cg)([E.sH], A.prototype, "m_eLogonState", void 0),
        (0, o.Cg)([E.sH], A.prototype, "m_steamID", void 0),
        (0, o.Cg)([E.XI], A.prototype, "LaunchChat", null),
        (0, o.Cg)([E.XI.bound], A.prototype, "HandlePostMessage", null);
      let G = class extends n.Component {
        m_broadcastInfo = null;
        constructor(e) {
          super(e),
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
        ToggleChat() {
          this.setState({ bChatCollapsed: !this.state.bChatCollapsed });
        }
        ToggleTheaterMode() {
          this.setState({ bTheaterMode: !this.state.bTheaterMode });
        }
        render() {
          const e = this.props.app;
          let t = this.m_broadcastInfo,
            a = V();
          return n.createElement(
            k,
            null,
            e.BReadyToRender() &&
              n.createElement(
                "div",
                {
                  className:
                    "StandalonePlayer" +
                    (this.state.bTheaterMode ? " TheaterMode" : ""),
                },
                n.createElement(W.y, {
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
                      n.createElement(i.P7C, null),
                    ),
                    n.createElement(
                      "div",
                      {
                        className:
                          "BroadcastTab_HeaderRow" +
                          (this.state.bChatCollapsed ? " ChatCollapsed" : ""),
                      },
                      n.createElement(U, {
                        onClick: () => (window.location.href = q()),
                      }),
                      n.createElement(O, {
                        onClick: this.ToggleChat,
                        hideIcon: this.state.bChatCollapsed,
                      }),
                    ),
                  ),
                  n.createElement(F, {
                    steamID: e.GetSteamIDWatched(),
                    watchLocation: a,
                    bHideChat: this.state.bChatCollapsed,
                    onTheaterMode: this.ToggleTheaterMode,
                  }),
                ),
              ),
            n.createElement(H, { app: e }),
          );
        }
      };
      function x() {
        const e = (0, P.Fd)("loyalty_webapi_token", "application_config");
        return new D.D(P.TS.WEBAPI_BASE_URL, e);
      }
      function k(e) {
        const { children: t } = e,
          a = n.useCallback(() => r.xm?.CMInterface, []),
          o = (0, m.bs)(n.useCallback(() => new T.A(), [])),
          s = (0, m.bs)(x);
        return n.createElement(
          N.s,
          null,
          n.createElement(
            P.ss,
            null,
            n.createElement(
              R.EO,
              null,
              P.iA.logged_in
                ? n.createElement(
                    v.VQ,
                    { useActiveCMInterface: a, useStorage: o },
                    t,
                  )
                : n.createElement(
                    v.VQ,
                    { useActiveSteamInterface: s, useStorage: o },
                    t,
                  ),
            ),
          ),
        );
      }
      (0, o.Cg)([m.oI], G.prototype, "ToggleChat", null),
        (0, o.Cg)([m.oI], G.prototype, "ToggleTheaterMode", null),
        (G = (0, o.Cg)([S.PA], G));
      let H = (0, S.PA)(({ app: e }) =>
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
      function U(e) {
        return n.createElement(
          "div",
          { className: "BroadcastButton WatchWithFriends", onClick: e.onClick },
          n.createElement(i.y_e, null),
          (0, d.we)("#Broadcast_WatchWithFriends"),
        );
      }
      function O(e) {
        return n.createElement(
          "div",
          {
            className: "ToggleBroadcastChat",
            title: (0, d.we)("#Broadcast_ToggleChat"),
            onClick: e.onClick,
          },
          n.createElement(i.K7s, { showChat: e.hideIcon }),
        );
      }
      function V() {
        return P.TS.STEAM_TV ? 1 : 3;
      }
      let $ = class extends n.Component {
        m_broadcastInfo = null;
        constructor(e) {
          super(e);
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
          r.xm.UIStore.SetTheaterMode(!r.xm.UIStore.GetTheaterMode());
        }
        render() {
          const { broadcastView: e, popup: t, style: a } = this.props,
            o = e.GetSteamID().ConvertTo64BitString();
          let s = V();
          const r = e.m_bShowWatchPromptDialog
            ? n.createElement(C, {
                closeModal: () => e.HideWatchPromptDialog(),
                broadcastAccountId: e.GetSteamID().GetAccountID(),
                broadcastTabId: e.GetUniqueID(),
                initialFriend: e.m_watchPromptInitialFriend,
                browserContext: L.m,
                ownerWindow: t,
              })
            : null;
          return n.createElement(
            "div",
            { className: "BroadcastTab", style: a },
            n.createElement(W.y, {
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
                  n.createElement(U, { onClick: this.OnWatchWithFriends }),
                  n.createElement(O, {
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
                r,
              ),
            ),
          );
        }
      };
      (0, o.Cg)([m.oI], $.prototype, "OnWatchWithFriends", null),
        (0, o.Cg)([m.oI], $.prototype, "ToggleChat", null),
        (0, o.Cg)([m.oI], $.prototype, "ToggleTheaterMode", null),
        ($ = (0, o.Cg)([S.PA], $));
      let F = class extends n.Component {
        m_strLocalSteamID = "";
        m_refBroadcastContainer = n.createRef();
        m_elMainContent;
        constructor(e) {
          super(e), (0, E.Gn)(this), (this.state = { info: null });
        }
        componentDidMount() {
          w.td.stream["76561198208088121"] && "chinese" === P.TS.LANGUAGE
            ? this.OnLocalStreamChange("76561198208088121")
            : w.td.stream["76561198207552741"] &&
              "russian" === P.TS.LANGUAGE &&
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
          s.ZM &&
            ((t = s.ZM.UIDisplayPrefs.nWatchPartyBroadcastHeightPercentage),
            (a = s.ZM.UIDisplayPrefs.nWatchPartyBroadcastWidthPercentage));
          const o = {};
          if (e) {
            const e = t || 66;
            if (((o.height = `${e}%`), this.m_elMainContent)) {
              const { clientWidth: t, clientHeight: a } = this.m_elMainContent,
                n = (9 / 16) * t + 50,
                s = (0, M.OQ)(e, 1, (n / a) * 100);
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
            i = (0, M.OQ)(((n - o) / r) * 100, 1, 100);
          s.ZM.SetUIDisplayPref("nWatchPartyBroadcastWidthPercentage", i);
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
            w.td.bValid && (s = n.createElement(z, { info: w.td }));
          const c = n.createElement(
              "div",
              { className: "LoginDiv" },
              n.createElement(
                "a",
                {
                  className: _().ChatLoginButton,
                  href: `${P.TS.STORE_BASE_URL}login?steamtv=1&allow_password=1`,
                },
                (0, d.we)("#BroadcastChat_Login"),
              ),
            ),
            l = y.BroadcastWatchStore.GetBroadcast(a)
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
                  n.createElement(B.default, {
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
                n.createElement(B.BroadcastDetails, {
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
              n.createElement(b.I, {
                emoticonStore: r.xm ? r.xm.ChatStore.EmoticonStore : null,
                broadcastID: l,
                steamID: a,
                watchLocation: this.props.watchLocation,
                hidden: this.props.bHideChat,
              }),
              P.iA && P.iA.logged_in ? null : c,
            ),
          );
        }
      };
      function z(e) {
        let t = `url( "${P.TS.CHAT_BASE_URL + e.info.offlineImage}" )`;
        return n.createElement("div", {
          style: { backgroundImage: t },
          className: "BroadcastOffline",
        });
      }
      function q() {
        return `${P.TS.STORE_BASE_URL}login?steamtv=1`;
      }
      (0, o.Cg)([E.sH], F.prototype, "m_strLocalSteamID", void 0),
        (0, o.Cg)([m.oI], F.prototype, "OnLocalStreamChange", null),
        (0, o.Cg)([m.oI], F.prototype, "SetMainContentRef", null),
        (0, o.Cg)([m.oI], F.prototype, "OnGrabberMouseDown", null),
        (0, o.Cg)([m.oI], F.prototype, "HandleMouseMove", null),
        (0, o.Cg)([m.oI], F.prototype, "UnregisterDragEvents", null),
        (F = (0, o.Cg)([S.PA], F));
      var Q = a(52003);
      let Z = class extends n.Component {
        render() {
          let e = this.props.broadcastView;
          if (!(e && e instanceof Q.w)) return null;
          let t = {};
          return (
            this.props.isActive || (t.display = "none"),
            n.createElement($, {
              style: t,
              broadcastView: e,
              popup: this.props.popup,
            })
          );
        }
      };
      Z = (0, o.Cg)([S.PA], Z);
      const X = Z;
    },
    53694: (e, t, a) => {
      a.r(t), a.d(t, { default: () => r });
      var o = a(63696),
        n = a(72993),
        s = a(43397);
      const r = o.forwardRef(function (
        {
          steamID: e,
          localSteamID: t,
          watchLocation: a,
          bWebRTC: r,
          style: i,
          onRequestClose: c,
          actions: l,
          onTheaterMode: d,
          onLocalStreamChange: h,
          bVerticalBroadcastChat: m,
        },
        u,
      ) {
        const p = t || e;
        return o.createElement(
          "div",
          { ref: u, style: { display: "flex", flexDirection: "column", ...i } },
          o.createElement(
            "div",
            { className: "BroadcastSection" },
            o.createElement(n.default, {
              key: p,
              steamIDBroadcast: p,
              watchLocation: a,
              bWebRTC: r,
              onRequestClose: c,
              actions: l,
              onTheaterMode: d,
              onOpenLinkInNewWindow: s.EP,
            }),
            o.createElement("div", { className: "videoContainerSizer" }),
          ),
          o.createElement(
            "div",
            { className: "BroadcastDetailsSection" },
            o.createElement(n.BroadcastDetails, {
              steamID: p,
              onLocalStreamChange: h,
              bVerticalBroadcastChat: m,
            }),
          ),
        );
      });
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-rel-steamui/build/client/steamui/sourcemaps/broadcastapp.js.map
