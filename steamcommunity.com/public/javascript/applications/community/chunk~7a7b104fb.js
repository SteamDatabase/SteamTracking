/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [53256],
    {
      9398: (Nt, Jt, h) => {
        "use strict";
        h.d(Jt, { I: () => jt });
        var i = h(7850),
          X = h(14947),
          F = h(75844),
          R = h(65946),
          ee = h(90626),
          j = h(16346),
          Rt = h(90711),
          V = h(21822),
          Ht = h(18614),
          M = h(90024),
          k = h.n(M),
          U = h(34360),
          m = h(19316),
          n = h(96197),
          t = h(22714),
          Ot = h(86390),
          $ = h(34736),
          c = h(33543),
          Ct = h.n(c);
        const Ft = () =>
            (0, i.jsx)("div", {
              className: Ct().FriendsListInsetShadowCtn,
              children: (0, i.jsx)("div", {
                className: Ct().FriendListInsetShadowTop,
              }),
            }),
          Y = () =>
            (0, i.jsx)("div", {
              className: Ct().FriendsListInsetShadowCtn,
              children: (0, i.jsx)("div", {
                className: Ct().FriendListInsetShadowBottom,
              }),
            });
        var Q = h(36118),
          N = h(36707),
          z = h(18210),
          g = h(54963),
          b = h(3166),
          O = h(63508),
          T = h.n(O),
          zt = h(29125),
          J = h(90828),
          Wt = h(71421),
          wr = Object.defineProperty,
          It = Object.getOwnPropertyDescriptor,
          Qt = (f, S, _) =>
            S in f
              ? wr(f, S, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (f[S] = _),
          kt = (f, S, _, P) => {
            for (
              var G = P > 1 ? void 0 : P ? It(S, _) : S, E = f.length - 1, Dt;
              E >= 0;
              E--
            )
              (Dt = f[E]) && (G = (P ? Dt(S, _, G) : Dt(G)) || G);
            return P && G && wr(S, _, G), G;
          },
          sr = (f, S, _) => Qt(f, typeof S != "symbol" ? S + "" : S, _);
        const zr = new RegExp("\u02D0([^\u02D0]*)\u02D0", "g"),
          Ir = null,
          Gr = new RegExp(
            "^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)",
            "i",
          );
        function Cr(f, S, _) {
          return _
            ? "presenter"
            : S.GetBroadcastSteamID() === f
              ? "broadcaster"
              : S.BIsUserBroadcastModerator(f)
                ? "moderator"
                : "";
        }
        const te = (f) => {
            const { userType: S, msg: _, presenterInfo: P } = f;
            if (S === "presenter")
              return (0, i.jsx)("span", {
                children: (0, i.jsx)($.fI, {
                  name: P.name,
                  title: P.title,
                  photo: P.photo,
                  company: P.company,
                  bioString: P.bio,
                  children: (0, i.jsx)("a", {
                    className: (0, N.A)(T().MessageName, T().MessagePresenter),
                    href: b.TS.COMMUNITY_BASE_URL + "profiles/" + _.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: _.persona_name,
                  }),
                }),
              });
            {
              let G = null;
              return (
                S === "broadcaster"
                  ? (G = T().MessageBroadcaster)
                  : S === "moderator" && (G = T().MessageModerator),
                (0, i.jsx)("span", {
                  children: (0, i.jsx)("a", {
                    className: (0, N.A)(T().MessageName, G),
                    href: b.TS.COMMUNITY_BASE_URL + "profiles/" + _.steamid,
                    "data-miniprofile": "s" + _.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: _.persona_name,
                  }),
                })
              );
            }
          },
          vr = (f) => {
            switch (f.userType) {
              case "presenter":
                return (0, i.jsx)(Wt.Gq, {
                  toolTipContent: (0, z.we)(
                    "#BroadcastChat_Role_Presenter_ttip",
                  ),
                  children: (0, i.jsx)("span", {
                    className: T().RoleFlairContainer,
                    children: (0, i.jsx)(Q.NCC, {}),
                  }),
                });
              case "moderator":
                return (0, i.jsx)(Wt.Gq, {
                  toolTipContent: (0, z.we)(
                    "#BroadcastChat_Role_Moderatorr_ttip",
                  ),
                  children: (0, i.jsx)("span", {
                    className: T().RoleFlairContainer,
                    children: (0, i.jsx)(Q.$4X, {}),
                  }),
                });
              case "broadcaster":
                return (0, i.jsx)(Wt.Gq, {
                  toolTipContent: (0, z.we)(
                    "#BroadcastChat_Role_Broadcaster_ttip",
                  ),
                  children: (0, i.jsx)("span", {
                    className: T().RoleFlairContainer,
                    children: (0, i.jsx)(Q.Gkr, {}),
                  }),
                });
              default:
                return null;
            }
          };
        let jt = class extends ee.Component {
          constructor(f) {
            super(f),
              sr(this, "m_chat", null),
              sr(this, "messagesContainer", ee.createRef()),
              (0, X.Gn)(this);
          }
          componentDidMount() {
            this.StartChat();
          }
          componentDidUpdate(f) {
            this.m_chat &&
              this.m_chat.m_bAutoScroll &&
              this.ScrollToNewestMessages(),
              (this.props.steamID !== f.steamID ||
                this.props.broadcastID !== f.broadcastID ||
                this.props.broadcastChannelID !== f.broadcastChannelID) &&
                this.StartChat();
          }
          componentWillUnmount() {
            this.m_chat && this.m_chat.Stop();
          }
          StartChat() {
            if (
              (this.m_chat && this.m_chat.Stop(),
              (this.m_chat = V.q
                .Get()
                .GetOrCreateChat(
                  this.props.broadcastChannelID,
                  this.props.steamID,
                )),
              this.props.broadcastChannelID)
            )
              this.m_chat.StartForChannel(this.props.broadcastChannelID);
            else if (
              this.props.steamID &&
              this.props.steamID &&
              (this.props.broadcastID || this.props.globalChat)
            ) {
              let f = this.props.broadcastID || "0";
              this.m_chat.StartForSteamID(this.props.steamID, f),
                this.ScrollToNewestMessages();
            }
          }
          IsTrustedDomain(f) {
            return !!f.match(Gr);
          }
          AddLinksEmoticons(f, S) {
            let _ = zr;
            S && (_ = this.m_chat.GetUserEmoticons());
            let P = f.split(zr);
            const G = [];
            for (let E = 0; E < P.length; E += 1)
              E % 2 === 1
                ? G.push((0, i.jsx)(n.n, { emoticon: P[E], large: !0 }, E))
                : G.push(P[E]);
            return G;
          }
          HandleScroll(f) {
            const S = this.props.bInvertLayout
              ? f.currentTarget.scrollTop < 6
              : f.currentTarget.scrollTop + f.currentTarget.clientHeight >=
                f.currentTarget.scrollHeight - 6;
            this.m_chat && (this.m_chat.m_bAutoScroll = S);
          }
          ScrollToNewestMessages() {
            this.messagesContainer &&
              this.messagesContainer.current &&
              (this.messagesContainer.current.scrollTop = this.props
                .bInvertLayout
                ? 0
                : this.messagesContainer.current.scrollHeight);
          }
          OnContextMenu(f, S) {
            if (S.type !== J.X8.Chat) return null;
            const _ = [],
              P = this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID()),
              G = this.m_chat.BIsUserBroadcastModerator(
                this.m_chat.GetUserSteamID(),
              );
            return (
              (b.iA && b.iA.is_support) || P || G
                ? _.push(
                    (0, i.jsx)(
                      U.kt,
                      {
                        onSelected: () =>
                          this.m_chat.RemoveUserMessagesServer(
                            S.steamid,
                            S.persona_name,
                          ),
                        children: (0, z.we)("#BroadcastChat_RemoveMessages"),
                      },
                      "remove",
                    ),
                    (0, i.jsx)(
                      U.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            S.steamid,
                            Rt.sW.XP,
                            12,
                            !1,
                            S.persona_name,
                          ),
                        children: (0, z.we)("#BroadcastChat_half_Mute"),
                      },
                      "updatebanh",
                    ),
                    (0, i.jsx)(
                      U.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            S.steamid,
                            Rt.sW.XP,
                            24,
                            !1,
                            S.persona_name,
                          ),
                        children: (0, z.we)("#BroadcastChat_day_Mute"),
                      },
                      "updateband",
                    ),
                    (0, i.jsx)(
                      U.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            S.steamid,
                            Rt.sW.XP,
                            168,
                            !1,
                            S.persona_name,
                          ),
                        children: (0, z.we)("#BroadcastChat_week_Mute"),
                      },
                      "updatebanw",
                    ),
                    (0, i.jsx)(
                      U.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            S.steamid,
                            Rt.sW.XP,
                            0,
                            !0,
                            S.persona_name,
                          ),
                        children: (0, z.we)("#BroadcastChat_perm_Mute"),
                      },
                      "updatebanp",
                    ),
                    (0, i.jsx)(
                      U.kt,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            S.steamid,
                            Rt.sW.rx,
                            0,
                            !1,
                            S.persona_name,
                            !0,
                          ),
                        children: (0, z.we)("#BroadcastChat_Unmute"),
                      },
                      "removeban",
                    ),
                  )
                : this.m_chat.IsUserMutedLocally(S.steamid)
                  ? _.push(
                      (0, i.jsx)(
                        U.kt,
                        {
                          onSelected: () =>
                            this.m_chat.UnmuteUserForSession(
                              S.steamid,
                              S.persona_name,
                            ),
                          children: (0, z.we)("#BroadcastChat_UnmuteLocal"),
                        },
                        "unmuteuser",
                      ),
                    )
                  : _.push(
                      (0, i.jsx)(
                        U.kt,
                        {
                          onSelected: () =>
                            this.m_chat.MuteUserForSession(
                              S.steamid,
                              S.persona_name,
                            ),
                          children: (0, z.we)("#BroadcastChat_MuteLocal"),
                        },
                        "muteuser",
                      ),
                    ),
              ((b.iA && b.iA.is_support) ||
                this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID())) &&
                S.steamid &&
                (this.m_chat.BIsUserBroadcastModerator(S.steamid)
                  ? _.push(
                      (0, i.jsx)(
                        U.kt,
                        {
                          onSelected: () =>
                            this.m_chat.UpdateBroadcastChatModerator(
                              S.steamid,
                              !1,
                              S.persona_name,
                            ),
                          children: (0, z.we)(
                            "#BroadcastChat_Remove_Moderator",
                          ),
                        },
                        "removemod",
                      ),
                    )
                  : _.push(
                      (0, i.jsx)(
                        U.kt,
                        {
                          onSelected: () =>
                            this.m_chat.UpdateBroadcastChatModerator(
                              S.steamid,
                              !0,
                              S.persona_name,
                            ),
                          children: (0, z.we)("#BroadcastChat_Add_Moderator"),
                        },
                        "addmod",
                      ),
                    )),
              _.length
                ? (0, j.lX)(
                    (0, i.jsxs)(U.tz, {
                      children: [
                        (0, i.jsxs)("div", {
                          className: T().SelectedUserNameCtn,
                          children: [
                            (0, z.we)("#BroadcastChat_User"),
                            (0, i.jsx)("br", {}),
                            (0, i.jsx)("span", {
                              className: T().SelectedUserName,
                              children: S.persona_name,
                            }),
                          ],
                        }),
                        _,
                      ],
                    }),
                    f,
                  )
                : null
            );
          }
          GetTypeClassName(f) {
            return f.type === J.X8.Notification
              ? T().MessageNotification
              : f.type === J.X8.Error
                ? T().MessageError
                : T().MessageChat;
          }
          FormatMessage(f, S) {
            if (f.type === J.X8.Chat) {
              let _ = S ? S.FilterText(f.steamid, f.msg) : f.msg;
              return this.AddLinksEmoticons(_, !1);
            } else return f.msg;
          }
          RenderUserChatLine(f, S, _) {
            let P = _ ? _.get(f.steamid) : void 0;
            const G = f.type === J.X8.Chat ? Cr(f.steamid, this.m_chat, P) : "";
            return (0, i.jsxs)(
              "div",
              {
                className: this.GetTypeClassName(f),
                onContextMenu: (E) => this.OnContextMenu(E, f),
                children: [
                  f.type === J.X8.Chat && (0, i.jsx)(vr, { userType: G }),
                  f.flair &&
                    (0, i.jsx)("span", {
                      className: T().FlairContainer,
                      children: this.AddLinksEmoticons(f.flair, !1),
                    }),
                  f.type === J.X8.Chat &&
                    (0, i.jsx)(te, { userType: G, msg: f, presenterInfo: P }),
                  f.type === J.X8.Chat &&
                    this.m_chat.GetBroadcastSteamID() === f.steamid &&
                    (0, i.jsx)("span", {
                      className: `${T().MessageNotification} ${T().MessageContents}`,
                      children: ` (${(0, z.we)("#BroadcastChat_Broadcaster")})`,
                    }),
                  f.type === J.X8.Chat &&
                    this.m_chat.m_mapChannelModeratorUsers.get(f.steamid) &&
                    (0, i.jsx)("span", {
                      className: `${T().MessageNotification} ${T().MessageContents}`,
                      children: ` (${(0, z.we)("#BroadcastChat_Moderator")})`,
                    }),
                  (0, i.jsxs)("span", {
                    className: `${T().MessageContents} ${this.AddLinksEmoticons(f.msg, !1).filter((E) => E && typeof E == "string").length ? "" : T().EmoticonsOnly}`,
                    children: [
                      f.type === J.X8.Chat ? " : " : "",
                      this.FormatMessage(f, this.m_chat.TextFilterStore),
                    ],
                  }),
                ],
              },
              f.instance_id + "_" + f.client_ts + "_" + S,
            );
          }
          render() {
            const {
                hidden: f,
                bPartnerMemberOnlyChat: S,
                bInvertLayout: _,
                onSignIn: P,
              } = this.props,
              G = this.m_chat ? this.m_chat.m_rgChatMessages : [],
              E = _ ? G.reverse() : G,
              Dt = this.m_chat
                ? Ht.l.GetPresenterMapForBroadcasterSteamID(
                    this.m_chat.GetBroadcastSteamID(),
                  )
                : void 0,
              ir = this.m_chat ? this.m_chat.m_latestAnnouncement : null;
            return (0, i.jsxs)("div", {
              className: (0, N.A)(T().ChatPanel, "ChatPanel"),
              style: f ? { display: "none" } : void 0,
              children: [
                (0, i.jsx)(zt.P, { latestAnnouncement: ir }),
                _ &&
                  !!this.m_chat &&
                  (0, i.jsx)(D, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: S,
                    onSignIn: P,
                  }),
                (0, i.jsx)(Ft, {}),
                (0, i.jsx)("div", {
                  className: (0, N.A)(
                    `${T().ChatMessages} ${k().minHeightZero}`,
                    "ChatMessages",
                  ),
                  onScroll: this.HandleScroll,
                  ref: this.messagesContainer,
                  children: E.map((Pt, hr) =>
                    this.RenderUserChatLine(Pt, hr, Dt),
                  ),
                }),
                (0, i.jsx)(Y, {}),
                !_ &&
                  !!this.m_chat &&
                  (0, i.jsx)(D, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: S,
                    onSignIn: P,
                  }),
              ],
            });
          }
        };
        kt([X.sH], jt.prototype, "m_chat", 2),
          kt([g.oI], jt.prototype, "StartChat", 1),
          kt([g.oI], jt.prototype, "HandleScroll", 1),
          kt([g.oI], jt.prototype, "OnContextMenu", 1),
          kt([g.oI], jt.prototype, "RenderUserChatLine", 1),
          (jt = kt([F.PA], jt));
        function D(f) {
          var S, _, P;
          const {
            oChat: G,
            emoticonStore: E,
            bPartnerMemberOnlyChat: Dt,
            onSignIn: ir,
          } = f;
          return Dt &&
            (!((S = b.iA) != null && S.logged_in) ||
              !((_ = b.iA) != null && _.is_partner_member))
            ? (0, i.jsx)(jr, {})
            : (P = b.iA) != null && P.logged_in
              ? (0, i.jsx)(Vr, { oChat: G, emoticonStore: E })
              : ir
                ? (0, i.jsx)(wt, { onSignIn: ir })
                : null;
        }
        function Vr(f) {
          const { oChat: S, emoticonStore: _ } = f,
            [P, G] = ee.useState(""),
            E = ee.useRef(void 0),
            Dt = (0, R.q3)(() => S.m_bRateLimited),
            ir = ee.useCallback(
              (Et) => {
                !Et.shiftKey &&
                  Et.charCode === 13 &&
                  (S.m_bRateLimited || (S.SendMessage(P), G("")),
                  Et.preventDefault());
              },
              [S, P],
            ),
            Pt = ee.useCallback(
              (Et, pr = !1) => {
                G(P + `\u02D0${Et}\u02D0`),
                  E != null && E.current && E.current.focus();
              },
              [P, E],
            ),
            hr = () => {
              S.SendMessage(P), G("");
            };
          let Nr = Dt || P.trim().length == 0,
            gr = (0, N.A)(k().chatSubmitButton, P.length == 0 && k().disabled);
          return (0, i.jsx)("div", {
            className: (0, N.A)(T().ChatEntryCtn, "ChatEntryCtn"),
            children: (0, i.jsxs)("div", {
              className: (0, N.A)(T().ChatEntry, "ChatEntry"),
              children: [
                (0, i.jsxs)("form", {
                  className: `${k().chatEntryControls}`,
                  children: [
                    (0, i.jsx)("textarea", {
                      className: k().chatTextarea,
                      placeholder: (0, z.we)("#BroadcastChat_EnterResponse"),
                      onKeyPress: ir,
                      onChange: (Et) => G(Et.target.value),
                      value: P,
                      ref: E,
                    }),
                    Dt &&
                      (0, i.jsx)(Ur, {
                        nSeconds: S.m_nRateLimitSeconds,
                        bRateLimited: S.m_bRateLimited,
                      }),
                    (0, i.jsx)("button", {
                      className: gr,
                      title: (0, z.we)("#ChatEntryButton_Submit"),
                      disabled: Nr,
                      onClick: hr,
                      children: (0, i.jsx)(Q.XTb, {}),
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  style: { height: "50px" },
                  className: `${k().chatEntryActionsContainer}`,
                  children: (0, i.jsxs)("div", {
                    className: k().chatEntryActionsGroup,
                    children: [
                      (0, i.jsx)(t.A, {
                        disabled: !1,
                        OnEmoticonSelected: Pt,
                        rtLastAckedNewEmoticons: Number.MAX_VALUE,
                        emoticonStore: _,
                      }),
                      (0, i.jsx)(Kt, { ...f, textInputRef: E }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
        function Kt(f) {
          var S;
          const { oChat: _, emoticonStore: P, textInputRef: G } = f;
          return _.m_strFlairGroupID &&
            P.flair_list &&
            (S = P.GetFlairListByGroupID(_.m_strFlairGroupID)) != null &&
            S.length
            ? (0, i.jsx)(t.A, {
                disabled: !1,
                OnEmoticonSelected: (E) => {
                  _.UpdateChatMessageFlair(E),
                    G != null && G.current && G.current.focus();
                },
                rtLastAckedNewEmoticons: Number.MAX_VALUE,
                emoticonStore: P,
                strFlairGroupID: _.m_strFlairGroupID,
                title: (0, z.we)("#ChatEntryButton_Flair"),
                buttonIcon: (0, i.jsx)(Q.P7r, {}),
              })
            : null;
        }
        class Ur extends ee.Component {
          render() {
            return (0, i.jsx)("div", {
              className: T().TimedProgressBarContainer,
              children: (0, i.jsxs)("div", {
                className: T().wrapper,
                children: [
                  (0, i.jsx)("div", {
                    className: `${T().spinner} ${T().pie}`,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                  (0, i.jsx)("div", {
                    className: `${T().filler} ${T().pie}`,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                  (0, i.jsx)("div", {
                    className: T().mask,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                ],
              }),
            });
          }
        }
        function wt(f) {
          return (0, i.jsx)("div", {
            className: T().Description,
            children: (0, i.jsx)(m.$n, {
              onClick: f.onSignIn,
              className: (0, N.A)(T().SignInButton),
              children: (0, z.we)("#BroadcastChat_Login"),
            }),
          });
        }
        function jr(f) {
          return (0, i.jsxs)("div", {
            className: T().Description,
            children: [
              (0, i.jsx)("div", {
                className: T().LogInPrompt,
                children: (0, z.we)("#Broadcast_PartnerChat_Login"),
              }),
              !b.iA.logged_in &&
                !b.TS.IN_STEAMUI &&
                (0, i.jsx)(m.$n, {
                  onClick: Ot.vg,
                  className: (0, N.A)(T().SignInButton),
                  children: (0, z.we)("#Login_SignIn"),
                }),
            ],
          });
        }
      },
      29125: (Nt, Jt, h) => {
        "use strict";
        h.d(Jt, { P: () => Ot, V: () => Ct });
        var i = h(7850),
          X = h(65946),
          F = h(90626),
          R = h(21822),
          ee = h(22950),
          j = h(29630),
          Rt = h(37656),
          V = h(11587),
          Ht = h(53107),
          M = h(36707),
          k = h(18210),
          U = h(53113),
          m = h(3166),
          n = h(8287),
          t = h.n(n);
        function Ot(Ft) {
          const { latestAnnouncement: Y } = Ft;
          return (Y == null ? void 0 : Y.type) == "giveaway_draw"
            ? (0, i.jsx)($, { latestWinner: Y })
            : null;
        }
        function $(Ft) {
          var Y, Q;
          const {
              latestWinner: N,
              className: z,
              strActionButton: g,
              strActionClassname: b,
            } = Ft,
            O =
              ((Y = N.winners_info) == null ? void 0 : Y.length) > 0
                ? N.winners_info[0].accountid
                : 0,
            [T, zt] = F.useState(O),
            J =
              "https://store.steampowered.com/sale/thegameawardssteamdeckdrop2022",
            Wt = (0, U.L$)(
              `${j.zU.GetBaseURL()}4/080b1f163b02a9810fa78f0b32b9396fab012aef.gif`,
            ),
            wr = (0, U.L$)(
              `${j.zU.GetBaseURL()}4/56521811317a8298a7aff4a914be964b67dd0325.png`,
            ),
            It = (0, Rt.w)(N.giveaway_gid);
          let Qt =
            It.bLoadingGiveawayInfo || It.closed
              ? null
              : It.seconds_until_drawing;
          const kt = O === m.iA.accountid;
          F.useEffect(() => {
            T != O && setTimeout(() => zt(O), 1500);
          }, [O, T]);
          const sr =
            ((Q = N.winners_info) == null ? void 0 : Q.length) > 0 &&
            N.winners_info[0].persona
              ? N.winners_info[0].persona
              : (0, k.we)("#GA2022_UnknownPersonaName");
          return (0, i.jsx)(Ht.uU, {
            href: J,
            className: z,
            children: (0, i.jsxs)("div", {
              className: (0, M.A)({
                [t().GiveawayWinnerBox]: !0,
                [t().GiveawayWinnerAnnounced]: T === O,
              }),
              children: [
                (0, i.jsx)("div", {
                  className: t().GiveawayWinnerBoxLeft,
                  children: (0, i.jsx)("img", {
                    className: t().GiveawayWinnerArt,
                    src: Wt,
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: t().GiveawayWinnerBoxRight,
                  children: [
                    T !== O &&
                      (0, i.jsx)("div", {
                        className: (0, M.A)(t().GiveawayWinnerText),
                        children: (0, k.PP)(
                          "#GA2022_Congrats_Deck_Unknown",
                          (0, i.jsx)("br", {}),
                        ),
                      }),
                    T === O &&
                      (0, i.jsx)("div", {
                        className: (0, M.A)(
                          t().GiveawayWinnerText,
                          t().GiveawayWinnerAnnounced,
                        ),
                        children: (0, k.PP)(
                          kt
                            ? "#GA2022_Congrats_Deck_Me"
                            : "#GA2022_Congrats_Deck_OTher",
                          sr,
                          (0, i.jsx)("br", {}),
                        ),
                      }),
                    Qt > 0 &&
                      (0, i.jsx)("div", {
                        className: t().GiveawayWinnerCountdown,
                        children: (0, k.PP)("#GA2022_Congrats_NextDraw", Qt),
                      }),
                  ],
                }),
                (0, i.jsx)("img", {
                  className: t().GiveawayWinnerQuestion,
                  src: wr,
                }),
                !!g &&
                  (0, i.jsx)("div", {
                    className: b,
                    children: kt ? (0, k.we)("#GA2022_YouWonNextSteps") : g,
                  }),
              ],
            }),
          });
        }
        function c(Ft, Y) {
          const [Q, N] = (0, X.q3)(() => {
              var O;
              return [
                Y == null ? void 0 : Y.steamid,
                (O = ee.es.GetBroadcast(Y == null ? void 0 : Y.steamid)) == null
                  ? void 0
                  : O.m_ulBroadcastID,
              ];
            }),
            [z, g] = F.useState(null);
          F.useEffect(() => {
            let O = null;
            return (
              (Q || N) &&
                ((O = R.q.Get().GetOrCreateChat(N, Q)),
                O.StartForSteamID(Q, N),
                g(O)),
              () => {
                O && (O.Stop(), g(null));
              }
            );
          }, [Q, N]);
          const b = (0, X.q3)(
            () => (z == null ? void 0 : z.m_latestAnnouncement) || null,
          );
          if ((b == null ? void 0 : b.type) == "giveaway_draw") {
            const O = b;
            if (O.giveaway_gid == Ft) return O;
          }
          return null;
        }
        function Ct(Ft) {
          const { gidGiveaway: Y, stream: Q } = Ft,
            N = c(Y, Q),
            z = (0, V.h3)("GameAwardDrop2022");
          let g = null,
            b = t().GiveawayRegisterButton;
          return (
            m.iA.logged_in
              ? z != null && z.registered
                ? ((g = (0, k.we)("#GA2022_AlreadyRegistered")),
                  (b = t().GiveawayAlreadyRegistered))
                : (g = (0, k.we)("#GA2022_RegisterToWin"))
              : (g = (0, k.we)("#GA2022_RegisterLoginToWin")),
            N
              ? (0, i.jsx)($, {
                  latestWinner: N,
                  className: t().InViewerBar,
                  strActionButton: g,
                  strActionClassname: b,
                })
              : null
          );
        }
      },
      23240: (Nt, Jt, h) => {
        "use strict";
        h.r(Jt),
          h.d(Jt, {
            BroadcastDetails: () => Fr,
            LinkOverlay: () => er,
            default: () => Z,
          });
        var i = h(7850),
          X = h(14947),
          F = h(75844),
          R = h(90626),
          ee = h(16346),
          j = h(41301),
          Rt = h(83482),
          V = h(22950),
          Ht = h(10142),
          M = h(54963),
          k = h(8323),
          U = Object.defineProperty,
          m = Object.getOwnPropertyDescriptor,
          n = (s, a, l) =>
            a in s
              ? U(s, a, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: l,
                })
              : (s[a] = l),
          t = (s, a, l, d) => {
            for (
              var u = d > 1 ? void 0 : d ? m(a, l) : a, p = s.length - 1, B;
              p >= 0;
              p--
            )
              (B = s[p]) && (u = (d ? B(a, l, u) : B(u)) || u);
            return d && u && U(a, l, u), u;
          },
          Ot = (s, a, l) => n(s, typeof a != "symbol" ? a + "" : a, l);
        class $ extends R.Component {
          constructor() {
            super(...arguments),
              Ot(this, "m_elCanvas", null),
              Ot(this, "m_Context", null),
              Ot(this, "m_schUpdate", new k.LU()),
              Ot(this, "m_bSetupComplete", !1);
          }
          componentDidMount() {
            this.props.updateRate == 0 && this.updateCanvas();
          }
          componentWillUnmount() {
            this.m_schUpdate.Cancel();
          }
          componentDidUpdate() {
            this.updateCanvas();
          }
          BindCanvasRef(a) {
            this.m_elCanvas = a;
          }
          updateCanvas() {
            var a;
            if (
              this.props.elementRef == null ||
              this.m_elCanvas == null ||
              this.m_bSetupComplete
            )
              return;
            let l = this.props.scaleFactor || [1, 1],
              d = this.props.elementRef,
              u = this.props.updateRate;
            const p = this.m_elCanvas.getContext("2d");
            if (!p) return;
            this.m_Context = p;
            let B = Math.floor(
                this.m_elCanvas.clientWidth / this.props.reductionFactor,
              ),
              W = Math.floor(
                this.m_elCanvas.clientHeight / this.props.reductionFactor,
              );
            (this.m_elCanvas.width = B),
              (this.m_elCanvas.height = W),
              ((a = this.props.blurAmount) != null ? a : 0) > 0 &&
                (p.filter = "blur(" + this.props.blurAmount + "px)");
            let A = () => {
              p.drawImage(d, 0, 0, B * l[0], W * l[1]),
                u > 0 && this.m_schUpdate.Schedule(u, A);
            };
            A(), (this.m_bSetupComplete = !0);
          }
          render() {
            return (0, i.jsx)("canvas", {
              id: this.props.id,
              className: this.props.className,
              ref: this.BindCanvasRef,
              width: this.props.width,
              height: this.props.height,
            });
          }
        }
        t([M.oI], $.prototype, "BindCanvasRef", 1),
          t([M.oI], $.prototype, "updateCanvas", 1);
        var c = h(34360),
          Ct = h(81115),
          Ft = h(58584),
          Y = h(59913),
          Q = h(42891),
          N = h(28679);
        function z(s, a) {
          var l = function (p) {
              return a && (0, R.isValidElement)(p) ? a(p) : p;
            },
            d = Object.create(null);
          return (
            s &&
              R.Children.map(s, function (u) {
                return u;
              }).forEach(function (u) {
                d[u.key] = l(u);
              }),
            d
          );
        }
        function g(s, a) {
          (s = s || {}), (a = a || {});
          function l(H) {
            return H in a ? a[H] : s[H];
          }
          var d = Object.create(null),
            u = [];
          for (var p in s)
            p in a ? u.length && ((d[p] = u), (u = [])) : u.push(p);
          var B,
            W = {};
          for (var A in a) {
            if (d[A])
              for (B = 0; B < d[A].length; B++) {
                var Mt = d[A][B];
                W[d[A][B]] = l(Mt);
              }
            W[A] = l(A);
          }
          for (B = 0; B < u.length; B++) W[u[B]] = l(u[B]);
          return W;
        }
        function b(s, a, l) {
          return l[a] != null ? l[a] : s.props[a];
        }
        function O(s, a) {
          return z(s.children, function (l) {
            return (0, R.cloneElement)(l, {
              onExited: a.bind(null, l),
              in: !0,
              appear: b(l, "appear", s),
              enter: b(l, "enter", s),
              exit: b(l, "exit", s),
            });
          });
        }
        function T(s, a, l) {
          var d = z(s.children),
            u = g(a, d);
          return (
            Object.keys(u).forEach(function (p) {
              var B = u[p];
              if ((0, R.isValidElement)(B)) {
                var W = p in a,
                  A = p in d,
                  Mt = a[p],
                  H = (0, R.isValidElement)(Mt) && !Mt.props.in;
                A && (!W || H)
                  ? (u[p] = (0, R.cloneElement)(B, {
                      onExited: l.bind(null, B),
                      in: !0,
                      exit: b(B, "exit", s),
                      enter: b(B, "enter", s),
                    }))
                  : !A && W && !H
                    ? (u[p] = (0, R.cloneElement)(B, { in: !1 }))
                    : A &&
                      W &&
                      (0, R.isValidElement)(Mt) &&
                      (u[p] = (0, R.cloneElement)(B, {
                        onExited: l.bind(null, B),
                        in: Mt.props.in,
                        exit: b(B, "exit", s),
                        enter: b(B, "enter", s),
                      }));
              }
            }),
            u
          );
        }
        var zt =
            Object.values ||
            function (s) {
              return Object.keys(s).map(function (a) {
                return s[a];
              });
            },
          J = {
            component: "div",
            childFactory: function (a) {
              return a;
            },
          },
          Wt = (function (s) {
            (0, Q.A)(a, s);
            function a(d, u) {
              var p;
              p = s.call(this, d, u) || this;
              var B = p.handleExited.bind((0, Y.A)(p));
              return (
                (p.state = {
                  contextValue: { isMounting: !0 },
                  handleExited: B,
                  firstRender: !0,
                }),
                p
              );
            }
            var l = a.prototype;
            return (
              (l.componentDidMount = function () {
                (this.mounted = !0),
                  this.setState({ contextValue: { isMounting: !1 } });
              }),
              (l.componentWillUnmount = function () {
                this.mounted = !1;
              }),
              (a.getDerivedStateFromProps = function (u, p) {
                var B = p.children,
                  W = p.handleExited,
                  A = p.firstRender;
                return { children: A ? O(u, W) : T(u, B, W), firstRender: !1 };
              }),
              (l.handleExited = function (u, p) {
                var B = z(this.props.children);
                u.key in B ||
                  (u.props.onExited && u.props.onExited(p),
                  this.mounted &&
                    this.setState(function (W) {
                      var A = (0, Ft.A)({}, W.children);
                      return delete A[u.key], { children: A };
                    }));
              }),
              (l.render = function () {
                var u = this.props,
                  p = u.component,
                  B = u.childFactory,
                  W = (0, Ct.A)(u, ["component", "childFactory"]),
                  A = this.state.contextValue,
                  Mt = zt(this.state.children).map(B);
                return (
                  delete W.appear,
                  delete W.enter,
                  delete W.exit,
                  p === null
                    ? R.createElement(N.A.Provider, { value: A }, Mt)
                    : R.createElement(
                        N.A.Provider,
                        { value: A },
                        R.createElement(p, W, Mt),
                      )
                );
              }),
              a
            );
          })(R.Component);
        (Wt.propTypes = {}), (Wt.defaultProps = J);
        const wr = Wt;
        var It = h(63741),
          Qt = h(36707);
        const kt = 500;
        class sr extends R.Component {
          render() {
            let {
              keyExtractor: a,
              style: l,
              duration: d = kt,
              className: u,
              children: p,
              childRef: B,
              ...W
            } = this.props;
            const A = { ...(l || {}), transitionDuration: `${d / 1e3}s` };
            return (0, i.jsx)(wr, {
              ...W,
              className: (0, Qt.A)("crossfade", u),
              children: (0, i.jsx)(
                It.A,
                {
                  nodeRef: B,
                  classNames: "crossfade-anim",
                  timeout: d,
                  style: A,
                  children: p,
                },
                a(),
              ),
            });
          }
        }
        function zr(s) {
          const { src: a, ...l } = s,
            d = { backgroundImage: `url(${a})` },
            u = R.useRef(null);
          return (0, i.jsx)(sr, {
            style: d,
            keyExtractor: () => a,
            childRef: u,
            ...l,
            children: (0, i.jsx)("div", { ref: u, className: "crossfade-img" }),
          });
        }
        var Ir = h(61431),
          Gr = h(79590),
          Cr = h(79167),
          te = h(36118),
          vr = h(53107),
          jt = h(82734),
          D = h(18210),
          Vr = h(19730),
          Kt = h(13854),
          Ur = h(3166),
          wt = h(6600),
          jr = h(48937),
          f = h(15527),
          S = h.n(f),
          _ = h(85599),
          P = Object.defineProperty,
          G = Object.getOwnPropertyDescriptor,
          E = (s, a, l, d) => {
            for (
              var u = d > 1 ? void 0 : d ? G(a, l) : a, p = s.length - 1, B;
              p >= 0;
              p--
            )
              (B = s[p]) && (u = (d ? B(a, l, u) : B(u)) || u);
            return d && u && P(a, l, u), u;
          };
        function Dt() {
          return (0, i.jsx)("div", {
            className: "STV_ReplayBanner",
            children: (0, D.we)("#DASHPlayerControls_IsReplay"),
          });
        }
        const ir = (0, F.PA)((s) => {
          let a = s.video;
          if (a && (a.IsBroadcastClip() || a.IsBroadcastVOD())) return null;
          let l = V.fK.Loading,
            d = "";
          if (a) {
            (l = a.GetBroadcastState()), (d = a.GetBroadcastStateDescription());
            let p = a.IsBuffering();
            l == V.fK.Unlocking && ((l = V.fK.Loading), (d = "")),
              l == V.fK.Ready && p && ((l = V.fK.Loading), (d = ""));
          }
          if (
            (a && l != V.fK.Error && a.GetUserInputNeeded()) ||
            l == V.fK.Ready
          )
            return null;
          let u = l == V.fK.Loading;
          return (0, i.jsxs)("div", {
            className: "BroadcastVideoWatchState",
            style: { filter: "hue-rotate(40deg)" },
            children: [
              u && (0, i.jsx)(_.t, {}),
              !u &&
                (0, i.jsx)("div", {
                  className: "BroadcastVideoWatchState_Text",
                  children: d,
                }),
            ],
          });
        });
        class Pt extends R.Component {
          OnClick() {
            V.es.UserInputClickVideo(this.props.video);
          }
          render() {
            return (0, i.jsxs)("div", {
              className: "BroadcastVideoUserInputNeeded",
              onClick: this.OnClick,
              children: [
                (0, i.jsx)(te.jGG, {}),
                (0, i.jsx)("span", {
                  children: (0, D.we)("#DASHPlayerControls_ClickToPlay"),
                }),
              ],
            });
          }
        }
        E([M.oI], Pt.prototype, "OnClick", 1);
        var hr = Object.defineProperty,
          Nr = Object.getOwnPropertyDescriptor,
          gr = (s, a, l, d) => {
            for (
              var u = d > 1 ? void 0 : d ? Nr(a, l) : a, p = s.length - 1, B;
              p >= 0;
              p--
            )
              (B = s[p]) && (u = (d ? B(a, l, u) : B(u)) || u);
            return d && u && hr(a, l, u), u;
          };
        let Et = class extends R.Component {
          constructor(s) {
            super(s);
          }
          HideStats() {
            this.props.closeStats && this.props.closeStats();
          }
          render() {
            let s = this.props.stats;
            return (0, i.jsxs)("div", {
              className: "dash_video_stats",
              children: [
                (0, i.jsx)("button", {
                  className: "dash_stat_close_button",
                  onClick: this.HideStats,
                  children: (0, i.jsx)(te.sED, {}),
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_BufferingResolution"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetBufferingResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_PlaybackResolution"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetPlaybackResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_HtmlResolution"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetHTMLVideoResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_ContentServer"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetContentServerToDisplay(),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_StallEvents"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetStalledEventsToDisplay(),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_FailedDownloads"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetFailedDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_TimeToFirstFrame"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetTimeToFirstFrameToDisplay(),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_PlaybackRate"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetPlaybackRateForDisplay(),
                    }),
                  ],
                }),
                (0, i.jsx)(pr, { stats: s }),
              ],
            });
          }
        };
        gr([M.oI], Et.prototype, "HideStats", 1), (Et = gr([F.PA], Et));
        let pr = class extends R.Component {
          constructor(s) {
            super(s);
          }
          createBufferedRange(s) {
            let a = this.props.stats,
              l = [],
              d = s ? "vidbuf" : "audbuf",
              u = s
                ? a.GetNumBufferedVideoRanges()
                : a.GetNumBufferedAudioRanges();
            if (u > 0)
              for (let p = 0; p < u; ++p) {
                let B = (0, D.we)(
                    s
                      ? "#DASHPlayerStats_VideoBufferRange"
                      : "#DASHPlayerStats_AudioBufferRange",
                    p,
                  ),
                  W = s
                    ? a.GetBufferedVideoSegmentForDisplay(p)
                    : a.GetBufferedAudioSegmentForDisplay(p);
                l.push(
                  (0, i.jsxs)(
                    "div",
                    {
                      children: [
                        B,
                        " ",
                        (0, i.jsx)("span", {
                          className: "videoStatsValue",
                          children: W,
                        }),
                      ],
                    },
                    d + p,
                  ),
                );
              }
            else {
              let p = (0, D.we)(
                s
                  ? "#DASHPlayerStats_VideoNoRangeInformation"
                  : "#DASHPlayerStats_AudioNoRangeInformation",
              );
              l.push((0, i.jsx)("div", { children: p }, d + "none"));
            }
            return l;
          }
          render() {
            let s = this.props.stats;
            return (0, i.jsxs)("div", {
              className: "dash_video_quick_stats",
              children: [
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_BytesReceived"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetBytesReceivedToDisplay(),
                    }),
                  ],
                }),
                this.props.stats.BHasFrameInformation() &&
                  (0, i.jsxs)("div", {
                    children: [
                      (0, D.we)("#DASHPlayerStats_DroppedFrames"),
                      " ",
                      (0, i.jsx)("span", {
                        className: "videoStatsValue",
                        children: s.GetDroppedFramesToDisplay(),
                      }),
                    ],
                  }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_VideoBuffered"),
                    " ",
                    (0, i.jsxs)("span", {
                      className: "videoStatsValue",
                      children: [s.GetVideoBufferedToDisplay(), " "],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_AudioBuffered"),
                    " ",
                    (0, i.jsxs)("span", {
                      className: "videoStatsValue",
                      children: [s.GetAudioBufferedToDisplay(), " "],
                    }),
                  ],
                }),
                this.createBufferedRange(!0),
                this.createBufferedRange(!1),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_BandwidthRequired"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetBandwidthRequiredToDisplay(),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_BandwidthVideo"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetBandwithVideoToDisplay(),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_BandwidthNums"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetBandwidthStatsToDisplay(),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_DownloadNums"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetDownloadTimeStatsToDisplay(),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_ActiveDownloads"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetActiveDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_VideoDownloadProgress"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetVideoDownloadProgressToDisplay(),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_DroppingFrames"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetPersistentFrameDropsForDisplay(),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, D.we)("#DASHPlayerStats_CurrentFPS"),
                    " ",
                    (0, i.jsx)("span", {
                      className: "videoStatsValue",
                      children: s.GetCurrentFPSForDisplay(),
                    }),
                  ],
                }),
              ],
            });
          }
        };
        pr = gr([F.PA], pr);
        var vt = h(82581),
          $t = Object.defineProperty,
          Ar = Object.getOwnPropertyDescriptor,
          ts = (s, a, l) =>
            a in s
              ? $t(s, a, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: l,
                })
              : (s[a] = l),
          K = (s, a, l, d) => {
            for (
              var u = d > 1 ? void 0 : d ? Ar(a, l) : a, p = s.length - 1, B;
              p >= 0;
              p--
            )
              (B = s[p]) && (u = (d ? B(a, l, u) : B(u)) || u);
            return d && u && $t(a, l, u), u;
          },
          Tt = (s, a, l) => ts(s, typeof a != "symbol" ? a + "" : a, l);
        class Br extends R.Component {
          constructor(a) {
            super(a),
              Tt(this, "m_elSettingsButton"),
              Tt(this, "m_SettingsButtonPos"),
              Tt(this, "m_elClickListener", null),
              Tt(this, "m_elSettingsPanel", null),
              Tt(this, "m_elSubtitlesButton", R.createRef()),
              Tt(this, "m_elSubtitlesPanel", R.createRef()),
              Tt(this, "m_SubtitlesButtonPos"),
              (this.state = { bSettingsOpen: !1, bSubtitlesOpen: !1 });
          }
          OnVideoControlClick(a) {
            var l;
            this.setState({ bSettingsOpen: !this.state.bSettingsOpen }),
              (this.m_SettingsButtonPos = [
                this.m_elSettingsButton.offsetLeft,
                this.m_elSettingsButton.offsetTop,
              ]),
              (this.m_elClickListener =
                a.currentTarget.ownerDocument.defaultView),
              (l = this.m_elClickListener) == null ||
                l.addEventListener("mouseup", this.OnMouseUp, !0);
          }
          OnSubtitlesClick(a) {
            var l, d, u;
            this.setState({ bSubtitlesOpen: !this.state.bSubtitlesOpen }),
              (this.m_SubtitlesButtonPos = [
                (l = this.m_elSubtitlesButton.current) == null
                  ? void 0
                  : l.offsetLeft,
                (d = this.m_elSubtitlesButton.current) == null
                  ? void 0
                  : d.offsetTop,
              ]),
              (this.m_elClickListener =
                a.currentTarget.ownerDocument.defaultView),
              (u = this.m_elClickListener) == null ||
                u.addEventListener("mouseup", this.OnMouseUp, !0);
          }
          OnMouseUp(a) {
            var l;
            (l = this.m_elClickListener) == null ||
              l.removeEventListener("mouseup", this.OnMouseUp, !0),
              (0, jt.id)(this.m_elSettingsPanel, a.target) ||
                this.setState({ bSettingsOpen: !1 }),
              (0, jt.id)(this.m_elSubtitlesPanel.current, a.target) ||
                this.setState({ bSubtitlesOpen: !1 });
          }
          bindSettingsButton(a) {
            this.m_elSettingsButton = a;
          }
          BindSettingsPanel(a) {
            this.m_elSettingsPanel = a;
          }
          OnShowStats(a) {
            this.props.onShowStats(a),
              this.setState({ bSettingsOpen: !this.state.bSettingsOpen });
          }
          render() {
            let a = !1,
              l = !1;
            const { video: d, actions: u } = this.props;
            let p,
              B = [],
              W = 0,
              A = (0, i.jsx)(
                "div",
                { className: "settingsMenuSeparator" },
                "separator",
              );
            const Mt = 260,
              H = 32;
            if (
              (this.state.bSettingsOpen &&
                ((a = !0),
                (p = this.props.video.GetVideoRepresentations()),
                (B = p.map((yt) =>
                  (0, i.jsx)(
                    vt.n,
                    {
                      onClick: () => {
                        this.props.video.SetVideoRepresentation(yt),
                          this.setState({
                            bSettingsOpen: !this.state.bSettingsOpen,
                          });
                      },
                      bChecked: yt.selected,
                      children: yt.displayName,
                    },
                    yt.id,
                  ),
                )),
                B.push(A),
                B.push(
                  (0, i.jsxs)(
                    vt.D,
                    {
                      onClick: this.OnShowStats,
                      children: [
                        (0, D.we)("#Broadcast_VideoContext_ToggleStats"),
                        "	",
                      ],
                    },
                    "statsToggle",
                  ),
                ),
                (W = 0 - (B.length * 21 + H))),
              this.state.bSubtitlesOpen)
            ) {
              (l = !0),
                (B = []),
                B.push(
                  (0, i.jsx)(
                    vt.n,
                    {
                      onClick: () => {
                        this.props.video.SetSubtitles(null),
                          this.setState({
                            bSubtitlesOpen: !this.state.bSubtitlesOpen,
                          });
                      },
                      className: "NoSubtitles",
                      bChecked: !1,
                      children: (0, D.we)("#Broadcast_None"),
                    },
                    "none",
                  ),
                );
              for (
                let yt = 0;
                yt < this.props.video.ListSubtitles().length;
                yt++
              ) {
                const tr = this.props.video.ListSubtitles()[yt];
                B.push(
                  (0, i.jsx)(
                    vt.n,
                    {
                      onClick: () => {
                        this.props.video.SetSubtitles(tr.language),
                          this.setState({
                            bSubtitlesOpen: !this.state.bSubtitlesOpen,
                          });
                      },
                      bChecked: tr.mode === "showing",
                      children: tr.label,
                    },
                    tr.language,
                  ),
                );
              }
              W = 0 - (Mt + H);
            }
            const or =
              this.props.video.BHasPlayer() && this.props.video.BHasTimedText();
            return (0, i.jsxs)("div", {
              className: "STV_BroadcastSettings",
              children: [
                or &&
                  (0, i.jsx)("div", {
                    className:
                      "videoControlButton" +
                      (or ? " ClosedCaptionsActive" : ""),
                    onClick: this.OnSubtitlesClick,
                    ref: this.m_elSubtitlesButton,
                    children: (0, i.jsx)(te.N8C, {}),
                  }),
                (0, i.jsx)("div", {
                  className:
                    "videoControlButton VideoSettings " +
                    (a ? " VideoSettingsOpen" : ""),
                  onClick: this.OnVideoControlClick,
                  ref: this.bindSettingsButton,
                  children: (0, i.jsx)(te.wB_, {}),
                }),
                (0, i.jsx)(ar, { video: d }),
                u &&
                  u.map((yt) =>
                    (0, i.jsx)(
                      "div",
                      {
                        className: "videoControlButton videoControlFitWidth",
                        children: yt,
                      },
                      yt.key,
                    ),
                  ),
                a &&
                  (0, i.jsx)("div", {
                    ref: this.BindSettingsPanel,
                    className: "STV_BroadcastSettingsPanel",
                    style: {
                      left: this.m_SettingsButtonPos[0],
                      top: this.m_SettingsButtonPos[1],
                      marginTop: W,
                    },
                    children: (0, i.jsx)("div", {
                      className: "STV_BroadcastSettingsMenuItems",
                      children: B,
                    }),
                  }),
                l &&
                  (0, i.jsx)("div", {
                    ref: this.m_elSubtitlesPanel,
                    className: "STV_BroadcastSettingsPanel SubtitlesMenu",
                    style: {
                      maxHeight: Mt + "px",
                      left: this.m_SubtitlesButtonPos[0],
                      top: this.m_SubtitlesButtonPos[1],
                      marginTop: W,
                    },
                    children: (0, i.jsx)("div", {
                      className: "STV_BroadcastSettingsMenuItems",
                      children: B,
                    }),
                  }),
              ],
            });
          }
        }
        K([M.oI], Br.prototype, "OnVideoControlClick", 1),
          K([M.oI], Br.prototype, "OnSubtitlesClick", 1),
          K([M.oI], Br.prototype, "OnMouseUp", 1),
          K([M.oI], Br.prototype, "bindSettingsButton", 1),
          K([M.oI], Br.prototype, "BindSettingsPanel", 1),
          K([M.oI], Br.prototype, "OnShowStats", 1);
        const _r = !0;
        let ar = class extends R.Component {
          constructor(s) {
            super(s),
              Tt(this, "k_nHideSliderTimeout", 1.5 * 1e3),
              Tt(this, "m_bShowSlider", _r),
              Tt(this, "m_schHideSlider", new k.LU()),
              Tt(this, "m_bChildDragging", !1),
              Tt(this, "m_bMouseOver", !1),
              (0, X.Gn)(this);
          }
          componentWillUnmount() {
            this.m_schHideSlider.Cancel();
          }
          ToggleMute() {
            let s = this.props.video,
              a = s.IsMuted();
            s.SetMute(!a), s.GetVolume() < 0.01 && s.SetVolume(0.5);
          }
          OnMouseEnter(s) {
            (this.m_bShowSlider = !0),
              (this.m_bMouseOver = !0),
              this.m_schHideSlider.Cancel();
          }
          OnMouseLeave(s) {
            (this.m_bMouseOver = !1), this.ScheduleHide();
          }
          OnChildDrag(s) {
            (this.m_bChildDragging = s), this.ScheduleHide();
          }
          ScheduleHide() {
            this.m_bMouseOver ||
              this.m_bChildDragging ||
              this.m_schHideSlider.Schedule(
                this.k_nHideSliderTimeout,
                () => (this.m_bShowSlider = _r),
              );
          }
          render() {
            let s = this.props.video,
              a = s.IsMuted(),
              l = s.GetVolume() * 100,
              d = "videoControlButton";
            l > 65
              ? (d += " HighestVolume")
              : l > 45
                ? (d += " HighVolume")
                : l < 46 && l > 24
                  ? (d += " MedVolume")
                  : l < 25 && (d += " LowVolume");
            let u = "BroadcastVolumeControl";
            return (
              this.m_bShowSlider && (u += " ShowVolumeSlider"),
              a && (u += " muted"),
              (0, i.jsx)("div", {
                className: u,
                onMouseEnter: this.OnMouseEnter,
                onMouseLeave: this.OnMouseLeave,
                children: (0, i.jsxs)("div", {
                  className: "BroadcastVolumeControl_FixedLayout",
                  children: [
                    (0, i.jsx)("div", {
                      className: d,
                      onClick: this.ToggleMute,
                      children: (0, i.jsx)(te.fSs, {}),
                    }),
                    (0, i.jsx)(Zt, { video: s, onDrag: this.OnChildDrag }),
                  ],
                }),
              })
            );
          }
        };
        K([X.sH], ar.prototype, "m_bShowSlider", 2),
          K([M.oI], ar.prototype, "ToggleMute", 1),
          K([M.oI], ar.prototype, "OnMouseEnter", 1),
          K([M.oI], ar.prototype, "OnMouseLeave", 1),
          K([M.oI], ar.prototype, "OnChildDrag", 1),
          (ar = K([F.PA], ar));
        let Zt = class extends R.Component {
          constructor(s) {
            super(s),
              Tt(this, "m_elSlider", null),
              Tt(this, "m_nVolumeStartOfDrag", 0),
              (0, X.Gn)(this);
          }
          OnMouseDown(s) {
            var a, l;
            let d = s.currentTarget;
            (this.m_elSlider = d),
              (this.m_nVolumeStartOfDrag = this.props.video.GetVolume()),
              this.SetVolumeWithCoord(d, s.clientX),
              (a = d.ownerDocument.defaultView) == null ||
                a.addEventListener("mousemove", this.OnMouseMove),
              (l = d.ownerDocument.defaultView) == null ||
                l.addEventListener("mouseup", this.OnMouseUp),
              this.props.onDrag(!0);
          }
          OnMouseMove(s) {
            this.m_elSlider &&
              this.SetVolumeWithCoord(this.m_elSlider, s.clientX);
          }
          OnMouseUp(s) {
            var a, l;
            if (!this.m_elSlider) return;
            this.SetVolumeWithCoord(this.m_elSlider, s.clientX);
            let d = this.props.video;
            d.IsMuted() && d.SetVolume(this.m_nVolumeStartOfDrag),
              (a = this.m_elSlider.ownerDocument.defaultView) == null ||
                a.removeEventListener("mousemove", this.OnMouseMove),
              (l = this.m_elSlider.ownerDocument.defaultView) == null ||
                l.removeEventListener("mouseup", this.OnMouseUp),
              (this.m_nVolumeStartOfDrag = 0),
              (this.m_elSlider = null),
              this.props.onDrag(!1);
          }
          SetVolumeWithCoord(s, a) {
            let l = s.getBoundingClientRect(),
              d = Kt.Fu(a, l.left, l.right, 0, 1),
              u = Kt.OQ(d, 0, 1),
              p = this.props.video;
            p.SetMute(d < 0.01), p.SetVolume(u);
          }
          render() {
            let s = this.props.video,
              a = s.GetVolume() * 100;
            s.IsMuted() && (a = 0);
            let d = { left: `${a}%` },
              u = { width: `${a}%` };
            return (0, i.jsxs)("div", {
              className: "BroadcastVolumeSlider",
              onMouseDown: this.OnMouseDown,
              children: [
                (0, i.jsx)("div", { className: "BroadcastVolumeSlider_Track" }),
                (0, i.jsx)("div", {
                  className: "BroadcastVolumeSlider_Fill",
                  style: u,
                }),
                (0, i.jsx)("div", {
                  className: "BroadcastVolumeSlider_Thumb",
                  style: d,
                }),
              ],
            });
          }
        };
        K([M.oI], Zt.prototype, "OnMouseDown", 1),
          K([M.oI], Zt.prototype, "OnMouseMove", 1),
          K([M.oI], Zt.prototype, "OnMouseUp", 1),
          K([X.XI], Zt.prototype, "SetVolumeWithCoord", 1),
          (Zt = K([F.PA], Zt));
        var rs = h(43434),
          xr = Object.defineProperty,
          ss = Object.getOwnPropertyDescriptor,
          qr = (s, a, l) =>
            a in s
              ? xr(s, a, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: l,
                })
              : (s[a] = l),
          x = (s, a, l, d) => {
            for (
              var u = d > 1 ? void 0 : d ? ss(a, l) : a, p = s.length - 1, B;
              p >= 0;
              p--
            )
              (B = s[p]) && (u = (d ? B(a, l, u) : B(u)) || u);
            return d && u && xr(a, l, u), u;
          },
          Gt = (s, a, l) => qr(s, typeof a != "symbol" ? a + "" : a, l);
        const Qr = 3200,
          Vt = 15;
        let Z = class extends R.Component {
          constructor(s) {
            super(s),
              Gt(this, "m_schHideControls", new k.LU()),
              Gt(this, "m_schUnmountControls", new k.LU()),
              Gt(this, "m_elVideo", null),
              Gt(this, "m_elBroadcastPlayer", null),
              Gt(this, "m_bMouseDown", !1),
              Gt(this, "m_elMouseDown", null),
              Gt(this, "m_listeners", new k.Ji()),
              (this.state = {
                bMountControls: !1,
                bControlsVisible: !1,
                bShowStats: !1,
                video: null,
                nResizedHeight: null,
                bFullscreen: !1,
              });
          }
          StopVideo() {
            var s, a;
            let l = this.state.video;
            l &&
              (V.es.StopVideo(l),
              this.setState({ video: null }),
              (a = (s = this.props).fnSetBroadcastVideo) == null ||
                a.call(s, null));
          }
          IsMuted() {
            let s = this.state.video;
            return !s || s.IsMuted();
          }
          StopPlaybackTillUserInput() {
            let s = this.state.video;
            s && s.StopPlaybackTillUserInput();
          }
          componentDidUpdate(s, a) {
            !a.bMountControls && this.state.bMountControls
              ? setTimeout(() => {
                  this.setState((d) => ({
                    bControlsVisible: d.bMountControls,
                  }));
                }, 15)
              : a.bControlsVisible &&
                !this.state.bControlsVisible &&
                this.state.video &&
                !this.state.video.IsPaused() &&
                this.m_schUnmountControls.Schedule(2e3, this.UmountControls),
              this.props.steamIDBroadcast !== s.steamIDBroadcast &&
                this.BindVideoRef(this.m_elVideo);
            const l = this.props.nAppIDVOD;
            l &&
              (a.strInitialCapsuleImageUrl === void 0 || s.nAppIDVOD != l) &&
              Ht.A.Get()
                .QueueAppRequest(l, {
                  include_assets: !0,
                  include_trailers: !0,
                })
                .then(() => {
                  var d;
                  const u = Ht.A.Get().GetApp(l),
                    p =
                      ((d = u == null ? void 0 : u.GetAssets()) == null
                        ? void 0
                        : d.GetMainCapsuleURL()) || "";
                  this.setState({ strInitialCapsuleImageUrl: p });
                });
          }
          componentWillUnmount() {
            this.m_listeners.Unregister(),
              this.m_schHideControls.Cancel(),
              this.m_schUnmountControls.Cancel(),
              this.StopVideo();
          }
          BindBroadcastPlayerRef(s) {
            this.m_listeners.Unregister(),
              (this.m_elBroadcastPlayer = s),
              s &&
                (this.m_listeners.AddEventListener(
                  s,
                  "fullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  s,
                  "mozfullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  s,
                  "webkitfullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  s,
                  "msfullscreenchange",
                  this.OnFullscreenChange,
                ));
          }
          BindVideoRef(s) {
            var a, l;
            let d = null;
            this.StopVideo(),
              this.props.steamIDBroadcast
                ? s &&
                  (d = V.es.CreateBroadcastVideo(
                    s,
                    this.props.steamIDBroadcast,
                    this.props.watchLocation,
                    !!this.props.bWebRTC,
                  ))
                : this.props.broadcastClipID
                  ? s &&
                    (d = V.es.CreateClipVideo(
                      s,
                      this.props.broadcastClipID,
                      this.props.watchLocation,
                    ))
                  : this.props.nAppIDVOD &&
                    s &&
                    ((d = V.es.CreateVODVideo(
                      s,
                      this.props.nAppIDVOD,
                      this.props.watchLocation,
                    )),
                    this.props.fnOnVideoEnd &&
                      d.SetOnVideoCallback(this.props.fnOnVideoEnd)),
              d &&
                (this.props.bStartMuted && d.SetMute(!0),
                this.props.bStartWithSubtitles && d.SetStartWithSubtitles(!0),
                this.props.bStartPaused
                  ? d.StopPlaybackTillUserInput()
                  : d.Play()),
              this.setState({ video: d }),
              (l = (a = this.props).fnSetBroadcastVideo) == null ||
                l.call(a, d),
              (this.m_elVideo = s);
          }
          OnMouseDown(s) {
            var a;
            (this.m_bMouseDown = !0),
              (this.m_elMouseDown = s.currentTarget),
              (a = this.m_elMouseDown.ownerDocument.defaultView) == null ||
                a.addEventListener("mouseup", this.OnMouseUp);
          }
          OnMouseUp(s) {
            var a, l;
            (this.m_bMouseDown = !1),
              (l =
                (a = this.m_elMouseDown) == null
                  ? void 0
                  : a.ownerDocument.defaultView) == null ||
                l.removeEventListener("mouseup", this.OnMouseUp),
              this.m_schHideControls.Schedule(Qr, this.HideControls);
          }
          OnMouseMove(s) {
            this.m_schHideControls.Cancel(),
              this.m_schUnmountControls.Cancel(),
              this.state.bMountControls
                ? this.state.bControlsVisible ||
                  this.setState({ bControlsVisible: !0 })
                : this.setState({ bMountControls: !0 }),
              this.m_schHideControls.Schedule(Qr, this.HideControls);
          }
          OnMouseLeave(s) {
            this.HideControls();
          }
          HideControls() {
            this.state.bControlsVisible &&
              !this.m_bMouseDown &&
              this.setState({ bControlsVisible: !1 });
          }
          UmountControls() {
            this.setState((s) =>
              !s.bControlsVisible && s.bMountControls
                ? { bMountControls: !1 }
                : null,
            );
          }
          ShowStatsView() {
            let s = this.state.video;
            if (!s) return;
            this.state.bShowStats ||
              (this.setState({ bShowStats: !0 }), s.SetStatsViewIsVisible(!0));
          }
          OnContextMenu(s) {
            this.state.bFullscreen ||
              ((0, ee.lX)(
                (0, i.jsx)(c.tz, { children: this.GetContextMenuItems() }),
                s,
              ),
              s.preventDefault());
          }
          ToggleStatsView(s) {
            let a = !this.state.bShowStats;
            this.setState({ bShowStats: a });
            let l = this.state.video;
            l && l.SetStatsViewIsVisible(a);
          }
          ShowStorePage(s) {
            let a = this.state.video;
            if (!a || !this.props.onOpenLinkInNewWindow) return;
            let l = a.GetBroadcastInfo();
            if (!l) return;
            let d = (0, Rt.k2)(`${Ur.TS.STORE_BASE_URL}app/${l.m_strAppId}`);
            this.props.onOpenLinkInNewWindow(s, d), s.stopPropagation();
          }
          GetContextMenuItems() {
            let s = [],
              a = this.state.video;
            if (!a) return s;
            let l = a.GetBroadcastInfo();
            return (
              s.push(
                (0, i.jsx)(
                  c.IK,
                  {
                    bChecked: this.state.bShowStats,
                    onSelected: (d) => {
                      this.ToggleStatsView(d);
                    },
                    children: (0, D.we)("#Broadcast_VideoContext_ToggleStats"),
                  },
                  "togglestats",
                ),
              ),
              l &&
                l.m_strAppId != "0" &&
                Number.parseInt(l.m_strAppId) != V.fO &&
                s.push(
                  (0, i.jsx)(
                    c.kt,
                    {
                      onSelected: (d) => {
                        this.ShowStorePage(d);
                      },
                      children: (0, D.we)("#Broadcast_VideoContext_OpenStore"),
                    },
                    "visitstore",
                  ),
                ),
              s
            );
          }
          CloseStats() {
            let s = this.state.video;
            s &&
              this.state.bShowStats &&
              (this.setState({ bShowStats: !1 }), s.SetStatsViewIsVisible(!1));
          }
          OnToggleFullscreen() {
            var s;
            this.m_elBroadcastPlayer &&
              ((0, jt.ww)(this.m_elBroadcastPlayer)
                ? (0, jt.MS)(this.m_elBroadcastPlayer)
                : (0, jt.tl)(
                    this.m_elBroadcastPlayer,
                    (s = this.m_elVideo) != null ? s : void 0,
                  ));
          }
          OnFullscreenChange(s) {
            if (!this.m_elBroadcastPlayer) return;
            let a = (0, jt.ww)(this.m_elBroadcastPlayer);
            this.setState({ bFullscreen: a });
          }
          BHideVideoControls() {
            let s = this.state.video;
            return !s || s.GetUserInputNeeded()
              ? !0
              : V.es.GetBroadcastState(s) == V.fK.Error;
          }
          render() {
            var s;
            const a = this.state.video,
              l = a && a.IsPaused(),
              d = a && a.BHasDASHStats() && this.state.bShowStats,
              u = !!(a && a.IsReplay()),
              p = this.state.bMountControls,
              B = this.state.bControlsVisible || l,
              W = !!(a && a.GetUserInputNeeded()),
              A = a == null ? void 0 : a.GetDASHPlayerStats(),
              Mt =
                (a == null ? void 0 : a.IsBroadcastVOD()) &&
                W &&
                this.state.strInitialCapsuleImageUrl;
            let H = "videoContainer";
            B || (H += " HidePlayerControls"),
              l && (H += " VideoPaused"),
              this.state.bFullscreen && (H += " fullscreenVideo"),
              this.props.classes && (H += " " + this.props.classes);
            let Lt = [];
            !this.state.bFullscreen &&
              this.props.actions &&
              (Lt = Lt.concat(this.props.actions)),
              !this.state.bFullscreen &&
                this.props.onTheaterMode &&
                Lt.push(
                  (0, i.jsx)(
                    "div",
                    {
                      onClick: this.props.onTheaterMode,
                      title: (0, D.we)("#Broadcast_View_Theater"),
                      className: "BroadcastTheaterToggle",
                    },
                    "ChatPosToggle ChatTheaterToggle",
                  ),
                ),
              Lt.push(
                (0, i.jsx)(
                  "div",
                  {
                    title: (0, D.we)("#Broadcast_View_Fullscreen"),
                    onClick: this.OnToggleFullscreen,
                    className: "BroadcastFullscreenToggle",
                  },
                  "FullscreenToggle",
                ),
              );
            const or = p && !this.BHideVideoControls(),
              yt = p && !this.state.bFullscreen,
              tr =
                this.props.fnRenderBroadcastContext &&
                this.props.fnRenderBroadcastContext();
            return (0, i.jsxs)("div", {
              ref: this.BindBroadcastPlayerRef,
              className: H,
              onMouseMove: this.OnMouseMove,
              onClick: this.OnMouseMove,
              onMouseLeave: this.OnMouseLeave,
              onContextMenu: this.OnContextMenu,
              onMouseDown: this.OnMouseDown,
              children: [
                tr &&
                  (0, i.jsx)("div", {
                    className: S().BroadcastContext,
                    children: tr,
                  }),
                u && (0, i.jsx)(Dt, {}),
                this.props.showVideoBackgroundBlur &&
                  this.m_elVideo &&
                  (0, i.jsx)($, {
                    className: "videoBlur",
                    elementRef: this.m_elVideo,
                    updateRate: 33,
                    width: 320,
                    height: 180,
                    reductionFactor: 10,
                    blurAmount: 5,
                  }),
                (0, i.jsx)("video", {
                  className: "videoSrc",
                  ref: this.BindVideoRef,
                  muted: (s = this.props.bMuted) != null ? s : !0,
                  autoPlay: !0,
                  playsInline: !0,
                  controls: !1,
                  onVolumeChange: this.props.fnVolumeChanged,
                  onClick: this.props.fnVideoClick,
                }),
                this.props.linkRegions
                  ? (0, i.jsx)(er, {
                      linkRegions: this.props.linkRegions,
                      editMode: !!this.props.editMode,
                      onSaveLinkRegions: this.props.onSaveLinkRegions,
                    })
                  : null,
                this.props.linkElement,
                Mt &&
                  (0, i.jsx)("img", {
                    loading: "lazy",
                    className: (0, Qt.A)(
                      S().BroadcastPlaceholderImg,
                      "BroadcastPlaceholderImg",
                    ),
                    src: this.state.strInitialCapsuleImageUrl,
                  }),
                or &&
                  a &&
                  (0, i.jsx)(Er, {
                    video: a,
                    actions: Lt,
                    onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                    onShowStats: this.ToggleStatsView,
                    bIncludeClipEditor: !!this.props.bIncludeClipEditor,
                  }),
                yt && (0, i.jsx)(Lr, { onClick: this.props.onRequestClose }),
                d &&
                  A &&
                  (0, i.jsx)(Et, { stats: A, closeStats: this.CloseStats }),
                (0, i.jsx)(ir, { video: a }),
                W && a && (0, i.jsx)(Pt, { video: a }),
              ],
            });
          }
        };
        x([M.oI], Z.prototype, "BindBroadcastPlayerRef", 1),
          x([M.oI], Z.prototype, "BindVideoRef", 1),
          x([M.oI], Z.prototype, "OnMouseDown", 1),
          x([M.oI], Z.prototype, "OnMouseUp", 1),
          x([M.oI], Z.prototype, "OnMouseMove", 1),
          x([M.oI], Z.prototype, "OnMouseLeave", 1),
          x([M.oI], Z.prototype, "HideControls", 1),
          x([M.oI], Z.prototype, "UmountControls", 1),
          x([M.oI], Z.prototype, "ShowStatsView", 1),
          x([M.oI], Z.prototype, "OnContextMenu", 1),
          x([M.oI], Z.prototype, "ToggleStatsView", 1),
          x([M.oI], Z.prototype, "ShowStorePage", 1),
          x([M.oI], Z.prototype, "CloseStats", 1),
          x([M.oI], Z.prototype, "OnToggleFullscreen", 1),
          x([M.oI], Z.prototype, "OnFullscreenChange", 1),
          (Z = x([F.PA], Z));
        let Er = class extends R.Component {
          render() {
            const { video: s } = this.props;
            if (!s) return null;
            let a = s.has_segments;
            return (0, i.jsxs)("div", {
              className: "videoControls",
              children: [
                (0, i.jsx)(Fr, {
                  steamID: this.props.video.GetBroadcastSteamID(),
                  bHideThumbnail: !0,
                  bVerticalBroadcastChat: !0,
                  onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                }),
                (0, i.jsxs)("div", {
                  className: "videoControlsBottom" + (a ? "" : " noSegments"),
                  children: [
                    (0, i.jsx)(_t, {
                      video: s,
                      bIncludeClipEditor: this.props.bIncludeClipEditor,
                    }),
                    (0, i.jsxs)("div", {
                      className: "STV_BroadcastController",
                      children: [
                        (0, i.jsx)("div", {
                          className: "videoControlsButtons LeftSpacer",
                        }),
                        (0, i.jsx)(Hr, { video: s }),
                        (0, i.jsx)(kr, { video: s }),
                        (0, i.jsx)(Br, {
                          video: s,
                          actions: this.props.actions,
                          onShowStats: this.props.onShowStats,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
        };
        Er = x([F.PA], Er);
        class Lr extends R.PureComponent {
          render() {
            return this.props.onClick
              ? (0, i.jsx)("div", {
                  className: "STV_BroadcastClose",
                  onClick: this.props.onClick,
                  children: (0, i.jsx)(te.sED, {}),
                })
              : null;
          }
        }
        class Hr extends R.Component {
          OnJumpBackward() {
            this.props.video.JumpTime(-Vt);
          }
          OnJumpForward() {
            this.props.video.JumpTime(Vt);
          }
          render() {
            let a = this.props.video,
              l = a.CanSeek();
            return (0, i.jsxs)("div", {
              className: "videoControlsButtons PlayControls",
              children: [
                (0, i.jsx)(nr, { video: a }),
                l &&
                  (0, i.jsxs)("div", {
                    className:
                      "videoControlButton videoControlJump controlFlip",
                    onClick: this.OnJumpBackward,
                    children: [
                      (0, i.jsx)(te.tID, {
                        bHidePostArrow: !0,
                        bHidePreArrow: !0,
                        bShowJumpAheadBox: !0,
                        bFlipHorizontal: !0,
                      }),
                      (0, i.jsx)("div", {
                        className: "jumpAheadValue",
                        children: Vt,
                      }),
                    ],
                  }),
                (0, i.jsx)(Or, { video: a }),
                l &&
                  (0, i.jsxs)("div", {
                    className: "videoControlButton videoControlJump",
                    onClick: this.OnJumpForward,
                    children: [
                      (0, i.jsx)(te.tID, {
                        bHidePostArrow: !0,
                        bHidePreArrow: !0,
                        bShowJumpAheadBox: !0,
                        bFlipHorizontal: !1,
                      }),
                      (0, i.jsx)("div", {
                        className: "jumpAheadValue",
                        children: Vt,
                      }),
                    ],
                  }),
                l && (0, i.jsx)(yr, { video: a }),
              ],
            });
          }
        }
        x([M.oI], Hr.prototype, "OnJumpBackward", 1),
          x([M.oI], Hr.prototype, "OnJumpForward", 1);
        const kr = (0, F.PA)((s) => {
          if (s.video.IsBroadcastClip() || s.video.IsBroadcastVOD())
            return null;
          const a = (d) => {
            s.video.JumpToLiveEdge();
          };
          let l = s.video.IsOnLiveEdge();
          return (0, i.jsx)("div", {
            className: "videoControlsButtons GoLive",
            children: (0, i.jsxs)("div", {
              className:
                "videoControlButton videoControlGoLive" +
                (l ? " isLiveEdge" : ""),
              onClick: l ? void 0 : a,
              children: [
                (0, i.jsx)(te.tID, {
                  bHidePreArrow: !0,
                  bHidePostArrow: !0,
                  bFlipHorizontal: !1,
                }),
                (0, i.jsx)("div", {
                  className: "jumpGoLive",
                  children: (0, D.we)(
                    l
                      ? "#DASHPlayerControls_IsLive"
                      : "#DASHPlayerControls_GoLive",
                  ),
                }),
              ],
            }),
          });
        });
        let Or = class extends R.Component {
          OnTogglePlayPause() {
            this.props.video.TogglePlayPause();
          }
          render() {
            let a = this.props.video.IsPaused();
            return (0, i.jsx)("div", {
              className: "videoControlButton buttonPlayPause",
              onClick: this.OnTogglePlayPause,
              children: a ? (0, i.jsx)(te.jGG, {}) : (0, i.jsx)(te.vRz, {}),
            });
          }
        };
        x([M.oI], Or.prototype, "OnTogglePlayPause", 1), (Or = x([F.PA], Or));
        let nr = class extends R.Component {
          constructor(s) {
            super(s),
              Gt(this, "video"),
              (0, X.Gn)(this),
              (this.video = s.video);
          }
          componentDidUpdate() {
            this.video = this.props.video;
          }
          get has_previous_marker() {
            return this.GetPreviousMarkerTime() !== void 0;
          }
          GetPreviousMarkerTime() {
            const s = this.video;
            if (!(s != null && s.has_markers)) return;
            let a = s.GetTimelineMarkers(),
              l = s.GetPlaybackTime();
            for (let d = a.length - 1; d >= 0; d--)
              if (!(a[d].nTime >= l)) return a[d].nTime;
          }
          OnJumpToPreviousMarkerClicked(s) {
            let a = this.GetPreviousMarkerTime();
            a !== void 0 && this.props.video.Seek(a - 0.2);
          }
          render() {
            let s = this.props.video.BHasMarkersOrSegments();
            return (0, i.jsx)("div", {
              className:
                "videoControlButton jumpToMarker controlFlip" +
                (s ? "" : " noMarkersOrSegments") +
                (this.has_previous_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToPreviousMarkerClicked,
              children: (0, i.jsx)(te.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !0,
              }),
            });
          }
        };
        x([X.sH], nr.prototype, "video", 2),
          x([X.EW], nr.prototype, "has_previous_marker", 1),
          x([M.oI], nr.prototype, "OnJumpToPreviousMarkerClicked", 1),
          (nr = x([F.PA], nr));
        let yr = class extends R.Component {
          constructor(s) {
            super(s),
              Gt(this, "video"),
              (0, X.Gn)(this),
              (this.video = s.video);
          }
          componentDidUpdate() {
            this.video = this.props.video;
          }
          get has_next_marker() {
            return this.GetNextMarkerTime() !== void 0;
          }
          GetNextMarkerTime() {
            const s = this.video;
            if (!(s != null && s.has_markers)) return;
            let a = s.GetTimelineMarkers(),
              l = s.GetPlaybackTime();
            for (let d = 0; d < a.length; d++)
              if (!(a[d].nTime <= l)) return a[d].nTime;
          }
          OnJumpToNextMarkerClicked(s) {
            let a = this.GetNextMarkerTime();
            a !== void 0 && this.props.video.Seek(a);
          }
          render() {
            let s = this.props.video.BHasMarkersOrSegments();
            return (0, i.jsx)("div", {
              className:
                "videoControlButton jumpToMarker" +
                (s ? "" : " noMarkersOrSegments") +
                (this.has_next_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToNextMarkerClicked,
              children: (0, i.jsx)(te.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !1,
              }),
            });
          }
        };
        x([X.sH], yr.prototype, "video", 2),
          x([X.EW], yr.prototype, "has_next_marker", 1),
          x([M.oI], yr.prototype, "OnJumpToNextMarkerClicked", 1),
          (yr = x([F.PA], yr));
        const Tr = (s) => {
          let a = () => s.onMouseEnter(s.pos);
          return (0, i.jsx)("div", {
            className: "timelineMarker",
            title: s.label,
            style: { left: s.pos + "%" },
            onMouseEnter: a,
            onMouseLeave: s.onMouseLeave,
            onMouseDown: s.onMouseDown ? s.onMouseDown : void 0,
            children: (0, i.jsx)("div", {
              className: "timelineMarkerIcon",
              children: (0, i.jsx)(te.Dp6, {}),
            }),
          });
        };
        function is(s) {
          let a = s.startPos,
            l = s.endPos,
            d = "",
            u = 1;
          return (
            a < 0 && ((u = (l - a) / 10), (a = 0), (d = " hideFront")),
            (0, i.jsxs)("div", {
              className: "STV_timelineSegment" + d,
              style: { left: a + "%", width: l - a + "%", opacity: u },
              onClick: s.onClick,
              children: [
                (0, i.jsx)("div", {
                  className: "STV_timelineSegmentFrontFill",
                  style: { borderColor: "rgb(" + s.color + ")" },
                }),
                (0, i.jsx)("div", {
                  className: "STV_timelineSegmentLabel",
                  style: { color: "rgb(" + s.color + ")" },
                  children: s.label,
                }),
                (0, i.jsx)("div", {
                  className: "STV_timelineSegmentBackFill",
                  style: { borderColor: "rgb(" + s.color + ")" },
                }),
              ],
            })
          );
        }
        let _t = class extends R.Component {
          constructor(s) {
            super(s),
              Gt(this, "m_elSlider", R.createRef()),
              Gt(this, "m_rectSlider"),
              (this.state = {
                nGrabberMouseDownTime: 0,
                bGrabberMouseDown: !1,
                nHoverValue: void 0,
                hoverX: 0,
                bStartMouseDown: !1,
                bEndMouseDown: !1,
                thumbnailURL: "",
              });
          }
          OnMouseDown(s, a) {
            var l, d;
            const u = this.m_elSlider.current;
            if (u) {
              s.persist(), (this.m_rectSlider = u.getBoundingClientRect());
              let p = {};
              a === "start"
                ? ((p = { bStartMouseDown: !0 }), s.stopPropagation())
                : a === "end"
                  ? ((p = { bEndMouseDown: !0 }), s.stopPropagation())
                  : (p = { bGrabberMouseDown: !0 }),
                this.setState(p, () => this.AdjustSliderForClientX(s.clientX)),
                (l = u.ownerDocument.defaultView) == null ||
                  l.addEventListener("mousemove", this.OnMouseMove),
                (d = u.ownerDocument.defaultView) == null ||
                  d.addEventListener("mouseup", this.OnMouseUp);
            }
          }
          OnMouseMove(s) {
            this.AdjustSliderForClientX(s.clientX);
          }
          OnMouseUp(s) {
            var a, l;
            this.state.bStartMouseDown
              ? this.setState({ bStartMouseDown: !1 })
              : this.state.bEndMouseDown
                ? this.setState({ bEndMouseDown: !1 })
                : (this.props.video.Seek(this.state.nGrabberMouseDownTime),
                  this.setState({
                    bGrabberMouseDown: !1,
                    nGrabberMouseDownTime: 0,
                  })),
              this.m_elSlider.current &&
                ((a = this.m_elSlider.current.ownerDocument.defaultView) ==
                  null || a.removeEventListener("mousemove", this.OnMouseMove),
                (l = this.m_elSlider.current.ownerDocument.defaultView) ==
                  null || l.removeEventListener("mouseup", this.OnMouseUp));
          }
          OnKeyDown(s) {
            s.keyCode == j.ek
              ? (this.props.video.JumpTime(-1 * Vt), s.preventDefault())
              : s.keyCode == j.JI &&
                (this.props.video.JumpTime(1 * Vt), s.preventDefault());
          }
          AdjustSliderForClientX(s) {
            const a = this.m_rectSlider;
            if (!a) return;
            let l = this.props.video,
              d = l.GetTimelineStartPos(),
              u = l.GetTimelineStartPos() + l.GetTimelineDuration(),
              p = l.GetTimeAtMousePosition(s, a, d, u);
            const B = 5;
            if (this.state.bStartMouseDown) {
              const W = Kt.OQ(p, d, l.m_editorEndTime - B);
              l.m_editorStartTime = W;
            } else if (this.state.bEndMouseDown) {
              const W = Kt.OQ(p, l.m_editorStartTime + B, u);
              l.m_editorEndTime = W;
            } else
              p != this.state.nGrabberMouseDownTime &&
                this.setState({ nGrabberMouseDownTime: p });
          }
          OnMouseHoverMove(s) {
            this.AdjustHoverForClientX(s.clientX);
          }
          OnMouseHoverLeave(s) {
            this.setState({ hoverX: 0 });
          }
          AdjustHoverForClientX(s) {
            var a;
            let l = this.props.video,
              d = l.GetTimelineStartPos(),
              u = l.GetTimelineStartPos() + l.GetTimelineDuration();
            this.m_rectSlider =
              (a = this.m_elSlider.current) == null
                ? void 0
                : a.getBoundingClientRect();
            let p =
              this.m_rectSlider &&
              l.GetTimeAtMousePosition(s, this.m_rectSlider, d, u);
          }
          OnSegmentClick(s) {
            this.props.video.Seek(s);
          }
          OnMarkerMouseEnter(s) {
            this.setState({ nHoverValue: s });
          }
          OnMarkerMouseLeave() {
            this.setState({ nHoverValue: void 0 });
          }
          render() {
            var s;
            let a = this.props.video,
              l = this.state.bGrabberMouseDown,
              d = a.GetPercentOffsetFromTime(
                this.state.nGrabberMouseDownTime,
                V.a0.Timeline,
              ),
              u = a.GetPercentOffsetFromTime(
                a.GetPlaybackTime(),
                V.a0.Timeline,
              ),
              p = a.GetPercentOffsetFromTime(
                a.GetVideoAvailableStartTime(),
                V.a0.Timeline,
              );
            p < 0.05 && (p = 0);
            let B = Kt.OQ(d, 0, 100).toFixed(1) + "%",
              W = Kt.OQ(u, 0, 100).toFixed(1) + "%",
              A = Kt.OQ(p, 0, 100).toFixed(1) + "%",
              Mt = {},
              H = {},
              Lt = {},
              or = {};
            l
              ? ((or.left = B), (Mt.width = B), (H.width = W), (Lt.width = A))
              : ((or.left = W), (H.width = W), (Lt.width = A));
            let yt = (0, jr.ap)(a.GetPlaybackTime()),
              tr = (0, jr.ap)((s = this.state.nHoverValue) != null ? s : 0),
              Rr = "STV_timelineContainer";
            this.state.bGrabberMouseDown && (Rr += " grabberDown"),
              a.IsTimelineMapActive() && (Rr += " minimapActive");
            let Kr = "";
            (d = l ? d : u),
              d > 100
                ? (Kr = " grabberOffScreenRight grabberOffscreen")
                : d < 0 && (Kr = " grabberOffScreenLeft grabberOffscreen");
            let Yt = [];
            a.GetTimelineMarkers().forEach((Ut, Jr) => {
              let lr = a.GetPercentOffsetFromTime(Ut.nTime, V.a0.Timeline);
              lr < 0 ||
                lr > 100 ||
                Yt.push(
                  (0, i.jsx)(
                    Tr,
                    {
                      pos: lr,
                      label: Ut.strTemplateName,
                      onMouseEnter: this.OnMarkerMouseEnter,
                      onMouseLeave: this.OnMarkerMouseLeave,
                    },
                    Jr,
                  ),
                );
            });
            let Dr = [];
            a.GetTimelineSegments().forEach((Ut, Jr) => {
              let lr = a.GetPercentOffsetFromTime(Ut.nTimeStart, V.a0.Timeline);
              if (lr > 100) return;
              let es = a.GetPercentOffsetFromTime(Ut.nTimeEnd, V.a0.Timeline);
              es < 0 ||
                Dr.push(
                  (0, i.jsx)(
                    is,
                    {
                      startPos: lr,
                      endPos: es,
                      label: Ut.strTemplateName,
                      color: Ut.color,
                      onClick: (mr) => this.OnSegmentClick(Ut.nTimeStart),
                    },
                    Jr,
                  ),
                );
            });
            const Zr = a.GetPercentOffsetFromTime(
                a.m_editorStartTime,
                V.a0.Timeline,
              ),
              Xr = a.GetPercentOffsetFromTime(a.m_editorEndTime, V.a0.Timeline),
              as = this.props.bIncludeClipEditor
                ? [
                    (0, i.jsx)(
                      Tr,
                      {
                        pos: Zr,
                        label: (0, D.we)("#DASHPlayerControls_Start"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (Ut) => this.OnMouseDown(Ut, "start"),
                      },
                      "start",
                    ),
                    (0, i.jsx)(
                      Tr,
                      {
                        pos: Xr,
                        label: (0, D.we)("#DASHPlayerControls_End"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (Ut) => this.OnMouseDown(Ut, "end"),
                      },
                      "end",
                    ),
                  ]
                : [];
            return (0, i.jsx)("div", {
              className: "videoTimelineMain",
              tabIndex: 0,
              onKeyDown: this.OnKeyDown,
              children: (0, i.jsxs)("div", {
                className: Rr,
                children: [
                  (0, i.jsx)("div", { className: "DialogLabel", children: yt }),
                  (0, i.jsx)("div", {
                    className: "STV_timelineSegmentsContainer",
                    children: Dr,
                  }),
                  (0, i.jsx)("div", {
                    onMouseDown: this.OnMouseDown,
                    onMouseMove: this.OnMouseHoverMove,
                    onMouseLeave: this.OnMouseHoverLeave,
                    ref: this.m_elSlider,
                    children: (0, i.jsxs)("div", {
                      className: "VideoTimelineSlider",
                      children: [
                        (0, i.jsx)("div", {
                          className: "STV_timelineValue",
                          style: Mt,
                        }),
                        (0, i.jsx)("div", {
                          className: "STV_timelineGhostValue",
                          style: H,
                        }),
                        (0, i.jsx)("div", {
                          className: "STV_timelineNoVideo",
                          style: Lt,
                        }),
                        Yt,
                        as,
                        !!this.state.hoverX &&
                          (0, i.jsx)(
                            "div",
                            {
                              style: {
                                position: "absolute",
                                left: this.state.hoverX - 75,
                                bottom: "30px",
                              },
                              children: (0, i.jsxs)("div", {
                                style: {
                                  position: "relative",
                                  display: "flex",
                                  justifyContent: "center",
                                },
                                children: [
                                  this.state.thumbnailURL &&
                                    (0, i.jsx)("img", {
                                      style: { width: "150px" },
                                      src: this.state.thumbnailURL,
                                    }),
                                  (0, i.jsx)("span", {
                                    className: "STV_timelineGrabberValue",
                                    style: {
                                      position: "absolute",
                                      bottom: "4px",
                                    },
                                    children: tr,
                                  }),
                                ],
                              }),
                            },
                            "grabbertime",
                          ),
                        (0, i.jsx)("div", {
                          className: "STV_timelineGrabber_Wrapper",
                          style: or,
                          children: (0, i.jsx)("div", {
                            className: "STV_timelineGrabber" + Kr,
                            children: (0, i.jsx)("div", {
                              className: "STV_timelineGrabberArrow",
                              children: (0, i.jsx)(te.apU, {}),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
          }
        };
        x([M.oI], _t.prototype, "OnMouseDown", 1),
          x([M.oI], _t.prototype, "OnMouseMove", 1),
          x([M.oI], _t.prototype, "OnMouseUp", 1),
          x([M.oI], _t.prototype, "OnKeyDown", 1),
          x([M.oI], _t.prototype, "OnMouseHoverMove", 1),
          x([M.oI], _t.prototype, "OnMouseHoverLeave", 1),
          x([M.oI], _t.prototype, "AdjustHoverForClientX", 1),
          x([M.oI], _t.prototype, "OnSegmentClick", 1),
          x([M.oI], _t.prototype, "OnMarkerMouseEnter", 1),
          x([M.oI], _t.prototype, "OnMarkerMouseLeave", 1),
          (_t = x([F.PA], _t));
        let Fr = class extends R.Component {
          constructor() {
            super(...arguments), Gt(this, "state", { info: null });
          }
          static getDerivedStateFromProps(s, a) {
            return (!a.info || a.info.m_steamIDBroadcast !== s.steamID) &&
              (a.info && (V.es.StopInfo(a.info), (a.info = null)), s.steamID)
              ? { info: V.es.StartInfo(s.steamID) }
              : null;
          }
          componentWillUnmount() {
            this.state.info && V.es.StopInfo(this.state.info);
          }
          RenderStreamSwitcher() {
            const s = this.props.steamID,
              a = this.props.onLocalStreamChange;
            return a && wt.td.stream[s]
              ? (0, i.jsx)(Wr, { value: s, options: wt.td.stream, onChange: a })
              : null;
          }
          render() {
            let { info: s } = this.state;
            if (!s) return null;
            let a = "";
            s.m_nViewerCount && (a = (0, Vr.Dq)(s.m_nViewerCount));
            let l =
                wt.td.bValid &&
                wt.td.stream &&
                wt.td.stream[s.m_steamIDBroadcast],
              d =
                !this.props.bHideThumbnail &&
                this.props.bVerticalBroadcastChat &&
                (parseInt(s.m_strAppId) > 0 || l);
            const u =
              !this.props.bHideThumbnail &&
              this.props.bVerticalBroadcastChat &&
              l &&
              wt.td.gidEvent;
            return (0, i.jsxs)("div", {
              className: "BroadcastDetails",
              children: [
                !this.props.bHideThumbnail &&
                  (0, i.jsx)(zr, {
                    className: "broadcastDetailsThumbBlur",
                    src: s.m_strThumbnailUrl,
                    draggable: !1,
                    duration: 2500,
                  }),
                (0, i.jsxs)("div", {
                  className: "BroadcastDetailsHeader",
                  children: [
                    s &&
                      s.m_strAppTitle &&
                      (0, i.jsxs)("div", {
                        className: "displayColumn",
                        children: [
                          (0, i.jsxs)("div", {
                            className: "Info",
                            children: [
                              (0, i.jsx)("span", {
                                className: "AppTitle",
                                children: s.m_strAppTitle,
                              }),
                              s.m_strTitle &&
                                (0, i.jsxs)("span", {
                                  className: "BroadcastTitle",
                                  children: ["\xA0- ", s.m_strTitle],
                                }),
                              this.props.onLocalStreamChange &&
                                this.RenderStreamSwitcher(),
                            ],
                          }),
                          a &&
                            (0, i.jsxs)("div", {
                              className: "BroadcastDetailsHeader_ViewerCount",
                              children: [
                                (0, i.jsx)(te.y_e, {}),
                                (0, D.Yp)("#Broadcast_ViewerCount", a),
                              ],
                            }),
                        ],
                      }),
                    l &&
                      this.props.onOpenLinkInNewWindow &&
                      (0, i.jsx)("div", {
                        className: "Actions",
                        children: (0, i.jsx)("div", {
                          onClick: (p) => {
                            var B, W;
                            return (W = (B = this.props)
                              .onOpenLinkInNewWindow) == null
                              ? void 0
                              : W.call(B, p, wt.td.link);
                          },
                          className: "BroadcastLink",
                          children: wt.td.linkName,
                        }),
                      }),
                  ],
                }),
                u && (0, i.jsx)(Gr.m, { gidEvent: wt.td.gidEvent }),
                d &&
                  (0, i.jsx)(Ir.p, {
                    id:
                      wt.td.bValid &&
                      wt.td.stream &&
                      wt.td.stream[s.m_steamIDBroadcast]
                        ? wt.td.appID
                        : parseInt(s.m_strAppId),
                    type: "game",
                    bPreferAssetWithoutOverride: !1,
                  }),
              ],
            });
          }
        };
        Fr = x([F.PA], Fr);
        class Wr extends R.Component {
          showContextMenu(a) {
            const { options: l, value: d, onChange: u } = this.props,
              p = Object.keys(l).map((B) =>
                (0, i.jsx)(
                  c.IK,
                  {
                    onSelected: () => u(B),
                    bChecked: B === d,
                    children: (0, D.we)(l[B]),
                  },
                  B,
                ),
              );
            (0, ee.lX)((0, i.jsx)(c.tz, { children: p }), a);
          }
          render() {
            const { value: a, options: l } = this.props,
              d = l[a];
            return (0, i.jsxs)("div", {
              className: "BroadcastLanguage",
              onClick: this.showContextMenu,
              children: [
                (0, i.jsxs)("span", { children: ["\xA0- ", (0, D.we)(d)] }),
                (0, i.jsx)("div", {
                  className: "ContextMenuButton",
                  children: (0, i.jsx)(te.GB9, {}),
                }),
              ],
            });
          }
        }
        x([M.oI], Wr.prototype, "showContextMenu", 1);
        let er = class extends R.Component {
          constructor(s) {
            super(s), (this.state = { sizableRegion: [] });
          }
          async AddLinkRegion() {
            let s = this.state.sizableRegion.length;
            this.state.sizableRegion.push({
              xPosPct: 2.5 + s,
              yPosPct: 2.5 + s,
              widthPct: 20,
              heightPct: 15,
            }),
              this.setState({ sizableRegion: this.state.sizableRegion }, () =>
                this.OnSaveRegions(),
              );
          }
          componentDidUpdate(s) {
            s.linkRegions.length == 0 &&
              this.props.linkRegions.forEach((a, l) => {
                this.LoadLinkRegion(a, l);
              });
          }
          async LoadLinkRegion(s, a) {
            let l = this.state.sizableRegion.length;
            this.state.sizableRegion.push({
              xPosPct: s.left,
              yPosPct: s.top,
              widthPct: s.width,
              heightPct: s.height,
              link_url: s.url,
              link_description: s.link_description,
              link_index: s.link_index,
            }),
              await this.setState({ sizableRegion: this.state.sizableRegion });
          }
          OnSaveRegions() {
            var s, a;
            let l;
            l = { links: [] };
            for (let d = 0; d < this.state.sizableRegion.length; d++) {
              let u;
              (u = {
                left: Math.floor(this.state.sizableRegion[d].xPosPct * 100),
                top: Math.floor(this.state.sizableRegion[d].yPosPct * 100),
                width: Math.floor(this.state.sizableRegion[d].widthPct * 100),
                height: Math.floor(this.state.sizableRegion[d].heightPct * 100),
                url: this.state.sizableRegion[d].link_url,
                link_description: this.state.sizableRegion[d].link_description,
                link_index: d,
              }),
                l.links.push(u);
            }
            (a = (s = this.props).onSaveLinkRegions) == null || a.call(s, l);
          }
          async DeleteRegion(s) {
            this.state.sizableRegion.splice(s, 1),
              console.log("keys: ", this.state.sizableRegion.keys),
              this.setState({ sizableRegion: this.state.sizableRegion }, () =>
                this.OnSaveRegions(),
              );
          }
          async UpdatePanel(s, a) {
            const l = [...this.state.sizableRegion];
            (l[s] = a),
              this.setState({ sizableRegion: l }, () => this.OnSaveRegions());
          }
          render() {
            return (0, i.jsxs)("div", {
              className: "LinkOverlayContainer",
              children: [
                (0, i.jsxs)("div", {
                  className: "LinkOverlayValidRegion",
                  children: [
                    !this.props.editMode && this.props.linkRegions
                      ? this.props.linkRegions.map((s) => {
                          const a = (0, rs.p)(s.url);
                          return (0, i.jsx)(
                            vr.uU,
                            {
                              href: s.url,
                              bForceExternal: a,
                              bUseLinkFilter: a,
                              children: (0, i.jsx)("div", {
                                className: "LinkRegion",
                                style: {
                                  left: s.left + "%",
                                  top: s.top + "%",
                                  width: s.width + "%",
                                  height: s.height + "%",
                                },
                                children: (0, i.jsxs)("div", {
                                  className: "LinkRegionText",
                                  children: [s.link_description, " "],
                                }),
                              }),
                            },
                            s.link_index,
                          );
                        })
                      : null,
                    this.props.editMode &&
                      this.state.sizableRegion.map((s, a) =>
                        (0, i.jsx)(
                          Cr.I,
                          {
                            index: a,
                            deleteFn: this.DeleteRegion,
                            updateFn: this.UpdatePanel,
                            xPosPct: s.xPosPct,
                            yPosPct: s.yPosPct,
                            widthPct: s.widthPct,
                            heightPct: s.heightPct,
                            link_url: s.link_url,
                            link_description: s.link_description,
                          },
                          a * 100 + s.xPosPct,
                        ),
                      ),
                    this.props.editMode &&
                      (0, i.jsx)("div", {
                        className: "AddLinkRegion",
                        onClick: this.AddLinkRegion,
                        children: (0, D.we)("#SteamTV_AddLinkRegion"),
                      }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: "LinkOverlayInvalidRegion",
                  children: (0, i.jsx)("div", {
                    children: (0, D.we)("#SteamTV_LinkRegionReserved"),
                  }),
                }),
              ],
            });
          }
        };
        x([M.oI], er.prototype, "AddLinkRegion", 1),
          x([M.oI], er.prototype, "LoadLinkRegion", 1),
          x([M.oI], er.prototype, "OnSaveRegions", 1),
          x([M.oI], er.prototype, "DeleteRegion", 1),
          x([M.oI], er.prototype, "UpdatePanel", 1),
          (er = x([F.PA], er));
      },
      21822: (Nt, Jt, h) => {
        "use strict";
        h.d(Jt, { q: () => Us });
        var i = h(41735),
          X = h.n(i),
          F = h(14947),
          R = h(90828),
          ee = h(72604),
          j = h(35038),
          Rt = h(84110),
          V = h(77008),
          Ht = h(60298),
          M = h(45806),
          k = h(76559),
          U = h(90711),
          m = h(80613),
          n = h.n(m),
          t = h(75245),
          Ot = Object.defineProperty,
          $ = (I, e, r) =>
            e in I
              ? Ot(I, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
              : (I[e] = r),
          c = (I, e, r) => $(I, typeof e != "symbol" ? e + "" : e, r);
        function Ct(I) {
          return "unknown EBroadcastImageType ( " + I + " )";
        }
        function Ft(I) {
          return "unknown EGetGamesAlgorithm ( " + I + " )";
        }
        function Y(I) {
          return "unknown EGetChannelsAlgorithm ( " + I + " )";
        }
        function Q(I) {
          return "unknown ESteamTVContentTemplate ( " + I + " )";
        }
        const N = class re extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              re.prototype.unique_name || t.Sg(re.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              re.sm_m ||
                (re.sm_m = {
                  proto: re,
                  fields: {
                    unique_name: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              re.sm_m
            );
          }
          static MBF() {
            return re.sm_mbf || (re.sm_mbf = t.w0(re.M())), re.sm_mbf;
          }
          toObject(e = !1) {
            return re.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(re.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(re.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new re();
            return re.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(re.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(re.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_CreateBroadcastChannel_Request";
          }
        };
        c(N, "sm_m"), c(N, "sm_mbf");
        let z = N;
        const g = class se extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              se.prototype.broadcast_channel_id || t.Sg(se.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              se.sm_m ||
                (se.sm_m = {
                  proto: se,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              se.sm_m
            );
          }
          static MBF() {
            return se.sm_mbf || (se.sm_mbf = t.w0(se.M())), se.sm_mbf;
          }
          toObject(e = !1) {
            return se.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(se.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(se.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new se();
            return se.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(se.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(se.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_CreateBroadcastChannel_Response";
          }
        };
        c(g, "sm_m"), c(g, "sm_mbf");
        let b = g;
        const O = class ie extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ie.prototype.unique_name || t.Sg(ie.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
                  fields: {
                    unique_name: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = t.w0(ie.M())), ie.sm_mbf;
          }
          toObject(e = !1) {
            return ie.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ie.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ie.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ie();
            return ie.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ie.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ie.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelID_Request";
          }
        };
        c(O, "sm_m"), c(O, "sm_mbf");
        let T = O;
        const zt = class ae extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ae.prototype.broadcast_channel_id || t.Sg(ae.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    unique_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    steamid: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              ae.sm_m
            );
          }
          static MBF() {
            return ae.sm_mbf || (ae.sm_mbf = t.w0(ae.M())), ae.sm_mbf;
          }
          toObject(e = !1) {
            return ae.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ae.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ae.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ae();
            return ae.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ae.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ae.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelID_Response";
          }
        };
        c(zt, "sm_m"), c(zt, "sm_mbf");
        let J = zt;
        const Wt = class ne extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ne.prototype.broadcast_channel_id || t.Sg(ne.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ne.sm_m ||
                (ne.sm_m = {
                  proto: ne,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    name: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    language: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    headline: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    summary: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    avatar_hash: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    schedule: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    rules: { n: 8, br: t.qM.readString, bw: t.gp.writeString },
                    panels: { n: 9, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              ne.sm_m
            );
          }
          static MBF() {
            return ne.sm_mbf || (ne.sm_mbf = t.w0(ne.M())), ne.sm_mbf;
          }
          toObject(e = !1) {
            return ne.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ne.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ne.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ne();
            return ne.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ne.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ne.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelProfile_Request";
          }
        };
        c(Wt, "sm_m"), c(Wt, "sm_mbf");
        let wr = Wt;
        class It extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return It.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new It();
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new It();
            return It.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return It.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              It.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelProfile_Response";
          }
        }
        const Qt = class oe extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              oe.prototype.broadcast_channel_id || t.Sg(oe.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = t.w0(oe.M())), oe.sm_mbf;
          }
          toObject(e = !1) {
            return oe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(oe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(oe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new oe();
            return oe.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(oe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(oe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelProfile_Request";
          }
        };
        c(Qt, "sm_m"), c(Qt, "sm_mbf");
        let kt = Qt;
        const sr = class le extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              le.prototype.unique_name || t.Sg(le.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
                  fields: {
                    unique_name: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    owner_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    name: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    language: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    headline: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    summary: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    schedule: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    rules: { n: 8, br: t.qM.readString, bw: t.gp.writeString },
                    panels: { n: 9, br: t.qM.readString, bw: t.gp.writeString },
                    is_partnered: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = t.w0(le.M())), le.sm_mbf;
          }
          toObject(e = !1) {
            return le.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(le.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(le.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new le();
            return le.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(le.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(le.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelProfile_Response";
          }
        };
        c(sr, "sm_m"), c(sr, "sm_mbf");
        let zr = sr;
        const Ir = class me extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              me.prototype.broadcast_channel_id || t.Sg(me.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              me.sm_m ||
                (me.sm_m = {
                  proto: me,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    image_type: { n: 2, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    image_index: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    image_width: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    image_height: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    file_size: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    file_extension: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    file_hash: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    undo: { n: 9, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              me.sm_m
            );
          }
          static MBF() {
            return me.sm_mbf || (me.sm_mbf = t.w0(me.M())), me.sm_mbf;
          }
          toObject(e = !1) {
            return me.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(me.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(me.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new me();
            return me.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(me.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(me.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelImage_Request";
          }
        };
        c(Ir, "sm_m"), c(Ir, "sm_mbf");
        let Gr = Ir;
        const Cr = class ce extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ce.prototype.replace_image_hash || t.Sg(ce.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ce.sm_m ||
                (ce.sm_m = {
                  proto: ce,
                  fields: {
                    replace_image_hash: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              ce.sm_m
            );
          }
          static MBF() {
            return ce.sm_mbf || (ce.sm_mbf = t.w0(ce.M())), ce.sm_mbf;
          }
          toObject(e = !1) {
            return ce.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ce.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ce.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ce();
            return ce.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ce.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ce.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelImage_Response";
          }
        };
        c(Cr, "sm_m"), c(Cr, "sm_mbf");
        let te = Cr;
        const vr = class de extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              de.prototype.broadcast_channel_id || t.Sg(de.M()),
              m.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    image_types: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readEnum,
                      pbr: t.qM.readPackedEnum,
                      bw: t.gp.writeRepeatedEnum,
                    },
                  },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = t.w0(de.M())), de.sm_mbf;
          }
          toObject(e = !1) {
            return de.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(de.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(de.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new de();
            return de.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(de.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(de.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelImages_Request";
          }
        };
        c(vr, "sm_m"), c(vr, "sm_mbf");
        let jt = vr;
        const D = class ue extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ue.prototype.images || t.Sg(ue.M()),
              m.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: { images: { n: 1, c: Ur, r: !0, q: !0 } },
                }),
              ue.sm_m
            );
          }
          static MBF() {
            return ue.sm_mbf || (ue.sm_mbf = t.w0(ue.M())), ue.sm_mbf;
          }
          toObject(e = !1) {
            return ue.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ue.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ue.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ue();
            return ue.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ue.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ue.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelImages_Response";
          }
        };
        c(D, "sm_m"), c(D, "sm_mbf");
        let Vr = D;
        const Kt = class he extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              he.prototype.image_type || t.Sg(he.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: {
                    image_type: { n: 1, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    image_path: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    image_index: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = t.w0(he.M())), he.sm_mbf;
          }
          toObject(e = !1) {
            return he.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(he.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(he.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new he();
            return he.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(he.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(he.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelImages_Response_Images";
          }
        };
        c(Kt, "sm_m"), c(Kt, "sm_mbf");
        let Ur = Kt;
        const wt = class ge extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ge.prototype.broadcast_channel_id || t.Sg(ge.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ge.sm_m ||
                (ge.sm_m = {
                  proto: ge,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              ge.sm_m
            );
          }
          static MBF() {
            return ge.sm_mbf || (ge.sm_mbf = t.w0(ge.M())), ge.sm_mbf;
          }
          toObject(e = !1) {
            return ge.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ge.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ge.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ge();
            return ge.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ge.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ge.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Request";
          }
        };
        c(wt, "sm_m"), c(wt, "sm_mbf");
        let jr = wt;
        const f = class pe extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pe.prototype.links || t.Sg(pe.M()),
              m.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
                  fields: { links: { n: 1, c: P, r: !0, q: !0 } },
                }),
              pe.sm_m
            );
          }
          static MBF() {
            return pe.sm_mbf || (pe.sm_mbf = t.w0(pe.M())), pe.sm_mbf;
          }
          toObject(e = !1) {
            return pe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(pe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(pe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new pe();
            return pe.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(pe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(pe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Response";
          }
        };
        c(f, "sm_m"), c(f, "sm_mbf");
        let S = f;
        const _ = class Be extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Be.prototype.link_index || t.Sg(Be.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Be.sm_m ||
                (Be.sm_m = {
                  proto: Be,
                  fields: {
                    link_index: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    url: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    link_description: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    left: { n: 4, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    top: { n: 5, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    width: { n: 6, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    height: { n: 7, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              Be.sm_m
            );
          }
          static MBF() {
            return Be.sm_mbf || (Be.sm_mbf = t.w0(Be.M())), Be.sm_mbf;
          }
          toObject(e = !1) {
            return Be.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Be.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Be.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Be();
            return Be.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Be.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Be.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelLinks_Response_Links";
          }
        };
        c(_, "sm_m"), c(_, "sm_mbf");
        let P = _;
        const G = class fe extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              fe.prototype.broadcast_channel_id || t.Sg(fe.M()),
              m.Message.initialize(this, e, 0, -1, [2], null);
          }
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    links: { n: 2, c: ir, r: !0, q: !0 },
                  },
                }),
              fe.sm_m
            );
          }
          static MBF() {
            return fe.sm_mbf || (fe.sm_mbf = t.w0(fe.M())), fe.sm_mbf;
          }
          toObject(e = !1) {
            return fe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(fe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(fe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new fe();
            return fe.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(fe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(fe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelLinkRegions_Request";
          }
        };
        c(G, "sm_m"), c(G, "sm_mbf");
        let E = G;
        const Dt = class be extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              be.prototype.link_index || t.Sg(be.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              be.sm_m ||
                (be.sm_m = {
                  proto: be,
                  fields: {
                    link_index: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    url: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    link_description: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    left: { n: 4, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    top: { n: 5, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    width: { n: 6, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    height: { n: 7, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              be.sm_m
            );
          }
          static MBF() {
            return be.sm_mbf || (be.sm_mbf = t.w0(be.M())), be.sm_mbf;
          }
          toObject(e = !1) {
            return be.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(be.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(be.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new be();
            return be.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(be.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(be.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelLinkRegions_Request_Links";
          }
        };
        c(Dt, "sm_m"), c(Dt, "sm_mbf");
        let ir = Dt;
        class Pt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Pt.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new Pt();
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Pt();
            return Pt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetBroadcastChannelLinkRegions_Response";
          }
        }
        const hr = class Se extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Se.prototype.broadcast_channel_id || t.Sg(Se.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Se.sm_m ||
                (Se.sm_m = {
                  proto: Se,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Se.sm_m
            );
          }
          static MBF() {
            return Se.sm_mbf || (Se.sm_mbf = t.w0(Se.M())), Se.sm_mbf;
          }
          toObject(e = !1) {
            return Se.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Se.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Se.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Se();
            return Se.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Se.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Se.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelStatus_Request";
          }
        };
        c(hr, "sm_m"), c(hr, "sm_mbf");
        let Nr = hr;
        const gr = class Me extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Me.prototype.is_live || t.Sg(Me.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Me.sm_m ||
                (Me.sm_m = {
                  proto: Me,
                  fields: {
                    is_live: { n: 1, br: t.qM.readBool, bw: t.gp.writeBool },
                    is_disabled: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    appid: { n: 3, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    viewers: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    views: {
                      n: 5,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    broadcaster_steamid: {
                      n: 6,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    thumbnail_url: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    followers: {
                      n: 8,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    subscribers: {
                      n: 9,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    unique_name: {
                      n: 10,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_session_id: {
                      n: 11,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Me.sm_m
            );
          }
          static MBF() {
            return Me.sm_mbf || (Me.sm_mbf = t.w0(Me.M())), Me.sm_mbf;
          }
          toObject(e = !1) {
            return Me.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Me.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Me.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Me();
            return Me.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Me.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Me.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelStatus_Response";
          }
        };
        c(gr, "sm_m"), c(gr, "sm_mbf");
        let Et = gr;
        const pr = class we extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              we.prototype.broadcast_channel_id || t.Sg(we.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              we.sm_m ||
                (we.sm_m = {
                  proto: we,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    unique_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    name: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    appid: { n: 4, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    viewers: {
                      n: 5,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    views: {
                      n: 6,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    thumbnail_url: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    followers: {
                      n: 8,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    headline: {
                      n: 9,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    avatar_url: {
                      n: 10,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcaster_steamid: {
                      n: 11,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    subscribers: {
                      n: 12,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    background_url: {
                      n: 13,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    is_featured: {
                      n: 14,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_disabled: {
                      n: 15,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_live: { n: 16, br: t.qM.readBool, bw: t.gp.writeBool },
                    language: {
                      n: 17,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    reports: {
                      n: 18,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    is_partnered: {
                      n: 19,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              we.sm_m
            );
          }
          static MBF() {
            return we.sm_mbf || (we.sm_mbf = t.w0(we.M())), we.sm_mbf;
          }
          toObject(e = !1) {
            return we.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(we.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(we.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new we();
            return we.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(we.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(we.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "GetBroadcastChannelEntry";
          }
        };
        c(pr, "sm_m"), c(pr, "sm_mbf");
        let vt = pr;
        class $t extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return $t.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new $t();
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new $t();
            return $t.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return $t.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              $t.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetFollowedChannels_Request";
          }
        }
        const Ar = class ye extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ye.prototype.results || t.Sg(ye.M()),
              m.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              ye.sm_m ||
                (ye.sm_m = {
                  proto: ye,
                  fields: { results: { n: 1, c: vt, r: !0, q: !0 } },
                }),
              ye.sm_m
            );
          }
          static MBF() {
            return ye.sm_mbf || (ye.sm_mbf = t.w0(ye.M())), ye.sm_mbf;
          }
          toObject(e = !1) {
            return ye.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ye.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ye.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ye();
            return ye.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ye.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ye.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetFollowedChannels_Response";
          }
        };
        c(Ar, "sm_m"), c(Ar, "sm_mbf");
        let ts = Ar;
        class K extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return K.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new K();
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new K();
            return K.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSubscribedChannels_Request";
          }
        }
        const Tt = class Ce extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ce.prototype.results || t.Sg(Ce.M()),
              m.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Ce.sm_m ||
                (Ce.sm_m = {
                  proto: Ce,
                  fields: { results: { n: 1, c: vt, r: !0, q: !0 } },
                }),
              Ce.sm_m
            );
          }
          static MBF() {
            return Ce.sm_mbf || (Ce.sm_mbf = t.w0(Ce.M())), Ce.sm_mbf;
          }
          toObject(e = !1) {
            return Ce.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ce.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ce.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Ce();
            return Ce.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ce.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ce.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSubscribedChannels_Response";
          }
        };
        c(Tt, "sm_m"), c(Tt, "sm_mbf");
        let Br = Tt;
        const _r = class ve extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ve.prototype.broadcast_channel_id || t.Sg(ve.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ve.sm_m ||
                (ve.sm_m = {
                  proto: ve,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    undo: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              ve.sm_m
            );
          }
          static MBF() {
            return ve.sm_mbf || (ve.sm_mbf = t.w0(ve.M())), ve.sm_mbf;
          }
          toObject(e = !1) {
            return ve.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ve.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ve.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ve();
            return ve.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ve.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ve.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_FollowBroadcastChannel_Request";
          }
        };
        c(_r, "sm_m"), c(_r, "sm_mbf");
        let ar = _r;
        const Zt = class Te extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Te.prototype.is_followed || t.Sg(Te.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Te.sm_m ||
                (Te.sm_m = {
                  proto: Te,
                  fields: {
                    is_followed: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              Te.sm_m
            );
          }
          static MBF() {
            return Te.sm_mbf || (Te.sm_mbf = t.w0(Te.M())), Te.sm_mbf;
          }
          toObject(e = !1) {
            return Te.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Te.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Te.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Te();
            return Te.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Te.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Te.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Te.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_FollowBroadcastChannel_Response";
          }
        };
        c(Zt, "sm_m"), c(Zt, "sm_mbf");
        let rs = Zt;
        const xr = class Re extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Re.prototype.broadcast_channel_id || t.Sg(Re.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Re.sm_m ||
                (Re.sm_m = {
                  proto: Re,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Re.sm_m
            );
          }
          static MBF() {
            return Re.sm_mbf || (Re.sm_mbf = t.w0(Re.M())), Re.sm_mbf;
          }
          toObject(e = !1) {
            return Re.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Re.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Re.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Re();
            return Re.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Re.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Re.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SubscribeBroadcastChannel_Request";
          }
        };
        c(xr, "sm_m"), c(xr, "sm_mbf");
        let ss = xr;
        const qr = class ze extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ze.prototype.is_subscribed || t.Sg(ze.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ze.sm_m ||
                (ze.sm_m = {
                  proto: ze,
                  fields: {
                    is_subscribed: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              ze.sm_m
            );
          }
          static MBF() {
            return ze.sm_mbf || (ze.sm_mbf = t.w0(ze.M())), ze.sm_mbf;
          }
          toObject(e = !1) {
            return ze.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ze.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ze.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ze();
            return ze.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ze.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ze.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SubscribeBroadcastChannel_Response";
          }
        };
        c(qr, "sm_m"), c(qr, "sm_mbf");
        let x = qr;
        const Gt = class Ie extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ie.prototype.broadcast_channel_id || t.Sg(Ie.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ie.sm_m ||
                (Ie.sm_m = {
                  proto: Ie,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    reason: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Ie.sm_m
            );
          }
          static MBF() {
            return Ie.sm_mbf || (Ie.sm_mbf = t.w0(Ie.M())), Ie.sm_mbf;
          }
          toObject(e = !1) {
            return Ie.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ie.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ie.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Ie();
            return Ie.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ie.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ie.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ReportBroadcastChannel_Request";
          }
        };
        c(Gt, "sm_m"), c(Gt, "sm_mbf");
        let Qr = Gt;
        class Vt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Vt.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new Vt();
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Vt();
            return Vt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Vt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ReportBroadcastChannel_Response";
          }
        }
        const Z = class je extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              je.prototype.broadcast_channel_id || t.Sg(je.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              je.sm_m ||
                (je.sm_m = {
                  proto: je,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              je.sm_m
            );
          }
          static MBF() {
            return je.sm_mbf || (je.sm_mbf = t.w0(je.M())), je.sm_mbf;
          }
          toObject(e = !1) {
            return je.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(je.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(je.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new je();
            return je.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(je.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(je.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelInteraction_Request";
          }
        };
        c(Z, "sm_m"), c(Z, "sm_mbf");
        let Er = Z;
        const Lr = class _e extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _e.prototype.is_followed || t.Sg(_e.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              _e.sm_m ||
                (_e.sm_m = {
                  proto: _e,
                  fields: {
                    is_followed: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_subscribed: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              _e.sm_m
            );
          }
          static MBF() {
            return _e.sm_mbf || (_e.sm_mbf = t.w0(_e.M())), _e.sm_mbf;
          }
          toObject(e = !1) {
            return _e.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(_e.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(_e.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new _e();
            return _e.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(_e.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(_e.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelInteraction_Response";
          }
        };
        c(Lr, "sm_m"), c(Lr, "sm_mbf");
        let Hr = Lr;
        const kr = class xe extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              xe.prototype.appid || t.Sg(xe.M()),
              m.Message.initialize(this, e, 0, -1, [5], null);
          }
          static M() {
            return (
              xe.sm_m ||
                (xe.sm_m = {
                  proto: xe,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    name: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    image: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    viewers: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    channels: { n: 5, c: vt, r: !0, q: !0 },
                    release_date: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    developer: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    publisher: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              xe.sm_m
            );
          }
          static MBF() {
            return xe.sm_mbf || (xe.sm_mbf = t.w0(xe.M())), xe.sm_mbf;
          }
          toObject(e = !1) {
            return xe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(xe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(xe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new xe();
            return xe.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(xe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(xe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_Game";
          }
        };
        c(kr, "sm_m"), c(kr, "sm_mbf");
        let Or = kr;
        const nr = class Oe extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Oe.prototype.appid || t.Sg(Oe.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Oe.sm_m ||
                (Oe.sm_m = {
                  proto: Oe,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    algorithm: { n: 2, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    count: { n: 3, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              Oe.sm_m
            );
          }
          static MBF() {
            return Oe.sm_mbf || (Oe.sm_mbf = t.w0(Oe.M())), Oe.sm_mbf;
          }
          toObject(e = !1) {
            return Oe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Oe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Oe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Oe();
            return Oe.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Oe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Oe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetGames_Request";
          }
        };
        c(nr, "sm_m"), c(nr, "sm_mbf");
        let yr = nr;
        const Tr = class Fe extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Fe.prototype.results || t.Sg(Fe.M()),
              m.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Fe.sm_m ||
                (Fe.sm_m = {
                  proto: Fe,
                  fields: { results: { n: 1, c: Or, r: !0, q: !0 } },
                }),
              Fe.sm_m
            );
          }
          static MBF() {
            return Fe.sm_mbf || (Fe.sm_mbf = t.w0(Fe.M())), Fe.sm_mbf;
          }
          toObject(e = !1) {
            return Fe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Fe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Fe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Fe();
            return Fe.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Fe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Fe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetGames_Response";
          }
        };
        c(Tr, "sm_m"), c(Tr, "sm_mbf");
        let is = Tr;
        const _t = class We extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              We.prototype.algorithm || t.Sg(We.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              We.sm_m ||
                (We.sm_m = {
                  proto: We,
                  fields: {
                    algorithm: { n: 1, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    count: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    appid: { n: 3, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              We.sm_m
            );
          }
          static MBF() {
            return We.sm_mbf || (We.sm_mbf = t.w0(We.M())), We.sm_mbf;
          }
          toObject(e = !1) {
            return We.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(We.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(We.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new We();
            return We.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(We.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return We.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(We.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              We.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChannels_Request";
          }
        };
        c(_t, "sm_m"), c(_t, "sm_mbf");
        let Fr = _t;
        const Wr = class De extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              De.prototype.results || t.Sg(De.M()),
              m.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              De.sm_m ||
                (De.sm_m = {
                  proto: De,
                  fields: { results: { n: 1, c: vt, r: !0, q: !0 } },
                }),
              De.sm_m
            );
          }
          static MBF() {
            return De.sm_mbf || (De.sm_mbf = t.w0(De.M())), De.sm_mbf;
          }
          toObject(e = !1) {
            return De.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(De.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(De.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new De();
            return De.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(De.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(De.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              De.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChannels_Response";
          }
        };
        c(Wr, "sm_m"), c(Wr, "sm_mbf");
        let er = Wr;
        const s = class Pe extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Pe.prototype.broadcast_channel_id || t.Sg(Pe.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Pe.sm_m ||
                (Pe.sm_m = {
                  proto: Pe,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Pe.sm_m
            );
          }
          static MBF() {
            return Pe.sm_mbf || (Pe.sm_mbf = t.w0(Pe.M())), Pe.sm_mbf;
          }
          toObject(e = !1) {
            return Pe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Pe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Pe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Pe();
            return Pe.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Pe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Pe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Request";
          }
        };
        c(s, "sm_m"), c(s, "sm_mbf");
        let a = s;
        const l = class Ge extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ge.prototype.broadcasters || t.Sg(Ge.M()),
              m.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Ge.sm_m ||
                (Ge.sm_m = {
                  proto: Ge,
                  fields: { broadcasters: { n: 1, c: p, r: !0, q: !0 } },
                }),
              Ge.sm_m
            );
          }
          static MBF() {
            return Ge.sm_mbf || (Ge.sm_mbf = t.w0(Ge.M())), Ge.sm_mbf;
          }
          toObject(e = !1) {
            return Ge.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ge.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ge.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Ge();
            return Ge.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ge.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ge.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Response";
          }
        };
        c(l, "sm_m"), c(l, "sm_mbf");
        let d = l;
        const u = class Ve extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ve.prototype.steamid || t.Sg(Ve.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ve.sm_m ||
                (Ve.sm_m = {
                  proto: Ve,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    name: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    rtmp_token: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Ve.sm_m
            );
          }
          static MBF() {
            return Ve.sm_mbf || (Ve.sm_mbf = t.w0(Ve.M())), Ve.sm_mbf;
          }
          toObject(e = !1) {
            return Ve.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ve.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ve.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Ve();
            return Ve.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ve.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ve.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster";
          }
        };
        c(u, "sm_m"), c(u, "sm_mbf");
        let p = u;
        const B = class Ue extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ue.prototype.issuer_steamid || t.Sg(Ue.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ue.sm_m ||
                (Ue.sm_m = {
                  proto: Ue,
                  fields: {
                    issuer_steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    chatter_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    time_expires: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    permanent: { n: 4, br: t.qM.readBool, bw: t.gp.writeBool },
                    name: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Ue.sm_m
            );
          }
          static MBF() {
            return Ue.sm_mbf || (Ue.sm_mbf = t.w0(Ue.M())), Ue.sm_mbf;
          }
          toObject(e = !1) {
            return Ue.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ue.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ue.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Ue();
            return Ue.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ue.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ue.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ChatBan";
          }
        };
        c(B, "sm_m"), c(B, "sm_mbf");
        let W = B;
        const A = class Ne extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ne.prototype.broadcast_channel_id || t.Sg(Ne.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ne.sm_m ||
                (Ne.sm_m = {
                  proto: Ne,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    chatter_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    duration: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    permanent: { n: 4, br: t.qM.readBool, bw: t.gp.writeBool },
                    undo: { n: 5, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              Ne.sm_m
            );
          }
          static MBF() {
            return Ne.sm_mbf || (Ne.sm_mbf = t.w0(Ne.M())), Ne.sm_mbf;
          }
          toObject(e = !1) {
            return Ne.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ne.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ne.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Ne();
            return Ne.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ne.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ne.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatBan_Request";
          }
        };
        c(A, "sm_m"), c(A, "sm_mbf");
        let Mt = A;
        class H extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return H.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new H();
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new H();
            return H.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatBan_Response";
          }
        }
        const Lt = class Ae extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ae.prototype.broadcast_channel_id || t.Sg(Ae.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ae.sm_m ||
                (Ae.sm_m = {
                  proto: Ae,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Ae.sm_m
            );
          }
          static MBF() {
            return Ae.sm_mbf || (Ae.sm_mbf = t.w0(Ae.M())), Ae.sm_mbf;
          }
          toObject(e = !1) {
            return Ae.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ae.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ae.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Ae();
            return Ae.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ae.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ae.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatBans_Request";
          }
        };
        c(Lt, "sm_m"), c(Lt, "sm_mbf");
        let or = Lt;
        const yt = class qe extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              qe.prototype.results || t.Sg(qe.M()),
              m.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              qe.sm_m ||
                (qe.sm_m = {
                  proto: qe,
                  fields: { results: { n: 1, c: W, r: !0, q: !0 } },
                }),
              qe.sm_m
            );
          }
          static MBF() {
            return qe.sm_mbf || (qe.sm_mbf = t.w0(qe.M())), qe.sm_mbf;
          }
          toObject(e = !1) {
            return qe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(qe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(qe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new qe();
            return qe.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(qe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(qe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatBans_Response";
          }
        };
        c(yt, "sm_m"), c(yt, "sm_mbf");
        let tr = yt;
        const Rr = class Ee extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ee.prototype.broadcast_channel_id || t.Sg(Ee.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ee.sm_m ||
                (Ee.sm_m = {
                  proto: Ee,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    moderator_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    undo: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              Ee.sm_m
            );
          }
          static MBF() {
            return Ee.sm_mbf || (Ee.sm_mbf = t.w0(Ee.M())), Ee.sm_mbf;
          }
          toObject(e = !1) {
            return Ee.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ee.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ee.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Ee();
            return Ee.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ee.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ee.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatModerator_Request";
          }
        };
        c(Rr, "sm_m"), c(Rr, "sm_mbf");
        let Kr = Rr;
        class Yt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Yt.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new Yt();
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Yt();
            return Yt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Yt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddChatModerator_Response";
          }
        }
        const Dr = class Le extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Le.prototype.broadcast_channel_id || t.Sg(Le.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Le.sm_m ||
                (Le.sm_m = {
                  proto: Le,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Le.sm_m
            );
          }
          static MBF() {
            return Le.sm_mbf || (Le.sm_mbf = t.w0(Le.M())), Le.sm_mbf;
          }
          toObject(e = !1) {
            return Le.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Le.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Le.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Le();
            return Le.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Le.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Le.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatModerators_Request";
          }
        };
        c(Dr, "sm_m"), c(Dr, "sm_mbf");
        let Zr = Dr;
        const Xr = class He extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              He.prototype.steamid || t.Sg(He.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              He.sm_m ||
                (He.sm_m = {
                  proto: He,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    name: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              He.sm_m
            );
          }
          static MBF() {
            return He.sm_mbf || (He.sm_mbf = t.w0(He.M())), He.sm_mbf;
          }
          toObject(e = !1) {
            return He.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(He.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(He.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new He();
            return He.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(He.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(He.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              He.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_ChatModerator";
          }
        };
        c(Xr, "sm_m"), c(Xr, "sm_mbf");
        let as = Xr;
        const Ut = class ke extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ke.prototype.results || t.Sg(ke.M()),
              m.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              ke.sm_m ||
                (ke.sm_m = {
                  proto: ke,
                  fields: { results: { n: 1, c: as, r: !0, q: !0 } },
                }),
              ke.sm_m
            );
          }
          static MBF() {
            return ke.sm_mbf || (ke.sm_mbf = t.w0(ke.M())), ke.sm_mbf;
          }
          toObject(e = !1) {
            return ke.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ke.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ke.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ke();
            return ke.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ke.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ke.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetChatModerators_Response";
          }
        };
        c(Ut, "sm_m"), c(Ut, "sm_mbf");
        let Jr = Ut;
        const lr = class Ke extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ke.prototype.broadcast_channel_id || t.Sg(Ke.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Ke.sm_m ||
                (Ke.sm_m = {
                  proto: Ke,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    word: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    undo: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              Ke.sm_m
            );
          }
          static MBF() {
            return Ke.sm_mbf || (Ke.sm_mbf = t.w0(Ke.M())), Ke.sm_mbf;
          }
          toObject(e = !1) {
            return Ke.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ke.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ke.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Ke();
            return Ke.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ke.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ke.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddWordBan_Request";
          }
        };
        c(lr, "sm_m"), c(lr, "sm_mbf");
        let es = lr;
        class mr extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return mr.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new mr();
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new mr();
            return mr.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return mr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              mr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AddWordBan_Response";
          }
        }
        const ns = class Xe extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Xe.prototype.broadcast_channel_id || t.Sg(Xe.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Xe.sm_m ||
                (Xe.sm_m = {
                  proto: Xe,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Xe.sm_m
            );
          }
          static MBF() {
            return Xe.sm_mbf || (Xe.sm_mbf = t.w0(Xe.M())), Xe.sm_mbf;
          }
          toObject(e = !1) {
            return Xe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Xe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Xe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Xe();
            return Xe.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Xe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Xe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetWordBans_Request";
          }
        };
        c(ns, "sm_m"), c(ns, "sm_mbf");
        let As = ns;
        const os = class Je extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Je.prototype.results || t.Sg(Je.M()),
              m.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Je.sm_m ||
                (Je.sm_m = {
                  proto: Je,
                  fields: {
                    results: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: t.qM.readString,
                      bw: t.gp.writeRepeatedString,
                    },
                  },
                }),
              Je.sm_m
            );
          }
          static MBF() {
            return Je.sm_mbf || (Je.sm_mbf = t.w0(Je.M())), Je.sm_mbf;
          }
          toObject(e = !1) {
            return Je.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Je.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Je.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Je();
            return Je.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Je.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Je.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetWordBans_Response";
          }
        };
        c(os, "sm_m"), c(os, "sm_mbf");
        let qs = os;
        const ls = class $e extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $e.prototype.broadcast_channel_id || t.Sg($e.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              $e.sm_m ||
                ($e.sm_m = {
                  proto: $e,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              $e.sm_m
            );
          }
          static MBF() {
            return $e.sm_mbf || ($e.sm_mbf = t.w0($e.M())), $e.sm_mbf;
          }
          toObject(e = !1) {
            return $e.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT($e.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq($e.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new $e();
            return $e.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj($e.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0($e.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              $e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_JoinChat_Request";
          }
        };
        c(ls, "sm_m"), c(ls, "sm_mbf");
        let Ds = ls;
        const ms = class Ye extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ye.prototype.chat_id || t.Sg(Ye.M()),
              m.Message.initialize(this, e, 0, -1, [3], null);
          }
          static M() {
            return (
              Ye.sm_m ||
                (Ye.sm_m = {
                  proto: Ye,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    view_url_template: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    flair_group_ids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint64String,
                      pbr: t.qM.readPackedUint64String,
                      bw: t.gp.writeRepeatedUint64String,
                    },
                  },
                }),
              Ye.sm_m
            );
          }
          static MBF() {
            return Ye.sm_mbf || (Ye.sm_mbf = t.w0(Ye.M())), Ye.sm_mbf;
          }
          toObject(e = !1) {
            return Ye.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ye.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ye.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Ye();
            return Ye.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ye.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ye.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_JoinChat_Response";
          }
        };
        c(ms, "sm_m"), c(ms, "sm_mbf");
        let Es = ms;
        const cs = class Qe extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Qe.prototype.term || t.Sg(Qe.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              Qe.sm_m ||
                (Qe.sm_m = {
                  proto: Qe,
                  fields: {
                    term: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Qe.sm_m
            );
          }
          static MBF() {
            return Qe.sm_mbf || (Qe.sm_mbf = t.w0(Qe.M())), Qe.sm_mbf;
          }
          toObject(e = !1) {
            return Qe.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Qe.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Qe.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Qe();
            return Qe.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Qe.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Qe.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_Search_Request";
          }
        };
        c(cs, "sm_m"), c(cs, "sm_mbf");
        let Ls = cs;
        const ds = class Ze extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ze.prototype.results || t.Sg(Ze.M()),
              m.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Ze.sm_m ||
                (Ze.sm_m = {
                  proto: Ze,
                  fields: { results: { n: 1, c: vt, r: !0, q: !0 } },
                }),
              Ze.sm_m
            );
          }
          static MBF() {
            return Ze.sm_mbf || (Ze.sm_mbf = t.w0(Ze.M())), Ze.sm_mbf;
          }
          toObject(e = !1) {
            return Ze.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Ze.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Ze.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Ze();
            return Ze.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Ze.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Ze.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_Search_Response";
          }
        };
        c(ds, "sm_m"), c(ds, "sm_mbf");
        let Hs = ds;
        class fr extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return fr.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new fr();
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new fr();
            return fr.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSteamTVUserSettings_Request";
          }
        }
        const us = class et extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              et.prototype.stream_live_email || t.Sg(et.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    stream_live_email: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    stream_live_notification: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = t.w0(et.M())), et.sm_mbf;
          }
          toObject(e = !1) {
            return et.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(et.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(et.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new et();
            return et.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(et.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(et.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetSteamTVUserSettings_Response";
          }
        };
        c(us, "sm_m"), c(us, "sm_mbf");
        let ks = us;
        const hs = class tt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              tt.prototype.stream_live_email || t.Sg(tt.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
                  fields: {
                    stream_live_email: {
                      n: 1,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    stream_live_notification: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = t.w0(tt.M())), tt.sm_mbf;
          }
          toObject(e = !1) {
            return tt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(tt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(tt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new tt();
            return tt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(tt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(tt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetSteamTVUserSettings_Request";
          }
        };
        c(hs, "sm_m"), c(hs, "sm_mbf");
        let Ks = hs;
        class br extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return br.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new br();
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new br();
            return br.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return br.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_SetSteamTVUserSettings_Response";
          }
        }
        class Sr extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Sr.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new Sr();
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Sr();
            return Sr.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Sr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Sr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetMyBroadcastChannels_Request";
          }
        }
        const gs = class rt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              rt.prototype.results || t.Sg(rt.M()),
              m.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
                  fields: { results: { n: 1, c: vt, r: !0, q: !0 } },
                }),
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = t.w0(rt.M())), rt.sm_mbf;
          }
          toObject(e = !1) {
            return rt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(rt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(rt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new rt();
            return rt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(rt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(rt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetMyBroadcastChannels_Response";
          }
        };
        c(gs, "sm_m"), c(gs, "sm_mbf");
        let Xs = gs;
        const ps = class st extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              st.prototype.broadcasts || t.Sg(st.M()),
              m.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: { broadcasts: { n: 1, c: vt, r: !0, q: !0 } },
                }),
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = t.w0(st.M())), st.sm_mbf;
          }
          toObject(e = !1) {
            return st.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(st.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(st.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new st();
            return st.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(st.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return st.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(st.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Takeover";
          }
        };
        c(ps, "sm_m"), c(ps, "sm_mbf");
        let Js = ps;
        const Bs = class it extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              it.prototype.broadcasts || t.Sg(it.M()),
              m.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
                  fields: {
                    broadcasts: { n: 1, c: vt, r: !0, q: !0 },
                    appid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    title: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              it.sm_m
            );
          }
          static MBF() {
            return it.sm_mbf || (it.sm_mbf = t.w0(it.M())), it.sm_mbf;
          }
          toObject(e = !1) {
            return it.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(it.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(it.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new it();
            return it.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(it.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(it.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_SingleGame";
          }
        };
        c(Bs, "sm_m"), c(Bs, "sm_mbf");
        let $s = Bs;
        const fs = class at extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              at.prototype.appid || t.Sg(at.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: {
                    appid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    game_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast: { n: 3, c: vt },
                  },
                }),
              at.sm_m
            );
          }
          static MBF() {
            return at.sm_mbf || (at.sm_mbf = t.w0(at.M())), at.sm_mbf;
          }
          toObject(e = !1) {
            return at.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(at.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(at.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new at();
            return at.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(at.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return at.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(at.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "GameListEntry";
          }
        };
        c(fs, "sm_m"), c(fs, "sm_mbf");
        let Ys = fs;
        const bs = class nt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              nt.prototype.entries || t.Sg(nt.M()),
              m.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: {
                    entries: { n: 1, c: Ys, r: !0, q: !0 },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              nt.sm_m
            );
          }
          static MBF() {
            return nt.sm_mbf || (nt.sm_mbf = t.w0(nt.M())), nt.sm_mbf;
          }
          toObject(e = !1) {
            return nt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(nt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(nt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new nt();
            return nt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(nt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(nt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_GameList";
          }
        };
        c(bs, "sm_m"), c(bs, "sm_mbf");
        let Qs = bs;
        const Ss = class ot extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ot.prototype.broadcasts || t.Sg(ot.M()),
              m.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = {
                  proto: ot,
                  fields: {
                    broadcasts: { n: 1, c: vt, r: !0, q: !0 },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              ot.sm_m
            );
          }
          static MBF() {
            return ot.sm_mbf || (ot.sm_mbf = t.w0(ot.M())), ot.sm_mbf;
          }
          toObject(e = !1) {
            return ot.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ot.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ot.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ot();
            return ot.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ot.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ot.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_QuickExplore";
          }
        };
        c(Ss, "sm_m"), c(Ss, "sm_mbf");
        let Zs = Ss;
        const Ms = class lt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              lt.prototype.broadcasts || t.Sg(lt.M()),
              m.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
                  fields: {
                    broadcasts: { n: 1, c: vt, r: !0, q: !0 },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              lt.sm_m
            );
          }
          static MBF() {
            return lt.sm_mbf || (lt.sm_mbf = t.w0(lt.M())), lt.sm_mbf;
          }
          toObject(e = !1) {
            return lt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(lt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(lt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new lt();
            return lt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(lt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(lt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_ConveyorBelt";
          }
        };
        c(Ms, "sm_m"), c(Ms, "sm_mbf");
        let ei = Ms;
        const ws = class mt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              mt.prototype.broadcast || t.Sg(mt.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              mt.sm_m ||
                (mt.sm_m = {
                  proto: mt,
                  fields: {
                    broadcast: { n: 1, c: vt },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    chat_group_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              mt.sm_m
            );
          }
          static MBF() {
            return mt.sm_mbf || (mt.sm_mbf = t.w0(mt.M())), mt.sm_mbf;
          }
          toObject(e = !1) {
            return mt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(mt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(mt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new mt();
            return mt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(mt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(mt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_WatchParty";
          }
        };
        c(ws, "sm_m"), c(ws, "sm_mbf");
        let ti = ws;
        const ys = class ct extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ct.prototype.broadcast || t.Sg(ct.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
                  fields: {
                    broadcast: { n: 1, c: vt },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = t.w0(ct.M())), ct.sm_mbf;
          }
          toObject(e = !1) {
            return ct.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ct.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ct.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ct();
            return ct.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ct.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ct.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Developer";
          }
        };
        c(ys, "sm_m"), c(ys, "sm_mbf");
        let ri = ys;
        const Cs = class dt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              dt.prototype.title || t.Sg(dt.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
                  fields: {
                    title: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              dt.sm_m
            );
          }
          static MBF() {
            return dt.sm_mbf || (dt.sm_mbf = t.w0(dt.M())), dt.sm_mbf;
          }
          toObject(e = !1) {
            return dt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(dt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(dt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new dt();
            return dt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(dt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(dt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageTemplate_Event";
          }
        };
        c(Cs, "sm_m"), c(Cs, "sm_mbf");
        let si = Cs;
        const vs = class ut extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ut.prototype.template_type || t.Sg(ut.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ut.sm_m ||
                (ut.sm_m = {
                  proto: ut,
                  fields: {
                    template_type: {
                      n: 1,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    takeover: { n: 2, c: Js },
                    single_game: { n: 3, c: $s },
                    game_list: { n: 4, c: Qs },
                    quick_explore: { n: 5, c: Zs },
                    conveyor_belt: { n: 6, c: ei },
                    watch_party: { n: 7, c: ti },
                    developer: { n: 8, c: ri },
                    event: { n: 9, c: si },
                  },
                }),
              ut.sm_m
            );
          }
          static MBF() {
            return ut.sm_mbf || (ut.sm_mbf = t.w0(ut.M())), ut.sm_mbf;
          }
          toObject(e = !1) {
            return ut.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ut.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ut.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ut();
            return ut.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ut.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ut.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_HomePageContentRow";
          }
        };
        c(vs, "sm_m"), c(vs, "sm_mbf");
        let ii = vs;
        class Mr extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Mr.toObject(e, this);
          }
          static toObject(e, r) {
            return e ? { $jspbMessageInstance: r } : {};
          }
          static fromObject(e) {
            return new Mr();
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Mr();
            return Mr.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return e;
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Mr.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {}
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Mr.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetHomePageContents_Request";
          }
        }
        const Ts = class ht extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ht.prototype.rows || t.Sg(ht.M()),
              m.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              ht.sm_m ||
                (ht.sm_m = {
                  proto: ht,
                  fields: { rows: { n: 1, c: ii, r: !0, q: !0 } },
                }),
              ht.sm_m
            );
          }
          static MBF() {
            return ht.sm_mbf || (ht.sm_mbf = t.w0(ht.M())), ht.sm_mbf;
          }
          toObject(e = !1) {
            return ht.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ht.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ht.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ht();
            return ht.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ht.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ht.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetHomePageContents_Response";
          }
        };
        c(Ts, "sm_m"), c(Ts, "sm_mbf");
        let ai = Ts;
        const Rs = class gt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              gt.prototype.broadcast_channel_id || t.Sg(gt.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = {
                  proto: gt,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              gt.sm_m
            );
          }
          static MBF() {
            return gt.sm_mbf || (gt.sm_mbf = t.w0(gt.M())), gt.sm_mbf;
          }
          toObject(e = !1) {
            return gt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(gt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(gt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new gt();
            return gt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(gt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(gt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelClips_Request";
          }
        };
        c(Rs, "sm_m"), c(Rs, "sm_mbf");
        let ni = Rs;
        const zs = class pt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              pt.prototype.broadcast_clip_id || t.Sg(pt.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              pt.sm_m ||
                (pt.sm_m = {
                  proto: pt,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    channel_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    app_id: { n: 3, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    broadcaster_steamid: {
                      n: 4,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    creator_steamid: {
                      n: 5,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    video_description: {
                      n: 6,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    live_time: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    length_ms: {
                      n: 8,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    thumbnail_path: {
                      n: 9,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              pt.sm_m
            );
          }
          static MBF() {
            return pt.sm_mbf || (pt.sm_mbf = t.w0(pt.M())), pt.sm_mbf;
          }
          toObject(e = !1) {
            return pt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(pt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(pt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new pt();
            return pt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(pt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(pt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_BroadcastClipInfo";
          }
        };
        c(zs, "sm_m"), c(zs, "sm_mbf");
        let oi = zs;
        const Is = class Bt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Bt.prototype.clips || t.Sg(Bt.M()),
              m.Message.initialize(this, e, 0, -1, [1], null);
          }
          static M() {
            return (
              Bt.sm_m ||
                (Bt.sm_m = {
                  proto: Bt,
                  fields: {
                    clips: { n: 1, c: oi, r: !0, q: !0 },
                    thumbnail_host: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Bt.sm_m
            );
          }
          static MBF() {
            return Bt.sm_mbf || (Bt.sm_mbf = t.w0(Bt.M())), Bt.sm_mbf;
          }
          toObject(e = !1) {
            return Bt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(Bt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(Bt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new Bt();
            return Bt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(Bt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return Bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(Bt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              Bt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_GetBroadcastChannelClips_Response";
          }
        };
        c(Is, "sm_m"), c(Is, "sm_mbf");
        let li = Is;
        const js = class ft extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ft.prototype.cheer_type || t.Sg(ft.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              ft.sm_m ||
                (ft.sm_m = {
                  proto: ft,
                  fields: {
                    cheer_type: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    cheer_amount: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              ft.sm_m
            );
          }
          static MBF() {
            return ft.sm_mbf || (ft.sm_mbf = t.w0(ft.M())), ft.sm_mbf;
          }
          toObject(e = !1) {
            return ft.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(ft.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(ft.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new ft();
            return ft.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(ft.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return ft.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(ft.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_SingleCheerType";
          }
        };
        c(js, "sm_m"), c(js, "sm_mbf");
        let mi = js;
        const _s = class bt extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              bt.prototype.app_id || t.Sg(bt.M()),
              m.Message.initialize(this, e, 0, -1, [3], null);
          }
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
                  fields: {
                    app_id: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    cheer_target_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    cheers: { n: 3, c: mi, r: !0, q: !0 },
                  },
                }),
              bt.sm_m
            );
          }
          static MBF() {
            return bt.sm_mbf || (bt.sm_mbf = t.w0(bt.M())), bt.sm_mbf;
          }
          toObject(e = !1) {
            return bt.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(bt.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(bt.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new bt();
            return bt.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(bt.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(bt.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_Request";
          }
        };
        c(_s, "sm_m"), c(_s, "sm_mbf");
        let ci = _s;
        const xs = class St extends m.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              St.prototype.aggregation_delay_ms || t.Sg(St.M()),
              m.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static M() {
            return (
              St.sm_m ||
                (St.sm_m = {
                  proto: St,
                  fields: {
                    aggregation_delay_ms: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              St.sm_m
            );
          }
          static MBF() {
            return St.sm_mbf || (St.sm_mbf = t.w0(St.M())), St.sm_mbf;
          }
          toObject(e = !1) {
            return St.toObject(e, this);
          }
          static toObject(e, r) {
            return t.BT(St.M(), e, r);
          }
          static fromObject(e) {
            return t.Uq(St.M(), e);
          }
          static deserializeBinary(e) {
            let r = new (n().BinaryReader)(e),
              o = new St();
            return St.deserializeBinaryFromReader(o, r);
          }
          static deserializeBinaryFromReader(e, r) {
            return t.zj(St.MBF(), e, r);
          }
          serializeBinary() {
            var e = new (n().BinaryWriter)();
            return St.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, r) {
            t.i0(St.M(), e, r);
          }
          serializeBase64String() {
            var e = new (n().BinaryWriter)();
            return (
              St.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamTV_AppCheer_Response";
          }
        };
        c(xs, "sm_m"), c(xs, "sm_mbf");
        let di = xs;
        var $r;
        ((I) => {
          function e(y, C, v) {
            return y.SendMsg(
              "SteamTV.CreateBroadcastChannel#1",
              (0, j.I8)(z, C, v),
              b,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          I.CreateBroadcastChannel = e;
          function r(y, C, v) {
            return y.SendMsg(
              "SteamTV.GetBroadcastChannelID#1",
              (0, j.I8)(T, C, v),
              J,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          I.GetBroadcastChannelID = r;
          function o(y, C, v) {
            return y.SendMsg(
              "SteamTV.SetBroadcastChannelProfile#1",
              (0, j.I8)(wr, C, v),
              It,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          I.SetBroadcastChannelProfile = o;
          function w(y, C, v) {
            return y.SendMsg(
              "SteamTV.GetBroadcastChannelProfile#1",
              (0, j.I8)(kt, C, v),
              zr,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          I.GetBroadcastChannelProfile = w;
          function q(y, C, v) {
            return y.SendMsg(
              "SteamTV.SetBroadcastChannelImage#1",
              (0, j.I8)(Gr, C, v),
              te,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          I.SetBroadcastChannelImage = q;
          function At(y, C, v) {
            return y.SendMsg(
              "SteamTV.GetBroadcastChannelImages#1",
              (0, j.I8)(jt, C, v),
              Vr,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          I.GetBroadcastChannelImages = At;
          function ur(y, C, v) {
            return y.SendMsg(
              "SteamTV.SetBroadcastChannelLinkRegions#1",
              (0, j.I8)(E, C, v),
              Pt,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          I.SetBroadcastChannelLinkRegions = ur;
          function Xt(y, C, v) {
            return y.SendMsg(
              "SteamTV.GetBroadcastChannelLinks#1",
              (0, j.I8)(jr, C, v),
              S,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          I.GetBroadcastChannelLinks = Xt;
          function qt(y, C, v) {
            return y.SendMsg(
              "SteamTV.GetBroadcastChannelBroadcasters#1",
              (0, j.I8)(a, C, v),
              d,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          I.GetBroadcastChannelBroadcasters = qt;
          function fi(y, C, v) {
            return y.SendMsg(
              "SteamTV.GetFollowedChannels#1",
              (0, j.I8)($t, C, v),
              ts,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          I.GetFollowedChannels = fi;
          function bi(y, C, v) {
            return y.SendMsg(
              "SteamTV.GetSubscribedChannels#1",
              (0, j.I8)(K, C, v),
              Br,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          I.GetSubscribedChannels = bi;
          function Si(y, C, v) {
            return y.SendMsg(
              "SteamTV.GetBroadcastChannelStatus#1",
              (0, j.I8)(Nr, C, v),
              Et,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          I.GetBroadcastChannelStatus = Si;
          function Mi(y, C, v) {
            return y.SendMsg(
              "SteamTV.FollowBroadcastChannel#1",
              (0, j.I8)(ar, C, v),
              rs,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          I.FollowBroadcastChannel = Mi;
          function wi(y, C, v) {
            return y.SendMsg(
              "SteamTV.SubscribeBroadcastChannel#1",
              (0, j.I8)(ss, C, v),
              x,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          I.SubscribeBroadcastChannel = wi;
          function yi(y, C, v) {
            return y.SendMsg(
              "SteamTV.GetBroadcastChannelClips#1",
              (0, j.I8)(ni, C, v),
              li,
              { bConstMethod: !0, ePrivilege: 0 },
            );
          }
          I.GetBroadcastChannelClips = yi;
          function Ci(y, C, v) {
            return y.SendMsg(
              "SteamTV.ReportBroadcastChannel#1",
              (0, j.I8)(Qr, C, v),
              Vt,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          I.ReportBroadcastChannel = Ci;
          function vi(y, C, v) {
            return y.SendMsg(
              "SteamTV.GetBroadcastChannelInteraction#1",
              (0, j.I8)(Er, C, v),
              Hr,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          I.GetBroadcastChannelInteraction = vi;
          function Ti(y, C, v) {
            return y.SendMsg("SteamTV.GetGames#1", (0, j.I8)(yr, C, v), is, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          I.GetGames = Ti;
          function Ri(y, C, v) {
            return y.SendMsg("SteamTV.GetChannels#1", (0, j.I8)(Fr, C, v), er, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          I.GetChannels = Ri;
          function zi(y, C, v) {
            return y.SendMsg("SteamTV.AddChatBan#1", (0, j.I8)(Mt, C, v), H, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
              rgBrowserAPISites: ["store", "community"],
            });
          }
          I.AddChatBan = zi;
          function Ii(y, C, v) {
            return y.SendMsg("SteamTV.GetChatBans#1", (0, j.I8)(or, C, v), tr, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          I.GetChatBans = Ii;
          function ji(y, C, v) {
            return y.SendMsg(
              "SteamTV.AddChatModerator#1",
              (0, j.I8)(Kr, C, v),
              Yt,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["store", "community"],
              },
            );
          }
          I.AddChatModerator = ji;
          function _i(y, C, v) {
            return y.SendMsg(
              "SteamTV.GetChatModerators#1",
              (0, j.I8)(Zr, C, v),
              Jr,
              {
                bConstMethod: !0,
                ePrivilege: 0,
                rgBrowserAPISites: ["store", "community"],
              },
            );
          }
          I.GetChatModerators = _i;
          function xi(y, C, v) {
            return y.SendMsg("SteamTV.AddWordBan#1", (0, j.I8)(es, C, v), mr, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          I.AddWordBan = xi;
          function Oi(y, C, v) {
            return y.SendMsg("SteamTV.GetWordBans#1", (0, j.I8)(As, C, v), qs, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          I.GetWordBans = Oi;
          function Fi(y, C, v) {
            return y.SendMsg("SteamTV.JoinChat#1", (0, j.I8)(Ds, C, v), Es, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
              rgBrowserAPISites: ["store", "community"],
            });
          }
          I.JoinChat = Fi;
          function Wi(y, C, v) {
            return y.SendMsg("SteamTV.Search#1", (0, j.I8)(Ls, C, v), Hs, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }
          I.Search = Wi;
          function Di(y, C, v) {
            return y.SendMsg(
              "SteamTV.GetSteamTVUserSettings#1",
              (0, j.I8)(fr, C, v),
              ks,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          I.GetSteamTVUserSettings = Di;
          function Pi(y, C, v) {
            return y.SendMsg(
              "SteamTV.SetSteamTVUserSettings#1",
              (0, j.I8)(Ks, C, v),
              br,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          I.SetSteamTVUserSettings = Pi;
          function Gi(y, C, v) {
            return y.SendMsg(
              "SteamTV.GetMyBroadcastChannels#1",
              (0, j.I8)(Sr, C, v),
              Xs,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          I.GetMyBroadcastChannels = Gi;
          function Vi(y, C, v) {
            return y.SendMsg(
              "SteamTV.GetHomePageContents#1",
              (0, j.I8)(Mr, C, v),
              ai,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          I.GetHomePageContents = Vi;
          function Ui(y, C, v) {
            return y.SendMsg("SteamTV.AppCheer#1", (0, j.I8)(ci, C, v), di, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }
          I.AppCheer = Ui;
        })($r || ($r = {}));
        var Os = h(27066),
          Ps = h(8323),
          xt = h(18210),
          rr = h(3166),
          Gs = h(24544),
          Vs = Object.defineProperty,
          ui = Object.getOwnPropertyDescriptor,
          hi = (I, e, r) =>
            e in I
              ? Vs(I, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: r,
                })
              : (I[e] = r),
          cr = (I, e, r, o) => {
            for (
              var w = o > 1 ? void 0 : o ? ui(e, r) : e, q = I.length - 1, At;
              q >= 0;
              q--
            )
              (At = I[q]) && (w = (o ? At(e, r, w) : At(w)) || w);
            return o && w && Vs(e, r, w), w;
          },
          L = (I, e, r) => hi(I, typeof e != "symbol" ? e + "" : e, r);
        const gi = 4,
          pi = 500,
          Bi = 10,
          Fs = class Yr {
            constructor() {
              L(this, "m_mapChats", new Map()),
                L(this, "m_cmInterface"),
                (0, F.Gn)(this);
            }
            SetCMInterface(e) {
              this.m_cmInterface = e;
            }
            GetCMInterface() {
              return this.m_cmInterface;
            }
            GetChat(e, r) {
              return this.m_mapChats.get(e) || this.m_mapChats.get(r);
            }
            GetOrCreateChat(e, r) {
              let o = this.GetChat(e, r);
              return o || ((o = new dr()), this.m_mapChats.set(e || r, o)), o;
            }
            static Get() {
              return (
                Yr.s_Singleton || (Yr.s_Singleton = new Yr()), Yr.s_Singleton
              );
            }
          };
        L(Fs, "s_Singleton"), cr([F.sH], Fs.prototype, "m_mapChats", 2);
        let Us = Fs;
        class dr {
          constructor() {
            L(this, "m_ulBroadcastChannelID", ""),
              L(this, "m_ulChatID", ""),
              L(this, "m_strFlairGroupID", ""),
              L(this, "m_bAutoScroll", !0),
              L(this, "m_ulBroadcastID", ""),
              L(this, "m_ulBroadcastSteamID", ""),
              L(this, "m_tsFirstRequest", null),
              L(this, "m_nFromFirstRequestMS", 0),
              L(this, "m_nNextChatTS", 0),
              L(this, "m_cConsecutiveErrors", 0),
              L(this, "m_nNudgeFactorMS", 0),
              L(this, "m_nLastSleepMS", 0),
              L(this, "m_bReconnecting", !1),
              L(this, "m_strChatURL"),
              L(this, "m_unInstanceID", Math.floor(Math.random() * 4294967296)),
              L(this, "m_strUserSteamID", ""),
              L(this, "m_regexUserEmoticons", null),
              L(this, "m_chatScheduledFunc", null),
              L(this, "m_steamInterface", null),
              L(this, "m_textFilterStore", null),
              L(this, "m_bHasAddedWelcomeChat", !1),
              L(this, "m_mapMutedUsers", {}),
              L(this, "m_mapChannelModeratorUsers", new Map()),
              L(this, "m_mapBroadcastModeratorUsers", new Map()),
              L(this, "m_nRateLimitSeconds", 0),
              L(this, "m_bRateLimited", !1),
              L(this, "m_rgChatMessages", []),
              L(this, "m_rgAnnouncements", []),
              L(this, "m_latestAnnouncement", null),
              (0, F.Gn)(this),
              (this.m_steamInterface = this.CreateSteamInterface());
          }
          InitTextFilter() {
            this.m_textFilterStore = new Gs.s({ BIsFriend: (0, Gs.Q)() });
            let e = 0;
            rr.iA.steamid !== "" && (e = new k.b(rr.iA.steamid).GetAccountID()),
              this.m_textFilterStore.Init(e, null, new Rt.A());
          }
          get TextFilterStore() {
            return this.m_textFilterStore;
          }
          GetBroadcastSteamID() {
            return this.m_ulBroadcastSteamID;
          }
          GetUserSteamID() {
            return this.m_strUserSteamID;
          }
          CreateSteamInterface() {
            var e;
            const r = (e = (0, M.q)()) != null ? e : Us.Get().GetCMInterface();
            return (
              r || (0, Ht.C)(new V.D(rr.TS.WEBAPI_BASE_URL, rr.iA.webapi_token))
            );
          }
          StartForSteamID(e, r) {
            (this.m_steamInterface = this.CreateSteamInterface()),
              (this.m_ulBroadcastSteamID = e),
              (this.m_ulBroadcastID = r),
              this.InitTextFilter(),
              this.RequestChatInfo();
          }
          StartForChannel(e) {
            (this.m_steamInterface = this.CreateSteamInterface()),
              (this.m_ulBroadcastChannelID = e),
              (this.m_strUserSteamID = rr.iA.steamid),
              this.InitTextFilter(),
              this.JoinChannelChat();
          }
          Stop() {
            this.m_chatScheduledFunc && this.m_chatScheduledFunc.Cancel();
          }
          async SendMessage(e) {
            const r = e.trim();
            if (r.length != 0)
              try {
                const o = j.w.Init(U.Lw);
                o.SetBodyFields({
                  chat_id: this.m_ulChatID,
                  message: r,
                  instance_id: this.m_unInstanceID.toString(),
                });
                const w = await U.DK.PostChatMessage(
                    this.m_steamInterface.GetServiceTransport(),
                    o,
                  ),
                  q = {
                    result: w.GetEResult(),
                    cooldown_time_seconds: w.Body().cooldown_time_seconds(),
                    in_game: w.Body().in_game(),
                    persona_name: w.Body().persona_name(),
                  };
                if (q && q.result && q.result != ee.R) {
                  let At = "";
                  q.result == ee.f4
                    ? (At = (0, xt.we)("#BroadcastChat_YouMuted"))
                    : q.result == ee.h_
                      ? (At = (0, xt.we)(
                          "#BroadcastChat_Cooldown",
                          q.cooldown_time_seconds,
                        ))
                      : (At = (0, xt.we)("#BroadcastChat_FailedToSendMsg", r)),
                    this.m_rgChatMessages.push({
                      type: R.X8.Error,
                      msg: At,
                      client_ts: Number(new Date()),
                      instance_id: this.m_unInstanceID,
                      in_game: q.in_game,
                      persona_name: q.persona_name,
                      steamid: "",
                    });
                  return;
                }
                this.m_nRateLimitSeconds ||
                  (this.m_nRateLimitSeconds = q.cooldown_time_seconds),
                  this.m_nRateLimitSeconds &&
                    ((this.m_bRateLimited = !0),
                    setTimeout(
                      () => (this.m_bRateLimited = !1),
                      this.m_nRateLimitSeconds * 1e3,
                    ));
              } catch {
                this.m_rgChatMessages.push({
                  type: R.X8.Error,
                  msg: (0, xt.we)("#BroadcastChat_FailedToSendMsg", r),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
          }
          async RequestChatInfo(e) {
            (this.m_cConsecutiveErrors = 0), (this.m_bReconnecting = !1);
            try {
              const r = {
                  steamid: this.m_ulBroadcastSteamID,
                  broadcastid: this.m_ulBroadcastID,
                  sessionid: (0, rr.KC)(),
                  notoken: 1,
                },
                o = await X().get(
                  `${rr.TS.CHAT_BASE_URL}broadcast/getchatinfo`,
                  {
                    params: r,
                    withCredentials: !0,
                    cancelToken: e == null ? void 0 : e.token,
                  },
                );
              (!e || !e.token.reason) &&
                (0, F.h5)(() => {
                  const w = o.data;
                  (this.m_strChatURL = w.view_url_template),
                    (this.m_ulChatID = w.chat_id),
                    (this.m_strFlairGroupID =
                      w.flair_group_ids && w.flair_group_ids[0]),
                    w.blocked && console.log("User is blocked from chat"),
                    w.steamid && (this.m_strUserSteamID = w.steamid),
                    w.emoticons && this.SetOwnedEmoticons(w.emoticons),
                    this.m_bHasAddedWelcomeChat ||
                      (this.m_rgChatMessages.push({
                        type: R.X8.Notification,
                        msg: (0, xt.we)("#BroadcastChat_DefaultMessage"),
                        client_ts: Number(new Date()),
                        instance_id: this.m_unInstanceID,
                        in_game: !1,
                        persona_name: "",
                        steamid: "",
                      }),
                      (this.m_bHasAddedWelcomeChat = !0)),
                    this.m_mapBroadcastModeratorUsers.clear(),
                    w.moderators_steamid &&
                      w.moderators_steamid.forEach((q) =>
                        this.m_mapBroadcastModeratorUsers.set(q, !0),
                      ),
                    (this.m_chatScheduledFunc = new Ps.LU()),
                    this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
                });
            } catch (r) {
              console.error(r), console.log("Failed to get chat info!");
            }
          }
          async JoinChannelChat() {
            try {
              const e = j.w.Init(Ds);
              e.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
              });
              let r = await $r.JoinChat(
                this.m_steamInterface.GetServiceTransport(),
                e,
              );
              if (!r.Body().chat_id || !r.Body().view_url_template) {
                console.log("Failed to join channel chat");
                return;
              }
              (this.m_strChatURL = r.Body().view_url_template()),
                (this.m_ulChatID = r.Body().chat_id()),
                (this.m_strFlairGroupID =
                  r.Body().flair_group_ids() && r.Body().flair_group_ids()[0]),
                this.FetchChatModerators(),
                (this.m_rgChatMessages = []),
                this.m_rgChatMessages.push({
                  type: R.X8.Notification,
                  msg: (0, xt.we)("#BroadcastChat_DefaultMessage"),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                }),
                (this.m_bHasAddedWelcomeChat = !0),
                (this.m_chatScheduledFunc = new Ps.LU()),
                this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
            } catch (e) {
              console.error(e), console.log("Failed to join chat!");
            }
          }
          async FetchChatModerators() {
            const e = j.w.Init(Zr);
            e.SetBodyFields({
              broadcast_channel_id: this.m_ulBroadcastChannelID,
            });
            const o = (
                await $r.GetChatModerators(
                  this.m_steamInterface.GetServiceTransport(),
                  e,
                )
              )
                .Body()
                .results(),
              w = new Map();
            o.forEach((q) => {
              w.set(q.steamid(), !0);
            }),
              (this.m_mapChannelModeratorUsers = w);
          }
          ReplaceChatAnnouncementIfAny(e) {
            var r;
            ((r = e.announcements) == null ? void 0 : r.length) > 0
              ? ((this.m_rgAnnouncements = e.announcements.reverse()),
                (!this.m_latestAnnouncement ||
                  JSON.stringify(this.m_latestAnnouncement) !=
                    JSON.stringify(
                      this.m_rgAnnouncements[this.m_rgAnnouncements.length - 1],
                    )) &&
                  (this.m_latestAnnouncement =
                    this.m_rgAnnouncements[this.m_rgAnnouncements.length - 1]))
              : this.m_rgAnnouncements.length > 0 &&
                ((this.m_rgAnnouncements = []),
                (this.m_latestAnnouncement = null));
          }
          async RequestLoop() {
            const e = {},
              r = this.m_strChatURL.replace(
                "{0}",
                this.m_nNextChatTS.toString(),
              );
            r == this.m_strChatURL &&
              this.m_nNextChatTS > 0 &&
              (e.t = this.m_nNextChatTS);
            try {
              const w = (await X().get(r, { params: e })).data;
              this.m_cConsecutiveErrors = 0;
              const q = w.messages
                .map((Xt) => ({
                  ...Xt,
                  type: R.X8.Chat,
                  client_ts: Number(new Date()),
                }))
                .filter((Xt) => !this.IsUserMutedLocally(Xt.steamid));
              this.m_rgChatMessages.push(...q),
                this.ReplaceChatAnnouncementIfAny(w);
              const At = this.m_bAutoScroll ? 150 : 300;
              if (
                (this.m_rgChatMessages.length > At &&
                  this.m_rgChatMessages.splice(
                    0,
                    this.m_rgChatMessages.length - At,
                  ),
                w.muted)
              )
                for (const Xt of w.muted) {
                  const qt =
                    Xt.muted == this.m_strUserSteamID
                      ? (0, xt.we)("#BroadcastChat_YouMuted", Xt.persona_name)
                      : (0, xt.we)("#BroadcastChat_UserMuted", Xt.persona_name);
                  this.m_rgChatMessages.push({
                    type: R.X8.Notification,
                    msg: qt,
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
                }
              if (w.remove_msgs)
                for (const Xt of w.remove_msgs)
                  this.RemoveUserMessagesLocal(Xt.steamid);
              let ur = 0;
              if (
                this.m_tsFirstRequest == null ||
                this.m_nNextChatTS == 0 ||
                w.initial_delay
              ) {
                if (w.initial_delay === "undefined") {
                  console.log(
                    "Need initial_delay to know when to request first chat message",
                  );
                  return;
                }
                (this.m_tsFirstRequest = performance.now() + w.initial_delay),
                  (this.m_nFromFirstRequestMS = 0),
                  (this.m_nNextChatTS = w.next_request),
                  (ur = w.initial_delay);
              } else {
                if (w.next_request < this.m_nNextChatTS) {
                  console.log("Next request in past");
                  return;
                }
                (this.m_nFromFirstRequestMS +=
                  w.next_request - this.m_nNextChatTS),
                  (this.m_nNextChatTS = w.next_request),
                  (ur =
                    this.m_tsFirstRequest +
                    this.m_nFromFirstRequestMS -
                    performance.now() +
                    this.m_nNudgeFactorMS);
              }
              this.m_bReconnecting && (this.m_bReconnecting = !1),
                (this.m_nLastSleepMS = ur),
                ur < 0 && (ur = 0),
                this.m_chatScheduledFunc.Schedule(ur, this.RequestLoop);
            } catch {
              if (
                (console.log(
                  "Failed to get chat messages. Previous sleep set to: " +
                    this.m_nLastSleepMS +
                    " firstReq: " +
                    this.m_tsFirstRequest +
                    " firstFromRequest: " +
                    this.m_nFromFirstRequestMS +
                    " nudge: " +
                    this.m_nNudgeFactorMS,
                ),
                this.m_cConsecutiveErrors++,
                (this.m_nNudgeFactorMS += Bi),
                this.m_cConsecutiveErrors >= gi)
              ) {
                if (this.m_tsFirstRequest == null) {
                  this.m_rgChatMessages.push({
                    type: R.X8.Error,
                    msg: (0, xt.we)("#BroadcastChat_UnableToJoinChat"),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
                  return;
                }
                (this.m_cConsecutiveErrors = 0),
                  (this.m_bReconnecting = !0),
                  this.SyncChat();
              }
              this.m_chatScheduledFunc.Schedule(pi, this.RequestLoop);
            }
          }
          GetUserEmoticons() {
            return this.m_regexUserEmoticons;
          }
          SetOwnedEmoticons(e) {
            let r = [];
            for (let w = 0; w < e.length; w++) {
              let q = e[w];
              q.length >= 2 && q[0] == ":"
                ? r.push(q.substr(1, q.length - 2))
                : r.push(q);
            }
            let o = ":(" + r.join("|") + "):";
            this.m_regexUserEmoticons = new RegExp(o, "g");
          }
          async UpdateBroadcastChatModerator(e, r, o) {
            {
              const w = new FormData();
              w.append("broadcaststeamid", this.m_ulBroadcastSteamID),
                w.append("moderatorsteamid", e),
                w.append("bAdd", r ? "1" : "0"),
                w.append("sessionid", (0, rr.KC)());
              try {
                await X().post(
                  `${rr.TS.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`,
                  w,
                ),
                  this.m_mapBroadcastModeratorUsers.set(e, r);
                const q = (0, xt.we)(
                  r
                    ? "#BroadcastChat_AddedModerator"
                    : "#BroadcastChat_RemovedModerator",
                  o,
                );
                this.m_rgChatMessages.push({ type: R.X8.Notification, msg: q });
              } catch {
                const q = (0, xt.we)(
                  r
                    ? "#BroadcastChat_AddModeratorFailed"
                    : "#BroadcastChat_RemoveModeratorFailed",
                  o,
                );
                this.m_rgChatMessages.push({ type: R.X8.Error, msg: q });
              }
            }
          }
          async UpdateUserChatBan(e, r, o, w, q, At) {
            const ur = this.m_ulBroadcastSteamID,
              Xt = this.m_strUserSteamID;
            if (this.m_ulBroadcastChannelID) {
              const qt = j.w.Init(Mt);
              qt.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
                chatter_steamid: e,
                duration: o * 3600,
                permanent: w,
                undo: At,
              }),
                await $r.AddChatBan(
                  this.m_steamInterface.GetServiceTransport(),
                  qt,
                );
            } else {
              const qt = new FormData();
              qt.append("broadcaststeamid", ur),
                qt.append("issuersteamid", Xt),
                qt.append("chattersteamid", e),
                qt.append("bantype", r),
                qt.append("duration", o.toString()),
                qt.append("perm", w ? "1" : "0"),
                qt.append("sessionid", (0, rr.KC)());
              try {
                await X().post(
                  `${rr.TS.CHAT_BASE_URL}broadcast/ajaxupdateusermute`,
                  qt,
                ),
                  r == U.sW.rx
                    ? delete this.m_mapMutedUsers[e]
                    : (this.m_mapMutedUsers[e] = q);
              } catch {
                console.log("Failed to update mute for " + q);
              }
            }
          }
          async MuteUserForSession(e, r) {
            if (e == this.m_strUserSteamID || this.m_ulBroadcastSteamID == e)
              return;
            let o = this.m_ulBroadcastSteamID == this.m_strUserSteamID;
            if (!this.m_mapMutedUsers[e]) {
              this.m_mapMutedUsers[e] = r;
              try {
                const w = j.w.Init(U.hW);
                w.SetBodyFields({
                  chat_id: this.m_ulChatID,
                  user_steamid: e,
                  muted: !0,
                }),
                  await U.DK.MuteBroadcastChatUser(
                    this.m_steamInterface.GetServiceTransport(),
                    w,
                  );
              } catch {
                o &&
                  (this.m_rgChatMessages.push({
                    type: R.X8.Error,
                    msg: (0, xt.we)("#BroadcastChat_UserMuteFailed", r),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  }),
                  delete this.m_mapMutedUsers[e]);
              }
            }
            o ||
              this.m_rgChatMessages.push({
                type: R.X8.Notification,
                msg: (0, xt.we)("#BroadcastChat_UserMutedLocal", r),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: "",
                steamid: "",
              });
          }
          async UnmuteUserForSession(e, r) {
            if (e == this.m_strUserSteamID) return;
            if (
              (this.m_mapMutedUsers[e] && delete this.m_mapMutedUsers[e],
              this.m_ulBroadcastSteamID == this.m_strUserSteamID)
            )
              try {
                const w = j.w.Init(U.hW);
                w.SetBodyFields({
                  chat_id: this.m_ulChatID,
                  user_steamid: e,
                  muted: !1,
                }),
                  await U.DK.MuteBroadcastChatUser(
                    this.m_steamInterface.GetServiceTransport(),
                    w,
                  ),
                  this.m_rgChatMessages.push({
                    type: R.X8.Notification,
                    msg: (0, xt.we)("#BroadcastChat_UserUnmutedLocal", r),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
              } catch {
                this.m_rgChatMessages.push({
                  type: R.X8.Error,
                  msg: (0, xt.we)("#BroadcastChat_UserUnmuteFailed", r),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
            else
              this.m_rgChatMessages.push({
                type: R.X8.Notification,
                msg: (0, xt.we)("#BroadcastChat_UserUnmutedLocal", r),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: "",
                steamid: "",
              });
          }
          RemoveUserMessagesLocal(e) {
            this.m_rgChatMessages = this.m_rgChatMessages.filter(
              (r) => r.steamid !== e,
            );
          }
          async RemoveUserMessagesServer(e, r) {
            if (e != this.m_strUserSteamID)
              try {
                const o = j.w.Init(U.ku);
                o.SetBodyFields({ chat_id: this.m_ulChatID, user_steamid: e }),
                  await U.DK.RemoveUserChatText(
                    this.m_steamInterface.GetServiceTransport(),
                    o,
                  );
              } catch {
                this.m_rgChatMessages.push({
                  type: R.X8.Error,
                  msg: (0, xt.we)("#BroadcastChat_RemoveMessagesFailed", r),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
          }
          async UpdateChatMessageFlair(e) {
            const r = j.w.Init(U.Mn);
            r.SetBodyFields({
              chat_id: this.m_ulChatID,
              flair: `^${this.m_strFlairGroupID}^:${e}:`,
            }),
              await U.DK.UpdateChatMessageFlair(
                this.m_steamInterface.GetServiceTransport(),
                r,
              );
          }
          IsUserMutedLocally(e) {
            return !!this.m_mapMutedUsers[e];
          }
          BIsUserBroadcastModerator(e) {
            return this.m_mapBroadcastModeratorUsers.has(e);
          }
          IsUserBroadcaster(e) {
            return e === this.m_ulBroadcastSteamID;
          }
          SyncChat() {
            (this.m_tsFirstRequest = null),
              (this.m_nFromFirstRequestMS = 0),
              (this.m_nNextChatTS = 0),
              (this.m_rgChatMessages = []);
          }
        }
        cr([F.sH], dr.prototype, "m_mapChannelModeratorUsers", 2),
          cr([F.sH], dr.prototype, "m_mapBroadcastModeratorUsers", 2),
          cr([F.sH], dr.prototype, "m_nRateLimitSeconds", 2),
          cr([F.sH], dr.prototype, "m_bRateLimited", 2),
          cr([F.sH], dr.prototype, "m_rgChatMessages", 2),
          cr([F.sH], dr.prototype, "m_latestAnnouncement", 2),
          cr([Os.o], dr.prototype, "FetchChatModerators", 1),
          cr([Os.o], dr.prototype, "RequestLoop", 1),
          cr([Os.o], dr.prototype, "MuteUserForSession", 1);
      },
      37656: (Nt, Jt, h) => {
        "use strict";
        h.d(Jt, { w: () => N });
        var i = h(41735),
          X = h.n(i),
          F = h(14947),
          R = h(65946),
          ee = h(90626),
          j = h(27066),
          Rt = h(8323),
          V = h(54963),
          Ht = h(3166),
          M = Object.defineProperty,
          k = Object.getOwnPropertyDescriptor,
          U = (z, g, b) =>
            g in z
              ? M(z, g, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: b,
                })
              : (z[g] = b),
          m = (z, g, b, O) => {
            for (
              var T = O > 1 ? void 0 : O ? k(g, b) : g, zt = z.length - 1, J;
              zt >= 0;
              zt--
            )
              (J = z[zt]) && (T = (O ? J(g, b, T) : J(T)) || T);
            return O && T && M(g, b, T), T;
          },
          n = (z, g, b) => U(z, typeof g != "symbol" ? g + "" : g, b);
        const t = class Ns {
          constructor() {
            n(this, "giveaway_id"),
              n(this, "seconds_until_drawing"),
              n(this, "rtime_start"),
              n(this, "rtime_end"),
              n(this, "closed"),
              n(this, "winner_count"),
              (0, F.Gn)(this);
          }
          BIsValid() {
            return this.giveaway_id !== void 0 && this.giveaway_id !== null;
          }
          BStarted() {
            return (
              this.BIsValid() &&
              (this.seconds_until_drawing >= 0 || this.winner_count > 0)
            );
          }
          clone() {
            const g = new Ns();
            return (
              (g.giveaway_id = this.giveaway_id),
              (g.seconds_until_drawing = this.seconds_until_drawing),
              (g.rtime_start = this.rtime_start),
              (g.rtime_end = this.rtime_end),
              (g.closed = this.closed),
              (g.winner_count = this.winner_count),
              g
            );
          }
        };
        m([F.sH], t.prototype, "giveaway_id", 2),
          m([F.sH], t.prototype, "seconds_until_drawing", 2),
          m([F.sH], t.prototype, "rtime_start", 2),
          m([F.sH], t.prototype, "rtime_end", 2),
          m([F.sH], t.prototype, "closed", 2),
          m([F.sH], t.prototype, "winner_count", 2);
        let Ot = t;
        const $ = class Pr {
          constructor() {
            n(this, "m_mapGiveawayIDToNextDrawInfo", new Map()),
              n(this, "m_mapGiveawayIDAndInstanceToNextDrawInfo", new Map()),
              n(this, "m_bLoadedFromConfig", !1),
              n(this, "m_mapNextDrawChangeCallback", new Map()),
              (0, F.Gn)(this);
          }
          GetKey(g, b) {
            return g + "_" + b;
          }
          GetInfoByInstance(g, b) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(g, b),
            );
          }
          GetNextDrawChangeCallback(g) {
            return (
              this.m_mapNextDrawChangeCallback.has(g) ||
                this.m_mapNextDrawChangeCallback.set(g, new Rt.lu()),
              this.m_mapNextDrawChangeCallback.get(g)
            );
          }
          CopyToGiveaway(g, b) {
            b.closed != g.closed && (b.closed = g.closed),
              b.giveaway_id != g.giveaway_id && (b.giveaway_id = g.giveaway_id),
              b.rtime_start != g.rtime_start && (b.rtime_start = g.rtime_start),
              b.rtime_end != g.rtime_end && (b.rtime_end = g.rtime_end),
              b.winner_count != g.winner_count &&
                (b.winner_count = g.winner_count),
              b.seconds_until_drawing != g.seconds_until_drawing &&
                (b.seconds_until_drawing = g.seconds_until_drawing);
          }
          async ReloadGiveaway(g, b) {
            if (!g) return null;
            let O = Ht.TS.STORE_BASE_URL + "prizes/nextdraw/" + g,
              T = null,
              zt = { origin: self.origin };
            return (
              (T = await X().get(O, { params: zt })),
              (0, F.h5)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(g) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(g, new Ot()),
                  this.CopyToGiveaway(
                    T.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(g),
                  ),
                  b !== void 0)
                ) {
                  const J = this.GetKey(g, b);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(J) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      J,
                      new Ot(),
                    ),
                    this.CopyToGiveaway(
                      T.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(J),
                    );
                }
              }),
              this.GetNextDrawChangeCallback(g).Dispatch(
                this.m_mapGiveawayIDToNextDrawInfo.get(g),
              ),
              this.m_mapGiveawayIDToNextDrawInfo.get(g)
            );
          }
          static Get() {
            return (
              Pr.s_Singleton ||
                ((Pr.s_Singleton = new Pr()), Pr.s_Singleton.Init()),
              Pr.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let g = (0, Ht.Tc)("giveawaynextdraw", "application_config");
              if (g && g.giveaway_id) {
                let b = new Ot();
                this.CopyToGiveaway(g, b),
                  this.m_mapGiveawayIDToNextDrawInfo.set(g.giveaway_id, b);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        n($, "s_Singleton"),
          m([F.sH], $.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          m([F.XI], $.prototype, "CopyToGiveaway", 1);
        let c = $;
        const Ct = class Ws {
          constructor() {
            n(this, "m_intervalID"),
              n(this, "m_intervalCountDownID"),
              n(this, "m_myInstanceNumber", 0),
              (this.m_myInstanceNumber = Ws.s_GlobalInstance),
              (Ws.s_GlobalInstance += 1);
          }
          ClearRefreshInterval() {
            this.m_intervalID &&
              (window.clearInterval(this.m_intervalID),
              (this.m_intervalID = void 0));
          }
          ClearCountDown() {
            this.m_intervalCountDownID &&
              (window.clearInterval(this.m_intervalCountDownID),
              (this.m_intervalCountDownID = void 0));
          }
          SetupRefreshDataInterval(g, b) {
            if ((this.ClearRefreshInterval(), !g.closed)) {
              let O =
                g.seconds_until_drawing <= 0 && g.winner_count == 0 ? 6e4 : 5e3;
              this.m_intervalID = window.setInterval(b, O);
            }
          }
          SetupCountDown(g, b) {
            g > 0 && (this.m_intervalCountDownID = window.setInterval(b, 1e3));
          }
        };
        n(Ct, "s_GlobalInstance", 0),
          m([j.o], Ct.prototype, "ClearRefreshInterval", 1),
          m([j.o], Ct.prototype, "ClearCountDown", 1),
          m([j.o], Ct.prototype, "SetupRefreshDataInterval", 1),
          m([j.o], Ct.prototype, "SetupCountDown", 1);
        let Ft = Ct;
        function Y(z, g) {
          const b = c.Get().GetInfoByInstance(z, g.m_myInstanceNumber);
          (b.seconds_until_drawing -= 1),
            b.seconds_until_drawing == 0 && g.ClearCountDown();
        }
        function Q(z, g) {
          const b = c.Get().GetInfoByInstance(z, g.m_myInstanceNumber);
          b &&
            b.BIsValid() &&
            b.seconds_until_drawing <= 0 &&
            !b.closed &&
            (g.ClearCountDown(),
            c
              .Get()
              .ReloadGiveaway(z, g.m_myInstanceNumber)
              .then((O) => {
                g.SetupCountDown(O.seconds_until_drawing, () => Y(z, g));
              }));
        }
        function N(z) {
          const [g] = (0, ee.useState)(new Ft()),
            b = (0, V.CH)();
          (0, ee.useEffect)(
            () => (
              c
                .Get()
                .ReloadGiveaway(z, g.m_myInstanceNumber)
                .then((Wt) => {
                  g.SetupRefreshDataInterval(Wt, () => Q(z, g)),
                    g.SetupCountDown(Wt.seconds_until_drawing, () => Y(z, g)),
                    b();
                }),
              () => {
                g.ClearRefreshInterval(), g.ClearCountDown();
              }
            ),
            [g, z, b],
          );
          const O = c.Get().GetInfoByInstance(z, g.m_myInstanceNumber),
            [T, zt, J] = (0, R.q3)(() => [
              O == null ? void 0 : O.winner_count,
              O == null ? void 0 : O.closed,
              O == null ? void 0 : O.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !O || O.giveaway_id == null || !O.BStarted() || T === void 0,
            winner_count: T,
            closed: zt,
            seconds_until_drawing: J,
          };
        }
      },
      86390: (Nt, Jt, h) => {
        "use strict";
        h.d(Jt, { vg: () => n });
        var i = h(7850),
          X = h(90626),
          F = h(88003),
          R = h(18210),
          ee = h(3166),
          j = h(87242),
          Rt = h(42780),
          V = h(94276),
          Ht = h(62179),
          M = h(77008),
          k = h(2801);
        function U($) {
          return (0, i.jsx)(F.x_, {
            onEscKeypress: $.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, i.jsx)(Ot, {
              redirectURL: $.redirectURL,
              guestOption: $.guestOption,
            }),
          });
        }
        function m($) {
          const { redirectURL: c = window.location.href } = $;
          return jsx(SimpleModal, {
            active: !0,
            children: jsx(U, { redirectURL: c }),
          });
        }
        function n() {
          (0, F.pg)(
            (0, i.jsx)(U, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            { strTitle: (0, R.we)("#Login_SignInTitle") },
          );
        }
        function t($, c) {
          ShowModalDialog(
            jsx(U, { ownerWin: window, redirectURL: $, guestOption: c }),
            window,
            { strTitle: Localize("#Login_SignInTitle") },
          );
        }
        function Ot($) {
          const { redirectURL: c, guestOption: Ct } = $,
            [Ft] = (0, X.useState)(
              new Ht.x(
                new M.D(ee.TS.WEBAPI_BASE_URL),
              ).GetAnonymousServiceTransport(),
            ),
            [Y, Q] = (0, X.useState)(!1),
            N = (z) => {
              z == j.wI.k_PrimaryDomainFail ? Q(!0) : window.location.assign(c);
            };
          return (0, i.jsx)("div", {
            children: Y
              ? (0, i.jsx)(Rt.Fn, {})
              : (0, i.jsx)(Rt.YN, {
                  autoFocus: !0,
                  transport: Ft,
                  platform: V.SS.tS,
                  onComplete: N,
                  redirectUrl: c,
                  theme: "modal",
                  children: Ct && (0, i.jsx)(Rt.Mk, { redirectURL: c }),
                }),
          });
        }
      },
      53120: (Nt) => {
        Nt.exports = {
          strStreamIconCapsuleArtHeight: "58px",
          strStreamIconScreenshotArtHeight: "58px",
          bordered_container: "_3zXpFCyX2IiaD-MNF5KJFf",
          WidePlayer: "_3zjvrmOCIh31clDHjpLE2a",
          store_chat_ctn: "_21N-VV6Gvjjc1FqzOMJQfi",
          item_drop_ctn: "ifxDfv8dAGa5u71nRT0CJ",
          BorderedContainerPromotion: "-b_1HPR-CqjjzrTnTG2fn",
          bordered_title: "WsfbqpkdutNGWu3V4uhn_",
          streamTitle: "XMkaslAYoJyTgLBY3WHVJ",
          bordered_subtitle: "_3tYeiJ6LHC_iVhqb9zqOMy",
          bordered_corner_container: "_3IBcNy1U-I38_F9BNw-VHE",
          bordered_corner_expanded: "ahz31bshwySKGB_tBKf14",
          bordered_corner_shrinked: "L8sFYvKOUztrhXdjxy7mp",
          broadcast_settings_icon: "_37ugZJhL-qCRkdeZBRju2h",
          side_panels: "T_zpRAGXggYgVaRyCSXDu",
          wrapper: "_1mH-vDK7JF0NBAdZfdzr1a",
          video_placeholder: "_1KU955BfHBkZdSvJncjc9V",
          embedded_player: "_12fBJU1kOnQCeKc9JFTGMX",
          NoChat: "_2QQm1StfkXOLXrBhLy_jYP",
          video_container: "_1gbNxru_N2ui-EXc2_zmRy",
          viewer_bar: "_2YgphHYykz192eH3FgalS4",
          viewer_links: "_2EQpO5nLkHNXFdPk0ZnoY2",
          chat_link: "_3a0zX_I8eGlU5CYF3lcQjs",
          settings_link: "_1ThkelBkPfoE80ibfGyyVB",
          external_link: "_1n1BMOyCVFA0y6ULd_laPH",
          viewer_count: "_1MrTWpNan4htXK4Kql6ms8",
          vod_title: "_2xKaMJn0nexa3MMJvN6yq-",
          stream_icon_and_viewer_container: "_2sbrGTttGmHbz8ZPsO1YuR",
          display_capsule_art: "SsORVFNW3KBOdsIxDVqcd",
          ViewerNum: "_1reMoMi3BZbMUs6jHW93f1",
          StreamCapsule: "biTh7mrlaSv_WSY2gFsCH",
          stream_icon_container: "_2zBOiujXasDdHPmFPW4O90",
          stream_icon_hide_on_hover: "qYFsGojW19eJQAuemyuHQ",
          stream_icon_show_on_hover: "_29z3Nu6SGTNFDwIw8Gdvuk",
          stream_icon: "_1LBYspkgF9X97b89kPRBFC",
          stream_icon_selected: "mSpzeNvpTqIiZHkJgHRw7",
          multistream: "_1DS-WZoUJyBitKOZoq7u3n",
          MultiStreamCtn: "_1K6j5rrGvLPb8aT2L7CBAA",
          scrollingstreams: "_3aYWlUqW6-SosI72nizpP4",
          clear_div: "_1oCVbTJqa4Av40NuPdztIv",
          NoSelect: "_3Zm9dcDmIQkcWVzEq0IB-E",
          broadcast_floating: "_2WNxa8Qii8HrG8e0th6oB8",
          PopOutVideoTitleBar: "_184SIP7TlwJaOjOVVxLBLS",
          PopOutVideoTitleText: "_28O6dX6-Xf37oViWRRhvjz",
          PopOutVideoCloseButton: "_3bIsS_eft2P6BaAUZdlqme",
          BroadcastPlayerContainer: "_3VvcXgvuoyH2OXPyzZXeVT",
          ChatContainer: "_3kqwu6KzpbMqW5fIlXMIKI",
          BroadcastAndChat: "_1aJ9yfIUd-oGDvpo5-BuBx",
          detail_chat_ctn: "IaFnsy98_mIwYox4zmFu2",
          ChatEntry: "Rs7EltAKuQWw9U0v2bKxp",
          Event: "_1A0NY-wvZmZAqMMiw9oTYR",
          container: "_2yiy6ghVhj3fkC4I01odHC",
          LeftPanelCtn: "_6O_psaoFJTLs30M_ePzZ7",
          RightPanelCtn: "yRHl2kJWdMGdwVN_70nrP",
          SidePanelBackground: "_2FYu31I46rjm0DVxq-ufK9",
          LeftPanel: "o6XqrPpvDrpRsE7SpW8qJ",
        };
      },
      63508: (Nt) => {
        Nt.exports = {
          BroadcastChat: "_3URK7gSLJV_b2M32URtdZ1",
          ChatEntry: "_3soy-wJhd4RZ8SNtC31AOz",
          ChatPanel: "_2ZCAIdTy8CoxNNL8KBGNM",
          ChatMessages: "_3M5L0Ioa2wfgEXvySi1hr6",
          EmoticonContainer: "_1wa4oT25nXzeGxGXYpgDwI",
          ChatSend: "_3JUnDuh4M77s4kfjpnkaYW",
          ChatBox: "_2qfgSP2OtiZ-r-oBJanIaJ",
          ChatControls: "_1TekO7c6uL1uezWI5iWEBG",
          MessageChat: "_22PB4rET-Rx8JtZs34nMkf",
          MessageName: "BJe6CMne992juEIk9iv-k",
          MessageContents: "PNYZaITw4xz8Xi60JGcBM",
          EmoticonsOnly: "gFjH8o1u6iAUuxxkUey3m",
          MessageNotification: "_3Xb4_FEsLWwa-ux6iYDjLZ",
          MessageError: "_8MzyWIQ6TwS_AnWj_m4rL",
          minHeightZero: "r7HLM4rGlw8BlvCfsQoMx",
          ChatLoginButton: "_2TAQo-af_j4l7zy9uy5p-l",
          RateLimitProgressBarContainer: "JPqUGxAKEhSxZR4Hr99D1",
          RateLimitProgressBar: "_1EcVKYO2FR6NiyJchLLbol",
          TimedProgressBarContainer: "_39xGjKkRIIE7HwloXCWT41",
          wrapper: "_2vz6RRjc3uhVClPT9KmsWO",
          pie: "_1k4dSfTb9MQQkhRmcTNjXs",
          spinner: "_3nRh57_ZMuIbHDg29qxFoy",
          rota: "_1xXh6121fD_MtzKqUoAKP8",
          filler: "_3EegkD4UmE1ZI1j7DOgAIe",
          fill: "_2tyuX1freBgl1ICX3yI2qG",
          mask: "_1V4KedCnQKPf-TNpoigdVe",
          SelectedUserNameCtn: "_3K4QXV1l7toIASzIn03a9w",
          SelectedUserName: "c907VNi3QBNJZYF7xxgUB",
          FlairContainer: "_166wpHbAcQPnZog52jPZLN",
          RoleFlairContainer: "_1QRJ2HWdG8P7m3J0-ATU4u",
          Description: "_105HH_vRwSwjIsvw_F-73M",
          LogInPrompt: "CsA8vCxom50xEpq0oyOHG",
          SignInButton: "_1dMwWQHXZbAAqaFBL4YyCP",
        };
      },
      8287: (Nt) => {
        Nt.exports = {
          GiveawayWinnerBox: "_3cv4lblvGYp_wrnLaNEVn0",
          GiveawayWinnerAnnounced: "oLk3wFE5C0ocSKj9h7UMR",
          WinnerFlash: "_29x--KnTUnv5WIHAtqtwID",
          GiveawayWinnerBoxRight: "_2ftrc0KIXzfdR16ghJYvPg",
          GiveawayWinnerText: "_1SY2g9O-qYNIpmXPLu4XKK",
          GiveawayWinnerCountdown: "_1eP67dgalghp9Y7VMqedDT",
          GiveawayWinnerBoxLeft: "N6Rk1L-HIjqiJV3iXqRGK",
          GiveawayWinnerArt: "_1sgypTHPFS1VzmPOCkP_pK",
          GiveawayWinnerQuestion: "_3mvdct5S8-AGn0JrsRW0Vo",
          InViewerBar: "_25VQ8K4B2BcYKAbkfDx6Z_",
          GiveawayRegisterButton: "eKSAvf7P4Na3LE-0FkJFY",
          GiveawayAlreadyRegistered: "_2AVNRKDYvludWnAzqwlRYA",
        };
      },
      15527: (Nt) => {
        Nt.exports = {
          BroadcastPlayerLite: "SAxf3Rqn792kM6c4U_vx5",
          BroadcastPlayerLiteVideo: "yCd0zjymzfw3HkVm-1YwX",
          BroadcastContext: "_3TnYLKMweBMIC69qFU6OJj",
          BroadcastPlaceholderImg: "_3hxn99MT14hFUCrUp6zbsf",
        };
      },
      33543: (Nt) => {
        Nt.exports = {
          narrowWidth: "500px",
          FriendsListInsetShadowCtn: "_1qeW35auMlJ5pJVNtBC-bF",
          FriendListInsetShadowTop: "_1osHa9KHOmdCDNrA232z4N",
          FriendListInsetShadowBottom: "_2OoTJwlWvzvAysWOOEQaXS",
        };
      },
    },
  ]);
})();
